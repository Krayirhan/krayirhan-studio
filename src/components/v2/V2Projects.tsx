"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Gamepad2,
  Pause,
  Play,
  Smartphone,
} from "lucide-react";
import { PRODUCTS } from "@/data/games";

const SLIDE_DURATION = 5000;
const TICK_INTERVAL = 40;
const productAccents: Record<string, { text: string; dot: string; wash: string }> = {
  "blok-dunyasi": { text: "text-sky-300", dot: "bg-sky-300", wash: "from-sky-400/[0.07]" },
  "benim-notlarim": { text: "text-indigo-300", dot: "bg-indigo-300", wash: "from-indigo-400/[0.07]" },
  "benim-gunlerim": { text: "text-emerald-300", dot: "bg-emerald-300", wash: "from-emerald-400/[0.07]" },
  "hesap-gunlugu": { text: "text-cyan-300", dot: "bg-cyan-300", wash: "from-cyan-400/[0.07]" },
  lingorise: { text: "text-violet-300", dot: "bg-violet-300", wash: "from-violet-400/[0.07]" },
};

export function V2Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalSlides = PRODUCTS.length;

  // Otomatik geçiş ve ilerleme çizgisi zamanlayıcısı
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (TICK_INTERVAL / SLIDE_DURATION) * 100;
        if (next >= 100) {
          setCurrentIndex((curr) => (curr + 1) % totalSlides);
          return 0;
        }
        return next;
      });
    }, TICK_INTERVAL);

    return () => clearInterval(interval);
  }, [totalSlides, isPaused]);

  const handleTabClick = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  const product = PRODUCTS[currentIndex] || PRODUCTS[0];
  const screens = {
    primary: product.screenshots[0] || product.coverImage,
    secondary: product.screenshots[1] || product.coverImage,
  };
  const meta = {
    index: String(currentIndex + 1).padStart(2, "0"),
    taxonomy: product.category[0]?.toUpperCase() || "MOBİL ÜRÜN",
    color: productAccents[product.id] ?? productAccents.lingorise,
  };
  const availability = product.links.playStore ? "Google Play'de" : "Geliştirme aşamasında";
  const isReverse = currentIndex % 2 === 1;

  return (
    <section
      id="projeler"
      className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Anchor targets */}
      <div id="oyunlar" className="absolute -top-24" aria-hidden="true" />
      <div id="uygulamalar" className="absolute -top-24" aria-hidden="true" />

      {/* Section Header */}
      <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto space-y-3">
        <p className="text-xs font-semibold tracking-[0.24em] text-neutral-400 uppercase">
          Ürünler
        </p>
        <h2 className="v2-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf8f2] tracking-tight">
          Oyunlar & Uygulamalar
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-neutral-400">
          Günlük yaşamdan kısa molalara, geliştirdiğimiz ürünleri keşfet.
        </p>
      </div>

      {/* Switcher Tabs with Synchronized Progress Line & Pause Button */}
      <div
        className="mb-12 sm:mb-14 flex flex-wrap items-center justify-center gap-2.5"
        role="tablist"
        aria-label="Ürün seçimi"
      >
        {PRODUCTS.map((item, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleTabClick(idx)}
              className={`relative min-h-[42px] overflow-hidden cursor-pointer inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-[13px] sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                isActive
                  ? "border-white/35 bg-white/10 text-white shadow-xl"
                  : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
              }`}
            >
              {item.type === "game" ? (
                <Gamepad2
                  className={`h-4 w-4 ${
                    isActive ? "text-white" : "text-neutral-500"
                  }`}
                />
              ) : (
                <Smartphone
                  className={`h-4 w-4 ${
                    isActive ? "text-white" : "text-neutral-500"
                  }`}
                />
              )}
              {isActive && <span className={`h-1.5 w-1.5 rounded-full ${productAccents[item.id]?.dot ?? "bg-white"}`} aria-hidden="true" />}
              <span>{item.title}</span>

              {/* Synchronized Duration Fill Line */}
              {isActive && (
                <div className="absolute bottom-0 left-0 h-[2.5px] w-full bg-white/15 overflow-hidden">
                  <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-75 ease-linear"
                  />
                </div>
              )}
            </button>
          );
        })}

        {/* Pause / Play Toggle */}
        <button
          type="button"
          onClick={() => setIsPaused((prev) => !prev)}
          aria-pressed={isPaused}
          aria-label={isPaused ? "Otomatik geçişi devam ettir" : "Otomatik geçişi duraklat"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-neutral-400 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all cursor-pointer"
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
      </div>

      {/* Main Showcase Grid: V1 Punchy Editorial Style */}
      <div
        key={product.id}
        className={`relative isolate grid grid-cols-1 items-center gap-10 py-5 lg:grid-cols-12 lg:gap-14 lg:py-8 animate-[fadeIn_0.3s_ease-out]`}
      >
        <div className={`pointer-events-none absolute -right-24 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-gradient-to-br ${meta.color.wash} to-transparent blur-3xl`} />
        {/* Left Column: Authentic V1 Style Content */}
        <div className={`space-y-6 lg:col-span-6 ${isReverse ? "lg:order-2" : ""}`}>
          {/* 1. Category / Taxonomy Tag */}
          <p className={`text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono ${meta.color.text}`}>
            {meta.index} / {meta.taxonomy} · {product.type === "game" ? "OYUN" : "UYGULAMA"}
          </p>

          {/* 2. Bold Modern Title */}
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08]">
            {product.title}
          </h3>

          {/* 3. Short Descriptive Body */}
          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            {product.shortDescription}
          </p>

          {/* 4. Feature Highlights: Sleek inline bullets with vertical accent bar */}
          <div className="flex flex-wrap gap-x-5 gap-y-2 border-l-2 border-white/20 pl-4 py-1 text-xs sm:text-sm text-zinc-300">
            {product.features?.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-center gap-2 font-medium">
              <span className={`h-1.5 w-1.5 rounded-full ${meta.color.dot}`} aria-hidden="true" />
                <span>{feat.split(":")[0]}</span>
              </div>
            ))}
          </div>

          {/* 5. Action Buttons matching V1 rounded-xl luxury style */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            {product.links.playStore ? (
              <a
                href={product.links.playStore}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-zinc-950 hover:bg-zinc-200 shadow-xl transition-all hover:scale-105"
              >
                <Download className="h-4 w-4" />
                <span>Google Play&apos;de Gör</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-medium text-zinc-400">
                <span className={`h-2 w-2 rounded-full ${meta.color.dot}`} />
                <span>{availability}</span>
              </span>
            )}

            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <span>Detaylar & Galeri</span>
              <ArrowRight className="h-4 w-4 text-zinc-400" />
            </Link>
          </div>
        </div>

        {/* Right Column: 2 Phones Showcase Gallery (Balanced Proportions) */}
        <div className={`lg:col-span-6 flex items-center justify-center gap-5 sm:gap-7 py-2 select-none ${isReverse ? "lg:order-1" : ""}`}>
          {/* Phone 1: Primary Screen */}
          <div className="w-1/2 max-w-[210px] sm:max-w-[240px] -rotate-3 transform transition-all duration-500 hover:-rotate-1 hover:scale-105">
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem] sm:rounded-[2.6rem] border-2 border-[#2b313d] bg-[#0c0e12] p-1.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]">
              <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] bg-black">
                <Image
                  src={screens.primary}
                  alt={`${product.title} Ana Ekran`}
                  fill
                  sizes="(max-width: 1024px) 45vw, 240px"
                  className="object-contain"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />
              </div>
            </div>
          </div>

          {/* Phone 2: Secondary Screen */}
          <div className="w-1/2 max-w-[210px] sm:max-w-[240px] rotate-3 mt-6 sm:mt-10 transform transition-all duration-500 hover:rotate-1 hover:scale-105">
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem] sm:rounded-[2.6rem] border-2 border-[#2b313d] bg-[#0c0e12] p-1.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]">
              <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] bg-black">
                <Image
                  src={screens.secondary}
                  alt={`${product.title} Detay Ekranı`}
                  fill
                  sizes="(max-width: 1024px) 45vw, 240px"
                  className="object-contain"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
