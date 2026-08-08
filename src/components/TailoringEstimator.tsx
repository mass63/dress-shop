import React, { useState } from 'react';
import { Calculator, MessageCircle, Scissors, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';
import { buildEstimatorMessage, getWhatsAppUrl } from '../utils/whatsapp';

export const TailoringEstimator: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Custom Blouse Stitching');
  const [fabricOption, setFabricOption] = useState<string>('I will bring my own fabric');
  const [urgency, setUrgency] = useState<string>('Standard Delivery (2-4 Days)');
  const [customNotes, setCustomNotes] = useState<string>('');

  const servicePrices: Record<string, { baseMin: number; baseMax: number }> = {
    'Custom Blouse Stitching': { baseMin: 250, baseMax: 650 },
    'Chudidar & Salwar Suit Stitching': { baseMin: 350, baseMax: 750 },
    'Anarkali & Party Gown Stitching': { baseMin: 550, baseMax: 1200 },
    'Express Fitting / Alteration': { baseMin: 50, baseMax: 200 },
    'Saree Fall, Pico & Tassels': { baseMin: 80, baseMax: 180 },
    'Kids Ethnic Wear Stitching': { baseMin: 300, baseMax: 700 }
  };

  const currentPrice = servicePrices[selectedService] || { baseMin: 250, baseMax: 600 };
  const expressMultiplier = urgency.includes('Express') ? 1.25 : 1.0;

  const estimatedMin = Math.round(currentPrice.baseMin * expressMultiplier);
  const estimatedMax = Math.round(currentPrice.baseMax * expressMultiplier);

  const waMessage = buildEstimatorMessage(selectedService, fabricOption, urgency, customNotes);
  const waUrl = getWhatsAppUrl(waMessage);

  return (
    <div className="bg-gradient-to-br from-amber-900 to-amber-950 text-amber-50 rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-800/60 relative overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        
        {/* Header */}
        <div className="text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-amber-800/80 pb-5">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-800/80 rounded-full text-amber-200 text-xs font-semibold uppercase tracking-wider mb-2">
              <Calculator className="w-3.5 h-3.5" />
              Quick Price Estimator
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Estimate Tailoring Cost & Book
            </h3>
            <p className="text-xs sm:text-sm text-amber-200/80 mt-1">
              Select your requirements below to get an instant estimated quote & WhatsApp booking link.
            </p>
          </div>

          <div className="bg-amber-950/80 border border-amber-700/60 p-3 sm:p-4 rounded-2xl text-center shrink-0 w-full sm:w-auto">
            <div className="text-[11px] text-amber-300 font-medium uppercase tracking-wide">Estimated Rate</div>
            <div className="text-xl sm:text-2xl font-black text-amber-100">
              ₹{estimatedMin} - ₹{estimatedMax}
            </div>
            <div className="text-[10px] text-amber-300/80 mt-0.5">*Final price set in shop</div>
          </div>
        </div>

        {/* Interactive Inputs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-stone-800">
          
          {/* 1. Service Selection */}
          <div className="bg-white/95 p-4 rounded-2xl shadow-xs space-y-2">
            <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">
              1. Choose Tailoring Service
            </label>
            <select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              id="estimator-service-select"
              className="w-full bg-stone-100 border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-amber-800 focus:outline-none"
            >
              {Object.keys(servicePrices).map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* 2. Fabric Source */}
          <div className="bg-white/95 p-4 rounded-2xl shadow-xs space-y-2">
            <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">
              2. Fabric Option
            </label>
            <select
              value={fabricOption}
              onChange={(e) => setFabricOption(e.target.value)}
              id="estimator-fabric-select"
              className="w-full bg-stone-100 border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-amber-800 focus:outline-none"
            >
              <option value="I will bring my own fabric / dress material">
                I will bring my own fabric / dress material
              </option>
              <option value="I want to buy fabric from shop catalog">
                I want to select fabric from shop catalog
              </option>
              <option value="Only minor alteration on ready garment">
                Only minor alteration on ready garment
              </option>
            </select>
          </div>

          {/* 3. Delivery Speed */}
          <div className="bg-white/95 p-4 rounded-2xl shadow-xs space-y-2">
            <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">
              3. Turnaround Speed
            </label>
            <select
              value={urgency}
              onChange={(e) => setUrgency(e.target.value)}
              id="estimator-urgency-select"
              className="w-full bg-stone-100 border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-medium focus:ring-2 focus:ring-amber-800 focus:outline-none"
            >
              <option value="Standard Delivery (2-4 Days)">Standard Delivery (2-4 Days)</option>
              <option value="Express Delivery (24-48 Hours)">Express Delivery (24-48 Hours)</option>
              <option value="Same-Day Emergency Fitting">Same-Day Emergency Fitting</option>
            </select>
          </div>

          {/* 4. Additional Note */}
          <div className="bg-white/95 p-4 rounded-2xl shadow-xs space-y-2">
            <label className="block text-xs font-bold text-stone-900 uppercase tracking-wider">
              4. Custom Details (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Deep V neck, gold piping, padded cups"
              value={customNotes}
              onChange={(e) => setCustomNotes(e.target.value)}
              id="estimator-notes-input"
              className="w-full bg-stone-100 border border-stone-300 rounded-xl px-3 py-2 text-xs sm:text-sm placeholder-stone-400 focus:ring-2 focus:ring-amber-800 focus:outline-none"
            />
          </div>

        </div>

        {/* CTA Send to WhatsApp */}
        <div className="pt-2 text-center sm:text-right">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="estimator-send-wa-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3.5 rounded-2xl shadow-lg transition-all transform active:scale-98 text-sm cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Send Estimate Request to WhatsApp →</span>
          </a>
        </div>

      </div>
    </div>
  );
};
