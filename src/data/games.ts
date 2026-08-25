import { Product } from "@/types/game";

export const PRODUCTS: Product[] = [
  // --- OYUNLAR (GAMES) ---
  {
    id: "blok-dunyasi",
    slug: "blok-dunyasi",
    type: "game",
    title: "Blok Dünyası",
    tagline: "Renkli blokları eşleştirin, çizgileri patlatın ve en yüksek skora ulaşın!",
    category: ["Bulmaca", "Mobil Oyun", "Casual", "Arcade"],
    status: "Released",
    releaseDate: "Google Play'de Yayında",
    shortDescription:
      "Blok Dünyası; klasik blok bulmaca mekaniklerini meyve ve dikiş temalı göz alıcı görsellerle, akıcı kontrollerle ve hedef bazlı seviye modlarıyla buluşturan eğlenceli bir mobil oyundur.",
    fullDescription:
      "Blok Dünyası'nda amacınız ızgara üzerine verilen farklı şekillerdeki blokları stratejik olarak yerleştirmek, yatay ve dikey sıraları tamamlayarak temizlemektir.\n\n" +
      "🧩 Stratejik Hamleler: Her hamlenizi önceden planlayın, ızgarayı doldurmadan kombolar yapın.\n\n" +
      "🎨 Çeşitli Görsel Temalar: İster taze meyve blokları ister el yapımı kumaş ve düğme desenleriyle oynayın.\n\n" +
      "🏆 Skor Yarışı: Kendi en iyi rekorlarınızı kırın ve arkadaşlarınızla yarışın!",
    features: [
      "Canlı ve Renkli Temalar: Meyve blokları, dikiş-kumaş desenleri ve dinamik patlama efektleri.",
      "Hedef Puan Modları: Belirlenen seviye hedeflerine ulaşarak yeni rekorlara koşun.",
      "Akıcı Dokunmatik Kontroller: Mobil cihazlar için hassas, gecikmesiz blok sürükleme deneyimi.",
      "Kayıt & Skor Sistemi: En iyi puanlarınızı takip edin ve istediğiniz zaman oyuna devam edin.",
      "İnternetsiz Oynama: Dilediğiniz her yerde tamamen offline oynanabilirlik.",
    ],
    platforms: ["Google Play", "Android" as any],
    techStack: ["Unity Engine (C#)", "DOTween", "Universal Render Pipeline (URP)"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi",
    },
    coverImage: "/games/blok-dunyasi/cover.jpg",
    bannerImage: "/games/blok-dunyasi/cover.jpg",
    screenshots: [
      "/games/blok-dunyasi/cover.jpg",
      "/games/blok-dunyasi/gameplay-1.jpg",
      "/games/blok-dunyasi/gameplay-2.jpg",
    ],
    featured: true,
  },

  // --- UYGULAMALAR (APPS) ---
  {
    id: "lingorise",
    slug: "lingorise",
    type: "app",
    title: "LingoRise",
    tagline: "Türkçe konuşanlar için, unutmayı ciddiye alan akıllı İngilizce kelime öğrenme uygulaması.",
    category: ["Eğitim", "Dil Öğrenme", "Aralıklı Tekrar (SRS)", "Mobil"],
    status: "Beta",
    releaseDate: "Beta Yayında",
    shortDescription:
      "LingoRise; A1'den C2'ye kadar kelime bilgisini SM-2 aralıklı tekrar algoritması ve 'Learning Garden' oyunlaştırma mekanikleriyle kalıcı hale getiren modern bir mobil uygulamadır.",
    fullDescription:
      "LingoRise, klasik bir 'kelime kartı' uygulamasından farklı olarak bilginin kalıcılığını merkeze alır:\n\n" +
      "🌱 XP ≠ Bilgi: XP sadece harcanan çabayı ödüllendirir, asla azalmaz. Bir kelimeyi gerçekten bildiğinizi kanıtlayan ayrı bir eksen vardır: Mastery.\n\n" +
      "⏳ Gerçek Aralıklı Tekrar (SRS): Bir kelimenin 'pekişmiş' sayılması için 3 ardışık doğru ve en az 2 farklı günde doğru bilinmesi gerekir. SM-2 tabanlı zamanlayıcı unutma eğrisine göre her kelimeyi tam vaktinde yeniden sorar.\n\n" +
      "🏡 Learning Garden: Her pekişen kelime bahçenizi büyütür. İlerleme somut, şeffaf ve dürüst kalır.",
    features: [
      "SM-2 Aralıklı Tekrar Algoritması: Unutma eğrisine göre otomatik olarak zamanlanan akıllı pratik oturumları.",
      "Learning Garden Metaforu: Öğrenilen ve pekişen kelimelerle evrilen görsel bahçe sistemi.",
      "A1 - C2 Kapsamlı Müfredat: Seviyelere, ünitelere ve kullanım sıklığına göre yapılandırılmış kelime havuzu.",
      "Dürüst İlerleme (Mastery vs Seen): Sadece görülen değil, hafızaya tam yerleşmiş kelimelerin net ayrımı.",
      "Offline-First & Bulut Senkronizasyonu: AsyncStorage ile internetsiz tam çalışma, Firebase Firestore ile çoklu cihaz eşitlemesi.",
      "177+ Birim Testi: React ve veri tabanından tamamen izole edilmiş saf domain mimarisi ile sıfır mantık hatası.",
    ],
    platforms: ["App Store", "Google Play", "Web App"],
    techStack: ["React Native", "Expo SDK 56", "TypeScript (Strict)", "Firebase Firestore", "AsyncStorage"],
    links: {
      appStore: "#",
      playStore: "#",
      webApp: "#",
    },
    coverImage: "/apps/lingorise/home-garden.png",
    bannerImage: "/apps/lingorise/home-garden.png",
    screenshots: [
      "/apps/lingorise/home-garden.png",
      "/apps/lingorise/practice-session.png",
      "/apps/lingorise/progress-mastery.png",
    ],
    featured: true,
  },
];

// Helper exports
export const GAMES = PRODUCTS.filter((p) => p.type === "game");
export const APPS = PRODUCTS.filter((p) => p.type === "app");
