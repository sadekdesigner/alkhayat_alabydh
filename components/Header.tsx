import Link from "next/link";
import Container from "@/components/Container";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { brand } from "@/content/brand";
import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const base = `/${locale}`;
  const links = [
    { href: `${base}`, label: t.nav.home },
    { href: `${base}/about`, label: t.nav.about },
    { href: `${base}/services`, label: t.nav.services },
    { href: `${base}/work`, label: t.nav.work },
    { href: `${base}/contact`, label: t.nav.contact },
    { href: `${base}/faq`, label: t.nav.faq },
    { href: `${base}/shipping-policy`, label: t.nav.shipping }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-primary/15 bg-bodybg/95 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between gap-4 py-4">
          <Link href={base} className="no-underline">
            <p className="text-[10px] uppercase tracking-[0.25em] text-primary/80">
              {locale === "ar" ? brand.taglineAr : brand.taglineEn}
            </p>
            <p className="mt-1 max-w-[26rem] font-display text-sm font-semibold leading-snug sm:text-base">
              {locale === "ar" ? brand.nameAr : brand.name}
            </p>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-bodyColor/75 no-underline transition hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={`tel:${brand.phoneIntl}`} className="hidden text-sm text-bodyColor/75 no-underline md:block hover:text-primary">
              {brand.phoneLocal}
            </a>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        <div className="overflow-x-auto pb-4 xl:hidden">
          <nav className="flex min-w-max items-center gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-bodyColor/75 no-underline transition hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}
