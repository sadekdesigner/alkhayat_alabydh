import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { copy } from "@/content/copy";
import type { Locale } from "@/lib/i18n";

export default function FeatureGrid({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="mt-14">
      <Container>
        <SectionTitle
          title={t.whyTitle}
          desc={
            locale === "ar"
              ? "معايير تنفيذ ثابتة، تشطيب راقٍ، وخدمة تحترم وقتك."
              : "Disciplined standards, refined finishing, and service that respects your time."
          }
        />
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.why.map((item) => (
            <article key={item.title} className="lux-card p-5">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{item.desc}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
