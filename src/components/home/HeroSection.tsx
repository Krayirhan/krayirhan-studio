import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink, Gamepad2, ShieldCheck } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 pb-20 pt-16 md:pb-28 md:pt-24">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[450px] bg-gradient-to-tr from-orange-500/[0.08] via-emerald-500/[0.08] to-blue-500/[0.08] blur-[140px] rounded-full pointer-events-none animate-pulse-subtle" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        
        {/* Left Column: Studio Headline & Actions */}
        <div className="max-w-3xl lg:pt-4">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-zinc-200 backdrop-blur-md shadow-sm transition-colors hover:border-white/30">
            <div className="relative h-5 w-5 overflow-hidden rounded-full border border-white/20 bg-white p-0.5 shadow-sm">
              <Image src="/brand/logo.png" alt="Krayirhan Studio logosu" fill sizes="20px" className="rounded-full object-cover" />
            </div>
            <span>{STUDIO_INFO.name} · Ankara, Türkiye</span>
          </div>

          <div className="max-w-3xl space-y-6 lg:text-left">
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-7xl font-display">
              Kısa molalara <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 via-amber-400 to-orange-500">strateji</span>,<br />
              her güne <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-500">düzen.</span>
            </h1>

            <p className="max-w-2xl text-lg font-normal leading-relaxed text-zinc-300 sm:text-xl">
              Oynaması keyifli oyunlar ve gerçekten işe yarayan mobil araçlar geliştiriyoruz. İlk durak: her yerde oynayabileceğiniz Blok Dünyası.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-zinc-950 shadow-2xl shadow-white/10 transition-all hover:scale-105 hover:bg-zinc-200"
            >
              <Gamepad2 className="h-4 w-4" />
              <span>Blok Dünyası&apos;nı İndir</span>
              <ExternalLink className="h-4 w-4" />
            </a>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-zinc-200 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <span>Tüm Ürünleri İncele</span>
              <ArrowRight className="h-4 w-4 text-zinc-400" />
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-zinc-400">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-emerald-300" /> Google Play&apos;de yayında</span>
            <span className="inline-flex items-center gap-1.5"><Gamepad2 className="h-3.5 w-3.5 text-orange-300" /> Herkes için</span>
          </div>
        </div>

        {/* Right Column: Floating 3D Phones with Badge */}
        <div className="relative mx-auto flex w-full max-w-lg lg:max-w-none items-center justify-center py-4 lg:justify-end">
          <div className="absolute right-1/2 top-1/2 h-80 w-80 -translate-y-1/2 translate-x-1/2 rounded-full bg-orange-500/20 blur-[130px] pointer-events-none" />
          <div className="relative flex items-center gap-4 sm:gap-7">
            {/* Phone 1: Main Menu */}
            <div className="relative w-[44vw] max-w-[220px] sm:max-w-[250px] lg:max-w-[275px] -rotate-6 rounded-[2.4rem] sm:rounded-[2.8rem] border border-white/25 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 p-2.5 sm:p-3 shadow-2xl shadow-black/80 transition-all duration-500 hover:-rotate-2 hover:scale-105">
              <div
                style={{ aspectRatio: "472 / 1024" }}
                className="relative w-full overflow-hidden rounded-[1.9rem] sm:rounded-[2.2rem] bg-black"
              >
                <Image
                  src="/games/blok-dunyasi/cover.jpg"
                  alt="Blok Dünyası ana menü ekranı"
                  fill
                  priority
                  sizes="(max-width: 640px) 45vw, 275px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />
              </div>
            </div>

            {/* Phone 2: Gameplay */}
            <div className="relative mt-10 sm:mt-14 w-[44vw] max-w-[220px] sm:max-w-[250px] lg:max-w-[275px] rotate-6 rounded-[2.4rem] sm:rounded-[2.8rem] border border-white/25 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 p-2.5 sm:p-3 shadow-2xl shadow-black/80 transition-all duration-500 hover:rotate-2 hover:scale-105">
              <div
                style={{ aspectRatio: "472 / 1024" }}
                className="relative w-full overflow-hidden rounded-[1.9rem] sm:rounded-[2.2rem] bg-black"
              >
                <Image
                  src="/games/blok-dunyasi/gameplay-1.jpg"
                  alt="Blok Dünyası blok bulmaca oyun ekranı"
                  fill
                  priority
                  sizes="(max-width: 640px) 45vw, 275px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
