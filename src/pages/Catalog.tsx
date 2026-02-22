import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { products, Product } from '../data/products';
import { cn } from '../lib/utils';

export const Catalog = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Fruit' | 'Vegetable'>('All');

  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat === 'Fruit' || cat === 'Vegetable') {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-primary-500 font-bold text-sm uppercase tracking-wider">Our produce</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">Fresh from The Farm</h1>
            <p className="text-zinc-500">
              Browse our full selection of Gambian fruits and vegetables. All items are seasonal and subject to availability.
            </p>
          </motion.div>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input
              type="text"
              placeholder="Search for mangoes, tomatoes, okra..."
              className="w-full pl-12 pr-4 py-2.5 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all shadow-sm text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            {(['All', 'Fruit', 'Vegetable'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2.5 rounded-xl font-semibold transition-all text-sm",
                  selectedCategory === cat
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/20"
                    : "bg-white text-zinc-600 hover:bg-zinc-50 border border-zinc-200"
                )}
              >
                {cat === 'All' ? 'All Products' : `${cat}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-zinc-400 mb-6">{filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found</p>

        {/* Results Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  key={product.id}
                  className="group"
                >
                  <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-5 bg-zinc-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-zinc-900">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                      <p className="text-white text-sm">{product.description}</p>
                    </div>
                  </div>
                  <div className="mb-1">
                    <h3 className="text-lg font-bold">{product.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <span>{product.origin}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-300" />
                    <span>{product.season}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className="py-24 text-center">
            <div className="w-20 h-20 bg-zinc-50 rounded-full flex items-center justify-center mx-auto mb-6 text-zinc-300">
              <Search size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-2">No products found</h3>
            <p className="text-zinc-500">Try adjusting your search or category filters.</p>
            <button
              onClick={() => {setSearchQuery(''); setSelectedCategory('All');}}
              className="mt-6 text-primary-600 font-bold underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
