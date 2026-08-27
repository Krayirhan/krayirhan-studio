import { STUDIO_INFO } from "@/data/studioInfo";
import Image from "next/image";
import type { CSSProperties } from "react";
import { FileArchive, Mail, Download } from "lucide-react";
import type { Metadata } from "next";
import { PRESS_ASSETS } from "@/data/pressKit";

export const metadata: Metadata = {
  title: "Press Kit & Medya",
  description: "Krayirhan Studio basın bültenleri, logoları, oyun & uygulama medya kiti.",
};

export default function PressKitPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="eyebrow-tag gap-1.5 py-1 pr-3.5 text-xs font-semibold text-zinc-300 mb-4" style={{ "--tag-accent": "#7cc3f2" } as CSSProperties}>
          <FileArchive className="h-4 w-4 text-white" />
          <span>Basın & Medya Kiti</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Press Kit
        </h1>
        <p className="mt-4 text-zinc-400 text-base sm:text-lg">
          Oyun basını, teknoloji yayıncıları, içerik üreticileri ve partnerlerimiz için resmi medya varlıkları ve stüdyo bilgileri.
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
                { label: "Web Sitesi", value: "https://studio.krayirhan.com" },
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
              Yüksek çözünürlüklü vektörel ve raster amblemler, banner&apos;lar ve ürün ekran görüntüleri.
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
                className="rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-bold text-white hover:bg-white/15 transition-all flex items-center gap-1.5"
              >
                <Download className="h-4 w-4" />
                <span>İndir</span>
              </a>
            </div>
            <div className="space-y-3">
              {PRESS_ASSETS.filter((asset) => asset.type !== "Logo").map((asset) => (
                <a
                  key={asset.title}
                  href={asset.downloadUrl}
                  download
                  className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm hover:border-white/30 transition-colors"
                >
                  <span className="text-zinc-200">{asset.title}</span>
                  <span className="text-xs text-zinc-400">{asset.format} · İndir</span>
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#121215] p-8 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-white font-bold">
              <Mail className="h-5 w-5" />
              <span>Basın & Röportaj Talepleri</span>
            </div>
            <p className="text-sm text-zinc-400">
              İnceleme kopyaları, beta erişimleri veya özel röportaj talepleri için doğrudan basın ekibimizle iletişime geçebilirsiniz.
            </p>
            <a
              href="mailto:press@krayirhan.com"
              className="inline-block text-sm font-bold text-white underline underline-offset-4 hover:text-zinc-300"
            >
              press@krayirhan.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
