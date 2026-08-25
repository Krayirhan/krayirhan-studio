import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { STUDIO_INFO } from "@/data/studioInfo";
import { SoundProvider } from "@/components/effects/SoundEffects";

export const metadata: Metadata = {
  title: `${STUDIO_INFO.name} | Bağımsız Oyunlar & Dijital Uygulamalar`,
  description: STUDIO_INFO.tagline,
  keywords: [
    "Krayirhan Studio",
    "Blok Dünyası",
    "LingoRise",
    "Benim Notlarım",
    "Mobil Oyun Geliştirme",
    "Yazılım Şirketi",
    "Android Apps",
    "React Native",
    "Unity Engine",
    "Kotlin",
  ],
  authors: [{ name: STUDIO_INFO.founder.name, url: STUDIO_INFO.founder.portfolioUrl }],
  openGraph: {
    title: `${STUDIO_INFO.name} | Games & Apps`,
    description: STUDIO_INFO.tagline,
    url: "https://studio.krayirhan.com",
    siteName: STUDIO_INFO.name,
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="dark">
      <body className="min-h-screen bg-[#090a0f] text-slate-100 antialiased flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950">
        <SoundProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SoundProvider>
      </body>
    </html>
  );
}
