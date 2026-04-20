// ============================================================
// DATA PORTOFOLIO - Edit file ini untuk mengubah konten website
// ============================================================

export const profile = {
  name: "Muhammad Naufal 'Aqila",
  title: "Civil Infrastructure Engineering Student",
  tagline: "",
  avatar: "/profile.jpg",
  aboutHeading: "I'm Naufal 'Aqila",
  bio: [
    "A Civil Infrastructure Engineering student from Sepuluh Nopember Institute of Technology with a strong interest in water resources and structural engineering. Demonstrated leadership through various academic and organizational roles.",
    "Experienced in hydraulic modeling, GIS analysis, Geotechnical modeling, and infrastructure project planning, including river mapping and water structure cost estimation. Possesses hands-on experience using engineering software such as HEC-RAS, ArcGis Pro, AutoCAD Civil 3D, Plaxis and Geostudio.",
  ],
  email: "naufalaqila732@gmail.com",
  phone: "+6287816649287",
  location: "Gresik, East Java, Indonesia",
  social: {
    linkedin: "https://www.linkedin.com/in/muhammad-naufal-aqila-220a7b394",
    instagram: "https://www.instagram.com/naufallaqila?igsh=Ym1mY2FwdWV0a29k&utm_source=qr",
    github: "",
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
    title: "River Engineering for Mining: Principles, River Morphology, Hydrological and Hydraulic Modelling",
    organizer: "Sesi Minerba Indonesia",
    year: "2026",
    description:
      "Training on river engineering principles, river morphology, and hydrological & hydraulic modelling for mining applications. 28 - 29 March 2026.",
    category: "Hydraulic",
  },
  {
    title: "Belajar Pemodelan Banjir dengan HEC-RAS",
    organizer: "PT. Arta Survey Technology",
    year: "2025",
    description:
      "Training on flood modeling using HEC-RAS software. 30 November 2025.",
    category: "Hydraulic",
  },
  {
    title: "MASTERCLASS GIS FOR MINING: Advanced GIS for Topographic, Hydrological, and Environmental Applications Using ArcGIS Pro",
    organizer: "Takeclass",
    year: "2025",
    description:
      "Advanced GIS masterclass covering topographic, hydrological, and environmental applications using ArcGIS Pro for mining. 16 October - 07 November 2025.",
    category: "GIS",
  },
  {
    title: "Hidrologi Tambang: Strategi Efektif Pengelolaan Air pada Tambang Batu Bara",
    organizer: "Sesi Minerba Indonesia",
    year: "2025",
    description:
      "Training on effective water management strategies for coal mining hydrology. 26 October 2025.",
    category: "Hydraulic",
  },
  {
    title: "Kajian Penanganan Longsoran dan Rembesan di Hilir Bendungan dengan Metode Analisa Balik menggunakan Software Geostudio Sesuai SNI 8460-2017",
    organizer: "Kursus Sipil Indonesia",
    year: "2025",
    description:
      "Study on landslide and seepage handling downstream of dams using back analysis method with Geostudio software according to SNI 8460-2017. 21 October 2025.",
    category: "Geotechnical",
  },
  {
    title: "Intensive Bootcamp: Pengolahan Data dan Quality Control Data GNSS Statik & RTK dari Dasar Untuk Survey dan Pemetaan",
    organizer: "Aksara Lab Indonesia",
    year: "2025",
    description:
      "Intensive bootcamp on GNSS Static & RTK data processing and quality control for surveying and mapping. 05 - 06 August 2025.",
    category: "Survey",
  },
  {
    title: "Sesi Training Software Slide 2 Pemodelan Stabilitas Geoteknik Terapan untuk Tambang Nikel",
    organizer: "Sesi Minerba Indonesia",
    year: "2025",
    description:
      "Training on Slide 2 software for applied geotechnical stability modeling for nickel mining. 21 June 2025.",
    category: "Geotechnical",
  },
  {
    title: "Pelatihan Delft3D-FLOW dan Delft3D-WAVE",
    organizer: "Ahli Sains dan Data Analisis (SDA)",
    year: "2025",
    description:
      "Training on Delft3D-FLOW and Delft3D-WAVE hydrodynamic modeling software. 24 - 25 May 2025.",
    category: "Hydraulic",
  },
  {
    title: "Exclusive Geotechnical Training Study Case 1-4 Using Plaxis 2D",
    organizer: "KursusSipil",
    year: "2025",
    description:
      "Exclusive geotechnical training with 4 study cases using Plaxis 2D software. 19 - 20 April 2025.",
    category: "Geotechnical",
  },
];

export interface Experience {
  position: string;
  company: string;
  period: string;
  type: "Work" | "Internship" | "Irrigation Project";
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
    type: "Irrigation Project",
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
  description: string[];
}

export const organizations: Organization[] = [
  {
    name: "Civil Infrastructure Engineering Batch 2022",
    position: "Vice Chairman",
    period: "Aug 2022 - Sep 2026",
    description: [
      "Provided strategic leadership and direction for a batch of 167 students, ensuring effective communication and collective welfare",
      "Spearheaded batch unification initiatives to bridge diverse student elements and maintain a cohesive departmental environment",
    ],
  },
  {
    name: "HMDS ITS",
    position: "Head of Dvil Mania Bureau",
    period: "Jan 2025 - Dec 2025",
    description: [
      "Led the supporter alliance for ITS Manyar Campus, managing all creative strategies, branding, and conceptual ideas for the organization",
      "Acted as a primary facilitator to foster unity and solidarity among students across the engineering department through high-impact engagement programs",
    ],
  },
  {
    name: "HMDS ITS",
    position: "IC Coordinator of Orientation Department",
    period: "Jan 2025 - Dec 2025",
    description: [
      "Led the execution of departmental regeneration concepts as outlined in the established \"Grand Design,\" ensuring a structured and effective transition for new members",
      "Orchestrated the implementation of mentoring and training programs to cultivate core organizational values and competencies within the student association",
    ],
  },
  {
    name: "Dvillage 13th Edition",
    position: "Head of Operations",
    period: "Mar 2024 - Nov 2024",
    description: [
      "Directed 4 key operational divisions: Logistics, Decoration, Security Licensing, and Transportation for a major civil engineering event",
      "Managed end-to-end resource allocation and event logistics, ensuring all departmental requirements and security protocols were met",
    ],
  },
  {
    name: "HMDS ITS",
    position: "Personalia",
    period: "Jan 2024 - Dec 2024",
    description: [
      "Conducted periodic performance monitoring and comprehensive evaluations for all members of the Civil Diploma Student Association",
      "Designed and executed internal training programs and workshops aimed at enhancing staff competencies and talent development",
    ],
  },
];

