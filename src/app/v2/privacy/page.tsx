import type { Metadata } from "next";
import { V2Header } from "@/components/v2/V2Header";
import { V2Footer } from "@/components/v2/V2Footer";
import { ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Krayirhan Studio V2",
  description: "Krayirhan Studio ürünleri ve web sitesi için şeffaf gizlilik politikası.",
};

export default function V2PrivacyPage() {
  return (
    <div className="v2-page min-h-screen bg-[#080a0d] text-[#f5f2eb] selection:bg-white selection:text-black flex flex-col justify-between">
      <V2Header />

      <main className="v2-content mx-auto w-full max-w-3xl px-5 py-12 sm:px-8 lg:py-16">
        <div className="space-y-4 text-center sm:text-left">
          <p className="text-xs font-semibold tracking-[0.24em] text-neutral-400 uppercase">
            Yasal & Güvenlik
          </p>
          <h1 className="v2-serif text-4xl sm:text-5xl font-normal text-[#fbf8f2] tracking-tight">
            Gizlilik Politikası
          </h1>
          <p className="text-sm text-neutral-400">
            Son güncelleme: 2026
          </p>
        </div>

        <div className="mt-12 space-y-8 text-[#b5b0a4] leading-relaxed text-sm sm:text-base">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-3">
            <h2 className="v2-serif text-xl font-bold text-white">
              Temel İlkemiz: Kullanıcı Verilerine Saygı
            </h2>
            <p>
              Krayirhan Studio olarak geliştirdiğimiz tüm mobil oyunlarda ve uygulamalarda gizliliğe en üst düzeyde önem veririz. İhtiyaç duymadığımız hiçbir kişisel veriyi toplamayız, saklamayız ve üçüncü şahıslarla paylaşmayız.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="v2-serif text-lg font-bold text-white">
              1. Yerel ve Çevrimdışı Çalışma
            </h3>
            <p>
              Benim Notlarım ve Blok Dünyası gibi ürünlerimiz %100 çevrimdışı çalışabilecek şekilde tasarlanmıştır. Notlarınız, kayıtlarınız ve oyun skorlarınız yalnızca kendi cihazınızda yerel bellekte tutulur ve sunucularımıza iletilmez.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="v2-serif text-lg font-bold text-white">
              2. Üçüncü Taraf Hizmetler & Mağaza Altyapısı
            </h3>
            <p>
              Uygulamalarımız Google Play Store aracılığıyla dağıtılmaktadır. Google Play hizmetleri, uygulamanın indirilmesi ve hata raporlarının anonim olarak toplanması amacıyla standart platform verilerini işleyebilir.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="v2-serif text-lg font-bold text-white">
              3. İletişim ve Haklarınız
            </h3>
            <p>
              Gizlilik politikamızla ilgili herhangi bir soru, öneri veya geri bildirim için stüdyomuza doğrudan{" "}
              <a
                href="mailto:contact@krayirhan.com"
                className="font-semibold text-white underline underline-offset-4 hover:text-neutral-300 transition"
              >
                contact@krayirhan.com
              </a>{" "}
              üzerinden ulaşabilirsiniz.
            </p>
          </div>
        </div>
      </main>

      <V2Footer />
    </div>
  );
}
