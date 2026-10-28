# What Nick needs to supply

Everything below is either a placeholder or a fact worth double-checking before
the site goes live. Nothing on the site invents a client, a result, a price or a
qualification, and it should stay that way.

Anything marked **BLOCKER** must be replaced before launch.

All copy on the page as it now stands came from Nick's own text of 19 Aug 2026,
which replaced the earlier "not sure the gym is for you" positioning wholesale.

---

## 1. The weight figure — SETTLED 24 Aug 2026

The supplied copy said *"twenty five stone (126kg)"*, which are two different
weights (25 st ≈ 159 kg; 126 kg ≈ 20 st). Nick checked his own data on
**24 Aug 2026** and confirmed the figures are **126 kg and twenty stone**. The
page now reads "twenty stone (126kg)" and the dashed draft note has been
removed. Do not reopen this without new word from Nick.

Also note the earlier version of this page said Nick had lost **35kg**. The new
copy gives a starting weight instead and no total loss, so the 35kg claim has
been removed rather than reconciled. If he wants it back, it needs to be
consistent with whichever starting figure is correct.

---

## 2. Copy that has changed meaning — confirm

| Was | Now | Why it matters |
|---|---|---|
| "diagnosed with ME in 2007" | "lived with ME since I was seventeen" | Both may be true; the page now uses only the second. |
| "I've since taken my Level 3 Diploma in Personal Training" | "currently training towards my Personal Trainer qualification, which I'll complete by Christmas" | The old line claimed a completed qualification. **This is now correctly stated as in progress** — the previous blocker is resolved. Do not let it drift back to a completed claim before it is completed. |

Dropped in the rewrite, and available if Nick wants it back: his background in
**business management, teaching and leadership**. It is a sourced fact from his
public Thrive bio and adds credibility, but the new copy does not mention it.

---

## 3. Testimonials — BLOCKER CLEARED 28 Oct 2026

Nick shared a Drive folder on **28 Oct 2026** containing a `Testimonials` doc with
two real quotes. Both are now on the page and the three dashed placeholders are
gone, so the section can go live. `.quote` is solid with an ink left edge;
`.quote[data-draft]` keeps the dashed grey, so a placeholder can never again be
mistaken for published copy.

What went up, and what was done to it:

- **Stuart, client — October 2026.** Supplied as ~350 words with a five-star row.
  Shortened to three consecutive sentences; **no wording was changed**. Two
  paragraphs were deliberately left out: one crediting **nutrition tracking**,
  which is not a service the page offers and would start advertising one, and the
  closing recommendation.
- **Pete, Performance Training Academy — October 2026.** Verbatim, minus a stray
  closing quote mark and two emoji.

Three things still worth knowing:

- **Pete is an industry peer, not a client**, and his line is future tense —
  *"you are going to do great in the industry"*. On a page selling sessions now
  that can read as "not established yet". The cite names his academy so the
  reader can tell what kind of endorsement it is. Nick's call whether to keep it.
- **Neither quote is from a dad, and neither mentions children.** The page is
  positioned for dads; its testimonials are not. Stuart already trains with Nick
  and clearly rates him — if he is a dad, one line from him about keeping up with
  his kids would be worth more than anything else outstanding. It has to come
  from him, not from us.
- **Neither has a town**, so neither cite claims one.

**Instagram handle — SETTLED 28 Oct 2026.** Stuart's testimonial named Nick as
`@nick_pt_exeter`, which conflicted with the `@wheres_nick_gone` the page carried.
Confirmed: **`@nick_pt_exeter` is a new account for the PT work.** The page now
uses it in both places (contact list and footer) and `@wheres_nick_gone` no longer
appears anywhere on the site. The old handle may still be live as Nick's personal
account; it is simply no longer the one the site points at.

---

## 4. Photographs — three live, two sets still missing

Nick's Drive folder of **28 Oct 2026** ("Nick PT Exeter photos") holds roughly 32
stills and 45 video clips. **Seven stills are now on the page** — one portrait in
About and a six-image gallery in a 2 × 3 grid. The two original slots nothing
answered have been **deleted rather than left dashed**, per the rule below.

