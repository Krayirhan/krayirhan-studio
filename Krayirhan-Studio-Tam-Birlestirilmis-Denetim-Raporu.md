# Krayirhan Studio — Birleştirilmiş Tam Denetim Raporu

**Tarih:** 27 Ağustos 2026  
**Kapsam:** Masaüstü görseli, kaynak kodu, üretim derlemesi, lint, dış bağlantı başlık kontrolleri ve Graphify kod ilişkileri analizi.

## 1. Yönetici özeti

Site görsel olarak güçlü ve çalışır durumda; ancak tam yayın kalitesi, yalnızca ekran görüntüsündeki profesyonel görünümden daha düşüktür. En büyük risk estetik değil, doğruluk ve tamamlanmamış ürün akışlarıdır.

**Birleştirilmiş puanlar:**

| Boyut | Puan | Yorum |
|---|---:|---|
| Görsel kalite | 86/100 | Hero, ürün ekranları ve karanlık palet başarılı |
| UX / dönüşüm | 70/100 | CTA’lar var, fakat ürün durumları ve aksiyonlar eşit derecede net değil |
| Kod kalitesi | 68/100 | Veri modeli ve SSG iyi; tekrar ve bakım yükü var |
| Erişilebilirlik | 47/100 | Modal odak yönetimi ve klavye akışları eksik |
| İçerik güvenilirliği | 43/100 | Kuruluş yılı çelişkisi ve placeholder bağlantılar var |
| Performans | 63/100 | Derleme başarılı; kritik görsellerin bir kısmı optimize edilmemiş |
| SEO / teknik temel | 75/100 | Metadata, sitemap ve robots mevcut |
| Algısal özgünlük | 69/100 | Ürün görselleri özgün; arayüz grameri genel modern web diline yakın |
| Yayına hazır olma | 66/100 | Teknik olarak çalışıyor, içerik ve erişilebilirlik açısından eksik |

## Genel hüküm: **68/100**

Bu skor sitenin kötü olduğunu değil, “görsel olarak yayınlanabilir” ile “güvenilir, erişilebilir ve tam ürün sitesi” arasındaki farkı gösterir.

## 2. Doğrulanmış teknik sonuçlar

| Kontrol | Sonuç | Kanıt |
|---|---|---|
| ESLint | Başarılı | `npm run lint` hatasız tamamlandı |
| Production build | Başarılı | `npm run build` exit code 0 |
| Statik rotalar | Başarılı | `/`, `/about`, `/apps`, `/games`, `/products`, `/press`, `/robots.txt`, `/sitemap.xml` üretildi |
| SSG ürün rotaları | Başarılı | Blok Dünyası, LingoRise ve Benim Notlarım statik üretildi |
| Google Play bağlantıları | HTTP 200 | İki mağaza URL’si başlık isteğinde 200 döndü |
| Graphify AST | 151 düğüm / 251 bağ | Kaynak kodu ilişkileri çıkarıldı |
| Graphify toplam grafik | 192 düğüm / 223 bağ / 24 topluluk | [Graphify raporu](D:/krayirhan-studio/graphify-out/GRAPH_REPORT.md) |
| Graphify sağlık kontrolü | 61 dangling endpoint | Çözümlenmemiş veya dış referanslar; doğrudan runtime hatası kanıtı değil |
| Import cycle | Yok | Graphify analizi |

## 3. Görsel değerlendirme

### Güçlü taraflar

- Hero kompozisyonu sayfanın en güçlü alanı; başlık, turuncu vurgu ve cihaz görselleri iyi dengelenmiş.
- Gerçek ürün ekranlarının kullanılması, siteyi sıradan geliştirici portföylerinden ayırıyor.
- Koyu charcoal zemin, turuncu/yeşil/mor vurgularla tutarlı bir atmosfer oluşturuyor.
- Asimetrik katalog düzeni Blok Dünyası’nı amiral ürün olarak doğru konumlandırıyor.
- Ürün görselleri genel şablon hissini azaltıyor.

