import { Product } from "@/types/game";

export const PRODUCTS: Product[] = [
  // --- UYGULAMALAR (APPS & DIGITAL PRODUCTS) ---
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
      github: "https://github.com/Krayirhan/lingorise",
      appStore: "https://github.com/Krayirhan/lingorise",
      playStore: "https://github.com/Krayirhan/lingorise",
      webApp: "https://github.com/Krayirhan/lingorise",
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
  {
    id: "hesap-gunlugu",
    slug: "hesap-gunlugu",
    type: "app",
    title: "Hesap Günlüğü",
    tagline: "Modern, gizlilik odaklı ve akıllı kişisel finans & bütçe takip uygulaması.",
    category: ["Finans", "Üretkenlik", "Android", "Bütçe Takip"],
    status: "Released",
    releaseDate: "Yayında",
    shortDescription:
      "Gelir, gider ve birikim hedeflerinizi sade ve modern arayüzüyle kontrol altında tutmanızı sağlayan Kotlin & Jetpack Compose tabanlı finans uygulaması.",
    fullDescription:
      "Hesap Günlüğü, kullanıcıların karmaşık tablolarla uğraşmadan bütçelerini yönetmelerini sağlar. Aylık harcama limitleri belirleyin, kategorik pasta grafikleriyle harcama alışkanlıklarınızı analiz edin ve birikim hedeflerinize adım adım ulaşın.",
    features: [
      "Modern Jetpack Compose Arayüzü: Akıcı Material 3 animasyonları ve karanlık tema desteği.",
      "Kategorik Analiz & Raporlama: Harcamaların detaylı görselleştirilmesi.",
      "Hedef ve Birikim Takibi: Hedeflenen tutara kalan süreyi ve ilerlemeyi hesaplama.",
      "Gizlilik ve Güvenlik: Tüm finansal verileriniz cihazınızda güvenle saklanır.",
    ],
    platforms: ["Google Play", "Android" as any],
    techStack: ["Kotlin", "Jetpack Compose", "Room Database", "Material 3", "Coroutines"],
    links: {
      github: "https://github.com/Krayirhan/hesapgunlugu",
      playStore: "https://github.com/Krayirhan/hesapgunlugu",
    },
    coverImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "floriven-studio",
    slug: "floriven-studio",
    type: "app",
    title: "Floriven Studio",
    tagline: "Yapay zeka destekli mobil UI arayüz ve tasarım prototipleme ekosistemi.",
    category: ["Yapay Zeka", "Tasarım Araçları", "SaaS", "Mobil UI"],
    status: "In Development",
    releaseDate: "Q4 2026",
    shortDescription:
      "Geliştiriciler ve tasarımcılar için doğal dil komutlarıyla yüksek kaliteli mobil kullanıcı arayüzleri ve bileşenleri üreten AI platformu.",
    fullDescription:
      "Floriven Studio, mobil uygulama prototipleme sürecini hızlandırmak için geliştirilmiş bir yapay zeka aracıdır. Tasarım kurallarını ve en iyi UI/UX pratiklerini doğrudan koda ve görsel prototiplere dönüştürür.",
    features: [
      "AI Destekli Bileşen Üretimi: Buton, kart ve form arayüzlerinin anında oluşturulması.",
      "Tasarım Sistemi Uyumluluğu: Renk paletleri ve tipografi hiyerarşisi oluşturma.",
      "React Native & Flutter Kod Çıktısı: Tasarımları tek tıkla canlı koda aktarma.",
    ],
    platforms: ["Web App", "macOS"],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "Python"],
    links: {
      github: "https://github.com/Krayirhan/Floriven-Studio",
      webApp: "https://github.com/Krayirhan/Floriven-Studio",
    },
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },

  // --- OYUNLAR (GAMES) ---
  {
    id: "kapan-01",
    slug: "kapan-01",
    type: "game",
    title: "K.A.P.A.N - 01",
    tagline: "Karanlık, klostrofobik ve psikolojik gerilim odaklı hayatta kalma & kaçış oyunu.",
    category: ["Hayatta Kalma", "Korku / Gerilim", "Psikolojik", "PC"],
    status: "In Development",
    releaseDate: "2026",
    shortDescription:
      "Terk edilmiş bir yeraltı araştırma tesisinde uyandığınız, kaynaklarınızı dikkatli yöneterek ve ipuçlarını birleştirerek kaçmaya çalıştığınız psikolojik korku oyunu.",
    fullDescription:
      "K.A.P.A.N - 01, oyuncuyu derin bir bilinmezliğin ve sessizliğin içine çeker. Her adımınız ses çıkarır, her ışık kaynağı tehlikeyi üstünüze çekebilir. Çevresel bulmacaları çözün, ses tasarımının rehberliğinde ilerleyin ve tesisin karanlık sırlarını çözün.",
    features: [
      "Gerçekçi Ses & Mekan Akustiği: Canavarın konumunu ve çevresel tehditleri sesle algılama.",
      "Kısıtlı Envanter & Hayatta Kalma: Fener pili, medkit ve kilit açıcıların stratejik kullanımı.",
      "Dinamik Işıklandırma ve Gölgeler: Karanlığı avantaja çevirme mekaniği.",
    ],
    platforms: ["Steam", "PC" as any],
    techStack: ["Unity Engine (C#)", "HDRP", "FMOD Audio", "Blender"],
    links: {
      github: "https://github.com/Krayirhan/K.A.P.A.N-01",
      steam: "https://github.com/Krayirhan/K.A.P.A.N-01",
    },
    coverImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1920&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-8400 / AMD Ryzen 5 2600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580",
        storage: "20 GB kullanılabilir alan",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel Core i7-10700K / AMD Ryzen 7 3700X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 3060 12GB / AMD Radeon RX 6700 XT",
        storage: "20 GB SSD kullanılabilir alan",
      },
    },
  },
  {
    id: "blok-dunyasi",
    slug: "blok-dunyasi",
    type: "game",
    title: "Blok Dünyası",
    tagline: "Bağımlılık yapıcı mekaniklere sahip dinamik blok eşleştirme ve bulmaca oyunu.",
    category: ["Bulmaca", "Mobil", "Casual", "Arcade"],
    status: "Early Access",
    releaseDate: "Yayında",
    shortDescription:
      "Farklı şekillerdeki blokları stratejik olarak ızgaraya yerleştirin, sıraları ve sütunları temizleyerek kombolar yapın ve en yüksek skora ulaşın.",
    fullDescription:
      "Blok Dünyası; klasik blok temizleme zevkini modern görsel efektler, dokunsal geri bildirimler (haptic) ve seviye modlarıyla buluşturan bir mobil bulmaca oyunudur.",
    features: [
      "Akıcı Dokunmatik Kontroller: Hızlı ve hassas blok yerleştirme mekanikleri.",
      "Göz Alıcı Parçacık Efektleri: Kombo ve temizlemelerde zengin animasyonlar.",
      "Sonsuz ve Seviye Modları: Günlük görevler ve zorlu bulmaca haritaları.",
    ],
    platforms: ["Google Play", "Android" as any],
    techStack: ["Unity (C#)", "DOTween", "Universal Render Pipeline (URP)"],
    links: {
      github: "https://github.com/Krayirhan/BlokDunyasi",
      playStore: "https://github.com/Krayirhan/BlokDunyasi",
    },
    coverImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1920&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
];

// Helper exports
export const GAMES = PRODUCTS.filter((p) => p.type === "game");
export const APPS = PRODUCTS.filter((p) => p.type === "app");
