import Container from "@/components/Container";
import Gallery from "@/components/Gallery";
import SectionTitle from "@/components/SectionTitle";
import { copy } from "@/content/copy";
import { isLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  return buildPageMetadata(locale, {
    title: locale === "ar" ? "أعمالنا" : "Our Work",
    path: "/work"
  });
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = copy[locale];

  return (
    <Container>
      <div className="py-14">
        <SectionTitle
          eyebrow={locale === "ar" ? "أعمالنا" : "Our Work"}
          title={locale === "ar" ? "معرض أعمال مصنف" : "Categorized Craftsmanship Gallery"}
          desc={
            locale === "ar"
              ? "تصنيفات لعرض الأعمال: تعديلات، تفصيل حسب الطلب، قبل/بعد، وإصلاحات."
              : "Suggested categories: alterations, made-to-measure, before/after, and repairs."
          }
        />
        <div className="mb-8 flex flex-wrap gap-2 text-xs">
          {t.workCategories.map((category) => (
            <span key={category} className="rounded-full border border-gold-300/35 bg-gold-400/10 px-3 py-1 text-gold-200">
              {category}
            </span>
          ))}
        </div>
        <Gallery
          locale={locale}
          title={locale === "ar" ? "صور الأعمال" : "Work Gallery"}
          desc={
            locale === "ar"
              ? "استبدل العناصر التجريبية بصور المتجر الفعلية المصنفة."
              : "Replace placeholders with real categorized shop photography."
          }
        />
      </div>
    </Container>
  );
}
