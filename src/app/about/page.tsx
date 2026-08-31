import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import { STUDIO_INFO } from "@/data/studioInfo";
import { V2Header } from "@/components/v2/V2Header";
import { V2Footer } from "@/components/v2/V2Footer";

export const metadata: Metadata = {
  title: "Stüdyo Hakkında | Krayirhan Studio",
  description: "Krayirhan Studio hikayesi, vizyonu, oyun ve mobil uygulama geliştirme tutkusu.",
};

export default function AboutPage() {
  return (
    <div className="v2-page min-h-screen bg-[#080a0d] text-[#f5f2eb] selection:bg-white selection:text-black flex flex-col justify-between">
      <V2Header />

      <main className="v2-content mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <p className="text-xs font-semibold tracking-[0.24em] text-neutral-400 uppercase">
            Stüdyo Hakkında
          </p>
          <h1 className="v2-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#fbf8f2] tracking-tight">
            Küçük fikirleri, kalıcı ürünlere dönüştürüyoruz.
          </h1>
          <p className="text-sm sm:text-base leading-relaxed text-[#b5b0a4]">
            Krayirhan Studio; kısa molalara eşlik eden oyunlar ve günlük hayatı kolaylaştıran mobil uygulamalar üreten bağımsız bir stüdyodur.
          </p>
        </div>

        {/* Story & Founder Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Story Column */}
          <div className="lg:col-span-7 space-y-8 text-neutral-300 leading-relaxed">
            <div className="space-y-4">
              <h2 className="v2-serif text-2xl sm:text-3xl font-bold text-[#fbf8f2]">
                Hikayemiz ve Vizyonumuz
              </h2>
              <p className="text-base sm:text-lg leading-relaxed text-[#b5b0a4]">
                Krayirhan Studio, iyi bir fikrin gereksiz kalabalık olmadan da güçlü ve kalıcı bir ürüne dönüşebileceğine inanarak 2026 yılında kuruldu.
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#a8a396]">
                Ürün tasarlarken üç temel ilkeye bağlı kalıyoruz: ilk dakikada anlaşılması, her kullanımda gerçek bir değer üretmesi ve kendine has bir görsel kimlik taşıması. Bu yüzden her projemiz bağımsız bir dünya sunsa da aynı sade akış duygusunu paylaşır.
              </p>
            </div>

            {/* Quick Milestones */}
            <div className="border-t border-white/10 pt-6 space-y-4 text-xs sm:text-sm">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-neutral-400">Kuruluş Yılı</span>
                <span className="font-mono font-semibold text-white">{STUDIO_INFO.foundedYear}</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-neutral-400">Merkez</span>
                <span className="font-semibold text-white">Ankara, Türkiye</span>
              </div>
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <span className="text-neutral-400">Dağıtım Kanalları</span>
                <span className="font-semibold text-white">Google Play Store & Android</span>
              </div>
            </div>
          </div>

          {/* Founder Card */}
          <div className="lg:col-span-5 rounded-3xl border border-white/15 bg-[#0c0e13] p-8 sm:p-10 space-y-7 shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl overflow-hidden border border-white/20 bg-white/5 p-2">
                <Image
                  src="/brand/krayirhan-stag-gold.png"
                  alt="Krayirhan Amblemi"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="v2-serif text-xl font-bold text-[#fbf8f2]">
                  {STUDIO_INFO.founder.name}
                </h3>
                <p className="text-xs text-neutral-400 font-medium">
                  {STUDIO_INFO.founder.role} · Ankara
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#b5b0a4]">
              &ldquo;Fikirden ürüne giden yolu mümkün olduğunca doğrudan ve saygılı tutuyorum: önce kullanıcının gerçek bir ihtiyacı, sonra onu taşıyacak sade ve huzurlu bir arayüz.&rdquo;
            </p>

            <div className="border-t border-white/10 pt-5 flex items-center justify-between">
              <a
                href={STUDIO_INFO.founder.portfolioUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-300 hover:text-white transition"
              >
                <span>muhsinfurkan.com</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-xs font-bold text-black shadow-md hover:bg-neutral-200 transition"
              >
                <span>Ürünleri Gör</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <V2Footer />
    </div>
  );
}
