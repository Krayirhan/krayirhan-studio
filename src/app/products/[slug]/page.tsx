import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowDown, ArrowLeft, ArrowRight, Download, ExternalLink, Gamepad2, Smartphone } from "lucide-react";
import { PRODUCTS } from "@/data/games";
import { V2Header } from "@/components/v2/V2Header";
import { V2Footer } from "@/components/v2/V2Footer";
import { ProductGallery } from "@/components/products/ProductGallery";
import { WordMatchDemo } from "@/components/products/WordMatchDemo";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Ürün Bulunamadı | Krayirhan Studio",
    };
  }

  return {
    title: `${product.title} | Krayirhan Studio`,
    description: product.shortDescription,
    alternates: {
      canonical: `https://studio.krayirhan.com/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | Krayirhan Studio`,
      description: product.shortDescription,
      type: "website",
      images: [{ url: product.bannerImage, alt: `${product.title} görseli` }],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const isLingorise = product.id === "lingorise";
  const accent = {
    "blok-dunyasi": { text: "text-sky-300", dot: "bg-sky-300", aura: "from-sky-400/[0.16]", secondary: "bg-amber-300/20" },
    "benim-notlarim": { text: "text-indigo-300", dot: "bg-indigo-300", aura: "from-indigo-400/[0.14]", secondary: "bg-violet-300/20" },
    "benim-gunlerim": { text: "text-emerald-300", dot: "bg-emerald-300", aura: "from-emerald-400/[0.14]", secondary: "bg-lime-300/20" },
    "hesap-gunlugu": { text: "text-cyan-300", dot: "bg-cyan-300", aura: "from-cyan-400/[0.14]", secondary: "bg-sky-300/20" },
    lingorise: { text: "text-violet-300", dot: "bg-violet-300", aura: "from-violet-400/[0.14]", secondary: "bg-fuchsia-300/20" },
  }[product.id] ?? { text: "text-white", dot: "bg-white", aura: "from-white/[0.12]", secondary: "bg-white/10" };

  const productDetails: Record<string, { steps: { title: string; description: string }[]; ctaTitle: string; ctaText: string; galleryTitle: string; related: string[] }> = {
    "blok-dunyasi": { steps: [{ title: "Parçanı seç.", description: "Sıradaki blokları oyun alanına uygun biçimde planla." }, { title: "Tahtaya yerleştir.", description: "Blokları boş alanlara sürükleyerek yerlerini bul." }, { title: "Satır veya sütunu tamamla.", description: "Çizgileri doldurup alanı temizle." }, { title: "Alan aç, devam et.", description: "Yeni hamleler için yer açarak rekorunu büyüt." }], ctaTitle: "Sıradaki hamle senin.", ctaText: "Blokları yerleştir, alan aç ve kendi rekorunu geç.", galleryTitle: "Oyundan görüntüler", related: ["benim-gunlerim", "lingorise", "benim-notlarim"] },
    "benim-notlarim": { steps: [{ title: "Notunu oluştur.", description: "Aklındakini saniyeler içinde yazmaya başla." }, { title: "İstediğin gibi biçimlendir.", description: "Başlıklar, listeler ve zengin metin araçlarıyla düzenle." }, { title: "Kolayca bul.", description: "Arama ve sıralama araçlarıyla notlarına geri dön." }, { title: "Güvenle sakla.", description: "Notlarını cihazında düzenli ve erişilebilir tut." }], ctaTitle: "Aklındakini kaybetme.", ctaText: "Notlarını kendi düzeninde oluştur, biçimlendir ve sakla.", galleryTitle: "Arayüz & ekranlar", related: ["hesap-gunlugu", "benim-gunlerim", "lingorise"] },
    "benim-gunlerim": { steps: [{ title: "Gününü oluştur.", description: "Bugünün görevlerini ve rutinlerini ekle." }, { title: "Gün içinde ilerle.", description: "Tamamladıklarını işaretle, kalanları takip et." }, { title: "Rutinlerini sürdür.", description: "Tekrarlanan alışkanlıklarını kendi düzeninde devam ettir." }, { title: "İlerlemeni gör.", description: "Günlerinin zaman içinde nasıl şekillendiğini takip et." }], ctaTitle: "Bugün küçük bir adım at.", ctaText: "Benim Günlerim geliştirme aşamasında. Gelişmeleri takip etmek için diğer ürünleri keşfedin.", galleryTitle: "Günlük akıştan ekranlar", related: ["lingorise", "benim-notlarim", "hesap-gunlugu"] },
    "hesap-gunlugu": { steps: [{ title: "Hareketini ekle.", description: "Gelir veya giderini birkaç saniyede kaydet." }, { title: "Kategorine ayır.", description: "Paranın nereye gittiğini düzenli tut." }, { title: "Bütçeni takip et.", description: "Gelir, gider ve kalan tutarı tek ekranda gör." }, { title: "Geçmişini incele.", description: "İstatistikler ve hareketlerle finansal akışını değerlendir." }], ctaTitle: "Paranı daha net gör.", ctaText: "Gelirlerini, giderlerini ve bütçeni kendi düzeninde takip et.", galleryTitle: "Arayüz & raporlar", related: ["benim-notlarim", "benim-gunlerim", "lingorise"] },
    lingorise: { steps: [{ title: "Günün pratiğini başlat.", description: "Kısa bir çalışma ile günlük hedefini aç." }, { title: "Kelimelerini çalış.", description: "Seviyene uygun kelimelerle tekrar yap." }, { title: "Kısa testlerle pekiştir.", description: "Öğrendiklerini küçük alıştırmalarla hatırla." }, { title: "Seri ve XP ile ilerlemeni sürdür.", description: "Düzenli pratikle seviyeni ve motivasyonunu koru." }], ctaTitle: "Her gün birkaç kelime daha.", ctaText: "Kısa pratiklerle kelimelerini geliştir, ilerlemeni sürdür.", galleryTitle: "Öğrenme deneyiminden", related: ["benim-gunlerim", "blok-dunyasi", "benim-notlarim"] },
  };

  const details = productDetails[product.id];
  const isPublished = Boolean(product.links.playStore);
  const relatedProducts = details.related.map((id) => PRODUCTS.find((item) => item.id === id)).filter((item): item is (typeof PRODUCTS)[number] => Boolean(item));

  return (
    <div className="v2-page min-h-screen bg-[#080a0d] text-[#f5f2eb] selection:bg-white selection:text-black flex flex-col justify-between">
      <V2Header />

      <main className="v2-content pb-24">
        {/* Full-width Hero Banner with Publication Status Card on Right */}
        <div className="relative w-full overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#11141a] via-[#0b0e12] to-[#080a0d] py-12 sm:py-16">
          <div className={`pointer-events-none absolute right-10 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-gradient-to-br ${accent.aura} to-transparent blur-3xl`} />
          <div className="relative mx-auto max-w-[86rem] px-5 sm:px-8 lg:px-12">
            <Link
              href="/products"
              className="inline-flex w-fit items-center gap-2 text-xs font-semibold text-neutral-300 transition-colors hover:text-white mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Tüm Ürünler</span>
            </Link>

            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
              {/* Left Column: App Info, Title, Tagline, Actions */}
              <div className="space-y-6 lg:col-span-7">
                {/* App Icon + Badge + Title */}
                <div className="flex items-start gap-4 sm:gap-5">
                  {product.iconImage && (
                    <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-2xl sm:rounded-[22px] border border-white/20 bg-[#12161f]/90 p-1 shadow-2xl ring-1 ring-white/10 transition-transform duration-300 hover:scale-105">
                      <Image
                        src={product.iconImage}
                        alt={`${product.title} logo`}
                        fill
                        priority
                        sizes="(max-width: 640px) 64px, 80px"
                        className="rounded-xl sm:rounded-[18px] object-cover"
                      />
                    </div>
                  )}
                  <div className="space-y-2">
                    {/* Metadata Breadcrumb */}
                    <div className={`flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold uppercase tracking-[0.18em] ${accent.text}`}>
                      <span className="inline-flex items-center gap-1.5">
                        {product.type === "game" ? (
                          <Gamepad2 className="h-3.5 w-3.5" />
                        ) : (
                          <Smartphone className="h-3.5 w-3.5" />
                        )}
                        {product.type === "game" ? "Mobil Oyun" : "Mobil Uygulama"}
                      </span>
                      <span>·</span>
                      <span className={isPublished ? "text-emerald-400 font-bold" : "text-neutral-300"}>
                        {isPublished ? "Google Play'de Yayında" : product.status}
                      </span>
                    </div>

                    {/* Title */}
                    <h1 className="v2-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#fbf8f2] leading-tight">
                      {product.title}
                    </h1>
                  </div>
                </div>

                {/* Tagline */}
                <p className="text-base sm:text-lg text-[#b5b0a4] max-w-2xl leading-relaxed">
                  {product.tagline}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  {product.links.playStore && (
                    <a
                      href={product.links.playStore}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-neutral-200 shadow-md"
                    >
                      Google Play&apos;de {product.type === "game" ? "Oyna" : "Gör"} <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href="#galeri"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.04]"
                  >
                    Ekran Görüntüleri <ArrowDown className="h-4 w-4" />
                  </a>
                </div>

                <p className="text-[13px] font-medium text-neutral-400">
                  {product.type === "game"
                    ? "Çevrimdışı · Bulmaca · Kısa oturumlar"
                    : `${product.category.slice(0, 3).join(" · ")} · Android`}
                </p>
              </div>

              {/* Right Column: Hero Yayın Durumu & Specs Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-white/15 bg-[#0d1015]/90 backdrop-blur-md p-6 sm:p-7 space-y-5 shadow-2xl">
                  <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className={`h-2.5 w-2.5 rounded-full ${isPublished ? "bg-emerald-400 shadow-[0_0_8px_#34d399]" : "bg-amber-400"}`} />
                      <span className="text-xs font-bold uppercase tracking-wider text-white">
                        Yayın Durumu
                      </span>
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${isPublished ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30" : "bg-amber-500/10 text-amber-300 border border-amber-500/30"}`}>
                      {product.status}
                    </span>
                  </div>

                  {/* Specs List */}
                  <div className="space-y-3 text-xs sm:text-sm text-neutral-400">
                    <div className="flex justify-between gap-4">
                      <span>Platformlar:</span>
                      <span className="font-semibold text-white text-right">{product.platforms.join(", ")}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Kategoriler:</span>
                      <span className="font-semibold text-white text-right">{product.category.join(", ")}</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Geliştirici & Yayıncı:</span>
                      <span className="font-semibold text-white text-right">Krayirhan Studio</span>
                    </div>
                  </div>

                  {isPublished && (
                    <div className="pt-2 border-t border-white/10">
                      <a
                        href={product.links.playStore}
                        target="_blank"
                        rel="noreferrer"
                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-xs font-bold text-black shadow-lg hover:bg-neutral-200 transition"
                      >
                        <Download className="h-4 w-4" />
                        <span>Google Play&apos;den İndir</span>
                        <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout Grid */}
        <div className="mx-auto max-w-[86rem] px-5 pt-12 sm:px-8 sm:pt-16 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Main Column */}
            <div className="lg:col-span-8 space-y-14">
              {/* Hakkında */}
              <div className="space-y-4">
                <h2 className="v2-serif text-2xl font-bold text-[#fbf8f2]">
                  Hakkında
                </h2>
                <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
                  {product.fullDescription.split("\n\n")[0]}
                </div>
              </div>

              {/* Nasıl oynanır / çalışır */}
              <div className="space-y-5">
                <h2 className="v2-serif text-2xl font-bold text-[#fbf8f2]">
                  {product.type === "game" ? "Nasıl oynanır?" : "Nasıl çalışır?"}
                </h2>
                <div className="grid grid-cols-1 border-y border-white/10 sm:grid-cols-2">
                  {details.steps.map((step, index) => (
                    <div
                      key={step.title}
                      className="flex gap-4 border-b border-white/10 py-4 sm:pr-6 sm:[&:nth-last-child(-n+2)]:border-b-0"
                    >
                      <span className={`font-mono text-xs ${accent.text}`}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <h3 className="text-[15px] font-semibold text-white">{step.title}</h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-neutral-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Öne Çıkan Özellikler */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-4">
                  <h2 className="v2-serif text-2xl font-bold text-[#fbf8f2]">
                    Öne Çıkan Özellikler
                  </h2>
                  <div className="grid grid-cols-1 divide-y divide-white/10 border-y border-white/10">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 py-4 text-neutral-200"
                      >
                        <span className="font-mono text-xs text-neutral-500 pt-0.5">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div className="space-y-1">
                          <h3 className="text-[15px] font-semibold text-white">
                            {feature.includes(":") ? feature.split(":")[0] : feature}
                          </h3>
                          <p className="text-[15px] leading-[1.7] text-neutral-300">
                            {feature.includes(":") ? feature.replace(/^[^:]+:\s*/, "") : ""}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Interactive Demo for LingoRise */}
              {isLingorise && (
                <div className="space-y-4 border-t border-white/10 pt-10">
                  <h2 className="v2-serif text-2xl font-bold text-[#fbf8f2]">
                    İnteraktif Deneyim: Kelime Eşleştirme
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    LingoRise&apos;ın akıllı hatırlatma sistemini web üzerinde küçük bir demoyla deneyimleyin.
                  </p>
                  <WordMatchDemo />
                </div>
              )}
            </div>

            {/* Right Column: Mini Specs Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-[#0d1015] p-6 space-y-5">
                <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-300">
                  Stüdyo Yaklaşımı
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-neutral-400">
                  Krayirhan Studio ürünleri; reklamsız veya minimum dikkat dağıtıcı öğelerle, doğrudan kullanıcı ihtiyacına odaklanarak tasarlanır.
                </p>
                <div className="pt-2 border-t border-white/10 flex flex-col gap-2 text-xs text-neutral-400">
                  <span className="text-neutral-300 font-medium">✓ %100 Çevrimdışı desteği</span>
                  <span className="text-neutral-300 font-medium">✓ Cihaz içi veri gizliliği</span>
                  <span className="text-neutral-300 font-medium">✓ Sade ve odaklanmış arayüz</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gallery Section */}
        {product.screenshots.length > 0 && (
          <section id="galeri" className="mx-auto max-w-[86rem] px-5 pt-20 sm:px-8 sm:pt-24 lg:px-12">
            <div className="mb-6 max-w-2xl">
              <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${accent.text}`}>Ürünün içinden</p>
              <h2 className="v2-serif mt-3 text-3xl font-bold text-[#fbf8f2]">{details.galleryTitle}</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-neutral-300">Ana ekran ve deneyimin farklı anları. Görselleri büyütmek için üzerine tıklayın.</p>
            </div>
            <ProductGallery title={product.title} screenshots={product.screenshots} variant="v2" />
          </section>
        )}

        {/* CTA Banner */}
        <section className="mx-auto max-w-[86rem] px-5 pt-20 sm:px-8 sm:pt-24 lg:px-12">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111419] px-6 py-12 sm:px-12 sm:py-16">
            <div className={`pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gradient-to-br ${accent.aura} to-transparent blur-3xl`} />
            <div className="relative max-w-2xl">
              <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${accent.text}`}>{product.title}</p>
              <h2 className="v2-serif mt-4 text-3xl font-bold text-white sm:text-4xl">{details.ctaTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-300 sm:text-base">{details.ctaText}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                {isPublished && <a href={product.links.playStore} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-neutral-200">Google Play&apos;de {product.type === "game" ? "Oyna" : "İndir"} <ExternalLink className="h-4 w-4" /></a>}
                <Link href="/products" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.04]">Diğer Ürünleri Keşfet <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="mx-auto max-w-[86rem] px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">Diğer ürünler</p>
          <h2 className="v2-serif mt-3 text-3xl font-bold text-white">Diğer ürünleri keşfet</h2>
          <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
            {relatedProducts.map((item) => <Link key={item.id} href={`/products/${item.slug}`} className="group flex items-center justify-between gap-5 py-5 transition hover:px-2">
              <div><p className="text-base font-semibold text-white">{item.title}</p><p className="mt-1 text-sm text-neutral-400">{item.category[0]} · {item.type === "game" ? "Oyun" : "Uygulama"}</p></div>
              <ArrowRight className="h-5 w-5 text-neutral-500 transition group-hover:translate-x-1 group-hover:text-white" />
            </Link>)}
          </div>
        </section>
      </main>

      <V2Footer />
    </div>
  );
}
