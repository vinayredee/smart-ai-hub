import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { sendChatMessage } from '../api/client';
import { ChatMessage } from '../types';

const ChatPage: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            id: '1',
            type: 'assistant',
            content: "Hi! I'm your AI assistant for Smart AI Hub. I can help you find the perfect AI tool for your needs. What are you looking for?",
            timestamp: new Date(),
            suggestions: [
                "Best AI tools for video editing",
                "Free coding assistants",
                "AI tools for content creation",
                "Data analysis tools"
            ]
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSendMessage = async () => {
        if (!inputValue.trim()) return;

        const userMessage: ChatMessage = {
            id: Date.now().toString(),
            type: 'user',
            content: inputValue,
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        try {
            const response = await sendChatMessage(inputValue);
            const assistantMessage: ChatMessage = {
                id: (Date.now() + 1).toString(),
                type: 'assistant',
                content: response,
                timestamp: new Date(),
                suggestions: []
            };
            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error("Chat error:", error);
            const errorMessage: ChatMessage = {
                id: (Date.now() + 1).toString(),
                type: 'assistant',
                content: "Sorry, I'm having trouble connecting. Please try again!",
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsTyping(false);
        }
    };

    const handleSuggestionClick = (suggestion: string) => {
        setInputValue(suggestion);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm mb-4">
                        <Sparkles className="w-4 h-4 text-primary-600" />
                        <span className="text-sm font-medium text-gray-700">AI-Powered Assistant</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold font-display text-gray-900 mb-2">
                        Chat with AI Assistant
                    </h1>
                    <p className="text-base text-gray-600">
                        Ask me anything about AI tools and I'll help you find the perfect solution
                    </p>
                </motion.div>

                {/* Chat Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden"
                >
                    {/* Messages */}
                    <div className="h-[500px] overflow-y-auto p-6 space-y-4">
                        {messages.map((message) => (
                            <motion.div
                                key={message.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${message.type === 'user'
                                            ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white'
                                            : 'bg-gray-50 text-gray-900'
                                        }`}
                                >
                                    <div className="flex items-start space-x-3">
                                        {message.type === 'assistant' && (
                                            <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mt-1">
                                                <Bot className="w-4 h-4 text-primary-600" />
                                            </div>
                                        )}
                                        {message.type === 'user' && (
                                            <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                                                <User className="w-4 h-4" />
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                                            {message.suggestions && message.suggestions.length > 0 && (
                                                <div className="mt-3 space-y-2">
                                                    <p className="text-xs font-medium text-gray-500">Suggestions:</p>
                                                    {message.suggestions.map((suggestion, index) => (
                                                        <button
                                                            key={index}
                                                            onClick={() => handleSuggestionClick(suggestion)}
                                                            className="block w-full text-left text-sm bg-white border border-gray-200 hover:border-primary-300 hover:bg-primary-50 rounded-lg px-3 py-2 transition-all duration-200"
                                                        >
                                                            {suggestion}
                                                        </button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-gray-50 rounded-2xl px-4 py-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center">
                                            <Bot className="w-4 h-4 text-primary-600" />
                                        </div>
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="border-t border-gray-100 p-4 bg-gray-50">
                        <div className="flex items-center space-x-3">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Ask me about AI tools..."
                                className="flex-1 px-4 py-3 border border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 text-sm"
                            />
                            <button
                                onClick={handleSendMessage}
                                disabled={!inputValue.trim()}
                                className="btn-primary-pro disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                            >
                                <Send className="w-4 h-4" />
                                <span>Send</span>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ChatPage;
