import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowRight, ExternalLink, Gamepad2, ShieldCheck } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";

export function HeroSection() {
  return (
    <section className="texture-fabric relative overflow-hidden border-b border-white/10 pb-12 pt-10 md:pb-16 md:pt-14">
      {/* Fruit-accent glow — shaped after Blok Dünyası's citrus / grape / cherry palette */}
      <div className="fruit-blob fruit-blob-citrus w-[420px] h-[420px] -top-24 right-[8%] animate-pulse-subtle" />
      <div className="fruit-blob fruit-blob-grape w-[280px] h-[280px] top-1/3 left-[6%]" />
      <div className="fruit-blob fruit-blob-cherry w-[200px] h-[200px] bottom-0 right-1/3" />

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

        {/* Right Column: A Board in Motion — one anchor phone surrounded by drifting puzzle tiles */}
        <div className="relative mx-auto flex w-full max-w-lg lg:max-w-none items-center justify-center py-4 lg:justify-end lg:pr-4">

          {/* Drifting tile chips — the board's own blocks, not a generic glow */}
          <div className="tile-chip tile-citrus w-14 h-14 sm:w-16 sm:h-16 top-2 left-2 sm:left-8" style={{ "--tile-rot": "-10deg", animationDelay: "0s" } as CSSProperties} />
          <div className="tile-chip tile-grape w-9 h-9 sm:w-11 sm:h-11 top-[18%] right-[22%] sm:right-[28%]" style={{ "--tile-rot": "14deg", animationDelay: "1.1s" } as CSSProperties} />
          <div className="tile-chip tile-lime w-10 h-10 sm:w-12 sm:h-12 bottom-[8%] left-0 sm:left-4" style={{ "--tile-rot": "8deg", animationDelay: "2.2s" } as CSSProperties} />
          <div className="tile-chip tile-cherry w-7 h-7 sm:w-9 sm:h-9 bottom-[26%] right-2 sm:right-6" style={{ "--tile-rot": "-16deg", animationDelay: "0.6s" } as CSSProperties} />
          <div className="tile-chip tile-sky w-8 h-8 sm:w-10 sm:h-10 top-[42%] left-[6%]" style={{ "--tile-rot": "-6deg", animationDelay: "1.7s" } as CSSProperties} />

          {/* Secondary phone: gameplay screen, tucked low and behind */}
          <div className="absolute bottom-0 left-[8%] sm:left-[14%] w-[32vw] max-w-[150px] sm:max-w-[160px] rotate-[10deg] rounded-[2rem] border border-white/20 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 p-2 shadow-2xl shadow-black/70 z-0">
            <div
              style={{ aspectRatio: "472 / 1024" }}
              className="relative w-full overflow-hidden rounded-[1.6rem] bg-black"
            >
              <img
                src="/games/blok-dunyasi/gameplay-1.jpg"
                alt="Blok Dünyası blok bulmaca oyun ekranı"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-black/25 pointer-events-none" />
            </div>
          </div>

          {/* Anchor phone: main menu, large and bled toward the edge */}
          <div className="relative z-10 w-[48vw] max-w-[210px] sm:max-w-[230px] lg:max-w-[250px] -rotate-3 rounded-[2.6rem] sm:rounded-[3rem] border border-white/25 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 p-2.5 sm:p-3 shadow-2xl shadow-black/80 transition-transform duration-500 hover:-rotate-1">
            <div
              style={{ aspectRatio: "472 / 1024" }}
              className="relative w-full overflow-hidden rounded-[2.1rem] sm:rounded-[2.5rem] bg-black"
            >
              <img
                src="/games/blok-dunyasi/cover.jpg"
                alt="Blok Dünyası ana menü ekranı"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
