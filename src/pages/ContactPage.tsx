import React from 'react';
import { LocationSection } from '../components/LocationSection';
import { ContactSection } from '../components/ContactSection';
import { shopConfig } from '../config/shopConfig';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-stone-50 animate-fadeIn space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-900 px-3.5 py-1 bg-amber-100/90 rounded-full mb-3 border border-amber-200">
            Local Shop Location
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Contact Us & Find The Shop
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
            Have questions or want to visit for dress trials and custom fitting? Find our shop location, hours, phone, and WhatsApp contact details below.
          </p>
        </div>

        {/* Location & Map */}
        <LocationSection />

        {/* Contact Form */}
        <ContactSection />

      </div>
    </div>
  );
};
