import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProductSlider } from "@/components/home/FeaturedProductSlider";

export function LegacyV2Home() {
  return (
    <div className="pb-16">
      <HeroSection />
      <FeaturedProductSlider />
      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 lg:px-12"><div className="border-t border-white/10 pt-12"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">Krayirhan Studio</p><h1 className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">Bağımsız oyunlar ve günlük kullanıma odaklanan uygulamalar.</h1><Link href="/v2/products" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-neutral-300">Ürünleri incele <ArrowRight className="h-4 w-4" /></Link></div></section>
    </div>
  );
}
