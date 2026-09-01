"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ExternalLink, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { STUDIO_INFO } from "@/data/studioInfo";
import { SoundToggle } from "@/components/effects/SoundEffects";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"products" | "studio" | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  // If on a V2 route, do not render V1 Navbar to avoid double headers
  if (pathname?.startsWith("/v2")) {
    return null;
  }

  const productLinks = [
    { name: "Blok Dünyası", href: "/products/blok-dunyasi" },
    { name: "LingoRise", href: "/products/lingorise" },
    { name: "Benim Notlarım", href: "/products/benim-notlarim" },
  ];
  const studioLinks = [
    { name: "Hakkında", href: "/about" },
  ];
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(null);
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      firstMobileLinkRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0d0b]/90 backdrop-blur-xl transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full overflow-hidden border border-white/20 bg-white shadow-md group-hover:scale-105 group-hover:border-white transition-all p-0.5">
            <Image
              src="/brand/logo.png"
              alt="Krayirhan Studio logosu"
              fill
              sizes="44px"
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display font-bold tracking-wider text-xl text-white group-hover:text-zinc-300 transition-colors uppercase">
              {STUDIO_INFO.name}
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
              Mobil Oyun & Uygulamalar
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Ana navigasyon">
          {/* Products Dropdown */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={openMenu === "products"}
              aria-haspopup="menu"
              onClick={() => setOpenMenu(openMenu === "products" ? null : "products")}
              className={`inline-flex items-center gap-1.5 ${
                isActive("/products") || isActive("/games") || isActive("/apps")
                  ? "text-white font-semibold"
                  : "text-zinc-300 hover:text-white"
              } text-sm font-medium tracking-wide transition-colors cursor-pointer`}
            >
              <span>Ürünler</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  openMenu === "products" ? "rotate-180 text-white" : "opacity-70"
                }`}
              />
            </button>
            {openMenu === "products" && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-3 w-60 rounded-2xl border border-white/15 bg-[#121418]/95 p-2 shadow-2xl backdrop-blur-xl animate-[fadeIn_0.15s_ease-out]"
              >
                <Link
                  href="/products"
                  role="menuitem"
                  onClick={() => setOpenMenu(null)}
                  className="block rounded-xl px-3.5 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition"
                >
                  Tüm Ürünleri İncele →
                </Link>
                <div className="my-1 border-t border-white/10" />
                {productLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setOpenMenu(null)}
                    className={`block rounded-xl px-3.5 py-2 text-xs font-medium transition ${
                      isActive(link.href)
                        ? "bg-white/10 text-white font-semibold"
                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Studio Dropdown */}
          <div className="relative">
            <button
              type="button"
              aria-expanded={openMenu === "studio"}
              aria-haspopup="menu"
              onClick={() => setOpenMenu(openMenu === "studio" ? null : "studio")}
              className={`inline-flex items-center gap-1.5 ${
                isActive("/about")
                  ? "text-white font-semibold"
                  : "text-zinc-300 hover:text-white"
              } text-sm font-medium tracking-wide transition-colors cursor-pointer`}
            >
              <span>Stüdyo</span>
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  openMenu === "studio" ? "rotate-180 text-white" : "opacity-70"
                }`}
              />
            </button>
            {openMenu === "studio" && (
              <div
                role="menu"
                className="absolute left-0 top-full mt-3 w-48 rounded-2xl border border-white/15 bg-[#121418]/95 p-2 shadow-2xl backdrop-blur-xl animate-[fadeIn_0.15s_ease-out]"
              >
                {studioLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setOpenMenu(null)}
                    className={`block rounded-xl px-3.5 py-2.5 text-xs font-medium transition ${
                      isActive(link.href)
                        ? "bg-white/10 text-white font-semibold"
                        : "text-zinc-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Action Buttons & Sound Toggle */}
        <div className="hidden md:flex items-center gap-3">
          <SoundToggle />

          <a
            href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-black hover:bg-zinc-200 shadow-lg shadow-white/5 transition-all hover:scale-105"
          >
            <span>Google Play</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="rounded-xl p-2 text-zinc-300 hover:bg-white/10 hover:text-white md:hidden cursor-pointer"
          aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer & Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 top-20 z-40 bg-black/80 backdrop-blur-sm md:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          <div
            id="mobile-navigation"
            role="navigation"
            aria-label="Mobil navigasyon"
            className="fixed inset-x-0 top-20 z-50 max-h-[85vh] overflow-y-auto border-b border-white/10 bg-[#0a0d0b]/98 px-5 pt-5 pb-8 space-y-4 shadow-2xl md:hidden animate-[fadeIn_0.15s_ease-out]"
          >
            <div className="flex flex-col space-y-2">
              <Link
                ref={firstMobileLinkRef}
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-bold ${
                  pathname === "/products" ? "bg-white/15 text-white" : "text-zinc-200 hover:bg-white/5"
                }`}
              >
                Tüm Ürünler
              </Link>

              <p className="px-4 pt-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                Ürünler
              </p>
              {productLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    isActive(link.href)
                      ? "bg-white/10 text-white font-semibold"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <p className="px-4 pt-3 text-[11px] font-semibold uppercase tracking-widest text-zinc-500">
                Stüdyo
              </p>
              {studioLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                    isActive(link.href)
                      ? "bg-white/10 text-white font-semibold"
                      : "text-zinc-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <SoundToggle />
                <span className="text-xs text-zinc-400">Ses Efektleri</span>
              </div>

              <a
                href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-black shadow-md"
              >
                <span>Google Play</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
