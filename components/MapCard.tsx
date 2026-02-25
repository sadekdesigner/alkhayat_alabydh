import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { brand } from "@/content/brand";
import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";
import { hours } from "@/lib/seo";

export default function MapCard({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const embedSrc = `https://www.google.com/maps?q=${encodeURIComponent(brand.address)}&output=embed`;

  return (
    <section className="mt-14">
      <Container>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="lux-card p-6">
            <SectionTitle title={t.mapTitle} desc={locale === "ar" ? "موقع واضح وتواصل سريع." : "Clear location, quick access, and direct contact."} />
            <p className="text-bodyColor/75">{brand.address}</p>

            <div className="mt-4 rounded-2xl border border-primary/20 bg-bodybg/70 p-4">
              <div className="font-medium text-bodyColor">{t.hoursTitle}</div>
              <div className="mt-2 text-sm text-bodyColor/70">{locale === "ar" ? hours.ar : hours.en}</div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <a href={brand.mapUrl} target="_blank" rel="noreferrer" className="lux-button">
                {locale === "ar" ? "افتح الخريطة" : "Open Map"}
              </a>
              <a href={`tel:${brand.phoneIntl}`} className="lux-button">
                {locale === "ar" ? "اتصال" : "Call"}
              </a>
            </div>
          </div>

          <div className="lux-card overflow-hidden">
            <iframe
              title="Google Map - Al Khayat Al Abydh"
              src={embedSrc}
              width="100%"
              height="100%"
              className="min-h-[340px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
