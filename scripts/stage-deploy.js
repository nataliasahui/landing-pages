/* Stage a single-page deploy folder for GitHub Pages.
 * Usage: node stage-deploy.js <basePath> <pagePath> <stageDir>
 *   basePath  — the repo URL prefix (e.g. /incode-privacy-architecture)
 *   pagePath  — the source HTML inside out/ (e.g. resources/privacy-architecture)
 *   stageDir  — where to write the staged deploy folder
 *
 * The build must have been run with BASE_PATH=<basePath> already.
 * Copies the page's HTML to <stageDir>/index.html, copies the _next folder
 * and only the referenced assets, then post-processes the HTML/CSS so all
 * absolute "/" paths are prefixed with the basePath.
 */
const fs = require("fs");
const path = require("path");

const [basePath, pagePath, stageDir] = process.argv.slice(2);
if (!basePath || !pagePath || !stageDir) {
  console.error("usage: stage-deploy.js <basePath> <pagePath> <stageDir>");
  process.exit(1);
}

const OUT = path.resolve("out");

function copyDir(src, dst) {
  fs.mkdirSync(dst, { recursive: true });
  for (const e of fs.readdirSync(src, { withFileTypes: true })) {
    const s = path.join(src, e.name);
    const d = path.join(dst, e.name);
    if (e.isDirectory()) copyDir(s, d);
    else fs.copyFileSync(s, d);
  }
}

function rimraf(p) {
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
}

rimraf(stageDir);
fs.mkdirSync(stageDir, { recursive: true });

// 1) Page HTML → stage/index.html
fs.copyFileSync(path.join(OUT, pagePath, "index.html"), path.join(stageDir, "index.html"));

// 2) _next (full)
copyDir(path.join(OUT, "_next"), path.join(stageDir, "_next"));

// 2b) Public asset folders that may be referenced dynamically by JS chunks
for (const dir of ["logos", "icons"]) {
  const src = path.join(OUT, dir);
  if (fs.existsSync(src)) copyDir(src, path.join(stageDir, dir));
}

// 3) Find referenced public assets in the page HTML and copy them
const html = fs.readFileSync(path.join(stageDir, "index.html"), "utf8");
const refs = new Set();
const patterns = [
  /(?:src|href)="(\/[^"]+)"/g,
  /url\((\/[^)"']+)\)/g,
];
for (const re of patterns) {
  let m;
  while ((m = re.exec(html))) refs.add(m[1]);
}

const copied = [];
const missing = [];
for (const ref of refs) {
  // Skip page-route refs (ending with `/`) and _next bundle assets (handled above)
  if (ref.endsWith("/")) continue;
  // Strip the basePath prefix if present
  const stripped = ref.startsWith(basePath + "/")
    ? ref.slice(basePath.length)
    : ref;
  if (stripped.startsWith("/_next/")) continue;
  const cleanRel = stripped.replace(/^\//, "").replace(/[?#].*$/, "");
  if (!cleanRel) continue;
  const srcPath = path.join(OUT, decodeURIComponent(cleanRel));
  if (!fs.existsSync(srcPath) || fs.statSync(srcPath).isDirectory()) {
    missing.push(ref);
    continue;
  }
  const dst = path.join(stageDir, decodeURIComponent(cleanRel));
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.copyFileSync(srcPath, dst);
  copied.push(cleanRel);
}

// 4) Post-process: prefix any remaining root-relative paths with basePath
function prefixPaths(text) {
  // src/href attrs starting with "/" but not already starting with basePath
  text = text.replace(
    /(\b(?:src|href)=")\/(?!\/|[a-z]+:|#)([^"]*)"/gi,
    (m, attr, rest) => {
      if (`/${rest}`.startsWith(basePath + "/")) return m;
      return `${attr}${basePath}/${rest}"`;
    }
  );
  // url(/foo) → url(<basePath>/foo)
  text = text.replace(
    /url\(\s*(['"]?)\/(?!\/|[a-z]+:)([^)'"]*)\1\s*\)/gi,
    (m, q, rest) => {
      if (`/${rest}`.startsWith(basePath + "/")) return m;
      return `url(${q}${basePath}/${rest}${q})`;
    }
  );
  return text;
}

fs.writeFileSync(
  path.join(stageDir, "index.html"),
  prefixPaths(fs.readFileSync(path.join(stageDir, "index.html"), "utf8"))
);

// 5) Tiny README in the repo
fs.writeFileSync(
  path.join(stageDir, "README.md"),
  `# ${stageDir.split("/").pop()}\n\nStatic snapshot deployed via GitHub Pages.\n` +
    `Source repo: govfacematch (private).\n`
);

console.log(`✓ Staged at ${stageDir}`);
console.log(`  copied ${copied.length} assets:`);
for (const c of copied) console.log(`    - ${c}`);
if (missing.length) {
  console.log("  ! missing assets (skipped):");
  for (const m of missing) console.log("    -", m);
}
