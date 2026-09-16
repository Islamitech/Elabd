import React from 'react';
import { Language } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface TrustedByProps {
  lang: Language;
}

const partners = [
  'مشاريع سكنية فاخرة',
  'فنادق ومنتجعات 5 نجوم',
  'قصور وفلل خاصة',
  'مجمعات تجارية كبرى',
  'مقرات حكومية ودبلوماسية',
  'مولات ومراكز أعمال',
  'مساجد وأماكن عبادة',
  'مطاعم ومقاهي فاخرة',
];
const partnersEn = [
  'Luxury Residential Projects',
  'Five-Star Hotels & Resorts',
  'Private Palaces & Villas',
  'Premium Commercial Complexes',
  'Government & Diplomatic HQs',
  'Malls & Business Centers',
  'Mosques & Sacred Spaces',
  'Fine Dining & Luxury Cafés',
];

export const TrustedBy: React.FC<TrustedByProps> = ({ lang }) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const items = lang === 'ar' ? partners : partnersEn;
  // Duplicate for infinite loop
  const doubled = [...items, ...items];

  return (
    <section
      ref={ref}
      className={`py-10 sm:py-14 bg-charcoal-950 border-y border-gold-400/10 overflow-hidden relative reveal ${isVisible ? 'visible' : ''}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-6">
        <p className="text-center text-xs sm:text-sm text-gray-500 font-semibold uppercase tracking-widest">
          {lang === 'ar' ? 'خبرتنا تغطي أرقى القطاعات' : 'Expertise Across Premium Sectors'}
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-charcoal-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-charcoal-950 to-transparent z-10 pointer-events-none" />

        <div className="marquee-track gap-6 sm:gap-8">
          {doubled.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-2xl bg-white/[0.03] border border-white/8 shrink-0 hover:border-gold-400/30 transition-colors"
            >
              <div className="w-2 h-2 rounded-full bg-gold-400 shrink-0" />
              <span className="text-xs sm:text-sm text-gray-300 font-medium whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
