import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Sparkles, Wind, MapPin, Check } from 'lucide-react';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#fff1ea] rounded-t-[40px] relative z-20 border-t border-[#ebd6cb]/60">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center mb-14">
          <span className="text-[12px] uppercase font-bold tracking-[0.25em] text-[#6b5c45] mb-2">
            {t.about.eyebrow}
          </span>
          <h2 className="font-serif text-[32px] sm:text-[40px] text-[#241913] mb-4 font-normal">
            {t.about.title}
          </h2>
          <p className="text-[15px] sm:text-[17px] text-[#514346] leading-relaxed font-sans max-w-2xl">
            {t.about.statement}
          </p>
        </div>

        {/* 3 Key Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 flex flex-col items-start shadow-[0_8px_24px_-4px_rgba(81,67,59,0.04)] border border-[#ebd6cb]/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#f4e0c2] flex items-center justify-center text-[#6b5c45] mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-[#794150] font-bold mb-1">
              01 / Perfection
            </span>
            <h3 className="text-[18px] sm:text-[20px] font-bold text-[#241913] mb-2">
              {t.about.pillar1Title}
            </h3>
            <p className="text-[14px] text-[#514346] leading-relaxed">
              {t.about.pillar1Desc}
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 flex flex-col items-start shadow-[0_8px_24px_-4px_rgba(81,67,59,0.04)] border border-[#ebd6cb]/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#e1e5c7] flex items-center justify-center text-[#50543d] mb-4">
              <Wind className="w-6 h-6" />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-[#794150] font-bold mb-1">
              02 / Pure Air
            </span>
            <h3 className="text-[18px] sm:text-[20px] font-bold text-[#241913] mb-2">
              {t.about.pillar2Title}
            </h3>
            <p className="text-[14px] text-[#514346] leading-relaxed">
              {t.about.pillar2Desc}
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 flex flex-col items-start shadow-[0_8px_24px_-4px_rgba(81,67,59,0.04)] border border-[#ebd6cb]/40 transition-all hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-[#f1ddbf] flex items-center justify-center text-[#6f6149] mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-[11px] uppercase tracking-widest text-[#794150] font-bold mb-1">
              03 / Coastal Ease
            </span>
            <h3 className="text-[18px] sm:text-[20px] font-bold text-[#241913] mb-2">
              {t.about.pillar3Title}
            </h3>
            <p className="text-[14px] text-[#514346] leading-relaxed">
              {t.about.pillar3Desc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
