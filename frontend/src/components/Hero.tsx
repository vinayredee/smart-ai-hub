import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const [toolCount, setToolCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);

  // Animated counter
  useEffect(() => {
    const toolTarget = 70;
    const categoryTarget = 12;
    const duration = 2000;
    const steps = 60;
    const toolIncrement = toolTarget / steps;
    const categoryIncrement = categoryTarget / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setToolCount(Math.min(Math.floor(toolIncrement * currentStep), toolTarget));
      setCategoryCount(Math.min(Math.floor(categoryIncrement * currentStep), categoryTarget));

      if (currentStep >= steps) clearInterval(timer);
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  const handleExploreClick = () => {
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-mesh-gradient"></div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, 15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-purple-400/10 rounded-full blur-3xl"
          animate={{
            y: [0, 25, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-8"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-medium text-gray-700">
              Discover the Best AI Tools
            </span>
          </motion.div>

          {/* Main Heading with Gradient */}
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 leading-tight">
            <span className="block text-gray-900 mb-2">Your Gateway to</span>
            <span className="block text-gradient-animate">
              Smart AI Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover <strong className="text-gray-900">70+ cutting-edge AI tools</strong> carefully curated to boost
            your productivity and unlock your creative potential
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <button
              onClick={handleExploreClick}
              className="group btn-primary-pro btn-ripple flex items-center space-x-2"
            >
              <Search className="w-5 h-5" />
              <span>Explore Tools</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </button>
            <button
              onClick={() => navigate('/chat')}
              className="btn-secondary-pro flex items-center space-x-2"
            >
              <Zap className="w-5 h-5" />
              <span>Try AI Assistant</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="text-4xl font-bold font-display text-gradient mb-2">
                {toolCount}+
              </div>
              <div className="text-sm text-gray-600">AI Tools</div>
            </motion.div>
            <motion.div
              className="text-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="text-4xl font-bold font-display text-gradient mb-2">
                {categoryCount}
              </div>
              <div className="text-sm text-gray-600">Categories</div>
            </motion.div>
            <motion.div
              className="text-center col-span-2 md:col-span-1"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="flex items-center justify-center space-x-1 text-4xl font-bold font-display text-gradient mb-2">
                <TrendingUp className="w-8 h-8" />
                <span>100%</span>
              </div>
              <div className="text-sm text-gray-600">Free to Use</div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center p-2">
            <motion.div
              className="w-1.5 h-2 bg-primary-600 rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
