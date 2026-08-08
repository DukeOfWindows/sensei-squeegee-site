# Sensei Squeegee — info needed before launch

Running list of everything still to collect / set up before this site goes live.
Every corresponding spot in the code is marked with a `TODO` comment — search the repo for `TODO`
to find them all.

## Done ✅

- [x] Logo — in Navbar/Footer/Thanks; favicons generated in `/public`
- [x] Brand colours — `#00ADF2` light blue, `#222544` navy (Tailwind tokens `sensei-blue` / `sensei-dark`)
- [x] Phone number — 027 202 8687 (site-wide)
- [x] Email — barney@senseisqueegee.co.nz (site-wide)
- [x] Service area — "Ngāruawāhia to Te Awamutu" (site-wide)
- [x] About page story (Toatakai Karate, 2024 trade apprenticeship, values) + link to toatakaikarate.co.nz
- [x] Equipment confirmed — pure water system, professional squeegees, telescopic poles
- [x] Payment terms — invoiced, due on completion; bank transfer / EFTPOS / cash

## Still to collect from him

- [ ] **Photos of his actual work/equipment** — current images are placeholders from the layout template, each marked with a TODO comment; he said he'll swap the Tools of the Trade photos himself later (use lowercase-with-hyphens filenames!)
- [ ] **Insurance status** — before adding any "fully insured" claim
- [ ] **Extras** — does he want to offer sticker/paint/hard-water-stain removal as a quoted extra? (FAQ)
- [ ] **Real testimonials** — `src/data/testimonialsData.js` is intentionally empty; slider hides itself until reviews are added

## Still to set up (accounts & services)

- [ ] **Domain name** — placeholder `senseisqueegee.co.nz` used in: `HelmetSEO.jsx`, `ContactForm.jsx` (thanks redirect), `public/sitemap.xml`, `public/robots.txt`, `public/_redirects`, and canonical URLs on each page. (The email address suggests the domain is intended — confirm it's actually registered & pointed at Netlify.)
- [ ] **Basin account + new form** — replace `REPLACE_WITH_NEW_BASIN_FORM_ID` in `ContactForm.jsx` — **the quote form does not work until this is done**
- [ ] **Google Business Profile** — set up for Sensei Squeegee, then link in footer
- [ ] **Analytics** (optional) — new GA4/GTM property if wanted; `index.html` has a TODO marker
- [ ] **Social accounts** (optional) — TODO marker in `Footer.jsx`
- [ ] **Structured data** — re-add LocalBusiness JSON-LD in `HelmetSEO.jsx` once domain/GBP exist

## Launch checklist

- [ ] Search the repo for `TODO` and `TO BE CONFIRMED` — there must be **zero** left before going live
- [ ] Replace all placeholder images (no stock/found images without confirmed licensing)
- [ ] Update `sitemap.xml` with the real domain; set up redirects in `public/_redirects`
