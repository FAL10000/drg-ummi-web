import React, { useState, useEffect, useCallback } from 'react';
import { DentistJsonLd } from './components/DentistJsonLd';
import { ConceptSelector, ConceptId } from './components/ConceptSelector';
import { EditorialConcept } from './concepts/EditorialConcept';
import { JapaneseMinimalConcept } from './concepts/JapaneseMinimalConcept';
import { WarmFamilyConcept } from './concepts/WarmFamilyConcept';
import { BoldTypographyConcept } from './concepts/BoldTypographyConcept';
import { WarmNeighborhoodConcept } from './concepts/WarmNeighborhoodConcept';

const VALID_CONCEPTS: ConceptId[] = [
  'editorial',
  'japanese-minimal',
  'warm-family',
  'bold-typography',
  'warm-neighborhood',
];

function getInitialConcept(): ConceptId {
  try {
    // 1. Check URL query param: ?design=...
    const params = new URLSearchParams(window.location.search);
    const designParam = params.get('design') as ConceptId;
    if (designParam && VALID_CONCEPTS.includes(designParam)) {
      return designParam;
    }

    // 2. Fallback to localStorage
    const saved = localStorage.getItem('drg_selected_concept') as ConceptId;
    if (saved && VALID_CONCEPTS.includes(saved)) {
      return saved;
    }
  } catch {
    // Ignore restricted environments
  }

  // 3. Default to editorial
  return 'editorial';
}

export const App: React.FC = () => {
  const [activeConcept, setActiveConcept] = useState<ConceptId>(getInitialConcept);

  const handleSelectConcept = useCallback((concept: ConceptId) => {
    setActiveConcept(concept);
    try {
      localStorage.setItem('drg_selected_concept', concept);
      const url = new URL(window.location.href);
      url.searchParams.set('design', concept);
      window.history.replaceState({}, '', url.toString());
    } catch {
      // Ignore
    }
  }, []);

  // Listen to browser popstate (back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const designParam = params.get('design') as ConceptId;
      if (designParam && VALID_CONCEPTS.includes(designParam)) {
        setActiveConcept(designParam);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sync activeConcept to URL and localStorage on mount / change
  useEffect(() => {
    try {
      localStorage.setItem('drg_selected_concept', activeConcept);
      const url = new URL(window.location.href);
      if (url.searchParams.get('design') !== activeConcept) {
        url.searchParams.set('design', activeConcept);
        window.history.replaceState({}, '', url.toString());
      }
    } catch {
      // Ignore
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
      case 'warm-neighborhood':
        return <WarmNeighborhoodConcept />;
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
        onSelectConcept={handleSelectConcept}
      />

      {/* Active Concept Render */}
      <div className="flex-1">
        {renderActiveConcept()}
      </div>
    </div>
  );
};

export default App;
