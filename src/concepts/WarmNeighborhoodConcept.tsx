import React, { useState } from 'react';
import {
  Clock,
  Compass,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  UserCheck,
  ChevronDown,
  ArrowRight,
  Baby,
  Smile,
  ExternalLink
} from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackWhatsAppBooking, trackPhoneCall, trackMapsClick } from '../utils/analytics';

export const WarmNeighborhoodConcept: React.FC = () => {
  const [openService, setOpenService] = useState<string>('pediatrik');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleService = (id: string) => {
    setOpenService(openService === id ? '' : id);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-[#FDF9F3] text-[#1C1C18] font-['Plus_Jakarta_Sans',sans-serif] selection:bg-[#FFDBD0] selection:text-[#3A0A00] pb-24 md:pb-0">
      
      {/* 1. TOP COMMUNITY BANNER */}
      <div className="bg-[#F7F3ED] border-b border-[#E6DDD2] py-2 px-4 sm:px-8 text-xs text-[#44474D]">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#97472E]"></span>
            <span className="font-semibold text-[#1C1C18]">Praktik Dokter Gigi Lingkungan</span>
            <span className="text-[#C5C6CD]">&bull;</span>
            <span>Panunggangan Barat, Cibodas</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1 text-[#97472E] font-medium">
              <Star className="w-3.5 h-3.5 fill-[#97472E]" />
              <span className="font-bold text-[#1C1C18]">5.0</span>
              <span className="text-[#44474D]">({clinicConfig.googleRating.reviewCount} ulasan Google)</span>
            </div>
            <span className="hidden sm:inline text-[#C5C6CD]">&bull;</span>
            <span className="hidden sm:inline font-medium text-[#1C1C18]">Kota Tangerang</span>
          </div>
        </div>
      </div>

      {/* 2. HEADER */}
      <header className="sticky top-0 z-40 bg-[#FDF9F3]/90 backdrop-blur-md border-b border-[#E6DDD2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F1EDE7] border border-[#E6DDD2] flex items-center justify-center text-[#97472E]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <a href="#" className="font-['Newsreader',serif] font-medium text-xl sm:text-2xl text-[#000B21] tracking-tight hover:text-[#97472E] transition-colors block leading-tight">
                drg. Ummi Kaltsum
              </a>
              <span className="text-xs text-[#44474D] font-medium">
                Praktik Dokter Gigi Mandiri &bull; Cibodas
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm text-[#44474D] font-medium">
            <a href="#tentang-dokter" className="hover:text-[#000B21] transition-colors">Tentang Dokter</a>
            <a href="#layanan-keluarga" className="hover:text-[#000B21] transition-colors">Layanan &amp; Perawatan</a>
            <a href="#suasana-fasilitas" className="hover:text-[#000B21] transition-colors">Ruang Praktik</a>
            <a href="#jadwal-kedatangan" className="hover:text-[#000B21] transition-colors">Jadwal</a>
            <a href="#lokasi-kavling" className="hover:text-[#000B21] transition-colors">Lokasi</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppBooking('concept5_header')}
              className="bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 px-4 sm:px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all shadow-[0_4px_16px_rgba(37,211,102,0.2)] flex items-center gap-2 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950" />
              <span>Janji Temu WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* 3. HERO: WARM EDITORIAL NEIGHBORHOOD ANCHOR */}
      <section className="relative overflow-hidden pt-8 sm:pt-14 pb-14 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Humanist Narrative */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EDE7] border border-[#E6DDD2] text-xs text-[#44474D] shadow-xs">
                <span className="flex text-[#97472E]">
                  <Star className="w-4 h-4 fill-current" />
                </span>
                <span className="font-bold text-[#000B21]">5.0 di Google</span>
                <span className="text-[#C5C6CD]">&bull;</span>
                <span>55 ulasan pasien Cibodas</span>
              </div>

              <h1 className="font-['Newsreader',serif] font-normal text-4xl sm:text-5xl lg:text-6xl text-[#000B21] leading-[1.12] tracking-tight">
                Perawatan gigi yang nyaman, <br className="hidden sm:inline" />
                <span className="italic text-[#97472E]">dekat dari rumah.</span>
              </h1>

              <p className="text-base sm:text-lg text-[#44474D] max-w-xl leading-relaxed">
                Praktik dokter gigi mandiri di Kavling Pemda 3, Panunggangan Barat. Kami melayani pemeriksaan dan perawatan gigi untuk seluruh anggota keluarga—anak-anak, dewasa, hingga lansia.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={buildWhatsAppUrl("Halo drg. Ummi, saya ingin konsultasi dan membuat jadwal perawatan gigi keluarga.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppBooking('concept5_hero_wa')}
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 px-6 sm:px-7 py-3.5 rounded-full font-bold text-sm sm:text-base transition-all shadow-[0_4px_16px_rgba(37,211,102,0.25)] flex items-center justify-center gap-2.5 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-slate-950" />
                  <span>Konsultasi &amp; Reservasi WhatsApp</span>
                </a>

                <a
                  href="#lokasi-kavling"
                  className="bg-[#F1EDE7] hover:bg-[#EBE8E2] text-[#000B21] border border-[#E6DDD2] px-5 py-3.5 rounded-full font-semibold text-sm transition-all flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#97472E]" />
                  <span>Petunjuk Kavling Pemda 3</span>
                </a>
              </div>

              {/* Micro Trust Highlights */}
              <div className="pt-6 border-t border-[#E6DDD2] grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#97472E] font-bold block mb-0.5">Layanan Janji</span>
                  <span className="font-['Newsreader',serif] text-xl font-semibold text-[#000B21] block">Reservasi</span>
                  <span className="text-xs text-[#44474D]">Jadwal terkonfirmasi via WhatsApp</span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#97472E] font-bold block mb-0.5">Suasana</span>
                  <span className="font-['Newsreader',serif] text-xl font-semibold text-[#000B21] block">Praktik Mandiri</span>
                  <span className="text-xs text-[#44474D]">Pemeriksaan langsung dokter gigi</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#97472E] font-bold block mb-0.5">Wilayah</span>
                  <span className="font-['Newsreader',serif] text-xl font-semibold text-[#000B21] block">Cibodas</span>
                  <span className="text-xs text-[#44474D]">Akses mudah dari Palem Semi</span>
                </div>
              </div>

            </div>

            {/* Right Column: Tactile Photo Framing */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Doctor Portrait Card */}
                <div className="rounded-3xl overflow-hidden bg-[#F1EDE7] p-3.5 border border-[#E6DDD2] shadow-[0_8px_30px_rgba(0,11,33,0.06)]">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#EBE8E2]">
                    <img
                      src={clinicConfig.images.doctorPortrait}
                      alt="drg. Ummi Kaltsum dokter gigi di Cibodas Tangerang"
                      className="w-full h-full object-cover object-top"
                    />
                    
                    {/* Bottom Caption Pill */}
                    <div className="absolute bottom-3 left-3 right-3 bg-[#000B21]/80 backdrop-blur-md p-3.5 rounded-xl text-white flex justify-between items-center">
                      <div>
                        <p className="font-['Newsreader',serif] text-lg font-medium tracking-tight">drg. Ummi Kaltsum</p>
                        <p className="text-xs text-slate-300">Dokter Gigi Praktik Mandiri</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-700/50 text-white border border-white/20 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-emerald-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Overlapping Clinic Room Photo Frame */}
                <div className="absolute -bottom-6 -left-6 w-48 sm:w-56 rounded-2xl overflow-hidden bg-white p-2.5 border border-[#E6DDD2] shadow-xl hidden sm:block">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#F1EDE7]">
                    <img
                      src={clinicConfig.images.treatmentRoom}
                      alt="Ruang periksa dental unit drg. Ummi Kaltsum"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-2 px-1">
                    <p className="font-semibold text-xs text-[#000B21]">Ruang Periksa Utama</p>
                    <p className="text-[11px] text-[#44474D]">Dental unit &amp; pencahayaan periksa</p>
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute -top-3 -right-3 bg-[#FFDBD0] text-[#3A0A00] border border-[#FFB59F] px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 text-xs font-bold">
                  <MapPin className="w-4 h-4 text-[#97472E]" />
                  <span>Kota Tangerang</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CLINIC PHILOSOPHY & DOCTOR PROFILE */}
      <section id="tentang-dokter" className="bg-[#F7F3ED] py-16 sm:py-20 border-y border-[#E6DDD2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#97472E] font-bold">
                <span className="w-2 h-2 rounded-full bg-[#97472E]"></span>
                <span>Praktik Pribadi &bull; Panunggangan Barat</span>
              </div>

              <h2 className="font-['Newsreader',serif] text-3xl sm:text-4xl text-[#000B21] leading-tight">
                Pemeriksaan dan perawatan kesehatan gigi keluarga.
              </h2>

              <p className="text-sm sm:text-base text-[#44474D] leading-relaxed">
                Sebagai dokter gigi praktik mandiri, drg. Ummi Kaltsum memberikan pelayanan langsung bagi setiap pasien. Kami mengutamakan penjelasan kondisi gigi secara terbuka sebelum tindakan dilakukan.
              </p>

              <div className="p-4 rounded-2xl bg-[#FDF9F3] border border-[#E6DDD2] flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FAF4EB] text-[#97472E] flex items-center justify-center shrink-0 mt-0.5">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div className="text-xs sm:text-sm text-[#1C1C18]">
                  <strong className="text-[#000B21] block mb-0.5">Pelayanan Mandiri &amp; Personal</strong>
                  Pemeriksaan dan tindakan klinis dilakukan langsung oleh drg. Ummi Kaltsum sesuai janji temu yang telah disepakati.
                </div>
              </div>
            </div>

            {/* Generational Care Pillars */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 rounded-2xl bg-[#FDF9F3] border border-[#E6DDD2] shadow-xs flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#F7F3ED] flex items-center justify-center text-[#97472E]">
                    <Baby className="w-5 h-5" />
                  </div>
                  <h3 className="font-['Newsreader',serif] text-lg font-semibold text-[#000B21]">
                    Pasien Anak
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474D] leading-relaxed">
                    Pemeriksaan dan perawatan kesehatan gigi anak dengan pendampingan orang tua selama konsultasi.
                  </p>
                </div>
                <span className="mt-4 text-xs font-semibold text-[#97472E] flex items-center gap-1">
                  <span>Pemeriksaan gigi anak</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#FDF9F3] border border-[#E6DDD2] shadow-xs flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#F7F3ED] flex items-center justify-center text-[#97472E]">
                    <Smile className="w-5 h-5" />
                  </div>
                  <h3 className="font-['Newsreader',serif] text-lg font-semibold text-[#000B21]">
                    Pasien Dewasa &amp; Lansia
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474D] leading-relaxed">
                    Pemeriksaan karang gigi, penambalan komposit, perawatan saluran akar, serta pembuatan gigi tiruan lepasan.
                  </p>
                </div>
                <span className="mt-4 text-xs font-semibold text-[#97472E] flex items-center gap-1">
                  <span>Restorasi &amp; gigi tiruan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#FDF9F3] border border-[#E6DDD2] shadow-xs flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#F7F3ED] flex items-center justify-center text-[#97472E]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="font-['Newsreader',serif] text-lg font-semibold text-[#000B21]">
                    Peralatan Praktik
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474D] leading-relaxed">
                    Peralatan dental elektrik dan penataan instrumen pemeriksaan gigi di ruang periksa.
                  </p>
                </div>
                <span className="mt-4 text-xs font-semibold text-[#97472E] flex items-center gap-1">
                  <span>Sarana ruang periksa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

              <div className="p-5 rounded-2xl bg-[#FDF9F3] border border-[#E6DDD2] shadow-xs flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-full bg-[#F7F3ED] flex items-center justify-center text-[#97472E]">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h3 className="font-['Newsreader',serif] text-lg font-semibold text-[#000B21]">
                    Komunikasi Terbuka
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474D] leading-relaxed">
                    Rencana tindakan dan opsi penanganan diterangkan terlebih dahulu sebelum prosedur dimulai.
                  </p>
                </div>
                <span className="mt-4 text-xs font-semibold text-[#97472E] flex items-center gap-1">
                  <span>Konsultasi kondisi gigi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 5. TACTILE CLINICAL SERVICES ACCORDION */}
      <section id="layanan-keluarga" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs uppercase tracking-wider text-[#97472E] font-bold block mb-1">
              Perawatan Gigi
            </span>
            <h2 className="font-['Newsreader',serif] text-3xl sm:text-4xl text-[#000B21]">
              Layanan Kesehatan Gigi Keluarga
            </h2>
            <p className="text-sm sm:text-base text-[#44474D] mt-2">
              Pelayanan konsultasi dan tindakan perawatan gigi bersama drg. Ummi Kaltsum.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Interactive Accordion Services */}
            <div className="lg:col-span-7 space-y-3">
              {clinicConfig.services.map((service) => {
                const isOpen = openService === service.id;
                return (
                  <div
                    key={service.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-[#F7F3ED] border-[#97472E]/40 shadow-sm'
                        : 'bg-[#FDF9F3] border-[#E6DDD2] hover:bg-[#F7F3ED]/60'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleService(service.id)}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="font-['Newsreader',serif] text-xl font-bold text-[#97472E] w-7 shrink-0">
                          {service.number}
                        </span>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-base sm:text-lg text-[#000B21]">
                              {service.title}
                            </span>
                            {service.badge && (
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FAF4EB] text-[#97472E] border border-[#E6DDD2]">
                                {service.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-xs text-[#44474D] block mt-0.5">
                            {service.shortTitle}
                          </span>
                        </div>
                      </div>

                      <ChevronDown
                        className={`w-5 h-5 text-[#97472E] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#44474D] leading-relaxed border-t border-[#E6DDD2]/60">
                        <p className="mb-4">{service.description}</p>
                        <a
                          href={buildWhatsAppUrl(service.whatsappMessage)}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => trackWhatsAppBooking('concept5_service', service.title)}
                          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-bold px-4 py-2 rounded-full text-xs shadow-xs transition-transform active:scale-95"
                        >
                          <MessageCircle className="w-3.5 h-3.5 fill-slate-950" />
                          <span>Tanyakan Jadwal {service.shortTitle} via WA</span>
                        </a>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right: Pediatric Spotlight Feature Card */}
            <div className="lg:col-span-5 sticky top-28">
              <div className="rounded-3xl bg-[#F7F3ED] border border-[#E6DDD2] p-5 shadow-sm space-y-4">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-[#E6DDD2]">
                  <img
                    src={clinicConfig.images.doctorPatient}
                    alt="drg. Ummi Kaltsum sedang memeriksa pasien anak"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#97472E] font-bold uppercase tracking-wider">
                    <Baby className="w-4 h-4" />
                    <span>Pemeriksaan Gigi Anak</span>
                  </div>
                  <h3 className="font-['Newsreader',serif] text-xl font-medium text-[#000B21]">
                    Pemeriksaan Gigi Anak dengan Pendampingan Orang Tua
                  </h3>
                  <p className="text-xs sm:text-sm text-[#44474D] leading-relaxed">
                    Pemeriksaan kondisi gigi susu, pencegahan gigi berlubang, dan penambalan gigi anak didampingi orang tua di samping kursi periksa.
                  </p>
                </div>

                <div className="pt-2">
                  <a
                    href={buildWhatsAppUrl("Halo drg. Ummi, saya ingin konsultasi perawatan gigi anak saya.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppBooking('concept5_pediatric_card')}
                    className="w-full bg-[#000B21] hover:bg-[#152238] text-white py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Konsultasi Gigi Anak via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. ATMOSPHERE & REAL PRACTICE FACILITIES */}
      <section id="suasana-fasilitas" className="bg-[#F7F3ED] py-16 sm:py-20 border-y border-[#E6DDD2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-wider text-[#97472E] font-bold block mb-1">
              Dokumentasi Sarana Praktik
            </span>
            <h2 className="font-['Newsreader',serif] text-3xl sm:text-4xl text-[#000B21]">
              Sarana Ruang Pemeriksaan
            </h2>
            <p className="text-sm text-[#44474D] mt-2">
              Foto asli sarana perawatan di rumah praktik drg. Ummi Kaltsum, Kavling Pemda 3.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Facility 1 */}
            <div className="bg-[#FDF9F3] rounded-2xl overflow-hidden border border-[#E6DDD2] shadow-xs flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#EBE8E2]">
                  <img
                    src={clinicConfig.images.treatmentRoom}
                    alt="Ruang periksa utama drg. Ummi Kaltsum"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#97472E]">Ruang Periksa Utama</span>
                  <h4 className="font-['Newsreader',serif] text-base font-semibold text-[#000B21]">Dental Unit Elektrik</h4>
                  <p className="text-xs text-[#44474D] leading-relaxed">
                    Unit dental untuk pemeriksaan dan tindakan perawatan gigi pasien.
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4 pt-1 text-[11px] text-[#75777E]">
                Cibodas, Tangerang
              </div>
            </div>

            {/* Facility 2 */}
            <div className="bg-[#FDF9F3] rounded-2xl overflow-hidden border border-[#E6DDD2] shadow-xs flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#EBE8E2]">
                  <img
                    src={clinicConfig.images.dentalChair}
                    alt="Kursi periksa dental chair"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#97472E]">Kursi Periksa</span>
                  <h4 className="font-['Newsreader',serif] text-base font-semibold text-[#000B21]">Dental Chair</h4>
                  <p className="text-xs text-[#44474D] leading-relaxed">
                    Unit kursi periksa dental untuk kenyamanan posisi pasien saat perawatan.
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4 pt-1 text-[11px] text-[#75777E]">
                Posisi Nyaman
              </div>
            </div>

            {/* Facility 3 */}
            <div className="bg-[#FDF9F3] rounded-2xl overflow-hidden border border-[#E6DDD2] shadow-xs flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#EBE8E2]">
                  <img
                    src={clinicConfig.images.waitingArea}
                    alt="Meja konsultasi dan rekam medis pasien"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#97472E]">Konsultasi</span>
                  <h4 className="font-['Newsreader',serif] text-base font-semibold text-[#000B21]">Meja Konsultasi</h4>
                  <p className="text-xs text-[#44474D] leading-relaxed">
                    Area untuk konsultasi kondisi gigi serta pencatatan kunjungan pasien.
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4 pt-1 text-[11px] text-[#75777E]">
                Konsultasi Pasien
              </div>
            </div>

            {/* Facility 4 */}
            <div className="bg-[#FDF9F3] rounded-2xl overflow-hidden border border-[#E6DDD2] shadow-xs flex flex-col justify-between">
              <div>
                <div className="aspect-[4/3] overflow-hidden bg-[#EBE8E2]">
                  <img
                    src={clinicConfig.images.sterilization}
                    alt="Peralatan instrumen praktik dokter gigi"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#97472E]">Peralatan</span>
                  <h4 className="font-['Newsreader',serif] text-base font-semibold text-[#000B21]">Instrumen Praktik</h4>
                  <p className="text-xs text-[#44474D] leading-relaxed">
                    Area penataan dan penyiapan peralatan instrumen perawatan gigi.
                  </p>
                </div>
              </div>
              <div className="px-4 pb-4 pt-1 text-[11px] text-[#75777E]">
                Penataan Instrumen
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. SCHEDULE & EVENING APPOINTMENT NOTICE */}
      <section id="jadwal-kedatangan" className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-wider text-[#97472E] font-bold block mb-1">
              Waktu Pelayanan
            </span>
            <h2 className="font-['Newsreader',serif] text-3xl sm:text-4xl text-[#000B21]">
              Jadwal Praktik &amp; Reservasi
            </h2>
            <p className="text-sm text-[#44474D] mt-2">
              Harap membuat janji terlebih dahulu melalui WhatsApp agar jadwal Anda terkonfirmasi.
            </p>
          </div>

          <div className="bg-[#F7F3ED] rounded-3xl p-6 sm:p-8 border border-[#E6DDD2] shadow-xs space-y-6">
            
            {/* Timetable Table */}
            <div className="divide-y divide-[#E6DDD2] text-sm">
              <div className="py-3.5 flex justify-between items-center">
                <div>
                  <span className="font-bold text-[#000B21] block sm:inline">{clinicConfig.schedule.monday.days}</span>
                  <span className="text-xs text-[#75777E] sm:ml-2">({clinicConfig.schedule.monday.note})</span>
                </div>
                <span className="font-semibold text-[#000B21] bg-[#FDF9F3] px-3 py-1 rounded-full border border-[#E6DDD2]">
                  {clinicConfig.schedule.monday.hours}
                </span>
              </div>

              <div className="py-3.5 flex justify-between items-center">
                <div>
                  <span className="font-bold text-[#000B21] block sm:inline">{clinicConfig.schedule.tuesdayToSaturday.days}</span>
                  <span className="text-xs text-[#75777E] sm:ml-2">({clinicConfig.schedule.tuesdayToSaturday.note})</span>
                </div>
                <span className="font-semibold text-[#000B21] bg-[#FDF9F3] px-3 py-1 rounded-full border border-[#E6DDD2]">
                  {clinicConfig.schedule.tuesdayToSaturday.hours}
                </span>
              </div>

              <div className="py-3.5 flex justify-between items-center">
                <div>
                  <span className="font-bold text-[#000B21] block sm:inline">{clinicConfig.schedule.sunday.days}</span>
                  <span className="text-xs text-[#75777E] sm:ml-2">({clinicConfig.schedule.sunday.note})</span>
                </div>
                <span className="font-semibold text-[#000B21] bg-[#FDF9F3] px-3 py-1 rounded-full border border-[#E6DDD2]">
                  {clinicConfig.schedule.sunday.hours}
                </span>
              </div>
            </div>

            {/* Evening Appointment Notice with Exact Preferred Wording */}
            <div className="p-5 rounded-2xl bg-[#FDF9F3] border border-[#E6DDD2] flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#FFDBD0] text-[#97472E] flex items-center justify-center shrink-0 mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-2 text-xs sm:text-sm">
                <h4 className="font-['Newsreader',serif] text-base font-semibold text-[#000B21]">
                  {clinicConfig.schedule.eveningNotice.title}
                </h4>
                <p className="text-[#44474D] leading-relaxed">
                  {clinicConfig.schedule.eveningNotice.description}
                </p>
                <p className="text-[#97472E] font-medium bg-[#F7F3ED] p-2.5 rounded-lg border-l-2 border-[#97472E]">
                  {clinicConfig.schedule.eveningNotice.policy}
                </p>
                <div className="pt-1">
                  <a
                    href={buildWhatsAppUrl(clinicConfig.schedule.eveningNotice.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppBooking('concept5_evening_btn')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#000B21] hover:text-[#97472E] transition-colors"
                  >
                    <span>{clinicConfig.schedule.eveningNotice.buttonText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. LOCATION & EXTERIOR SIGNAGE RECOGNITION */}
      <section id="lokasi-kavling" className="bg-[#F7F3ED] py-16 sm:py-20 border-y border-[#E6DDD2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Real Exterior Photo */}
            <div className="lg:col-span-6 space-y-3">
              <div className="rounded-3xl overflow-hidden bg-white border border-[#E6DDD2] shadow-md p-3">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#EBE8E2]">
                  <img
                    src={clinicConfig.images.practiceExterior}
                    alt="Plang nama resmi Praktek Dokter Gigi drg. Ummi Kaltsum di Jl. Kav. Pemda 3"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-[#000B21]/80 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Papan Nama Rumah Praktik</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-center text-[#75777E]">
                Saat tiba di Jl. Kav. Pemda 3, perhatikan plang resmi dokter gigi di depan pagar rumah.
              </p>
            </div>

            {/* Address Details */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#97472E] font-bold block mb-1">
                  Alamat Praktik
                </span>
                <h2 className="font-['Newsreader',serif] text-3xl sm:text-4xl text-[#000B21]">
                  Kavling Pemda 3, Cibodas
                </h2>
              </div>

              <div className="p-5 rounded-2xl bg-[#FDF9F3] border border-[#E6DDD2] space-y-3 text-xs sm:text-sm">
                <div>
                  <span className="text-[#75777E] text-[11px] uppercase tracking-wider block font-semibold">Alamat Lengkap:</span>
                  <p className="font-semibold text-[#000B21] text-base mt-0.5">
                    {clinicConfig.location.fullAddress}
                  </p>
                </div>
                <div className="pt-2 border-t border-[#E6DDD2]">
                  <span className="text-[#75777E] text-[11px] uppercase tracking-wider block font-semibold">Patokan Lokasi:</span>
                  <p className="text-[#44474D] mt-0.5">
                    {clinicConfig.location.landmark}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={clinicConfig.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackMapsClick('concept5_maps_btn')}
                  className="bg-[#000B21] hover:bg-[#152238] text-white px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Compass className="w-4 h-4 text-[#FFDBD0]" />
                  <span>Petunjuk Arah Google Maps</span>
                </a>

                <a
                  href={buildWhatsAppUrl("Halo Dokter Ummi, boleh minta patokan arah jalan menuju lokasi praktik?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppBooking('concept5_ask_direction')}
                  className="bg-[#FDF9F3] hover:bg-[#EBE8E2] text-[#000B21] border border-[#E6DDD2] px-5 py-3.5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Tanya Arah via WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs uppercase tracking-wider text-[#97472E] font-bold block mb-1">
              Informasi Kunjungan
            </span>
            <h2 className="font-['Newsreader',serif] text-3xl sm:text-4xl text-[#000B21]">
              Pertanyaan yang Sering Diajukan
            </h2>
          </div>

          <div className="space-y-3">
            {clinicConfig.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E6DDD2] bg-[#F7F3ED] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-4 sm:p-5 flex justify-between items-center text-left gap-4"
                  >
                    <span className="font-semibold text-sm sm:text-base text-[#000B21]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#97472E] shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#44474D] leading-relaxed border-t border-[#E6DDD2]/60">
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
      <footer className="bg-[#000B21] text-white py-14 px-4 sm:px-8 text-xs">
        <div className="max-w-6xl mx-auto space-y-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-white/10">
            <div className="md:col-span-5 space-y-3">
              <span className="font-['Newsreader',serif] text-2xl font-medium tracking-tight block">
                {clinicConfig.clinicName}
              </span>
              <p className="text-slate-400 max-w-md leading-relaxed">
                Praktik dokter gigi mandiri di Panunggangan Barat, Cibodas, Tangerang. Melayani konsultasi dan pemeriksaan kesehatan gigi keluarga untuk pasien anak hingga dewasa.
              </p>
              <div className="flex items-center gap-1.5 text-amber-400 font-semibold pt-1">
                <Star className="w-4 h-4 fill-current" />
                <span>5.0 di Google Maps ({clinicConfig.googleRating.reviewCount} ulasan)</span>
              </div>
            </div>

            <div className="md:col-span-4 space-y-2 text-slate-300">
              <span className="text-xs uppercase font-bold text-white tracking-wider block mb-2">
                Waktu Pelayanan
              </span>
              <div>{clinicConfig.schedule.monday.days}: {clinicConfig.schedule.monday.hours}</div>
              <div>{clinicConfig.schedule.tuesdayToSaturday.days}: {clinicConfig.schedule.tuesdayToSaturday.hours}</div>
              <div>{clinicConfig.schedule.sunday.days}: {clinicConfig.schedule.sunday.hours}</div>
              <div className="text-emerald-400 font-medium">Jadwal Malam s/d 21.00: By appointment only</div>
            </div>

            <div className="md:col-span-3 space-y-2 text-slate-300">
              <span className="text-xs uppercase font-bold text-white tracking-wider block mb-2">
                Kontak &amp; Alamat
              </span>
              <div>WhatsApp: {clinicConfig.contact.phoneDisplay}</div>
              <div className="text-slate-400">{clinicConfig.location.neighborhood}, {clinicConfig.location.city}</div>
              <a
                href={clinicConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMapsClick('concept5_footer_maps')}
                className="inline-flex items-center gap-1 text-[#FFDBD0] hover:underline pt-1"
              >
                <span>Buka Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
            <div>&copy; {new Date().getFullYear()} {clinicConfig.clinicName}. Kota Tangerang.</div>
            <div>Panunggangan Barat &bull; Cibodas &bull; Kota Tangerang</div>
          </div>

        </div>
      </footer>

      {/* 11. MOBILE STICKY FLOATING ACTION BAR */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#FDF9F3]/95 backdrop-blur-md border-t border-[#E6DDD2] p-3 flex gap-2">
        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppBooking('concept5_mobile_sticky')}
          className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 py-3 px-4 rounded-full font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_4px_16px_rgba(37,211,102,0.25)]"
        >
          <MessageCircle className="w-4 h-4 fill-slate-950" />
          <span>Reservasi WhatsApp</span>
        </a>

        <a
          href={`tel:${clinicConfig.contact.phoneTel}`}
          onClick={trackPhoneCall}
          className="w-12 h-12 bg-[#F1EDE7] text-[#000B21] border border-[#E6DDD2] rounded-full flex items-center justify-center shrink-0 active:scale-95"
          aria-label="Telepon Praktik"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
};
