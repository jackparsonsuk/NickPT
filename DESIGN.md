---
name: Nick Davies — Personal Trainer, Exeter
description: A trainer's page in the register of a public-health notice — ink fields on paper, plate yellow as punctuation, flat overprint only.
brand: Nick's own brand brief, Aug 2026. Provisional — the logo and the trading name are still undecided.
colors:
  ink: "#141B22"
  steel: "#2E4756"
  paper: "#ECEDE9"
  grey: "#7A8C99"
  signal: "#F2B705"
  signal-lift: "#FFC928"
  paper-2: "#E3E4DE"
  rule: "#B9C1C5"
typography:
  display:
    fontFamily: "Oswald, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 1.4rem + 5vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "0.02em"
    textTransform: "uppercase"
  headline-panel:
    fontFamily: "Oswald, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 1.35rem + 3.6vw, 3.9rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "0.02em"
    textTransform: "uppercase"
  headline:
    fontFamily: "Oswald, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 3vw, 3.4rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "0.02em"
    textTransform: "uppercase"
  subhead:
    fontFamily: "Oswald, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.55rem, 1.3rem + 1vw, 2.1rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "0.02em"
    textTransform: "uppercase"
  title:
    fontFamily: "Oswald, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.375rem, 1.26rem + 0.5vw, 1.625rem)"
    fontWeight: 600
    lineHeight: 1.24
  quote:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.16rem + 0.42vw, 1.4375rem)"
    fontWeight: 400
    lineHeight: 1.45
  action:
    fontFamily: "Oswald, Arial Narrow, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)"
    fontWeight: 600
    letterSpacing: "0.06em"
    textTransform: "uppercase"
  lead:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.3125rem, 1.2rem + 0.5vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 0.98rem + 0.38vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
  note:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Oswald, Arial Narrow, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.14em"
    textTransform: "uppercase"
rounded:
  none: "0px"
spacing:
  unit: "8px"
  half-step: "12px"
  x2: "16px"
  x2-5: "20px"
  x3: "24px"
  x4: "32px"
  x5: "40px"
  x6: "48px"
components:
  action:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "16px 32px"
  action-hover:
    backgroundColor: "{colors.signal-lift}"
  notice-panel:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "clamp(56px, 11vw, 120px) 0"
  sheet:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.steel}"
    rounded: "{rounded.none}"
    padding: "clamp(56px, 9vw, 104px) 0"
  sheet-alt:
    backgroundColor: "{colors.paper-2}"
  masthead:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "12px 0"
  logo-slot:
    width: "34px"
    height: "34px"
    borderColor: "{colors.grey}"
    borderStyle: "2px dashed"
  foot:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    padding: "40px 0"
  section-mark:
    width: "48px"
    height: "48px"
    strokeWidth: "2 units of a 24-unit viewBox"
  section-mark-narrow:
    width: "24px"
    height: "24px"
  tick:
    width: "32px"
    height: "32px"
  tick-narrow:
    width: "24px"
    height: "24px"
  session-device:
    backgroundColor: "{colors.signal}"
    width: "15px"
    height: "15px"
    gap: "5px"
  link-out:
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
  link-out-hover:
    backgroundColor: "{colors.paper-2}"
  ruled-rows:
    borderColor: "{colors.rule}"
    rounded: "{rounded.none}"
    padding: "24px 0"
  figure-money:
    textColor: "{colors.paper}"
    typography: "{typography.headline-panel}"
  placeholder-draft:
    textColor: "{colors.steel}"
    typography: "{typography.note}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
---

# Design System: Nick Davies — Personal Trainer, Exeter

## Overview

> **Brand update, 2 Sep 2026.** Nick supplied his own brand brief — five colours,
> Oswald and Inter, a twelve-icon set on a 24-unit grid, and a signature device
> of small squares standing in for a training log. The thesis, the layout law and
> the flat-overprint contract are unchanged; the palette, the type and the mark
> grammar below are his. **This is provisional**: he says the brand is still in
> progress, the logo is undecided and the trading name may change with it, which
> is why the masthead carries a marked logo slot rather than a mark. Anything in
> this document that survives from the earlier petrol/Archivo build has been
> rewritten rather than layered over, so there is one record, not two.

