# Perimeter — Enterprise Cybersecurity Website System

A production-grade marketing site system for **cybersecurity, cloud security, SOC,
SIEM, DevSecOps, endpoint, identity and compliance companies**.

Built with Next.js (App Router) + Tailwind CSS. Dark-first enterprise aesthetic —
CrowdStrike × Vercel × Cloudflare × Linear. No "hacker" clichés: no matrix rain,
no green terminal text, no glowing skulls.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwitejackel-eng%2Fperimeter-security)

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (verify before deploy)
```

## Deploy to Vercel

1. Push this repo to GitHub (already done if you cloned it).
2. Go to [vercel.com/new](https://vercel.com/new), import this repository.
3. Framework preset: **Next.js** (auto-detected). Build command `npm run build`, output auto.
4. Click **Deploy**. Zero config required.

Optionally set `NEXT_PUBLIC_SITE_URL` style values by editing `src/lib/site.ts` —
the sitemap/robots/metadata read from there.

## What's included

| Area | Pages |
| --- | --- |
| Home | Hero + animated **THREAT MONITOR** dashboard, trusted-by marquee, stats band, threat intelligence cards, interactive DevSecOps pipeline, interactive security architecture layers, compliance preview, case-study outcomes, blog teaser |
| Platform | `/platform` — capabilities, architecture recap, telemetry sources, deployment options, tech specs |
| Solutions | `/solutions` index + deep dives: `/solutions/threat-detection`, `/solutions/cloud-security`, `/solutions/devsecops` |
| Compliance | `/compliance` — SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS cards + audit automation |
| Proof | `/customers`, `/case-studies` (before/after metrics incl. the 3,100 → 412 = −86.7% example) |
| Content | `/blog` + article pages, `/resources` gated-asset library |
| Trust | `/security` trust center (practices, status, responsible disclosure, subprocessors), `/.well-known/security.txt` |
| Legal | `/legal` hub + privacy, terms, DPA, acceptable-use documents |
| Misc | Custom themed 404, sitemap.xml, robots.txt, SEO metadata per page |

## Compliance & demo-content disclaimers (important)

This template ships with fictional brands, metrics, testimonials and articles so
every layout looks real out of the box. Before publishing:

- **Only display certifications you actually hold.** The compliance badges are
  placeholders; publishing false claims can violate advertising rules and contracts.
- Replace all sample metrics, customer names and quotes with verified data — and
  get written permission for any real testimonial.
- Have counsel review every document in `/legal`.

Search the codebase for `TEMPLATE NOTE` to find every spot that needs your input.

## Where to edit things

```
src/lib/site.ts        brand name, tagline, nav, footer, emails, domain
src/lib/content.ts     capabilities, solutions, pipeline stages, architecture layers, frameworks, integrations, specs
src/lib/stories.ts     case studies, testimonials, blog posts, legal docs, disclaimers
src/app/**             pages & routes
src/components/**      UI: threat monitor, pipeline, architecture, header/footer…
src/app/globals.css    design tokens (colors live in @theme)
```

Design tokens are Tailwind v4 CSS variables in `globals.css` (`--color-accent`,
`--color-bg`, …). Change them once and the whole system re-skins.

## Tech

- Next.js 16 (App Router, static prerendering) · React 19 · TypeScript
- Tailwind CSS v4 (CSS-first config)
- lucide-react icons
- Zero runtime animation libraries — IntersectionObserver + CSS keyframes

## License

Website template — commercial use permitted for licensees. All placeholder
brands/content remain illustrative only.
