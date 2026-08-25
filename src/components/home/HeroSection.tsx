import Link from "next/link";
import { ArrowRight, ExternalLink, Sparkles, Smartphone, Gamepad2 } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";

export function HeroSection() {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-white/10 overflow-hidden">
      {/* Background Animated Aurora Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-tr from-orange-500/10 via-emerald-500/10 to-blue-500/10 blur-[100px] rounded-full pointer-events-none animate-pulse-subtle" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Live Status Bar */}
        <div className="flex flex-wrap items-center gap-3 text-xs font-mono tracking-widest text-zinc-400 uppercase mb-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-zinc-200 backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold text-white">Stüdyo Canlı</span>
          </div>
          <span className="text-zinc-600">/</span>
          <span>Ankara</span>
          <span className="text-zinc-600">/</span>
          <span className="text-zinc-300">3 Aktif Yapım</span>
        </div>

        {/* Main Architectural Headline */}
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
            Oynaması keyifli oyunlar, <br />
            her gün kullanılan <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-500">uygulamalar.</span>
          </h1>

          <p className="max-w-2xl text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed">
            Gereksiz karmaşadan ve can sıkıcı reklamlardan uzak; doğrudan amaca hizmet eden mobil oyunlar ve dijital araçlar üretiyoruz.
          </p>
        </div>

        {/* Quick Nav Row with Live Badges */}
        <div className="mt-10 flex flex-wrap items-center gap-4 pt-2">
          <a
            href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-zinc-950 hover:bg-zinc-200 shadow-xl shadow-white/5 transition-all hover:scale-105"
          >
            <span>Google Play Vitrini</span>
            <ExternalLink className="h-4 w-4" />
          </a>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
          >
            <span>Tüm Kataloğu İncele</span>
            <ArrowRight className="h-4 w-4 text-zinc-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
