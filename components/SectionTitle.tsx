export default function SectionTitle({
  eyebrow,
  title,
  desc
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="mb-8">
      {eyebrow ? (
        <div className="text-[11px] uppercase tracking-[0.25em] text-gold-300/80">{eyebrow}</div>
      ) : null}
      <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">{title}</h2>
      {desc ? <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">{desc}</p> : null}
    </div>
  );
}
