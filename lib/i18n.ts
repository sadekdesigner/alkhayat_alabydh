export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function dir(locale: Locale) {
  return locale === "ar" ? "rtl" : "ltr";
}

export function localizePath(pathname: string, locale: Locale) {
  if (!pathname || pathname === "/") return `/${locale}`;

  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  if (/^\/(en|ar)(\/|$)/.test(normalized)) {
    return normalized.replace(/^\/(en|ar)(?=\/|$)/, `/${locale}`);
  }

  return `/${locale}${normalized}`;
}

export function stripLocale(pathname: string) {
  if (!pathname) return "/";
  return pathname.replace(/^\/(en|ar)(?=\/|$)/, "") || "/";
}
