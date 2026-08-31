"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/data/games";
import { Product } from "@/types/game";
import {
  Download,
  ArrowRight,
  Gamepad2,
  Smartphone,
  QrCode,
  Pause,
  Play,
  Sparkles,
} from "lucide-react";
import { QrModalDialog } from "@/components/ui/QrDownloadModal";

const SLIDE_DURATION = 4000; // 4.0 seconds per slide
const TICK_INTERVAL = 40; // 40ms continuous tick

export function V2Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [qrModalProduct, setQrModalProduct] = useState<Product | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = PRODUCTS.length;

  // Auto-advance slider with progress indicator (pauses on user pause or QR modal open)
  useEffect(() => {
    if (qrModalProduct || isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (TICK_INTERVAL / SLIDE_DURATION) * 100;
        if (next >= 100) {
          setCurrentIndex((current) => (current + 1) % totalSlides);
          return 0;
        }
        return next;
      });
    }, TICK_INTERVAL);

    return () => clearInterval(interval);
  }, [totalSlides, qrModalProduct, isPaused]);

  // Sync with URL hash on load and hash change
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#oyunlar") {
        const gameIdx = PRODUCTS.findIndex((p) => p.type === "game");
        if (gameIdx !== -1) {
          setCurrentIndex(gameIdx);
          setProgress(0);
        }
      } else if (hash === "#uygulamalar") {
        const appIdx = PRODUCTS.findIndex((p) => p.type === "app");
        if (appIdx !== -1) {
          setCurrentIndex(appIdx);
          setProgress(0);
        }
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleTabClick = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  const product = PRODUCTS[currentIndex];

  const productMeta: Record<
    string,
    { index: string; taxonomy: string; label: string; color: string }
  > = {
    "blok-dunyasi": {
      index: "01",
      taxonomy: "OYUN",
      label: "ÖNE ÇIKAN",
      color: "text-[#d6a653]",
    },
    lingorise: {
      index: "02",
      taxonomy: "ÖĞRENME",
      label: "UYGULAMA",
      color: "text-emerald-400",
    },
    "benim-notlarim": {
      index: "03",
      taxonomy: "ÜRETKENLİK",
      label: "UYGULAMA",
      color: "text-amber-300",
    },
  };

  // Distinct two screens for realistic dual-phone presentation
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

  // Per-product ambient aura matching the V2 dark palette
  const renderAura = (id: string) => {
    if (id === "blok-dunyasi") {
      return (
        <div className="pointer-events-none absolute -right-10 top-1/2 h-[550px] w-[600px] -translate-y-1/2 opacity-70 transition-opacity duration-1000">
          <div className="absolute right-[10%] top-0 h-[320px] w-[320px] rounded-full bg-radial from-[#d9a34e]/20 via-[#c56a1e]/10 to-transparent blur-[100px]" />
          <div className="absolute bottom-16 right-[38%] h-[220px] w-[220px] rounded-full bg-radial from-[#a97ee0]/15 to-transparent blur-[90px]" />
        </div>
      );
    }
    if (id === "lingorise") {
      return (
        <div className="pointer-events-none absolute -right-10 top-1/2 h-[550px] w-[600px] -translate-y-1/2 opacity-70 transition-opacity duration-1000">
          <div className="absolute right-[15%] top-10 h-[340px] w-[340px] rounded-full bg-radial from-emerald-500/20 via-teal-700/10 to-transparent blur-[110px]" />
        </div>
      );
    }
    return (
      <div className="pointer-events-none absolute -right-10 top-1/2 h-[550px] w-[600px] -translate-y-1/2 opacity-70 transition-opacity duration-1000">
        <div className="absolute right-[15%] top-10 h-[340px] w-[340px] rounded-full bg-radial from-amber-500/20 via-[#bc8634]/10 to-transparent blur-[110px]" />
      </div>
    );
  };

  const meta = productMeta[product.id] ?? productMeta["blok-dunyasi"];

  return (
    <section
      id="projeler"
      className="relative mx-auto max-w-[1380px] px-5 py-24 sm:px-8 lg:px-12"
    >
      {/* Anchor targets for direct navigation */}
      <div id="oyunlar" className="absolute -top-24" aria-hidden="true" />
      <div id="uygulamalar" className="absolute -top-24" aria-hidden="true" />

      {/* Section Header */}
      <div className="mb-12 flex flex-col items-center justify-between gap-6 border-b border-[#c89547]/20 pb-8 sm:flex-row sm:items-end">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[.24em] text-[#d6a653]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>PORTFÖYÜMÜZ</span>
          </div>
          <h2 className="v2-serif mt-3 text-4xl sm:text-5xl">
            Ürettiğimiz dünyalar.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-[#b9b6b0] sm:text-right">
          Her proje farklı bir ihtiyaca, tek bir ortak ilkeye dayanır: sade,
          etkili ve hatırlanmaya değer olmak.
        </p>
      </div>

      {/* 1. Interactive Switcher Tabs with Synchronized Progress Line */}
      <div
        className="mb-12 flex flex-wrap items-center justify-center gap-3"
        role="tablist"
        aria-label="Öne çıkan ürünler"
      >
        {PRODUCTS.map((item, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(idx)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`featured-product-${item.id}`}
              id={`featured-tab-${item.id}`}
              className={`relative cursor-pointer overflow-hidden rounded-xl border px-5 py-3 text-xs font-bold tracking-wider transition-all duration-300 sm:px-6 sm:py-3.5 sm:text-sm ${
                isActive
                  ? "border-[#d8a958] bg-[#0c1a26] text-[#fff8eb] shadow-xl shadow-black/80 scale-105"
                  : "border-[#c39856]/25 bg-[#061019]/80 text-[#b9b6b0] hover:border-[#d8a958]/50 hover:bg-[#091520] hover:text-[#fff9ed]"
              }`}
            >
              <div className="flex items-center gap-2.5">
                {item.type === "game" ? (
                  <Gamepad2
                    className={`h-4 w-4 ${
                      isActive ? "text-[#d6a653]" : "text-[#8e8c87]"
                    }`}
                  />
                ) : (
                  <Smartphone
                    className={`h-4 w-4 ${
                      isActive ? "text-[#d6a653]" : "text-[#8e8c87]"
                    }`}
                  />
                )}
                <span>{item.title}</span>
              </div>

              {/* Synchronized Gold Duration Fill Line */}
              {isActive && (
                <div className="absolute bottom-0 left-0 h-[2.5px] w-full overflow-hidden bg-[#d8a958]/20">
                  <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-[#d9a34e] via-[#f5d085] to-[#fff1d0] shadow-[0_0_10px_rgba(216,169,88,0.8)] transition-all duration-75 ease-linear"
                  />
                </div>
              )}
            </button>
          );
        })}

        {/* Pause / Play Control */}
        <button
          onClick={() => setIsPaused((prev) => !prev)}
          aria-pressed={isPaused}
          aria-label={
            isPaused ? "Otomatik geçişi başlat" : "Otomatik geçişi duraklat"
          }
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border border-[#c39856]/25 bg-[#061019]/80 text-[#b9b6b0] transition-all hover:border-[#d8a958]/60 hover:bg-[#091520] hover:text-[#fff9ed]"
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>
      </div>

      {/* Screen-reader announcement */}
      <div className="sr-only" aria-live="polite">
        {product.title} gösteriliyor{isPaused ? ", duraklatıldı" : ""}.
      </div>

      {/* 2. Cinematic Showcase Stage (Dual 3D Phones & Content) */}
      <div
        key={product.id}
        id={`featured-product-${product.id}`}
        role="tabpanel"
        aria-labelledby={`featured-tab-${product.id}`}
        className="relative grid grid-cols-1 items-center gap-12 rounded-2xl border border-[#c89547]/20 bg-[#061019]/60 p-6 sm:p-10 lg:grid-cols-12 lg:gap-16 lg:p-14"
      >
        {/* Dynamic Ambient Aura Behind Phones */}
        {renderAura(product.id)}

        {/* Left Column: Content */}
        <div className="z-10 space-y-6 lg:col-span-6 animate-[fadeIn_0.35s_ease-out]">
          <p
            className={`text-xs font-bold tracking-[.22em] uppercase ${meta.color}`}
          >
            {meta.index} / {meta.taxonomy} · {meta.label}
          </p>

          <h3 className="v2-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#fbf8f1] leading-[1.08]">
            {product.title}
          </h3>

          <p className="text-base sm:text-lg font-normal leading-relaxed text-[#d5d1ca]">
            {product.shortDescription}
          </p>

          {/* Feature Highlights with Gold Accent Bullets */}
          <div className="flex flex-wrap gap-x-6 gap-y-2.5 border-l-2 border-[#d8a958]/40 pl-4 text-xs sm:text-sm text-[#cac6bd]">
            {product.features?.slice(0, 3).map((feat, i) => (
              <div key={i} className="flex items-center gap-2 font-medium">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-[#d6a653]"
                  aria-hidden="true"
                />
                <span>{feat.split(":")[0]}</span>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {product.links.playStore && (
              <a
                href={product.links.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-md bg-gradient-to-r from-[#d9a34e] to-[#f2ca7c] px-6 py-3.5 text-xs font-bold text-[#18110a] shadow-[0_10px_25px_rgba(205,150,61,.25)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(205,150,61,.35)]"
              >
                <Download className="h-4 w-4" />
                <span>Google Play&apos;den İndir</span>
              </a>
            )}

            {product.links.playStore && (
              <button
                type="button"
                onClick={() => setQrModalProduct(product)}
                className="inline-flex items-center gap-2 rounded-md border border-[#c39856]/40 bg-[#061019] px-5 py-3.5 text-xs font-semibold text-[#f5e7cd] backdrop-blur-sm transition hover:border-[#f2ca7c] hover:bg-[#b97e2a]/15"
              >
                <QrCode className="h-4 w-4 text-[#d6a750]" />
                <span>QR ile Tara</span>
              </button>
            )}

            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center gap-2 rounded-md border border-[#c39856]/30 bg-black/20 px-5 py-3.5 text-xs font-semibold text-[#d8a654] transition hover:border-[#f2ca7c] hover:bg-white/10 hover:text-[#ffe0a4]"
            >
              <span>Detaylar & Galeri</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Floating 3D Phones */}
        <div className="z-10 flex items-center justify-center gap-5 sm:gap-8 py-4 lg:col-span-6 animate-[fadeIn_0.35s_ease-out]">
          {/* Phone 1: Main Screen */}
          <div className="relative w-1/2 max-w-[230px] sm:max-w-[260px] rounded-[2.4rem] sm:rounded-[2.7rem] p-2.5 sm:p-3 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 border border-white/20 shadow-2xl shadow-black -rotate-3 transition-all duration-500 hover:-rotate-1 hover:scale-105">
            <div
              style={{
                aspectRatio:
                  product.id === "benim-notlarim" ? "535 / 1024" : "9 / 19.5",
              }}
              className="relative w-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.1rem] bg-black"
            >
              <Image
                src={screens.primary}
                alt={`${product.title} Ekran 1`}
                fill
                sizes="(max-width: 1024px) 45vw, 260px"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08]" />
            </div>
          </div>

          {/* Phone 2: Detail / Secondary Screen */}
          <div className="relative mt-8 sm:mt-12 w-1/2 max-w-[230px] sm:max-w-[260px] rounded-[2.4rem] sm:rounded-[2.7rem] p-2.5 sm:p-3 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-950 border border-white/20 shadow-2xl shadow-black rotate-3 transition-all duration-500 hover:rotate-1 hover:scale-105">
            <div
              style={{
                aspectRatio:
                  product.id === "benim-notlarim" ? "547 / 1024" : "9 / 19.5",
              }}
              className="relative w-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.1rem] bg-black"
            >
              <Image
                src={screens.secondary}
                alt={`${product.title} Ekran 2`}
                fill
                sizes="(max-width: 1024px) 45vw, 260px"
                className="object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08]" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom All Products Link */}
      <div className="mt-12 text-center sm:text-left">
        <Link
          href="/products"
          className="inline-flex items-center gap-3 rounded-md border border-[#c39856]/40 bg-[#061019] px-5 py-3 text-xs font-bold tracking-wider text-[#d8a654] transition hover:border-[#f2ca7c] hover:bg-[#b97e2a]/15 hover:text-[#ffe0a4]"
        >
          <span>TÜM PROJELERİ LİSTELE</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Global Top-Level QR Modal (Freezes the slider while active) */}
      {qrModalProduct && (
        <QrModalDialog
          title={qrModalProduct.title}
          url={qrModalProduct.links.playStore || ""}
          coverImage={qrModalProduct.coverImage}
          isOpen={true}
          onClose={() => setQrModalProduct(null)}
        />
      )}
    </section>
  );
}
