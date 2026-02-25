import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { copy } from "@/content/copy";
import { isLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  return buildPageMetadata(locale, {
    title: locale === "ar" ? "من نحن" : "About",
    path: "/about"
  });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = copy[locale];

  return (
    <Container>
      <div className="py-14">
        <SectionTitle eyebrow={locale === "ar" ? "من نحن" : "About"} title={t.aboutTitle} desc={t.aboutBody} />
        <div className="grid gap-4 md:grid-cols-3">
          <article className="lux-card p-6">
            <h3 className="font-semibold">{locale === "ar" ? "الدقة" : "Precision"}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {locale === "ar"
                ? "قياسات مضبوطة وتنفيذ منظم يحترم التفاصيل."
                : "Measured fittings and disciplined execution that respects every detail."}
            </p>
          </article>
          <article className="lux-card p-6">
            <h3 className="font-semibold">{locale === "ar" ? "الحرفية" : "Craftsmanship"}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {locale === "ar"
                ? "تشطيب نظيف ومعايير جودة ثابتة لكل قطعة."
                : "Refined finishing with consistent quality standards across every garment."}
            </p>
          </article>
          <article className="lux-card p-6">
            <h3 className="font-semibold">{locale === "ar" ? "الالتزام" : "Dependability"}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {locale === "ar" ? "مواعيد واضحة وتسليم بثقة." : "Clear timelines and dependable delivery you can plan around."}
            </p>
          </article>
        </div>
      </div>
    </Container>
  );
}
