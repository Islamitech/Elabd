import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Products } from './components/Products';
import { Projects } from './components/Projects';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ar');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [prefilledMaterial, setPrefilledMaterial] = useState('');

  // Update document language and direction when language state changes
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    if (lang === 'ar') {
      document.body.classList.add('font-arabic');
      document.body.classList.remove('font-sans');
    } else {
      document.body.classList.add('font-sans');
      document.body.classList.remove('font-arabic');
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleOpenQuoteWithProduct = (productName: string) => {
    setPrefilledMaterial(productName);
    setIsQuoteOpen(true);
  };

  const handleOpenGeneralQuote = () => {
    setPrefilledMaterial('');
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-marble-offwhite text-charcoal-800">
      {/* Top Fixed Sticky Navbar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenQuote={handleOpenGeneralQuote}
      />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenQuote={handleOpenGeneralQuote}
        />

        {/* About Us (Egyptian Heritage & Factory) */}
        <About lang={lang} />

        {/* Products / Collections (Egyptian, Imported, Granite, Onyx) */}
        <Products
          lang={lang}
          onOpenQuoteWithProduct={handleOpenQuoteWithProduct}
        />

        {/* Featured Projects Gallery */}
        <Projects lang={lang} />

        {/* Why Choose Us */}
        <WhyUs lang={lang} />

        {/* Contact Section */}
        <Contact lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Interactive Quote Calculator & Order Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        lang={lang}
        prefilledMaterial={prefilledMaterial}
      />
    </div>
  );
};

export default App;
