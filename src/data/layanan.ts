export type Layanan = {
  slug: string;
  title: string;
  short: string;
  untuk: string;
  intro: string[];
  cakupan: string[];
  faq: { q: string; a: string }[];
};

export const layanan: Layanan[] = [
  {
    slug: 'korporasi-perizinan',
    title: 'Korporasi dan Perizinan',
    short: 'Pendirian badan usaha, perubahan anggaran dasar, sampai perizinan berusaha.',
    untuk: 'Pendiri, direksi, dan investor',
    intro: [
      'Banyak persoalan perusahaan berawal dari hal yang tampak administratif: anggaran dasar yang tidak diperbarui, persetujuan pemegang saham yang terlewat, atau izin yang tidak sesuai dengan kegiatan usaha.',
      'Kami membantu merapikan dasar hukum perusahaan Anda, baik saat baru berdiri maupun saat bersiap menerima investor.',
    ],
    cakupan: [
      'Pendirian PT, CV, dan yayasan bersama notaris rekanan',
      'Perubahan anggaran dasar dan struktur pemegang saham',
      'Perizinan berusaha dan pemetaan kode KBLI',
      'Pemeriksaan hukum sebelum investasi atau akuisisi',
      'Pendampingan rapat umum pemegang saham',
    ],
    faq: [
      {
        q: 'Perusahaan kami sudah lama berdiri tapi dokumennya berantakan. Bisa dibantu?',
        a: 'Bisa. Kami mulai dengan memeriksa akta dan perizinan yang ada, lalu membuat daftar hal yang perlu dibereskan beserta urutannya.',
      },
      {
        q: 'Apakah akta dibuat oleh ER Legal?',
        a: 'Akta autentik dibuat oleh notaris. Kami menyiapkan substansinya dan berkoordinasi dengan notaris pilihan Anda atau rekanan kami.',
      },
    ],
  },
  {
    slug: 'kontrak-bisnis',
    title: 'Kontrak Bisnis',
    short: 'Menyusun dan memeriksa perjanjian sebelum Anda menandatanganinya.',
    untuk: 'Pelaku usaha dan startup',
    intro: [
      'Kontrak yang baik dibaca saat semua pihak masih berhubungan baik, dan dipakai saat hubungan itu memburuk. Karena itu kami menulisnya untuk hari yang kedua.',
      'Anda akan menerima catatan yang menjelaskan klausul mana yang berisiko, mengapa, dan apa usulan perubahannya, dalam bahasa yang bisa dibawa ke rapat internal.',
    ],
    cakupan: [
      'Penyusunan perjanjian kerja sama, jual beli, dan jasa',
      'Pemeriksaan kontrak dari pihak lawan',
      'Perjanjian kerahasiaan dan lisensi',
      'Pendampingan negosiasi klausul',
      'Template kontrak untuk transaksi berulang',
    ],
    faq: [
      {
        q: 'Berapa lama pemeriksaan satu kontrak?',
        a: 'Tergantung panjang dan kerumitannya. Perkiraan waktu dan biayanya kami sampaikan setelah melihat dokumennya, sebelum pekerjaan dimulai.',
      },
      {
        q: 'Kontraknya berbahasa Inggris, apakah masalah?',
        a: 'Kontrak dengan pihak Indonesia pada prinsipnya wajib dibuat dalam bahasa Indonesia, dan boleh disertai bahasa asing bila ada pihak asing. Kami bisa menyiapkan versi dwibahasa.',
      },
    ],
  },
  {
    slug: 'ketenagakerjaan',
    title: 'Ketenagakerjaan',
    short: 'Hubungan kerja, peraturan perusahaan, dan penyelesaian perselisihan.',
    untuk: 'Perusahaan dan pekerja',
    intro: [
      'Perselisihan kerja jarang muncul tiba-tiba. Biasanya ada kontrak yang kurang tepat, peringatan yang tidak tercatat, atau perhitungan hak yang berbeda.',
      'Kami mendampingi perusahaan maupun pekerja, dengan tujuan menyelesaikan perselisihan sedini mungkin melalui perundingan sebelum melangkah lebih jauh.',
    ],
    cakupan: [
      'Penyusunan PKWT, PKWTT, dan peraturan perusahaan',
      'Perhitungan hak saat hubungan kerja berakhir',
      'Perundingan bipartit dan mediasi',
      'Perkara di Pengadilan Hubungan Industrial',
      'Audit kepatuhan ketenagakerjaan',
    ],
    faq: [
      {
        q: 'Saya pekerja dan merasa di-PHK sepihak. Harus mulai dari mana?',
        a: 'Kumpulkan kontrak kerja, slip gaji, dan surat yang Anda terima, lalu hindari menandatangani dokumen baru sebelum memahami isinya.',
      },
      {
        q: 'Apakah perselisihan harus sampai pengadilan?',
        a: 'Tidak selalu. Perselisihan hubungan industrial pada umumnya diupayakan lebih dulu melalui perundingan bipartit dan tahap penyelesaian di luar pengadilan.',
      },
    ],
  },
  {
    slug: 'sengketa-perdata',
    title: 'Sengketa dan Litigasi Perdata',
    short: 'Somasi, mediasi, arbitrase, dan pendampingan di pengadilan.',
    untuk: 'Perusahaan dan perorangan',
    intro: [
      'Tidak semua sengketa layak dibawa ke pengadilan. Sebelum menyarankan gugatan, kami menghitung bersama Anda waktu, biaya, peluang, dan kemungkinan penyelesaian yang lebih cepat.',
      'Jika perkara memang harus berjalan, Anda akan tahu tahapannya, posisi terakhirnya, dan keputusan apa yang perlu diambil.',
    ],
    cakupan: [
      'Analisis posisi hukum dan bukti',
      'Penyusunan dan penanganan somasi',
      'Mediasi dan negosiasi penyelesaian',
      'Gugatan wanprestasi dan perbuatan melawan hukum',
      'Pendampingan arbitrase',
    ],
    faq: [
      {
        q: 'Apakah ER Legal bisa memastikan perkara saya menang?',
        a: 'Tidak ada advokat yang boleh menjanjikan kemenangan. Yang kami berikan adalah penilaian jujur atas kekuatan dan kelemahan posisi Anda.',
      },
      {
        q: 'Dokumen apa yang perlu dibawa ke konsultasi pertama?',
        a: 'Perjanjian terkait, korespondensi, bukti pembayaran, dan surat dari pihak lain. Susunan kronologi singkat juga sangat membantu.',
      },
    ],
  },
  {
    slug: 'keluarga-waris',
    title: 'Keluarga dan Waris',
    short: 'Perceraian, hak asuh, harta bersama, dan pembagian warisan.',
    untuk: 'Perorangan dan keluarga',
    intro: [
      'Perkara keluarga menyangkut hal yang tidak selalu bisa dihitung. Kami menanganinya dengan kerahasiaan penuh dan tidak tergesa mendorong Anda ke pengadilan.',
      'Bila masih ada ruang untuk bersepakat, kami membantu menuangkannya menjadi dokumen yang jelas dan berkekuatan hukum.',
    ],
    cakupan: [
      'Perceraian di Pengadilan Agama dan Pengadilan Negeri',
      'Hak asuh anak dan nafkah',
      'Pembagian harta bersama',
      'Perjanjian perkawinan',
      'Pembagian dan sengketa waris',
    ],
    faq: [
      {
        q: 'Apakah percakapan saya dirahasiakan?',
        a: 'Ya. Advokat wajib merahasiakan segala sesuatu yang diketahui dari klien karena hubungan profesinya.',
      },
      {
        q: 'Pengadilan mana yang berwenang untuk perkara saya?',
        a: 'Umumnya bergantung pada agama para pihak dan tempat tinggal. Kami memastikannya setelah mendengar kondisi Anda.',
      },
    ],
  },
  {
    slug: 'pertanahan-properti',
    title: 'Pertanahan dan Properti',
    short: 'Pemeriksaan sertifikat, jual beli, dan sengketa tanah.',
    untuk: 'Pembeli, pemilik, dan pengembang',
    intro: [
      'Membeli tanah atau bangunan biasanya adalah keputusan keuangan terbesar seseorang. Pemeriksaan di awal jauh lebih murah daripada sengketa di belakang.',
      'Kami memeriksa riwayat dan dokumen objek, lalu menyampaikan temuan sebelum Anda membayar uang muka.',
    ],
    cakupan: [
      'Pemeriksaan sertifikat dan riwayat tanah',
      'Perjanjian pengikatan jual beli',
      'Sewa jangka panjang',
      'Sengketa kepemilikan dan batas tanah',
      'Pendampingan pengurusan bersama PPAT',
    ],
    faq: [
      {
        q: 'Kapan sebaiknya saya berkonsultasi saat membeli properti?',
        a: 'Sebelum menandatangani apa pun dan sebelum membayar tanda jadi.',
      },
      {
        q: 'Apakah sertifikat saya bisa diperiksa keasliannya?',
        a: 'Pengecekan dilakukan melalui kantor pertanahan setempat, biasanya dengan bantuan PPAT. Kami bisa mengoordinasikannya.',
      },
    ],
  },
];
