"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

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

  // Keyboard navigation (ESC, Left, Right)
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
      {/* Grid of Screenshots */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {screenshots.map((screen, idx) => (
          <div
            key={idx}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-[9/16] sm:aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-[#0a0f1d] cursor-pointer shadow-lg hover:border-cyan-500/60 hover:shadow-cyan-500/20 hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          >
            <img
              src={screen}
              alt={`${title} Ekran Görüntüsü ${idx + 1}`}
              className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 backdrop-blur-[2px]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-600 text-white shadow-xl shadow-cyan-600/40">
                <ZoomIn className="h-5 w-5" />
              </div>
              <span className="text-xs font-bold text-white tracking-wide">Büyütmek için tıkla</span>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8 select-none"
          onClick={closeLightbox}
        >
          {/* Top Bar: Title & Counter & Close */}
          <div
            className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-bold text-white tracking-wide">{title}</span>
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs font-semibold text-cyan-400 border border-slate-700/60">
                {selectedIndex + 1} / {screenshots.length}
              </span>
            </div>

            <button
              onClick={closeLightbox}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700 transition-all border border-slate-700 cursor-pointer"
              aria-label="Kapat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Previous Button */}
          {screenshots.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 sm:left-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-cyan-600 border border-slate-700/80 hover:border-cyan-500 shadow-2xl transition-all cursor-pointer"
              aria-label="Önceki Görsel"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          )}

          {/* Main Large Image Display */}
          <div
            className="relative max-h-[82vh] max-w-[90vw] flex items-center justify-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={screenshots[selectedIndex]}
              alt={`${title} - Görsel ${selectedIndex + 1}`}
              className="max-h-[82vh] max-w-[90vw] object-contain rounded-xl shadow-2xl border border-slate-800"
            />
          </div>

          {/* Next Button */}
          {screenshots.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 sm:right-8 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-slate-900/80 text-white hover:bg-cyan-600 border border-slate-700/80 hover:border-cyan-500 shadow-2xl transition-all cursor-pointer"
              aria-label="Sonraki Görsel"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          )}

          {/* Bottom Thumbnails Strip */}
          {screenshots.length > 1 && (
            <div
              className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 max-w-[90vw] overflow-x-auto p-2 rounded-2xl bg-slate-900/70 backdrop-blur-md border border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {screenshots.map((screen, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative h-14 w-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedIndex === idx
                      ? "border-cyan-400 scale-105 shadow-md shadow-cyan-500/30"
                      : "border-transparent opacity-60 hover:opacity-100"
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
