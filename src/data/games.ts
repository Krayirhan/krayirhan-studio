import { Product } from "@/types/game";

const playStoreImage = (product: string, image: string) =>
  `/play-store/${product}/${image}.webp`;

const screens = (product: string, count: number) =>
  Array.from({ length: count }, (_, index) =>
    playStoreImage(product, `screen-${index + 1}`)
  );

export const PRODUCTS: Product[] = [
  {
    id: "blok-dunyasi",
    slug: "blok-dunyasi",
    type: "game",
    title: "Blok Dünyası: Renkli Zeka",
    tagline: "Renkli blokları yerleştirin, çizgileri temizleyin ve kendi rekorunuzu geçin.",
    category: ["Bulmaca", "Mobil Oyun", "Eğlence"],
    status: "Yayında",
    releaseDate: "Google Play'de yayında",
    shortDescription:
      "Klasik blok bulmaca keyfini canlı renkler, akıcı kontroller ve internetsiz oynanışla buluşturan sakin bir zeka oyunu.",
    fullDescription:
      "Blok Dünyası'nda farklı şekillerdeki blokları ızgaraya yerleştirir, yatay ve dikey çizgileri tamamlayarak puan toplarsınız. Hızlı başlayan ama strateji isteyen akış, her oyunda yeni bir rekor hedefi sunar.\n\nRenkli temaları, komboları ve tamamen çevrimdışı oynanışıyla kısa bir molada da uzun bir yolculukta da yanınızdadır.",
    features: [
      "Akıcı blok bulmacası: Kolay öğrenilen, ustalaşması keyifli yerleştirme mekanikleri.",
      "Kombolar ve yüksek skor: Birden fazla çizgiyi temizleyerek rekorunuzu yükseltin.",
      "Renkli temalar: Canlı bloklar ve sakin bir oyun alanı.",
      "Çevrimdışı oynanış: İnternet bağlantısı olmadan dilediğiniz yerde oynayın.",
    ],
    platforms: ["Google Play", "Android"],
    techStack: ["Mobil Oyun"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.krayirhanstudio.blokdunyasi",
    },
    iconImage: playStoreImage("blok-dunyasi", "icon"),
    coverImage: playStoreImage("blok-dunyasi", "screen-1"),
    bannerImage: playStoreImage("blok-dunyasi", "feature"),
    screenshots: screens("blok-dunyasi", 6),
    featured: true,
  },
  {
    id: "benim-notlarim",
    slug: "benim-notlarim",
    type: "app",
    title: "Benim Notlarım",
    tagline: "Düşüncelerinizi sade, şık ve gizlilik odaklı bir not defterinde toplayın.",
    category: ["Üretkenlik", "Not Defteri", "Mobil"],
    status: "Yayında",
    releaseDate: "Google Play'de yayında",
    shortDescription:
      "Zengin metin düzenleme, düzenli arşivleme ve cihazınızda kalan verilerle sade bir not alma deneyimi.",
    fullDescription:
      "Benim Notlarım; fikirlerinizi, günlük planlarınızı ve alışveriş listelerinizi hızla kaydetmeniz için tasarlandı. Zengin düzenleme araçlarıyla notlarınızı biçimlendirebilir, arama ve arşiv özellikleriyle ihtiyacınız olanı kolayca bulabilirsiniz.\n\nNotlarınız cihazınızda kalır; uygulama çevrimdışı ve gizlilik odaklı çalışır.",
    features: [
      "Zengin yazı düzenleyici: Kontrol listeleri, vurgular ve biçimlendirme araçları.",
      "Kolay arama ve sıralama: İhtiyacınız olan nota hızla ulaşın.",
      "Arşiv ve çöp kutusu: Önemli notları düzenli ve güvenli biçimde saklayın.",
      "Çevrimdışı ve gizli: Verileriniz cihazınızda kalır.",
    ],
    platforms: ["Google Play", "Android"],
    techStack: ["Mobil Uygulama"],
    links: {
      playStore: "https://play.google.com/store/apps/details?id=com.benimnotlarim.app",
    },
    iconImage: playStoreImage("benim-notlarim", "icon"),
    coverImage: playStoreImage("benim-notlarim", "screen-1"),
    bannerImage: playStoreImage("benim-notlarim", "feature"),
    screenshots: screens("benim-notlarim", 3),
    featured: true,
  },
  {
    id: "benim-gunlerim",
    slug: "benim-gunlerim",
    type: "app",
    title: "Benim Günlerim: Günlük Takip",
    tagline: "Küçük adımlarla düzenli günler kurun; görevlerinizi, rutinlerinizi ve ilerlemenizi takip edin.",
    category: ["Planlama", "Alışkanlık", "Kişisel Gelişim"],
    status: "Kapalı Testte",
    releaseDate: "Kapalı testte",
    shortDescription:
      "Rutinlerinizi takip edin, gününüzü planlayın, XP kazanın ve gelişiminizi keyifle izleyin.",
    fullDescription:
      "Benim Günlerim; günlük görevlerinizi düzenlemenizi, sağlıklı rutinler ve kalıcı alışkanlıklar kazanmanızı sağlayan oyunlaştırılmış bir planlama uygulamasıdır. Güne odaklanmanıza ve her gün küçük adımlarla büyümenize yardımcı olur.\n\nGörevler, rutinler, seri takibi, haftalık planlama, akşam değerlendirmesi, XP ve başarımları tek bir sakin akışta birleştirir. Hesap veya internet bağlantısı gerekmeden çalışır; verileriniz cihazınızda kalır.",
    features: [
      "Günlük akış: Tek seferlik görevleri ve rutinleri tek ekranda görün.",
      "Seri takibi: Düzenli alışkanlıklarınızı koruyun ve ilerlemenizi görün.",
      "Oyunlaştırma: XP, seviyeler ve başarımlarla motivasyonunuzu canlı tutun.",
      "Sakin planlama: Haftanızı düzenleyin, günü değerlendirip yarına hazırlanın.",
    ],
    platforms: ["Android"],
    techStack: ["Mobil Uygulama"],
    links: {},
    iconImage: playStoreImage("benim-gunlerim", "icon"),
    coverImage: playStoreImage("benim-gunlerim", "screen-2"),
    bannerImage: playStoreImage("benim-gunlerim", "feature"),
    screenshots: screens("benim-gunlerim", 3),
    featured: true,
  },
  {
    id: "hesap-gunlugu",
    slug: "hesap-gunlugu",
    type: "app",
    title: "Hesap Günlüğü",
    tagline: "Gelir ve giderlerinizi güvenli, şifreli ve çevrimdışı bir bütçede yönetin.",
    category: ["Finans", "Bütçe", "Kişisel Yönetim"],
    status: "Kapalı Testte",
    releaseDate: "Kapalı testte",
    shortDescription:
      "Gelir ve giderlerinizi kolayca yönetin. Güvenli, şifreli ve çevrimdışı bütçe takibi.",
    fullDescription:
      "Hesap Günlüğü; gelir ve giderlerinizi pratik biçimde takip etmenizi sağlayan, gizlilik ve güvenliğe odaklanmış kişisel bütçe uygulamasıdır. Kayıtlarınız yalnızca cihazınızda saklanır ve uygulama çevrimdışı çalışır.\n\nHarcamaları kategorilere ayırabilir, bütçe limitleri belirleyebilir, gelişmiş istatistiklerle alışkanlıklarınızı inceleyebilir ve planlı ödemeleriniz için hatırlatmalar oluşturabilirsiniz.",
    features: [
      "Gelir ve gider takibi: İşlemleri saniyeler içinde kaydedin.",
      "Güvenli kullanım: PIN ve biyometrik kilit ile verilerinizi koruyun.",
      "Bütçe ve istatistikler: Kategori limitleri, grafikler ve trend analizi.",
      "Planlı ödemeler: Fatura, abonelik ve maaş gibi tekrarları takip edin.",
    ],
    platforms: ["Android"],
    techStack: ["Mobil Uygulama"],
    links: {},
    iconImage: playStoreImage("hesap-gunlugu", "icon"),
    coverImage: playStoreImage("hesap-gunlugu", "screen-1"),
    bannerImage: playStoreImage("hesap-gunlugu", "feature"),
    screenshots: screens("hesap-gunlugu", 5),
    featured: true,
  },
  {
    id: "lingorise",
    slug: "lingorise",
    type: "app",
    title: "LingoRise",
    tagline: "İngilizce kelimeleri kısa pratiklerle, XP ve seri motivasyonuyla kalıcı hale getirin.",
    category: ["Eğitim", "Dil Öğrenme", "Mobil"],
    status: "Kapalı Testte",
    releaseDate: "Kapalı testte",
    shortDescription:
      "Practice English vocabulary with fun exercises, streaks, and XP rewards.",
    fullDescription:
      "LingoRise, gerçek İngilizce kelime bilgisini kısa ve odaklı pratik seanslarıyla geliştirmenize yardımcı olur. Seviyenize uyum sağlayan alıştırmalarla eşleştirme yapar, öğrendiğiniz kelimeleri doğru zamanda tekrar edersiniz.\n\nA1'den C2'ye uzanan altı seviyede ilerleyin; XP, günlük seriler ve ilerleme takibiyle düzenli çalışma alışkanlığı kurun. Uygulama misafir olarak çevrimdışı çalışır, hesap açmadan pratik yapabilirsiniz.",
    features: [
      "Odaklı kelime pratiği: Kısa, anlaşılır egzersizlerle düzenli ilerleyin.",
      "Akıllı tekrar: Öğrendiğiniz kelimeleri doğru zamanda yeniden görün.",
      "Altı seviye: A1'den C2'ye uzanan yapılandırılmış öğrenme yolu.",
      "XP ve seriler: Günlük motivasyonunuzu takip edin.",
    ],
    platforms: ["Android"],
    techStack: ["Mobil Uygulama"],
    links: {},
    iconImage: playStoreImage("lingorise", "icon"),
    coverImage: playStoreImage("lingorise", "screen-1"),
    bannerImage: playStoreImage("lingorise", "feature"),
    screenshots: screens("lingorise", 3),
    featured: true,
  },
];

export const GAMES = PRODUCTS.filter((product) => product.type === "game");
export const APPS = PRODUCTS.filter((product) => product.type === "app");
