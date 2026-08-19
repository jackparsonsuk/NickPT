---
name: Nick Davies — Personal Trainer, Exeter
description: A trainer's page in the register of a public-health notice — petrol fields on leaflet stock, one yellow action, flat overprint only.
colors:
  petrol: "#0E4553"
  stock: "#F6F5F1"
  stock-warm: "#EDEBE3"
  ink: "#14120F"
  ink-2: "#3E5257"
  signal: "#FFC400"
  signal-lift: "#FFD447"
  sage: "#4C8B7C"
  rule: "#C9C6BB"
  reversed: "#FFFFFF"
  reversed-lead: "#EDF4F4"
  reversed-quiet: "#C3D6D8"
  reversed-label: "#BFD4D6"
  reversed-rule: "#6E9AA1"
  foot-text: "#C8C6C0"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.35rem, 1.35rem + 4.5vw, 4.35rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 118"
  headline-panel:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.1rem, 1.3rem + 3.4vw, 3.6rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 116"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.25rem + 2.8vw, 3.1rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  subhead:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.3rem + 0.9vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 108"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.3125rem, 1.22rem + 0.42vw, 1.5rem)"
    fontWeight: 700
    lineHeight: 1.28
    letterSpacing: "-0.005em"
    fontVariation: "'wdth' 104"
  quote:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.3125rem, 1.2rem + 0.5vw, 1.5rem)"
    fontWeight: 500
    lineHeight: 1.4
    fontVariation: "'wdth' 100"
  action:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)"
    fontWeight: 700
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 108"
  lead:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "clamp(1.3125rem, 1.2rem + 0.5vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "clamp(1.0625rem, 0.98rem + 0.38vw, 1.1875rem)"
    fontWeight: 400
    lineHeight: 1.6
  note:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Public Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.12em"
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
    backgroundColor: "{colors.petrol}"
    textColor: "{colors.reversed}"
    rounded: "{rounded.none}"
    padding: "clamp(56px, 11vw, 120px) 0"
  sheet:
    backgroundColor: "{colors.stock}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "clamp(56px, 9vw, 104px) 0"
  sheet-alt:
    backgroundColor: "{colors.stock-warm}"
  masthead:
    backgroundColor: "{colors.petrol}"
    textColor: "{colors.reversed}"
    padding: "12px 0"
  foot:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.foot-text}"
    padding: "40px 0"
  section-mark:
    width: "48px"
    height: "48px"
  section-mark-narrow:
    width: "24px"
    height: "24px"
  tick:
    width: "32px"
    height: "32px"
  tick-narrow:
    width: "24px"
    height: "24px"
  link-out:
    textColor: "{colors.petrol}"
    rounded: "{rounded.none}"
  link-out-hover:
    backgroundColor: "{colors.stock-warm}"
  ruled-rows:
    borderColor: "{colors.rule}"
    rounded: "{rounded.none}"
    padding: "24px 0"
  figure-money:
    textColor: "{colors.reversed}"
    typography: "{typography.headline-panel}"
  placeholder-draft:
    textColor: "{colors.ink-2}"
    typography: "{typography.note}"
    rounded: "{rounded.none}"
    padding: "12px 16px"
---

# Design System: Nick Davies — Personal Trainer, Exeter

## Overview

**Creative North Star: "The Public Notice"**

This is a trainer's page written in the register of a public-health notice, not a gym advert. It refuses the arms-folded trainer hero and the cream-and-serif wellness page with equal firmness, because both are advertising and this is information. The visitor arrives already half-convinced that fitness is not for them; the page answers plain questions plainly and asks for one message. Every visual decision serves that reading and nothing else.

The material is printed matter: flat petrol fields overprinted on leaflet stock, hard rules, no depth of any kind. There is no shadow, no gradient, no rounded corner and no blur anywhere in the stylesheet — verified, not aspirational. Depth comes from the ground a block sits on, and separation comes from a ruled line. The page is dense with text and generous with air around it, and it is deliberately quiet everywhere except one place: a single yellow rectangle that is the only saturated warm thing on the page.

Structure is a single layout law repeated nine times: a margin index column carrying an authored Isotype mark, and a body column carrying the heading and its answer, meeting on one continuous seam that runs the full height of the page. The marks are drawn, not licensed — seven solid symbols on a 48-unit grid, holes cut with `fill-rule` so they read on any ground. There is one page, no component library, and no photography; where content is missing it says so in a dashed sage box rather than pretending.

