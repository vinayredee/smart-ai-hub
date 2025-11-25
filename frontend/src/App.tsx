import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Header from './components/Header';
import Hero from './components/Hero';
import ToolGrid from './components/ToolGrid';
import ToolDetail from './components/ToolDetail';
import Comparison from './components/Comparison';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import CategoryShowcase from './components/CategoryShowcase';
import CategoryPage from './components/CategoryPage';
import AddTool from './components/AddTool';
import { ThemeProvider } from './contexts/ThemeContext';
import { SearchProvider } from './contexts/SearchContext';
import { ComparisonProvider } from './contexts/ComparisonContext';
import { AuthProvider } from './contexts/AuthContext';
import './App.css';

const queryClient = new QueryClient();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider value={{ isDarkMode, toggleDarkMode }}>
        <AuthProvider>
          <SearchProvider>
            <ComparisonProvider>
              <Router>
                <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
                  <Header />
                  <main>
                    <Routes>
                      <Route path="/" element={
                        <>
                          <Hero />
                          <CategoryShowcase />
                          <ToolGrid />
                        </>
                      } />
                      <Route path="/category/:id" element={<CategoryPage />} />
                      <Route path="/tool/:id" element={<ToolDetail />} />
                      <Route path="/compare" element={<Comparison />} />
                      <Route path="/submit" element={<AddTool />} />
                    </Routes>
                  </main>
                  <ChatBot />
                  <Footer />
                </div>
              </Router>
            </ComparisonProvider>
          </SearchProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
