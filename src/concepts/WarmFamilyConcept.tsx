import React from 'react';
import { Star, MessageCircle, MapPin, Clock } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackWhatsAppBooking, trackMapsClick } from '../utils/analytics';

export const WarmFamilyConcept: React.FC = () => {
  return (
    <div className="bg-[#FAF4EB] text-[#382821] font-['Outfit',sans-serif] selection:bg-[#C46D50] selection:text-white pb-24 md:pb-0">
      
      {/* Friendly Neighborhood Badge Bar */}
      <div className="bg-[#F0E6D8] border-b border-[#E3D6C5] px-6 py-2.5 text-xs text-[#5D473B] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#C46D50]"></span>
          <span>Praktik dokter gigi keluarga di lingkungan Kavling Pemda 3</span>
        </div>
        <div className="hidden sm:flex items-center gap-4 text-[11px] font-medium">
          <span>{clinicConfig.subTagline}</span>
          <span className="text-[#C46D50] font-semibold">★ {clinicConfig.googleRating.score.toFixed(1)} di Google ({clinicConfig.googleRating.reviewCount} Ulasan Pasien)</span>
        </div>
      </div>

      {/* Warm Header */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <div>
          <a href="#" className="block group">
            <span className="font-['Lora',serif] text-2xl sm:text-3xl font-semibold text-[#433129] tracking-tight block">
              {clinicConfig.doctorName}
            </span>
            <span className="text-xs text-[#C46D50] font-medium tracking-wide">
              {clinicConfig.tagline} &bull; Ramah Keluarga
            </span>
          </a>
        </div>

        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-sm text-[#5D473B] font-medium">
            <a href="#layanan-keluarga" className="hover:text-[#C46D50] transition-colors">Perawatan Keluarga</a>
            <a href="#jadwal-keluarga" className="hover:text-[#C46D50] transition-colors">Jam Praktik</a>
            <a href="#lokasi-keluarga" className="hover:text-[#C46D50] transition-colors">Petunjuk Arah</a>
          </nav>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppBooking('concept2_header')}
            className="bg-brand-wa hover:bg-brand-waHover text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide flex items-center gap-2 shadow-xs transition-all hover:scale-102"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Reservasi via WhatsApp</span>
          </a>
        </div>
      </header>

      {/* HERO: Welcoming Residential Atmosphere */}
      <section className="max-w-6xl mx-auto px-6 pt-4 pb-14">
        <div className="bg-[#FFFDF9] rounded-3xl border border-[#EADBCE] p-8 md:p-14 shadow-sm relative overflow-hidden">
          
          {/* Handwritten Accent Label */}
          <div className="absolute top-6 right-8 hidden md:block">
            <span className="font-['Caveat',cursive] text-2xl text-[#C46D50] -rotate-6 block">
              Dekat dari rumah, ramah untuk anak &amp; orang tua ~
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Storytelling */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5ECE1] text-[#C46D50] text-xs font-medium">
                <span>Rumah Praktik Dokter Gigi &bull; Panunggangan Barat</span>
              </div>

              <h1 className="font-['Lora',serif] text-3xl sm:text-4xl lg:text-5xl text-[#382821] leading-tight">
                Dokter gigi keluarga yang dekat, sabar, dan bersahaja.
              </h1>

              <p className="text-base sm:text-lg text-[#614F44] leading-relaxed">
                Pemeriksaan gigi tidak perlu membuat tegang. Bersama <strong>{clinicConfig.doctorName}</strong>, kami melayani keluarga di lingkungan Panunggangan Barat dan sekitarnya dengan suasana rumahan yang tenang, jujur, dan penuh kehangatan.
              </p>

              {/* Organic Trust Box */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <div className="flex items-center gap-1.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span className="text-sm text-[#614F44]">
                  <strong>5.0 Bintang</strong> dari 55 ulasan warga sekitar
                </span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppBooking('concept2_hero')}
                  className="inline-flex items-center justify-center gap-2 bg-[#C46D50] hover:bg-[#a85338] text-white px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Buat Janji Kunjungan</span>
                </a>
                <a
                  href="#lokasi-keluarga"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-[#433129] border border-[#DDD0C2] hover:bg-[#F5ECE1] transition-all"
                >
                  <MapPin className="w-4 h-4 text-[#C46D50]" />
                  <span>Lihat Lokasi &amp; Peta</span>
                </a>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#EADBCE] bg-[#FAF4EB] p-2.5 shadow-xs">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white relative group">
                  <img
                    src={clinicConfig.images.doctorPatient}
                    alt="drg. Ummi Kaltsum memeriksa pasien anak dengan senyum ramah"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#382821]/80 via-transparent to-transparent pointer-events-none"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#C46D50] text-[10px] font-bold uppercase tracking-wider mb-1">
                      Dokumentasi Praktik
                    </span>
                    <div className="font-['Lora',serif] text-lg font-semibold text-white">
                      Pemeriksaan Pasien Anak
                    </div>
                    <p className="text-[11px] text-[#F5ECE1] mt-0.5">
                      drg. Ummi melayani pemeriksaan gigi anak dengan pendampingan orang tua.
                    </p>
                  </div>
                </div>
                <div className="p-3 text-center">
                  <span className="font-['Lora',serif] text-sm font-semibold text-[#382821] block">
                    {clinicConfig.doctorName}
                  </span>
                  <span className="text-[11px] text-[#7A6458] mt-0.5 block">
                    {clinicConfig.doctorCredentials} · Panunggangan Barat, Cibodas
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Services Section */}
      <section id="layanan-keluarga" className="max-w-6xl mx-auto px-6 py-14 border-t border-[#EADBCE]">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-wider text-[#C46D50] font-bold">Layanan Sepenuh Hati</span>
          <h2 className="font-['Lora',serif] text-3xl sm:text-4xl text-[#382821] mt-2">
            Perawatan untuk Setiap Anggota Keluarga
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicConfig.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-[#EADBCE] shadow-xs hover:border-[#C46D50] transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FAF4EB] text-[11px] font-semibold text-[#C46D50] mb-3">
                  {service.badge || 'Layanan Gigi'}
                </span>
                <h3 className="font-['Lora',serif] text-lg font-semibold text-[#382821] mb-2">
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
                  onClick={() => trackWhatsAppBooking('concept2_service', service.title)}
                  className="text-xs font-semibold text-[#C46D50] hover:text-[#382821] inline-flex items-center gap-1"
                >
                  <span>Tanyakan Jadwal via WA</span>
                  <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Real Photos Clinic Atmosphere Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-14 border-t border-[#EADBCE]">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-wider text-[#C46D50] font-bold">Suasana Praktik</span>
          <h2 className="font-['Lora',serif] text-2xl sm:text-3xl text-[#382821] mt-2">
            Lingkungan Periksa yang Bersih &amp; Menenangkan
          </h2>
          <p className="text-xs sm:text-sm text-[#7A6458] mt-2">
            Fasilitas praktik mandiri drg. Ummi Kaltsum di Jl. Kav. Pemda 3 Cibodas, Tangerang.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl overflow-hidden border border-[#EADBCE] shadow-xs">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={clinicConfig.images.treatmentRoom}
                alt="Ruang periksa utama praktek drg. Ummi Kaltsum"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <span className="font-['Lora',serif] font-semibold text-[#382821] text-sm block">Ruang Periksa Utama</span>
              <p className="text-xs text-[#7A6458] mt-1">Peralatan dental elektrik terawat dan terjaga higienitasnya.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#EADBCE] shadow-xs">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={clinicConfig.images.waitingArea}
                alt="Area konsultasi personal dokter dan pasien"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <span className="font-['Lora',serif] font-semibold text-[#382821] text-sm block">Area Konsultasi Personal</span>
              <p className="text-xs text-[#7A6458] mt-1">Tempat diskusi dan penjelasan tindakan medis secara transparan.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-[#EADBCE] shadow-xs">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={clinicConfig.images.dentalChair}
                alt="Kursi periksa dental ergonomis"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <span className="font-['Lora',serif] font-semibold text-[#382821] text-sm block">Dental Unit Ergonomis</span>
              <p className="text-xs text-[#7A6458] mt-1">Unit kursi periksa dental untuk tindakan perawatan gigi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule & Evening Policy */}
      <section id="jadwal-keluarga" className="max-w-4xl mx-auto px-6 py-14">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-[#EADBCE] shadow-xs space-y-6">
          <div className="text-center">
            <span className="text-xs uppercase tracking-wider text-[#C46D50] font-bold">Waktu Periksa</span>
            <h2 className="font-['Lora',serif] text-2xl sm:text-3xl text-[#382821] mt-1">
              Jam Buka &amp; Jadwal Praktik
            </h2>
          </div>

          <div className="divide-y divide-[#F0E6D8] text-sm">
            <div className="py-3 flex justify-between">
              <span className="font-medium text-[#382821]">{clinicConfig.schedule.monday.days}</span>
              <span className="font-semibold text-[#C46D50]">{clinicConfig.schedule.monday.hours}</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="font-medium text-[#382821]">{clinicConfig.schedule.tuesdayToSaturday.days}</span>
              <span className="font-semibold text-[#C46D50]">{clinicConfig.schedule.tuesdayToSaturday.hours}</span>
            </div>
            <div className="py-3 flex justify-between">
              <span className="font-medium text-[#382821]">{clinicConfig.schedule.sunday.days}</span>
              <span className="font-semibold text-[#C46D50]">{clinicConfig.schedule.sunday.hours}</span>
            </div>
          </div>

          {/* Evening Notice */}
          <div className="p-4 rounded-xl bg-[#FAF4EB] border border-[#EADBCE] flex items-start gap-3 text-xs text-[#614F44]">
            <Clock className="w-5 h-5 text-[#C46D50] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#382821]">{clinicConfig.schedule.eveningNotice.title}</strong>
              <p className="mt-1">
                {clinicConfig.schedule.eveningNotice.description}
              </p>
              <p className="mt-1 text-[11px] text-[#8C5E47] italic">
                {clinicConfig.schedule.eveningNotice.policy}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section id="lokasi-keluarga" className="max-w-6xl mx-auto px-6 py-14 border-t border-[#EADBCE]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-wider text-[#C46D50] font-bold">Lokasi Rumah Praktik</span>
            <h2 className="font-['Lora',serif] text-2xl sm:text-3xl text-[#382821]">
              Alamat yang Mudah Dijangkau
            </h2>
            <p className="text-sm text-[#614F44] leading-relaxed">
              {clinicConfig.location.fullAddress}
            </p>
            <p className="text-xs text-[#C46D50] font-medium bg-[#F5ECE1] p-3 rounded-lg">
              <strong>Patokan:</strong> {clinicConfig.location.landmark}
            </p>

            {/* Real Practice Signage */}
            <div className="rounded-xl overflow-hidden border border-[#EADBCE] bg-[#FAF4EB]">
              <div className="relative aspect-[16/9]">
                <img
                  src={clinicConfig.images.practiceExterior}
                  alt="Papan nama resmi Praktek Dokter Gigi drg. Ummi Kaltsum di Jl. Kav. Pemda 3"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-2 text-[11px] text-[#7A6458] text-center">
                Papan nama resmi terpasang jelas di depan rumah praktik
              </div>
            </div>

            <div className="pt-2">
              <a
                href={clinicConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMapsClick('concept2_maps')}
                className="inline-flex items-center gap-2 bg-[#382821] hover:bg-[#5D473B] text-white px-5 py-3 rounded-full text-xs font-semibold"
              >
                <MapPin className="w-4 h-4" />
                <span>Buka Petunjuk di Google Maps</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-7 rounded-2xl overflow-hidden border border-[#EADBCE] shadow-xs aspect-[16/10]">
            <iframe
              title="Peta Lokasi drg. Ummi Kaltsum"
              src={clinicConfig.location.googleMapsEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
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
