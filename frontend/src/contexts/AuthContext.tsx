import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  favorites: string[];
  reviews: string[];
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  addToFavorites: (toolId: string) => void;
  removeFromFavorites: (toolId: string) => void;
  isFavorite: (toolId: string) => boolean;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('ai-compass-user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock authentication - in real app, this would be an API call
    if (email === 'demo@aicompass.com' && password === 'demo123') {
      const mockUser: User = {
        id: '1',
        name: 'Demo User',
        email: 'demo@aicompass.com',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        favorites: [],
        reviews: []
      };
      setUser(mockUser);
      localStorage.setItem('ai-compass-user', JSON.stringify(mockUser));
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock registration
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      favorites: [],
      reviews: []
    };
    setUser(newUser);
    localStorage.setItem('ai-compass-user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('ai-compass-user');
  };

  const addToFavorites = (toolId: string) => {
    if (user && !user.favorites.includes(toolId)) {
      const updatedUser = { ...user, favorites: [...user.favorites, toolId] };
      setUser(updatedUser);
      localStorage.setItem('ai-compass-user', JSON.stringify(updatedUser));
    }
  };

  const removeFromFavorites = (toolId: string) => {
    if (user) {
      const updatedUser = { ...user, favorites: user.favorites.filter(id => id !== toolId) };
      setUser(updatedUser);
      localStorage.setItem('ai-compass-user', JSON.stringify(updatedUser));
    }
  };

  const isFavorite = (toolId: string): boolean => {
    return user?.favorites.includes(toolId) || false;
  };

  const value = {
    user,
    login,
    register,
    logout,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
