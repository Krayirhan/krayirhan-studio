import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProductSlider } from "@/components/home/FeaturedProductSlider";
import { PRODUCTS } from "@/data/games";
import { ArrowRight, Download, Gamepad2, Smartphone, Sparkles, Shield, Palette, CheckCircle2 } from "lucide-react";

export default function HomePage() {
  // Map distinct 2 screens for each product
  const getScreens = (id: string) => {
    switch (id) {
      case "blok-dunyasi":
        return {
          primary: "/games/blok-dunyasi/cover.jpg",
          secondary: "/games/blok-dunyasi/gameplay-1.jpg",
        };
      case "lingorise":
        return {
          primary: "/apps/lingorise/home-garden.png",
          secondary: "/apps/lingorise/practice-session.png",
        };
      case "benim-notlarim":
        return {
          primary: "/apps/benim-notlarim/cover.jpg",
          secondary: "/apps/benim-notlarim/editor.jpg",
        };
      default:
        return {
          primary: "/games/blok-dunyasi/cover.jpg",
          secondary: "/games/blok-dunyasi/gameplay-1.jpg",
        };
    }
  };

  return (
    <div className="pb-24 space-y-24 sm:space-y-32">
      {/* 1. Monumental Studio Hero */}
      <HeroSection />

      {/* 2. Interactive Borderless Cinematic Product Stage */}
      <FeaturedProductSlider />

      {/* 3. Compact 3-Column Catalog Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              <Smartphone className="h-4 w-4" />
              <span>Tüm Stüdyo Kataloğu</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
              Oyunlar & Mobil Uygulamalar
            </h2>
          </div>

          <Link
            href="/products"
            className="text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Katalog Sayfasına Git</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 3-Column Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PRODUCTS.map((product) => {
            const isBlokDunyasi = product.id === "blok-dunyasi";
            const isLingorise = product.id === "lingorise";
            const isNotlarim = product.id === "benim-notlarim";

            const screens = getScreens(product.id);

            return (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between rounded-[2.2rem] border border-white/10 bg-[#111114] overflow-hidden hover:border-white/25 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-black"
              >
                {/* Top Visual Showcase: Pixel-Perfect Dual-Phone Simulator */}
                <Link
                  href={`/products/${product.slug}`}
                  className="relative h-72 sm:h-80 w-full overflow-hidden bg-gradient-to-b from-[#18181c] to-[#0c0c0f] flex items-center justify-center p-4 group-hover:from-[#202028] transition-colors duration-500 border-b border-white/5"
                >
                  {/* Ambient Colored Aura */}
                  <div
                    className={`absolute w-60 h-60 rounded-full blur-[80px] opacity-25 group-hover:opacity-50 transition-all duration-700 pointer-events-none ${
                      isBlokDunyasi
                        ? "bg-orange-500"
                        : isLingorise
                        ? "bg-emerald-500"
                        : "bg-sky-500"
                    }`}
                  />

                  {/* Dual Phone Showcase */}
                  <div className="relative flex items-center justify-center h-full py-2">
                    
                    {/* Phone 1: Main Menu / Garden */}
                    <div className="relative w-[125px] sm:w-[135px] aspect-[9/19.5] rounded-[1.8rem] p-1.5 bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-950 border border-white/25 shadow-2xl shadow-black -rotate-6 group-hover:-rotate-2 group-hover:scale-105 transition-all duration-500 z-10">
                      <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-black">
                        <img
                          src={screens.primary}
                          alt={`${product.title} Ekran 1`}
                          className="h-full w-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
                      </div>
                    </div>

                    {/* Phone 2: Gameplay / Editor / Practice */}
                    <div className="relative w-[125px] sm:w-[135px] aspect-[9/19.5] rounded-[1.8rem] p-1.5 bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-950 border border-white/25 shadow-2xl shadow-black rotate-6 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500 mt-6 -ml-5 sm:-ml-6 z-20">
                      <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-black">
                        <img
                          src={screens.secondary}
                          alt={`${product.title} Ekran 2`}
                          className="h-full w-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
                      </div>
                    </div>

                  </div>
                </Link>

                {/* Content Section */}
                <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-5">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-bold text-zinc-300">
                        {product.type === "game" ? (
                          <Gamepad2 className="h-3 w-3 text-orange-400" />
                        ) : (
                          <Smartphone className="h-3 w-3 text-emerald-400" />
                        )}
                        <span>{product.type === "game" ? "Bulmaca Oyunu" : "Mobil Uygulama"}</span>
                      </span>

                      <span className="text-[11px] font-semibold text-zinc-400">
                        {product.status === "Released" ? "Google Play" : product.status}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-zinc-100 transition-colors font-display">
                      <Link href={`/products/${product.slug}`}>{product.title}</Link>
                    </h3>

                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                    {product.links.playStore ? (
                      <a
                        href={product.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-md hover:scale-105"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span>Google Play</span>
                      </a>
                    ) : (
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 border border-white/15 px-4 py-2.5 text-xs font-bold text-zinc-200 hover:bg-white/20 transition-all"
                      >
                        <span>İncele</span>
                      </Link>
                    )}

                    <Link
                      href={`/products/${product.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white group-hover:translate-x-1 transition-all"
                    >
                      <span>Detaylar</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Unified Studio Vision & Core Principles Stage (Compact & Modern) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.8rem] border border-white/10 bg-gradient-to-b from-[#141418] via-[#0f0f13] to-[#09090b] p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl shadow-black">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-orange-500/10 via-emerald-500/10 to-sky-500/10 blur-[130px] pointer-events-none" />

          <div className="relative space-y-12">
            
            {/* Top: Manifesto & Direct Action */}
            <div className="max-w-3xl mx-auto text-center space-y-5">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-zinc-300">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Stüdyo Felsefesi</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
                Sade tasarımlar, dürüst yapımlar.
              </h2>

              <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
                Krayirhan Studio çatısı altında tek bir kuralımız var: Kendimizin de her gün keyifle kullanacağı veya oynayacağı samimi mobil yapımları sizlerle buluşturmak.
              </p>

              <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-xl shadow-white/10 hover:scale-105"
                >
                  <Download className="h-4 w-4" />
                  <span>Google Play&apos;de Oyna</span>
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                >
                  <span>Tüm Kataloğu İncele</span>
                  <ArrowRight className="h-4 w-4 text-zinc-400" />
                </Link>
              </div>
            </div>

            {/* Bottom: 3 Core Experience Bento Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-6 border-t border-white/10">
              
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3 hover:border-white/20 transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                  <Palette className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white font-display">Canlı & Özgün Temalar</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Göz yormayan estetik renkler, meyve ve kumaş dokularıyla her an keyifli bir görsel deneyim.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3 hover:border-white/20 transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Gamepad2 className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white font-display">Sürükleyici Mekanikler</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Zihni dinlendiren, tek parmakla akıcı ve başarı hissi veren ödüllendirici oyun kurguları.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3 hover:border-white/20 transition-colors">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <Shield className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white font-display">%100 Çevrimdışı & Gizlilik</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Verilerinize saygı duyan güvenli yapı ve internet olmadan metroda, seyahatte tam özgürlük.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
