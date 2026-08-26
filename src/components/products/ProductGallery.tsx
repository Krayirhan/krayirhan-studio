"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, Sparkles } from "lucide-react";

interface ProductGalleryProps {
  title: string;
  screenshots: string[];
}

export function ProductGallery({ title, screenshots }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIndex]);

  const showPrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : screenshots.length - 1));
  }, [selectedIndex, screenshots.length]);

  const showNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! < screenshots.length - 1 ? prev! + 1 : 0));
  }, [selectedIndex, screenshots.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, closeLightbox, showPrev, showNext]);

  return (
    <>
      {/* Modern Phone Mockup Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
        {screenshots.map((screen, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative flex flex-col items-center justify-center cursor-pointer select-none"
          >
            {/* 1. Subtle Ambient Background Glow */}
            <div className="absolute inset-0 -m-4 rounded-[3rem] bg-white/[0.03] blur-2xl opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none" />

            {/* 2. Premium Phone Mockup Frame */}
            <div className="relative w-full max-w-[280px] sm:max-w-[300px] rounded-[2.8rem] p-2.5 bg-gradient-to-b from-zinc-700/80 via-zinc-800/90 to-zinc-900 border border-white/15 shadow-2xl shadow-black/80 ring-1 ring-white/10 group-hover:-translate-y-2 group-hover:border-white/40 transition-all duration-500">
              {/* Screen Display */}
              <div
                style={{ aspectRatio: screen.includes("benim-notlarim") ? "535 / 1024" : "9 / 19.5" }}
                className="relative w-full overflow-hidden rounded-[2.2rem] bg-zinc-950 shadow-inner"
              >
                <Image
                  src={screen}
                  alt={`${title} Ekran Görüntüsü ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 42vw, 300px"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Screen Glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.06] pointer-events-none" />

                {/* Interactive Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-[3px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-zinc-950 font-bold shadow-xl group-hover:scale-110 transition-transform">
                    <ZoomIn className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold text-white tracking-wider uppercase px-3 py-1 rounded-full bg-white/10 border border-white/20">
                    Büyüt
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-label */}
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Görsel {idx + 1}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-8 select-none animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div
            className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-base font-extrabold text-white tracking-wide">{title}</span>
              <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-white border border-white/15">
                {selectedIndex + 1} / {screenshots.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:scale-105 transition-all border border-white/15 cursor-pointer shadow-xl"
              aria-label="Kapat"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Previous Button */}
          {screenshots.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 sm:left-8 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900/90 text-white hover:bg-white hover:text-zinc-950 border border-white/20 shadow-2xl hover:scale-110 transition-all cursor-pointer"
              aria-label="Önceki Görsel"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}

          {/* Main Large Image Display */}
          <div
            className="relative max-h-[82vh] max-w-[90vw] flex items-center justify-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screenshots[selectedIndex]}
              alt={`${title} - Görsel ${selectedIndex + 1}`}
              width={900}
              height={1600}
              sizes="90vw"
              className="max-h-[82vh] max-w-[90vw] rounded-2xl border border-white/10 object-contain shadow-2xl ring-1 ring-white/10"
            />
          </div>

          {/* Next Button */}
          {screenshots.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 sm:right-8 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900/90 text-white hover:bg-white hover:text-zinc-950 border border-white/20 shadow-2xl hover:scale-110 transition-all cursor-pointer"
              aria-label="Sonraki Görsel"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}

          {/* Bottom Thumbnails Strip */}
          {screenshots.length > 1 && (
            <div
              className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 max-w-[90vw] overflow-x-auto p-2.5 rounded-2xl bg-zinc-950/90 backdrop-blur-xl border border-white/15 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {screenshots.map((screen, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative h-16 w-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedIndex === idx
                      ? "border-white scale-110 shadow-lg ring-2 ring-white/30"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={screen}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
