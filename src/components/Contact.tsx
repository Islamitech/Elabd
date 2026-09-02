import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ContactProps {
  lang: Language;
}

export const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = translations[lang];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-600 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5 text-gold-500" />
            <span>{t.contact.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Contact Layout: Left Form, Right Details & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Form (6 cols) */}
          <div className="lg:col-span-6 bg-marble-offwhite p-8 sm:p-10 rounded-3xl border border-gray-200/80 shadow-sm">
            <h3 className="text-2xl font-bold text-charcoal-900 mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mb-8">
              {lang === 'ar' 
                ? 'يسعدنا الرد على جميع استفسارات المشاريع والكميات الكبيرة والتوريد الفوري.' 
                : 'We look forward to discussing your project requirements and custom fabrication.'}
            </p>

            {isSubmitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
                <p className="text-sm font-semibold">{t.contact.sentSuccess}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                    {t.contact.namePlaceholder} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={lang === 'ar' ? 'م. أحمد محمود' : 'Eng. Ahmed Mahmoud'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                      {t.contact.phonePlaceholder} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+20 100 000 0000"
                      dir="ltr"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm transition-all text-left"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                      {t.contact.emailPlaceholder}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="client@example.com"
                      dir="ltr"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm transition-all text-left"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                    {lang === 'ar' ? 'تفاصيل الرسالة أو المشروع' : 'Message Details'} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-sm shadow-gold-sm hover:shadow-gold-md hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.contact.sendBtn}</span>
                </button>
              </form>
            )}

            {/* Direct WhatsApp Quick Contact */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <a
                href="https://wa.me/201001234567?text=مرحباً%20اكزوتيك%20العبد%20للرخام،%20أرغب%20في%20طلب%20استشارة%20أو%20عرض%20سعر"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'ar' ? 'تواصل فوري عبر الواتساب مع مهندسي المبيعات' : 'Instant WhatsApp Inquiry with Sales Engineers'}</span>
              </a>
            </div>
          </div>

          {/* Right Contact Details & Google Maps Iframe (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Contact Details Card */}
            <div className="p-8 rounded-3xl bg-charcoal-950 text-white border border-gold-400/30 shadow-xl space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {t.contact.hqTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {t.contact.address}
                  </p>
                </div>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold-400/10 border border-gold-400/30 flex items-center justify-center text-gold-400 shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white mb-1">
                    {t.contact.phoneLabel}
                  </h4>
                  <div className="space-y-1">
                    {t.contact.phones.map((phone, i) => (
                      <a
                        key={i}
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        dir="ltr"
                        className="block text-xs sm:text-sm text-gold-300 hover:text-white transition-colors"
                      >
                        {phone}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email & Hours */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-400 block">{t.contact.emailLabel}</span>
                    <a href={`mailto:${t.contact.email}`} className="text-xs font-semibold text-white hover:text-gold-300">
                      {t.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs text-gray-400 block">{t.contact.workingHoursLabel}</span>
                    <span className="text-xs font-semibold text-gray-200">
                      {t.contact.workingHours}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Google Maps Iframe Embedded showing Cairo / Shaq El-Thoban marble industrial zone */}
            <div className="rounded-3xl overflow-hidden border border-gray-300 shadow-md h-64 bg-gray-100 relative">
              <iframe
                title="Exotic El-Abd Marble Location - Cairo Egypt"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110547.45283475253!2d31.2588647!3d29.9392284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145837651a2d5e75%3A0x8bb91efc76d9e035!2sShaq%20El%20Theban%2C%20Al%20Basatin%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              {/* Badge overlay on map */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-lg bg-charcoal-900/90 backdrop-blur-md text-gold-300 border border-gold-400/30 text-[11px] font-bold">
                {lang === 'ar' ? 'مقر ومصانع القاهرة' : 'Cairo HQ & Factories'}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
