import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang];
  const isRtl = lang === 'ar';

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-charcoal-950 to-charcoal-900 text-white relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container with Gold Border */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold-400/40 shadow-2xl shadow-gold-900/30 group">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80"
                  alt="Egyptian Marble Manufacturing & Luxury Interiors"
                  className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />
                
                {/* Embedded Logo badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-charcoal-950/80 backdrop-blur-md border border-gold-400/30">
                  <img src="/logo.jpg" alt="Logo" className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-xs font-bold text-gold-300">Exotic El-Abd</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-charcoal-900/90 backdrop-blur-md border border-gold-400/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gold-400/20 flex items-center justify-center text-gold-400 font-bold text-lg border border-gold-400/40">
                      EG
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">
                        {lang === 'ar' ? 'صناعة مصرية بمعايير عالمية' : 'Egyptian Craft, Global Standards'}
                      </h4>
                      <p className="text-xs text-gray-300">
                        {lang === 'ar' ? 'أكبر مستودعات وتجهيزات في مصر' : 'Largest Warehouses & Fabrication Yards'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Floating Card */}
              <div className="hidden sm:block absolute -bottom-6 -right-6 p-4 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-700 text-charcoal-950 shadow-gold-md font-bold text-sm max-w-[200px] border border-gold-300/40">
                <ShieldCheck className="w-6 h-6 text-charcoal-950 mb-1" />
                <span>{lang === 'ar' ? 'ضمان رسمي على دقة القص والتركيب' : 'Certified Fabrication & Precision'}</span>
              </div>

            </div>
          </div>

          {/* Text Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-gold-400 font-bold text-sm tracking-wider uppercase">
              <span className="w-8 h-[2px] bg-gold-400" />
              <span>{t.about.tag}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              {t.about.title}
            </h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>

            {/* Features 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {t.about.features.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold-400/40 transition-all duration-300 hover:bg-white/[0.06]"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-white mb-1">{feat.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-400 leading-normal">{feat.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Catalog Button */}
            <div className="pt-4">
              <a
                href="#products"
                className="inline-flex items-center gap-3 text-gold-400 hover:text-gold-300 font-bold text-base transition-colors group"
              >
                <span>{t.about.exploreCatalog}</span>
                {isRtl ? (
                  <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                )}
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
