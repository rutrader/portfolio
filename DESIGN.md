---
name: ishemgulov.com
description: A dark, quiet, content-light personal site for a software engineer working across web, AI, and investing.
colors:
  signal-teal: "#6fb3a6"
  slate-ground: "#14161c"
  slate-raised: "#1b1e26"
  cool-white: "#e7eaef"
  cool-muted: "#a2a9b4"
  cool-faint: "#7f8792"
  hairline: "rgba(180, 200, 230, 0.11)"
  hairline-quiet: "rgba(180, 200, 230, 0.06)"
typography:
  display:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(38px, 5.6vw, 66px)"
    fontWeight: 500
    lineHeight: 1.06
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(24px, 3vw, 34px)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "20px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  title-compact:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "17px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(16px, 1.7vw, 19px)"
    fontWeight: 300
    lineHeight: 1.65
    letterSpacing: "-0.006em"
  body-small:
    fontFamily: "Geist Sans, ui-sans-serif, system-ui, -apple-system, sans-serif"
    fontSize: "14.5px"
    fontWeight: 300
    lineHeight: 1.6
    letterSpacing: "-0.006em"
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.14em"
  meta:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "11.5px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
rounded:
  none: "0px"
  pill: "100px"
spacing:
  hairline-gap: "8px"
  tight: "12px"
  row-gap: "22px"
  skill-row: "20px"
  section: "34px"
  row: "28px"
  shell: "40px"
  shell-mobile: "24px"
components:
  row-marker:
    backgroundColor: "{colors.signal-teal}"
    rounded: "{rounded.pill}"
    size: "8px"
  tag:
    textColor: "{colors.cool-faint}"
    typography: "11px Geist Mono"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
  chip:
    textColor: "{colors.cool-muted}"
    typography: "12.5px Geist Mono"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  chip-hover:
    textColor: "{colors.cool-white}"
  action-link:
    textColor: "{colors.cool-white}"
    typography: "15px Geist Sans"
    rounded: "{rounded.none}"
    padding: "0 0 3px"
  nav-link:
    textColor: "{colors.cool-muted}"
    typography: "12px Geist Mono"
  nav-link-hover:
    textColor: "{colors.cool-white}"
---

# Design System: ishemgulov.com

## Overview

**Creative North Star: "The Reading Room"**

A dim, generous space built for one visitor at a time. Air is the primary material; the interface lowers its voice so the content can be read. The first viewport spends roughly 72% of its height on almost nothing — a mono eyebrow, a four-line headline, one paragraph in the owner's real voice, two underlined text links — because a visitor who is not on a deadline should feel invited to read rather than processed through a funnel.

The system earns credibility through calm. It is a single editorial column of ranked rows separated by hairlines, not a grid of cards; there are no panels, no filled buttons, no metric tiles, no logos, and no imagery. Every piece of chrome that a conventional portfolio would add — the hero card, the stat row, the "hire me" button — was considered and refused. What remains has to carry the weight, so the craft lives entirely in spacing, type scale, and restraint.

Two anti-references are confirmed and binding. The first is the neon-terminal developer default: GitHub's `#0d1117` ground with a `#58a6ff` accent, which this system deliberately replaces with a cool slate charcoal and a muted teal. The second is the packed dashboard — density used as a proxy for substance. The palette is cool throughout, never warm-grey, and the accent appears only where it means something.

**Key Characteristics:**
- Dark, cool, and content-light; air is the primary material
- One editorial column of hairline-separated rows, ranked top to bottom
- Exactly one accent hue, spent sparingly on markers and hover states
- Geist for reading, Geist Mono for labeling — a hard division of labor
- Fully static: no entrance animation, no scroll effects, no motion beyond hover
- Real content only; nothing decorative stands in for something unbuilt

## Colors

A cool, low-saturation dark palette: one charcoal ground, three tiers of cool off-white text, two hairline greys, and a single teal that is the only chromatic voice on the page.

