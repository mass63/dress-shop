import React, { useState } from 'react';
import { ZoomIn, Camera } from 'lucide-react';
import { galleryItems } from '../data/gallery';
import { GalleryItem } from '../types';
import { SectionHeading } from './SectionHeading';
import { LightboxModal } from './LightboxModal';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Tailoring Work', 'Dresses', 'Shop & Craft', 'Blouses & Ethnic'];

  const filteredItems = galleryItems.filter(item =>
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  return (
    <section className="py-14 sm:py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Shop & Craftsmanship Showcase"
          title="Work & Collection Gallery"
          subtitle="Explore real photos of our custom stitching, finished outfits, boutique dresses, and workshop crafting."
        />

        {/* Filter Category Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              id={`gallery-cat-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-amber-900 text-amber-50 shadow-sm'
                  : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative rounded-3xl overflow-hidden bg-stone-200 border border-stone-200/90 shadow-xs cursor-pointer h-64 sm:h-72"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

              {/* Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold text-amber-300 uppercase tracking-widest block mb-0.5">
                  {item.category}
                </span>
                <h3 className="text-base font-bold text-white leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 text-stone-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <ZoomIn className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        onClose={() => setActiveLightboxItem(null)}
      />
    </section>
  );
};
