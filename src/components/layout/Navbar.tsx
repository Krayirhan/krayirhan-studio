"use client";

import Link from "next/link";
import { useState } from "react";
import { Gamepad2, Menu, X, ExternalLink, Sparkles, Smartphone, Box } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Tüm Ürünler", href: "/products" },
    { name: "Oyunlar", href: "/games" },
    { name: "Uygulamalar", href: "/apps" },
    { name: "Press Kit", href: "/press" },
    { name: "Stüdyo", href: "/about" },
    { name: "İletişim", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800/80 bg-[#07090e]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition-transform">
            <Box className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-wider text-xl text-white group-hover:text-indigo-300 transition-colors uppercase">
              {STUDIO_INFO.name}
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-cyan-400 uppercase">
              Games & Digital Products
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors tracking-wide hover:underline decoration-indigo-500 underline-offset-8"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Portfolio Backlink */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={STUDIO_INFO.founder.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-900/60 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:border-indigo-500 hover:bg-slate-800/80 transition-all"
            title="Kişisel Portfolio ve CV Sitesine Git"
          >
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Kişisel CV</span>
            <ExternalLink className="h-3 w-3 text-slate-400" />
          </a>

          <Link
            href="/products"
            className="flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all"
          >
            Kataloğu Gör
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white md:hidden"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-[#07090e] px-4 pt-2 pb-6 md:hidden">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-slate-200 hover:bg-slate-800 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <a
                href={STUDIO_INFO.founder.portfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-semibold text-slate-200"
              >
                <Sparkles className="h-4 w-4 text-indigo-400" />
                <span>Kişisel CV & Portfolyo (krayirhan.com)</span>
                <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
