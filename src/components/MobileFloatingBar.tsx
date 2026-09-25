import React from 'react';
import { MapPin, MessageCircle } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackMapsClick, trackWhatsAppBooking } from '../utils/analytics';

export const MobileFloatingBar: React.FC = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-3 bg-[#FAF9F6]/95 backdrop-blur-md border-t border-brand-border md:hidden shadow-lg pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={clinicConfig.location.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackMapsClick('mobile_floating_bar')}
          className="flex flex-col items-center justify-center bg-white text-brand-navy px-3.5 py-2.5 border border-brand-border shrink-0 active:bg-gray-100 transition-colors shadow-xs"
          aria-label="Petunjuk arah Google Maps"
        >
          <MapPin className="w-4 h-4 text-brand-slate" />
          <span className="text-[9px] font-semibold mt-0.5 uppercase tracking-wider">Peta</span>
        </a>

        <a
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppBooking('mobile_floating_bar')}
          className="flex-1 flex items-center justify-center gap-2 bg-brand-wa active:bg-brand-waHover text-white font-bold py-3 px-4 text-xs uppercase tracking-wider shadow-xs transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Reservasi via WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
