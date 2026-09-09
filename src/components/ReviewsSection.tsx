import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { REVIEWS } from '../data/mockData';
import { Star } from 'lucide-react';

interface ReviewsSectionProps {
  currentLang: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  return (
    <section className="w-full py-16 lg:py-24 bg-[#fff8f5]">
      <div className="max-w-[1240px] mx-auto px-4 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-[12px] uppercase font-bold tracking-[0.2em] text-[#6b5c45]">
            {t.reviews.eyebrow}
          </span>
          <h2 className="font-serif text-[32px] sm:text-[40px] text-[#241913] font-normal mt-1">
            {t.reviews.title}
          </h2>

          <div className="flex items-center justify-center gap-1.5 mt-3 text-[#794150]">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} className="w-4 h-4 fill-[#794150] text-[#794150]" />
            ))}
            <span className="text-[13px] font-bold text-[#241913] ml-2">
              {t.reviews.googleRating}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 sm:p-7 rounded-[32px] flex flex-col justify-between shadow-[0_8px_24px_-4px_rgba(81,67,59,0.04)] border border-[#ebd6cb]/50 hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-[#794150] mb-4">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#794150] text-[#794150]" />
                  ))}
                </div>
                <p className="text-[14px] text-[#241913] italic leading-relaxed mb-6">
                  {review.quoteKey}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#ebd6cb]/40">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-[#241913]"
                  style={{ backgroundColor: review.avatarBg }}
                >
                  {review.initials}
                </div>
                <div>
                  <span className="text-[13px] font-bold text-[#241913] block">
                    {review.author}
                  </span>
                  <span className="text-[11px] text-[#847376]">
                    {review.roleKey}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
