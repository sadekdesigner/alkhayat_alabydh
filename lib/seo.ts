import type { Metadata } from "next";
import { brand } from "@/content/brand";
import type { Locale } from "@/lib/i18n";

const siteUrl = `https://${brand.domain.replace(/^https?:\/\//, "")}`;

export const siteMeta = {
  title: brand.name,
  descriptionEn:
    "Premium tailoring, precise alterations, and refined menswear essentials in Sharjah. Where Heritage Meets Ambition.",
  descriptionAr:
    "تفصيل رجالي فاخر وتعديلات دقيقة ومستلزمات أناقة راقية في الشارقة. حيث يلتقي التراث بالطموح."
};

export const hours = {
  en: "Daily: 10:00 AM - 10:00 PM",
  ar: "يوميًا: 10:00 صباحًا - 10:00 مساءً"
} as const;

function normalizePath(path?: string) {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
}

export function buildPageMetadata(locale: Locale, opts?: { title?: string; description?: string; path?: string }): Metadata {
  const path = normalizePath(opts?.path);
  const description = opts?.description || (locale === "ar" ? siteMeta.descriptionAr : siteMeta.descriptionEn);
  const localePath = `/${locale}${path}`;
  const canonical = `${siteUrl}${localePath}`;
  const enUrl = `${siteUrl}/en${path}`;
  const arUrl = `${siteUrl}/ar${path}`;
  const title = opts?.title ? `${opts.title} | ${brand.name}` : brand.name;

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: enUrl,
        ar: arUrl,
        "x-default": enUrl
      }
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_AE" : "en_US",
      url: canonical,
      siteName: brand.name,
      title,
      description,
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: brand.name
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"]
    }
  };
}

export function localBusinessJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: locale === "ar" ? brand.nameAr : brand.name,
    image: `${siteUrl}/og.png`,
    url: siteUrl,
    telephone: brand.phoneIntl,
    email: brand.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: brand.address,
      addressLocality: "Sharjah",
      addressCountry: "AE"
    },
    hasMap: brand.mapUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "10:00",
        closes: "22:00"
      }
    ],
    sameAs: [brand.instagram, brand.facebook, brand.linktree],
    description: locale === "ar" ? siteMeta.descriptionAr : siteMeta.descriptionEn,
    areaServed: ["Sharjah", "UAE"]
  };
}
