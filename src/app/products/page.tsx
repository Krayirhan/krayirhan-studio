"use client";

import { useState } from "react";
import { PRODUCTS } from "@/data/games";
import { GameCard } from "@/components/games/GameCard";
import { Sparkles, Gamepad2, Smartphone, Layers } from "lucide-react";

export default function ProductsPage() {
  const [filter, setFilter] = useState<"all" | "game" | "app">("all");

  const filteredProducts =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.type === filter);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/30 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-4">
          <Sparkles className="h-4 w-4 text-amber-400" />
          <span>Ürün Portföyümüz</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Tüm Oyunlar & Uygulamalar
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg">
          Krayirhan Studio bünyesinde geliştirilen tüm bağımsız mobil oyunlar, uygulamalar ve dijital çözümler.
        </p>

        {/* Filter Switcher */}
        <div className="mt-8 inline-flex rounded-2xl border border-amber-500/20 bg-[#11131a] p-1.5 shadow-xl">
          <button
            onClick={() => setFilter("all")}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Layers className="h-4 w-4" />
            <span>Tümü ({PRODUCTS.length})</span>
          </button>
          <button
            onClick={() => setFilter("game")}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              filter === "game"
                ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Gamepad2 className="h-4 w-4" />
            <span>Oyunlar ({PRODUCTS.filter((p) => p.type === "game").length})</span>
          </button>
          <button
            onClick={() => setFilter("app")}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              filter === "app"
                ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105"
                : "text-slate-400 hover:text-white"
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
