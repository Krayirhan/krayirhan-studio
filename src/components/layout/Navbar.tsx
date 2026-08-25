"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ExternalLink, Sparkles } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";
import { SoundToggle } from "@/components/effects/SoundEffects";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Blok Dünyası", href: "/products/blok-dunyasi" },
    { name: "LingoRise", href: "/products/lingorise" },
    { name: "Tüm Ürünler", href: "/products" },
    { name: "Press Kit", href: "/press" },
    { name: "Stüdyo Hakkında", href: "/about" },
    { name: "İletişim", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#09090b]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full overflow-hidden border border-white/20 bg-white shadow-md group-hover:scale-105 group-hover:border-white transition-all p-0.5">
            <img
              src="/brand/logo.png"
              alt="Krayirhan Studio Logo"
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-wider text-xl text-white group-hover:text-zinc-300 transition-colors uppercase">
              {STUDIO_INFO.name}
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
              Games & Digital Products
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7">
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

        {/* Action Buttons, Sound Toggle & Portfolio Backlink */}
        <div className="hidden md:flex items-center gap-3">
          <SoundToggle />

          <a
            href={STUDIO_INFO.founder.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-semibold text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/10 transition-all"
            title="Kişisel Portfolio ve CV Sitesine Git"
          >
            <Sparkles className="h-3.5 w-3.5 text-zinc-300" />
            <span>Kişisel CV</span>
            <ExternalLink className="h-3 w-3 text-zinc-500" />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl bg-white px-4 py-2 text-xs font-bold text-zinc-950 hover:bg-zinc-200 shadow-md shadow-white/5 transition-all"
          >
            <span>Play Store</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-xl p-2 text-zinc-400 hover:bg-white/10 hover:text-white md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#09090b] px-4 pt-4 pb-6 space-y-3">
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

          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <a
              href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-white py-3 text-xs font-bold text-zinc-950"
            >
              <span>Play Store'da Oyna</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
