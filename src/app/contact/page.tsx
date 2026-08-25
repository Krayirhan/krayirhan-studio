"use client";

import { useState } from "react";
import { STUDIO_INFO } from "@/data/studioInfo";
import { Mail, MessageSquare, Send, HeartHandshake, HelpCircle, CheckCircle, Smartphone, Gamepad2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("Blok Dünyası");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold text-zinc-300 mb-4">
          <HeartHandshake className="h-4 w-4 text-emerald-400" />
          <span>Topluluk & Destek</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl font-display">
          Oyuncu & Kullanıcı Desteği
        </h1>
        <p className="mt-4 text-zinc-400 text-base sm:text-lg">
          Oyunlarımız ve uygulamalarımız hakkında geri bildirim, hata bildirimi veya sorularınız için 7/24 buradayız.
        </p>
      </div>

      {/* Grid: Direct Contact & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Direct Contacts & FAQs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-white/10 bg-[#121215] p-8 space-y-6 shadow-xl">
            <h2 className="text-xl font-bold text-white font-display">Doğrudan İletişim Kanalları</h2>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl border border-white/10 bg-black/40 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  <Mail className="h-4 w-4 text-emerald-400" />
                  <span>Destek & Geri Bildirim</span>
                </div>
                <a
                  href={`mailto:${STUDIO_INFO.contactEmail}`}
                  className="text-base font-semibold text-white hover:underline block"
                >
                  {STUDIO_INFO.contactEmail}
                </a>
              </div>

              <div className="p-4 rounded-2xl border border-white/10 bg-black/40 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-wider">
                  <Mail className="h-4 w-4 text-amber-400" />
                  <span>Medya & Basın Soruları</span>
                </div>
                <a
                  href={`mailto:${STUDIO_INFO.pressEmail}`}
                  className="text-base font-semibold text-white hover:underline block"
                >
                  {STUDIO_INFO.pressEmail}
                </a>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4 text-xs text-zinc-400 space-y-2">
              <p>📍 Lokasyon: {STUDIO_INFO.location} (Kuruluş: {STUDIO_INFO.foundedYear})</p>
              <p>⚡ Tüm oyuncu ve kullanıcı bildirimleri doğrudan geliştirici ekibimiz tarafından incelenir.</p>
            </div>
          </div>

          {/* Quick Help / SSS */}
          <div className="rounded-3xl border border-white/10 bg-[#121215] p-8 space-y-4 shadow-xl">
            <div className="flex items-center gap-2 text-sm font-bold text-white font-display">
              <HelpCircle className="h-4 w-4 text-orange-400" />
              <span>Sıkça Sorulan Sorular</span>
            </div>

            <div className="space-y-3 text-xs text-zinc-300">
              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <p className="font-semibold text-white">Blok Dünyası internetsiz çalışır mı?</p>
                <p className="text-zinc-400">Evet, %100 çevrimdışı oynanabilir, veri bağlantısı gerektirmez.</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                <p className="font-semibold text-white">Benim Notlarım verilerim güvende mi?</p>
                <p className="text-zinc-400">Tüm notlarınız yerel olarak telefonunuzda saklanır, dışa aktarılmaz.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Interactive Support Form */}
        <div className="lg:col-span-7">
          {submitted ? (
            <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/10 p-12 text-center space-y-4">
              <CheckCircle className="h-12 w-12 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white font-display">Mesajınız Alındı!</h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto">
                Geri bildiriminiz için teşekkürler. İlettiğiniz konu en kısa sürede incelenerek e-posta adresinize geri dönüş yapılacaktır.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-4 rounded-xl bg-white px-6 py-2.5 text-xs font-bold text-zinc-950 hover:bg-zinc-200 transition-all cursor-pointer"
              >
                Yeni Mesaj Gönder
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-[#121215] p-8 sm:p-10 space-y-6 shadow-xl"
            >
              <h2 className="text-xl font-bold text-white font-display">Destek Talebi & Geri Bildirim Formu</h2>

              {/* Product Selection */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-300">İlgili Oyun / Uygulama</label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {["Blok Dünyası", "LingoRise", "Benim Notlarım"].map((prod) => (
                    <button
                      type="button"
                      key={prod}
                      onClick={() => setSelectedProduct(prod)}
                      className={`rounded-xl px-3 py-2.5 text-xs font-bold transition-all border cursor-pointer text-center ${
                        selectedProduct === prod
                          ? "bg-white text-zinc-950 border-white shadow-lg"
                          : "bg-white/5 text-zinc-400 border-white/10 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {prod}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-300">Adınız Soyadınız</label>
                  <input
                    type="text"
                    required
                    placeholder="Ahmet Yılmaz"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-zinc-300">E-Posta Adresiniz</label>
                  <input
                    type="email"
                    required
                    placeholder="ornek@email.com"
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-300">Konu</label>
                <input
                  type="text"
                  required
                  placeholder={`${selectedProduct} hakkında soru, öneri veya hata bildirimi`}
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-300">Açıklama / Mesajınız</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Yaşadığınız durum, karşılaştığınız hata veya stüdyomuza iletmek istediğiniz öneri..."
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-zinc-950 shadow-xl shadow-white/5 hover:bg-zinc-200 transition-all cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Destek Talebini Gönder</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
