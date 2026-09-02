import React, { useState } from 'react';
import { Sparkles, ZoomIn, Check, Layers, MapPin, X } from 'lucide-react';
import { Language, ProductItem } from '../types';
import { translations } from '../data/translations';
import { productsData } from '../data/products';

interface ProductsProps {
  lang: Language;
  onOpenQuoteWithProduct: (productName: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ lang, onOpenQuoteWithProduct }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'egyptian' | 'imported' | 'granite' | 'onyx'>('all');
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const t = translations[lang];

  const filteredProducts = activeTab === 'all'
    ? productsData
    : productsData.filter(p => p.category === activeTab);

  return (
    <section id="products" className="py-24 bg-marble-offwhite relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-600 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>{t.products.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 tracking-tight mb-4">
            {t.products.title}
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            {t.products.subtitle}
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {(['all', 'egyptian', 'imported', 'granite', 'onyx'] as const).map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeTab === tabKey
                  ? 'bg-charcoal-900 text-gold-400 shadow-md scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {t.products.tabs[tabKey]}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const name = lang === 'ar' ? product.nameAr : product.nameEn;
            const origin = lang === 'ar' ? product.originAr : product.originEn;
            const desc = lang === 'ar' ? product.descriptionAr : product.descriptionEn;
            const finishes = lang === 'ar' ? product.finishesAr : product.finishesEn;

            return (
              <div
                key={product.id}
                className="group rounded-2xl bg-white border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-gold-400/40 transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Zoom Trigger */}
                <div 
                  className="relative h-56 overflow-hidden bg-gray-100 cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider backdrop-blur-md bg-charcoal-900/80 text-gold-300 border border-gold-400/30">
                    {t.products.tabs[product.category]}
                  </div>

                  {/* Zoom Overlay on Hover */}
                  <div className="absolute inset-0 bg-charcoal-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <ZoomIn className="w-6 h-6" />
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Origin */}
                    <div className="flex items-center gap-1.5 text-xs text-gold-700 font-semibold mb-1.5">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{origin}</span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-lg font-bold text-charcoal-900 mb-2 group-hover:text-gold-600 transition-colors">
                      {name}
                    </h3>

                    {/* Brief Description */}
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed mb-4">
                      {desc}
                    </p>

                    {/* Available Finishes Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {finishes.slice(0, 2).map((fin, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-gray-100 text-[11px] text-gray-600 font-medium"
                        >
                          {fin}
                        </span>
                      ))}
                      {finishes.length > 2 && (
                        <span className="px-1.5 py-0.5 rounded bg-gray-100 text-[11px] text-gray-500">
                          +{finishes.length - 2}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-3 border-t border-gray-100 grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="py-2 px-2 text-xs font-bold text-charcoal-900 bg-gray-100 hover:bg-gray-200 rounded-lg text-center transition-colors"
                    >
                      {t.products.card.viewDetails}
                    </button>
                    <button
                      onClick={() => onOpenQuoteWithProduct(name)}
                      className="py-2 px-2 text-xs font-bold text-charcoal-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-500 hover:to-gold-600 rounded-lg text-center transition-all shadow-gold-sm"
                    >
                      {lang === 'ar' ? 'طلب عرض سعر' : 'Get Quote'}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-gold-400/30 relative max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-charcoal-900/70 text-white hover:bg-charcoal-900 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="h-64 sm:h-72 relative bg-gray-900 shrink-0">
              <img
                src={selectedProduct.image}
                alt={lang === 'ar' ? selectedProduct.nameAr : selectedProduct.nameEn}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <span className="px-2.5 py-0.5 rounded text-xs font-bold bg-gold-400 text-charcoal-950 uppercase tracking-wider mb-1 inline-block">
                    {t.products.tabs[selectedProduct.category]}
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    {lang === 'ar' ? selectedProduct.nameAr : selectedProduct.nameEn}
                  </h3>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5">
              <div>
                <h4 className="text-xs font-bold text-gold-600 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{t.products.modal.origin}</span>
                </h4>
                <p className="text-sm font-semibold text-charcoal-800">
                  {lang === 'ar' ? selectedProduct.originAr : selectedProduct.originEn}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold text-gold-600 uppercase tracking-wider mb-1">
                  {t.products.modal.characteristics}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {lang === 'ar' ? selectedProduct.descriptionAr : selectedProduct.descriptionEn}
                </p>
              </div>

              {/* Finishes */}
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-gold-500" />
                  <span>{t.products.card.finishes}</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(lang === 'ar' ? selectedProduct.finishesAr : selectedProduct.finishesEn).map((f, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-gold-50 border border-gold-200 text-gold-800">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended Uses */}
              <div>
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-gold-500" />
                  <span>{t.products.card.uses}</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {(lang === 'ar' ? selectedProduct.recommendedUsesAr : selectedProduct.recommendedUsesEn).map((u, i) => (
                    <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      {u}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-5 py-2.5 rounded-xl border border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {t.products.modal.close}
                </button>
                <button
                  onClick={() => {
                    const name = lang === 'ar' ? selectedProduct.nameAr : selectedProduct.nameEn;
                    setSelectedProduct(null);
                    onOpenQuoteWithProduct(name);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-950 text-sm font-bold shadow-gold-sm hover:shadow-gold-md hover:scale-105 transition-all"
                >
                  {t.products.modal.requestQuoteNow}
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
