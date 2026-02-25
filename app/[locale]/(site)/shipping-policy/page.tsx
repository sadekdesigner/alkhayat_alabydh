import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { shippingPolicyEn } from "@/content/shipping";
import { isLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  return buildPageMetadata(locale, {
    title: locale === "ar" ? "سياسة الشحن" : "Shipping Policy",
    path: "/shipping-policy"
  });
}

export default async function ShippingPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;

  return (
    <Container>
      <div className="py-14">
        <SectionTitle
          eyebrow={locale === "ar" ? "السياسات" : "Policy"}
          title={shippingPolicyEn.title}
          desc={shippingPolicyEn.intro}
        />
        <div className="space-y-6">
          {shippingPolicyEn.sections.map((section) => (
            <article key={section.title} className="lux-card p-6">
              <h3 className="font-semibold">{section.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              {"subTitle" in section && section.subTitle ? (
                <>
                  <h4 className="mt-5 font-semibold">{section.subTitle}</h4>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {section.subBullets.map((bullet) => (
                      <li key={bullet}>• {bullet}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </article>
          ))}
          <p className="text-sm text-white/75">{shippingPolicyEn.contact}</p>
        </div>
      </div>
    </Container>
  );
}
