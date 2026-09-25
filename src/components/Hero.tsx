import React from 'react';
import { Star, MessageCircle, ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackWhatsAppBooking, trackMapsClick } from '../utils/analytics';

export const Hero: React.FC = () => {
  return (
    <section className="pt-8 pb-14 md:pt-14 md:pb-24 border-b border-brand-border hero-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Narrative Block */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-brand-slate font-semibold bg-[#EBF1F6] px-3 py-1 border border-[#DCE8F2]">
              <span className="w-2 h-2 rounded-full bg-brand-slate"></span>
              <span>Praktik Mandiri di Panunggangan Barat</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-brand-navy leading-[1.2] tracking-tight">
              {clinicConfig.heroQuote}
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-brand-muted leading-relaxed max-w-xl font-normal">
              Bersama <strong>{clinicConfig.doctorName}</strong>, setiap pemeriksaan dilakukan dalam suasana yang nyaman tanpa rasa tergesa-gesa. Melayani anak-anak, dewasa, dan lansia di wilayah Panunggangan Barat, Cibodas, dan sekitarnya.
            </p>

            {/* Google Trust Badge (Factual, no fabricated reviews) */}
            <div className="pt-1 flex flex-wrap items-center gap-2.5 sm:gap-3 text-sm text-brand-dark">
              <div className="flex text-amber-500" aria-label="Rating 5.0 bintang">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <div className="text-xs sm:text-sm text-brand-muted">
                <strong className="text-brand-navy font-semibold">
                  {clinicConfig.googleRating.score.toFixed(1)} di Google
                </strong>{' '}
                dari {clinicConfig.googleRating.reviewCount} ulasan warga
              </div>
              <span className="text-brand-border hidden sm:inline">|</span>
              <a
                href={clinicConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMapsClick('hero_rating_badge')}
                className="text-xs font-semibold text-brand-slate hover:underline inline-flex items-center gap-1"
              >
                <span>Lihat di Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppBooking('hero_primary_cta')}
                className="inline-flex items-center justify-center gap-2.5 bg-brand-wa hover:bg-brand-waHover text-white px-6 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold transition-all shadow-xs active:scale-[0.99]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reservasi via WhatsApp</span>
              </a>

              <a
                href="#lokasi"
                className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm uppercase tracking-wider font-semibold text-brand-slate hover:text-brand-navy py-3 px-4 border border-brand-slate/20 bg-white hover:bg-brand-lightBlue transition-all"
              >
                <span>Petunjuk Arah &amp; Peta</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Hero Visual Card */}
          <div className="lg:col-span-5 mt-4 lg:mt-0">
            <div className="relative border border-brand-border bg-white shadow-xs overflow-hidden">
              <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                <img
                  src={clinicConfig.images.hero}
                  alt="Dental unit dan ruang periksa drg. Ummi Kaltsum Cibodas Tangerang"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-[11px] font-mono bg-brand-navy/90 backdrop-blur-md px-3 py-1.5 border border-white/20 text-slate-100 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Praktik Sore 16.00 – 20.00</span>
                  </div>
                  <div className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono bg-white/90 backdrop-blur-md px-2.5 py-1 text-brand-navy font-semibold border border-brand-border">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-slate" />
                    <span>SIP Aktif</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 bg-white border-t border-brand-border flex justify-between items-center text-[11px] text-brand-muted">
                <span className="font-medium text-brand-navy">Ruang Periksa Personal &amp; Higienis</span>
                <span className="font-mono text-[10px] bg-brand-lightBlue px-2 py-0.5 border border-[#DCE8F2]">
                  Cibodas, Tangerang
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
