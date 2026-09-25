import React, { useState, useEffect } from 'react';
import { DentistJsonLd } from './components/DentistJsonLd';
import { ConceptSelector, ConceptId } from './components/ConceptSelector';
import { EditorialConcept } from './concepts/EditorialConcept';
import { JapaneseMinimalConcept } from './concepts/JapaneseMinimalConcept';
import { WarmFamilyConcept } from './concepts/WarmFamilyConcept';
import { BoldTypographyConcept } from './concepts/BoldTypographyConcept';

export const App: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<ConceptId>(() => {
    try {
      const saved = localStorage.getItem('selected_stitch_concept');
      if (
        saved === 'editorial' ||
        saved === 'japanese-minimal' ||
        saved === 'warm-family' ||
        saved === 'bold-typography'
      ) {
        return saved;
      }
    } catch {
      // LocalStorage unavailable fallback
    }
    return 'editorial';
  });

  useEffect(() => {
    try {
      localStorage.setItem('selected_stitch_concept', activeConcept);
    } catch {
      // Silently catch in restricted env
    }
    // Scroll to top on concept switch
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeConcept]);

  const renderActiveConcept = () => {
    switch (activeConcept) {
      case 'japanese-minimal':
        return <JapaneseMinimalConcept />;
      case 'warm-family':
        return <WarmFamilyConcept />;
      case 'bold-typography':
        return <BoldTypographyConcept />;
      case 'editorial':
      default:
        return <EditorialConcept />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Schema.org Dentist JSON-LD for SEO & Rich Results */}
      <DentistJsonLd />

      {/* Floating Interactive Concept Selector */}
      <ConceptSelector
        currentConcept={activeConcept}
        onSelectConcept={setActiveConcept}
      />

      {/* Active Concept Render */}
      <div className="flex-1">
        {renderActiveConcept()}
      </div>
    </div>
  );
};

export default App;
