import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { categories } from '../data/aiTools';
import * as Icons from 'lucide-react';

const CategoryShowcase: React.FC = () => {
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName] || Icons.Sparkles;
    return <IconComponent className="w-5 h-5" />;
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold font-display text-gray-900 mb-3">
            Browse by Category
          </h2>
          <p className="text-base text-gray-600">
            Find the perfect AI tool for your specific needs
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link key={category.id} to={`/category/${category.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative bg-white border border-gray-200 rounded-xl p-4 hover:border-primary-400 hover:shadow-md transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center text-white mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {getIcon(category.icon)}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {category.description}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Icons.ArrowRight className="w-4 h-4 text-primary-600" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