**Key Characteristics:**
- Flat overprint only — no shadow, no gradient, no radius, anywhere
- Petrol fields alternating with two weights of leaflet stock
- One signal yellow, worn by the action and nothing else
- One index-plus-body seam governing all nine sections
- Authored Isotype marks at whole divisions of a 48-unit grid
- Motion is ornament; every animated element has a complete static reading
- Placeholders are visibly, honestly marked and must not ship

## Colors

A printed palette: two petrols' worth of field, two weights of uncoated stock, one ink, and a single reserved warning colour.

### Primary
- **Petrol** (`{colors.petrol}`): The field colour. It fills the masthead, the opening notice panel and the closing contact panel edge-to-edge, and it is the fill of every Isotype section mark and the outbound-link rule on light grounds. Petrol is the page's structural colour, never a decorative tint.
- **Signal Yellow** (`{colors.signal}`): Reserved. It is the background of the two `.action` links and nothing else on the page. Its hover lift (`{colors.signal-lift}`) is the only other place the hue appears. Rarity is the entire mechanism — the moment a second element wears yellow, the action stops being findable.

### Secondary
- **Sage** (`{colors.sage}`): The unfinished-content colour, and only that. It draws the 2px dashed border on every placeholder — draft notes, the image slot, the testimonial blocks — and tints the empty image slot at 10% alpha. Sage marks build state, not brand: when the real content lands, sage leaves with it.

### Neutral
- **Leaflet Stock** (`{colors.stock}`): The page ground. Warm off-white, uncoated in character, never pure white.
- **Warm Stock** (`{colors.stock-warm}`): The alternate section ground and the scrollbar track. Its only job is to let two adjacent light sections read as separate sheets without a border between them.
- **Ink** (`{colors.ink}`): All body and heading text on light grounds, the footer ground, and the focus-ring colour.
- **Muted Ink** (`{colors.ink-2}`): Secondary and explanatory prose on light grounds — section intros, tick-row descriptions, index labels, placeholder text. It is the page's second voice, and it is cool enough to sit with petrol rather than fight it.
- **Rule Grey** (`{colors.rule}`): The 1px hairlines above and below every tick row.

### Reversed (on petrol)
Text on petrol descends through a fixed four-step ladder, coolest and quietest last:
- **White** (`{colors.reversed}`): Headings, the wordmark, nav links, and links inside dark panels.
- **Panel Lead** (`{colors.reversed-lead}`): The one-paragraph answer beneath a panel heading.
- **Panel Quiet** (`{colors.reversed-quiet}`): Supporting notes and reversed placeholder text.
- **Panel Label** (`{colors.reversed-label}`): The wordmark role line and index labels on petrol.
- **Panel Rule** (`{colors.reversed-rule}`): The seam rule where it crosses a petrol panel.

### Named Rules

**The One Yellow Object Rule.** Signal yellow touches exactly one thing: the action. Only `.action` may wear it. Not a heading, not an underline, not a mark, not a hover state on anything else, not a focus ring — the skip link is deliberately white for this reason, and the comment saying so is in the stylesheet. The single cited exception is `::selection`, themed from the palette under the craft floor's browser-surfaces requirement; that exception does not generalise.

**The Three Grounds Rule.** A block sits on petrol, on stock, or on ink. There is no fourth ground and no tinted card floating on top of one. Contrast between adjacent sections is achieved by alternating stock and warm stock, never by a border, a shadow or a container.

## Typography

**Display Font:** Archivo Variable (with `system-ui, sans-serif`), width axis 100–125, weight axis 400–900
**Body Font:** Public Sans (with `system-ui, sans-serif`), weights 400/500/600/700

**Character:** Archivo run expanded is signage — condensed enough to be dense, wide enough to be shouted, and completely without warmth. Public Sans underneath it is a government-service face: legible, unstyled, and openly not trying to sell anything. Together they read as an official notice somebody wrote by hand rather than a brand.

`font-synthesis-weight: none` is set globally, so a missing weight fails visibly rather than being faked by the browser.

### Hierarchy

The display face uses the width axis, not just size, to signal rank: the wider the setting, the louder the voice.