**Creative North Star: "The Public Notice"**

This is a trainer's page written in the register of a public-health notice, not a gym advert. It refuses the arms-folded trainer hero and the cream-and-serif wellness page with equal firmness, because both are advertising and this is information. The visitor arrives already half-convinced that fitness is not for them; the page answers plain questions plainly and asks for one message. Every visual decision serves that reading and nothing else.

The material is printed matter: flat ink fields overprinted on paper, hard rules, no depth of any kind. There is no shadow, no gradient, no rounded corner and no blur anywhere in the stylesheet — verified, not aspirational. Depth comes from the ground a block sits on, and separation comes from a ruled line. The page is dense with text and generous with air around it, and it is deliberately quiet everywhere except where the plate yellow lands: three message links, sixteen session squares and one full stop, in a page ten thousand pixels long.

Structure is a single layout law repeated nine times: a margin index column carrying an authored mark, and a body column carrying the heading and its answer, meeting on one continuous seam that runs the full height of the page. The marks are drawn, not licensed — nine stroked symbols on a 24-unit grid in Nick's own icon grammar, redrawn as SVG rather than dropped in as his PNGs so that each one inverts on an ink panel and stays sharp at any size. There is one page, no component library, and no photography; where content is missing it says so in a dashed grey box rather than pretending.

**Key Characteristics:**
- Flat overprint only — no shadow, no gradient, no radius, anywhere
- Ink fields alternating with two weights of paper
- Plate yellow as punctuation: the action, the session device, the headline stop
- One index-plus-body seam governing all nine sections
- Authored marks on a 24-unit grid, even 2-unit stroke, square corners and ends
- Motion is ornament; every animated element has a complete static reading
- Placeholders are visibly, honestly marked and must not ship

## Colors

Nick's five, and nothing else: two grounds, two texts, one accent. Two working
tints are derived from those five rather than added to them.

### Primary
- **Ink** (`{colors.ink}`): The field colour, and the heading colour on light grounds. It fills the masthead, the opening notice panel, the Christmas panel, the closing contact panel and the footer edge-to-edge, and it is the colour of every section mark and the outbound-link rule on light grounds. Ink is the page's structural colour, never a decorative tint.
- **Plate Yellow** (`{colors.signal}`): The accent, and the brief's own instruction is that it stays punctuation rather than a background — roughly a tenth of any view at most. On this page it lands on exactly three kinds of object and no others: the three `.action` links, the `.device` squares in the Christmas block, and the `.stop` after the `h1`. Its hover lift (`{colors.signal-lift}`) is the only other place the hue appears. Ink on plate yellow is 9.6:1.

### Neutral
- **Paper** (`{colors.paper}`): The page ground, and every piece of text on a dark one. Warm off-white, uncoated in character, never pure white. On ink it is 14.8:1.
- **Steel** (`{colors.steel}`): All body copy on light grounds, at 8.3:1 on paper — the page's reading colour. On an ink ground it inverts its job entirely and becomes a seam rule at 1.8:1, which is where the `.figs` and `.details` hairlines come from.
- **Grey** (`{colors.grey}`): Secondary text **on dark grounds only** — panel notes, index labels, contact terms, the footer credit — at 5.0:1 on ink. It also draws every dashed placeholder border on either ground, where it is a non-text mark.

### Derived, not a sixth and seventh colour
- **Paper 2** (`{colors.paper-2}`): The alternate section ground and the scrollbar track. Its only job is to let two adjacent light sections read as separate sheets without a border between them.
- **Rule** (`{colors.rule}`): Grey let down into paper, for the 1px hairlines above and below every tick and row. Full grey on paper is loud for a line that carries no information.

### Named Rules

**The Yellow-Is-Punctuation Rule.** Plate yellow may be worn by three things and no others: `.action`, `.device li`, and `.stop`. Not a heading, not an underline, not a mark, not a focus ring, not the skip link — the skip link is deliberately paper for this reason, and the comment saying so is in the stylesheet. `::selection` is the one cited exception, themed from the palette under the craft floor's browser-surfaces requirement, and it does not generalise. Verify with: every element whose computed `background-color`, `color`, `fill` or `stroke` is `rgb(242, 183, 5)` is an `.action`, a `.device li`, or the `.stop`. At the time of writing that is 3, 16 and 1.

