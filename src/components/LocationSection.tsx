import React from 'react';
import { MapPin, Clock, Phone, MessageCircle, Navigation, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';
import { getShopOpenStatus } from '../utils/hours';
import { getWhatsAppUrl } from '../utils/whatsapp';
import { SectionHeading } from './SectionHeading';

export const LocationSection: React.FC = () => {
  const shopStatus = getShopOpenStatus(shopConfig.openingHours);

  const generalWhatsApp = getWhatsAppUrl(
    `Hello ${shopConfig.shopName}, I am planning to visit your shop and need directions.`
  );

  return (
    <section className="py-14 sm:py-20 bg-stone-100/60 border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          eyebrow="Visit Our Shop"
          title="Find Us & Shop Hours"
          subtitle="Conveniently located in the main market. Drop in for fabric selection, dress trials, or custom measurement."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Info Card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-md flex flex-col justify-between space-y-6">
            
            {/* Live Open / Closed Status Badge */}
            <div className="flex items-center justify-between gap-3 bg-stone-50 p-3.5 rounded-2xl border border-stone-200">
              <div className="flex items-center gap-2">
                <span className={`w-3 h-3 rounded-full animate-pulse ${shopStatus.isOpen ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
                <span className="text-xs sm:text-sm font-bold text-stone-900">
                  {shopStatus.text}
                </span>
              </div>
              <span className="text-[11px] font-medium text-stone-500">
                {shopStatus.nextTime}
              </span>
            </div>

            {/* Address */}
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-amber-900" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-stone-500 uppercase tracking-wider">Shop Address</h4>
                  <p className="text-sm sm:text-base font-bold text-stone-900 mt-0.5 leading-snug">
                    {shopConfig.address.fullAddress}
                  </p>
                  <p className="text-xs text-amber-800 font-medium mt-1">
                    Landmark: {shopConfig.address.landmark}
                  </p>
                </div>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-100">
              <a
                href={`tel:${shopConfig.phoneNumber}`}
                id="location-call-link"
                className="p-3 rounded-2xl bg-stone-50 hover:bg-stone-100 border border-stone-200/80 transition-colors flex items-center gap-2.5 text-stone-800"
              >
                <Phone className="w-4 h-4 text-amber-900 shrink-0" />
                <div className="truncate">
                  <div className="text-[10px] text-stone-500 uppercase font-semibold">Call Shop</div>
                  <div className="text-xs font-bold truncate">{shopConfig.displayPhone}</div>
                </div>
              </a>

              <a
                href={generalWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                id="location-wa-link"
                className="p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-colors flex items-center gap-2.5 text-emerald-950"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                <div className="truncate">
                  <div className="text-[10px] text-emerald-700 uppercase font-semibold">WhatsApp Chat</div>
                  <div className="text-xs font-bold truncate">{shopConfig.displayWhatsapp}</div>
                </div>
              </a>
            </div>

            {/* Opening Hours Schedule */}
            <div className="space-y-2 pt-2 border-t border-stone-100">
              <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-800" />
                <span>Weekly Store Schedule</span>
              </h4>

              <div className="space-y-1 text-xs text-stone-700">
                {shopConfig.openingHours.map((h, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-stone-100 last:border-0">
                    <span className="font-medium">{h.day}</span>
                    <span className="font-semibold text-stone-900">
                      {h.isClosed ? 'Closed' : `${h.open} - ${h.close}`}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Get Directions Button */}
            <div className="pt-2">
              <a
                href={shopConfig.googleMapsDirectionUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="get-directions-btn"
                className="w-full inline-flex items-center justify-center gap-2 bg-amber-900 hover:bg-amber-950 text-amber-50 font-semibold py-3 px-4 rounded-2xl shadow-xs transition-colors text-sm"
              >
                <Navigation className="w-4 h-4 text-amber-300" />
                <span>Get Google Maps Directions →</span>
              </a>
            </div>

          </div>

          {/* Right Map View / Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-md min-h-[350px] relative flex flex-col">
            <iframe
              title="Shop Location Google Map"
              src={shopConfig.googleMapsEmbedUrl}
              className="w-full h-full min-h-[380px] lg:min-h-[100%] border-0"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};
