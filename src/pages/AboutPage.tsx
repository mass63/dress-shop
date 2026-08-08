import React from 'react';
import { TailorProfile } from '../components/TailorProfile';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { shopConfig } from '../config/shopConfig';
import { Scissors, Heart, Award, ShieldCheck, MapPin } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-16 min-h-screen bg-stone-50 animate-fadeIn space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-900 px-3.5 py-1 bg-amber-100/90 rounded-full mb-3 border border-amber-200">
            Family Heritage & Craft
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            About {shopConfig.shopName}
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
            A small local shop rooted in personal service, honest advice, and three decades of dedicated tailoring craftsmanship.
          </p>
        </div>

        {/* Master Tailor Profile Component */}
        <TailorProfile />

        {/* Family Business Values */}
        <WhyChooseUs />

        {/* Story & Philosophy Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-md max-w-4xl mx-auto space-y-4">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-base">
            <Heart className="w-5 h-5 text-rose-600" />
            <span>Built On Personal Relationships & Local Trust</span>
          </div>
          <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
            Unlike modern online e-commerce giants, our shop is driven by personal care. When you bring your dress material to us, you talk directly with the tailor who will cut and stitch your fabric. We take time to understand how you want your neckline, armholes, and waist to sit.
          </p>
          <p className="text-stone-700 text-xs sm:text-sm leading-relaxed">
            Whether it's a simple Rs. 50 trouser hem fitting or a heavy Rs. 1,500 bridal silk blouse, we treat every garment with equal care and precision.
          </p>
        </div>

      </div>
    </div>
  );
};
