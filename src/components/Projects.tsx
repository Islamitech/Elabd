import React, { useState } from 'react';
import { Eye, MapPin, Building, Calendar, X } from 'lucide-react';
import { Language, ProjectItem } from '../types';
import { translations } from '../data/translations';
import { projectsData } from '../data/projects';

interface ProjectsProps {
  lang: Language;
}

export const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'residential' | 'commercial' | 'hospitality'>('all');
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);
  const t = translations[lang];

  const filteredProjects = activeCategory === 'all'
    ? projectsData
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-charcoal-950 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-300 text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5 text-gold-400" />
            <span>{t.projects.tag}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            {t.projects.title}
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {(['all', 'residential', 'commercial', 'hospitality'] as const).map((catKey) => (
            <button
              key={catKey}
              onClick={() => setActiveCategory(catKey)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === catKey
                  ? 'bg-gradient-to-r from-gold-500 to-gold-400 text-charcoal-950 shadow-gold-sm font-bold'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
              }`}
            >
              {t.projects.categories[catKey]}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const title = lang === 'ar' ? project.titleAr : project.titleEn;
            const location = lang === 'ar' ? project.locationAr : project.locationEn;
            const type = lang === 'ar' ? project.typeAr : project.typeEn;
            const materials = lang === 'ar' ? project.materialsUsedAr : project.materialsUsedEn;

            return (
              <div
                key={project.id}
                className="group relative rounded-3xl overflow-hidden bg-charcoal-900 border border-white/10 hover:border-gold-400/50 shadow-xl transition-all duration-500 flex flex-col"
              >
                {/* Image Container */}
                <div 
                  className="relative h-72 overflow-hidden cursor-pointer"
                  onClick={() => setLightboxProject(project)}
                >
                  <img
                    src={project.image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent" />

                  {/* Year Tag */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-charcoal-950/80 backdrop-blur-md border border-gold-400/30 text-gold-300 text-xs font-bold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>{project.year}</span>
                  </div>

                  {/* Zoom Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-charcoal-950/40">
                    <span className="p-3.5 rounded-full bg-gold-400 text-charcoal-950 shadow-gold-md">
                      <Eye className="w-6 h-6" />
                    </span>
                  </div>
                </div>

                {/* Info Container */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location & Type */}
                    <div className="flex items-center justify-between text-xs text-gold-400 font-semibold mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        {location}
                      </span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">
                        {type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-gold-300 transition-colors mb-3">
                      {title}
                    </h3>

                    {/* Materials Tag */}
                    <p className="text-xs text-gray-400 leading-relaxed">
                      <strong className="text-gray-300">{lang === 'ar' ? 'الخامات:' : 'Stones:'}</strong> {materials}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setLightboxProject(project)}
                      className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center gap-1 transition-colors"
                    >
                      <span>{t.projects.card.viewFull}</span>
                    </button>
                    <span className="text-[11px] text-gray-500 font-medium uppercase tracking-wider">
                      {t.projects.categories[project.category]}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setLightboxProject(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-charcoal-900 rounded-3xl overflow-hidden border border-gold-400/40 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxProject(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <img
              src={lightboxProject.image}
              alt={lang === 'ar' ? lightboxProject.titleAr : lightboxProject.titleEn}
              className="w-full max-h-[70vh] object-cover"
            />

            <div className="p-6 bg-charcoal-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">
                  {lang === 'ar' ? lightboxProject.titleAr : lightboxProject.titleEn}
                </h3>
                <p className="text-sm text-gold-400 flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  <span>{lang === 'ar' ? lightboxProject.locationAr : lightboxProject.locationEn}</span>
                </p>
              </div>
              <div className="text-xs text-gray-400 max-w-md">
                <strong className="text-gray-200">{lang === 'ar' ? 'الخامات المستخدمة:' : 'Materials:'}</strong>{' '}
                {lang === 'ar' ? lightboxProject.materialsUsedAr : lightboxProject.materialsUsedEn}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
