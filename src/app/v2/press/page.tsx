import { STUDIO_INFO } from "@/data/studioInfo";
import Image from "next/image";
import type { CSSProperties } from "react";
import { FileArchive, Download } from "lucide-react";
import type { Metadata } from "next";
import { PRESS_ASSETS } from "@/data/pressKit";
import { V2Header } from "@/components/v2/V2Header";
import { V2Footer } from "@/components/v2/V2Footer";

export const metadata: Metadata = {
  title: "Press Kit & Medya (V2) | Krayirhan Studio",
  description: "Krayirhan Studio basın bültenleri, logoları, oyun & uygulama medya kiti.",
};

export default function V2LegacyPressKitPage() {
  return (
    <div className="v2-page min-h-screen bg-[#080a0d] text-[#f5f2eb] flex flex-col justify-between">
      <V2Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16 flex-1">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="eyebrow-tag gap-1.5 py-1 pr-3.5 text-xs font-semibold text-zinc-300 mb-4 inline-flex"
            style={{ "--tag-accent": "#7cc3f2" } as CSSProperties}
          >
            <FileArchive className="h-4 w-4 text-white" />
            <span>Basın & Medya Kiti (V2)</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Press Kit
          </h1>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Oyun basını, teknoloji yayıncıları ve partnerlerimiz için resmi medya varlıkları.
          </p>
        </div>

        {/* Grid: Factsheet & Assets */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Factsheet & History */}
          <div className="lg:col-span-6 space-y-8">
            <div className="rounded-3xl border border-white/10 bg-[#121215] p-8 space-y-6 shadow-xl">
              <h2 className="text-2xl font-bold text-white">Hızlı Bilgiler (Factsheet)</h2>
              <div className="divide-y divide-white/10 text-sm">
                {[
                  { label: "Stüdyo Adı", value: STUDIO_INFO.name },
                  { label: "Faaliyet Alanı", value: "Bağımsız Oyunlar & Dijital Uygulamalar" },
                  { label: "Kurucu", value: STUDIO_INFO.founder.name },
                  { label: "Kuruluş Yılı", value: STUDIO_INFO.foundedYear },
                  { label: "Lokasyon", value: STUDIO_INFO.location },
                  { label: "Web Sitesi", value: "https://studio.krayirhan.com/v2" },
                  { label: "Basın İletişim", value: "press@krayirhan.com" },
                  { label: "Platformlar", value: "Google Play (Android), Web" },
                ].map((fact, i) => (
                  <div key={i} className="py-3 flex justify-between gap-4">
                    <span className="text-zinc-400">{fact.label}</span>
                    <span className="font-semibold text-zinc-200 text-right">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#121215] p-8 space-y-4 shadow-xl">
              <h2 className="text-2xl font-bold text-white">Stüdyo Açıklaması</h2>
              <p className="text-zinc-300 leading-relaxed text-sm">
                {STUDIO_INFO.description}
              </p>
            </div>
          </div>

          {/* Right: Media Assets & Press Contact */}
          <div className="lg:col-span-6 space-y-8">
            <div className="rounded-3xl border border-white/10 bg-[#121215] p-8 space-y-6 shadow-xl">
              <h2 className="text-2xl font-bold text-white">Medya Varlıkları & Logo</h2>
              <p className="text-sm text-zinc-400">
                Yüksek çözünürlüklü amblemler ve ürün ekran görüntüleri.
              </p>

              <div className="flex items-center gap-4 p-4 rounded-2xl border border-white/10 bg-black/40">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full overflow-hidden border border-white/20 bg-white p-1">
                  <Image src="/brand/logo.png" alt="Krayirhan Studio logosu" fill sizes="64px" className="rounded-full object-cover" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-bold text-white">Resmi Stüdyo Amblemi</h4>
                  <p className="text-xs text-zinc-400">PNG Formatı (Yüksek Çözünürlük)</p>
                </div>
                <a
                  href="/brand/logo.png"
                  download="Krayirhan-Studio-Logo.png"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-zinc-950 font-bold text-xs hover:bg-zinc-200 transition"
                >
                  <Download className="h-4 w-4" />
                  <span>İndir</span>
                </a>
              </div>

              {/* Media Downloads List */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <h3 className="text-sm font-bold text-white">Ekran Görüntüleri ve Basın Kitleri</h3>
                <div className="space-y-2">
                  {PRESS_ASSETS.map((asset, i) => (
                    <div key={i} className="flex items-center justify-between p-3.5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition text-sm">
                      <div>
                        <span className="font-semibold text-zinc-200">{asset.title}</span>
                        <span className="text-xs text-zinc-500 block">{asset.format} · {asset.type}</span>
                      </div>
                      <a
                        href={asset.downloadUrl}
                        download
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white transition"
                        aria-label={`${asset.title} indir`}
                      >
                        <Download className="h-4 w-4" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <V2Footer />
    </div>
  );
}
