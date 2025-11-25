import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Animated Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div
              className="relative w-10 h-10"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {/* Outer ring */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-600 via-accent-blue to-purple-600"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              {/* Inner white circle with icon */}
              <div className="absolute inset-1 bg-white rounded-lg flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <Sparkles className="w-5 h-5 text-primary-600" />
                </motion.div>
              </div>
            </motion.div>
            <motion.span
              className="text-lg font-semibold bg-gradient-to-r from-primary-600 via-accent-blue to-purple-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Smart AI Hub
            </motion.span>
          </Link>

          {/* Animated Tagline */}
          <motion.div
            className="hidden md:flex items-center space-x-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              className="text-sm font-medium text-gray-600"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(90deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Discover the best AI tools for your needs
            </motion.p>
          </motion.div>

          {/* Submit Tool Button */}
          <Link
            to="/submit"
            className="hidden md:block btn-secondary-pro text-sm"
          >
            Submit Tool
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
