import { Game } from "@/types/game";

export const GAMES: Game[] = [
  {
    id: "aether-protocol",
    slug: "aether-protocol",
    title: "Aether Protocol",
    tagline: "Hızlı tempolu, siberpunk atmosferinde geçen roguelite aksiyon oyunu.",
    genre: ["Roguelite", "Aksiyon", "Siberpunk", "Hızlı Dövüş"],
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
    engine: "Unity",
    steamUrl: "https://store.steampowered.com",
    epicUrl: "https://store.epicgames.com",
    trailerEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
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
    title: "Chronicles of Elysium",
    tagline: "Zaman bükme mekaniklerine sahip gizem dolu izometrik macera & bulmaca oyunu.",
    genre: ["Macera", "Bulmaca", "Zaman Yolculuğu", "İzometrik"],
    status: "Prototype",
    releaseDate: "2027",
    shortDescription:
      "Kayıp bir medeniyetin kalıntıları arasında zamanı ileri ve geri sararak antik mekanizmaları çözün, unutulmuş gerçekleri gün yüzüne çıkarın.",
    fullDescription:
      "Chronicles of Elysium, zamanın döngüsel yapısını merkezine alan hikaye odaklı bir bulmaca-macera oyunudur. Karakteriniz zaman parçalarını kontrol edebilen kadim bir aygıt keşfeder. Çökmüş sarayları geçmişteki görkemli hallerine döndürün veya çürüyen kalıntıları geleceğe taşıyarak yeni yollar açın.",
    features: [
      "Çift Zaman Çizelgesi Mekaniği: Geçmiş ve gelecek arasında anlık geçişler.",
      "Zengin Hikaye Anlatımı: Çevresel detaylar ve gizli tabletlerle anlatılan derin efsane.",
      "Büyüleyici Sanat Tasarımı: El çizimi dokular ve dinamik aydınlatma.",
    ],
    platforms: ["Steam", "itch.io"],
    engine: "Unity",
    itchUrl: "https://itch.io",
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
    title: "Void Drifter",
    tagline: "Derin uzayda geçen minimalist fizik tabanlı hayatta kalma simülasyonu.",
    genre: ["Simülasyon", "Fizik", "Uzay", "Arcade"],
    status: "Early Access",
    releaseDate: "Yayında",
    shortDescription:
      "Yerçekimsiz ortamda yakıtınızı ve oksijeninizi verimli kullanarak asteroit kuşakları arasında sürüklenin, hurda toplayıp geminizi yükseltin.",
    fullDescription:
      "Void Drifter, saf momentum fiziği ve arcade reflexleri birleştiren ödüllendirici bir uzay hayatta kalma deneyimidir. Her hamleniz itme kuvveti harcar. Kaynakları dikkatli toplayın, çekim kuyularından kaçının ve derin uzayın sessizliğinde en yüksek skoru elde edin.",
    features: [
      "Newton Fiziği Temelli Kontroller: Gerçekçi momentum ve açısal hız hesaplamaları.",
      "Gemiyi Geliştirme Sistemi: İticiler, kalkanlar ve çekici ışın yükseltmeleri.",
      "Global Liderlik Tablosu: Diğer drift ustalarıyla yarışın.",
    ],
    platforms: ["Steam", "Web", "itch.io"],
    engine: "Godot",
    steamUrl: "https://store.steampowered.com",
    coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    bannerImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80",
    ],
    featured: false,
  },
];
