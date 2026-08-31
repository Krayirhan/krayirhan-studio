import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Download, ExternalLink, Gamepad2, Smartphone } from "lucide-react";
import { PRODUCTS } from "@/data/games";
import { V2Header } from "@/components/v2/V2Header";
import { V2Footer } from "@/components/v2/V2Footer";
import { ProductGallery } from "@/components/products/ProductGallery";
import { WordMatchDemo } from "@/components/products/WordMatchDemo";

interface V2ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: V2ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Ürün Bulunamadı | Krayirhan Studio",
    };
  }

  return {
    title: `${product.title} | Krayirhan Studio V2`,
    description: product.shortDescription,
    alternates: {
      canonical: `https://studio.krayirhan.com/v2/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.title} | Krayirhan Studio`,
      description: product.shortDescription,
      type: "website",
      images: [{ url: product.bannerImage, alt: `${product.title} görseli` }],
    },
  };
}

export default async function V2ProductDetailPage({ params }: V2ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const isLingorise = product.id === "lingorise";

  return (
    <div className="v2-page min-h-screen bg-[#080a0d] text-[#f5f2eb] selection:bg-white selection:text-black flex flex-col justify-between">
      <V2Header />

      <main className="v2-content pb-24">
        {/* Full-width Hero Banner (Cardless, open editorial header) */}
        <div className="relative w-full border-b border-white/10 bg-gradient-to-b from-[#11141a] via-[#0b0e12] to-[#080a0d] py-12 sm:py-16 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col gap-6">
            <Link
              href="/v2/products"
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white w-fit transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Tüm Ürünler</span>
            </Link>

            <div className="space-y-3">
              {/* Metadata Breadcrumb */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-400">
                <span className="inline-flex items-center gap-1.5 text-neutral-300">
                  {product.type === "game" ? (
                    <Gamepad2 className="h-3.5 w-3.5" />
                  ) : (
                    <Smartphone className="h-3.5 w-3.5" />
                  )}
                  {product.type === "game" ? "Oyun" : "Uygulama"}
                </span>
                <span>/</span>
                <span>{product.status}</span>
                <span>/</span>
                <span>{product.platforms[0]}</span>
              </div>

              {/* Title */}
              <h1 className="v2-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#fbf8f2]">
                {product.title}
              </h1>

              {/* Tagline */}
              <p className="text-base sm:text-lg text-[#b5b0a4] max-w-3xl leading-relaxed">
                {product.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Layout Grid */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-12 sm:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Details, Features, Screenshots (Pure Open Layout, No Card Box) */}
            <div className="lg:col-span-8 space-y-14">
              {/* Hakkında */}
              <div className="space-y-4">
                <h2 className="v2-serif text-2xl font-bold text-[#fbf8f2]">
                  Hakkında
                </h2>
                <div className="text-neutral-300 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line">
                  {product.fullDescription}
                </div>
              </div>

              {/* Öne Çıkan Özellikler (Horizontal border list, no card boxes) */}
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
                        <span className="text-sm sm:text-base leading-relaxed">
                          {feature.replace(/^[^:]+:\s*/, "")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Arayüz & Ekran Görüntüleri */}
              {product.screenshots && product.screenshots.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="v2-serif text-2xl font-bold text-[#fbf8f2]">
                      Arayüz & Ekran Görüntüleri
                    </h2>
                    <span className="text-xs text-neutral-400">
                      Büyütmek için görsele tıklayın
                    </span>
                  </div>
                  <ProductGallery title={product.title} screenshots={product.screenshots} />
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

            {/* Right Column: Sticky Download & Specs Card (Matches user screenshot) */}
            <div className="lg:col-span-4 space-y-6">
              <div className="sticky top-28 rounded-2xl border border-white/10 bg-[#0d1015] p-6 sm:p-7 space-y-6 shadow-2xl">
                <h3 className="text-base font-bold text-white tracking-wide">
                  {product.links.playStore ? "Hemen İndirin & Deneyin" : "Yayın Durumu"}
                </h3>

                <div className="space-y-3">
                  {product.links.playStore ? (
                    <a
                      href={product.links.playStore}
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-xs font-bold text-black shadow-lg hover:bg-neutral-200 transition"
                    >
                      <Download className="h-4 w-4" />
                      <span>Google Play&apos;den İndir</span>
                      <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  ) : (
                    <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-center text-xs font-semibold text-neutral-300">
                      {product.status} · Google Play&apos;de herkese açık değil
                    </div>
                  )}
                </div>

                {/* Quick Specs */}
                <div className="border-t border-white/10 pt-5 space-y-3 text-xs text-neutral-400">
                  <div className="flex justify-between gap-4">
                    <span>Geliştirici & Yayıncı:</span>
                    <span className="font-semibold text-white text-right">Krayirhan Studio</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Platformlar:</span>
                    <span className="font-semibold text-white text-right">{product.platforms.join(", ")}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Kategoriler:</span>
                    <span className="font-semibold text-white text-right">{product.category.join(", ")}</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Yayın Durumu:</span>
                    <span className="font-semibold text-emerald-400 text-right">{product.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <V2Footer />
    </div>
  );
}
