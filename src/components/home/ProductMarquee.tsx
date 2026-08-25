"use client";

import Link from "next/link";
import { PRODUCTS } from "@/data/games";
import { Gamepad2, Smartphone, Download, ExternalLink, ArrowRight } from "lucide-react";

export function ProductMarquee() {
  // Duplicate list twice for seamless 100% to -50% infinite loop
  const marqueeItems = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

  return (
    <section className="relative w-full overflow-hidden border-b border-white/10 bg-[#0c0c0f] py-8">
      {/* Top Header / Subtle Section Label */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Canlı Ürün Akışı</span>
        </div>

        <Link
          href="/products"
          className="text-xs font-semibold text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
        >
          <span>Tüm Katalog ({PRODUCTS.length})</span>
          <ArrowRight className="h-3 w-3" />
        </Link>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Gradient Mask */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-16 sm:w-32 bg-gradient-to-r from-[#0c0c0f] to-transparent" />

        {/* Right Fade Gradient Mask */}
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-16 sm:w-32 bg-gradient-to-l from-[#0c0c0f] to-transparent" />

        {/* Continuous Scrolling Strip */}
        <div className="animate-marquee flex items-center gap-5">
          {marqueeItems.map((product, idx) => (
            <Link
              key={`${product.id}-${idx}`}
              href={`/products/${product.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-[#121215] px-5 py-3.5 shadow-lg hover:border-white/30 hover:bg-[#18181d] transition-all shrink-0 cursor-pointer"
            >
              {/* Product Mini Mockup / Thumbnail */}
              <div className="relative h-14 w-12 rounded-xl overflow-hidden border border-white/15 bg-black p-0.5 shadow-sm group-hover:scale-105 transition-transform shrink-0">
                <img
                  src={product.coverImage}
                  alt={product.title}
                  className="h-full w-full object-cover object-top rounded-lg"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-col space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white group-hover:text-zinc-200 transition-colors">
                    {product.title}
                  </span>
                  <span className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-zinc-300">
                    {product.type === "game" ? "Oyun" : "Uygulama"}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span>{product.category[0]}</span>
                  <span>·</span>
                  <span className="text-emerald-400 font-medium">{product.status}</span>
                </div>
              </div>

              {/* View Arrow */}
              <div className="ml-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-zinc-400 group-hover:bg-white group-hover:text-zinc-950 group-hover:border-white transition-all shrink-0">
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
