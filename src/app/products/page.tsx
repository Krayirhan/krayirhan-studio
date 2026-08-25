"use client";

import { useState } from "react";
import { PRODUCTS } from "@/data/games";
import { GameCard } from "@/components/games/GameCard";
import { Box, Gamepad2, Smartphone } from "lucide-react";

export default function ProductsPage() {
  const [filter, setFilter] = useState<"all" | "game" | "app">("all");

  const filteredProducts =
    filter === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.type === filter);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-4">
          <Box className="h-4 w-4 text-cyan-400" />
          <span>Ürün Portföyümüz</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Tüm Oyunlar & Uygulamalar
        </h1>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Krayirhan Studio bünyesinde geliştirilen tüm bağımsız oyunlar, mobil uygulamalar ve dijital çözümler.
        </p>

        {/* Filter Switcher */}
        <div className="mt-8 inline-flex rounded-xl border border-slate-800 bg-[#0d121d] p-1.5 shadow-lg">
          <button
            onClick={() => setFilter("all")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === "all"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Box className="h-4 w-4" />
            <span>Tümü ({PRODUCTS.length})</span>
          </button>
          <button
            onClick={() => setFilter("game")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === "game"
                ? "bg-indigo-600 text-white shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Gamepad2 className="h-4 w-4" />
            <span>Oyunlar ({PRODUCTS.filter((p) => p.type === "game").length})</span>
          </button>
          <button
            onClick={() => setFilter("app")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              filter === "app"
                ? "bg-indigo-600 text-white shadow-md"
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
