import { APPS } from "@/data/games";
import { GameCard } from "@/components/games/GameCard";
import { Smartphone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uygulamalar | Krayirhan Studio",
  description: "Krayirhan Studio tarafından geliştirilen iOS, Android ve Web uygulamaları.",
};

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-4">
          <Smartphone className="h-4 w-4 text-cyan-400" />
          <span>Mobil & Web Uygulamaları</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Uygulama Portföyümüz
        </h1>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Üretkenliği artıran, yapay zeka destekli ve ses/telemetri odaklı yeni nesil dijital araçlarımız.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {APPS.map((app) => (
          <GameCard key={app.id} product={app} />
        ))}
      </div>
    </div>
  );
}
