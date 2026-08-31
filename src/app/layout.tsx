import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, Newsreader, Cinzel } from "next/font/google";
import "./globals.css";
import { STUDIO_INFO } from "@/data/studioInfo";
import { SoundProvider } from "@/components/effects/SoundEffects";
import { AnalyticsTracker } from "@/components/analytics/AnalyticsTracker";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-brand",
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studio.krayirhan.com"),
  title: {
    default: `${STUDIO_INFO.name} | Bağımsız oyunlar ve mobil uygulamalar`,
    template: `%s | ${STUDIO_INFO.name}`,
  },
  description: "Krayirhan Studio'nun bağımsız mobil oyunlarını ve günlük kullanıma odaklanan uygulamalarını keşfedin.",
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
    title: `${STUDIO_INFO.name} | Bağımsız oyunlar ve mobil uygulamalar`,
    description: "Oynaması keyifli oyunlar, her gün kullanılan uygulamalar.",
    url: "/",
    siteName: STUDIO_INFO.name,
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: `${STUDIO_INFO.name} | Bağımsız oyunlar ve mobil uygulamalar`,
    description: "Oynaması keyifli oyunlar, her gün kullanılan uygulamalar.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`dark ${plusJakarta.variable} ${spaceGrotesk.variable} ${newsreader.variable} ${cinzel.variable}`}
    >
      <body className="min-h-screen bg-[#080a0d] text-[#f5f2eb] font-sans antialiased selection:bg-white selection:text-black">
        <SoundProvider>
          <AnalyticsTracker />
          {children}
        </SoundProvider>
      </body>
    </html>
  );
}