- **Display** (800, `clamp(2.6rem, 1.35rem + 5.6vw, 5.25rem)`, 1.04, width 118): The single `h1` — the visitor's own question, reversed out of the opening petrol panel. Capped at 15ch so it always breaks into two or three short lines.
- **Headline (panel)** (800, `clamp(2.1rem, 1.3rem + 3.4vw, 3.6rem)`, 1.04, width 116): Section headings on petrol. Capped at 16ch.
- **Headline (sheet)** (800, `clamp(1.9rem, 1.25rem + 2.8vw, 3.1rem)`, 1.04, width 112): Section headings on stock. Capped at 18ch. Width 112 is the default set on `h1, h2, h3, .wordmark-name`.
- **Title** (700, `clamp(1.3125rem, 1.22rem + 0.42vw, 1.5rem)`, 1.28, width 104): Tick-row headings. Near-normal width, because these are read as sentences rather than seen as signage.
- **Quote** (500, `clamp(1.3125rem, 1.2rem + 0.5vw, 1.5rem)`, 1.4, width 100): The testimonial voice — Archivo at normal width and medium weight, the only place the display face is set light enough to read as speech. Max 52ch.
- **Lead** (Public Sans 400, `clamp(1.3125rem, 1.2rem + 0.5vw, 1.5rem)`, 1.6): The one-paragraph answer under a panel heading. Max 46ch.
- **Body** (Public Sans 400, `clamp(1.0625rem, 0.98rem + 0.38vw, 1.1875rem)`, 1.6): All prose. Measure is 68ch (`--measure`); tick-row prose tightens to 58ch and panel notes to 44ch.
- **Note** (Public Sans, `0.9375rem`): Nav links (600), placeholder text (700), figure captions (600), footer.
- **Label** (Public Sans 700, `0.75rem`, uppercase): Tracked small caps in three graded settings — `0.08em` on the wordmark role, `0.10em` on contact terms and citations, `0.12em` on index labels.

All headings carry `text-wrap: balance` and a `ch` cap, so a heading never leaves an orphan.

### Named Rules

**The Width-Axis Ladder Rule.** Rank is expressed on Archivo's width axis before it is expressed in size: 118 for the page question, 116 and 112 for section headings, 108 for the action, 104 for row titles, 100 for quoted speech. A new heading picks its width from that ladder rather than inventing a value.

**The No Eyebrow Rule.** A mark plus a tracked uppercase label stacked directly above a heading is an eyebrow, which the craft floor bans outright. The index label is legitimate only while it sits *beside* the heading in the margin column. Below 861px, where the columns collapse, `.law-label` is set to `display: none` for exactly this reason — the mark and the rule stay, the label goes. Do not restore it, and do not add a second one.

**The Scoped Sheet Rule.** Body-copy colour is scoped as `.sheet .law-body > p`, never unscoped. Unscoped, that selector outranks `.lead` and `.draft.on-dark` on specificity and renders both near-invisible on the petrol panels. Any new paragraph rule inside `.law-body` inherits this constraint: scope it to its ground.

## Layout

**The shell** is a centred `1180px` max-width container with `24px` inline padding, used identically by the masthead, all nine sections and the footer, so the page has exactly one left edge.

**The layout law** — `.law` — is a two-column grid: a `minmax(0, 15rem)` margin index column and a `minmax(0, 1fr)` body column, separated by a `40px` gap, aligned to the start. All nine sections use it without exception, including the three petrol panels, which is why the seam runs unbroken from masthead to footer. The index column is `position: sticky` at `104px` and carries a 3px top rule (ink on stock, `{colors.reversed-rule}` on petrol) plus the section's Isotype mark and label. The body column carries the heading, the answer, and everything else.

**Section rhythm** is a clamp, not a fixed value: petrol panels breathe at `clamp(56px, 11vw, 120px)` block padding, stock sheets at `clamp(56px, 9vw, 104px)`. Sticky-nav scroll offset is `88px`.

**Spacing** is a single `8px` unit (`--unit`) multiplied in place. The multipliers actually in use are ×1, ×1.5, ×2, ×2.5, ×3, ×4, ×5, ×6, ×7, ×11, ×13 and ×15 — everything resolves to a whole multiple of 4px, with one ×1.25 (10px) sub-step on the outbound-link icon gap. New spacing is written as `calc(var(--unit) * n)`, never as a raw pixel value.

**Breakpoints** are two, both `max-width`:
- **≤860px** — the law collapses to one column with a `24px` gap; the index column stops being sticky; `.law-label` is hidden (see The No Eyebrow Rule); the index column is removed entirely from petrol panels; marks drop from 48px to 24px.
- **≤640px** — the masthead stops being sticky and stacks; nav becomes a three-column grid of `max-content`; the action becomes a full-width centred block; tick rows narrow their icon column from 32px to 24px.

