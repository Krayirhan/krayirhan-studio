import Link from "next/link";
import { Product } from "@/types/game";
import { ArrowRight, Layers, Cpu, Smartphone, Gamepad2, Download, ExternalLink } from "lucide-react";

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
        return "bg-cyan-500/20 text-cyan-300 border-cyan-500/40";
      case "In Development":
        return "bg-indigo-500/20 text-indigo-300 border-indigo-500/40";
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/40";
    }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-slate-800/90 bg-gradient-to-b from-[#0e1422] to-[#070a10] p-6 shadow-xl hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300">
      {/* Top Header: Badge & Tech */}
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${
              product.type === "game"
                ? "bg-amber-950/80 text-amber-300 border-amber-500/40"
                : "bg-cyan-950/80 text-cyan-300 border-cyan-500/40"
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

        <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400">
          <Cpu className="h-3.5 w-3.5 text-cyan-400" />
          <span>{product.techStack[0]}</span>
        </span>
      </div>

      {/* Center Display: Sleek Phone Preview */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-950/80 p-4 border border-slate-800/60 flex items-center justify-center mb-6">
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-transparent to-indigo-500/10" />

        <img
          src={product.coverImage}
          alt={product.title}
          className="max-h-[140px] w-auto object-contain rounded-xl shadow-lg border border-slate-700/60 group-hover:scale-105 transition-transform duration-300"
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
                className="rounded-md bg-slate-800/80 px-2 py-0.5 text-[11px] font-medium text-slate-400"
              >
                {cat}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-extrabold text-white group-hover:text-cyan-300 transition-colors">
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
            className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 hover:text-cyan-300 group-hover:translate-x-1 transition-all"
          >
            <span>İncele</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
