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
      className="rounded border border-[#8c7441]/70 bg-[#151d28] px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#e3d6bd] no-underline transition hover:bg-[#8c7441]/20"
      aria-label="Switch language"
    >
      {other === "ar" ? "العربية" : "English"}
    </Link>
  );
}
