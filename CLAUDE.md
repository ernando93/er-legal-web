# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Website LawOn.id, platform layanan hukum yang dikelola PT Solusi Aksara Hukum (bukan kantor hukum). Situs statis Astro, tanpa framework UI dan tanpa backend. Semua teks untuk pengunjung dan komentar kode berbahasa Indonesia, jadi pertahankan itu.

## Perintah

```
npm run dev      # http://localhost:4321 (tambah `-- --host` agar bisa dibuka dari HP di jaringan yang sama)
npm run build    # hasil di dist/
BASE_PATH=/er-legal-web npm run build   # build seperti di GitHub Pages
```

- Tidak ada test, linter, atau formatter. Cara memverifikasi perubahan: `npm run build` harus lolos tanpa error.
- Dev server berjalan sebagai daemon. Untuk berhenti: `npx astro dev stop`. Untuk melihat log: `npx astro dev logs`.
- Setelah skema koleksi di `src/content.config.ts` diubah, dev server bisa error 500 karena cache lama. Hentikan dev server, hapus `.astro/data-store.json` dan `node_modules/.astro/data-store.json`, lalu jalankan lagi.

## Deploy dan base path

- Setiap push ke `main` di-deploy otomatis ke GitHub Pages (https://ernando93.github.io/er-legal-web/) lewat `.github/workflows/deploy.yml`.
- Workflow itu juga build ulang setiap hari pukul 00.05 WIB, supaya acara yang sudah lewat pindah ke "Sudah berlangsung".
- Situs dilayani di bawah `/er-legal-web`. Link internal ditulis absolut biasa (`href="/agenda"`, `src="/uploads/..."`). Integrasi `prefixLinks` di `astro.config.mjs` menambahkan base path ke semua HTML setelah build, hanya jika `BASE_PATH` diisi. Karena itu jangan menulis `import.meta.env.BASE_URL` secara manual.
- Saat pindah ke domain sendiri, ganti `SITE_URL` dan hapus `BASE_PATH` di workflow. Kalau repo dijadikan private, pindah ke Cloudflare Pages, karena GitHub Pages gratis butuh repo publik.
- Jangan push tanpa persetujuan pemilik proyek. Perubahan dicek dulu di lokal.

## Arsitektur

**Data statis di `src/data/`:**

- `site.ts`: nama, kontak, WhatsApp, dan `nav`.
- `layanan.ts`: tiga layanan. Dipakai untuk halaman `/layanan/[slug]`.
- `tim.ts`: anggota tim. Dipakai untuk `/tim/[slug]`.

**Koleksi konten di `src/content/`**, didefinisikan di `src/content.config.ts`:

- `artikel` (Publikasi) dan `acara` (Agenda), berupa Markdown dengan frontmatter.
- Skema `acara` sengaja longgar dengan `z.preprocess` karena isinya datang dari CMS. String kosong menjadi `undefined`, `biaya` kosong menjadi "Gratis", link tanpa `https://` dilengkapi, dan `foto` bisa berupa satu string atau array.

**Panel admin:** Pages CMS (app.pagescms.org) membaca `.pages.yml`.

- Admin mengedit `src/content/acara` dan `src/content/artikel`.
- Gambar unggahan masuk ke `public/uploads/` dan ditulis di frontmatter sebagai `/uploads/...`.
- Kalau field di skema diubah, `.pages.yml` juga harus diubah agar tetap sejalan.

**Logika agenda ada di `src/data/acara.ts`:**

- Waktu ditulis sebagai string WIB, misalnya `"09.00"`, lalu diubah ke Date UTC (jam dikurangi 7).
- Waktu diformat dengan `timeZone: 'UTC'`.
- Kalau `selesai` kosong, acara dianggap selesai pukul 23.59.
- `semuaAcara()` memisahkan acara menjadi `akan` dan `lewat` berdasarkan waktu build.
- Karena pembagian itu terjadi saat build, `agenda/index.astro` dan `agenda/[slug].astro` punya skrip klien yang memindahkan acara lewat atau menyembunyikan tombol Daftar jika acara selesai setelah build terakhir.
- Slider detail (`Galeri.astro`) berisi poster (jika `tampilkan_poster`) diikuti `foto`. Rasio bingkainya dibaca dari gambar pertama dengan `sharp` saat build.

**Menu dan bagian yang kosong:**

- `src/data/menu.ts` menyembunyikan menu Agenda, Publikasi, atau Tim selama isinya kosong.
- Header dan Footer memakai `menu()`, bukan `nav` langsung.
- Di beranda, bagian tim, agenda, dan artikel juga hanya tampil jika ada isinya.

**Tampilan:**

- Satu stylesheet, `src/styles/global.css`. Token warna dan font ada di bagian atas.
- Tidak ada CSS per komponen.
- Ikon diambil dari `src/icons/*.svg` lewat `<Icon name="..." />`. Nama yang tidak ada membuat build gagal.
- Elemen dengan `data-reveal` dianimasikan oleh skrip di `layouts/Base.astro`.

## Rancangan dan progres

Catatan bisnis (harga, kesepakatan, komunikasi klien) ada di `CLAUDE.local.md`. File itu tidak masuk git, karena repo ini publik.

### Yang sudah dikerjakan

1. **11 Nov 2026, demo awal** (5e8ea12). Awalnya bernama "ER Legal". Ada dua versi desain, dan klien memilih versi utama.
2. **11 Nov 2026, rebrand ke LawOn.id** (f80bec6).
   - Logo SVG digambar ulang (`public/logo-lawon*.svg`).
   - Palet warna diganti navy dan emas.
   - Isi diambil dari Company Profile LawOn.id: tiga layanan (Edukasi, Konsultasi, Informasi Hukum), visi, misi, dan tiga sasaran (masyarakat, profesional, pelaku usaha).
   - Situs referensi dari klien: hhp.co.id/en. Klien ingin hasilnya tidak terlihat buatan AI.
3. **15 Nov 2026, polish** (5d8a9cd): tombol WhatsApp melayang, alur konsultasi, menu HP, peta, dan tombol bagikan artikel.
4. **16 Nov 2026, Agenda dan panel admin** (a8e8f34).
   - Halaman `/agenda` dengan daftar poster dan detail acara. Detail berisi slider otomatis, tombol Daftar (link pendaftaran, atau WhatsApp jika kosong), dan tombol Simpan ke Google Calendar.
   - Config `.pages.yml` untuk Pages CMS.
   - Menu Agenda, Publikasi, dan Tim sembunyi selama isinya kosong.
   - Build ulang harian.
   - Alur admin acara: unggah poster, lalu foto detail. Admin memilih sendiri apakah poster ikut ditampilkan di halaman detail lewat `tampilkan_poster`. Di daftar acara, yang tampil hanya poster. Jika tidak ada poster, dipakai foto stok sesuai jenis acara.

Lingkup pekerjaan yang sudah dijanjikan ke klien lewat PDF ruang lingkup:

- Situs lengkap sesuai halaman yang ada sekarang.
- Agenda dengan tombol daftar.
- Panel admin untuk artikel dan acara.
- Setup hosting gratis.
- Revisi sampai live.
- Serah terima kode: repo dipindah ke GitHub klien setelah lunas.

Di luar lingkup:

- Email kantor.
- Google Ads (iklan berbayar).
- Pendaftaran acara berbayar atau pembayaran online.

### Langkah berikutnya, urut sampai live

1. **Sambungkan Pages CMS** (sedang menunggu pemilik proyek).
   - Pemilik login GitHub di app.pagescms.org dan memasang GitHub App di repo ini.
   - Uji unggah satu acara dan satu artikel. Cek hasil field `boolean`, `image` multiple, dan `date` di frontmatter, lalu cek build-nya. Bagian ini belum pernah diuji dengan CMS sungguhan.
2. **Revisi dari klien.** Kerjakan semua masukan klien atas demo.
3. **Kumpulkan bahan dari klien:**
   - Nomor WhatsApp dan email asli.
   - Data tim asli beserta fotonya. Foto menggantikan panel inisial di `Portrait.astro`.
   - Artikel asli, jika sudah ada.
   - Persetujuan teks Disclaimer dan Kebijakan Privasi (mengacu UU PDP No. 27/2022).
4. **Klien membeli domain `.id`** (sekitar Rp 210–250 ribu per tahun, misalnya di DomaiNesia, Rumahweb, atau CloudKilat).
   - `.co.id` sekitar Rp 270–300 ribu dan butuh NIB.
   - Email kantor opsional. Pilihannya Google Workspace (bayar per pengguna per bulan) atau Zoho Mail (gratis sampai 5 pengguna).
5. **Formulir kontak.** `kontak.astro` belum mengirim apa pun. Layanan form-nya belum dipilih, jadi tanyakan pemilik proyek sebelum memilih. Opsi lain: arahkan ke WhatsApp saja.
6. **Bersihkan isi demo:**
   - Hapus semua file di `src/content/acara/` dan `src/content/artikel/`, gambar di `public/uploads/acara/`, dan tim fiktif di `tim.ts`.
   - Hapus label demo: `footer-demo` di Footer, `demo-note` di detail acara dan artikel, `notice` di Disclaimer dan Kebijakan Privasi, dan pesan status demo di `kontak.astro`.
   - Menu kosong akan tersembunyi otomatis sampai admin mengisi konten.
7. **Pindah ke domain sendiri:**
   - Atur `SITE_URL` dan hapus `BASE_PATH` di workflow.
   - Sambungkan DNS domain ke GitHub Pages, atau ke Cloudflare Pages jika repo dijadikan private.
8. **Buka untuk mesin pencari.** Hapus `noindex` di `layouts/Base.astro` dan `Disallow` di `public/robots.txt`.
9. **Setelah live:**
   - Daftarkan ke Google Search Console dan Google Business Profile.
   - Latih admin klien memakai Pages CMS.
   - Pindahkan repo ke GitHub klien setelah lunas.

