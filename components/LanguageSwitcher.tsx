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
      className="rounded-full border border-primary/35 bg-white px-3 py-1 text-xs font-semibold text-primary no-underline transition hover:bg-primary/10"
      aria-label="Switch language"
    >
      {other === "ar" ? "العربية" : "English"}
    </Link>
  );
}
