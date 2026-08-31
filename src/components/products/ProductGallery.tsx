"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

interface ProductGalleryProps {
  title: string;
  screenshots: string[];
  variant?: "default" | "v2";
  featuredImage?: string;
}

export function ProductGallery({
  title,
  screenshots,
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
    triggerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const dialog = dialogRef.current;
    const focusable = dialog?.querySelector<HTMLElement>(
      'button, [tabindex]:not([tabindex="-1"])'
    );
    focusable?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || !dialog) return;
      const items = [
        ...dialog.querySelectorAll<HTMLElement>(
          'button, [tabindex]:not([tabindex="-1"])'
        ),
      ];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

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
      <div
        className={`grid gap-3.5 sm:gap-4.5 py-4 ${screenshots.length <= 3
            ? "grid-cols-1 sm:grid-cols-3 max-w-4xl"
            : screenshots.length === 4
              ? "grid-cols-2 sm:grid-cols-4 max-w-5xl"
              : "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          }`}
      >
        {screenshots.map((screen, idx) => (
          <button
            ref={triggerRef}
            key={idx}
            onClick={(event) => {
              triggerRef.current = event.currentTarget;
              openLightbox(idx);
            }}
            type="button"
            aria-label={`${title} görsel ${idx + 1} büyüt`}
            className="group relative flex cursor-pointer items-center justify-center select-none w-full"
          >
            {/* Phone Mockup Frame */}
            <div className="relative w-full rounded-[1.75rem] sm:rounded-[2rem] border-2 border-white/15 bg-[#0a0c10] p-1.5 shadow-[0_16px_36px_rgba(0,0,0,0.6)] ring-1 ring-white/5 transition-all duration-300 group-hover:-translate-y-2 group-hover:border-white/35 group-hover:shadow-[0_24px_48px_rgba(0,0,0,0.85)]">
              {/* Screen Display */}
              <div
                style={{ aspectRatio: "9 / 19.5" }}
                className="relative w-full overflow-hidden rounded-[1.25rem] sm:rounded-[1.5rem] bg-zinc-950"
              >
                <Image
                  src={screen}
                  alt={`${title} Ekran Görüntüsü ${idx + 1}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Screen Glare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.08] pointer-events-none" />

                {/* Interactive Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2.5 backdrop-blur-[2px]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-zinc-950 font-bold shadow-xl group-hover:scale-110 transition-transform">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-bold text-white tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-white/15 border border-white/20">
                    Büyüt
                  </span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          ref={dialogRef}
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
              <span className="text-base font-extrabold text-white tracking-wide">
                {title}
              </span>
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
                  aria-label={`${idx + 1}. görsele git`}
                  aria-current={selectedIndex === idx}
                  className={`relative h-16 w-12 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${selectedIndex === idx
                      ? "border-white scale-110 shadow-lg ring-2 ring-white/30"
                      : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                >
                  <Image
                    src={screen}
                    alt=""
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
