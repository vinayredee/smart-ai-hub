import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Github, Mail, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <motion.div
                className="w-8 h-8 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
                Smart AI Hub
              </span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md text-sm">
              Discover the best AI tools for your needs. Compare and choose from
              70+ curated AI tools with personalized recommendations.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/vinayredee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="mailto:kunduvinaykumarreddy@gmail.com"
                className="text-gray-400 hover:text-primary-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Discover Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/compare"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Compare Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/submit"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Submit Tool
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Top Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/category/llms"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  LLMs
                </Link>
              </li>
              <li>
                <Link
                  to="/category/coding"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Coding
                </Link>
              </li>
              <li>
                <Link
                  to="/category/video"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Video
                </Link>
              </li>
              <li>
                <Link
                  to="/category/design"
                  className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
                >
                  Design
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              © 2025 Smart AI Hub. All rights reserved.
            </p>

            {/* Developer Credit */}
            <div className="flex items-center space-x-2 text-sm text-gray-700 font-medium">
              <Code className="w-4 h-4 text-primary-600" />
              <span>Developed by</span>
              <span className="text-primary-600 font-semibold">Kundu Vinay Kumar Reddy</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-600">BTech CSE Graduate</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
