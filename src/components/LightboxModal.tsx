import React from 'react';
import { X, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-xs animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose}></div>

      <div className="relative max-w-4xl w-full bg-stone-900 rounded-3xl overflow-hidden shadow-2xl z-10 border border-stone-800">
        
        {/* Close button */}
        <button
          onClick={onClose}
          id="close-lightbox-btn"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-stone-800/80 text-stone-200 hover:bg-stone-700 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close image lightbox"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="max-h-[80vh] bg-stone-950 flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[75vh] w-auto object-contain mx-auto"
          />
        </div>

        <div className="p-5 bg-stone-900 text-stone-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-stone-800">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-400">
              {item.category}
            </span>
            <h3 className="text-base sm:text-lg font-bold text-white">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-xs text-stone-300 mt-0.5">{item.description}</p>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
