# Sensei Squeegee — info needed before launch

Running list of everything to collect from my brother (and set up) before this site goes live.
Every corresponding spot in the code is marked with a `TODO` comment — search the repo for `TODO`
to find them all.

## To collect from him

- [ ] **Logo** — replace the text logo in `Navbar.jsx`, `Footer.jsx`, `Thanks.jsx`; generate favicons for `/public` and re-add the favicon links in `index.html`
- [ ] **Phone number** — `Footer.jsx`, `Contact.jsx`, `Navbar.jsx` (currently "TO BE CONFIRMED")
- [ ] **Email address** — same files as phone
- [ ] **Confirmed suburb list** — replace "Flagstaff and surrounding Hamilton suburbs" placeholder in `App.jsx`, `WhatWeDo.jsx`, `WhyUs.jsx`, `Contact.jsx`, `Footer.jsx`
- [ ] **Photos of his actual work/equipment** — all current images are placeholders from the layout template, each marked with a TODO comment (rename to lowercase-with-hyphens before adding)
- [ ] **His story for the About page** — name (if he wants it public), background, the dojo connection (`AboutUs.jsx` has a marked placeholder)
- [ ] **Equipment details** — the Toolbox section (`WindowCleaning.jsx`) and WhyUs are deliberately generic; confirm what gear he actually uses (water-fed pole? pure water system?) before making specific claims
- [ ] **Payment terms** — FAQ in `WindowCleaning.jsx` (currently "TO BE CONFIRMED")
- [ ] **Insurance status** — before adding any "fully insured" claim
- [ ] **Pricing approach / extras** — e.g. does he want to offer sticker/paint/hard-water-stain removal as an extra? (FAQ)
- [ ] **Real testimonials** — `src/data/testimonialsData.js` is intentionally empty; slider hides itself until reviews are added

## To set up (accounts & services)

- [ ] **Domain name** — placeholder `senseisqueegee.co.nz` is used in: `HelmetSEO.jsx`, `ContactForm.jsx` (thanks redirect), `public/sitemap.xml`, `public/robots.txt`, `public/_redirects`, and canonical URLs on each page
- [ ] **Basin account + new form** — replace `REPLACE_WITH_NEW_BASIN_FORM_ID` in `ContactForm.jsx`
- [ ] **GitHub repo** — fresh repo, no history from any other project
- [ ] **Netlify site** — new site connected to the new repo
- [ ] **Google Business Profile** — set up for Sensei Squeegee, then link in footer
- [ ] **Analytics** (optional) — new GA4/GTM property if wanted; `index.html` has a TODO marker. Never reuse another business's tracking IDs
- [ ] **Social accounts** (optional) — Facebook/Instagram; TODO markers in `Navbar.jsx` and `Footer.jsx`
- [ ] **Structured data** — re-add LocalBusiness JSON-LD in `HelmetSEO.jsx` once real business details exist

## Launch checklist

- [ ] Search the repo for `TODO` and `TO BE CONFIRMED` — there must be **zero** left before going live
- [ ] Replace all placeholder images (no stock/found images without confirmed licensing)
- [ ] Update `sitemap.xml` lastmod dates and the real domain
- [ ] Set up domain redirects in `public/_redirects`
- [ ] Add favicons
