import React, { useState } from 'react';
import { Language, InteriorSpace } from '../types';
import { translations } from '../data/translations';
import { INTERIOR_SPACES } from '../data/mockData';
import { ZoomIn, X, Maximize2 } from 'lucide-react';

interface InteriorSectionProps {
  currentLang: Language;
}

export const InteriorSection: React.FC<InteriorSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [selectedSpace, setSelectedSpace] = useState<InteriorSpace | null>(null);

  const mainSpace = INTERIOR_SPACES[0];
  const cardSpaces = INTERIOR_SPACES.slice(1);

  return (
    <section className="w-full py-16 lg:py-24 bg-[#fff8f5]" id="interior">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="max-w-xl">
            <span className="text-[12px] uppercase font-bold tracking-[0.2em] text-[#6b5c45]">
              {t.interior.eyebrow}
            </span>
            <h2 className="font-serif text-[32px] sm:text-[40px] text-[#241913] font-normal mt-1">
              {t.interior.title}
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] text-[#514346] max-w-md font-sans leading-relaxed">
            {t.interior.subtext}
          </p>
        </div>

        {/* Bento-style Asymmetric Interior Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Showcase Tile */}
          <div
            onClick={() => setSelectedSpace(mainSpace)}
            className="lg:col-span-7 bg-white rounded-[36px] p-4 sm:p-5 shadow-[0_12px_36px_-8px_rgba(81,67,59,0.06)] border border-[#ebd6cb]/40 flex flex-col justify-between group cursor-pointer hover:shadow-lg transition-all"
          >
            <div className="w-full h-[360px] sm:h-[440px] rounded-[28px] overflow-hidden relative">
              <img
                src={mainSpace.image}
                alt={mainSpace.titleKey}
                className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-white/92 backdrop-blur-md px-4 py-1.5 rounded-full shadow-sm">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#241913]">
                  {t.interior.galleryBadge}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/40 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
            <div className="pt-4 px-2 flex items-center justify-between">
              <span className="font-serif text-[18px] sm:text-[20px] italic text-[#241913]">
                {t.interior.galleryCaption}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-[#6b5c45] font-bold shrink-0 ml-2">
                01 / Studio Hall
              </span>
            </div>
          </div>

          {/* 2 Stacked Feature Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Card 1: Pods */}
            <div
              onClick={() => setSelectedSpace(cardSpaces[0])}
              className="bg-white rounded-[36px] p-5 shadow-[0_12px_36px_-8px_rgba(81,67,59,0.06)] border border-[#ebd6cb]/40 flex flex-col justify-between group cursor-pointer hover:shadow-md transition-all"
            >
              <div className="w-full h-[210px] rounded-[24px] overflow-hidden relative bg-[#ffeadf]">
                <img
                  src={cardSpaces[0].image}
                  alt={cardSpaces[0].titleKey}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 bg-white/92 backdrop-blur-md px-3.5 py-1 rounded-full shadow-sm">
                  <span className="text-[11px] font-bold text-[#794150]">
                    {t.interior.podsBadge}
                  </span>
                </div>
              </div>
              <div className="pt-3.5">
                <h3 className="text-[18px] font-bold text-[#241913]">
                  {t.interior.podsTitle}
                </h3>
                <p className="text-[13px] text-[#514346] mt-1 leading-relaxed">
                  {t.interior.podsDesc}
                </p>
              </div>
            </div>

            {/* Card 2: Polish Gallery */}
            <div
              onClick={() => setSelectedSpace(cardSpaces[1])}
              className="bg-white rounded-[36px] p-5 shadow-[0_12px_36px_-8px_rgba(81,67,59,0.06)] border border-[#ebd6cb]/40 flex flex-col justify-between group cursor-pointer hover:shadow-md transition-all"
            >
              <div className="w-full h-[210px] rounded-[24px] overflow-hidden relative bg-[#ffeadf]">
                <img
                  src={cardSpaces[1].image}
                  alt={cardSpaces[1].titleKey}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-3 right-3 bg-white/92 backdrop-blur-md px-3.5 py-1 rounded-full shadow-sm">
                  <span className="text-[11px] font-bold text-[#794150]">
                    {t.interior.polishBadge}
                  </span>
                </div>
              </div>
              <div className="pt-3.5">
                <h3 className="text-[18px] font-bold text-[#241913]">
                  {t.interior.polishTitle}
                </h3>
                <p className="text-[13px] text-[#514346] mt-1 leading-relaxed">
                  {t.interior.polishDesc}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / High Res Modal */}
      {selectedSpace && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all animate-in fade-in"
          onClick={() => setSelectedSpace(null)}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-[36px] overflow-hidden shadow-2xl relative border border-[#ebd6cb]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedSpace(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 text-[#241913] flex items-center justify-center hover:bg-white shadow-md transition-all"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-[360px] sm:h-[460px] w-full overflow-hidden bg-stone-100">
              <img
                src={selectedSpace.image}
                alt={selectedSpace.titleKey}
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="p-6 sm:p-8 bg-[#fff8f5]">
              <span className="text-[11px] uppercase tracking-widest text-[#794150] font-bold">
                {selectedSpace.badgeKey}
              </span>
              <h3 className="font-serif text-[24px] sm:text-[28px] text-[#241913] mt-1 mb-2 font-normal">
                {selectedSpace.titleKey}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-[#514346] leading-relaxed">
                {selectedSpace.descriptionKey}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
