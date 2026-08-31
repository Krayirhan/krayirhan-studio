import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { IconInstagram, IconTikTok, IconYouTube } from "./V2Icons";

export function V2Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
      {/* Soft Ambient Cool/Silver Glow behind phones */}
      <div className="pointer-events-none absolute right-[10%] top-1/2 z-0 h-[330px] w-[330px] -translate-y-1/2 rounded-full bg-sky-300/[0.035] blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Monolithic Studio Crest + Pure Typography */}
        <div className="z-10 space-y-7 lg:col-span-6 lg:pr-4">
          <div className="flex items-center gap-4">
            <div className="relative h-14 w-12 sm:h-16 sm:w-14 shrink-0 select-none transition-transform hover:scale-105 duration-300">
              <Image
                src="/brand/krayirhan-stag-gold.png"
                alt="Krayirhan Studio Mührü"
                fill
                priority
                className="object-contain drop-shadow-[0_4px_16px_rgba(255,255,255,0.2)]"
              />
            </div>
            <div className="h-7 w-[1px] bg-white/15" />
            <p className="text-xs font-semibold tracking-[0.24em] text-neutral-400 uppercase">
              Bağımsız Oyun & Uygulama Stüdyosu
            </p>
          </div>

          <h1 className="v2-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-[#f5f5f2] tracking-tight">
            Fikirden ürüne.
            <br />
            <span>Oyundan günlük hayata.</span>
          </h1>

          {/* 3. Description */}
          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-[#a5a8ae]">
            Oyunlar, mobil uygulamalar ve dijital deneyimler geliştiriyoruz. Her ürün kendi fikri, karakteri ve amacıyla tasarlanıyor.
          </p>

          {/* 4. Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <a
              href="#projeler"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3.5 text-xs font-bold tracking-wide text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              <span>Ürünleri Keşfet</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="https://play.google.com/store/apps/developer?id=Krayirhan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.05] px-5 py-3.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
            >
              <span>Google Play</span>
              <ExternalLink className="h-4 w-4 text-white" />
            </a>
          </div>

          {/* 5. Social Follow Links */}
          <div className="flex items-center gap-4 pt-2 text-xs text-[#8f8a80]">
            <span className="font-medium tracking-wide">Bizi takip edin</span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://www.instagram.com/krayirhanstudio"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full p-1.5 transition-colors hover:text-white"
              >
                <IconInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://www.tiktok.com/@krayirhan.studios"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="rounded-full p-1.5 transition-colors hover:text-white"
              >
                <IconTikTok className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com/@krayirhan"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="rounded-full p-1.5 transition-colors hover:text-white"
              >
                <IconYouTube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Layered Angled Smartphones (Clean, Uncluttered) */}
        <div className="flex items-center justify-center pt-4 lg:col-span-6 lg:pt-0">
          <div className="relative flex items-center justify-center w-full max-w-[450px] select-none">
            {/* Left Phone: LingoRise (Tilted, Back Layer) */}
            <div className="absolute left-1 sm:left-2 top-5 z-10 w-[145px] sm:w-[175px] -rotate-6 transform transition-transform duration-500 hover:-rotate-3 hover:scale-105">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem] border-2 border-[#222731] bg-[#0c0e12] p-1 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.9)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-[#0c0e12]">
                  <Image
                    src="/play-store/lingorise/screen-1.webp"
                    alt="LingoRise Uygulama Ekranı"
                    fill
                    sizes="(max-width: 768px) 155px, 190px"
                    className="object-contain"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08]" />
                </div>
              </div>
            </div>

            {/* Center Phone: Blok Dünyası (Front Center Layer) */}
            <div className="relative z-20 w-[180px] sm:w-[215px] transform transition-transform duration-500 hover:scale-105 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.4rem] border-2 border-[#343b49] bg-[#090b0e] p-1.5">
                <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-black">
                  <Image
                    src="/play-store/blok-dunyasi/screen-1.webp"
                    alt="Blok Dünyası Oyun Ekranı"
                    fill
                    priority
                    sizes="(max-width: 768px) 180px, 220px"
                    className="object-contain"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.1]" />
                </div>
              </div>
            </div>

            {/* Right Phone: Benim Notlarım (Tilted, Back Layer) */}
            <div className="absolute right-1 sm:right-2 top-7 z-10 w-[145px] sm:w-[175px] rotate-6 transform transition-transform duration-500 hover:rotate-3 hover:scale-105">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem] border-2 border-[#222731] bg-[#0c0e12] p-1 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.9)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-[#0c0e12]">
                  <Image
                    src="/apps/benim-notlarim/cover.jpg"
                    alt="Benim Notlarım Uygulama Ekranı"
                    fill
                    sizes="(max-width: 768px) 155px, 190px"
                    className="object-contain"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
