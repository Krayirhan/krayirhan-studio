<div align="center">

# 🎮 Krayirhan Studio Website

### Bağımsız Oyun Geliştirme Stüdyosu Resmi Web Sitesi & Oyun Vitrini
**Domain:** [`studio.krayirhan.com`](https://studio.krayirhan.com) · **Ana Şirket/Portfolyo:** [`krayirhan.com`](https://krayirhan.com)

*Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS · Vercel + Cloudflare DNS*

</div>

---

## 🧭 1. Mimari Mantık ve Neden Ayrı Proje?

Bu proje, **`krayirhan.com`** ana domaini altında bağımsız bir subdomain olarak çalışan **`studio.krayirhan.com`** web sitesidir.

### Neden Ayrı Bir Repo & Proje Olarak Kuruldu?
1. **Kurumsal & Marka Ayrımı:**
   - `krayirhan.com` $\rightarrow$ Kişisel CV, yazılım mühendisliği kariyeri ve bireysel portfolyo.
   - `studio.krayirhan.com` $\rightarrow$ Steam oyunları, basın bültenleri (Press Kit), yayıncı (Publisher) iletişimleri ve oyun fragmanları için bağımsız kurumsal oyun stüdyosu kimliği.
2. **Performans ve Bağımsızlık:**
   - Oyun sayfalarındaki ağır medya (4K fragmanlar, ekran galerileri, Steam widget'ları, gelecekteki WebGL/Three.js 3D demolar) kişisel CV sitenin hızını ve paket boyutlarını asla etkilemez.
3. **Ekip ve İzinler:**
   - İleride stüdyo için bir grafiker, 3D modelci veya pazarlamacı ekibe katıldığında sadece bu repoya erişim verilebilir.

---

## 🌐 2. DNS & Subdomain Yapılandırması (`studio.krayirhan.com`)

Yeni bir domain satın almaya gerek yoktur; mevcut `krayirhan.com` domainine subdomain olarak bağlanır.

```text
DNS Kayıtları (Cloudflare / Namecheap / vb.):

Tür (Type)   | Ad (Name) | Değer (Value)          | Hedef
------------ | --------- | ---------------------- | ---------------------------
A / CNAME    | @         | 76.76.21.21            | krayirhan.com (CV Sitesi)
CNAME        | studio    | cname.vercel-dns.com   | studio.krayirhan.com (Bu Proje)
```

### Vercel'e Bağlama Adımları:
1. Bu projeyi GitHub'da `krayirhan-studio` adıyla bir repoya yükleyin.
2. [Vercel](https://vercel.com) panelinde **Add New... $\rightarrow$ Project** diyerek repoyu içeri aktarın.
3. Proje ayarlarında: **Settings $\rightarrow$ Domains $\rightarrow$ Add Domain** alanına `studio.krayirhan.com` yazın.
4. Domain DNS yöneticinizde (Cloudflare vb.) yukarıdaki CNAME kaydını ekleyin.

---

## 📂 3. Klasör ve Dosya Mimarisi

```text
krayirhan-studio/
├── public/                     # Statik Varlıklar
│   ├── games/                  # Oyun kapakları ve ekran görüntüleri
│   └── brand/                  # Logo ve ikonlar
│
├── src/
│   ├── app/                    # Next.js App Router Rotaları
│   │   ├── layout.tsx          # Dark gaming ana şablon, SEO ve Navbar/Footer
│   │   ├── page.tsx            # Ana Sayfa (Spotlight oyun, vitrin, felsefe)
│   │   ├── games/
│   │   │   ├── page.tsx        # Oyun Kataloğu Listesi
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Tekil Oyun Sayfası (Galeri, Sistem Gereksinimi, Steam)
│   │   ├── press/
│   │   │   └── page.tsx        # Press Kit & Medya Varlıkları Sayfası
│   │   ├── about/
│   │   │   └── page.tsx        # Stüdyo Hikayesi & Kurucu Portfolyo Bağlantısı
│   │   └── contact/
│   │       └── page.tsx        # Yayıncı, Basın & İletişim Formu
│   │
│   ├── components/             # Modüler Arayüz Bileşenleri
│   │   ├── layout/             # Navbar (Portfolyo linkiyle) ve Footer
│   │   ├── home/               # HeroSection, Spotlight
│   │   └── games/              # GameCard, Rozetler
│   │
│   ├── data/                   # ⭐️ Veri Yönetim Merkezi (Data-Driven)
│   │   ├── games.ts            # Tüm oyunların içerikleri, görselleri, Steam linkleri
│   │   ├── studioInfo.ts       # Stüdyo vizyonu, sosyal medya ve kurucu bilgisi
│   │   └── pressKit.ts         # Basın bülteni indirilebilir arşivleri
│   │
│   └── types/                  # TypeScript Tip Tanımları
│       └── game.ts             # Game, Platform, Status, SystemRequirements arayüzleri
│
└── package.json
```

---

## 🕹️ 4. Yeni Bir Oyun Nasıl Eklenir?

Yeni bir oyun projeniz olduğunda kod yazmanıza gerek yoktur. Sadece [`src/data/games.ts`](src/data/games.ts) dosyasına yeni bir obje eklemeniz yeterlidir:

```typescript
{
  id: "yeni-oyun-id",
  slug: "yeni-oyun-adi",
  title: "Yeni Oyun Adı",
  tagline: "Oyunun tek cümlelik vurucu açıklaması",
  genre: ["Aksiyon", "Macera"],
  status: "In Development", // "Released" | "Early Access" | "In Development" | "Prototype"
  releaseDate: "2027",
  shortDescription: "Kısa tanıtım...",
  fullDescription: "Detaylı hikaye ve mekanik açıklaması...",
  features: ["Özellik 1", "Özellik 2"],
  platforms: ["Steam", "Epic Games"],
  engine: "Unity",
  steamUrl: "https://store.steampowered.com/app/...",
  coverImage: "https://...",
  bannerImage: "https://...",
  screenshots: ["https://...", "https://..."],
  featured: true, // Ana sayfada öne çıkarılsın mı?
}
```

Kaydettiğiniz anda:
- Ana sayfada ve `/games` sayfasında kartı otomatik görünür.
- `/games/yeni-oyun-adi` dinamik sayfası otomatik oluşur.

---

## 🚀 5. Geliştirme ve Çalıştırma

```bash
# Bağımlılıkları yükleyin (varsa)
npm install

# Geliştirici sunucusunu başlatın
npm run dev

# Üretim derlemesi oluşturun
npm run build
```

Sunucu varsayılan olarak `http://localhost:3000` portunda açılır.
