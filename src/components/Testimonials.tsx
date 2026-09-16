import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronRight, ChevronLeft } from 'lucide-react';
import { Language } from '../types';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface TestimonialsProps {
  lang: Language;
}

const testimonialsData = [
  {
    nameAr: 'اختيار دقيق للخامة',
    nameEn: 'Precise Material Selection',
    roleAr: 'من المعاينة وحتى اعتماد اللوح',
    roleEn: 'From inspection to slab approval',
    quoteAr: 'نساعدك على مقارنة اللون والعروق والتشطيب والاستخدام الأنسب، حتى يكون القرار مبنياً على احتياج المشروع الفعلي لا على الصورة فقط.',
    quoteEn: 'We help compare color, veining, finish, and intended use so the final choice reflects the project requirements—not merely a photograph.',
    rating: 5,
  },
  {
    nameAr: 'تنسيق هندسي واضح',
    nameEn: 'Clear Engineering Coordination',
    roleAr: 'حصر كميات، قص، وترقيم قبل التوريد',
    roleEn: 'Quantities, cutting, and numbering before delivery',
    quoteAr: 'نراجع المقاسات وتسلسل التركيب وخطة التوريد مع فريق المشروع لتقليل الهالك والمفاجآت في الموقع وتسريع التنفيذ.',
    quoteEn: 'We review dimensions, installation sequence, and delivery planning with the project team to reduce waste, surprises, and site delays.',
    rating: 5,
  },
  {
    nameAr: 'متابعة حتى الاستلام',
    nameEn: 'Follow-through to Handover',
    roleAr: 'قناة تواصل مباشرة مع فريق المبيعات',
    roleEn: 'Direct communication with the sales team',
    quoteAr: 'من عرض السعر وحتى التوريد، تبقى تفاصيل الطلب والجدول الزمني وحالة التجهيز واضحة وقابلة للمتابعة عبر قناة واحدة.',
    quoteEn: 'From quotation through delivery, order details, timelines, and preparation status remain clear and easy to follow through one channel.',
    rating: 5,
  },
];

export const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  const [current, setCurrent] = useState(0);
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const isRtl = lang === 'ar';

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialsData.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonialsData.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  const t = testimonialsData[current];

  return (
    <section
      ref={ref}
      className="py-20 sm:py-24 bg-gradient-to-b from-charcoal-950 via-charcoal-900 to-charcoal-950 text-white relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[150px] pointer-events-none" />

      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 reveal ${isVisible ? 'visible' : ''}`}>
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 text-gold-400" />
            <span>{lang === 'ar' ? 'تجربة العمل معنا' : 'Working With Us'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'ar' ? 'رحلة واضحة من الاختيار إلى التسليم' : 'A Clear Journey From Selection to Delivery'}
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative rounded-3xl bg-white/[0.03] border border-gold-400/25 p-6 sm:p-10 lg:p-12 border-glow">
          <Quote className="w-10 h-10 sm:w-14 sm:h-14 text-gold-400/15 absolute top-6 start-6 pointer-events-none" />

          <div className="relative z-10 text-center space-y-6">
            {/* Stars */}
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-gold-400 fill-gold-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-light leading-relaxed max-w-3xl mx-auto italic">
              {lang === 'ar' ? t.quoteAr : t.quoteEn}
            </p>

            {/* Author */}
            <div>
              <div className="w-10 h-[2px] bg-gold-400/40 mx-auto mb-4" />
              <h4 className="text-base sm:text-lg font-bold text-white">
                {lang === 'ar' ? t.nameAr : t.nameEn}
              </h4>
              <p className="text-xs sm:text-sm text-gold-400 mt-1">
                {lang === 'ar' ? t.roleAr : t.roleEn}
              </p>
            </div>
          </div>

          {/* Nav Arrows */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-gold-400/50 hover:bg-gold-400/10 flex items-center justify-center text-gray-300 hover:text-gold-300 transition-all cursor-pointer"
              aria-label="Previous"
            >
              {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonialsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === current
                      ? 'w-7 bg-gold-400'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:border-gold-400/50 hover:bg-gold-400/10 flex items-center justify-center text-gray-300 hover:text-gold-300 transition-all cursor-pointer"
              aria-label="Next"
            >
              {isRtl ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
