import { PRODUCTS } from "@/data/games";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ProductGallery } from "@/components/products/ProductGallery";
import { WordMatchDemo } from "@/components/products/WordMatchDemo";
import { V2Header } from "@/components/v2/V2Header";
import { V2Footer } from "@/components/v2/V2Footer";
import { ArrowLeft, ExternalLink, Smartphone, Gamepad2, Download } from "lucide-react";
import type { Metadata } from "next";

interface V2LegacyProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: V2LegacyProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Ürün Bulunamadı",
    };
  }

  return {
    title: `${product.title} (V2) | Krayirhan Studio`,
    description: product.shortDescription,
  };
}

export default async function V2LegacyProductDetailPage({ params }: V2LegacyProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const isBlokDunyasi = product.id === "blok-dunyasi";
  const isLingorise = product.id === "lingorise";

  return (
    <div className="v2-page min-h-screen bg-[#080a0d] text-[#f5f2eb] flex flex-col justify-between">
      <V2Header />
      <div className="pb-24 flex-1">
        {/* Back button & Hero Banner */}
        <div className="texture-fabric relative w-full py-12 sm:py-16 border-b border-white/10 bg-gradient-to-b from-[#191e1b] via-[#12160f] to-[var(--background-deep)] overflow-hidden">
          {isBlokDunyasi ? (
            <div className="absolute inset-0 pointer-events-none">
              <div className="fruit-blob fruit-blob-citrus w-72 h-72 -top-16 right-[12%]" />
              <div className="fruit-blob fruit-blob-grape w-48 h-48 bottom-0 right-[28%]" />
              <div className="fruit-blob fruit-blob-cherry w-36 h-36 top-1/3 right-4" />
            </div>
          ) : isLingorise ? (
            <div
              className="texture-vine absolute inset-0 opacity-80 pointer-events-none"
              style={{ maskImage: "radial-gradient(ellipse at 80% 40%, black 30%, transparent 68%)", WebkitMaskImage: "radial-gradient(ellipse at 80% 40%, black 30%, transparent 68%)" }}
            />
          ) : (
            <div
              className="texture-notebook absolute inset-0 opacity-80 pointer-events-none"
              style={{ maskImage: "radial-gradient(ellipse at 80% 40%, black 30%, transparent 68%)", WebkitMaskImage: "radial-gradient(ellipse at 80% 40%, black 30%, transparent 68%)" }}
            />
          )}

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
            <Link
              href="/v2/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white w-fit transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Tüm ürünler (V2)</span>
            </Link>

            <div className="space-y-4">
              <div className="flex items-start gap-4 sm:gap-5">
                {product.iconImage && (
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 shrink-0 overflow-hidden rounded-2xl sm:rounded-[22px] border border-white/20 bg-black/40 p-1 shadow-2xl ring-1 ring-white/10 transition-transform duration-300 hover:scale-105">
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
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300">
                    <span className="inline-flex items-center gap-1.5">
                      {product.type === "game" ? (
                        <Gamepad2 className="h-3.5 w-3.5" />
                      ) : (
                        <Smartphone className="h-3.5 w-3.5" />
                      )}
                      {product.type === "game" ? "Oyun" : "Uygulama"}
                    </span>

                    <span>/</span><span>{product.status}</span><span>/</span><span>{product.platforms[0]}</span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                    {product.title}
                  </h1>
                </div>
              </div>
              <p className="text-lg text-zinc-400 max-w-2xl">{product.tagline}</p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Details, Features, Gallery */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Hakkında</h2>
                <div className="prose prose-invert max-w-none text-zinc-300 text-base leading-relaxed space-y-4 whitespace-pre-line">
                  {product.fullDescription}
                </div>
              </div>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white">Öne Çıkan Özellikler</h2>
                  <div className="grid grid-cols-1 gap-3">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 border-b border-white/10 py-4 text-zinc-200 first:border-t"
                      >
                        <span className="font-mono text-xs text-zinc-500">{String(idx + 1).padStart(2, "0")}</span>
                        <span className="text-sm sm:text-base leading-relaxed">{feature.replace(/^[^:]+:\s*/, "")}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Screenshots Gallery with Fullscreen Lightbox */}
              {product.screenshots && product.screenshots.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">Arayüz & Ekran Görüntüleri</h2>
                    <span className="text-xs text-zinc-400">Büyütmek için görsele tıklayın</span>
                  </div>
                  <ProductGallery title={product.title} screenshots={product.screenshots} />
                </div>
              )}
              {isLingorise && <WordMatchDemo />}
            </div>

            {/* Right Column: Platform Links Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-3xl border border-white/10 bg-[#0d1015] p-6 sm:p-8 space-y-6 sticky top-28 shadow-xl">
                <div className="flex items-center gap-3.5">
                  {product.iconImage && (
                    <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-black/40 p-0.5 shadow-md">
                      <Image
                        src={product.iconImage}
                        alt={`${product.title} logo`}
                        fill
                        sizes="48px"
                        className="rounded-lg object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-lg font-bold text-white leading-snug">Hemen İndirin & Deneyin</h3>
                    <p className="text-xs text-zinc-400">{product.type === "game" ? "Mobil Oyun" : "Mobil Uygulama"}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {product.links.playStore && (
                    <a
                      href={product.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 text-sm font-bold text-zinc-950 shadow-xl shadow-white/5 hover:bg-zinc-200 transition-all"
                    >
                      <Download className="h-4 w-4" />
                      <span>Google Play&apos;den İndir</span>
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>

                {/* Quick Specs */}
                <div className="border-t border-white/10 pt-6 space-y-3 text-xs sm:text-sm text-zinc-400">
                  <div className="flex justify-between">
                    <span>Geliştirici & Yayıncı:</span>
                    <span className="font-semibold text-white">Krayirhan Studio</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Platformlar:</span>
                    <span className="font-semibold text-white">{product.platforms.join(", ")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kategoriler:</span>
                    <span className="font-semibold text-white">{product.category.join(", ")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Yayın Durumu:</span>
                    <span className="font-semibold text-emerald-400">{product.status}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <V2Footer />
    </div>
  );
}
