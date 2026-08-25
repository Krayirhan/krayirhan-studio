import Link from "next/link";
import { Gamepad2, Sparkles, Smartphone, ArrowRight, Layers, Flame, Box } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";
import { PRODUCTS, GAMES, APPS } from "@/data/games";

export function HeroSection() {
  const featuredGame = GAMES.find((g) => g.featured) || GAMES[0];
  const featuredApp = APPS.find((a) => a.featured) || APPS[0];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 hero-glow">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-4 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md mb-6 shadow-inner">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>Krayirhan Studio · Oyun & Dijital Ürün Geliştirme</span>
          </div>

          {/* Main Title */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Sınırları Zorlayan{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Oyunlar
            </span>{" "}
            & Akıllı{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Uygulamalar
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            {STUDIO_INFO.tagline} PC, mobil ve web platformları için derin mekanikli bağımsız oyunlar ve yüksek performanslı yapay zeka odaklı dijital uygulamalar üretiyoruz.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/games"
              className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-indigo-600/30 hover:bg-indigo-500 hover:scale-105 transition-all"
            >
              <Gamepad2 className="h-4 w-4" />
              <span>Oyunlarımızı Keşfedin</span>
            </Link>

            <Link
              href="/apps"
              className="flex items-center gap-2 rounded-xl bg-cyan-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-cyan-600/30 hover:bg-cyan-500 hover:scale-105 transition-all"
            >
              <Smartphone className="h-4 w-4" />
              <span>Uygulamaları İnceleyin</span>
            </Link>

            <Link
              href="/products"
              className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all backdrop-blur-md"
            >
              <span>Tüm Katalog</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>
          </div>
        </div>

        {/* Dual Spotlight Cards (Featured Game & Featured App) */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Game */}
          {featuredGame && (
            <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-br from-[#0e1422] to-[#080b12] shadow-2xl flex flex-col justify-between">
              <div className="p-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400">
                  <Gamepad2 className="h-4 w-4" />
                  <span>Öne Çıkan Oyun</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {featuredGame.title}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {featuredGame.shortDescription}
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <Link
                    href={`/products/${featuredGame.slug}`}
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-bold text-white hover:bg-indigo-500 transition-colors"
                  >
                    Oyun Sayfasını Gör
                  </Link>
                  {featuredGame.links.steam && (
                    <a
                      href={featuredGame.links.steam}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      Steam'de İstek Listesine Ekle
                    </a>
                  )}
                </div>
              </div>

              <div className="relative aspect-video w-full overflow-hidden border-t border-slate-800/80">
                <img
                  src={featuredGame.bannerImage}
                  alt={featuredGame.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Featured App */}
          {featuredApp && (
            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-[#0a151d] to-[#070d12] shadow-2xl flex flex-col justify-between">
              <div className="p-8 space-y-4">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400">
                  <Smartphone className="h-4 w-4" />
                  <span>Öne Çıkan Dijital Ürün / Uygulama</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {featuredApp.title}
                </h2>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {featuredApp.shortDescription}
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  <Link
                    href={`/products/${featuredApp.slug}`}
                    className="rounded-lg bg-cyan-600 px-4 py-2 text-xs font-bold text-white hover:bg-cyan-500 transition-colors"
                  >
                    Uygulamayı İncele
                  </Link>
                  {featuredApp.links.appStore && (
                    <a
                      href={featuredApp.links.appStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      App Store
                    </a>
                  )}
                  {featuredApp.links.playStore && (
                    <a
                      href={featuredApp.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      Google Play
                    </a>
                  )}
                </div>
              </div>

              <div className="relative aspect-video w-full overflow-hidden border-t border-slate-800/80">
                <img
                  src={featuredApp.bannerImage}
                  alt={featuredApp.title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
