"use client";

import { STUDIO_INFO } from "@/data/studioInfo";
import { Mail, MessageSquare, Send, Building2, Sparkles } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-950/30 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-4">
          <MessageSquare className="h-4 w-4 text-amber-400" />
          <span>Bize Ulaşın</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          İletişim & İş Birliği
        </h1>
        <p className="mt-4 text-slate-300 text-base sm:text-lg">
          Yayıncılık teklifleri, yatırım görüşmeleri, basın talepleri veya sadece merhaba demek için buradayız.
        </p>
      </div>

      {/* Grid: Direct Contact & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Direct Contacts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-amber-500/20 bg-[#11131a] p-8 space-y-6 shadow-xl">
            <h2 className="text-xl font-bold text-white">Doğrudan İletişim Kanalları</h2>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl border border-slate-800 bg-[#090a0f] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Building2 className="h-4 w-4" />
                  <span>Genel & İş Geliştirme</span>
                </div>
                <a
                  href={`mailto:${STUDIO_INFO.contactEmail}`}
                  className="text-base font-semibold text-white hover:text-amber-300 transition-colors block"
                >
                  {STUDIO_INFO.contactEmail}
                </a>
              </div>

              <div className="p-4 rounded-2xl border border-slate-800 bg-[#090a0f] space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">
                  <Mail className="h-4 w-4" />
                  <span>Basın & İçerik Üreticileri</span>
                </div>
                <a
                  href={`mailto:${STUDIO_INFO.pressEmail}`}
                  className="text-base font-semibold text-white hover:text-amber-300 transition-colors block"
                >
                  {STUDIO_INFO.pressEmail}
                </a>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-4 text-xs text-slate-400 space-y-2">
              <p>📍 Lokasyon: {STUDIO_INFO.location}</p>
              <p>⚡ Genellikle 24-48 saat içerisinde tüm iş tekliflerine dönüş yapmaktayız.</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Mesajınız başarıyla iletildi. En kısa sürede geri dönüş yapacağız.");
            }}
            className="rounded-3xl border border-amber-500/20 bg-[#11131a] p-8 sm:p-10 space-y-6 shadow-xl"
          >
            <h2 className="text-xl font-bold text-white">Mesaj Gönderin</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">Adınız Soyadınız</label>
                <input
                  type="text"
                  required
                  placeholder="Ahmet Yılmaz"
                  className="w-full rounded-xl border border-slate-800 bg-[#090a0f] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">E-Posta Adresiniz</label>
                <input
                  type="email"
                  required
                  placeholder="ornek@sirket.com"
                  className="w-full rounded-xl border border-slate-800 bg-[#090a0f] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-amber-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Konu</label>
              <input
                type="text"
                required
                placeholder="Yayıncılık, ortaklık veya geri bildirim..."
                className="w-full rounded-xl border border-slate-800 bg-[#090a0f] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-amber-500 focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-300">Mesajınız</label>
              <textarea
                rows={5}
                required
                placeholder="Projeniz veya iletmek istediğiniz detaylar..."
                className="w-full rounded-xl border border-slate-800 bg-[#090a0f] px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:border-amber-500 focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 px-8 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 hover:opacity-90 transition-all cursor-pointer"
            >
              <Send className="h-4 w-4" />
              <span>Mesajı Gönder</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
