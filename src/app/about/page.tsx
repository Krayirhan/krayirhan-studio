import { STUDIO_INFO } from "@/data/studioInfo";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Flame, Sparkles, HeartHandshake, Gamepad2, Smartphone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stüdyo Hakkında | Krayirhan Studio",
  description: "Krayirhan Studio hikayesi, vizyonu, oyun ve mobil uygulama geliştirme tutkusu.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-20">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold text-zinc-300 mb-4">
          <Flame className="h-4 w-4 text-orange-400" />
          <span>Stüdyo Hikayesi</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
          Eğlenceli Oyunlar & Değer Katan Uygulamalar
        </h1>
        <p className="mt-4 text-zinc-400 text-base sm:text-lg">
          Bağımsız oyun geliştirmenin saf yaratıcılığı ile modern mobil deneyimlerin gücünü tek bir stüdyo çatısı altında buluşturuyoruz.
        </p>
      </div>

      {/* Story & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-zinc-300 leading-relaxed">
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
            Hikayemiz ve Vizyonumuz
          </h2>
          <p>
            Krayirhan Studio; bağımsız oyunların özgür ruhu ile mobil dünyanın üretkenlik odaklı gücünü aynı potada eritmek amacıyla 2026 yılında kuruldu.
          </p>
          <p>
            Bir yanda saatlerce keyifle oynanabilecek akıcı mobil bulmacalar geliştirirken; diğer yanda kelime öğrenimini kalıcı kılan oyunlaştırılmış eğitim araçları ve sade not alma deneyimleri inşa ediyoruz.
          </p>
          <div className="pt-4 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-2xl border border-white/10 bg-[#111114] p-4">
              <div className="text-2xl font-bold text-white font-display">{STUDIO_INFO.foundedYear}</div>
              <div className="text-xs text-zinc-400 mt-1">Kuruluş Yılı</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#111114] p-4">
              <div className="text-2xl font-bold text-white font-display">Google Play</div>
              <div className="text-xs text-zinc-400 mt-1">Oyun Dağıtımı</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#111114] p-4">
              <div className="text-2xl font-bold text-white font-display">Ankara</div>
              <div className="text-xs text-zinc-400 mt-1">Merkez</div>
            </div>
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
              <h3 className="text-xl font-bold text-white font-display">{STUDIO_INFO.founder.name}</h3>
              <p className="text-xs text-zinc-400 font-semibold">{STUDIO_INFO.founder.role} · Ankara, Türkiye</p>
            </div>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed">
            {STUDIO_INFO.description}
          </p>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <a
              href={STUDIO_INFO.founder.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-zinc-300 transition-colors"
            >
              <span>krayirhan.com</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <Link
              href="/contact"
              className="rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-md"
            >
              Destek & İletişim
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
