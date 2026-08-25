import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { STUDIO_INFO } from "@/data/studioInfo";

export const metadata: Metadata = {
  title: `${STUDIO_INFO.name} | Bağımsız Oyunlar & Dijital Uygulamalar`,
  description: STUDIO_INFO.tagline,
  keywords: [
    "Krayirhan Studio",
    "Indie Game Studio",
    "Mobil Uygulama Geliştirme",
    "Yazılım Şirketi",
    "Steam Games",
    "iOS Apps",
    "Android Apps",
    "React Native",
    "Unity",
    "Nexus Focus",
    "Aether Protocol",
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
      <body className="min-h-screen bg-[#07090e] text-slate-100 antialiased flex flex-col justify-between selection:bg-indigo-600 selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
