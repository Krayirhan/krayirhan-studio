import Link from "next/link";
import type { CSSProperties } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProductSlider } from "@/components/home/FeaturedProductSlider";
import { PRODUCTS } from "@/data/games";
import { ArrowRight, Download, Gamepad2, Smartphone, Shield, Palette } from "lucide-react";

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
    <div className="pb-16 space-y-16 sm:space-y-24">
      {/* 1. Monumental Studio Hero */}
      <HeroSection />

      {/* 2. Interactive Borderless Cinematic Product Stage */}
      <FeaturedProductSlider />

      {/* 3. Compact 3-Column Catalog Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8">
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

        {/* 3-Column Visual Grid — staggered like tiles resting unevenly on a board */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PRODUCTS.map((product, index) => {
            const isBlokDunyasi = product.id === "blok-dunyasi";
            const isLingorise = product.id === "lingorise";

            const screens = getScreens(product.id);
            const stagger = index === 1 ? "lg:-mt-6" : index === 2 ? "lg:mt-6" : "";

            return (
              <div
                key={product.id}
                className={`group relative flex flex-col justify-between rounded-[2.2rem] border border-white/10 bg-[#111114] overflow-hidden hover:border-white/25 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-black ${stagger}`}
              >
                {/* Top Visual Showcase: Pixel-Perfect Dual-Phone Simulator */}
                <Link
                  href={`/products/${product.slug}`}
                  className="relative h-72 sm:h-80 w-full overflow-hidden bg-gradient-to-b from-[#18181c] to-[#0c0c0f] flex items-center justify-center p-4 group-hover:from-[#202028] transition-colors duration-500 border-b border-white/5"
                >
                  {/* Per-product texture, not a flat colored circle */}
                  {isBlokDunyasi ? (
                    <div className="absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none">
                      <div className="fruit-blob fruit-blob-citrus w-44 h-44 -top-6 left-1/4" />
                      <div className="fruit-blob fruit-blob-grape w-32 h-32 bottom-0 right-1/4" />
                      <div className="fruit-blob fruit-blob-cherry w-24 h-24 top-1/3 right-6" />
                    </div>
                  ) : isLingorise ? (
                    <div
                      className="texture-vine absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ maskImage: "radial-gradient(circle, black 35%, transparent 70%)", WebkitMaskImage: "radial-gradient(circle, black 35%, transparent 70%)" }}
                    />
                  ) : (
                    <div
                      className="texture-notebook absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ maskImage: "radial-gradient(ellipse, black 45%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse, black 45%, transparent 80%)" }}
                    />
                  )}

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

      {/* 4. Open & Fluid Studio Manifesto Stage (Completely Borderless & Integrated) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-14">

        {/* 3 Core Experience Pillars — tiles resting at slightly different heights, not a flat row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-14">
          <div className="space-y-3">
            <div className="tile-chip-static flex h-12 w-12 items-center justify-center text-white/90" style={{ background: "linear-gradient(155deg, #fab35f, #c56a1e)" }}>
              <Palette className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">Canlı & Özgün Temalar</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Göz yormayan renkler ve meyve-kumaş dokularıyla her an keyifli bir görsel deneyim.
            </p>
          </div>

          <div className="space-y-3 lg:mt-8">
            <div className="tile-chip-static flex h-12 w-12 items-center justify-center text-white/90" style={{ background: "linear-gradient(155deg, #c3a2ef, #7752b0)" }}>
              <Gamepad2 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">Sürükleyici Mekanikler</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Zihni dinlendiren, tek parmakla akıcı ve ödüllendirici oyun kurguları.
            </p>
          </div>

          <div className="space-y-3">
            <div className="tile-chip-static flex h-12 w-12 items-center justify-center text-white/90" style={{ background: "linear-gradient(155deg, #7cc3f2, #2c6f9c)" }}>
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-white font-display">%100 Çevrimdışı & Gizlilik</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Verilerinize saygı duyan güvenli altyapı ve dilediğiniz her yerde internetsiz tam çalışma.
            </p>
          </div>
        </div>

        {/* Closing Monumental Call to Action (Open & Breathable) */}
        <div className="texture-fabric relative text-center max-w-3xl mx-auto space-y-6 pt-8 border-t border-white/10">
          <div className="tile-chip tile-lime w-8 h-8 hidden sm:block top-2 left-2 md:left-10" style={{ "--tile-rot": "-12deg", animationDelay: "0.4s" } as CSSProperties} />
          <div className="tile-chip tile-sky w-7 h-7 hidden sm:block top-6 right-4 md:right-16" style={{ "--tile-rot": "10deg", animationDelay: "1.6s" } as CSSProperties} />

          <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-zinc-300">
            <span>Stüdyo Felsefesi</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Sade tasarımlar, dürüst yapımlar.
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            Krayirhan Studio çatısı altında tek bir kuralımız var: Kendimizin de her gün keyifle kullanacağı veya oynayacağı samimi mobil yapımları sizlerle buluşturmak.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-2xl shadow-white/10 hover:scale-105"
            >
              <Download className="h-4 w-4" />
              <span>Google Play&apos;de Oyna</span>
            </a>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <span>Tüm Kataloğu İncele</span>
              <ArrowRight className="h-4 w-4 text-zinc-400" />
            </Link>
          </div>
        </div>

      </section>
    </div>
  );
}
