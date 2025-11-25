import React, { createContext, useContext, useState, ReactNode } from 'react';
import { AITool } from '../types';

interface ComparisonContextType {
  comparisonItems: AITool[];
  addToComparison: (tool: AITool) => void;
  removeFromComparison: (toolId: string) => void;
  clearComparison: () => void;
  isInComparison: (toolId: string) => boolean;
}

const ComparisonContext = createContext<ComparisonContextType | undefined>(undefined);

export const useComparison = () => {
  const context = useContext(ComparisonContext);
  if (context === undefined) {
    throw new Error('useComparison must be used within a ComparisonProvider');
  }
  return context;
};

interface ComparisonProviderProps {
  children: ReactNode;
}

export const ComparisonProvider: React.FC<ComparisonProviderProps> = ({ children }) => {
  const [comparisonItems, setComparisonItems] = useState<AITool[]>([]);

  const addToComparison = (tool: AITool) => {
    if (comparisonItems.length < 4 && !comparisonItems.find(item => item.id === tool.id)) {
      setComparisonItems([...comparisonItems, tool]);
    }
  };

  const removeFromComparison = (toolId: string) => {
    setComparisonItems(comparisonItems.filter(item => item.id !== toolId));
  };

  const clearComparison = () => {
    setComparisonItems([]);
  };

  const isInComparison = (toolId: string) => {
    return comparisonItems.some(item => item.id === toolId);
  };

  const value = {
    comparisonItems,
    addToComparison,
    removeFromComparison,
    clearComparison,
    isInComparison
  };

  return (
    <ComparisonContext.Provider value={value}>
      {children}
    </ComparisonContext.Provider>
  );
};
