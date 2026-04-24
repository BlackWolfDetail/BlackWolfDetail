# Detailing Site Starter

Static website scaffold for a car detailing business, designed to be easy to host on GitHub Pages.

## What is included

- One-page landing site in plain HTML, CSS, and JavaScript
- Dark graphite "Black Wolf" visual direction
- Responsive layout with hero, services, results, process, reviews, and contact sections
- Before-and-after comparison slider
- Mobile quick-contact dock
- Copy-to-clipboard helpers for phone and email

## Folder structure

```text
detailing-site-starter/
|- index.html
|- styles/
|  |- main.css
|- scripts/
|  |- main.js
|- assets/
|  |- graphics/
|     |- detail-before.svg
|     |- detail-after.svg
|     |- favicon.svg
|- .nojekyll
|- README.md
```

## Replace before publishing

1. Brand name, headline copy, and contact details in `index.html`
2. Phone, email, Instagram, service area, and business hours
3. Placeholder review cards with real customer reviews
4. Sample before-and-after SVGs with real detailing photos
5. Any wording that should be more location-specific or service-specific

## GitHub Pages notes

GitHub says Pages can publish straight from HTML, CSS, and JavaScript files in a repository, and a user site must live in a repo named `<owner>.github.io`.

Recommended path for your friend's site:

1. Create a repository in his GitHub account named exactly `hisusername.github.io`
2. Copy the contents of this folder into the root of that repository
3. Commit and push to the default branch
4. In the repo's Pages settings, publish from the branch/root if needed

The `.nojekyll` file is included so GitHub Pages serves the site as plain static files without Jekyll processing.

## Design direction

This starter now uses a dark graphite palette, restrained metallic highlights, and a few subtle wolf-inspired cues. The goal is to make the name memorable without slipping into a mascot look or overdecorating the page.

## Open-source inspiration

- GitHub Pages docs: https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages?from=20423&from_column=20423
- GitHub Pages quickstart: https://docs.github.com/en/pages/quickstart?apiVersion=2022-11-28
- JuxtaposeJS before/after slider: https://github.com/NUKnightLab/juxtapose
- Animated creative-agency motion reference: https://github.com/Shatlyk1011/agency-website
- Automotive landing page structure reference: https://github.com/MDJAmin/axom-car-dealership-website-html-css-js

## Good next upgrades

- Add real photo galleries and compress them for fast mobile loading
- Add a lightweight booking integration such as Calendly or Square
- Add a form backend such as Formspree if you want a quote form instead of direct text/email
- Add a custom domain after the GitHub Pages version is live
