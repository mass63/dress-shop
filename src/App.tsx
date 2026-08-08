import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductDetailsModal } from './components/ProductDetailsModal';
import { MeasurementGuideModal } from './components/MeasurementGuideModal';

import { Home } from './pages/Home';
import { ShopPage } from './pages/ShopPage';
import { TailoringPage } from './pages/TailoringPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

import { Product } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [measurementGuideOpen, setMeasurementGuideOpen] = useState<boolean>(false);

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-amber-200 selection:text-amber-950">
      
      {/* Top Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main View Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <Home
            onNavigateTab={setActiveTab}
            onSelectProduct={(p) => setSelectedProduct(p)}
            onOpenMeasurementGuide={() => setMeasurementGuideOpen(true)}
          />
        )}

        {activeTab === 'shop' && (
          <ShopPage
            onSelectProduct={(p) => setSelectedProduct(p)}
            onOpenMeasurementGuide={() => setMeasurementGuideOpen(true)}
          />
        )}

        {activeTab === 'tailoring' && (
          <TailoringPage
            onOpenMeasurementGuide={() => setMeasurementGuideOpen(true)}
          />
        )}

        {activeTab === 'about' && (
          <AboutPage />
        )}

        {activeTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenMeasurementGuide={() => setMeasurementGuideOpen(true)}
      />

      {/* Measurement & Fitting Guide Modal */}
      <MeasurementGuideModal
        isOpen={measurementGuideOpen}
        onClose={() => setMeasurementGuideOpen(false)}
      />

      {/* Footer */}
      <Footer onNavClick={setActiveTab} />

    </div>
  );
}
