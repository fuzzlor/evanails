import React from 'react';
import { STUDIO_INFO } from '../data/mockData';
import { MessageCircle } from 'lucide-react';

export const FloatingConcierge: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40">
      <a
        href={STUDIO_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Quick Messenger Contact"
        className="group flex items-center gap-2 pl-4 pr-5 py-3 rounded-full bg-white text-[#241913] shadow-[0_12px_36px_-8px_rgba(81,67,59,0.16),0_4px_16px_-2px_rgba(81,67,59,0.08)] hover:bg-[#955868] hover:text-white transition-all duration-300 border border-[#ebd6cb]"
      >
        <MessageCircle className="w-5 h-5 text-[#955868] group-hover:text-white transition-colors" />
        <span className="text-[13px] font-bold tracking-wide">Concierge</span>
        <span className="w-2 h-2 rounded-full bg-[#686c53] animate-pulse"></span>
      </a>
    </div>
  );
};
