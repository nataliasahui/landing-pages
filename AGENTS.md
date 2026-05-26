<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:design-system-rules -->
# Design system rules

Follow these when making any visual or styling change. Tokens come from `src/app/globals.css`; consult that file before introducing a new color/font/spacing value.

## Colors

**Always use Tailwind theme tokens.** Never hardcode hex values in components — if a color you need doesn't exist as a token, add it to `globals.css` first, then use the new token.

Approved palette (see `src/app/globals.css` for the source of truth):

- Brand blue: `text-blue`, `bg-blue`, `bg-blue-100` (#E5F0FF light fill), `bg-blue-200` (#CCE1FF for eyebrows), `bg-blue-500` (#0054FF accent), `bg-blue-600` (#0048E6 hover)
- Greys: `text-grey-on-white` (body on light bg), `text-grey-on-black` (body on dark bg), `bg-off-white`, `bg-grey-50`–`grey-600`
- Foundations: `text-foreground`, `text-background`, `text-black`, `text-white`, `border-border-light`, `border-border-dark`

Rules to fill in (replace placeholders with your specifics):

- [ ] Icon containers must use `bg-blue-100` with the icon color set to `text-blue`
- [ ] Section backgrounds: `bg-background` (default), `bg-off-white` (alternating), `bg-black` (dark sections — text must be `text-white` or `text-grey-on-black`)
- [ ] Borders never use raw hex — use `border-border-light` (light bg) or `border-border-dark` (dark bg)
- [ ] [ADD MORE COLOR RULES HERE]

## Typography

- Headings: `font-display` (always — never use the default sans for headings)
- Body: default sans (no class needed)
- Eyebrow labels: use the `<Eyebrow>` component, never style inline
- Headline balance: add `text-balance` to multi-line h1/h2 so line wraps look intentional

Rules to fill in:

- [ ] [ADD TYPOGRAPHY SCALE RULES HERE — e.g., "h1 always uses md:text-[56px]"]
- [ ] [ADD FONT-WEIGHT RULES HERE — e.g., "never use font-bold on body text"]

## Components

Reuse before you reach for raw HTML:

- `<Section>` for any new top-level section (handles spacing + max-width)
- `<Eyebrow tone="light" | "dark">` for section labels
- `<ButtonLink>` for any CTA — never style a plain `<a>` as a button
- `<Reveal>` for scroll-in animations (don't write motion code by hand)

Rules to fill in:

- [ ] [ADD COMPONENT-COMPOSITION RULES HERE]
- [ ] When to extract a shared component vs. inline JSX
- [ ] Naming conventions for new components

## Spacing & layout

- Page width cap: `max-w-[1280px]` with `px-5 lg:px-8`
- Hero vertical rhythm: `pt-32 pb-16 sm:pt-36 sm:pb-20 md:pt-40 md:pb-24`
- Two-column hero grid: `lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:items-center`

Rules to fill in:

- [ ] [ADD SPACING SCALE RULES — e.g., "section vertical padding follows py-12 / py-16 / py-20 progression"]
- [ ] [ADD GRID RULES]

## Don'ts

- Don't introduce a new color, font, or radius without adding it to `globals.css` first
- Don't use Next.js `<Image>` for hero illustrations rendered above the fold — they're priority-loaded; just use Image with `priority` or plain `<img>` if the static export needs it
- Don't add inline `style={{ color: '#xxxxxx' }}` — extend the token system instead
- [ADD MORE DON'TS HERE]
<!-- END:design-system-rules -->

<!-- BEGIN:build-and-deploy -->
# Build & deploy

## Local development

```
npm run dev
```

## GitHub Pages preview (stakeholder review)

The fork `nataliasahui/landing-pages` hosts a static GitHub Pages deploy at https://nataliasahui.github.io/landing-pages/. To refresh after changes:

```
STATIC_EXPORT=1 BASE_PATH=/landing-pages npm run build
BASE_PATH=/landing-pages node scripts/prefix-public-paths.js
# then push the contents of out/ to the gh-pages branch on origin (force-overwrite)
```

Or just ask Claude: "redeploy gh-pages".

## Incode Labs (canonical, container deploy)

Lives on `IncodeTechnologies/website` (requires access). The Labs workflow uses `output: "standalone"` and a Dockerfile. Don't push to that repo from here — it's a separate remote you'd need to add.
<!-- END:build-and-deploy -->
