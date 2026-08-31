import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Gamepad2,
  Globe2,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";
import { V2Header } from "@/components/v2/V2Header";
import { V2Projects } from "@/components/v2/V2Projects";

export const metadata: Metadata = {
  title: "Krayirhan Studio V2 | Oyunlar ve günlük dijital araçlar",
  description:
    "Krayirhan Studio’nun oyunlarını ve günlük hayatı kolaylaştıran mobil uygulamalarını keşfedin.",
  alternates: {
    canonical: "https://studio.krayirhan.com/v2",
  },
  openGraph: {
    title: "Krayirhan Studio V2 | Oyunlar ve günlük dijital araçlar",
    description:
      "Krayirhan Studio’nun oyunlarını ve günlük hayatı kolaylaştıran mobil uygulamalarını keşfedin.",
    url: "https://studio.krayirhan.com/v2",
    siteName: "Krayirhan Studio",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/v2/ancient-tree-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Krayirhan Studio V2 Kadim Kökler ve Modern Dünyalar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krayirhan Studio V2 | Oyunlar ve günlük dijital araçlar",
    description:
      "Krayirhan Studio’nun oyunlarını ve günlük hayatı kolaylaştıran mobil uygulamalarını keşfedin.",
    images: ["/v2/ancient-tree-hero.jpg"],
  },
};

