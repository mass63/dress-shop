import React, { useState } from 'react';
import { X, MessageCircle, MapPin, Scissors, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { Product } from '../types';
import { shopConfig } from '../config/shopConfig';
import { Badge } from './Badge';
import { buildProductEnquiryMessage, getWhatsAppUrl } from '../utils/whatsapp';

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
  onOpenMeasurementGuide?: () => void;
}

export const ProductDetailsModal: React.FC<ProductDetailsModalProps> = ({
  product,
  onClose,
  onOpenMeasurementGuide
}) => {
  if (!product) return null;

  const allImages = [product.image, ...(product.additionalImages || [])];
  const [selectedImage, setSelectedImage] = useState<string>(product.image);

  const waMessage = buildProductEnquiryMessage(product.name, product.category, product.priceText);
  const waUrl = getWhatsAppUrl(waMessage);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/60 backdrop-blur-xs animate-fadeIn">
      {/* Modal backdrop */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal card */}
      <div className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border border-stone-200 z-10 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          id="close-product-modal"
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-stone-100 text-stone-700 hover:bg-stone-200 hover:text-stone-900 flex items-center justify-center transition-colors shadow-sm"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Image Gallery */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 bg-stone-50 flex flex-col justify-between border-b md:border-b-0 md:border-r border-stone-200">
          <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-stone-200 mb-3 border border-stone-200">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          {/* Thumbnails */}
          {allImages.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto pb-1">
              {allImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-14 h-14 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImage === img ? 'border-amber-800 scale-105 shadow-sm' : 'border-stone-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Product Info */}
        <div className="w-full md:w-1/2 p-6 overflow-y-auto flex flex-col justify-between space-y-5">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge variant="gold">{product.category}</Badge>
              <Badge variant={product.stockStatus === 'In Stock' ? 'emerald' : 'amber'}>
                {product.stockStatus}
              </Badge>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-stone-900 leading-tight">
              {product.name}
            </h2>

            <div className="mt-3 text-2xl font-black text-amber-950">
              {product.priceText || (product.price ? `₹${product.price}` : 'Price on enquiry')}
            </div>

            <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
              {product.description}
            </p>

            {/* Spec Highlights */}
            <div className="mt-4 pt-4 border-t border-stone-100 space-y-2 text-xs text-stone-700">
              {product.fabric && (
                <div className="flex justify-between">
                  <span className="font-semibold text-stone-500">Fabric Material:</span>
                  <span className="font-medium text-stone-900">{product.fabric}</span>
                </div>
              )}

              {product.sizes && product.sizes.length > 0 && (
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-stone-500">Available Sizes:</span>
                  <div className="flex gap-1 flex-wrap justify-end">
                    {product.sizes.map(s => (
                      <span key={s} className="px-2 py-0.5 bg-stone-100 border border-stone-200 rounded text-stone-800 font-medium text-[11px]">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.colors && product.colors.length > 0 && (
                <div className="flex justify-between">
                  <span className="font-semibold text-stone-500">Available Colors:</span>
                  <span className="font-medium text-stone-900">{product.colors.join(', ')}</span>
                </div>
              )}
            </div>

            {/* Custom Tailoring Promise Note */}
            {product.customizable && (
              <div className="mt-4 p-3.5 bg-amber-50 rounded-2xl border border-amber-200/80 text-xs text-amber-950 space-y-1">
                <div className="font-bold flex items-center gap-1.5 text-amber-900">
                  <Scissors className="w-4 h-4 text-amber-800" />
                  <span>Personal Fitting & Alterations Included</span>
                </div>
                <p className="text-stone-700 leading-snug">
                  Our master tailor can alter sleeve length, chest fitting, or waist line for this outfit to fit you perfectly.
                </p>
                {onOpenMeasurementGuide && (
                  <button
                    onClick={() => {
                      onClose();
                      onOpenMeasurementGuide();
                    }}
                    className="text-amber-900 font-semibold underline underline-offset-2 hover:text-amber-950 block pt-1"
                  >
                    View Measurement & Fitting Guide →
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Modal Action Buttons */}
          <div className="space-y-2.5 pt-2">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="product-modal-wa-btn"
              className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-4 rounded-2xl shadow-sm transition-all duration-200 text-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask & Enquire on WhatsApp</span>
            </a>

            <div className="flex items-center gap-2 text-stone-500 text-xs justify-center pt-1">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              <span>Available for physical trial at {shopConfig.shopName}</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
