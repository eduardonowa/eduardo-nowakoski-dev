# AEM Hero Banner Component (Reference)

Public reference implementation of a reusable AEM component: **HTL template**, **Sling Model (Java)**, and **author dialog**.

This is a simplified excerpt suitable for portfolio review — not a full Maven multi-module project.

## Structure

```
showcase/aem-hero-banner/
├── README.md
├── core/src/main/java/com/eduardonowa/aem/models/HeroBannerModel.java
└── ui.apps/src/main/content/jcr_root/apps/portfolio/components/hero-banner/
    ├── hero-banner.html
    └── _cq_dialog/.content.xml
```

## Features

- Authorable title, subtitle, and CTA link
- Sling Model with `@ValueMapValue` injection
- HTL with context-aware output (`@ context='html'`)
- Optional link validation in the model layer

## Usage in AEM

1. Deploy `ui.apps` and `core` bundles to AEM Cloud Service or AEM 6.5
2. Create an Editable Template policy allowing `portfolio/components/hero-banner`
3. Drag the component onto a page and author content in the dialog

## Related portfolio

Live site: [eduardonowakoski.dev](https://eduardonowakoski.dev)

## Unit tests

```bash
cd showcase/aem-hero-banner/core
mvn test
```

## Standalone GitHub repository (recommended)

For stronger recruiter signal, consider publishing this showcase as a dedicated public repo (e.g. `aem-hero-banner-component`) linked from your GitHub profile — separate from the portfolio site repo.
