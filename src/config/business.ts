export interface ClinicService {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  badge?: string;
  whatsappMessage: string;
}

export interface ClinicFacility {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
  alt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BusinessConfig {
  clinicName: string;
  doctorName: string;
  doctorCredentials: string;
  tagline: string;
  subTagline: string;
  heroQuote: string;
  philosophy: string;
  contact: {
    phoneDisplay: string;
    phoneTel: string;
    whatsappNumber: string;
    whatsappLinkBase: string;
  };
  location: {
    street: string;
    neighborhood: string;
    district: string;
    city: string;
    province: string;
    postalCode: string;
    fullAddress: string;
    landmark: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
    geo: {
      latitude: number;
      longitude: number;
    };
  };
  schedule: {
    weekdays: {
      days: string;
      hours: string;
      note: string;
    };
    saturday: {
      days: string;
      hours: string;
      note: string;
    };
    sundayAndHolidays: {
      days: string;
      hours: string;
      note: string;
    };
    eveningNotice: {
      title: string;
      description: string;
      policy: string;
      buttonText: string;
      whatsappMessage: string;
    };
  };
  googleRating: {
    score: number;
    reviewCount: number;
    source: string;
    url: string;
  };
  services: ClinicService[];
  images: {
    hero: string;
    doctorPortrait: string;
    doctorPatient: string;
    dentalChair: string;
    treatmentRoom: string;
    waitingArea: string;
    practiceExterior: string;
    sterilization: string;
  };
  facilities: ClinicFacility[];
  faqs: FaqItem[];
  meta: {
    websiteUrl: string;
    priceRange: string;
    medicalSpecialty: string;
  };
}

export const clinicConfig: BusinessConfig = {
  clinicName: "Praktek Dokter Gigi drg. Ummi Kaltsum",
  doctorName: "drg. Ummi Kaltsum",
  doctorCredentials: "SIP Aktif · Kota Tangerang",
  tagline: "Praktik Dokter Gigi Mandiri",
  subTagline: "Panunggangan Barat · Cibodas · Tangerang",
  heroQuote: "Perawatan gigi yang tenang, teliti, dan personal untuk keluarga Anda.",
  philosophy: "Sebagai praktik mandiri lingkungan di Panunggangan Barat, drg. Ummi Kaltsum memberikan pelayanan langsung secara konsisten. Pasien anak diajak beradaptasi terlebih dahulu tanpa rasa tertekan, sementara pasien dewasa mendapatkan penjelasan opsi penanganan gigi secara transparan.",
  contact: {
    phoneDisplay: "0858-8841-7271",
    phoneTel: "085888417271",
    whatsappNumber: "6285888417271",
    whatsappLinkBase: "https://wa.me/6285888417271",
  },
  location: {
    street: "Jl. Kav. Pemda 3 No. 241A, RT.005/RW.005",
    neighborhood: "Panunggangan Barat",
    district: "Kec. Cibodas",
    city: "Kota Tangerang",
    province: "Banten",
    postalCode: "15139",
    fullAddress: "Jl. Kav. Pemda 3 No. 241A, RT.005/RW.005, Panunggangan Barat, Kec. Cibodas, Kota Tangerang, Banten 15139",
    landmark: "Kavling Pemda 3, dekat akses Palem Semi & Karawaci",
    googleMapsUrl: "https://maps.google.com/?q=Jl.+Kav.+Pemda+3+No.241A+Panunggangan+Barat+Cibodas+Tangerang",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Jl.+Kav.+Pemda+3+No.241A+Panunggangan+Barat+Cibodas+Tangerang&t=&z=15&ie=UTF8&iwloc=&output=embed",
    geo: {
      latitude: -6.2162,
      longitude: 106.6185,
    },
  },
  schedule: {
    weekdays: {
      days: "Senin – Jumat",
      hours: "16.00 – 20.00 WIB",
      note: "Praktik Sore – Malam",
    },
    saturday: {
      days: "Sabtu",
      hours: "09.00 – 16.00 WIB",
      note: "Praktik Siang",
    },
    sundayAndHolidays: {
      days: "Minggu & Hari Libur",
      hours: "Tutup",
      note: "Dengan perjanjian khusus",
    },
    eveningNotice: {
      title: "Butuh jadwal setelah jam kerja?",
      description: "Untuk pasien dengan kesibukan kerja di luar kota atau Karawaci, jadwal perawatan hingga pukul 21.00 WIB dapat disediakan melalui reservasi dan konfirmasi terlebih dahulu.",
      policy: "Pelayanan malam berlaku hanya dengan janji temu (by appointment only). Tidak melayani walk-in larut malam.",
      buttonText: "Tanyakan Jadwal Malam via WA",
      whatsappMessage: "Hallo Dok, saya membutuhkan jadwal perawatan malam hari setelah jam kerja reguler. Apakah ada slot janji temu?",
    },
  },
  googleRating: {
    score: 5.0,
    reviewCount: 55,
    source: "Google Maps",
    url: "https://maps.google.com/?q=Jl.+Kav.+Pemda+3+No.241A+Panunggangan+Barat+Cibodas+Tangerang",
  },
  services: [
    {
      id: "pemeriksaan",
      number: "01",
      title: "Pemeriksaan & Konsultasi Gigi",
      shortTitle: "Pemeriksaan & Konsultasi",
      description: "Pemeriksaan menyeluruh terhadap gigi dan gusi dengan waktu konsultasi yang tenang, jelas, serta edukatif untuk anak dan dewasa.",
      badge: "Pemeriksaan Awal",
      whatsappMessage: "Hallo Dok, saya ingin menanyakan jadwal untuk Pemeriksaan & Konsultasi Gigi.",
    },
    {
      id: "scaling",
      number: "02",
      title: "Scaling & Pembersihan Karang Gigi",
      shortTitle: "Scaling Gigi",
      description: "Pembersihan karang dan plak gigi secara teliti untuk menghentikan gusi berdarah, mencegah periodontitis, serta menjaga kesegaran nafas.",
      badge: "Perawatan Rutin",
      whatsappMessage: "Hallo Dok, saya ingin menanyakan jadwal untuk Scaling & Pembersihan Karang Gigi.",
    },
    {
      id: "tambal-gigi",
      number: "03",
      title: "Tambal Gigi Komposit Estetik",
      shortTitle: "Tambal Gigi Estetik",
      description: "Perbaikan gigi berlubang menggunakan bahan sewarna gigi asli untuk mengembalikan fungsi kunyah dan penampilan alami.",
      badge: "Restorasi",
      whatsappMessage: "Hallo Dok, saya ingin menanyakan jadwal untuk Tambal Gigi Komposit.",
    },
    {
      id: "cabut-gigi",
      number: "04",
      title: "Cabut Gigi Anak & Dewasa",
      shortTitle: "Cabut Gigi",
      description: "Pencabutan gigi susu yang goyang maupun gigi dewasa yang sudah tidak dapat dipertahankan, dilakukan dengan hati-hati dan minim rasa tegang.",
      badge: "Tindakan Bedah Minor",
      whatsappMessage: "Hallo Dok, saya ingin menanyakan jadwal untuk Cabut Gigi.",
    },
    {
      id: "pediatrik",
      number: "05",
      title: "Perawatan Gigi Anak (Pediatrik)",
      shortTitle: "Gigi Anak",
      description: "Pendekatan ramah tanpa paksaan agar anak merasa aman dan tidak trauma terhadap dokter gigi sejak kunjungan pertama.",
      badge: "Ramah Anak",
      whatsappMessage: "Hallo Dok, saya ingin menanyakan jadwal untuk Perawatan Gigi Anak.",
    },
    {
      id: "saluran-akar",
      number: "06",
      title: "Perawatan Saluran Akar Gigi",
      shortTitle: "Perawatan Saluran Akar",
      description: "Penanganan infeksi saluran akar gigi berlubang dalam untuk meredakan nyeri dan mempertahankan gigi asli agar tidak perlu dicabut.",
      badge: "Endodontik",
      whatsappMessage: "Hallo Dok, saya ingin menanyakan jadwal untuk Perawatan Saluran Akar.",
    },
    {
      id: "gigi-tiruan",
      number: "07",
      title: "Gigi Tiruan Lepasan",
      shortTitle: "Gigi Tiruan / Palsu",
      description: "Pembuatan protesa gigi pengganti yang pas dan nyaman guna mengembalikan fungsi pengunyahan serta kenyamanan berbicara.",
      badge: "Prostodonsia",
      whatsappMessage: "Hallo Dok, saya ingin menanyakan jadwal untuk Gigi Tiruan Lepasan.",
    },
  ],
  images: {
    hero: "/images/drg-ummi-treatment-room.webp",
    doctorPortrait: "/images/drg-ummi-portrait.webp",
    doctorPatient: "/images/drg-ummi-patient-care.webp",
    dentalChair: "/images/dental-chair.webp",
    treatmentRoom: "/images/drg-ummi-treatment-room.webp",
    waitingArea: "/images/waiting-area.webp",
    practiceExterior: "/images/practice-exterior.webp",
    sterilization: "/images/sterilization.webp",
  },
  facilities: [
    {
      id: "treatment-room",
      title: "Ruang Periksa Utama",
      subtitle: "Fasilitas Perawatan Gigi & Dental Unit",
      description: "Peralatan dental elektrik terawat dengan pencahayaan LED fokus dan instrumen higienis sebelum setiap tindakan pasien.",
      tag: "Ruang Periksa Utama",
      image: "/images/drg-ummi-treatment-room.webp",
      alt: "Ruang periksa dental unit utama praktek drg. Ummi Kaltsum di Cibodas Tangerang",
    },
    {
      id: "dental-chair",
      title: "Dental Chair Ergonomis",
      subtitle: "Unit Perawatan & Kursi Periksa Pasien",
      description: "Kursi dental elektrik higienis dengan sistem suction dan pencahayaan terintegrasi untuk kenyamanan pasien dewasa maupun anak.",
      tag: "Peralatan Higienis",
      image: "/images/dental-chair.webp",
      alt: "Kursi periksa dental ergonomis dan lampu operasi LED drg. Ummi Kaltsum",
    },
    {
      id: "waiting-area",
      title: "Area Konsultasi & Meja Diskusi",
      subtitle: "Konsultasi Terbuka & Rekam Medis Pasien",
      description: "Ruang diskusi privat untuk menjelaskan opsi penanganan, edukasi kebersihan mulut, serta kenyamanan konsultasi keluarga.",
      tag: "Area Konsultasi",
      image: "/images/waiting-area.webp",
      alt: "Area konsultasi personal dan meja administrasi pasien drg. Ummi Kaltsum",
    },
    {
      id: "sterilization",
      title: "Protokol Sterilisasi & Farmasi",
      subtitle: "Antiseptik Medis & Instrumen Terawat",
      description: "Setiap alat dan instrumen diproses melalui standar kebersihan medis ketat guna menjamin pencegahan infeksi silang.",
      tag: "Standar Kebersihan",
      image: "/images/sterilization.webp",
      alt: "Peralatan medis dan antiseptik sterilisasi instrumen dental",
    },
    {
      id: "practice-exterior",
      title: "Plang Nama & Tampak Rumah Praktik",
      subtitle: "Jl. Kav. Pemda 3 No. 241A, Panunggangan Barat",
      description: "Papan nama resmi 'Praktek Dokter Gigi drg. Ummi Kaltsum' terpasang jelas di depan rumah praktik agar mudah dikenali pasien.",
      tag: "Akses Praktik",
      image: "/images/practice-exterior.webp",
      alt: "Papan nama resmi Praktek Dokter Gigi drg. Ummi Kaltsum di Jl. Kav. Pemda 3",
    },
  ],
  faqs: [
    {
      question: "Apakah harus membuat janji terlebih dahulu sebelum datang?",
      answer: "Sangat disarankan. Karena merupakan praktik mandiri personal, reservasi melalui WhatsApp membantu memastikan Anda mendapatkan slot jam periksa yang pasti tanpa antrean yang melelahkan.",
    },
    {
      question: "Apakah melayani pasien anak-anak?",
      answer: "Ya. drg. Ummi melayani anak-anak dengan pendekatan sabar dan komunikatif agar anak merasa nyaman dan tidak takut saat diperiksa.",
    },
    {
      question: "Apakah bisa membuat jadwal setelah jam kerja (malam)?",
      answer: "Jadwal perawatan hingga pukul 21.00 WIB dapat disediakan khusus dengan konfirmasi reservasi sebelumnya (by appointment only). Kami tidak melayani walk-in larut malam tanpa janji temu.",
    },
    {
      question: "Bagaimana cara membuat janji perawatan?",
      answer: "Cukup klik tombol Reservasi via WhatsApp di situs ini. Sampaikan nama pasien, keluhan singkat, serta perkiraan hari dan jam yang diinginkan.",
    },
    {
      question: "Apakah menerima pasien baru dari luar Panunggangan Barat?",
      answer: "Tentu. Kami melayani pasien keluarga dari Cibodas, Karawaci, Kavling Pemda, Kelapa Dua, Palem Semi, dan wilayah sekitarnya.",
    },
  ],
  meta: {
    websiteUrl: "https://drg-ummi-kaltsum.id",
    priceRange: "$$",
    medicalSpecialty: "Dentistry",
  },
};

/**
 * Generate a WhatsApp click URL with encoded prefilled text
 */
export function buildWhatsAppUrl(message?: string): string {
  const defaultText = "Hallo Dok, saya ingin membuat janji perawatan gigi.";
  const text = message || defaultText;
  return `${clinicConfig.contact.whatsappLinkBase}?text=${encodeURIComponent(text)}`;
}
