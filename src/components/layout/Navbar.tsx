"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ExternalLink, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { STUDIO_INFO } from "@/data/studioInfo";
import { SoundToggle } from "@/components/effects/SoundEffects";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<"products" | "studio" | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();

  const productLinks = [
    { name: "Blok Dünyası", href: "/products/blok-dunyasi" },
    { name: "LingoRise", href: "/products/lingorise" },
    { name: "Benim Notlarım", href: "/products/benim-notlarim" },
  ];
  const studioLinks = [
    { name: "Hakkında", href: "/about" },
    { name: "Press Kit", href: "/press" },
  ];
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

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

  useEffect(() => {
    if (mobileMenuOpen) firstMobileLinkRef.current?.focus();
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[var(--background)]/90 backdrop-blur-xl">
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
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-wider text-xl text-white group-hover:text-zinc-300 transition-colors uppercase">
              {STUDIO_INFO.name}
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
              Mobil Oyun & Uygulamalar
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8" aria-label="Ana navigasyon">
          <div className="relative">
            <button
              type="button"
              aria-expanded={openMenu === "products"}
              aria-haspopup="menu"
              onClick={() => setOpenMenu(openMenu === "products" ? null : "products")}
              className={`inline-flex items-center gap-1.5 ${isActive("/products") || isActive("/games") || isActive("/apps") ? "text-white" : "text-zinc-300 hover:text-white"} text-sm font-medium tracking-wide transition-colors`}
            >
              Ürünler <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMenu === "products" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "products" && (
              <div role="menu" className="absolute left-0 top-full mt-4 w-64 rounded-2xl border border-white/15 bg-[#121215] p-2 shadow-2xl shadow-black/50">
                <Link href="/products" role="menuitem" onClick={() => setOpenMenu(null)} aria-current={pathname === "/products" ? "page" : undefined} className="block rounded-xl px-3 py-2.5 text-sm font-semibold text-white hover:bg-white/10">Tüm Ürünler</Link>
                {productLinks.map((link) => (
                  <Link key={link.href} href={link.href} role="menuitem" onClick={() => setOpenMenu(null)} aria-current={isActive(link.href) ? "page" : undefined} className={`block rounded-xl px-3 py-2.5 text-sm ${isActive(link.href) ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/10 hover:text-white"}`}>{link.name}</Link>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              type="button"
              aria-expanded={openMenu === "studio"}
              aria-haspopup="menu"
              onClick={() => setOpenMenu(openMenu === "studio" ? null : "studio")}
              className={`inline-flex items-center gap-1.5 ${isActive("/about") || isActive("/press") ? "text-white" : "text-zinc-300 hover:text-white"} text-sm font-medium tracking-wide transition-colors`}
            >
              Stüdyo <ChevronDown className={`h-3.5 w-3.5 transition-transform ${openMenu === "studio" ? "rotate-180" : ""}`} />
            </button>
            {openMenu === "studio" && (
              <div role="menu" className="absolute left-0 top-full mt-4 w-48 rounded-2xl border border-white/15 bg-[#121215] p-2 shadow-2xl shadow-black/50">
                {studioLinks.map((link) => (
                  <Link key={link.href} href={link.href} role="menuitem" onClick={() => setOpenMenu(null)} aria-current={isActive(link.href) ? "page" : undefined} className={`block rounded-xl px-3 py-2.5 text-sm ${isActive(link.href) ? "bg-white/10 text-white" : "text-zinc-300 hover:bg-white/10 hover:text-white"}`}>{link.name}</Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Action Buttons & Sound Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <SoundToggle />

          <a
            href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-zinc-950 hover:bg-zinc-200 shadow-xl shadow-white/5 transition-all hover:scale-105"
          >
            <span>Google Play</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={menuButtonRef}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-xl p-2 text-zinc-400 hover:bg-white/10 hover:text-white lg:hidden"
          aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div id="mobile-navigation" role="navigation" aria-label="Mobil navigasyon" className="lg:hidden border-t border-white/10 bg-[var(--background)] px-4 pt-4 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            <Link ref={firstMobileLinkRef} href="/products" onClick={() => setMobileMenuOpen(false)} aria-current={pathname === "/products" ? "page" : undefined} className={`rounded-lg px-3 py-2 text-sm font-semibold ${pathname === "/products" ? "bg-white/10 text-white" : "text-zinc-200 hover:bg-white/5 hover:text-white"}`}>Tüm Ürünler</Link>
            <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">Ürünler</p>
            {productLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} aria-current={isActive(link.href) ? "page" : undefined} className={`rounded-lg border-l-2 px-3 py-2 text-sm font-medium ${isActive(link.href) ? "border-orange-400 bg-white/10 text-white" : "border-transparent text-zinc-300 hover:bg-white/5 hover:text-white"}`}>{link.name}</Link>
            ))}
            <p className="px-3 pt-2 text-xs font-semibold uppercase tracking-widest text-zinc-500">Stüdyo</p>
            {studioLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileMenuOpen(false)} aria-current={isActive(link.href) ? "page" : undefined} className={`rounded-lg border-l-2 px-3 py-2 text-sm font-medium ${isActive(link.href) ? "border-sky-400 bg-white/10 text-white" : "border-transparent text-zinc-300 hover:bg-white/5 hover:text-white"}`}>{link.name}</Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <a
              href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-white py-3 text-xs font-bold text-zinc-950"
            >
              <span>Google Play&apos;de Oyna</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
