# What Nick needs to supply

Everything below is either a placeholder or a fact worth double-checking before
the site goes live. Nothing on the site invents a client, a result, a price or a
qualification, and it should stay that way.

Anything marked **BLOCKER** must be replaced before launch.

All copy on the page as it now stands came from Nick's own text of 19 Aug 2026,
which replaced the earlier "not sure the gym is for you" positioning wholesale.

---

## 1. The weight figure — BLOCKER

The About paragraph says *"twenty five stone (126kg)"*. Those two numbers do not
describe the same weight:

- twenty five stone ≈ **159 kg**
- 126 kg ≈ **twenty stone**

Most likely "twenty stone" was intended, since 20 st and 126 kg agree almost
exactly. Nothing has been changed on Nick's behalf, because this is a fact about
him and only he can settle it. A dashed draft note sits under the paragraph
saying so, and both the note and the wrong figure must go before launch.

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

## 3. Testimonials — BLOCKER

`#words` holds three dashed placeholder blocks and a line saying there is nothing
real yet. **The site must not launch with these visible.** Two options:

- Send two or three real quotes with a first name and, ideally, a town. Two or
  three sentences each. The most useful one is from a dad who was nervous before
  his first session, because that is exactly who the page is written for; a
  second useful one is from a dads-and-lads or dads-and-daughters group.
- Or delete the whole section, plus its `Testimonials` nav link, until quotes
  exist. An honestly absent section beats a padded one.

---

## 4. Photographs

Five marked image slots, all empty.

**One portrait**, in the About section:

- Landscape, at least 1600px wide. JPG or WebP.
- What works: Nick mid-conversation, or in the Thrive space, or with his kids —
  looking like a person you would talk to. What does not: arms folded, gym-advert
  poses. The whole design argues against that, and one stock-looking photo would
  undo it.

**Four gallery sets**, in the Testimonials section, as Nick listed them:

- Training sessions
- Dads and lads / dads and daughters groups
- Progress and transformation shots
- Thrive Collective facility

For each, swap the `<div class="slot-art">` for a real `<img>` with `width`,
`height` and `alt`. Progress and transformation shots need the client's explicit
permission on record, and the same goes for any photograph a child appears in.

No photos at all is a workable option — the page is designed to work without
them, and it does. Delete the slots rather than leave them dashed.

---

## 5. Contact details — confirmed

All live and correct as of 19 Aug 2026:

- WhatsApp `07812 055812`, linked as `https://wa.me/447812055812`
- Email `nickptexeter@gmail.com` — **his own address; the previous blocker
  (the shared `thrivecollectiveexeter@gmail.com` inbox) is resolved**
- Instagram `@wheres_nick_gone`
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

## 8. Before launch

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
