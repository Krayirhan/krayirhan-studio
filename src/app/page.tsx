import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { GameCard } from "@/components/games/GameCard";
import { StudioStats } from "@/components/home/StudioStats";
import { PRODUCTS } from "@/data/games";
import { Smartphone, Heart, Mail, ArrowRight, Palette, Gamepad2, Shield } from "lucide-react";

export default function HomePage() {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      {/* 1. Hero Section with Bento Dual Showcase & QR Modals */}
      <HeroSection />

      {/* 2. Player & User Centric Studio Pillars */}
      <StudioStats />

      {/* 3. Products Section (Blok Dünyası, LingoRise, Benim Notlarım) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              <Smartphone className="h-4 w-4" />
              <span>Oyun & Uygulama Vitrinimiz</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
              Tüm Oyunlar & Uygulamalar
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-300 hover:text-white transition-colors"
          >
            <span>Katalog Sayfasına Git</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((product) => (
            <GameCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* 4. Studio Values & Player Experience */}
      <section className="border-y border-white/10 bg-[#0d0d10] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold text-zinc-300 mb-4">
              <Heart className="h-3.5 w-3.5 text-zinc-300" />
              <span>Deneyim İlkelerimiz</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
              Neden Krayirhan Studio Yapımları?
            </h2>
            <p className="mt-4 text-zinc-400 text-base sm:text-lg">
              Kullanıcıların elinden bırakamayacağı, sade, eğlenceli ve günlük hayata değer katan mobil deneyimler inşa ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-3xl border border-white/10 bg-[#121215] p-8 space-y-4 shadow-xl hover:border-white/25 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white border border-white/10">
                <Palette className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Özgün Tasarım & Canlı Temalar</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Her oyunumuzda ve uygulamamızda göz yormayan, estetik ve samimi görsel dünyalar tasarlayarak kullanım keyfini zirveye çıkarıyoruz.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#121215] p-8 space-y-4 shadow-xl hover:border-white/25 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white border border-white/10">
                <Gamepad2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Sürükleyici Oyun Mekanikleri</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Klasik blok bulmacalardan kelime öğrenme bahçelerine kadar, oyuncuyu motive eden ve zihnini dinlendiren ödüllendirici mekanikler.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#121215] p-8 space-y-4 shadow-xl hover:border-white/25 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-white border border-white/10">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Gizlilik & Kesintisiz Özgürlük</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Kullanıcıyı boğmayan temiz bir deneyim, verilerinize saygı duyan altyapı ve dilediğiniz her yerde internetsiz tam çalışma güvencesi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#141418] to-[#09090b] p-8 sm:p-12 lg:p-16 shadow-2xl">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              İş Birliği & Yayıncılık Görüşmeleri
            </h2>
            <p className="mt-4 text-base text-zinc-300">
              Geliştirdiğimiz mobil oyunlar ve uygulamalar hakkında basın talepleri, ortaklık teklifleri veya geri bildirimleriniz için bize ulaşın.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-zinc-950 shadow-xl shadow-white/5 hover:bg-zinc-200 transition-all"
              >
                <Mail className="h-4 w-4" />
                <span>İletişime Geçin</span>
              </Link>
              <Link
                href="/press"
                className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-200 hover:text-white hover:border-white/30 transition-all"
              >
                Press Kit & Medya Varlıkları
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
