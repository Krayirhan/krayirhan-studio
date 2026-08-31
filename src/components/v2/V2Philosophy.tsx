import Image from "next/image";
import { Gamepad2, Globe2, Smartphone, Users } from "lucide-react";
import { CalmFlowIcon, SeljukKnotIcon } from "./V2Icons";

export function V2Philosophy() {
  const pillars = [
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center">
          <Image
            src="/brand/krayirhan-stag-gold.png"
            alt="Krayirhan Geyik Amblemi"
            width={40}
            height={40}
            className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
          />
        </div>
      ),
      title: "Gerçek Kullanım Değeri",
      text: "Ürünlerimiz eğlendirir, öğretir veya hayatı kolaylaştırır. Boş vaatlere değil, doğrudan faydaya odaklanırız.",
    },
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center text-white">
          <SeljukKnotIcon className="h-9 w-9" />
        </div>
      ),
      title: "Ürün Kişiliği",
      text: "Her ürünümüzün kendine has bir karakteri ve tasarım dili vardır. Sıradan deneyimleri değil, iz bırakanları tasarlarız.",
    },
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center text-white">
          <CalmFlowIcon className="h-9 w-9" />
        </div>
      ),
      title: "Sade ve Saygılı Akış",
      text: "Karmaşıklaştırmadan, kullanıcıya saygılı arayüzlerle akıcı, sessiz ve huzurlu bir mobil deneyim sunarız.",
    },
  ];

  const metrics = [
    {
      value: "1M+",
      label: "Toplam İndirme & Erişim",
      subtext: "Oyuncu & Kullanıcı",
    },
    {
      value: "1+",
      label: "Yayında Mobil Oyun",
      subtext: "Google Play Store",
    },
    {
      value: "2+",
      label: "Aktif Uygulama",
      subtext: "Android & Web",
    },
    {
      value: "Ankara",
      label: "Stüdyo Merkezi",
      subtext: "Türkiye",
    },
  ];

  return (
    <section id="felsefe" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      {/* Section Header */}
      <div className="mb-14 text-center max-w-2xl mx-auto space-y-3">
        <p className="text-xs font-semibold tracking-[0.24em] text-neutral-400 uppercase">
          Tasarım Yaklaşımımız
        </p>
        <h2 className="v2-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf8f2] tracking-tight">
          Stüdyo Felsefemiz
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-neutral-400">
          Kullanışlı, estetik ve kalıcı dijital deneyimler üretme yaklaşımımız
        </p>
      </div>

      {/* 3 Columns Philosophy Cards */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col items-center text-center sm:items-start sm:text-left space-y-3"
          >
            <div className="mb-2">
              {pillar.icon}
            </div>
            <h3 className="v2-serif text-xl sm:text-2xl font-bold tracking-tight text-[#fbf8f2]">
              {pillar.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#b3ada1]">
              {pillar.text}
            </p>
          </div>
        ))}
      </div>

      {/* Clean, Integrated Metrics Row (Open, Balanced, Cardless) */}
      <div className="mt-16 sm:mt-20 border-y border-white/10 py-10 sm:py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">
          {metrics.map((metric, idx) => (
            <div
              key={metric.label}
              className={`space-y-1.5 ${idx > 0 ? "pt-6 sm:pt-0 sm:pl-6" : ""}`}
            >
              <div className="v2-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-white">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-neutral-300">
                {metric.label}
              </div>
              <div className="text-[11px] text-neutral-500 font-mono">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
