"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Gamepad2,
  Pause,
  Play,
  Smartphone,
} from "lucide-react";
import { PRODUCTS } from "@/data/games";

const SLIDE_DURATION = 4000; // 4.0 saniye slayt süresi
const TICK_INTERVAL = 40; // 40ms akıcı ilerleme

interface ProductShowcaseConfig {
  id: string;
  tagline: string;
  features: string[];
  screens: {
    primary: string;
    secondary: string;
  };
}

const SHOWCASE_DATA: Record<string, ProductShowcaseConfig> = {
  "blok-dunyasi": {
    id: "blok-dunyasi",
    tagline:
      "Renkli blokları eşleştirin, çizgileri patlatın ve en yüksek skora ulaşın.",
    features: [
      "Meyve ve kumaş desenli renkli bulmaca temaları",
      "Tek parmakla akıcı ve kolay sürükle-bırak oynanış",
      "Yüksek skor kaydı ve sürekli yeni rekor denemeleri",
      "%100 çevrimdışı, internetsiz oynama desteği",
    ],
    screens: {
      primary: "/games/blok-dunyasi/cover.jpg",
      secondary: "/games/blok-dunyasi/gameplay-1.jpg",
    },
  },
  lingorise: {
    id: "lingorise",
    tagline:
      "İngilizce kelimeleri unutmadan, büyüyen görsel bahçe metaforuyla kalıcı kılın.",
    features: [
      "Akıllı aralıklı tekrar ve hatırlatma algoritması",
      "Öğrenilen her kelimeyle gelişen görsel bahçe metaforu",
      "Günlük hayatta en sık kullanılan popüler kelimeler",
      "İnternet bağlantısı olmadan rahatça pratik yapma imkanı",
    ],
    screens: {
      primary: "/apps/lingorise/home-garden.png",
      secondary: "/apps/lingorise/practice-session.png",
    },
  },
  "benim-notlarim": {
    id: "benim-notlarim",
    tagline:
      "Telefonunuzun duvar kağıdıyla otomatik uyum sağlayan sade not deneyimi.",
    features: [
      "Material You duvar kağıdına dinamik renk uyumu",
      "Zengin yazı biçimlendirme ve kontrol listeleri",
      "%100 yerel ve gizli, veriler sadece telefonda saklanır",
      "Tamamen çevrimdışı çalışma, internet bağlantısı gerektirmez",
    ],
    screens: {
      primary: "/apps/benim-notlarim/cover.jpg",
      secondary: "/apps/benim-notlarim/editor.jpg",
    },
  },
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
  const showcase = SHOWCASE_DATA[product.id] || SHOWCASE_DATA["blok-dunyasi"];

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
          Öne Çıkan Çalışmalar
        </p>
        <h2 className="v2-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf8f2] tracking-tight">
          Öne Çıkan Ürünlerimiz
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-neutral-400">
          Mobil dünyada oyunculara ve kullanıcılara dokunan sade deneyimler
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
              className={`relative overflow-hidden cursor-pointer inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                isActive
                  ? "border-white/40 bg-white/10 text-white shadow-xl scale-105"
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

      {/* Main Showcase Grid: Balanced 6-col / 6-col Layout */}
      <div
        key={product.id}
        className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14 animate-[fadeIn_0.3s_ease-out]"
      >
        {/* Left Column: Product Information */}
        <div className="space-y-6 lg:col-span-6">
          <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-neutral-400">
            <span className="inline-flex items-center gap-1.5 text-neutral-300">
              {product.type === "game" ? (
                <Gamepad2 className="h-3.5 w-3.5" />
              ) : (
                <Smartphone className="h-3.5 w-3.5" />
              )}
              <span>{product.type === "game" ? "Mobil Oyun" : "Mobil Uygulama"}</span>
            </span>
            <span>·</span>
            <span className="text-neutral-300">{product.status}</span>
            <span>·</span>
            <span>{product.platforms.join(", ")}</span>
          </div>

          <div>
            <h3 className="v2-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#fbf8f2]">
              {product.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#b5b0a4]">
              {showcase.tagline}
            </p>
          </div>

          {/* Authentic Feature List (Clean border list, no card boxes) */}
          <div className="divide-y divide-white/10 border-y border-white/10 py-1">
            {showcase.features.map((featureText, idx) => (
              <div key={idx} className="flex items-start gap-3.5 py-3 text-xs sm:text-sm text-neutral-200">
                <span className="font-mono text-xs text-neutral-500 pt-0.5">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span>{featureText}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            {product.links.playStore ? (
              <a
                href={product.links.playStore}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-xs font-bold text-black shadow-lg transition hover:-translate-y-0.5 hover:bg-neutral-200"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Google Play&apos;de Oyna</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#13161c] px-4 py-2.5 text-xs font-semibold text-neutral-400">
                <span>Geliştirme Aşamasında</span>
              </span>
            )}

            <Link
              href={`/v2/products/${product.slug}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.05] px-5 py-3 text-xs font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              <span>Detayları Gör</span>
              <ArrowRight className="h-4 w-4 text-white" />
            </Link>
          </div>
        </div>

        {/* Right Column: 2 Phones Showcase Gallery (Balanced Proportions) */}
        <div className="lg:col-span-6 flex items-center justify-center gap-5 sm:gap-7 py-2 select-none">
          {/* Phone 1: Primary Screen */}
          <div className="w-1/2 max-w-[210px] sm:max-w-[240px] -rotate-3 transform transition-all duration-500 hover:-rotate-1 hover:scale-105">
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem] sm:rounded-[2.6rem] border-2 border-[#2b313d] bg-[#0c0e12] p-1.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]">
              <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] bg-black">
                <Image
                  src={showcase.screens.primary}
                  alt={`${product.title} Ana Ekran`}
                  fill
                  sizes="(max-width: 1024px) 45vw, 240px"
                  className="object-cover object-top"
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
                  src={showcase.screens.secondary}
                  alt={`${product.title} Detay Ekranı`}
                  fill
                  sizes="(max-width: 1024px) 45vw, 240px"
                  className="object-cover object-top"
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
