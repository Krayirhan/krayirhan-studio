"use client";

import { useState } from "react";
import { ThumbsUp, Clock, Flame } from "lucide-react";
import { useStudioSound } from "@/components/effects/SoundEffects";

interface RoadmapItem {
  id: string;
  title: string;
  category: "LingoRise" | "Blok Dünyası" | "Benim Notlarım" | "Stüdyo";
  status: "Tamamlandı" | "Geliştiriliyor" | "Planlandı";
  description: string;
  initialVotes: number;
}

const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: "lingorise-multi-day",
    title: "LingoRise: Çok Günlü Doğrulama & SRS v2",
    category: "LingoRise",
    status: "Geliştiriliyor",
    description: "Kelimelerin hafızaya daha kalıcı yerleşmesi için gelişmiş aralıklı tekrar optimizasyonu.",
    initialVotes: 48,
  },
  {
    id: "blok-dunyasi-dailies",
    title: "Blok Dünyası: Günlük Görevler & Yeni Temalar",
    category: "Blok Dünyası",
    status: "Geliştiriliyor",
    description: "Her gün değişen bulmaca ödülleri ve el yapımı yeni kumaş/retro görsel temalar.",
    initialVotes: 35,
  },
  {
    id: "benim-notlarim-widgets",
    title: "Benim Notlarım: Ana Ekran Widget'ları & Şifreli Notlar",
    category: "Benim Notlarım",
    status: "Planlandı",
    description: "Hızlı not alma Android masaüstü widget'ları ve biyometrik parmak izi kilidi.",
    initialVotes: 29,
  },
  {
    id: "lingorise-audio-speech",
    title: "LingoRise: Doğal Sesli Telaffuz & Konuşma Pratiği",
    category: "LingoRise",
    status: "Planlandı",
    description: "Kelimelerin anadili İngilizce olan telaffuzları ve dinleme pratikleri.",
    initialVotes: 64,
  },
];

export function StudioRoadmap() {
  const [votes, setVotes] = useState<Record<string, number>>({});
  const [hasVoted, setHasVoted] = useState<Record<string, boolean>>({});
  const { playSound } = useStudioSound();

  const handleVote = (id: string) => {
    playSound("sparkle");
    setHasVoted((prev) => ({ ...prev, [id]: !prev[id] }));
    setVotes((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + (hasVoted[id] ? -1 : 1),
    }));
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 border-t border-amber-500/15">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/30 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-4">
          <Flame className="h-4 w-4 text-amber-400" />
          <span>Gelecek Planlarımız</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          İnteraktif Yol Haritası (Roadmap)
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400">
          Geliştirmekte olduğumuz yeni özellikleri inceleyin ve en çok görmek istediğinize oy verin!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ROADMAP_ITEMS.map((item) => {
          const currentVotes = item.initialVotes + (votes[item.id] || 0);
          const voted = hasVoted[item.id];

          return (
            <div
              key={item.id}
              className="relative flex flex-col justify-between rounded-3xl border border-amber-500/15 bg-[#11131a] p-6 sm:p-8 shadow-xl hover:border-amber-500/40 hover:shadow-amber-500/10 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    {item.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold ${
                      item.status === "Geliştiriliyor"
                        ? "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                        : "bg-slate-800 text-slate-300 border border-slate-700"
                    }`}
                  >
                    <Clock className="h-3 w-3" />
                    <span>{item.status}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Upvote Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-400">
                  Topluluk Desteği
                </span>

                <button
                  onClick={() => handleVote(item.id)}
                  className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    voted
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105"
                      : "border border-slate-800 bg-slate-900 text-slate-300 hover:border-amber-500/50 hover:text-white"
                  }`}
                >
                  <ThumbsUp className="h-3.5 w-3.5" />
                  <span>{currentVotes} Oy</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
