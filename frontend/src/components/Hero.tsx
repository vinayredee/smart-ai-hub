import React from 'react';
import { Search, Sparkles, TrendingUp, Users } from 'lucide-react';
import { useSearch } from '../contexts/SearchContext';

const Hero: React.FC = () => {
  const { searchQuery, setSearchQuery } = useSearch();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-dark-900 dark:via-dark-800 dark:to-purple-900/20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-primary-400/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Discover the perfect AI tool for your needs
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Find the Right
            <span className="block gradient-text">AI Tool</span>
            That Fits Your Needs
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Discover, compare, and choose the best AI tools and models from around the world.
            Get personalized recommendations and make informed decisions.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Search for AI tools, categories, or use cases..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    const gridElement = document.getElementById('tool-grid');
                    if (gridElement) {
                      gridElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
                className="w-full pl-16 pr-6 py-4 text-lg border-2 border-gray-200 dark:border-dark-600 rounded-2xl bg-white dark:bg-dark-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 shadow-lg"
              />
              <button
                onClick={() => {
                  const gridElement = document.getElementById('tool-grid');
                  if (gridElement) {
                    gridElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-xl font-medium transition-colors"
              >
                Search
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50+</div>
              <div className="text-gray-600 dark:text-gray-300">AI Tools</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">Users</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">9.2/10</div>
              <div className="text-gray-600 dark:text-gray-300">Avg Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
