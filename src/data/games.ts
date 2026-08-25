import { Product } from "@/types/game";

export const PRODUCTS: Product[] = [
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
