import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { DoctorProfile } from '../components/DoctorProfile';
import { Atmosphere } from '../components/Atmosphere';
import { Schedule } from '../components/Schedule';
import { Location } from '../components/Location';
import { Faq } from '../components/Faq';
import { CtaSection } from '../components/CtaSection';
import { Footer } from '../components/Footer';
import { MobileFloatingBar } from '../components/MobileFloatingBar';

export const EditorialConcept: React.FC = () => {
  return (
    <div className="bg-[#FAF9F6] text-[#252A31] pb-24 md:pb-0 font-sans selection:bg-[#DCE8F2] selection:text-[#172A3A]">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <DoctorProfile />
        <Atmosphere />
        <Schedule />
        <Location />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
      <MobileFloatingBar />
    </div>
  );
};
