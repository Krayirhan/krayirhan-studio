import { Layers3, MousePointer2, Route } from "lucide-react";

export function V2Philosophy() {
  const pillars = [
    {
      icon: <MousePointer2 className="h-6 w-6" strokeWidth={1.6} />,
      title: "Gerçek Kullanım Değeri",
      text: "Her ürün, gerçekten kullanılması veya oynanması için tasarlanır. Gereksiz özellikler yerine gerçek ihtiyaca odaklanırız.",
    },
    {
      icon: <Layers3 className="h-6 w-6" strokeWidth={1.6} />,
      title: "Kendine Ait Bir Karakter",
      text: "Her projenin kendi görsel dili, tonu ve deneyimi vardır. Aynı kalıbı farklı ürünlere uygulamayız.",
    },
    {
      icon: <Route className="h-6 w-6" strokeWidth={1.6} />,
      title: "Sade ve Doğrudan",
      text: "Karmaşayı azaltır, kullanıcıyı yapmak istediği şeye mümkün olduğunca hızlı ulaştırırız.",
    },
  ];

  const metrics = [
    {
      value: "5",
      label: "Ürün",
      subtext: "Oyunlar & uygulamalar",
    },
    {
      value: "2",
      label: "Yayında",
      subtext: "Google Play",
    },
    {
      value: "3",
      label: "Geliştiriliyor",
      subtext: "Yeni deneyimler",
    },
    {
      value: "Ankara",
      label: "Türkiye",
      subtext: "Bağımsız stüdyo",
    },
  ];

  return (
    <section id="felsefe" className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
      {/* Section Header */}
      <div className="mb-14 text-center max-w-2xl mx-auto space-y-3">
        <p className="text-xs font-semibold tracking-[0.24em] text-neutral-400 uppercase">
          Yaklaşımımız
        </p>
        <h2 className="v2-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf8f2] tracking-tight">
          Nasıl ürün geliştiriyoruz?
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-neutral-400">
          Fikirleri, kendi amacına ve karakterine sahip sade dijital deneyimlere dönüştürüyoruz.
        </p>
      </div>

      {/* 3 Columns Philosophy Cards */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
        {pillars.map((pillar) => (
          <div
            key={pillar.title}
            className="flex flex-col items-center text-center sm:items-start sm:text-left space-y-3"
          >
            <div className="mb-2 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white">
              {pillar.icon}
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#fbf8f2]">
              {pillar.title}
            </h3>
            <p className="text-sm leading-relaxed text-[#a5a8ae]">
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
