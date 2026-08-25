import { CheckCircle2, Shield, Zap, BookOpen, Layers } from "lucide-react";

export function StudioStats() {
  const stats = [
    {
      value: "177+",
      label: "Birim Testiyle Doğrulandı",
      desc: "LingoRise domain ve SM-2 algoritmasında sıfır mantık hatası.",
      icon: CheckCircle2,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/20",
    },
    {
      value: "%100",
      label: "Offline-First & Gizlilik",
      desc: "Tüm notlarınız ve verileriniz cihazınızda yerel şifrelenir.",
      icon: Shield,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/20",
    },
    {
      value: "A1 - C2",
      label: "Tam Müfredat Derinliği",
      desc: "Başlangıçtan ileri seviyeye yapılandırılmış zengin kelime havuzu.",
      icon: BookOpen,
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-950/20",
    },
    {
      value: "60+ FPS",
      label: "Akıcı & Optimize Motor",
      desc: "Unity URP ve React Native ile sıfır gecikmeli mobil deneyim.",
      icon: Zap,
      color: "text-amber-400 border-amber-500/30 bg-amber-950/20",
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div
              key={idx}
              className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0d1320] p-6 shadow-xl hover:border-slate-700 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-2xl border ${stat.color}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-3xl font-black text-white tracking-tight group-hover:scale-105 transition-transform">
                  {stat.value}
                </span>
              </div>
              <h3 className="text-sm font-bold text-slate-200">{stat.label}</h3>
              <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">{stat.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
