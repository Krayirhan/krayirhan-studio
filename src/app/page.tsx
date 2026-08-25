import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProductSlider } from "@/components/home/FeaturedProductSlider";
import { GameCard } from "@/components/games/GameCard";
import { PRODUCTS } from "@/data/games";
import { ArrowRight, Smartphone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="pb-24 space-y-24 sm:space-y-32">
      {/* 1. Monumental Centered Studio Hero */}
      <HeroSection />

      {/* 2. Interactive Borderless Cinematic Product Stage */}
      <FeaturedProductSlider />

      {/* 3. All Products Catalog Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <GameCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Direct Studio Manifesto & Contact */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#141418] to-[#0d0d10] p-8 sm:p-12 lg:p-16 text-center flex flex-col items-center shadow-2xl">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
              Stüdyo Felsefesi
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display">
              Sade tasarımlar, dürüst ürünler.
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Oyun ve uygulamalarımızı geliştirirken tek bir kuralımız var: Kendimizin de her gün keyifle kullanacağı veya oynayacağı yapımlar üretmek.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 hover:scale-105"
              >
                İletişime Geçin
              </Link>
              <Link
                href="/press"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white hover:border-white/30 transition-all"
              >
                Press Kit & Medya Varlıkları
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
