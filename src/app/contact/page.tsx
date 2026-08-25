"use client";

import { STUDIO_INFO } from "@/data/studioInfo";
import { Mail, MessageSquare, Send, Building2 } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/40 px-3.5 py-1 text-xs font-semibold text-indigo-300 mb-4">
          <MessageSquare className="h-4 w-4 text-cyan-400" />
          <span>Bize Ulaşın</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          İletişim & İş Birliği
        </h1>
        <p className="mt-4 text-slate-400 text-base sm:text-lg">
          Yayıncılık teklifleri, yatırım görüşmeleri, basın talepleri veya sadece merhaba demek için buradayız.
        </p>
      </div>

      {/* Grid: Direct Contact & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Direct Contacts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-[#0d121d] p-8 space-y-6">
            <h2 className="text-xl font-bold text-white">Doğrudan İletişim Kanalları</h2>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  <Building2 className="h-4 w-4" />
                  <span>Genel & İş Geliştirme</span>
                </div>
                <a
                  href={`mailto:${STUDIO_INFO.contactEmail}`}
                  className="text-base font-semibold text-white hover:underline block"
                >
                  {STUDIO_INFO.contactEmail}
                </a>
              </div>

              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  <Mail className="h-4 w-4" />
                  <span>Basın & İçerik Üreticileri</span>
                </div>
                <a
                  href={`mailto:${STUDIO_INFO.pressEmail}`}
                  className="text-base font-semibold text-white hover:underline block"
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

        {/* Right: Message Form UI */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-slate-800 bg-[#0d121d] p-8 space-y-6 shadow-xl">
            <h2 className="text-xl font-bold text-white">Mesaj Gönderin</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Adınız & Soyadınız</label>
                  <input
                    type="text"
                    required
                    placeholder="Adınız"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">E-Posta Adresiniz</label>
                  <input
                    type="email"
                    required
                    placeholder="ornek@sirket.com"
                    className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Konu / Kategori</label>
                <select className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-200 focus:border-indigo-500 focus:outline-none">
                  <option>Yayıncılık / Dağıtım Teklifi (Publishing)</option>
                  <option>Basın / İnceleme Kodu Talebi</option>
                  <option>Yatırım & Fonlama</option>
                  <option>Hata Bildirimi & Oyuncu Geri Bildirimi</option>
                  <option>Diğer</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300">Mesajınız</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Projeniz veya mesajınız hakkında detaylar..."
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition-all cursor-pointer"
              >
                <Send className="h-4 w-4" />
                <span>Mesajı Gönder</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
