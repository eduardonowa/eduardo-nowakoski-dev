# CV ↔ Site Alignment Audit

Audit date: July 2026. Compares live site content (`lib/i18n/translations.ts`, `lib/constants/contact.ts`) against PDFs in `public/resumes/`.

## Aligned

| Item | Site | PDFs |
|------|------|------|
| NTT Data period | Mar 2025 – Mar 2026 | Mar 2025 – Mar 2026 |
| Merkle period | Mar – Dec 2025 | Mar – Dec 2025 |
| Newfold period | Apr 2026 – Present | Apr 2026 – Present |
| NTT/Enel metrics | 20% performance, 80% incidents | 20% performance, 80% incidents |
| Merkle/Stellantis metrics | 40% mobile/desktop | ~40% performance |
| AngularJS → Angular migration | 4 portals | 4 portals |
| AEM keywords | HTL, Sling Models, OSGi, JCR, Dispatcher | Present in AEM CV |
| GitHub | github.com/eduardonowa | Not listed (site adds this) |

## Requires PDF update (manual)

| Item | Site (current) | PDFs (outdated) | Action |
|------|----------------|-----------------|--------|
| **Email** | contact@eduardonowakoski.dev | eduardo_nowa@hotmail.com | Regenerate all 4 PDFs with professional email |
| **PT job titles** | Engenheiro AEM & Front-End | Desenvolvedor AEM Sr. / Desenvolvedor Front-End | Align titles to "Engenheiro" for senior positioning |
| **EN AEM CV title** | Senior AEM & Front-End Engineer | Senior AEM Engineer / Full-Stack AEM Engineer | Minor — acceptable variance; optional harmonization |
| **GitHub** | Linked in Header + Contact | Missing | Add github.com/eduardonowa to PDF header |
| **Compass incident metric** | 50% (timeline only) | Not stated in Compass section of AEM CV | Optional: add to Compass bullets for consistency |

## Site-only additions (not expected in PDFs)

- Case study section (`#case-study`) — Enel portal migration narrative
- AEM Architecture decisions section (`#aem-architecture`)
- Project card links to GitHub showcase and case study
- Metrics methodology (baseline, method, period) — PDFs state results without methodology; site now provides context

## Recommended next step

1. Update source documents in `/resumes/`
2. Export 4 PDFs to `public/resumes/` with matching filenames
3. Verify email and titles on each PDF before deploy
