import React from 'react';
import { Star, MessageCircle, ArrowRight } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackWhatsAppBooking } from '../utils/analytics';
import { useHeroEntrance } from '../utils/motion';

export const Hero: React.FC = () => {
  const stage1 = useHeroEntrance(1, 80);
  const stage2 = useHeroEntrance(2, 80);
  const stage3 = useHeroEntrance(3, 80);
  const stage4 = useHeroEntrance(4, 80);
  const stage5 = useHeroEntrance(5, 80);
  const insetStage = useHeroEntrance(6, 80);

  return (
    <section className="pt-8 pb-14 md:pt-14 md:pb-20 border-b border-brand-border bg-[#FAF9F6] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Narrative Block */}
          <div className="lg:col-span-7 space-y-5">
            <div style={stage1.style} className="text-xs uppercase tracking-widest text-brand-slate font-semibold">
              Panunggangan Barat · Cibodas, Kota Tangerang
            </div>

            <h1
              style={stage2.style}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-brand-navy leading-[1.2] tracking-tight"
            >
              Dokter gigi keluarga di Panunggangan Barat.
            </h1>

            <div style={stage3.style} className="space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed max-w-xl font-normal">
                Bersama <strong>{clinicConfig.doctorName}</strong>, melayani konsultasi dan pemeriksaan kesehatan gigi untuk anak-anak hingga dewasa di Panunggangan Barat, Cibodas, dan sekitarnya.
              </p>

              {/* Google Trust Line */}
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-brand-muted">
                <div className="flex text-amber-500" aria-label="Rating 5.0 bintang">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span>
                  <strong className="text-brand-navy font-semibold">5.0 di Google</strong> · {clinicConfig.googleRating.reviewCount} ulasan
                </span>
              </div>
            </div>

            {/* CTA: One Obvious Primary WhatsApp + Secondary Text Link */}
            <div style={stage4.style} className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppBooking('hero_primary_cta')}
                className="group inline-flex items-center justify-center gap-2.5 bg-brand-wa hover:bg-brand-waHover text-white px-6 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold transition-all shadow-xs hover:shadow-md active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                <span>Reservasi via WhatsApp</span>
              </a>

              <a
                href="#lokasi"
                className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-brand-slate hover:text-brand-navy transition-colors py-2"
              >
                <span>Petunjuk Lokasi &amp; Peta</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Hero Visual: Real Photography Leading the Composition */}
          <div className="lg:col-span-5" style={stage5.style}>
            <div className="border border-brand-border bg-white shadow-xs hover:shadow-md transition-shadow duration-500 p-2 sm:p-2.5">
              <div className="relative aspect-[4/4.8] bg-slate-100 overflow-hidden group">
                <img
                  src={clinicConfig.images.doctorPortrait}
                  alt={`Potret ${clinicConfig.doctorName} - Praktik Dokter Gigi Mandiri di Panunggangan Barat, Cibodas`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  loading="eager"
                />

                {/* Secondary Inset Thumbnail: Ruang Periksa */}
                <div
                  style={insetStage.style}
                  className="absolute bottom-2.5 right-2.5 w-28 sm:w-32 bg-white p-1 border border-brand-border/80 shadow-xs hover:shadow-sm transition-all duration-300 hover:scale-[1.03]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={clinicConfig.images.treatmentRoom}
                      alt="Ruang periksa dental unit"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-[9px] font-mono text-center text-brand-muted pt-1">
                    Ruang Periksa
                  </div>
                </div>
              </div>

              <div className="pt-2 px-1 text-[11px] text-brand-muted flex justify-between items-center">
                <span className="font-serif font-medium text-brand-navy">{clinicConfig.doctorName}</span>
                <span>Panunggangan Barat, Cibodas</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
