/* Inline a Next.js static-export HTML into a single self-contained file.
 * Usage: node inline-html.js <root> <input.html> <output.html>
 *   root        — base dir for resolving /-prefixed asset paths (e.g. share/)
 *   input.html  — exported HTML file to inline
 *   output.html — where to write the single-file result
 */
const fs = require("fs");
const path = require("path");

const ROOT = process.argv[2];
const HTML_PATH = process.argv[3];
const OUT_PATH = process.argv[4];

if (!ROOT || !HTML_PATH || !OUT_PATH) {
  console.error("usage: inline-html.js <root> <input.html> <output.html>");
  process.exit(1);
}

const MIME = {
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".css": "text/css",
  ".mp4": "video/mp4",
};

const missing = new Set();

function resolveAsset(urlPath) {
  const stripped = urlPath.replace(/[?#].*$/, "").replace(/^\//, "");
  return path.join(ROOT, decodeURIComponent(stripped));
}

function readBufferOrNull(urlPath) {
  const fp = resolveAsset(urlPath);
  if (!fs.existsSync(fp)) {
    missing.add(urlPath);
    return null;
  }
  return fs.readFileSync(fp);
}

function dataUri(urlPath) {
  const buf = readBufferOrNull(urlPath);
  if (!buf) return urlPath;
  const ext = path.extname(urlPath.replace(/[?#].*$/, "")).toLowerCase();
  const mime = MIME[ext] || "application/octet-stream";
  return `data:${mime};base64,${buf.toString("base64")}`;
}

function inlineCssUrls(cssText) {
  return cssText.replace(/url\(\s*(['"]?)(\/[^'")\s]+)\1\s*\)/g, (m, q, url) => {
    return `url(${dataUri(url)})`;
  });
}

let html = fs.readFileSync(HTML_PATH, "utf8");

// 1) <link rel="stylesheet" href="/_next/.../foo.css">  →  <style>...</style> with url()s inlined
html = html.replace(
  /<link\s+rel="stylesheet"\s+href="([^"]+)"[^>]*\/?>/g,
  (m, href) => {
    const buf = readBufferOrNull(href);
    if (!buf) return m;
    return `<style>${inlineCssUrls(buf.toString("utf8"))}</style>`;
  }
);

// 2) Remove preloads — assets are inlined now
html = html.replace(/<link\s+rel="preload"[^>]*\/?>/g, "");

// 3) Remove all <script>…</script> blocks (external chunks + inline runtime)
html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");

// 4) <img src="/foo.svg"> → src="data:..."
html = html.replace(
  /(<img\b[^>]*\bsrc=")(\/[^"]+)("[^>]*>)/g,
  (m, pre, src, post) => pre + dataUri(src) + post
);

// 5) <link rel="icon" href="/foo">  → data URI
html = html.replace(
  /(<link\s+rel="(?:icon|shortcut icon)"[^>]*\bhref=")(\/[^"]+)("[^>]*\/?>)/g,
  (m, pre, src, post) => pre + dataUri(src) + post
);

// 6) Inline url(/...) inside inline style="" attributes (mask-image etc.)
//    AND strip opacity:0 / translate transforms left behind by Framer Motion's
//    initial state (would normally be animated to visible by JS).
html = html.replace(/style="([^"]*)"/g, (m, body) => {
  let s = inlineCssUrls(body);
  s = s.replace(/(^|;)\s*opacity\s*:\s*0(?:\.0+)?\s*(?=;|$)/gi, "$1");
  s = s.replace(
    /(^|;)\s*transform\s*:\s*translate[XY]?\([^)]*\)\s*(?=;|$)/gi,
    "$1"
  );
  s = s.replace(/^;+|;+$/g, "").replace(/;+/g, ";").trim();
  return s ? `style="${s}"` : "";
});

fs.writeFileSync(OUT_PATH, html);

const sizeMB = (fs.statSync(OUT_PATH).size / 1024 / 1024).toFixed(2);
console.log(`✓ ${path.basename(OUT_PATH)} — ${sizeMB} MB`);
if (missing.size) {
  console.log("  ! missing assets (kept original paths):");
  for (const p of missing) console.log("    -", p);
}
