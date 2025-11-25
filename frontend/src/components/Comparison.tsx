import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Star, Check, X, Trash2 } from 'lucide-react';
// Removed unused motion import
import { useComparison } from '../contexts/ComparisonContext';

const Comparison: React.FC = () => {
  const { comparisonItems, removeFromComparison, clearComparison } = useComparison();

  if (comparisonItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-dark-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="w-24 h-24 bg-gray-100 dark:bg-dark-800 rounded-full flex items-center justify-center mx-auto mb-6">
            <X className="w-12 h-12 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            No tools to compare
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Add AI tools to your comparison list to see how they stack up against each other.
          </p>
          <Link to="/" className="btn-primary">
            Browse AI Tools
          </Link>
        </div>
      </div>
    );
  }

  const features = [
    'Name',
    'Category',
    'Rating',
    'Pricing',
    'Accuracy',
    'Ease of Use',
    'Performance',
    'Key Features',
    'Use Cases',
    'Website'
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Tools
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Tool Comparison
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Compare {comparisonItems.length} AI tools side by side
              </p>
            </div>
          </div>
          <button
            onClick={clearComparison}
            className="btn-secondary flex items-center space-x-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear All</span>
          </button>
        </div>

        {/* Comparison Table */}
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-dark-700">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900 dark:text-white min-w-[200px]">
                    Feature
                  </th>
                  {comparisonItems.map((tool) => (
                    <th key={tool.id} className="text-center py-4 px-6 min-w-[250px]">
                      <div className="flex flex-col items-center space-y-2">
                        <div className={`w-12 h-12 ${tool.category.color} rounded-xl flex items-center justify-center`}>
                          <span className="text-white font-bold text-lg">
                            {tool.name.charAt(0)}
                          </span>
                        </div>
                        <div className="text-center">
                          <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                            {tool.name}
                          </h3>
                          <p className="text-xs text-gray-500 dark:text-gray-400">
                            {tool.category.name}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromComparison(tool.id)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={feature} className="border-b border-gray-100 dark:border-dark-700">
                    <td className="py-4 px-6 font-medium text-gray-900 dark:text-white">
                      {feature}
                    </td>
                    {comparisonItems.map((tool) => (
                      <td key={tool.id} className="py-4 px-6 text-center">
                        {renderFeatureValue(feature, tool)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <Link to="/" className="btn-secondary">
            Add More Tools
          </Link>
          <button
            onClick={() => window.print()}
            className="btn-primary"
          >
            Print Comparison
          </button>
        </div>
      </div>
    </div>
  );

  function renderFeatureValue(feature: string, tool: any) {
    switch (feature) {
      case 'Name':
        return (
          <div className="text-center">
            <h4 className="font-semibold text-gray-900 dark:text-white">{tool.name}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">{tool.category.name}</p>
          </div>
        );
      
      case 'Category':
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${tool.category.color} text-white`}>
            {tool.category.name}
          </span>
        );
      
      case 'Rating':
        return (
          <div className="flex items-center justify-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(tool.rating)
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
              {tool.rating}
            </span>
          </div>
        );
      
      case 'Pricing':
        return (
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            tool.pricing.type === 'free'
              ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200'
              : tool.pricing.type === 'freemium'
              ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200'
              : 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200'
          }`}>
            {tool.pricing.type === 'free' ? 'Free' : 
             tool.pricing.type === 'freemium' ? 'Freemium' : 'Paid'}
            {tool.pricing.paidTier && (
              <span className="block text-xs mt-1">
                {tool.pricing.paidTier.price}/{tool.pricing.paidTier.period}
              </span>
            )}
          </span>
        );
      
      case 'Accuracy':
        return (
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {tool.accuracy}/10
            </div>
            <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 mt-1">
              <div
                className="bg-primary-600 h-2 rounded-full"
                style={{ width: `${(tool.accuracy / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        );
      
      case 'Ease of Use':
        return (
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {tool.easeOfUse}/10
            </div>
            <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 mt-1">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: `${(tool.easeOfUse / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        );
      
      case 'Performance':
        return (
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900 dark:text-white">
              {tool.performance}/10
            </div>
            <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 mt-1">
              <div
                className="bg-purple-500 h-2 rounded-full"
                style={{ width: `${(tool.performance / 10) * 100}%` }}
              ></div>
            </div>
          </div>
        );
      
      case 'Key Features':
        return (
          <div className="text-left">
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {tool.features.slice(0, 3).map((feature: string, index: number) => (
                <li key={index} className="flex items-start space-x-2">
                  <Check className="w-3 h-3 text-green-500 mt-1 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
              {tool.features.length > 3 && (
                <li className="text-xs text-gray-500 dark:text-gray-500">
                  +{tool.features.length - 3} more
                </li>
              )}
            </ul>
          </div>
        );
      
      case 'Use Cases':
        return (
          <div className="text-left">
            <div className="flex flex-wrap gap-1">
              {tool.useCases.slice(0, 2).map((useCase: string, index: number) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-xs rounded-md"
                >
                  {useCase}
                </span>
              ))}
              {tool.useCases.length > 2 && (
                <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 text-xs rounded-md">
                  +{tool.useCases.length - 2}
                </span>
              )}
            </div>
          </div>
        );
      
      case 'Website':
        return (
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            <span className="text-sm">Visit</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        );
      
      default:
        return <span className="text-gray-500 dark:text-gray-400">-</span>;
    }
  }
};

export default Comparison;