const studioMetrics = [
  {
    icon: Users,
    value: "1M+",
    label: "Toplam İndirme & Erişim",
    detail: "Blok Dünyası & Mobil Ekosistem",
  },
  {
    icon: Gamepad2,
    value: "1",
    label: "Google Play'de Yayında Oyun",
    detail: "Blok Dünyası",
  },
  {
    icon: Smartphone,
    value: "2",
    label: "Aktif & Geliştirilen Uygulama",
    detail: "Benim Notlarım & LingoRise",
  },
  {
    icon: Globe2,
    value: "Türkiye",
    label: "Merkezimiz",
    detail: "Bağımsız Stüdyo & Küresel Dağıtım",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Krayirhan Studio",
  url: "https://studio.krayirhan.com/v2",
  logo: "https://studio.krayirhan.com/brand/logo.png",
  description:
    "Krayirhan Studio’nun oyunlarını ve günlük hayatı kolaylaştıran mobil uygulamalarını keşfedin.",
  founder: {
    "@type": "Person",
    name: "Muhsin Furkan Turan",
  },
  sameAs: [
    "https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi",
    "https://play.google.com/store/apps/details?id=com.benimnotlarim.app",
  ],
};

export default function V2HomePage() {
  return (
    <div className="v2-page min-h-screen overflow-hidden bg-[#03080c] text-[#f7f0e5]">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero & Top Bar Section */}
      <section className="v2-hero relative isolate min-h-[780px] overflow-hidden border-b border-[#c89547]/20">
        <Image
          src="/v2/ancient-tree-hero.jpg"
          alt="Altın ışık saçan kadim ulu ağaç ve dağ manzarası"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[72%_center]"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,8,12,.98)_0%,rgba(3,8,12,.87)_31%,rgba(3,8,12,.3)_64%,rgba(3,8,12,.18)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(3,8,12,.95)_0%,transparent_42%,rgba(3,8,12,.35)_100%)]" />

        {/* Accessible V2 Header Component (P0) */}
        <V2Header />

        {/* Hero Content */}
        <div
          id="anasayfa"
          className="mx-auto flex max-w-[1380px] px-5 pb-24 pt-16 sm:px-8 lg:px-12 lg:pb-32 lg:pt-24"
        >
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d6a653]/30 bg-[#061019]/60 px-3.5 py-1 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-[#d6a653]" />
              <span className="text-[11px] font-semibold tracking-[.24em] text-[#d6a653]">
                KRAYIRHAN STUDIO · V2 ÖNİZLEME
              </span>
            </div>
            <h1 className="v2-serif text-5xl leading-[.98] text-[#fbf8f1] sm:text-6xl lg:text-7xl">
              Kadim kökler,
              <br />
              <span className="text-[#dcaa55]">modern dünyalar.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#d5d1ca] sm:text-lg">
              Oyunlardan günlük hayatı kolaylaştıran uygulamalara; fikirleri özenle
              tasarlanmış dijital deneyimlere dönüştürüyoruz.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projeler"
                className="inline-flex items-center gap-4 rounded-md bg-gradient-to-r from-[#d9a34e] to-[#f2ca7c] px-6 py-4 text-xs font-bold text-[#18110a] shadow-[0_12px_30px_rgba(205,150,61,.24)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(205,150,61,.35)]"
              >
                <span>PROJELERİ KEŞFET</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#hakkimizda"
                className="inline-flex items-center gap-4 rounded-md border border-[#bca06e]/60 bg-black/20 px-6 py-4 text-xs font-semibold text-[#f4eee3] backdrop-blur-sm transition hover:border-[#f2ca7c] hover:bg-white/10"
              >
                <span>YAKLAŞIMIMIZ</span>
                <ArrowRight className="h-4 w-4 text-[#d8a755]" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container (Note: RootLayout already provides the <main> landmark) */}
      <div className="v2-content">
        {/* Projects Section with category tabs, hash sync, and 'İncele' link (P1, P2, P3) */}
        <V2Projects />

        {/* Studio Approach Section with Concrete Metrics (P3) */}
        <section
          id="hakkimizda"
          className="border-y border-[#b4843f]/20 bg-[#061018]"
        >
          <div className="mx-auto grid max-w-[1380px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_.95fr] lg:px-12">
            <div>
              <p className="text-xs font-semibold tracking-[.2em] text-[#d6a653]">
                YAKLAŞIMIMIZ
              </p>
              <h2 className="v2-serif mt-4 max-w-xl text-4xl leading-tight sm:text-5xl">
                Sakin görünen, güçlü çalışan ürünler.
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-[#b9b6b0]">
                Krayirhan Studio’da oyun, öğrenme ve üretkenliği ortak bir özenle
                ele alıyoruz. Kullanıcının zamanına ve cihaz kaynaklarına saygı
                duyan, karakteri olan deneyimler geliştiriyoruz.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-md border border-[#c39856]/40 bg-[#0c1a26] px-5 py-3 text-xs font-bold text-[#d8a654] transition hover:border-[#f2ca7c] hover:text-[#ffe0a4]"
                >
                  <span>STÜDYOYU TANIYIN</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/press"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#b9b6b0] hover:text-[#f7f0e5] transition"
                >
                  <span>Basın Kiti (Press Kit)</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>

            {/* Metrics with Supporting Detail Context */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px self-end border border-[#b4843f]/20 bg-[#b4843f]/20 shadow-xl">
              {studioMetrics.map(({ icon: Icon, value, label, detail }) => (
                <div key={label} className="bg-[#061018] p-6 sm:p-8">
                  <Icon
                    className="h-6 w-6 text-[#d6a653]"
                    strokeWidth={1.5}
                  />
                  <p className="v2-serif mt-4 text-3xl text-[#f8f0e5]">{value}</p>
                  <p className="mt-1.5 text-xs font-semibold text-[#f5e8d2]">
                    {label}
                  </p>
                  <p className="mt-1 text-[11px] text-[#8e8c87]">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mx-auto flex max-w-[1380px] flex-col gap-8 px-5 py-12 text-xs text-[#8f918e] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-[#d6a653]" />
          <span>
            © {new Date().getFullYear()} Krayirhan Studio. Tüm hakları saklıdır.
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            href="/"
            className="transition hover:text-[#f7f0e5] underline underline-offset-4"
          >
            Mevcut ana sayfa
          </Link>
          <Link href="/privacy" className="transition hover:text-[#f7f0e5]">
            Gizlilik Politikası
          </Link>
          <a
            href="mailto:contact@krayirhan.com"
            className="transition hover:text-[#f7f0e5]"
          >
            İletişim
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-[#d6a653] transition hover:text-[#f5ca79]"
          >
            <span>Google Play</span>
            <Download className="h-3.5 w-3.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
