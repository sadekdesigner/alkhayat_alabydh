import Link from "next/link";
import Container from "@/components/Container";
import { brand } from "@/content/brand";
import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const base = `/${locale}`;

  return (
    <footer className="mt-16 border-t border-primary/15">
      <Container>
        <div className="grid gap-5 py-10 md:grid-cols-3">
          <div className="lux-card p-5">
            <div className="text-xs uppercase tracking-[0.24em] text-primary/80">{brand.taglineEn}</div>
            <div className="mt-2 font-display text-lg">{locale === "ar" ? brand.nameAr : brand.name}</div>
            <p className="mt-3 text-sm text-bodyColor/75">{brand.address}</p>
          </div>

          <div className="lux-card p-5">
            <div className="font-semibold">{locale === "ar" ? "تواصل" : "Contact"}</div>
            <div className="mt-3 space-y-2 text-sm text-bodyColor/75">
              <div>
                <a className="no-underline hover:underline" href={`tel:${brand.phoneIntl}`}>
                  {brand.phoneIntl}
                </a>{" "}
                <span className="text-bodyColor/45">({brand.phoneLocal})</span>
              </div>
              <div>
                <a className="no-underline hover:underline" href={`mailto:${brand.email}`}>
                  {brand.email}
                </a>
              </div>
              <div>
                <a href={brand.mapUrl} target="_blank" rel="noreferrer" className="no-underline hover:underline">
                  {locale === "ar" ? "فتح الموقع على الخريطة" : "Open in Maps"}
                </a>
              </div>
            </div>
          </div>

          <div className="lux-card p-5">
            <div className="font-semibold">{locale === "ar" ? "روابط" : "Links"}</div>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-bodyColor/75">
              <Link href={base} className="no-underline hover:text-primary">
                {t.nav.home}
              </Link>
              <Link href={`${base}/about`} className="no-underline hover:text-primary">
                {t.nav.about}
              </Link>
              <Link href={`${base}/services`} className="no-underline hover:text-primary">
                {t.nav.services}
              </Link>
              <Link href={`${base}/work`} className="no-underline hover:text-primary">
                {t.nav.work}
              </Link>
              <Link href={`${base}/faq`} className="no-underline hover:text-primary">
                {t.nav.faq}
              </Link>
              <Link href={`${base}/shipping-policy`} className="no-underline hover:text-primary">
                {t.nav.shipping}
              </Link>
              <a href={brand.instagram} target="_blank" rel="noreferrer" className="no-underline hover:text-primary">
                Instagram
              </a>
              <a href={brand.facebook} target="_blank" rel="noreferrer" className="no-underline hover:text-primary">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="pb-10 text-xs text-bodyColor/60">
          © {new Date().getFullYear()} {brand.name}. {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
        </div>
      </Container>
    </footer>
  );
}
