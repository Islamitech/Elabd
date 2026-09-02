import React, { useState, useEffect } from 'react';
import { ArrowDown, ChevronRight, Award, Compass, Calculator } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeroProps {
  lang: Language;
  onOpenQuote: () => void;
}

const backgroundImages = [
  '/company/slabs/calacatta_gold_luxury_slab.jpg',
  '/company/slabs/white_bookmatch_pair_slabs.jpg',
  '/company/slabs/calacatta_slab_mirror.jpg',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85'
];

export const Hero: React.FC<HeroProps> = ({ lang, onOpenQuote }) => {
  const t = translations[lang];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12">
      {/* Background Slider with Darkened Luxury Overlay */}
      {backgroundImages.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center ${
            index === currentBg ? 'opacity-100 scale-105 transition-transform duration-[6000ms]' : 'opacity-0 scale-100'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Luxury Dark Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/75 to-charcoal-950/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1)_0,transparent_70%)]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center mt-8">
        
        {/* Egyptian Heritage Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 backdrop-blur-md text-gold-300 text-xs sm:text-sm font-semibold mb-6 shadow-gold-sm animate-pulse">
          <Award className="w-4 h-4 text-gold-400" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          <span className="block text-white mb-2">{t.hero.titleMain}</span>
          <span className="block gold-text-gradient drop-shadow-md">
            {t.hero.titleAccent}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-gray-200 font-normal leading-relaxed mb-10 text-balance">
          {t.hero.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#products"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-base shadow-gold-md hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>{t.hero.ctaPrimary}</span>
            <Compass className="w-5 h-5 text-charcoal-950" />
          </a>

          <button
            onClick={onOpenQuote}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-base border border-gold-400/40 backdrop-blur-md hover:border-gold-400 transition-all duration-300"
          >
            <Calculator className="w-5 h-5 text-gold-400" />
            <span>{t.hero.ctaSecondary}</span>
          </button>
        </div>

        {/* Quick Statistics Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-gold-400/20 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-gold-400/15">
            <div className="text-2xl sm:text-3xl font-extrabold text-gold-400 font-sans">
              {t.hero.stats.experienceVal}
            </div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1 font-medium">
              {t.hero.stats.experience}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-gold-400/15">
            <div className="text-2xl sm:text-3xl font-extrabold text-gold-400 font-sans">
              {t.hero.stats.projectsVal}
            </div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1 font-medium">
              {t.hero.stats.projects}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-gold-400/15">
            <div className="text-2xl sm:text-3xl font-extrabold text-gold-400 font-sans">
              {t.hero.stats.varietiesVal}
            </div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1 font-medium">
              {t.hero.stats.varieties}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-gold-400/15">
            <div className="text-2xl sm:text-3xl font-extrabold text-gold-400 font-sans">
              {t.hero.stats.precisionVal}
            </div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1 font-medium">
              {t.hero.stats.precision}
            </div>
          </div>
        </div>

      </div>

      {/* Down arrow indicator */}
      <a 
        href="#about" 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 text-gold-400/70 hover:text-gold-300 animate-bounce p-2"
        aria-label="Scroll Down"
      >
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};
