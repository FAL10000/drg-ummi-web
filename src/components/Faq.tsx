import React, { useState } from 'react';
import { clinicConfig } from '../config/business';
import { trackFaqToggle } from '../utils/analytics';

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    const isCurrentlyOpen = openIndex === index;
    const newIndex = isCurrentlyOpen ? null : index;
    setOpenIndex(newIndex);
    trackFaqToggle(clinicConfig.faqs[index].question, !isCurrentlyOpen);
  };

  return (
    <section id="faq" className="py-14 md:py-24 border-b border-brand-border bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-8">
        
        <div className="text-center mb-10">
          <div className="text-xs uppercase tracking-widest font-semibold text-brand-slate mb-2">
            Tanya Jawab
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-brand-navy tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="border-t border-b border-brand-border divide-y divide-brand-border">
          {clinicConfig.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-4 sm:py-5">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex items-start justify-between gap-4 font-serif text-base sm:text-lg text-brand-navy hover:text-brand-slate transition-colors focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="font-mono text-sm text-brand-muted shrink-0 mt-1 font-bold select-none">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="pt-3 text-xs sm:text-sm text-brand-muted leading-relaxed max-w-2xl animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
