import React from 'react';
import { Scissors, Ruler, Sparkles, Clock, CheckCircle2, MessageCircle, BookOpen } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { TailoringEstimator } from '../components/TailoringEstimator';
import { ProcessSteps } from '../components/ProcessSteps';
import { SectionHeading } from '../components/SectionHeading';
import { tailoringServices } from '../data/services';
import { shopConfig } from '../config/shopConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface TailoringPageProps {
  onOpenMeasurementGuide: () => void;
}

export const TailoringPage: React.FC<TailoringPageProps> = ({ onOpenMeasurementGuide }) => {
  const generalTailorWaUrl = getWhatsAppUrl(
    `Hello ${shopConfig.shopName}, I would like to ask about custom tailoring and stitching rates.`
  );

  return (
    <div className="pt-28 pb-16 min-h-screen bg-stone-50 animate-fadeIn space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-900 px-3.5 py-1 bg-amber-100/90 rounded-full mb-3 border border-amber-200">
            Precision Craftsmanship
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Personalized Tailoring & Stitching
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
            From intricate bridal blouses to everyday suit alterations, every seam is stitched with double thread, reinforced lining, and master body measurement precision.
          </p>

          <div className="mt-5 flex justify-center gap-3">
            <button
              onClick={onOpenMeasurementGuide}
              id="tailoring-page-guide-btn"
              className="inline-flex items-center gap-2 bg-amber-900 hover:bg-amber-950 text-amber-50 font-semibold px-5 py-2.5 rounded-2xl text-xs sm:text-sm shadow-sm transition-colors cursor-pointer"
            >
              <Ruler className="w-4 h-4 text-amber-300" />
              <span>How Measurements Work Guide</span>
            </button>
          </div>
        </div>

        {/* Tailoring Services Grid */}
        <div className="space-y-6">
          <SectionHeading
            title="Our Tailoring Services"
            subtitle="Select a service below to view details and send a WhatsApp enquiry to our master tailor."
            align="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tailoringServices.map((serv) => (
              <ServiceCard key={serv.id} service={serv} />
            ))}
          </div>
        </div>

        {/* Interactive Estimator Tool */}
        <div className="pt-6">
          <TailoringEstimator />
        </div>

        {/* Process Steps */}
        <ProcessSteps />

      </div>
    </div>
  );
};
