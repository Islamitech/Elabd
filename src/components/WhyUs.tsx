import React from 'react';
import { Users, Award, Crosshair, Layers, CheckCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

interface WhyUsProps {
  lang: Language;
}

export const WhyUs: React.FC<WhyUsProps> = ({ lang }) => {
  const t = translations[lang];
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });
  const years = useCountUp(25, isVisible, 1800, '+');
  const projects = useCountUp(650, isVisible, 2200, '+');
  const varieties = useCountUp(140, isVisible, 2000, '+');
  const quality = useCountUp(100, isVisible, 1800, '', '%');

  const icons = [
    <Users className="w-8 h-8 text-gold-400" />,
    <Award className="w-8 h-8 text-gold-400" />,
    <Crosshair className="w-8 h-8 text-gold-400" />,
    <Layers className="w-8 h-8 text-gold-400" />,
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-gradient-to-b from-white via-marble-offwhite to-gray-50 relative overflow-hidden">
      {/* Decorative Gold Rings */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full border border-gold-400/20 pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 rounded-full border border-gold-400/10 pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-10 sm:mb-12 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-600 text-xs font-bold uppercase tracking-wider mb-3">
            <CheckCircle className="w-3.5 h-3.5 text-gold-500" />
            <span>{t.whyUs.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight mb-3 sm:mb-4">
            {t.whyUs.title}
          </h2>
          <p className="text-gray-600 text-sm sm:text-lg">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="mb-10 grid grid-cols-2 gap-3 rounded-3xl border border-gold-400/20 bg-charcoal-950 p-3 shadow-xl sm:grid-cols-4 sm:p-5">
          {[
            [years, lang === 'ar' ? 'سنة خبرة' : 'Years of experience'],
            [projects, lang === 'ar' ? 'مشروع منجز' : 'Projects delivered'],
            [varieties, lang === 'ar' ? 'خامة مختارة' : 'Selected materials'],
            [quality, lang === 'ar' ? 'التزام بالجودة' : 'Quality commitment'],
          ].map(([value, label], index) => (
            <div key={label} className={`rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center reveal ${isVisible ? 'visible' : ''} stagger-${index + 1}`}>
              <strong className="block text-2xl font-black text-gold-400 sm:text-3xl" dir="ltr">{value}</strong>
              <span className="mt-1 block text-[11px] font-semibold text-gray-300 sm:text-xs">{label}</span>
            </div>
          ))}
        </div>

        {/* 4 Icon Boxes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {t.whyUs.points.map((point, index) => (
            <div
              key={index}
              className={`relative p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-gray-200/80 hover:border-gold-400 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between reveal ${isVisible ? 'visible' : ''} stagger-${index + 1}`}
            >
              <div>
                {/* Icon Circle with Gold Shimmer */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-charcoal-950 flex items-center justify-center mb-5 sm:mb-6 shadow-md border border-gold-400/30 group-hover:scale-110 transition-transform duration-300">
                  {icons[index]}
                </div>

                {/* Point Number */}
                <span className="text-xs font-bold text-gold-600/80 tracking-widest block mb-2 font-sans">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-charcoal-900 mb-2 sm:mb-3 group-hover:text-gold-600 transition-colors">
                  {point.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {point.desc}
                </p>
              </div>

              {/* Bottom Gold Accent Bar */}
              <div className="w-8 h-1 bg-gray-200 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-gold-400 group-hover:to-gold-600 rounded-full mt-5 sm:mt-6 transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