### Named Rules

**The One Seam Rule.** Every section is an index column plus a body column meeting on one seam. Six sections, one law, no exceptions — a full-bleed panel and a text sheet obey it identically. Any new section adopts `.law` or it does not belong on this page.

**The Eight-Unit Rule.** Type, marks, panels and gaps all resolve against one 8px modular grid. Sizes are `calc(var(--unit) * n)`; measures are stated in `ch`; nothing is nudged with an arbitrary pixel.

## Elevation & Depth

**There is no elevation.** The stylesheet contains no `box-shadow`, no `text-shadow`, no `filter`, no gradient and no blur, and its opening comment states this as a contract. Nothing on this page floats, lifts, or casts.

Depth is entirely tonal and linear. Layering is expressed by which of the three grounds a block sits on (petrol, stock/warm stock, ink), and separation is expressed by a ruled line at one of four weights:

- **3px** — the seam rule at the top of every index column, and the outbound-link underline.
- **2px** — the contact-detail divider, the nav's underline channel, and every dashed placeholder border.
- **1px** — the hairlines bracketing each tick row.
- **2.5px / 4px** — the stroke weights inside the tick mark itself.

### Named Rules

**The Flat Overprint Rule.** This is printed matter. If a treatment could not survive being printed in two flat inks on uncoated stock, it does not belong here. Reach for a ground change or a rule; never for a shadow, a gradient, a glow or a translucent card.

## Shapes

**Everything is a rectangle with square corners.** There is not a single `border-radius` declaration in the stylesheet; `{rounded.none}` is the whole radius system. The action is a hard-cornered yellow block, the tick box is a hard-cornered square, placeholders are hard-cornered dashed rectangles, and the image slot is a hard-cornered 16:9 field.

**The Isotype marks** are the page's only drawn form language. Seven authored symbols — a record sheet, a location pin, two speech shapes, an adult-and-child pair, a gift box, a price tag, and three standing figures — live in an inline SVG sprite, plus an arrow used by the outbound link. Their grammar is fixed and binding:
- Solid filled shapes only; no outline strokes.
- Drawn on a 48-unit `viewBox`, aligned to that grid.
- Holes are cut with `fill-rule: evenodd`, never with a background-coloured shape sitting on top, so a mark reads correctly against any ground.
- Rendered at 48px and 24px only — both whole divisions of the 48-unit grid.

**The tick** is a separate 32-unit figure: a 28×28 square outline with an inset check path, rendered at 32px and 24px.

**Dashes mean unfinished.** A dashed border appears nowhere except on placeholder content. It is the page's one non-solid line and it carries meaning.

### Named Rules

**The Whole-Division Rule.** Marks render only at whole divisions of their grid: 48px and 24px for the Isotype set, 32px and 24px for the tick. A mark at 30px or 40px is a bug, because the 48-unit geometry stops landing on device pixels.

## Components

There is one page and no component library. What follows are the recurring patterns the build actually uses; treat them as the system's vocabulary rather than as an inventory to extend.

### The Action

The page's only button, and its only saturated object. It appears exactly twice — once in the opening panel, once in the contact panel — and both instances point at the same WhatsApp link.

- **Shape:** Hard-cornered rectangle (`{rounded.none}`), `16px 32px` padding.
- **Colour:** Signal yellow ground, ink text. Never inverted, never outlined, never a ghost variant.
- **Type:** Archivo 700 at width 108, `-0.01em` — the display face, so it reads as part of the notice rather than as UI chrome.
- **Hover:** Lifts to `{colors.signal-lift}` and translates `-2px` on the Y axis over 220ms. **Active:** returns to `translateY(0)`, so the press is a physical down-stroke.
- **Narrow (≤640px):** Becomes a full-width centred block with `16px` inline padding.
- **Support:** A `.act-note` beneath it in panel-quiet, max 44ch, carrying the email alternative and the low-pressure line. The note is never yellow.

### Notice Panel

A full-bleed petrol field, used for the opening section, the Christmas offer, and the closing section. On petrol the Isotype mark inverts to white, because its default fill *is* the ground. It carries the layout law like every other section, with the seam rule in `{colors.reversed-rule}`. Contains a heading, one short lead paragraph, the action, and nothing else. No photograph and no illustration ever appears inside one.

### Section Sheet

