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

export interface ScheduleBlock {
  days: string;
  hours: string;
  note: string;
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
    monday: ScheduleBlock;
    tuesdayToSaturday: ScheduleBlock;
    sunday: ScheduleBlock;
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
    logoEmblem: string;
  };
  facilities: ClinicFacility[];
  faqs: FaqItem[];
  meta: {
    websiteUrl: string;
    medicalSpecialty: string;
  };
}

const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");

export const clinicConfig: BusinessConfig = {
  clinicName: "Praktek Dokter Gigi drg. Ummi Kaltsum",
  doctorName: "drg. Ummi Kaltsum",
  doctorCredentials: "Dokter Gigi · Kota Tangerang",
  tagline: "Praktik Dokter Gigi Mandiri",
  subTagline: "Panunggangan Barat · Cibodas · Tangerang",
  heroQuote: "Pelayanan pemeriksaan dan perawatan kesehatan gigi untuk keluarga Anda.",
  philosophy: "Sebagai dokter gigi praktik mandiri di Panunggangan Barat, Cibodas, drg. Ummi Kaltsum melayani konsultasi dan perawatan kesehatan gigi untuk pasien anak-anak hingga dewasa dengan komunikasi yang jelas.",
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
    googleMapsUrl: "https://maps.app.goo.gl/1tSCCc8naE9CFYTw9",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=Jl.+Kav.+Pemda+3+No.241A+Panunggangan+Barat+Cibodas+Tangerang&t=&z=15&ie=UTF8&iwloc=&output=embed",
    geo: {
      latitude: -6.2113393,
      longitude: 106.6173795,
    },
  },
  schedule: {
    monday: {
      days: "Senin",
      hours: "13.00 – 19.00 WIB",
      note: "Praktik Siang – Malam",
    },
    tuesdayToSaturday: {
      days: "Selasa – Sabtu",
      hours: "09.00 – 19.00 WIB",
      note: "Praktik Pagi – Malam",
    },
    sunday: {
      days: "Minggu",
      hours: "10.00 – 19.00 WIB",
      note: "Praktik Pagi – Malam",
    },
    eveningNotice: {
      title: "Jadwal Setelah Jam Reguler",
      description: "Jadwal setelah jam reguler hingga pukul 21.00 dapat tersedia dengan reservasi dan konfirmasi terlebih dahulu.",
      policy: "Pelayanan malam tersedia hanya dengan reservasi dan konfirmasi sebelumnya (by appointment only).",
      buttonText: "Tanyakan Jadwal Malam via WA",
      whatsappMessage: "Hallo Dok, saya membutuhkan jadwal perawatan malam hari setelah jam kerja reguler. Apakah ada slot janji temu?",
    },
  },
  googleRating: {
    score: 5.0,
    reviewCount: 55,
    source: "Google Maps",
    url: "https://maps.app.goo.gl/1tSCCc8naE9CFYTw9",
  },
  services: [
    {
      id: "pemeriksaan",
      number: "01",
      title: "Pemeriksaan & Konsultasi Gigi",
      shortTitle: "Pemeriksaan & Konsultasi",
      description: "Pemeriksaan rongga mulut dan konsultasi kondisi kesehatan gigi untuk pasien anak dan dewasa.",
      badge: "Pemeriksaan",
      whatsappMessage: "Hallo Dok, saya ingin menanyakan jadwal untuk Pemeriksaan & Konsultasi Gigi.",
    },
    {
      id: "scaling",
      number: "02",
      title: "Scaling & Pembersihan Karang Gigi",
      shortTitle: "Scaling Gigi",
      description: "Pembersihan karang gigi dan plak untuk memelihara kebersihan jaringan gigi dan gusi.",
      badge: "Pembersihan",
      whatsappMessage: "Hallo Dok, saya ingin menanyakan jadwal untuk Scaling & Pembersihan Karang Gigi.",
    },
    {
      id: "tambal-gigi",
      number: "03",
      title: "Tambal Gigi Komposit",
      shortTitle: "Tambal Gigi",
      description: "Penambalan gigi berlubang menggunakan bahan resin komposit sewarna gigi.",
      badge: "Restorasi",
      whatsappMessage: "Hallo Dok, saya ingin menanyakan jadwal untuk Tambal Gigi Komposit.",
    },
    {
      id: "cabut-gigi",
      number: "04",
      title: "Cabut Gigi Anak & Dewasa",
      shortTitle: "Cabut Gigi",
      description: "Pencabutan gigi susu anak maupun gigi dewasa sesuai indikasi pemeriksaan klinis.",
      badge: "Tindakan Gigi",
      whatsappMessage: "Hallo Dok, saya ingin menanyakan jadwal untuk Cabut Gigi.",
    },
    {
      id: "pediatrik",
      number: "05",
      title: "Perawatan Gigi Anak (Pediatrik)",
      shortTitle: "Gigi Anak",
      description: "Pemeriksaan dan penanganan kesehatan gigi anak dengan pendampingan orang tua.",
      badge: "Gigi Anak",
      whatsappMessage: "Hallo Dok, saya ingin menanyakan jadwal untuk Perawatan Gigi Anak.",
    },
    {
      id: "saluran-akar",
      number: "06",
      title: "Perawatan Saluran Akar Gigi",
      shortTitle: "Saluran Akar",
      description: "Perawatan saluran akar untuk menangani infeksi pada gigi berlubang dalam.",
      badge: "Perawatan Akar",
      whatsappMessage: "Hallo Dok, saya ingin menanyakan jadwal untuk Perawatan Saluran Akar.",
    },
    {
      id: "gigi-tiruan",
      number: "07",
      title: "Gigi Tiruan Lepasan",
      shortTitle: "Gigi Tiruan",
      description: "Pembuatan protesa gigi tiruan lepasan pengganti gigi yang tanggal.",
      badge: "Protesa Gigi",
      whatsappMessage: "Hallo Dok, saya ingin menanyakan jadwal untuk Gigi Tiruan Lepasan.",
    },
  ],
  images: {
    hero: `${baseUrl}/images/drg-ummi-treatment-room.webp`,
    doctorPortrait: `${baseUrl}/images/drg-ummi-portrait.webp`,
    doctorPatient: `${baseUrl}/images/drg-ummi-patient-care.webp`,
    dentalChair: `${baseUrl}/images/dental-chair.webp`,
    treatmentRoom: `${baseUrl}/images/drg-ummi-treatment-room.webp`,
    waitingArea: `${baseUrl}/images/waiting-area.webp`,
    practiceExterior: `${baseUrl}/images/practice-exterior.webp`,
    sterilization: `${baseUrl}/images/sterilization.webp`,
    logoEmblem: `${baseUrl}/images/logo-emblem.svg`,
  },
  facilities: [
    {
      id: "treatment-room",
      title: "Ruang Periksa Utama",
      subtitle: "Dental Unit & Ruang Praktik",
      description: "Ruang periksa dengan unit dental elektrik untuk pemeriksaan dan tindakan perawatan gigi.",
      tag: "Ruang Periksa",
      image: `${baseUrl}/images/drg-ummi-treatment-room.webp`,
      alt: "Ruang periksa dental unit utama praktek drg. Ummi Kaltsum di Cibodas Tangerang",
    },
    {
      id: "dental-chair",
      title: "Dental Chair",
      subtitle: "Unit Kursi Periksa Pasien",
      description: "Kursi periksa dental untuk kenyamanan posisi pasien selama tindakan perawatan gigi.",
      tag: "Kursi Periksa",
      image: `${baseUrl}/images/dental-chair.webp`,
      alt: "Kursi periksa dental unit drg. Ummi Kaltsum",
    },
    {
      id: "waiting-area",
      title: "Area Meja Konsultasi",
      subtitle: "Meja Konsultasi & Administrasi",
      description: "Area untuk konsultasi kondisi gigi serta pencatatan rekam kunjungan pasien.",
      tag: "Area Konsultasi",
      image: `${baseUrl}/images/waiting-area.webp`,
      alt: "Meja konsultasi dan administrasi pasien drg. Ummi Kaltsum",
    },
    {
      id: "sterilization",
      title: "Area Instrumen Praktik",
      subtitle: "Peralatan & Instrumen Dental",
      description: "Area penataan dan penyiapan peralatan instrumen perawatan gigi.",
      tag: "Peralatan Praktik",
      image: `${baseUrl}/images/sterilization.webp`,
      alt: "Peralatan dan instrumen praktik dokter gigi",
    },
    {
      id: "practice-exterior",
      title: "Papan Nama Praktik",
      subtitle: "Jl. Kav. Pemda 3 No. 241A, Panunggangan Barat",
      description: "Papan nama resmi 'Praktek Dokter Gigi drg. Ummi Kaltsum' di depan rumah praktik untuk pengenalan lokasi.",
      tag: "Akses Praktik",
      image: `${baseUrl}/images/practice-exterior.webp`,
      alt: "Papan nama resmi Praktek Dokter Gigi drg. Ummi Kaltsum di Jl. Kav. Pemda 3",
    },
  ],
  faqs: [
    {
      question: "Apakah perlu membuat janji terlebih dahulu sebelum datang?",
      answer: "Disarankan untuk reservasi melalui WhatsApp terlebih dahulu agar jadwal konsultasi atau perawatan Anda terkonfirmasi sebelum datang.",
    },
    {
      question: "Apakah melayani pasien anak-anak?",
      answer: "Ya, drg. Ummi melayani pemeriksaan dan perawatan kesehatan gigi anak dengan pendampingan orang tua.",
    },
    {
      question: "Apakah bisa membuat jadwal setelah jam kerja (malam)?",
      answer: "Jadwal setelah jam reguler hingga pukul 21.00 dapat tersedia dengan reservasi dan konfirmasi terlebih dahulu via WhatsApp (by appointment only).",
    },
    {
      question: "Bagaimana cara membuat janji perawatan?",
      answer: "Klik tombol Reservasi via WhatsApp di situs ini, sampaikan nama pasien, kebutuhan perawatan, serta hari dan perkiraan jam yang diinginkan.",
    },
    {
      question: "Apakah menerima pasien dari luar Panunggangan Barat?",
      answer: "Ya, kami melayani pasien dari Cibodas, Karawaci, Kavling Pemda, Kelapa Dua, Palem Semi, dan wilayah sekitarnya.",
    },
  ],
  meta: {
    websiteUrl: "https://fal10000.github.io/drg-ummi-web",
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
