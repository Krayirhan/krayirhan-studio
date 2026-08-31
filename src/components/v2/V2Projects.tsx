"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Gamepad2,
  Gift,
  Play,
  RotateCcw,
  ShieldCheck,
  Smartphone,
  WifiOff,
  Sprout,
  BookOpen,
  Brain,
  Palette,
  CheckCircle2,
} from "lucide-react";
import { PRODUCTS } from "@/data/games";
import { SeljukOrnament } from "./V2Icons";

interface ProductShowcaseConfig {
  id: string;
  tagline: string;
  features: { icon: typeof ShieldCheck; text: string }[];
  screens: string[];
}

const SHOWCASE_DATA: Record<string, ProductShowcaseConfig> = {
  "blok-dunyasi": {
    id: "blok-dunyasi",
    tagline:
      "Renkli blokları eşleştir, seviyeleri tamamla ve liderlik tablosunda zirveye yerleş!",
    features: [
      {
        icon: ShieldCheck,
        text: "Zehirli reklam yok, kesintisiz oyun deneyimi",
      },
      {
        icon: Gift,
        text: "Haftalık etkinlikler ve ödüller",
      },
      {
        icon: WifiOff,
        text: "Çevrimdışı oynama desteği",
      },
      {
        icon: RotateCcw,
        text: "Sürekli yeni seviyeler",
      },
    ],
    screens: [
      "/games/blok-dunyasi/cover.jpg",
      "/games/blok-dunyasi/gameplay-1.jpg",
      "/games/blok-dunyasi/gameplay-2.jpg",
      "/games/blok-dunyasi/cover.jpg",
    ],
  },
  lingorise: {
    id: "lingorise",
    tagline:
      "İngilizce kelime bilginizi unutmadan, büyüyen görsel bahçe metaforuyla kalıcı kılın!",
    features: [
      {
        icon: Brain,
        text: "Akıllı aralıklı tekrar algoritması",
      },
      {
        icon: Sprout,
        text: "Gelişen görsel kelime bahçesi",
      },
      {
        icon: BookOpen,
        text: "Günlük hayatta en sık kullanılan kelimeler",
      },
      {
        icon: WifiOff,
        text: "%100 internetsiz pratik imkanı",
      },
    ],
    screens: [
      "/apps/lingorise/home-garden.png",
      "/apps/lingorise/practice-session.png",
      "/apps/lingorise/progress-mastery.png",
      "/apps/lingorise/home-garden.png",
    ],
  },
  "benim-notlarim": {
    id: "benim-notlarim",
    tagline:
      "Telefonunuzun duvar kağıdıyla otomatik uyum sağlayan renkler ve sade not deneyimi.",
    features: [
      {
        icon: ShieldCheck,
        text: "%100 yerel ve gizli, veriler telefonda saklanır",
      },
      {
        icon: Palette,
        text: "Duvar kağıdına dinamik uyumlu tema",
      },
      {
        icon: CheckCircle2,
        text: "Zengin yazı seçenekleri ve kontrol listeleri",
      },
      {
        icon: WifiOff,
        text: "Tamamen çevrimdışı çalışma",
      },
    ],
    screens: [
      "/apps/benim-notlarim/cover.jpg",
      "/apps/benim-notlarim/editor.jpg",
      "/apps/benim-notlarim/settings.png",
      "/apps/benim-notlarim/cover.jpg",
    ],
  },
};

export function V2Projects() {
  const [activeId, setActiveId] = useState<string>("blok-dunyasi");

  const product =
    PRODUCTS.find((p) => p.id === activeId) || PRODUCTS[0];
  const showcase = SHOWCASE_DATA[activeId] || SHOWCASE_DATA["blok-dunyasi"];

  return (
    <section
      id="projeler"
      className="relative mx-auto max-w-[1380px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      {/* Anchor targets */}
      <div id="oyunlar" className="absolute -top-24" aria-hidden="true" />
      <div id="uygulamalar" className="absolute -top-24" aria-hidden="true" />

      {/* Eyebrow Header */}
      <div className="mb-8 text-center">
        <SeljukOrnament title="Öne Çıkan Ürünlerimiz" />
      </div>

      {/* Switcher Tabs */}
      <div
        className="mb-14 flex flex-wrap items-center justify-center gap-3"
        role="tablist"
        aria-label="Ürün seçimi"
      >
        {PRODUCTS.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(item.id)}
              className={`inline-flex cursor-pointer items-center gap-2.5 rounded-xl border px-6 py-3 text-xs font-bold tracking-wider transition-all duration-300 ${
                isActive
                  ? "border-white bg-white text-black shadow-[0_4px_20px_rgba(255,255,255,0.2)] scale-105"
                  : "border-white/15 bg-white/[0.03] text-neutral-400 hover:border-white/30 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              {item.type === "game" ? (
                <Gamepad2
                  className={`h-4 w-4 ${
                    isActive ? "text-black" : "text-neutral-500"
                  }`}
                />
              ) : (
                <Smartphone
                  className={`h-4 w-4 ${
                    isActive ? "text-black" : "text-neutral-500"
                  }`}
                />
              )}
              <span>{item.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Showcase Grid: Left Product Details & Right 4 Phone Screens */}
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left Column: Product Information */}
        <div className="z-10 space-y-7 lg:col-span-4">
          <h3 className="v2-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#fbf8f2]">
            {product.title}
          </h3>

          <p className="text-sm sm:text-base leading-7 text-[#b5b0a4]">
            {showcase.tagline}
          </p>

          {/* 4 Feature Checklist with Clean White Icons */}
          <div className="space-y-4 pt-2">
            {showcase.features.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3.5">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-white/15 bg-white/[0.06] text-white">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-[#ded9ce]">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {product.links.playStore ? (
              <a
                href={product.links.playStore}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg bg-white px-6 py-3.5 text-xs font-bold text-black shadow-[0_6px_20px_rgba(255,255,255,0.18)] transition hover:-translate-y-0.5 hover:bg-neutral-200 hover:shadow-[0_10px_25px_rgba(255,255,255,0.28)]"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Google Play&apos;de Oyna</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#13161c] px-5 py-3 text-xs font-semibold text-neutral-400">
                <span>Geliştirme Aşamasında</span>
              </span>
            )}

            <Link
              href={`/products/${product.slug}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/[0.05] px-5 py-3.5 text-xs font-semibold text-white backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              <span>Detayları Gör</span>
              <ArrowRight className="h-4 w-4 text-white" />
            </Link>
          </div>
        </div>

        {/* Right Column: 4 Phones Side-by-Side Gallery */}
        <div className="z-10 lg:col-span-8">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 select-none">
            {showcase.screens.map((screenSrc, index) => (
              <div
                key={`${product.id}-screen-${index}`}
                className="group relative transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              >
                {/* Phone Outer Chassis */}
                <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] border-2 border-[#2b313d] bg-[#0c0e12] p-1 shadow-2xl">
                  {/* Phone Screen Glass */}
                  <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] sm:rounded-[1.9rem] bg-black">
                    <Image
                      src={screenSrc}
                      alt={`${product.title} Ekran ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 45vw, 160px"
                      className="object-cover object-top transition duration-500 group-hover:scale-105"
                    />
                    {/* Realistic Glass Reflection */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
