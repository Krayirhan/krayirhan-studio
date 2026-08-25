import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProductSlider } from "@/components/home/FeaturedProductSlider";
import { ArrowRight, Mail, FileText } from "lucide-react";

export default function HomePage() {
  return (
    <div className="pb-24 space-y-24 sm:space-y-32">
      {/* 1. Monumental Centered Studio Hero */}
      <HeroSection />

      {/* 2. Interactive Borderless Cinematic Product Stage */}
      <FeaturedProductSlider />

      {/* 3. Pure Borderless Studio Manifesto & Direct Action */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-8 border-t border-white/10">
        <div className="space-y-6 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">
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
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-2xl shadow-white/10 hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              <span>İletişime Geçin</span>
            </Link>
            <Link
              href="/press"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <FileText className="h-4 w-4 text-zinc-400" />
              <span>Press Kit & Medya</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