| File | Caption | Note |
|---|---|---|
| `img/nick-portrait.webp` | *About section* | Nick in a Thrive top, checking his watch |
| `img/training.webp` | Nick training | On TRX straps. **Not shot at Thrive** |
| `img/facility.webp` | Thrive Collective facility | The empty gym floor |
| `img/between-sets.webp` | Nick, between sets | Seated on a bench, towel round his neck |
| `img/rack.webp` | Rack and bench | Half rack, loaded bar |
| `img/dumbbells.webp` | Dumbbells | Detail |
| `img/plates.webp` | Plates | Detail |

Two of the six gallery images show Nick; one shows the room; three are equipment
details. That balance is what the folder supports, not a preference.

**The page no longer says what is missing.** A line reading *"Two of the four sets
exist so far. Group sessions and progress photographs are not here yet"* was on
the page and was **removed on 28 Oct 2026 at the user's request**. Nothing on the
page now flags the gaps below — this file is the only record of them.

### Everything is duotoned, and that is a design decision

Every usable photograph of the real space is dominated by **Thrive's orange** —
the hex logo, the Mirafit racks, the branded kit. Dropping three of those in full
colour would have imported Thrive's identity onto a page whose brand rule is to
stay *deliberately unlike* it. So each image is mapped to the page's own
`--ink`→`--paper` ramp at export time and baked in, not filtered in CSS. That
also satisfies the no-gradients, flat-overprinted-colour rule. Originals are
untouched in Drive; `scratchpad/prep.py` is the script. **Reversible**: re-export
without the duotone step if Nick prefers colour.

### What could not be used

- **`photo one - pt training.jpg`** — two members of the public clearly
  identifiable in the background, and not shot at Thrive. No consent on record.
- **`photo two - pt training.jpg`** — a commercial chain gym, white walls and
  tiled floor, with two more identifiable people in the mirror. Contradicts the
  page's claim that Nick trains at Thrive.
- **`photo three`** (the one used) is Nick alone, but also **not at Thrive**,
  which is why it is captioned "Nick training" rather than "Training sessions".
- **There is still no photograph of Nick training an actual client.** Every shot
  supplied is Nick alone or an empty room. The "Training sessions" category is
  therefore not genuinely filled, and the caption does not pretend otherwise.

### Still outstanding

- A photograph of a real session, with the client's written permission.
- Dads-and-lads / dads-and-daughters group shots. **Any photograph a child
  appears in needs explicit parental permission on record.**
- Progress and transformation shots, which need the client's explicit permission
  and were ruled out as a positioning anyway (see `CLAUDE.md`).

Two housekeeping notes:

- The Thrive stills carried **GPS coordinates in their EXIF**. All EXIF is
  stripped on export; do not ship a photo from this folder without stripping it.
- The Drive folder is currently shared as **"anyone with the link"** — it opens
  with no Google sign-in. Harmless for gym equipment, but worth Nick knowing.

No photos at all remains a workable option — the page was designed to work
without them. Delete slots rather than leave them dashed.

---

## 5. Contact details — confirmed

All live and correct as of 19 Aug 2026:

- WhatsApp `07812 055812`, linked as `https://wa.me/447812055812`
- Email `nickptexeter@gmail.com` — **his own address; the previous blocker
  (the shared `thrivecollectiveexeter@gmail.com` inbox) is resolved**
- Instagram `@nick_pt_exeter` — his PT account, confirmed 28 Oct 2026 (§3)
- Bookings via `thrivecollectiveexeter.co.uk`

---

## 6. Prices and the Christmas offer

Now on the page as supplied:

- Personal training from **£35**, discounted in blocks of six or more
- Group sessions from **£10** per person, inclusive of both parties for
  dads-and-lads and dads-and-daughters
- Christmas offer: **6 sessions £150** (stated as around 30% off) and
  **10 sessions £225**

Two things to check:

- **Is the £150 offer really ~30% off?** Six sessions at the £35 standard rate is
  £210, so £150 is about 29% off. The claim holds against £35 — but it stops
  holding if the standard rate moves, and "around 30% off" is a price claim in
  advertising terms. Revisit it if £35 changes.
- **Does the block discount stack with the Christmas offer, or are they the same
  thing?** The Prices section promises "a discount when you book in blocks of six
  or more", and the Christmas offer is six sessions at a discount. A reader can
  reasonably read those as two separate reductions. Worth one clarifying line.
- **The offer has an expiry nobody has stated.** The `#christmas` section will
  read as stale in January. It is built as a self-contained petrol panel with no
  nav link precisely so it can be deleted in one cut. Decide the end date.

