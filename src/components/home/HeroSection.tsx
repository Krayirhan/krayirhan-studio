import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-32 border-b border-white/10 overflow-hidden">
      {/* Background Subtle Ambient Aura */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-orange-500/10 via-emerald-500/10 to-blue-500/10 blur-[120px] rounded-full pointer-events-none animate-pulse-subtle" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Studio Branding Badge */}
        <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-300 backdrop-blur-md mb-8 shadow-sm">
          <div className="relative h-5 w-5 rounded-full overflow-hidden border border-white/20 bg-white p-0.5">
            <img src="/brand/logo.png" alt="Logo" className="h-full w-full object-cover rounded-full" />
          </div>
          <span>Krayirhan Studio · Bağımsız Oyun & Uygulama Geliştiricisi</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Oynaması keyifli oyunlar, <br />
            her gün kullanılan <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500">uygulamalar.</span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed">
            {STUDIO_INFO.tagline} Sade, odaklı ve kullanıcıyı merkeze alan dijital ürünlerimizi keşfedin.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center gap-4 pt-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-zinc-950 hover:bg-zinc-200 shadow-xl shadow-white/10 transition-all hover:scale-105"
          >
            <span>Google Play'de Keşfet</span>
            <ExternalLink className="h-4 w-4" />
          </a>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
          >
            <span>Tüm Ürünleri İncele</span>
            <ArrowRight className="h-4 w-4 text-zinc-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
