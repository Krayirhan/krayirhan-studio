"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/games";
import { Product } from "@/types/game";

const productImages: Record<string, string> = {
  "blok-dunyasi": "/games/blok-dunyasi/gameplay-1.jpg",
  lingorise: "/apps/lingorise/home-garden.png",
  "benim-notlarim": "/apps/benim-notlarim/cover.jpg",
};

export function V2Projects() {
  const [activeFilter, setActiveFilter] = useState<"all" | "game" | "app">("all");

  // Sync filter with URL hash on load and hash change
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === "#oyunlar") {
        setActiveFilter("game");
      } else if (hash === "#uygulamalar") {
        setActiveFilter("app");
      } else if (hash === "#projeler") {
        setActiveFilter("all");
      }
    };

    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeFilter === "game") return product.type === "game";
    if (activeFilter === "app") return product.type === "app";
    return true;
  });

  return (
    <section id="projeler" className="relative mx-auto max-w-[1380px] px-5 py-24 sm:px-8 lg:px-12">
      {/* Anchor targets for direct navigation */}
      <div id="oyunlar" className="absolute -top-24" aria-hidden="true" />
      <div id="uygulamalar" className="absolute -top-24" aria-hidden="true" />

      {/* Section Header */}
      <div className="mb-12 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[.24em] text-[#d6a653]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>PORTFÖYÜMÜZ</span>
          </div>
          <h2 className="v2-serif mt-3 text-4xl sm:text-5xl">Ürettiğimiz dünyalar.</h2>
        </div>
        <div className="space-y-4 lg:justify-self-end lg:text-right">
          <p className="max-w-lg text-sm leading-7 text-[#b9b6b0]">
            Her proje farklı bir ihtiyaca, tek bir ortak ilkeye dayanır: sade, etkili ve hatırlanmaya değer olmak.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="inline-flex rounded-lg border border-[#c39856]/25 bg-[#061019] p-1 shadow-inner">
            <button
              type="button"
              onClick={() => {
                setActiveFilter("all");
                window.history.replaceState(null, "", "#projeler");
              }}
              className={`rounded-md px-4 py-2 text-xs font-semibold tracking-wider transition ${
                activeFilter === "all"
                  ? "bg-gradient-to-r from-[#d9a34e] to-[#f2ca7c] text-[#18110a] shadow"
                  : "text-[#b9b6b0] hover:text-[#f7f0e5]"
              }`}
            >
              TÜMÜ ({PRODUCTS.length})
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveFilter("game");
                window.history.replaceState(null, "", "#oyunlar");
              }}
              className={`rounded-md px-4 py-2 text-xs font-semibold tracking-wider transition ${
                activeFilter === "game"
                  ? "bg-gradient-to-r from-[#d9a34e] to-[#f2ca7c] text-[#18110a] shadow"
                  : "text-[#b9b6b0] hover:text-[#f7f0e5]"
              }`}
            >
              OYUNLAR ({PRODUCTS.filter((p) => p.type === "game").length})
            </button>
            <button
              type="button"
              onClick={() => {
                setActiveFilter("app");
                window.history.replaceState(null, "", "#uygulamalar");
              }}
              className={`rounded-md px-4 py-2 text-xs font-semibold tracking-wider transition ${
                activeFilter === "app"
                  ? "bg-gradient-to-r from-[#d9a34e] to-[#f2ca7c] text-[#18110a] shadow"
                  : "text-[#b9b6b0] hover:text-[#f7f0e5]"
              }`}
            >
              UYGULAMALAR ({PRODUCTS.filter((p) => p.type === "app").length})
            </button>
          </div>
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product: Product) => (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group flex flex-col justify-between rounded-xl border border-[#b4843f]/25 bg-[#071119]/90 p-4 transition duration-300 hover:-translate-y-1.5 hover:border-[#d4a351]/75 hover:bg-[#0b1822] hover:shadow-[0_16px_36px_rgba(0,0,0,0.5)]"
          >
            <div>
              {/* Product Thumbnail Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#0e1e2c] border border-[#c39856]/15">
                <Image
                  src={productImages[product.id] ?? product.coverImage}
                  alt={`${product.title} ürün ekranı`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={`object-cover ${
                    product.id === "benim-notlarim" ? "object-top" : "object-center"
                  } transition duration-500 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071119] via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge Top Left */}
                <div className="absolute left-3 top-3">
                  <span className="rounded bg-black/60 px-2.5 py-1 text-[10px] font-bold tracking-widest text-[#f5d085] backdrop-blur-md border border-[#c39856]/30">
                    {product.type === "game" ? "OYUN" : "UYGULAMA"}
                  </span>
                </div>

                {/* Status Badge Top Right */}
                <div className="absolute right-3 top-3">
                  <span className="rounded bg-black/60 px-2 py-0.5 text-[9px] font-medium text-emerald-400 backdrop-blur-md border border-emerald-500/30">
                    {product.status}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="px-1 pt-5">
                <h3 className="v2-serif text-2xl text-[#fbf8f1] group-hover:text-[#f8d088] transition-colors">
                  {product.title}
                </h3>
                <p className="mt-2.5 line-clamp-2 text-sm leading-6 text-[#b0ada7]">
                  {product.shortDescription}
                </p>
              </div>
            </div>

            {/* P3: Visible Action Footer */}
            <div className="mt-6 flex items-center justify-between border-t border-[#b4843f]/20 px-1 pt-3.5 text-xs font-bold tracking-wider text-[#d8a654] transition group-hover:text-[#ffe0a4]">
              <span>PROJEYİ İNCELE</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </div>
          </Link>
        ))}
      </div>

      {/* Bottom All Products Link */}
      <div className="mt-12 text-center sm:text-left">
        <Link
          href="/products"
          className="inline-flex items-center gap-3 rounded-md border border-[#c39856]/40 bg-[#061019] px-5 py-3 text-xs font-bold tracking-wider text-[#d8a654] transition hover:border-[#f2ca7c] hover:bg-[#b97e2a]/15 hover:text-[#ffe0a4]"
        >
          <span>TÜM PROJELERİ LİSTELE</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
