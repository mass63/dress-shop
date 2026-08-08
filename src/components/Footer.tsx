import React from 'react';
import { Scissors, Phone, MessageCircle, MapPin, Instagram, Facebook, Heart } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';

interface FooterProps {
  onNavClick: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-12 pb-8 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Col 1: Shop Brand & About */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-amber-800 text-amber-100 flex items-center justify-center">
                <Scissors className="w-5 h-5" />
              </div>
              <span className="font-bold text-white text-lg tracking-tight">
                {shopConfig.shopName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-sm">
              {shopConfig.subtitle} Serving local families with personal attention, custom fitting, and quality craftsmanship.
            </p>

            <div className="flex items-center gap-3 pt-1">
              {shopConfig.socials.instagram && (
                <a
                  href={shopConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {shopConfig.socials.facebook && (
                <a
                  href={shopConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['home', 'shop', 'tailoring', 'about', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavClick(id)}
                    className="hover:text-amber-300 transition-colors capitalize text-left cursor-pointer"
                  >
                    {id === 'home' ? 'Home Page' : id === 'shop' ? 'Shop Collection' : id === 'tailoring' ? 'Tailoring Services' : id === 'about' ? 'About Our Tailor' : 'Location & Contact'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Tailoring Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Tailoring Work</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-stone-400">
              <li>Custom Designer Blouse Stitching</li>
              <li>Chudidar, Salwar & Anarkali Suits</li>
              <li>Express Fitting & Length Alterations</li>
              <li>Saree Fall, Pico & Edge Finishing</li>
              <li>Kids Traditional Ethnic Outfits</li>
              <li>Gents Shirt & Pant Alteration</li>
            </ul>
          </div>

          {/* Col 4: Shop Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Shop Address</h4>
            <div className="space-y-2 text-xs sm:text-sm text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{shopConfig.address.fullAddress}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>{shopConfig.displayPhone}</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>WhatsApp: {shopConfig.displayWhatsapp}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <div>
            © 2026 {shopConfig.shopName}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>for local dress lovers & tailored style</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
