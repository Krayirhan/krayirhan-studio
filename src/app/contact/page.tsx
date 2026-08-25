"use client";

import { STUDIO_INFO } from "@/data/studioInfo";
import { Mail, MessageSquare, Send, Building2 } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1 text-xs font-semibold text-zinc-300 mb-4">
          <MessageSquare className="h-4 w-4 text-white" />
          <span>Bize Ulaşın</span>
        </div>
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          İletişim & İş Birliği
        </h1>
        <p className="mt-4 text-zinc-400 text-base sm:text-lg">
          Yayıncılık teklifleri, yatırım görüşmeleri, basın talepleri veya sadece merhaba demek için buradayız.
        </p>
      </div>

      {/* Grid: Direct Contact & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Direct Contacts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-white/10 bg-[#121215] p-8 space-y-6 shadow-xl">
            <h2 className="text-xl font-bold text-white">Doğrudan İletişim Kanalları</h2>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl border border-white/10 bg-black/40 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-wider">
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

              <div className="p-4 rounded-2xl border border-white/10 bg-black/40 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-wider">
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

            <div className="border-t border-white/10 pt-4 text-xs text-zinc-400 space-y-2">
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
            className="rounded-3xl border border-white/10 bg-[#121215] p-8 sm:p-10 space-y-6 shadow-xl"
          >
            <h2 className="text-xl font-bold text-white">Mesaj Gönderin</h2>

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
                  placeholder="ornek@sirket.com"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-zinc-300">Konu</label>
              <input
                type="text"
                required
                placeholder="Yayıncılık, ortaklık veya geri bildirim..."
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold text-zinc-300">Mesajınız</label>
              <textarea
                rows={5}
                required
                placeholder="Projeniz veya iletmek istediğiniz detaylar..."
                className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:border-white focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-zinc-950 shadow-xl shadow-white/5 hover:bg-zinc-200 transition-all cursor-pointer"
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
