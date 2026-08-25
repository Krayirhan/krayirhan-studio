import Link from "next/link";
import { Gamepad2, Sparkles, Flame, ShieldAlert, ArrowRight } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";
import { GAMES } from "@/data/games";

export function HeroSection() {
  const featuredGame = GAMES.find((g) => g.featured) || GAMES[0];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 hero-glow">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-md mb-6 shadow-inner">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
            <span>Krayirhan Studio · Bağımsız Oyun Geliştirme</span>
          </div>

          {/* Main Title */}
          <h1 className="max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Sınırları Zorlayan <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-300 bg-clip-text text-transparent">
              Oyun Evrenleri
            </span>{" "}
            İnşa Ediyoruz.
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
            {STUDIO_INFO.tagline} Bağımsız ruhumuzla tasarladığımız atmosferik dünyalar, akıcı dövüş dinamikleri ve derin hikayelerle tanışın.
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
              href="/press"
              className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all backdrop-blur-md"
            >
              <span>Press Kit & Yayıncı İletişimi</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </Link>
          </div>
        </div>

        {/* Featured Game Spotlight Banner */}
        {featuredGame && (
          <div className="mt-16 overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-[#0e1422] to-[#080b12] shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
              <div className="p-8 lg:p-12 lg:col-span-6 flex flex-col justify-center">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rose-400 mb-3">
                  <Flame className="h-4 w-4" />
                  <span>Öne Çıkan Başlık</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {featuredGame.title}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                  {featuredGame.shortDescription}
                </p>
                <div className="mt-6 flex flex-wrap gap-3 items-center">
                  <Link
                    href={`/games/${featuredGame.slug}`}
                    className="rounded-lg bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition-colors"
                  >
                    Oyun Sayfasını Gör
                  </Link>
                  {featuredGame.steamUrl && (
                    <a
                      href={featuredGame.steamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-indigo-400 transition-colors"
                    >
                      Steam'de İstek Listesine Ekle
                    </a>
                  )}
                </div>
              </div>
              <div className="relative aspect-video lg:aspect-auto lg:h-full lg:col-span-6 overflow-hidden">
                <img
                  src={featuredGame.bannerImage}
                  alt={featuredGame.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0e1422] via-transparent to-transparent" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
