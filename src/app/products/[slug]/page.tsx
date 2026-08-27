import { PRODUCTS } from "@/data/games";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProductGallery } from "@/components/products/ProductGallery";
import { WordMatchDemo } from "@/components/products/WordMatchDemo";
import { ArrowLeft, ExternalLink, Smartphone, Gamepad2, Download } from "lucide-react";
import type { Metadata } from "next";

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
      title: "Ürün Bulunamadı",
    };
  }

  return {
    title: product.title,
    description: product.shortDescription,
    openGraph: {
      title: product.title,
      description: product.shortDescription,
      type: "website",
      images: [{ url: product.bannerImage, alt: `${product.title} uygulama görseli` }],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.shortDescription,
      images: [product.bannerImage],
    },
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const isBlokDunyasi = product.id === "blok-dunyasi";
  const isLingorise = product.id === "lingorise";

  return (
    <div className="pb-24">
      {/* Back button & Hero Banner */}
      <div className="texture-fabric relative w-full py-12 sm:py-16 border-b border-white/10 bg-gradient-to-b from-[#191e1b] via-[#12160f] to-[var(--background-deep)] overflow-hidden">
        {/* Per-product texture, the same identity as the homepage — not a generic dark banner */}
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
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-white w-fit transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Tüm ürünler</span>
          </Link>

          <div className="space-y-3">
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

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              {product.title}
            </h1>
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
            <div className="rounded-3xl border border-white/10 bg-[var(--card)] p-6 sm:p-8 space-y-6 sticky top-28 shadow-xl">
              <h3 className="text-lg font-bold text-white">Hemen İndirin & Deneyin</h3>

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

                {product.links.appStore && (
                  <a
                    href={product.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all"
                  >
                    <span>App Store</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}

                {product.links.webApp && (
                  <a
                    href={product.links.webApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-all"
                  >
                    <span>Web Uygulaması</span>
                    <ExternalLink className="h-4 w-4" />
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
  );
}
