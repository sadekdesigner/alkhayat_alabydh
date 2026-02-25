import Container from "@/components/Container";
import { brand } from "@/content/brand";
import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";

export default function Hero({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const whatsappText =
    locale === "ar" ? "مرحبًا، أريد حجز موعد / طلب عرض سعر." : "Hello, I want to book an appointment / request a quote.";
  const wa = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(0,103,79,0.22),transparent_45%)]" />
      <Container>
        <div className="mesh-panel lux-card relative overflow-hidden p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.32em] text-primary/80">
              {locale === "ar" ? brand.taglineAr : brand.taglineEn}
            </p>
            <h1 className="mt-4 text-3xl leading-tight sm:text-5xl">{t.heroTitle}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-bodyColor/80 sm:text-lg">{t.heroSubtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={wa} target="_blank" rel="noreferrer" className="lux-button-solid">
                {t.ctaWhatsApp}
              </a>
              <a href={`tel:${brand.phoneIntl}`} className="lux-button">
                {t.ctaCall}
              </a>
              <a href={`/${locale}/contact#form`} className="lux-button">
                {t.ctaBook}
              </a>
            </div>

            <div className="mt-8 text-sm text-bodyColor/70">
              {brand.address} •{" "}
              <a href={brand.mapUrl} target="_blank" rel="noreferrer" className="text-primary no-underline hover:underline">
                {locale === "ar" ? "فتح الخريطة" : "Open in Maps"}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
