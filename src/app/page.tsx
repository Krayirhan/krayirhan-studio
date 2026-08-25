import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { GameCard } from "@/components/games/GameCard";
import { PRODUCTS, APPS, GAMES } from "@/data/games";
import { Sparkles, Smartphone, ShieldCheck, Mail, ArrowRight, Award, Cpu, BookOpen, Layers } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero with LingoRise Spotlight */}
      <HeroSection />

      {/* Products Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-slate-800/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
              <Smartphone className="h-4 w-4" />
              <span>Ürün Vitrinimiz</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Öne Çıkan Ürünlerimiz
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Tüm Detayları Gör</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <GameCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Engineering & Design Philosophy */}
      <section className="border-y border-slate-800/80 bg-[#0a0e17]/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Neden Krayirhan Studio?
            </h2>
            <p className="mt-4 text-slate-400 text-base sm:text-lg">
              Kullanıcı psikolojisini anlayan arayüzler, katı test disiplini ve modern mobil mimariler inşa ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl border border-slate-800 bg-[#0e1422] p-8 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
                <BookOpen className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Bilişsel Bilim & Oyunlaştırma</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Aralıklı tekrar (Spaced Repetition) ve görsel bahçe metaforu gibi kanıtlanmış öğrenme mekaniklerini dijital deneyimlere entegre ediyoruz.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0e1422] p-8 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Yüksek Test & Kod Kalitesi</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Yüzlerce izole birim testi ile doğrulanan saf domain mantığı; çökmesiz, sıfır hatalı ve akıcı bir kullanıcı deneyimi sunar.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-[#0e1422] p-8 space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Offline-First & Çapraz Platform</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                İnternetsiz de kusursuz çalışan yerel depolama altyapısı ve bulutla otomatik eşitlenen kesintisiz mobil deneyim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-r from-indigo-950/60 via-[#0d121d] to-cyan-950/40 p-8 sm:p-12 lg:p-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              İş Birliği & Yatırım Görüşmeleri
            </h2>
            <p className="mt-4 text-base text-slate-300">
              LingoRise ve geliştirdiğimiz mobil ürünler hakkında basın talepleri, ortaklık teklifleri veya geri bildirimleriniz için bize ulaşın.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 hover:opacity-90 transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>İletişime Geçin</span>
              </Link>
              <Link
                href="/press"
                className="rounded-xl border border-slate-700 bg-slate-900/90 px-6 py-3.5 text-sm font-semibold text-slate-200 hover:text-white hover:border-slate-500 transition-all"
              >
                Press Kit & Medya
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
