import React from 'react';
import { Hero } from '../components/Hero';
import { ProductGrid } from '../components/ProductGrid';
import { ServiceCard } from '../components/ServiceCard';
import { TailoringEstimator } from '../components/TailoringEstimator';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TailorProfile } from '../components/TailorProfile';
import { ProcessSteps } from '../components/ProcessSteps';
import { GallerySection } from '../components/GallerySection';
import { LocationSection } from '../components/LocationSection';
import { ContactSection } from '../components/ContactSection';
import { SectionHeading } from '../components/SectionHeading';

import { sampleProducts } from '../data/products';
import { tailoringServices } from '../data/services';
import { sampleTestimonials } from '../data/gallery';
import { Product, TailoringService } from '../types';
import { ArrowRight, Star, Quote, ShoppingBag, Scissors } from 'lucide-react';

interface HomeProps {
  onNavigateTab: (tab: string) => void;
  onSelectProduct: (product: Product) => void;
  onOpenMeasurementGuide: () => void;
}

export const Home: React.FC<HomeProps> = ({
  onNavigateTab,
  onSelectProduct,
  onOpenMeasurementGuide
}) => {
  return (
    <div className="space-y-0 animate-fadeIn">
      
      {/* 1. Hero Section */}
      <Hero
        onExploreShop={() => onNavigateTab('shop')}
        onBookTailoring={() => onNavigateTab('tailoring')}
      />

      {/* 2. Featured Dresses Showcase */}
      <section className="py-14 sm:py-20 bg-stone-50 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-amber-800 px-3 py-1 bg-amber-100 rounded-full inline-block mb-2">
                Curated Selection
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight">
                Featured Dress Collection
              </h2>
            </div>
            <button
              onClick={() => onNavigateTab('shop')}
              id="home-view-all-dresses-btn"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-amber-900 hover:text-amber-950 underline underline-offset-4 cursor-pointer"
            >
              <span>Explore All Dresses & Kurtis ({sampleProducts.length})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <ProductGrid
            products={sampleProducts}
            onSelectProduct={onSelectProduct}
            limit={4}
          />
        </div>
      </section>

      {/* 3. Tailoring Services Section */}
      <section className="py-14 sm:py-20 bg-stone-100/60 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SectionHeading
            eyebrow="Custom Stitching & Fitting"
            title="Professional Tailoring Services"
            subtitle="Precision blouse stitching, suit tailoring, and express alterations executed with 30+ years of local mastery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tailoringServices.slice(0, 3).map((serv) => (
              <ServiceCard key={serv.id} service={serv} />
            ))}
          </div>

          {/* Quick Tailoring Cost Estimator Component */}
          <TailoringEstimator />

        </div>
      </section>

      {/* 4. Why Choose Us */}
      <WhyChooseUs />

      {/* 5. Master Tailor Profile */}
      <TailorProfile />

      {/* 6. Simple 4-Step Process */}
      <ProcessSteps />

      {/* 7. Gallery Showcase */}
      <GallerySection />

      {/* 8. Local Customer Reviews */}
      <section className="py-14 sm:py-20 bg-amber-50/40 border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            eyebrow="Local Trust & Words"
            title="What Our Customers Say"
            subtitle="Real reviews from local families who trust us with their wedding outfits, daily wear kurtis, and emergency dress fittings."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleTestimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 border border-stone-200/90 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-500" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-stone-400">{t.date}</span>
                  </div>

                  <p className="text-stone-700 text-xs sm:text-sm leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100">
                  <div className="font-bold text-stone-900 text-sm">{t.name}</div>
                  <div className="text-xs text-amber-800 font-medium">{t.serviceUsed} • {t.location}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Location & Google Map */}
      <LocationSection />

      {/* 10. Direct Contact Form */}
      <ContactSection />

    </div>
  );
};
