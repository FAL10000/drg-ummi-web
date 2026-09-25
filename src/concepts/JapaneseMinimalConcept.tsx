import React from 'react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackWhatsAppBooking, trackMapsClick } from '../utils/analytics';

export const JapaneseMinimalConcept: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0] text-[#1C1D1F] selection:bg-[#2B384A] selection:text-white font-sans antialiased pb-24 md:pb-0">
      
      {/* Micro Notice Bar */}
      <div className="px-6 md:px-16 py-3 border-b border-[#1C1D1F]/15 text-[10px] md:text-xs font-mono text-[#73757A] flex justify-between items-center tracking-widest uppercase">
        <span>{clinicConfig.subTagline}</span>
        <span className="hidden md:inline">Praktik Mandiri · Janji Temu Terjadwal</span>
        <span>★ {clinicConfig.googleRating.score.toFixed(1)} di Google · {clinicConfig.googleRating.reviewCount} Ulasan</span>
      </div>

      {/* Header */}
      <header className="px-6 md:px-16 py-8 md:py-10 border-b border-[#1C1D1F]/15 flex justify-between items-baseline">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#73757A] block mb-1">
            {clinicConfig.tagline}
          </span>
          <a href="#" className="font-['Shippori_Mincho'] text-2xl md:text-3xl tracking-tight text-[#1C1D1F] hover:text-[#2B384A] transition-colors">
            {clinicConfig.doctorName}
          </a>
        </div>

        <div className="flex items-center gap-8 md:gap-12">
          <nav className="hidden lg:flex gap-8 text-xs font-mono tracking-widest uppercase text-[#73757A]">
            <a href="#katalog" className="hover:text-[#1C1D1F] transition-colors">01 Layanan</a>
            <a href="#arsitektur" className="hover:text-[#1C1D1F] transition-colors">02 Ruang &amp; Peralatan</a>
            <a href="#alamat" className="hover:text-[#1C1D1F] transition-colors">03 Jadwal &amp; Lokasi</a>
          </nav>
          
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppBooking('concept2_header')}
            className="text-xs font-mono uppercase tracking-wider px-4 py-2 border border-[#1C1D1F] text-[#1C1D1F] hover:bg-[#1C1D1F] hover:text-[#F7F5F0] transition-colors"
          >
            Reservasi via WhatsApp
          </a>
        </div>
      </header>

      {/* Hero: Japanese Minimal */}
      <section className="border-b border-[#1C1D1F]/15 relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[80vh]">
          
          {/* Left Vertical Typographic Column */}
          <div className="lg:col-span-1 border-r border-[#1C1D1F]/15 hidden lg:flex flex-col justify-between items-center py-12 px-2">
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#73757A] uppercase [writing-mode:vertical-rl] rotate-180">
              KEHENINGAN &bull; KETENANGAN &bull; KENYAMANAN
            </span>
            <div className="w-px h-16 bg-[#1C1D1F]/20"></div>
            <span className="font-mono text-[10px] text-[#73757A] tracking-widest">
              CIBODAS · TANGERANG
            </span>
          </div>

          {/* Center Dominant: Clear Photo Card */}
          <div className="lg:col-span-7 border-r border-[#1C1D1F]/15 relative bg-[#ECE8DF] flex flex-col justify-between">
            <div className="p-6 md:p-10 z-10 flex justify-between items-center">
              <span className="font-mono text-xs text-[#73757A] tracking-wider uppercase">
                Dokter Penanggung Jawab
              </span>
              <span className="inline-block text-[11px] font-mono px-2.5 py-0.5 border border-[#1C1D1F]/20 text-[#1C1D1F]">
                Praktik Mandiri
              </span>
            </div>

            <div className="px-6 md:px-14 pb-8 flex justify-center items-center">
              <div className="w-full max-w-md bg-[#FAF8F5] border border-[#1C1D1F]/20 shadow-xs">
                <div className="aspect-[4/4.5] overflow-hidden bg-[#E2DDCF]">
                  <img
                    src={clinicConfig.images.doctorPatient}
                    alt="drg. Ummi Kaltsum memeriksa pasien anak dalam suasana praktik mandiri"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="p-4 sm:p-5 border-t border-[#1C1D1F]/15 bg-[#FAF8F5]">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[#73757A] mb-0.5">
                    {clinicConfig.doctorCredentials}
                  </div>
                  <div className="font-['Shippori_Mincho'] text-xl text-[#1C1D1F] tracking-tight font-medium">
                    {clinicConfig.doctorName}
                  </div>
                  <p className="text-xs text-[#73757A] mt-1 leading-relaxed font-light">
                    Pemeriksaan personal tanpa ketergesaan untuk kenyamanan keluarga di Cibodas.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-[#1C1D1F]/15 p-4 md:px-8 bg-[#F2EFE7] flex justify-between items-center text-[11px] font-mono text-[#73757A]">
              <span>DOKUMENTASI PRAKTEK MANDIRI</span>
              <span>KOTA TANGERANG {clinicConfig.location.postalCode}</span>
            </div>
          </div>

          {/* Right Column: Spatial Typography */}
          <div className="lg:col-span-4 p-8 md:p-12 flex flex-col justify-between bg-[#F7F5F0]">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-[#2B384A]"></span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#73757A]">
                  Praktik Dokter Gigi Mandiri
                </span>
              </div>

              <h1 className="font-['Shippori_Mincho'] text-3xl md:text-4xl lg:text-[2.65rem] text-[#1C1D1F] leading-[1.28] tracking-tight mb-6">
                Pemeriksaan gigi yang hening, tenang, dan bersahaja.
              </h1>

              <p className="text-sm md:text-[15px] text-[#73757A] leading-relaxed font-light mb-8">
                Kami membatasi ritme tindakan agar setiap pasien anak, dewasa, hingga lansia didengarkan secara menyeluruh dalam ruang yang bersih dan tidak mengintimidasi.
              </p>

              <div className="space-y-4 py-6 border-t border-b border-[#1C1D1F]/15">
                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-[#73757A] font-mono">Ulasan Google</span>
                  <span className="font-mono font-semibold text-[#1C1D1F]">{clinicConfig.googleRating.score.toFixed(1)} / 5.0 ({clinicConfig.googleRating.reviewCount} Ulasan)</span>
                </div>
                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-[#73757A] font-mono">Sistem Periksa</span>
                  <span className="font-mono text-[#1C1D1F]">Janji Temu Terkonfirmasi</span>
                </div>
                <div className="flex justify-between items-baseline text-xs">
                  <span className="text-[#73757A] font-mono">Lokasi</span>
                  <span className="font-mono text-[#1C1D1F]">{clinicConfig.location.neighborhood}, {clinicConfig.location.district}</span>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppBooking('concept2_hero')}
                className="w-full flex justify-between items-center bg-[#2B384A] hover:bg-[#1C1D1F] text-[#F7F5F0] py-4 px-6 text-xs font-mono uppercase tracking-widest transition-colors shadow-xs"
              >
                <span>Reservasi via WhatsApp</span>
                <span>&rarr;</span>
              </a>
              <p className="font-mono text-[10px] text-[#73757A] mt-2.5 text-center">
                Pesan langsung terhubung dengan drg. Ummi
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Services Index */}
      <section id="katalog" className="border-b border-[#1C1D1F]/15 py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#1C1D1F]/15">
            <div>
              <span className="font-mono text-[11px] text-[#73757A] uppercase tracking-widest block mb-2">
                Daftar Perawatan
              </span>
              <h2 className="font-['Shippori_Mincho'] text-3xl md:text-4xl text-[#1C1D1F] tracking-tight">
                Layanan Perawatan Gigi
              </h2>
            </div>
            <p className="font-mono text-xs text-[#73757A] max-w-sm mt-4 md:mt-0 leading-relaxed">
              Tindakan konservatif mengedepankan pertahanan gigi asli dengan penjelasan transparan sebelum dimulai.
            </p>
          </div>

          <div className="divide-y divide-[#1C1D1F]/15">
            {clinicConfig.services.map((service) => (
              <div
                key={service.id}
                className="py-5 md:py-7 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline group hover:bg-[#ECE8DF]/40 transition-colors px-2"
              >
                <div className="md:col-span-1 font-mono text-xs text-[#73757A]">{service.number}</div>
                <div className="md:col-span-4 font-['Shippori_Mincho'] text-lg md:text-xl text-[#1C1D1F]">
                  {service.title}
                </div>
                <div className="md:col-span-5 text-xs sm:text-sm text-[#73757A] font-light leading-relaxed">
                  {service.description}
                </div>
                <div className="md:col-span-2 md:text-right font-mono text-xs">
                  <a
                    href={buildWhatsAppUrl(service.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppBooking('concept2_service', service.title)}
                    className="text-[#2B384A] hover:underline"
                  >
                    Konsultasi &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ruang & Peralatan (Local Images) */}
      <section id="arsitektur" className="border-b border-[#1C1D1F]/15 py-16 md:py-20 px-6 md:px-16 bg-[#F2EFE7]/50">
        <div className="max-w-[1400px] mx-auto">
          <div className="max-w-xl mb-10">
            <span className="font-mono text-[11px] text-[#73757A] uppercase tracking-widest block mb-2">
              Dokumentasi Praktik
            </span>
            <h2 className="font-['Shippori_Mincho'] text-3xl md:text-4xl text-[#1C1D1F] tracking-tight">
              Sarana Ruang &amp; Peralatan
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicConfig.facilities.slice(0, 4).map((f) => (
              <div key={f.id} className="border border-[#1C1D1F]/15 bg-white">
                <div className="aspect-[4/3] overflow-hidden bg-[#ECE8DF]">
                  <img src={f.image} alt={f.alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-4 font-mono text-xs text-[#73757A] space-y-1">
                  <div className="font-['Shippori_Mincho'] text-sm text-[#1C1D1F] font-semibold">{f.title}</div>
                  <p className="text-[11px] leading-relaxed line-clamp-2">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Location */}
      <section id="alamat" className="py-16 md:py-20 px-6 md:px-16 border-b border-[#1C1D1F]/15">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-[11px] text-[#73757A] uppercase tracking-widest block">
              Waktu &amp; Lokasi Praktik
            </span>
            <h2 className="font-['Shippori_Mincho'] text-3xl text-[#1C1D1F]">
              Waktu Pelayanan &amp; Kedatangan
            </h2>
            
            <div className="divide-y divide-[#1C1D1F]/15 font-mono text-xs text-[#73757A]">
              <div className="py-3 flex justify-between">
                <span className="text-[#1C1D1F]">{clinicConfig.schedule.monday.days}</span>
                <span>{clinicConfig.schedule.monday.hours}</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-[#1C1D1F]">{clinicConfig.schedule.tuesdayToSaturday.days}</span>
                <span>{clinicConfig.schedule.tuesdayToSaturday.hours}</span>
              </div>
              <div className="py-3 flex justify-between">
                <span className="text-[#1C1D1F]">{clinicConfig.schedule.sunday.days}</span>
                <span>{clinicConfig.schedule.sunday.hours}</span>
              </div>
              <div className="py-3 flex justify-between text-[#2B384A] font-semibold">
                <span>Jadwal s/d 21.00</span>
                <span>Dengan Reservasi</span>
              </div>
            </div>

            <div className="text-[11px] text-[#73757A] bg-[#F7F5F0] p-3 border-l-2 border-[#1C1D1F]">
              <span className="font-medium text-[#1C1D1F] block mb-1">{clinicConfig.schedule.eveningNotice.title}</span>
              {clinicConfig.schedule.eveningNotice.description} {clinicConfig.schedule.eveningNotice.policy}
            </div>

            <p className="text-xs text-[#73757A] leading-relaxed font-light">
              Alamat: {clinicConfig.location.fullAddress} (Patokan: {clinicConfig.location.landmark}).
            </p>

            <div className="flex gap-4 pt-2">
              <a
                href={clinicConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMapsClick('concept2_maps')}
                className="px-5 py-3 border border-[#1C1D1F] text-xs font-mono uppercase tracking-wider text-[#1C1D1F] hover:bg-[#1C1D1F] hover:text-white transition-colors"
              >
                Buka Google Maps &rarr;
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 border border-[#1C1D1F]/15 aspect-[16/10] overflow-hidden">
            <iframe
              title="Peta Praktek drg. Ummi Kaltsum"
              src={clinicConfig.location.googleMapsEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="px-6 md:px-16 py-12 text-center font-mono text-xs text-[#73757A]">
        <div>{clinicConfig.clinicName} · {clinicConfig.doctorCredentials}</div>
        <div className="mt-2 text-[10px]">© {new Date().getFullYear()} · Panunggangan Barat, Cibodas, Tangerang</div>
      </footer>

    </div>
  );
};
