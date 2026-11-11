// Tiga layanan LawOn.id. Teks diambil dari Company Profile LawOn.id.
export type Layanan = {
  slug: string;
  title: string;
  short: string;
  untuk: string;
  intro: string[];
  item: { nama: string; isi: string }[];
};

export const layanan: Layanan[] = [
  {
    slug: 'edukasi-hukum',
    title: 'Edukasi Hukum',
    short:
      'Program pembelajaran yang terstruktur, aplikatif, dan relevan dengan kebutuhan masyarakat maupun dunia usaha.',
    untuk: 'Kelas Litigasi, Korporasi, Kepatuhan, serta Pelatihan dan Sertifikasi',
    intro: [
      'Meningkatkan pemahaman dan kompetensi hukum melalui program pembelajaran yang terstruktur, aplikatif, dan relevan dengan kebutuhan masyarakat maupun dunia usaha.',
    ],
    item: [
      {
        nama: 'Kelas Litigasi',
        isi: 'Pembelajaran mengenai hukum acara, strategi beracara, teknik penyusunan dokumen persidangan, dan praktik penyelesaian sengketa.',
      },
      {
        nama: 'Kelas Korporasi',
        isi: 'Pembelajaran mengenai hukum perusahaan, kontrak bisnis, tata kelola perusahaan, investasi, dan aspek hukum kegiatan usaha.',
      },
      {
        nama: 'Kelas Kepatuhan',
        isi: 'Pembelajaran mengenai kepatuhan terhadap regulasi, manajemen risiko hukum, dan penerapan tata kelola yang baik.',
      },
      {
        nama: 'Pelatihan dan Sertifikasi',
        isi: 'Program pengembangan kompetensi melalui pelatihan teknis dan praktis di bidang hukum untuk meningkatkan keterampilan, profesionalisme, serta kualifikasi peserta sesuai kebutuhan dunia kerja dan perkembangan praktik hukum. Program ini juga dapat mencakup persiapan dan fasilitasi sertifikasi kompetensi melalui lembaga sertifikasi yang berwenang.',
      },
    ],
  },
  {
    slug: 'konsultasi-hukum',
    title: 'Konsultasi Hukum',
    short:
      'Layanan yang responsif, profesional, dan solutif untuk membantu klien memahami serta menyelesaikan permasalahan hukum.',
    untuk: 'Legal Opinion, Legal Due Diligence, Legal Drafting, Legal Review, Konsultasi',
    intro: [
      'Memberikan layanan konsultasi hukum yang responsif, profesional, dan solutif untuk membantu klien memahami serta menyelesaikan berbagai permasalahan hukum.',
    ],
    item: [
      {
        nama: 'Legal Opinion (LO)',
        isi: 'Penyusunan pendapat hukum berdasarkan analisis terhadap peraturan perundang-undangan dan fakta hukum.',
      },
      {
        nama: 'Legal Due Diligence (LDD)',
        isi: 'Pemeriksaan dan analisis aspek hukum terhadap suatu perusahaan, transaksi, atau kegiatan usaha.',
      },
      {
        nama: 'Legal Drafting',
        isi: 'Penyusunan dokumen hukum, perjanjian, kontrak, dan dokumen legal lainnya.',
      },
      {
        nama: 'Legal Review',
        isi: 'Penelaahan dan evaluasi dokumen hukum untuk memastikan kesesuaian, kejelasan, serta perlindungan kepentingan hukum klien.',
      },
      {
        nama: 'Konsultasi Langsung dan Daring',
        isi: 'Pemberian tanggapan dan arahan awal atas permasalahan hukum yang dihadapi klien.',
      },
    ],
  },
  {
    slug: 'informasi-hukum',
    title: 'Informasi Hukum',
    short: 'Akses terhadap informasi, perkembangan, dan pengetahuan hukum yang aktual, kredibel, dan mudah dipahami.',
    untuk: 'Berita Hukum, E-Perpus, Publikasi Hukum',
    intro: [
      'Menyediakan akses terhadap informasi, perkembangan, dan pengetahuan hukum yang aktual, kredibel, dan mudah dipahami.',
    ],
    item: [
      {
        nama: 'Berita Hukum',
        isi: 'Informasi dan perkembangan terkini mengenai regulasi, kebijakan pemerintah, serta isu-isu hukum.',
      },
      {
        nama: 'E-Perpus (Perpustakaan Elektronik)',
        isi: 'Akses terhadap referensi hukum, peraturan perundang-undangan, jurnal, artikel, dan literatur hukum.',
      },
      {
        nama: 'Publikasi Hukum',
        isi: 'Artikel, kajian, opini, dan analisis hukum yang dikembangkan untuk memperluas wawasan serta literasi hukum.',
      },
    ],
  },
];
