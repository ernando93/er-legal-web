import { getCollection, type CollectionEntry } from 'astro:content';
import type { ImageMetadata } from 'astro';
import { site } from './site';
import ruangRapat from '../assets/photos/ruang-rapat.jpg';
import rapat from '../assets/photos/rapat.jpg';
import buku from '../assets/photos/buku.jpg';
import perpustakaan from '../assets/photos/perpustakaan.jpg';

export type Acara = CollectionEntry<'acara'>;

// Gambar di daftar agenda: poster dari admin, atau foto bawaan sesuai jenis acara.
const bawaan: Record<string, ImageMetadata> = { Kelas: ruangRapat, Pelatihan: rapat, Webinar: buku, Seminar: perpustakaan, Diskusi: rapat };
// Gambar slider di halaman acara: poster (bila ditampilkan) lalu foto detail.
export const slideAcara = (a: Acara) => [...(a.data.tampilkan_poster && a.data.poster ? [a.data.poster] : []), ...a.data.foto];
export const fotoAcara = (a: Acara): string | ImageMetadata => a.data.poster ?? bawaan[a.data.jenis] ?? ruangRapat;

// "09.00" atau "9:00" menjadi [9, 0].
const jam = (s?: string) => {
  const m = s?.match(/(\d{1,2})[.:](\d{2})/);
  return m ? [Number(m[1]), Number(m[2])] : null;
};
const rapi = (s: string) => {
  const j = jam(s);
  return j ? `${String(j[0]).padStart(2, '0')}.${String(j[1]).padStart(2, '0')}` : s;
};

// Waktu WIB (UTC+7) pada tanggal acara, sebagai Date.
const pada = (a: Acara, j: number[]) => {
  const d = a.data.tanggal;
  return new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), j[0] - 7, j[1]));
};
export const mulaiAt = (a: Acara) => pada(a, jam(a.data.mulai) ?? [0, 0]);
// Tanpa jam selesai, acara dianggap berakhir pukul 23.59 WIB.
export const selesaiAt = (a: Acara) => pada(a, jam(a.data.selesai) ?? [23, 59]);

const fmt = (d: Date, o: Intl.DateTimeFormatOptions) => d.toLocaleDateString('id-ID', { timeZone: 'UTC', ...o });
export const hariTanggal = (a: Acara) => fmt(a.data.tanggal, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
export const tgl = (a: Acara) => fmt(a.data.tanggal, { day: 'numeric' });
export const bulan = (a: Acara) => fmt(a.data.tanggal, { month: 'short' }).replace('.', '');
export const tahun = (a: Acara) => fmt(a.data.tanggal, { year: 'numeric' });
export const waktuLabel = (a: Acara) =>
  `${rapi(a.data.mulai)}${a.data.selesai ? `–${rapi(a.data.selesai)}` : ''} WIB`;

// Tombol daftar: link dari admin, atau WhatsApp dengan pesan siap kirim.
export const daftarHref = (a: Acara) =>
  a.data.daftar ??
  `${site.whatsappHref.split('?')[0]}?text=${encodeURIComponent(`Halo LawOn.id, saya ingin mendaftar acara "${a.data.title}" (${hariTanggal(a)}).`)}`;

// Tautan Simpan ke Google Calendar. Tanpa jam selesai, durasi dianggap 2 jam.
export const kalenderHref = (a: Acara, url: string) => {
  const s = mulaiAt(a);
  const e = a.data.selesai ? selesaiAt(a) : new Date(+s + 2 * 3600e3);
  const z = (d: Date) => d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '');
  const q = new URLSearchParams({
    action: 'TEMPLATE',
    text: a.data.title,
    dates: `${z(s)}/${z(e)}`,
    details: `${a.data.excerpt}\n\n${url}`,
    location: a.data.lokasi,
  });
  return `https://calendar.google.com/calendar/render?${q}`;
};

// Dihitung saat build. Situs di-build ulang tiap hari, dan skrip di halaman ikut memindahkan acara yang baru lewat.
export async function semuaAcara() {
  const now = Date.now();
  const all = await getCollection('acara');
  const akan = all.filter((a) => +selesaiAt(a) >= now).sort((a, b) => +mulaiAt(a) - +mulaiAt(b));
  const lewat = all.filter((a) => +selesaiAt(a) < now).sort((a, b) => +mulaiAt(b) - +mulaiAt(a));
  return { akan, lewat };
}
