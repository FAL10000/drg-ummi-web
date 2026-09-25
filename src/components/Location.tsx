import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackMapsClick, trackWhatsAppBooking } from '../utils/analytics';

export const Location: React.FC = () => {
  const { location } = clinicConfig;

  return (
    <section id="lokasi" className="py-14 md:py-24 border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Address Narrative */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <div className="text-xs uppercase tracking-widest font-semibold text-brand-slate mb-2">
                Lokasi Praktik
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-brand-navy tracking-tight">
                Alamat &amp; Petunjuk Kedatangan
              </h2>
            </div>

            <div className="border-t border-b border-brand-border py-4 space-y-2 text-xs sm:text-sm">
              <div className="font-semibold text-brand-navy text-base font-serif">
                {location.street}
              </div>
              <div className="text-brand-muted">
                {location.neighborhood}, {location.district}
              </div>
              <div className="text-brand-muted">
                {location.city}, {location.province} {location.postalCode}
              </div>
              <div className="pt-2 text-xs text-brand-slate font-medium bg-[#FAF9F6] p-2.5 border-l-2 border-brand-slate">
                <strong>Patokan:</strong> {location.landmark}
              </div>
            </div>

            {/* Real outdoor signage/exterior photo */}
            <div className="border border-brand-border bg-white shadow-xs overflow-hidden">
              <div className="relative aspect-[16/9] bg-brand-lightBlue overflow-hidden">
                <img
                  src={clinicConfig.images.practiceExterior}
                  alt="Plang nama resmi Praktek Dokter Gigi drg. Ummi Kaltsum di Jl. Kav. Pemda 3"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute top-2.5 right-2.5">
                  <span className="font-mono text-[9px] text-brand-navy bg-white/95 backdrop-blur-xs px-2 py-0.5 border border-brand-border font-medium">
                    Plang Nama Praktik
                  </span>
                </div>
              </div>
              <div className="p-3 bg-[#FAF9F6] border-t border-brand-border text-[11px] text-brand-muted flex justify-between items-center">
                <span>Papan Nama Resmi Terpasang di Depan Rumah Praktik</span>
                <span className="font-mono text-[10px] text-brand-slate">Kav. Pemda 3</span>
              </div>
            </div>

            {/* Direction Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMapsClick('location_section_maps_btn')}
                className="inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-slate text-white px-5 py-3 text-xs uppercase tracking-wider font-semibold transition-colors shadow-xs"
              >
                <MapPin className="w-4 h-4" />
                <span>Buka di Google Maps</span>
              </a>

              <a
                href={buildWhatsAppUrl("Hallo Dok, saya sedang menuju ke lokasi praktik dan ingin mengonfirmasi patokan alamat.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppBooking('location_direction_route_wa')}
                className="inline-flex items-center justify-center gap-1.5 border border-brand-border hover:border-brand-navy bg-white text-brand-navy px-4 py-3 text-xs uppercase tracking-wider font-semibold transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Panduan Rute via WA</span>
              </a>
            </div>

          </div>

          {/* Embedded Google Maps Frame */}
          <div className="lg:col-span-7">
            <div className="border border-brand-border bg-brand-lightBlue aspect-[4/3] sm:aspect-[16/10] overflow-hidden shadow-xs relative">
              <iframe
                title="Peta Lokasi Praktek drg. Ummi Kaltsum Cibodas Tangerang"
                src={location.googleMapsEmbedUrl}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-2 text-[11px] text-brand-muted flex items-center justify-between">
              <span>Jl. Kav. Pemda 3 No. 241A, Panunggangan Barat</span>
              <a
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMapsClick('location_iframe_caption')}
                className="text-brand-slate font-semibold hover:underline"
              >
                Perbesar Peta →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
