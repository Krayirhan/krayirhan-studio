import { Gamepad2, Sparkles, Shield, RefreshCw } from "lucide-react";

export function StudioStats() {
  const pillars = [
    {
      value: "Özgün",
      label: "Eğlenceli Oynanış & Fikirler",
      desc: "Klasik mekanikleri modern dokunuşlar ve renkli temalarla buluşturan yapımlar.",
      icon: Gamepad2,
    },
    {
      value: "Akıcı",
      label: "Kullanıcı Dostu Arayüz",
      desc: "Karmaşadan uzak, parmak uçlarınızda yağ gibi kayan pürüzsüz tasarımlar.",
      icon: Sparkles,
    },
    {
      value: "%100",
      label: "Çevrimdışı Deneyim",
      desc: "Metroda, uçakta ya da seyahatte; internetiniz olmadan da kesintisiz keyif.",
      icon: Shield,
    },
    {
      value: "Sürekli",
      label: "Canlı Güncellemeler",
      desc: "Geri bildirimlerinizle şekillenen yeni seviyeler, temalar ve zengin özellikler.",
      icon: RefreshCw,
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <div
              key={idx}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#121215] p-6 shadow-xl hover:border-white/25 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl border border-white/15 bg-white/5 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-2xl font-black text-white tracking-tight group-hover:scale-105 transition-transform">
                  {pillar.value}
                </span>
              </div>
              <h3 className="text-sm font-bold text-white">{pillar.label}</h3>
              <p className="mt-1.5 text-xs text-zinc-400 leading-relaxed">{pillar.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
