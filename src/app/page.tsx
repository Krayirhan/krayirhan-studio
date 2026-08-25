import Link from "next/link";
import Image from "next/image";
import { HeroSection } from "@/components/home/HeroSection";
import { PRODUCTS } from "@/data/games";
import { ArrowRight, Download, Leaf, LockKeyhole, Sparkles } from "lucide-react";
import { QrDownloadButton } from "@/components/ui/QrDownloadModal";

export default function HomePage() {
  const blokDunyasi = PRODUCTS.find((p) => p.id === "blok-dunyasi");
  const lingorise = PRODUCTS.find((p) => p.id === "lingorise");
  const benimNotlarim = PRODUCTS.find((p) => p.id === "benim-notlarim");

  return (
    <div className="pb-24 space-y-20 sm:space-y-28">
      {/* 1. Monumental Centered Studio Hero */}
      <HeroSection />

      {/* 2. Primary Featured Game Showcase: Blok Dünyası */}
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
                    <span>Google Play&apos;de Yayında</span>
                  </span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight group-hover:text-zinc-100 transition-colors font-display">
                  {blokDunyasi.title}
                </h2>

                <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
                  Her boşlukta kaldığınız yerden devam edebileceğiniz; renkli temaları, stratejik hamleleri ve internetsiz oynanışı bir araya getiren blok bulmaca oyunu.
                </p>

                {/* Bullets */}
                <div className="space-y-2.5 pt-1 text-sm text-zinc-300 font-medium">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold">✓</span>
                    <span>Her hamlede yeni bir strateji kurduran 8×8 blok bulmacaları</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold">✓</span>
                    <span>Oyunu taze tutan meyve ve kumaş temalı renkli dünyalar</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500/20 text-orange-400 text-xs font-bold">✓</span>
                    <span>İnternet olmadan da her yerde oynanabilen kesintisiz deneyim</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  {blokDunyasi.links.playStore && (
                    <a
                      href={blokDunyasi.links.playStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-event="product_download"
                      data-analytics-target="blok-dunyasi"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-zinc-950 hover:bg-zinc-200 shadow-xl shadow-white/10 hover:scale-105 transition-all"
                    >
                      <Download className="h-4 w-4" />
                      <span>Google Play&apos;den İndir</span>
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
                    data-analytics-event="product_details_open"
                    data-analytics-target="blok-dunyasi"
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
                    <Image
                      src="/games/blok-dunyasi/cover.jpg"
                      alt="Blok Dünyası ana menü ve oyun başlangıç ekranı"
                      fill
                      priority
                      sizes="(max-width: 640px) 42vw, (max-width: 1024px) 30vw, 230px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="w-1/2 max-w-[230px] sm:max-w-[250px] rounded-[2.5rem] p-2.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/20 shadow-2xl shadow-black/90 rotate-3 group-hover:rotate-1 group-hover:scale-105 transition-all duration-500 mt-8 sm:mt-12">
                  <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[2rem] bg-black">
                    <Image
                      src="/games/blok-dunyasi/gameplay-1.jpg"
                      alt="Blok Dünyası blok yerleştirme oyun ekranı"
                      fill
                      priority
                      sizes="(max-width: 640px) 42vw, (max-width: 1024px) 30vw, 230px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>
      )}

      {/* 3. Secondary Products Grid (Tightly Balanced Proportions) */}
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
            data-analytics-event="catalog_open"
            data-analytics-target="products"
            className="text-xs sm:text-sm font-semibold text-zinc-300 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <span>Tüm ürünleri keşfet</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card: LingoRise */}
          {lingorise && (
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-emerald-400/10 bg-gradient-to-br from-[#0e1714] via-[#111114] to-[#111114] p-8 sm:p-10 flex flex-col justify-between hover:border-emerald-500/30 transition-all duration-500 shadow-xl">
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
                  Unutmaya göre planlanan kısa tekrarlarla İngilizce kelimeleri daha uzun süre hatırlamanıza yardımcı olur.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-xs font-medium text-emerald-100/80">
                  <span className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-2.5 py-1">Akıllı tekrar</span>
                  <span className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-2.5 py-1">Görünür ilerleme</span>
                </div>
              </div>

              {/* Mockup with Glare (Enlarged & Centered) */}
              <div className="relative z-10 flex justify-center py-6">
                <div className="w-full max-w-[220px] sm:max-w-[240px] rounded-[2.4rem] p-2.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/20 shadow-2xl shadow-black/80 group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500">
                  <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.9rem] bg-black">
                    <Image
                      src="/apps/lingorise/home-garden.png"
                      alt="LingoRise günlük pratik ve öğrenme bahçesi ekranı"
                      fill
                      sizes="(max-width: 640px) 62vw, (max-width: 1024px) 36vw, 240px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07] pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-start gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href={`/products/${lingorise.slug}`}
                  data-analytics-event="product_details_open"
                  data-analytics-target="lingorise"
                  className="rounded-xl bg-white px-6 py-3 text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition-all hover:scale-105"
                >
                  Uygulamayı İncele
                </Link>
                <Link
                  href="/press"
                  data-analytics-event="press_kit_open"
                  data-analytics-target="lingorise"
                  className="text-xs font-semibold text-zinc-400 hover:text-white"
                >
                  Press Kit ➔
                </Link>
              </div>
            </div>
          )}

          {/* Card: Benim Notlarım */}
          {benimNotlarim && (
            <div className="group relative overflow-hidden rounded-[2.5rem] border border-sky-400/10 bg-gradient-to-br from-[#0e151a] via-[#111114] to-[#111114] p-8 sm:p-10 flex flex-col justify-between hover:border-sky-500/30 transition-all duration-500 shadow-xl">
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
                  Düşüncelerinizi hızla yakalamanız için zengin düzenleme araçları ve cihazınızda kalan notlarla tasarlandı.
                </p>
                <div className="flex flex-wrap gap-2 pt-1 text-xs font-medium text-sky-100/80">
                  <span className="rounded-full border border-sky-400/15 bg-sky-400/10 px-2.5 py-1">Zengin metin</span>
                  <span className="rounded-full border border-sky-400/15 bg-sky-400/10 px-2.5 py-1">Yerel gizlilik</span>
                </div>
              </div>

              {/* Mockup with Glare (Enlarged & Centered) */}
              <div className="relative z-10 flex justify-center py-6">
                <div className="w-full max-w-[220px] sm:max-w-[240px] rounded-[2.4rem] p-2.5 bg-gradient-to-b from-zinc-700 via-zinc-800 to-zinc-900 border border-white/20 shadow-2xl shadow-black/80 group-hover:scale-105 group-hover:rotate-1 transition-all duration-500">
                  <div className="relative aspect-[9/19.5] w-full overflow-hidden rounded-[1.9rem] bg-black">
                    <Image
                      src="/apps/benim-notlarim/cover.jpg"
                      alt="Benim Notlarım koyu tema not listesi ekranı"
                      fill
                      sizes="(max-width: 640px) 62vw, (max-width: 1024px) 36vw, 240px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.07] pointer-events-none" />
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex flex-col items-start gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <a
                  href="https://play.google.com/store/apps/details?id=com.benimnotlarim.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-event="product_download"
                  data-analytics-target="benim-notlarim"
                  className="rounded-xl bg-white px-6 py-3 text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition-all flex items-center gap-1.5 hover:scale-105"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Google Play&apos;den İndir</span>
                </a>
                <Link
                  href={`/products/${benimNotlarim.slug}`}
                  data-analytics-event="product_details_open"
                  data-analytics-target="benim-notlarim"
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
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#141418] to-[#0d0d10] p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-emerald-400/[0.06] blur-[100px]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-3xl space-y-6 lg:text-left">
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
              Stüdyo Felsefesi
            </span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display">
              Sade tasarımlar, dürüst ürünler.
            </h2>
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
              Kendimizin de her gün açmak isteyeceği oyunlar ve araçlar üretiyoruz: anlaşılır, odaklı ve kullanıcıyı gereksiz engellerle uğraştırmayan deneyimler.
            </p>
            <div className="pt-4 flex flex-wrap items-center gap-4 lg:justify-start">
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

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-left">
              <Sparkles className="mb-3 h-5 w-5 text-amber-300" />
              <p className="text-sm font-bold text-white">Önce amaç</p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">Her ekranda tek bir işi daha kolay ve anlaşılır hâle getirmeyi hedefleriz.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-left">
              <LockKeyhole className="mb-3 h-5 w-5 text-sky-300" />
              <p className="text-sm font-bold text-white">Kullanıcıya saygı</p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">Uygun olduğunda çevrimdışı çalışma ve yerel veri yaklaşımını önceliklendiririz.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-left">
              <Leaf className="mb-3 h-5 w-5 text-emerald-300" />
              <p className="text-sm font-bold text-white">Özenle gelişir</p>
              <p className="mt-1 text-xs leading-relaxed text-zinc-400">Küçük ayrıntıları dinler, ürünleri gerçek kullanım alışkanlıklarıyla geliştiririz.</p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-l-2 border-white/15 pl-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">Stüdyodan</span>
            <p className="mt-3 text-lg font-medium leading-relaxed text-zinc-200">
              Krayirhan Studio, Ankara&apos;dan bağımsız olarak geliştirilen mobil deneyimlerin arkasındaki küçük stüdyo.
            </p>
          </div>
          <Link href="/about" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-zinc-300 transition-colors hover:text-white">
            Stüdyoyu tanıyın <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
