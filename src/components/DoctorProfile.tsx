import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackWhatsAppBooking } from '../utils/analytics';

export const DoctorProfile: React.FC = () => {
  return (
    <section id="profil" className="py-14 md:py-24 border-b border-brand-border bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Doctor Feature Visual */}
          <div className="lg:col-span-5">
            <div className="border border-brand-border bg-white shadow-xs overflow-hidden">
              <div className="relative aspect-[4/5] bg-slate-100 overflow-hidden group">
                <img
                  src={clinicConfig.images.doctorPortrait}
                  alt="Potret drg. Ummi Kaltsum dokter gigi penanggung jawab praktek mandiri"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-brand-navy/90 backdrop-blur-md text-[10px] font-mono uppercase tracking-wider text-slate-100 border border-white/20 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{clinicConfig.doctorCredentials}</span>
                  </div>
                  <div className="font-serif text-xl sm:text-2xl text-white font-medium">
                    {clinicConfig.doctorName}
                  </div>
                  <p className="text-[11px] text-slate-200 mt-1 line-clamp-2">
                    Pelayanan kesehatan gigi keluarga di wilayah Panunggangan Barat, Cibodas.
                  </p>
                </div>
              </div>

              <div className="p-3 bg-[#FAF9F6] border-t border-brand-border text-[11px] text-brand-muted font-mono flex items-center justify-between">
                <span>Praktik Dokter Gigi Mandiri</span>
                <span>{clinicConfig.location.district}, {clinicConfig.location.city}</span>
              </div>
            </div>
          </div>

          {/* Right Editorial Profile Text */}
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs uppercase tracking-widest font-semibold text-brand-slate">
              Tentang Praktik
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-navy tracking-tight leading-tight">
              Pemeriksaan dan konsultasi langsung bersama dokter gigi.
            </h2>

            <blockquote className="border-l-2 border-brand-slate pl-4 italic text-brand-dark text-sm sm:text-base bg-[#FAF9F6] py-2">
              &ldquo;Kesehatan gigi dimulai dari pemahaman yang baik. Kami meluangkan waktu mendengarkan keluhan pasien agar rencana tindakan dipahami bersama.&rdquo;
            </blockquote>

            <div className="space-y-3 text-xs sm:text-sm text-brand-muted leading-relaxed">
              <p>
                Sebagai dokter gigi praktik mandiri di Panunggangan Barat, <strong>{clinicConfig.doctorName}</strong> memberikan pelayanan langsung untuk setiap pasien. Pasien anak hingga dewasa mendapatkan penjelasan kondisi gigi dengan komunikasi yang jelas.
              </p>
              <p>
                Ruang praktik tertata rapi untuk kenyamanan konsultasi dan pemeriksaan gigi.
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2 text-xs text-brand-muted">
              <MapPin className="w-4 h-4 text-brand-slate shrink-0" />
              <span>Praktik mandiri berlokasi di Panunggangan Barat, Cibodas, Kota Tangerang.</span>
            </div>

            <div className="pt-2">
              <a
                href={buildWhatsAppUrl("Hallo Dok, saya ingin berkonsultasi mengenai keluhan gigi saya.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppBooking('doctor_profile')}
                className="inline-flex items-center gap-2 bg-brand-navy hover:bg-brand-slate text-white px-5 py-3 text-xs uppercase tracking-wider font-semibold transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Konsultasi dengan drg. Ummi</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
