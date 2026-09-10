import React from 'react';
import { Language, ScreenType } from '../types';
import { translations } from '../data/translations';
import { STUDIO_INFO } from '../data/mockData';
import { Instagram, MessageSquare, Clock, MapPin, Send, Heart } from 'lucide-react';

interface FooterProps {
  currentLang: Language;
  onNavigate: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ currentLang, onNavigate }) => {
  const t = translations[currentLang];

  return (
    <footer className="w-full bg-[#fff1ea] rounded-t-[40px] pt-16 pb-12 mt-16 border-t border-[#ebd6cb]/60 shadow-[0_-8px_30px_rgba(81,67,59,0.03)]">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#ebd6cb]/60">
          {/* Col 1: Brand */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex flex-col text-left justify-center mb-5">
              <span className="font-serif text-[26px] sm:text-[28px] text-[#241913] tracking-tight font-medium leading-none mb-1.5">
                EVA{' '}
                <span className="font-sans text-[13px] sm:text-[14px] uppercase tracking-[0.2em] text-[#794150] font-bold">
                  Nail Studio
                </span>
              </span>
              <span className="text-[10.5px] sm:text-[11.5px] tracking-[0.22em] text-[#847376] uppercase font-medium leading-none">
                Nha Trang
              </span>
            </div>

            <p className="text-[14px] text-[#514346] max-w-sm mb-6 leading-relaxed">
              {t.footer.description}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={STUDIO_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#514346] hover:text-[#794150] hover:bg-[#fae4d9] transition-all shadow-sm border border-[#ebd6cb]"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#514346] hover:text-[#794150] hover:bg-[#fae4d9] transition-all shadow-sm border border-[#ebd6cb]"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://zalo.me"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zalo"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#514346] hover:text-[#794150] hover:bg-[#fae4d9] transition-all shadow-sm border border-[#ebd6cb]"
              >
                <Send className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Studio Location & Hours */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h3 className="text-[12px] uppercase font-bold tracking-wider text-[#6b5c45] mb-3">
              {t.footer.studioAtelier}
            </h3>
            <p className="text-[14px] text-[#514346] mb-3 leading-relaxed">
              {STUDIO_INFO.address}
            </p>
            <div className="flex items-center gap-2 text-[#794150] text-[13px] font-semibold mb-4">
              <Clock className="w-4 h-4" />
              <span>{t.footer.hours}</span>
            </div>
            <a
              href={STUDIO_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-[#6b5c45] hover:text-[#241913] underline underline-offset-4 transition-colors font-medium"
            >
              <MapPin className="w-4 h-4" />
              <span>{t.footer.getDirections}</span>
            </a>
          </div>

          {/* Col 3: Concierge Contacts */}
          <div className="lg:col-span-3 flex flex-col items-start">
            <h3 className="text-[12px] uppercase font-bold tracking-wider text-[#6b5c45] mb-3">
              {t.footer.concierge}
            </h3>
            <p className="text-[12px] text-[#514346] mb-2 leading-relaxed">
              {t.footer.conciergeSub}
            </p>
            <p className="font-serif text-[22px] text-[#241913] mb-1 font-normal">
              {STUDIO_INFO.phone}
            </p>
            <p className="text-[12px] text-[#847376]">
              hello@evanailstudio.vn
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[#847376]">
          <p className="text-[12px]">{t.footer.copyright}</p>
          <div className="flex items-center gap-6 text-[12px]">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#241913] transition-colors"
            >
              {t.footer.privacy}
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-[#241913] transition-colors"
            >
              {t.footer.terms}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
