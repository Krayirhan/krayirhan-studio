"use client";

import Link from "next/link";
import { Sparkles, Smartphone, Gamepad2, ArrowRight, Download, Zap } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";
import { GAMES, APPS } from "@/data/games";
import { QrDownloadButton } from "@/components/ui/QrDownloadModal";

export function HeroSection() {
  const featuredGame = GAMES.find((g) => g.featured) || GAMES[0];
  const featuredApp = APPS.find((a) => a.featured) || APPS[0];

  return (
    <section className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-32 hero-gold-glow">
      {/* Nordic Grid Pattern Background */}
      <div className="absolute inset-0 grid-pattern-nordic pointer-events-none opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Hero Text */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-950/30 px-4 py-1.5 text-xs font-semibold text-amber-300 backdrop-blur-md mb-6 shadow-inner">
            <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            <span>Krayirhan Studio · Nordic Craft & Mobil Mühendislik</span>
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl leading-tight">
            Bağımlılık Yaratan{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
              Oyunlar
            </span>{" "}
            <br className="hidden sm:inline" />& Akıllı{" "}
            <span className="bg-gradient-to-r from-slate-100 via-amber-200 to-amber-400 bg-clip-text text-transparent">
              Uygulamalar
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            {STUDIO_INFO.tagline} Detaylara özen gösteren tasarım anlayışı ve ödün vermeyen mühendislik disipliniyle geliştirilen ürünlerimizi keşfedin.
          </p>
        </div>

        {/* Premium Bento Grid Showcase (Side-by-Side Modern Phone Cards) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Blok Dünyası (Game) */}
          {featuredGame && (
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-amber-500/30 bg-gradient-to-br from-[#18140f]/90 via-[#11131a]/95 to-[#090a0f] p-8 sm:p-10 shadow-2xl backdrop-blur-xl hover:border-amber-500/60 transition-all duration-500 flex flex-col justify-between">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber-500/15 blur-3xl group-hover:bg-amber-500/25 transition-all pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center z-10">
                {/* Left Content */}
                <div className="sm:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    <Gamepad2 className="h-3.5 w-3.5" />
                    <span>Mobil Oyun</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    {featuredGame.title}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {featuredGame.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
                    <span className="rounded-lg bg-black/50 border border-amber-500/20 px-2.5 py-1 text-amber-200">
                      🧩 8x8 Bulmaca
                    </span>
                    <span className="rounded-lg bg-black/50 border border-amber-500/20 px-2.5 py-1 text-amber-200">
                      🎨 Renkli Temalar
                    </span>
                    <span className="rounded-lg bg-black/50 border border-amber-500/20 px-2.5 py-1 text-amber-200">
                      ⚡ Kombo & Skor
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap gap-3 items-center">
                    {featuredGame.links.playStore && (
                      <a
                        href={featuredGame.links.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-5 py-3 text-xs font-bold text-slate-950 hover:from-amber-400 hover:to-yellow-400 shadow-lg shadow-amber-500/25 hover:scale-105 transition-all"
                      >
                        <Download className="h-4 w-4" />
                        <span>Play Store'da Oyna</span>
                      </a>
                    )}

                    {featuredGame.links.playStore && (
                      <QrDownloadButton
                        title={featuredGame.title}
                        url={featuredGame.links.playStore}
                        coverImage={featuredGame.coverImage}
                        category="Mobil Oyun"
                      />
                    )}

                    <Link
                      href={`/products/${featuredGame.slug}`}
                      className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-xs font-semibold text-slate-300 hover:text-white hover:border-amber-500/50 transition-all"
                    >
                      Detaylar ➔
                    </Link>
                  </div>
                </div>

                {/* Right Realistic Phone Mockup */}
                <div className="sm:col-span-5 flex justify-center items-center">
                  <div className="relative w-full max-w-[200px] sm:max-w-[220px] rounded-[2.2rem] p-2 bg-gradient-to-b from-amber-600/50 via-slate-800 to-slate-900 border border-amber-500/40 shadow-2xl shadow-black ring-1 ring-white/10 group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500">
                    <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.8rem] bg-slate-950">
                      <img
                        src={featuredGame.coverImage}
                        alt={featuredGame.title}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Card 2: LingoRise (App) */}
          {featuredApp && (
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-amber-500/25 bg-gradient-to-br from-[#12141c]/90 via-[#0e1017]/95 to-[#090a0f] p-8 sm:p-10 shadow-2xl backdrop-blur-xl hover:border-amber-500/50 transition-all duration-500 flex flex-col justify-between">
              {/* Ambient Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />

              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center z-10">
                {/* Left Content */}
                <div className="sm:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 border border-amber-500/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-400">
                    <Smartphone className="h-3.5 w-3.5" />
                    <span>Mobil Uygulama</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
                    {featuredApp.title}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {featuredApp.shortDescription}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold text-slate-300">
                    <span className="rounded-lg bg-black/50 border border-slate-800 px-2.5 py-1 text-slate-200">
                      🌱 Learning Garden
                    </span>
                    <span className="rounded-lg bg-black/50 border border-slate-800 px-2.5 py-1 text-slate-200">
                      ⏳ SM-2 Aralıklı Tekrar
                    </span>
                    <span className="rounded-lg bg-black/50 border border-slate-800 px-2.5 py-1 text-slate-200">
                      📈 A1 - C2 Seviye
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 flex flex-wrap gap-3 items-center">
                    <Link
                      href={`/products/${featuredApp.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-slate-100 to-amber-200 px-5 py-3 text-xs font-bold text-slate-950 hover:from-white hover:to-amber-300 shadow-lg shadow-amber-500/15 hover:scale-105 transition-all"
                    >
                      <Zap className="h-4 w-4" />
                      <span>Uygulamayı İncele</span>
                    </Link>

                    <Link
                      href="/press"
                      className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-xs font-semibold text-slate-300 hover:text-white hover:border-amber-500/40 transition-all"
                    >
                      Press Kit ➔
                    </Link>
                  </div>
                </div>

                {/* Right Realistic Phone Mockup */}
                <div className="sm:col-span-5 flex justify-center items-center">
                  <div className="relative w-full max-w-[200px] sm:max-w-[220px] rounded-[2.2rem] p-2 bg-gradient-to-b from-amber-500/30 via-slate-800 to-slate-900 border border-slate-700/60 shadow-2xl shadow-black ring-1 ring-white/10 group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                    <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.8rem] bg-slate-950">
                      <img
                        src={featuredApp.coverImage}
                        alt={featuredApp.title}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
