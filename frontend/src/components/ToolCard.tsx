import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ExternalLink, Sparkles } from 'lucide-react';

interface Tool {
    id: string;
    name: string;
    description: string;
    category: { id: string; name: string; color: string };
    pricing: { type: string };
    isPopular?: boolean;
    isNew?: boolean;
    website: string;
}

interface ToolCardProps {
    tool: Tool;
    index: number;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, index }) => {
    const getPricingBadge = (type: string) => {
        const badges: Record<string, { label: string; className: string }> = {
            free: { label: 'Free', className: 'badge-green' },
            freemium: { label: 'Freemium', className: 'badge-blue' },
            paid: { label: 'Paid', className: 'badge-purple' },
        };
        return badges[type] || badges.free;
    };

    const badge = getPricingBadge(tool.pricing.type);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -8 }}
            className="group h-full"
        >
            <div className="relative h-full">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-blue to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>

                {/* Card content */}
                <div className="relative h-full bg-white rounded-2xl border border-gray-100 p-6 transition-all duration-300 group-hover:shadow-soft overflow-hidden">
                    {/* Background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <div className="flex items-center space-x-2 mb-2">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                                        {tool.name}
                                    </h3>
                                    {tool.isNew && (
                                        <motion.span
                                            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gradient-to-r from-primary-600 to-accent-blue text-white"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 500, delay: 0.2 }}
                                        >
                                            New
                                        </motion.span>
                                    )}
                                    {tool.isPopular && (
                                        <motion.span
                                            className="inline-flex items-center space-x-1"
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                        >
                                            <Sparkles className="w-4 h-4 text-yellow-500" />
                                        </motion.span>
                                    )}
                                </div>
                                <span className={badge.className}>
                                    {badge.label}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-600 mb-6 flex-1 line-clamp-3">
                            {tool.description}
                        </p>

                        {/* Actions */}
                        <div className="flex items-center space-x-3 mt-auto">
                            <Link
                                to={`/tool/${tool.id}`}
                                className="flex-1 text-center px-4 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium text-sm rounded-lg transition-all duration-300 group-hover:bg-primary-50 group-hover:text-primary-700"
                            >
                                Learn More
                            </Link>
                            <motion.a
                                href={tool.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-300 group-hover:shadow-glow"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ExternalLink className="w-4 h-4" />
                            </motion.a>
                        </div>
                    </div>

                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:left-full transition-all duration-1000"></div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ToolCard;
