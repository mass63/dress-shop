import React from 'react';
import { ShoppingBag, Sparkles, MessageCircle, Scissors } from 'lucide-react';
import { ProductGrid } from '../components/ProductGrid';
import { SectionHeading } from '../components/SectionHeading';
import { sampleProducts } from '../data/products';
import { Product } from '../types';
import { shopConfig } from '../config/shopConfig';
import { getWhatsAppUrl } from '../utils/whatsapp';

interface ShopPageProps {
  onSelectProduct: (product: Product) => void;
  onOpenMeasurementGuide: () => void;
}

export const ShopPage: React.FC<ShopPageProps> = ({
  onSelectProduct,
  onOpenMeasurementGuide
}) => {
  const customOrderWaUrl = getWhatsAppUrl(
    `Hello ${shopConfig.shopName}, I have a custom fabric / dress design idea and want to enquire.`
  );

  return (
    <div className="pt-28 pb-16 min-h-screen bg-stone-50 animate-fadeIn space-y-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-900 px-3.5 py-1 bg-amber-100/90 rounded-full mb-3 border border-amber-200">
            Boutique Clothing Collection
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            Our Dress & Clothing Showcase
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
            Browse our handpicked cotton kurtis, designer silk blouses, ethnic sets, and kids wear. Every item can be custom fitted in-shop.
          </p>
        </div>

        {/* Custom Order Callout Banner */}
        <div className="bg-gradient-to-r from-amber-900 to-stone-900 text-amber-50 rounded-3xl p-6 sm:p-8 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 mb-10 border border-amber-800/60">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-semibold text-amber-300 uppercase tracking-wide">
              <Scissors className="w-4 h-4 text-amber-300" />
              <span>Have Your Own Fabric?</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              We Stitch Custom Dresses From Your Material
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
              Already purchased fabric from a market? Bring it to our shop or send us photo ideas on WhatsApp for custom stitching!
            </p>
          </div>

          <a
            href={customOrderWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="shop-page-custom-wa-btn"
            className="shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-sm transition-all"
          >
            Enquire Custom Stitching →
          </a>
        </div>

        {/* Full Filterable Product Grid */}
        <ProductGrid
          products={sampleProducts}
          onSelectProduct={onSelectProduct}
        />

      </div>
    </div>
  );
};
