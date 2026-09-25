import React, { useState } from 'react';
import { MapPin, MessageCircle, Menu, X } from 'lucide-react';
import { clinicConfig, buildWhatsAppUrl } from '../config/business';
import { trackWhatsAppBooking } from '../utils/analytics';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsAppClick = (placement: string) => {
    trackWhatsAppBooking(placement);
  };

  const navLinks = [
    { href: '#layanan', label: 'Layanan' },
    { href: '#profil', label: 'Tentang Dokter' },
    { href: '#suasana', label: 'Praktik' },
    { href: '#jadwal', label: 'Jadwal' },
    { href: '#lokasi', label: 'Lokasi' },
    { href: '#faq', label: 'Tanya Jawab' },
  ];

  return (
    <>
      {/* Top Micro Notice Bar */}
      <div className="border-b border-brand-border bg-[#FAF9F6] text-[11px] text-brand-muted py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center tracking-wide">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3 h-3 text-brand-slate shrink-0" />
            <span>{clinicConfig.subTagline}</span>
          </span>
          <span className="hidden sm:inline font-mono text-[11px]">
            Dengan Janji Temu · WA {clinicConfig.contact.phoneDisplay}
          </span>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-b border-brand-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          {/* Brand Title */}
          <a href="#" className="group flex items-center gap-3">
            <img
              src={clinicConfig.images.logoEmblem}
              alt="Logo drg. Ummi Kaltsum"
              className="w-10 h-10 rounded-lg shrink-0 shadow-xs"
            />
            <div>
              <span className="block font-serif text-xl sm:text-2xl text-brand-navy tracking-tight group-hover:text-brand-slate transition-colors font-medium">
                {clinicConfig.doctorName}
              </span>
              <span className="block text-[10px] sm:text-[11px] uppercase tracking-wider text-brand-muted font-medium">
                {clinicConfig.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-wider font-semibold text-brand-muted">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-brand-navy transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop WhatsApp Action */}
          <div className="hidden md:flex items-center">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleWhatsAppClick('header_desktop')}
              className="inline-flex items-center gap-2 bg-brand-wa hover:bg-brand-waHover text-white px-4 py-2.5 text-xs uppercase tracking-wider font-bold transition-all shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Reservasi via WA</span>
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-brand-dark hover:text-brand-navy focus:outline-hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FAF9F6] border-b border-brand-border px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm uppercase tracking-wider font-medium text-brand-dark py-2 border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handleWhatsAppClick('header_mobile_drawer');
                  setMobileMenuOpen(false);
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-wa text-white py-3 text-xs uppercase tracking-wider font-bold shadow-xs active:bg-brand-waHover"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Reservasi via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
