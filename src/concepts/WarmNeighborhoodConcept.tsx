import React, { useState } from 'react';
import {
  Clock,
  Compass,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  ChevronDown,
  ExternalLink
} from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackWhatsAppBooking, trackPhoneCall, trackMapsClick } from '../utils/analytics';
import { useHeroEntrance, Reveal } from '../utils/motion';

export const WarmNeighborhoodConcept: React.FC = () => {
  const [openService, setOpenService] = useState<string>('pediatrik');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const stage1 = useHeroEntrance(1, 80);
  const stage2 = useHeroEntrance(2, 80);
  const stage3 = useHeroEntrance(3, 80);
  const stage4 = useHeroEntrance(4, 80);
  const stage5 = useHeroEntrance(5, 80);

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
            <span className="font-semibold text-[#1C1C18]">Praktik Dokter Gigi di Panunggangan Barat</span>
            <span className="text-[#C5C6CD]">&bull;</span>
            <span>Panunggangan Barat, Cibodas</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1.5 text-[#97472E]">
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
      <header className="sticky top-0 z-40 bg-[#FDF9F3]/95 backdrop-blur-md border-b border-[#E6DDD2] transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          <div>
            <a href="#" className="font-['Newsreader',serif] font-medium text-xl sm:text-2xl text-[#000B21] tracking-tight hover:text-[#97472E] transition-colors block leading-tight">
              drg. Ummi Kaltsum
            </a>
            <span className="text-xs text-[#44474D] font-medium">
              Praktik Dokter Gigi Mandiri &bull; Cibodas
            </span>
          </div>

          <nav className="hidden lg:flex items-center gap-6 text-sm text-[#44474D]">
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
              className="bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 px-4 sm:px-5 py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-200 shadow-xs hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
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
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Humanist Narrative */}
            <div className="lg:col-span-7 space-y-6">
              
              <div
                style={{
                  opacity: stage1 ? 1 : 0,
                  transform: stage1 ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="text-xs uppercase tracking-wider text-[#97472E] font-semibold"
              >
                Kavling Pemda 3 · Panunggangan Barat, Cibodas
              </div>

              <h1
                style={{
                  opacity: stage2 ? 1 : 0,
                  transform: stage2 ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="font-['Newsreader',serif] font-normal text-4xl sm:text-5xl lg:text-6xl text-[#000B21] leading-[1.12] tracking-tight"
              >
                Dokter gigi keluarga di <br className="hidden sm:inline" />
                <span className="italic text-[#97472E]">Panunggangan Barat, Cibodas.</span>
              </h1>

              <div
                style={{
                  opacity: stage3 ? 1 : 0,
                  transform: stage3 ? 'translateY(0)' : 'translateY(14px)',
                  transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="space-y-4"
              >
                <p className="text-base sm:text-lg text-[#44474D] max-w-xl leading-relaxed">
                  Praktik dokter gigi mandiri di Kavling Pemda 3, Panunggangan Barat. Kami melayani pemeriksaan dan perawatan gigi untuk seluruh anggota keluarga—anak-anak, dewasa, hingga lansia.
                </p>

                {/* Trust Line */}
                <div className="flex items-center gap-2 text-xs sm:text-sm text-[#44474D]">
                  <div className="flex text-[#97472E]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span><strong>5.0 di Google</strong> · {clinicConfig.googleRating.reviewCount} ulasan</span>
                </div>
              </div>

              {/* Primary Action + Secondary Route Link */}
              <div
                style={{
                  opacity: stage4 ? 1 : 0,
                  transform: stage4 ? 'translateY(0)' : 'translateY(14px)',
                  transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
              >
                <a
                  href={buildWhatsAppUrl("Halo drg. Ummi, saya ingin konsultasi dan membuat jadwal perawatan gigi keluarga.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppBooking('concept5_hero_wa')}
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 px-6 sm:px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2.5 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-slate-950" />
                  <span>Konsultasi &amp; Reservasi via WA</span>
                </a>

                <a
                  href="#lokasi-kavling"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#97472E] hover:text-[#000B21] transition-colors py-2"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Petunjuk Kavling Pemda 3</span>
                </a>
              </div>

              {/* Quiet Information Line */}
              <div
                style={{
                  opacity: stage5 ? 1 : 0,
                  transform: stage5 ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="pt-6 border-t border-[#E6DDD2] grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#97472E] font-semibold block mb-0.5">Cara Reservasi</span>
                  <span className="font-['Newsreader',serif] text-lg font-medium text-[#000B21] block">Janji Temu</span>
                  <span className="text-xs text-[#44474D]">Jadwal terkonfirmasi via WhatsApp</span>
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#97472E] font-semibold block mb-0.5">Suasana</span>
                  <span className="font-['Newsreader',serif] text-lg font-medium text-[#000B21] block">Praktik Mandiri</span>
                  <span className="text-xs text-[#44474D]">Pemeriksaan langsung dokter gigi</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-[11px] uppercase tracking-wider text-[#97472E] font-semibold block mb-0.5">Wilayah</span>
                  <span className="font-['Newsreader',serif] text-lg font-medium text-[#000B21] block">Cibodas</span>
                  <span className="text-xs text-[#44474D]">Dekat akses Karawaci &amp; Palem Semi</span>
                </div>
              </div>

            </div>

            {/* Right Column: Clean Photographic Frame */}
            <div
              style={{
                opacity: stage4 ? 1 : 0,
                transform: stage4 ? 'scale(1) translateY(0)' : 'scale(0.97) translateY(16px)',
                transition: 'opacity 800ms cubic-bezier(0.16, 1, 0.3, 1), transform 800ms cubic-bezier(0.16, 1, 0.3, 1)'
              }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl overflow-hidden bg-[#F7F3ED] p-3 border border-[#E6DDD2] shadow-xs group">
                <div className="aspect-[4/4.8] rounded-xl overflow-hidden bg-[#EBE8E2]">
                  <img
                    src={clinicConfig.images.doctorPortrait}
                    alt="drg. Ummi Kaltsum dokter gigi di Cibodas Tangerang"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                    loading="eager"
                  />
                </div>
                <div className="pt-3 px-1 flex justify-between items-center text-xs text-[#44474D]">
                  <span className="font-['Newsreader',serif] text-base text-[#000B21] font-medium">{clinicConfig.doctorName}</span>
                  <span>Panunggangan Barat, Cibodas</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. CLINIC PHILOSOPHY & DOCTOR PROFILE: Open Typographic Editorial */}
      <section id="tentang-dokter" className="bg-[#F7F3ED] py-16 sm:py-20 border-y border-[#E6DDD2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            <Reveal variant="fade-right" className="lg:col-span-5 space-y-4">
              <span className="text-xs uppercase tracking-wider text-[#97472E] font-semibold block">
                Tentang Praktik
              </span>

              <h2 className="font-['Newsreader',serif] text-3xl sm:text-4xl text-[#000B21] leading-tight font-normal">
                Pemeriksaan dan konsultasi langsung bersama dokter gigi.
              </h2>

              <p className="text-sm sm:text-base text-[#44474D] leading-relaxed">
                Sebagai dokter gigi praktik mandiri, drg. Ummi Kaltsum memberikan pelayanan langsung bagi setiap pasien. Kami mengutamakan penjelasan kondisi gigi secara terbuka sebelum tindakan dilakukan.
              </p>

              <div className="pt-2 text-xs text-[#44474D] border-l-2 border-[#97472E] pl-3 py-1">
                Setiap kunjungan diatur melalui janji temu terlebih dahulu agar pasien dan keluarga mendapatkan waktu konsultasi yang cukup.
              </div>
            </Reveal>

            {/* Editorial Focus Points (Open typographic list instead of app-like cards) */}
            <Reveal variant="fade-left" className="lg:col-span-7 divide-y divide-[#E6DDD2] bg-white rounded-xl border border-[#E6DDD2] p-6 sm:p-8">
              
              <div className="pb-5 space-y-1">
                <span className="text-xs font-mono text-[#97472E] block">01</span>
                <h3 className="font-['Newsreader',serif] text-lg font-semibold text-[#000B21]">
                  Pelayanan Pasien Anak
                </h3>
                <p className="text-xs sm:text-sm text-[#44474D] leading-relaxed">
                  Pemeriksaan dan penanganan gigi anak dilakukan dengan pendampingan orang tua di ruang periksa.
                </p>
              </div>

              <div className="py-5 space-y-1">
                <span className="text-xs font-mono text-[#97472E] block">02</span>
                <h3 className="font-['Newsreader',serif] text-lg font-semibold text-[#000B21]">
                  Perawatan Pasien Dewasa &amp; Lansia
                </h3>
                <p className="text-xs sm:text-sm text-[#44474D] leading-relaxed">
                  Melayani pembersihan karang gigi (scaling), tambal gigi komposit, perawatan saluran akar, dan gigi tiruan lepasan.
                </p>
              </div>

              <div className="py-5 space-y-1">
                <span className="text-xs font-mono text-[#97472E] block">03</span>
                <h3 className="font-['Newsreader',serif] text-lg font-semibold text-[#000B21]">
                  Sarana Ruang Pemeriksaan
                </h3>
                <p className="text-xs sm:text-sm text-[#44474D] leading-relaxed">
                  Dilengkapi unit dental elektrik serta penataan instrumen pemeriksaan gigi di Kavling Pemda 3.
                </p>
              </div>

              <div className="pt-5 space-y-1">
                <span className="text-xs font-mono text-[#97472E] block">04</span>
                <h3 className="font-['Newsreader',serif] text-lg font-semibold text-[#000B21]">
                  Komunikasi yang Terbuka
                </h3>
                <p className="text-xs sm:text-sm text-[#44474D] leading-relaxed">
                  Rencana tindakan dan opsi perawatan dijelaskan terlebih dahulu sebelum prosedur dimulai.
                </p>
              </div>

            </Reveal>

          </div>

        </div>
      </section>

      {/* 5. CLINICAL SERVICES ACCORDION */}
      <section id="layanan-keluarga" className="py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <Reveal variant="fade-up" className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-wider text-[#97472E] font-semibold block mb-1">
              Layanan Gigi
            </span>
            <h2 className="font-['Newsreader',serif] text-3xl sm:text-4xl text-[#000B21] font-normal">
              Layanan Perawatan Gigi
            </h2>
            <p className="text-sm text-[#44474D] mt-2">
              Pelayanan konsultasi dan tindakan perawatan gigi bersama drg. Ummi Kaltsum.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Clean Accordion Services */}
            <Reveal variant="fade-right" className="lg:col-span-7 space-y-2.5">
              {clinicConfig.services.map((service) => {
                const isOpen = openService === service.id;
                return (
                  <div
                    key={service.id}
                    className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? 'bg-[#F7F3ED] border-[#97472E]/40'
                        : 'bg-[#FDF9F3] border-[#E6DDD2] hover:bg-[#F7F3ED]/50'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleService(service.id)}
                      aria-expanded={isOpen}
                      className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="font-['Newsreader',serif] text-lg font-bold text-[#97472E] w-6 shrink-0">
                          {service.number}
                        </span>
                        <div>
                          <span className="font-semibold text-base text-[#000B21] block">
                            {service.title}
                          </span>
                          <span className="text-xs text-[#44474D]">
                            {service.shortTitle}
                          </span>
                        </div>
                      </div>

                      <ChevronDown
                        className={`w-4 h-4 text-[#97472E] shrink-0 transition-transform duration-250 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <div className={`accordion-grid ${isOpen ? 'open' : ''}`}>
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#44474D] leading-relaxed border-t border-[#E6DDD2]/60">
                          <p className="mb-3">{service.description}</p>
                          <a
                            href={buildWhatsAppUrl(service.whatsappMessage)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackWhatsAppBooking('concept5_service', service.title)}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#97472E] hover:underline"
                          >
                            <span>Tanyakan jadwal via WA &rarr;</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Reveal>

            {/* Right: Real Photograph Companion Frame */}
            <Reveal variant="fade-left" className="lg:col-span-5">
              <div className="rounded-xl bg-[#F7F3ED] border border-[#E6DDD2] p-4 space-y-3 group">
                <div className="aspect-[4/3] rounded-lg overflow-hidden bg-white border border-[#E6DDD2]">
                  <img
                    src={clinicConfig.images.doctorPatient}
                    alt="drg. Ummi Kaltsum sedang memeriksa pasien anak"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>

                <div className="space-y-1.5 pt-1">
                  <span className="text-xs text-[#97472E] font-semibold uppercase tracking-wider block">
                    Pendampingan Orang Tua
                  </span>
                  <h3 className="font-['Newsreader',serif] text-lg font-medium text-[#000B21]">
                    Pemeriksaan Gigi Anak
                  </h3>
                  <p className="text-xs text-[#44474D] leading-relaxed">
                    Pemeriksaan gigi anak dapat didampingi orang tua di samping unit periksa agar anak merasa aman dan tenang.
                  </p>
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* 6. REAL PRACTICE FACILITIES DOCUMENTATION */}
      <section id="suasana-fasilitas" className="bg-[#F7F3ED] py-16 sm:py-20 border-y border-[#E6DDD2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <Reveal variant="fade-up" className="max-w-xl mb-10">
            <span className="text-xs uppercase tracking-wider text-[#97472E] font-semibold block mb-1">
              Dokumentasi Ruang
            </span>
            <h2 className="font-['Newsreader',serif] text-3xl sm:text-4xl text-[#000B21] font-normal">
              Sarana Ruang Pemeriksaan
            </h2>
            <p className="text-sm text-[#44474D] mt-2">
              Foto asli sarana perawatan di rumah praktik drg. Ummi Kaltsum, Kavling Pemda 3.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Facility 1 */}
            <Reveal variant="fade-up" delay={0}>
              <div className="bg-[#FDF9F3] rounded-xl overflow-hidden border border-[#E6DDD2] shadow-xs flex flex-col justify-between h-full group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-[#EBE8E2]">
                    <img
                      src={clinicConfig.images.treatmentRoom}
                      alt="Ruang periksa utama drg. Ummi Kaltsum"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="font-['Newsreader',serif] text-base font-semibold text-[#000B21]">Dental Unit Elektrik</h4>
                    <p className="text-xs text-[#44474D] leading-relaxed">
                      Unit dental untuk pemeriksaan dan tindakan perawatan gigi pasien.
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4 text-[11px] text-[#75777E]">
                  Cibodas, Tangerang
                </div>
              </div>
            </Reveal>

            {/* Facility 2 */}
            <Reveal variant="fade-up" delay={70}>
              <div className="bg-[#FDF9F3] rounded-xl overflow-hidden border border-[#E6DDD2] shadow-xs flex flex-col justify-between h-full group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-[#EBE8E2]">
                    <img
                      src={clinicConfig.images.dentalChair}
                      alt="Kursi periksa dental chair"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="font-['Newsreader',serif] text-base font-semibold text-[#000B21]">Dental Chair</h4>
                    <p className="text-xs text-[#44474D] leading-relaxed">
                      Unit kursi periksa dental untuk tindakan perawatan gigi.
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4 text-[11px] text-[#75777E]">
                  Unit Periksa
                </div>
              </div>
            </Reveal>

            {/* Facility 3 */}
            <Reveal variant="fade-up" delay={140}>
              <div className="bg-[#FDF9F3] rounded-xl overflow-hidden border border-[#E6DDD2] shadow-xs flex flex-col justify-between h-full group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-[#EBE8E2]">
                    <img
                      src={clinicConfig.images.waitingArea}
                      alt="Meja konsultasi dan rekam medis pasien"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="font-['Newsreader',serif] text-base font-semibold text-[#000B21]">Meja Konsultasi</h4>
                    <p className="text-xs text-[#44474D] leading-relaxed">
                      Area untuk konsultasi kondisi gigi serta pencatatan kunjungan pasien.
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4 text-[11px] text-[#75777E]">
                  Area Konsultasi
                </div>
              </div>
            </Reveal>

            {/* Facility 4 */}
            <Reveal variant="fade-up" delay={210}>
              <div className="bg-[#FDF9F3] rounded-xl overflow-hidden border border-[#E6DDD2] shadow-xs flex flex-col justify-between h-full group hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                <div>
                  <div className="aspect-[4/3] overflow-hidden bg-[#EBE8E2]">
                    <img
                      src={clinicConfig.images.sterilization}
                      alt="Peralatan instrumen praktik dokter gigi"
                      className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 space-y-1">
                    <h4 className="font-['Newsreader',serif] text-base font-semibold text-[#000B21]">Instrumen Praktik</h4>
                    <p className="text-xs text-[#44474D] leading-relaxed">
                      Area penataan dan penyiapan peralatan instrumen perawatan gigi.
                    </p>
                  </div>
                </div>
                <div className="px-4 pb-4 text-[11px] text-[#75777E]">
                  Peralatan Praktik
                </div>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* 7. SCHEDULE & EVENING APPOINTMENT NOTICE */}
      <section id="jadwal-kedatangan" className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          <Reveal variant="fade-up" className="max-w-xl mb-10">
            <span className="text-xs uppercase tracking-wider text-[#97472E] font-semibold block mb-1">
              Waktu Pelayanan
            </span>
            <h2 className="font-['Newsreader',serif] text-3xl sm:text-4xl text-[#000B21] font-normal">
              Jadwal Praktik Reguler
            </h2>
            <p className="text-sm text-[#44474D] mt-2">
              Harap membuat janji terlebih dahulu melalui WhatsApp agar jadwal Anda terkonfirmasi.
            </p>
          </Reveal>

          <Reveal variant="fade-up" className="bg-[#F7F3ED] rounded-2xl p-6 sm:p-8 border border-[#E6DDD2] shadow-xs space-y-6">
            
            {/* Timetable Table */}
            <div className="divide-y divide-[#E6DDD2] text-sm">
              <div className="py-3.5 flex justify-between items-center">
                <div>
                  <span className="font-semibold text-[#000B21]">{clinicConfig.schedule.monday.days}</span>
                  <span className="text-xs text-[#75777E] ml-2">({clinicConfig.schedule.monday.note})</span>
                </div>
                <span className="text-[#000B21] font-medium">
                  {clinicConfig.schedule.monday.hours}
                </span>
              </div>

              <div className="py-3.5 flex justify-between items-center">
                <div>
                  <span className="font-semibold text-[#000B21]">{clinicConfig.schedule.tuesdayToSaturday.days}</span>
                  <span className="text-xs text-[#75777E] ml-2">({clinicConfig.schedule.tuesdayToSaturday.note})</span>
                </div>
                <span className="text-[#000B21] font-medium">
                  {clinicConfig.schedule.tuesdayToSaturday.hours}
                </span>
              </div>

              <div className="py-3.5 flex justify-between items-center">
                <div>
                  <span className="font-semibold text-[#000B21]">{clinicConfig.schedule.sunday.days}</span>
                  <span className="text-xs text-[#75777E] ml-2">({clinicConfig.schedule.sunday.note})</span>
                </div>
                <span className="text-[#000B21] font-medium">
                  {clinicConfig.schedule.sunday.hours}
                </span>
              </div>
            </div>

            {/* Evening Appointment Notice */}
            <div className="p-4 sm:p-5 rounded-xl bg-[#FDF9F3] border border-[#E6DDD2] flex items-start gap-4 text-xs sm:text-sm">
              <Clock className="w-5 h-5 text-[#97472E] shrink-0 mt-0.5" />
              <div className="space-y-1.5">
                <h4 className="font-['Newsreader',serif] text-base font-semibold text-[#000B21]">
                  {clinicConfig.schedule.eveningNotice.title}
                </h4>
                <p className="text-[#44474D] leading-relaxed">
                  {clinicConfig.schedule.eveningNotice.description}
                </p>
                <p className="text-[#97472E] font-medium">
                  {clinicConfig.schedule.eveningNotice.policy}
                </p>
                <div className="pt-1">
                  <a
                    href={buildWhatsAppUrl(clinicConfig.schedule.eveningNotice.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppBooking('concept5_evening_btn')}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#97472E] hover:underline"
                  >
                    <span>{clinicConfig.schedule.eveningNotice.buttonText} &rarr;</span>
                  </a>
                </div>
              </div>
            </div>

          </Reveal>

        </div>
      </section>

      {/* 8. LOCATION & EXTERIOR SIGNAGE */}
      <section id="lokasi-kavling" className="bg-[#F7F3ED] py-16 sm:py-20 border-y border-[#E6DDD2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Real Exterior Photo */}
            <Reveal variant="fade-right" className="lg:col-span-6 space-y-3">
              <div className="rounded-2xl overflow-hidden bg-white border border-[#E6DDD2] shadow-xs p-2.5">
                <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[#EBE8E2]">
                  <img
                    src={clinicConfig.images.practiceExterior}
                    alt="Plang nama resmi Praktek Dokter Gigi drg. Ummi Kaltsum di Jl. Kav. Pemda 3"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-xs text-[#75777E]">
                Saat tiba di Jl. Kav. Pemda 3, perhatikan plang nama resmi dokter gigi di depan pagar rumah.
              </p>
            </Reveal>

            {/* Address Details */}
            <Reveal variant="fade-left" className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-wider text-[#97472E] font-semibold block mb-1">
                  Lokasi Praktik
                </span>
                <h2 className="font-['Newsreader',serif] text-3xl sm:text-4xl text-[#000B21] font-normal">
                  Kavling Pemda 3, Cibodas
                </h2>
              </div>

              <div className="p-5 rounded-xl bg-[#FDF9F3] border border-[#E6DDD2] space-y-3 text-xs sm:text-sm">
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

              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <a
                  href={clinicConfig.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackMapsClick('concept5_maps_btn')}
                  className="bg-[#000B21] hover:bg-[#152238] text-white px-6 py-3.5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5"
                >
                  <Compass className="w-4 h-4 text-[#FFDBD0]" />
                  <span>Petunjuk Arah Google Maps</span>
                </a>

                <a
                  href={buildWhatsAppUrl("Halo Dokter Ummi, boleh minta patokan arah jalan menuju lokasi praktik?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppBooking('concept5_ask_direction')}
                  className="bg-[#FDF9F3] hover:bg-[#EBE8E2] text-[#000B21] border border-[#E6DDD2] px-5 py-3.5 rounded-full font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Tanya Arah via WhatsApp</span>
                </a>
              </div>
            </Reveal>

          </div>

        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          
          <Reveal variant="fade-up" className="max-w-xl mb-10">
            <span className="text-xs uppercase tracking-wider text-[#97472E] font-semibold block mb-1">
              Informasi Kunjungan
            </span>
            <h2 className="font-['Newsreader',serif] text-3xl sm:text-4xl text-[#000B21] font-normal">
              Pertanyaan yang Sering Diajukan
            </h2>
          </Reveal>

          <div className="space-y-2.5">
            {clinicConfig.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-[#E6DDD2] bg-[#F7F3ED] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full p-4 sm:p-5 flex justify-between items-center text-left gap-4"
                  >
                    <span className="font-semibold text-sm sm:text-base text-[#000B21]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#97472E] shrink-0 transition-transform duration-250 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div className={`accordion-grid ${isOpen ? 'open' : ''}`}>
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#44474D] leading-relaxed border-t border-[#E6DDD2]/60">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
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
                <span>5.0 di Google · {clinicConfig.googleRating.reviewCount} ulasan</span>
              </div>
            </div>

            <div className="md:col-span-4 space-y-2 text-slate-300">
              <span className="text-xs uppercase font-bold text-white tracking-wider block mb-2">
                Waktu Pelayanan
              </span>
              <div>{clinicConfig.schedule.monday.days}: {clinicConfig.schedule.monday.hours}</div>
              <div>{clinicConfig.schedule.tuesdayToSaturday.days}: {clinicConfig.schedule.tuesdayToSaturday.hours}</div>
              <div>{clinicConfig.schedule.sunday.days}: {clinicConfig.schedule.sunday.hours}</div>
              <div className="text-emerald-400 font-medium">Jadwal s/d 21.00: Dengan reservasi</div>
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
