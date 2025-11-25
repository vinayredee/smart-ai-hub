import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Video, PenTool, Mic, Briefcase, Image as ImageIcon, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { categories } from '../data/aiTools';

const CategoryShowcase: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'coding': return <Code className="w-8 h-8" />;
      case 'video': return <Video className="w-8 h-8" />;
      case 'design': return <ImageIcon className="w-8 h-8" />;
      case 'writing': return <PenTool className="w-8 h-8" />;
      case 'audio': return <Mic className="w-8 h-8" />;
      case 'business': return <Briefcase className="w-8 h-8" />;
      default: return <Sparkles className="w-8 h-8" />;
    }
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse by Category
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find the perfect AI tool for your specific needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link key={category.id} to={`/category/${category.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl h-full group cursor-pointer hover:border-primary-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {getIcon(category.id)}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {category.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-2">
                  {category.description}
                </p>

                <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium group-hover:translate-x-2 transition-transform">
                  <span>Explore Tools</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
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
