import { Product } from "@/types/game";

export const PRODUCTS: Product[] = [
  // --- OYUNLAR (GAMES) ---
  {
    id: "aether-protocol",
    slug: "aether-protocol",
    type: "game",
    title: "Aether Protocol",
    tagline: "Hızlı tempolu, siberpunk atmosferinde geçen roguelite aksiyon oyunu.",
    category: ["Roguelite", "Aksiyon", "Siberpunk", "PC"],
    status: "In Development",
    releaseDate: "Q4 2026",
    shortDescription:
      "Aether Protocol, distopik bir siber mega-şehirde yapay zeka kontrolündeki güçlere karşı savaştığınız dinamik yetenek kombinasyonları sunan bir roguelite aksiyon oyunudur.",
    fullDescription:
      "Aether Protocol sizi karanlık bir neon geleceğine davet ediyor. Her turda rastgele oluşturulan tesislerde ilerleyin, sibernetik geliştirmeleri birleştirin ve kendi eşsiz savaş stilinizi yaratın. Yüksek tempolu akıcı yakın dövüş, hassas kaçınma mekanikleri ve derin hikaye evreni ile meydan okumaya hazır olun.",
    features: [
      "Dinamik ve Akıcı Dövüş: Kombinasyonlar, kılıç ustalığı ve kinetik yetenekler.",
      "Sonsuz Tekrar Oynanabilirlik: Yüzlerce sibernetik eklenti ve rastgele oda tasarımları.",
      "Atmosferik Synthwave Müzikler: Nabız yükselten orijinal müzik albümü.",
      "Prosedürel Bölüm Yapısı: Her kaçış denemesinde değişen düşman kompozisyonları.",
    ],
    platforms: ["Steam", "Epic Games"],
    techStack: ["Unity (C#)", "Shader Graph", "FMOD Audio"],
    links: {
      steam: "https://store.steampowered.com",
      epic: "https://store.epicgames.com",
    },
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1920&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        processor: "Intel Core i5-6600K / AMD Ryzen 5 1600",
        memory: "8 GB RAM",
        graphics: "NVIDIA GeForce GTX 1060 6GB / AMD Radeon RX 580",
        storage: "15 GB kullanılabilir alan",
      },
      recommended: {
        os: "Windows 11 64-bit",
        processor: "Intel Core i7-10700K / AMD Ryzen 7 3700X",
        memory: "16 GB RAM",
        graphics: "NVIDIA GeForce RTX 3060 / AMD Radeon RX 6700 XT",
        storage: "15 GB SSD kullanılabilir alan",
      },
    },
  },
  {
    id: "chronicles-of-elysium",
    slug: "chronicles-of-elysium",
    type: "game",
    title: "Chronicles of Elysium",
    tagline: "Zaman bükme mekaniklerine sahip gizem dolu izometrik macera & bulmaca oyunu.",
    category: ["Macera", "Bulmaca", "Zaman Yolculuğu", "PC"],
    status: "Prototype",
    releaseDate: "2027",
    shortDescription:
      "Kayıp bir medeniyetin kalıntıları arasında zamanı ileri ve geri sararak antik mekanizmaları çözün, unutulmuş gerçekleri gün yüzüne çıkarın.",
    fullDescription:
      "Chronicles of Elysium, zamanın döngüsel yapısını merkezine alan hikaye odaklı bir bulmaca-macera oyunudur. Karakteriniz zaman parçalarını kontrol edebilen kadim bir aygıt keşfeder.",
    features: [
      "Çift Zaman Çizelgesi Mekaniği: Geçmiş ve gelecek arasında anlık geçişler.",
      "Zengin Hikaye Anlatımı: Çevresel detaylar ve gizli tabletler.",
      "Büyüleyici Sanat Tasarımı: El çizimi dokular ve dinamik aydınlatma.",
    ],
    platforms: ["Steam", "itch.io"],
    techStack: ["Unity (C#)", "Blender", "URP"],
    links: {
      itch: "https://itch.io",
    },
    coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "void-drifter",
    slug: "void-drifter",
    type: "game",
    title: "Void Drifter",
    tagline: "Derin uzayda geçen minimalist fizik tabanlı hayatta kalma simülasyonu.",
    category: ["Simülasyon", "Fizik", "Uzay", "Arcade"],
    status: "Early Access",
    releaseDate: "Yayında",
    shortDescription:
      "Yerçekimsiz ortamda yakıtınızı ve oksijeninizi verimli kullanarak asteroit kuşakları arasında sürüklenin, geminizi yükseltin.",
    fullDescription:
      "Void Drifter, saf momentum fiziği ve arcade reflexleri birleştiren ödüllendirici bir uzay hayatta kalma deneyimidir.",
    features: [
      "Newton Fiziği Temelli Kontroller: Gerçekçi momentum hesaplamaları.",
      "Gemi Yükseltme Sistemi: İticiler ve kalkanlar.",
      "Global Liderlik Tablosu: Skor yarışı.",
    ],
    platforms: ["Steam", "Web App"],
    techStack: ["Godot Engine", "GDScript", "WebAssembly"],
    links: {
      steam: "https://store.steampowered.com",
    },
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },

  // --- UYGULAMALAR (APPS & DIGITAL PRODUCTS) ---
  {
    id: "nexus-focus-ai",
    slug: "nexus-focus-ai",
    type: "app",
    title: "Nexus Focus & Flow AI",
    tagline: "Yapay zeka destekli akıllı odaklanma, zaman yönetimi ve üretkenlik asistanı.",
    category: ["Üretkenlik", "Yapay Zeka", "Mobil & Web", "Task Management"],
    status: "Released",
    releaseDate: "Yayında",
    shortDescription:
      "Bilişsel yükü azaltan, derin çalışma (deep work) seanslarını otomatik optimize eden ve yapay zeka ile günlük hedeflerinizi önceliklendiren akıllı üretkenlik uygulaması.",
    fullDescription:
      "Nexus Focus, modern dijital dikkat dağınıklığını ortadan kaldırmak için tasarlandı. Akıllı Pomodoro zamanlayıcıları, biyolojik ritim analizleri ve yapay zeka destekli görev önceliklendirmesi ile iş ve yaratıcılık akışınızı maksimuma çıkarın. Tüm cihazlarınız arasında anlık eşitleme sağlar.",
    features: [
      "AI Akıllı Önceliklendirme: Görevlerinizi aciliyet ve enerji seviyenize göre otomatik sıraya dizer.",
      "Kişiselleştirilmiş Binaural Ses Motoru: Odaklanmayı artıran frekans tabanlı arkaplan müzikleri.",
      "Çapraz Platform Senkronizasyonu: iOS, Android ve Web arasında kesintisiz veri aktarımı.",
      "Ayrıntılı Analitikler: Günlük odaklanma süreleri, dikkat dağıtıcı raporları ve başarı grafikleri.",
    ],
    platforms: ["App Store", "Google Play", "Web App"],
    techStack: ["React Native", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    links: {
      appStore: "https://apple.com/app-store",
      playStore: "https://play.google.com",
      webApp: "https://studio.krayirhan.com",
    },
    coverImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1920&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: true,
  },
  {
    id: "soundwave-studio",
    slug: "soundwave-studio",
    type: "app",
    title: "SoundWave Synth & FX",
    tagline: "Oyun geliştiricileri ve ses tasarımcıları için WebGL tabanlı ses sentezleme ve efekt aracı.",
    category: ["Ses Tasarımı", "Yaratıcı Araçlar", "Web App", "Game Dev Tool"],
    status: "Beta",
    releaseDate: "Beta Yayında",
    shortDescription:
      "Tarayıcı üzerinden 8-bit, retro ve atmosferik oyun ses efektleri (SFX) üretmenizi, düzenlemenizi ve tek tıkla WAV/OGG formatında dışa aktarmanızı sağlayan profesyonel ses stüdyosu.",
    fullDescription:
      "SoundWave Studio, bağımsız oyun geliştiricilerinin sıfırdan yüksek kaliteli ses efektleri üretmesini hızlandırır. Web Audio API gücüyle gerçek zamanlı osilatörler, filtreler, yankı ve distorsiyon modülleri sunar.",
    features: [
      "Tarayıcı Tabanlı Gerçek Zamanlı DSP: Hiçbir şey indirmeden anında ses üretimi.",
      "Oyunlar İçin Hazır Presetler: Lazerler, patlamalar, arayüz sesleri ve ortam ambiyansları.",
      "Doğrudan Dışa Aktarma: 24-bit 48kHz WAV, OGG ve Unity ses paketi desteği.",
    ],
    platforms: ["Web App", "macOS", "Windows"],
    techStack: ["Web Audio API", "TypeScript", "Next.js", "Canvas 2D"],
    links: {
      webApp: "https://studio.krayirhan.com",
    },
    coverImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1920&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
  {
    id: "devpulse-monitor",
    slug: "devpulse-monitor",
    type: "app",
    title: "DevPulse Realtime Telemetry",
    tagline: "Mobil uygulamalar ve oyunlar için hafif, anlık hata ve performans izleme paneli.",
    category: ["Geliştirici Araçları", "Analitik & Telemetri", "SaaS"],
    status: "In Development",
    releaseDate: "Q3 2026",
    shortDescription:
      "Oyun sunucularınızın durumunu, FPS düşüşlerini ve aktif oyuncu istatistiklerini mobil cihazınızdan canlı takip edin.",
    fullDescription:
      "DevPulse, bağımsız stüdyolar için tasarlanmış minimalist bir telemetri çözümüdür. Sıfır konfigürasyon SDK'sı ile oyunlarınıza ve uygulamalarınıza dakikalar içinde entegre olur.",
    features: [
      "Anlık FPS ve Bellek Analizi: Kullanıcı cihazlarındaki performans darboğazlarını görün.",
      "Canlı Oyuncu/Kullanıcı Haritası: Aktif oturumları dünya haritası üzerinde izleyin.",
      "Anlık Çökme Bildirimleri: Kritik hatalarda Discord ve Telegram uyarıları.",
    ],
    platforms: ["iOS", "Android", "Web App"] as any,
    techStack: ["Flutter", "Go", "WebSocket", "ClickHouse"],
    links: {
      webApp: "https://studio.krayirhan.com",
    },
    coverImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
];

// Helper exports for easy filtering
export const GAMES = PRODUCTS.filter((p) => p.type === "game");
export const APPS = PRODUCTS.filter((p) => p.type === "app");