### Görsel sorunlar

| Sorun | Şiddet | Öneri |
|---|---|---|
| Hero sonrası dikey boşluk fazla | Orta-Yüksek | Bölümler arası boşluğu yaklaşık %25–35 azalt |
| Pill/badge/chip enflasyonu | Orta-Yüksek | Yaklaşık üçte birini düz metin veya listeye çevir |
| Koyu gri mikro metinler küçük | Orta-Yüksek | Boyutu yaklaşık +1 px, kontrastı %10–15 artır |
| Telefon mockup grameri tekrarlı | Orta | Her ürüne farklı sunum davranışı ver |
| Büyük Blok Dünyası kartında boşluk | Orta | Kartı kısalt veya gerçek metrik/sürüm/özellik ekle |
| Dekoratif küpler her yerde kullanılıyor | Orta | Sadece marka anlamı taşıyan bölümlerde tut |
| Studio imzası zayıf | Yüksek | Özgün grid davranışı, bölüm numarası veya imza bileşeni oluştur |

## 4. Kod ve içerik bulguları

| Öncelik | Bulgu | Kanıt | Etki |
|---|---|---|---|
| P1 | Kuruluş yılı çelişkili | [studioInfo.ts](D:/krayirhan-studio/src/data/studioInfo.ts:8) `2026`; [pressKit.ts](D:/krayirhan-studio/src/data/pressKit.ts:6) `2024` | Marka ve basın güveni zedelenir |
| P1 | Basın kiti eksik | [pressKit.ts](D:/krayirhan-studio/src/data/pressKit.ts:13) içindeki bazı `downloadUrl` değerleri `#` | Kullanıcı bozuk indirme alır |
| P1 | Basın verisi kullanılmıyor | `PRESS_ASSETS` ve `PRESS_FACTS` kaynakta tanımlı ama kullanılmıyor | Sayfa vaat ettiği medya kitini sunmuyor |
| P1 | LingoRise CTA eksik | [games.ts](D:/krayirhan-studio/src/data/games.ts:51), [games.ts](D:/krayirhan-studio/src/data/games.ts:69) | “Beta Yayında” gerçek aksiyona bağlanmıyor |
| P1 | Modal odak yönetimi eksik | [QrDownloadModal.tsx](D:/krayirhan-studio/src/components/ui/QrDownloadModal.tsx:50), [ProductGallery.tsx](D:/krayirhan-studio/src/components/products/ProductGallery.tsx:110) | Ekran okuyucu ve klavye deneyimi kırılabilir |
| P1 | Galeri kartı klavye erişimsiz | `onClick` kullanan semantik olmayan `div` | Enter/Space ile açılamaz |
| P2 | Genel sosyal URL’ler | [studioInfo.ts](D:/krayirhan-studio/src/data/studioInfo.ts:16)–[19] | Gerçek profil yerine alan adı açılıyor |
| P2 | Optimize edilmemiş görseller | [HeroSection.tsx](D:/krayirhan-studio/src/components/home/HeroSection.tsx:80), [GameCard.tsx](D:/krayirhan-studio/src/components/games/GameCard.tsx:32) | WebP/uygun boyut/lazy loading avantajı kaçıyor |
| P2 | Analitik rıza akışı görünür değil | [AnalyticsTracker.tsx](D:/krayirhan-studio/src/components/analytics/AnalyticsTracker.tsx:33) | Gizlilik ve KVKK/GDPR incelemesi gerekir |
| P3 | Sitemap tarihleri her build’de değişiyor | [sitemap.ts](D:/krayirhan-studio/src/app/sitemap.ts:12) | Gereksiz güncelleme sinyali oluşturabilir |
| P3 | Scaffold kalıntıları var | `public/next.svg`, `vercel.svg`, `window.svg`, vb. | Proje hijyeni ve marka bütünlüğü düşer |

