# ER Legal (demo)

Website profil kantor advokat, dibuat dengan Astro.

## Menjalankan

```
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/
```

## Tempat mengubah isi

| Yang diubah | File |
|---|---|
| Nama kantor, alamat, nomor, WhatsApp | `src/data/site.ts` |
| Bidang layanan dan FAQ | `src/data/layanan.ts` |
| Advokat | `src/data/tim.ts` |
| Artikel | `src/content/artikel/*.md` |
| Warna dan font | bagian atas `src/styles/global.css` |
| Foto | `src/assets/photos/` |

## Wajib sebelum live

- Ganti semua data contoh, termasuk nama advokat dan nomor kontak.
- Ganti panel inisial di `Portrait.astro` dengan foto asli.
- Minta advokat meninjau artikel, FAQ, Disclaimer, dan Kebijakan Privasi.
- Sambungkan formulir di `src/pages/kontak.astro` ke backend. Saat ini tidak mengirim apa pun.
- Hapus `noindex` di `src/layouts/Base.astro` dan aturan di `public/robots.txt`.
- Periksa ketersediaan merek dan domain.

## Sumber aset

- Foto: Unsplash (`images.unsplash.com`, ID foto ada di `CREDITS.md`).
- Icon: Phosphor Icons, lisensi MIT.
- Font: Source Serif 4 dan Public Sans lewat Fontsource, lisensi OFL.
