import Link from "next/link";
import Container from "@/components/Container";
import { brand } from "@/content/brand";
import type { Locale } from "@/lib/i18n";

export default function Footer({ locale }: { locale: Locale }) {
  const base = `/${locale}`;

  return (
    <footer className="mt-14 border-t border-[#8c7441]/50 bg-gradient-to-b from-[#151d28] to-[#101722] text-[#e1dacd]">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-4">
          <div>
            <h3 className="text-lg tracking-[0.08em] text-[#c7a866]">{locale === "ar" ? "خدمة العملاء" : "Customer Care"}</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#d7d0c3]">
              <li>
                <a href={`tel:${brand.phoneIntl}`} className="no-underline hover:underline">
                  {locale === "ar" ? "اتصل بنا" : "Contact Us"}
                </a>
              </li>
              <li>
                <a href={`mailto:${brand.email}`} className="no-underline hover:underline">
                  {locale === "ar" ? "البريد الإلكتروني" : "Email"}
                </a>
              </li>
              <li>
                <a href={brand.mapUrl} target="_blank" rel="noreferrer" className="no-underline hover:underline">
                  {locale === "ar" ? "الموقع" : "Store Location"}
                </a>
              </li>
              <li>{locale === "ar" ? "تقييمات العملاء" : "Client Reviews"}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg tracking-[0.08em] text-[#c7a866]">{locale === "ar" ? "عنّا" : "About Us"}</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#d7d0c3]">
              <li>
                <Link href={`${base}#about`} className="no-underline hover:underline">
                  {locale === "ar" ? "قصتنا" : "About"}
                </Link>
              </li>
              <li>
                <Link href={`${base}/services`} className="no-underline hover:underline">
                  {locale === "ar" ? "مجموعاتنا" : "Our Collections"}
                </Link>
              </li>
              <li>
                <Link href={`${base}/work`} className="no-underline hover:underline">
                  {locale === "ar" ? "رحلة الحياكة" : "Tailoring Journey"}
                </Link>
              </li>
              <li>
                <Link href={`${base}/faq`} className="no-underline hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg tracking-[0.08em] text-[#c7a866]">{locale === "ar" ? "المجموعات" : "Collections"}</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#d7d0c3]">
              <li>
                <Link href={`${base}/services`} className="no-underline hover:underline">
                  {locale === "ar" ? "الإكسسوارات" : "Accessories"}
                </Link>
              </li>
              <li>
                <Link href={`${base}/services`} className="no-underline hover:underline">
                  {locale === "ar" ? "الشتوي" : "Winter"}
                </Link>
              </li>
              <li>
                <Link href={`${base}/services`} className="no-underline hover:underline">
                  {locale === "ar" ? "الكلاسيكي" : "Classic"}
                </Link>
              </li>
              <li>
                <Link href={`${base}/contact#form`} className="no-underline hover:underline">
                  {locale === "ar" ? "حجز موعد" : "Book Appointment"}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg tracking-[0.08em] text-[#c7a866]">{locale === "ar" ? "النشرة البريدية" : "Newsletter Signup"}</h3>
            <p className="mt-3 text-sm text-[#d7d0c3]">
              {locale === "ar"
                ? "اشترك ليصلك كل جديد عن المجموعات والعروض."
                : "Sign up for new collection releases and tailored offers."}
            </p>
            <div className="mt-4 rounded border border-[#8c7441]/70 bg-[#0f151f] px-3 py-2">
              <span className="text-sm text-[#8f8a81]">{locale === "ar" ? "أدخل بريدك الإلكتروني" : "Enter your email"}</span>
            </div>
            <div className="mt-4 flex items-center gap-3 text-[#c7a866]">
              <a href={brand.instagram} target="_blank" rel="noreferrer" className="no-underline">
                ◉
              </a>
              <a href={brand.facebook} target="_blank" rel="noreferrer" className="no-underline">
                ✦
              </a>
              <a href={brand.linktree} target="_blank" rel="noreferrer" className="no-underline">
                ⌁
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#8c7441]/40 py-4 text-xs text-[#d7d0c3]">
          <p>
            © {new Date().getFullYear()} {brand.name}. {locale === "ar" ? "جميع الحقوق محفوظة." : "All Rights Reserved."}
          </p>
          <p>{locale === "ar" ? "الشارقة، الإمارات" : "Sharjah, UAE."}</p>
        </div>
      </Container>
    </footer>
  );
}
