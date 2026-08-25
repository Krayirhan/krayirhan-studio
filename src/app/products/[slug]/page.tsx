import { PRODUCTS } from "@/data/games";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ProductGallery } from "@/components/products/ProductGallery";
import { ArrowLeft, CheckCircle2, Monitor, ExternalLink, Sparkles, Smartphone, Gamepad2 } from "lucide-react";
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
    return { title: "Ürün Bulunamadı | Krayirhan Studio" };
  }

  return {
    title: `${product.title} | Krayirhan Studio`,
    description: product.shortDescription,
  };
}

export default async function SingleProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="pb-24">
      {/* Back button & Hero Banner */}
      <div className="relative w-full h-[50vh] min-h-[380px] bg-slate-950 overflow-hidden">
        <Image
          src={product.bannerImage}
          alt={product.title}
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-black/50" />

        <div className="relative mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-700/50 w-fit transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Tüm Kataloğa Dön</span>
          </Link>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2 items-center">
              <span
                className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-semibold text-white ${
                  product.type === "game" ? "bg-indigo-600" : "bg-cyan-600"
                }`}
              >
                {product.type === "game" ? (
                  <Gamepad2 className="h-3.5 w-3.5" />
                ) : (
                  <Smartphone className="h-3.5 w-3.5" />
                )}
                {product.type === "game" ? "Oyun" : "Uygulama"}
              </span>

              <span className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-semibold text-slate-200">
                {product.status}
              </span>

              {product.releaseDate && (
                <span className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300">
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
              <h2 className="text-2xl font-bold text-white">Genel Bakış</h2>
              <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line">
                {product.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            {product.features && product.features.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Öne Çıkan Yetenekler</h2>
                <div className="grid grid-cols-1 gap-3">
                  {product.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#0d121d] p-4 text-slate-300"
                    >
                      <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">{feature}</span>
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

            {/* System Requirements (If applicable) */}
            {product.systemRequirements && (
              <div className="space-y-4 border-t border-slate-800 pt-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Monitor className="h-6 w-6 text-indigo-400" />
                  <span>Sistem Gereksinimleri</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {product.systemRequirements.minimum && (
                    <div className="rounded-xl border border-slate-800 bg-[#0d121d] p-6 space-y-2 text-xs sm:text-sm text-slate-300">
                      <h3 className="font-bold text-slate-100 uppercase tracking-wider mb-3 text-indigo-400">
                        Minimum
                      </h3>
                      {product.systemRequirements.minimum.os && (
                        <p><strong className="text-slate-400">İşletim Sistemi:</strong> {product.systemRequirements.minimum.os}</p>
                      )}
                      {product.systemRequirements.minimum.processor && (
                        <p><strong className="text-slate-400">İşlemci:</strong> {product.systemRequirements.minimum.processor}</p>
                      )}
                      {product.systemRequirements.minimum.memory && (
                        <p><strong className="text-slate-400">Bellek:</strong> {product.systemRequirements.minimum.memory}</p>
                      )}
                      {product.systemRequirements.minimum.graphics && (
                        <p><strong className="text-slate-400">Ekran Kartı:</strong> {product.systemRequirements.minimum.graphics}</p>
                      )}
                      {product.systemRequirements.minimum.storage && (
                        <p><strong className="text-slate-400">Depolama:</strong> {product.systemRequirements.minimum.storage}</p>
                      )}
                    </div>
                  )}

                  {product.systemRequirements.recommended && (
                    <div className="rounded-xl border border-slate-800 bg-[#0d121d] p-6 space-y-2 text-xs sm:text-sm text-slate-300">
                      <h3 className="font-bold text-slate-100 uppercase tracking-wider mb-3 text-cyan-400">
                        Önerilen
                      </h3>
                      {product.systemRequirements.recommended.os && (
                        <p><strong className="text-slate-400">İşletim Sistemi:</strong> {product.systemRequirements.recommended.os}</p>
                      )}
                      {product.systemRequirements.recommended.processor && (
                        <p><strong className="text-slate-400">İşlemci:</strong> {product.systemRequirements.recommended.processor}</p>
                      )}
                      {product.systemRequirements.recommended.memory && (
                        <p><strong className="text-slate-400">Bellek:</strong> {product.systemRequirements.recommended.memory}</p>
                      )}
                      {product.systemRequirements.recommended.graphics && (
                        <p><strong className="text-slate-400">Ekran Kartı:</strong> {product.systemRequirements.recommended.graphics}</p>
                      )}
                      {product.systemRequirements.recommended.storage && (
                        <p><strong className="text-slate-400">Depolama:</strong> {product.systemRequirements.recommended.storage}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Platform Links Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-[#0d121d] p-6 space-y-6 sticky top-28 shadow-xl">
              <h3 className="text-lg font-bold text-white">Erişim & İndirme</h3>

              <div className="space-y-3">
                {product.links.steam && (
                  <a
                    href={product.links.steam}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-bold text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all"
                  >
                    <span>Steam'de Görüntüle</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}

                {product.links.appStore && (
                  <a
                    href={product.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 border border-slate-700 px-4 py-3.5 text-sm font-bold text-white hover:bg-slate-700 transition-all"
                  >
                    <span>App Store'dan İndir</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}

                {product.links.playStore && (
                  <a
                    href={product.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3.5 text-sm font-bold text-white hover:bg-emerald-600 transition-all"
                  >
                    <span>Google Play'den İndir</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}

                {product.links.webApp && (
                  <a
                    href={product.links.webApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-600 px-4 py-3.5 text-sm font-bold text-white hover:bg-cyan-500 shadow-lg shadow-cyan-600/30 transition-all"
                  >
                    <span>Web Uygulamasını Aç</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Quick Specs */}
              <div className="border-t border-slate-800 pt-6 space-y-3 text-xs sm:text-sm text-slate-400">
                <div className="flex justify-between">
                  <span>Geliştirici:</span>
                  <span className="font-semibold text-white">Krayirhan Studio</span>
                </div>
                <div className="flex justify-between">
                  <span>Teknoloji Yığını:</span>
                  <span className="font-semibold text-white">{product.techStack.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Platformlar:</span>
                  <span className="font-semibold text-white">{product.platforms.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kategoriler:</span>
                  <span className="font-semibold text-white">{product.category.join(", ")}</span>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4">
                <Link
                  href="/press"
                  className="flex items-center justify-center gap-1.5 text-xs text-cyan-400 hover:underline"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Basın & Medya kiti varlıklarını indir</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
