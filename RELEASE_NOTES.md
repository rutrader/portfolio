# Release Notes

## v3.0 — TypeScript migration (January 2026)

Migrated the codebase from JavaScript to TypeScript.

- All source converted to `.ts` / `.tsx`, `strict` mode enabled.
- Centralized type definitions in `types/index.ts` (`Project`, `Skill`, `Hobby`, `Link`, `LinkSection`, `NavItem`).
- `tsconfig.json` added with the `@/*` path alias; `next.config.js` → `next.config.mjs`.
- Added `type-check` script (`tsc --noEmit`).

## v2.0 — Copilot code review (January 2026)

Code-quality pass: removed dead code and commented-out blocks, renamed the font
variable to `poppins`, and added `.env.example` for the FontAwesome Pro token.

## Current stack

For the authoritative dependency list see `package.json`. As of this file:
Next.js `13.4.9`, React `18.2.0`, TypeScript `5.9.3`, Sass, FontAwesome Pro.

> Note: earlier revisions of this file described a Next.js 15 / React 18.3 upgrade
> that was never merged. Removed to keep these notes matching the lockfile.
> Upgrading off Next 13.4.9 is tracked as the next task.
