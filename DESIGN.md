---
name: ishemgulov.com
description: A light, quiet, editorial personal site for a software engineer working across web, AI, and investing.
colors:
  signal-teal: "#0d7680"
  paper: "#faf7f3"
  field: "#f2ede6"
  ink: "#22201e"
  ink-muted: "#57514a"
  ink-faint: "#71695f"
  rule: "#e4ddd3"
  rule-quiet: "#efe9e1"
  wash: "rgba(34, 32, 30, 0.03)"
typography:
  display:
    fontFamily: "Source Serif 4, Charter, Georgia, Times New Roman, serif"
    fontSize: "clamp(36px, 4.6vw, 56px)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.018em"
  display-article:
    fontFamily: "Source Serif 4, Charter, Georgia, Times New Roman, serif"
    fontSize: "clamp(32px, 4vw, 48px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.018em"
  headline:
    fontFamily: "Source Serif 4, Charter, Georgia, Times New Roman, serif"
    fontSize: "clamp(26px, 2.8vw, 36px)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.012em"
  section-heading:
    fontFamily: "Source Serif 4, Charter, Georgia, Times New Roman, serif"
    fontSize: "clamp(21px, 2.1vw, 26px)"
    fontWeight: 700
    lineHeight: 1.22
    letterSpacing: "-0.012em"
  numeral:
    fontFamily: "Source Serif 4, Charter, Georgia, Times New Roman, serif"
    fontSize: "50px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
  numeral-unit:
    fontFamily: "Source Serif 4, Charter, Georgia, Times New Roman, serif"
    fontSize: "22px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Source Serif 4, Charter, Georgia, Times New Roman, serif"
    fontSize: "20px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "-0.005em"
  title-compact:
    fontFamily: "Source Serif 4, Charter, Georgia, Times New Roman, serif"
    fontSize: "18px"
    fontWeight: 600
    lineHeight: 1.45
    letterSpacing: "-0.005em"
  wordmark:
    fontFamily: "Source Serif 4, Charter, Georgia, Times New Roman, serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  lede:
    fontFamily: "Source Serif 4, Charter, Georgia, Times New Roman, serif"
    fontSize: "clamp(17px, 1.6vw, 20px)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  body:
    fontFamily: "Source Serif 4, Charter, Georgia, Times New Roman, serif"
    fontSize: "clamp(17px, 1.6vw, 19px)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0"
  body-small:
    fontFamily: "Source Serif 4, Charter, Georgia, Times New Roman, serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  annotation:
    fontFamily: "Source Serif 4, Charter, Georgia, Times New Roman, serif"
    fontSize: "15.5px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  annotation-small:
    fontFamily: "Source Serif 4, Charter, Georgia, Times New Roman, serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "0"
  label:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.14em"
  label-tight:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "11.5px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.12em"
  meta:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "11.5px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
  chip:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "12.5px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
  code:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "0"
  tag:
    fontFamily: "Geist Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0"
rounded:
  none: "0px"
  pill: "100px"
spacing:
  hairline-gap: "8px"
  tight: "12px"
  row-gap: "22px"
  skill-row: "20px"
  section: "34px"
  row: "28px 0 28px 10px"
  shell: "40px"
  shell-mobile: "24px"
components:
  row-marker:
    backgroundColor: "{colors.signal-teal}"
    rounded: "{rounded.pill}"
    size: "8px"
  tag:
    textColor: "{colors.ink-faint}"
    typography: "{typography.tag}"
    rounded: "{rounded.pill}"
    padding: "3px 9px"
  chip:
    textColor: "{colors.ink-muted}"
    typography: "{typography.chip}"
    rounded: "{rounded.pill}"
    padding: "9px 16px"
  action-link:
    textColor: "{colors.ink}"
    typography: "{typography.body-small}"
    rounded: "{rounded.none}"
    padding: "0 0 3px"
  nav-link:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.ink}"
  rail:
    textColor: "{colors.ink-faint}"
    width: "12rem"
---

# Design System: ishemgulov.com

## Overview

**Creative North Star: "The Reading Room"**

