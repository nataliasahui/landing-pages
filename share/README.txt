Incode landing pages — for review
==================================

Three pages are included for design review:
  • Privacy Architecture  →  resources/privacy-architecture/index.html
  • Partner Program       →  partner-program/index.html
  • Integrations          →  integrations/index.html

The landing page (index.html) has links to all three.

How to view
-----------
Do NOT just double-click index.html — browsers block the absolute asset paths
(/_next/...) when opening directly from disk. Run a tiny local server from
this folder:

  Option 1 — Node:
    npx serve .
    → then open the URL it prints (usually http://localhost:3000)

  Option 2 — Python (built into macOS):
    python3 -m http.server 8000
    → then open http://localhost:8000

  Option 3 — VS Code "Live Server" extension:
    Right-click index.html → "Open with Live Server"

Notes
-----
• Animations work (privacy tabs, partner-ecosystem ticker, integrations grid,
  slide-up logos).
• Forms are non-functional in this static snapshot — no backend wired up.
• The dev team will work from the source repo (govfacematch). These files are
  for review only.
