# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: **future recruiters and hiring managers, "just in case."** Ruslan is not actively job-hunting and may never be through this site, so the visitor arrives low-urgency and evergreen — evaluating credibility at their own pace, not being converted on a deadline.

Secondary: **himself, as a durable business card** — a stable "here's who I am" link to hand out. There is no active second audience the site must be optimized for; readers of his writing and investing/AI peers are welcome but are not a pillar built for their own conversion.

## Product Purpose

A personal site for **Ruslan Ishemgulov, software engineer**. It exists to leave a credible, senior, trustworthy impression and to consolidate who he is, what he's built, and what he writes into one durable, low-maintenance place. Success is an impression, not an action: a visitor comes away registering a serious, capable engineer working at the intersection of **web engineering, AI, and investing** — and can optionally follow his writing or reach him with zero friction.

## Positioning

A **web (Next.js) engineer with an AI + investing through-line** — not a generic web developer, and not (per the earlier rejected mockup) a "React Native engineer." The distinguishing angle is the combination: production web engineering plus AI-assisted/agentic work plus genuine economics-and-investing literacy, evidenced by real writing and a real product (Assumio). React Native is a real but secondary/"can-do" skill, deliberately not headlined.

## Operating Context

The site is a single-page personal homepage (currently `app/page.tsx`) with sections for Projects, Skills, Writing, and Contact. Hobbies was dropped from the page during the 2026-08-02 redesign in service of "content-light"; its data is retained but unrendered. A visitor typically lands from a LinkedIn profile, a shared link, or a search for the name, scans top-to-bottom, and either forms an impression and leaves or clicks out to GitHub / LinkedIn / a writing piece. Content is data-driven from `app/_home/homeData.ts`.

## Capabilities and Constraints

- Single-page Next.js site; content lives in `app/_home/homeData.ts` (PROJECTS, SKILL_GROUPS, WRITINGS, HOBBIES, LINK_SECTIONS) and hero copy in `app/page.tsx`. HOBBIES is currently unrendered.
- Existing SEO/structured-data commitments in `app/layout.tsx` (Person JSON-LD, OpenGraph, canonical) — future work must not regress these.
- Vercel Analytics is wired in and external link clicks are tracked.
- Evergreen and low-maintenance by intent: favor durable content over time-sensitive claims.

## Brand Commitments

- **Name/identity:** Ruslan Ishemgulov; domain ishemgulov.com; jobTitle "Software Engineer."
- **Voice:** warm, humble, understated — e.g. "I enjoy learning new things, building useful products, and exploring economics & investing." No recruiter-bait bravado, no inflated titles. **Non-negotiable.**
- **No hard "hire me" CTA.** The site is evergreen, not an active job hunt; no aggressive job-seeking calls to action. **Non-negotiable.**
- **Bilingual EN/RU is a deliberate positive signal** — English leads, Russian is available (his RU investing blog). Preserve this, don't flatten it to English-only. **Non-negotiable.**
- Existing hero identity copy is confirmed authority; the earlier redesign mockup's invented headlines ("React Native engineer," "Senior Engineer track," "AI-powered products," fake investment tickers) are an explicit **anti-reference**.
- **Visual direction (standing preference, revised 2026-08-24):** light, quiet, airy, content-light, and **fully static (no animation)**. Editorial rather than technical — the reference is the *Financial Times* / *Economist* end, and the owner's own `assumio.com` is a sibling, not a twin. Confirmed palette: **warm off-white paper** (`#faf7f3`), warm near-black ink, and a single **desaturated teal** (`#0d7680`) used sparingly — deliberately teal, not GitHub blue. Type: **Source Serif 4 reads, Geist Mono labels**. Rows lead with a small teal marker dot (not numbers) and carry their metadata in a right rail. Craft comes from spacing, typography, and restraint, not motion. `#0d1117`/`#58a6ff` remains a confirmed anti-reference, as does the packed dashboard.
  - **Superseded (2026-08-02 → 2026-08-24):** the original build was dark — cool slate charcoal `#14161c`, cool off-white text, teal `#6fb3a6`, Geist Sans + Geist Mono. It shipped and was then repainted at the owner's direction. Two things were learned in the repaint and are now binding rules in `DESIGN.md`: a ground change is a **re-weighting**, not just a re-colouring (300/500 on charcoal became 400/600/700 on paper), and a light ground **exposes empty space a dark ground conceals** (rows ran 52% empty at the same widths that had looked fine dark).
  - FT's own cream `#FFF1E5` was tried and rejected as too much colour at full-page scale; the ground was pulled back to a warm off-white while keeping the warm ink and rules that cream had earned.
  - **`DESIGN.md` is the normative source for tokens, rules, and components; this bullet records why they were chosen.**

## Evidence on Hand

Real, provable content (do not fabricate beyond this — **real content only is non-negotiable**):

- **Projects:** Czechonomics — Web (React/Node) and iOS companion (live on App Store); Assumio (assumio.com, Astro/TypeScript, AI-assisted — "a private ledger of investment reasoning, not returns"). Older projects (Workmarket.eu, Ewijobs.cz) were deliberately dropped.
- **Writing:** two EN LinkedIn Pulse articles — "AI Infrastructure: Discipline Under Pressure" parts 1 & 2; and rutrader.eu — "Investment Quest" (EN/RU investing blog: report breakdowns, investment ideas, market notes).
- **Skills** (from `homeData.ts`): Frontend (Next.js, React, TypeScript lead; JavaScript, React Native muted), AI (AI-assisted dev, agentic workflows, LLM integration, AI architecture), Backend (Node.js, PHP), Data (PostgreSQL, MySQL), Platform (Design systems, WordPress, Docker, CI/CD).
- **Contact/profiles:** GitHub (github.com/rutrader), LinkedIn, Instagram.
- **Absent — must not be invented:** no metrics, no testimonials, no client logos, no pricing, no employer names, no public Telegram URL, no "open to work" status.

## Product Principles

1. **Impression over conversion.** Optimize for a credible, senior read at a glance; the visitor is not on a deadline and should never feel sold to.
2. **Only what's provable.** Every claim traces to real data; when in doubt, cut it rather than inflate it.
3. **The through-line is the differentiator.** Web engineering × AI × investing is the story — lead with the combination, keep generic-web-dev framing out.
4. **Bilingual by design.** EN leads, RU is a visible asset, not an afterthought.
5. **Evergreen and durable.** Content and structure should age well with minimal upkeep; avoid anything that dates quickly or implies urgency.
