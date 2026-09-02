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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 3500);
  };

  const handleWhatsAppQuote = () => {
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
    window.open(`https://wa.me/201001234567?text=${message}`, '_blank');
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-gold-400/30 relative max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-charcoal-950 text-white p-6 sm:p-8 relative border-b border-gold-400/20">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-semibold mb-2">
            <Calculator className="w-3.5 h-3.5 text-gold-400" />
            <span>{t.nav.getQuote}</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-1">
            {t.quote.modalTitle}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300">
            {t.quote.modalSubtitle}
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isSuccess ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-charcoal-900">
                {lang === 'ar' ? 'تم استلام طلبك بنجاح!' : 'Request Received Successfully!'}
              </h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto">
                {t.quote.successMsg}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Material Selection */}
              <div>
                <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                  {t.quote.materialType}
                </label>
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm bg-white font-medium"
                >
                  {t.quote.options.materials.map((mat, idx) => (
                    <option key={idx} value={mat}>{mat}</option>
                  ))}
                </select>
              </div>

              {/* Application Type */}
              <div>
                <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                  {t.quote.applicationType}
                </label>
                <select
                  value={selectedApplication}
                  onChange={(e) => setSelectedApplication(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm bg-white font-medium"
                >
                  {t.quote.options.applications.map((app, idx) => (
                    <option key={idx} value={app}>{app}</option>
                  ))}
                </select>
              </div>

              {/* Estimated Area */}
              <div>
                <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                  {t.quote.areaM2}
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="e.g. 150"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm"
                />
              </div>

              {/* Client Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                    {t.quote.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'ar' ? 'الاسم' : 'Full Name'}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                    {t.quote.phone} *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+20 100 ..."
                    dir="ltr"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm text-left"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                  {t.quote.city}
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder={lang === 'ar' ? 'مثال: التجمع الخامس، زايد، الإسكندرية' : 'e.g. New Cairo, Zayed'}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                  {t.quote.notes}
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder={lang === 'ar' ? 'أي تفاصيل خاصة بالسماكة أو التشطيب المطلوبة...' : 'Any special finish or thickness notes...'}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-sm shadow-gold-sm hover:shadow-gold-md transition-all flex items-center justify-center gap-2"
                >
                  <span>{t.quote.submitBtn}</span>
                  {isRtl ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{t.quote.whatsappBtn}</span>
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
