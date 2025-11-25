import React from 'react';
import { Check, X, Crown, Zap } from 'lucide-react';
import { Pricing } from '../types';

interface PricingDisplayProps {
  pricing: Pricing;
  className?: string;
}

const PricingDisplay: React.FC<PricingDisplayProps> = ({ pricing, className = '' }) => {
  const getPricingIcon = (type: string) => {
    switch (type) {
      case 'free':
        return <Zap className="w-4 h-4 text-green-500" />;
      case 'freemium':
        return <Crown className="w-4 h-4 text-blue-500" />;
      case 'paid':
        return <Crown className="w-4 h-4 text-purple-500" />;
      default:
        return <Zap className="w-4 h-4 text-gray-500" />;
    }
  };

  const getPricingLabel = (type: string) => {
    switch (type) {
      case 'free':
        return 'Free';
      case 'freemium':
        return 'Free + Paid';
      case 'paid':
        return 'Paid';
      default:
        return 'Unknown';
    }
  };

  const getPricingColor = (type: string) => {
    switch (type) {
      case 'free':
        return 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 border-green-200 dark:border-green-700';
      case 'freemium':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-200 dark:border-blue-700';
      case 'paid':
        return 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-200 dark:border-purple-700';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-200 border-gray-200 dark:border-gray-700';
    }
  };

  return (
    <div className={`${className}`}>
      {/* Main Pricing Badge */}
      <div className={`inline-flex items-center px-3 py-1.5 rounded-full border text-sm font-medium ${getPricingColor(pricing.type)}`}>
        {getPricingIcon(pricing.type)}
        <span className="ml-2">{getPricingLabel(pricing.type)}</span>
        {pricing.paidTier && (
          <span className="ml-2 text-xs opacity-75">
            from {pricing.paidTier.price}/{pricing.paidTier.period}
          </span>
        )}
      </div>

      {/* Detailed Pricing Information */}
      {pricing.freeTier && (
        <div className="mt-3 p-4 bg-gray-50 dark:bg-dark-700 rounded-lg">
          <div className="flex items-center mb-2">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            <span className="font-medium text-gray-900 dark:text-white">Free Features</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
            {pricing.freeTier.description}
          </p>
          {pricing.freeTier.limitations && pricing.freeTier.limitations.length > 0 && (
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">Limitations:</p>
              {pricing.freeTier.limitations.map((limitation: string, index: number) => (
                <div key={index} className="flex items-start text-xs text-gray-600 dark:text-gray-400">
                  <X className="w-3 h-3 text-red-400 mr-1 mt-0.5 flex-shrink-0" />
                  <span>{limitation}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {pricing.paidTier && (
        <div className="mt-3 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <Crown className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" />
              <span className="font-medium text-gray-900 dark:text-white">Advanced Features</span>
            </div>
            <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
              {pricing.paidTier.price}/{pricing.paidTier.period}
            </span>
          </div>
          {pricing.paidTier.features && pricing.paidTier.features.length > 0 && (
            <div className="space-y-1">
              {pricing.paidTier.features.map((feature: string, index: number) => (
                <div key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                  <Check className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PricingDisplay;
