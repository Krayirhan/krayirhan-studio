"use client";

import { useRef, useState, createContext, useContext } from "react";
import { Volume2, VolumeX } from "lucide-react";

interface SoundContextType {
  playSound: (type: "click" | "pop" | "sparkle" | "combo" | "flip") => void;
  soundEnabled: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextType>({
  playSound: () => {},
  soundEnabled: false,
  toggleSound: () => {},
});

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(
    () => typeof window !== "undefined" && window.localStorage.getItem("studio_sound_enabled") === "true"
  );
  const audioContextRef = useRef<AudioContext | null>(null);

  const getAudioContext = () => {
    if (!audioContextRef.current) {
      const audioWindow = window as Window & { webkitAudioContext?: typeof AudioContext };
      const AudioContextConstructor = window.AudioContext ?? audioWindow.webkitAudioContext;
      if (!AudioContextConstructor) return null;
      const ctx = new AudioContextConstructor();
      audioContextRef.current = ctx;
      return ctx;
    }
    if (audioContextRef.current.state === "suspended") {
      void audioContextRef.current.resume();
    }
    return audioContextRef.current;
  };

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    localStorage.setItem("studio_sound_enabled", String(next));
    if (next) {
      const ctx = getAudioContext();
      if (!ctx) return;
      // Play a quick test chime
      playTone(ctx, 587.33, 0.08, "sine"); // D5
      setTimeout(() => playTone(ctx, 880, 0.12, "sine"), 80); // A5
    }
  };

  const playTone = (
    ctx: AudioContext,
    freq: number,
    duration: number,
    type: OscillatorType = "sine",
    gainVal: number = 0.06
  ) => {
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio context might be restricted before interaction
    }
  };

  const playSound = (type: "click" | "pop" | "sparkle" | "combo" | "flip") => {
    if (!soundEnabled) return;
    const ctx = getAudioContext();
    if (!ctx) return;

    switch (type) {
      case "click":
        playTone(ctx, 800, 0.04, "sine", 0.04);
        break;
      case "pop":
        playTone(ctx, 420, 0.08, "triangle", 0.08);
        setTimeout(() => playTone(ctx, 640, 0.08, "triangle", 0.06), 40);
        break;
      case "sparkle":
        playTone(ctx, 1046.5, 0.09, "sine", 0.05);
        setTimeout(() => playTone(ctx, 1318.5, 0.09, "sine", 0.05), 50);
        setTimeout(() => playTone(ctx, 1567.98, 0.14, "sine", 0.05), 100);
        break;
      case "combo":
        playTone(ctx, 523.25, 0.08, "triangle", 0.08);
        setTimeout(() => playTone(ctx, 659.25, 0.08, "triangle", 0.08), 70);
        setTimeout(() => playTone(ctx, 783.99, 0.08, "triangle", 0.08), 140);
        setTimeout(() => playTone(ctx, 1046.5, 0.2, "sine", 0.1), 210);
        break;
      case "flip":
        playTone(ctx, 350, 0.06, "sine", 0.05);
        setTimeout(() => playTone(ctx, 480, 0.06, "sine", 0.05), 40);
        break;
    }
  };

  return (
    <SoundContext.Provider value={{ playSound, soundEnabled, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useStudioSound() {
  return useContext(SoundContext);
}

export function SoundToggle() {
  const { soundEnabled, toggleSound } = useStudioSound();

  return (
    <button
      onClick={toggleSound}
      className={`flex h-9 w-9 items-center justify-center rounded-xl border transition-all cursor-pointer ${
        soundEnabled
          ? "border-cyan-500/60 bg-cyan-950/60 text-cyan-300 shadow-md shadow-cyan-500/20"
          : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:border-slate-700"
      }`}
      title={soundEnabled ? "Sesi Kapat" : "Ses Efektlerini Aç (SFX)"}
      aria-label="Toggle Sound Effects"
    >
      {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
    </button>
  );
}
