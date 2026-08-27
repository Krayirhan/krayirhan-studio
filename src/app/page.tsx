import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProductSlider } from "@/components/home/FeaturedProductSlider";
import { PRODUCTS } from "@/data/games";
import { ArrowRight, Download, Gamepad2, Smartphone, Shield, Palette } from "lucide-react";

export default function HomePage() {
  // Map distinct 2 screens for each product
  const getScreens = (id: string) => {
    switch (id) {
      case "blok-dunyasi":
        return {
          primary: "/games/blok-dunyasi/cover.jpg",
          secondary: "/games/blok-dunyasi/gameplay-1.jpg",
        };
      case "lingorise":
        return {
          primary: "/apps/lingorise/home-garden.png",
          secondary: "/apps/lingorise/practice-session.png",
        };
      case "benim-notlarim":
        return {
          primary: "/apps/benim-notlarim/cover.jpg",
          secondary: "/apps/benim-notlarim/editor.jpg",
        };
      default:
        return {
          primary: "/games/blok-dunyasi/cover.jpg",
          secondary: "/games/blok-dunyasi/gameplay-1.jpg",
        };
    }
  };

  const renderProductCard = (product: (typeof PRODUCTS)[number], featured: boolean) => {
    const isBlokDunyasi = product.id === "blok-dunyasi";
    const isLingorise = product.id === "lingorise";
    const screens = getScreens(product.id);

    const showcaseHeight = featured ? "h-80 sm:h-[26rem]" : "h-52 sm:h-60";
    const phoneSize = featured ? "w-[145px] sm:w-[165px]" : "w-[92px] sm:w-[105px]";
    const contentPad = featured ? "p-6 sm:p-8" : "p-5 sm:p-6";
    const titleSize = featured ? "text-3xl" : "text-xl";

    return (
      <div
        key={product.id}
        className="group relative flex flex-col justify-between rounded-[2.2rem] border border-white/10 bg-[var(--card)] overflow-hidden hover:border-white/25 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-black h-full"
      >
        {/* Top Visual Showcase: Pixel-Perfect Dual-Phone Simulator */}
        <Link
          href={`/products/${product.slug}`}
          className={`relative ${showcaseHeight} w-full overflow-hidden bg-gradient-to-b from-[#191e1b] to-[#0d100e] flex items-center justify-center p-4 group-hover:from-[#212722] transition-colors duration-500 border-b border-white/5`}
        >
          {/* Per-product texture, not a flat colored circle */}
          {isBlokDunyasi ? (
            <div className="absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none">
              <div className="fruit-blob fruit-blob-citrus w-44 h-44 -top-6 left-1/4" />
              <div className="fruit-blob fruit-blob-grape w-32 h-32 bottom-0 right-1/4" />
              <div className="fruit-blob fruit-blob-cherry w-24 h-24 top-1/3 right-6" />
            </div>
          ) : isLingorise ? (
            <div
              className="texture-vine absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ maskImage: "radial-gradient(circle, black 35%, transparent 70%)", WebkitMaskImage: "radial-gradient(circle, black 35%, transparent 70%)" }}
            />
          ) : (
            <div
              className="texture-notebook absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{ maskImage: "radial-gradient(ellipse, black 45%, transparent 80%)", WebkitMaskImage: "radial-gradient(ellipse, black 45%, transparent 80%)" }}
            />
          )}

          {/* Dual Phone Showcase */}
          <div className="relative flex items-center justify-center h-full py-2">

            {/* Phone 1: Main Menu / Garden */}
            <div className={`relative ${phoneSize} aspect-[9/19.5] rounded-[1.8rem] p-1.5 bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-950 border border-white/25 shadow-2xl shadow-black -rotate-6 group-hover:-rotate-2 group-hover:scale-105 transition-all duration-500 z-10`}>
              <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-black">
                <Image
                  src={screens.primary}
                  alt={`${product.title} Ekran 1`}
                  fill
                  sizes="(max-width: 1024px) 45vw, 165px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
              </div>
            </div>

            {/* Phone 2: Gameplay / Editor / Practice */}
            <div className={`relative ${phoneSize} aspect-[9/19.5] rounded-[1.8rem] p-1.5 bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-950 border border-white/25 shadow-2xl shadow-black rotate-6 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500 mt-6 -ml-5 sm:-ml-6 z-20`}>
              <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-black">
                <Image
                  src={screens.secondary}
                  alt={`${product.title} Ekran 2`}
                  fill
                  sizes="(max-width: 1024px) 45vw, 165px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
              </div>
            </div>

          </div>
        </Link>

        {/* Content Section */}
        <div className={`${contentPad} flex flex-col justify-between flex-1 space-y-4`}>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span
                className="eyebrow-tag gap-1.5 py-1 pr-2.5 text-xs font-bold text-zinc-300"
                style={{ "--tag-accent": product.type === "game" ? "#f8963a" : "var(--vine)" } as CSSProperties}
              >
                {product.type === "game" ? (
                  <Gamepad2 className="h-3 w-3 text-orange-400" />
                ) : (
                  <Smartphone className="h-3 w-3 text-[var(--vine)]" />
                )}
                <span>{product.type === "game" ? "Bulmaca Oyunu" : "Mobil Uygulama"}</span>
              </span>

              <span className="text-xs font-semibold text-zinc-300">
                {product.status === "Released" ? "Google Play" : product.status}
              </span>
            </div>

            <h3 className={`${titleSize} font-bold text-white group-hover:text-zinc-100 transition-colors font-display`}>
              <Link href={`/products/${product.slug}`}>{product.title}</Link>
            </h3>

            <p className={`text-sm text-zinc-400 leading-relaxed ${featured ? "" : "line-clamp-2"}`}>
              {product.shortDescription}
            </p>
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
            {product.links.playStore ? (
              <a
                href={product.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-md hover:scale-105"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Google Play</span>
              </a>
            ) : (
              <Link
                href={`/products/${product.slug}`}
                className="inline-flex items-center gap-1.5 rounded-xl bg-white/10 border border-white/15 px-4 py-2.5 text-xs font-bold text-zinc-200 hover:bg-white/20 transition-all"
              >
                <span>İncele</span>
              </Link>
            )}

            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white group-hover:translate-x-1 transition-all"
            >
              <span>Detaylar</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    );
  };
  void renderProductCard;

  return (
    <div className="pb-16 space-y-12 sm:space-y-16">
      {/* 1. Monumental Studio Hero */}
      <HeroSection />

      {/* 2. Interactive Borderless Cinematic Product Stage */}
      <FeaturedProductSlider />

      {/* 4. Studio Manifesto — a split panel, not a features-row-then-centered-CTA template */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-stretch">

          {/* Left: 3 pillars as a compact, stacked list */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="tile-chip-static flex h-12 w-12 shrink-0 items-center justify-center text-white/90" style={{ background: "linear-gradient(155deg, #fab35f, #c56a1e)" }}>
                <Palette className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">Gerçek Kullanım Değeri</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Her özellik, oyunda veya günlük kullanımda gerçek bir işi kolaylaştırdığı için ürüne girer.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="tile-chip-static flex h-12 w-12 shrink-0 items-center justify-center text-white/90" style={{ background: "linear-gradient(155deg, #c3a2ef, #7752b0)" }}>
                <Gamepad2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">Ürünün Kendi Karakteri</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Oyun, öğrenme ve üretkenlik ürünlerini tek kalıba sokmadan kendi ritimleriyle tasarlarız.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="tile-chip-static flex h-12 w-12 shrink-0 items-center justify-center text-white/90" style={{ background: "linear-gradient(155deg, #7cc3f2, #2c6f9c)" }}>
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white font-display">Sade ve Saygılı Akışlar</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Gereksiz hesap, bildirim ve karmaşık adımlar olmadan kullanıcıyı doğrudan işine ulaştırırız.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Closing CTA, framed as its own panel beside the pillars */}
          <div className="texture-fabric relative border-l-2 border-white/15 bg-transparent p-8 sm:p-10 space-y-6 overflow-hidden">

            <div className="eyebrow-tag gap-1.5 py-1.5 pr-4 text-xs font-semibold text-zinc-300" style={{ "--tag-accent": "#a9dd7a" } as CSSProperties}>
              <span>Stüdyo Felsefesi</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display max-w-md">
              Sade tasarımlar, dürüst yapımlar.
            </h2>

            <p className="text-base text-zinc-300 font-normal leading-relaxed max-w-md">
              Krayirhan Studio’da önce ürünü kullanırız: gereksiz adımları çıkarır, her projenin kendi karakterini korur ve yalnızca gerçekten işe yarayan deneyimleri yayınlarız.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-2xl shadow-white/10 hover:scale-105"
              >
                <Download className="h-4 w-4" />
                <span>Google Play&apos;de Oyna</span>
              </a>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
              >
                <span>Tüm Kataloğu İncele</span>
                <ArrowRight className="h-4 w-4 text-zinc-400" />
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
