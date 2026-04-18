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
    position: "Water Resources Engineering Intern, Cibeet Dam Project 1",
    company: "PT. Nindya Karya, PT. Adhi Karya, PT Bahagiabangunnusa, KSO",
    period: "Jul 2025 - Dec 2025",
    type: "Internship",
    description: [
      "Executed dam breach modeling and geotechnical analysis for the main dam to assess structural safety and potential failure scenarios using Geostudio and Plaxis",
      "Calculated and evaluated cost estimates for ongoing construction progress to ensure accurate project budgeting",
      "Simulated and modeled the main dam's inundation area to analyze water capacity, spatial impact, and environmental considerations using HEC-RAS and ArcGis Pro",
    ],
  },
  {
    position: "Surveyor and Planner, Madura Irrigation Area Investigation Project",
    company: "Department of Public Works and Water Resources (PUSDA) East Java",
    period: "May 2025 - Jun 2025",
    type: "Internship",
    description: [
      "Conducted comprehensive field surveys and analyzed land conditions for over 1,000 hectares of irrigation areas across Pamekasan and Sumenep Regencies",
      "Developed strategic land optimization plans for the irrigation network to enhance agricultural productivity and water distribution efficiency",
      "Prepared detailed cost estimations and budget planning for the proposed land optimization strategies",
    ],
  },
  {
    position: "Civil Engineering Intern",
    company: "Department of Urban Works and Spatial Planning (PUTR) Gresik",
    period: "Jul 2024 - Aug 2024",
    type: "Internship",
    description: [
      "Collected spatial data and mapped 156 retention basins (embung) across the Gresik region utilizing ArcGIS software",
      "Calculated and prepared the Bill of Quantities (BOQ) for the construction and maintenance of water gates",
      "Conducted field measurements and topographic mapping along the Lamong River to support flood mitigation and river normalization projects",
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