A light section on stock, with `.alt` swapping to warm stock. Index column: 3px ink rule, 48px petrol Isotype mark, tracked uppercase label. Body column: heading capped at 18ch, an intro paragraph in muted ink, then content at 68ch measure.

### Tick List

The page's one authored moment. A rule-bracketed list where each row is a `32px` icon column plus content, separated by 1px hairlines, with a petrol tick-box and check path.

- **Static reading is the finished one.** The check is stamped by default in CSS. It is *un*-stamped only when both conditions hold: JS ran (adding `.js-motion` to the root) and the user has not asked for reduced motion. No-JS, no-IntersectionObserver, and reduced-motion visitors all see completed ticks, never empty boxes.
- **Motion:** `stroke-dashoffset` 26→0 over 520ms on `cubic-bezier(0.16, 1, 0.3, 1)`, triggered by an IntersectionObserver at 0.4 threshold with an `-18%` bottom root margin, staggered 90ms per row. The stroke carries weight into its stop and settles; it does not snap or bounce.

### Ruled Rows

`.rows` — the tick list's rhythm without the ticks: a rule-bracketed list, 1px hairlines, `24px` block padding per row, a title-step heading capped at 34ch, and body copy in muted ink at 58ch. Three sections share it (Where I train, Prices, and the Thrive roster) so those three do not each invent an arrangement. Roster rows add `.rows-role`, a note-step subtitle in sentence case — deliberately *not* the tracked uppercase label register, which holds up over one to three words and breaks down over a 45-character job title.

### Christmas Figures

`.figs` — two money figures on the offer panel, under a 2px reversed rule. They reuse the `headline-panel` type step rather than inventing a money size, and they are **white, never yellow**: the signal belongs to the action directly beneath them, and a second yellow object would cost the page its only pointer. Emphasis here comes from size, not hue.

### Outbound Link

The Thrive Collective link out. Inline-flex, petrol text, 3px petrol underline, 700 weight, with the arrow mark at 24px. On hover the background fills with the *opposite* stock (warm stock on plain sheets, plain stock on `.alt` sheets) and the arrow translates 4px right over 220ms.

### Navigation

Six text links in the sticky petrol masthead, Public Sans 600 at `0.9375rem`, each sitting over a transparent underline channel. Hover and the scroll-spy current state both fill that channel white over 160ms — the same treatment for both, so the current section reads as a hover that stayed. `aria-current="true"` is the state carrier, set by an IntersectionObserver with a `-45%/-50%` root margin; the styling hangs off the ARIA attribute, not a class.

Below 641px the masthead becomes two compact rows — wordmark, then a full-bleed index strip that scrolls sideways — and **stays sticky**. It was `position: static` there originally, which spent 173px of an 812px screen once and never returned it, pushing the action below the fold on any handset with browser chrome. The strip carries no fade at its overflow edge, because the contract bans gradients: the affordance is the cut item itself. The channel becomes the link's full 44px height, which makes the current section far more legible than a 2px line under text.

`scroll-padding-top` is not one value. The desktop bar is 69px and takes `88px`; the narrow bar is 102px and takes `112px`; a coarse pointer between 641 and 860px wraps the bar to 115px and takes `120px`. Change a bar height and this must move with it, or anchor jumps land underneath the masthead.

### Contact Details

A flex-wrapped definition list under a 2px rule. Terms are tracked uppercase at `0.75rem` in a muted panel tint; values are 600-weight white links.

### Placeholder Markers

Three shapes, one language, all in 2px dashed sage:
- **Draft note** — an inline strip of text stating exactly what is unconfirmed. On petrol it switches to `.on-dark` (lighter border, panel-quiet text).
- **Image slot** — a 16:9 field at 10% sage with a caption naming the asset and its minimum size. `.slots` tiles four of them in a fixed two-column grid for the gallery; the column count is fixed rather than `auto-fit`, which resolved to three in the body column and orphaned the fourth slot on its own row.
- **Quote block** — a dashed container holding placeholder testimonial copy and a placeholder citation.

Every one carries a `data-draft` or `data-slot` hook. `CONTENT.md` holds the user's replacement list. These are build-state devices: when real content arrives, the dashed border leaves with the placeholder.

### Target Size

Tap targets are sized by **input device, not viewport width** — a large phone in landscape sits above the 640px breakpoint and is still a thumb, so `@media (pointer: coarse)` carries the rule and is deliberately placed *before* the width blocks so narrower rules still win. Nav and contact links are `24px` minimum everywhere (they were 23px and 22px, a one-pixel miss of WCAG 2.2 AA 2.5.8) and `44px` on any coarse pointer. The only links left under 24px are inline inside a sentence, which 2.5.8 exempts.

