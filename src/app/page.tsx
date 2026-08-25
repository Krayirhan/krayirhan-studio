import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProductSlider } from "@/components/home/FeaturedProductSlider";
import { PRODUCTS } from "@/data/games";
import { ArrowRight, Download, Gamepad2, Smartphone, Sparkles, Shield, Palette, Mail, FileText } from "lucide-react";

export default function HomePage() {
  return (
    <div className="pb-24 space-y-28 sm:space-y-36">
      {/* 1. Monumental Centered Studio Hero */}
      <HeroSection />

      {/* 2. Interactive Borderless Cinematic Product Stage */}
      <FeaturedProductSlider />

      {/* 3. All Products Catalog — Borderless Editorial Grid (Kutusuz / Saf Tasarım) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              <Smartphone className="h-4 w-4" />
              <span>Tüm Stüdyo Kataloğu</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
              Oyunlar & Mobil Uygulamalar
            </h2>
          </div>

          <Link
            href="/products"
            className="text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Katalog Sayfasına Git</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 3-Column Borderless Layout (No Gray Box Containers) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-14">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col justify-between space-y-6 select-none"
            >
              {/* Product Visual Showcase (Floating on Canvas) */}
              <Link
                href={`/products/${product.slug}`}
                className="relative aspect-[16/11] w-full overflow-hidden rounded-3xl bg-zinc-950/60 border border-white/10 flex items-center justify-center p-6 hover:border-white/30 transition-all duration-500 shadow-2xl group-hover:scale-[1.02]"
              >
                <img
                  src={product.coverImage}
                  alt={product.title}
                  className="max-h-[170px] w-auto object-contain rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </Link>

              {/* Product Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-zinc-300">
                    {product.type === "game" ? (
                      <Gamepad2 className="h-3.5 w-3.5 text-orange-400" />
                    ) : (
                      <Smartphone className="h-3.5 w-3.5 text-emerald-400" />
                    )}
                    <span>{product.type === "game" ? "Mobil Oyun" : "Uygulama"}</span>
                  </span>

                  <span className="text-xs font-medium text-emerald-400">
                    {product.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors font-display">
                  <Link href={`/products/${product.slug}`}>{product.title}</Link>
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                  {product.shortDescription}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center justify-between border-t border-white/10">
                {product.links.playStore ? (
                  <a
                    href={product.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-md hover:scale-105"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Google Play</span>
                  </a>
                ) : (
                  <span className="text-xs font-medium text-zinc-500">Çok Yakında</span>
                )}

                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-zinc-300 hover:text-white group-hover:translate-x-1 transition-all"
                >
                  <span>İncele</span>
                  <ArrowRight className="h-3.5 w-3.5 text-zinc-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Experience & Studio Principles — Borderless 3 Columns */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">
            Deneyim İlkelerimiz
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display">
            Neden Krayirhan Studio Yapımları?
          </h2>
          <p className="text-base text-zinc-400 leading-relaxed">
            Kullanıcıların elinden bırakamayacağı, sade, eğlenceli ve günlük hayata değer katan mobil deneyimler inşa ediyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/15 text-white">
              <Palette className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Özgün Tasarım & Canlı Temalar</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Her oyunumuzda ve uygulamamızda göz yormayan, estetik ve samimi görsel dünyalar tasarlayarak kullanım keyfini zirveye çıkarıyoruz.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/15 text-white">
              <Gamepad2 className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Sürükleyici Oyun Mekanikleri</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Klasik blok bulmacalardan kelime öğrenme bahçelerine kadar, oyuncuyu motive eden ve zihnini dinlendiren ödüllendirici mekanikler.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/15 text-white">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-display">Gizlilik & Kesintisiz Özgürlük</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Kullanıcıyı boğmayan temiz bir deneyim, verilerinize saygı duyan altyapı ve dilediğiniz her yerde internetsiz tam çalışma güvencesi.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Studio Manifesto & Contact (Borderless Clean Finale) */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-8 border-t border-white/10">
        <div className="space-y-6 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">
            Stüdyo Felsefesi
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display">
            Sade tasarımlar, dürüst ürünler.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Oyun ve uygulamalarımızı geliştirirken tek bir kuralımız var: Kendimizin de her gün keyifle kullanacağı veya oynayacağı yapımlar üretmek.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-2xl shadow-white/10 hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              <span>İletişime Geçin</span>
            </Link>
            <Link
              href="/press"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <FileText className="h-4 w-4 text-zinc-400" />
              <span>Press Kit & Medya</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
