import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Building, Award, Ticket, Users, Globe, ExternalLink, Sparkles, Clock } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ExpoSectionProps {
  lang: Language;
  onOpenInviteModal: () => void;
}

const expoImages = [
  {
    src: '/stone-africa/extracted_p3_1.jpeg',
    titleAr: 'كتلة رخام مصري ضخمة - شعار "خامات مصرية للعالم"',
    titleEn: 'Giant Egyptian Marble Block - "Egyptian Stones to the World"',
    categoryAr: 'محاجر وفخر مصري',
    categoryEn: 'Egyptian Quarries'
  },
  {
    src: '/stone-africa/extracted_p2_0.jpeg',
    titleAr: 'واجهة مركز القاهرة الدولي للمؤتمرات (CICC)',
    titleEn: 'Cairo International Convention Center (CICC) Entrance',
    categoryAr: 'المقر الدولي',
    categoryEn: 'International Venue'
  },
  {
    src: '/stone-africa/extracted_p13_0.jpeg',
    titleAr: 'إقبال كبار الاستشاريين والمهندسين على فحص الرخام',
    titleEn: 'Architects & Consultants Inspecting Marble Samples',
    categoryAr: 'شراكات وتوريدات',
    categoryEn: 'Trade Partnerships'
  },
  {
    src: '/stone-africa/extracted_p23_0.jpeg',
    titleAr: 'صالة العرض الرئيسية واجتماعات كبار المستثمرين',
    titleEn: 'Main Exhibition Hall & Buyer Delegations',
    categoryAr: 'حضور دولي كثيف',
    categoryEn: 'Global Attendance'
  }
];

export const ExpoSection: React.FC<ExpoSectionProps> = ({ lang, onOpenInviteModal }) => {
  const t = translations[lang];
  const expoT = t.expo;

  // Countdown to November 12, 2026
  const [timeLeft, setTimeLeft] = useState({ days: 70, hours: 14, minutes: 25, seconds: 40 });

  useEffect(() => {
    const targetDate = new Date('2026-11-12T09:00:00+02:00').getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="expo" className="py-24 bg-gradient-to-b from-charcoal-900 via-charcoal-950 to-charcoal-900 text-white relative overflow-hidden">
      {/* Subtle Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-gold-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/15 border border-gold-400/40 text-gold-300 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-gold-sm">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>{expoT.badge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {expoT.title}
          </h2>
          
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
            {expoT.subtitle}
          </p>
        </div>

        {/* Main Event Highlight Card */}
        <div className="rounded-3xl bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-black border-2 border-gold-400/40 p-8 sm:p-12 shadow-2xl relative overflow-hidden mb-16">
          {/* Accent Gold Ribbon */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info: Date, Venue, Booth (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3.5 py-1.5 rounded-xl bg-gold-400 text-charcoal-950 font-black text-xs uppercase tracking-wider shadow-gold-sm">
                  Stone Africa 2026
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-gold-300 text-xs font-semibold flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-gold-400" />
                  <span>{expoT.booth}</span>
                </span>
              </div>

              {/* Event Location & Date Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-400/15 flex items-center justify-center text-gold-400 shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block">{lang === 'ar' ? 'موعد المعرض الرسمي' : 'Exhibition Dates'}</span>
                      <strong className="text-sm sm:text-base text-white font-bold">{expoT.dates}</strong>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gold-400/15 flex items-center justify-center text-gold-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 block">{lang === 'ar' ? 'المقر' : 'Venue'}</span>
                      <strong className="text-xs sm:text-sm text-white font-bold block leading-tight">{expoT.location}</strong>
                    </div>
                  </div>
                </div>
              </div>

              {/* Invitation Description */}
              <div className="p-5 rounded-2xl bg-gold-400/[0.08] border border-gold-400/30">
                <h4 className="text-base font-bold text-gold-300 mb-1 flex items-center gap-2">
                  <Ticket className="w-5 h-5 text-gold-400" />
                  <span>{expoT.inviteBoxTitle}</span>
                </h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  {expoT.inviteBoxDesc}
                </p>

                {/* Primary CTA Button */}
                <button
                  onClick={onOpenInviteModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-black text-sm shadow-gold-md hover:shadow-gold-lg hover:scale-105 active:scale-95 transition-all"
                >
                  <Ticket className="w-4 h-4 text-charcoal-950" />
                  <span>{expoT.ctaButton}</span>
                </button>
              </div>

            </div>

            {/* Right: Countdown Clock & Official Stats (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Countdown Card */}
              <div className="p-6 rounded-2xl bg-black/40 border border-gold-400/20 text-center">
                <div className="flex items-center justify-center gap-2 text-xs font-bold text-gold-400 uppercase tracking-widest mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{lang === 'ar' ? 'العد التنازلي لانطلاق المعرض' : 'Countdown to Stone Africa 2026'}</span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <div className="p-3 rounded-xl bg-charcoal-900 border border-white/10">
                    <span className="text-xl sm:text-2xl font-black text-gold-300 block font-mono">{timeLeft.days}</span>
                    <span className="text-[10px] text-gray-400 uppercase">{lang === 'ar' ? 'يوم' : 'Days'}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-charcoal-900 border border-white/10">
                    <span className="text-xl sm:text-2xl font-black text-gold-300 block font-mono">{timeLeft.hours}</span>
                    <span className="text-[10px] text-gray-400 uppercase">{lang === 'ar' ? 'ساعة' : 'Hours'}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-charcoal-900 border border-white/10">
                    <span className="text-xl sm:text-2xl font-black text-gold-300 block font-mono">{timeLeft.minutes}</span>
                    <span className="text-[10px] text-gray-400 uppercase">{lang === 'ar' ? 'دقيقة' : 'Mins'}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-charcoal-900 border border-white/10">
                    <span className="text-xl sm:text-2xl font-black text-gold-300 block font-mono">{timeLeft.seconds}</span>
                    <span className="text-[10px] text-gray-400 uppercase">{lang === 'ar' ? 'ثانية' : 'Secs'}</span>
                  </div>
                </div>
              </div>

              {/* Official Expo Stats from PDF */}
              <div className="grid grid-cols-2 gap-3">
                {expoT.stats.map((st, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-center">
                    <span className="text-xl font-extrabold text-gold-400 block font-sans">{st.val}</span>
                    <span className="text-[11px] text-gray-400 leading-tight block mt-0.5">{st.label}</span>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* Real Expo Photos Grid from Stone Africa Report */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-400" />
                <span>{expoT.viewHighlights}</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                {lang === 'ar'
                  ? 'صور ولقطات موثقة من فعاليات المعرض بمركز القاهرة الدولي للمؤتمرات'
                  : 'Documented snapshots from Stone Africa at Cairo International Convention Center'}
              </p>
            </div>
            <a
              href="https://stoneafrica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors"
            >
              <span>stoneafrica.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expoImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden bg-charcoal-900 border border-white/10 hover:border-gold-400/50 shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={img.src}
                    alt={lang === 'ar' ? img.titleAr : img.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent" />
                  <span className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-charcoal-950/80 backdrop-blur-md text-[10px] font-bold text-gold-300 border border-gold-400/30">
                    {lang === 'ar' ? img.categoryAr : img.categoryEn}
                  </span>
                </div>

                <div className="p-4 bg-charcoal-900 flex-1 flex items-center">
                  <p className="text-xs font-semibold text-gray-200 group-hover:text-gold-300 transition-colors leading-relaxed">
                    {lang === 'ar' ? img.titleAr : img.titleEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
