import { brand } from "@/content/brand";
import type { Locale } from "@/lib/i18n";

export default function WhatsAppFloat({ locale }: { locale: Locale }) {
  const text =
    locale === "ar" ? "مرحبًا، أريد حجز موعد / طلب عرض سعر." : "Hello, I want to book an appointment / request a quote.";
  const href = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(text)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 end-5 z-50 rounded-full border border-primary/35 bg-white px-4 py-2 text-xs font-semibold text-primary no-underline shadow-luxe transition hover:bg-primary/10"
      aria-label="WhatsApp"
    >
      {locale === "ar" ? "واتساب" : "WhatsApp"}
    </a>
  );
}
