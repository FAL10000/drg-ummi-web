import React from 'react';
import { Clock, MessageCircle } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackWhatsAppBooking } from '../utils/analytics';

export const Schedule: React.FC = () => {
  const { schedule } = clinicConfig;

  return (
    <section id="jadwal" className="py-14 md:py-24 border-b border-brand-border bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-widest font-semibold text-brand-slate mb-2">
            Waktu Pelayanan
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-navy tracking-tight">
            Jam Praktik Reguler
          </h2>
          <p className="text-xs sm:text-sm text-brand-muted mt-2">
            Silakan reservasi terlebih dahulu melalui WhatsApp agar jadwal kunjungan dapat dikonfirmasi.
          </p>
        </div>

        {/* Tabular Schedule */}
        <div className="border-t border-b border-brand-border divide-y divide-brand-border">
          
          {/* Monday */}
          <div className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
            <span className="font-serif text-brand-navy font-semibold text-base sm:text-lg">
              {schedule.monday.days}
            </span>
            <div className="flex items-center gap-3">
              <span className="font-mono text-brand-dark font-medium bg-brand-lightBlue px-2.5 py-0.5 border border-[#DCE8F2]">
                {schedule.monday.hours}
              </span>
              <span className="text-brand-muted text-xs">({schedule.monday.note})</span>
            </div>
          </div>

          {/* Tuesday to Saturday */}
          <div className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
            <span className="font-serif text-brand-navy font-semibold text-base sm:text-lg">
              {schedule.tuesdayToSaturday.days}
            </span>
            <div className="flex items-center gap-3">
              <span className="font-mono text-brand-dark font-medium bg-brand-lightBlue px-2.5 py-0.5 border border-[#DCE8F2]">
                {schedule.tuesdayToSaturday.hours}
              </span>
              <span className="text-brand-muted text-xs">({schedule.tuesdayToSaturday.note})</span>
            </div>
          </div>

          {/* Sunday */}
          <div className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs sm:text-sm">
            <span className="font-serif text-brand-navy font-semibold text-base sm:text-lg">
              {schedule.sunday.days}
            </span>
            <div className="flex items-center gap-3">
              <span className="font-mono text-brand-dark font-medium bg-brand-lightBlue px-2.5 py-0.5 border border-[#DCE8F2]">
                {schedule.sunday.hours}
              </span>
              <span className="text-brand-muted text-xs">({schedule.sunday.note})</span>
            </div>
          </div>

        </div>

        {/* Clear Evening Notice Block - strictly "by appointment only" */}
        <div className="mt-8 p-6 sm:p-8 bg-[#FAF9F6] border border-brand-border">
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-brand-slate shrink-0 mt-1" />
            <div className="space-y-2">
              <h3 className="font-serif text-base sm:text-lg text-brand-navy font-semibold">
                {schedule.eveningNotice.title}
              </h3>
              <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                {schedule.eveningNotice.description}
              </p>
              <p className="text-xs text-brand-slate font-semibold bg-white p-2.5 border-l-2 border-brand-slate">
                {schedule.eveningNotice.policy}
              </p>
              <div className="pt-2">
                <a
                  href={buildWhatsAppUrl(schedule.eveningNotice.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppBooking('schedule_evening_block')}
                  className="inline-flex items-center gap-2 bg-brand-wa hover:bg-brand-waHover text-white px-4 py-2.5 text-xs uppercase tracking-wider font-bold transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{schedule.eveningNotice.buttonText}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
