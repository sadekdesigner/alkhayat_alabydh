import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import type { Locale } from "@/lib/i18n";

const cards = [
  { en: "Alteration Details", ar: "تفاصيل التعديلات", catEn: "Alterations", catAr: "تعديلات" },
  { en: "Made-to-Measure Fit", ar: "تفصيل حسب القياس", catEn: "Made-to-Measure", catAr: "تفصيل حسب الطلب" },
  { en: "Before / After", ar: "قبل / بعد", catEn: "Before / After", catAr: "قبل / بعد" },
  { en: "Formal Finishing", ar: "تشطيب رسمي", catEn: "Formal", catAr: "رسمي" },
  { en: "Repair Precision", ar: "دقة الإصلاح", catEn: "Repairs", catAr: "إصلاحات" },
  { en: "Crafted Collar", ar: "ياقة مصممة", catEn: "Tailoring", catAr: "خياطة" },
  { en: "Sleeve Adjustment", ar: "تعديل الأكمام", catEn: "Alterations", catAr: "تعديلات" },
  { en: "Premium Texture", ar: "قماش فاخر", catEn: "Materials", catAr: "الأقمشة" }
];

export default function Gallery({
  locale,
  title,
  desc,
  compact = false
}: {
  locale: Locale;
  title: string;
  desc?: string;
  compact?: boolean;
}) {
  const items = compact ? cards.slice(0, 4) : cards;

  return (
    <section className="mt-14">
      <Container>
        <SectionTitle title={title} desc={desc} />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <article key={`${item.en}-${index}`} className="lux-card overflow-hidden">
              <div className="aspect-[4/5] bg-gradient-to-br from-primary/30 via-primary/10 to-white p-3">
                <div className="h-full w-full rounded-xl border border-dashed border-primary/35 bg-white/60" />
              </div>
              <div className="border-t border-primary/15 p-4 text-sm">
                <div className="inline-flex rounded-full border border-primary/35 bg-primary/10 px-2 py-0.5 text-[11px] text-primary">
                  {locale === "ar" ? item.catAr : item.catEn}
                </div>
                <p className="mt-2 text-bodyColor/85">{locale === "ar" ? item.ar : item.en}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
