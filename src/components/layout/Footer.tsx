import Link from "next/link";
import { Heart, ExternalLink } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";

export function Footer() {
  return (
    <footer className="border-t border-amber-500/15 bg-[#06070a] text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Studio Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full overflow-hidden border border-amber-500/40 bg-white p-0.5 shadow-md">
                <img
                  src="/brand/logo.png"
                  alt="Krayirhan Studio Logo"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <span className="text-lg font-bold tracking-wider text-white uppercase">
                {STUDIO_INFO.name}
              </span>
            </div>
            <p className="max-w-md text-sm text-slate-400 leading-relaxed">
              {STUDIO_INFO.tagline}
            </p>
            <div className="pt-2 text-xs text-slate-500">
              📍 {STUDIO_INFO.location} · Bağımsız Mobil Oyun & Uygulama Geliştirme Stüdyosu
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              Ürünler & Sayfalar
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/blok-dunyasi" className="hover:text-amber-400 transition-colors font-medium">
                  Blok Dünyası (Oyun)
                </Link>
              </li>
              <li>
                <Link href="/products/lingorise" className="hover:text-amber-300 transition-colors font-medium">
                  LingoRise (Uygulama)
                </Link>
              </li>
              <li>
                <Link href="/products/benim-notlarim" className="hover:text-amber-300 transition-colors font-medium">
                  Benim Notlarım (Uygulama)
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-amber-400 transition-colors">
                  Tüm Ürün Kataloğu
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-amber-400 transition-colors">
                  Press Kit & Basın
                </Link>
              </li>
            </ul>
          </div>

          {/* Founder & Crosslink */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-amber-400 uppercase">
              Bağlantılar
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-medium"
                >
                  <span>Blok Dünyası (Google Play)</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.benimnotlarim.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors font-medium"
                >
                  <span>Benim Notlarım (Google Play)</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={STUDIO_INFO.founder.portfolioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-300 hover:text-amber-300 transition-colors font-medium"
                >
                  <span>Kurucu Portfolyosu (krayirhan.com)</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  İş Birliği & İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {STUDIO_INFO.name}. Tüm hakları saklıdır.</p>
          <p className="flex items-center gap-1">
            Nordic Craft with <Heart className="h-3.5 w-3.5 text-amber-500 inline fill-amber-500" /> by {STUDIO_INFO.founder.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
