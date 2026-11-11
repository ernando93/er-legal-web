# LawOn.id (demo)

Website platform layanan hukum LawOn.id (PT Solusi Aksara Hukum), dibuat dengan Astro.
Demo: https://ernando93.github.io/er-legal-web/ (setiap push ke `main` otomatis di-deploy).

## Menjalankan

```
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/
```

## Tempat mengubah isi

| Yang diubah | File |
|---|---|
| Nama, alamat, WhatsApp, email | `src/data/site.ts` |
| Tiga layanan dan rinciannya | `src/data/layanan.ts` |
| Tim | `src/data/tim.ts` |
| Publikasi (artikel) | `src/content/artikel/*.md` |
| Warna dan font | bagian atas `src/styles/global.css` |
| Foto | `src/assets/photos/` |

## Logo

- `public/logo-lawon.svg`: logo warna (navy dan emas), untuk latar terang.
- `public/logo-lawon-putih.svg`: untuk latar gelap.
- `public/favicon.svg`: emblem saja.
- Di website, logo dipakai lewat `src/components/Logo.astro`. Warnanya mengikuti CSS.

Logo digambar ulang dari file client. Teks memakai Source Serif 4 ExtraBold (lisensi OFL) yang diubah jadi path, jadi tidak butuh font terpasang.

## Wajib sebelum live

- Isi nomor WhatsApp dan email asli. Company profile belum mencantumkannya.
- Ganti data tim contoh dan panel inisial di `Portrait.astro` dengan foto asli.
- Ganti artikel contoh dengan publikasi asli.
- Minta peninjauan hukum untuk Disclaimer dan Kebijakan Privasi.
- Sambungkan formulir di `src/pages/kontak.astro` ke backend. Saat ini tidak mengirim apa pun.
- Hapus `noindex` di `src/layouts/Base.astro` dan aturan di `public/robots.txt`.

## Sumber aset

- Isi: Company Profile LawOn.id dari client.
- Foto: Unsplash (`images.unsplash.com`, ID foto ada di `CREDITS.md`).
- Icon: Phosphor Icons, lisensi MIT.
- Font: Source Serif 4 dan Public Sans lewat Fontsource, lisensi OFL.
