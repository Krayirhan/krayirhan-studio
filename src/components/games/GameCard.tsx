import Link from "next/link";
import { Product } from "@/types/game";
import { ArrowRight, Layers, Cpu, Smartphone, Gamepad2 } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function GameCard({ product }: ProductCardProps) {
  const getStatusBadge = (status: Product["status"]) => {
    switch (status) {
      case "Released":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
      case "Early Access":
      case "Beta":
        return "bg-amber-500/20 text-amber-300 border-amber-500/40";
      case "In Development":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/40";
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/40";
    }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[2.2rem] border border-amber-500/20 bg-gradient-to-b from-[#14161f] to-[#090a0f] p-6 sm:p-7 shadow-xl hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300">
      {/* Top Header: Badge & Tech */}
      <div className="flex items-center justify-between gap-2 mb-5">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${
              product.type === "game"
                ? "bg-amber-950/80 text-amber-300 border-amber-500/40"
                : "bg-slate-900/90 text-amber-200 border-slate-700"
            }`}
          >
            {product.type === "game" ? (
              <Gamepad2 className="h-3.5 w-3.5" />
            ) : (
              <Smartphone className="h-3.5 w-3.5" />
            )}
            {product.type === "game" ? "Oyun" : "Uygulama"}
          </span>

          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold ${getStatusBadge(
              product.status
            )}`}
          >
            {product.status}
          </span>
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400/90 bg-amber-950/30 px-2.5 py-1 rounded-lg border border-amber-500/20">
          <span>{product.platforms[0]}</span>
        </span>
      </div>

      {/* Center Display: Sleek Phone Preview */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950/90 p-4 border border-slate-800/80 flex items-center justify-center mb-6">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-yellow-500/5 pointer-events-none" />

        <img
          src={product.coverImage}
          alt={product.title}
          className="max-h-[145px] w-auto object-contain rounded-xl shadow-lg border border-slate-800 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between space-y-4">
        <div>
          {/* Categories */}
          <div className="mb-2 flex flex-wrap gap-1.5">
            {product.category.slice(0, 3).map((cat) => (
              <span
                key={cat}
                className="rounded-md bg-black/40 border border-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-400"
              >
                {cat}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-extrabold text-white group-hover:text-amber-300 transition-colors">
            {product.title}
          </h3>

          <p className="mt-2 text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-slate-500" />
            <span>{product.platforms.join(", ")}</span>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-all"
          >
            <span>İncele</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
