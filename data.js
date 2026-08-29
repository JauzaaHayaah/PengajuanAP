// data.js - Database Pengajuan AP Brighton Real Estate

const principalInfo = {
  nama: "JULYA MELANI (JN)",
  jabatan: "Principal"
};

const candidatesData = [
  {
    id: "BM-001",
    nama: "GUNAWAN",
    wilayah: "Winner, Palembang",
    bo: true,
    bs: true,
    ft: true,            // Checklist Fast Track #1
    gcPribadi: 198,      // Dalam Juta (198 Jt)
    gcTeam: 850,         // Dalam Juta (850 Jt) -> Total = 1,048 M (Gap: -152 Jt dari 1,2 M)
    limitBreaker: 10,    // Range 4 - 11
    listing: 1850,
    totalTeam: 52,
    totalBm: 4,
    checks: {
      listing: true,
      totalTeam: true,
      totalBm: true
    }
  },
  {
    id: "BM-002",
    nama: "LINDA CHANG",
    wilayah: "Winner, Pakuwon Indah",
    bo: true,
    bs: true,
    ft: true,            // Checklist Fast Track #2
    gcPribadi: 350,      // Dalam Juta (350 Jt)
    gcTeam: 950,         // Dalam Juta (950 Jt) -> Total = 1,300 M (Surplus: +100 Jt dari 1,2 M)
    limitBreaker: 11,
    listing: 3400,
    totalTeam: 78,
    totalBm: 6,
    checks: {
      listing: true,
      totalTeam: true,
      totalBm: true
    }
  },
  {
    id: "BM-003",
    nama: "FENI",
    wilayah: "Winner West BSD",
    bo: true,
    bs: true,
    ft: false,           // Kosong
    gcPribadi: 150,      // Dalam Juta (150 Jt)
    gcTeam: 720,         // Dalam Juta (720 Jt) -> Total = 870 Jt (Gap: -330 Jt dari 1,2 M)
    limitBreaker: 4,
    listing: 850,        // Tidak Memenuhi (Kotak Merah)
    totalTeam: 32,       // Tidak Memenuhi (Kotak Merah)
    totalBm: 2,          // Tidak Memenuhi (Kotak Merah)
    checks: {
      listing: false,
      totalTeam: false,
      totalBm: false
    }
  },
  {
    id: "BM-004",
    nama: "STEVE WU",
    wilayah: "Winner, Pakuwon Indah",
    bo: true,
    bs: true,
    ft: false,           // Kosong
    gcPribadi: 280,      // Dalam Juta (280 Jt)
    gcTeam: 940,         // Dalam Juta (940 Jt) -> Total = 1,220 M (Surplus: +20 Jt dari 1,2 M)
    limitBreaker: 8,
    listing: 2100,
    totalTeam: 48,
    totalBm: 3,
    checks: {
      listing: true,
      totalTeam: true,
      totalBm: true
    }
  },
  {
    id: "BM-005",
    nama: "TJOA STEPHEN",
    wilayah: "Winner, PIK",
    bo: true,
    bs: true,
    ft: false,           // Kosong
    gcPribadi: 150,      // Dalam Juta (150 Jt)
    gcTeam: 1100,        // Dalam Juta (1,1 M) -> Total = 1,250 M (Surplus: +50 Jt dari 1,2 M)
    limitBreaker: 6,
    listing: 950,        // Tidak Memenuhi (Kotak Merah)
    totalTeam: 42,
    totalBm: 3,
    checks: {
      listing: false,
      totalTeam: true,
      totalBm: true
    }
  },
  {
    id: "BM-006",
    nama: "ECHA",
    wilayah: "Winner, Cengkareng",
    bo: true,
    bs: true,
    ft: false,           // Kosong
    gcPribadi: 220,      // Dalam Juta (220 Jt)
    gcTeam: 890,         // Dalam Juta (890 Jt) -> Total = 1,110 M (Gap: -90 Jt dari 1,2 M)
    limitBreaker: 9,
    listing: 2900,
    totalTeam: 65,
    totalBm: 5,
    checks: {
      listing: true,
      totalTeam: true,
      totalBm: true
    }
  }
];

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
      "Skill Komunikasi (membuat video 1 menit).",
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