**The Real-Count Rule.** The signature device — a row of small squares — may only appear where the squares stand for something countable and real. In the Christmas block that is one square per session bought: six for £150, ten for £225. If there is nothing to count, the device does not go on the page. This is the brief's own rule for the motif and it is the reason the device appears once rather than as a texture.

**The Grey-On-Dark Rule.** Grey is 2.96:1 on paper and fails AA outright there, so it never carries text on a light ground. Secondary copy on paper is Steel, which is 8.3:1. This is the one place the build narrows the brief rather than following it, and it matters here more than most pages: the stated audience includes people with long-term health conditions.

**The Three Grounds Rule.** A block sits on ink, on paper, or on paper 2. There is no fourth ground and no tinted card floating on top of one. Contrast between adjacent light sections is achieved by alternating the two papers, never by a border, a shadow or a container.

## Typography

**Display Font:** Oswald (with `Arial Narrow, system-ui, sans-serif`), weights 400–700
**Body Font:** Inter (with `system-ui, sans-serif`), weights 400/500/600/700

**Character:** Oswald is a condensed grotesque with no italic — a notice-board face, dense enough to set a long question large and completely without warmth. Inter underneath it is the plain interface face: legible, unstyled, and openly not trying to sell anything. Together they read as an official notice somebody wrote by hand rather than a brand. Both are free and on Google Fonts, which is Nick's own requirement — he has to be able to keep using them without asking anyone.

`font-synthesis-weight: none` is set globally, so a missing weight fails visibly rather than being faked by the browser. Oswald has no true italic, and the brief bans italic in body copy, so nothing on the page is italic — `cite` is explicitly reset to `normal`.

### Hierarchy

Oswald is condensed, so the same rem step sets appreciably more per line than the old expanded display face did. Rank is carried by size and by case, and the measures were tightened to match rather than the sizes being cut.

- **Display** (600, `clamp(2.5rem, 1.4rem + 5vw, 4.75rem)`, 1.08, uppercase): The single `h1` — the visitor's own question, reversed out of the opening ink panel. Capped at 17ch. It is the one heading that carries a `.stop`.
- **Headline (panel)** (600, `clamp(2.2rem, 1.35rem + 3.6vw, 3.9rem)`, 1.08, uppercase): Section headings on ink. Capped at 13ch.
- **Headline (sheet)** (600, `clamp(2rem, 1.3rem + 3vw, 3.4rem)`, 1.08, uppercase): Section headings on paper. Capped at 15ch.
- **Subhead** (600, `clamp(1.55rem, 1.3rem + 1vw, 2.1rem)`, uppercase): `.sub` — a heading inside a long section, a full step below the section `h2`. Capped at 24ch.
- **Title** (600, `clamp(1.375rem, 1.26rem + 0.5vw, 1.625rem)`, 1.24, **sentence case**): Tick-row and ruled-row headings. Oswald, but not uppercase — these are read as sentences, and one set of them is four people's names.
- **Quote** (Inter 400, `clamp(1.25rem, 1.16rem + 0.42vw, 1.4375rem)`, 1.45): The testimonial voice. A testimonial is body copy, so it stays Inter and never becomes display type. Max 52ch.
- **Lead** (Inter 400, `clamp(1.3125rem, 1.2rem + 0.5vw, 1.5rem)`, 1.6): The one-paragraph answer under a panel heading. Max 46ch.
- **Body** (Inter 400, `clamp(1.0625rem, 0.98rem + 0.38vw, 1.1875rem)`, 1.6): All prose. Measure is 68ch (`--measure`); tick-row prose tightens to 58ch and panel notes to 44ch. Emphasis inside body copy is Inter SemiBold (600), never italic.
- **Note** (Inter, `0.9375rem`): Placeholder text, figure captions, footer, panel notes. The web-design credit in the footer is the one step below it, `0.875rem`, so somebody else's line sits visibly under Nick's.
- **Label** (Oswald 500, `0.75rem`, uppercase): Tracked small caps in graded settings — `0.08em` on nav links, `0.09em` on the wordmark, `0.11em` on the wordmark role, `0.12em` on contact terms and citations, `0.14em` on index labels.
- **Action** (Oswald 600, uppercase, `0.06em`): The button. The brief sets buttons, nav and labels in Oswald Medium uppercase; the action takes Semibold because it is the one that has to be found.

