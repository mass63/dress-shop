import React from 'react';
import { Scissors, ShoppingBag, ShieldCheck, Star, Sparkles, Clock, MapPin } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface HeroProps {
  onExploreShop: () => void;
  onBookTailoring: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreShop, onBookTailoring }) => {
  const tailoringWhatsApp = getWhatsAppUrl(
    `Hello ${shopConfig.shopName}, I would like to book a tailoring / measurement appointment.`
  );

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-amber-50/60 via-stone-100 to-stone-50 overflow-hidden border-b border-stone-200/60">
      {/* Decorative background accent circles */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange-100/30 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Local Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/60 text-amber-900 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
              <Sparkles className="w-4 h-4 text-amber-700" />
              <span>Local Family Boutique & Master Tailor</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 tracking-tight leading-tight">
              Style That <span className="text-amber-900 underline decoration-amber-300 decoration-wavy underline-offset-8">Fits You</span> Perfectly.
            </h1>

            {/* Subheading */}
            <p className="text-stone-700 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {shopConfig.subtitle} Visit us for ready-to-wear boutique dresses or custom stitching & precision alterations.
            </p>

            {/* Dual CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <button
                onClick={onExploreShop}
                id="hero-explore-shop-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-900 hover:bg-amber-950 text-amber-50 font-semibold px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 transform active:scale-98 text-sm sm:text-base cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5 text-amber-300" />
                <span>Explore Collection</span>
              </button>

              <button
                onClick={onBookTailoring}
                id="hero-book-tailoring-btn"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 text-stone-900 font-semibold px-6 py-3.5 rounded-2xl border border-stone-300/90 shadow-sm hover:border-amber-700 transition-all duration-200 text-sm sm:text-base cursor-pointer"
              >
                <Scissors className="w-5 h-5 text-amber-800" />
                <span>Book Tailoring</span>
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-stone-200/80 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-left">
                <div className="font-bold text-stone-900 text-lg sm:text-xl flex items-center justify-center lg:justify-start gap-1">
                  <span>{shopConfig.experienceYears}</span>
                  <Star className="w-4 h-4 fill-amber-500 text-amber-500 inline" />
                </div>
                <div className="text-xs text-stone-600 font-medium mt-0.5">Craft Experience</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="font-bold text-stone-900 text-lg sm:text-xl flex items-center justify-center lg:justify-start gap-1">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  <span>100% Fit</span>
                </div>
                <div className="text-xs text-stone-600 font-medium mt-0.5">Guarantee</div>
              </div>

              <div className="text-center lg:text-left">
                <div className="font-bold text-stone-900 text-lg sm:text-xl flex items-center justify-center lg:justify-start gap-1">
                  <Clock className="w-5 h-5 text-amber-700" />
                  <span>24-48 hr</span>
                </div>
                <div className="text-xs text-stone-600 font-medium mt-0.5">Express Work</div>
              </div>
            </div>

          </div>

          {/* Right Hero Image Collage / Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Decorative Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=900&q=80"
                  alt="Dresses & Tailoring Showcase"
                  className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/10 to-transparent"></div>
                
                {/* Overlay Text inside Card */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-2">
                  <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
                    Handstitched Perfection
                  </span>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    Custom Blouses, Suits & Boutique Dresses
                  </h3>
                </div>
              </div>

              {/* Floating Tailor Specialty Badge */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-stone-200/80 flex items-center gap-3 animate-bounce-slow">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center font-bold">
                  <Scissors className="w-5 h-5 text-amber-900" />
                </div>
                <div>
                  <div className="text-xs text-stone-500 font-medium">Master Tailor</div>
                  <div className="text-sm font-bold text-stone-900">{shopConfig.ownerName}</div>
                </div>
              </div>

              {/* Floating Shop Location Card */}
              <div className="absolute -bottom-5 -right-2 sm:-right-4 bg-amber-950 text-white p-3 sm:p-4 rounded-2xl shadow-xl border border-amber-800/50 flex items-center gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-semibold text-amber-200">Local Shop Visit</div>
                  <div className="text-stone-300 truncate max-w-[170px] sm:max-w-[200px]">
                    {shopConfig.address.landmark}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
