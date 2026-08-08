import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { shopConfig } from '../config/shopConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const waUrl = getWhatsAppUrl(
    `Hello ${shopConfig.shopName}, I found your website and would like to ask a question.`
  );

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      
      {/* Tooltip Popup */}
      {showTooltip && (
        <div className="relative bg-white text-stone-900 text-xs font-semibold px-3.5 py-2 rounded-2xl shadow-xl border border-stone-200 flex items-center gap-2 max-w-[200px] animate-fadeIn">
          <span>Need custom stitching? Chat on WhatsApp!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-stone-700 p-0.5 rounded-full"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        id="floating-whatsapp-btn"
        className="whatsapp-pulse whatsapp-ping-hover w-14 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-xl transition-all group"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-white/20 transition-transform group-hover:rotate-12" />
      </a>

    </div>
  );
};
