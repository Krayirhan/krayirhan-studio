import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { GameCard } from "@/components/games/GameCard";
import { GAMES } from "@/data/games";
import { STUDIO_INFO } from "@/data/studioInfo";
import { Gamepad2, Sparkles, ShieldCheck, Mail, ArrowRight, Award } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero */}
      <HeroSection />

      {/* Games Catalog Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
              <Gamepad2 className="h-4 w-4" />
              <span>Portföyümüz</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Geliştirdiğimiz Oyunlar
            </h2>
          </div>
          <Link
            href="/games"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            <span>Tüm Projeleri Görüntüle</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GAMES.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* Studio Philosophy & Features */}
      <section className="border-y border-slate-800/80 bg-[#0a0e17]/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Neden Oyun Geliştiriyoruz?
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Krayirhan Studio, endüstri standartlarını bağımsız geliştirici esnekliği ve yaratıcılığı ile birleştirir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-800 bg-[#0e1422] p-8 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                <Sparkles className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Özgün Mekanikler</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Klişelerden uzak, oyuncunun reflekslerini ve taktiksel düşünme becerisini ödüllendiren yeni nesil oynanış döngüleri tasarlıyoruz.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0e1422] p-8 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Yüksek Görsel Kalite</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Her pikselinde özenle çalışılmış atmosferik ışıklandırmalar, görsel efektler ve modern grafik teknolojileri kullanıyoruz.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0e1422] p-8 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Topluluk Odaklılık</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Geliştirme sürecinin her aşamasında oyuncuların geri bildirimlerini dinliyor, devloglar ve açık testlerle birlikte büyüyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Publishing & Contact CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-indigo-500/30 bg-gradient-to-r from-indigo-950/60 via-[#0d121d] to-slate-900 p-8 sm:p-12 lg:p-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Yayıncı mısınız veya İş Birliği mi Arıyorsunuz?
            </h2>
            <p className="mt-4 text-base text-slate-300">
              Projelerimizin fonlanması, Steam/Konsol yayıncılığı, basın bültenleri ve iş ortaklıkları için doğrudan iletişime geçebilirsiniz.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>İletişime Geçin</span>
              </Link>
              <Link
                href="/press"
                className="rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white hover:border-slate-500 transition-all"
              >
                Press Kit Sayfasını İnceleyin
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
