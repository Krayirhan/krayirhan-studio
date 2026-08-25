import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductMarquee } from "@/components/home/ProductMarquee";
import { PRODUCTS } from "@/data/games";
import { ArrowRight, Download, Star } from "lucide-react";
import { QrDownloadButton } from "@/components/ui/QrDownloadModal";

export default function HomePage() {
  const blokDunyasi = PRODUCTS.find((p) => p.id === "blok-dunyasi");
  const lingorise = PRODUCTS.find((p) => p.id === "lingorise");
  const benimNotlarim = PRODUCTS.find((p) => p.id === "benim-notlarim");

  return (
    <div className="pb-24 space-y-16 sm:space-y-24">
      {/* 1. Monumental Centered Studio Hero */}
      <HeroSection />

      {/* 2. Seamless Infinite Product Flow / Marquee */}
      <ProductMarquee />

      {/* 3. Primary Featured Game Showcase: Blok Dünyası */}
      {blokDunyasi && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111114] p-8 sm:p-12 lg:p-16 hover:border-orange-500/30 transition-all duration-500 shadow-2xl">
            
            {/* Ambient Warm Citrus Background Aura */}
            <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-orange-500/[0.09] blur-[130px] rounded-full pointer-events-none group-hover:bg-orange-500/[0.15] transition-all duration-700" />
            <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] bg-yellow-500/[0.04] blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-300">
                  <span className="rounded-full bg-orange-500/15 border border-orange-500/30 px-3 py-1 font-bold text-orange-400">
                    Öne Çıkan Mobil Oyun
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-zinc-300 font-medium">
                    <Star className="h-3 w-3 text-amber-400 fill-amber-400" />
                    <span>4.8+ Google Play Puanı</span>
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight group-hover:text-zinc-100 transition-colors font-display">
                  {blokDunyasi.title}
                </h2>

                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Klasik blok bulmaca mantığını meyve ve el yapımı kumaş temalarıyla buluşturan, oynaması akıcı ve tamamen internetsiz bir mobil bulmaca oyunu.
                </p>

                {/* Bullets */}
                <div className="space-y-2.5 pt-1 text-sm text-zinc-300 font-medium">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold">✓</span>
                    <span>8x8 ızgara üzerinde stratejik blok ve kombo yerleşimi</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold">✓</span>
                    <span>Meyve ve dikiş desenli canlı görsel temalar</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold">✓</span>
                    <span>İnternet bağlantısı gerektirmeyen %100 çevrimdışı oynanış</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  {blokDunyasi.links.playStore && (
                    <a
                      href={blokDunyasi.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-zinc-950 hover:bg-zinc-200 shadow-xl shadow-white/10 hover:scale-105 transition-all"
                    >
                      <Download className="h-4 w-4" />
                      <span>Google Play'den İndir</span>
                    </a>
                  )}

                  {blokDunyasi.links.playStore && (
                    <QrDownloadButton
                      title={blokDunyasi.title}
                      url={blokDunyasi.links.playStore}
                      coverImage={blokDunyasi.coverImage}
                      category="Mobil Oyun"
                    />
                  )}

                  <Link
                    href={`/products/${blokDunyasi.slug}`}
                    className="rounded-xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white hover:border-white/30 transition-all"
                  >
                    Detaylar & Galeri ➔
                  </Link>
                </div>
              </div>

              {/* Right Images (Bold Dual Phone Mockup) */}
              <div className="lg:col-span-6 flex items-center justify-center gap-4 sm:gap-6 py-4">
                
                {/* Phone 1 */}
                <div className="w-1/2 max-w-[230px] sm:max-w-[250px] rounded-[2.5rem] p-2.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/20 shadow-2xl shadow-black/90 -rotate-3 group-hover:-rotate-1 group-hover:scale-105 transition-all duration-500">
                  <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-black">
                    <img
                      src="/games/blok-dunyasi/cover.jpg"
                      alt="Blok Dünyası Menü"
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="w-1/2 max-w-[230px] sm:max-w-[250px] rounded-[2.5rem] p-2.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/20 shadow-2xl shadow-black/90 rotate-3 group-hover:rotate-1 group-hover:scale-105 transition-all duration-500 mt-8 sm:mt-12">
                  <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-black">
                    <img
                      src="/games/blok-dunyasi/gameplay-1.jpg"
                      alt="Blok Dünyası Oynanış"
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      )}

      {/* 4. Secondary Products Grid (Tightly Balanced Proportions) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block mb-2">
              Uygulama Portföyümüz
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-display">
              Öğrenme ve Üretkenlik Araçları
            </h2>
          </div>

          <Link
            href="/products"
            className="text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Tüm Kataloğu Gör</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card: LingoRise */}
          {lingorise && (
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111114] p-8 sm:p-10 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-500 shadow-xl">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/[0.08] blur-[110px] rounded-full pointer-events-none group-hover:bg-emerald-500/[0.14] transition-all duration-700" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 font-bold text-emerald-400">
                    Kelime & Dil Bahçesi
                  </span>
                  <span className="text-emerald-400 font-semibold">Mobil Uygulama</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-zinc-100 transition-colors font-display">
                  {lingorise.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  İngilizce kelime bilgisini unutmayı engelleyen aralıklı tekrar (SRS) algoritması ve gelişen 'Learning Garden' görsel bahçe metaforuyla kalıcı kılan mobil uygulama.
                </p>
              </div>

              {/* Mockup with Glare */}
              <div className="relative z-10 flex justify-center py-6">
                <div className="w-full max-w-[220px] sm:max-w-[240px] rounded-[2.4rem] p-2.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/20 shadow-2xl shadow-black/80 group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500">
                  <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.9rem] bg-black">
                    <img
                      src="/apps/lingorise/home-garden.png"
                      alt="LingoRise Bahçe"
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07] pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/products/${lingorise.slug}`}
                  className="rounded-xl bg-white px-6 py-3 text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition-all hover:scale-105"
                >
                  Uygulamayı İncele
                </Link>
                <Link
                  href="/press"
                  className="text-xs font-semibold text-zinc-400 hover:text-white"
                >
                  Press Kit ➔
                </Link>
              </div>
            </div>
          )}

          {/* Card: Benim Notlarım */}
          {benimNotlarim && (
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#111114] p-8 sm:p-10 flex flex-col justify-between hover:border-sky-500/30 transition-all duration-500 shadow-xl">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-500/[0.08] blur-[110px] rounded-full pointer-events-none group-hover:bg-sky-500/[0.14] transition-all duration-700" />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between text-xs text-zinc-400">
                  <span className="rounded-full bg-sky-500/15 border border-sky-500/30 px-3 py-1 font-bold text-sky-400">
                    Not & Üretkenlik
                  </span>
                  <span className="text-sky-400 font-semibold">Google Play</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-zinc-100 transition-colors font-display">
                  {benimNotlarim.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Material You dinamik duvar kağıdı renk uyumu, zengin metin editörü (kontrol listesi, kod blokları, vurgulama) ve %100 yerel gizlilik odaklı Android not uygulaması.
                </p>
              </div>

              {/* Mockup with Glare */}
              <div className="relative z-10 flex justify-center py-6">
                <div className="w-full max-w-[220px] sm:max-w-[240px] rounded-[2.4rem] p-2.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/20 shadow-2xl shadow-black/80 group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                  <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.9rem] bg-black">
                    <img
                      src="/apps/benim-notlarim/cover.jpg"
                      alt="Benim Notlarım Ekranı"
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07] pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between">
                <a
                  href="https://play.google.com/store/apps/details?id=com.benimnotlarim.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-6 py-3 text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition-all flex items-center gap-1.5 hover:scale-105"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Google Play'den İndir</span>
                </a>
                <Link
                  href={`/products/${benimNotlarim.slug}`}
                  className="text-xs font-semibold text-zinc-400 hover:text-white"
                >
                  Ekran Görüntüleri ➔
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* 5. Direct Studio Manifesto & Contact */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#141418] to-[#0d0d10] p-8 sm:p-12 lg:p-16 text-center flex flex-col items-center">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
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
                className="rounded-xl bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 hover:scale-105"
              >
                İletişime Geçin
              </Link>
              <Link
                href="/press"
                className="rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white hover:border-white/30 transition-all"
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
