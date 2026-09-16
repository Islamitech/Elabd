import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Compass, Calculator, Award } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useCountUp } from '../hooks/useCountUp';

interface HeroProps {
  lang: Language;
  onOpenQuote: () => void;
}

const backgroundImages = [
  '/identity/showroom_panorama_cinematic.jpg',
  '/identity/grand_marble_staircase.jpg',
  '/identity/luxury_architectural_interior.jpg',
  '/identity/luxury_marble_hall.jpg',
  '/identity/elabd_showroom_facade.jpg'
];

export const Hero: React.FC<HeroProps> = ({ lang, onOpenQuote }) => {
  const t = translations[lang];
  const [currentBg, setCurrentBg] = useState(0);
  const [bgKey, setBgKey] = useState(0); // forces Ken Burns restart
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });

  // Animated counters
  const expVal = useCountUp(25, statsVisible, 2000, '+', '');
  const projVal = useCountUp(650, statsVisible, 2500, '+', '');
  const varVal = useCountUp(140, statsVisible, 2200, '+', '');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
      setBgKey((prev) => prev + 1);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 sm:pb-20">
      {/* Background Slider with Ken Burns */}
      {backgroundImages.map((img, index) => (
        <div
          key={`${img}-${index === currentBg ? bgKey : index}`}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
            index === currentBg ? 'opacity-100 ken-burns-active' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Luxury Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/80 to-charcoal-950/65" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0,transparent_70%)]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Egyptian Heritage Badge — removed pulse, added shimmer */}
        <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/40 backdrop-blur-md text-gold-300 text-[11px] sm:text-xs md:text-sm font-semibold mb-4 sm:mb-6 shadow-gold-sm shimmer-line reveal visible">
          <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold-400 shrink-0" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-[1.35] sm:leading-[1.28]">
          <span className="block text-white mb-1 sm:mb-2 pb-1 reveal visible" style={{ transitionDelay: '0.1s' }}>
            {t.hero.titleMain}
          </span>
          <span className="block reveal visible" style={{ transitionDelay: '0.25s' }}>
            <span className="inline-block gold-text-gradient drop-shadow-md pb-2 sm:pb-3 pt-1">
              {t.hero.titleAccent}
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-sm sm:text-lg md:text-xl text-gray-200 font-normal leading-relaxed mb-8 sm:mb-10 text-balance px-2 reveal visible" style={{ transitionDelay: '0.4s' }}>
          {t.hero.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14 max-w-md sm:max-w-none mx-auto w-full reveal visible" style={{ transitionDelay: '0.55s' }}>
          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-sm sm:text-base shadow-gold-md hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>{t.hero.ctaPrimary}</span>
            <Compass className="w-4 h-4 sm:w-5 sm:h-5 text-charcoal-950" />
          </a>

          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm sm:text-base border border-gold-400/40 backdrop-blur-md hover:border-gold-400 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400" />
            <span>{t.hero.ctaSecondary}</span>
          </button>
        </div>

        {/* Interactive Slide Dots Indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {backgroundImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => { setCurrentBg(idx); setBgKey((p) => p + 1); }}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentBg 
                  ? 'w-7 bg-gold-400 shadow-gold-sm' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Quick Statistics Banner — Animated Counters */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 border-t border-gold-400/20 max-w-4xl mx-auto"
        >
          <div className={`p-3 sm:p-4 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-gold-400/15 reveal ${statsVisible ? 'visible' : ''} stagger-1`}>
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gold-400 font-sans">
              {expVal}
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm text-gray-300 mt-0.5 sm:mt-1 font-medium leading-tight">
              {t.hero.stats.experience}
            </div>
          </div>

          <div className={`p-3 sm:p-4 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-gold-400/15 reveal ${statsVisible ? 'visible' : ''} stagger-2`}>
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gold-400 font-sans">
              {projVal}
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm text-gray-300 mt-0.5 sm:mt-1 font-medium leading-tight">
              {t.hero.stats.projects}
            </div>
          </div>

          <div className={`p-3 sm:p-4 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-gold-400/15 reveal ${statsVisible ? 'visible' : ''} stagger-3`}>
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gold-400 font-sans">
              {varVal}
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm text-gray-300 mt-0.5 sm:mt-1 font-medium leading-tight">
              {t.hero.stats.varieties}
            </div>
          </div>

          <div className={`p-3 sm:p-4 rounded-2xl bg-white/[0.04] backdrop-blur-sm border border-gold-400/15 reveal ${statsVisible ? 'visible' : ''} stagger-4`}>
            <div className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gold-400 font-sans">
              {t.hero.stats.precisionVal}
            </div>
            <div className="text-[11px] sm:text-xs md:text-sm text-gray-300 mt-0.5 sm:mt-1 font-medium leading-tight">
              {t.hero.stats.precision}
            </div>
          </div>
        </div>

      </div>

      {/* Down arrow indicator */}
      <a 
        href="#about" 
        className="hidden sm:block absolute bottom-3 left-1/2 -translate-x-1/2 z-20 text-gold-400/70 hover:text-gold-300 animate-bounce p-2"
        aria-label="Scroll Down"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};
