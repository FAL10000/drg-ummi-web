import React from 'react';
import { clinicConfig } from '../config/business';
import { Reveal } from '../utils/motion';

export const Atmosphere: React.FC = () => {
  const mainFacility = clinicConfig.facilities[0]; // Dental Unit
  const sideFacilities = clinicConfig.facilities.slice(1, 3); // Waiting room & Sterilization

  return (
    <section id="suasana" className="py-14 md:py-24 border-b border-brand-border overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        <Reveal variant="fade-up" className="max-w-xl mb-8">
          <div className="text-xs uppercase tracking-widest font-semibold text-brand-slate mb-2">
            Dokumentasi Praktik
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-navy tracking-tight">
            Suasana Ruang Pemeriksaan
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-2">
            Dokumentasi sarana ruang periksa dan peralatan praktik dokter gigi.
          </p>
        </Reveal>

        {/* Feature Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Wide panoramic feature (Dental Unit) */}
          <Reveal variant="fade-right" duration={650} className="md:col-span-7 border border-brand-border bg-white shadow-xs hover:shadow-md transition-shadow duration-500 overflow-hidden">
            <div className="relative aspect-[16/10] bg-[#EEF2F6] overflow-hidden group">
              <img
                src={mainFacility.image}
                alt={mainFacility.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-[#FAF9F6] border-t border-brand-border flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] text-brand-muted">
              <span className="font-medium text-brand-navy">{mainFacility.title}</span>
              <span className="font-mono text-brand-slate font-medium">Panunggangan Barat</span>
            </div>
          </Reveal>

          {/* Right pair: Waiting Area & Sterilization */}
          <div className="md:col-span-5 space-y-6">
            {sideFacilities.map((facility, index) => (
              <Reveal
                key={facility.id}
                variant="fade-left"
                delay={index * 110}
                duration={600}
                className="border border-brand-border bg-white shadow-xs hover:shadow-md transition-shadow duration-500 overflow-hidden"
              >
                <div className="relative aspect-[16/9] bg-[#F7F9FB] overflow-hidden group">
                  <img
                    src={facility.image}
                    alt={facility.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-[#FAF9F6] border-t border-brand-border text-[11px] text-brand-muted flex justify-between items-center">
                  <span className="font-medium text-brand-navy">{facility.title}</span>
                  <span className="text-[10px] text-brand-muted hidden sm:inline">{facility.subtitle}</span>
                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
