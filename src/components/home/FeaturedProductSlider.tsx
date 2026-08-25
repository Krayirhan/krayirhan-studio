"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/games";
import { Product } from "@/types/game";
import { Download, Star, ArrowRight, Gamepad2, Smartphone } from "lucide-react";
import { QrDownloadButton } from "@/components/ui/QrDownloadModal";

export function FeaturedProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = PRODUCTS.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  // Auto-advance every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide, currentIndex]);

  const product = PRODUCTS[currentIndex];

  // Distinct second screen mapping
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

  const screens = getScreens(product.id);

  // Accent aura colors for background
  const getAuraColor = (id: string) => {
    switch (id) {
      case "blok-dunyasi":
        return "from-orange-500/15 via-amber-500/10 to-transparent";
      case "lingorise":
        return "from-emerald-500/15 via-teal-500/10 to-transparent";
      case "benim-notlarim":
        return "from-sky-500/15 via-indigo-500/10 to-transparent";
      default:
        return "from-white/10 to-transparent";
    }
  };

  const getTagBadge = (product: Product) => {
    if (product.id === "blok-dunyasi") {
      return (
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-300">
          <span className="rounded-full bg-orange-500/15 border border-orange-500/30 px-3.5 py-1 font-bold text-orange-400">
            Öne Çıkan Mobil Oyun
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-3 py-1 text-zinc-300 font-medium">
            <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
            <span>4.8+ Google Play Puanı</span>
          </span>
        </div>
      );
    }
    if (product.id === "lingorise") {
      return (
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-300">
          <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1 font-bold text-emerald-400">
            Kelime & Dil Bahçesi
          </span>
          <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-emerald-400 font-semibold">
            Mobil Uygulama
          </span>
        </div>
      );
    }
    return (
      <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-300">
        <span className="rounded-full bg-sky-500/15 border border-sky-500/30 px-3.5 py-1 font-bold text-sky-400">
          Not & Üretkenlik
        </span>
        <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sky-400 font-semibold">
          Google Play'de Yayında
        </span>
      </div>
    );
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
      
      {/* 1. Top Interactive Switcher Tabs with Sleek Flowing Progress Timer */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12 sm:mb-16">
        {PRODUCTS.map((item, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative overflow-hidden rounded-2xl px-5 py-3 text-xs sm:text-sm font-bold transition-all cursor-pointer border ${
                isActive
                  ? "border-white/30 bg-white/10 text-white shadow-xl shadow-black scale-105"
                  : "border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:bg-white/5 hover:border-white/20"
              }`}
            >
              <div className="flex items-center gap-2.5">
                {item.type === "game" ? (
                  <Gamepad2 className={`h-4 w-4 ${isActive ? "text-orange-400" : "text-zinc-500"}`} />
                ) : (
                  <Smartphone className={`h-4 w-4 ${isActive ? "text-emerald-400" : "text-zinc-500"}`} />
                )}
                <span>{item.title}</span>
                <span className="text-[10px] text-zinc-400 font-normal hidden sm:inline">
                  ({item.category[0]})
                </span>
              </div>

              {/* Sleek Animated Duration Fill Line under Active Tab */}
              {isActive && (
                <div className="absolute bottom-0 left-0 h-[2.5px] w-full bg-white/15 rounded-full overflow-hidden">
                  <div
                    key={`${item.id}-${currentIndex}`}
                    style={{ animationPlayState: isPaused ? "paused" : "running" }}
                    className="h-full bg-gradient-to-r from-zinc-200 via-white to-zinc-100 shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-progress-fill"
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* 2. Borderless Cinematic Showcase Stage (No Box/Card Container) */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
      >
        {/* Dynamic Full-Bleed Ambient Aura Behind Phones */}
        <div
          className={`absolute -right-10 top-1/2 -translate-y-1/2 w-[600px] h-[550px] bg-gradient-to-tr ${getAuraColor(
            product.id
          )} blur-[140px] rounded-full pointer-events-none transition-all duration-1000`}
        />

        {/* Left Column: Monumental Content */}
        <div className="lg:col-span-6 space-y-6 z-10">
          {getTagBadge(product)}

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
            {product.title}
          </h2>

          <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Quick Highlight Feature Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {product.features?.slice(0, 3).map((feat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-zinc-200 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span>{feat.split(":")[0]}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="pt-6 flex flex-wrap items-center gap-4">
            {product.links.playStore && (
              <a
                href={product.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-zinc-950 hover:bg-zinc-200 shadow-2xl shadow-white/10 hover:scale-105 transition-all"
              >
                <Download className="h-4 w-4" />
                <span>Google Play'den İndir</span>
              </a>
            )}

            {product.links.playStore && (
              <QrDownloadButton
                title={product.title}
                url={product.links.playStore}
                coverImage={product.coverImage}
                category={product.type === "game" ? "Mobil Oyun" : "Mobil Uygulama"}
              />
            )}

            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <span>Detaylar & Galeri</span>
              <ArrowRight className="h-4 w-4 text-zinc-400" />
            </Link>
          </div>
        </div>

        {/* Right Column: Massive Floating 3D Phones (Borderless in Space with 2 DISTINCT Screens) */}
        <div className="lg:col-span-6 flex items-center justify-center gap-5 sm:gap-8 py-6 z-10">
          {/* Phone 1: Main Menu / Garden */}
          <div className="w-1/2 max-w-[240px] sm:max-w-[270px] rounded-[2.8rem] p-3 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/25 shadow-2xl shadow-black -rotate-3 hover:-rotate-1 hover:scale-105 transition-all duration-500">
            {/* Top Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 h-3.5 w-16 rounded-full bg-black/90 z-20 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-zinc-800 mr-2" />
              <div className="h-1 w-5 rounded-full bg-zinc-900" />
            </div>

            <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.2rem] bg-black">
              <img
                src={screens.primary}
                alt={`${product.title} Ekran 1`}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
            </div>
          </div>

          {/* Phone 2: Gameplay / Practice / Editor (DIFFERENT IMAGE) */}
          <div className="w-1/2 max-w-[240px] sm:max-w-[270px] rounded-[2.8rem] p-3 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/25 shadow-2xl shadow-black rotate-3 hover:rotate-1 hover:scale-105 transition-all duration-500 mt-10 sm:mt-16">
            {/* Top Dynamic Island */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 h-3.5 w-16 rounded-full bg-black/90 z-20 flex items-center justify-center">
              <div className="h-1.5 w-1.5 rounded-full bg-zinc-800 mr-2" />
              <div className="h-1 w-5 rounded-full bg-zinc-900" />
            </div>

            <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.2rem] bg-black">
              <img
                src={screens.secondary}
                alt={`${product.title} Ekran 2`}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
