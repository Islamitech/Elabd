import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="back-to-top fixed bottom-20 md:bottom-8 right-4 md:right-6 z-40 w-11 h-11 rounded-full bg-gradient-to-br from-gold-500 to-gold-600 text-charcoal-950 shadow-gold-md hover:shadow-gold-lg hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center cursor-pointer border border-gold-300/40"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
