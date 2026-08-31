"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { PRODUCTS } from "@/data/games";

export function V2Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isProductsActive = pathname?.startsWith("/v2/products");
  const isAboutActive = pathname === "/v2/about";

  // Close menu on Escape key
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
    <header className="v2-header sticky top-0 z-50 w-full border-b border-white/10 bg-[#080a0d]/90 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Brand: Gilded Stag Logo + Typography */}
        <Link
          href="/v2"
          className="group flex items-center gap-3.5"
          aria-label="Krayirhan Studio Ana Sayfası"
        >
          <div className="relative flex h-10 w-10 items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/brand/krayirhan-stag-gold.png"
              alt="Krayirhan Studio Amblemi"
              width={40}
              height={40}
              priority
              className="h-9 w-auto object-contain drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-bold tracking-[.25em] text-white transition-colors group-hover:text-neutral-300">
              KRAYIRHAN
            </span>
            <span className="text-[8px] font-semibold tracking-[.48em] text-neutral-400">
              STUDIO
            </span>
          </div>
        </Link>

        {/* Center Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 text-xs font-semibold tracking-wider text-[#d5d0c7] lg:flex"
          aria-label="V2 Masaüstü Menüsü"
        >
          {/* Products Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setProductsOpen((prev) => !prev)}
              aria-expanded={productsOpen}
              className={`inline-flex items-center gap-1.5 transition-colors cursor-pointer ${
                isProductsActive ? "text-white font-bold" : "hover:text-white"
              }`}
            >
              <span>Ürünler</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  productsOpen ? "rotate-180 text-white" : "opacity-70"
                }`}
              />
            </button>

            {productsOpen && (
              <div className="absolute left-0 top-full mt-3 w-72 rounded-xl border border-white/15 bg-[#0d1014]/98 p-2 shadow-2xl backdrop-blur-2xl animate-[fadeIn_0.15s_ease-out]">
                <Link
                  href="/v2/products"
                  onClick={() => setProductsOpen(false)}
                  className="block rounded-lg px-3.5 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition"
                >
                  Tüm Ürünleri Gör →
                </Link>
                <div className="my-1 border-t border-white/10" />
                {PRODUCTS.map((product) => (
                  <Link
                    key={product.id}
                    href={`/v2/products/${product.slug}`}
                    onClick={() => setProductsOpen(false)}
                    className="flex items-center justify-between gap-3 rounded-lg px-3.5 py-2.5 text-xs text-[#ded9ce] transition hover:bg-white/10 hover:text-white"
                  >
                    <span>{product.type === "game" ? "🎮" : "📱"} {product.title}</span>
                    <span className="shrink-0 text-[10px] text-neutral-500">{product.status}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/v2/about"
            className={`transition-colors ${isAboutActive ? "text-white font-bold" : "hover:text-white"}`}
          >
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
          <Link
            href="/v2/products"
            className="hidden sm:inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold tracking-wide text-black shadow-lg transition hover:bg-neutral-200 hover:-translate-y-0.5"
          >
            <span>{PRODUCTS.length} ürün</span>
            <span aria-hidden="true">→</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="rounded-lg border border-white/20 bg-white/5 p-2 text-white transition hover:bg-white/10 lg:hidden cursor-pointer"
            aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={mobileMenuOpen}
            aria-controls="v2-mobile-nav"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-20 z-40 bg-black/80 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div
            id="v2-mobile-nav"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil Gezinti"
            className="fixed inset-x-0 top-20 z-50 max-h-[85vh] overflow-y-auto border-b border-white/15 bg-[#080a0d]/98 px-6 pb-8 pt-5 shadow-2xl lg:hidden animate-[fadeIn_0.15s_ease-out]"
          >
            <nav className="flex flex-col space-y-2.5">
              <Link
                href="/v2/products"
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-bold transition ${
                  isProductsActive
                    ? "border-l-2 border-white bg-white/10 text-white"
                    : "text-[#ded9ce] hover:bg-white/5 hover:text-white"
                }`}
              >
                Tüm Ürünler
              </Link>

              <div className="pl-4 space-y-1 border-l border-white/10 ml-2">
                {PRODUCTS.map((product) => (
                  <Link
                    key={product.id}
                    href={`/v2/products/${product.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between gap-3 rounded-md px-3 py-2 text-xs text-neutral-300 hover:text-white hover:bg-white/5"
                  >
                    <span>{product.type === "game" ? "🎮" : "📱"} {product.title}</span>
                    <span className="shrink-0 text-[10px] text-neutral-500">{product.status}</span>
                  </Link>
                ))}
              </div>

              <Link
                href="/v2/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isAboutActive
                    ? "border-l-2 border-white bg-white/10 text-white font-bold"
                    : "text-[#ded9ce] hover:bg-white/5 hover:text-white"
                }`}
              >
                Hakkımızda
              </Link>
              <a
                href="mailto:contact@krayirhan.com"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-[#ded9ce] hover:bg-white/5 hover:text-white transition"
              >
                İletişim
              </a>
            </nav>

            <div className="mt-6 border-t border-white/10 pt-5">
              <Link
                href="/v2/products"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-white py-3.5 text-xs font-bold text-black shadow-lg hover:bg-neutral-200 transition"
              >
                <span>Tüm ürünleri incele</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
