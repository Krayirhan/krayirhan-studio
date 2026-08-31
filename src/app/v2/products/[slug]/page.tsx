import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Download, ExternalLink, Gamepad2, Play, Smartphone } from "lucide-react";
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

      <main className="v2-content mx-auto w-full max-w-[1380px] px-5 py-8 sm:px-8 lg:px-12 lg:py-12">
        {/* Top Back Nav */}
        <div className="mb-8">
          <Link
            href="/v2/products"
            className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Tüm Ürünlere Dön</span>
          </Link>
        </div>

        {/* Hero Banner Section */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0e1218] via-[#090b0e] to-[#07090b] p-8 sm:p-12 lg:p-16 mb-16">
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] bg-radial from-white/5 via-transparent to-transparent blur-[120px]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6 z-10">
              <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-neutral-400">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-2.5 py-1 text-white">
                  {product.type === "game" ? (
                    <Gamepad2 className="h-3.5 w-3.5" />
                  ) : (
                    <Smartphone className="h-3.5 w-3.5" />
                  )}
                  <span>{product.type === "game" ? "Mobil Oyun" : "Mobil Uygulama"}</span>
                </span>
                <span>·</span>
                <span className="text-neutral-300">{product.status}</span>
                <span>·</span>
                <span>{product.platforms.join(", ")}</span>
              </div>

              <h1 className="v2-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#fbf8f2]">
                {product.title}
              </h1>

              <p className="text-base sm:text-xl leading-relaxed text-[#b5b0a4] max-w-2xl">
                {product.tagline}
              </p>

              {/* Action Button */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                {product.links.playStore ? (
                  <a
                    href={product.links.playStore}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-lg bg-white px-7 py-4 text-xs font-bold text-black shadow-xl hover:bg-neutral-200 transition hover:-translate-y-0.5"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    <span>Google Play&apos;den İndir</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#13161c] px-6 py-3.5 text-xs font-semibold text-neutral-400">
                    <span>Geliştirme Aşamasında (Yakında)</span>
                  </span>
                )}
              </div>
            </div>

            {/* Right Phone Mockups (2 Screens) */}
            <div className="lg:col-span-5 flex items-center justify-center gap-4 sm:gap-6 py-4 select-none z-10">
              {/* Phone 1: Cover */}
              <div className="w-1/2 max-w-[190px] sm:max-w-[220px] -rotate-3 transform transition-all duration-500 hover:-rotate-1 hover:scale-105">
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] sm:rounded-[2.4rem] border-2 border-[#2b313d] bg-[#0c0e12] p-1.5 shadow-2xl">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] sm:rounded-[2rem] bg-black">
                    <Image
                      src={product.coverImage}
                      alt={`${product.title} Kapak`}
                      fill
                      priority
                      sizes="(max-width: 1024px) 45vw, 220px"
                      className="object-cover object-top"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />
                  </div>
                </div>
              </div>

              {/* Phone 2: Gameplay / Secondary */}
              <div className="w-1/2 max-w-[190px] sm:max-w-[220px] rotate-3 mt-6 sm:mt-10 transform transition-all duration-500 hover:rotate-1 hover:scale-105">
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2rem] sm:rounded-[2.4rem] border-2 border-[#2b313d] bg-[#0c0e12] p-1.5 shadow-2xl">
                  <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] sm:rounded-[2rem] bg-black">
                    <Image
                      src={product.screenshots[1] || product.coverImage}
                      alt={`${product.title} Ekran Görüntüsü`}
                      fill
                      sizes="(max-width: 1024px) 45vw, 220px"
                      className="object-cover object-top"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* Overview / About */}
            <div className="space-y-4">
              <h2 className="v2-serif text-2xl sm:text-3xl font-bold text-[#fbf8f2]">
                Ürün Hakkında
              </h2>
              <div className="text-[#b5b0a4] text-base leading-relaxed space-y-4 whitespace-pre-line">
                {product.fullDescription}
              </div>
            </div>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-6">
                <h2 className="v2-serif text-2xl sm:text-3xl font-bold text-[#fbf8f2]">
                  Öne Çıkan Özellikler
                </h2>
                <div className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 transition hover:border-white/20"
                    >
                      <span className="font-mono text-xs font-semibold text-white/50 pt-0.5">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm sm:text-base leading-relaxed text-neutral-200">
                        {feature.replace(/^[^:]+:\s*/, "")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Screenshots Gallery */}
            {product.screenshots && product.screenshots.length > 0 && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="v2-serif text-2xl sm:text-3xl font-bold text-[#fbf8f2]">
                    Ekran Görüntüleri
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
              <div className="space-y-4 rounded-3xl border border-white/15 bg-white/[0.02] p-6 sm:p-8">
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

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-28 rounded-2xl border border-white/15 bg-[#0c0e13] p-6 sm:p-8 space-y-6 shadow-2xl">
              <div>
                <h3 className="v2-serif text-xl font-bold text-[#fbf8f2]">
                  Hemen Başlayın
                </h3>
                <p className="mt-1 text-xs text-neutral-400">
                  Resmi mağazalardan ücretsiz indirin.
                </p>
              </div>

              {/* Action Link */}
              <div className="space-y-3">
                {product.links.playStore ? (
                  <a
                    href={product.links.playStore}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-xs font-bold text-black shadow-lg hover:bg-neutral-200 transition"
                  >
                    <Play className="h-4 w-4 fill-current" />
                    <span>Google Play&apos;den İndir</span>
                    <ExternalLink className="h-3.5 w-3.5 opacity-60" />
                  </a>
                ) : (
                  <div className="rounded-xl border border-white/10 bg-white/5 py-3.5 text-center text-xs font-semibold text-neutral-400">
                    Geliştirme Aşamasında
                  </div>
                )}
              </div>

              {/* Quick Specs */}
              <div className="border-t border-white/10 pt-6 space-y-3.5 text-xs text-neutral-400">
                <div className="flex justify-between">
                  <span>Geliştirici & Yayıncı:</span>
                  <span className="font-semibold text-white">Krayirhan Studio</span>
                </div>
                <div className="flex justify-between">
                  <span>Platform:</span>
                  <span className="font-semibold text-white">{product.platforms.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kategori:</span>
                  <span className="font-semibold text-white">{product.category.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Yayın Durumu:</span>
                  <span className="font-semibold text-white">{product.status}</span>
                </div>
                <div className="flex justify-between">
                  <span>İnternet:</span>
                  <span className="font-semibold text-white">Çevrimdışı Destekli</span>
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
