// data.js - Database Dummy Pengajuan AP Brighton Real Estate

const principalInfo = {
  nama: "JULYA MELANI (JN)",
  jabatan: "Principal"
};

const candidatesData = [
  {
    id: "BM-001",
    nama: "GUNAWAN",
    wilayah: "Winner, Palembang",
    gcPribadi: 850000000,   // Rp 850 Juta
    gcTeam: 3800000000,     // Rp 3.8 Miliar
    listing: 1850,          // 1.850 Listing
    totalTeam: 52,          // 52 Personil
    totalBm: 4,             // 4 BM
    checks: {
      gcPribadi: true,
      gcTeam: true,
      listing: true,
      totalTeam: true,
      totalBm: true
    }
  },
  {
    id: "BM-002",
    nama: "LINDA CHANG",
    wilayah: "Winner, Pakuwon Indah",
    gcPribadi: 1200000000,  // Rp 1.2 Miliar
    gcTeam: 4900000000,     // Rp 4.9 Miliar
    listing: 3400,          // 3.400 Listing
    totalTeam: 78,          // 78 Personil
    totalBm: 6,             // 6 BM
    checks: {
      gcPribadi: true,
      gcTeam: true,
      listing: true,
      totalTeam: true,
      totalBm: true
    }
  },
  {
    id: "BM-003",
    nama: "FENI",
    wilayah: "Winner West BSD",
    gcPribadi: 450000000,   // Rp 450 Juta
    gcTeam: 2100000000,     // Rp 2.1 Miliar
    listing: 850,           // 850 Listing (Tidak Memenuhi - Kotak Merah)
    totalTeam: 32,          // 32 Personil (Tidak Memenuhi - Kotak Merah)
    totalBm: 2,             // 2 BM (Tidak Memenuhi - Kotak Merah)
    checks: {
      gcPribadi: true,
      gcTeam: true,
      listing: false,     // KOTAK WARNA MERAH (TANPA RED CROSS IN-CELL)
      totalTeam: false,   // KOTAK WARNA MERAH (TANPA RED CROSS IN-CELL)
      totalBm: false      // KOTAK WARNA MERAH (TANPA RED CROSS IN-CELL)
    }
  },
  {
    id: "BM-004",
    nama: "STEVE WU",
    wilayah: "Winner, Pakuwon Indah",
    gcPribadi: 980000000,   // Rp 980 Juta
    gcTeam: 3500000000,     // Rp 3.5 Miliar
    listing: 2100,          // 2.100 Listing
    totalTeam: 48,          // 48 Personil
    totalBm: 3,             // 3 BM
    checks: {
      gcPribadi: true,
      gcTeam: true,
      listing: true,
      totalTeam: true,
      totalBm: true
    }
  },
  {
    id: "BM-005",
    nama: "TJOA STEPHEN",
    wilayah: "Winner, PIK",
    gcPribadi: 620000000,   // Rp 620 Juta
    gcTeam: 2800000000,     // Rp 2.8 Miliar
    listing: 950,           // 950 Listing (Tidak Memenuhi - Kotak Merah)
    totalTeam: 42,          // 42 Personil
    totalBm: 3,             // 3 BM
    checks: {
      gcPribadi: true,
      gcTeam: true,
      listing: false,     // KOTAK WARNA MERAH (TANPA RED CROSS IN-CELL)
      totalTeam: true,
      totalBm: true
    }
  },
  {
    id: "BM-006",
    nama: "ECHA",
    wilayah: "Winner, Cengkareng",
    gcPribadi: 750000000,   // Rp 750 Juta
    gcTeam: 4200000000,     // Rp 4.2 Miliar
    listing: 2900,          // 2.900 Listing
    totalTeam: 65,          // 65 Personil
    totalBm: 5,             // 5 BM
    checks: {
      gcPribadi: true,
      gcTeam: true,
      listing: true,
      totalTeam: true,
      totalBm: true
    }
  }
];

