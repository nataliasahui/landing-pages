/* Post-build: rewrite root-relative public-asset paths in out/ to include BASE_PATH.
 *
 * Next.js auto-prefixes /_next/ paths but leaves plain <img src="/logos/x.svg">
 * and similar refs in components alone. For sub-path hosting (GitHub Pages
 * project sites), those resolve at the host root and 404. This script walks
 * out/ and adds the prefix to HTML/CSS/JS asset references.
 *
 * Usage: BASE_PATH=/landing-pages node scripts/prefix-public-paths.js
 */
const fs = require("fs");
const path = require("path");

const BASE = process.env.BASE_PATH || "";
if (!BASE) {
  console.error("BASE_PATH env required, e.g. /landing-pages");
  process.exit(1);
}

const OUT = path.resolve("out");
if (!fs.existsSync(OUT)) {
  console.error("out/ not found — run `npm run build` first");
  process.exit(1);
}

// Public asset top-level entries to recognize. Built dynamically from public/.
const publicTop = fs.existsSync("public")
  ? fs.readdirSync("public").map((n) => n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  : [];
const publicAlt = publicTop.join("|");

const skip = (p) => p.startsWith(BASE + "/") || p.startsWith("/_next/") || p.startsWith("/api/");

function rewriteHtml(text) {
  text = text.replace(
    /(\b(?:src|href|poster|content)=")\/(?!\/|[a-z]+:|#)([^"]*)"/gi,
    (m, attr, rest) => (skip("/" + rest) ? m : `${attr}${BASE}/${rest}"`),
  );
  text = text.replace(
    /url\(\s*(['"]?)\/(?!\/|[a-z]+:)([^)'"]*)\1\s*\)/gi,
    (m, q, rest) => (skip("/" + rest) ? m : `url(${q}${BASE}/${rest}${q})`),
  );
  return text;
}

function rewriteJsLike(text) {
  if (!publicAlt) return text;
  const re = new RegExp(
    `(["\\'])(\\/(?:${publicAlt})(?:\\/[^"\\']*)?(?:\\.[a-z0-9]+)?(?:[?#][^"\\']*)?)\\1`,
    "gi",
  );
  return text.replace(re, (m, q, p) => (skip(p) ? m : `${q}${BASE}${p}${q}`));
}

let touched = 0;
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
      continue;
    }
    const ext = path.extname(entry.name).toLowerCase();
    if (![".html", ".js", ".css", ".json", ".txt"].includes(ext)) continue;
    const orig = fs.readFileSync(full, "utf8");
    let next = orig;
    if (ext === ".html") next = rewriteHtml(next);
    if (ext === ".css") next = rewriteHtml(next);
    next = rewriteJsLike(next);
    if (next !== orig) {
      fs.writeFileSync(full, next);
      touched++;
    }
  }
}

walk(OUT);
console.log(`Rewrote ${touched} file(s) with prefix "${BASE}"`);
