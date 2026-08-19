# nickdavies — personal trainer, Exeter

A one-page site for Nick Davies, promoting him as an individual trainer
alongside [Thrive Collective](https://www.thrivecollectiveexeter.co.uk/), the
Exeter gym he co-founded.

Three files, no build step, no dependencies.

```
index.html    markup, copy, and the SVG pictogram sprite
styles.css    the whole visual system
app.js        tick-stamp animation and nav section-spy
```

## Run it locally

```bash
python -m http.server 4321
```

Then open <http://localhost:4321>. Any static server works; there is nothing to
compile.

## Deploy

Vercel serves this as a static site with zero configuration — point a project at
the repo and it ships. Or from the project folder:

```bash
npx vercel --prod
```

No framework preset, no build command, no output directory. The whole site is
the repo root.

If a real contact form is ever wanted, Vercel serverless functions drop into an
`/api` folder alongside these files without adopting a framework. As built, the
primary action is a direct WhatsApp link, which needs no backend.

## Before it goes live

See [CONTENT.md](CONTENT.md). There are blockers: the testimonial placeholders,
the shared Thrive email address, and confirmation of the Level 3 qualification.

## Design

The visual world is recorded in `DESIGN.md`, and the durable product facts in
`PRODUCT.md`. The direction contract sits as an HTML comment at the top of
`<body>` in `index.html` — it names what the page is arguing and what it refuses,
and it is the thing to read before changing how anything looks.

Two rules that are easy to break by accident:

- **The yellow `#FFC400` belongs to the action and nothing else.** The moment a
  second element wears it, the page stops pointing anywhere.
- **No shadows and no gradients.** Depth comes from flat overprinted colour. The
  stylesheet has none; keep it that way.
