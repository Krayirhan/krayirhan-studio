import type { Metadata } from "next";
import { V2Header } from "@/components/v2/V2Header";
import { V2Hero } from "@/components/v2/V2Hero";
import { V2Projects } from "@/components/v2/V2Projects";
import { V2Philosophy } from "@/components/v2/V2Philosophy";
import { V2SectionDivider } from "@/components/v2/V2SectionDivider";
import { V2Footer } from "@/components/v2/V2Footer";

export const metadata: Metadata = {
  title: "Krayirhan Studio V2 | Kadim Köklerden, Modern Deneyimlere",
  description:
    "Krayirhan Studio; oyunlar ve günlük hayatı kolaylaştıran mobil uygulamalar geliştirir. Kullanışlı, estetik ve kalıcı deneyimler üretmeye inanıyoruz.",
  alternates: {
    canonical: "https://studio.krayirhan.com/v2",
  },
  openGraph: {
    title: "Krayirhan Studio V2 | Kadim Köklerden, Modern Deneyimlere",
    description:
      "Krayirhan Studio; oyunlar ve günlük hayatı kolaylaştıran mobil uygulamalar geliştirir.",
    url: "https://studio.krayirhan.com/v2",
    siteName: "Krayirhan Studio",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/v2/ancient-tree-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Krayirhan Studio V2 Kadim Kökler ve Modern Dünyalar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krayirhan Studio V2 | Kadim Köklerden, Modern Deneyimlere",
    description:
      "Krayirhan Studio; oyunlar ve günlük hayatı kolaylaştıran mobil uygulamalar geliştirir.",
    images: ["/v2/ancient-tree-hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Krayirhan Studio",
  url: "https://studio.krayirhan.com/v2",
  logo: "https://studio.krayirhan.com/brand/logo.png",
  description:
    "Krayirhan Studio; oyunlar ve günlük hayatı kolaylaştıran mobil uygulamalar geliştirir. Kullanışlı, estetik ve kalıcı deneyimler üretmeye inanıyoruz.",
  founder: {
    "@type": "Person",
    name: "Muhsin Furkan Turan",
  },
  sameAs: [
    "https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi",
    "https://play.google.com/store/apps/details?id=com.benimnotlarim.app",
  ],
};

export default function V2HomePage() {
  return (
    <div className="v2-page min-h-screen bg-[#080a0d] text-[#f5f2eb] selection:bg-white selection:text-black">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Luxury Navigation Bar */}
      <V2Header />

      {/* Main Single Landmark Container */}
      <div className="v2-content">
        {/* 1. Hero: 3-Layered Floating Smartphones & Brand Statement */}
        <V2Hero />

        {/* Section Divider */}
        <V2SectionDivider />

        {/* 2. Featured Showcase: Tabs, Checklist & 4-Phone Gallery */}
        <V2Projects />

        {/* Section Divider */}
        <V2SectionDivider />

        {/* 3. Studio Philosophy & Seljuk Metrics Ribbon */}
        <V2Philosophy />
      </div>

      {/* 4. Luxury 5-Column Studio Footer */}
      <V2Footer />
    </div>
  );
}
