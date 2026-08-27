"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Gamepad2, Laptop, Smartphone } from "lucide-react";
import type { CSSProperties } from "react";

export type BentoProduct = {
  id: string;
  title: string;
  description: string;
  category: "game" | "ai" | "app";
  image: string;
  href: string;
  accent: "orange" | "green" | "blue" | "violet";
  index?: string;
  label?: string;
};

type BentoProductShowcaseProps = {
  products: BentoProduct[];
  /** Supply verified ATLAS product data to enable the wide AI card. */
  atlas?: BentoProduct;
};

const categoryLabels = { all: "Tümü", game: "Oyunlar", app: "Uygulamalar" } as const;
type Filter = keyof typeof categoryLabels;

const accentClasses = {
  orange: "from-orange-400/20 via-orange-500/5",
  green: "from-emerald-400/20 via-emerald-500/5",
  blue: "from-sky-400/20 via-sky-500/5",
  violet: "from-violet-400/20 via-violet-500/5",
};

function ProductIcon({ category }: { category: BentoProduct["category"] }) {
  if (category === "game") return <Gamepad2 aria-hidden="true" className="h-4 w-4" />;
  if (category === "ai") return <Laptop aria-hidden="true" className="h-4 w-4" />;
  return <Smartphone aria-hidden="true" className="h-4 w-4" />;
}

export function BentoProductShowcase({ products, atlas }: BentoProductShowcaseProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [pointer, setPointer] = useState({ x: 50, y: 50 });
  const items = useMemo(() => (atlas ? [atlas, ...products] : products), [atlas, products]);
  const visible = filter === "all" ? items : items.filter((item) => item.category === filter);
  const tall = visible.find((item) => item.category === "game") ?? visible[0];
  const wide = visible.find((item) => item.category === "ai");
  const squares = visible.filter((item) => item.id !== tall?.id && item.id !== wide?.id).slice(0, 2);

  const card = (item: BentoProduct, className: string) => (
    <Link
      key={`${filter}-${item.id}`}
      href={item.href}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPointer({ x: ((event.clientX - rect.left) / rect.width) * 100, y: ((event.clientY - rect.top) / rect.height) * 100 });
      }}
      className={`bento-card-enter group relative isolate flex min-h-64 flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md transition-colors duration-300 hover:border-white/25 ${className}`}
      style={{ "--pointer-x": `${pointer.x}%`, "--pointer-y": `${pointer.y}%` } as CSSProperties}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(320px circle at var(--pointer-x) var(--pointer-y), rgba(255,255,255,.13), transparent 70%)" }} />
      <div className="flex items-start justify-between gap-4">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-300"><ProductIcon category={item.category} />{item.label ?? (item.category === "game" ? "Oyun" : "Uygulama")}</span>
        <span className="text-xs text-zinc-500">{item.index ?? "00"}</span>
      </div>
      <div className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b ${accentClasses[item.accent]} to-transparent opacity-70`} />
      <div className={`relative mt-6 flex min-h-48 flex-1 items-center justify-center ${item.category === "game" ? "py-2" : "py-4"}`}>
        {item.category === "ai" ? (
          <div className="relative w-full overflow-hidden rounded-xl border border-white/20 bg-zinc-950/80 p-1 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
            <div className="flex h-5 items-center gap-1 border-b border-white/10 px-2"><span className="h-2 w-2 rounded-full bg-red-400/70" /><span className="h-2 w-2 rounded-full bg-amber-300/70" /><span className="h-2 w-2 rounded-full bg-emerald-400/70" /></div>
            <div className="relative h-36 w-full"><Image src={item.image} alt={`${item.title} masaüstü arayüzü`} fill sizes="(max-width: 768px) 90vw, 50vw" className="object-cover object-top" /></div>
          </div>
        ) : (
          <div className={`relative w-full max-w-[150px] rounded-[2rem] border border-white/25 bg-gradient-to-b from-zinc-600 via-zinc-800 to-zinc-950 p-2 shadow-2xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-[1.03] ${item.category === "game" ? "max-w-[170px]" : "max-w-[145px]"}`}>
            <div className="relative aspect-[9/19.5] overflow-hidden rounded-[1.55rem] bg-black"><Image src={item.image} alt={`${item.title} mobil ekranı`} fill sizes="(max-width: 768px) 55vw, 180px" className="object-cover object-top" /></div>
          </div>
        )}
      </div>
      <div className="mt-6 space-y-2">
        <h3 className="font-display text-2xl font-bold tracking-tight text-white">{item.title}</h3>
        <p className="text-sm leading-relaxed text-zinc-400">{item.description}</p>
        <span className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-zinc-200 transition-transform duration-300 group-hover:translate-x-1">Detayları İncele <ArrowRight aria-hidden="true" className="h-4 w-4" /></span>
      </div>
    </Link>
  );

  return (
    <section aria-labelledby="bento-showcase-title" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div><p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">Ürün ekosistemi</p><h2 id="bento-showcase-title" className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">Ürünlerimiz</h2></div>
        <div role="tablist" aria-label="Ürün filtresi" className="flex w-fit flex-wrap gap-1 rounded-2xl border border-white/10 bg-white/[0.03] p-1">
          {(Object.keys(categoryLabels) as Filter[]).map((key) => <button key={key} type="button" role="tab" aria-selected={filter === key} onClick={() => setFilter(key)} className={`rounded-xl px-3 py-2 text-sm font-semibold transition-colors ${filter === key ? "bg-white text-zinc-950" : "text-zinc-400 hover:text-white"}`}>{categoryLabels[key]}</button>)}
        </div>
      </div>
      {visible.length === 0 ? <p className="rounded-2xl border border-white/10 p-8 text-center text-zinc-400">Bu kategoride henüz ürün bulunmuyor.</p> : <div className="grid auto-rows-[minmax(360px,auto)] grid-cols-1 gap-5 md:grid-cols-3">{tall && card(tall, "md:col-span-1 md:row-span-1")} {wide && card(wide, "md:col-span-2 md:row-span-1")} {squares.map((item) => card(item, "md:col-span-1 md:row-span-1"))}</div>}
    </section>
  );
}
