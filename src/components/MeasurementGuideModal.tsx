import React from 'react';
import { X, Ruler, Shirt, MessageCircle, CheckCircle2 } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface MeasurementGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MeasurementGuideModal: React.FC<MeasurementGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const waUrl = getWhatsAppUrl(
    `Hello ${shopConfig.shopName}, I would like to send my dress measurements over WhatsApp.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose}></div>

      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl p-6 sm:p-8 border border-stone-200 z-10 max-h-[90vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-measurement-guide-btn"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center sm:text-left space-y-1">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Ruler className="w-3.5 h-3.5" />
            Easy Fitting Guide
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-stone-900">
            How To Share Your Measurements
          </h3>
          <p className="text-xs sm:text-sm text-stone-600">
            Choose whichever option is most convenient for you:
          </p>
        </div>

        {/* Options List */}
        <div className="space-y-4">
          
          {/* Option 1: Shop Visit */}
          <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/80 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-900 text-amber-50 flex items-center justify-center shrink-0 font-bold">
              01
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <span>In-Shop Professional Measurement</span>
                <span className="text-[10px] bg-amber-200 text-amber-900 px-2 py-0.5 rounded-full font-semibold">Recommended</span>
              </h4>
              <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                Visit our shop anytime during working hours ({shopConfig.openingHours[0].open} - {shopConfig.openingHours[0].close}). Our tailor takes precise measurements in under 3 minutes.
              </p>
            </div>
          </div>

          {/* Option 2: Bring Sample Garment */}
          <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-800 text-stone-50 flex items-center justify-center shrink-0 font-bold">
              02
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <span>Bring a Fitting Sample Dress</span>
              </h4>
              <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                Bring any existing blouse, kurti, or suit from home that fits you comfortably. We copy the exact dimensions to your new fabric.
              </p>
            </div>
          </div>

          {/* Option 3: WhatsApp Measurements */}
          <div className="bg-emerald-50/70 p-4 rounded-2xl border border-emerald-200/80 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 font-bold">
              03
            </div>
            <div>
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <span>Send Measurements on WhatsApp</span>
              </h4>
              <p className="text-xs text-stone-700 mt-1 leading-relaxed">
                If you already know your chest, waist, shoulder, blouse length, and sleeve lengths, simply message us directly!
              </p>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="pt-2 text-center">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="measurement-guide-wa-btn"
            className="w-full inline-flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-5 rounded-2xl shadow-xs transition-all text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Specs to WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
