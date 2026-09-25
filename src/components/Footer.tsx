import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackPhoneCall, trackWhatsAppBooking, trackMapsClick } from '../utils/analytics';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-slate-300 text-xs py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-700/60">
          
          {/* Clinic Identity & Bio */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <img
                src={clinicConfig.images.logoEmblem}
                alt="Emblem drg. Ummi Kaltsum"
                className="w-7 h-7 rounded-sm opacity-90"
              />
              <span className="font-serif text-lg text-white block">
                {clinicConfig.clinicName}
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Praktik dokter gigi mandiri keluarga di Panunggangan Barat, Kec. Cibodas, Kota Tangerang. Pelayanan personal, tenang, dan higienis.
            </p>
            <div className="text-slate-400 text-xs leading-normal">
              {clinicConfig.location.fullAddress}
            </div>
          </div>

          {/* Operating Schedule */}
          <div className="md:col-span-4 space-y-2">
            <div className="font-mono text-[11px] uppercase tracking-wider text-white font-medium">
              Waktu Pelayanan
            </div>
            <div className="text-slate-400 space-y-1.5 text-xs">
              <div>{clinicConfig.schedule.weekdays.days}: {clinicConfig.schedule.weekdays.hours}</div>
              <div>{clinicConfig.schedule.saturday.days}: {clinicConfig.schedule.saturday.hours}</div>
              <div className="text-emerald-400 font-medium">
                Jadwal malam s/d 21.00: By appointment only
              </div>
              <div>{clinicConfig.schedule.sundayAndHolidays.days}: {clinicConfig.schedule.sundayAndHolidays.hours}</div>
            </div>
          </div>

          {/* Contact & Navigation */}
          <div className="md:col-span-3 space-y-2">
            <div className="font-mono text-[11px] uppercase tracking-wider text-white font-medium">
              Kontak &amp; Navigasi
            </div>
            <div className="space-y-2 text-xs text-slate-400">
              <a
                href={`tel:${clinicConfig.contact.phoneTel}`}
                onClick={trackPhoneCall}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 shrink-0" />
                <span>{clinicConfig.contact.phoneDisplay}</span>
              </a>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppBooking('footer_link')}
                className="flex items-center gap-2 hover:text-white transition-colors text-brand-wa"
              >
                <MessageCircle className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp Chat Langsung</span>
              </a>
              <a
                href={clinicConfig.location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackMapsClick('footer_link')}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Google Maps: Cibodas, Tangerang</span>
              </a>
            </div>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} {clinicConfig.clinicName}. Hak cipta dilindungi.
          </div>
          <div className="font-mono text-[10px]">
            {clinicConfig.location.neighborhood} · {clinicConfig.location.district} · {clinicConfig.location.city} {clinicConfig.location.postalCode}
          </div>
        </div>

      </div>
    </footer>
  );
};
