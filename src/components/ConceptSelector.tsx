import React, { useState } from 'react';
import { Layers, Check, X, Sparkles, Palette, Copy, CheckCheck } from 'lucide-react';

export type ConceptId = 'editorial' | 'japanese-minimal' | 'warm-family' | 'bold-typography' | 'warm-neighborhood';

interface ConceptOption {
  id: ConceptId;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  badge: string;
  colors: string[];
}

export const CONCEPTS: ConceptOption[] = [
  {
    id: 'editorial',
    name: 'Pilihan 1: Flagship Editorial',
    shortName: 'Pilihan 1',
    tagline: 'Tenang, Elegan & Profesional',
    description: 'Kesan rapi, elegan, dan tertata dengan nuansa biru klasik dan aksen linen.',
    badge: 'Elegan & Rapi',
    colors: ['#172A3A', '#243B53', '#FAF9F6', '#25D366'],
  },
  {
    id: 'japanese-minimal',
    name: 'Pilihan 2: Japanese Minimal',
    shortName: 'Pilihan 2',
    tagline: 'Tenang, Rapi & Bersih',
    description: 'Tata letak yang lapang dan rapi dengan garis tipis dan ruang baca yang luas.',
    badge: 'Minimalis',
    colors: ['#1C1D1F', '#2B384A', '#F7F5F0', '#ECE8DF'],
  },
  {
    id: 'warm-family',
    name: 'Pilihan 3: Warm Family',
    shortName: 'Pilihan 3',
    tagline: 'Ramah Keluarga',
    description: 'Nuansa hangat yang cocok untuk kunjungan pasien anak dan keluarga.',
    badge: 'Ramah Keluarga',
    colors: ['#382821', '#C46D50', '#FAF4EB', '#25D366'],
  },
  {
    id: 'bold-typography',
    name: 'Pilihan 4: Bold Contemporary',
    shortName: 'Pilihan 4',
    tagline: 'Modern, Tegas & Terang',
    description: 'Gaya modern yang tegas dengan tipografi berani, kontras tinggi, dan tata letak yang segar.',
    badge: 'Modern & Tegas',
    colors: ['#0A0A0A', '#0038FF', '#FFFFFF', '#25D366'],
  },
  {
    id: 'warm-neighborhood',
    name: 'Pilihan 5: Warm Neighborhood',
    shortName: 'Pilihan 5',
    tagline: 'Praktik Lingkungan',
    description: 'Nuansa hangat untuk lingkungan sekitar Panunggangan Barat dan Cibodas.',
    badge: 'Lokal & Ramah',
    colors: ['#000B21', '#97472E', '#FDF9F3', '#25D366'],
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
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const selected = CONCEPTS.find((c) => c.id === currentConcept) || CONCEPTS[0];

  const handleCopyLink = (e: React.MouseEvent, id: ConceptId) => {
    e.stopPropagation();
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('design', id);
      navigator.clipboard.writeText(url.toString());
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // fallback
    }
  };

  return (
    <>
      {/* Floating Sticky Trigger Pill */}
      <div className="fixed top-20 sm:top-24 right-3 sm:right-4 z-50">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-[#172A3A] text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-full shadow-xl hover:bg-[#243B53] border-2 border-white/30 transition-all hover:scale-105 active:scale-95 group focus:outline-hidden"
          title="Bandingkan 5 pilihan desain website"
          aria-label="Pilih Desain Website"
        >
          <Palette className="w-4 h-4 text-emerald-400 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-semibold tracking-wide hidden sm:inline">
            Bandingkan Desain:
          </span>
          <span className="text-xs font-mono text-emerald-300 font-bold">
            {selected.shortName}
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
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#172A3A] text-emerald-400 rounded-xl">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-[#172A3A]">
                    Pilih desain website yang paling Ibu suka
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5 leading-relaxed">
                    Silakan lihat kelima pilihan desain. Isi dan informasi praktik sama, hanya gaya tampilannya yang berbeda.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-gray-400 hover:text-gray-700 rounded-lg hover:bg-gray-100 transition-colors shrink-0 ml-2"
                aria-label="Tutup"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Concept Options List */}
            <div className="p-4 sm:p-6 overflow-y-auto space-y-3.5 divide-y divide-gray-100">
              {CONCEPTS.map((concept) => {
                const isCurrent = currentConcept === concept.id;
                const isCopied = copiedId === concept.id;

                return (
                  <div
                    key={concept.id}
                    onClick={() => {
                      onSelectConcept(concept.id);
                      setIsOpen(false);
                    }}
                    className={`pt-3.5 first:pt-0 p-4 rounded-xl cursor-pointer transition-all border ${
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

                    <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs">
                      <button
                        type="button"
                        onClick={(e) => handleCopyLink(e, concept.id)}
                        className="inline-flex items-center gap-1.5 text-gray-500 hover:text-[#172A3A] text-[11px] font-medium py-0.5 px-1.5 rounded hover:bg-gray-200/50 transition-colors"
                        title="Salin link langsung untuk pilihan desain ini"
                      >
                        {isCopied ? (
                          <>
                            <CheckCheck className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-700 font-semibold">Link tersalin!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Salin Link Pilihan Ini</span>
                          </>
                        )}
                      </button>

                      <span className="text-[#172A3A] font-semibold text-xs hover:underline">
                        {isCurrent ? 'Sedang Dilihat ✓' : 'Lihat Desain Ini →'}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3.5 bg-gray-50 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
              <span>Informasi jadwal, layanan &amp; kontak tetap sama.</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-1.5 text-xs font-semibold text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition-colors"
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
