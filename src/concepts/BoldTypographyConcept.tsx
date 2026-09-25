import React, { useState } from 'react';
import {
  ArrowRight,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Star,
  ExternalLink
} from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackWhatsAppBooking, trackPhoneCall, trackMapsClick } from '../utils/analytics';

export const BoldTypographyConcept: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white text-[#0A0A0A] font-['Space_Grotesk',sans-serif] selection:bg-[#0038FF] selection:text-white pb-24 md:pb-0">
      
      {/* 1. TOP TICKER & CLINICAL METADATA */}
      <div className="border-b-2 border-[#0A0A0A] px-4 sm:px-8 lg:px-12 py-2.5 bg-[#0A0A0A] text-white font-mono text-[11px] uppercase tracking-wider">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-block w-2 h-2 bg-[#0038FF] animate-pulse"></span>
            <span className="font-bold">{clinicConfig.subTagline.toUpperCase()}</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 text-slate-300">
            <div className="flex items-center gap-1.5 text-white">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-bold">5.0 GOOGLE</span>
              <span className="text-slate-400">({clinicConfig.googleRating.reviewCount} ULASAN)</span>
            </div>
            <span className="hidden sm:inline text-slate-500">/</span>
            <span className="hidden sm:inline text-[#38BDF8] font-bold">KOTA TANGERANG</span>
            <span className="hidden md:inline text-slate-500">/</span>
            <span className="hidden md:inline text-emerald-400 font-bold">RESERVASI VIA WA</span>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <header className="border-b-2 border-[#0A0A0A] px-4 sm:px-8 lg:px-12 py-4 sm:py-5 bg-white sticky top-0 z-40 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
            <a href="#" className="font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tighter uppercase text-[#0A0A0A] hover:text-[#0038FF] transition-colors">
              DRG. UMMI KALTSUM
            </a>
            <span className="font-mono text-[10px] sm:text-xs text-[#666666] uppercase tracking-wider">
              / {clinicConfig.tagline}
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-8 font-mono text-xs uppercase font-bold">
            <nav className="hidden lg:flex gap-6 tracking-wider">
              <a href="#profil-bold" className="hover:text-[#0038FF] transition-colors">[01] PROFIL</a>
              <a href="#layanan-bold" className="hover:text-[#0038FF] transition-colors">[02] LAYANAN</a>
              <a href="#fasilitas-bold" className="hover:text-[#0038FF] transition-colors">[03] FASILITAS</a>
              <a href="#jadwal-bold" className="hover:text-[#0038FF] transition-colors">[04] JADWAL</a>
              <a href="#lokasi-bold" className="hover:text-[#0038FF] transition-colors">[05] LOKASI</a>
            </nav>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppBooking('concept4_header')}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 px-4 sm:px-5 py-2.5 uppercase font-mono text-xs font-black tracking-wider transition-all shadow-[2px_2px_0px_#0A0A0A] flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>BOOK VIA WA</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO: MONUMENTAL ARCHITECTURAL SPREAD */}
      <section className="border-b-2 border-[#0A0A0A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[70vh]">
          
          {/* Left Column: Bold Typographic Identity */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 border-b-2 lg:border-b-0 lg:border-r-2 border-[#0A0A0A] flex flex-col justify-between">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F0F4FF] border border-[#0038FF] text-[#0038FF] font-mono text-xs font-bold uppercase tracking-widest">
                <span>// PRAKTIK DOKTER GIGI MANDIRI &bull; PANUNGGANGAN BARAT</span>
              </div>

              <h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[0.95] tracking-tighter uppercase text-[#0A0A0A]">
                PERAWATAN<br />
                GIGI YANG<br />
                <span className="text-[#0038FF] underline decoration-4 underline-offset-8">UNTUK KELUARGA.</span>
              </h1>

              <p className="text-base sm:text-xl font-medium text-[#262626] max-w-xl leading-relaxed pt-2">
                Praktik dokter gigi mandiri drg. Ummi Kaltsum di Cibodas, Tangerang. Melayani konsultasi dan perawatan kesehatan gigi untuk pasien anak-anak hingga dewasa.
              </p>
            </div>

            {/* Action Bar & Direct Credentials */}
            <div className="pt-8 sm:pt-10 space-y-6">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppBooking('concept4_hero_main')}
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 px-6 sm:px-8 py-4 font-mono text-xs sm:text-sm font-black uppercase tracking-wider transition-all shadow-[4px_4px_0px_#0A0A0A] active:translate-x-1 active:translate-y-1 active:shadow-none flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950" />
                  <span>RESERVASI WHATSAPP SEKARANG</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`tel:${clinicConfig.contact.phoneTel}`}
                  onClick={trackPhoneCall}
                  className="bg-white hover:bg-[#F2F2F2] text-[#0A0A0A] border-2 border-[#0A0A0A] px-5 py-4 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{clinicConfig.contact.phoneDisplay}</span>
                </a>
              </div>

              {/* Status Metadata */}
              <div className="pt-4 border-t border-[#0A0A0A]/20 flex flex-wrap items-center gap-y-2 gap-x-6 font-mono text-xs text-[#555555]">
                <div>&bull; Konsultasi &amp; Pemeriksaan Gigi</div>
                <div>&bull; Reservasi Jadwal via WhatsApp</div>
                <div>&bull; Buka Setiap Hari</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Composition with Real Photos */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#F8F9FA]">
            
            {/* Main Treatment Room Photo */}
            <div className="border-2 border-[#0A0A0A] bg-white shadow-[6px_6px_0px_#0A0A0A] overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={clinicConfig.images.treatmentRoom}
                  alt="Ruang periksa dental unit utama drg. Ummi Kaltsum Cibodas"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#0A0A0A] text-white font-mono text-[10px] font-bold px-2.5 py-1 border border-white/20">
                  RUANG PERIKSA UTAMA
                </div>
                <div className="absolute bottom-3 right-3 bg-[#0038FF] text-white font-mono text-[10px] font-bold px-2.5 py-1">
                  DENTAL UNIT
                </div>
              </div>
              <div className="p-3 border-t-2 border-[#0A0A0A] bg-white font-mono text-[11px] text-[#666666] flex justify-between items-center">
                <span>DENTAL UNIT ELEKTRIK</span>
                <span className="text-[#0038FF] font-bold">KAV. PEMDA 3</span>
              </div>
            </div>

            {/* Doctor Portrait Card */}
            <div className="mt-6 border-2 border-[#0A0A0A] bg-white p-4 shadow-[4px_4px_0px_#0A0A0A]">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 border-2 border-[#0A0A0A] shrink-0 overflow-hidden bg-slate-100">
                  <img
                    src={clinicConfig.images.doctorPortrait}
                    alt="drg. Ummi Kaltsum dokter gigi Panunggangan Barat Cibodas Tangerang"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="space-y-1 min-w-0">
                  <div className="inline-flex items-center gap-1 text-[10px] font-mono font-bold bg-[#EBF0FF] text-[#0038FF] px-2 py-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{clinicConfig.doctorCredentials}</span>
                  </div>
                  <h3 className="font-extrabold text-base sm:text-lg uppercase tracking-tight text-[#0A0A0A] truncate">
                    {clinicConfig.doctorName}
                  </h3>
                  <p className="font-mono text-[11px] text-[#666666]">
                    Praktik Mandiri &bull; Anak &amp; Dewasa
                  </p>
                </div>
              </div>
            </div>

            {/* Timetable Overview */}
            <div className="mt-6 font-mono text-xs border border-[#0A0A0A] bg-white p-3.5 space-y-1.5">
              <div className="flex justify-between items-center text-[#666666]">
                <span>{clinicConfig.schedule.monday.days.toUpperCase()}</span>
                <span>{clinicConfig.schedule.monday.hours}</span>
              </div>
              <div className="flex justify-between items-center font-bold text-[#0A0A0A]">
                <span>{clinicConfig.schedule.tuesdayToSaturday.days.toUpperCase()}</span>
                <span className="text-[#0038FF]">{clinicConfig.schedule.tuesdayToSaturday.hours}</span>
              </div>
              <div className="flex justify-between items-center text-[#666666]">
                <span>{clinicConfig.schedule.sunday.days.toUpperCase()}</span>
                <span>{clinicConfig.schedule.sunday.hours}</span>
              </div>
              <div className="pt-1.5 border-t border-slate-200 text-[11px] text-[#0038FF] font-medium flex justify-between items-center">
                <span>MALAM S/D 21.00</span>
                <span className="font-bold">BY RESERVASI</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. TRUST & INFORMATION MATRIX */}
      <section className="border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-white py-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-white/20">
            
            <div className="pt-4 sm:pt-0 sm:pr-6 space-y-2">
              <div className="font-mono text-xs text-[#0038FF] font-bold tracking-widest">[01 / RATING GOOGLE]</div>
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight flex items-center gap-2">
                <span>5.0</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="font-mono text-xs text-slate-300">
                Berdasarkan 55 ulasan di profil Google Maps.
              </p>
            </div>

            <div className="pt-6 sm:pt-0 sm:px-6 space-y-2">
              <div className="font-mono text-xs text-[#0038FF] font-bold tracking-widest">[02 / SISTEM JANJI]</div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase">
                RESERVASI JADWAL
              </div>
              <p className="font-mono text-xs text-slate-300">
                Konfirmasi waktu periksa terlebih dahulu melalui WhatsApp sebelum datang.
              </p>
            </div>

            <div className="pt-6 sm:pt-0 sm:px-6 space-y-2">
              <div className="font-mono text-xs text-[#0038FF] font-bold tracking-widest">[03 / SARANA PRAKTIK]</div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase">
                PERALATAN MEDIS
              </div>
              <p className="font-mono text-xs text-slate-300">
                Peralatan dental elektrik dan penataan instrumen pemeriksaan gigi.
              </p>
            </div>

            <div className="pt-6 sm:pt-0 sm:pl-6 space-y-2">
              <div className="font-mono text-xs text-[#0038FF] font-bold tracking-widest">[04 / LAYANAN]</div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight uppercase">
                ANAK &amp; DEWASA
              </div>
              <p className="font-mono text-xs text-slate-300">
                Pemeriksaan dan tindakan kesehatan gigi untuk seluruh keluarga.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. DOCTOR PROFILE */}
      <section id="profil-bold" className="border-b-2 border-[#0A0A0A] py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual Photography Collage */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border-2 border-[#0A0A0A] bg-white p-3 shadow-[6px_6px_0px_#0A0A0A]">
                <div className="aspect-[4/5] overflow-hidden bg-slate-100 border border-[#0A0A0A]">
                  <img
                    src={clinicConfig.images.doctorPortrait}
                    alt="drg. Ummi Kaltsum dokter gigi di Panunggangan Barat Cibodas Tangerang"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="pt-3 font-mono text-xs flex justify-between items-center text-[#666666]">
                  <span className="font-bold text-[#0A0A0A]">{clinicConfig.doctorName.toUpperCase()}</span>
                  <span className="text-[#0038FF] font-bold">PRAKTIK MANDIRI</span>
                </div>
              </div>

              {/* Patient Care Inset */}
              <div className="border-2 border-[#0A0A0A] bg-[#F8F9FA] p-3 shadow-[4px_4px_0px_#0A0A0A]">
                <div className="aspect-[16/9] overflow-hidden border border-[#0A0A0A]">
                  <img
                    src={clinicConfig.images.doctorPatient}
                    alt="drg. Ummi Kaltsum saat memeriksa pasien anak"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2 font-mono text-[11px] text-[#555555] flex justify-between">
                  <span>[PEMERIKSAAN PASIEN ANAK]</span>
                  <span>PENDAMPINGAN ORANG TUA</span>
                </div>
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="font-mono text-xs uppercase tracking-widest text-[#0038FF] font-bold">
                // DOKTER GIGI KELUARGA &bull; PROFIL PRAKTISI
              </div>

              <h2 className="font-extrabold text-3xl sm:text-5xl uppercase tracking-tighter text-[#0A0A0A] leading-tight">
                PELAYANAN LANGSUNG.<br />
                PENJELASAN TERBUKA.<br />
                <span className="text-[#0038FF]">KOMUNIKASI JELAS.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#333333] leading-relaxed">
                Sebagai dokter gigi praktik mandiri di Panunggangan Barat, Cibodas, drg. Ummi Kaltsum memberikan pelayanan langsung pada setiap pasien yang berkunjung.
              </p>

              <div className="border-l-4 border-[#0038FF] pl-4 py-2 text-sm sm:text-base font-medium text-[#111111] italic bg-[#F0F4FF]">
                &ldquo;Kami meluangkan waktu untuk menjelaskan kondisi gigi dan opsi perawatan yang sesuai sebelum tindakan dilakukan.&rdquo;
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 font-mono text-xs">
                <div className="border-2 border-[#0A0A0A] p-4 bg-white">
                  <div className="text-[#0038FF] font-bold text-sm mb-1">[01] PASIEN ANAK</div>
                  <p className="text-[#555555]">
                    Pemeriksaan dan tindakan gigi anak dengan pendampingan orang tua selama perawatan.
                  </p>
                </div>

                <div className="border-2 border-[#0A0A0A] p-4 bg-white">
                  <div className="text-[#0038FF] font-bold text-sm mb-1">[02] PASIEN DEWASA</div>
                  <p className="text-[#555555]">
                    Konsultasi terbuka mengenai pilihan tindakan sesuai kondisi klinis rongga mulut.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={buildWhatsAppUrl("Hallo Dok, saya ingin konsultasi perawatan gigi keluarga.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppBooking('concept4_profile_wa')}
                  className="inline-flex items-center gap-2 bg-[#0A0A0A] hover:bg-[#0038FF] text-white px-6 py-3.5 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>KONSULTASI DENGAN DOKTER UMMI VIA WA &rarr;</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CLINICAL SERVICES INDEX */}
      <section id="layanan-bold" className="border-b-2 border-[#0A0A0A] py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 pb-4 border-b-2 border-[#0A0A0A] gap-4">
            <div>
              <div className="font-mono text-xs font-bold text-[#0038FF] uppercase tracking-widest mb-1">
                // INDEKS TINDAKAN
              </div>
              <h2 className="font-extrabold text-3xl sm:text-5xl uppercase tracking-tighter text-[#0A0A0A]">
                LAYANAN PERAWATAN GIGI
              </h2>
            </div>
            <div className="font-mono text-xs text-[#555555] font-bold">
              [ {clinicConfig.services.length} KATEGORI LAYANAN ]
            </div>
          </div>

          <div className="divide-y-2 border-y-2 border-[#0A0A0A] bg-white">
            {clinicConfig.services.map((service) => (
              <div
                key={service.id}
                className="py-6 px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-4 items-center group hover:bg-[#F0F4FF] transition-colors"
              >
                <div className="lg:col-span-1 font-mono font-black text-sm text-[#0038FF]">
                  [{service.number}]
                </div>

                <div className="lg:col-span-4 space-y-1">
                  <div className="font-extrabold text-lg sm:text-xl uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#0038FF] transition-colors">
                    {service.title}
                  </div>
                  {service.badge && (
                    <span className="inline-block font-mono text-[10px] uppercase font-bold bg-[#E6EDFF] text-[#0038FF] px-2 py-0.5 border border-[#0038FF]/30">
                      {service.badge}
                    </span>
                  )}
                </div>

                <div className="lg:col-span-5 font-mono text-xs sm:text-sm text-[#444444] leading-relaxed">
                  {service.description}
                </div>

                <div className="lg:col-span-2 text-left lg:text-right">
                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppBooking('concept4_service', service.title)}
                    className="inline-flex items-center gap-1.5 bg-[#0A0A0A] group-hover:bg-[#25D366] group-hover:text-slate-950 text-white font-mono text-xs font-bold px-4 py-2 uppercase tracking-wider transition-all"
                  >
                    <span>RESERVASI</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Note */}
          <div className="mt-8 p-4 border-2 border-[#0A0A0A] bg-white font-mono text-xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-[#333333]">
              <span className="font-bold text-[#0038FF] mr-2">[INFO]</span>
              Rincian tindakan dan penanganan disesuaikan dengan kondisi hasil pemeriksaan klinis langsung.
            </div>
            <a
              href={buildWhatsAppUrl("Hallo Dok, saya ingin menanyakan jadwal periksa gigi.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppBooking('concept4_info_wa')}
              className="text-[#0038FF] font-bold hover:underline shrink-0"
            >
              TANYAKAN JADWAL VIA WA &rarr;
            </a>
          </div>

        </div>
      </section>

      {/* 7. REAL FACILITIES DOCUMENTATION */}
      <section id="fasilitas-bold" className="border-b-2 border-[#0A0A0A] py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-10 pb-4 border-b-2 border-[#0A0A0A] gap-4">
            <div>
              <div className="font-mono text-xs font-bold text-[#0038FF] uppercase tracking-widest mb-1">
                // FASILITAS PRAKTIK
              </div>
              <h2 className="font-extrabold text-3xl sm:text-5xl uppercase tracking-tighter text-[#0A0A0A]">
                DOKUMENTASI FOTO PRAKTIK
              </h2>
            </div>
            <div className="font-mono text-xs text-[#555555] font-bold">
              [ RUANG PERIKSA &amp; PERALATAN ]
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Facility 1: Treatment Room */}
            <div className="border-2 border-[#0A0A0A] bg-white shadow-[4px_4px_0px_#0A0A0A] flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] overflow-hidden border-b-2 border-[#0A0A0A] bg-slate-100">
                  <img
                    src={clinicConfig.images.treatmentRoom}
                    alt="Ruang periksa dental unit utama drg. Ummi Kaltsum"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-1.5 font-mono text-xs">
                  <div className="font-extrabold text-sm text-[#0038FF] uppercase">[01] RUANG PERIKSA</div>
                  <div className="font-bold text-[#0A0A0A]">Dental Unit Elektrik</div>
                  <p className="text-[#666666] leading-relaxed">
                    Unit dental untuk pemeriksaan dan tindakan perawatan gigi pasien.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-[#F8F9FA] border-t border-[#0A0A0A] font-mono text-[10px] text-[#555555]">
                KAV. PEMDA 3 &bull; PANUNGGANGAN
              </div>
            </div>

            {/* Facility 2: Dental Chair */}
            <div className="border-2 border-[#0A0A0A] bg-white shadow-[4px_4px_0px_#0A0A0A] flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] overflow-hidden border-b-2 border-[#0A0A0A] bg-slate-100">
                  <img
                    src={clinicConfig.images.dentalChair}
                    alt="Dental chair kursi periksa pasien"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-1.5 font-mono text-xs">
                  <div className="font-extrabold text-sm text-[#0038FF] uppercase">[02] DENTAL CHAIR</div>
                  <div className="font-bold text-[#0A0A0A]">Kursi Periksa Pasien</div>
                  <p className="text-[#666666] leading-relaxed">
                    Unit kursi periksa dental untuk posisi nyaman pasien saat perawatan.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-[#F8F9FA] border-t border-[#0A0A0A] font-mono text-[10px] text-[#555555]">
                UNIT KURSI PERIKSA
              </div>
            </div>

            {/* Facility 3: Equipment */}
            <div className="border-2 border-[#0A0A0A] bg-white shadow-[4px_4px_0px_#0A0A0A] flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] overflow-hidden border-b-2 border-[#0A0A0A] bg-slate-100">
                  <img
                    src={clinicConfig.images.sterilization}
                    alt="Peralatan dan instrumen praktik dokter gigi"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-1.5 font-mono text-xs">
                  <div className="font-extrabold text-sm text-[#0038FF] uppercase">[03] PERALATAN</div>
                  <div className="font-bold text-[#0A0A0A]">Instrumen Praktik</div>
                  <p className="text-[#666666] leading-relaxed">
                    Area penataan dan penyiapan peralatan instrumen perawatan gigi.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-[#F8F9FA] border-t border-[#0A0A0A] font-mono text-[10px] text-[#555555]">
                PENATAAN INSTRUMEN
              </div>
            </div>

            {/* Facility 4: Consultation Table */}
            <div className="border-2 border-[#0A0A0A] bg-white shadow-[4px_4px_0px_#0A0A0A] flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] overflow-hidden border-b-2 border-[#0A0A0A] bg-slate-100">
                  <img
                    src={clinicConfig.images.waitingArea}
                    alt="Meja konsultasi dan rekam medis pasien drg. Ummi Kaltsum"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-1.5 font-mono text-xs">
                  <div className="font-extrabold text-sm text-[#0038FF] uppercase">[04] KONSULTASI</div>
                  <div className="font-bold text-[#0A0A0A]">Meja Konsultasi</div>
                  <p className="text-[#666666] leading-relaxed">
                    Area untuk konsultasi kondisi gigi serta pencatatan kunjungan pasien.
                  </p>
                </div>
              </div>
              <div className="p-3 bg-[#F8F9FA] border-t border-[#0A0A0A] font-mono text-[10px] text-[#555555]">
                KONSULTASI &bull; ADMINISTRASI
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. SCHEDULE & EVENING APPOINTMENT POLICY */}
      <section id="jadwal-bold" className="border-b-2 border-[#0A0A0A] py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            
            {/* Left Column: Schedule Table */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="font-mono text-xs font-bold text-[#0038FF] uppercase tracking-widest mb-1">
                  // WAKTU PELAYANAN
                </div>
                <h2 className="font-extrabold text-3xl sm:text-5xl uppercase tracking-tighter text-[#0A0A0A]">
                  JADWAL PRAKTIK
                </h2>
              </div>

              <div className="border-2 border-[#0A0A0A] bg-white divide-y-2 border-[#0A0A0A] font-mono text-xs sm:text-sm shadow-[4px_4px_0px_#0A0A0A]">
                
                {/* Monday */}
                <div className="p-4 sm:p-5 flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-[#0A0A0A] block">{clinicConfig.schedule.monday.days}</span>
                    <span className="text-[11px] text-[#666666]">{clinicConfig.schedule.monday.note}</span>
                  </div>
                  <span className="bg-[#EBF0FF] text-[#0038FF] font-bold px-3 py-1 border border-[#0038FF]/30">
                    {clinicConfig.schedule.monday.hours}
                  </span>
                </div>

                {/* Tuesday to Saturday */}
                <div className="p-4 sm:p-5 flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-[#0A0A0A] block">{clinicConfig.schedule.tuesdayToSaturday.days}</span>
                    <span className="text-[11px] text-[#666666]">{clinicConfig.schedule.tuesdayToSaturday.note}</span>
                  </div>
                  <span className="bg-[#EBF0FF] text-[#0038FF] font-bold px-3 py-1 border border-[#0038FF]/30">
                    {clinicConfig.schedule.tuesdayToSaturday.hours}
                  </span>
                </div>

                {/* Sunday */}
                <div className="p-4 sm:p-5 flex justify-between items-center">
                  <div>
                    <span className="font-extrabold text-[#0A0A0A] block">{clinicConfig.schedule.sunday.days}</span>
                    <span className="text-[11px] text-[#666666]">{clinicConfig.schedule.sunday.note}</span>
                  </div>
                  <span className="bg-[#EBF0FF] text-[#0038FF] font-bold px-3 py-1 border border-[#0038FF]/30">
                    {clinicConfig.schedule.sunday.hours}
                  </span>
                </div>

                {/* Evening Appointment Policy */}
                <div className="p-4 sm:p-5 flex justify-between items-center bg-[#F0FDF4] text-emerald-900 border-l-4 border-l-emerald-500">
                  <div>
                    <span className="font-extrabold block">MALAM S/D 21.00 WIB</span>
                    <span className="text-[11px] text-emerald-700">Dengan reservasi terlebih dahulu</span>
                  </div>
                  <span className="bg-emerald-600 text-white font-bold px-3 py-1 text-xs">
                    BY APPOINTMENT ONLY
                  </span>
                </div>

              </div>

              {/* Exact Preferred Evening Notice Banner */}
              <div className="border-2 border-[#0A0A0A] bg-white p-5 sm:p-6 shadow-[4px_4px_0px_#0A0A0A] space-y-3">
                <div className="flex items-center gap-2 text-[#0038FF] font-mono text-xs font-bold uppercase">
                  <Clock className="w-4 h-4" />
                  <span>{clinicConfig.schedule.eveningNotice.title}</span>
                </div>

                <p className="text-sm font-semibold text-[#0A0A0A] leading-relaxed">
                  {clinicConfig.schedule.eveningNotice.description}
                </p>

                <p className="font-mono text-xs text-[#555555] bg-[#F8F9FA] p-3 border-l-2 border-[#0A0A0A]">
                  {clinicConfig.schedule.eveningNotice.policy}
                </p>

                <div className="pt-2">
                  <a
                    href={buildWhatsAppUrl(clinicConfig.schedule.eveningNotice.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppBooking('concept4_evening_notice')}
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-mono text-xs font-bold px-4 py-2.5 uppercase tracking-wider transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950" />
                    <span>{clinicConfig.schedule.eveningNotice.buttonText} &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Location & Physical Access */}
            <div id="lokasi-bold" className="lg:col-span-6 space-y-6">
              <div>
                <div className="font-mono text-xs font-bold text-[#0038FF] uppercase tracking-widest mb-1">
                  // PANDUAN KEDATANGAN
                </div>
                <h2 className="font-extrabold text-3xl sm:text-5xl uppercase tracking-tighter text-[#0A0A0A]">
                  LOKASI RUMAH PRAKTIK
                </h2>
              </div>

              {/* Address Card */}
              <div className="border-2 border-[#0A0A0A] p-5 sm:p-6 bg-white shadow-[4px_4px_0px_#0A0A0A] space-y-3 font-mono text-xs sm:text-sm">
                <div className="font-extrabold text-base text-[#0A0A0A]">
                  {clinicConfig.location.street}
                </div>
                <div className="text-[#555555]">
                  {clinicConfig.location.neighborhood}, {clinicConfig.location.district}
                </div>
                <div className="text-[#555555]">
                  {clinicConfig.location.city}, {clinicConfig.location.province} {clinicConfig.location.postalCode}
                </div>
                <div className="pt-2 border-t border-slate-200 text-[#0038FF] font-bold">
                  PATOKAN: {clinicConfig.location.landmark.toUpperCase()}
                </div>
              </div>

              {/* Real Signage Exterior Photo */}
              <div className="border-2 border-[#0A0A0A] bg-white shadow-[4px_4px_0px_#0A0A0A] overflow-hidden">
                <div className="relative aspect-[16/9] bg-slate-100">
                  <img
                    src={clinicConfig.images.practiceExterior}
                    alt="Papan nama resmi Praktek Dokter Gigi drg. Ummi Kaltsum di Jl. Kav. Pemda 3 Cibodas"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#0A0A0A] text-white font-mono text-[10px] font-bold px-2.5 py-1">
                    PAPAN NAMA RESMI PRAKTIK
                  </div>
                </div>
                <div className="p-3 border-t-2 border-[#0A0A0A] font-mono text-[11px] text-[#666666] flex justify-between items-center">
                  <span>KENALI RUMAH DARI PLANG DEPAN</span>
                  <span className="text-[#0038FF] font-bold">JL. KAV. PEMDA 3</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={clinicConfig.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackMapsClick('concept4_maps_btn')}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0A0A0A] hover:bg-[#0038FF] text-white px-6 py-4 font-mono text-xs font-bold uppercase tracking-wider transition-colors text-center"
                >
                  <MapPin className="w-4 h-4 text-rose-500" />
                  <span>BUKA DI GOOGLE MAPS &rarr;</span>
                </a>

                <a
                  href={buildWhatsAppUrl("Halo Dok, boleh minta panduan arah rute menuju lokasi praktik drg. Ummi?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppBooking('concept4_directions_wa')}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F2F2F2] text-[#0A0A0A] border-2 border-[#0A0A0A] px-5 py-4 font-mono text-xs font-bold uppercase tracking-wider transition-colors text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>TANYA ARAH VIA WA</span>
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 9. FAQ ACCORDION (LOCAL CLARITY) */}
      <section className="border-b-2 border-[#0A0A0A] py-16 sm:py-20 px-4 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-10 pb-4 border-b-2 border-[#0A0A0A]">
            <div className="font-mono text-xs font-bold text-[#0038FF] uppercase tracking-widest mb-1">
              // INFORMASI PASIEN
            </div>
            <h2 className="font-extrabold text-3xl sm:text-5xl uppercase tracking-tighter text-[#0A0A0A]">
              PERTANYAAN UMUM
            </h2>
          </div>

          <div className="divide-y-2 border-y-2 border-[#0A0A0A]">
            {clinicConfig.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="transition-colors">
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full py-5 px-3 flex justify-between items-center text-left hover:text-[#0038FF] transition-colors group"
                  >
                    <span className="font-extrabold text-base sm:text-lg uppercase tracking-tight text-[#0A0A0A] group-hover:text-[#0038FF]">
                      {faq.question}
                    </span>
                    <span className="font-mono text-xs text-[#0038FF] ml-4 shrink-0 font-bold">
                      {isOpen ? '[-]' : '[+]'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-5 px-3 text-sm text-[#444444] font-mono leading-relaxed bg-[#F8F9FA] p-4 border-l-4 border-[#0038FF] mb-2">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="py-12 px-4 sm:px-8 lg:px-12 bg-[#0A0A0A] text-white font-mono text-xs">
        <div className="max-w-7xl mx-auto space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/20">
            <div className="md:col-span-5 space-y-3">
              <div className="font-extrabold text-xl sm:text-2xl text-white tracking-tight uppercase">
                {clinicConfig.clinicName}
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed">
                Praktik dokter gigi mandiri di Panunggangan Barat, Cibodas, Kota Tangerang. Melayani konsultasi dan pemeriksaan kesehatan gigi untuk pasien anak dan dewasa.
              </p>
            </div>

            <div className="md:col-span-4 space-y-2 text-slate-300">
              <div className="font-bold text-white uppercase text-xs tracking-wider mb-2">
                [JADWAL PRAKTIK]
              </div>
              <div>{clinicConfig.schedule.monday.days}: {clinicConfig.schedule.monday.hours}</div>
              <div>{clinicConfig.schedule.tuesdayToSaturday.days}: {clinicConfig.schedule.tuesdayToSaturday.hours}</div>
              <div>{clinicConfig.schedule.sunday.days}: {clinicConfig.schedule.sunday.hours}</div>
              <div className="text-emerald-400 font-bold">Jadwal s/d 21.00: Dengan reservasi</div>
            </div>

            <div className="md:col-span-3 space-y-2 text-slate-300">
              <div className="font-bold text-white uppercase text-xs tracking-wider mb-2">
                [KONTAK &amp; LOKASI]
              </div>
              <div>WA: {clinicConfig.contact.phoneDisplay}</div>
              <div className="text-slate-400">{clinicConfig.location.neighborhood}, {clinicConfig.location.city}</div>
              <a
                href={clinicConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMapsClick('concept4_footer_maps')}
                className="inline-flex items-center gap-1 text-[#38BDF8] hover:underline pt-1"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
            <div>&copy; {new Date().getFullYear()} {clinicConfig.clinicName}. Kota Tangerang.</div>
            <div className="flex items-center gap-4">
              <span>5.0 GOOGLE RATING ({clinicConfig.googleRating.reviewCount} ULASAN)</span>
              <span>&bull;</span>
              <span>PANUNGGANGAN BARAT, CIBODAS</span>
            </div>
          </div>

        </div>
      </footer>

      {/* 11. MOBILE STICKY FLOATING ACTION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-md border-t-2 border-white/20 p-3 flex gap-2">
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppBooking('concept4_mobile_sticky')}
          className="flex-1 bg-[#25D366] text-slate-950 py-3 px-4 font-mono font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-xs"
        >
          <MessageCircle className="w-4 h-4 fill-slate-950" />
          <span>RESERVASI WHATSAPP</span>
        </a>

        <a
          href={`tel:${clinicConfig.contact.phoneTel}`}
          onClick={trackPhoneCall}
          className="bg-white text-[#0A0A0A] py-3 px-4 font-mono font-bold text-xs uppercase flex items-center justify-center rounded-xs"
          aria-label="Telepon Praktik"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
};