A quiet, generous space built for one visitor at a time. Air is the primary material; the interface lowers its voice so the content can be read. The homepage spends roughly 60% of the first viewport on almost nothing — a mono eyebrow, a three-line headline, one paragraph in the owner's real voice, two underlined text links — because a visitor who is not on a deadline should feel invited to read rather than processed through a funnel.

The system earns credibility through calm. It is a single editorial column of ranked rows separated by hairlines, not a grid of cards; there are no panels, no filled buttons, no metric tiles, no logos, and no imagery. Every piece of chrome that a conventional portfolio would add — the hero card, the stat row, the "hire me" button — was considered and refused. What remains has to carry the weight, so the craft lives entirely in spacing, type scale, and restraint.

The world is **printed, not lit**. Warm off-white paper, warm near-black ink, solid warm rules, and one desaturated teal. The ground is flat: there are no gradients, no glows, and no shadows anywhere in the system.

**Key Characteristics:**
- Light, warm, and content-light; air is the primary material
- One editorial column of hairline-separated rows, ranked top to bottom
- Exactly one accent hue, spent sparingly on markers, the LED, and hover states
- A serif that reads and a mono that labels — a hard division of labor
- Fully static: no entrance animation, no scroll effects, no motion beyond hover
- Real content only; nothing decorative stands in for something unbuilt

**Two anti-references are confirmed and binding.** The first is the neon-terminal developer default: GitHub's `#0d1117` ground with a `#58a6ff` accent, which this system replaces with warm paper and a desaturated teal. The second is the packed dashboard — density used as a proxy for substance.

**History.** This system began as a dark one — cool slate charcoal, cool off-white text, Geist Sans. It was repainted to paper in August 2026 because the owner wanted an editorial, Financial Times-adjacent world. Two findings from that repaint are recorded in the rules below, because both are invisible until a ground changes and both cost a round to discover: light-on-dark and dark-on-light do not want the same weights, and a light ground exposes empty space that a dark ground conceals.

## Colors

A warm, low-saturation light palette: one paper ground, three tiers of warm ink, two warm rules, and a single teal that is the only chromatic voice on the page.

### Primary
- **Signal Teal** (`{colors.signal-teal}`): The only hue permitted to indicate. It appears on the row markers, the availability LED in the hero meta line, the period in the wordmark, the step indices in an article, the filled portion of every rail, and as the hover border on links and chips. It is deliberately teal and deliberately desaturated — the distance from developer blue is the point. At **5.02:1** on the ground it clears AA, so it is allowed to set text.

### Neutral
- **Paper** (`{colors.paper}`): The page ground. A warm off-white — the warmth reads as a cast rather than as a colour. It is flat. The dark system's teal radial did not survive the repaint: paper does not glow, and this system now has no gradient at all.
- **Field** (`{colors.field}`): A single deeper tint held in reserve for any surface that must read as raised. The shipped pages use none — noted here so a future surface takes this value rather than inventing one.
- **Ink** (`{colors.ink}`): Primary reading text — headlines, row titles, article prose, section headings that carry meaning. **15.2:1**.
- **Ink Muted** (`{colors.ink-muted}`): Secondary text — the headline's second clause, ledes, row descriptions, glosses, answers. **7.3:1**.
- **Ink Faint** (`{colors.ink-faint}`): Small labels and metadata — eyebrows, section labels, tags, datelines, mono meta lines, the footer. **5.1:1**.
- **Rule** (`{colors.rule}`) and **Rule Quiet** (`{colors.rule-quiet}`): Structure. The stronger value opens a section, underlines interactive text, and outlines chips and tags; the quieter one separates rows and skill groups.
- **Wash** (`{colors.wash}`): A breath of ink used for the row-hover gradient, and the only place a gradient appears in the system.

### Named Rules

**The One Hue Rule.** Signal Teal is the only chromatic color in the system. There is no second accent, no semantic green/amber/red, no gradient between hues. If a new state needs distinguishing, reach for the ink tiers or the rules first.

