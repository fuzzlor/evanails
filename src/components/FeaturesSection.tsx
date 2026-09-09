import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ShieldCheck, Sparkles, Armchair, Globe } from 'lucide-react';

interface FeaturesSectionProps {
  currentLang: Language;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#fff1ea] rounded-t-[40px] border-t border-[#ebd6cb]/60">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        <div className="max-w-xl mb-12 text-center sm:text-left">
          <span className="text-[12px] uppercase font-bold tracking-[0.2em] text-[#6b5c45]">
            {t.features.eyebrow}
          </span>
          <h2 className="font-serif text-[32px] sm:text-[40px] text-[#241913] font-normal mt-1">
            {t.features.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 01 */}
          <div className="bg-white p-6 sm:p-7 rounded-[32px] flex flex-col justify-between shadow-[0_8px_24px_-4px_rgba(81,67,59,0.04)] border border-[#ebd6cb]/50 hover:-translate-y-1 transition-all">
            <div>
              <span className="font-serif text-[32px] italic text-[#794150] block mb-2">
                01.
              </span>
              <h3 className="text-[18px] font-bold text-[#241913] mb-2">
                {t.features.feat1Title}
              </h3>
              <p className="text-[13px] text-[#514346] leading-relaxed">
                {t.features.feat1Desc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#ebd6cb]/40 flex items-center gap-2 text-[#6b5c45] text-[11px] uppercase font-bold tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#794150]" />
              <span>{t.features.feat1Badge}</span>
            </div>
          </div>

          {/* 02 */}
          <div className="bg-white p-6 sm:p-7 rounded-[32px] flex flex-col justify-between shadow-[0_8px_24px_-4px_rgba(81,67,59,0.04)] border border-[#ebd6cb]/50 hover:-translate-y-1 transition-all">
            <div>
              <span className="font-serif text-[32px] italic text-[#794150] block mb-2">
                02.
              </span>
              <h3 className="text-[18px] font-bold text-[#241913] mb-2">
                {t.features.feat2Title}
              </h3>
              <p className="text-[13px] text-[#514346] leading-relaxed">
                {t.features.feat2Desc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#ebd6cb]/40 flex items-center gap-2 text-[#6b5c45] text-[11px] uppercase font-bold tracking-wider">
              <Sparkles className="w-4 h-4 text-[#794150]" />
              <span>{t.features.feat2Badge}</span>
            </div>
          </div>

          {/* 03 */}
          <div className="bg-white p-6 sm:p-7 rounded-[32px] flex flex-col justify-between shadow-[0_8px_24px_-4px_rgba(81,67,59,0.04)] border border-[#ebd6cb]/50 hover:-translate-y-1 transition-all">
            <div>
              <span className="font-serif text-[32px] italic text-[#794150] block mb-2">
                03.
              </span>
              <h3 className="text-[18px] font-bold text-[#241913] mb-2">
                {t.features.feat3Title}
              </h3>
              <p className="text-[13px] text-[#514346] leading-relaxed">
                {t.features.feat3Desc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#ebd6cb]/40 flex items-center gap-2 text-[#6b5c45] text-[11px] uppercase font-bold tracking-wider">
              <Armchair className="w-4 h-4 text-[#794150]" />
              <span>{t.features.feat3Badge}</span>
            </div>
          </div>

          {/* 04 */}
          <div className="bg-white p-6 sm:p-7 rounded-[32px] flex flex-col justify-between shadow-[0_8px_24px_-4px_rgba(81,67,59,0.04)] border border-[#ebd6cb]/50 hover:-translate-y-1 transition-all">
            <div>
              <span className="font-serif text-[32px] italic text-[#794150] block mb-2">
                04.
              </span>
              <h3 className="text-[18px] font-bold text-[#241913] mb-2">
                {t.features.feat4Title}
              </h3>
              <p className="text-[13px] text-[#514346] leading-relaxed">
                {t.features.feat4Desc}
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#ebd6cb]/40 flex items-center gap-2 text-[#6b5c45] text-[11px] uppercase font-bold tracking-wider">
              <Globe className="w-4 h-4 text-[#794150]" />
              <span>{t.features.feat4Badge}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
