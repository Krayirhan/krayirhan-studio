"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gamepad2, Play, Smartphone } from "lucide-react";
import { PRODUCTS } from "@/data/games";
import { V2Header } from "@/components/v2/V2Header";
import { V2Footer } from "@/components/v2/V2Footer";

export default function V2ProductsPage() {
  const [filter, setFilter] = useState<"all" | "game" | "app">("all");

  const filteredProducts = PRODUCTS.filter((p) => {
    if (filter === "game") return p.type === "game";
    if (filter === "app") return p.type === "app";
    return true;
  });

  return (
    <div className="v2-page min-h-screen bg-[#080a0d] text-[#f5f2eb] selection:bg-white selection:text-black flex flex-col justify-between">
      <V2Header />

      <main className="v2-content pb-24">
        {/* Open Top Header Banner */}
        <div className="relative w-full border-b border-white/10 bg-gradient-to-b from-[#11141a] via-[#0b0e12] to-[#080a0d] py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 text-center max-w-3xl space-y-4">
            <p className="text-xs font-semibold tracking-[0.24em] text-neutral-400 uppercase">
              Ürün Portföyümüz
            </p>
            <h1 className="v2-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#fbf8f2] tracking-tight">
              Tüm Oyunlar & Uygulamalar
            </h1>
            <p className="text-sm sm:text-base leading-relaxed text-[#b5b0a4]">
              Krayirhan Studio bünyesinde geliştirilen bağımsız mobil oyunlar, pratik uygulamalar ve dijital çözümler.
            </p>

            {/* Filter Tabs */}
            <div className="pt-6 flex items-center justify-center gap-2.5">
              <button
                type="button"
                onClick={() => setFilter("all")}
                className={`rounded-xl px-5 py-2.5 text-xs font-bold tracking-wide transition-all cursor-pointer border ${
                  filter === "all"
                    ? "border-white bg-white text-black shadow-lg"
                    : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/25 hover:text-white"
                }`}
              >
                Tümü ({PRODUCTS.length})
              </button>
              <button
                type="button"
                onClick={() => setFilter("game")}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold tracking-wide transition-all cursor-pointer border ${
                  filter === "game"
                    ? "border-white bg-white text-black shadow-lg"
                    : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/25 hover:text-white"
                }`}
              >
                <Gamepad2 className="h-3.5 w-3.5" />
                <span>Oyunlar</span>
              </button>
              <button
                type="button"
                onClick={() => setFilter("app")}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-bold tracking-wide transition-all cursor-pointer border ${
                  filter === "app"
                    ? "border-white bg-white text-black shadow-lg"
                    : "border-white/10 bg-white/[0.02] text-neutral-400 hover:border-white/25 hover:text-white"
                }`}
              >
                <Smartphone className="h-3.5 w-3.5" />
                <span>Uygulamalar</span>
              </button>
            </div>
          </div>
        </div>

        {/* Product Rows (Cardless Open Flow, Separated by Subtle Borders) */}
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 divide-y divide-white/10">
          {filteredProducts.map((product, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={product.id}
                className="py-16 sm:py-20"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}
                >
                  {/* Info Column */}
                  <div className={`space-y-6 lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-neutral-400">
                      <span className="inline-flex items-center gap-1.5 text-neutral-300">
                        {product.type === "game" ? (
                          <Gamepad2 className="h-3.5 w-3.5" />
                        ) : (
                          <Smartphone className="h-3.5 w-3.5" />
                        )}
                        <span>{product.type === "game" ? "Mobil Oyun" : "Mobil Uygulama"}</span>
                      </span>
                      <span>·</span>
                      <span className="text-neutral-300">{product.status}</span>
                      <span>·</span>
                      <span>{product.platforms.join(", ")}</span>
                    </div>

                    <div>
                      <h2 className="v2-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#fbf8f2]">
                        {product.title}
                      </h2>
                      <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#b5b0a4]">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Features list with simple bullets (no cards) */}
                    <div className="space-y-2.5 pt-2 border-t border-white/10">
                      {product.features?.slice(0, 4).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                          <span>{feat.split(":")[0]}</span>
                        </div>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                      <Link
                        href={`/v2/products/${product.slug}`}
                        className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3.5 text-xs font-bold text-black shadow-lg hover:bg-neutral-200 transition"
                      >
                        <span>Detayları İncele</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      {product.links.playStore && (
                        <a
                          href={product.links.playStore}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-5 py-3.5 text-xs font-semibold text-white hover:bg-white/10 hover:border-white/40 transition"
                        >
                          <Play className="h-3.5 w-3.5 fill-current" />
                          <span>Google Play</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Visuals Column (2 Phone Mockups floating in open space) */}
                  <div
                    className={`lg:col-span-6 flex items-center justify-center gap-4 sm:gap-7 py-4 select-none ${
                      isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    {/* Phone 1: Primary Screen */}
                    <div className="w-1/2 max-w-[210px] sm:max-w-[240px] -rotate-3 transform transition-all duration-500 hover:-rotate-1 hover:scale-105">
                      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem] sm:rounded-[2.6rem] border-2 border-[#2b313d] bg-[#0c0e12] p-1.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]">
                        <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] bg-black">
                          <Image
                            src={product.coverImage}
                            alt={`${product.title} Ekran 1`}
                            fill
                            sizes="(max-width: 1024px) 45vw, 240px"
                            className="object-contain"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />
                        </div>
                      </div>
                    </div>

                    {/* Phone 2: Secondary Screen */}
                    <div className="w-1/2 max-w-[210px] sm:max-w-[240px] rotate-3 mt-8 sm:mt-12 transform transition-all duration-500 hover:rotate-1 hover:scale-105">
                      <div className="relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem] sm:rounded-[2.6rem] border-2 border-[#2b313d] bg-[#0c0e12] p-1.5 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)]">
                        <div className="relative h-full w-full overflow-hidden rounded-[1.8rem] sm:rounded-[2.2rem] bg-black">
                          <Image
                            src={product.screenshots[1] || product.coverImage}
                            alt={`${product.title} Ekran 2`}
                            fill
                            sizes="(max-width: 1024px) 45vw, 240px"
                            className="object-contain"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <V2Footer />
    </div>
  );
}
