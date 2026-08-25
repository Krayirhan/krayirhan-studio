import { GAMES } from "@/data/games";
import { GameCard } from "@/components/games/GameCard";
import { Gamepad2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobil Oyunlar | Krayirhan Studio",
  description: "Krayirhan Studio tarafından geliştirilen bağımsız mobil bulmaca ve strateji oyunları.",
};

export default function GamesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold text-zinc-300 mb-4">
          <Gamepad2 className="h-4 w-4 text-orange-400" />
          <span>Oyun Kataloğumuz</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
          Mobil Oyunlarımız
        </h1>
        <p className="mt-4 text-zinc-400 text-base sm:text-lg">
          Akıcı mekanikler, canlı görsel temalar ve tamamen çevrimdışı oynanabilir bağımsız mobil bulmaca oyunları.
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
