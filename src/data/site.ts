// Data kantor. Ganti di sini, semua halaman ikut berubah.
export const site = {
  name: 'ER Legal',
  entity: 'Kantor Advokat ER Legal',
  phoneDisplay: '(021) 0000 0000',
  phoneHref: 'tel:+622100000000',
  whatsappDisplay: '0800 0000 0000',
  whatsappHref:
    'https://wa.me/6280000000000?text=' +
    encodeURIComponent('Halo ER Legal, saya ingin menjadwalkan konsultasi.'),
  email: 'halo@erlegal.example',
  address: ['Gedung Contoh, Lantai 12', 'Jl. Contoh Raya No. 1', 'Jakarta Selatan 12000'],
  hours: 'Senin sampai Jumat, 09.00 sampai 18.00 WIB',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=Jakarta%20Selatan',
};

export const nav = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang Kami' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/tim', label: 'Tim' },
  { href: '/artikel', label: 'Artikel' },
];

export const tanggal = (d: Date) =>
  d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
