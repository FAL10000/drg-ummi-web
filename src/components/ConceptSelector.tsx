import React, { useState } from 'react';
import { Layers, Check, X, Sparkles, Palette } from 'lucide-react';

export type ConceptId = 'editorial' | 'japanese-minimal' | 'warm-family' | 'bold-typography' | 'warm-neighborhood';

interface ConceptOption {
  id: ConceptId;
  name: string;
  tagline: string;
  description: string;
  badge: string;
  colors: string[];
  fonts: string;
}

export const CONCEPTS: ConceptOption[] = [
  {
    id: 'editorial',
    name: 'Concept 1: Flagship Editorial',
    tagline: 'Tenang, Presisi & Terstruktur',
    description: 'Desain desktop & mobile komprehensif dengan tipografi Playfair Display dan palet Navy & Linen.',
    badge: 'Desain Utama Stitch',
    colors: ['#172A3A', '#243B53', '#FAF9F6', '#25D366'],
    fonts: 'Playfair Display + Plus Jakarta Sans',
  },
  {
    id: 'japanese-minimal',
    name: 'Concept 2: Japanese Minimal',
    tagline: 'Quiet Clinic & Arsitektural',
    description: 'Nuansa hening bernuansa Jepang, batas tipis hairline, whitespace lapang, dan tipografi vertikal.',
    badge: 'Minimalis Hening',
    colors: ['#1C1D1F', '#2B384A', '#F7F5F0', '#ECE8DF'],
    fonts: 'Shippori Mincho + JetBrains Mono',
  },
  {
    id: 'warm-family',
    name: 'Concept 3: Warm Family Practice',
    tagline: 'Ramah, Bersahaja & Homey',
    description: 'Sentuhan ramah keluarga dengan warna hangat terracotta, aksen tulisan tangan, dan kartu lembut.',
    badge: 'Keluarga & Anak',
    colors: ['#382821', '#C46D50', '#FAF4EB', '#25D366'],
    fonts: 'Lora + Outfit + Caveat',
  },
  {
    id: 'bold-typography',
    name: 'Concept 4: Bold Contemporary',
    tagline: 'Swiss Typographic & Modern',
    description: 'Tipografi monumental, kontras monokrom tinggi dengan aksen cobalt blue dan layout grid arsitektural.',
    badge: 'Modern & Tegas',
    colors: ['#0A0A0A', '#0038FF', '#FFFFFF', '#25D366'],
    fonts: 'Space Grotesk + IBM Plex Mono',
  },
  {
    id: 'warm-neighborhood',
    name: 'Concept 5: Warm Neighborhood Dental',
    tagline: 'Humanist, Lembut & Earthen',
    description: 'Nuansa studio hangat bertekstur perkamen, tipografi Newsreader puitis, dan kartu layanan interaktif.',
    badge: 'Hangat & Bersahabat',
    colors: ['#000B21', '#97472E', '#FDF9F3', '#25D366'],
    fonts: 'Newsreader + Plus Jakarta Sans',
  },
];

interface ConceptSelectorProps {
  currentConcept: ConceptId;
  onSelectConcept: (concept: ConceptId) => void;
}

export const ConceptSelector: React.FC<ConceptSelectorProps> = ({
  currentConcept,
  onSelectConcept,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selected = CONCEPTS.find((c) => c.id === currentConcept) || CONCEPTS[0];

  return (
    <>
      {/* Floating Sticky Trigger Pill */}
      <div className="fixed top-24 right-4 z-50">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-[#172A3A] text-white px-3.5 py-2.5 rounded-full shadow-xl hover:bg-[#243B53] border-2 border-white/30 transition-all hover:scale-105 active:scale-95 group focus:outline-hidden"
          title="Ganti Konsep Desain Stitch"
          aria-label="Pilih Konsep Desain"
        >
          <Palette className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-semibold tracking-wide hidden sm:inline">
            Ganti Konsep:
          </span>
          <span className="text-xs font-mono text-emerald-300 font-bold max-w-[130px] truncate">
            {selected.name.split(':')[0]}
          </span>
          <Layers className="w-3.5 h-3.5 text-slate-300 ml-0.5" />
        </button>
      </div>

      {/* Modal / Flyout Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-gray-200 overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="px-6 py-5 bg-[#FAF9F6] border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-[#172A3A] text-emerald-400 rounded-lg">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#172A3A]">
                    Pilih Konsep Desain Stitch
                  </h3>
                  <p className="text-xs text-gray-500">
                    Bandingkan 4 variasi desain hasil ekspor Google Stitch secara langsung.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Concept Options List */}
            <div className="p-6 overflow-y-auto space-y-4 divide-y divide-gray-100">
              {CONCEPTS.map((concept) => {
                const isCurrent = currentConcept === concept.id;
                return (
                  <div
                    key={concept.id}
                    onClick={() => {
                      onSelectConcept(concept.id);
                      setIsOpen(false);
                    }}
                    className={`pt-4 first:pt-0 p-4 rounded-xl cursor-pointer transition-all border ${
                      isCurrent
                        ? 'border-[#172A3A] bg-[#F1F6FA] shadow-xs'
                        : 'border-transparent hover:border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-sm text-[#172A3A]">
                            {concept.name}
                          </span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-medium ${
                              isCurrent
                                ? 'bg-[#172A3A] text-white'
                                : 'bg-gray-100 text-gray-600'
                            }`}
                          >
                            {concept.badge}
                          </span>
                        </div>
                        <div className="text-xs font-medium text-emerald-700">
                          {concept.tagline}
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed pt-0.5">
                          {concept.description}
                        </p>
                      </div>

                      <div className="shrink-0 flex items-center gap-2">
                        {/* Color swatches */}
                        <div className="flex -space-x-1">
                          {concept.colors.map((color, idx) => (
                            <span
                              key={idx}
                              className="w-4 h-4 rounded-full border border-white shadow-2xs"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                          ))}
                        </div>
                        {isCurrent && (
                          <div className="w-6 h-6 rounded-full bg-[#172A3A] text-white flex items-center justify-center">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="mt-3 pt-2 border-t border-gray-100/80 flex items-center justify-between text-[11px] font-mono text-gray-500">
                      <span>Tipografi: {concept.fonts}</span>
                      <span className="text-[#172A3A] font-semibold hover:underline">
                        {isCurrent ? 'Sedang Aktif' : 'Terapkan Desain →'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
              <span>Data bisnis tetap konsisten di seluruh konsep.</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
