import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const playStoreUrl = "https://play.google.com/store/apps/developer?id=Krayirhan";

export function V2FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111419] px-6 py-12 sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-sky-400/[0.06] blur-3xl" />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.24em] text-neutral-400 uppercase">Krayirhan Studio</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#f5f5f2] sm:text-4xl">Yeni bir şey keşfet.</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#a5a8ae] sm:text-base">
            Oyunlarımızı ve günlük hayata eşlik eden uygulamalarımızı inceleyin.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/products" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-neutral-200">
              Tüm Ürünler <ArrowRight className="h-4 w-4" />
            </Link>
            <a href={playStoreUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.05]">
              Google Play <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
