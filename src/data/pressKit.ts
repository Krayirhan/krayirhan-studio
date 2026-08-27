import { PressAsset } from "@/types/game";

export const PRESS_FACTS = [
  { label: "Stüdyo Adı", value: "Krayirhan Studio" },
  { label: "Kurucu", value: "Muhsin Furkan Turan" },
  { label: "Kuruluş Yılı", value: "2026" },
  { label: "Lokasyon", value: "Ankara, Türkiye" },
  { label: "Web Sitesi", value: "https://studio.krayirhan.com" },
  { label: "Basın İletişim", value: "press@krayirhan.com" },
  { label: "Platformlar", value: "Google Play (Android), Web" },
];

export const PRESS_ASSETS: PressAsset[] = [
  {
    title: "Krayirhan Studio Logo Paketi (PNG)",
    type: "Logo",
    format: "PNG",
    fileSize: "500 KB",
    downloadUrl: "/brand/logo.png",
  },
  {
    title: "Blok Dünyası - Oynanış Görseli",
    type: "Screenshots",
    format: "JPG",
    fileSize: "95 KB",
    downloadUrl: "/games/blok-dunyasi/gameplay-1.jpg",
  },
  {
    title: "LingoRise - Uygulama Görseli",
    type: "App Assets",
    format: "PNG",
    fileSize: "275 KB",
    downloadUrl: "/apps/lingorise/home-garden.png",
  },
];
