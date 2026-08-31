import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconInstagram, IconX, IconYouTube, SeljukOrnament, StagEmblem } from "./V2Icons";

export function V2Hero() {
  return (
    <section className="relative isolate min-h-[720px] overflow-hidden px-5 pb-20 pt-8 sm:px-8 lg:min-h-[820px] lg:px-12 lg:pb-28 lg:pt-12">
      {/* Background Ambience: Subtle Dark Watermarks */}
      {/* Left side Seljuk Knot Watermark */}
      <div className="pointer-events-none absolute -left-20 top-24 -z-10 h-[500px] w-[500px] select-none opacity-[0.04] blur-[0.5px]">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full stroke-[#d4a359]" strokeWidth="2">
          <path d="M100 10L190 100L100 190L10 100Z" />
          <path d="M100 30L170 100L100 170L30 100Z" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="45" />
          <path d="M68 68L132 132M132 68L68 132" />
        </svg>
      </div>

      {/* Right side Stag Watermark */}
      <div className="pointer-events-none absolute -right-12 top-10 -z-10 h-[620px] w-[620px] select-none opacity-[0.05]">
        <StagEmblem className="h-full w-full" />
      </div>

      {/* Ambient Warm Golden Glow behind phones */}
      <div className="pointer-events-none absolute right-[5%] top-1/2 -z-10 h-[550px] w-[550px] -translate-y-1/2 rounded-full bg-radial from-[#d4a359]/16 via-[#9e6f28]/8 to-transparent blur-[140px]" />

      <div className="mx-auto grid max-w-[1380px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Left Column: Typography & Actions */}
        <div className="z-10 space-y-7 lg:col-span-6 lg:pr-4">
          {/* Eyebrow */}
          <div>
            <SeljukOrnament title="BAĞIMSIZ MOBİL STÜDYO" />
          </div>

          {/* Headline */}
          <h1 className="v2-serif text-5xl font-normal leading-[1.04] text-[#fbf8f2] sm:text-6xl lg:text-7xl">
            Kadim köklerden,
            <br />
            <span className="text-[#f5f0e6]">modern deneyimlere.</span>
          </h1>

          {/* Description */}
          <p className="max-w-xl text-base leading-8 text-[#b8b3a8] sm:text-lg">
            Krayirhan Studio; oyunlar ve günlük hayatı kolaylaştıran uygulamalar
            geliştirir. Kullanışlı, estetik ve kalıcı deneyimler üretmeye inanıyoruz.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projeler"
              className="inline-flex items-center gap-3 rounded-lg bg-gradient-to-r from-[#dca757] via-[#eec578] to-[#cca04f] px-7 py-4 text-xs font-bold tracking-wide text-[#140e06] shadow-[0_8px_24px_rgba(212,163,89,0.3)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(212,163,89,0.4)]"
            >
              <span>Tüm Ürünleri Keşfet</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-lg border border-[#d4a359]/35 bg-[#0f1217]/50 px-6 py-4 text-xs font-semibold tracking-wide text-[#f2ede4] backdrop-blur-sm transition hover:border-[#f1c479] hover:bg-[#d4a359]/10"
            >
              <span>Stüdyomuz Hakkında</span>
              <ArrowRight className="h-4 w-4 text-[#d4a359]" />
            </Link>
          </div>

          {/* Social Follow Links */}
          <div className="flex items-center gap-4 pt-6 text-xs text-[#8f8a80]">
            <span className="font-medium tracking-wide">Bizi takip edin</span>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com/krayirhan"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="rounded-full p-1.5 transition-colors hover:text-[#eec578]"
              >
                <IconX className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/krayirhan"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full p-1.5 transition-colors hover:text-[#eec578]"
              >
                <IconInstagram className="h-4 w-4" />
              </a>
              <a
                href="https://youtube.com/@krayirhan"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="rounded-full p-1.5 transition-colors hover:text-[#eec578]"
              >
                <IconYouTube className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: 3 Layered Angled Smartphones */}
        <div className="z-10 flex items-center justify-center pt-8 lg:col-span-6 lg:pt-0">
          <div className="relative flex items-center justify-center w-full max-w-[560px] select-none">
            {/* Left Phone: LingoRise (Tilted, Back Layer) */}
            <div className="absolute -left-2 sm:-left-4 top-6 z-10 w-[180px] sm:w-[220px] -rotate-6 transform transition-transform duration-500 hover:-rotate-3 hover:scale-105">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.4rem] border-[3px] border-[#222731] bg-[#0c0e12] p-1.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]">
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[#0c0e12]">
                  <Image
                    src="/apps/lingorise/home-garden.png"
                    alt="LingoRise Uygulama Ekranı"
                    fill
                    sizes="(max-width: 768px) 180px, 220px"
                    className="object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08]" />
                </div>
              </div>
            </div>

            {/* Center Phone: Blok Dünyası (Front Center Layer) */}
            <div className="relative z-20 w-[210px] sm:w-[255px] transform transition-transform duration-500 hover:scale-105 shadow-[0_30px_70px_rgba(0,0,0,0.95)]">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.6rem] border-[3px] border-[#343b49] bg-[#090b0e] p-2">
                <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-black">
                  <Image
                    src="/games/blok-dunyasi/cover.jpg"
                    alt="Blok Dünyası Oyun Ekranı"
                    fill
                    priority
                    sizes="(max-width: 768px) 210px, 255px"
                    className="object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.1]" />
                </div>
              </div>
            </div>

            {/* Right Phone: Benim Notlarım (Tilted, Back Layer) */}
            <div className="absolute -right-2 sm:-right-4 top-8 z-10 w-[180px] sm:w-[220px] rotate-6 transform transition-transform duration-500 hover:rotate-3 hover:scale-105">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.4rem] border-[3px] border-[#222731] bg-[#0c0e12] p-1.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]">
                <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-[#0c0e12]">
                  <Image
                    src="/apps/benim-notlarim/cover.jpg"
                    alt="Benim Notlarım Uygulama Ekranı"
                    fill
                    sizes="(max-width: 768px) 180px, 220px"
                    className="object-cover object-top"
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
