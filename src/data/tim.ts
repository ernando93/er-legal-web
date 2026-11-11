// Semua orang di bawah ini fiktif untuk demo. Ganti dengan data advokat asli.
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
    jabatan: 'Pendiri, Managing Partner',
    inisial: 'ER',
    warna: 'hijau',
    fokus: ['Korporasi dan Perizinan', 'Kontrak Bisnis'],
    ringkas:
      'Memulai ER Legal setelah bertahun-tahun melihat klien pulang dari rapat hukum tanpa paham apa yang harus dilakukan.',
    bio: [
      'Elvira mendampingi pendiri usaha dan perusahaan keluarga dalam urusan korporasi, kontrak, dan persiapan investasi. Ia dikenal rekan-rekannya karena selalu meminta satu halaman ringkasan sebelum memo panjang.',
      'Di luar pekerjaan klien, Elvira mengisi kelas penyusunan kontrak untuk advokat muda.',
    ],
    pendidikan: ['Sarjana Hukum, universitas contoh', 'Magister Hukum (LL.M.), universitas contoh'],
  },
  {
    slug: 'bagas-nugroho',
    nama: 'Bagas Nugroho',
    gelar: 'S.H., M.H.',
    jabatan: 'Partner',
    inisial: 'BN',
    warna: 'tinta',
    fokus: ['Sengketa dan Litigasi Perdata', 'Pertanahan dan Properti'],
    ringkas: 'Menangani sengketa perdata dan pertanahan, dengan kebiasaan menghitung opsi damai lebih dulu.',
    bio: [
      'Bagas berpraktik di bidang sengketa perdata dan pertanahan. Setiap perkara ia mulai dengan peta bukti dan perhitungan biaya, supaya klien bisa memutuskan dengan kepala dingin.',
    ],
    pendidikan: ['Sarjana Hukum, universitas contoh', 'Magister Hukum, universitas contoh'],
  },
  {
    slug: 'nadia-siregar',
    nama: 'Nadia Siregar',
    gelar: 'S.H., LL.M.',
    jabatan: 'Senior Associate',
    inisial: 'NS',
    warna: 'bata',
    fokus: ['Ketenagakerjaan', 'Keluarga dan Waris'],
    ringkas: 'Mendampingi perusahaan dan pekerja dalam perselisihan kerja, serta klien dalam perkara keluarga.',
    bio: [
      'Nadia mendampingi perusahaan maupun pekerja, dan juga menangani perkara keluarga yang membutuhkan kerahasiaan tinggi.',
    ],
    pendidikan: ['Sarjana Hukum, universitas contoh', 'Magister Hukum (LL.M.), universitas contoh'],
  },
  {
    slug: 'yosua-manurung',
    nama: 'Yosua Manurung',
    gelar: 'S.H.',
    jabatan: 'Associate',
    inisial: 'YM',
    warna: 'pasir',
    fokus: ['Pertanahan dan Properti', 'Kontrak Bisnis'],
    ringkas: 'Memeriksa dokumen properti dan kontrak, dan menulis sebagian besar artikel panduan kami.',
    bio: ['Yosua fokus pada pemeriksaan dokumen properti dan kontrak.'],
    pendidikan: ['Sarjana Hukum, universitas contoh'],
  },
];
