import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";

export function V2Footer() {
  return (
    <footer className="border-t border-[#d4a359]/20 bg-[#07090c] text-[#a19c90]">
      <div className="mx-auto max-w-[1380px] px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand Col: 2 Cols on large screens */}
          <div className="space-y-4 sm:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3.5"
              aria-label="Krayirhan Studio Ana Sayfası"
            >
              <Image
                src="/brand/krayirhan-stag-gold.png"
                alt="Krayirhan Studio Logosu"
                width={36}
                height={36}
                className="h-9 w-auto object-contain drop-shadow-[0_0_10px_rgba(212,163,89,0.35)]"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-bold tracking-[.25em] text-[#fff9ed]">
                  KRAYIRHAN
                </span>
                <span className="text-[8px] font-semibold tracking-[.48em] text-[#d4a359]">
                  STUDIO
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-xs leading-6 text-[#b0aba0]">
              Bağımsız mobil oyunlar ve faydalı uygulamalar geliştiriyoruz.
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#ded9ce]">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#d4a359]" />
                <span>Ankara, Türkiye</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-[#d4a359]" />
                <a
                  href="mailto:contact@krayirhan.com"
                  className="transition hover:text-[#f7dc9f]"
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
              <li>
                <Link
                  href="/products/blok-dunyasi"
                  className="transition hover:text-[#f7dc9f]"
                >
                  Blok Dünyası
                </Link>
              </li>
              <li>
                <Link
                  href="/products/lingorise"
                  className="transition hover:text-[#f7dc9f]"
                >
                  LingoRise
                </Link>
              </li>
              <li>
                <Link
                  href="/products/benim-notlarim"
                  className="transition hover:text-[#f7dc9f]"
                >
                  Benim Notlarım
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="font-semibold text-[#d4a359] transition hover:underline"
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
                <Link href="/about" className="transition hover:text-[#f7dc9f]">
                  Hakkında
                </Link>
              </li>
              <li>
                <a href="#felsefe" className="transition hover:text-[#f7dc9f]">
                  Değerlerimiz
                </a>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-[#f7dc9f]">
                  Kariyer
                </Link>
              </li>
              <li>
                <Link href="/press" className="transition hover:text-[#f7dc9f]">
                  Basın Kiti
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
                  className="transition hover:text-[#f7dc9f]"
                >
                  Yardım Merkezi
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-[#f7dc9f]"
                >
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-[#f7dc9f]"
                >
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <a
                  href="mailto:contact@krayirhan.com"
                  className="transition hover:text-[#f7dc9f]"
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
                  className="inline-flex items-center gap-1.5 transition hover:text-[#f7dc9f]"
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
                  className="inline-flex items-center gap-1.5 transition hover:text-[#f7dc9f]"
                >
                  <span>YouTube</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/krayirhan"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-[#f7dc9f]"
                >
                  <span>Instagram</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/krayirhan"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-[#f7dc9f]"
                >
                  <span>X (Twitter)</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#d4a359]/15 pt-8 text-xs text-[#827d73] sm:flex-row">
          <p>© 2026 Krayirhan Studio. Tüm hakları saklıdır.</p>
          <p>
            Kurucu:{" "}
            <a
              href="https://muhsinfurkan.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#ded9ce] underline underline-offset-4 hover:text-[#f7dc9f]"
            >
              Muhsin Furkan Turan
            </a>
          </p>
          <p className="inline-flex items-center gap-1.5 text-[#ded9ce]">
            <span>Türkiye&apos;de geliştirildi</span>
            <span>💛</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
