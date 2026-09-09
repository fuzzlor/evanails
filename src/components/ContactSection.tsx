import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { STUDIO_INFO } from '../data/mockData';
import { MapPin, Clock, MessageSquare, ExternalLink, Navigation, Sparkles } from 'lucide-react';

interface ContactSectionProps {
  currentLang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const mapBgImage =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD5A5_YrflaIiBahiF0ishE4666U_689fc9GZCE2xfiE74XpAkCRCxTYMHqjzk_haSK8SWasKbdfQP8-29-A5ngk6edjOiWiCnoNFhMbPAHLQ-fnrqnX_dcumlng7UiIpueGrGsUSCnOFzK_9Akh7uwLgrOrl3WSHrz_Ef6w1bfpMxVJ6ixAvPHDXMk2T2YRfIPRG3IwvK486rwsaR-V-yNyWigBLFS7Qub0U2WkcG1LwifypTZ1lx-Eg';

  return (
    <section
      className="w-full py-16 lg:py-24 bg-[#fff1ea] rounded-t-[40px] relative border-t border-[#ebd6cb]/60"
      id="contact"
    >
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Contact Info */}
          <div className="lg:col-span-6 flex flex-col">
            <span className="text-[12px] uppercase font-bold tracking-[0.2em] text-[#6b5c45]">
              {t.contact.eyebrow}
            </span>
            <h2 className="font-serif text-[32px] sm:text-[40px] text-[#241913] font-normal mt-1 mb-3">
              {t.contact.title}
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#514346] mb-8 leading-relaxed font-sans">
              {t.contact.subtext}
            </p>

            <div className="flex flex-col gap-3.5 mb-8">
              {/* Address */}
              <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl shadow-sm border border-[#ebd6cb]/50">
                <div className="w-10 h-10 rounded-xl bg-[#fff1ea] flex items-center justify-center text-[#794150] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[13px] font-bold text-[#241913] block">
                    {t.contact.addressTitle}
                  </span>
                  <p className="text-[13px] text-[#514346] mt-0.5">
                    {t.contact.addressValue}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl shadow-sm border border-[#ebd6cb]/50">
                <div className="w-10 h-10 rounded-xl bg-[#fff1ea] flex items-center justify-center text-[#794150] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[13px] font-bold text-[#241913] block">
                    {t.contact.hoursTitle}
                  </span>
                  <p className="text-[13px] text-[#514346] mt-0.5">
                    {t.contact.hoursValue}
                  </p>
                </div>
              </div>

              {/* Direct Concierge */}
              <div className="flex items-start gap-3.5 bg-white p-4 rounded-2xl shadow-sm border border-[#ebd6cb]/50">
                <div className="w-10 h-10 rounded-xl bg-[#fff1ea] flex items-center justify-center text-[#794150] shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[13px] font-bold text-[#241913] block">
                    {t.contact.conciergeTitle}
                  </span>
                  <p className="text-[13px] text-[#514346] mt-0.5">
                    {t.contact.conciergeValue}
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={STUDIO_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#241913] text-[13px] font-bold hover:bg-[#955868] hover:text-white transition-all shadow-sm border border-[#ebd6cb]"
              >
                <MessageSquare className="w-4 h-4 text-[#794150]" />
                <span>{t.contact.whatsappBtn}</span>
              </a>

              <a
                href={STUDIO_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#241913] text-[13px] font-bold hover:bg-[#955868] hover:text-white transition-all shadow-sm border border-[#ebd6cb]"
              >
                <Navigation className="w-4 h-4 text-[#794150]" />
                <span>{t.contact.mapsBtn}</span>
              </a>
            </div>
          </div>

          {/* Right: Map Visual Card */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-[36px] p-4 shadow-[0_16px_40px_-8px_rgba(81,67,59,0.08)] border border-[#ebd6cb]">
              <div
                className="w-full h-[380px] sm:h-[420px] rounded-[28px] overflow-hidden relative flex flex-col justify-end p-5 bg-cover bg-center"
                style={{ backgroundImage: `url("${mapBgImage}")` }}
              >
                {/* Floating Map Card Overlay */}
                <div className="bg-[#fff8f5]/95 backdrop-blur-md rounded-2xl p-4 shadow-md flex items-center justify-between border border-[#ebd6cb]/40">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#794150] flex items-center justify-center text-white shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-[13px] font-bold text-[#241913]">
                        {STUDIO_INFO.name}
                      </h4>
                      <p className="text-[11px] text-[#514346]">
                        {t.contact.mapSubtext}
                      </p>
                    </div>
                  </div>

                  <a
                    href={STUDIO_INFO.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full bg-[#955868] text-white text-[12px] font-bold hover:bg-[#794150] transition-colors shrink-0 ml-2"
                  >
                    {t.contact.directions}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
