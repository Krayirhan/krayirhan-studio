"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";
import { SoundToggle } from "@/components/effects/SoundEffects";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Blok Dünyası", href: "/products/blok-dunyasi" },
    { name: "LingoRise", href: "/products/lingorise" },
    { name: "Benim Notlarım", href: "/products/benim-notlarim" },
    { name: "Tüm Ürünler", href: "/products" },
    { name: "Stüdyo Hakkında", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#08080a]/90 backdrop-blur-xl">
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
        <nav className="hidden lg:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Sound Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          <SoundToggle />

          <a
            href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-zinc-950 hover:bg-zinc-200 shadow-xl shadow-white/5 transition-all hover:scale-105"
          >
            <span>Google Play</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
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
        <div id="mobile-navigation" className="lg:hidden border-t border-white/10 bg-[#08080a] px-4 pt-4 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                {link.name}
              </Link>
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
