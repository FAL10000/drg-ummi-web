import React from 'react';
import { ArrowRight } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackWhatsAppBooking } from '../utils/analytics';

export const Services: React.FC = () => {
  return (
    <section id="layanan" className="py-14 md:py-24 border-b border-brand-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-brand-border">
          <div className="max-w-xl">
            <div className="text-xs uppercase tracking-widest font-semibold text-brand-slate mb-2">
              Pelayanan Klinis
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-navy tracking-tight">
              Layanan Perawatan Gigi
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-brand-muted max-w-md mt-3 md:mt-0 leading-relaxed">
            Tindakan dilakukan secara hati-hati dengan penjelasan prosedur yang lugas terlebih dahulu kepada pasien dan keluarga.
          </p>
        </div>

        {/* Numbered Typography List */}
        <div className="divide-y divide-brand-border">
          {clinicConfig.services.map((service) => (
            <div
              key={service.id}
              className="py-5 sm:py-6 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start group hover:bg-white/70 transition-colors px-2 rounded-sm"
            >
              {/* Number */}
              <div className="md:col-span-1 font-mono text-xs sm:text-sm text-brand-muted font-medium pt-1">
                {service.number}
              </div>

              {/* Title & Badge */}
              <div className="md:col-span-4">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="font-serif text-base sm:text-lg text-brand-navy group-hover:text-brand-slate transition-colors font-semibold">
                    {service.title}
                  </h3>
                </div>
                {service.badge && (
                  <span className="inline-block text-[10px] font-mono text-brand-slate bg-brand-lightBlue px-2 py-0.5 border border-[#DCE8F2]">
                    {service.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="md:col-span-5">
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="md:col-span-2 md:text-right pt-1">
                <a
                  href={buildWhatsAppUrl(service.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppBooking('service_list', service.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-brand-slate hover:text-brand-navy transition-colors py-1 px-2 border border-transparent hover:border-brand-border bg-transparent hover:bg-white"
                >
                  <span>Tanyakan</span>
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
