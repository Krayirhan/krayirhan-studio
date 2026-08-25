import { PressAsset } from "@/types/game";

export const PRESS_FACTS = [
  { label: "Stüdyo Adı", value: "Krayirhan Studio" },
  { label: "Kurucu", value: "Krayirhan" },
  { label: "Kuruluş Yılı", value: "2024" },
  { label: "Lokasyon", value: "İstanbul, Türkiye" },
  { label: "Web Sitesi", value: "https://studio.krayirhan.com" },
  { label: "Basın İletişim", value: "press@krayirhan.com" },
  { label: "Platformlar", value: "PC (Steam, Epic), Konsol, Web" },
];

export const PRESS_ASSETS: PressAsset[] = [
  {
    title: "Krayirhan Studio Logo Paketi (PNG & SVG)",
    type: "Logo",
    format: "ZIP (Vector & PNG)",
    fileSize: "2.4 MB",
    downloadUrl: "#",
  },
  {
    title: "Aether Protocol - Key Art & HD Ekran Görüntüleri",
    type: "Key Art",
    format: "ZIP (4K PNG)",
    fileSize: "48.5 MB",
    downloadUrl: "#",
  },
  {
    title: "Tüm Oyunlar - Medya ve Basın Kiti (Toplu)",
    type: "Full Press Kit",
    format: "ZIP",
    fileSize: "96.0 MB",
    downloadUrl: "#",
  },
];
