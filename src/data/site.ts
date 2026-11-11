// Data perusahaan. Ganti di sini, semua halaman ikut berubah.
// Sumber: Company Profile LawOn.id. Nomor WhatsApp dan email belum diberikan client, jadi masih contoh.
export const site = {
  name: 'LawOn.id',
  entity: 'PT Solusi Aksara Hukum',
  tagline: 'Lebih Mudah Bersama LawOn.id',
  whatsappDisplay: '0800 0000 0000',
  whatsappHref:
    'https://wa.me/6280000000000?text=' +
    encodeURIComponent('Halo LawOn.id, saya ingin bertanya tentang layanan Anda.'),
  email: 'halo@lawon.example',
  address: [
    'Next Office, Menara Agrinas Palma Lantai 15 Unit 15-03',
    'Jl. H.R. Rasuna Said Kav. VI No. 9 Blok X2',
    'Kuningan Timur, Setiabudi, Jakarta Selatan 12950',
  ],
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('Menara Agrinas Palma, Jl. H.R. Rasuna Said, Jakarta Selatan'),
};

export const nav = [
  { href: '/', label: 'Beranda' },
  { href: '/tentang', label: 'Tentang Kami' },
  { href: '/layanan', label: 'Layanan' },
  { href: '/tim', label: 'Tim' },
  { href: '/artikel', label: 'Publikasi' },
];

export const tanggal = (d: Date) =>
  d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
