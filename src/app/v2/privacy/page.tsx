import type { Metadata } from "next";
import { V2Header } from "@/components/v2/V2Header";
import { V2Footer } from "@/components/v2/V2Footer";

export const metadata: Metadata = {
  title: "Gizlilik (V2) | Krayirhan Studio",
  description: "Krayirhan Studio ürünleri ve web sitesi için gizlilik yaklaşımı.",
};

export default function V2LegacyPrivacyPage() {
  return (
    <div className="v2-page min-h-screen bg-[#080a0d] text-[#f5f2eb] flex flex-col justify-between">
      <V2Header />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 flex-1">
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-zinc-400">Krayirhan Studio (V2)</p>
        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">Gizlilik</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300">
          <p>Ürünlerimizde mümkün olduğunca az veri toplarız. Çevrimdışı çalışan ürünlerde içerikler cihazınızda tutulur.</p>
          <p>Web sitemizde analitik uç noktası yapılandırılmadığı sürece ziyaretçi verisi harici bir servise gönderilmez. Bir analitik hizmeti etkinleştirilirse hangi verilerin işlendiği ayrıca açıklanır.</p>
          <p>Gizlilik sorularınız için <a className="font-semibold text-white underline underline-offset-4" href="mailto:contact@krayirhan.com">contact@krayirhan.com</a> adresine yazabilirsiniz.</p>
        </div>
      </article>
      <V2Footer />
    </div>
  );
}
