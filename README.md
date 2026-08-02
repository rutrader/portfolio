# ishemgulov.com

Personal site of Ruslan Ishemgulov — software engineer. A single-page profile
with projects, skills, and links, built with the Next.js App Router.

## Stack

- **Next.js** (App Router) + **React**
- **TypeScript** (strict)
- **Sass** for styling (`app/globals.scss`, `styles/home.scss`)
- **Icons**: [lucide-react](https://lucide.dev) (UI) + [simple-icons](https://simpleicons.org) (brand logos)
- **Vercel Analytics**

## Getting started

```bash
yarn install
yarn dev       # http://localhost:3000
```

No license tokens or private registries required. Content lives in
[`app/_home/homeData.ts`](app/_home/homeData.ts); the page is rendered by
[`app/page.tsx`](app/page.tsx).

## Scripts

| Script | Purpose |
| --- | --- |
| `yarn dev` | Start the dev server |
| `yarn build` | Production build |
| `yarn start` | Serve the production build |
| `yarn lint` | ESLint |
| `yarn type-check` | `tsc --noEmit` |
| `yarn prettify` / `yarn prettier` | Write / check formatting |

## Deployment

Deployed on Vercel.
