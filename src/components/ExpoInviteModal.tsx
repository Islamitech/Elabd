import React, { useState } from 'react';
import { X, Calendar, MapPin, Building, Ticket, MessageSquare, CheckCircle, Sparkles, User, Mail, Phone, Briefcase } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface ExpoInviteModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ExpoInviteModal: React.FC<ExpoInviteModalProps> = ({ isOpen, onClose, lang }) => {
  const t = translations[lang];
  const expoT = t.expo;
  const isRtl = lang === 'ar';

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState(expoT.modal.roles[0]);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [visitDay, setVisitDay] = useState(expoT.modal.days[0]);
  const [isGenerated, setIsGenerated] = useState(false);
  const [ticketId, setTicketId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `EX-VIP-${Math.floor(100000 + Math.random() * 900000)}`;
    setTicketId(generatedId);
    setIsGenerated(true);
  };

  const handleWhatsAppConfirm = () => {
    const message = encodeURIComponent(
      lang === 'ar'
        ? `*طلب بطاقة دعوة VIP - جناح اكزوتيك العبد في معرض Stone Africa 2026* 🏛️🎟️\n\n` +
          `• *رقم الدعوة:* ${ticketId || 'EX-VIP-ONLINE'}\n` +
          `• *الاسم:* ${name}\n` +
          `• *الشركة / المؤسسة:* ${company || 'غير محدد'}\n` +
          `• *الصفة المهنية:* ${role}\n` +
          `• *رقم الهاتف:* ${phone}\n` +
          `• *يوم الزيارة:* ${visitDay}\n` +
          `• *المكان:* مركز القاهرة الدولي للمؤتمرات (CICC) - القاعة 1 جناح A10\n` +
          `• *التاريخ:* 12 - 15 نوفمبر 2026\n\n` +
          `يرجى تأكيد حجز الموعد وتزويدي بتفاصيل الدخول.`
        : `*VIP Invitation Request - Exotic El-Abd at Stone Africa 2026* 🏛️🎟️\n\n` +
          `• *Invitation ID:* ${ticketId || 'EX-VIP-ONLINE'}\n` +
          `• *Name:* ${name}\n` +
          `• *Company:* ${company || 'N/A'}\n` +
          `• *Role:* ${role}\n` +
          `• *Phone:* ${phone}\n` +
          `• *Preferred Day:* ${visitDay}\n` +
          `• *Location:* Cairo International Convention Center (CICC) - Hall 1 Booth A10\n` +
          `• *Date:* 12 - 15 November 2026\n\n` +
          `Please confirm my VIP appointment and pass details.`
    );
    window.open(`https://wa.me/201001234567?text=${message}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-gold-400/30 relative max-h-[95vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-charcoal-950 via-charcoal-900 to-charcoal-950 text-white p-6 sm:p-8 relative border-b border-gold-400/20">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/15 border border-gold-400/40 text-gold-300 text-xs font-bold mb-2">
            <Ticket className="w-3.5 h-3.5 text-gold-400" />
            <span>VIP PASS • STONE AFRICA 2026</span>
          </div>

          <h3 className="text-2xl font-bold text-white mb-1">
            {expoT.modal.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-300">
            {expoT.modal.subtitle}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto">
          {isGenerated ? (
            /* Digital VIP Pass Card */
            <div className="space-y-6">
              <div className="relative rounded-3xl p-6 bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-black text-white border-2 border-gold-400 shadow-2xl shadow-gold-900/30 overflow-hidden">
                {/* Gold Glow & Texture */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl" />
                
                <div className="flex items-center justify-between border-b border-gold-400/30 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <img src="/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full object-cover border border-gold-400" />
                    <div>
                      <h4 className="text-sm font-bold text-white tracking-wide">Exotic El-Abd Marble</h4>
                      <p className="text-[10px] text-gold-400 font-medium">Stone Africa 2026 • Official Exhibitor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 rounded-md bg-gold-400/20 text-gold-300 border border-gold-400/40 text-[10px] font-extrabold uppercase">
                      VIP Pass
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs mb-4">
                  <div>
                    <span className="text-[10px] text-gray-400 block">{lang === 'ar' ? 'الاسم الكريم' : 'Attendee'}</span>
                    <span className="font-bold text-white text-sm">{name}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block">{lang === 'ar' ? 'الجهة / الشركة' : 'Company'}</span>
                    <span className="font-semibold text-gray-200">{company || '-'}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block">{lang === 'ar' ? 'الصفة المهنية' : 'Role'}</span>
                    <span className="font-semibold text-gold-300">{role}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block">{lang === 'ar' ? 'يوم الزيارة' : 'Visit Day'}</span>
                    <span className="font-semibold text-gold-300">{visitDay}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-dashed border-gold-400/30 flex items-center justify-between text-[11px] text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-400" />
                    <span>CICC Cairo - Hall 1 Booth A10</span>
                  </div>
                  <span className="font-mono text-gold-400 font-bold tracking-wider">{ticketId}</span>
                </div>
              </div>

              {/* Confirmation Message */}
              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-emerald-900 mb-0.5">{expoT.modal.successTitle}</h5>
                  <p className="text-emerald-800 leading-relaxed">{expoT.modal.successMsg}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppConfirm}
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{expoT.modal.whatsappBtn}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsGenerated(false);
                    onClose();
                  }}
                  className="py-3 px-6 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold text-xs sm:text-sm transition-colors"
                >
                  {lang === 'ar' ? 'إغلاق النافذة' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                  {expoT.modal.fullName} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-gray-400 absolute top-3.5 start-3.5" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'ar' ? 'م. كريم عزالدين' : 'Eng. Kareem Ezzaldin'}
                    className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                    {expoT.modal.company}
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-gray-400 absolute top-3.5 start-3.5" />
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={lang === 'ar' ? 'اسم الشركة أو المكتب الهندسي' : 'Company or Architectural Firm'}
                      className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                    {expoT.modal.role}
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-gray-400 absolute top-3.5 start-3.5 pointer-events-none" />
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm bg-white"
                    >
                      {expoT.modal.roles.map((r, i) => (
                        <option key={i} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                    {expoT.modal.phone} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute top-3.5 start-3.5" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+20 100 000 0000"
                      dir="ltr"
                      className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm text-left"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                    {expoT.modal.email}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute top-3.5 start-3.5" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="engineer@domain.com"
                      dir="ltr"
                      className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm text-left"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-800 mb-1.5">
                  {expoT.modal.visitDay}
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute top-3.5 start-3.5 pointer-events-none" />
                  <select
                    value={visitDay}
                    onChange={(e) => setVisitDay(e.target.value)}
                    className="w-full ps-10 pe-4 py-2.5 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm bg-white"
                  >
                    {expoT.modal.days.map((d, i) => (
                      <option key={i} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-sm shadow-gold-sm hover:shadow-gold-md hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  <span>{expoT.modal.submitBtn}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