### Primary
- **Signal Teal** (`{colors.signal-teal}`): The only hue permitted to indicate. It appears on the row markers, the availability LED in the hero meta line, the period in the wordmark, and as the hover border on links and chips. It is deliberately teal and deliberately desaturated — the distance from GitHub blue is the point.

### Neutral
- **Slate Ground** (`{colors.slate-ground}`): The page ground. A cool slate charcoal lifted off pure black so the hairlines have something to sit on. A very faint teal radial glow (`rgba(111, 179, 166, 0.06)`, 900×460px at 50% -10%) sits above it and is the only gradient in the system.
- **Slate Raised** (`{colors.slate-raised}`): A single raised tone held in reserve for any surface that must read as lifted. The shipped page uses none — noted here so a future surface uses this value rather than inventing one.
- **Cool White** (`{colors.cool-white}`): Primary reading text — headline first clause, row titles, section headings that carry meaning.
- **Cool Muted** (`{colors.cool-muted}`): Secondary text — the headline's second clause, the lede, row descriptions, secondary skills. Contrast on the ground stays at or above 4.5:1.
- **Cool Faint** (`{colors.cool-faint}`): Small labels and metadata — the eyebrow, section labels, tags, mono meta lines, the footer. Also at or above 4.5:1; faintness is achieved by size and weight, never by dropping below the contrast floor.
- **Hairline** (`{colors.hairline}`) and **Hairline Quiet** (`{colors.hairline-quiet}`): Structure. The stronger value underlines interactive text and outlines chips; the quieter one separates sections, rows, and skill groups.

### Named Rules

**The One Hue Rule.** Signal Teal is the only chromatic color in the system. There is no second accent, no semantic green/amber/red, no gradient between hues. If a new state needs distinguishing, reach for the text tiers or the hairlines first.

**The Cool-Only Rule.** Every neutral carries a blue-green cast — including the hairlines, which are `rgba(180, 200, 230, …)` rather than white at low alpha. A warm grey anywhere reads as a foreign body.

**The Contrast Floor Rule.** No text color falls below 4.5:1 on the ground, including the faintest metadata. Quietness comes from size, weight, and tracking — never from contrast that fails.

## Typography

**Display / Body Font:** Geist Sans (with `ui-sans-serif`, `system-ui`, `-apple-system`, `sans-serif`)
**Label / Mono Font:** Geist Mono (with `ui-monospace`, `SFMono-Regular`, `Menlo`, `Consolas`, `monospace`)

**Character:** One family, two voices. Geist Sans is neutral enough to disappear into reading at 300 weight and confident enough to carry a 66px headline at 500 with tight `-0.03em` tracking. Geist Mono never sets prose — it exists to label, index, and timestamp, always uppercase or small, always widely tracked. The pairing reads as engineered without costuming itself as a terminal.

### Hierarchy
- **Display** (500, `clamp(38px, 5.6vw, 66px)`, 1.06, `-0.03em`): The single page headline. Capped at `16ch` so it always breaks into three or four lines and never runs as a banner. Its first clause is Cool White and its continuation is Cool Muted — one sentence, two levels of insistence.
- **Headline** (500, `clamp(24px, 3vw, 34px)`, 1.15, `-0.02em`): The contact section's closing line. Same two-tone treatment as Display, capped at `20ch`.
- **Title** (500, 20px, `-0.01em`): Project row titles.
- **Title Compact** (500, 17px, `-0.01em`): Writing row titles. Dropping one step is how the system ranks a section below another without changing its structure.
- **Body** (300, `clamp(16px, 1.7vw, 19px)`, 1.65): The hero lede, capped at `52ch`. Light weight at large size is what makes the first viewport feel like reading rather than marketing.
- **Body Small** (300, 14.5px, 1.6): Row descriptions, capped at `58ch`.
- **Label** (Geist Mono, 12px, uppercase, `0.14em`): Section labels. The hero eyebrow is the same treatment opened to `0.16em`.
- **Meta** (Geist Mono, 11.5px, `0.02em`): The hero meta line and the footer. Sentence case, not uppercase — it is information, not a heading.

### Named Rules

