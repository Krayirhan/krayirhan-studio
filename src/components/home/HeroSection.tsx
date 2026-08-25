import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-20 md:pt-28 md:pb-28 border-b border-white/10 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[400px] bg-gradient-to-tr from-orange-500/[0.08] via-emerald-500/[0.08] to-blue-500/[0.08] blur-[140px] rounded-full pointer-events-none animate-pulse-subtle" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Studio Branding Badge */}
        <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200 backdrop-blur-md mb-8 shadow-sm hover:border-white/30 transition-colors">
          <div className="relative h-5 w-5 rounded-full overflow-hidden border border-white/20 bg-white p-0.5 shadow-sm">
            <Image src="/brand/logo.png" alt="Logo" fill sizes="20px" className="rounded-full object-cover" />
          </div>
          <span>Krayirhan Studio · Ankara, Türkiye</span>
        </div>

        {/* Monumental Centered Architectural Headline */}
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] font-display">
            Oynaması keyifli oyunlar, <br />
            her gün kullanılan <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500">uygulamalar.</span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed">
            {STUDIO_INFO.tagline} Sade, odaklı ve doğrudan amaca hizmet eden mobil yapımlarımızı keşfedin.
          </p>
        </div>

        {/* High-Contrast Action Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-zinc-950 hover:bg-zinc-200 shadow-2xl shadow-white/10 transition-all hover:scale-105"
          >
            <span>Google Play'de Keşfet</span>
            <ExternalLink className="h-4 w-4" />
          </a>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
          >
            <span>Tüm Ürün Kataloğu</span>
            <ArrowRight className="h-4 w-4 text-zinc-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
