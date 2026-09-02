import React, { useState, useEffect } from 'react';
import { Globe, Calculator, Menu, X, Sparkles, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenQuote }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#hero', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#products', label: t.nav.products },
    { href: '#projects', label: t.nav.projects },
    { href: '#why-us', label: t.nav.whyUs },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-charcoal-950/90 backdrop-blur-md shadow-lg border-b border-gold-400/20 py-2.5' 
          : 'bg-gradient-to-b from-charcoal-950/80 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-gold-400 shadow-gold-sm transition-transform duration-300 group-hover:scale-105 bg-white flex items-center justify-center">
              <img 
                src="/logo.jpg" 
                alt="Exotic El-Abd Marble Logo" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold tracking-tight text-white group-hover:text-gold-300 transition-colors">
                {t.brandName}
              </span>
              <span className="text-[10px] md:text-xs text-gold-400/90 font-medium tracking-wide">
                {lang === 'ar' ? 'فخامة الرخام والجرانيت المصري' : 'Egyptian Marble & Granite'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-200 hover:text-gold-300 text-sm font-semibold transition-colors duration-200 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons: Language Switcher & Quote CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-400/40 text-gold-300 hover:text-white hover:bg-gold-400/20 text-xs font-semibold transition-all duration-200"
              title="Switch Language / تغيير اللغة"
            >
              <Globe className="w-3.5 h-3.5 text-gold-400" />
              <span>{t.nav.switchLang}</span>
            </button>

            {/* Quick WhatsApp / Phone Call button */}
            <a 
              href="https://wa.me/201001234567?text=مرحباً%20اكزوتيك%20العبد،%20أرغب%20في%20استشارة%20حول%20الرخام"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-gold-400/30 text-gold-300 hover:bg-gold-400/20 transition-all"
              title="اتصل بنا / Call Us"
            >
              <PhoneCall className="w-4 h-4 text-gold-400" />
            </a>

            {/* CTA Button */}
            <button
              onClick={onOpenQuote}
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-charcoal-950 font-bold text-xs md:text-sm shadow-gold-sm hover:shadow-gold-md hover:scale-105 active:scale-95 transition-all duration-200"
            >
              <Sparkles className="w-4 h-4 text-charcoal-900" />
              <span>{t.nav.getQuote}</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onToggleLang}
              className="p-2 rounded-full border border-gold-400/40 text-gold-300 text-xs font-bold"
            >
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gold-400 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 pb-6 px-4 bg-charcoal-950/95 backdrop-blur-xl border border-gold-400/30 rounded-2xl shadow-2xl flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-200 hover:text-gold-300 text-base font-semibold py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-950 font-bold text-center flex items-center justify-center gap-2 shadow-gold-sm"
              >
                <Calculator className="w-4 h-4" />
                <span>{t.nav.getQuote}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
