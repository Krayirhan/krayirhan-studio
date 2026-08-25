import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { STUDIO_INFO } from "@/data/studioInfo";
import { SoundProvider } from "@/components/effects/SoundEffects";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${STUDIO_INFO.name} — Bağımsız Oyunlar & Mobil Uygulamalar`,
  description: STUDIO_INFO.tagline,
  keywords: [
    "Krayirhan Studio",
    "Blok Dünyası",
    "LingoRise",
    "Benim Notlarım",
    "Mobil Oyun",
    "Android Uygulama",
  ],
  authors: [{ name: STUDIO_INFO.founder.name, url: STUDIO_INFO.founder.portfolioUrl }],
  openGraph: {
    title: `${STUDIO_INFO.name} — Games & Apps`,
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
    <html lang="tr" className={`dark ${spaceGrotesk.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen bg-[#08080a] text-zinc-100 font-sans antialiased flex flex-col justify-between selection:bg-white selection:text-zinc-950">
        <SoundProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SoundProvider>
      </body>
    </html>
  );
}
