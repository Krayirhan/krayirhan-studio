"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ExternalLink, Menu, Play, X } from "lucide-react";

export function V2Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menu on Escape key and restore focus
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
        setProductsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Click outside to close products dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="relative z-50 mx-auto flex h-24 max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">
      {/* Brand: Gilded Stag Logo + Typography */}
      <Link
        href="/v2"
        className="group flex items-center gap-3.5"
        aria-label="Krayirhan Studio Ana Sayfası"
      >
        <div className="relative flex h-11 w-11 items-center justify-center transition-transform duration-300 group-hover:scale-105">
          <Image
            src="/brand/krayirhan-stag-gold.png"
            alt="Krayirhan Studio Amblemi"
            width={44}
            height={44}
            priority
            className="h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]"
          />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-serif text-lg sm:text-xl font-bold tracking-[.25em] text-white transition-colors group-hover:text-neutral-300">
            KRAYIRHAN
          </span>
          <span className="text-[9px] font-semibold tracking-[.48em] text-neutral-400">
            STUDIO
          </span>
        </div>
      </Link>

      {/* Center Desktop Navigation */}
      <nav
        className="hidden items-center gap-9 text-xs font-semibold tracking-wider text-[#d5d0c7] lg:flex"
        aria-label="V2 Masaüstü Menüsü"
      >
        {/* Products Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setProductsOpen((prev) => !prev)}
            aria-expanded={productsOpen}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <span>Ürünler</span>
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                productsOpen ? "rotate-180 text-white" : ""
              }`}
            />
          </button>

          {productsOpen && (
            <div className="absolute left-0 top-full mt-3 w-52 rounded-xl border border-white/15 bg-[#0d1014]/95 p-2 shadow-2xl backdrop-blur-xl animate-[fadeIn_0.15s_ease-out]">
              <Link
                href="/v2/products/blok-dunyasi"
                onClick={() => setProductsOpen(false)}
                className="block rounded-lg px-3.5 py-2.5 text-xs text-[#f5f2eb] transition hover:bg-white/10 hover:text-white"
              >
                🎮 Blok Dünyası
              </Link>
              <Link
                href="/v2/products/lingorise"
                onClick={() => setProductsOpen(false)}
                className="block rounded-lg px-3.5 py-2.5 text-xs text-[#f5f2eb] transition hover:bg-white/10 hover:text-white"
              >
                🌱 LingoRise
              </Link>
              <Link
                href="/v2/products/benim-notlarim"
                onClick={() => setProductsOpen(false)}
                className="block rounded-lg px-3.5 py-2.5 text-xs text-[#f5f2eb] transition hover:bg-white/10 hover:text-white"
              >
                ✍️ Benim Notlarım
              </Link>
              <div className="my-1 border-t border-white/10" />
              <Link
                href="/v2/products"
                onClick={() => setProductsOpen(false)}
                className="block rounded-lg px-3.5 py-2 text-[11px] font-semibold text-white hover:underline"
              >
                Tüm Ürünleri Görüntüle →
              </Link>
            </div>
          )}
        </div>

        <Link href="/v2#felsefe" className="transition-colors hover:text-white">
          Stüdyo
        </Link>
        <Link href="/v2/about" className="transition-colors hover:text-white">
          Hakkında
        </Link>
        <a
          href="mailto:contact@krayirhan.com"
          className="transition-colors hover:text-white"
        >
          İletişim
        </a>
      </nav>

      {/* Right Desktop Action Button */}
      <div className="flex items-center gap-3">
        <a
          href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold tracking-wide text-black shadow-[0_4px_18px_rgba(255,255,255,0.15)] transition hover:bg-neutral-200 hover:-translate-y-0.5"
        >
          <Play className="h-3.5 w-3.5 fill-current" />
          <span>Google Play</span>
          <ExternalLink className="h-3 w-3 opacity-70" />
        </a>

        {/* Mobile Hamburger Toggle */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="relative z-50 rounded-lg border border-white/20 bg-[#0d1014]/90 p-2 text-white transition hover:border-white/40 hover:bg-white/10 lg:hidden"
          aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileMenuOpen}
          aria-controls="v2-mobile-nav"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div
            id="v2-mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil Gezinti"
            className="fixed inset-x-0 top-0 z-45 max-h-[90vh] overflow-y-auto border-b border-white/15 bg-[#0a0c10] px-6 pb-8 pt-24 shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col space-y-3">
              <Link
                href="/v2/products"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border-l-2 border-white bg-[#141820] px-4 py-3 text-sm font-semibold text-white"
              >
                Ürünlerimiz (Blok Dünyası, LingoRise, Benim Notlarım)
              </Link>
              <Link
                href="/v2#felsefe"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border-l-2 border-transparent px-4 py-3 text-sm font-medium text-[#d5d0c7] hover:border-white/50 hover:bg-[#12161d]"
              >
                Stüdyo Felsefemiz
              </Link>
              <Link
                href="/v2/about"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border-l-2 border-transparent px-4 py-3 text-sm font-medium text-[#d5d0c7] hover:border-white/50 hover:bg-[#12161d]"
              >
                Hakkımızda
              </Link>
              <a
                href="mailto:contact@krayirhan.com"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border-l-2 border-transparent px-4 py-3 text-sm font-medium text-[#d5d0c7] hover:border-white/50 hover:bg-[#12161d]"
              >
                İletişim
              </a>
            </nav>

            <div className="mt-6 border-t border-white/10 pt-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-white py-3.5 text-xs font-bold text-black shadow-lg hover:bg-neutral-200 transition"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                <span>Google Play Mağazası</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-70" />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