**The Mono-Never-Reads Rule.** Geist Mono is for labels, tags, counts, and metadata only. It never sets a sentence a visitor is meant to read. If a mono string runs past roughly four words, it belongs in Geist Sans.

**The Two-Tone Sentence Rule.** Both large headings split one sentence across Cool White and Cool Muted rather than splitting it into a heading plus a subheading. The system has no subheadings.

**The Measure Rule.** Every text block is capped in `ch`, not pixels — 16ch display, 20ch headline, 52ch lede, 58ch row description. Line length is a design decision, not a consequence of the container.

## Layout

A single centered column, `1020px` maximum, with `40px` side padding that tightens to `24px` below 680px. There is no multi-column grid anywhere in the system and no sidebar; ranking is expressed vertically.

The page is a stack of sections, each separated by a hairline and padded `34px` vertically, each opening with a two-part head: a mono uppercase label on the left, a mono note on the right (a caption, or a zero-padded count derived from the data rather than typed by hand).

Three row grammars carry all content:
- **Content rows** (projects, writing): a three-column grid of `1.1rem` marker / `1fr` body / `auto` meta with `22px` gaps and `28px` vertical padding, hairline-separated, first row unruled.
- **Skill rows**: a two-column grid of a `9.5rem` mono group label and a wrapping flex list of names, `20px` padding, hairline-separated.
- **Hero**: a flex column at `min-height: 72vh`, vertically centered, `40px` padding.

Below **680px** the system reorganizes rather than shrinking: the nav wraps so its links drop to their own row, the marker column narrows to `0.9rem`, the row's meta cell moves under the body, skill rows collapse to a single stacked column, and the hero's meta line drops below the action links at full width. Type scales fluidly via `clamp()` at every level, so nothing needs a mobile-specific size.

### Named Rules

**The One Column Rule.** Content is never placed side by side. If two things compete for the same horizontal band, one of them is not important enough to be on the page.

**The Air-First Rule.** The first viewport commits roughly 72vh to the hero and never fills the remainder with a card, a metric strip, or a scroll cue. Emptiness above the fold is the argument.

## Elevation & Depth

**This system has no shadows.** Nothing floats, nothing casts, and no surface is stacked on another. Depth is carried entirely by three devices: hairline rules that separate without enclosing, a three-tier text hierarchy that pushes secondary content back optically, and one very faint teal radial glow at the top of the page that keeps the ground from reading as a flat fill.

The single exception is not a shadow at all: the row marker's `box-shadow` draws a soft halo ring in the accent color around the dot, and it exists to make an 8px element legible, not to lift it.

### Shadow Vocabulary
- **Marker halo** (`box-shadow: 0 0 0 3px rgba(111, 179, 166, 0.1)`): The resting ring around a row marker. Expands to `0 0 0 4px rgba(111, 179, 166, 0.16)` on row hover.

### Named Rules

**The No-Shadow Rule.** No `box-shadow` in this system draws a shadow. Spread-only rings in the accent color are permitted; blurred dark shadows are not. Depth comes from hairlines and text tiers.

## Shapes

Two radii, and nothing between them. Structural elements — sections, rows, the shell — are unrounded, because they are separated by lines rather than bounded by boxes. Small enumerable elements — tags, chips, markers — are fully rounded pills (`100px`). The system deliberately avoids the mid-range 6–12px radius that would make these read as cards or buttons.

Borders are hairlines only: `1px` at the two hairline alpha values, used as separators and outlines, never as a frame around a block of content. Interactive text carries a `1px` bottom rule instead of a background, which is what keeps links reading as prose.

### Named Rules

**The No-Box Rule.** Content is never enclosed. No filled cards, no bordered panels, no background-tinted containers. A hairline above a row is the entire container vocabulary.

## Components

Character across the board: **quiet and editorial** — print sensibility, where type and spacing carry the design and components barely announce themselves as UI.

