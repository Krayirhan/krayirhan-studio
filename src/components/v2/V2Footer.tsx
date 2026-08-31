import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { PRODUCTS } from "@/data/games";

export function V2Footer() {
  return (
    <footer className="v2-footer border-t border-white/10 bg-[#07090c] text-[#a19c90]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand Col: 2 Cols on large screens */}
          <div className="space-y-4 sm:col-span-2">
            <Link
              href="/v2"
              className="flex items-center gap-3.5"
              aria-label="Krayirhan Studio Ana Sayfası"
            >
              <Image
                src="/brand/krayirhan-stag-gold.png"
                alt="Krayirhan Studio Logosu"
                width={36}
                height={36}
                className="h-9 w-auto object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-bold tracking-[.25em] text-white">
                  KRAYIRHAN
                </span>
                <span className="text-[8px] font-semibold tracking-[.48em] text-neutral-400">
                  STUDIO
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-xs leading-6 text-[#b0aba0]">
              Bağımsız mobil oyunlar ve faydalı uygulamalar geliştiriyoruz.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#ded9ce]">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-white/70" />
                <span>Ankara, Türkiye</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-white/70" />
                <a
                  href="mailto:contact@krayirhan.com"
                  className="transition hover:text-white"
                >
                  contact@krayirhan.com
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Ürünler */}
          <div className="space-y-3">
            <p className="text-xs font-bold tracking-widest text-[#f5f2eb] uppercase">
              ÜRÜNLER
            </p>
            <ul className="space-y-2 text-xs">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link
                    href={`/v2/products/${product.slug}`}
                    className="transition hover:text-white"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/v2/products"
                  className="font-semibold text-white transition hover:underline"
                >
                  Tüm Ürünler
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Stüdyo */}
          <div className="space-y-3">
            <p className="text-xs font-bold tracking-widest text-[#f5f2eb] uppercase">
              STÜDYO
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/v2/about" className="transition hover:text-white">
                  Hakkında
                </Link>
              </li>
              <li>
                <Link href="/v2#felsefe" className="transition hover:text-white">
                  Değerlerimiz
                </Link>
              </li>
              <li>
                <Link href="/v2/about" className="transition hover:text-white">
                  Kariyer
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Destek */}
          <div className="space-y-3">
            <p className="text-xs font-bold tracking-widest text-[#f5f2eb] uppercase">
              DESTEK
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="mailto:contact@krayirhan.com"
                  className="transition hover:text-white"
                >
                  Yardım Merkezi
                </a>
              </li>
              <li>
                <Link
                  href="/v2/privacy"
                  className="transition hover:text-white"
                >
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link
                  href="/v2/privacy"
                  className="transition hover:text-white"
                >
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@krayirhan.com"
                  className="transition hover:text-white"
                >
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Bağlantılar */}
          <div className="space-y-3">
            <p className="text-xs font-bold tracking-widest text-[#f5f2eb] uppercase">
              BAĞLANTILAR
            </p>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-white"
                >
                  <span>Google Play</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@krayirhan"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-white"
                >
                  <span>YouTube</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/krayirhanstudio"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-white"
                >
                  <span>Instagram</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@krayirhan.studios"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-white"
                >
                  <span>TikTok</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-[#827d73] sm:flex-row">
          <p>© 2026 Krayirhan Studio. Tüm hakları saklıdır.</p>
          <p>
            Kurucu:{" "}
            <a
              href="https://muhsinfurkan.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#ded9ce] underline underline-offset-4 hover:text-white"
            >
              Muhsin Furkan Turan
            </a>
          </p>
          <p className="inline-flex items-center gap-1.5 text-[#ded9ce]">
            <span>Türkiye&apos;de geliştirildi</span>
            <span>🤍</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
