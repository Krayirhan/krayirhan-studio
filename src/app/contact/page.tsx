"use client";

import { useState } from "react";
import { STUDIO_INFO } from "@/data/studioInfo";
import { Mail, MessageSquare, Send, CheckCircle2, Gamepad2, Smartphone, Sparkles, HelpCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"genel" | "blok-dunyasi" | "lingorise" | "benim-notlarim">("genel");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:py-24 sm:px-6 lg:px-8 space-y-16">
      
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-zinc-300">
          <MessageSquare className="h-3.5 w-3.5 text-white" />
          <span>Topluluk & Destek</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white font-display">
          Nasıl yardımcı olabiliriz?
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Oyunlarımız ve uygulamalarımız hakkında bir sorunuz, öneriniz veya iletmek istediğiniz bir geri bildirim varsa doğrudan bize yazın.
        </p>
      </div>

      {/* 2. Direct Product Support Cards (3 Column Clean Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Blok Dünyası */}
        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 space-y-4 hover:border-orange-500/30 transition-all duration-300 shadow-xl group">
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
              <Gamepad2 className="h-5 w-5" />
            </div>
            <span className="text-[11px] font-bold text-orange-400 bg-orange-500/10 px-2.5 py-0.5 rounded-full border border-orange-500/20">
              Mobil Oyun
            </span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white font-display">Blok Dünyası</h3>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Oyun içi skorlar, seviyeler veya hata bildirimleri için.
            </p>
          </div>

          <a
            href="mailto:contact@krayirhan.com?subject=Blok%20Dunyasi%20Destek"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-orange-300 transition-colors pt-2"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>contact@krayirhan.com</span>
          </a>
        </div>

        {/* Card 2: LingoRise */}
        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 space-y-4 hover:border-emerald-500/30 transition-all duration-300 shadow-xl group">
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Smartphone className="h-5 w-5" />
            </div>
            <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              Uygulama
            </span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white font-display">LingoRise</h3>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Kelime dağarcığı, bahçe sistemi ve alıştırma geri bildirimleri.
            </p>
          </div>

          <a
            href="mailto:contact@krayirhan.com?subject=LingoRise%20Destek"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-emerald-300 transition-colors pt-2"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>contact@krayirhan.com</span>
          </a>
        </div>

        {/* Card 3: Benim Notlarım */}
        <div className="rounded-3xl border border-white/10 bg-[#111114] p-7 space-y-4 hover:border-sky-500/30 transition-all duration-300 shadow-xl group">
          <div className="flex items-center justify-between">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
              <Smartphone className="h-5 w-5" />
            </div>
            <span className="text-[11px] font-bold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20">
              Uygulama
            </span>
          </div>

          <div>
            <h3 className="text-xl font-bold text-white font-display">Benim Notlarım</h3>
            <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
              Not biçimlendirme, yedekleme ve yeni özellik talepleri.
            </p>
          </div>

          <a
            href="mailto:contact@krayirhan.com?subject=Benim%20Notlarim%20Destek"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-sky-300 transition-colors pt-2"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>contact@krayirhan.com</span>
          </a>
        </div>

      </div>

      {/* 3. Direct Minimal Message Form */}
      <div className="rounded-[2.5rem] border border-white/10 bg-[#111114] p-8 sm:p-12 shadow-2xl">
        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <CheckCircle2 className="h-14 w-14 text-white mx-auto" />
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">Mesajınız İletildi</h3>
            <p className="text-sm text-zinc-400 max-w-md mx-auto leading-relaxed">
              Geri bildiriminiz geliştirici ekibimize ulaştı. En kısa sürede e-posta adresiniz üzerinden geri dönüş yapacağız.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 rounded-xl bg-white px-6 py-3 text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition-all cursor-pointer"
            >
              Yeni Mesaj Gönder
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="text-center space-y-2 mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                Doğrudan Mesaj Bırakın
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                Aklınıza takılan her şeyi aşağıdaki formdan iletebilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-300">Adınız</label>
                <input
                  type="text"
                  required
                  placeholder="İsminiz"
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-300">E-Posta Adresiniz</label>
                <input
                  type="email"
                  required
                  placeholder="ornek@email.com"
                  className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-zinc-300">Mesajınız</label>
              <textarea
                rows={4}
                required
                placeholder="Öneri, soru veya geri bildiriminiz..."
                className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3.5 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-bold text-zinc-950 hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 hover:scale-105 cursor-pointer w-full sm:w-auto justify-center"
              >
                <Send className="h-4 w-4" />
                <span>Mesajı Gönder</span>
              </button>
            </div>
          </form>
        )}
      </div>

    </div>
  );
}
