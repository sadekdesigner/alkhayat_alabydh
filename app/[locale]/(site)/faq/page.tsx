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
    title: locale === "ar" ? "الأسئلة الشائعة" : "FAQ",
    path: "/faq"
  });
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = copy[locale];

  return (
    <Container>
      <div className="py-14">
        <SectionTitle eyebrow="FAQ" title={t.faqTitle} />
        <div className="grid gap-4">
          {t.faq.map((item) => (
            <article key={item.q} className="lux-card p-6">
              <h3 className="font-semibold">{item.q}</h3>
              <p className="mt-2 text-sm leading-relaxed text-bodyColor/70">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </Container>
  );
}
