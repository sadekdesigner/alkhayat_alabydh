import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { catalog } from "@/content/catalog";
import { copy } from "@/content/copy";
import { isLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  return buildPageMetadata(locale, {
    title: locale === "ar" ? "الخدمات" : "Services",
    path: "/services"
  });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = copy[locale];

  return (
    <Container>
      <div className="py-14">
        <SectionTitle eyebrow={locale === "ar" ? "الخدمات" : "Services"} title={t.servicesTitle} desc={t.servicesLead} />

        <div className="grid gap-4 md:grid-cols-2">
          {t.services.map((service) => (
            <article key={service.title} className="lux-card p-6">
              <h3 className="font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{service.desc}</p>
              <a href={`/${locale}/contact#form`} className="mt-4 inline-block lux-button">
                {locale === "ar" ? "اطلب الآن" : "Request Now"}
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <article className="lux-card p-6">
            <h3 className="font-semibold">{locale === "ar" ? "قائمة الشتوي" : "Winter Collection List"}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {catalog.winter.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="lux-card p-6">
            <h3 className="font-semibold">{locale === "ar" ? "قائمة الكلاسيكي/الرسمي" : "Classic & Formal List"}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {catalog.classic.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <article className="lux-card p-6">
            <h3 className="font-semibold">{locale === "ar" ? "إكسسوارات تقليدية" : "Traditional Accessories"}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {catalog.accessoriesTraditional.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="lux-card p-6">
            <h3 className="font-semibold">{locale === "ar" ? "الملابس الداخلية" : "Innerwear"}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {catalog.innerwear.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>

          <article className="lux-card p-6">
            <h3 className="font-semibold">{locale === "ar" ? "إكسسوارات وأحذية" : "Other Accessories & Footwear"}</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {[...catalog.accessoriesOther, ...catalog.footwear].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </Container>
  );
}
