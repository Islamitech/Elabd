import React, { useState, useEffect } from 'react';
import { X, Calculator, MessageSquare, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  prefilledMaterial?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  lang,
  prefilledMaterial = ''
}) => {
  const t = translations[lang];
  const isRtl = lang === 'ar';

  const [selectedMaterial, setSelectedMaterial] = useState('');
  const [selectedApplication, setSelectedApplication] = useState('');
  const [area, setArea] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (prefilledMaterial) {
      setSelectedMaterial(prefilledMaterial);
    } else if (t.quote.options.materials[0]) {
      setSelectedMaterial(t.quote.options.materials[0]);
    }
    if (t.quote.options.applications[0]) {
      setSelectedApplication(t.quote.options.applications[0]);
    }
  }, [prefilledMaterial, lang]);

  if (!isOpen) return null;

  const triggerWhatsAppRedirect = () => {
    const message = encodeURIComponent(
      lang === 'ar'
        ? `*طلب عرض سعر - اكزوتيك العبد للرخام* 🏛️\n\n` +
          `• *الاسم:* ${name || 'عميل محترم'}\n` +
          `• *رقم الهاتف:* ${phone || 'غير محدد'}\n` +
          `• *المدينة / المحافظة:* ${city || 'مصر'}\n` +
          `• *نوع الخامة:* ${selectedMaterial}\n` +
          `• *طبيعة الاستخدام:* ${selectedApplication}\n` +
          `• *المساحة التقديرية:* ${area ? area + ' م²' : 'غير محدد'}\n` +
          (notes ? `• *ملاحظات إضافية:* ${notes}\n\n` : '\n') +
          `أرجو تزويدي بعرض سعر تفصيلي وجدول التوريد المتاح.`
        : `*Quotation Request - Exotic El-Abd Marble* 🏛️\n\n` +
          `• *Name:* ${name || 'Valued Client'}\n` +
          `• *Phone:* ${phone || 'Not specified'}\n` +
          `• *Location:* ${city || 'Egypt'}\n` +
          `• *Material:* ${selectedMaterial}\n` +
          `• *Application:* ${selectedApplication}\n` +
          `• *Estimated Area:* ${area ? area + ' sq.m' : 'Not specified'}\n` +
          (notes ? `• *Notes:* ${notes}\n\n` : '\n') +
          `Please provide a detailed price quotation and supply schedule.`
    );
    window.open(`https://wa.me/201020592155?text=${message}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    triggerWhatsAppRedirect();
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3000);
  };

  const handleWhatsAppQuote = () => {
    triggerWhatsAppRedirect();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-charcoal-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-t-3xl sm:rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-gold-400/30 relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-charcoal-950 text-white p-4 sm:p-6 relative border-b border-gold-400/20 shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/15 border border-gold-400/30 text-gold-300 text-[11px] font-semibold mb-1.5">
            <Calculator className="w-3.5 h-3.5 text-gold-400" />
            <span>{t.nav.getQuote}</span>
          </div>

          <h3 className="text-lg sm:text-2xl font-bold text-white mb-0.5 leading-snug">
            {t.quote.modalTitle}
          </h3>
          <p className="text-[11px] sm:text-xs text-gray-300">
            {t.quote.modalSubtitle}
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {isSuccess ? (
            <div className="py-8 sm:py-12 text-center space-y-4">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-charcoal-900">
                {lang === 'ar' ? 'تم استلام طلبك وجارٍ نقلك لواتساب!' : 'Request Received & Redirecting to WhatsApp!'}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                {lang === 'ar'
                  ? 'تم تجهيز تفاصيل طلبك وجارٍ نقلك مباشرة إلى محادثة واتساب الرسمية على الرقم:'
                  : 'Your request is ready and opening in official WhatsApp with sales at:'}
              </p>
              <div className="inline-block px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold font-sans text-sm tracking-wide dir-ltr">
                +20 10 2059 2155
              </div>
              <div>
                <button
                  onClick={handleWhatsAppQuote}
                  className="inline-flex items-center gap-2 text-xs font-bold text-emerald-600 hover:text-emerald-700 underline cursor-pointer mt-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>{lang === 'ar' ? 'اضغط هنا إذا لم تفتح المحادثة تلقائياً' : 'Click here if chat did not open automatically'}</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
              
              {/* Material Selection */}
              <div>
                <label className="block text-xs font-bold text-charcoal-800 mb-1">
                  {t.quote.materialType}
                </label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-xs sm:text-sm bg-white font-medium min-h-[42px]"
                >
                  {t.quote.options.materials.map((mat, idx) => (
                    <option key={idx} value={mat}>{mat}</option>
                  ))}
                </select>
              </div>

              {/* Application Type */}
              <div>
                <label className="block text-xs font-bold text-charcoal-800 mb-1">
                  {t.quote.applicationType}
                </label>
                <select
                  value={selectedApplication}
                  onChange={(e) => setSelectedApplication(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-xs sm:text-sm bg-white font-medium min-h-[42px]"
                >
                  {t.quote.options.applications.map((app, idx) => (
                    <option key={idx} value={app}>{app}</option>
                  ))}
                </select>
              </div>

              {/* Estimated Area */}
              <div>
                <label className="block text-xs font-bold text-charcoal-800 mb-1">
                  {t.quote.areaM2}
                </label>
                <input
                  type="number"
                  inputMode="numeric"
                  min="1"
                  placeholder="e.g. 150"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-xs sm:text-sm min-h-[42px]"
                />
              </div>

              {/* Client Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1">
                    {t.quote.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'ar' ? 'الاسم' : 'Full Name'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-xs sm:text-sm min-h-[42px]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1">
                    {t.quote.phone} *
                  </label>
                  <input
                    type="tel"
                    inputMode="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+20 100 ..."
                    dir="ltr"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-xs sm:text-sm text-left min-h-[42px]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-800 mb-1">
                  {t.quote.city}
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder={lang === 'ar' ? 'مثال: التجمع الخامس، زايد، الإسكندرية' : 'e.g. New Cairo, Zayed'}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-xs sm:text-sm min-h-[42px]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-800 mb-1">
                  {t.quote.notes}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={lang === 'ar' ? 'أي تفاصيل خاصة بالسماكة أو التشطيب...' : 'Any special notes...'}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-xs sm:text-sm resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2 safe-bottom">
                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-xs sm:text-sm shadow-gold-sm hover:shadow-gold-md active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <span>{t.quote.submitBtn}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="w-full py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer min-h-[44px]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.quote.whatsappBtn} (+20 10 2059 2155)</span>
                </button>

                <div className="text-center text-[11px] text-gray-500 pt-1">
                  <span>{lang === 'ar' ? 'الرقم الأساسي المباشر للتواصل: ' : 'Primary Direct Contact: '}</span>
                  <span className="font-bold text-emerald-600 font-sans" dir="ltr">+20 10 2059 2155</span>
                </div>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