### Focus

A 3px solid ink outline at 3px offset on every link and button, switching to white inside the masthead, petrol panels and footer. Applied via `:where()` so it can be overridden without a specificity fight. There is no yellow in any focus ring.

### Named Rules

**The Complete Static Reading Rule.** Every animated element renders complete and correct with JavaScript disabled and with motion disabled. Motion may emphasise, never inform. The implementation pattern is mandatory: the finished state is the CSS default, and JS un-sets it only after confirming both capability and consent. A future editor who inverts this — animating *in* from an empty default — ships a broken page to every no-JS visitor.

**The Legible Event Rule.** Every state change is a physical event, not a silent swap. The tick draws. The action lifts and presses back. The arrow travels. The nav channel fills. Each has a stated duration and easing (`--ease: cubic-bezier(0.16, 1, 0.3, 1)`; 160ms nav, 180ms link ground, 220ms action and arrow, 520ms tick). Nothing changes appearance instantly and nothing changes without a cause the visitor can see.

## Do's and Don'ts

### Do:
- **Do** give every new section the layout law — index column plus body column on the one seam — including full-bleed panels.
- **Do** express spacing as `calc(var(--unit) * n)` against the 8px unit, and measures in `ch` against `--measure` (68ch).
- **Do** pick a display heading's width-axis value from the established ladder (118 / 116 / 112 / 108 / 104 / 100) before reaching for a new size.
- **Do** draw any new mark in the Isotype grammar: solid fills on a 48-unit grid, holes cut with `fill-rule`, rendered only at 48px or 24px.
- **Do** scope paragraph colour rules to their ground (`.sheet .law-body > p`), so a light-ground rule cannot outrank `.lead` or `.draft.on-dark` on the petrol panels.
- **Do** write the finished state as the CSS default and let JS remove it, so no-JS and reduced-motion visitors get the complete reading.
- **Do** mark unfinished content visibly in 2px dashed sage with a `data-draft` hook, and say plainly what is missing.
- **Do** separate blocks with a ruled line or a ground change.
- **Do** keep `scroll-padding-top` in step with the masthead height at every breakpoint and pointer type; there are three values and they are not interchangeable.
- **Do** size tap targets from `pointer: coarse`, not from a width breakpoint.
- **Do** reach for `.rows` before inventing a new list arrangement, and for an existing type step before adding one to the ramp.

### Don't:
- **Don't** put signal yellow on anything other than the two `.action` links — not headings, underlines, marks, focus rings, hovers or the skip link. `::selection` is the one cited exception and it does not generalise.
- **Don't** introduce a shadow, gradient, glow, blur or translucent card. The build has none, by contract.
- **Don't** add a `border-radius`. Every corner on this page is square.
- **Don't** stack a mark and a tracked uppercase label directly above a heading — that is an eyebrow, and it is banned. The index label is legitimate only beside the heading; it is correctly hidden below 861px.
- **Don't** render an Isotype mark at a size that is not a whole division of its 48-unit grid.
- **Don't** animate an element in from an absent or empty default state.
- **Don't** use dashed borders decoratively; a dash means the content is unfinished.
- **Don't** add a floating or fixed call-to-action bar. The action appears three times in the flow, on the page's own grid line; a persistent CTA is advertising furniture and the thesis refuses it.
- **Don't** mark the overflow edge of the narrow index strip with a fade — that is a gradient.
- **Don't** add a photograph or illustration to a petrol notice panel — the first viewport holds the question, the answer, and the action, and nothing else.
- **Don't** introduce a fourth ground colour or float a tinted card over an existing one.
- **Don't** reintroduce Thrive Collective's identity (dark charcoal, `#FF5A00`, Montserrat). This site links to Thrive; it must never read as a Thrive sub-page.

---

### Open decision

**Font hosting.** Archivo and Public Sans currently load from the Google Fonts CDN via `<link>` in `index.html`, with `preconnect` to `fonts.googleapis.com` and `fonts.gstatic.com` and `display=swap`. Whether to self-host the two families instead is an open decision with the user and is not settled in either direction. Every other visual decision recorded above is closed.

<!-- Provenance: code-led build; no comp exists and none is owed. No shipping rasters exist, so there is no raster provenance to record — the only images in the repo are review screenshots under .impeccable/review/, which are evidence, not shipped assets. -->
