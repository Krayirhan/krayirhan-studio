import { STUDIO_INFO } from "@/data/studioInfo";
import Image from "next/image";
import type { CSSProperties } from "react";
import { V2Header } from "@/components/v2/V2Header";
import { V2Footer } from "@/components/v2/V2Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stüdyo Hakkında (V2) | Krayirhan Studio",
  description: "Krayirhan Studio hikayesi, vizyonu, oyun ve mobil uygulama geliştirme tutkusu.",
};

export default function V2LegacyAboutPage() {
  return (
    <div className="v2-page min-h-screen bg-[#080a0d] text-[#f5f2eb] flex flex-col justify-between">
      <V2Header />
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-20 flex-1">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div
            className="eyebrow-tag gap-1.5 py-1 pr-3.5 text-xs font-semibold text-zinc-300 mb-4 inline-flex"
            style={{ "--tag-accent": "#f8963a" } as CSSProperties}
          >
            <span>STÜDYO / HAKKIMIZDA (V2)</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
            Küçük fikirleri, iyi çalışan ürünlere dönüştürüyoruz.
          </h1>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg">
            Krayirhan Studio, kısa molalara eşlik eden oyunlar ve günlük hayatı kolaylaştıran mobil araçlar üreten bağımsız bir stüdyo.
          </p>
        </div>

        {/* Story & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Hikayemiz ve Vizyonumuz
            </h2>
            <p>
              Krayirhan Studio, iyi bir fikrin gereksiz kalabalık olmadan da güçlü bir ürüne dönüşebileceğine inanarak 2026 yılında kuruldu.
            </p>
            <p>
              Ürün seçerken üç şeye bakıyoruz: ilk dakikada anlaşılması, tekrar kullanıldıkça değer üretmesi ve kendi karakterini taşıması. Bu yüzden her proje farklı görünse de aynı sade akış duygusunu paylaşır.
            </p>
            <div className="pt-4 border-t border-white/10 space-y-2 text-sm text-zinc-400">
              <p><span className="font-mono text-zinc-200">{STUDIO_INFO.foundedYear}</span><span className="mx-3 text-zinc-600">—</span>Kuruluş</p>
              <p><span className="font-mono text-zinc-200">Ankara</span><span className="mx-3 text-zinc-600">—</span>Merkez</p>
              <p><span className="font-mono text-zinc-200">Google Play</span><span className="mx-3 text-zinc-600">—</span>Ana dağıtım kanalı</p>
            </div>
          </div>

          {/* Founder Spotlight */}
          <div className="rounded-[2.5rem] border border-white/10 bg-[#111114] p-8 sm:p-10 space-y-6 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full overflow-hidden border border-white/20 bg-white p-0.5 shadow-lg">
                <Image
                  src="/brand/logo.png"
                  alt="Krayirhan Studio logosu"
                  fill
                  sizes="64px"
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  {STUDIO_INFO.founder.name}
                </h3>
                <p className="text-xs text-zinc-400 uppercase tracking-wider font-semibold">
                  {STUDIO_INFO.founder.role}
                </p>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed text-sm">
              &ldquo;Fikirden ürüne giden yolu mümkün olduğunca doğrudan ve saygılı tutuyorum: önce kullanıcının gerçek bir ihtiyacı, sonra onu taşıyacak sade bir arayüz.&rdquo;
            </p>
          </div>
        </div>
      </main>
      <V2Footer />
    </div>
  );
}
