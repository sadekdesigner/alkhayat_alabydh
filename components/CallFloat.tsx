import { brand } from "@/content/brand";
import type { Locale } from "@/lib/i18n";

export default function CallFloat({ locale }: { locale: Locale }) {
  return (
    <a
      href={`tel:${brand.phoneIntl}`}
      className="fixed bottom-5 start-5 z-50 rounded-full border border-primary bg-primary px-4 py-2 text-xs font-semibold text-white no-underline shadow-luxe transition hover:bg-[#00513E]"
      aria-label="Call"
    >
      {locale === "ar" ? "اتصال" : "Call"}
    </a>
  );
}
