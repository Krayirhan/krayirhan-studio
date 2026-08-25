import { GAMES } from "@/data/games";
import { GameCard } from "@/components/games/GameCard";
import { Gamepad2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Oyunlar | Krayirhan Studio",
  description: "Krayirhan Studio tarafından geliştirilen tüm PC, Konsol ve Web oyunları.",
};

export default function GamesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-4">
          <Gamepad2 className="h-4 w-4 text-cyan-400" />
          <span>Oyun Kataloğu</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Tüm Oyun Projelerimiz
        </h1>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Farklı türlerde, özgün mekaniklerle tasarladığımız yayınlanmış ve geliştirilme aşamasındaki oyunlarımız.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GAMES.map((game) => (
          <GameCard key={game.id} product={game} />
        ))}
      </div>
    </div>
  );
}
