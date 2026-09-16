import React, { useState, useEffect } from 'react';

export const LoadingScreen: React.FC<{ onDone: () => void }> = ({ onDone }) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer = setTimeout(() => {
      setHide(true);
      window.setTimeout(onDone, reducedMotion ? 0 : 650);
    }, reducedMotion ? 250 : 1450);
    return () => window.clearTimeout(timer);
  }, [onDone]);

  return (
    <div className={`loading-screen ${hide ? 'hide' : ''}`}>
      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0,transparent_60%)]" />

      {/* Logo */}
      <img
        src="/logo.jpg"
        alt="Exotic El-Abd"
        className="loading-logo relative z-10"
      />

      {/* Brand Name */}
      <h2 className="text-gold-400 text-lg sm:text-xl font-bold mt-5 tracking-wide relative z-10 font-arabic">
        اكزوتيك العبد للرخام
      </h2>
      <p className="text-gray-500 text-[11px] sm:text-xs mt-1 font-medium tracking-widest uppercase relative z-10">
        Egyptian Marble & Granite
      </p>

      {/* Loading Bar */}
      <div className="loading-bar-track relative z-10">
        <div className="loading-bar-fill" />
      </div>
    </div>
  );
};
