import React from 'react';
import { Phone, MessageCircle, Calculator, Ticket } from 'lucide-react';
import { Language } from '../types';

interface MobileBottomBarProps {
  lang: Language;
  onOpenQuote: () => void;
  onOpenExpoInvite: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  lang,
  onOpenQuote,
  onOpenExpoInvite,
}) => {
  const isAr = lang === 'ar';

  return (
    <aside
      aria-label={isAr ? 'شريط التفاعل السريع' : 'Quick Actions Bar'}
      className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-charcoal-950/95 backdrop-blur-xl border-t border-gold-400/30 shadow-[0_-8px_25px_rgba(0,0,0,0.5)] px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] transition-transform duration-300"
    >
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1.5 items-center">
        {/* 1. Direct Call */}
        <a
          href="tel:+201020592155"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-gray-300 hover:text-gold-300 active:scale-95 transition-all text-center group"
          title={isAr ? 'اتصال بالمبيعات' : 'Call Sales'}
        >
          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-400 group-hover:bg-gold-400/20 group-hover:border-gold-400/40 mb-1 transition-all">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight leading-none truncate max-w-full">
            {isAr ? 'اتصال' : 'Call'}
          </span>
        </a>

        {/* 2. Direct WhatsApp */}
        <a
          href="https://wa.me/201020592155?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D9%8B%20%D8%A7%D9%83%D8%B2%D9%88%D8%AA%D9%8A%D9%83%20%D8%A7%D9%84%D8%B9%D8%A8%D8%AF%D8%8C%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A3%D9%86%D9%88%D8%A7%D8%B9%20%D8%A7%D9%84%D8%B1%D8%AE%D8%A7%D9%85%20%D9%88%D8%A7%D9%84%D8%AC%D8%B1%D8%A7%D9%86%D9%8A%D8%AA"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-emerald-400 hover:text-emerald-300 active:scale-95 transition-all text-center group"
          title={isAr ? 'محادثة واتساب' : 'WhatsApp'}
        >
          <div className="w-9 h-9 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/25 mb-1 transition-all">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight leading-none truncate max-w-full">
            {isAr ? 'واتساب' : 'WhatsApp'}
          </span>
        </a>

        {/* 3. Get Quote Button */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-gold-300 hover:text-gold-200 active:scale-95 transition-all text-center group cursor-pointer"
          title={isAr ? 'حاسبة عرض السعر' : 'Price Calculator'}
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-gold-500 to-gold-400 flex items-center justify-center text-charcoal-950 shadow-gold-sm mb-1 transition-all">
            <Calculator className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-extrabold tracking-tight leading-none truncate max-w-full text-gold-300">
            {isAr ? 'عرض سعر' : 'Quote'}
          </span>
        </button>

        {/* 4. Stone Africa VIP Pass */}
        <button
          onClick={onOpenExpoInvite}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-amber-300 hover:text-amber-200 active:scale-95 transition-all text-center group cursor-pointer"
          title={isAr ? 'بطاقة دعوة VIP' : 'VIP Pass'}
        >
          <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/30 mb-1 transition-all">
            <Ticket className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold tracking-tight leading-none truncate max-w-full">
            {isAr ? 'دعوة VIP' : 'VIP Pass'}
          </span>
        </button>
      </div>
    </aside>
  );
};
