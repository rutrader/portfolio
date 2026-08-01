# ishemgulov.com

Personal site of Ruslan Ishemgulov — software engineer. A single-page profile
with projects, skills, and links, built with the Next.js App Router.

## Stack

- **Next.js** (App Router) + **React**
- **TypeScript** (strict)
- **Sass** for styling (`app/globals.scss`, `styles/home.scss`)
- **FontAwesome Pro** for icons — requires a license token
- **Vercel Analytics**

## Getting started

```bash
yarn install   # needs FONTAWESOME_NPM_AUTH_TOKEN set (see .env.example)
yarn dev       # http://localhost:3000
```

Content lives in [`app/_home/homeData.ts`](app/_home/homeData.ts); the page is
rendered by [`app/page.tsx`](app/page.tsx).

## Scripts

| Script | Purpose |
| --- | --- |
| `yarn dev` | Start the dev server |
| `yarn build` | Production build |
| `yarn start` | Serve the production build |
| `yarn lint` | ESLint |
| `yarn type-check` | `tsc --noEmit` |
| `yarn prettify` / `yarn prettier` | Write / check formatting |

## Environment

FontAwesome Pro requires `FONTAWESOME_NPM_AUTH_TOKEN` (get it from
<https://fontawesome.com/account>). Copy `.env.example` to `.env` and fill it in.

## Deployment

Deployed on Vercel.
