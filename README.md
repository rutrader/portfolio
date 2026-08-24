<p align="center">
  <img src="./assets/readme/hero.svg" width="100%"
       alt="ishemgulov.com — a single page, built to be read, and a design system written down. Next.js App Router, TypeScript, Sass, deployed on Vercel. Beside the title, a specimen of the site's content row: a teal marker dot, a project title and description, its tags right-aligned in a metadata rail, and an outbound arrow.">
</p>

Source of **[ishemgulov.com](https://ishemgulov.com)** — the personal site of Ruslan Ishemgulov,
software engineer.

## What it is

A homepage and a small set of written pieces. The homepage is a nav, a hero, and four sections —
projects, skills, writing, contact — stacked in a single 1020px column and separated by hairlines.
Each piece under `/writing/<slug>` is its own page in the same system, narrowed to 780px so a
paragraph meets its own measure. No CMS, no database, no data fetching: every word comes from a
TypeScript file and is rendered by a page component.

## Why it looks like this

The design is not re-decided per commit. [`DESIGN.md`](DESIGN.md) is the normative source for the
tokens, the components, and the named rules that constrain them:

- **One column.** Content is never placed side by side. The one carve-out is a control and its own
  output — an interactive figure may sit beside the panel it drives.
- **One hue.** Signal Teal `#0d7680` is the only chromatic color — row markers, the wordmark
  period, rail fills, hover borders. No second accent, no semantic palette.
- **One temperature.** Every neutral is warm, including the rules, which are solid inks rather than
  translucent films over the ground. A cool grey reads as a foreign body.
- **No box.** No cards, no panels, no shadows, no mid-range corner radius. A hairline above a row
  is the entire container vocabulary.
- **Contrast floor.** No text drops below 4.5:1 on the ground, including the faintest metadata —
  measured in the browser, not estimated. Quietness comes from size, weight, and tracking.
- **The column follows the measure.** When a measure leaves more than a fifth of its band empty,
  the container is wrong, not the measure.
- **No motion.** Hover states only — no entrance animation, no scroll effects. Static is a
  decision, not an omission.

The site shipped dark first and was repainted to paper. Two findings from that are now rules:
a ground change is a **re-weighting**, not just a re-colouring, and a light ground **exposes empty
space a dark ground conceals**.

[`PRODUCT.md`](PRODUCT.md) holds the other half: who the site is for, and what it may never claim —
no invented metrics, no testimonials, no "hire me" call to action.

## Where things live

| Path | Contents |
| --- | --- |
| [`app/_home/homeData.ts`](app/_home/homeData.ts) | Homepage content — projects, skills, writing, links |
| [`app/page.tsx`](app/page.tsx) | The homepage |
| [`app/writing/_articles.ts`](app/writing/_articles.ts) | The article registry — one entry per piece, read by the page, the share card, the sitemap, and the homepage row |
| [`app/writing/<slug>/`](app/writing) | One folder per article: its page, its data, its own OG image |
| [`styles/_tokens.scss`](styles/_tokens.scss) | The palette and type tokens, on `:root` |
| [`styles/home.scss`](styles/home.scss) · [`styles/writing.scss`](styles/writing.scss) | The homepage and article surfaces, and the reorganization at 680px |
| [`app/_og/palette.ts`](app/_og/palette.ts) | The same palette in TypeScript — Satori resolves no CSS variables |
| [`app/icon.tsx`](app/icon.tsx) · [`app/opengraph-image.tsx`](app/opengraph-image.tsx) | Favicon and share card, generated from those tokens through `next/og` |

To change what the homepage says, edit `homeData.ts`. To add an article, add an entry to
`_articles.ts` and a page beside it. Section counts and share cards are derived from that data
rather than typed in.

## Getting started

```bash
yarn install
yarn dev       # http://localhost:3000
```

No environment variables, license tokens, or private registries required.

## Scripts

| Script | Purpose |
| --- | --- |
| `yarn dev` | Start the dev server |
| `yarn build` | Production build |
| `yarn start` | Serve the production build |
| `yarn lint` | ESLint |
| `yarn type-check` | `tsc --noEmit` |
| `yarn prettify` / `yarn prettier` | Write / check formatting |

## Stack

Next.js 15 (App Router) · React 18 · TypeScript (strict) · Sass ·
[Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4) +
[Geist Mono](https://vercel.com/font) · [lucide-react](https://lucide.dev) ·
Vercel Analytics. Deployed on Vercel.
