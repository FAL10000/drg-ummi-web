import React from 'react';
import { MessageCircle } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackWhatsAppBooking } from '../utils/analytics';

export const CtaSection: React.FC = () => {
  return (
    <section className="py-14 md:py-20 bg-[#FAF9F6] border-b border-brand-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-8 text-center space-y-4">
        <div className="text-xs uppercase tracking-widest font-semibold text-brand-slate">
          {clinicConfig.subTagline}
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-navy tracking-tight">
          Ingin membuat jadwal pemeriksaan gigi?
        </h2>
        <p className="text-xs sm:text-sm text-brand-muted max-w-md mx-auto leading-relaxed">
          Silakan hubungi kami melalui WhatsApp untuk reservasi hari dan jam kedatangan Anda.
        </p>
        <div className="pt-2">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppBooking('cta_section_bottom')}
            className="inline-flex items-center gap-2.5 bg-brand-wa hover:bg-brand-waHover text-white px-7 py-3.5 text-xs sm:text-sm uppercase tracking-wider font-bold transition-all shadow-xs active:scale-[0.99]"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Reservasi via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
