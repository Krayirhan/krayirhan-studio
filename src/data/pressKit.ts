import { PressAsset } from "@/types/game";

export const PRESS_FACTS = [
  { label: "Stüdyo Adı", value: "Krayirhan Studio" },
  { label: "Kurucu", value: "Muhsin Furkan Turan" },
  { label: "Kuruluş Yılı", value: "2024" },
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
    title: "Blok Dünyası - Tanıtım & HD Ekran Görüntüleri",
    type: "Screenshots",
    format: "ZIP / JPG",
    fileSize: "12.5 MB",
    downloadUrl: "#",
  },
  {
    title: "LingoRise & Benim Notlarım - Uygulama Medya Kiti",
    type: "App Assets",
    format: "ZIP / PNG",
    fileSize: "18.0 MB",
    downloadUrl: "#",
  },
];
