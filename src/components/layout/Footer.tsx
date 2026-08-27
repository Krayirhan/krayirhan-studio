import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Mail } from "lucide-react";
import { STUDIO_INFO } from "@/data/studioInfo";
import { PRODUCTS } from "@/data/games";

export function Footer() {
  return (
    <footer aria-label="Site alt bilgisi" className="border-t border-white/10 bg-[var(--background-deep)] text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
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
            <p className="max-w-md text-[15px] text-zinc-300 leading-relaxed">
              {STUDIO_INFO.tagline}
            </p>
            <div className="pt-2 text-sm text-zinc-400 font-mono">
              📍 {STUDIO_INFO.location} · Bağımsız Mobil Oyun & Uygulama Geliştirme Stüdyosu
            </div>
          </div>

          {/* Product links */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold tracking-widest text-zinc-100 uppercase font-mono">
              Ürünler
            </h2>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="inline-flex min-h-11 items-center hover:text-white transition-colors font-medium">Tüm Ürünler</Link></li>
              <li><Link href="/games" className="inline-flex min-h-11 items-center hover:text-white transition-colors font-medium">Oyunlar</Link></li>
              <li><Link href="/apps" className="inline-flex min-h-11 items-center hover:text-white transition-colors font-medium">Uygulamalar</Link></li>
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <Link href={`/products/${product.slug}`} className="inline-flex min-h-11 items-center text-zinc-400 hover:text-white transition-colors">
                    {product.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio links */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold tracking-widest text-zinc-100 uppercase font-mono">
              Stüdyo
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="inline-flex min-h-11 items-center hover:text-white transition-colors font-medium">Hakkında</Link>
              </li>
              <li>
                <Link href="/press" className="inline-flex min-h-11 items-center hover:text-white transition-colors font-medium">Press Kit</Link>
              </li>
              <li>
                <Link href="/privacy" className="inline-flex min-h-11 items-center hover:text-white transition-colors">Gizlilik</Link>
              </li>
            </ul>
          </div>

          {/* Founder & Crosslink */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold tracking-widest text-zinc-100 uppercase font-mono">
              Bağlantılar
            </h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors font-medium"
                >
                  <span>Blok Dünyası (Google Play)</span>
                  <ExternalLink aria-hidden="true" className="h-3 w-3" />
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
                  <ExternalLink aria-hidden="true" className="h-3 w-3" />
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
                  <ExternalLink aria-hidden="true" className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${STUDIO_INFO.contactEmail}`}
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
                >
                  <Mail aria-hidden="true" className="h-3 w-3" />
                  <span>{STUDIO_INFO.contactEmail}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-zinc-400 gap-4">
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
