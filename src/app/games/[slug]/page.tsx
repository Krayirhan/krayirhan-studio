import { GAMES } from "@/data/games";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Monitor, Cpu, Layers, ExternalLink, Sparkles } from "lucide-react";
import type { Metadata } from "next";

interface GamePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return GAMES.map((game) => ({
    slug: game.slug,
  }));
}

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);

  if (!game) {
    return { title: "Oyun Bulunamadı | Krayirhan Studio" };
  }

  return {
    title: `${game.title} | Krayirhan Studio`,
    description: game.shortDescription,
  };
}

export default async function SingleGamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = GAMES.find((g) => g.slug === slug);

  if (!game) {
    notFound();
  }

  return (
    <div className="pb-24">
      {/* Back button & Hero Banner */}
      <div className="relative w-full h-[50vh] min-h-[380px] bg-slate-950 overflow-hidden">
        <Image
          src={game.bannerImage}
          alt={game.title}
          fill
          priority
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/60 to-black/50" />

        <div className="relative mx-auto max-w-7xl h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-between py-8">
          <Link
            href="/games"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-700/50 w-fit transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Tüm Oyunlara Dön</span>
          </Link>

          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-indigo-600/80 px-2.5 py-1 text-xs font-semibold text-white">
                {game.status}
              </span>
              <span className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300">
                {game.engine}
              </span>
              {game.releaseDate && (
                <span className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300">
                  Çıkış: {game.releaseDate}
                </span>
              )}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              {game.title}
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl">{game.tagline}</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Details, Features, Gallery */}
          <div className="lg:col-span-8 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Oyun Hakkında</h2>
              <p className="text-slate-300 text-base leading-relaxed whitespace-pre-line">
                {game.fullDescription}
              </p>
            </div>

            {/* Key Features */}
            {game.features && game.features.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Öne Çıkan Özellikler</h2>
                <div className="grid grid-cols-1 gap-3">
                  {game.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 rounded-xl border border-slate-800 bg-[#0d121d] p-4 text-slate-300"
                    >
                      <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Screenshots Gallery */}
            {game.screenshots && game.screenshots.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-white">Ekran Görüntüleri</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {game.screenshots.map((screen, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-900 group"
                    >
                      <Image
                        src={screen}
                        alt={`${game.title} Ekran Görüntüsü ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* System Requirements */}
            {game.systemRequirements && (
              <div className="space-y-4 border-t border-slate-800 pt-8">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                  <Monitor className="h-6 w-6 text-indigo-400" />
                  <span>Sistem Gereksinimleri (PC)</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {game.systemRequirements.minimum && (
                    <div className="rounded-xl border border-slate-800 bg-[#0d121d] p-6 space-y-2 text-xs sm:text-sm text-slate-300">
                      <h3 className="font-bold text-slate-100 uppercase tracking-wider mb-3 text-indigo-400">
                        Minimum
                      </h3>
                      {game.systemRequirements.minimum.os && (
                        <p><strong className="text-slate-400">İşletim Sistemi:</strong> {game.systemRequirements.minimum.os}</p>
                      )}
                      {game.systemRequirements.minimum.processor && (
                        <p><strong className="text-slate-400">İşlemci:</strong> {game.systemRequirements.minimum.processor}</p>
                      )}
                      {game.systemRequirements.minimum.memory && (
                        <p><strong className="text-slate-400">Bellek:</strong> {game.systemRequirements.minimum.memory}</p>
                      )}
                      {game.systemRequirements.minimum.graphics && (
                        <p><strong className="text-slate-400">Ekran Kartı:</strong> {game.systemRequirements.minimum.graphics}</p>
                      )}
                      {game.systemRequirements.minimum.storage && (
                        <p><strong className="text-slate-400">Depolama:</strong> {game.systemRequirements.minimum.storage}</p>
                      )}
                    </div>
                  )}

                  {game.systemRequirements.recommended && (
                    <div className="rounded-xl border border-slate-800 bg-[#0d121d] p-6 space-y-2 text-xs sm:text-sm text-slate-300">
                      <h3 className="font-bold text-slate-100 uppercase tracking-wider mb-3 text-cyan-400">
                        Önerilen
                      </h3>
                      {game.systemRequirements.recommended.os && (
                        <p><strong className="text-slate-400">İşletim Sistemi:</strong> {game.systemRequirements.recommended.os}</p>
                      )}
                      {game.systemRequirements.recommended.processor && (
                        <p><strong className="text-slate-400">İşlemci:</strong> {game.systemRequirements.recommended.processor}</p>
                      )}
                      {game.systemRequirements.recommended.memory && (
                        <p><strong className="text-slate-400">Bellek:</strong> {game.systemRequirements.recommended.memory}</p>
                      )}
                      {game.systemRequirements.recommended.graphics && (
                        <p><strong className="text-slate-400">Ekran Kartı:</strong> {game.systemRequirements.recommended.graphics}</p>
                      )}
                      {game.systemRequirements.recommended.storage && (
                        <p><strong className="text-slate-400">Depolama:</strong> {game.systemRequirements.recommended.storage}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Platform Action Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-[#0d121d] p-6 space-y-6 sticky top-28 shadow-xl">
              <h3 className="text-lg font-bold text-white">Platformlar & Mağazalar</h3>

              <div className="space-y-3">
                {game.steamUrl && (
                  <a
                    href={game.steamUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3.5 text-sm font-bold text-white hover:bg-indigo-500 shadow-lg shadow-indigo-600/30 transition-all"
                  >
                    <span>Steam'de İstek Listesine Ekle</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}

                {game.epicUrl && (
                  <a
                    href={game.epicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-200 hover:text-white hover:border-slate-500 transition-all"
                  >
                    <span>Epic Games Store</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}

                {game.itchUrl && (
                  <a
                    href={game.itchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-rose-500/40 bg-rose-950/20 px-4 py-3 text-sm font-semibold text-rose-300 hover:bg-rose-900/30 transition-all"
                  >
                    <span>itch.io Sayfası</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>

              {/* Quick Info Specs */}
              <div className="border-t border-slate-800 pt-6 space-y-3 text-xs sm:text-sm text-slate-400">
                <div className="flex justify-between">
                  <span>Geliştirici:</span>
                  <span className="font-semibold text-white">Krayirhan Studio</span>
                </div>
                <div className="flex justify-between">
                  <span>Oyun Motoru:</span>
                  <span className="font-semibold text-white">{game.engine}</span>
                </div>
                <div className="flex justify-between">
                  <span>Platformlar:</span>
                  <span className="font-semibold text-white">{game.platforms.join(", ")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Türler:</span>
                  <span className="font-semibold text-white">{game.genre.join(", ")}</span>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-4">
                <Link
                  href="/press"
                  className="flex items-center justify-center gap-1.5 text-xs text-indigo-400 hover:underline"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Bu oyun için Press Kit materyallerini indir</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