// Detail Persyaratan Tambahan (Diambil dari Excel)
const syaratTambahanData = [
  {
    kategori: "1. KONTRIBUSI TEAM",
    icon: "📋",
    items: [
      "GC minimal 1,2 M / tahun sesuai Periode Cut Off 27 Setiap bulannya (GC Settled Pribadi Calon AP Minimal 100 Juta - 400 Juta, sisanya GC Settled Team).",
      "GC Settled Team dihitung dari total GC seluruh tim BM dan harus merata (tidak menumpuk pada satu BM).",
      "Minimal mempunyai 1.000 listing grup.",
      "Minimal mempunyai 3 BM dalam 1 layer (minimal 2 BM harus di lokasi yang sama dan 1 BM boleh di lokasi MTB).",
      "Minimal mempunyai 40 team (2 layer).",
      "Memiliki minimal 10 Team Limited Breaker (masing-masing GC 60 juta).",
      "Usia Maksimal 60 Tahun (Usia di atas 60 tahun wajib pengajuan khusus & tes kesehatan/tambahan)."
    ]
  },
  {
    kategori: "2. KOMITMEN",
    icon: "🤝",
    items: [
      "Principal mengerjakan bisnis ini secara Full Time (tidak terikat dengan pekerjaan lain).",
      "Meeting minimal 2x per bulan dalam periode 1 tahun.",
      "Total kehadiran 6 bulan terakhir di kantor minimal 72 hari.",
      "Estimasi kunjungan MTB (keluar kota/pulau) terencana dalam periode 3 bulan.",
      "Ikut kelas-kelas pelatihan seperti Meeting Satu Jaringan, dll.",
      "Lulus Fast Track for BM (1 & 2).",
      "Mengikuti Fast Track BM to AP / BBC.",
      "Konsisten melakukan coaching day.",
      "Service team dan developer.",
      "Penampilan Rapi & Profesional.",
      "Menjaga kolaborasi dan sinergi dengan SP, GMP, dan sesama bisnis unit lain.",
      "Melakukan tes MMPI & Foto Karakter.",
      "Wajib memiliki mobil pribadi untuk menunjang mobilitas pekerjaan.",
      "Memiliki Handphone spesifikasi minimal: RAM 8GB & Memory 256GB."
    ]
  },
  {
    kategori: "3. KARAKTER",
    icon: "⭐",
    items: [
      "Mempunyai jiwa leadership dan hati peduli untuk mencoaching tim menuju #MimpiJadiNyata.",
      "Mau belajar dan dibentuk.",
      "Komunikatif, Helpful, dan Ramah.",
      "Menghidupi Visi & Misi Brighton.",
      "Menghidupi Culture Brighton SISTEM: (1) Strong Belief, (2) Integrity, (3) Successful Habits, (4) Training, (5) Ecosystem Online & Offline, (6) Multiplication.",
      "Menghidupi Core Values BRIGHTON: B - Bright, R - Respect, I - Integrity, G - Growing, H - Helpful, T - Teamwork, O - On Time, N - Networking.",
      "Memegang norma-norma masyarakat yang berlaku (agama, kesusilaan, kesopanan, hukum).",
      "Mempunyai standar moral, standar sikap baik, dan nama baik terhadap pemimpin, manajemen, tim, staff, maupun klien.",
      "Mempunyai kekuatan mental bekerja dalam tekanan.",
      "Tidak terlibat kasus hutang / pinjol dan sejenisnya.",
      "Melakukan BI Checking (bersedia melampirkan KTP & KK)."
    ]
  },
  {
    kategori: "4. KOMPETENSI",
    icon: "📊",
    items: [
      "Skill Recruitment (membuat video 1 menit).",
      "Skill Training / Coaching (membuat video 1 menit).",
      "Skill Komunikasi (membuat video branding 1 menit).",
      "Skill Public Speaking - membawakan Meeting, Bright Day dengan benar.",
      "Skill Analisa, berpikir kritis & logika dengan baik.",
      "Time Management.",
      "Kepemimpinan & Kemampuan Memberikan Pengaruh dan Arahan.",
      "Melakukan Trouble Shooting.",
      "Mampu menggunakan 90% fitur-fitur di Brighton App (laporan-laporan, dll)."
    ]
  },
  {
    kategori: "5. LAMPIRAN DOKUMEN & VIDEO",
    icon: "📁",
    items: [
      "Melampirkan Video Recruitment 1 menit.",
      "Melampirkan Video Training / Coaching 1 menit.",
      "Melampirkan Video Skill Komunikasi 1 menit.",
      "Praktek menggunakan fitur-fitur Brighton App."
    ]
  }
];