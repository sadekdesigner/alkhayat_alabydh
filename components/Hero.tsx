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
    <section id="hero" className="relative min-h-[92svh] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/og.png"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/35" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(0,103,79,0.32),transparent_45%)]" />

      <Container>
        <div className="relative flex min-h-[92svh] items-end pb-16 pt-32 sm:items-center">
          <div className="max-w-3xl rounded-[2rem] border border-white/30 bg-black/35 p-7 text-white backdrop-blur-md sm:p-10">
            <p className="text-xs uppercase tracking-[0.32em] text-white/80">{locale === "ar" ? brand.taglineAr : brand.taglineEn}</p>
            <h1 className="mt-4 text-3xl leading-tight text-white sm:text-5xl">{t.heroTitle}</h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">{t.heroSubtitle}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={wa} target="_blank" rel="noreferrer" className="lux-button-solid">
                {t.ctaWhatsApp}
              </a>
              <a href={`tel:${brand.phoneIntl}`} className="rounded-full border border-white/55 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-white/20">
                {t.ctaCall}
              </a>
              <a href={`/${locale}/contact#form`} className="rounded-full border border-white/55 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-white/20">
                {t.ctaBook}
              </a>
            </div>

            <div className="mt-8 text-sm text-white/80">
              {brand.address} •{" "}
              <a href={brand.mapUrl} target="_blank" rel="noreferrer" className="text-white no-underline hover:underline">
                {locale === "ar" ? "فتح الخريطة" : "Open in Maps"}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
