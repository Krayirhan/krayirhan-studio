import Link from "next/link";
import Image from "next/image";
import { Game } from "@/types/game";
import { ArrowRight, Layers, Cpu } from "lucide-react";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const getStatusBadge = (status: Game["status"]) => {
    switch (status) {
      case "Released":
        return "bg-emerald-500/20 text-emerald-300 border-emerald-500/40";
      case "Early Access":
        return "bg-amber-500/20 text-amber-300 border-amber-500/40";
      case "In Development":
        return "bg-indigo-500/20 text-indigo-300 border-indigo-500/40";
      case "Prototype":
        return "bg-purple-500/20 text-purple-300 border-purple-500/40";
      default:
        return "bg-slate-500/20 text-slate-300 border-slate-500/40";
    }
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-[#0d121d] game-card-glow">
      {/* Cover Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
        <Image
          src={game.coverImage}
          alt={game.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d121d] via-transparent to-black/30" />

        {/* Status Badge */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md ${getStatusBadge(
              game.status
            )}`}
          >
            {game.status}
          </span>
        </div>

        {/* Engine Badge */}
        <div className="absolute top-3 right-3">
          <span className="inline-flex items-center gap-1 rounded-md bg-black/70 px-2 py-1 text-[11px] font-medium text-slate-300 backdrop-blur-md border border-slate-700/50">
            <Cpu className="h-3 w-3 text-cyan-400" />
            {game.engine}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Genres */}
        <div className="mb-2 flex flex-wrap gap-1.5">
          {game.genre.slice(0, 3).map((g) => (
            <span
              key={g}
              className="rounded bg-slate-800/80 px-2 py-0.5 text-[11px] font-medium text-slate-400"
            >
              {g}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
          {game.title}
        </h3>

        {/* Short Description */}
        <p className="mt-2 text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {game.shortDescription}
        </p>

        {/* Platforms & Detail Link */}
        <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Layers className="h-3.5 w-3.5 text-slate-500" />
            <span>{game.platforms.join(", ")}</span>
          </div>

          <Link
            href={`/games/${game.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 group-hover:translate-x-0.5 transition-all"
          >
            <span>Detaylar</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
