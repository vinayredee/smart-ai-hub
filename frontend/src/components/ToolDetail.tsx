import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Star, Check, X, Plus, Minus } from 'lucide-react';
import SocialShare from './SocialShare';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { fetchToolById } from '../api/client';
import { useComparison } from '../contexts/ComparisonContext';
import { AITool } from '../types';

const ToolDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToComparison, removeFromComparison, isInComparison, comparisonItems } = useComparison();

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const { data: tool, isLoading } = useQuery(
    ['tool', id],
    () => fetchToolById(id!),
    { enabled: !!id }
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!tool) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Tool not found
          </h1>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleComparisonToggle = () => {
    if (isInComparison(tool.id)) {
      removeFromComparison(tool.id);
    } else if (comparisonItems.length < 4) {
      addToComparison(tool);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Tools
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-16 h-16 ${tool.category.color} rounded-2xl flex items-center justify-center`}>
                    <span className="text-white font-bold text-2xl">
                      {tool.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {tool.name}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 text-lg">
                      {tool.category.name}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {tool.isPopular && (
                    <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 text-sm font-medium rounded-full">
                      Popular
                    </span>
                  )}
                  {tool.isNew && (
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                      New
                    </span>
                  )}
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {tool.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center space-x-2"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button
                    onClick={handleComparisonToggle}
                    disabled={!isInComparison(tool.id) && comparisonItems.length >= 4}
                    className={`btn-secondary flex items-center space-x-2 ${isInComparison(tool.id)
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-700'
                      : comparisonItems.length >= 4
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                      }`}
                  >
                    {isInComparison(tool.id) ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>In Comparison</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4" />
                        <span>Add to Compare</span>
                      </>
                    )}
                  </button>
                </div>
                <SocialShare toolName={tool.name} toolUrl={`/tool/${tool.id}`} />
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tool.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Use Cases */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Use Cases
              </h2>
              <div className="flex flex-wrap gap-2">
                {tool.useCases.map((useCase: string, index: number) => (
                  <span
                    key={index}
                    className="px-3 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 rounded-lg text-sm font-medium"
                  >
                    {useCase}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Limitations */}
            {tool.limitations.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="card"
              >
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Limitations
                </h2>
                <div className="space-y-3">
                  {tool.limitations.map((limitation: string, index: number) => (
                    <div key={index} className="flex items-start space-x-3">
                      <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{limitation}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Rating & Reviews */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Rating & Reviews
              </h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {tool.rating}
                </div>
                <div className="flex items-center justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < Math.floor(tool.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300 dark:text-gray-600'
                        }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Based on {tool.reviewCount.toLocaleString()} reviews
                </p>
              </div>
            </motion.div>

            {/* Performance Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Performance
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>Accuracy</span>
                    <span>{tool.accuracy}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: `${(tool.accuracy / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>Ease of Use</span>
                    <span>{tool.easeOfUse}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(tool.easeOfUse / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>Performance</span>
                    <span>{tool.performance}/10</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: `${(tool.performance / 10) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Pricing Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Pricing
              </h3>
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${tool.pricing.type === 'free'
                  ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                  : tool.pricing.type === 'freemium'
                    ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                    : 'bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800'
                  }`}>
                  <div className="font-semibold text-gray-900 dark:text-white capitalize">
                    {tool.pricing.type === 'freemium' ? 'Free + Paid' : tool.pricing.type}
                  </div>
                  {tool.pricing.paidTier && (
                    <div className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                      {tool.pricing.paidTier.price}
                      <span className="text-sm font-normal text-gray-600 dark:text-gray-400">
                        /{tool.pricing.paidTier.period}
                      </span>
                    </div>
                  )}
                </div>

                {tool.pricing.freeTier && (
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Free Tier</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {tool.pricing.freeTier.description}
                    </p>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {tool.pricing.freeTier.limitations.map((limitation: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Minus className="w-3 h-3 text-gray-400 mt-1 flex-shrink-0" />
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {tool.pricing.paidTier && (
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">Paid Features</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      {tool.pricing.paidTier.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Check className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="card"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag: string, index: number) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolDetail;
