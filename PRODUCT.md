# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: plain static HTML/CSS (+ minimal vanilla JS), deployed to Vercel as a
zero-config static site. Chosen over Astro/Next because the surface is a single
page: no build step, no dependency upkeep, no build minutes, and the copy stays
editable by a non-developer. Vercel serverless functions remain available under
`/api` if a real contact form is added later without adopting a framework.

## Users

Primary: **dads in and around Exeter who are tired of watching their kids play
from the sofa** and want to be able to keep up with them and be present for them.
Typically carrying weight, out of the habit of exercise, and more worried about
being a good father than about a physique. They are deciding whether to make
first contact at all, not comparing programme details. The site's job is to lower
the cost of that first message.

This narrowed on 2026-08-19 at the user's direction, from the broader "people who
feel gyms are not for them". The earlier audience is still served by the same
page — the tone and the ME paragraph both still land for beginners and returners
— but the headline, the story and the group offers now name dads explicitly.

Secondary: their kids, via the dads-and-lads and dads-and-daughters groups; and
general 1-2-1 clients with ordinary fitness goals who are choosing a trainer in
Exeter, including confident gym-goers who only want online accountability.

## Product Purpose

A one-page personal site for Nick Davies, letting him promote himself as an
individual trainer separately from Thrive Collective, and giving him somewhere
to hold his own story, testimonials and images. Success is a stranger sending
Nick a WhatsApp message or email.

## Positioning

Nick is a Thrive Collective co-founder who arrived as a client, not a trainer,
and a dad of three who sat on his own sofa too tired to play with his kids. He
has lived with ME since he was seventeen. A Christmas gift of six sessions with
Tom Bottoms changed that, and he is now training towards his own PT
qualification, due to complete by Christmas 2026.

He is selling neither chronic-illness coaching nor a weight-loss programme. He is
offering ordinary 1-2-1 training, and family training, from a father who has been
the man on the sofa. Two things a neighbouring trainer cannot truthfully copy:
the client-to-co-founder-to-trainer route, and the dad's own starting point.

The ME is credential, not product, and the copy says so in his own words: "not a
specialist qualification, just real, lived understanding".

## Operating Context

Nick trains at three kinds of venue: Thrive Collective (Exeter Business Centre,
39 Marsh Green Road West, Marsh Barton, Exeter), T60 at Seale Hayne (which may
carry a travel charge), and private gyms by arrangement. Thrive is a small
private personal-training facility, not a big-box gym.

Visitors will often arrive from Nick's Instagram or from Thrive's team page, and
many will cross-check him against thrivecollectiveexeter.co.uk. The site must
send people to Thrive for the gym itself and for booking, and keep enquiries
about Nick coming to Nick.

Nick is building his own training business alongside continuing work at Thrive,
so the site has to read as his, not as a Thrive sub-page.

## Capabilities and Constraints

- Single page. Six nav sections (About Nick, What I offer, Prices, Thrive,
  Testimonials, Contact) plus two reachable only by scrolling: the Christmas
  offer panel and Where I train.
- The Christmas offer is a self-contained petrol panel with no nav link, so it
  can be deleted in one cut when the season ends.
- Static hosting on Vercel; no database, no auth, no CMS.
- Primary action is a direct WhatsApp message or email to Nick. No contact form
  and no form backend in v1. Actual booking happens on Thrive's site after
  sign-up, so this page never needs a calendar.
- Must link out to Thrive Collective rather than reproduce it.

### Undecided — do not invent

- **The starting weight.** The supplied copy says "twenty five stone (126kg)";
  those are two different weights (25 st is about 159 kg, 126 kg is about 20 st).
  Unresolved, and flagged on the page. See `CONTENT.md` section 1.
- The exact awarding body and completion date of the PT qualification. As of
  2026-08-19 it is **in progress, due by Christmas 2026** — which resolves the
  earlier open question of whether it was already held.
- When the Christmas offer expires, and whether the six-session block discount
  is the same reduction as the six-session Christmas price or a separate one.
- Session length; availability and opening hours at Thrive and at T60; the travel
  charge for T60; per-child pricing for the family groups.
- Whether the dads-and-lads and dads-and-daughters groups have enough interest to
  run at all — the copy asks readers to say so, which means the page is doing
  demand discovery, not selling a scheduled class.
- Whether Nick wants his own domain. His own email (nickptexeter@gmail.com) is
  now settled, which resolves the earlier open question.
- Thrive's team page listing for Nick ("Co-Founder & Client") is Thrive's call,
  not this site's.

## Brand Commitments

- Name: Nick Davies. Location: Exeter, UK.
- Affiliation with Thrive Collective is real and must be visible and linked.
- Existing channels: Instagram @wheres_nick_gone, WhatsApp 07812055812, email
  nickptexeter@gmail.com. Bookings run through thrivecollectiveexeter.co.uk.
- Voice: honest, warm, low-pressure, plain-spoken. Thrive's own register is
  "no pressure, no sales pitch — just a conversation." Nick's site should sit
  comfortably beside that without imitating it.
- Explicit user decision: the visual identity is fully distinct from Thrive's
  (Thrive is dark charcoal, #FF5A00 orange, Montserrat). Nick's site must not
  read as a Thrive sub-page.

## Evidence on Hand

Sourced from Nick's own supplied copy (2026-08-19), which supersedes his message
of 2026-08-18 wherever the two differ, plus his public bio on
thrivecollectiveexeter.co.uk/meet-the-team:

- Dad of three; had three kids under five at his heaviest.
- Lived with ME since age seventeen.
- Christmas gift of six PT sessions with Tom Bottoms; client to co-founder.
- PT qualification in progress, due by Christmas 2026.
- Co-founder of Thrive Collective with Tom Bottoms and Mark Flynn.
- Venues, prices and the Christmas offer as listed on the page.
- Trainer biographies for Tom Bottoms, Mark Flynn, Sarah Patterson and Charlie
  Reynolds, supplied by Nick. These are claims about **other named people** and
  each of the four should approve their own paragraph before launch.

Superseded, and no longer on the page: "diagnosed with ME in 2007" (now "since I
was seventeen"), the completed Level 3 Diploma claim (now in progress), the 35kg
loss and the half-marathon, and the business-management / teaching / leadership
background. None of these are known to be false; the new copy simply does not
carry them, and the 35kg cannot be restored until the starting weight is settled.

Absent, and must not be fabricated:

- No client testimonials of any kind. Any testimonial block ships as an obvious
  placeholder.
- No photography. No portrait, no training shots, no group shots, no facility
  images cleared for use. Any shot of a child or a client transformation needs
  documented permission before it goes anywhere near the page.

## Product Principles

1. **The first message is the conversion.** Every section is judged on whether
   it makes sending a WhatsApp less frightening, not on how much it explains.
2. **His story is credential, not product.** The ME and the sofa are why he is
   trustworthy; they are not the thing being sold. Never let the page read as
   chronic-illness or weight-loss coaching. What is being sold is being able to
   keep up with your kids.
3. **Say only what is true.** No invented clients, results, prices or
   qualifications. Placeholders must look like placeholders.
4. **Point at Thrive, don't absorb it.** Thrive gets a real, generous section
   and an outbound link; the gym's story is not retold here.
5. **Anyone can edit it.** Copy changes should never require a toolchain.

## Accessibility & Inclusion

The audience explicitly includes people with long-term health conditions and
reduced mobility, and Nick's own route in was through chronic illness — a site
that is hard to use contradicts the pitch. Target WCAG 2.2 AA: real text over
images of text, visible focus states, full keyboard operation, honoured
`prefers-reduced-motion`, and contrast that holds at AA for body copy.
