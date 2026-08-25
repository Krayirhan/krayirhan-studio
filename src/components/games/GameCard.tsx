import Link from "next/link";
import { Product } from "@/types/game";
import { ArrowRight, Download, Gamepad2, Smartphone, Star } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function GameCard({ product }: ProductCardProps) {
  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#111114] p-6 sm:p-7 shadow-xl hover:border-white/25 hover:shadow-2xl hover:shadow-black/70 transition-all duration-300">
      
      {/* Top Header: Badge & Status */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-5">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-zinc-200">
            {product.type === "game" ? (
              <Gamepad2 className="h-3.5 w-3.5 text-orange-400" />
            ) : (
              <Smartphone className="h-3.5 w-3.5 text-emerald-400" />
            )}
            {product.type === "game" ? "Mobil Oyun" : "Mobil Uygulama"}
          </span>

          <span className="text-xs font-semibold text-zinc-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">
            {product.status}
          </span>
        </div>

        {/* Center Artwork Display (Large Phone Preview) */}
        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-zinc-950/80 border border-white/10 flex items-center justify-center mb-6 p-4 group-hover:border-white/20 transition-colors">
          <img
            src={product.coverImage}
            alt={product.title}
            className="max-h-[160px] w-auto object-contain rounded-xl shadow-xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Categories & Title */}
        <div className="space-y-2">
          <div className="flex flex-wrap gap-1.5">
            {product.category.slice(0, 3).map((cat) => (
              <span
                key={cat}
                className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] font-medium text-zinc-400"
              >
                {cat}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors font-display">
            {product.title}
          </h3>

          <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-3">
        {product.links.playStore ? (
          <a
            href={product.links.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-md"
          >
            <Download className="h-3.5 w-3.5" />
            <span>Google Play</span>
          </a>
        ) : (
          <span className="text-xs font-medium text-zinc-500">Çok Yakında</span>
        )}

        <Link
          href={`/products/${product.slug}`}
          className="inline-flex items-center gap-1 text-xs font-bold text-zinc-300 hover:text-white group-hover:translate-x-0.5 transition-all"
        >
          <span>İncele</span>
          <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
        </Link>
      </div>

    </div>
  );
}
