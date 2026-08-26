"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PRODUCTS } from "@/data/games";
import { Product } from "@/types/game";
import { Download, Star, ArrowRight, Gamepad2, Smartphone, QrCode } from "lucide-react";
import { QrModalDialog } from "@/components/ui/QrDownloadModal";

const SLIDE_DURATION = 4000; // Exactly 4.0 seconds per slide
const TICK_INTERVAL = 40; // 40ms continuous tick

export function FeaturedProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [qrModalProduct, setQrModalProduct] = useState<Product | null>(null);
  const totalSlides = PRODUCTS.length;

  // Clockwork timer that FREEZES when QR modal is opened
  useEffect(() => {
    if (qrModalProduct) return; // Completely freeze slider when QR modal is open

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
  }, [totalSlides, qrModalProduct]);

  const handleTabClick = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

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
          Not Defteri & Düzen
        </span>
        <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-sky-400 font-semibold">
          Google Play'de Yayında
        </span>
      </div>
    );
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
      
      {/* 1. Top Interactive Switcher Tabs with Synchronized Progress Line */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12 sm:mb-16">
        {PRODUCTS.map((item, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(idx)}
              className={`relative overflow-hidden rounded-2xl px-6 py-3.5 text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer border ${
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
              </div>

              {/* Perfectly Synchronized Duration Fill Line */}
              {isActive && (
                <div className="absolute bottom-0 left-0 h-[2.5px] w-full bg-white/15 overflow-hidden">
                  <div
                    style={{ width: `${progress}%` }}
                    className="h-full bg-gradient-to-r from-zinc-200 via-white to-zinc-100 shadow-[0_0_10px_rgba(255,255,255,0.9)] transition-all duration-75 ease-linear"
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* 2. Borderless Cinematic Showcase Stage */}
      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Dynamic Full-Bleed Ambient Aura Behind Phones */}
        <div
          className={`absolute -right-10 top-1/2 -translate-y-1/2 w-[600px] h-[550px] bg-gradient-to-tr ${getAuraColor(
            product.id
          )} blur-[140px] rounded-full pointer-events-none transition-all duration-1000`}
        />

        {/* Left Column: Content */}
        <div key={`info-${product.id}`} className="lg:col-span-6 space-y-6 z-10 animate-[fadeIn_0.35s_ease-out]">
          {getTagBadge(product)}

          <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
            {product.title}
          </h2>

          <p className="text-base sm:text-xl text-zinc-300 font-normal leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Feature Highlights */}
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
              <button
                onClick={() => setQrModalProduct(product)}
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-4 text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer"
              >
                <QrCode className="h-4 w-4 text-zinc-300" />
                <span>QR ile Tara</span>
              </button>
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

        {/* Right Column: Floating 3D Phones */}
        <div key={`phones-${product.id}`} className="lg:col-span-6 flex items-center justify-center gap-5 sm:gap-8 py-6 z-10 animate-[fadeIn_0.35s_ease-out]">
          {/* Phone 1: Main Screen */}
          <div className="w-1/2 max-w-[240px] sm:max-w-[270px] rounded-[2.6rem] sm:rounded-[2.8rem] p-2.5 sm:p-3 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/25 shadow-2xl shadow-black -rotate-3 hover:-rotate-1 hover:scale-105 transition-all duration-500 relative">
            <div
              style={{ aspectRatio: product.id === "benim-notlarim" ? "535 / 1024" : "9 / 19.5" }}
              className="relative w-full overflow-hidden rounded-[2rem] sm:rounded-[2.2rem] bg-black"
            >
              <img
                src={screens.primary}
                alt={`${product.title} Ekran 1`}
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
            </div>
          </div>

          {/* Phone 2: Detail / Editor Screen */}
          <div className="w-1/2 max-w-[240px] sm:max-w-[270px] rounded-[2.6rem] sm:rounded-[2.8rem] p-2.5 sm:p-3 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/25 shadow-2xl shadow-black rotate-3 hover:rotate-1 hover:scale-105 transition-all duration-500 mt-8 sm:mt-12 relative">
            <div
              style={{ aspectRatio: product.id === "benim-notlarim" ? "547 / 1024" : "9 / 19.5" }}
              className="relative w-full overflow-hidden rounded-[2rem] sm:rounded-[2.2rem] bg-black"
            >
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

      {/* Global Top-Level QR Modal (Renders above all phones with z-[999] and FREEZES the 4s slider) */}
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
