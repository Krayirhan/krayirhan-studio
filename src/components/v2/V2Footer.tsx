import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { PRODUCTS } from "@/data/games";

export function V2Footer() {
  return (
    <footer className="v2-footer border-t border-white/10 bg-[#07090c] text-[#a19c90]">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
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
              Bağımsız oyunlar ve mobil uygulamalar geliştiriyoruz.
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
                    href={`/products/${product.slug}`}
                    className="transition hover:text-white"
                  >
                    {product.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
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
                <Link href="/about" className="transition hover:text-white">
                  Hakkında
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="transition hover:text-white">
                  Gizlilik
                </Link>
              </li>
              <li>
                <a href="mailto:contact@krayirhan.com" className="transition hover:text-white">İletişim</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Bağlantılar */}
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
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-xs text-[#827d73] sm:flex-row">
          <p>© 2026 Krayirhan Studio. Tüm hakları saklıdır.</p>
          <p>
            Tasarım & Geliştirme —{" "}
            <a
              href="https://muhsinfurkan.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#ded9ce] underline underline-offset-4 hover:text-white"
            >
              Muhsin Furkan Turan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