## 5. AI-yardımı ve özgünlük değerlendirmesi

Bu bölüm üretim yöntemini kanıtlamaz; yalnızca algısal işaretleri değerlendirir.

| Alan | Olasılık / puan | Açıklama |
|---|---:|---|
| AI-yardımlı kod izlenimi | 60/100 | Uzun Tailwind blokları, tekrar eden açıklama yorumları, kullanılmayan kalıntılar ve dil karışımı bu ihtimali artırıyor |
| AI-yardımlı görsel estetik | 45/100 | Modern dark-template dili var; ürün ekranları ve ürün özgüllüğü bu riski azaltıyor |
| AI-yardımlı copy izlenimi | 65/100 | “sade”, “modern”, “keyifli”, “samimi” gibi genel sıfatlar tekrarlanıyor |
| Algısal özgünlük | 69/100 | Blok/meyve/kumaş dili özgün çekirdek sağlıyor; kart/pill sistemi yaygın |

**Sonuç:** Site “ucuz AI landing page” gibi görünmüyor. Daha doğru tanım, insan tarafından yönlendirilmiş ve muhtemelen AI/template araçlarından yardım almış yüksek kaliteli modern bir stüdyo sitesi.

Bu çalışma intihal, telif veya gerçek AI kullanımını doğrulamaz.

## 6. Önceliklendirilmiş yol haritası

### P0 — Yayın öncesi zorunlu işler

1. Kuruluş yılını tek ve doğrulanmış değer yap.
2. `#` basın indirmelerini gerçek dosyalarla değiştir veya kartları gizle.
3. LingoRise beta CTA’sı, bekleme listesi veya gerçek mağaza bağlantısı ekle.
4. QR modalı ve galeri için Escape, focus trap, focus restore ve klavye akışını uygula.
5. Gerçek sosyal profil URL’lerini kullan.

### P1 — Kalite ve dönüşüm

1. `PRESS_FACTS` / `PRESS_ASSETS` verisini sayfaya bağla.
2. Hero sonrası boşluğu azalt.
3. Pill/badge sayısını azalt; primary/secondary/text CTA kuralını standardize et.
4. Her ürünün görsel anlatımını ayrıştır.
5. Gerçek ürün metrikleri varsa ekle; yoksa uydurma veri ekleme.
6. Gizlilik sayfası ve analitik açıklaması yayınla.

### P2 — Performans ve marka

1. Kritik düz `<img>` etiketlerini `next/image` ile değiştir.
2. Kullanılmayan SVG ve yinelenen logo varlıklarını temizle.
3. Sitemap için sabit içerik güncelleme tarihleri kullan.
4. Krayirhan’a özgü bir imza bileşeni oluştur.
5. Küçük gri metinleri büyüt ve kontrastı doğrula.

## 7. Son kabul kriterleri

| Kontrol | Hedef |
|---|---|
| `npm run lint` | Hatasız |
| `npm run build` | Hatasız |
| Klavye testi | Header, CTA, QR, galeri ve footer eksiksiz kullanılabilir |
| Mobil test | 360, 390, 768 ve 1440 px |
| Lighthouse | Performance ≥85, Accessibility ≥90, SEO ≥90 |
| Link testi | Dış bağlantı ve indirmelerin tamamı gerçek hedefe gider |
| İçerik testi | Kuruluş yılı, ürün durumu, e-posta ve gizlilik iddiaları tutarlı |

## Nihai karar

Siteyi şu anda yayınlamak teknik olarak mümkün; fakat ilk sprint tamamlanmadan “tamamlanmış premium stüdyo sitesi” demek erken olur. En yüksek getirili sıra:

**Doğruluğu düzelt → eksik akışları tamamla → erişilebilirliği düzelt → görsel sistemi sadeleştir → özgün marka imzası ekle → ölç ve yayınla.**
