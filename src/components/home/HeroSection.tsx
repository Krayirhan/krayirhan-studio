import Link from "next/link";
import { Sparkles, Smartphone, ArrowRight } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";
import { PRODUCTS, APPS } from "@/data/games";

export function HeroSection() {
  const featuredProduct = PRODUCTS.find((p) => p.featured) || PRODUCTS[0];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 hero-glow">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-4 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md mb-6 shadow-inner">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>Krayirhan Studio · Mobil & Dijital Ürün Stüdyosu</span>
          </div>

          {/* Main Title */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Geleceğin Akıllı{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Mobil Uygulamalarını
            </span>{" "}
            İnşa Ediyoruz
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            {STUDIO_INFO.tagline} Mobil ve web platformları için yüksek performanslı, modern ve kullanıcı odaklı dijital ürünler geliştiriyoruz.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products/lingorise"
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-600/30 hover:opacity-95 hover:scale-105 transition-all"
            >
              <Smartphone className="h-4 w-4" />
              <span>LingoRise'ı Keşfedin</span>
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all backdrop-blur-md"
            >
              <span>Stüdyo Hakkında</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>
          </div>
        </div>

        {/* Featured Spotlight Card: LingoRise */}
        {featuredProduct && (
          <div className="mt-16 overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0c1322] via-[#090e18] to-[#060910] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="p-8 sm:p-12 lg:col-span-6 flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
                  <Smartphone className="h-4 w-4" />
                  <span>Amiral Gemisi Ürünümüz</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  {featuredProduct.title}
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {featuredProduct.shortDescription}
                </p>
                <div className="pt-2 flex flex-wrap gap-3 items-center">
                  <Link
                    href={`/products/${featuredProduct.slug}`}
                    className="rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/20"
                  >
                    Detaylı İncele & Özellikler
                  </Link>
                  <Link
                    href="/press"
                    className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-400 transition-colors"
                  >
                    Basın Kiti (Press Kit)
                  </Link>
                </div>
              </div>

              <div className="relative aspect-video lg:aspect-auto lg:h-full lg:col-span-6 overflow-hidden p-6 sm:p-10 flex items-center justify-center bg-slate-950/40">
                <img
                  src={featuredProduct.coverImage}
                  alt={featuredProduct.title}
                  className="max-h-[380px] w-auto object-contain rounded-2xl shadow-2xl border border-slate-800"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
