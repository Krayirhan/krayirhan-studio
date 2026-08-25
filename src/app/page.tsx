import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProductSlider } from "@/components/home/FeaturedProductSlider";
import { PRODUCTS } from "@/data/games";
import { ArrowRight, Download, Gamepad2, Smartphone, Sparkles, Shield, Palette } from "lucide-react";

export default function HomePage() {
  // Map distinct 2 screens for each product
  const getScreens = (id: string) => {
    switch (id) {
      case "blok-dunyasi":
        return {
          primary: "/games/blok-dunyasi/cover.jpg",
          secondary: "/games/blok-dunyasi/gameplay-1.jpg",
          accentGlow: "bg-orange-500",
          tag: "Bulmaca Oyunu",
          colorClass: "text-orange-400 border-orange-500/20 bg-orange-500/10",
        };
      case "lingorise":
        return {
          primary: "/apps/lingorise/home-garden.png",
          secondary: "/apps/lingorise/practice-session.png",
          accentGlow: "bg-emerald-500",
          tag: "Dil Öğrenme",
          colorClass: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
        };
      case "benim-notlarim":
        return {
          primary: "/apps/benim-notlarim/cover.jpg",
          secondary: "/apps/benim-notlarim/editor.jpg",
          accentGlow: "bg-sky-500",
          tag: "Not Defteri",
          colorClass: "text-sky-400 border-sky-500/20 bg-sky-500/10",
        };
      default:
        return {
          primary: "/games/blok-dunyasi/cover.jpg",
          secondary: "/games/blok-dunyasi/gameplay-1.jpg",
          accentGlow: "bg-white",
          tag: "Mobil Ürün",
          colorClass: "text-zinc-300 border-white/20 bg-white/10",
        };
    }
  };

  return (
    <div className="pb-24 space-y-28 sm:space-y-36">
      {/* 1. Monumental Studio Hero */}
      <HeroSection />

      {/* 2. Interactive Borderless Cinematic Product Stage */}
      <FeaturedProductSlider />

      {/* 3. Expansive Linear / Apple Style Showcase Story Cards */}
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
            <span>Tüm Kataloğu İncele</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Stacked Expansive Showcase Cards */}
        <div className="space-y-10 sm:space-y-12">
          {PRODUCTS.map((product, index) => {
            const isBlokDunyasi = product.id === "blok-dunyasi";
            const isLingorise = product.id === "lingorise";
            const isNotlarim = product.id === "benim-notlarim";
            const meta = getScreens(product.id);

            return (
              <div
                key={product.id}
                className="group relative rounded-[2.5rem] border border-white/10 bg-[#111114] p-8 sm:p-12 lg:p-14 overflow-hidden hover:border-white/20 transition-all duration-500 shadow-2xl shadow-black/80"
              >
                {/* Ambient Soft Glow Background */}
                <div
                  className={`absolute right-10 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-[110px] opacity-20 group-hover:opacity-35 transition-all duration-700 pointer-events-none ${meta.accentGlow}`}
                />

                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  
                  {/* Left Column: Product Information & Direct Actions (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${meta.colorClass}`}>
                        {product.type === "game" ? (
                          <Gamepad2 className="h-3.5 w-3.5" />
                        ) : (
                          <Smartphone className="h-3.5 w-3.5" />
                        )}
                        <span>{meta.tag}</span>
                      </span>

                      <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-zinc-300">
                        {product.status === "Released" ? "Google Play'de Yayında" : product.status}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
                        <Link href={`/products/${product.slug}`} className="hover:text-zinc-200 transition-colors">
                          {product.title}
                        </Link>
                      </h3>
                      <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-xl">
                        {product.shortDescription}
                      </p>
                    </div>

                    {/* Highlight Feature Pills */}
                    <div className="flex flex-wrap gap-2 pt-1">
                      {product.features?.slice(0, 3).map((feat, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-zinc-300 backdrop-blur-md"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-white" />
                          <span>{feat.split(":")[0]}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      {product.links.playStore ? (
                        <a
                          href={product.links.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-xl shadow-white/10 hover:scale-105"
                        >
                          <Download className="h-4 w-4" />
                          <span>Google Play&apos;den İndir</span>
                        </a>
                      ) : (
                        <Link
                          href={`/products/${product.slug}`}
                          className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-xl shadow-white/10 hover:scale-105"
                        >
                          <span>Uygulamayı İncele</span>
                        </Link>
                      )}

                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
                      >
                        <span>Detaylar & Galeri</span>
                        <ArrowRight className="h-4 w-4 text-zinc-400" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Large, Scaled 3D Dual-Phone Showcase (5 cols) */}
                  <div className="lg:col-span-5 flex items-center justify-center lg:justify-end py-4">
                    <div className="relative flex items-center justify-center">
                      
                      {/* Phone 1: Main Menu / Garden */}
                      <div className="relative w-[135px] sm:w-[155px] aspect-[9/19.5] rounded-[2rem] p-1.5 bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-950 border border-white/25 shadow-2xl shadow-black -rotate-6 group-hover:-rotate-2 group-hover:scale-105 transition-all duration-500 z-10">
                        <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-black">
                          <img
                            src={meta.primary}
                            alt={`${product.title} Ekran 1`}
                            className="h-full w-full object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
                        </div>
                      </div>

                      {/* Phone 2: Gameplay / Editor / Practice */}
                      <div className="relative w-[135px] sm:w-[155px] aspect-[9/19.5] rounded-[2rem] p-1.5 bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-950 border border-white/25 shadow-2xl shadow-black rotate-6 group-hover:rotate-2 group-hover:scale-105 transition-all duration-500 mt-8 -ml-8 sm:-ml-10 z-20">
                        <div className="relative h-full w-full overflow-hidden rounded-[1.6rem] bg-black">
                          <img
                            src={meta.secondary}
                            alt={`${product.title} Ekran 2`}
                            className="h-full w-full object-cover object-top"
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-white/[0.08] pointer-events-none" />
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Experience & Studio Principles */}
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

      {/* 5. Studio Manifesto & Catalog Gateway */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-8 border-t border-white/10">
        <div className="space-y-6 max-w-3xl mx-auto">
          <span className="text-xs font-bold text-zinc-400 uppercase tracking-widest block">
            Stüdyo Felsefesi
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight font-display">
            Sade tasarımlar, dürüst yapımlar.
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Krayirhan Studio çatısı altında ürettiğimiz tüm oyun ve uygulamalarda tek bir kuralımız var: Kendimizin de her gün keyifle kullanacağı veya oynayacağı yapımları sizlerle buluşturmak.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-4 text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-2xl shadow-white/10 hover:scale-105"
            >
              <Download className="h-4 w-4" />
              <span>Google Play&apos;de Oyna</span>
            </a>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-zinc-200 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <span>Tüm Kataloğu İncele</span>
              <ArrowRight className="h-4 w-4 text-zinc-400" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
