import React, { useState, useEffect } from 'react';
import { Globe, Calculator, Menu, X, Sparkles, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { useActiveSection } from '../hooks/useActiveSection';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenQuote: () => void;
  onOpenExpoInvite: () => void;
}

const sectionIds = ['hero', 'about', 'products', 'projects', 'expo', 'why-us', 'contact'];

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenQuote, onOpenExpoInvite }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t.nav.home, id: 'hero' },
    { href: '#about', label: t.nav.about, id: 'about' },
    { href: '#products', label: t.nav.products, id: 'products' },
    { href: '#projects', label: t.nav.projects, id: 'projects' },
    { href: '#expo', label: t.nav.expo, id: 'expo' },
    { href: '#why-us', label: t.nav.whyUs, id: 'why-us' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-charcoal-950/95 backdrop-blur-md shadow-lg border-b border-gold-400/20 py-1.5 sm:py-2' 
          : 'bg-gradient-to-b from-charcoal-950/95 via-charcoal-950/80 to-transparent py-2 sm:py-3'
      }`}
    >
      {/* Top Event Announcement Bar */}
      <div className="bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-charcoal-950 text-[10px] sm:text-xs font-bold py-1 px-3 text-center shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2">
          <span className="truncate">
            {lang === 'ar' 
              ? '🏛️ جناح اكزوتيك العبد في معرض Stone Africa 2026 بمركز المؤتمرات (12 - 15 نوفمبر)' 
              : '🏛️ Exotic El-Abd at Stone Africa 2026 • CICC Cairo (12 - 15 Nov)'}
          </span>
          <button
            onClick={onOpenExpoInvite}
            className="underline hover:text-black font-extrabold cursor-pointer transition-colors shrink-0 text-[10px] sm:text-xs"
          >
            {lang === 'ar' ? '[احجز دعوتك VIP]' : '[Free VIP Pass]'}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 mt-1 sm:mt-1.5">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center gap-2 sm:gap-3 group">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-gold-400 shadow-gold-sm transition-transform duration-300 group-hover:scale-105 bg-white flex items-center justify-center shrink-0">
              <img 
                src="/logo.jpg" 
                alt="Exotic El-Abd Marble Logo" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors leading-tight">
                {t.brandName}
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-xs text-gold-400/90 font-medium tracking-wide">
                {lang === 'ar' ? 'فخامة الرخام والجرانيت المصري' : 'Egyptian Marble & Granite'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links — with active indicator */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gold-400 after:transition-all after:duration-300 ${
                  activeSection === link.id
                    ? 'text-gold-300 after:w-full'
                    : 'text-gray-200 hover:text-gold-300 after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Language Switcher & Quote CTA (Desktop) */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-400/40 text-gold-300 hover:text-white hover:bg-gold-400/20 text-xs font-semibold transition-all duration-200 cursor-pointer"
              title="Switch Language / تغيير اللغة"
            >
              <Globe className="w-3.5 h-3.5 text-gold-400" />
              <span>{t.nav.switchLang}</span>
            </button>

            {/* Quick WhatsApp / Phone Call button */}
            <a 
              href="tel:+201020592155"
              className="p-2 rounded-full border border-gold-400/30 text-gold-300 hover:bg-gold-400/20 transition-all"
              title="اتصل بنا / Call Us: +20 10 2059 2155"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
            </a>

            {/* CTA Button */}
            <button
              onClick={onOpenQuote}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-xs md:text-sm shadow-gold-sm hover:shadow-gold-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-charcoal-900" />
              <span>{t.nav.getQuote}</span>
            </button>
          </div>

          {/* Mobile Actions: Call + Lang + Menu Hamburger */}
          <div className="flex items-center gap-1.5 sm:hidden">
            <a
              href="tel:+201020592155"
              className="p-2 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300"
              aria-label="Call Sales"
              title="+20 10 2059 2155"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
            </a>
            <button
              onClick={onToggleLang}
              className="px-2.5 py-1 rounded-full border border-gold-400/40 text-gold-300 text-[11px] font-bold"
            >
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gold-400 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu (Touch & Scroll Optimized) */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 max-h-[calc(100vh-90px)] overflow-y-auto scrollbar-none pt-3 pb-6 px-4 bg-charcoal-950/98 backdrop-blur-2xl border border-gold-400/40 rounded-3xl shadow-2xl flex flex-col gap-2.5 modal-content-enter">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <span className="text-xs text-gold-400 font-bold uppercase tracking-wider">
                {lang === 'ar' ? 'قائمة التصفح' : 'Navigation Menu'}
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-gray-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-semibold py-2.5 px-3 rounded-xl transition-colors flex items-center justify-between ${
                  activeSection === link.id
                    ? 'text-gold-300 bg-gold-400/10'
                    : 'text-gray-200 hover:text-gold-300 hover:bg-white/5 active:bg-gold-400/10'
                }`}
              >
                <span>{link.label}</span>
                <span className={`text-xs ${activeSection === link.id ? 'text-gold-400' : 'text-gold-400/40'}`}>›</span>
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-950 font-bold text-sm text-center flex items-center justify-center gap-2 shadow-gold-sm active:scale-98 transition-transform"
              >
                <Calculator className="w-4 h-4" />
                <span>{t.nav.getQuote}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenExpoInvite();
                }}
                className="w-full py-2.5 rounded-xl bg-white/10 border border-gold-400/30 text-gold-300 font-bold text-xs text-center flex items-center justify-center gap-2 active:scale-98 transition-transform"
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>{lang === 'ar' ? 'بطاقة VIP معرض ستون أفريكا' : 'Stone Africa VIP Pass'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