**The Warm-Only Rule.** Every neutral carries a warm cast, including the rules, which are solid warm inks rather than translucent films over the ground. A cool grey anywhere reads as a foreign body. (This inverts the dark build's Cool-Only Rule; the principle — one temperature, no exceptions — is unchanged.)

**The Contrast Floor Rule.** No text color falls below 4.5:1 on the ground, including the faintest metadata. Quietness comes from size, weight, and tracking — never from contrast that fails. Every tier above carries its measured figure; re-measure rather than re-estimate when the ground moves.

**The Two Rule Weights Rule.** A section opens on `{colors.rule}`; the rows inside it divide on `{colors.rule-quiet}`. Two weights doing two jobs is legible on paper in a way it was not on charcoal, and it is how hierarchy is expressed without adding a box.

## Typography

**Reading Font:** Source Serif 4 (with `Charter`, `Georgia`, `Times New Roman`, `serif`)
**Label / Mono Font:** Geist Mono (with `ui-monospace`, `SFMono-Regular`, `Menlo`, `Consolas`, `monospace`)

**Character:** Two families, two voices. Source Serif is sturdy enough to hold small sizes — row titles at 18–20px, annotations at 15px — where a high-contrast face goes weak, and confident enough to carry a 56px headline at 700. Geist Mono never sets prose; it exists to label, index, and timestamp, always uppercase or small, always widely tracked. The pairing reads as editorial without costuming itself as a newspaper.

Source Serif is served to the page as a variable font through `next/font/google`. Satori cannot read a variable axis, so anything rendered through `next/og` loads static cuts from `@fontsource/source-serif-4` instead. Both resolve to the same typeface; see `app/_og/fonts.ts`.

### Hierarchy
- **Display** (700, `clamp(36px, 4.6vw, 56px)`, 1.08, `-0.018em`): The homepage headline, capped at `20ch` so it breaks into three lines. Its first clause is Ink and its continuation is Ink Muted — one sentence, two levels of insistence.
- **Display Article** (700, `clamp(32px, 4vw, 48px)`, 1.1): An article's own title, capped at `18ch`.
- **Headline** (700, `clamp(26px, 2.8vw, 36px)`, 1.18): The contact section's closing line, capped at `20ch`. Same two-tone treatment as Display.
- **Section Heading** (700, `clamp(21px, 2.1vw, 26px)`, 1.22): `h2` inside an article, capped at `26ch`.
- **Numeral** (700, 50px, tabular): The counts an article turns on. Its unit (`%`) drops to 22px on the same baseline.
- **Title** (600, 20px): Project row titles. **Title Compact** (600, 18px) is writing row titles, `h3`, ladder rungs, Q&A questions, and picker tabs — dropping one step is how the system ranks a section below another without changing its structure.
- **Lede** (400, `clamp(17px, 1.6vw, 20px)`, 1.6): The hero lede and an article's standfirst, capped at `50ch`.
- **Body** (400, `clamp(17px, 1.6vw, 19px)`, 1.65): Article prose, set in **Ink**, capped at `68ch`.
- **Body Small** (400, 16px) and **Annotation** (400, 15.5px / 15px): Row descriptions, glosses, answers, notes — the muted tier.
- **Label** (Geist Mono, 12px, uppercase, `0.14em`): Section labels and the hero eyebrow, the latter opened to `0.16em`. **Label Tight** (11.5px, `0.12em`) is the article fact list.
- **Meta** (Geist Mono, 11.5px, `0.02em`): Datelines, scores, the footer. Sentence case, not uppercase — it is information, not a heading.
- **Tag** (11px), **Chip** (12.5px), **Code** (13px): Mono, all three.

### Named Rules

**The Mono-Never-Reads Rule.** Geist Mono is for labels, tags, counts, diffs, and metadata only. It never sets a sentence a visitor is meant to read. If a mono string runs past roughly four words, it belongs in the serif.

**The Two-Tone Sentence Rule.** Both large headings split one sentence across Ink and Ink Muted rather than into a heading plus a subheading. The system has no subheadings.

**The Measure Rule.** Every text block is capped in `ch`, not pixels — 20ch display, 18ch article title, 50ch lede, 62ch row description, 68ch article prose. Line length is a design decision, not a consequence of the container. When a measure and a container disagree, move the container (see The Column Follows The Measure Rule).

**The Weight Follows The Ground Rule.** Light text on a dark ground gains apparent weight; dark text on a light ground loses it. The dark build set prose at 300 and headings at 500 and read as quiet; the same values on paper read as faded. Prose is 400, headings 600, display 700. A repaint in either direction must re-weight, not just re-colour.

**The Prose Is Ink Rule.** Long-form body text is set in Ink, never in Ink Muted. On charcoal the body could sit one tier back and still read as the main event; on paper the same step back reads as a caption running for a thousand words. Ink Muted means *annotation* — glosses, notes, captions, answers — and never means "the article". Two paragraphs of real argument are prose, not metadata, even in a colophon.

**No Font Smoothing.** Do not set `-webkit-font-smoothing: antialiased`. It thins glyphs, which rescues light text on a dark ground and ruins dark text on a light one. The platform's own subpixel rendering is correct here.

## Layout

Two column widths, one for each kind of page.

- **The homepage** is a single centered column, **1020px** of content, with `40px` side padding that tightens to `24px` below 680px. It is an index: ranked rows, each carrying a title, a short description, and metadata.
- **An article** is **780px** of content in the same shell grammar. A reading measure stays near 68ch whatever the canvas is, so a paragraph on the homepage's width ran 683px inside a 1020px column and left a third of every line's band empty. The front page is wide; the article page is not.

Neither shell uses `border-box`, so the `40px` padding sits outside the stated max-width — the homepage measures 1100 and an article 860 on the page.

The page is a stack of sections, each opened by a `{colors.rule}` and padded `34px` vertically, each with a two-part head: a mono uppercase label on the left, a mono note on the right (a caption, or a zero-padded count derived from the data rather than typed by hand).

Row grammars:
- **Content rows** (projects, writing): a four-column grid of `1.1rem` marker / `1fr` body / `12rem` metadata rail / `1.1rem` arrow, with `22px` gaps and `28px 0 28px 10px` padding, separated by `{colors.rule-quiet}`, first row unruled. The `10px` left inset sets the marker in from the section label above it. The rail and arrow columns are fixed rather than `auto` so the arrows align down the page instead of tracking each row's tag widths.
- **Skill rows**: a two-column grid of a `9.5rem` mono group label and a wrapping flex list of names, `20px` padding.
- **Hero**: a flex column at `min-height: 60vh`, vertically centered.
- **Article figures**: full-column blocks (`.articleWide`) that escape the prose measure — fact lists, tallies, the ladder, the break picker, Q&A.

Below **680px** the system reorganizes rather than shrinking: the nav wraps, the marker column narrows to `0.9rem`, the metadata rail stacks back under the body with the arrow pinned right on the same line, skill rows collapse to a single column, the hero's meta line drops below the action links, and the break picker's two columns become one stack. Type scales fluidly via `clamp()`, so nothing needs a mobile-specific size.

### Named Rules

**The One Column Rule.** Content is never placed side by side. If two things compete for the same horizontal band, one of them is not important enough to be on the page.

The rule has one carve-out, in article figures only: a **control and its own output** may share a band, because they are one instrument rather than two contents competing — the break picker in `/writing/what-the-typechecker-cant-see` puts its chooser in a `17rem` column beside the panel it drives, divided by a hairline rather than boxed. Both halves open with a label on the same baseline, the choices are built from the content-row grammar, and the pair collapses to a single stack at 680px, where the rule applies with full force. This never extends to prose, rows, or sections.

**The Column Follows The Measure Rule.** When a measure leaves more than roughly a fifth of its band empty, the container is wrong, not the measure. Fix it by giving the band real content (the metadata rail) or by bringing the canvas to the text (the article's 780px) — never by stretching lines past the reading band to fill space. A dark ground hides this failure; a light one does not.

**The Air-First Rule.** The homepage's first viewport commits roughly 60vh to the hero and never fills the remainder with a card, a metric strip, or a scroll cue. Emptiness above the fold is the argument. (It was 72vh on charcoal; a serif at full weight carries more mass and needs less air to feel deliberate.)

## Elevation & Depth

**This system has no shadows and no gradients**, with one exception each. Nothing floats, nothing casts, and no surface is stacked on another. Depth is carried by solid warm rules that separate without enclosing, and by a three-tier ink hierarchy that pushes secondary content back optically.

### Vocabulary
- **Marker halo** (`box-shadow: 0 0 0 3px {colors.signal-teal}/12%`): The resting ring around a row marker, expanding to `0 0 0 4px` at 18% on row hover. It is a spread-only ring, not a shadow — it exists to make an 8px element legible.
- **Row wash** (`linear-gradient(90deg, {colors.wash}, transparent 70%)`): The row-hover tint, and the only gradient in the system.

### Named Rules

**The No-Shadow Rule.** No `box-shadow` in this system draws a shadow. Spread-only rings in the accent color are permitted; blurred shadows are not. Depth comes from rules and ink tiers.

**The Flat Ground Rule.** The page ground is a flat fill. The dark build carried a faint teal radial; paper does not glow, and reintroducing one would read as a stain rather than as light.

## Shapes

Two radii, and nothing between them. Structural elements — sections, rows, the shell — are unrounded, because they are separated by lines rather than bounded by boxes. Small enumerable elements — tags, chips, markers — are fully rounded pills (`100px`). The system deliberately avoids the mid-range 6–12px radius that would make these read as cards or buttons.

Borders are hairlines only: `1px` at the two rule values, used as separators and outlines, never as a frame around a block of content. Interactive text carries a `1px` bottom rule instead of a background, which is what keeps links reading as prose.

### Named Rules

**The No-Box Rule.** Content is never enclosed. No filled cards, no bordered panels, no background-tinted containers. A rule above a row is the entire container vocabulary. The one exception is the site mark (see Components), which is a filled tile because it competes in a browser tab strip rather than on the page.

## Components

Character across the board: **quiet and editorial** — print sensibility, where type and spacing carry the design and components barely announce themselves as UI.

### Content Row (signature component)
The system's core unit, shared by projects and writing.
- **Structure:** marker / body / rail / arrow. Title, optional description in the body; the tag list in the rail.
- **Marker:** an 8px Signal Teal dot with a soft halo ring, offset `9px 0 0 3px` so it optically aligns to the title's cap height rather than its box.
- **Rail:** right-aligned tags, `12rem`, top-padded `3px`. It reads as a margin note against the body rather than as a second, weaker column of content. It exists because the metadata used to sit under the description and leave 52% of every row empty.
- **Arrow:** a single 16px glyph in Ink Faint, level with the title. `↗` for outbound links, `→` for pages hosted here.
- **Hover:** a left-to-right wash, the marker halo widening, and the arrow shifting to Ink with a `translate(1px, -1px)` nudge.

### Chips and Tags
- **Chips:** mono 12.5px in Ink Muted, `{colors.rule}` border, `9px 16px`, pill, transparent background. Hover takes the border to Signal Teal and the text to Ink. **Don't** add brand icons.
- **Tags:** mono 11px in Ink Faint, `{colors.rule}` border, `3px 9px`, pill. Non-interactive; they label a row, they don't filter it. They outline in the *stronger* rule — the quiet one is invisible against paper.

### Text Link (hero action)
16px serif in Ink with a `1px` rule beneath and a 16px arrow in Ink Faint. No background, no box. Hover takes both to Signal Teal.

### Navigation
Wordmark at 16px/700 in the reading face with a Signal Teal period; links in mono 12px Ink Muted, `30px` gaps, lowercase, a quiet rule beneath the bar. Hover goes to Ink. The bar wraps at 680px; there is no hamburger and no drawer.

### Skill Row
A mono uppercase group label in a `9.5rem` column beside a wrapping flex list of names, separated by a middot in Ink Faint at 55% opacity. Primary skills sit in Ink at 600; the rest stay in Ink Muted at 400. Emphasis is the only distinction — no bars, levels, percentages, or years.

### Article Figures
Full-column blocks that escape the prose measure, all built from rules rather than boxes:
- **Fact list:** a hairline definition list, `14rem` mono label beside the value.
- **Tally:** large tabular numerals over a short note, `13rem` minimum columns so three counts hold one line. The counts carrying the argument take Signal Teal.
- **Rail:** a `2px` `{colors.rule}` track filled from the left in Signal Teal. Never hatched, never gradient-filled. Shared by the ladder and the break picker so both figures speak one language. Carries its numbers in an `aria-label`; the visible mono score beside it is `aria-hidden`.
- **Break picker:** a real `tablist` — arrow keys move, Home/End jump to the ends, only the active tab is in the tab order. Its choices reuse the content-row grammar; the selected state is the row marker, empty at rest and filled with a halo when chosen.
- **Mutation block:** a pre-wrapped mono diff with a `1px` Signal Teal rule on the left. No fill.

### Site Mark
The favicon and app icon: an **R knocked out of a Signal Teal tile**, Source Serif 700 at 66% of the tile, corners rounded to 22%.
- **Why inverted:** at 16px an outlined or hairline mark loses its shape entirely. The filled tile is the only treatment with presence in a crowded tab strip.
- **Why 66% and not 70%:** the serif's bracketing needs the extra room inside the tile to stay a shape rather than a smudge at 16px.
- **Generated, not drawn:** `app/icon.tsx` and `app/apple-icon.tsx` render it through `next/og` with the real font file, so the letterform matches the wordmark rather than approximating it.

### Open Graph Images
1200×630, flat paper, generated from the same tokens: the mono eyebrow, the headline at 700 with `-1.4` tracking, and a rule above a mono footer line led by the teal LED. The site card restates the first viewport; an article card restates that article's own header, with every value read from its registry entry so a card cannot drift from the page it points at.

## Do's and Don'ts

### Do:
- **Do** spend Signal Teal sparingly — markers, the LED, the wordmark period, step indices, rail fills, hover borders. If it appears more than a handful of times per viewport, it has stopped signalling.
- **Do** open sections with `{colors.rule}` and divide rows with `{colors.rule-quiet}`.
- **Do** cap every text block with a `ch` measure, and move the container when the measure leaves the band empty.
- **Do** derive counts and indices from the data (`String(items.length).padStart(2, '0')`), never type them in.
- **Do** keep the two mono treatments distinct: uppercase and widely tracked for labels, sentence case and lightly tracked for metadata.
- **Do** reorganize at 680px — wrap, stack, and reflow — rather than scaling the desktop layout down.
- **Do** verify at 375px that `document.documentElement.scrollWidth` equals `clientWidth`; this layout has produced overflow twice. Verify against a production build: Next's dev server has served an unstyled page into a probe iframe and returned a meaningless pass.
- **Do** re-measure contrast in the browser after any change to the ground. Every figure in this document was measured, not estimated.

### Don't:
- **Don't** introduce a second accent hue, a semantic color set, or a cool neutral.
- **Don't** use `#0d1117` or `#58a6ff`, or any variation of the neon-terminal developer palette. It is a confirmed anti-reference.
- **Don't** add shadows, filled cards, bordered panels, gradients beyond the row wash, or any mid-range corner radius.
- **Don't** add motion beyond hover — no entrance animation, no scroll-triggered reveals, no parallax, no marquee. The static quality is a committed decision, not an omission.
- **Don't** set prose in Geist Mono, and don't set labels or tags in the serif.
- **Don't** stretch a measure past the reading band to fill a wide column. ~100ch would fill the homepage's width and was considered; long lines multiply return-sweep errors, and this site's long-form is meant to be read rather than scanned.
- **Don't** add filled buttons or a "hire me" call to action. The hero's two underlined text links are the strongest affordance the system permits.
- **Don't** add brand icons, logos, avatars, stock imagery, or illustration. The page has no images by design — the site mark and the OG images are generated assets that never appear in the layout.
- **Don't** "fix" the site mark's filled tile to match the No-Box Rule. The inversion is deliberate and is the rule's only carve-out.
- **Don't** invent metrics, testimonials, client logos, or years-of-experience claims to fill space. Cut the section instead.