All headings carry `text-wrap: balance` and a `ch` cap, so a heading never leaves an orphan.

### Named Rules

**The Uppercase Stops At Section Level Rule.** `h1`, `h2` and `.sub` are uppercase; `h3` and `h4` are not. The brief asks for uppercase on "page and section headings", and a row heading is neither — "Personal training sessions from £35" and "Tom Bottoms" both lose more to shouting than they gain. Uppercase also costs word-shape, and the stated audience includes people who read slowly.

**The Nav Gap Rule.** The nav's flex `gap` is 32px, not the 20px it was under the old face. Oswald's condensed caps make the word space *inside* "About Nick" nearly as wide as the gap *between* two items, and at 20px the whole bar read as a single run-on word. Any change of nav type has to be re-checked at a real width, not assumed.

**The No Eyebrow Rule.** A mark plus a tracked uppercase label stacked directly above a heading is an eyebrow, which the craft floor bans outright. The index label is legitimate only while it sits *beside* the heading in the margin column. Below 861px, where the columns collapse, `.law-label` is set to `display: none` for exactly this reason — the mark and the rule stay, the label goes. Do not restore it, and do not add a second one.

**The Scoped Sheet Rule.** Body-copy colour is scoped as `.sheet .law-body > p`, never unscoped. Unscoped, that selector outranks `.lead` and `.draft.on-dark` on specificity and renders both near-invisible on the ink panels. Any new paragraph rule inside `.law-body` inherits this constraint: scope it to its ground.

## Layout

**The shell** is a centred `1180px` max-width container with `24px` inline padding, used identically by the masthead, all nine sections and the footer, so the page has exactly one left edge.

**The layout law** — `.law` — is a two-column grid: a `minmax(0, 15rem)` margin index column and a `minmax(0, 1fr)` body column, separated by a `40px` gap, aligned to the start. All nine sections use it without exception, including the three ink panels, which is why the seam runs unbroken from masthead to footer. The index column is `position: sticky` at `104px` and carries a 3px top rule (ink on paper, grey on ink) plus the section's mark and label. The body column carries the heading, the answer, and everything else.

**Section rhythm** is a clamp, not a fixed value: ink panels breathe at `clamp(56px, 11vw, 120px)` block padding, paper sheets at `clamp(56px, 9vw, 104px)`. Sticky-nav scroll offset is `88px`.

**Spacing** is a single `8px` unit (`--unit`) multiplied in place. The multipliers actually in use are ×1, ×1.5, ×2, ×2.5, ×3, ×4, ×5, ×6, ×7, ×11, ×13 and ×15 — everything resolves to a whole multiple of 4px, with one ×1.25 (10px) sub-step on the outbound-link icon gap. New spacing is written as `calc(var(--unit) * n)`, never as a raw pixel value.

**Breakpoints** are two, both `max-width`:
- **≤860px** — the law collapses to one column with a `24px` gap; the index column stops being sticky; `.law-label` is hidden (see The No Eyebrow Rule); the index column is removed entirely from ink panels; marks drop from 48px to 24px.
- **≤640px** — the masthead stays sticky but stacks into two compact rows; nav becomes a full-bleed sideways-scrolling strip of 44px links; the action becomes a full-width centred block; tick rows narrow their icon column from 32px to 24px; the logo slot drops to 28px and the session device to 13px squares.

### Named Rules

**The One Seam Rule.** Every section is an index column plus a body column meeting on one seam. Six sections, one law, no exceptions — a full-bleed panel and a text sheet obey it identically. Any new section adopts `.law` or it does not belong on this page.

