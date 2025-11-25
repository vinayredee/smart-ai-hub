import React, { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Star, ExternalLink, Plus, Check, Filter, Search, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { fetchTools } from '../api/client';
import { categories } from '../data/aiTools';
import { useSearch } from '../contexts/SearchContext';
import { useComparison } from '../contexts/ComparisonContext';
import { useAuth } from '../contexts/AuthContext';
import { AITool, Category } from '../types';
import PricingDisplay from './PricingDisplay';
import ToolCard from './ToolCard';

const ToolGrid: React.FC = () => {
  const { searchQuery, filters, setFilters } = useSearch();
  const { addToComparison, isInComparison, comparisonItems } = useComparison();
  const { addToFavorites, removeFromFavorites, isFavorite, isAuthenticated } = useAuth();
  const [showFilters, setShowFilters] = useState(false);
  const [searchParams] = useSearchParams();

  // Sync URL params with filters
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categoryParam !== filters.category) {
      setFilters({ ...filters, category: categoryParam });
      // Scroll to grid when category changes via URL
      const gridElement = document.getElementById('tool-grid');
      if (gridElement) {
        gridElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (!categoryParam && filters.category) {
      // Optional: Clear filter if URL param is removed
    }
  }, [searchParams]);

  const { data: tools = [], isLoading } = useQuery(
    ['tools', searchQuery, filters.category],
    () => fetchTools(searchQuery, filters.category)
  );

  const filteredTools = useMemo(() => {
    let filtered = tools;

    // Pricing filter
    if (filters.pricing && filters.pricing.length > 0) {
      filtered = filtered.filter((tool: AITool) => {
        if (filters.pricing!.includes('free') && tool.pricing.type === 'free') return true;
        if (filters.pricing!.includes('freemium') && tool.pricing.type === 'freemium') return true;
        if (filters.pricing!.includes('paid') && tool.pricing.type === 'paid') return true;
        return false;
      });
    }

    // Rating filter
    if (filters.rating) {
      filtered = filtered.filter((tool: AITool) => tool.rating >= filters.rating!);
    }

    return filtered;
  }, [tools, filters.pricing, filters.rating]);

  const handleAddToComparison = (tool: AITool) => {
    if (comparisonItems.length < 4 && !isInComparison(tool.id)) {
      addToComparison(tool);
    }
  };

  const handleToggleFavorite = (tool: AITool) => {
    if (isFavorite(tool.id)) {
      removeFromFavorites(tool.id);
    } else {
      addToFavorites(tool.id);
    }
  };


  return (
    <section id="tools-section" className="section-pro bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              AI Tools Directory
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Discover {filteredTools.length} AI tools across {categories.length} categories
            </p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="btn-secondary flex items-center space-x-2"
          >
            <Filter className="w-4 h-4" />
            <span>Filters</span>
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="card mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={filters.category || ''}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value || undefined })}
                  className="input"
                >
                  <option value="">All Categories</option>
                  {categories.map((category: Category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Pricing Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Pricing
                </label>
                <div className="space-y-2">
                  {['free', 'freemium', 'paid'].map(type => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={filters.pricing?.includes(type) || false}
                        onChange={(e) => {
                          const currentPricing = filters.pricing || [];
                          if (e.target.checked) {
                            setFilters({ ...filters, pricing: [...currentPricing, type] });
                          } else {
                            setFilters({ ...filters, pricing: currentPricing.filter(p => p !== type) });
                          }
                        }}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300 capitalize">
                        {type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Minimum Rating
                </label>
                <select
                  value={filters.rating || ''}
                  onChange={(e) => setFilters({ ...filters, rating: e.target.value ? Number(e.target.value) : undefined })}
                  className="input"
                >
                  <option value="">Any Rating</option>
                  <option value="4">4+ Stars</option>
                  <option value="4.5">4.5+ Stars</option>
                  <option value="4.8">4.8+ Stars</option>
                </select>
              </div>
            </div>

            {/* Clear Filters */}
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setFilters({})}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          </motion.div>
        )}

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool: AITool, index: number) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>

        {/* Coming Soon Section */}
        {!isLoading && filteredTools.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-primary-100 to-purple-100 mb-6">
              <div className="bg-white px-6 py-2 rounded-full shadow-sm">
                <span className="text-sm font-semibold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider">
                  Updates Incoming
                </span>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              More AI Tools Coming Soon
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              We are constantly researching and testing new AI tools to add to our directory.
              Stay tuned for exciting updates across all categories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[1, 2, 3].map((item) => (
                <div key={item} className="h-32 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center bg-gray-50/50 hover:bg-gray-100 transition-colors">
                  <span className="text-gray-400 font-medium">New Tool Loading...</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* No results */}
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No tools found
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={() => setFilters({})}
              className="btn-primary"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolGrid;
