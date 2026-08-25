import { Product } from "@/types/game";

export const PRODUCTS: Product[] = [
  // --- OYUNLAR (GAMES) ---
  {
    id: "blok-dunyasi",
    slug: "blok-dunyasi",
    type: "game",
    title: "Blok Dünyası",
    tagline: "Renkli blokları eşleştirin, çizgileri patlatın ve en yüksek skora ulaşın!",
    category: ["Bulmaca", "Mobil Oyun", "Eğlence"],
    status: "Released",
    releaseDate: "Google Play'de Yayında",
    shortDescription:
      "Blok Dünyası; klasik blok bulmaca keyfini renkli meyve ve kumaş temalarıyla buluşturan, oynaması akıcı ve tamamen internetsiz bir mobil oyundur.",
    fullDescription:
      "Blok Dünyası'nda amacınız ekrana gelen farklı şekillerdeki renkli blokları 8x8 ızgaraya yerleştirmek, yatay ve dikey sıraları tamamlayarak patlatmaktır.\n\n" +
      "🧩 Akıllı Hamleler: Blokları dikkatlice yerleştirin, kombolar yaparak tahtayı temizleyin.\n\n" +
      "🎨 Canlı Temalar: Taze meyve blokları ve el yapımı kumaş desenleriyle göz yormayan harika görseller.\n\n" +
      "🏆 Skor Heyecanı: Kendi rekorlarınızı geliştirin ve en yüksek puana ulaşın!",
    features: [
      "Canlı ve Renkli Görseller: Meyve ve kumaş desenli göz alıcı temalar.",
      "Kolay & Akıcı Oynanış: Tek parmakla blokları rahatça sürükleyin ve bırakın.",
      "Yüksek Skor Heyecanı: En iyi skorlarınızı kaydedin ve yeni rekorlar kırın.",
      "Stres Attıran Kombolar: Aynı anda birden fazla sırayı temizleyerek ekstra puan kazanın.",
      "%100 İnternetsiz: Metroda, otobüste veya seyahatte dilediğiniz her an oynayın.",
    ],
    platforms: ["Google Play", "Android"],
    techStack: ["Mobil Oyun"],
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
    tagline: "İngilizce kelimeleri unutmadan, eğlenerek ve bahçenizi büyüterek öğrenin.",
    category: ["Eğitim", "Dil Öğrenme", "Mobil"],
    status: "Beta",
    releaseDate: "Beta Yayında",
    shortDescription:
      "LingoRise; İngilizce kelime bilginizi unutmayı engelleyen akıllı hatırlatma sistemi ve büyüyen görsel bahçe metaforuyla kalıcı hale getiren modern bir mobil uygulamadır.",
    fullDescription:
      "LingoRise, sıkıcı ezber yöntemlerinin aksine kelimeleri kalıcı olarak aklınızda tutmanızı sağlar:\n\n" +
      "🌱 Görsel Öğrenme Bahçesi: Öğrendiğiniz ve hafızanıza yerleşen her yeni kelimeyle bahçeniz yeşerir ve büyür.\n\n" +
      "🧠 Akıllı Hatırlatma Sistemi: Bir kelimeyi tam unutmaya başladığınız anda karşınıza çıkararak hafızanızı taze tutar.\n\n" +
      "🎯 Seviyelere Göre Kelimeler: Başlangıçtan ileri düzeye kadar en çok kullanılan günlük kelimeleri adım adım öğrenin.",
    features: [
      "Akıllı Hatırlatma: Kelimeleri tam zamanında tekrar ettirerek hafızanızda kalıcı kılar.",
      "Öğrenme Bahçesi: Her pekişen kelimeyle görsel bahçeniz gelişir ve motivasyonunuz artar.",
      "Zengin Kelime Havuzu: Günlük hayatta ve sınavlarda en çok karşınıza çıkacak popüler kelimeler.",
      "Görsel İlerleme Takibi: Kaç kelimeyi tam olarak öğrendiğinizi net bir şekilde görün.",
      "İnternetsiz Kullanım: Dilediğiniz her yerde bağlantı olmadan rahatça kelime pratikleri yapın.",
    ],
    platforms: ["App Store", "Google Play", "Web App"],
    techStack: ["Mobil Uygulama"],
    links: {},
    coverImage: "/apps/lingorise/home-garden.png",
    bannerImage: "/apps/lingorise/home-garden.png",
    screenshots: [
      "/apps/lingorise/home-garden.png",
      "/apps/lingorise/practice-session.png",
      "/apps/lingorise/progress-mastery.png",
    ],
    featured: true,
  },
  {
    id: "benim-notlarim",
    slug: "benim-notlarim",
    type: "app",
    title: "Benim Notlarım",
    tagline: "Şık, sade ve tamamen gizlilik odaklı Android not defteriniz.",
    category: ["Üretkenlik", "Not Defteri", "Mobil"],
    status: "Released",
    releaseDate: "Google Play'de Yayında",
    shortDescription:
      "Benim Notlarım; telefonunuzun duvar kağıdıyla otomatik uyum sağlayan renkleri, zengin metin düzenleme araçları ve %100 gizlilik odaklı yapısıyla sade bir not alma deneyimi sunar.",
    fullDescription:
      "Benim Notlarım; fikirlerinizi, günlük planlarınızı ve alışveriş listelerinizi hızla kaydetmeniz için tasarlandı:\n\n" +
      "🎨 Otomatik Renk Uyumu: Telefonunuzun temasına ve duvar kağıdına uyum sağlayan şık ve modern görünüm.\n\n" +
      "✍️ Zengin Yazı Seçenekleri: Kalın, italik yazılar, renkli vurgular ve yapılacaklar kontrol listeleri oluşturun.\n\n" +
      "🔒 %100 Gizli & Güvenli: Notlarınız sadece sizin telefonunuzda saklanır, asla dışarıya aktarılmaz.",
    features: [
      "Zengin Yazı Düzenleyici: Kontrol listeleri, kalın/italik yazılar ve renkli vurgulamalar.",
      "Duvar Kağıdına Uyumlu Tema: Telefonunuzun renkleriyle otomatik eşleşen modern arayüz.",
      "Kolay Arama & Sıralama: Aradığınız nota saniyeler içinde ulaşın.",
      "Arşiv ve Çöp Kutusu: Önemli notlarınızı arşivleyin, silinenleri kolayca geri yükleyin.",
      "Tamamen Çevrimdışı & Gizli: Verileriniz telefonunuzda güvendedir, internet gerektirmez.",
    ],
    platforms: ["Google Play", "Android"],
    techStack: ["Mobil Uygulama"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.benimnotlarim.app",
    },
    coverImage: "/apps/benim-notlarim/cover.jpg",
    bannerImage: "/apps/benim-notlarim/cover.jpg",
    screenshots: [
      "/apps/benim-notlarim/cover.jpg",
      "/apps/benim-notlarim/editor.jpg",
      "/apps/benim-notlarim/settings.png",
    ],
    featured: false,
  },
];

// Helper exports
export const GAMES = PRODUCTS.filter((p) => p.type === "game");
export const APPS = PRODUCTS.filter((p) => p.type === "app");
