import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ArrowLeft, ExternalLink, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fetchTools } from '../api/client';
import { categories } from '../data/aiTools';
import { AITool } from '../types';

import { useSearch } from '../contexts/SearchContext';

const CategoryPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const { searchQuery } = useSearch();
    const category = categories.find(c => c.id === id);

    // Scroll to top on mount
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const { data: tools = [], isLoading } = useQuery(
        ['tools', id, searchQuery],
        () => fetchTools(searchQuery, id)
    );

    if (!category) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Category not found</h2>
                    <Link to="/" className="text-primary-600 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-900 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-6 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center space-x-4"
                    >
                        <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                            <span className="text-2xl font-bold">{category.name.charAt(0)}</span>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                                {category.name}
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300">
                                {category.description}
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Tools Grid */}
                {isLoading ? (
                    <div className="flex justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {tools.length === 0 ? (
                            <div className="col-span-full text-center py-20">
                                <p className="text-xl text-gray-500 dark:text-gray-400">No tools found for this category yet.</p>
                                <Link to="/" className="text-primary-600 hover:underline mt-4 inline-block">Explore other categories</Link>
                            </div>
                        ) : (
                            tools.map((tool: AITool, index: number) => (
                                <motion.a
                                    key={tool.id}
                                    href={tool.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card p-8 rounded-2xl group hover:border-primary-500/30 block h-full"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                                                {tool.name}
                                            </h3>
                                            <div className="flex items-center space-x-2 text-sm">
                                                <div className="flex items-center text-yellow-500">
                                                    <Star className="w-4 h-4 fill-current mr-1" />
                                                    <span className="text-gray-700 dark:text-gray-300">{tool.rating}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-primary flex items-center space-x-2">
                                            <span>Visit</span>
                                            <ExternalLink className="w-4 h-4" />
                                        </div>
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
                                        {tool.description}
                                    </p>

                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
                                            Best Used For
                                        </h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                            {tool.useCases.map((useCase, i) => (
                                                <div key={i} className="flex items-start space-x-2 text-gray-600 dark:text-gray-400">
                                                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                                                    <span>{useCase}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.a>
                            ))
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;
