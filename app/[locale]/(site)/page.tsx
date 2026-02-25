import Container from "@/components/Container";
import FeatureGrid from "@/components/FeatureGrid";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import MapCard from "@/components/MapCard";
import SectionTitle from "@/components/SectionTitle";
import { catalog } from "@/content/catalog";
import { copy } from "@/content/copy";
import { isLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  return buildPageMetadata(locale, { path: "" });
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = copy[locale];

  return (
    <>
      <Hero locale={locale} />

      <section className="mt-14">
        <Container>
          <SectionTitle
            eyebrow={locale === "ar" ? "مختارات" : "Curated Selection"}
            title={t.featuredTitle}
            desc={
              locale === "ar"
                ? "مجموعات شتوية وكلاسيكية مع مستلزمات وأناقة متكاملة."
                : "Winter and classic collections with essentials to complete the look."
            }
          />
          <div className="grid gap-4 lg:grid-cols-3">
            <article className="lux-card p-6">
              <h3 className="font-semibold">{locale === "ar" ? "خدمات مميزة" : "Featured Services"}</h3>
              <ul className="mt-4 space-y-2 text-sm text-bodyColor/75">
                {t.services.slice(0, 4).map((service) => (
                  <li key={service.title}>• {service.title}</li>
                ))}
              </ul>
              <a href={`/${locale}/services`} className="mt-5 inline-block lux-button">
                {locale === "ar" ? "عرض كل الخدمات" : "Explore Services"}
              </a>
            </article>

            <article className="lux-card p-6">
              <h3 className="font-semibold">{locale === "ar" ? "المجموعة الشتوية" : "Winter Collection"}</h3>
              <ul className="mt-4 space-y-2 text-sm text-bodyColor/75">
                {catalog.winter.slice(0, 8).map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <a href={`/${locale}/work`} className="mt-5 inline-block lux-button">
                {locale === "ar" ? "شاهد الأعمال" : "View Our Work"}
              </a>
            </article>

            <article className="lux-card p-6">
              <h3 className="font-semibold">{locale === "ar" ? "الكلاسيكي والرسمي" : "Classic & Formal"}</h3>
              <ul className="mt-4 space-y-2 text-sm text-bodyColor/75">
                {catalog.classic.slice(0, 8).map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <a href={`/${locale}/contact#form`} className="mt-5 inline-block lux-button-solid">
                {locale === "ar" ? "احجز الآن" : "Request Booking"}
              </a>
            </article>
          </div>
        </Container>
      </section>

      <FeatureGrid locale={locale} />
      <Gallery
        locale={locale}
        compact
        title={t.galleryTitle}
        desc={locale === "ar" ? "معرض مصغر جاهز لاستبدال الصور بصور المتجر." : "A mini showcase ready for your real tailoring photos."}
      />
      <MapCard locale={locale} />
    </>
  );
}
