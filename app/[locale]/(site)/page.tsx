import Link from "next/link";
import Container from "@/components/Container";
import { brand } from "@/content/brand";
import { isLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

const heroImage = "https://source.unsplash.com/1800x920/?arabic,man,kandura,luxury&sig=1";
const craftsmanshipImage = "https://source.unsplash.com/1200x720/?tailor,stitching,handmade&sig=2";
const fabricsImage = "https://source.unsplash.com/1800x920/?silk,fabric,white,texture&sig=3";

const collectionImages = [
  "https://source.unsplash.com/800x900/?kandura,gulf,man&sig=4",
  "https://source.unsplash.com/800x900/?white,thobe,fabric&sig=5",
  "https://source.unsplash.com/800x900/?ghutra,agal,accessories&sig=6",
  "https://source.unsplash.com/800x900/?arabic,leather,sandals&sig=7"
];

const journeyImages = [
  "https://source.unsplash.com/1000x900/?tailor,measurement,man&sig=8",
  "https://source.unsplash.com/1000x900/?sewing,machine,tailor&sig=9",
  "https://source.unsplash.com/1000x900/?packaging,shirt,box&sig=10"
];

const followImages = [
  "https://source.unsplash.com/700x700/?arabic,man,fashion&sig=11",
  "https://source.unsplash.com/700x700/?kandura,fitting&sig=12",
  "https://source.unsplash.com/700x700/?tailor,fabric,hands&sig=13",
  "https://source.unsplash.com/700x700/?emirati,white,thobe&sig=14",
  "https://source.unsplash.com/700x700/?fabric,needle,detail&sig=15",
  "https://source.unsplash.com/700x700/?shirt,folded,white&sig=16",
  "https://source.unsplash.com/700x700/?minimal,brand,quote&sig=17",
  "https://source.unsplash.com/700x700/?silk,swirl,white&sig=18",
  "https://source.unsplash.com/700x700/?gulf,portrait,traditional&sig=19",
  "https://source.unsplash.com/700x700/?testimonial,minimal,design&sig=20"
];

type LocaleContent = {
  heroTitle: string;
  heroSubtitle: string;
  shopCollection: string;
  bookAppointment: string;
  collection: Array<{ title: string; subtitle: string }>;
  craftTitle: string;
  craftBody: string;
  fabricsTitle: string;
  fabricsSub: string;
  fabricsBody: string;
  journeyTitle: string;
  journeySubtitle: string;
  followTitle: string;
  contactTitle: string;
  contactBody: string;
  faqTitle: string;
  faqBody: string;
  callNow: string;
  whatsapp: string;
  viewFaq: string;
  shippingPolicy: string;
};

const content: Record<"en" | "ar", LocaleContent> = {
  en: {
    heroTitle: "Where Heritage Meets Precision",
    heroSubtitle: "Mastering the art of traditional Gulf tailoring.",
    shopCollection: "Shop Collection",
    bookAppointment: "Book Appointment",
    collection: [
      { title: "Winter Collection", subtitle: "Rich fabrics for the season." },
      { title: "Classic Kanduras", subtitle: "Timeless elegance." },
      { title: "Accessories", subtitle: "The finishing touches." },
      { title: "Shoes", subtitle: "Crafted for comfort and style." }
    ],
    craftTitle: "Craftsmanship & Tradition",
    craftBody:
      "Al Khayat Al Abydh preserves Gulf heritage through meticulous tailoring, premium fabrics, and disciplined finishing standards that honor generations of expertise.",
    fabricsTitle: "Experience Premium Fabrics",
    fabricsSub: "Japan Fabric / Farhatan Fabric",
    fabricsBody: "Sourced Japanese cotton and Farhatan silk, selected for exceptional quality.",
    journeyTitle: "The Tailoring Journey",
    journeySubtitle: "From measurement to stitching to final fitting.",
    followTitle: "Follow Us @alkhayatalabydh",
    contactTitle: "Ready To Book Your Fitting?",
    contactBody: "Speak to our team directly and reserve your appointment in minutes.",
    faqTitle: "Need More Details?",
    faqBody: "Review common questions about tailoring timeframes, fitting, and delivery.",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
    viewFaq: "View FAQ",
    shippingPolicy: "Shipping Policy"
  },
  ar: {
    heroTitle: "حيث يلتقي التراث بالدقة",
    heroSubtitle: "إتقان فن الخياطة الخليجية التقليدية.",
    shopCollection: "تسوق المجموعات",
    bookAppointment: "احجز موعد",
    collection: [
      { title: "المجموعة الشتوية", subtitle: "أقمشة غنية للموسم." },
      { title: "الكنادير الكلاسيكية", subtitle: "أناقة خالدة." },
      { title: "الإكسسوارات", subtitle: "اللمسات النهائية." },
      { title: "الأحذية", subtitle: "راحة وأناقة يومية." }
    ],
    craftTitle: "الحِرفية والتراث",
    craftBody:
      "الخيط الأبيض يحافظ على التراث الخليجي عبر خياطة دقيقة، أقمشة فاخرة، وتشطيب منضبط يعكس خبرة متوارثة عبر الأجيال.",
    fabricsTitle: "اكتشف الأقمشة الفاخرة",
    fabricsSub: "قماش ياباني / قماش فرحاتان",
    fabricsBody: "مختار بعناية من القطن الياباني والحرير الفاخر لضمان أعلى جودة.",
    journeyTitle: "رحلة التفصيل",
    journeySubtitle: "من القياس إلى الخياطة حتى التجربة النهائية.",
    followTitle: "تابعنا @alkhayatalabydh",
    contactTitle: "جاهز لحجز المقاس؟",
    contactBody: "تواصل معنا مباشرة واحجز موعدك خلال دقائق.",
    faqTitle: "تحتاج تفاصيل أكثر؟",
    faqBody: "اطّلع على الأسئلة الشائعة حول مدة التنفيذ، القياس، والتسليم.",
    callNow: "اتصل الآن",
    whatsapp: "واتساب",
    viewFaq: "عرض الأسئلة",
    shippingPolicy: "سياسة الشحن"
  }
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "en";
  return buildPageMetadata(locale, { path: "" });
}

function Picture({ src, alt }: { src: string; alt: string }) {
  return <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" />;
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw;
  const t = content[locale];
  const base = `/${locale}`;
  const waText = locale === "ar" ? "مرحبًا، أريد حجز موعد." : "Hello, I would like to book an appointment.";
  const wa = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(waText)}`;

  return (
    <>
      <section id="hero" className="pt-4">
        <Container>
          <div className="relative overflow-hidden border border-[#8c7441]/60 bg-[#121820]">
            <div className="h-[360px] md:h-[520px]">
              <Picture src={heroImage} alt={t.heroTitle} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0e1420]/80 via-[#0e1420]/45 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 top-0 flex items-center">
              <div className="max-w-2xl px-7 py-10 sm:px-12">
                <h1 className="font-display text-4xl uppercase tracking-[0.08em] text-[#d1b171] sm:text-6xl">{t.heroTitle}</h1>
                <p className="mt-3 text-lg text-[#e5ddcc] sm:text-2xl">{t.heroSubtitle}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`${base}#services`} className="rounded border border-[#c7a866] bg-[#c7a866] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.06em] text-[#101722] no-underline transition hover:brightness-110">
                    {t.shopCollection}
                  </a>
                  <a href={`${base}/contact#form`} className="rounded border border-[#c7a866]/70 bg-transparent px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.06em] text-[#eadfca] no-underline transition hover:bg-[#c7a866]/20">
                    {t.bookAppointment}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="py-8 sm:py-10">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {t.collection.map((item, idx) => (
              <article key={item.title} className="overflow-hidden border border-[#ddd5c8] bg-white">
                <div className="aspect-[4/4.3]">
                  <Picture src={collectionImages[idx]} alt={item.title} />
                </div>
                <div className="px-4 py-3 text-center">
                  <h3 className="text-2xl uppercase tracking-[0.06em] text-[#2a2a2a]">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#4c4c4c]">{item.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="about" className="py-8">
        <Container>
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            <div className="overflow-hidden border border-[#ddd5c8] bg-white">
              <div className="h-full min-h-[320px]">
                <Picture src={craftsmanshipImage} alt={t.craftTitle} />
              </div>
            </div>
            <div className="flex items-center border border-[#ddd5c8] bg-white px-6 py-8 sm:px-10">
              <div>
                <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-[#b6975f] sm:text-5xl">{t.craftTitle}</h2>
                <p className="mt-4 text-base leading-relaxed text-[#2e2e2e] sm:text-lg">{t.craftBody}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-8">
        <Container>
          <div className="relative overflow-hidden border border-[#ddd5c8] bg-white">
            <div className="h-[300px] sm:h-[430px]">
              <Picture src={fabricsImage} alt={t.fabricsTitle} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#20262f]/65 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-6 max-w-xl sm:left-10">
              <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-[#d1b171] sm:text-6xl">{t.fabricsTitle}</h2>
              <p className="mt-3 text-xl text-[#f3ead8]">{t.fabricsSub}</p>
              <p className="mt-2 text-sm text-[#e0d5bf] sm:text-base">{t.fabricsBody}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-4xl uppercase tracking-[0.08em] text-[#1f1f1f] sm:text-5xl">{t.journeyTitle}</h2>
            <p className="mt-2 text-lg text-[#3f3f3f] sm:text-2xl">{t.journeySubtitle}</p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {journeyImages.map((img, idx) => (
              <article key={img} className="overflow-hidden border border-[#ddd5c8] bg-white">
                <div className="aspect-[4/3]">
                  <Picture src={img} alt={`${t.journeyTitle} ${idx + 1}`} />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="work" className="py-8 sm:py-10">
        <Container>
          <h2 className="text-center font-display text-4xl uppercase tracking-[0.08em] text-[#1f1f1f] sm:text-5xl">{t.followTitle}</h2>
          <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {followImages.map((img, idx) => (
              <article key={img} className="overflow-hidden rounded border border-[#ddd5c8] bg-white">
                <div className="aspect-[1/1]">
                  <Picture src={img} alt={`${t.followTitle} ${idx + 1}`} />
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="py-8">
        <Container>
          <div className="grid gap-5 border border-[#d5ccb9] bg-white px-6 py-8 sm:grid-cols-[1fr_auto] sm:items-center sm:px-10">
            <div>
              <h2 className="font-display text-3xl uppercase tracking-[0.08em] text-[#1f1f1f] sm:text-4xl">{t.contactTitle}</h2>
              <p className="mt-2 text-[#3a3a3a] sm:text-lg">{t.contactBody}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${brand.phoneIntl}`} className="rounded border border-[#8c7441] px-4 py-2 text-sm font-semibold uppercase tracking-[0.06em] text-[#8c7441] no-underline transition hover:bg-[#8c7441]/10">
                {t.callNow}
              </a>
              <a href={wa} target="_blank" rel="noreferrer" className="rounded border border-[#8c7441] bg-[#8c7441] px-4 py-2 text-sm font-semibold uppercase tracking-[0.06em] text-white no-underline transition hover:brightness-110">
                {t.whatsapp}
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="faq" className="pb-4 pt-2">
        <Container>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="border border-[#d5ccb9] bg-white px-6 py-6">
              <h3 className="font-display text-2xl uppercase tracking-[0.07em] text-[#1f1f1f]">{t.faqTitle}</h3>
              <p className="mt-2 text-sm text-[#3f3f3f] sm:text-base">{t.faqBody}</p>
              <Link href={`${base}/faq`} className="mt-3 inline-block text-sm font-semibold uppercase tracking-[0.06em] text-[#8c7441] no-underline hover:underline">
                {t.viewFaq}
              </Link>
            </div>
            <div className="border border-[#d5ccb9] bg-white px-6 py-6">
              <h3 className="font-display text-2xl uppercase tracking-[0.07em] text-[#1f1f1f]">{t.shippingPolicy}</h3>
              <p className="mt-2 text-sm text-[#3f3f3f] sm:text-base">
                {locale === "ar"
                  ? "راجع سياسة الشحن والتوصيل المحلية والدولية قبل الطلب."
                  : "Review local and international shipping details before placing your order."}
              </p>
              <Link href={`${base}/shipping-policy`} className="mt-3 inline-block text-sm font-semibold uppercase tracking-[0.06em] text-[#8c7441] no-underline hover:underline">
                {t.shippingPolicy}
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
