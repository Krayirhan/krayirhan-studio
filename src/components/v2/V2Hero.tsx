import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { IconInstagram, IconX, IconYouTube } from "./V2Icons";

export function V2Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      {/* Background Ambience: Guaranteed Visible Silhouettes */}
      {/* Left side Seljuk Knot Silhouette */}
      <div className="pointer-events-none absolute -left-16 top-12 z-0 h-[520px] w-[520px] select-none opacity-15">
        <svg
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full stroke-white/80"
          strokeWidth="2.5"
        >
          <path d="M100 10L190 100L100 190L10 100Z" />
          <path d="M100 30L170 100L100 170L30 100Z" strokeDasharray="6 6" />
          <circle cx="100" cy="100" r="45" />
          <path d="M68 68L132 132M132 68L68 132" />
        </svg>
      </div>

      {/* Right side Stag Silhouette */}
      <div className="pointer-events-none absolute -right-12 top-6 z-0 h-[620px] w-[620px] select-none opacity-15">
        <Image
          src="/brand/krayirhan-stag-gold.png"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Ambient Cool Silver/White Glow behind phones */}
      <div className="pointer-events-none absolute right-[5%] top-1/2 z-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-radial from-white/10 via-white/5 to-transparent blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Column: Typography & Actions */}
        <div className="space-y-6 lg:col-span-6 lg:pr-4">
          <p className="text-xs font-semibold tracking-[0.24em] text-neutral-400 uppercase">
            Bağımsız Mobil Stüdyo
          </p>

          {/* Headline */}
          <h1 className="v2-serif text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.08] text-[#fbf8f2] tracking-tight">
            Kadim köklerden,
            <br />
            <span className="text-[#f5f0e6]">modern deneyimlere.</span>
          </h1>

          {/* Description */}
          <p className="max-w-xl text-sm sm:text-base leading-relaxed text-[#b8b3a8]">
            Krayirhan Studio; oyunlar ve günlük hayatı kolaylaştıran uygulamalar
            geliştirir. Kullanışlı, estetik ve kalıcı deneyimler üretmeye inanıyoruz.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projeler"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3.5 text-xs font-bold tracking-wide text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              <span>Tüm Ürünleri Keşfet</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/v2/about"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.05] px-5 py-3.5 text-xs font-semibold tracking-wide text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
            >
              <span>Stüdyomuz Hakkında</span>
              <ArrowRight className="h-4 w-4 text-white" />
            </Link>
          </div>

          {/* Social Follow Links */}
          <div className="flex items-center gap-4 pt-4 text-xs text-[#8f8a80]">
            <span className="font-medium tracking-wide">Bizi takip edin</span>
            <div className="flex items-center gap-2.5">
              <a
                href="https://x.com/krayirhan"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="rounded-full p-1.5 transition-colors hover:text-white"
              >
                <IconX className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com/krayirhan"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="rounded-full p-1.5 transition-colors hover:text-white"
              >
                <IconInstagram className="h-4 w-4" />
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

        {/* Right Column: 3 Layered Angled Smartphones (Balanced Scale) */}
        <div className="flex items-center justify-center pt-4 lg:col-span-6 lg:pt-0">
          <div className="relative flex items-center justify-center w-full max-w-[480px] select-none">
            {/* Left Phone: LingoRise (Tilted, Back Layer) */}
            <div className="absolute -left-2 sm:-left-3 top-5 z-10 w-[160px] sm:w-[195px] -rotate-6 transform transition-transform duration-500 hover:-rotate-3 hover:scale-105">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem] border-2 border-[#222731] bg-[#0c0e12] p-1 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.9)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-[#0c0e12]">
                  <Image
                    src="/apps/lingorise/home-garden.png"
                    alt="LingoRise Uygulama Ekranı"
                    fill
                    sizes="(max-width: 768px) 160px, 195px"
                    className="object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08]" />
                </div>
              </div>
            </div>

            {/* Center Phone: Blok Dünyası (Front Center Layer) */}
            <div className="relative z-20 w-[185px] sm:w-[225px] transform transition-transform duration-500 hover:scale-105 shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.4rem] border-2 border-[#343b49] bg-[#090b0e] p-1.5">
                <div className="relative h-full w-full overflow-hidden rounded-[1.9rem] bg-black">
                  <Image
                    src="/games/blok-dunyasi/cover.jpg"
                    alt="Blok Dünyası Oyun Ekranı"
                    fill
                    priority
                    sizes="(max-width: 768px) 185px, 225px"
                    className="object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.1]" />
                </div>
              </div>
            </div>

            {/* Right Phone: Benim Notlarım (Tilted, Back Layer) */}
            <div className="absolute -right-2 sm:-right-3 top-7 z-10 w-[160px] sm:w-[195px] rotate-6 transform transition-transform duration-500 hover:rotate-3 hover:scale-105">
              <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem] border-2 border-[#222731] bg-[#0c0e12] p-1 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.9)]">
                <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] bg-[#0c0e12]">
                  <Image
                    src="/apps/benim-notlarim/cover.jpg"
                    alt="Benim Notlarım Uygulama Ekranı"
                    fill
                    sizes="(max-width: 768px) 160px, 195px"
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
