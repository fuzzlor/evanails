import React, { useState } from 'react';
import { Language, PortfolioItem } from '../types';
import { translations } from '../data/translations';
import { PORTFOLIO, STUDIO_INFO } from '../data/mockData';
import { Instagram, Calendar, X, Sparkles, Heart } from 'lucide-react';

interface PortfolioSectionProps {
  currentLang: Language;
  onBookDesign: (designTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  currentLang,
  onBookDesign,
}) => {
  const t = translations[currentLang];
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [likedItems, setLikedItems] = useState<string[]>([]);

  const toggleLike = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setLikedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getItemData = (item: PortfolioItem) => {
    const loc = t.portfolio.items?.[item.id];
    return {
      title: loc?.title || item.titleKey,
      tag: loc?.tag || item.tagKey,
      desc: loc?.desc || item.descKey,
      studioIndex: loc?.studioIndex || item.studioIndex,
    };
  };

  const filteredPortfolio = PORTFOLIO.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'manicure') return item.category === 'manicure' || item.category === 'french';
    if (activeFilter === 'pedicure') return item.category === 'pedicure';
    if (activeFilter === 'art') return item.category === 'art' || item.category === 'sculpt';
    if (activeFilter === 'french') return item.category === 'french';
    return true;
  });

  return (
    <section
      className="w-full py-16 lg:py-24 bg-[#fff1ea] rounded-t-[40px] border-t border-[#ebd6cb]/60"
      id="portfolio"
    >
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#794150] animate-pulse"></span>
              <span className="text-[12px] uppercase font-bold tracking-[0.2em] text-[#6b5c45]">
                {t.portfolio.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-[32px] sm:text-[40px] text-[#241913] font-normal mt-1">
              {t.portfolio.title}
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#514346] mt-1 leading-relaxed">
              {t.portfolio.subtext}
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2 md:pt-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#955868] text-white shadow-sm'
                  : 'bg-white text-[#514346] hover:text-[#794150]'
              }`}
            >
              {t.portfolio.filterAll}
            </button>
            <button
              onClick={() => setActiveFilter('manicure')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-bold transition-all ${
                activeFilter === 'manicure'
                  ? 'bg-[#955868] text-white shadow-sm'
                  : 'bg-white text-[#514346] hover:text-[#794150]'
              }`}
            >
              {t.portfolio.filterMani}
            </button>
            <button
              onClick={() => setActiveFilter('pedicure')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-bold transition-all ${
                activeFilter === 'pedicure'
                  ? 'bg-[#955868] text-white shadow-sm'
                  : 'bg-white text-[#514346] hover:text-[#794150]'
              }`}
            >
              {t.portfolio.filterPedi}
            </button>
            <button
              onClick={() => setActiveFilter('art')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-bold transition-all ${
                activeFilter === 'art'
                  ? 'bg-[#955868] text-white shadow-sm'
                  : 'bg-white text-[#514346] hover:text-[#794150]'
              }`}
            >
              {t.portfolio.filterArt}
            </button>
            <button
              onClick={() => setActiveFilter('french')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-bold transition-all ${
                activeFilter === 'french'
                  ? 'bg-[#955868] text-white shadow-sm'
                  : 'bg-white text-[#514346] hover:text-[#794150]'
              }`}
            >
              {t.portfolio.filterFrench}
            </button>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          {filteredPortfolio.map((item, index) => {
            const isLarge = index < 3;
            const isLiked = likedItems.includes(item.id);
            const itemData = getItemData(item);
            return (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className={`${
                  isLarge ? 'lg:col-span-4' : 'lg:col-span-3'
                } bg-white rounded-[32px] p-3.5 shadow-[0_12px_36px_-8px_rgba(81,67,59,0.06)] border border-[#ebd6cb]/50 group flex flex-col justify-between cursor-pointer hover:-translate-y-1 transition-all duration-300`}
              >
                <div className="w-full h-[340px] sm:h-[380px] rounded-[24px] overflow-hidden relative bg-[#ffeadf]">
                  <img
                    src={item.image}
                    alt={itemData.title}
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
                  />

                  {/* Floating Top Heart & Tag */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    <button
                      onClick={(e) => toggleLike(e, item.id)}
                      className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all ${
                        isLiked ? 'bg-[#ba1a1a] text-white' : 'bg-white/80 text-[#241913] hover:bg-white'
                      }`}
                      aria-label="Like design"
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Bottom title pill */}
                  <div className="absolute bottom-3 left-3 right-3 bg-[#fff8f5]/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-sm flex items-center justify-between border border-[#ebd6cb]/40">
                    <span className="text-[13px] font-bold text-[#241913] truncate max-w-[180px]">
                      {itemData.title}
                    </span>
                    <span className="text-[11px] text-[#794150] uppercase font-bold shrink-0 ml-1">
                      {itemData.tag}
                    </span>
                  </div>
                </div>

                <div className="pt-3 pb-1 px-2 flex items-center justify-between text-[#514346]">
                  <span className="text-[12px] truncate pr-2" title={itemData.desc}>{itemData.desc}</span>
                  <span className="text-[10px] text-[#847376] font-semibold shrink-0">
                    {itemData.studioIndex}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Row */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 max-w-xl mx-auto w-full px-2">
          <button
            type="button"
            onClick={() => onBookDesign(t.portfolio.bespokeDesignBooking || 'Bespoke Nail Art & Design')}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#955868] text-white text-[13px] sm:text-[14px] font-bold shadow-md hover:bg-[#794150] active:scale-95 transition-all cursor-pointer shrink-0"
          >
            <Calendar className="w-4 h-4 shrink-0" />
            <span>{t.portfolio.bookThisDesign}</span>
          </button>

          <a
            href={STUDIO_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center sm:justify-start gap-3.5 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl sm:rounded-full bg-[#fae4d9] hover:bg-white text-[#241913] hover:text-[#794150] border border-[#ebd6cb] shadow-xs hover:shadow-md transition-all duration-300 cursor-pointer"
          >
            <div className="w-11 h-11 rounded-full bg-white group-hover:bg-[#794150] flex items-center justify-center text-[#794150] group-hover:text-white shrink-0 shadow-2xs transition-colors">
              <Instagram className="w-6 h-6" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-[12.5px] sm:text-[13px] font-medium text-[#241913] leading-snug">
                {t.portfolio.instagramPrompt.includes('@evanailstudio.vn')
                  ? t.portfolio.instagramPrompt.replace('@evanailstudio.vn', '').trim()
                  : t.portfolio.instagramPrompt}
              </span>
              <span className="text-[12px] sm:text-[13px] font-bold text-[#794150] leading-tight">
                @evanailstudio.vn
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Portfolio Lightbox Modal */}
      {selectedItem && (() => {
        const modalData = getItemData(selectedItem);
        return (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-white max-w-2xl w-full rounded-[36px] overflow-hidden shadow-2xl relative border border-[#ebd6cb]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 text-[#241913] flex items-center justify-center hover:bg-white shadow-md transition-all"
                aria-label={t.booking.close}
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-[380px] sm:h-[440px] w-full overflow-hidden bg-stone-100">
                <img
                  src={selectedItem.image}
                  alt={modalData.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="p-6 sm:p-8 bg-[#fff8f5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-[#794150] font-bold">
                    {modalData.tag} • {modalData.studioIndex}
                  </span>
                  <h3 className="font-serif text-[24px] text-[#241913] mt-1 font-normal">
                    {modalData.title}
                  </h3>
                  <p className="text-[13px] text-[#514346] mt-1">
                    {modalData.desc}
                  </p>
                </div>

                <button
                  onClick={() => {
                    const title = modalData.title;
                    setSelectedItem(null);
                    onBookDesign(title);
                  }}
                  className="px-6 py-3 rounded-full bg-[#955868] text-white text-[13px] font-bold hover:bg-[#794150] shrink-0 flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{t.portfolio.bookThisDesign}</span>
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </section>
  );
};
