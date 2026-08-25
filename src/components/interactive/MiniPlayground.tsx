"use client";

import { useState } from "react";
import { Gamepad2, Sparkles, Smartphone, RefreshCw, Trophy, RotateCw, Star } from "lucide-react";
import { useStudioSound } from "@/components/effects/SoundEffects";

// Sample vocabulary for LingoRise demo
const LINGORISE_WORDS = [
  {
    word: "Resilient",
    phonetic: "/rɪˈzɪl.jənt/",
    meaning: "Zorluklara karşı dayanıklı, çabuk toparlanan.",
    example: "The resilient plant survived the harsh winter.",
    level: "B2",
  },
  {
    word: "Meticulous",
    phonetic: "/məˈtɪk.jə.ləs/",
    meaning: "Aşırı titiz, her ayrıntıya özen gösteren.",
    example: "He was meticulous about his game code.",
    level: "C1",
  },
  {
    word: "Serendipity",
    phonetic: "/ˌser.ənˈdɪp.ə.ti/",
    meaning: "Şans eseri güzel şeyler keşfetme yeteneği.",
    example: "Finding this studio was pure serendipity.",
    level: "C2",
  },
];

export function MiniPlayground() {
  const [activeTab, setActiveTab] = useState<"game" | "app">("game");
  const { playSound } = useStudioSound();

  // --- Blok Dünyası Mini Grid State ---
  const [grid, setGrid] = useState<number[]>(() => [
    0, 1, 1, 0,
    1, 0, 1, 1,
    0, 1, 0, 1,
    1, 1, 0, 0,
  ]);
  const [score, setScore] = useState(120);
  const [combo, setCombo] = useState(1);
  const [clearing, setClearing] = useState(false);

  const handleCellClick = (index: number) => {
    playSound("pop");
    const nextGrid = [...grid];
    nextGrid[index] = nextGrid[index] === 0 ? 1 : 0;
    setGrid(nextGrid);
    setScore((s) => s + 10);

    // Check if any row is full
    const row = Math.floor(index / 4);
    const isRowFull = [0, 1, 2, 3].every((col) => nextGrid[row * 4 + col] === 1);

    if (isRowFull) {
      setClearing(true);
      playSound("combo");
      setTimeout(() => {
        const clearedGrid = [...nextGrid];
        [0, 1, 2, 3].forEach((col) => {
          clearedGrid[row * 4 + col] = 0;
        });
        setGrid(clearedGrid);
        setScore((s) => s + 100 * combo);
        setCombo((c) => c + 1);
        setClearing(false);
      }, 300);
    }
  };

  const resetGrid = () => {
    playSound("click");
    setGrid([
      0, 1, 1, 0,
      1, 0, 1, 1,
      0, 1, 0, 1,
      1, 1, 0, 0,
    ]);
    setScore(120);
    setCombo(1);
  };

  // --- LingoRise Flashcard State ---
  const [wordIndex, setWordIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [xp, setXp] = useState(250);
  const [gardenStage, setGardenStage] = useState(1); // 1: Seed, 2: Sprout, 3: Bloom, 4: Tree

  const currentWord = LINGORISE_WORDS[wordIndex];

  const handleFlip = () => {
    playSound("flip");
    setIsFlipped(!isFlipped);
  };

  const handleMastery = (success: boolean) => {
    if (success) {
      playSound("sparkle");
      setXp((prev) => prev + 50);
      setGardenStage((prev) => (prev < 4 ? prev + 1 : 4));
    } else {
      playSound("pop");
    }
    setIsFlipped(false);
    setWordIndex((prev) => (prev + 1) % LINGORISE_WORDS.length);
  };

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 px-4 py-1.5 text-xs font-semibold text-cyan-300 mb-4 backdrop-blur-md">
          <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-bounce" />
          <span>İnteraktif Web Demosu</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Deneyin & Oynayın
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400">
          Uygulamalarımızın temel mekaniklerini doğrudan tarayıcınızda canlı test edin.
        </p>

        {/* Tab Switcher */}
        <div className="mt-8 inline-flex rounded-2xl border border-slate-800 bg-[#0c121e] p-1.5 shadow-xl">
          <button
            onClick={() => {
              playSound("click");
              setActiveTab("game");
            }}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "game"
                ? "bg-gradient-to-r from-amber-600 to-rose-600 text-white shadow-lg shadow-amber-600/30 scale-105"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Gamepad2 className="h-4 w-4" />
            <span>🎮 Blok Dünyası (Mini Oyun)</span>
          </button>

          <button
            onClick={() => {
              playSound("click");
              setActiveTab("app");
            }}
            className={`flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              activeTab === "app"
                ? "bg-gradient-to-r from-cyan-600 to-indigo-600 text-white shadow-lg shadow-cyan-600/30 scale-105"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <Smartphone className="h-4 w-4" />
            <span>🌱 LingoRise (Bahçe & Kelime)</span>
          </button>
        </div>
      </div>

      {/* Interactive Demo Content Box */}
      <div className="mx-auto max-w-3xl rounded-[2.5rem] border border-slate-800 bg-gradient-to-b from-[#0e1626] via-[#0b101b] to-[#07090e] p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
        
        {/* --- DEMO 1: BLOK DÜNYASI MINI GRID --- */}
        {activeTab === "game" && (
          <div className="flex flex-col items-center space-y-6">
            {/* Score & Combo Bar */}
            <div className="flex items-center justify-between w-full max-w-sm px-4 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-inner">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-amber-400" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Skor</div>
                  <div className="text-lg font-black text-amber-300">{score}</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Kombo</div>
                  <div className="text-lg font-black text-rose-400">{combo}x</div>
                </div>
                <button
                  onClick={resetGrid}
                  className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  title="Yeniden Başlat"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-400 text-center">
              Karelere tıklayarak satırı tamamlayın ve blokları patlatın!
            </p>

            {/* 4x4 Mini Interactive Grid */}
            <div className="relative p-4 rounded-3xl bg-slate-950 border-2 border-slate-800 shadow-2xl">
              <div className="grid grid-cols-4 gap-2.5">
                {grid.map((cell, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleCellClick(idx)}
                    className={`h-14 w-14 sm:h-16 sm:w-16 rounded-2xl transition-all duration-200 cursor-pointer flex items-center justify-center text-xl shadow-lg select-none ${
                      cell === 1
                        ? clearing
                          ? "bg-amber-300 scale-110 shadow-amber-400/80 animate-ping"
                          : "bg-gradient-to-tr from-amber-500 to-rose-500 border border-amber-400 shadow-amber-500/40 scale-95"
                        : "bg-slate-900 border border-slate-800/80 hover:bg-slate-800/60"
                    }`}
                  >
                    {cell === 1 && (idx % 2 === 0 ? "🍓" : "🍊")}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-amber-400">
              <Sparkles className="h-4 w-4" />
              <span>Tam sürümde 8x8 ızgara, kumaş temaları ve yüzlerce seviye mevcut!</span>
            </div>
          </div>
        )}

        {/* --- DEMO 2: LINGORISE FLASHCARD & GARDEN --- */}
        {activeTab === "app" && (
          <div className="flex flex-col items-center space-y-6">
            {/* XP & Garden Status Bar */}
            <div className="flex items-center justify-between w-full max-w-md px-5 py-3 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-inner">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-cyan-400 fill-cyan-400" />
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-400">Toplam XP</div>
                  <div className="text-lg font-black text-cyan-300">+{xp} XP</div>
                </div>
              </div>

              {/* Garden Visual Meter */}
              <div className="flex items-center gap-2">
                <div className="text-2xl animate-bounce">
                  {gardenStage === 1 && "🌱"}
                  {gardenStage === 2 && "🌿"}
                  {gardenStage === 3 && "🌸"}
                  {gardenStage === 4 && "🌳"}
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase font-bold text-slate-400">Bahçe Evresi</div>
                  <div className="text-xs font-bold text-emerald-400">
                    {gardenStage === 1 && "Tohum"}
                    {gardenStage === 2 && "Filiz"}
                    {gardenStage === 3 && "Çiçek Açtı"}
                    {gardenStage === 4 && "Ulu Ağaç"}
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Flipping Flashcard */}
            <div
              onClick={handleFlip}
              className="relative w-full max-w-sm aspect-[4/3] rounded-3xl p-6 border-2 border-cyan-500/40 bg-gradient-to-b from-[#111c30] to-[#09101d] shadow-2xl flex flex-col justify-between items-center text-center cursor-pointer group hover:border-cyan-400 transition-all select-none"
            >
              <div className="w-full flex justify-between items-center text-xs font-bold text-slate-400">
                <span className="px-2.5 py-1 rounded-md bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {currentWord.level}
                </span>
                <span className="flex items-center gap-1 text-[11px] text-slate-400 group-hover:text-cyan-300 transition-colors">
                  <RotateCw className="h-3 w-3" />
                  Çevirmek için dokun
                </span>
              </div>

              {!isFlipped ? (
                <div className="space-y-2 py-4">
                  <h3 className="text-3xl font-extrabold text-white tracking-wide">
                    {currentWord.word}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono">{currentWord.phonetic}</p>
                </div>
              ) : (
                <div className="space-y-2 py-2 animate-in fade-in">
                  <p className="text-lg font-bold text-amber-300">{currentWord.meaning}</p>
                  <p className="text-xs italic text-slate-300 max-w-xs">{currentWord.example}</p>
                </div>
              )}

              <div className="text-[11px] font-semibold text-slate-400">
                {isFlipped ? "Anlamı Hatırladınız mı?" : "Kartı çevirerek Türkçe karşılığını görün"}
              </div>
            </div>

            {/* Action Buttons: Again vs Know */}
            <div className="flex gap-3 w-full max-w-sm">
              <button
                onClick={() => handleMastery(false)}
                className="flex-1 rounded-xl border border-rose-500/40 bg-rose-950/30 py-3 text-xs font-bold text-rose-300 hover:bg-rose-900/50 transition-colors cursor-pointer"
              >
                Tekrar Et ⏳
              </button>

              <button
                onClick={() => handleMastery(true)}
                className="flex-1 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-600/30 hover:from-emerald-500 hover:to-teal-500 transition-all cursor-pointer"
              >
                Biliyorum! (+50 XP) 🌱
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
