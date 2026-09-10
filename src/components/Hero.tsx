import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { STUDIO_INFO } from '../data/mockData';
import { Calendar, ArrowDown, ShieldCheck, Sparkles, Sun, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  currentLang: Language;
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenBooking,
  onExploreServices,
}) => {
  const t = translations[currentLang];

  return (
    <section className="relative w-full overflow-hidden pt-6 pb-16 lg:pt-10">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        {/* Top Tagline & Editorial Preheader */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8">
          <div className="hidden sm:flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#686c53] animate-pulse"></span>
            <span className="text-[12px] uppercase font-bold tracking-[0.22em] text-[#6b5c45]">
              {t.hero.tagline}
            </span>
          </div>
          <p className="text-[11px] uppercase font-semibold tracking-[0.18em] text-[#847376]">
            {t.hero.preheader}
          </p>
        </div>

        {/* Main Hero Display Headline & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-6 flex flex-col z-10">
            <div className="relative inline-block mb-4">
              <h1 className="font-serif text-[34px] sm:text-[50px] lg:text-[62px] text-[#241913] font-normal italic tracking-tight leading-[1.1]">
                {t.hero.headlinePart1}
                <br />
                <span className="not-italic font-serif text-[#794150] font-medium tracking-normal">
                  {t.hero.headlinePart2}
                </span>
              </h1>

              {/* Soft Organic Contour Vector Weave */}
              <svg
                aria-hidden="true"
                className="w-full max-w-[380px] sm:max-w-[420px] h-7 sm:h-9 text-[#50543d] mt-1.5 opacity-80"
                fill="none"
                viewBox="0 0 420 36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 18C48 32 94 4 146 16C198 28 252 6 308 19C348 28 382 14 418 20"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <p className="text-[15px] sm:text-[17px] text-[#514346] max-w-lg mb-8 leading-relaxed font-sans">
              {t.hero.subtext}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-7 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#955868] text-white font-semibold text-[14px] tracking-wide shadow-[0_12px_32px_-4px_rgba(149,88,104,0.32)] hover:bg-[#794150] transition-all duration-300 transform active:scale-95 cursor-pointer"
              >
                <span>{t.hero.bookAppointment}</span>
                <Calendar className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreServices}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-[#fff1ea] text-[#241913] font-semibold text-[14px] hover:bg-[#fae4d9] transition-all duration-300 cursor-pointer"
              >
                <span>{t.hero.exploreServices}</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>

            {/* Studio Trust Micro Indicators - Adaptive Flexible Wrap (Prevents text overlap on all viewports & languages) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 w-full max-w-xl pt-1">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 border border-[#ebd6cb] text-[#3d2b24] shadow-[0_2px_8px_rgba(81,67,59,0.03)] backdrop-blur-xs max-w-full">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#794150] shrink-0" />
                <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
                  {t.hero.badge10Free}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 border border-[#ebd6cb] text-[#3d2b24] shadow-[0_2px_8px_rgba(81,67,59,0.03)] backdrop-blur-xs max-w-full">
                <ShieldCheck className="w-3.5 h-3.5 text-[#794150] shrink-0" />
                <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
                  {t.hero.badgeAutoclave}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 border border-[#ebd6cb] text-[#3d2b24] shadow-[0_2px_8px_rgba(81,67,59,0.03)] backdrop-blur-xs max-w-full">
                <Sparkles className="w-3.5 h-3.5 text-[#794150] shrink-0" />
                <span className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-wider whitespace-nowrap">
                  {t.hero.badgeOasis}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Arched Architectural Visual */}
          <div className="lg:col-span-6 relative mt-6 lg:mt-0">
            {/* Ambient Glow Aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#f4e0c2]/40 via-[#ffeadf]/60 to-[#ffd9e0]/30 rounded-[56px] blur-2xl -z-10 opacity-70"></div>

            <div className="relative bg-white p-3.5 rounded-t-[180px] rounded-b-[36px] shadow-[0_20px_50px_-10px_rgba(81,67,59,0.12)] border border-[#ebd6cb]/60">
              <div className="relative w-full h-[440px] md:h-[520px] rounded-t-[172px] rounded-b-[28px] overflow-hidden group">
                <img
                  src={STUDIO_INFO.heroInteriorImg}
                  alt="EVA Nail Studio Interior in Nha Trang"
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Pill Badge on Canvas - Adaptive & Mobile-Safe */}
                <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5 bg-[#fff8f5]/95 backdrop-blur-md rounded-2xl p-3 sm:p-4 shadow-[0_8px_24px_rgba(81,67,59,0.12)] border border-[#ebd6cb]/60">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#f1ddbf] flex items-center justify-center text-[#6f6149] shrink-0">
                        <Sun className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h2 className="text-[12px] sm:text-[13px] font-bold text-[#241913] leading-tight truncate">
                          {t.hero.cardTitle}
                        </h2>
                        <p className="text-[10.5px] sm:text-[11px] text-[#514346] mt-0.5 font-medium truncate">
                          {t.hero.cardSub}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center sm:justify-end shrink-0 pt-1.5 sm:pt-0 border-t border-[#ebd6cb]/50 sm:border-0">
                      <span className="font-serif italic text-[#794150] text-[12.5px] sm:text-[14px] lg:text-[15px] font-medium tracking-wide">
                        {t.hero.hours}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
