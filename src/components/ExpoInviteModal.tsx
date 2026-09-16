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
    window.open(`https://wa.me/201020592155?text=${message}`, '_blank');
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
        {/* Header */}
        <div className="bg-gradient-to-r from-charcoal-950 via-charcoal-900 to-charcoal-950 text-white p-4 sm:p-6 relative border-b border-gold-400/20 shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/15 border border-gold-400/40 text-gold-300 text-[10px] sm:text-xs font-bold mb-1.5">
            <Ticket className="w-3.5 h-3.5 text-gold-400" />
            <span>VIP PASS • STONE AFRICA 2026</span>
          </div>

          <h3 className="text-lg sm:text-2xl font-bold text-white mb-0.5 leading-snug">
            {expoT.modal.title}
          </h3>
          <p className="text-[11px] sm:text-xs text-gray-300">
            {expoT.modal.subtitle}
          </p>
        </div>

        {/* Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 flex-1">
          {isGenerated ? (
            /* Digital VIP Pass Card */
            <div className="space-y-4">
              <div className="relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-black text-white border-2 border-gold-400 shadow-2xl shadow-gold-900/30 overflow-hidden">
                {/* Gold Glow & Texture */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl" />
                
                <div className="flex items-center justify-between border-b border-gold-400/30 pb-3 mb-3">
                  <div className="flex items-center gap-2.5">
                    <img src="/logo.jpg" alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-gold-400" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white tracking-wide">Exotic El-Abd Marble</h4>
                      <p className="text-[9px] sm:text-[10px] text-gold-400 font-medium">Stone Africa 2026 • Exhibitor</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="px-2 py-0.5 rounded-md bg-gold-400/25 text-gold-300 border border-gold-400/40 text-[9px] sm:text-[10px] font-black uppercase">
                      VIP Pass
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 sm:gap-3 text-xs mb-3">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-gray-400 block">{lang === 'ar' ? 'الاسم الكريم' : 'Attendee'}</span>
                    <span className="font-bold text-white text-xs sm:text-sm truncate block">{name}</span>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-gray-400 block">{lang === 'ar' ? 'الجهة / الشركة' : 'Company'}</span>
                    <span className="font-semibold text-gray-200 text-xs truncate block">{company || '-'}</span>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-gray-400 block">{lang === 'ar' ? 'الصفة المهنية' : 'Role'}</span>
                    <span className="font-semibold text-gold-300 text-xs truncate block">{role}</span>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-gray-400 block">{lang === 'ar' ? 'يوم الزيارة' : 'Visit Day'}</span>
                    <span className="font-semibold text-gold-300 text-xs truncate block">{visitDay}</span>
                  </div>
                </div>

                <div className="pt-2.5 border-t border-dashed border-gold-400/30 flex items-center justify-between text-[10px] sm:text-[11px] text-gray-300">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span className="truncate">CICC Cairo - Hall 1 Booth A10</span>
                  </div>
                  <span className="font-mono text-gold-400 font-bold tracking-wider shrink-0">{ticketId}</span>
                </div>
              </div>

              {/* Confirmation Message */}
              <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-emerald-900 mb-0.5">{expoT.modal.successTitle}</h5>
                  <p className="text-emerald-800 leading-relaxed text-[11px] sm:text-xs">{expoT.modal.successMsg}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2.5 safe-bottom">
                <button
                  type="button"
                  onClick={handleWhatsAppConfirm}
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-98 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all min-h-[44px] cursor-pointer"
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
                  className="py-2.5 px-5 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 font-semibold text-xs sm:text-sm transition-colors min-h-[44px] cursor-pointer"
                >
                  {lang === 'ar' ? 'إغلاق' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            /* Registration Form */
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-3.5">
              <div>
                <label className="block text-xs font-bold text-charcoal-800 mb-1">
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
                    className="w-full ps-10 pe-4 py-2 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-xs sm:text-sm min-h-[42px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1">
                    {expoT.modal.company}
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-gray-400 absolute top-3.5 start-3.5" />
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder={lang === 'ar' ? 'اسم الشركة أو المكتب' : 'Company Name'}
                      className="w-full ps-10 pe-4 py-2 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-xs sm:text-sm min-h-[42px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1">
                    {expoT.modal.role}
                  </label>
                  <div className="relative">
                    <Briefcase className="w-4 h-4 text-gray-400 absolute top-3.5 start-3.5 pointer-events-none" />
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full ps-10 pe-4 py-2 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-xs sm:text-sm bg-white min-h-[42px]"
                    >
                      {expoT.modal.roles.map((r, i) => (
                        <option key={i} value={r}>{r}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1">
                    {expoT.modal.phone} *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute top-3.5 start-3.5" />
                    <input
                      type="tel"
                      inputMode="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+20 100 ..."
                      dir="ltr"
                      className="w-full ps-10 pe-4 py-2 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-xs sm:text-sm text-left min-h-[42px]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-800 mb-1">
                    {expoT.modal.email}
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute top-3.5 start-3.5" />
                    <input
                      type="email"
                      inputMode="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="engineer@domain.com"
                      dir="ltr"
                      className="w-full ps-10 pe-4 py-2 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-xs sm:text-sm text-left min-h-[42px]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-800 mb-1">
                  {expoT.modal.visitDay}
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute top-3.5 start-3.5 pointer-events-none" />
                  <select
                    value={visitDay}
                    onChange={(e) => setVisitDay(e.target.value)}
                    className="w-full ps-10 pe-4 py-2 rounded-xl border border-gray-300 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-xs sm:text-sm bg-white min-h-[42px]"
                  >
                    {expoT.modal.days.map((d, i) => (
                      <option key={i} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2 safe-bottom">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-xs sm:text-sm shadow-gold-sm hover:shadow-gold-md active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
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
