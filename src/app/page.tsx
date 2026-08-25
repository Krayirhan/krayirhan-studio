import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { PRODUCTS, GAMES, APPS } from "@/data/games";
import { ArrowRight, Download, ExternalLink, QrCode } from "lucide-react";
import { QrDownloadButton } from "@/components/ui/QrDownloadModal";

export default function HomePage() {
  const blokDunyasi = PRODUCTS.find((p) => p.id === "blok-dunyasi");
  const lingorise = PRODUCTS.find((p) => p.id === "lingorise");
  const benimNotlarim = PRODUCTS.find((p) => p.id === "benim-notlarim");

  return (
    <div className="pb-24 space-y-20 sm:space-y-28">
      {/* 1. Human Studio Hero */}
      <HeroSection />

      {/* 2. Primary Featured Game Showcase: Blok Dünyası */}
      {blokDunyasi && (
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/10 bg-[#111114] p-8 sm:p-12 lg:p-16 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Info */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3 font-mono text-xs text-zinc-400 uppercase tracking-wider">
                  <span className="rounded-full bg-white/10 px-3 py-1 font-bold text-white">Mobil Oyun</span>
                  <span>Google Play</span>
                  <span>·</span>
                  <span className="text-emerald-400">Yayında</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight">
                  {blokDunyasi.title}
                </h2>

                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Klasik blok bulmaca mantığını meyve ve el yapımı kumaş temalarıyla buluşturan, oynaması akıcı ve tamamen internetsiz bir mobil bulmaca oyunu.
                </p>

                {/* Bullets */}
                <div className="space-y-2 pt-2 text-sm text-zinc-300 font-medium">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span>8x8 ızgara üzerinde stratejik blok yerleşimi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span>Meyve ve dikiş desenli canlı görsel temalar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
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
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-zinc-950 hover:bg-zinc-200 shadow-xl transition-all"
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
                    className="rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white hover:border-white/30 transition-all"
                  >
                    Detaylar & Ekran Görüntüleri ➔
                  </Link>
                </div>
              </div>

              {/* Right Images (Dual Phone Showcase) */}
              <div className="lg:col-span-6 flex items-center justify-center gap-4 sm:gap-6">
                <div className="w-1/2 max-w-[200px] rounded-[2.2rem] p-2 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/15 shadow-2xl shadow-black -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="aspect-[9/19.5] w-full overflow-hidden rounded-[1.8rem] bg-black">
                    <img
                      src="/games/blok-dunyasi/cover.jpg"
                      alt="Blok Dünyası Menü"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="w-1/2 max-w-[200px] rounded-[2.2rem] p-2 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/15 shadow-2xl shadow-black rotate-2 hover:rotate-0 transition-transform duration-500 mt-8 sm:mt-12">
                  <div className="aspect-[9/19.5] w-full overflow-hidden rounded-[1.8rem] bg-black">
                    <img
                      src="/games/blok-dunyasi/gameplay-1.jpg"
                      alt="Blok Dünyası Oynanış"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}

      {/* 3. Secondary Products Grid (LingoRise & Benim Notlarım) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest block mb-2">
              Uygulama Portföyümüz
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
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
            <div className="rounded-[2.5rem] border border-white/10 bg-[#111114] p-8 sm:p-10 flex flex-col justify-between space-y-8 hover:border-white/25 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
                  <span className="rounded-full bg-white/10 px-3 py-1 font-bold text-white">Kelime & Dil</span>
                  <span className="text-zinc-300">Beta Aşamasında</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {lingorise.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  İngilizce kelime bilgisini unutmayı engelleyen aralıklı tekrar mekaniği ve gelişen 'Learning Garden' görsel bahçe metaforuyla kalıcı kılan mobil uygulama.
                </p>
              </div>

              {/* Mockup */}
              <div className="flex justify-center py-2">
                <div className="w-full max-w-[210px] rounded-[2.2rem] p-2 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/15 shadow-xl">
                  <div className="aspect-[9/19.5] w-full overflow-hidden rounded-[1.8rem] bg-black">
                    <img
                      src="/apps/lingorise/home-garden.png"
                      alt="LingoRise Bahçe"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`/products/${lingorise.slug}`}
                  className="rounded-xl bg-white px-5 py-3 text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition-all"
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
            <div className="rounded-[2.5rem] border border-white/10 bg-[#111114] p-8 sm:p-10 flex flex-col justify-between space-y-8 hover:border-white/25 transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
                  <span className="rounded-full bg-white/10 px-3 py-1 font-bold text-white">Not & Üretkenlik</span>
                  <span className="text-emerald-400">Google Play</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {benimNotlarim.title}
                </h3>

                <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                  Material You dinamik duvar kağıdı renk uyumu, zengin metin editörü (kontrol listesi, kod, vurgu) ve %100 yerel gizlilik odaklı Android not uygulaması.
                </p>
              </div>

              {/* Mockup */}
              <div className="flex justify-center py-2">
                <div className="w-full max-w-[210px] rounded-[2.2rem] p-2 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/15 shadow-xl">
                  <div className="aspect-[9/19.5] w-full overflow-hidden rounded-[1.8rem] bg-black">
                    <img
                      src="/apps/benim-notlarim/cover.jpg"
                      alt="Benim Notlarım Ekranı"
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href="https://play.google.com/store/apps/details?id=com.benimnotlarim.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-white px-5 py-3 text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition-all flex items-center gap-1.5"
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

      {/* 4. Direct Studio Manifesto & Contact */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] border border-white/10 bg-[#111114] p-8 sm:p-12 lg:p-16">
          <div className="max-w-3xl space-y-6">
            <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
              Stüdyo Hakkında
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Sade tasarımlar, dürüst ürünler.
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Oyun ve uygulamalarımızı geliştirirken tek bir kuralımız var: Kendimizin de her gün keyifle kullanacağı veya oynayacağı yapımlar üretmek.
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-all"
              >
                İletişime Geçin
              </Link>
              <Link
                href="/press"
                className="rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white hover:border-white/30 transition-all"
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
