import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, Award, Sparkles, Quote, Globe, PackageCheck, Factory } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang];
  const isRtl = lang === 'ar';
  const [activePhoto, setActivePhoto] = useState<number>(0);

  const founderPhotos = [
    {
      src: '/company/owner/hatem_elabd_showroom.jpg',
      labelAr: 'أ. حاتم العبد بجانب أندر ألواح الرخام الإيطالي الفاخر',
      labelEn: 'Mr. Hatem El-Abd with exclusive Italian luxury slabs'
    },
    {
      src: '/company/owner/hatem_elabd_machinery.jpg',
      labelAr: 'إشراف ميداني مباشر على ماكينات القص والـ CNC',
      labelEn: 'Direct supervision over industrial CNC cutting lines'
    },
    {
      src: '/company/owner/hatem_elabd_factory_consultation.jpg',
      labelAr: 'جلسات استشارية مع كبار المطورين بساحة المصنع',
      labelEn: 'Project consultations at the factory yard'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950 text-white relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Main Section: Story & Factory Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container with Gold Border */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold-400/40 shadow-2xl shadow-gold-900/30 group">
                <img
                  src={founderPhotos[activePhoto].src}
                  alt={isRtl ? founderPhotos[activePhoto].labelAr : founderPhotos[activePhoto].labelEn}
                  className="w-full h-[480px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/25 to-transparent" />
                
                {/* Embedded Logo badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-charcoal-950/80 backdrop-blur-md border border-gold-400/30">
                  <img src="/logo.jpg" alt="Logo" className="w-6 h-6 rounded-full object-cover" />
                  <span className="text-xs font-bold text-gold-300">Exotic El-Abd</span>
                </div>

                {/* Photo selector thumbnails inside card */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2 p-2 rounded-2xl bg-charcoal-950/85 backdrop-blur-md border border-gold-400/30">
                  <div className="flex items-center gap-2">
                    {founderPhotos.map((p, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActivePhoto(idx)}
                        className={`w-11 h-11 rounded-xl overflow-hidden border-2 transition-all ${
                          activePhoto === idx ? 'border-gold-400 scale-105 shadow-gold-sm' : 'border-white/20 opacity-60 hover:opacity-100'
                        }`}
                        title={isRtl ? p.labelAr : p.labelEn}
                      >
                        <img src={p.src} alt="thumb" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                  <span className="text-[11px] text-gold-300 font-semibold truncate max-w-[170px]">
                    {isRtl ? founderPhotos[activePhoto].labelAr : founderPhotos[activePhoto].labelEn}
                  </span>
                </div>
              </div>

              {/* Decorative Corner Floating Badge */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -right-5 p-4 rounded-2xl bg-gradient-to-br from-gold-500 to-gold-700 text-charcoal-950 shadow-gold-md font-bold text-xs max-w-[220px] border border-gold-300/40">
                <ShieldCheck className="w-6 h-6 text-charcoal-950 shrink-0" />
                <span>{lang === 'ar' ? 'إشراف هندسي مصري مباشر على كل مرحلة تصنيع' : 'Hands-on Executive Supervision'}</span>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
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
            <div className="pt-2">
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

        {/* Founder & Chairman's Vision Card */}
        <div className="rounded-3xl bg-gradient-to-r from-charcoal-950 via-charcoal-900 to-black border-2 border-gold-400/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Portrait Thumbnail (4 cols) */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-start">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-gold-400 shadow-gold-md mb-4 group">
                <img 
                  src="/company/owner/hatem_elabd_showroom.jpg" 
                  alt="Hatem El-Abd" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gold-400/10 mix-blend-overlay" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {t.about.founderName}
              </h3>
              <p className="text-xs font-semibold text-gold-400 mt-1">
                {t.about.founderRole}
              </p>
            </div>

            {/* Quote & Vision Text (8 cols) */}
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>{t.about.founderTitle}</span>
              </div>

              <div className="relative">
                <Quote className="w-10 h-10 text-gold-400/20 absolute -top-4 -start-4 pointer-events-none" />
                <p className="text-base sm:text-lg text-gray-200 font-light leading-relaxed italic relative z-10 ps-4 border-s-2 border-gold-400/50">
                  "{t.about.founderQuote}"
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-gray-400">
                <span className="flex items-center gap-1.5 text-gold-300">
                  <Award className="w-4 h-4 text-gold-400" />
                  <span>{lang === 'ar' ? 'رؤية معمارية متكاملة' : 'Integrated Architectural Vision'}</span>
                </span>
                <span className="flex items-center gap-1.5 text-gold-300">
                  <Factory className="w-4 h-4 text-gold-400" />
                  <span>{lang === 'ar' ? 'إشراف مصنعي مباشر' : 'Hands-on Production Oversight'}</span>
                </span>
                <span className="flex items-center gap-1.5 text-gold-300">
                  <Globe className="w-4 h-4 text-gold-400" />
                  <span>{lang === 'ar' ? 'معايير تصدير دولية' : 'International Export Standard'}</span>
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Made in Egypt & Global Export Showcase */}
        <div className="rounded-3xl bg-white/[0.02] border border-white/10 p-8 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <PackageCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t.about.exportBadge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {t.about.exportTitle}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t.about.exportDesc}
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-lg font-bold text-gold-400 block font-sans">100%</span>
                  <span className="text-xs text-gray-400">{lang === 'ar' ? 'أقفاص تصدير مطابقة للمواصفات' : 'Export Standard Crates'}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-lg font-bold text-gold-400 block font-sans">20+</span>
                  <span className="text-xs text-gray-400">{lang === 'ar' ? 'دولة يتم التوريد إليها' : 'Destinations Worldwide'}</span>
                </div>
              </div>
            </div>

            {/* Real Export Photos (7 cols) */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden border border-gold-400/30 group shadow-lg">
                <img
                  src="/company/export/container_made_in_egypt.jpg"
                  alt="Made in Egypt Container"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-emerald-600 text-white text-[10px] font-bold uppercase block mb-1 w-fit">
                      صنع في مصر
                    </span>
                    <p className="text-xs font-semibold text-white">
                      {lang === 'ar' ? 'حاويات شحن مجهزة محلياً للتصدير الدولي' : 'Shipping Containers for Global Delivery'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-gold-400/30 group shadow-lg">
                <img
                  src="/company/export/marble_crates_packaging.jpg"
                  alt="Marble Export Packaging Crates"
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <div>
                    <span className="px-2 py-0.5 rounded bg-gold-400 text-charcoal-950 text-[10px] font-bold uppercase block mb-1 w-fit">
                      تغليف وحماية
                    </span>
                    <p className="text-xs font-semibold text-white">
                      {lang === 'ar' ? 'صناديق خشبية مدعمة ومفروزة بعناية' : 'Reinforced Wooden Crates & Strapping'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
