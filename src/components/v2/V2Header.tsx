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
        href="/"
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
            className="h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(212,163,89,0.45)]"
          />
        </div>
        <div className="flex flex-col leading-tight">
          <span className="font-serif text-lg sm:text-xl font-bold tracking-[.25em] text-[#fff9ed] transition-colors group-hover:text-[#f8deb1]">
            KRAYIRHAN
          </span>
          <span className="text-[9px] font-semibold tracking-[.48em] text-[#d4a359]">
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
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[#f4d193]"
          >
            <span>Ürünler</span>
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                productsOpen ? "rotate-180 text-[#d4a359]" : ""
              }`}
            />
          </button>

          {productsOpen && (
            <div className="absolute left-0 top-full mt-3 w-52 rounded-xl border border-[#d4a359]/30 bg-[#0d1014]/95 p-2 shadow-2xl backdrop-blur-xl animate-[fadeIn_0.15s_ease-out]">
              <a
                href="#projeler"
                onClick={() => setProductsOpen(false)}
                className="block rounded-lg px-3.5 py-2.5 text-xs text-[#f5f2eb] transition hover:bg-[#d4a359]/15 hover:text-[#f7dc9f]"
              >
                🎮 Blok Dünyası
              </a>
              <a
                href="#projeler"
                onClick={() => setProductsOpen(false)}
                className="block rounded-lg px-3.5 py-2.5 text-xs text-[#f5f2eb] transition hover:bg-[#d4a359]/15 hover:text-[#f7dc9f]"
              >
                🌱 LingoRise
              </a>
              <a
                href="#projeler"
                onClick={() => setProductsOpen(false)}
                className="block rounded-lg px-3.5 py-2.5 text-xs text-[#f5f2eb] transition hover:bg-[#d4a359]/15 hover:text-[#f7dc9f]"
              >
                ✍️ Benim Notlarım
              </a>
              <div className="my-1 border-t border-white/10" />
              <Link
                href="/products"
                onClick={() => setProductsOpen(false)}
                className="block rounded-lg px-3.5 py-2 text-[11px] font-semibold text-[#d4a359] hover:underline"
              >
                Tüm Ürünleri Görüntüle →
              </Link>
            </div>
          )}
        </div>

        <a href="#felsefe" className="transition-colors hover:text-[#f4d193]">
          Stüdyo
        </a>
        <Link href="/about" className="transition-colors hover:text-[#f4d193]">
          Hakkında
        </Link>
        <a
          href="mailto:contact@krayirhan.com"
          className="transition-colors hover:text-[#f4d193]"
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
          className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#dca757] via-[#eec578] to-[#cca04f] px-5 py-2.5 text-xs font-bold tracking-wide text-[#140e06] shadow-[0_4px_18px_rgba(212,163,89,0.3)] transition hover:brightness-110 hover:-translate-y-0.5"
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
          className="relative z-50 rounded-lg border border-[#d4a359]/50 bg-[#0d1014]/90 p-2 text-[#e4bb79] transition hover:border-[#f1c479] hover:text-[#fff0d0] lg:hidden"
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
            className="fixed inset-x-0 top-0 z-45 max-h-[90vh] overflow-y-auto border-b border-[#d4a359]/30 bg-[#0a0c10] px-6 pb-8 pt-24 shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col space-y-3">
              <a
                href="#projeler"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border-l-2 border-[#d4a359] bg-[#12161d] px-4 py-3 text-sm font-semibold text-[#fff9ed]"
              >
                Ürünlerimiz (Blok Dünyası, LingoRise, Benim Notlarım)
              </a>
              <a
                href="#felsefe"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border-l-2 border-transparent px-4 py-3 text-sm font-medium text-[#d5d0c7] hover:border-[#d4a359] hover:bg-[#12161d]"
              >
                Stüdyo Felsefemiz
              </a>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border-l-2 border-transparent px-4 py-3 text-sm font-medium text-[#d5d0c7] hover:border-[#d4a359] hover:bg-[#12161d]"
              >
                Hakkımızda
              </Link>
              <a
                href="mailto:contact@krayirhan.com"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg border-l-2 border-transparent px-4 py-3 text-sm font-medium text-[#d5d0c7] hover:border-[#d4a359] hover:bg-[#12161d]"
              >
                İletişim
              </a>
            </nav>

            <div className="mt-6 border-t border-[#d4a359]/20 pt-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
                target="_blank"
                rel="noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#dca757] via-[#eec578] to-[#cca04f] py-3.5 text-xs font-bold text-[#140e06] shadow-lg"
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
