import "@/app/globals.css";
import { Cinzel, Manrope, Noto_Kufi_Arabic } from "next/font/google";
import type { Metadata } from "next";
import { brand } from "@/content/brand";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["400", "500", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${brand.domain}`),
  title: brand.name,
  description:
    "Premium tailoring, precise alterations, and refined menswear essentials in Sharjah. Where Heritage Meets Ambition."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${cinzel.variable} ${notoKufiArabic.variable}`}>
      <body>{children}</body>
    </html>
  );
}
