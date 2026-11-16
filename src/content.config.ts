import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const artikel = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/artikel' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    author: z.string(),
  }),
});

// Agenda acara. Satu file = satu acara. Waktu ditulis dalam WIB.
const kosong = (v: unknown) => (v === '' || v === null ? undefined : v);
const acara = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/acara' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    jenis: z.string(), // Kelas, Webinar, Pelatihan, Seminar, dan seterusnya
    tanggal: z.coerce.date(), // YYYY-MM-DD
    mulai: z.string(), // contoh "09.00"
    selesai: z.preprocess(kosong, z.string().optional()),
    format: z.enum(['Offline', 'Online', 'Hybrid']),
    lokasi: z.string(),
    pembicara: z.preprocess((v) => v ?? [], z.array(z.string())),
    biaya: z.preprocess((v) => kosong(v) ?? 'Gratis', z.string()),
    // Link pendaftaran; kosong berarti lewat WhatsApp. "forms.gle/..." tanpa https tetap diterima.
    daftar: z.preprocess(
      (v) => { const s = kosong(v); return typeof s === 'string' && !/^https?:\/\//.test(s) ? `https://${s.trim()}` : s; },
      z.string().optional(),
    ),
    // Poster: satu gambar, tampil di daftar agenda.
    poster: z.preprocess(kosong, z.string().optional()),
    // Poster ikut tampil di slider halaman acara atau tidak.
    tampilkan_poster: z.preprocess((v) => !(v === false || v === 'false'), z.boolean()),
    // Foto detail, boleh lebih dari satu, tampil sebagai slider di halaman acara.
    foto: z.preprocess(
      (v) => (Array.isArray(v) ? v : v ? [v] : []).filter((x) => typeof x === 'string' && x.trim() !== ''),
      z.array(z.string()),
    ),
  }),
});

export const collections = { artikel, acara };
