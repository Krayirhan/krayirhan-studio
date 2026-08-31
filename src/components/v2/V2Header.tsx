"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Menu, X } from "lucide-react";

export function V2Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Close menu on Escape key and restore focus
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Focus the first link when opened
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      firstLinkRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="relative z-40 mx-auto flex h-24 max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">
      {/* Brand Logo & Name */}
      <Link
        href="/"
        className="group flex items-center gap-3"
        aria-label="Krayirhan Studio ana sayfasına dön"
      >
        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#d3a354]/60 bg-black/25 p-1 transition duration-300 group-hover:scale-105 group-hover:border-[#f3ca7d]">
          <Image
            src="/brand/logo.png"
            alt=""
            fill
            sizes="48px"
            className="rounded-full object-cover"
          />
        </div>
        <div className="leading-none">
          <span className="v2-serif block text-lg tracking-[.27em] text-[#fff9ed] transition group-hover:text-[#f8deb1] sm:text-xl">
            KRAYIRHAN
          </span>
          <span className="block pt-1 text-[9px] font-semibold tracking-[.45em] text-[#d9b16d]">
            STUDIO
          </span>
        </div>
      </Link>

      {/* Desktop Navigation */}
      <nav
        className="hidden items-center gap-8 text-[11px] font-semibold tracking-wider text-[#eee8df] lg:flex"
        aria-label="V2 Masaüstü Navigasyonu"
      >
        <a
          className="border-b border-[#d8a958] pb-1 text-[#fff8eb] transition-colors hover:text-[#e7b662]"
          href="#anasayfa"
        >
          ANA SAYFA
        </a>
        <a
          className="pb-1 transition-colors hover:text-[#e7b662]"
          href="#projeler"
        >
          PROJELERİMİZ
        </a>
        <a
          className="pb-1 transition-colors hover:text-[#e7b662]"
          href="#oyunlar"
        >
          OYUNLARIMIZ
        </a>
        <a
          className="pb-1 transition-colors hover:text-[#e7b662]"
          href="#uygulamalar"
        >
          UYGULAMALARIMIZ
        </a>
        <a
          className="pb-1 transition-colors hover:text-[#e7b662]"
          href="#hakkimizda"
        >
          HAKKIMIZDA
        </a>
      </nav>

      {/* Desktop Action Buttons & Mobile Trigger */}
      <div className="flex items-center gap-3">
        <a
          href="mailto:contact@krayirhan.com"
          className="hidden items-center gap-4 rounded-md border border-[#bc8634]/75 bg-[#061018]/60 px-5 py-3 text-[11px] font-semibold tracking-wider text-[#f5e7cd] backdrop-blur-sm transition hover:border-[#f1c479] hover:bg-[#b97e2a]/20 sm:inline-flex"
        >
          BİZE ULAŞIN <ArrowRight className="h-4 w-4 text-[#d6a750]" />
        </a>

        {/* Mobile Menu Toggle Button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative z-50 rounded-md border border-[#bc8634]/60 bg-[#061019]/90 p-2.5 text-[#e4bb79] transition hover:border-[#f1c479] hover:text-[#fff0d0] lg:hidden"
          aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileMenuOpen}
          aria-controls="v2-mobile-nav"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer container */}
          <div
            id="v2-mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil Menü"
            className="fixed inset-x-0 top-0 z-45 max-h-[85vh] overflow-y-auto border-b border-[#c89547]/30 bg-[#061019] px-6 pb-8 pt-24 shadow-2xl shadow-black/90 lg:hidden"
          >
            <nav
              className="flex flex-col space-y-3"
              aria-label="V2 Mobil Bağlantıları"
            >
              <a
                ref={firstLinkRef}
                href="#anasayfa"
                onClick={handleNavClick}
                className="rounded-md border-l-2 border-[#d8a958] bg-[#0c1924]/80 px-4 py-3 text-sm font-semibold tracking-wider text-[#fff9ed] transition hover:bg-[#112433]"
              >
                ANA SAYFA
              </a>
              <a
                href="#projeler"
                onClick={handleNavClick}
                className="rounded-md border-l-2 border-transparent px-4 py-3 text-sm font-medium tracking-wider text-[#dcd7ce] transition hover:border-[#d8a958] hover:bg-[#0c1924]/60 hover:text-white"
              >
                PROJELERİMİZ (TÜMÜ)
              </a>
              <a
                href="#oyunlar"
                onClick={handleNavClick}
                className="rounded-md border-l-2 border-transparent px-4 py-3 text-sm font-medium tracking-wider text-[#dcd7ce] transition hover:border-[#d8a958] hover:bg-[#0c1924]/60 hover:text-white"
              >
                OYUNLARIMIZ
              </a>
              <a
                href="#uygulamalar"
                onClick={handleNavClick}
                className="rounded-md border-l-2 border-transparent px-4 py-3 text-sm font-medium tracking-wider text-[#dcd7ce] transition hover:border-[#d8a958] hover:bg-[#0c1924]/60 hover:text-white"
              >
                UYGULAMALARIMIZ
              </a>
              <a
                href="#hakkimizda"
                onClick={handleNavClick}
                className="rounded-md border-l-2 border-transparent px-4 py-3 text-sm font-medium tracking-wider text-[#dcd7ce] transition hover:border-[#d8a958] hover:bg-[#0c1924]/60 hover:text-white"
              >
                HAKKIMIZDA
              </a>
            </nav>

            {/* Mobile Actions */}
            <div className="mt-6 flex flex-col gap-3 border-t border-[#c89547]/20 pt-6">
              <a
                href="mailto:contact@krayirhan.com"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-3 rounded-md border border-[#bc8634]/75 bg-[#b97e2a]/15 py-3.5 text-xs font-semibold tracking-wider text-[#f5e7cd] transition hover:bg-[#b97e2a]/30"
              >
                <span>BİZE ULAŞIN</span>
                <ArrowRight className="h-4 w-4 text-[#d6a750]" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
                target="_blank"
                rel="noreferrer"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2.5 rounded-md bg-gradient-to-r from-[#d9a34e] to-[#f2ca7c] py-3.5 text-xs font-bold tracking-wider text-[#18110a] shadow-lg transition hover:brightness-110"
              >
                <span>GOOGLE PLAY MAĞAZASI</span>
                <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