**The Eight-Unit Rule.** Type, marks, panels and gaps all resolve against one 8px modular grid. Sizes are `calc(var(--unit) * n)`; measures are stated in `ch`; nothing is nudged with an arbitrary pixel.

## Elevation & Depth

**There is no elevation.** The stylesheet contains no `box-shadow`, no `text-shadow`, no `filter`, no gradient and no blur, and its opening comment states this as a contract. Nothing on this page floats, lifts, or casts.

Depth is entirely tonal and linear. Layering is expressed by which of the three grounds a block sits on (ink, paper, paper 2), and separation is expressed by a ruled line at one of four weights:

- **3px** — the seam rule at the top of every index column, and the outbound-link underline.
- **2px** — the contact-detail divider, the nav's underline channel, every dashed placeholder border, the logo slot, and the stroke of every mark and tick box.
- **1px** — the hairlines bracketing each tick and each ruled row.
- **2.5px** — the stroke of the tick check itself, the one weight that is not 1, 2 or 3.

### Named Rules

**The Flat Overprint Rule.** This is printed matter. If a treatment could not survive being printed in two flat inks on uncoated paper, it does not belong here. Reach for a ground change or a rule; never for a shadow, a gradient, a glow or a translucent card.

## Shapes

**Everything is a rectangle with square corners.** There is not a single `border-radius` declaration in the stylesheet; `{rounded.none}` is the whole radius system. The action is a hard-cornered yellow block, the tick box is a hard-cornered square, placeholders are hard-cornered dashed rectangles, and the image slot is a hard-cornered 16:9 field.

**The marks** are the page's only drawn form language, and their grammar is Nick's own: the twelve icons in his brief are a 24-unit grid, an even 2-unit stroke, square corners and no rounding. Nine authored symbols follow it here — an adult-and-child pair, a list, a session grid, a location pin, a price tag, a house, two speech shapes and an arrow — living in an inline SVG sprite. They are drawn rather than dropped in as his PNGs, because a PNG cannot invert on an ink panel and does not stay sharp. The grammar is fixed and binding:
- Stroked shapes on a 24-unit `viewBox`, aligned to that grid; `stroke-linecap` and `stroke-linejoin` both `square`, no rounding anywhere.
- **`stroke-width="2"` is a presentation attribute on each `<symbol>`, never a CSS rule on `.mark`.** Set in CSS on the host it computes to an absolute 2 CSS pixels and inherits across the `<use>` boundary already resolved, so it ignores the viewBox scale and every mark draws at half weight at 48px. This was a real bug in this build, found by measuring the rendered PNG.
- Colour rides on the `color` property and is picked up as `currentColor`, so `.notice .mark { color: var(--paper) }` inverts a whole mark for a dark ground in one declaration. Solid shapes inside a symbol declare `fill="currentColor"` for themselves, because a declared value beats an inherited one.
- A `<g>` wrapper around the symbols does nothing: `<use>` clones the symbol, not its ancestors. Attributes belong on the `<symbol>`.
- Rendered at 48px and 24px only — both whole multiples of the 24-unit grid.

**The tick** is the same grammar drawn one square at a time: a 22×22 outline on a 24-unit viewBox with an inset check path, 2-unit stroke, rendered at 32px and 24px.

**The session device** is the brand's signature motif: a flush row of 15px plate-yellow squares on a 5px gap, one square per session bought. It has no border and no fill state — a square is either there or it is not, because the count is the content.

**Dashes mean unfinished.** A dashed border appears nowhere except on placeholder content. It is the page's one non-solid line and it carries meaning.

### Named Rules

**The Whole-Multiple Rule.** Marks render only at whole multiples of their grid: 48px and 24px for the icon set, 32px and 24px for the tick. A mark at 30px or 40px is a bug, because the 24-unit geometry and its even 2-unit stroke stop landing on device pixels.

## Components

There is one page and no component library. What follows are the recurring patterns the build actually uses; treat them as the system's vocabulary rather than as an inventory to extend.

### The Action

The page's only button. It appears three times — in the opening panel, on the Christmas offer, and in the contact panel — and all three point at the same WhatsApp link.

