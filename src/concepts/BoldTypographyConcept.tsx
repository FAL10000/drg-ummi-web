import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackWhatsAppBooking, trackMapsClick } from '../utils/analytics';

export const BoldTypographyConcept: React.FC = () => {
  return (
    <div className="bg-white text-[#0A0A0A] font-['Space_Grotesk',sans-serif] selection:bg-[#0038FF] selection:text-white pb-24 md:pb-0">
      
      {/* Bold Swiss Top Bar */}
      <div className="border-b-2 border-[#0A0A0A] px-6 md:px-12 py-3 bg-[#0A0A0A] text-white flex justify-between items-center text-xs font-mono uppercase tracking-wider">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2.5 h-2.5 bg-[#0038FF]"></span>
          <span className="font-bold">{clinicConfig.subTagline.toUpperCase()}</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="hidden sm:inline">5.0 GOOGLE RATING [55 REVIEWS]</span>
          <span className="text-[#0038FF] font-bold">BY APPT ONLY</span>
        </div>
      </div>

      {/* Header */}
      <header className="border-b-2 border-[#0A0A0A] px-6 md:px-12 py-6 flex justify-between items-center bg-white sticky top-0 z-40">
        <div className="flex items-baseline gap-4">
          <a href="#" className="font-extrabold text-2xl md:text-3xl tracking-tighter uppercase text-[#0A0A0A]">
            DRG. UMMI KALTSUM
          </a>
          <span className="hidden md:inline font-mono text-[11px] text-[#666666] uppercase">
            / {clinicConfig.tagline}
          </span>
        </div>

        <div className="flex items-center gap-8 font-mono text-xs uppercase font-bold">
          <nav className="hidden lg:flex gap-8">
            <a href="#services-bold" className="hover:text-[#0038FF] transition-colors">[01] LAYANAN</a>
            <a href="#schedule-bold" className="hover:text-[#0038FF] transition-colors">[02] JADWAL</a>
            <a href="#location-bold" className="hover:text-[#0038FF] transition-colors">[03] LOKASI</a>
          </nav>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppBooking('concept3_header')}
            className="bg-[#0038FF] hover:bg-[#0A0A0A] text-white px-5 py-2.5 uppercase font-mono text-xs font-bold tracking-wider transition-all"
          >
            BOOK VIA WA &rarr;
          </a>
        </div>
      </header>

      {/* HERO: Massive Stacked Typographic Spread */}
      <section className="border-b-2 border-[#0A0A0A]">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
          
          <div className="lg:col-span-7 p-6 md:p-14 lg:p-16 border-b-2 lg:border-b-0 lg:border-r-2 border-[#0A0A0A] flex flex-col justify-between">
            <div className="space-y-4">
              <div className="font-mono text-xs uppercase tracking-widest text-[#0038FF] font-bold">
                // CLINICAL PRECISION &bull; PRIVATE PRACTICE
              </div>

              <h1 className="font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.92] tracking-tighter uppercase text-[#0A0A0A]">
                PERAWATAN<br />
                GIGI YANG<br />
                <span className="text-[#0038FF]">TELITI &amp;</span><br />
                PERSONAL.
              </h1>
            </div>

            <div className="pt-10 space-y-8">
              <p className="text-lg md:text-xl font-medium text-[#222222] max-w-xl leading-snug">
                drg. Ummi Kaltsum menjalankan praktik mandiri tanpa ketergesaan di Panunggangan Barat. Setiap tindakan klinis dijelaskan tuntas kepada keluarga.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppBooking('concept3_hero')}
                  className="bg-[#0038FF] text-white px-8 py-4 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0A0A0A] transition-colors text-center"
                >
                  RESERVASI JADWAL SEKARANG &rarr;
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 md:p-12 flex flex-col justify-between bg-[#F8F8F8]">
            <div className="aspect-[4/3] bg-white border-2 border-[#0A0A0A] overflow-hidden">
              <img
                src={clinicConfig.images.hero}
                alt="Dental Unit dan Ruang Periksa Drg Ummi Kaltsum"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="pt-6 font-mono text-xs space-y-3">
              <div className="border-b border-[#0A0A0A] pb-2 flex justify-between">
                <span className="text-[#666666]">DOKTER:</span>
                <span className="font-bold">{clinicConfig.doctorName.toUpperCase()}</span>
              </div>
              <div className="border-b border-[#0A0A0A] pb-2 flex justify-between">
                <span className="text-[#666666]">SURAT IZIN:</span>
                <span className="font-bold">{clinicConfig.doctorCredentials.toUpperCase()}</span>
              </div>
              <div className="border-b border-[#0A0A0A] pb-2 flex justify-between">
                <span className="text-[#666666]">LOKASI:</span>
                <span className="font-bold">CIBODAS, TANGERANG</span>
              </div>
              <div className="pt-2 text-[11px] text-[#666666]">
                * Pelayanan malam s/d 21.00 WIB berlaku khusus dengan janji temu (By appointment only).
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Services List */}
      <section id="services-bold" className="border-b-2 border-[#0A0A0A] py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-baseline mb-12 border-b-2 border-[#0A0A0A] pb-4">
            <h2 className="font-extrabold text-3xl md:text-5xl uppercase tracking-tighter">
              LAYANAN KLINIS
            </h2>
            <span className="font-mono text-xs font-bold text-[#0038FF]">
              [ 07 TINDAKAN ]
            </span>
          </div>

          <div className="divide-y-2 border-y-2 border-[#0A0A0A]">
            {clinicConfig.services.map((service) => (
              <div
                key={service.id}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-center group hover:bg-[#F2F2F2] px-4 transition-colors"
              >
                <div className="md:col-span-1 font-mono font-bold text-sm text-[#0038FF]">
                  [{service.number}]
                </div>
                <div className="md:col-span-5 font-bold text-xl uppercase tracking-tight">
                  {service.title}
                </div>
                <div className="md:col-span-4 text-xs font-mono text-[#555555]">
                  {service.description}
                </div>
                <div className="md:col-span-2 text-right">
                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppBooking('concept3_service', service.title)}
                    className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#0038FF] hover:text-black uppercase"
                  >
                    <span>TANYAKAN</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Clinical Documentation */}
      <section className="border-b-2 border-[#0A0A0A] py-16 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-baseline mb-8 border-b-2 border-[#0A0A0A] pb-4">
            <h2 className="font-extrabold text-3xl md:text-5xl uppercase tracking-tighter">
              DOKUMENTASI FASILITAS
            </h2>
            <span className="font-mono text-xs font-bold text-[#0038FF]">
              [ 03 FOTO ASLI ]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-[#0A0A0A] bg-white">
              <div className="aspect-[4/3] overflow-hidden border-b-2 border-[#0A0A0A]">
                <img
                  src={clinicConfig.images.treatmentRoom}
                  alt="Dental unit ruang periksa drg. Ummi Kaltsum"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 font-mono text-xs space-y-1">
                <div className="font-bold text-sm text-[#0038FF]">[01] RUANG PERIKSA UTAMA</div>
                <p className="text-[#666666]">Unit dental elektrik higienis dengan pencahayaan LED terfokus.</p>
              </div>
            </div>

            <div className="border-2 border-[#0A0A0A] bg-white">
              <div className="aspect-[4/3] overflow-hidden border-b-2 border-[#0A0A0A]">
                <img
                  src={clinicConfig.images.doctorPatient}
                  alt="drg. Ummi Kaltsum saat memeriksa pasien anak"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 font-mono text-xs space-y-1">
                <div className="font-bold text-sm text-[#0038FF]">[02] DOKTER &amp; PASIEN</div>
                <p className="text-[#666666]">Pelayanan langsung drg. Ummi Kaltsum yang ramah dan telaten.</p>
              </div>
            </div>

            <div className="border-2 border-[#0A0A0A] bg-white">
              <div className="aspect-[4/3] overflow-hidden border-b-2 border-[#0A0A0A]">
                <img
                  src={clinicConfig.images.waitingArea}
                  alt="Meja konsultasi personal"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4 font-mono text-xs space-y-1">
                <div className="font-bold text-sm text-[#0038FF]">[03] AREA KONSULTASI</div>
                <p className="text-[#666666]">Meja anamnesis rekam medis dan konsultasi diagnosis pasien.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Location */}
      <section id="schedule-bold" className="border-b-2 border-[#0A0A0A] py-16 px-6 md:px-12 bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-extrabold text-3xl md:text-4xl uppercase tracking-tight">
              JAM PRAKTIK
            </h2>
            
            <div className="border-2 border-[#0A0A0A] bg-white divide-y-2 border-[#0A0A0A] font-mono text-xs">
              <div className="p-4 flex justify-between">
                <span className="font-bold">SENIN – JUMAT</span>
                <span>{clinicConfig.schedule.weekdays.hours}</span>
              </div>
              <div className="p-4 flex justify-between">
                <span className="font-bold">SABTU</span>
                <span>{clinicConfig.schedule.saturday.hours}</span>
              </div>
              <div className="p-4 flex justify-between bg-[#EBF0FF] text-[#0038FF] font-bold">
                <span>MALAM S/D 21.00</span>
                <span>BY APPOINTMENT ONLY</span>
              </div>
              <div className="p-4 flex justify-between text-rose-600 font-bold">
                <span>MINGGU &amp; LIBUR</span>
                <span>TUTUP</span>
              </div>
            </div>

            <p className="text-xs font-mono text-[#555555]">
              {clinicConfig.schedule.eveningNotice.policy}
            </p>
          </div>

          <div id="location-bold" className="lg:col-span-6 space-y-6">
            <h2 className="font-extrabold text-3xl md:text-4xl uppercase tracking-tight">
              LOKASI PRAKTIK
            </h2>

            <div className="border-2 border-[#0A0A0A] p-4 bg-white font-mono text-xs space-y-2">
              <div className="font-bold text-sm">{clinicConfig.location.street}</div>
              <div>{clinicConfig.location.neighborhood}, {clinicConfig.location.district}</div>
              <div>{clinicConfig.location.city}, {clinicConfig.location.province} {clinicConfig.location.postalCode}</div>
              <div className="text-[#0038FF] font-bold pt-1">Patokan: {clinicConfig.location.landmark}</div>
            </div>

            {/* Real Exterior Signage */}
            <div className="border-2 border-[#0A0A0A] bg-white overflow-hidden">
              <div className="aspect-[16/9]">
                <img
                  src={clinicConfig.images.practiceExterior}
                  alt="Plang nama resmi drg. Ummi Kaltsum"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-2 border-t-2 border-[#0A0A0A] font-mono text-[11px] text-[#666666] flex justify-between">
                <span>[PLANG PRAKTIK RESMI]</span>
                <span>JL. KAV. PEMDA 3</span>
              </div>
            </div>

            <a
              href={clinicConfig.location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackMapsClick('concept3_maps')}
              className="inline-flex items-center gap-2 bg-[#0A0A0A] text-white px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider hover:bg-[#0038FF] transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span>BUKA GOOGLE MAPS &rarr;</span>
            </a>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 md:px-12 bg-[#0A0A0A] text-white font-mono text-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <div>{clinicConfig.clinicName.toUpperCase()}</div>
        <div className="text-[#888888]">PANUNGGANGAN BARAT &bull; CIBODAS &bull; TANGERANG</div>
      </footer>

    </div>
  );
};
