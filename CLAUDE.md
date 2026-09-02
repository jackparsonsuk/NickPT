# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single static page promoting Nick Davies, a personal trainer in Exeter who
co-founded [Thrive Collective](https://www.thrivecollectiveexeter.co.uk/). Three
files, no dependencies, no build step, deployed to Vercel as a static site.

```
index.html    markup, all copy, and the inline SVG pictogram sprite
styles.css    the entire visual system
app.js        two behaviours: the tick-stamp animation and the nav section-spy
```

## Commands

```bash
python -m http.server 4321          # serve locally at http://localhost:4321
npx vercel --prod                   # deploy (no build command, no output dir)
npx --yes impeccable detect index.html styles.css app.js   # design anti-pattern scan
```

There is no test suite, no linter and no package.json. Do not add a build step,
a framework, or a dependency without being asked — the absence of a toolchain is
a deliberate product decision recorded in `PRODUCT.md` under `## Stack`, so that
Nick can edit his own copy forever.

To screenshot at real device metrics, use `node .impeccable/shot.mjs <url> <out.png> <width> [dpr] [mobile]`.
Do **not** use `chrome --headless --screenshot --window-size` for narrow widths:
Chrome clamps the window to a 500px floor and silently crops the capture instead
of reflowing, which makes a fine page look broken.

## The design contract is binding

The first child of `<body>` in `index.html` is an HTML comment holding the
direction contract — THESIS, OWN-WORLD, STORY, FIRST VIEWPORT, FORM. Read it
before changing anything visual. `DESIGN.md` records the built system;
`PRODUCT.md` records durable product facts and the list of things nobody has
decided yet.

The world is public-health information design: a notice, not a gym advert. Five
rules break the page quietly if violated:

1. **`--signal` (`#F2B705`, Nick's plate yellow) is punctuation, not a colour you
   reach for.** Exactly three kinds of object may wear it: the three `.action`
   links, the `.device` squares on the Christmas panel, and the `.stop` after the
   `h1`. Nothing else — the skip link was yellow at one point and had to be
   changed, and focus rings are ink or paper, never yellow. If something else
   needs emphasis, it gets weight or size. Check with: every element whose
   computed `background-color`, `color`, `fill` or `stroke` is `rgb(242, 183, 5)`
   should be an `.action`, a `.device li`, or the `.stop`. At the time of writing
   that is 3, 16 and 1.
2. **The signature device only counts real things.** A row of `.device` squares
   stands for something countable — six squares for the six-session block, ten
   for the ten. It is Nick's brief's own rule for the motif. If there is nothing
   to count, the device does not go on the page.
3. **No shadows, no gradients, anywhere.** Depth is flat overprinted colour. The
   stylesheet says so in its opening comment and currently contains neither.
4. **One layout law.** Every content section is `.law`: a sticky index column
   (pictogram + uppercase label) beside a body column. Sections do not invent
   their own arrangements. Inside a body column, reach for the existing `.ticks`
   or `.rows` list before writing a new one — `.rows` is already shared by three
   sections for exactly that reason.
5. **Pictograms are authored SVG in Nick's icon grammar**: a 24-unit grid, an
   even 2-unit stroke, square caps and joins, no rounding. Never substitute an
   emoji, an icon font, or one of Nick's PNGs — a raster cannot invert on an ink
   panel. Two mechanics are binding and both were bugs first:
   - `stroke-width="2"` goes on the `<symbol>` as an attribute. Set as a CSS rule
     on `.mark` it computes to an absolute 2 CSS pixels, inherits across the
     `<use>` boundary already resolved, ignores the viewBox scale, and every mark
     silently draws at half weight. A `<g>` wrapper does not help either: `<use>`
     clones the symbol, not its ancestors.
   - Colour rides on `color` and is read as `currentColor`, so
     `.notice .mark { color: var(--paper) }` inverts a whole mark on an ink
     ground in one declaration. A solid shape inside a symbol declares
     `fill="currentColor"` for itself.

Motion: the tick list is the page's single authored moment. Ticks are stamped by
default in CSS; `app.js` adds `.js-motion` and only then un-stamps them, so
no-JS and `prefers-reduced-motion` users get the finished state rather than an
empty one. Preserve that inversion — the naive version leaves empty boxes for
anyone the animation does not reach.

## Content rules

Nick had no photographs and no client testimonials when this was built, and the
site must never paper over that.

- **Do not invent testimonials, clients, results, or qualifications.**
  Placeholders are marked with `data-draft` and a dashed `--sage` border, and
  they must stay obviously fake. `CONTENT.md` is the list of what Nick owes.
- Every fact on the page comes from Nick's own supplied copy of **19 Aug 2026**,
  which replaced the earlier positioning wholesale, plus his public Thrive bio.
  Anything beyond those needs a source. Where the 19 Aug copy differs from his
  18 Aug message, the newer text wins: ME since he was seventeen (not "diagnosed
  2007"), the PT qualification **in progress and due by Christmas** (not a
  completed Level 3 Diploma), and no 35kg loss or half-marathon claim.
- **Prices are now real** and on the page: £35 a session, blocks of six or more
  discounted, groups from £10, and a Christmas offer of 6 for £150 / 10 for £225.
  Do not adjust or extrapolate any of them.
- **The page is positioned for dads** who want to keep up with their kids and be
  there for them. That narrowing was the user's explicit direction on 19 Aug 2026.
- **His story is credential, not product.** The ME and the sofa establish why he
  is trustworthy. The page is explicitly *not* positioned as chronic-illness
  coaching or as a weight-loss programme — the user ruled both out.
- The Thrive section carries **four biographies of other named people** (Tom
  Bottoms, Mark Flynn, Sarah Patterson, Charlie Reynolds), supplied by Nick and
  unverified against those people. Do not embellish them, and do not add a fifth.
- The starting weight is **twenty stone (126kg)**. The supplied copy originally
  read "twenty five stone (126kg)" — two different weights — and Nick settled it
  from his own data on 24 Aug 2026. The `data-draft` note that flagged it is
  gone. Do not reintroduce either the note or the 25 st figure.
- The visual identity is **deliberately unlike Thrive's** (Thrive is dark
  charcoal, `#FF5A00` orange, Montserrat). Do not drift toward matching it.

## Brand

The palette, the type and the icon grammar come from **Nick's own brand brief of
Aug 2026** (`website-brand-brief.docx`, with twelve icon PNGs). Five colours and
two free Google faces, and he asked for the space to be left for a logo he has
not chosen yet — the trading name may change with it, so the masthead carries a
dashed `.logo-slot` rather than a mark.

| Token | Hex | Job |
| --- | --- | --- |
| `--ink` | `#141B22` | dark grounds, headings on light, the foot |
| `--steel` | `#2E4756` | body text on light grounds; seam rules on dark ones |
| `--paper` | `#ECEDE9` | light grounds, and all text on dark grounds |
| `--grey` | `#7A8C99` | secondary text **on dark only**; dashed placeholder marks |
| `--signal` | `#F2B705` | plate yellow — see rule 1 |

`--paper-2` and `--rule` are tints derived from those five; there is no sixth
hue in the stylesheet. **Grey is 2.96:1 on paper and fails AA there**, so it
never carries text on a light ground — steel does, at 8.3:1. That is the one
place the build narrows the brief rather than following it.

Type is **Oswald** (headings, buttons, nav, labels — uppercase for `h1`, `h2` and
`.sub` only, sentence case for row headings) and **Inter** (body, never italic,
emphasis at 600). Oswald is condensed, so it sets far more per line than the old
display face: measures were tightened rather than sizes cut, and the nav needed
a 32px gap because at 20px the condensed caps ran the whole bar into one word.

Nick's brief permits more yellow than this build uses — a yellow square before
the wordmark, yellow accents inside the icons, a yellow header on a price block.
Holding it to three objects is a judgement about where the accent is worth most,
not a finding, and it is his to overturn.

## Accessibility

Targets WCAG 2.2 AA, and this is not decorative: the audience explicitly
includes people with long-term health conditions. Keep real text over images of
text, visible focus rings (`--ink` on light grounds, `--paper` on ink — never the
signal yellow, which is reserved), full keyboard operation, and honoured
`prefers-reduced-motion`.

## Impeccable

The [impeccable](https://impeccable.style/) design skill is installed at
`.claude/skills/impeccable/` (gitignored; restore with `npx impeccable install`).
`PRODUCT.md`, `DESIGN.md` and `.impeccable/config.json` are tracked and are the
project's real records. `buildPath` is set to `code`, meaning builds go straight
to code and the ambition lives in the direction contract rather than in a
generated comp.

Its detector does not resolve `calc()`, `var()` or `clamp()`. It therefore
reports false `cramped-padding` and `flat-type-hierarchy` findings against this
stylesheet, which uses all three throughout. Measure computed values in a real
browser before acting on either.