- **Shape:** Hard-cornered rectangle (`{rounded.none}`), `16px 32px` padding.
- **Colour:** Plate yellow ground, ink text, 9.6:1. Never inverted, never outlined, never a ghost variant.
- **Type:** Oswald 600, uppercase, `0.06em` — the display face, so it reads as part of the notice rather than as UI chrome. The brief sets buttons in Oswald Medium; this one takes Semibold because it is the one that has to be found.
- **Hover:** Lifts to `{colors.signal-lift}` and translates `-2px` on the Y axis over 220ms. **Active:** returns to `translateY(0)`, so the press is a physical down-stroke.
- **Narrow (≤640px):** Becomes a full-width centred block with `16px` inline padding.
- **Support:** A `.act-note` beneath it in grey, max 44ch, carrying the email alternative and the low-pressure line. The note is never yellow.

### The Session Device

`.device` — the brand's signature motif, and the only other yellow object on the page. A flush flex row of 15px plate-yellow squares on a 5px gap (13px below 641px), one square per session bought, sitting directly above its money figure. It carries `aria-hidden` because the count is written out beneath it in words, and it has **no `max-width`**: capped, ten squares wrapped eight-and-two, which reads as a row that broke rather than as a count. See The Real-Count Rule — this is the only place on the page that earns it.

### Masthead and Logo Slot

The sticky ink bar. The wordmark is a flex row: a 34px 2px-dashed grey square where the logo will go, then the name in Oswald 600 uppercase at `0.09em` over the role line in Oswald 500 uppercase at `0.11em` in grey. The slot is a placeholder in the same language as every other one on the page, and it exists because Nick asked for the space to be held while the logo and the trading name are decided.

### Notice Panel

A full-bleed ink field, used for the opening section, the Christmas offer, and the closing section. On ink the mark inverts to paper via a single `color` declaration, because its default colour *is* the ground. It carries the layout law like every other section, with the seam rule in grey. Contains a heading, one short lead paragraph, the action, and nothing else. No photograph and no illustration ever appears inside one.

### Section Sheet

A light section on paper, with `.alt` swapping to paper 2. Index column: 3px ink rule, 48px ink mark, tracked uppercase Oswald label in steel. Body column: heading capped at 15ch, an intro paragraph in steel, then content at 68ch measure.

### Tick List

The page's one authored moment. A rule-bracketed list where each row is a `32px` icon column plus content, separated by 1px hairlines, with an ink tick-box and check path on the same 24-unit grid as the marks.

- **Static reading is the finished one.** The check is stamped by default in CSS. It is *un*-stamped only when both conditions hold: JS ran (adding `.js-motion` to the root) and the user has not asked for reduced motion. No-JS, no-IntersectionObserver, and reduced-motion visitors all see completed ticks, never empty boxes.
- **Motion:** `stroke-dashoffset` 18→0 over 520ms on `cubic-bezier(0.16, 1, 0.3, 1)`, triggered by an IntersectionObserver at 0.4 threshold with an `-18%` bottom root margin, staggered 90ms per row. The stroke carries weight into its stop and settles; it does not snap or bounce.

### Ruled Rows

`.rows` — the tick list's rhythm without the ticks: a rule-bracketed list, 1px hairlines, `24px` block padding per row, a title-step heading capped at 34ch, and body copy in steel at 58ch. Three sections share it (Where I train, Prices, and the Thrive roster) so those three do not each invent an arrangement. Roster rows add `.rows-role`, a note-step subtitle in sentence case — deliberately *not* the tracked uppercase label register, which holds up over one to three words and breaks down over a 45-character job title.

### Christmas Figures

`.figs` — two money figures on the offer panel, under a 2px steel rule, each carrying its session device above it. They reuse the `headline-panel` type step rather than inventing a money size and set `tabular-nums` so the captions stay in a column, and they are **paper, never yellow**: the yellow in this block belongs to the device and the action, and a third kind of yellow object here would flatten both. Emphasis in the figure comes from size, not hue. Below 641px the figure and its caption share a line and the device spans both columns above them.

### Outbound Link

