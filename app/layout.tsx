import "@/app/globals.css";
import { Bodoni_Moda, IBM_Plex_Sans_Arabic, Manrope } from "next/font/google";
import type { Metadata } from "next";
import { brand } from "@/content/brand";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "700", "800", "900"],
  display: "swap"
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  weight: ["200", "300", "400", "500", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${brand.domain}`),
  title: brand.name,
  description:
    "Premium tailoring, precise alterations, and refined menswear essentials in Sharjah. Where Heritage Meets Ambition.",
  icons: {
    icon: [{ url: "/brand-icon.svg", type: "image/svg+xml" }],
    shortcut: "/brand-icon.svg",
    apple: "/favicon.ico"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${bodoni.variable} ${ibmArabic.variable}`}>
      <body className="bg-bodybg text-bodyColor font-sans">{children}</body>
    </html>
  );
}
