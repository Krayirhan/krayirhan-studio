import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060608] text-zinc-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Studio Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full overflow-hidden border border-white/20 bg-white p-0.5 shadow-md">
                <Image
                  src="/brand/logo.png"
                  alt="Krayirhan Studio logosu"
                  fill
                  sizes="40px"
                  className="object-cover rounded-full"
                />
              </div>
              <span className="text-lg font-bold tracking-wider text-white uppercase font-display">
                {STUDIO_INFO.name}
              </span>
            </div>
            <p className="max-w-md text-sm text-zinc-400 leading-relaxed">
              {STUDIO_INFO.tagline}
            </p>
            <div className="pt-2 text-xs text-zinc-500 font-mono">
              📍 {STUDIO_INFO.location} · Bağımsız Mobil Oyun & Uygulama Geliştirme Stüdyosu
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-zinc-200 uppercase font-mono">
              Ürünler & Sayfalar
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products/blok-dunyasi" className="hover:text-white transition-colors font-medium">
                  Blok Dünyası (Oyun)
                </Link>
              </li>
              <li>
                <Link href="/products/lingorise" className="hover:text-white transition-colors font-medium">
                  LingoRise (Uygulama)
                </Link>
              </li>
              <li>
                <Link href="/products/benim-notlarim" className="hover:text-white transition-colors font-medium">
                  Benim Notlarım (Uygulama)
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">
                  Tüm Ürün Kataloğu
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  Stüdyo Hakkında
                </Link>
              </li>
            </ul>
          </div>

          {/* Founder & Crosslink */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-zinc-200 uppercase font-mono">
              Bağlantılar
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors font-medium"
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
                  className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors font-medium"
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
                  className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors font-medium"
                >
                  <span>Kurucu: Muhsin Furkan Turan</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${STUDIO_INFO.contactEmail}`}
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                >
                  <Mail className="h-3 w-3" />
                  <span>{STUDIO_INFO.contactEmail}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p>© {new Date().getFullYear()} {STUDIO_INFO.name}. Tüm hakları saklıdır.</p>
          <p className="font-medium text-zinc-400">
            Geliştiren & Tasarlayan:{" "}
            <a
              href={STUDIO_INFO.founder.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-200 hover:text-white underline underline-offset-4 transition-colors"
            >
              {STUDIO_INFO.founder.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
