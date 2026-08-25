"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/games";
import { Product } from "@/types/game";
import { Download, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { QrDownloadButton } from "@/components/ui/QrDownloadModal";

export function FeaturedProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = PRODUCTS.length;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, nextSlide]);

  const product = PRODUCTS[currentIndex];

  // Accent aura colors based on current product
  const getAuraColor = (id: string) => {
    switch (id) {
      case "blok-dunyasi":
        return "bg-orange-500/[0.12] border-orange-500/30";
      case "lingorise":
        return "bg-emerald-500/[0.12] border-emerald-500/30";
      case "benim-notlarim":
        return "bg-sky-500/[0.12] border-sky-500/30";
      default:
        return "bg-white/[0.08] border-white/20";
    }
  };

  const getTagBadge = (product: Product) => {
    if (product.id === "blok-dunyasi") {
      return (
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-300">
          <span className="rounded-full bg-orange-500/15 border border-orange-500/30 px-3 py-1 font-bold text-orange-400">
            Öne Çıkan Mobil Oyun
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-zinc-300 font-medium">
            <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
            <span>4.8+ Google Play Puanı</span>
          </span>
        </div>
      );
    }
    if (product.id === "lingorise") {
      return (
        <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-300">
          <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 font-bold text-emerald-400">
            Kelime & Dil Bahçesi
          </span>
          <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-emerald-400 font-semibold">
            Mobil Uygulama
          </span>
        </div>
      );
    }
    return (
      <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-300">
        <span className="rounded-full bg-sky-500/15 border border-sky-500/30 px-3 py-1 font-bold text-sky-400">
          Not & Üretkenlik
        </span>
        <span className="rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-sky-400 font-semibold">
          Google Play'de Yayında
        </span>
      </div>
    );
  };

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Interactive Main Showcase Card */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111114] p-8 sm:p-12 lg:p-16 shadow-2xl transition-all duration-500"
      >
        {/* Dynamic Product Background Ambient Glow */}
        <div
          className={`absolute top-0 right-0 w-[550px] h-[550px] blur-[130px] rounded-full pointer-events-none transition-all duration-700 ${getAuraColor(
            product.id
          )}`}
        />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[460px]">
          
          {/* Left Column: Product Info & Actions */}
          <div className="lg:col-span-6 space-y-6 animate-in fade-in duration-300 key={product.id}">
            {getTagBadge(product)}

            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display">
              {product.title}
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Feature Bullets */}
            <div className="space-y-2.5 pt-1 text-sm text-zinc-300 font-medium">
              {product.features?.slice(0, 3).map((feature, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-white text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              {product.links.playStore && (
                <a
                  href={product.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-zinc-950 hover:bg-zinc-200 shadow-xl shadow-white/10 hover:scale-105 transition-all"
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
                className="rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white hover:border-white/30 transition-all"
              >
                Detaylar & Galeri ➔
              </Link>
            </div>
          </div>

          {/* Right Column: Dynamic Phone Displays */}
          <div className="lg:col-span-6 flex items-center justify-center gap-4 sm:gap-6 py-4">
            {/* Primary Phone */}
            <div className="w-1/2 max-w-[230px] sm:max-w-[250px] rounded-[2.5rem] p-2.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/20 shadow-2xl shadow-black/90 -rotate-3 group-hover:-rotate-1 group-hover:scale-105 transition-all duration-500">
              <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-black">
                <img
                  src={product.coverImage}
                  alt={`${product.title} Ekran 1`}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
              </div>
            </div>

            {/* Secondary Phone (if screenshots exist) */}
            <div className="w-1/2 max-w-[230px] sm:max-w-[250px] rounded-[2.5rem] p-2.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/20 shadow-2xl shadow-black/90 rotate-3 group-hover:rotate-1 group-hover:scale-105 transition-all duration-500 mt-8 sm:mt-12">
              <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-black">
                <img
                  src={product.screenshots?.[0] || product.coverImage}
                  alt={`${product.title} Ekran 2`}
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Slider Controls & Progress Indicators */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Slide Indicator Pills */}
          <div className="flex items-center gap-2.5">
            {PRODUCTS.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "bg-white text-zinc-950 shadow-lg scale-105"
                    : "bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10"
                }`}
              >
                <span>{item.title}</span>
              </button>
            ))}
          </div>

          {/* Manual Arrow Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              aria-label="Önceki Ürün"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white hover:text-zinc-950 transition-all cursor-pointer shadow-md active:scale-95"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <span className="text-xs font-mono text-zinc-400 px-2">
              {currentIndex + 1} / {totalSlides}
            </span>

            <button
              onClick={nextSlide}
              aria-label="Sonraki Ürün"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white hover:bg-white hover:text-zinc-950 transition-all cursor-pointer shadow-md active:scale-95"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