### Content Row (signature component)
The system's core unit, shared by projects and writing.
- **Structure:** marker / body / meta grid; title, optional description, then a wrapping tag list.
- **Marker:** an 8px Signal Teal dot with a soft halo ring, offset `9px 0 0 3px` so it optically aligns to the title's cap height rather than its box.
- **Meta:** a single 16px arrow glyph in Cool Faint, top-aligned at `6px`.
- **Hover:** a left-to-right gradient wash (`rgba(180, 200, 230, 0.03)` fading to transparent at 70%), the marker halo widening, and the arrow shifting to Cool White with a `translate(1px, -1px)` nudge. Three simultaneous cues, none of them loud.
- **Separator:** hairline-quiet on top; the first row in a section is unruled.

### Chips
- **Style:** mono 12.5px in Cool Muted, hairline border, `9px 16px`, pill radius, transparent background. Text only.
- **Hover:** border becomes Signal Teal, text becomes Cool White.
- **Don't:** add brand icons. Icon chips were the incumbent design's vocabulary and were deliberately removed.

### Tags
- **Style:** mono 11px in Cool Faint, hairline-quiet border, `3px 9px`, pill radius. Non-interactive; they label a row, they don't filter it.

### Text Link (hero action)
- **Style:** 15px Geist Sans in Cool White with a `1px` hairline bottom rule and `3px` of padding beneath, plus a 16px arrow glyph in Cool Faint. No background, no box.
- **Hover:** the underline and the arrow both take Signal Teal.

### Navigation
- **Style:** wordmark at 14px/500 with a Signal Teal period; links in mono 12px Cool Muted, `30px` gaps, lowercase, hairline-quiet rule beneath the bar.
- **Hover:** Cool White.
- **Mobile:** the bar wraps at 680px so the links form a second row under the wordmark. There is no hamburger and no drawer — four links do not need one.

### Skill Row
- **Style:** a mono uppercase group label in a `9.5rem` column beside a wrapping flex list of names, separated by a middot in Cool Faint at 55% opacity.
- **Ranking:** primary skills sit in Cool White at 400; the rest stay in Cool Muted at 300. Emphasis is the only distinction — there are no bars, levels, percentages, or years.
- **Wrapping:** each name is `nowrap` and carries its own trailing separator, so a multi-word name never breaks mid-name and a wrapped line never opens on a dangling middot.

## Do's and Don'ts

### Do:
- **Do** spend Signal Teal sparingly — markers, the LED, the wordmark period, hover borders. If it appears more than a handful of times per viewport, it has stopped signalling.
- **Do** separate with hairlines (`{colors.hairline-quiet}` between rows and sections, `{colors.hairline}` for interactive underlines and chip outlines).
- **Do** cap every text block with a `ch` measure.
- **Do** derive counts and indices from the data (`String(items.length).padStart(2, '0')`), never type them in.
- **Do** keep the two mono treatments distinct: uppercase and widely tracked for labels, sentence case and lightly tracked for metadata.
- **Do** reorganize at 680px — wrap, stack, and reflow — rather than scaling the desktop layout down.
- **Do** verify at 375px that `document.documentElement.scrollWidth` equals `clientWidth`; this layout has produced overflow twice.

### Don't:
- **Don't** introduce a second accent hue, a semantic color set, or a warm neutral.
- **Don't** use `#0d1117` or `#58a6ff`, or any variation of the neon-terminal developer palette. It is a confirmed anti-reference.
- **Don't** add blurred shadows, filled cards, bordered panels, or any mid-range corner radius. Structure is unrounded; small pills are `100px`.
- **Don't** add motion beyond hover — no entrance animation, no scroll-triggered reveals, no parallax, no marquee. The static quality is a committed decision, not an omission.
- **Don't** set prose in Geist Mono, and don't set labels or tags in Geist Sans.
- **Don't** add filled buttons or a "hire me" call to action. The hero's two underlined text links are the strongest affordance the system permits.
- **Don't** add brand icons, logos, avatars, stock imagery, or illustration. The page has no images by design.
- **Don't** invent metrics, testimonials, client logos, or years-of-experience claims to fill space. Cut the section instead.
