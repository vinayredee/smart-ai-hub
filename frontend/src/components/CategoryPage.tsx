import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import { ArrowLeft, ExternalLink, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { fetchTools } from '../api/client';
import { categories } from '../data/aiTools';
import { AITool } from '../types';

import { useSearch } from '../contexts/SearchContext';

import ToolCard from './ToolCard';

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
                        className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 mb-8 transition-colors group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row md:items-center gap-6"
                    >
                        <div className={`w-20 h-20 ${category.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary-500/20`}>
                            <span className="text-3xl font-bold">{category.name.charAt(0)}</span>
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                                {category.name}
                            </h1>
                            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tools.length === 0 ? (
                            <div className="col-span-full text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                                <p className="text-xl text-gray-500 dark:text-gray-400">No tools found for this category yet.</p>
                                <Link to="/" className="text-primary-600 hover:underline mt-4 inline-block font-medium">Explore other categories</Link>
                            </div>
                        ) : (
                            tools.map((tool: AITool, index: number) => (
                                <motion.div
                                    key={tool.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <ToolCard tool={tool} />
                                </motion.div>
                            ))
                        )}
                    </div>
                )}

                {/* Coming Soon Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-primary-100 to-purple-100 mb-6">
                        <div className="bg-white px-6 py-2 rounded-full shadow-sm">
                            <span className="text-sm font-semibold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent uppercase tracking-wider">
                                Updates Incoming
                            </span>
                        </div>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        More AI Tools Coming Soon
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                        We are constantly researching and testing new AI tools to add to our directory.
                        Stay tuned for the latest updates in {category.name}.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="h-32 border-2 border-dashed border-gray-300 rounded-2xl flex items-center justify-center bg-gray-50">
                                <span className="text-gray-400 font-medium">New Tool Loading...</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default CategoryPage;
