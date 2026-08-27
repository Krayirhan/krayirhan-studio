import { APPS } from "@/data/games";
import { GameCard } from "@/components/games/GameCard";
import type { CSSProperties } from "react";
import { Smartphone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobil Uygulamalar",
  description: "Krayirhan Studio tarafından geliştirilen eğitim ve üretkenlik odaklı mobil uygulamalar.",
};

export default function AppsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="eyebrow-tag gap-1.5 py-1 pr-3.5 text-xs font-semibold text-zinc-300 mb-4" style={{ "--tag-accent": "var(--vine)" } as CSSProperties}>
          <Smartphone className="h-4 w-4 text-[var(--vine)]" />
          <span>Uygulama Kataloğumuz</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
          Mobil Uygulamalarımız
        </h1>
        <p className="mt-4 text-zinc-400 text-base sm:text-lg">
          Kelime öğrenimini kalıcı kılan oyunlaştırılmış eğitim araçları ve sade not alma deneyimleri.
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
