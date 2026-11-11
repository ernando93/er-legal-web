// Semua orang di bawah ini fiktif untuk demo. Company profile belum memuat data tim.
// Ganti dengan data asli praktisi, pengajar, dan konsultan LawOn.id.
export type Anggota = {
  slug: string;
  nama: string;
  gelar: string;
  jabatan: string;
  inisial: string;
  warna: 'hijau' | 'bata' | 'tinta' | 'pasir';
  fokus: string[];
  ringkas: string;
  bio: string[];
  pendidikan: string[];
};

export const tim: Anggota[] = [
  {
    slug: 'elvira-rahadian',
    nama: 'Elvira Rahadian',
    gelar: 'S.H., LL.M.',
    jabatan: 'Direktur',
    inisial: 'ER',
    warna: 'hijau',
    fokus: ['Kelas Korporasi', 'Legal Opinion', 'Legal Due Diligence'],
    ringkas: 'Mengarahkan pengembangan layanan LawOn.id dan mengajar di Kelas Korporasi.',
    bio: [
      'Elvira berpengalaman di bidang hukum perusahaan, kontrak bisnis, dan tata kelola. Di LawOn.id ia mengarahkan pengembangan ketiga layanan dan menjaga mutu pendapat hukum yang diterbitkan.',
      'Ia juga mengajar di Kelas Korporasi, dengan fokus pada kontrak bisnis dan aspek hukum investasi.',
    ],
    pendidikan: ['Sarjana Hukum, universitas contoh', 'Magister Hukum (LL.M.), universitas contoh'],
  },
  {
    slug: 'bagas-nugroho',
    nama: 'Bagas Nugroho',
    gelar: 'S.H., M.H.',
    jabatan: 'Konsultan Hukum',
    inisial: 'BN',
    warna: 'tinta',
    fokus: ['Konsultasi Langsung dan Daring', 'Legal Review', 'Kelas Litigasi'],
    ringkas: 'Menangani konsultasi dan telaah dokumen, serta mengajar di Kelas Litigasi.',
    bio: [
      'Bagas menangani konsultasi hukum dan telaah dokumen untuk klien perorangan maupun pelaku usaha. Di Kelas Litigasi ia membahas hukum acara dan penyusunan dokumen persidangan.',
    ],
    pendidikan: ['Sarjana Hukum, universitas contoh', 'Magister Hukum, universitas contoh'],
  },
  {
    slug: 'nadia-siregar',
    nama: 'Nadia Siregar',
    gelar: 'S.H., LL.M.',
    jabatan: 'Pengajar, Kelas Kepatuhan',
    inisial: 'NS',
    warna: 'bata',
    fokus: ['Kelas Kepatuhan', 'Pelatihan dan Sertifikasi', 'Legal Drafting'],
    ringkas: 'Menyusun materi kepatuhan dan manajemen risiko hukum untuk peserta dari dunia usaha.',
    bio: [
      'Nadia menyusun dan mengajar materi kepatuhan regulasi serta manajemen risiko hukum, dan terlibat dalam program pelatihan dan sertifikasi.',
    ],
    pendidikan: ['Sarjana Hukum, universitas contoh', 'Magister Hukum (LL.M.), universitas contoh'],
  },
  {
    slug: 'yosua-manurung',
    nama: 'Yosua Manurung',
    gelar: 'S.H.',
    jabatan: 'Editor Publikasi',
    inisial: 'YM',
    warna: 'pasir',
    fokus: ['Berita Hukum', 'Publikasi Hukum', 'E-Perpus'],
    ringkas: 'Mengelola berita, publikasi, dan koleksi E-Perpus LawOn.id.',
    bio: ['Yosua mengelola berita hukum dan publikasi, serta menyusun koleksi referensi di E-Perpus.'],
    pendidikan: ['Sarjana Hukum, universitas contoh'],
  },
];
