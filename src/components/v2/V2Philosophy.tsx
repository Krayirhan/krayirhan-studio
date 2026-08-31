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
            width={44}
            height={44}
            className="h-10 w-auto object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
          />
        </div>
      ),
      title: "Gerçek Kullanım Değeri",
      text: "Ürünlerimiz eğlendirir, öğretir veya hayatı kolaylaştırır. Boş vaade değil, gerçek faydaya odaklanırız.",
    },
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center text-white">
          <SeljukKnotIcon className="h-10 w-10" />
        </div>
      ),
      title: "Ürün Kişiliği",
      text: "Her ürünümüzün kendine has bir karakteri ve tasarım dili vardır. Sıradan deneyimleri değil, iz bırakanları severiz.",
    },
    {
      icon: (
        <div className="flex h-12 w-12 items-center justify-center text-white">
          <CalmFlowIcon className="h-10 w-10" />
        </div>
      ),
      title: "Sade ve Saygılı Akış",
      text: "Karmaşıklaştırmadan, kullanıcıya saygılı arayüzlerle akıcı ve huzurlu deneyimler tasarlarız.",
    },
  ];

  const metrics = [
    {
      icon: Users,
      value: "1M+",
      label: "Toplam İndirme & Erişim",
    },
    {
      icon: Gamepad2,
      value: "1+",
      label: "Yayında Oyun",
    },
    {
      icon: Smartphone,
      value: "2+",
      label: "Aktif Uygulama",
    },
    {
      icon: Globe2,
      value: "Türkiye",
      label: "Ankara Merkezli",
    },
  ];

  return (
    <section id="felsefe" className="relative mx-auto max-w-[1380px] px-5 py-24 sm:px-8 lg:px-12">
      {/* Section Header */}
      <div className="mb-16 text-center">
        <h2 className="v2-serif text-3xl sm:text-4xl font-normal text-[#fbf8f2]">
          Stüdyo Felsefemiz
        </h2>
        <p className="mx-auto mt-2.5 max-w-lg text-xs sm:text-sm text-neutral-400">
          Kullanışlı, estetik ve kalıcı dijital deneyimler üretme yaklaşımımız
        </p>
      </div>

      {/* 3 Columns Philosophy Cards */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="group flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1 sm:items-start sm:text-left"
          >
            <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110">
              {pillar.icon}
            </div>
            <h4 className="v2-serif text-2xl font-bold tracking-tight text-[#fbf8f2]">
              {pillar.title}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-[#b3ada1]">
              {pillar.text}
            </p>
          </div>
        ))}
      </div>

      {/* Ornate Seljuk Metrics Banner */}
      <div className="relative mt-20 overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-r from-[#0c0f14] via-[#12161f] to-[#0c0f14] p-6 shadow-2xl sm:p-8 lg:p-10">
        {/* Ornate Seljuk Motif Corner Accents */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-60" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-60" />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6 items-center">
          {metrics.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex items-center gap-4 border-l border-white/10 pl-4 first:border-l-0 md:pl-6"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] text-white">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
              </div>
              <div>
                <p className="v2-serif text-2xl sm:text-3xl font-bold text-[#fbf8f2]">
                  {value}
                </p>
                <p className="mt-0.5 text-xs font-medium text-[#a6a094]">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
