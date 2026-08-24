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

The world is public-health information design: a notice, not a gym advert. Four
rules break the page quietly if violated:

1. **`--signal` (`#FFC400`) touches exactly one thing: the action.** Only the two
   `.action` links may wear it. The skip link was yellow at one point and had to
   be changed to white — a second yellow object costs the page its only pointer.
   If something else needs emphasis, it gets weight or size, never that yellow.
   Check with: every element whose computed `background-color`, `color` or `fill`
   is `rgb(255, 196, 0)` should be an `.action`.
2. **No shadows, no gradients, anywhere.** Depth is flat overprinted colour. The
   stylesheet says so in its opening comment and currently contains neither.
3. **One layout law.** Every content section is `.law`: a sticky index column
   (pictogram + uppercase label) beside a body column. Sections do not invent
   their own arrangements. Inside a body column, reach for the existing `.ticks`
   or `.rows` list before writing a new one — `.rows` is already shared by three
   sections for exactly that reason.
4. **Pictograms are authored SVG on a 48-unit grid**, fill-only, holes cut with
   `fill-rule="evenodd"` so every mark works on any background. Never cut a hole
   with a background-coloured shape, and never substitute an emoji or an icon
   font. On a petrol panel the mark must invert to white (`.notice .mark`); its
   default fill is petrol, which is the panel's own ground.

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

## Accessibility

Targets WCAG 2.2 AA, and this is not decorative: the audience explicitly
includes people with long-term health conditions. Keep real text over images of
text, visible focus rings (`--ink` on light grounds, white on petrol — never the
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
