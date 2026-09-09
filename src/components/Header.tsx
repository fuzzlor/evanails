import React, { useState } from 'react';
import { ScreenType, Language } from '../types';
import { translations } from '../data/translations';
import { STUDIO_INFO } from '../data/mockData';
import { Calendar, Menu, X, BookmarkCheck, PhoneCall, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenBooking: (serviceName?: string) => void;
  bookingCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  currentLang,
  onLanguageChange,
  onOpenBooking,
  bookingCount,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[currentLang];

  const navItems: { id: ScreenType; label: string }[] = [
    { id: 'services', label: t.nav.services },
    { id: 'price', label: t.nav.price },
    { id: 'interior', label: t.nav.interior },
    { id: 'portfolio', label: t.nav.portfolio },
    { id: 'about', label: t.nav.about },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (screen: ScreenType) => {
    // If on overview, scroll smoothly to the section if it exists on the page
    const targetElement = document.getElementById(screen);
    if (currentScreen === 'overview' && targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      return;
    }

    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'ru', label: 'RU' },
    { code: 'en', label: 'EN' },
    { code: 'vi', label: 'VI' },
    { code: 'ko', label: 'KO' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#fff8f5]/90 backdrop-blur-xl border-b border-[#ebd6cb]/50 shadow-[0_4px_24px_-6px_rgba(81,67,59,0.06)] transition-all duration-300">
      <div className="h-20 max-w-[1240px] mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo & Subtitle */}
        <button
          onClick={() => handleNavClick('overview')}
          className="flex items-center gap-3 text-left group focus:outline-none"
        >
          <img
            src={STUDIO_INFO.headerLogo}
            alt="EVA Nail Studio Logo"
            className="h-14 sm:h-16 w-auto max-h-[64px] object-contain py-1 drop-shadow-sm group-hover:opacity-95 transition-opacity"
          />
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-[10px] tracking-[0.25em] text-[#847376] uppercase font-semibold leading-tight">
              Nha Trang
            </span>
            <span className="text-[12px] text-[#794150] font-serif italic">Soft Contour Atelier</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[13px] font-semibold tracking-wider transition-colors duration-200 relative py-1 uppercase ${
                  isActive
                    ? 'text-[#794150] after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#955868] after:rounded-full'
                    : 'text-[#514346] hover:text-[#794150]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#fae4d9]/80 rounded-full p-0.5 shadow-[inset_0_1px_2px_rgba(81,67,59,0.06)]">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => onLanguageChange(l.code)}
                className={`px-2 sm:px-2.5 py-1 rounded-full text-[11px] font-bold transition-all ${
                  currentLang === l.code
                    ? 'bg-white text-[#794150] shadow-sm'
                    : 'text-[#514346] hover:text-[#241913]'
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* My Bookings Pill */}
          <button
            onClick={() => handleNavClick('my-bookings')}
            className={`relative p-2 rounded-full border transition-all ${
              currentScreen === 'my-bookings'
                ? 'bg-[#955868] text-white border-[#955868]'
                : 'bg-white text-[#514346] border-[#d6c2c5] hover:text-[#794150] hover:bg-[#fff1ea]'
            }`}
            title={t.nav.myBookings}
          >
            <BookmarkCheck className="w-5 h-5" />
            {bookingCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#ba1a1a] text-white rounded-full text-[10px] flex items-center justify-center font-bold">
                {bookingCount}
              </span>
            )}
          </button>

          {/* Book Appointment CTA */}
          <button
            onClick={() => onOpenBooking()}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#955868] text-white text-[13px] font-semibold tracking-wide shadow-[0_4px_16px_-2px_rgba(149,88,104,0.3)] hover:bg-[#794150] active:scale-[0.98] transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>{t.nav.bookNow}</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full bg-[#fff1ea] text-[#241913] hover:bg-[#fae4d9] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fff8f5] border-b border-[#ebd6cb] px-4 py-4 shadow-xl transition-all">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-4 py-2.5 rounded-xl text-[14px] font-semibold transition-colors ${
                  currentScreen === item.id
                    ? 'bg-[#f1ddbf] text-[#6f6149]'
                    : 'text-[#241913] hover:bg-[#fff1ea]'
                }`}
              >
                {item.label}
              </button>
            ))}

            <div className="pt-2 border-t border-[#ebd6cb] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-[#955868] text-white text-[14px] font-semibold flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.bookNow}</span>
              </button>

              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full bg-[#fff1ea] text-[#794150] text-[13px] font-semibold flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
