import { PRESS_FACTS, PRESS_ASSETS } from "@/data/pressKit";
import { STUDIO_INFO } from "@/data/studioInfo";
import { Download, FileArchive, Mail, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press Kit & Medya | Krayirhan Studio",
  description: "Krayirhan Studio basın bültenleri, logoları, oyun & uygulama medya kiti.",
};

export default function PressKitPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-4">
          <FileArchive className="h-4 w-4 text-cyan-400" />
          <span>Basın & Medya Kiti</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Press Kit
        </h1>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Oyun basını, teknoloji yayıncıları, içerik üreticileri ve partnerlerimiz için resmi medya varlıkları ve stüdyo bilgileri.
        </p>
      </div>

      {/* Grid: Factsheet & Assets */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Factsheet & History */}
        <div className="lg:col-span-6 space-y-8">
          <div className="rounded-2xl border border-slate-800 bg-[#0d121d] p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">Hızlı Bilgiler (Factsheet)</h2>
            <div className="divide-y divide-slate-800 text-sm">
              {[
                { label: "Stüdyo Adı", value: "Krayirhan Studio" },
                { label: "Faaliyet Alanı", value: "Bağımsız Oyunlar & Dijital Uygulamalar" },
                { label: "Kurucu", value: "Krayirhan" },
                { label: "Kuruluş Yılı", value: "2024" },
                { label: "Lokasyon", value: "İstanbul, Türkiye" },
                { label: "Web Sitesi", value: "https://studio.krayirhan.com" },
                { label: "Basın İletişim", value: "press@krayirhan.com" },
                { label: "Platformlar", value: "PC (Steam), iOS, Android, Web" },
              ].map((fact, i) => (
                <div key={i} className="py-3 flex justify-between gap-4">
                  <span className="text-slate-400">{fact.label}</span>
                  <span className="font-semibold text-slate-200 text-right">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-[#0d121d] p-8 space-y-4">
            <h2 className="text-2xl font-bold text-white">Stüdyo Açıklaması</h2>
            <p className="text-slate-300 leading-relaxed text-sm">
              {STUDIO_INFO.description}
            </p>
          </div>
        </div>

        {/* Right: Downloadable Media Assets */}
        <div className="lg:col-span-6 space-y-8">
          <div className="rounded-2xl border border-slate-800 bg-[#0d121d] p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white">İndirilebilir Medya Paketleri</h2>
            <p className="text-sm text-slate-400">
              Aşağıdaki paketler şeffaf logolar, yüksek çözünürlüklü 4K afişler, uygulama mockupları ve oyun ekran görüntülerini içerir.
            </p>

            <div className="space-y-4">
              {PRESS_ASSETS.map((asset, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-800/80 bg-slate-900/60 hover:border-indigo-500/50 transition-colors"
                >
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">{asset.title}</h3>
                    <div className="text-xs text-slate-500 flex gap-2">
                      <span>{asset.format}</span>
                      <span>•</span>
                      <span>{asset.fileSize}</span>
                    </div>
                  </div>

                  <a
                    href={asset.downloadUrl}
                    className="flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/20"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>İndir</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Press Contact Card */}
          <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-950/20 to-[#0d121d] p-8 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Mail className="h-5 w-5 text-cyan-400" />
              <span>İnceleme Kodu & Basın Talepleri</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Erken erişim oyun anahtarları (Steam Key), uygulama beta test erişimleri veya röportaj talepleri için:
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${STUDIO_INFO.pressEmail}`}
                className="inline-block font-mono text-sm font-semibold text-cyan-300 hover:underline"
              >
                {STUDIO_INFO.pressEmail}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
