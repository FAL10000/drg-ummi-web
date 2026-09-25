import React from 'react';
import { clinicConfig } from '../config/business';

export const Atmosphere: React.FC = () => {
  const mainFacility = clinicConfig.facilities[0]; // Dental Unit
  const sideFacilities = clinicConfig.facilities.slice(1, 3); // Waiting room & Sterilization

  return (
    <section id="suasana" className="py-14 md:py-24 border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        <div className="max-w-xl mb-8">
          <div className="text-xs uppercase tracking-widest font-semibold text-brand-slate mb-2">
            Dokumentasi Praktik
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-navy tracking-tight">
            Suasana Ruang Pemeriksaan
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-2">
            Dokumentasi sarana ruang periksa dan peralatan praktik dokter gigi.
          </p>
        </div>

        {/* Feature Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Wide panoramic feature (Dental Unit) */}
          <div className="md:col-span-7 border border-brand-border bg-white shadow-xs overflow-hidden">
            <div className="relative aspect-[16/10] bg-[#EEF2F6] overflow-hidden">
              <img
                src={mainFacility.image}
                alt={mainFacility.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-[#FAF9F6] border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-brand-muted">
              <span className="font-medium text-brand-navy">{mainFacility.title}</span>
              <span className="font-mono text-brand-slate font-medium">Panunggangan Barat</span>
            </div>
          </div>

          {/* Right pair: Waiting Area & Sterilization */}
          <div className="md:col-span-5 space-y-6">
            {sideFacilities.map((facility) => (
              <div
                key={facility.id}
                className="border border-brand-border bg-white shadow-xs overflow-hidden"
              >
                <div className="relative aspect-[16/9] bg-[#F7F9FB] overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-[#FAF9F6] border-t border-brand-border text-[11px] text-brand-muted flex justify-between items-center">
                  <span className="font-medium text-brand-navy">{facility.title}</span>
                  <span className="text-[10px] text-brand-muted hidden sm:inline">{facility.subtitle}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
