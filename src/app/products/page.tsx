"use client";

import { useState } from "react";
import { PRODUCTS } from "@/data/games";
import { GameCard } from "@/components/games/GameCard";
import { Gamepad2, Smartphone, Layers } from "lucide-react";

export default function ProductsPage() {
  const [filter, setFilter] = useState<"all" | "game" | "app">("all");

  const filteredProducts =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.type === filter);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold text-zinc-300 mb-4">
          <span>Ürün Portföyümüz</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Tüm Oyunlar & Uygulamalar
        </h1>
        <p className="mt-4 text-zinc-400 text-base sm:text-lg">
          Krayirhan Studio bünyesinde geliştirilen tüm bağımsız mobil oyunlar, uygulamalar ve dijital çözümler.
        </p>

        {/* Filter Switcher */}
        <div className="mt-8 flex w-full flex-col gap-1.5 rounded-2xl border border-white/10 bg-[#121215] p-1.5 shadow-xl sm:inline-flex sm:w-auto sm:flex-row">
          <button
            onClick={() => setFilter("all")}
            className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer sm:w-auto sm:px-5 sm:text-sm ${
              filter === "all"
                ? "bg-white text-zinc-950 shadow-md scale-105"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>Tümü ({PRODUCTS.length})</span>
          </button>
          <button
            onClick={() => setFilter("game")}
            className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer sm:w-auto sm:px-5 sm:text-sm ${
              filter === "game"
                ? "bg-white text-zinc-950 shadow-md scale-105"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Gamepad2 className="h-4 w-4" />
            <span>Oyunlar ({PRODUCTS.filter((p) => p.type === "game").length})</span>
          </button>
          <button
            onClick={() => setFilter("app")}
            className={`flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all cursor-pointer sm:w-auto sm:px-5 sm:text-sm ${
              filter === "app"
                ? "bg-white text-zinc-950 shadow-md scale-105"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Smartphone className="h-4 w-4" />
            <span>Uygulamalar ({PRODUCTS.filter((p) => p.type === "app").length})</span>
          </button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <GameCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
