import React from 'react';
import { MessageCircle, Eye, Scissors, Check, Sparkles } from 'lucide-react';
import { Product } from '../types';
import { Badge } from './Badge';
import { buildProductEnquiryMessage, getWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  const waMessage = buildProductEnquiryMessage(product.name, product.category, product.priceText);
  const waUrl = getWhatsAppUrl(waMessage);

  return (
    <div className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      
      {/* Product Image Container */}
      <div className="relative aspect-4/5 overflow-hidden bg-stone-100 cursor-pointer" onClick={() => onSelectProduct(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <Badge variant={product.stockStatus === 'In Stock' ? 'emerald' : 'amber'}>
            {product.stockStatus}
          </Badge>
          {product.customizable && (
            <Badge variant="gold">
              <Scissors className="w-3 h-3 mr-1 inline" />
              Customizable
            </Badge>
          )}
        </div>

        {/* Hover Quick View Overlay */}
        <div className="absolute inset-0 bg-stone-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectProduct(product);
            }}
            id={`view-details-${product.id}`}
            className="bg-white/95 text-stone-900 font-semibold text-xs sm:text-sm px-4 py-2 rounded-full shadow-md hover:bg-stone-900 hover:text-white transition-colors duration-200 flex items-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-800 mb-1">
            {product.category}
          </div>

          <h3
            onClick={() => onSelectProduct(product)}
            className="text-base sm:text-lg font-bold text-stone-900 line-clamp-1 hover:text-amber-900 transition-colors cursor-pointer"
          >
            {product.name}
          </h3>

          <p className="mt-1.5 text-xs sm:text-sm text-stone-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Price & Actions */}
        <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-xs text-stone-500 font-medium">Price</div>
            <div className="text-base sm:text-lg font-extrabold text-stone-900">
              {product.priceText || (product.price ? `₹${product.price}` : 'On Enquiry')}
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              id={`wa-enquire-${product.id}`}
              className="inline-flex items-center gap-1.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-medium px-3.5 py-2 rounded-xl transition-all duration-200 shadow-xs hover:shadow active:scale-95"
              title="Enquire on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Enquire</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
