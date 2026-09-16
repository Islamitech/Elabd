import React from 'react';
import { Percent, ArrowRight, ArrowLeft, Calculator, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface PromoSectionProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const PromoSection: React.FC<PromoSectionProps> = ({ lang, onOpenQuote }) => {
  const isAr = lang === 'ar';
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-14 sm:py-20 bg-charcoal-950 text-white relative overflow-hidden border-y border-gold-400/20">
      {/* Background Subtle Luxury Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-10 sm:mb-14 reveal ${isVisible ? 'visible' : ''}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Percent className="w-3.5 h-3.5 text-gold-400" />
            <span>{isAr ? 'عروض حصرية للمشاريع والقصور' : 'Exclusive Palace & Project Rates'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
            <span>{isAr ? 'جاهزية توريد كاملة لأكبر المشاريع بخصم ' : 'Complete Supply Readiness with '}</span>
            <span className="gold-text-gradient">15%</span>
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {isAr
              ? 'أسعار وباقات توريد وتركيب معتمدة من مصانع ومستودعات إكزوتيك العبد بشق التعبان - القاهرة.'
              : 'Certified supply & mechanical installation rates directly from Exotic El-Abd industrial complex.'}
          </p>
        </div>

        {/* Promo Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Main Wide Promotional Banner (7 cols) */}
          <div className={`lg:col-span-7 flex flex-col justify-between rounded-3xl overflow-hidden border border-gold-400/30 bg-gradient-to-br from-charcoal-900 to-black shadow-2xl group reveal-right ${isVisible ? 'visible' : ''}`}>
            <div className="relative overflow-hidden aspect-[16/9] w-full">
              <img
                src="/identity/promo_banner_wide.jpg"
                alt={isAr ? 'بانر عرض إكزوتيك العبد 15% خصم' : 'Exotic El-Abd 15% Project Offer'}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
            </div>

            <div className="p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {isAr ? 'باقة مشاريع الفلل والقصور' : 'Luxury Villa & Palace Package'}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  {isAr
                    ? 'توريد وتركيب هندسي شامل مع ضمان استمرارية توريد البلوكات'
                    : 'Turnkey architectural supply with quarry block consistency guarantees'}
                </p>
              </div>

              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-xs sm:text-sm shadow-gold-sm hover:shadow-gold-md active:scale-98 transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                <Calculator className="w-4 h-4" />
                <span>{isAr ? 'اطلب عرض سعر بالمواصفات' : 'Get Custom Quote'}</span>
                {isAr ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Official Price Packages Board (5 cols) */}
          <div className={`lg:col-span-5 rounded-3xl overflow-hidden border border-gold-400/30 bg-gradient-to-br from-charcoal-900 to-black shadow-2xl flex flex-col group reveal-left ${isVisible ? 'visible' : ''}`}>
            <div className="relative overflow-hidden w-full flex-1 flex items-center justify-center p-3 bg-black/40">
              <img
                src="/identity/price_catalog_board.jpg"
                alt={isAr ? 'لوحة أسعار وباقات التوريد المعتمدة' : 'Official Pricing Packages Board'}
                className="w-full max-h-[380px] object-contain rounded-2xl transition-transform duration-700 group-hover:scale-102"
                loading="lazy"
              />
            </div>

            <div className="p-4 sm:p-5 bg-charcoal-900/90 border-t border-gold-400/20 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-gray-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{isAr ? 'أسعار توريد معتمدة وشاملة الفرز الأول' : 'Grade-A Certified Pricing'}</span>
              </div>
              <a
                href="https://wa.me/201020592155?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A8%D8%A7%D9%82%D8%A7%D8%AA%20%D8%A7%D9%84%D8%AA%D9%88%D8%B1%D9%8A%D8%AF%20%D9%88%D8%A7%D9%84%D8%AA%D8%B1%D9%83%D9%8A%D8%A8%20%D9%84%D9%84%D9%85%D8%B4%D8%A7%D8%B1%D9%8A%D8%B9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-gold-300 hover:text-gold-200 underline flex items-center gap-1"
              >
                <span>{isAr ? 'تأكيد الحجز عبر واتساب' : 'Confirm via WhatsApp'}</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
