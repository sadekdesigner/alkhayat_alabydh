# AL KHAYAT AL ABYDH GENTS TAILORING

Premium bilingual (English/Arabic) Next.js App Router website with:

- `/en` and `/ar` localized routes
- RTL Arabic support
- Pages: Home, About, Services, Our Work, Contact, FAQ, Shipping Policy
- Contact API (SMTP via Nodemailer)
- SEO metadata + OpenGraph + LocalBusiness JSON-LD
- Premium UI with gradient/glass styling
- Floating WhatsApp + Call buttons

## Stack

- Next.js 15 (App Router)
- TypeScript
- TailwindCSS
- Nodemailer

## Installation

```bash
npm install
cp .env.example .env.local
```

Set real SMTP values inside `.env.local`, then run:

```bash
npm run dev
```

Production build:

```bash
npm run build
npm run start
```

## Environment Variables

```env
SMTP_HOST=smtp.yourmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your@email.com
SMTP_PASS=your_password
CONTACT_TO_EMAIL=info@alkhayatalabydhtailoring.com
CONTACT_FROM_EMAIL=your@email.com
```

## Project Structure

```text
alkhayat_alabydh/
  app/
    layout.tsx
    page.tsx
    globals.css
    [locale]/
      (site)/
        layout.tsx
        page.tsx
        about/page.tsx
        services/page.tsx
        work/page.tsx
        contact/page.tsx
        faq/page.tsx
        shipping-policy/page.tsx
      api/
        contact/route.ts
  components/
    CallFloat.tsx
    ContactForm.tsx
    Container.tsx
    FeatureGrid.tsx
    Footer.tsx
    Gallery.tsx
    Header.tsx
    Hero.tsx
    LanguageSwitcher.tsx
    MapCard.tsx
    SectionTitle.tsx
    WhatsAppFloat.tsx
  content/
    brand.ts
    catalog.ts
    copy.ts
    shipping.ts
  lib/
    i18n.ts
    mail.ts
    seo.ts
    utils.ts
  public/
  .env.example
  next.config.ts
  package.json
  postcss.config.mjs
  tailwind.config.ts
  tsconfig.json
```

## Notes

- Home includes: hero CTA, featured services/products, mini gallery, why-us, and map + hours section.
- Contact form submits to `/{locale}/api/contact`.
- JSON-LD is injected in localized layout.
- Shipping policy content is rendered in English as requested.
