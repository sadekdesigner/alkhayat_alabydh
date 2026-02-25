"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { localizePath } from "@/lib/i18n";

export default function LanguageSwitcher({ locale }: { locale: "en" | "ar" }) {
  const pathname = usePathname();
  const other = locale === "en" ? "ar" : "en";
  const nextPath = localizePath(pathname || "/", other);

  return (
    <Link
      href={nextPath}
      className="rounded-full border border-gold-300/40 bg-gold-400/10 px-3 py-1 text-xs font-medium text-gold-300 no-underline transition hover:bg-gold-400/20"
      aria-label="Switch language"
    >
      {other === "ar" ? "العربية" : "English"}
    </Link>
  );
}
