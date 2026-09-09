import React, { useState } from 'react';
import { Language, PriceListItem } from '../types';
import { translations } from '../data/translations';
import { PRICE_LIST } from '../data/mockData';
import { ShieldCheck, Luggage, ArrowRight, Calculator, Plus, Check, Clock } from 'lucide-react';

interface PriceSectionProps {
  currentLang: Language;
  onBookService: (serviceName: string) => void;
}

export const PriceSection: React.FC<PriceSectionProps> = ({
  currentLang,
  onBookService,
}) => {
  const t = translations[currentLang];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedItems, setSelectedItems] = useState<string[]>(['p2']); // default Gel Polish Manicure

  const filteredItems = PRICE_LIST.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const toggleSelect = (id: string) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getPriceItemName = (item: PriceListItem) => {
    return t.priceList.items?.[item.id] || item.nameKey;
  };

  const calculatedTotal = PRICE_LIST.filter((i) => selectedItems.includes(i.id)).reduce(
    (acc, curr) => acc + curr.priceVnd,
    0
  );

  const calculatedDuration = PRICE_LIST.filter((i) => selectedItems.includes(i.id)).reduce(
    (acc, curr) => acc + curr.durationMin,
    0
  );

  const handleBookCalculated = () => {
    const names = PRICE_LIST.filter((i) => selectedItems.includes(i.id))
      .map((i) => getPriceItemName(i))
      .join(' + ');
    onBookService(names || t.priceList.calcBookPackage || 'Custom Package');
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-[#fff8f5]" id="price">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Context & Tourism Amenities */}
          <div className="lg:col-span-5">
            <span className="text-[12px] uppercase font-bold tracking-[0.2em] text-[#6b5c45]">
              {t.priceList.eyebrow}
            </span>
            <h2 className="font-serif text-[32px] sm:text-[40px] text-[#241913] font-normal mt-1 mb-4 leading-tight">
              {t.priceList.title}
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#514346] leading-relaxed mb-6 font-sans">
              {t.priceList.subtext}
            </p>

            {/* Vacation Callout Card */}
            <div className="bg-[#fff1ea] p-6 rounded-3xl mb-6 border border-[#ebd6cb]/60 shadow-sm">
              <h3 className="text-[18px] font-bold text-[#241913] mb-2">
                {t.priceList.vacationTitle}
              </h3>
              <p className="text-[13px] text-[#514346] leading-relaxed">
                {t.priceList.vacationDesc}
              </p>
              <div className="mt-4 flex items-center gap-2.5 text-[#794150] text-[13px] font-semibold">
                <Luggage className="w-4 h-4 text-[#794150] shrink-0" />
                <span>{t.priceList.luggageStorage}</span>
              </div>
            </div>

            {/* Interactive Calculator Box */}
            <div className="bg-white p-6 rounded-3xl border border-[#ebd6cb] shadow-sm">
              <div className="flex items-center gap-2 mb-2 text-[#794150]">
                <Calculator className="w-4 h-4" />
                <span className="text-[12px] uppercase font-bold tracking-wider">
                  {t.priceList.calculatorTitle}
                </span>
              </div>
              <p className="text-[12px] text-[#514346] mb-4 leading-relaxed">
                {t.priceList.calculatorDesc}
              </p>

              <div className="space-y-2 mb-4 max-h-[160px] overflow-y-auto pr-1">
                {PRICE_LIST.slice(0, 6).map((item) => {
                  const isChecked = selectedItems.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => toggleSelect(item.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left text-[12px] transition-all border ${
                        isChecked
                          ? 'bg-[#fff1ea] border-[#794150] text-[#241913] font-semibold'
                          : 'bg-[#fff8f5] border-transparent text-[#514346] hover:bg-[#ffeadf]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center border ${
                            isChecked ? 'bg-[#794150] border-[#794150] text-white' : 'border-[#847376]'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3" />}
                        </div>
                        <span>{getPriceItemName(item)}</span>
                      </div>
                      <span className="text-[#794150] font-bold whitespace-nowrap shrink-0">
                        {item.priceVnd.toLocaleString()}&nbsp;₫
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Total Summary */}
              <div className="pt-3 border-t border-[#ebd6cb] flex items-center justify-between mb-3">
                <div>
                  <span className="text-[11px] text-[#847376] block">
                    {t.priceList.calcEstimatedTime} ~{calculatedDuration} {t.services.min}
                  </span>
                  <span className="text-[16px] sm:text-[18px] font-bold text-[#794150] whitespace-nowrap">
                    {calculatedTotal.toLocaleString()}&nbsp;₫
                  </span>
                </div>
                <button
                  onClick={handleBookCalculated}
                  disabled={selectedItems.length === 0}
                  className="px-4 py-2 rounded-full bg-[#955868] text-white text-[12px] font-bold hover:bg-[#794150] disabled:opacity-50 transition-all cursor-pointer whitespace-nowrap"
                >
                  {t.priceList.calcBookPackage}
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Full Interactive Price Table */}
          <div className="lg:col-span-7">
            {/* Category Filter Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                  activeCategory === 'all'
                    ? 'bg-[#794150] text-white shadow-sm'
                    : 'bg-[#fff1ea] text-[#514346] hover:bg-[#ffeadf]'
                }`}
              >
                {t.priceList.filterAll}
              </button>
              <button
                onClick={() => setActiveCategory('manicure')}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                  activeCategory === 'manicure'
                    ? 'bg-[#794150] text-white shadow-sm'
                    : 'bg-[#fff1ea] text-[#514346] hover:bg-[#ffeadf]'
                }`}
              >
                {t.priceList.filterMani}
              </button>
              <button
                onClick={() => setActiveCategory('pedicure')}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                  activeCategory === 'pedicure'
                    ? 'bg-[#794150] text-white shadow-sm'
                    : 'bg-[#fff1ea] text-[#514346] hover:bg-[#ffeadf]'
                }`}
              >
                {t.priceList.filterPedi}
              </button>
              <button
                onClick={() => setActiveCategory('extension')}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                  activeCategory === 'extension'
                    ? 'bg-[#794150] text-white shadow-sm'
                    : 'bg-[#fff1ea] text-[#514346] hover:bg-[#ffeadf]'
                }`}
              >
                {t.priceList.filterExtension}
              </button>
              <button
                onClick={() => setActiveCategory('art')}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-semibold transition-all ${
                  activeCategory === 'art'
                    ? 'bg-[#794150] text-white shadow-sm'
                    : 'bg-[#fff1ea] text-[#514346] hover:bg-[#ffeadf]'
                }`}
              >
                {t.priceList.filterArt}
              </button>
            </div>

            <div className="bg-white rounded-[32px] p-4 sm:p-7 shadow-[0_12px_36px_-8px_rgba(81,67,59,0.06)] border border-[#ebd6cb]/60 overflow-hidden">
              {/* Header: Visible on tablet/desktop, hidden on mobile where rows stack comfortably */}
              <div className="hidden sm:flex items-center justify-between pb-3.5 mb-2 text-[#847376] text-[11px] uppercase font-bold tracking-wider border-b border-[#ffeadf]">
                <span className="flex-1">{t.priceList.tableTreatment}</span>
                <span className="w-24 text-center">{t.priceList.tableDuration}</span>
                <span className="w-32 text-right pr-4">{t.priceList.tablePrice}</span>
                <span className="w-24 text-right">{t.priceList.tableAction}</span>
              </div>

              {/* Rows */}
              <div className="flex flex-col gap-2.5 sm:gap-2">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3.5 sm:p-4 rounded-2xl bg-[#fff8f5] hover:bg-[#fff1ea] transition-colors border border-[#ebd6cb]/40 sm:border-transparent"
                  >
                    {/* Treatment Title & Duration for Mobile */}
                    <div className="flex items-start justify-between gap-3 mb-2.5 sm:mb-0 sm:flex-1 sm:pr-4">
                      <div>
                        <h4 className="text-[14px] sm:text-[14.5px] font-bold text-[#241913] leading-snug">
                          {getPriceItemName(item)}
                        </h4>
                        <span className="inline-flex items-center gap-1.5 text-[11px] text-[#847376] font-medium mt-1 sm:hidden">
                          <Clock className="w-3 h-3 text-[#955868]" />
                          <span>
                            {item.durationMin} {t.services.min}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Duration on desktop */}
                    <span className="hidden sm:inline-block w-24 text-center text-[12px] text-[#514346] font-medium shrink-0">
                      {item.durationMin} {t.services.min}
                    </span>

                    {/* Price & Action Button (Bottom row on mobile, inline on desktop) */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 pt-2.5 sm:pt-0 border-t border-[#ebd6cb]/50 sm:border-t-0 shrink-0">
                      <span className="text-[15px] sm:text-[14px] font-bold text-[#794150] whitespace-nowrap sm:w-32 sm:text-right sm:pr-4">
                        {item.priceVnd.toLocaleString()}&nbsp;₫
                      </span>

                      <div className="sm:w-24 sm:flex sm:justify-end">
                        <button
                          type="button"
                          onClick={() => onBookService(getPriceItemName(item))}
                          className="px-4 py-1.5 rounded-full bg-[#f1ddbf] text-[#6f6149] hover:bg-[#955868] hover:text-white text-[11.5px] font-bold transition-all active:scale-95 cursor-pointer shadow-xs whitespace-nowrap"
                        >
                          {t.services.book}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