Still undecided, and deliberately absent from the page: session length,
availability, opening hours at either venue, and how the dads-and-lads and
dads-and-daughters groups are priced when more than one child comes.

---

## 7. Other people's details — confirm before launch

The Thrive section carries four trainer biographies (Tom Bottoms, Mark Flynn,
Sarah Patterson, Charlie Reynolds) exactly as Nick supplied them, including
third-party claims — a Stanford athletic scholarship, national bodybuilding
competition, specific qualifications, and that two of them are mid-training for
further ones.

**Each of those four should see their own paragraph before this goes live.** They
are factual claims about named people on a site none of them controls, and two of
them are described as *currently* training towards something, which will date.
Charlie Reynolds and Sarah Patterson are not Thrive co-founders and are listed
with their own businesses, so their consent matters most.

Also: Tom's biography ends "or myself with my own weight loss journey", which is
Nick's voice inside a paragraph about Tom. It reads correctly on the page because
the whole section is written in the first person, but check he is happy with it.

---

## 8. The web design credit — details needed

Nick asked on **24 Aug 2026** for a footer credit so visitors can get in touch
about having a site built, and specifically asked that it read as **local**.
Nothing has been added yet, because a credit publishes real contact details on a
public page and every value below has to be supplied, not guessed.

Needed before the credit goes in:

1. **Trading name.** Personal name, or a business name if one exists. This is
   what appears in the footer.
2. **One contact route, and only one.** Either:
   - an email address to expose as a `mailto:` link — note that a plain address
     in the markup will be scraped, so a role address is safer than a personal
     inbox; or
   - a URL to link out to, if there is a portfolio or business site; or
   - a social handle, if that is where enquiries actually arrive.
3. **The locality wording.** "Exeter", "Devon", "South West" — whichever is
   truthful. The page's own copy says Exeter, so a mismatch will read oddly.
4. **The wording of the credit itself.** Something like "Site by NAME, PLACE"
   versus "Websites for Exeter businesses — NAME". The second solicits work; the
   first only credits it. Nick's request implies the first is not enough.
5. **Whether Nick has agreed to it as a solicitation.** It is his site and his
   audience. He asked for it, so this is a confirmation, not a question — but it
   should be in writing.

**Settled and built, 24 Aug 2026.** The credit reads *"Made by Jack — websites for
businesses in Exeter and the South West. jwjparsons@gmail.com"*, on its own row
below Nick's two footer lines, dimmer and a size down, with the address as the
only link. Supplied by Jack Parsons, who confirmed the address is fine to publish.

One caveat worth revisiting: a plain `mailto:` in the markup will be harvested.
That was accepted knowingly, but a role address on a domain would age better than
a personal Gmail if enquiries ever pick up.

Design note for whoever adds it: the footer is the `.foot` block at the end of
`index.html`, currently two lines inside `.foot-in`. A third line fits the
existing flex layout without new CSS. The credit must **not** wear `--signal`
yellow; that colour belongs to the two `.action` links alone.

---

## 9. Before launch

- **Replace the stand-in monogram.** The dashed `.logo-slot` was replaced on
  **28 Oct 2026** by `.logo-mark`: a 34×34 paper square carrying **NPT** in ink,
  set in Oswald at the documented label step (`0.75rem`, weight 500, `0.08em`
  tracking) rather than drawn, so it ships no asset and deletes in one line. It
  is `aria-hidden` because the wordmark beside it already says the name, and it
  carries `data-draft` to mark it provisional in the markup.
  **It is a holding device, not a logo.** Nick has still not chosen a real mark,
  and the trading name may change with it (see `## Brand` in `CLAUDE.md`). It is
  deliberately plain so that it reads as typography rather than as an identity —
  if it starts looking like a logo people have got used to, that is a problem,
  not a success. The wordmark also stands perfectly well with no mark at all.
- Point the site at its real domain.
- Add a real favicon.
- Add an OG share image, 1200x630, and `og:url`. The whole site converts through
  a link pasted into WhatsApp, and with no image that renders as a bare grey card.
- There is deliberately **no** `rel=canonical` tag. Add a self-referential one only
  once the real domain exists; a wrong canonical is worse than none.
- Decide whether the site needs a privacy note. It sets no cookies and runs no
  analytics as built, so probably not — but fonts currently load from Google's
  CDN, which does expose visitor IPs to Google. Self-hosting the two font files
  removes that question entirely and is the recommended follow-up.
