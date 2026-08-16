# Cap Laut Biru — Website

Website HTML/CSS/JS untuk brand kerupuk **Cap Laut Biru**, dengan seluruh konten (produk, FAQ, testimoni, link sosmed) tersimpan di **database Supabase** — bisa diedit tanpa membuka kode sama sekali.

## Struktur

```
index.html                Beranda
produk.html                Katalog produk
produk-detail.html         Detail produk (dinamis, ?id=slug-produk)
tentang.html                Tentang Kami
reseller.html              Reseller / kemitraan
faq.html                   FAQ
kontak.html                 Kontak
css/style.css               Semua styling & design system
js/supabase-client.js        Koneksi ke database Supabase
js/data-loader.js            Mengambil semua data dari Supabase saat halaman dibuka
js/main.js                  Logika interaktif (navbar, FAQ, render produk, dll)
assets/                      Logo & elemen visual (SVG)
robots.txt, sitemap.xml      File SEO teknis
```

## 🖼️ Cara Mengganti Logo dengan Logo Asli Anda

Logo saat ini adalah placeholder (desain stempel bikinan saya). Untuk menggantinya dengan logo asli Cap Laut Biru:

1. Siapkan logo Anda dalam **2 versi**:
   - **Versi gelap** (biru tua) — untuk dipasang di atas latar terang (navbar, section terang)
   - **Versi terang** (putih/krem) — untuk dipasang di atas latar biru gelap (placeholder foto hero)
   
   Kalau logo Anda cuma satu warna, cukup siapkan 1 file saja dan pakai untuk kedua slot — tidak masalah.

2. Simpan logo dalam format **SVG** (paling tajam di semua ukuran) atau **PNG dengan latar transparan**. Disarankan bentuk **persegi** (1:1) agar tidak gepeng.

3. Ganti file di folder `assets/`:
   - Timpa `assets/logo-dark.svg` dengan logo versi gelap Anda
   - Timpa `assets/logo-light.svg` dengan logo versi terang Anda
   - **Nama file harus tetap sama** (`logo-dark.svg` / `logo-light.svg`) — kalau file Anda berformat PNG, ganti juga nama file di dalam HTML (cari `logo-dark.svg` di semua file `.html`, ganti jadi `logo-dark.png`, begitu juga untuk `logo-light`)

4. Simpan, lalu refresh browser — logo baru langsung tampil di navbar, section "Dari Pesisir Pasuruan", dan placeholder foto produk.

Tidak perlu sentuh `js/main.js` sama sekali — logo sekarang berupa file gambar biasa, bukan kode.

## ⭐ Cara Mengubah Konten (Tanpa Coding)

Semua data sekarang ada di **database Supabase**, bukan lagi di file kode. Untuk mengubahnya:

1. Buka **supabase.com/dashboard** → login → pilih project **cap-laut-biru**
2. Klik menu **Table Editor** di sidebar kiri
3. Pilih tabel yang ingin diubah, lalu edit langsung seperti spreadsheet:

| Tabel | Isinya |
|---|---|
| `products` | Nama, harga, berat, deskripsi, stok tiap produk. Tambah baris baru untuk menambah produk/varian |
| `faq` | Pertanyaan & jawaban |
| `testimonials` | Testimoni pelanggan (ganti placeholder `[Nama pelanggan]`) |
| `why_us` | Section "Kenapa Cap Laut Biru?" |
| `how_to_order` | Langkah-langkah "Cara Pesan" |
| `reseller_points` | Info kemitraan/reseller |
| `site_config` | Link Instagram/TikTok/Facebook/Shopee, nomor WhatsApp, alamat, jam buka |

Setelah disimpan di Supabase, cukup **refresh website** — perubahan langsung tampil, tanpa proses build apa pun.

⚠️ Semua nilai `[DATA BELUM DIISI]` sengaja dikosongkan agar tidak ada klaim yang belum benar. Lengkapi sebelum website tayang ke publik.

### Koneksi database

- **Project**: `cap-laut-biru` (organisasi `lautbiru2487` di Supabase, paket Free)
- **Project URL**: `https://zbbuxxckqhpfpefgjzus.supabase.co`
- Kunci yang dipakai di kode (`js/supabase-client.js`) adalah kunci **publishable/anon** — aman ditaruh di frontend karena akses data dibatasi Row Level Security (RLS): publik hanya bisa **membaca**, tidak bisa mengubah data lewat website.
- Untuk mengubah data, selalu lewat **dashboard Supabase** (Table Editor), bukan lewat website.

## Deployment (Disarankan: Vercel atau Netlify — gratis)

1. Push seluruh folder ini ke repository GitHub
2. Hubungkan repo tersebut ke **Vercel** (vercel.com) atau **Netlify** (netlify.com) — tidak perlu setting build command khusus, ini website statis murni
3. Sambungkan domain custom yang sudah dibeli (lihat panduan domain dari saya di chat)
4. Setelah live, submit `sitemap.xml` ke Google Search Console

## Yang Masih Perlu Dilengkapi Pemilik Brand

Semua lewat dashboard Supabase (Table Editor), bukan lewat kode:
- Foto asli produk (upload ke Supabase Storage atau hosting gambar, lalu isi kolom `gambar_url` di tabel `products`)
- Harga, berat, dan info stok tiap produk
- Nomor WhatsApp aktif (`WHATSAPP_NUMBER` di tabel `site_config`)
- Link Instagram, TikTok, Facebook, Shopee, dan Google Maps (tabel `site_config`)
- Testimoni pelanggan asli (tabel `testimonials`)
- Data reseller: harga grosir, minimal order, area distribusi (tabel `reseller_points`)
- Alamat & jam operasional, jika ingin dipublikasikan (tabel `site_config`)

## Audit yang Sudah Dilakukan

- ✅ Responsive: desktop, tablet, mobile (mobile-first, sticky bottom CTA bar)
- ✅ Aksesibilitas dasar: fokus keyboard terlihat, `prefers-reduced-motion` dihormati, alt/aria-label pada elemen penting
- ✅ SEO: title & meta description per halaman, Open Graph, Twitter Card, `Organization` schema, `sitemap.xml`, `robots.txt`, canonical URL
- ✅ Keamanan: Row Level Security aktif di semua tabel (publik hanya bisa membaca), tidak ada credential rahasia di frontend, seluruh link eksternal memakai `rel="noopener"` — dicek lewat Supabase security advisor, tidak ada temuan
- ✅ Performa: dependency eksternal minim (Google Fonts + Supabase JS client), IntersectionObserver native untuk animasi

## Rencana Pengembangan Lanjutan

- Admin panel sederhana bisa dibuatkan agar pemilik tidak perlu masuk ke dashboard Supabase langsung
- Foto produk bisa dipindah ke Supabase Storage agar terkelola dalam satu tempat
- Jika traffic bertambah besar, paket Supabase bisa di-upgrade dari Free ke Pro sesuai kebutuhan
