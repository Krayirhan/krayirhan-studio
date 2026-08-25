"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, Sparkles } from "lucide-react";

interface ProductGalleryProps {
  title: string;
  screenshots: string[];
}

export function ProductGallery({ title, screenshots }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  }, []);

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
      {/* Modern Phone Mockup Grid with Ambient Lighting */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
        {screenshots.map((screen, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative flex flex-col items-center justify-center cursor-pointer select-none"
          >
            {/* 1. Ambient Background Glow (Görselin Renklerini Yansıtan Arka Işık) */}
            <div className="absolute inset-0 -m-4 rounded-[3rem] bg-gradient-to-tr from-indigo-500/20 via-cyan-500/15 to-purple-500/20 blur-2xl opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none" />

            {/* 2. Premium Phone Mockup Frame */}
            <div className="relative w-full max-w-[280px] sm:max-w-[300px] rounded-[2.8rem] p-2.5 bg-gradient-to-b from-slate-700/80 via-slate-800/90 to-slate-900 border border-slate-700/70 shadow-2xl shadow-black/80 ring-1 ring-white/10 group-hover:-translate-y-2 group-hover:shadow-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-500">
              
              {/* Top Dynamic Island / Speaker Pill */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 h-3.5 w-20 rounded-full bg-black/90 z-20 flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-slate-800 mr-2" />
                <div className="h-1 w-6 rounded-full bg-slate-900" />
              </div>

              {/* Screen Display */}
              <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.2rem] bg-slate-950 shadow-inner">
                <img
                  src={screen}
                  alt={`${title} Ekran Görüntüsü ${idx + 1}`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Screen Glare / Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />

                {/* Interactive Hover Overlay */}
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3 backdrop-blur-[3px]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500 text-slate-950 font-bold shadow-xl shadow-cyan-500/50 group-hover:scale-110 transition-transform">
                    <ZoomIn className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-extrabold text-white tracking-wider uppercase px-3 py-1 rounded-full bg-black/60 border border-white/10">
                    Büyüt
                  </span>
                </div>
              </div>
            </div>

            {/* Sub-label */}
            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors">
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 select-none animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Top Bar: Title & Counter & Close */}
          <div
            className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-30"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-base font-extrabold text-white tracking-wide">{title}</span>
              <span className="rounded-full bg-slate-800/90 px-3.5 py-1 text-xs font-bold text-cyan-400 border border-slate-700">
                {selectedIndex + 1} / {screenshots.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 hover:scale-105 transition-all border border-slate-700 cursor-pointer shadow-xl"
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
              className="absolute left-4 sm:left-8 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900/90 text-white hover:bg-cyan-600 border border-slate-700/80 hover:border-cyan-400 shadow-2xl hover:scale-110 transition-all cursor-pointer"
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
            {/* Modal Ambient Glow */}
            <div className="absolute inset-0 -m-8 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

            <img
              src={screenshots[selectedIndex]}
              alt={`${title} - Görsel ${selectedIndex + 1}`}
              className="max-h-[82vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl border border-slate-800 ring-1 ring-white/10"
            />
          </div>

          {/* Next Button */}
          {screenshots.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 sm:right-8 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-slate-900/90 text-white hover:bg-cyan-600 border border-slate-700/80 hover:border-cyan-400 shadow-2xl hover:scale-110 transition-all cursor-pointer"
              aria-label="Sonraki Görsel"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}

          {/* Bottom Thumbnails Strip */}
          {screenshots.length > 1 && (
            <div
              className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 max-w-[90vw] overflow-x-auto p-2.5 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-slate-800 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {screenshots.map((screen, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative h-16 w-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedIndex === idx
                      ? "border-cyan-400 scale-110 shadow-lg shadow-cyan-500/40 ring-2 ring-cyan-400/30"
                      : "border-transparent opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={screen}
                    alt={`Thumbnail ${idx + 1}`}
                    className="h-full w-full object-cover"
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
