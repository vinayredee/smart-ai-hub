export interface AITool {
  id: string;
  name: string;
  description: string;
  category: Category;
  subcategory?: string;
  website: string;
  pricing: Pricing;
  features: string[];
  useCases: string[];
  accuracy: number; // 1-10 scale
  easeOfUse: number; // 1-10 scale
  performance: number; // 1-10 scale
  rating: number; // 1-5 scale
  reviewCount: number;
  imageUrl?: string;
  isPopular: boolean;
  isNew: boolean;
  tags: string[];
  limitations: string[];
  freeFeatures: string[];
  premiumFeatures: string[];
  lastUpdated: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface Pricing {
  type: 'free' | 'freemium' | 'paid' | 'enterprise';
  freeTier?: {
    description: string;
    limitations: string[];
  };
  paidTier?: {
    price: string;
    period: 'monthly' | 'yearly' | 'one-time';
    features: string[];
  };
}

export interface Review {
  id: string;
  toolId: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface ComparisonItem {
  tool: AITool;
  selected: boolean;
}

export interface SearchFilters {
  category?: string;
  pricing?: string[];
  rating?: number;
  features?: string[];
  tags?: string[];
}

export interface ChatMessage {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  suggestions?: string[];
}
