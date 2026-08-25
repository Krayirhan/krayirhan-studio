import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { STUDIO_INFO } from "@/data/studioInfo";

export const metadata: Metadata = {
  title: `${STUDIO_INFO.name} | Bağımsız Oyun Geliştirme Stüdyosu`,
  description: STUDIO_INFO.tagline,
  keywords: [
    "Krayirhan Studio",
    "Indie Game Studio",
    "Oyun Geliştirme",
    "Game Developer",
    "Steam Games",
    "Unity",
    "Unreal Engine",
    "Aether Protocol",
    "Void Drifter",
  ],
  authors: [{ name: STUDIO_INFO.founder.name, url: STUDIO_INFO.founder.portfolioUrl }],
  openGraph: {
    title: `${STUDIO_INFO.name} | Indie Games`,
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