The Thrive Collective link out. Inline-flex, ink text, 3px ink underline, Oswald 500 uppercase at `0.07em`, with the arrow mark at 24px. On hover the background fills with the *opposite* paper (paper 2 on plain sheets, paper on `.alt` sheets) and the arrow translates 4px right over 220ms.

### Navigation

Six text links in the sticky ink masthead, Oswald 500 uppercase at `0.9375rem` on a `0.08em` track and a 32px flex gap, each sitting over a transparent underline channel. Hover and the scroll-spy current state both fill that channel paper over 160ms — the same treatment for both, so the current section reads as a hover that stayed. `aria-current="true"` is the state carrier, set by an IntersectionObserver with a `-45%/-50%` root margin; the styling hangs off the ARIA attribute, not a class.

Below 641px the masthead becomes two compact rows — wordmark, then a full-bleed index strip that scrolls sideways — and **stays sticky**. It was `position: static` there originally, which spent 173px of an 812px screen once and never returned it, pushing the action below the fold on any handset with browser chrome. The strip carries no fade at its overflow edge, because the contract bans gradients: the affordance is the cut item itself. The channel becomes the link's full 44px height, which makes the current section far more legible than a 2px line under text.

`scroll-padding-top` is not one value. The desktop bar is 69px and takes `88px`; the narrow bar is 102px and takes `112px`; a coarse pointer between 641 and 860px wraps the bar to 115px and takes `120px`. Change a bar height and this must move with it, or anchor jumps land underneath the masthead.

### Contact Details

A flex-wrapped definition list under a 2px rule. Terms are tracked uppercase Oswald at `0.75rem` in grey; values are 600-weight paper links.

### Placeholder Markers

Four shapes, one language, all in 2px dashed grey:
- **Draft note** — an inline strip of text stating exactly what is unconfirmed. On ink it switches to `.on-dark`, which is grey on grey.
- **Logo slot** — a 34px square in the masthead, holding the space for a logo that has not been chosen (28px below 641px).
- **Image slot** — a 16:9 field at 10% grey with a caption naming the asset and its minimum size. `.slots` tiles four of them in a fixed two-column grid for the gallery; the column count is fixed rather than `auto-fit`, which resolved to three in the body column and orphaned the fourth slot on its own row.
- **Quote block** — a dashed container holding placeholder testimonial copy and a placeholder citation.

Every one carries a `data-draft` or `data-slot` hook. `CONTENT.md` holds the user's replacement list. These are build-state devices: when real content arrives, the dashed border leaves with the placeholder.

### Target Size

Tap targets are sized by **input device, not viewport width** — a large phone in landscape sits above the 640px breakpoint and is still a thumb, so `@media (pointer: coarse)` carries the rule and is deliberately placed *before* the width blocks so narrower rules still win. Nav and contact links are `24px` minimum everywhere (they were 23px and 22px, a one-pixel miss of WCAG 2.2 AA 2.5.8) and `44px` on any coarse pointer. The only links left under 24px are inline inside a sentence, which 2.5.8 exempts.

### Focus

A 3px solid ink outline at 3px offset on every link and button, switching to paper inside the masthead, ink panels and footer. Applied via `:where()` so it can be overridden without a specificity fight. There is no yellow in any focus ring.

### Named Rules

**The Complete Static Reading Rule.** Every animated element renders complete and correct with JavaScript disabled and with motion disabled. Motion may emphasise, never inform. The implementation pattern is mandatory: the finished state is the CSS default, and JS un-sets it only after confirming both capability and consent. A future editor who inverts this — animating *in* from an empty default — ships a broken page to every no-JS visitor.

**The Legible Event Rule.** Every state change is a physical event, not a silent swap. The tick draws. The action lifts and presses back. The arrow travels. The nav channel fills. Each has a stated duration and easing (`--ease: cubic-bezier(0.16, 1, 0.3, 1)`; 160ms nav, 180ms link ground, 220ms action and arrow, 520ms tick). Nothing changes appearance instantly and nothing changes without a cause the visitor can see.

## Do's and Don'ts

