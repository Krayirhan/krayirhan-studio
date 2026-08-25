import { PRODUCTS } from "@/data/games";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ArrowLeft, CheckCircle2, ExternalLink, Sparkles, Smartphone, Gamepad2, Download } from "lucide-react";
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
      title: "Ürün Bulunamadı | Krayirhan Studio",
    };
  }

  return {
    title: `${product.title} - ${product.tagline} | Krayirhan Studio`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pb-24">
      {/* Back button & Hero Banner */}
      <div className="relative w-full py-12 sm:py-16 border-b border-amber-500/15 bg-gradient-to-b from-[#18140f] via-[#11131a] to-[#090a0f] overflow-hidden">
        {/* Ambient Glows & Grid */}
        <div className="absolute inset-0 grid-pattern-nordic opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-6">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-800 hover:border-amber-500/50 w-fit transition-colors shadow-sm"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Tüm Kataloğa Dön</span>
          </Link>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2 items-center">
              <span
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${
                  product.type === "game"
                    ? "bg-amber-950/80 text-amber-300 border border-amber-500/40"
                    : "bg-slate-900 text-amber-200 border border-slate-700"
                }`}
              >
                {product.type === "game" ? (
                  <Gamepad2 className="h-3.5 w-3.5" />
                ) : (
                  <Smartphone className="h-3.5 w-3.5" />
                )}
                {product.type === "game" ? "Oyun" : "Uygulama"}
              </span>

              <span className="rounded-full bg-slate-800/80 border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200">
                {product.status}
              </span>

              {product.releaseDate && (
                <span className="rounded-full bg-amber-950/40 border border-amber-500/30 px-3 py-1 text-xs font-medium text-amber-300">
                  {product.releaseDate}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              {product.title}
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">{product.tagline}</p>
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
              <div className="prose prose-invert max-w-none text-slate-300 text-base leading-relaxed space-y-4 whitespace-pre-line">
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
                      className="flex items-start gap-3 rounded-2xl border border-amber-500/15 bg-[#11131a] p-4 text-slate-200"
                    >
                      <CheckCircle2 className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base leading-relaxed">{feature}</span>
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
                  <span className="text-xs text-slate-400">Büyütmek için görsele tıklayın</span>
                </div>
                <ProductGallery title={product.title} screenshots={product.screenshots} />
              </div>
            )}
          </div>

          {/* Right Column: Platform Links Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-amber-500/20 bg-[#11131a] p-6 sm:p-8 space-y-6 sticky top-28 shadow-xl">
              <h3 className="text-lg font-bold text-white">Hemen İndirin & Deneyin</h3>

              <div className="space-y-3">
                {product.links.playStore && (
                  <a
                    href={product.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/25 hover:from-amber-400 hover:to-yellow-400 transition-all"
                  >
                    <Download className="h-4 w-4" />
                    <span>Google Play'den İndir</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}

                {product.links.appStore && (
                  <a
                    href={product.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-700 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition-all"
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
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 border border-slate-700 py-3.5 text-sm font-bold text-white hover:bg-slate-800 transition-all"
                  >
                    <span>Web Uygulaması</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Quick Specs */}
              <div className="border-t border-slate-800/80 pt-6 space-y-3 text-xs sm:text-sm text-slate-400">
                <div className="flex justify-between">
                  <span>Geliştirici & Yayıncı:</span>
                  <span className="font-semibold text-white">Krayirhan Studio</span>
                </div>
                <div className="flex justify-between">
                  <span>Platformlar:</span>
                  <span className="font-semibold text-amber-300">{product.platforms.join(", ")}</span>
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

              <div className="border-t border-slate-800/80 pt-4">
                <Link
                  href="/press"
                  className="flex items-center justify-center gap-1.5 text-xs text-amber-400 hover:underline"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Basın & Medya kiti varlıklarını incele</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
