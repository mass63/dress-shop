import React from 'react';
import { Scissors, Award, Heart, CheckCircle2, MessageCircle } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const TailorProfile: React.FC = () => {
  const waUrl = getWhatsAppUrl(
    `Hello ${shopConfig.ownerName}, I would like to consult regarding a custom dress design.`
  );

  return (
    <section className="py-14 sm:py-20 bg-stone-50 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200/90 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Master Tailor Image & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm lg:max-w-none rounded-3xl overflow-hidden shadow-lg border-4 border-amber-50 bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
                alt={shopConfig.ownerName}
                className="w-full h-[380px] sm:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                  {shopConfig.tailorTitle}
                </div>
                <h3 className="text-xl font-extrabold text-white">
                  {shopConfig.ownerName}
                </h3>
              </div>
            </div>

            {/* Experience Badge Overlay */}
            <div className="absolute -bottom-4 -right-2 sm:right-2 bg-amber-900 text-amber-50 px-4 py-2.5 rounded-2xl shadow-xl border border-amber-700/60 flex items-center gap-2.5">
              <Award className="w-6 h-6 text-amber-300 shrink-0" />
              <div>
                <div className="text-xs font-semibold text-amber-200">Handcrafted Legacy</div>
                <div className="text-sm font-black">{shopConfig.experienceYears} Experience</div>
              </div>
            </div>
          </div>

          {/* Right Tailor Bio & Specialties */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-amber-800" />
              Family Craftsmanship
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight leading-tight">
              Meet Your Master Tailor
            </h2>

            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Built on decades of hands-on local tailoring experience, every dress, blouse, and alteration is executed with personal care, precise body measurements, and double-stitched durability.
            </p>

            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed italic">
              "When a customer puts on a tailored outfit and smiles because the shoulders and waist fit naturally — that is our greatest satisfaction as a family business."
            </p>

            {/* Tailor Specialties */}
            <div className="pt-2">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-3">
                Tailoring Specialties:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-800">
                {shopConfig.specialties.map((spec, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-amber-50/60 p-2.5 rounded-xl border border-amber-200/50">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span className="font-medium text-stone-900">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="tailor-profile-wa-btn"
                className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consult Master Tailor on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
