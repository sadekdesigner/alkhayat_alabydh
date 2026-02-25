import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { brand } from "@/content/brand";
import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const base = `/${locale}`;

  const links = [
    { href: `${base}#services`, label: locale === "ar" ? "المجموعات" : "Collection" },
    { href: `${base}/services`, label: locale === "ar" ? "كنادير" : "Kanduras" },
    { href: `${base}/services`, label: locale === "ar" ? "إكسسوارات" : "Accessories" },
    { href: `${base}#work`, label: locale === "ar" ? "الشتوي" : "Winter" },
    { href: `${base}#about`, label: t.nav.about }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#8c7441] bg-[#121820]/95 backdrop-blur-xl">
      <Container>
        <div className="flex items-center justify-between gap-4 py-3">
          <Link href={base} className="flex items-center gap-3 no-underline">
            <Image
              src="/brand-icon.svg"
              alt={locale === "ar" ? brand.nameAr : brand.name}
              width={42}
              height={42}
              className="h-10 w-10 rounded-full border border-[#8c7441]/60 bg-white/90 p-1.5"
              priority
            />
            <div className="hidden min-[460px]:block">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#cbb27a]">{locale === "ar" ? brand.nameAr : brand.name}</p>
              <p className="text-[11px] uppercase tracking-[0.13em] text-[#d8cfbd]">{locale === "ar" ? "خياطة رجالية" : "Gents Tailoring"}</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-5 xl:flex">
            {links.map((link) => (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                className="text-xs uppercase tracking-[0.12em] text-[#d6ccba] no-underline transition hover:text-[#c7a866]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={`${base}/contact#form`}
              className="hidden rounded border border-[#8c7441] px-3 py-1.5 text-[11px] uppercase tracking-[0.12em] text-[#e3d6bd] no-underline transition hover:bg-[#8c7441]/20 md:inline-flex"
            >
              {locale === "ar" ? "احجز موعد" : "Book Appointment"}
            </Link>
            <span className="hidden text-[#cbb27a] sm:inline">⌕</span>
            <span className="hidden text-[#cbb27a] sm:inline">◯</span>
            <LanguageSwitcher locale={locale} />
          </div>
        </div>

        <div className="overflow-x-auto pb-3 xl:hidden">
          <nav className="flex min-w-max items-center gap-4">
            {links.map((link) => (
              <Link
                key={`m-${link.href}-${link.label}`}
                href={link.href}
                className="text-[11px] uppercase tracking-[0.11em] text-[#d6ccba] no-underline transition hover:text-[#c7a866]"
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
