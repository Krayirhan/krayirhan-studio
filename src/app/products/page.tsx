"use client";

import type { CSSProperties } from "react";
import { PRODUCTS } from "@/data/games";
import { BentoProductShowcase } from "@/components/products/BentoProductShowcase";

export default function ProductsPage() {
  const bentoProducts = PRODUCTS.map((product) => ({
    id: product.id,
    title: product.title,
    description: product.shortDescription,
    category: product.type === "game" ? "game" as const : "app" as const,
    image: product.coverImage,
    href: `/products/${product.slug}`,
    accent: product.id === "blok-dunyasi" ? "orange" as const : product.id === "lingorise" ? "green" as const : "blue" as const,
    index: product.id === "blok-dunyasi" ? "01" : product.id === "lingorise" ? "02" : "03",
    label: product.id === "blok-dunyasi" ? "Oyun" : product.id === "lingorise" ? "Öğrenme · Uygulama" : "Üretkenlik · Uygulama",
  }));

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="eyebrow-tag gap-1.5 py-1 pr-3.5 text-xs font-semibold text-zinc-300 mb-4" style={{ "--tag-accent": "#a97ee0" } as CSSProperties}>
          <span>Ürün Portföyümüz</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Tüm Oyunlar & Uygulamalar
        </h1>
        <p className="mt-4 text-zinc-400 text-base sm:text-lg">
          Krayirhan Studio bünyesinde geliştirilen tüm bağımsız mobil oyunlar, uygulamalar ve dijital çözümler.
        </p>

      </div>

      <BentoProductShowcase products={bentoProducts} />
    </div>
  );
}
