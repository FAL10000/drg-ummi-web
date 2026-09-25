import React from 'react';
import { Star, MessageCircle, MapPin, Clock, ArrowRight } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackWhatsAppBooking, trackMapsClick } from '../utils/analytics';
import { useHeroEntrance, Reveal } from '../utils/motion';

export const WarmFamilyConcept: React.FC = () => {
  const stage1 = useHeroEntrance(1, 85);
  const stage2 = useHeroEntrance(2, 85);
  const stage3 = useHeroEntrance(3, 85);
  const stage4 = useHeroEntrance(4, 85);
  const stage5 = useHeroEntrance(5, 85);

  return (
    <div className="bg-[#FAF4EB] text-[#382821] font-sans antialiased selection:bg-[#EADBCE] selection:text-[#382821]">
      
      {/* Friendly Top Header */}
      <header className="border-b border-[#EADBCE] py-4 px-6 md:px-12 flex justify-between items-center bg-[#FAF4EB]/95 backdrop-blur-xs sticky top-0 z-30 transition-colors">
        <a href="#" className="font-['Lora',serif] text-xl font-semibold text-[#382821] tracking-tight hover:text-[#C46D50] transition-colors">
          {clinicConfig.doctorName}
        </a>

        <div className="flex items-center gap-4 sm:gap-6 text-xs font-medium text-[#614F44]">
          <nav className="hidden md:flex items-center gap-6">
            <a href="#layanan-keluarga" className="hover:text-[#C46D50] transition-colors duration-200">Layanan</a>
            <a href="#jadwal-keluarga" className="hover:text-[#C46D50] transition-colors duration-200">Jadwal</a>
            <a href="#lokasi-keluarga" className="hover:text-[#C46D50] transition-colors duration-200">Lokasi</a>
          </nav>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppBooking('concept3_header')}
            className="group bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide flex items-center gap-2 shadow-xs hover:shadow-md transition-all duration-300 active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Reservasi via WA</span>
          </a>
        </div>
      </header>

      {/* Hero: Warm & Human Atmosphere */}
      <section className="max-w-6xl mx-auto px-6 pt-2 pb-14 overflow-hidden">
        <div className="bg-white rounded-2xl border border-[#EADBCE] p-8 md:p-12 shadow-xs hover:shadow-sm transition-shadow duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Storytelling */}
            <div className="lg:col-span-7 space-y-5">
              <div style={stage1.style} className="text-xs uppercase tracking-wider text-[#8C5E47] font-semibold">
                Kavling Pemda 3 · Panunggangan Barat, Cibodas
              </div>

              <h1
                style={stage2.style}
                className="font-['Lora',serif] text-3xl sm:text-4xl lg:text-[2.75rem] text-[#382821] leading-tight font-normal"
              >
                Dokter gigi keluarga di Panunggangan Barat, Cibodas.
              </h1>

              <div style={stage3.style} className="space-y-4">
                <p className="text-base sm:text-lg text-[#614F44] leading-relaxed">
                  Pemeriksaan gigi tidak perlu membuat tegang. Bersama <strong>{clinicConfig.doctorName}</strong>, kami melayani keluarga di lingkungan Panunggangan Barat dan sekitarnya dengan suasana rumahan yang tenang dan bersahabat.
                </p>

                {/* Trust Line */}
                <div className="flex items-center gap-2 text-sm text-[#614F44] pt-1">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span><strong>5.0 di Google</strong> · {clinicConfig.googleRating.reviewCount} ulasan</span>
                </div>
              </div>

              {/* Single Main CTA + Secondary Text Link */}
              <div style={stage4.style} className="pt-3 flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppBooking('concept3_hero')}
                  className="group inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-xs hover:shadow-md active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                  <span>Buat Janji Kunjungan</span>
                </a>

                <a
                  href="#lokasi-keluarga"
                  className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#8C5E47] hover:text-[#382821] transition-colors py-2"
                >
                  <span>Petunjuk Arah &amp; Peta</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Right Visual: Clear Photo of Doctor & Patient */}
            <div className="lg:col-span-5" style={stage5.style}>
              <div className="rounded-xl overflow-hidden border border-[#EADBCE] bg-[#FAF6F0] p-2 shadow-xs hover:shadow-md transition-shadow duration-500">
                <div className="aspect-[4/4.8] rounded-lg overflow-hidden bg-[#F0E6D8] group">
                  <img
                    src={clinicConfig.images.doctorPatient}
                    alt="drg. Ummi Kaltsum memeriksa pasien anak dalam suasana praktik mandiri"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    loading="eager"
                  />
                </div>
                <div className="p-3 text-center">
                  <span className="font-['Lora',serif] text-sm font-semibold text-[#382821] block">
                    {clinicConfig.doctorName}
                  </span>
                  <span className="text-[11px] text-[#7A6458] mt-0.5 block">
                    Praktik Mandiri · Panunggangan Barat, Cibodas
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan-keluarga" className="max-w-6xl mx-auto px-6 py-14 border-t border-[#EADBCE]">
        <Reveal variant="fade-up" className="max-w-xl mb-10">
          <span className="text-xs uppercase tracking-wider text-[#8C5E47] font-semibold">Layanan Gigi</span>
          <h2 className="font-['Lora',serif] text-2xl sm:text-3xl text-[#382821] mt-1 font-normal">
            Perawatan untuk Pasien Anak &amp; Dewasa
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6458] mt-2">
            Konsultasi dan penanganan kesehatan gigi dengan pendampingan keluarga yang nyaman.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {clinicConfig.services.map((service, index) => (
            <Reveal
              key={service.id}
              variant="fade-up"
              delay={index * 55}
              className="bg-white rounded-xl p-5 sm:p-6 border border-[#EADBCE] shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs font-mono text-[#8C5E47] block mb-1">{service.number}</span>
                <h3 className="font-['Lora',serif] text-lg font-semibold text-[#382821] mb-2 group-hover:text-[#C46D50] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#614F44] leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#F5ECE1]">
                <a
                  href={buildWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppBooking('concept3_service', service.title)}
                  className="text-xs font-semibold text-[#8C5E47] hover:text-[#382821] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Konsultasi Layanan &rarr;</span>
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Real Photos Clinic Atmosphere */}
      <section className="max-w-6xl mx-auto px-6 py-14 border-t border-[#EADBCE]">
        <Reveal variant="fade-up" className="max-w-xl mb-10">
          <span className="text-xs uppercase tracking-wider text-[#8C5E47] font-semibold">Dokumentasi Ruang</span>
          <h2 className="font-['Lora',serif] text-2xl sm:text-3xl text-[#382821] mt-1 font-normal">
            Suasana Ruang Pemeriksaan
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6458] mt-2">
            Dokumentasi sarana ruang periksa praktik mandiri drg. Ummi Kaltsum di Jl. Kav. Pemda 3.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal variant="fade-up" delay={0} className="bg-white rounded-xl overflow-hidden border border-[#EADBCE] shadow-xs hover:shadow-md transition-shadow duration-400 group">
            <div className="aspect-[4/3] overflow-hidden bg-[#F0E6D8]">
              <img
                src={clinicConfig.images.treatmentRoom}
                alt="Ruang periksa utama praktik drg. Ummi Kaltsum"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <span className="font-['Lora',serif] font-semibold text-[#382821] text-sm block">Ruang Periksa Utama</span>
              <p className="text-xs text-[#7A6458] mt-1">Dental unit elektrik untuk tindakan pemeriksaan dan perawatan gigi.</p>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={80} className="bg-white rounded-xl overflow-hidden border border-[#EADBCE] shadow-xs hover:shadow-md transition-shadow duration-400 group">
            <div className="aspect-[4/3] overflow-hidden bg-[#F0E6D8]">
              <img
                src={clinicConfig.images.waitingArea}
                alt="Area konsultasi dokter dan pasien"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <span className="font-['Lora',serif] font-semibold text-[#382821] text-sm block">Area Konsultasi &amp; Administrasi</span>
              <p className="text-xs text-[#7A6458] mt-1">Area diskusi kondisi gigi serta pencatatan rekam kunjungan pasien.</p>
            </div>
          </Reveal>

          <Reveal variant="fade-up" delay={160} className="bg-white rounded-xl overflow-hidden border border-[#EADBCE] shadow-xs hover:shadow-md transition-shadow duration-400 group">
            <div className="aspect-[4/3] overflow-hidden bg-[#F0E6D8]">
              <img
                src={clinicConfig.images.dentalChair}
                alt="Kursi periksa dental unit"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <span className="font-['Lora',serif] font-semibold text-[#382821] text-sm block">Unit Dental Chair</span>
              <p className="text-xs text-[#7A6458] mt-1">Unit kursi periksa dental untuk pemeriksaan dan tindakan perawatan gigi.</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Schedule & Evening Policy */}
      <section id="jadwal-keluarga" className="max-w-4xl mx-auto px-6 py-14">
        <Reveal variant="fade-up" className="bg-white rounded-2xl p-6 sm:p-10 border border-[#EADBCE] shadow-xs space-y-6">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#8C5E47] font-semibold">Waktu Pelayanan</span>
            <h2 className="font-['Lora',serif] text-2xl sm:text-3xl text-[#382821] mt-1 font-normal">
              Jam Praktik Reguler
            </h2>
          </div>

          <div className="divide-y divide-[#F0E6D8] text-sm">
            <div className="py-3 flex justify-between items-center hover:bg-[#FAF6F0]/60 transition-colors px-2 rounded-xs">
              <span className="font-medium text-[#382821]">{clinicConfig.schedule.monday.days}</span>
              <span className="text-[#8C5E47] font-medium">{clinicConfig.schedule.monday.hours}</span>
            </div>
            <div className="py-3 flex justify-between items-center hover:bg-[#FAF6F0]/60 transition-colors px-2 rounded-xs">
              <span className="font-medium text-[#382821]">{clinicConfig.schedule.tuesdayToSaturday.days}</span>
              <span className="text-[#8C5E47] font-medium">{clinicConfig.schedule.tuesdayToSaturday.hours}</span>
            </div>
            <div className="py-3 flex justify-between items-center hover:bg-[#FAF6F0]/60 transition-colors px-2 rounded-xs">
              <span className="font-medium text-[#382821]">{clinicConfig.schedule.sunday.days}</span>
              <span className="text-[#8C5E47] font-medium">{clinicConfig.schedule.sunday.hours}</span>
            </div>
          </div>

          {/* Evening Notice */}
          <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#EADBCE] flex items-start gap-3 text-xs text-[#614F44]">
            <Clock className="w-5 h-5 text-[#8C5E47] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <strong className="text-[#382821]">{clinicConfig.schedule.eveningNotice.title}</strong>
              <p>{clinicConfig.schedule.eveningNotice.description}</p>
              <p className="text-[#8C5E47] font-medium">{clinicConfig.schedule.eveningNotice.policy}</p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Location */}
      <section id="lokasi-keluarga" className="max-w-6xl mx-auto px-6 py-14 border-t border-[#EADBCE]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <Reveal variant="fade-right" duration={650} className="md:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-wider text-[#8C5E47] font-semibold">Alamat Praktik</span>
            <h2 className="font-['Lora',serif] text-2xl sm:text-3xl text-[#382821] font-normal">
              Lokasi Rumah Praktik
            </h2>
            <p className="text-sm text-[#614F44] leading-relaxed">
              {clinicConfig.location.fullAddress}
            </p>
            <div className="text-xs text-[#8C5E47] bg-[#F5ECE1] p-3 rounded-lg">
              <strong>Patokan:</strong> {clinicConfig.location.landmark}
            </div>

            {/* Real Practice Signage */}
            <div className="rounded-xl overflow-hidden border border-[#EADBCE] bg-[#FAF6F0] shadow-xs group">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={clinicConfig.images.practiceExterior}
                  alt="Papan nama resmi Praktek Dokter Gigi drg. Ummi Kaltsum di Jl. Kav. Pemda 3"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  loading="lazy"
                />
              </div>
              <div className="p-2 text-[11px] text-[#7A6458] text-center">
                Papan nama resmi terpasang di depan rumah praktik
              </div>
            </div>

            <div className="pt-2">
              <a
                href={clinicConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMapsClick('concept3_maps')}
                className="group inline-flex items-center gap-2 bg-[#382821] hover:bg-[#5D473B] text-white px-5 py-3 rounded-full text-xs font-semibold transition-all duration-300 shadow-xs hover:shadow-md active:scale-[0.98]"
              >
                <MapPin className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
                <span>Buka Petunjuk di Google Maps</span>
              </a>
            </div>
          </Reveal>

          <Reveal variant="fade-left" delay={100} duration={650} className="md:col-span-7 rounded-xl overflow-hidden border border-[#EADBCE] shadow-xs aspect-[16/10]">
            <iframe
              title="Peta Lokasi drg. Ummi Kaltsum"
              src={clinicConfig.location.googleMapsEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#382821] text-[#E3D6C5] py-10 px-6 text-center text-xs">
        <div className="font-['Lora',serif] text-base text-white font-semibold mb-1">
          {clinicConfig.clinicName}
        </div>
        <div>Panunggangan Barat, Kec. Cibodas, Kota Tangerang 15139</div>
        <div className="mt-4 text-[10px] text-[#A69385]">
          © {new Date().getFullYear()} Praktek Dokter Gigi drg. Ummi Kaltsum
        </div>
      </footer>

    </div>
  );
};
