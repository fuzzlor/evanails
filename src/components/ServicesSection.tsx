import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { translations } from '../data/translations';
import { SERVICES } from '../data/mockData';
import { Clock, ChevronDown, ChevronUp, Check, Sparkles } from 'lucide-react';

interface ServicesSectionProps {
  currentLang: Language;
  onBookService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onBookService,
}) => {
  const t = translations[currentLang];
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString();
  };

  const getServiceData = (service: ServiceItem) => {
    const loc = t.services.items?.[service.id];
    return {
      title: loc?.title || service.titleKey,
      tag: loc?.tag || service.tagKey,
      desc: loc?.desc || service.descKey,
      features: loc?.features || service.features,
    };
  };

  return (
    <section
      className="w-full py-16 lg:py-24 bg-[#fff1ea] rounded-t-[40px] relative border-t border-[#ebd6cb]/60"
      id="services"
    >
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[12px] uppercase font-bold tracking-[0.25em] text-[#6b5c45]">
            {t.services.eyebrow}
          </span>
          <h2 className="font-serif text-[32px] sm:text-[40px] text-[#241913] font-normal mt-1">
            {t.services.title}
          </h2>
          <p className="text-[14px] sm:text-[16px] text-[#514346] mt-2 font-sans leading-relaxed">
            {t.services.subtext}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {SERVICES.map((service) => {
            const isExpanded = expandedId === service.id;
            const itemData = getServiceData(service);
            return (
              <div
                key={service.id}
                className={`bg-white rounded-[32px] p-6 flex flex-col justify-between border border-[#ebd6cb]/50 shadow-[0_12px_32px_-8px_rgba(81,67,59,0.06)] hover:-translate-y-1 transition-all duration-300 relative ${
                  service.isPopular ? 'ring-2 ring-[#955868]/30' : ''
                }`}
              >
                {/* Popular Pill */}
                {service.isPopular && (
                  <div className="absolute top-4 right-4 bg-[#794150] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10 shadow-sm flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>{t.services.guestFavorite}</span>
                  </div>
                )}

                <div>
                  {/* Thumbnail Image */}
                  <div className="w-full h-48 rounded-[20px] overflow-hidden mb-4 bg-[#ffeadf]">
                    <img
                      src={service.image}
                      alt={itemData.title}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Header info */}
                  <div className="flex items-center justify-between text-[#6b5c45] mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider">
                      {itemData.tag}
                    </span>
                    <span className="text-[12px] font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#794150]" />
                      <span>
                        {service.durationMin} {t.services.min}
                      </span>
                    </span>
                  </div>

                  <h3 className="text-[19px] font-bold text-[#241913] mb-2 leading-snug">
                    {itemData.title}
                  </h3>

                  <p className="text-[13px] text-[#514346] leading-relaxed mb-4">
                    {itemData.desc}
                  </p>

                  {/* Expandable Features */}
                  {isExpanded && (
                    <div className="mb-4 pt-3 border-t border-[#ebd6cb]/40 space-y-1.5 animate-in fade-in duration-200">
                      {itemData.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[12px] text-[#514346]">
                          <Check className="w-3.5 h-3.5 text-[#794150] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="text-[12px] text-[#794150] font-semibold flex items-center gap-1 mb-4 hover:underline cursor-pointer"
                  >
                    <span>{isExpanded ? (t.services.hideDetails || 'Hide details') : t.services.viewDetails}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Bottom Pricing & Booking Action */}
                <div className="flex items-center justify-between gap-3 pt-4 bg-[#fff8f5] -mx-6 -mb-6 px-6 pb-5 rounded-b-[32px] border-t border-[#ebd6cb]/40">
                  <div className="shrink-0">
                    <span className="text-[11px] text-[#847376] block leading-none font-medium">
                      {t.services.startingFrom}
                    </span>
                    <span className="text-[18px] sm:text-[20px] text-[#794150] font-bold whitespace-nowrap">
                      {formatPrice(service.priceVnd)}&nbsp;<span className="text-[13px] font-normal text-[#514346]">₫</span>
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onBookService(itemData.title)}
                    className="px-5 py-2 rounded-full bg-[#955868] text-white text-[13px] font-semibold hover:bg-[#794150] active:scale-95 transition-all shadow-sm cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {t.services.book}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
