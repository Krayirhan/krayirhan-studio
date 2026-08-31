import Image from "next/image";
import { Download, FileArchive, Mail } from "lucide-react";
import type { Metadata } from "next";
import { STUDIO_INFO } from "@/data/studioInfo";
import { PRESS_ASSETS } from "@/data/pressKit";
import { V2Header } from "@/components/v2/V2Header";
import { V2Footer } from "@/components/v2/V2Footer";

export const metadata: Metadata = {
  title: "Basın Kiti (Press Kit) | Krayirhan Studio V2",
  description: "Krayirhan Studio resmi medya varlıkları, logoları, factsheet ve stüdyo basın kiti.",
};

export default function V2PressPage() {
  const factsheet = [
    { label: "Stüdyo Adı", value: STUDIO_INFO.name },
    { label: "Faaliyet Alanı", value: "Bağımsız Mobil Oyunlar & Uygulamalar" },
    { label: "Kurucu", value: STUDIO_INFO.founder.name },
    { label: "Kuruluş Yılı", value: STUDIO_INFO.foundedYear },
    { label: "Lokasyon", value: STUDIO_INFO.location },
    { label: "Resmi Web", value: "https://studio.krayirhan.com/v2" },
    { label: "Basın & İletişim", value: "contact@krayirhan.com" },
    { label: "Ana Dağıtım", value: "Google Play Store (Android)" },
  ];

  return (
    <div className="v2-page min-h-screen bg-[#080a0d] text-[#f5f2eb] selection:bg-white selection:text-black flex flex-col justify-between">
      <V2Header />

      <main className="v2-content mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-semibold tracking-[0.24em] text-neutral-400 uppercase">
            Medya & Yayıncılar İçin
          </p>
          <h1 className="v2-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#fbf8f2] tracking-tight">
            Basın Kiti (Press Kit)
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-[#b5b0a4]">
            Oyun basını, teknoloji editörleri, içerik üreticileri ve iş ortaklarımız için resmi stüdyo varlıkları ve bilgiler.
          </p>
        </div>

        {/* Grid: Factsheet & Assets */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Factsheet */}
          <div className="lg:col-span-6 space-y-8">
            <div className="rounded-3xl border border-white/15 bg-[#0c0e13] p-8 sm:p-10 space-y-6 shadow-2xl">
              <h2 className="v2-serif text-2xl font-bold text-[#fbf8f2]">
                Hızlı Bilgiler (Factsheet)
              </h2>
              <div className="divide-y divide-white/10 text-sm">
                {factsheet.map((fact, i) => (
                  <div key={i} className="py-3.5 flex justify-between gap-4">
                    <span className="text-neutral-400">{fact.label}</span>
                    <span className="font-semibold text-neutral-200 text-right">{fact.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/15 bg-[#0c0e13] p-8 space-y-4 shadow-2xl">
              <h2 className="v2-serif text-2xl font-bold text-[#fbf8f2]">
                Stüdyo Hakkında
              </h2>
              <p className="text-sm leading-relaxed text-[#b5b0a4]">
                {STUDIO_INFO.description}
              </p>
            </div>
          </div>

          {/* Right: Media Assets & Downloads */}
          <div className="lg:col-span-6 space-y-8">
            <div className="rounded-3xl border border-white/15 bg-[#0c0e13] p-8 sm:p-10 space-y-6 shadow-2xl">
              <h2 className="v2-serif text-2xl font-bold text-[#fbf8f2]">
                Resmi Logolar & Varlıklar
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                Yüksek çözünürlüklü şeffaf logolar, amblemler ve ürün varlıkları.
              </p>

              {/* Stag Emblem Card */}
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-black/60 border border-white/15 p-2">
                    <Image
                      src="/brand/krayirhan-stag-gold.png"
                      alt="Geyik Amblemi"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Geyik Amblemi (Vektörel Çizim)</h3>
                    <p className="text-xs text-neutral-400">Şeffaf PNG · Yüksek Çözünürlük</p>
                  </div>
                </div>
                <a
                  href="/brand/krayirhan-stag-gold.png"
                  download="Krayirhan-Stag.png"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-bold text-black hover:bg-neutral-200 transition"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>İndir</span>
                </a>
              </div>

              {/* Logo Card */}
              <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-black/60 border border-white/15 p-2">
                    <Image
                      src="/brand/logo.png"
                      alt="Stüdyo Logosu"
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Resmi Stüdyo Logosu</h3>
                    <p className="text-xs text-neutral-400">Şeffaf PNG Formatı</p>
                  </div>
                </div>
                <a
                  href="/brand/logo.png"
                  download="Krayirhan-Studio-Logo.png"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-white px-4 py-2 text-xs font-bold text-black hover:bg-neutral-200 transition"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>İndir</span>
                </a>
              </div>

              {/* Other Press Kit Assets */}
              <div className="space-y-3 pt-2 border-t border-white/10">
                <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">
                  Ürün Ekran Paketleri
                </p>
                {PRESS_ASSETS.filter((a) => a.type !== "Logo").map((asset) => (
                  <a
                    key={asset.title}
                    href={asset.downloadUrl}
                    download
                    className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3 text-xs text-neutral-300 hover:border-white/25 hover:text-white transition"
                  >
                    <span>{asset.title}</span>
                    <span className="font-mono text-neutral-500">{asset.format} · İndir</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <V2Footer />
    </div>
  );
}