### Do:
- **Do** give every new section the layout law — index column plus body column on the one seam — including full-bleed panels.
- **Do** express spacing as `calc(var(--unit) * n)` against the 8px unit, and measures in `ch` against `--measure` (68ch).
- **Do** pick a heading's size from the established ramp before adding a step to it, and keep uppercase to `h1`, `h2` and `.sub`.
- **Do** draw any new mark in Nick's grammar: stroked shapes on a 24-unit grid, `stroke-width="2"` as an attribute on the symbol, square caps and joins, rendered only at 48px or 24px.
- **Do** scope paragraph colour rules to their ground (`.sheet .law-body > p`), so a light-ground rule cannot outrank `.lead` or `.draft.on-dark` on the ink panels.
- **Do** write the finished state as the CSS default and let JS remove it, so no-JS and reduced-motion visitors get the complete reading.
- **Do** mark unfinished content visibly in 2px dashed grey with a `data-draft` or `data-slot` hook, and say plainly what is missing — the masthead logo slot included.
- **Do** separate blocks with a ruled line or a ground change.
- **Do** keep `scroll-padding-top` in step with the masthead height at every breakpoint and pointer type; there are three values and they are not interchangeable.
- **Do** size tap targets from `pointer: coarse`, not from a width breakpoint.
- **Do** reach for `.rows` before inventing a new list arrangement, and for an existing type step before adding one to the ramp.

### Don't:
- **Don't** put plate yellow on anything other than `.action`, `.device li` and `.stop` — not headings, underlines, marks, focus rings, hovers or the skip link. `::selection` is the one cited exception and it does not generalise.
- **Don't** put the session device anywhere the squares do not count something real. If there is nothing to count, leave it off.
- **Don't** set `stroke-width` on `.mark` in CSS. It has to be an attribute on the `<symbol>` or every mark draws at half weight.
- **Don't** put grey text on a light ground — it is 2.96:1 on paper. Steel is the light-ground text colour; grey belongs on ink.
- **Don't** introduce a shadow, gradient, glow, blur or translucent card. The build has none, by contract.
- **Don't** add a `border-radius`. Every corner on this page is square.
- **Don't** stack a mark and a tracked uppercase label directly above a heading — that is an eyebrow, and it is banned. The index label is legitimate only beside the heading; it is correctly hidden below 861px.
- **Don't** render a mark at a size that is not a whole multiple of its 24-unit grid.
- **Don't** animate an element in from an absent or empty default state.
- **Don't** use dashed borders decoratively; a dash means the content is unfinished.
- **Don't** add a floating or fixed call-to-action bar. The action appears three times in the flow, on the page's own grid line; a persistent CTA is advertising furniture and the thesis refuses it.
- **Don't** mark the overflow edge of the narrow index strip with a fade — that is a gradient.
- **Don't** add a photograph or illustration to an ink notice panel — the first viewport holds the question, the answer, and the action, and nothing else.
- **Don't** introduce a fourth ground colour or float a tinted card over an existing one.
- **Don't** reintroduce Thrive Collective's identity (dark charcoal, `#FF5A00`, Montserrat). This site links to Thrive; it must never read as a Thrive sub-page.

---

### Open decision

**Font hosting.** Oswald and Inter currently load from the Google Fonts CDN via `<link>` in `index.html`, with `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com` and `display=swap`. Whether to self-host the two families instead is an open decision with the user and is not settled in either direction.

**The logo, and the name.** Nick has not chosen a logo and says the trading name may change with it. The masthead holds a 34px dashed slot in its place, and the wordmark next to it is text. Neither is a final decision; when the logo lands, it replaces the slot and the slot's rule goes with it.

**How much yellow.** Nick's own mockups use plate yellow more freely than this build does — a yellow square before the wordmark, a yellow accent inside several icons, a yellow header bar on a price block. This build keeps it to three kinds of object, on the reading that the accent is worth more where it is rare. That is a judgement, not a finding, and it is his to overturn.

Every other visual decision recorded above is closed.

<!-- Provenance: code-led build; no comp exists and none is owed. No shipping rasters exist, so there is no raster provenance to record — the only images in the repo are review screenshots under .impeccable/review/, which are evidence, not shipped assets. -->
