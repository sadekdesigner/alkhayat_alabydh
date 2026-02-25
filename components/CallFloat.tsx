import { brand } from "@/content/brand";
import type { Locale } from "@/lib/i18n";

export default function CallFloat({ locale }: { locale: Locale }) {
  return (
    <a
      href={`tel:${brand.phoneIntl}`}
      className="fixed bottom-5 start-5 z-50 rounded-full border border-gold-300/40 bg-gold-400/20 px-4 py-2 text-xs font-semibold text-gold-100 no-underline shadow-luxe transition hover:bg-gold-400/35"
      aria-label="Call"
    >
      {locale === "ar" ? "اتصال" : "Call"}
    </a>
  );
}
