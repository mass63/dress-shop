import React, { useState, useMemo } from 'react';
import { Search, Filter, RefreshCw, ShoppingBag, Scissors } from 'lucide-react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
  title?: string;
  subtitle?: string;
  limit?: number;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onSelectProduct,
  title,
  subtitle,
  limit
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [customizableOnly, setCustomizableOnly] = useState<boolean>(false);

  const categories = useMemo(() => {
    const cats = ['All', ...Array.from(new Set(products.map(p => p.category)))];
    return cats;
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const matchesQuery =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.fabric && p.fabric.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCustomizable = !customizableOnly || p.customizable;

      return matchesCategory && matchesQuery && matchesCustomizable;
    });
  }, [products, selectedCategory, searchQuery, customizableOnly]);

  const displayProducts = limit ? filteredProducts.slice(0, limit) : filteredProducts;

  return (
    <div className="w-full">
      {/* Search & Category Filter Controls */}
      {!limit && (
        <div className="mb-8 space-y-4">
          
          {/* Search bar & filter toggle */}
          <div className="flex flex-col sm:flex-row items-center gap-3 justify-between bg-white p-3 sm:p-4 rounded-2xl border border-stone-200/90 shadow-xs">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dresses, fabric, styles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                id="product-search-input"
                className="w-full pl-9 pr-4 py-2 bg-stone-50 border border-stone-200 rounded-xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-700/50"
              />
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <label className="inline-flex items-center gap-2 text-xs font-medium text-stone-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={customizableOnly}
                  onChange={(e) => setCustomizableOnly(e.target.checked)}
                  id="customizable-checkbox"
                  className="rounded text-amber-900 focus:ring-amber-800 h-4 w-4 border-stone-300"
                />
                <span className="flex items-center gap-1">
                  <Scissors className="w-3.5 h-3.5 text-amber-800" />
                  Custom Stitching Available
                </span>
              </label>

              {(searchQuery || selectedCategory !== 'All' || customizableOnly) && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setCustomizableOnly(false);
                  }}
                  id="reset-product-filters"
                  className="text-xs text-stone-500 hover:text-stone-800 flex items-center gap-1 underline underline-offset-2 cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" />
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  id={`cat-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
                  className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-full whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    active
                      ? 'bg-amber-900 text-amber-50 shadow-sm'
                      : 'bg-white text-stone-700 hover:bg-stone-200/80 border border-stone-200'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>
      )}

      {/* Product Cards Grid */}
      {displayProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onSelectProduct={onSelectProduct}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-10 text-center border border-stone-200 max-w-lg mx-auto my-8">
          <div className="w-14 h-14 mx-auto rounded-full bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
            <ShoppingBag className="w-7 h-7" />
          </div>
          <h3 className="text-lg font-bold text-stone-900 mb-2">No products found</h3>
          <p className="text-stone-600 text-sm mb-6 leading-relaxed">
            No items matched your current search filters. Please try another category or send us a WhatsApp message for our full shop stock.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setCustomizableOnly(false);
            }}
            id="empty-state-reset-btn"
            className="inline-flex items-center gap-2 bg-amber-900 text-amber-50 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-amber-950 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Show All Products
          </button>
        </div>
      )}
    </div>
  );
};
