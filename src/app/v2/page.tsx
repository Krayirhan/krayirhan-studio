import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Gamepad2,
  Globe2,
  Menu,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sword,
  Users,
} from "lucide-react";
import { PRODUCTS } from "@/data/games";

const principles = [
  { icon: Gamepad2, title: "Özgün Oyun Deneyimleri", text: "Merakı canlı tutan, akıcı ve keyifli dünyalar tasarlıyoruz." },
  { icon: Smartphone, title: "Kullanıcı Odaklı Uygulamalar", text: "Günlük hayatı kolaylaştıran sade dijital araçlar geliştiriyoruz." },
  { icon: Sword, title: "Kalite ve Tutku", text: "Her ayrıntıya özen gösteriyor, fikri güçlü deneyime dönüştürüyoruz." },
  { icon: ShieldCheck, title: "Güvenle Büyüyen Ürünler", text: "Uzun vadeli, güvenilir ve sürdürülebilir çözümler üretiyoruz." },
];

const productImages: Record<string, string> = {
  "blok-dunyasi": "/games/blok-dunyasi/gameplay-1.jpg",
  lingorise: "/apps/lingorise/home-garden.png",
  "benim-notlarim": "/apps/benim-notlarim/editor.jpg",
};

export default function V2HomePage() {
  return (
    <div className="v2-page min-h-screen overflow-hidden bg-[#03080c] text-[#f7f0e5]">
      <section className="v2-hero relative isolate min-h-[780px] overflow-hidden border-b border-[#c89547]/20">
        <Image
          src="/v2/ancient-tech-hero.png"
          alt="Altın ışıkla çevrelenen kadim bir ağaç ve dağ manzarası"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,8,12,.98)_0%,rgba(3,8,12,.87)_31%,rgba(3,8,12,.3)_64%,rgba(3,8,12,.18)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(3,8,12,.95)_0%,transparent_42%,rgba(3,8,12,.35)_100%)]" />

        <header className="mx-auto flex h-24 max-w-[1380px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Link href="/" className="group flex items-center gap-3" aria-label="Krayirhan Studio ana sayfasına dön">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#d3a354]/60 bg-black/25 p-1">
              <Image src="/brand/logo.png" alt="" fill sizes="48px" className="rounded-full object-cover" />
            </div>
            <div className="leading-none">
              <span className="v2-serif block text-lg tracking-[.27em] text-[#fff9ed] sm:text-xl">KRAYIRHAN</span>
              <span className="block pt-1 text-[9px] font-semibold tracking-[.45em] text-[#d9b16d]">STUDIO</span>
            </div>
          </Link>

          <nav className="hidden items-center gap-9 text-[11px] font-semibold tracking-wide text-[#eee8df] lg:flex" aria-label="V2 navigasyonu">
            <a className="border-b border-[#d8a958] pb-2 text-[#fff8eb]" href="#anasayfa">ANA SAYFA</a>
            <a className="transition-colors hover:text-[#e7b662]" href="#projeler">OYUNLARIMIZ</a>
            <a className="transition-colors hover:text-[#e7b662]" href="#projeler">UYGULAMALARIMIZ</a>
            <a className="transition-colors hover:text-[#e7b662]" href="#hakkimizda">HAKKIMIZDA</a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="mailto:contact@krayirhan.com" className="hidden items-center gap-5 rounded-md border border-[#bc8634]/75 px-5 py-3 text-[11px] font-semibold text-[#f5e7cd] transition hover:bg-[#b97e2a]/15 sm:inline-flex">
              BİZE ULAŞIN <ArrowRight className="h-4 w-4 text-[#d6a750]" />
            </a>
            <button className="rounded-md border border-[#bc8634]/50 p-2.5 text-[#e4bb79] lg:hidden" aria-label="Menüyü aç"><Menu className="h-5 w-5" /></button>
          </div>
        </header>

        <div id="anasayfa" className="mx-auto flex max-w-[1380px] px-5 pb-32 pt-20 sm:px-8 lg:px-12 lg:pt-28">
          <div className="max-w-2xl">
            <p className="mb-6 text-xs font-semibold tracking-[.24em] text-[#d6a653]">KRAYIRHAN STUDIO · V2 ÖNİZLEME</p>
            <h1 className="v2-serif text-5xl leading-[.98] text-[#fbf8f1] sm:text-6xl lg:text-7xl">
              Kadim kökler,<br />
              <span className="text-[#dcaa55]">modern dünyalar.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#d5d1ca] sm:text-lg">
              Oyunlardan günlük hayatı kolaylaştıran uygulamalara; fikirleri özenle tasarlanmış dijital deneyimlere dönüştürüyoruz.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#projeler" className="inline-flex items-center gap-5 rounded-md bg-gradient-to-r from-[#d9a34e] to-[#f2ca7c] px-6 py-4 text-xs font-bold text-[#18110a] shadow-[0_12px_30px_rgba(205,150,61,.24)] transition hover:-translate-y-0.5">
                PROJELERİ KEŞFET <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#hakkimizda" className="inline-flex items-center gap-5 rounded-md border border-[#bca06e]/60 bg-black/10 px-6 py-4 text-xs font-semibold text-[#f4eee3] transition hover:bg-white/10">
                YAKLAŞIMIMIZ <ArrowRight className="h-4 w-4 text-[#d8a755]" />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1380px] px-5 sm:px-8 lg:px-12">
          <div className="grid border border-[#c39856]/25 bg-[#061019]/80 backdrop-blur-md md:grid-cols-2 xl:grid-cols-4">
            {principles.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-4 border-b border-[#c39856]/20 p-6 last:border-b-0 md:nth-[2n]:border-l xl:border-b-0 xl:border-l xl:first:border-l-0">
                <Icon className="mt-0.5 h-7 w-7 shrink-0 text-[#d9a655]" strokeWidth={1.5} />
                <div><h2 className="v2-serif text-base text-[#f8f1e7]">{title}</h2><p className="mt-2 text-xs leading-5 text-[#b8b5af]">{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <main>
        <section id="projeler" className="mx-auto max-w-[1380px] px-5 py-24 sm:px-8 lg:px-12">
          <div className="mb-11 grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div><p className="text-xs font-semibold tracking-[.2em] text-[#d6a653]">PROJELERİMİZ</p><h2 className="v2-serif mt-4 text-4xl sm:text-5xl">Ürettiğimiz dünyalar.</h2></div>
            <p className="max-w-lg text-sm leading-7 text-[#b9b6b0] lg:justify-self-end">Her proje farklı bir ihtiyaca, tek bir ortak ilkeye dayanır: sade, etkili ve hatırlanmaya değer olmak.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {PRODUCTS.map((product) => (
              <Link key={product.id} href={`/products/${product.slug}`} className="group rounded-lg border border-[#b4843f]/20 bg-[#071119] p-3 transition duration-300 hover:-translate-y-1 hover:border-[#d4a351]/65 hover:bg-[#0a1720]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-md bg-[#111]">
                  <Image src={productImages[product.id] ?? product.coverImage} alt={product.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="px-1 pb-2 pt-5"><p className="text-[10px] font-semibold tracking-[.16em] text-[#d5a450]">{product.type === "game" ? "OYUN" : "UYGULAMA"}</p><h3 className="v2-serif mt-2 text-2xl">{product.title}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-[#aaa9a4]">{product.shortDescription}</p></div>
              </Link>
            ))}
          </div>
          <div className="mt-9"><Link href="/products" className="inline-flex items-center gap-3 text-xs font-bold text-[#d8a654] transition hover:text-[#ffe0a4]">TÜM PROJELERİ GÖRÜNTÜLE <ArrowRight className="h-4 w-4" /></Link></div>
        </section>

        <section id="hakkimizda" className="border-y border-[#b4843f]/20 bg-[#061018]">
          <div className="mx-auto grid max-w-[1380px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_.95fr] lg:px-12">
            <div><p className="text-xs font-semibold tracking-[.2em] text-[#d6a653]">YAKLAŞIMIMIZ</p><h2 className="v2-serif mt-4 max-w-xl text-4xl leading-tight sm:text-5xl">Sakin görünen, güçlü çalışan ürünler.</h2><p className="mt-6 max-w-xl text-sm leading-7 text-[#b9b6b0]">Krayirhan Studio’da oyun, öğrenme ve üretkenliği ortak bir özenle ele alıyoruz. Kullanıcının zamanına saygı duyan, karakteri olan deneyimler oluşturuyoruz.</p><Link href="/about" className="mt-8 inline-flex items-center gap-3 text-xs font-bold text-[#d8a654] hover:text-[#ffe0a4]">STÜDYOYU TANIYIN <ArrowRight className="h-4 w-4" /></Link></div>
            <div className="grid grid-cols-2 gap-px self-end border border-[#b4843f]/20 bg-[#b4843f]/20">
              {[{ icon: Users, value: "1M+", label: "Toplam kullanıcı" }, { icon: Gamepad2, value: "1", label: "Yayındaki oyun" }, { icon: Smartphone, value: "2", label: "Mobil uygulama" }, { icon: Globe2, value: "Türkiye", label: "Merkezimiz" }].map(({ icon: Icon, value, label }) => <div key={label} className="bg-[#061018] p-6 sm:p-8"><Icon className="h-6 w-6 text-[#d6a653]" strokeWidth={1.5} /><p className="v2-serif mt-4 text-3xl text-[#f8f0e5]">{value}</p><p className="mt-1 text-xs text-[#aaa9a4]">{label}</p></div>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1380px] flex-col gap-8 px-5 py-10 text-xs text-[#8f918e] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex items-center gap-3"><Sparkles className="h-5 w-5 text-[#d6a653]" /><span>© {new Date().getFullYear()} Krayirhan Studio. Tüm hakları saklıdır.</span></div>
        <div className="flex gap-6"><Link href="/">Mevcut ana sayfa</Link><a href="mailto:contact@krayirhan.com">İletişim</a><a href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#d6a653]">Google Play <Download className="h-3.5 w-3.5" /></a></div>
      </footer>
    </div>
  );
}
