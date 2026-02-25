import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import { brand } from "@/content/brand";
import { copy } from "@/content/copy";
import { isLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  return buildPageMetadata(locale, {
    title: locale === "ar" ? "تواصل معنا" : "Contact",
    path: "/contact"
  });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = copy[locale];
  const waText =
    locale === "ar" ? "مرحبًا، أريد حجز موعد / طلب عرض سعر." : "Hello, I want to book an appointment / request a quote.";
  const wa = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(waText)}`;

  return (
    <Container>
      <div className="py-14">
        <SectionTitle
          eyebrow={locale === "ar" ? "تواصل معنا" : "Contact"}
          title={t.contactTitle}
          desc={
            locale === "ar"
              ? "واتساب أو اتصال مباشر أو نموذج الحجز - اختر الطريقة المناسبة لك."
              : "Use WhatsApp, call directly, or send your booking request form."
          }
        />

        <div className="grid items-start gap-6 lg:grid-cols-2">
          <section className="lux-card p-6">
            <h3 className="font-semibold">{t.quick.title}</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="lux-button" href={wa} target="_blank" rel="noreferrer">
                {t.quick.whatsapp}
              </a>
              <a className="lux-button" href={`tel:${brand.phoneIntl}`}>
                {t.quick.call}
              </a>
              <a className="lux-button" href={`mailto:${brand.email}`}>
                {t.quick.email}
              </a>
              <a className="lux-button" href={brand.mapUrl} target="_blank" rel="noreferrer">
                {t.quick.map}
              </a>
            </div>

            <div className="mt-6 space-y-2 text-sm leading-relaxed text-white/75">
              <p>{brand.address}</p>
              <p>
                {brand.phoneIntl} <span className="text-white/40">({brand.phoneLocal})</span>
              </p>
              <p>{brand.email}</p>
            </div>
          </section>

          <section id="form" className="lux-card p-6">
            <h3 className="font-semibold">{locale === "ar" ? "نموذج الحجز" : "Booking Form"}</h3>
            <ContactForm locale={locale} />
          </section>
        </div>
      </div>
    </Container>
  );
}
