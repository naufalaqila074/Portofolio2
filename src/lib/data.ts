// ============================================================
// DATA PORTOFOLIO - Edit file ini untuk mengubah konten website
// ============================================================

export const profile = {
  name: "Muhammad Naufal 'Aqila",
  title: "Civil Infrastructure Engineering Student",
  tagline: "Building Tomorrow's Infrastructure with Innovation",
  avatar: "/profile.jpg",
  bio: [
    "Civil Infrastructure Engineering student from Institut Teknologi Sepuluh Nopember with a strong interest in water resources and structural engineering. Demonstrated leadership through various academic and organizational roles.",
    "Experienced in hydraulic modeling, GIS analysis, Geotechnical modeling, and infrastructure project planning, including river mapping and water structure cost estimation. Possesses hands-on experience using engineering software such as HEC-RAS, ArcGis Pro, AutoCAD Civil 3D, Plaxis and Geostudio.",
  ],
  email: "naufalaqila732@gmail.com",
  phone: "+6287816649287",
  location: "Gresik, East Java, Indonesia",
  social: {
    linkedin: "https://linkedin.com/in/username",
    instagram: "https://instagram.com/username",
    github: "https://github.com/username",
  },
};

export interface Training {
  title: string;
  organizer: string;
  year: string;
  description: string;
  category: string;
}

export const trainings: Training[] = [
  {
    title: "Pelatihan Perencanaan Struktur Beton",
    organizer: "Nama Penyelenggara",
    year: "2024",
    description:
      "Deskripsi pelatihan akan diisi di sini. Jelaskan apa yang dipelajari dan kompetensi yang didapat.",
    category: "Struktural",
  },
  {
    title: "Workshop Analisis Geoteknik",
    organizer: "Nama Penyelenggara",
    year: "2023",
    description:
      "Deskripsi pelatihan akan diisi di sini. Jelaskan apa yang dipelajari dan kompetensi yang didapat.",
    category: "Geoteknik",
  },
  {
    title: "Sertifikasi Manajemen Proyek Konstruksi",
    organizer: "Nama Penyelenggara",
    year: "2023",
    description:
      "Deskripsi pelatihan akan diisi di sini. Jelaskan apa yang dipelajari dan kompetensi yang didapat.",
    category: "Manajemen",
  },
];

export interface Experience {
  position: string;
  company: string;
  period: string;
  type: "Work" | "Internship";
  description: string[];
}

export const experiences: Experience[] = [
  {
    position: "Nama Posisi",
    company: "Nama Perusahaan",
    period: "Jan 2024 - Sekarang",
    type: "Work",
    description: [
      "Deskripsi tanggung jawab dan pencapaian akan diisi di sini.",
      "Tambahkan poin-poin penting tentang peran Anda.",
    ],
  },
  {
    position: "Nama Posisi Intern",
    company: "Nama Perusahaan",
    period: "Jun 2023 - Des 2023",
    type: "Internship",
    description: [
      "Deskripsi tanggung jawab dan pencapaian akan diisi di sini.",
      "Tambahkan poin-poin penting tentang peran Anda.",
    ],
  },
  {
    position: "Nama Posisi Intern",
    company: "Nama Perusahaan",
    period: "Jan 2023 - Mei 2023",
    type: "Internship",
    description: [
      "Deskripsi tanggung jawab dan pencapaian akan diisi di sini.",
      "Tambahkan poin-poin penting tentang peran Anda.",
    ],
  },
];

export interface Organization {
  name: string;
  position: string;
  period: string;
  description: string;
}

export const organizations: Organization[] = [
  {
    name: "Nama Organisasi",
    position: "Nama Jabatan",
    period: "2023 - 2024",
    description:
      "Deskripsi peran dan kontribusi Anda di organisasi ini akan diisi di sini.",
  },
  {
    name: "Nama Organisasi",
    position: "Nama Jabatan",
    period: "2022 - 2023",
    description:
      "Deskripsi peran dan kontribusi Anda di organisasi ini akan diisi di sini.",
  },
  {
    name: "Nama Organisasi",
    position: "Nama Jabatan",
    period: "2021 - 2022",
    description:
      "Deskripsi peran dan kontribusi Anda di organisasi ini akan diisi di sini.",
  },
];

