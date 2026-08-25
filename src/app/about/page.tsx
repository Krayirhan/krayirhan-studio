import { STUDIO_INFO } from "@/data/studioInfo";
import Link from "next/link";
import { Gamepad2, Sparkles, ExternalLink, Code2, Users, Flame, Smartphone, Layers } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stüdyo Hakkında | Krayirhan Studio",
  description: "Krayirhan Studio hikayesi, vizyonu, oyun ve uygulama geliştirme felsefesi.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-20">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-4">
          <Flame className="h-4 w-4 text-rose-400" />
          <span>Biz Kimiz?</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Oyunlar & Geleceğin Uygulamaları
        </h1>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Oyun geliştirmenin saf yaratıcılığı ile modern yazılım mühendisliğinin gücünü tek bir stüdyo çatısı altında birleştiriyoruz.
        </p>
      </div>

      {/* Story & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-slate-300 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Hikayemiz ve Çift Odaklı Vizyonumuz
          </h2>
          <p>
            Krayirhan Studio; bağımsız oyunların özgür ruhu ile mobil/web dünyasının üretkenlik odaklı gücünü aynı potada eritmek amacıyla kuruldu.
          </p>
          <p>
            Bir yanda PC ve konsollar için saatlerce içinde kaybolunacak derin atmosferli oyunlar geliştirirken; diğer yanda yapay zeka destekli üretkenlik araçları ve ses teknolojileri inşa ediyoruz.
          </p>
          <div className="pt-4 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-xl border border-slate-800 bg-[#0d121d] p-4">
              <div className="text-2xl font-black text-indigo-400">{STUDIO_INFO.foundedYear}</div>
              <div className="text-xs text-slate-400 mt-1">Kuruluş Yılı</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-[#0d121d] p-4">
              <div className="text-2xl font-black text-cyan-400">Steam & Epic</div>
              <div className="text-xs text-slate-400 mt-1">Oyun Dağıtımı</div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-[#0d121d] p-4">
              <div className="text-2xl font-black text-purple-400">iOS & Android</div>
              <div className="text-xs text-slate-400 mt-1">Mobil Ekosistem</div>
            </div>
          </div>
        </div>

        {/* Founder Spotlight */}
        <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-[#0e1422] to-[#07090e] p-8 sm:p-10 space-y-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-500 text-white font-extrabold text-2xl shadow-lg shadow-indigo-600/40">
              K
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{STUDIO_INFO.founder.name}</h3>
              <p className="text-xs sm:text-sm text-indigo-400 font-medium">{STUDIO_INFO.founder.role}</p>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Yazılım mühendisliği altyapısı ile oyun tasarımı tutkusunu birleştirerek stüdyonun tüm teknik mimarisine, mekanik geliştirmelerine ve yaratıcı vizyonuna liderlik etmektedir.
          </p>

          <div className="pt-2 border-t border-slate-800">
            <a
              href={STUDIO_INFO.founder.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-indigo-500 transition-colors shadow-md"
            >
              <span>Kişisel CV & Portfolyo Sitesini Ziyaret Et</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="rounded-2xl border border-slate-800 bg-[#0d121d] p-8 sm:p-12 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-white flex items-center justify-center gap-2">
            <Code2 className="h-6 w-6 text-cyan-400" />
            <span>Kullandığımız Teknolojiler</span>
          </h2>
          <p className="text-sm text-slate-400">
            Oyun motorları ve modern mobil & bulut yazılım teknolojileri.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            "Unity (C#)",
            "React Native (iOS/Android)",
            "Next.js & TypeScript",
            "Unreal Engine 5",
            "Godot Engine",
            "Node.js & Go",
            "Tailwind CSS",
            "PostgreSQL & Redis",
          ].map((tech) => (
            <div key={tech} className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 text-slate-200 font-medium text-sm">
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
