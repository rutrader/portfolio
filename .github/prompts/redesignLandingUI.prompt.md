---
name: redesignLandingUI
description: Redesign a Next.js landing page UI with compact sections and consistent styling.
argument-hint: Target sections to change + layout preferences + any reference markup/snippets
---
You are working in a Next.js (App Router) project. Redesign the landing page UI to be modern, simple, and not template-like.

Requirements
- Implement a clean page structure that includes: greeting/hero, projects, skills, hobbies, links/socials.
- Prefer a cohesive visual system (spacing, borders, hover/focus, typography) with responsive behavior.
- Keep changes minimal and scoped: avoid editing unrelated areas.
- If the project has a separate UI reference folder, do not modify it; use it only as inspiration.

Brand & assets constraints
- Do not add or modify third-party brand logos without explicit permission.
- Avoid shipping trademarked logos in `public/` unless the project already has the rights to use them.
- Prefer neutral icons (e.g., generic code/database/server icons) when a brand icon is unavailable.

Hero
- Replace any complex hero layout with a simple greeting: “Hi, I’m <NAME>” plus a short 1–2 sentence description.
- Keep typography readable and avoid unnecessary UI chrome.

Navigation
- Remove any right-side/aside menu.
- If navigation is needed, use a lightweight topbar or in-content anchors.

Projects
- Convert the projects section into compact list cards (not large screenshot tiles).
- Each project item should include:
  - project name
  - short description
  - an external-link indicator/icon
- Tech stack tags:
  - Render stack tags below the description.
  - Each tag should show an icon + label.
  - Use existing FontAwesome icons from the repo; apply a consistent highlight color (e.g. `#FFD43B`) and consistent sizing.
- Use accessible markup: semantic lists, focus-visible styles, and `rel="noreferrer"` for external links.

Multi-part projects
- If a single product has multiple deliverables (e.g. web + iOS), represent it as separate cards (e.g. “<Project> — Web”, “<Project> — iOS”) unless the user explicitly wants a combined card.

Skills
- Do not group skills into categories.
- Render a single skills grid/list.
- Each skill must include its own icon.
- Prefer FontAwesome icons (already in the repo) rather than importing/adding image assets.
- Match the icon styling used elsewhere (e.g. color `#FFD43B`, size `xl`).
- The skill item container should be minimal (e.g. no borders).

Links/Socials
- Replace the Links section with a simple “chips” block:
  - a small kicker line (uppercase)
  - a one-line short description
  - a row of pill/chip links (icon + label)
- Auto-pick an icon per link (email/github/linkedin/instagram/app store), with a sensible fallback.

Implementation guidance
- Prefer a small data module (e.g., `homeData`) for projects/skills/hobbies/links to keep content separate from layout.
- Keep styles scoped under a single root class (e.g., `.home`) to avoid collisions.
- Reuse existing assets from `public/` rather than adding new packages.

Validation
- Run lint and build (or the project’s standard checks) and fix any errors introduced by your changes.
- If the repo requires a specific env var prefix for `yarn`/`npm` commands, always include it.

Output
- Apply the code changes directly in the workspace.
- Summarize what changed (files touched) and confirm checks ran successfully.

Recent changes summary (keep these patterns)
- Projects are compact cards with: title + external-link icon, description, then iconized stack tags.
- Skills use FontAwesome icons per skill (consistent highlight color and sizing) and the skill tiles have no borders.
- Links/Socials are a single chip/pill block (not a grid of cards).
- Multi-part projects are represented as separate cards (e.g., Web vs iOS).
