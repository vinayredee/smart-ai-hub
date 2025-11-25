import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { submitTool } from '../api/client';
import { categories } from '../data/aiTools';

const AddTool: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category_id: categories[0].id,
        website: '',
        pricing_type: 'freemium'
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitTool(formData);
            setStatus('success');
            setFormData({
                name: '',
                description: '',
                category_id: categories[0].id,
                website: '',
                pricing_type: 'freemium'
            });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-dark-900">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl mx-auto"
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Submit an AI Tool
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Help us grow the largest directory of AI tools.
                    </p>
                </div>

                <div className="glass-card p-8 rounded-2xl">
                    {status === 'success' ? (
                        <div className="text-center py-12">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                <CheckCircle className="w-8 h-8" />
                            </motion.div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                Submission Successful!
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-6">
                                Thank you for contributing. Your tool has been added to our database.
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="btn-primary"
                            >
                                Submit Another Tool
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Tool Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="input"
                                    placeholder="e.g., ChatGPT"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Description
                                </label>
                                <textarea
                                    required
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="input min-h-[100px]"
                                    placeholder="Briefly describe what the tool does..."
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Category
                                    </label>
                                    <select
                                        value={formData.category_id}
                                        onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                                        className="input"
                                    >
                                        {categories.map(cat => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Pricing Type
                                    </label>
                                    <select
                                        value={formData.pricing_type}
                                        onChange={(e) => setFormData({ ...formData, pricing_type: e.target.value })}
                                        className="input"
                                    >
                                        <option value="free">Free</option>
                                        <option value="freemium">Freemium</option>
                                        <option value="paid">Paid</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Website URL
                                </label>
                                <input
                                    type="url"
                                    required
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                    className="input"
                                    placeholder="https://..."
                                />
                            </div>

                            {status === 'error' && (
                                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                                    <AlertCircle className="w-5 h-5" />
                                    <span>Something went wrong. Please try again.</span>
                                </div>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full btn-primary flex items-center justify-center space-x-2"
                            >
                                {status === 'submitting' ? (
                                    <span>Submitting...</span>
                                ) : (
                                    <>
                                        <Send className="w-4 h-4" />
                                        <span>Submit Tool</span>
                                    </>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export default AddTool;
