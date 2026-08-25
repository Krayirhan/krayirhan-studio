import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/game";
import { ArrowRight, Layers, Smartphone, Gamepad2 } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function GameCard({ product }: ProductCardProps) {
  const getStatusBadge = (status: Product["status"]) => {
    switch (status) {
      case "Released":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/30";
      case "Early Access":
      case "Beta":
        return "bg-amber-500/10 text-amber-300 border-amber-500/30";
      default:
        return "bg-white/10 text-zinc-300 border-white/15";
    }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-[2.2rem] border border-white/10 bg-[#121215] p-6 sm:p-7 shadow-xl hover:border-white/25 hover:shadow-2xl hover:shadow-black/50 transition-all duration-300">
      {/* Top Header: Badge & Platform */}
      <div className="flex items-center justify-between gap-2 mb-5">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-zinc-200">
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

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-300 bg-white/5 px-2.5 py-1 rounded-lg border border-white/10">
          <span>{product.platforms[0]}</span>
        </span>
      </div>

      {/* Center Display: Sleek Phone Preview */}
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-950 p-4 border border-white/10 flex items-center justify-center mb-6">
        <Image
          src={product.coverImage}
          alt={product.title}
          width={180}
          height={145}
          sizes="(max-width: 768px) 55vw, 180px"
          className="max-h-[145px] w-auto rounded-xl border border-zinc-800 object-contain shadow-lg transition-transform duration-300 group-hover:scale-105"
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
                className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[11px] font-medium text-zinc-400"
              >
                {cat}
              </span>
            ))}
          </div>

          <h3 className="text-2xl font-extrabold text-white group-hover:text-zinc-200 transition-colors">
            {product.title}
          </h3>

          <p className="mt-2 text-sm text-zinc-400 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-white/10 pt-4 flex items-center justify-between">
          <div className="text-xs text-zinc-400 flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-zinc-500" />
            <span>{product.platforms.join(", ")}</span>
          </div>

          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-white hover:text-zinc-300 group-hover:translate-x-1 transition-all"
          >
            <span>İncele</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
