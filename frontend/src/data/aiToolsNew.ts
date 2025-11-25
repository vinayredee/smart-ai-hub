import { AITool, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'llms',
    name: 'Large Language Models',
    description: 'Advanced AI language models for text generation and understanding',
    icon: 'Brain',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500'
  },
  {
    id: 'coding',
    name: 'Coding & Development',
    description: 'AI assistants for programming, debugging, and software development',
    icon: 'Code',
    color: 'bg-gradient-to-r from-green-500 to-emerald-500'
  },
  {
    id: 'design',
    name: 'Design & Creative',
    description: 'AI-powered design tools, image generation, and creative assistance',
    icon: 'Palette',
    color: 'bg-gradient-to-r from-pink-500 to-rose-500'
  },
  {
    id: 'video',
    name: 'Video & Animation',
    description: 'AI tools for video editing, generation, and animation creation',
    icon: 'Video',
    color: 'bg-gradient-to-r from-red-500 to-orange-500'
  },
  {
    id: 'audio',
    name: 'Audio & Music',
    description: 'AI-powered music creation, voice synthesis, and audio processing',
    icon: 'Music',
    color: 'bg-gradient-to-r from-purple-500 to-indigo-500'
  },
  {
    id: 'writing',
    name: 'Writing & Content',
    description: 'AI tools for content creation, copywriting, and text generation',
    icon: 'PenTool',
    color: 'bg-gradient-to-r from-blue-500 to-cyan-500'
  },
  {
    id: 'business',
    name: 'Business & Productivity',
    description: 'AI solutions for business operations, automation, and productivity',
    icon: 'Briefcase',
    color: 'bg-gradient-to-r from-indigo-500 to-blue-500'
  },
  {
    id: 'data',
    name: 'Data & Analytics',
    description: 'AI tools for data analysis, visualization, and business intelligence',
    icon: 'BarChart',
    color: 'bg-gradient-to-r from-cyan-500 to-teal-500'
  },
  {
    id: 'education',
    name: 'Education & Learning',
    description: 'AI tools for learning, teaching, and educational content creation',
    icon: 'GraduationCap',
    color: 'bg-gradient-to-r from-yellow-500 to-orange-500'
  },
  {
    id: 'communication',
    name: 'Communication',
    description: 'AI tools for communication, collaboration, and customer service',
    icon: 'MessageSquare',
    color: 'bg-gradient-to-r from-emerald-500 to-green-500'
  },
  {
    id: 'research',
    name: 'Research & Analysis',
    description: 'AI tools for research, data processing, and scientific analysis',
    icon: 'Search',
    color: 'bg-gradient-to-r from-gray-500 to-slate-500'
  },
  {
    id: 'automation',
    name: 'Automation & Workflow',
    description: 'AI-powered automation tools and workflow optimization',
    icon: 'Zap',
    color: 'bg-gradient-to-r from-yellow-500 to-amber-500'
  }
];

export const aiTools: AITool[] = [
  // Large Language Models
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Advanced conversational AI for various tasks including writing, coding, analysis, and creative work',
    category: categories[0], // llms
    website: 'https://chat.openai.com',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'GPT-3.5 with usage limits',
        limitations: ['Limited requests per hour', 'No access to latest features']
      },
      paidTier: {
        price: '$20',
        period: 'monthly',
        features: ['GPT-4 access', 'Code interpreter', 'Custom instructions', 'Priority access']
      }
    },
    features: ['Natural language processing', 'Code generation', 'Creative writing', 'Data analysis', 'Translation'],
    useCases: ['Content creation', 'Programming help', 'Research assistance', 'Creative writing', 'Problem solving'],
    accuracy: 9,
    easeOfUse: 10,
    performance: 9,
    rating: 4.8,
    reviewCount: 125000,
    isPopular: true,
    isNew: false,
    tags: ['conversational', 'general-purpose', 'openai', 'llm'],
    limitations: ['Requires internet connection', 'May have factual inaccuracies', 'Limited to training data cutoff'],
    freeFeatures: ['Basic conversations', 'Text generation', 'Simple Q&A'],
    premiumFeatures: ['GPT-4 access', 'Code interpreter', 'Custom instructions', 'Priority access'],
    lastUpdated: '2024-01-15'
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'AI assistant by Anthropic designed for helpful, harmless, and honest conversations',
    category: categories[0], // llms
    website: 'https://claude.ai',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Claude 3 Sonnet with usage limits',
        limitations: ['Limited requests per day', 'Basic features only']
      },
      paidTier: {
        price: '$20',
        period: 'monthly',
        features: ['Claude 3 Opus', 'Higher usage limits', 'Priority access', 'Advanced features']
      }
    },
    features: ['Natural conversations', 'Code assistance', 'Creative writing', 'Analysis', 'Reasoning'],
    useCases: ['Customer support', 'Sales assistance', 'Content creation', 'Research', 'Problem solving'],
    accuracy: 9,
    easeOfUse: 9,
    performance: 9,
    rating: 4.7,
    reviewCount: 18000,
    isPopular: true,
    isNew: false,
    tags: ['conversational', 'anthropic', 'assistant', 'reasoning'],
    limitations: ['Limited context window', 'May be overly cautious'],
    freeFeatures: ['Basic conversations', 'Standard features'],
    premiumFeatures: ['Advanced features', 'Higher usage limits', 'Priority access'],
    lastUpdated: '2024-01-13'
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    description: 'Google\'s advanced AI model for multimodal understanding and generation',
    category: categories[0], // llms
    website: 'https://gemini.google.com',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Gemini Pro with usage limits',
        limitations: ['Limited requests per day', 'Basic multimodal features']
      },
      paidTier: {
        price: '$20',
        period: 'monthly',
        features: ['Gemini Ultra', 'Higher usage limits', 'Advanced multimodal', 'Priority access']
      }
    },
    features: ['Multimodal understanding', 'Text generation', 'Image analysis', 'Code generation', 'Translation'],
    useCases: ['Multimodal tasks', 'Content creation', 'Image analysis', 'Code assistance', 'Research'],
    accuracy: 9,
    easeOfUse: 8,
    performance: 9,
    rating: 4.6,
    reviewCount: 25000,
    isPopular: true,
    isNew: false,
    tags: ['multimodal', 'google', 'image-analysis', 'llm'],
    limitations: ['Requires Google account', 'Limited free usage'],
    freeFeatures: ['Basic multimodal', 'Limited requests'],
    premiumFeatures: ['Advanced multimodal', 'Higher limits', 'Priority access'],
    lastUpdated: '2024-01-14'
  },
  {
    id: 'grok',
    name: 'Grok',
    description: 'xAI\'s AI assistant with real-time information access and witty personality',
    category: categories[0], // llms
    website: 'https://x.ai',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic Grok with limited access',
        limitations: ['Limited requests', 'Basic features only']
      },
      paidTier: {
        price: '$16',
        period: 'monthly',
        features: ['Full Grok access', 'Real-time data', 'Advanced features', 'Priority access']
      }
    },
    features: ['Real-time information', 'Witty personality', 'Code generation', 'Creative writing', 'Analysis'],
    useCases: ['Real-time research', 'Creative writing', 'Code assistance', 'Entertainment', 'Analysis'],
    accuracy: 8,
    easeOfUse: 8,
    performance: 8,
    rating: 4.4,
    reviewCount: 12000,
    isPopular: false,
    isNew: true,
    tags: ['real-time', 'xai', 'personality', 'llm'],
    limitations: ['Requires X subscription', 'Limited availability'],
    freeFeatures: ['Basic access', 'Limited features'],
    premiumFeatures: ['Full access', 'Real-time data', 'Advanced features'],
    lastUpdated: '2024-01-20'
  },
  {
    id: 'llama',
    name: 'Llama',
    description: 'Meta\'s open-source large language model for various AI applications',
    category: categories[0], // llms
    website: 'https://llama.meta.com',
    pricing: { 
      type: 'free',
      freeTier: {
        description: 'Open source model',
        limitations: ['Requires technical setup', 'No hosted service']
      }
    },
    features: ['Open source', 'Text generation', 'Code generation', 'Conversation', 'Customization'],
    useCases: ['Research', 'Custom applications', 'Code generation', 'Content creation', 'Experimentation'],
    accuracy: 8,
    easeOfUse: 6,
    performance: 8,
    rating: 4.5,
    reviewCount: 15000,
    isPopular: false,
    isNew: false,
    tags: ['open-source', 'meta', 'customizable', 'llm'],
    limitations: ['Requires technical knowledge', 'No hosted service'],
    freeFeatures: ['Open source model', 'Full customization'],
    premiumFeatures: [],
    lastUpdated: '2024-01-12'
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    description: 'Advanced AI model with strong reasoning and coding capabilities',
    category: categories[0], // llms
    website: 'https://deepseek.com',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic model with usage limits',
        limitations: ['Limited requests', 'Basic features']
      },
      paidTier: {
        price: '$15',
        period: 'monthly',
        features: ['Advanced model', 'Higher limits', 'Priority access', 'API access']
      }
    },
    features: ['Strong reasoning', 'Code generation', 'Mathematical problem solving', 'Creative writing', 'Analysis'],
    useCases: ['Coding assistance', 'Mathematical problems', 'Research', 'Content creation', 'Analysis'],
    accuracy: 9,
    easeOfUse: 8,
    performance: 9,
    rating: 4.6,
    reviewCount: 8000,
    isPopular: false,
    isNew: true,
    tags: ['reasoning', 'coding', 'mathematics', 'llm'],
    limitations: ['Limited free usage', 'Newer model'],
    freeFeatures: ['Basic model', 'Limited requests'],
    premiumFeatures: ['Advanced model', 'Higher limits', 'API access'],
    lastUpdated: '2024-01-18'
  },

  // Coding & Development
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write code faster and with fewer errors',
    category: categories[1], // coding
    website: 'https://github.com/features/copilot',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic code suggestions',
        limitations: ['Limited suggestions', 'Basic features only']
      },
      paidTier: {
        price: '$10',
        period: 'monthly',
        features: ['Unlimited suggestions', 'Multi-language support', 'IDE plugins', 'Team features']
      }
    },
    features: ['Code completion', 'Function generation', 'Bug detection', 'Multi-language support', 'IDE integration'],
    useCases: ['Software development', 'Code review', 'Learning programming', 'Rapid prototyping', 'Debugging'],
    accuracy: 8,
    easeOfUse: 9,
    performance: 9,
    rating: 4.6,
    reviewCount: 45000,
    isPopular: true,
    isNew: false,
    tags: ['coding', 'programming', 'github', 'ide'],
    limitations: ['Requires IDE', 'May suggest incorrect code', 'Limited context understanding'],
    freeFeatures: ['Basic code suggestions', 'Limited usage'],
    premiumFeatures: ['Unlimited suggestions', 'Multi-language support', 'IDE plugins', 'Team features'],
    lastUpdated: '2024-01-12'
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-powered code editor with built-in AI assistance for faster development',
    category: categories[1], // coding
    website: 'https://cursor.sh',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic AI features',
        limitations: ['Limited AI requests', 'Basic features']
      },
      paidTier: {
        price: '$20',
        period: 'monthly',
        features: ['Unlimited AI requests', 'Advanced features', 'Team collaboration', 'Priority support']
      }
    },
    features: ['AI code completion', 'Chat with code', 'Code generation', 'Refactoring', 'Multi-language support'],
    useCases: ['Code editing', 'AI-assisted development', 'Code refactoring', 'Learning programming', 'Rapid prototyping'],
    accuracy: 9,
    easeOfUse: 9,
    performance: 9,
    rating: 4.7,
    reviewCount: 12000,
    isPopular: true,
    isNew: true,
    tags: ['code-editor', 'ai-assisted', 'development', 'ide'],
    limitations: ['Requires subscription for full features', 'Learning curve'],
    freeFeatures: ['Basic AI features', 'Limited requests'],
    premiumFeatures: ['Unlimited AI', 'Advanced features', 'Team collaboration'],
    lastUpdated: '2024-01-19'
  },
  {
    id: 'replit-ghostwriter',
    name: 'Replit Ghostwriter',
    description: 'AI coding assistant integrated into Replit for real-time code generation and debugging',
    category: categories[1], // coding
    website: 'https://replit.com',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic code assistance',
        limitations: ['Limited usage', 'Basic features']
      },
      paidTier: {
        price: '$20',
        period: 'monthly',
        features: ['Unlimited usage', 'Advanced features', 'Priority support', 'Team collaboration']
      }
    },
    features: ['Code generation', 'Real-time assistance', 'Multi-language support', 'Debugging help', 'Code explanation'],
    useCases: ['Learning programming', 'Rapid prototyping', 'Code debugging', 'Project development', 'Educational coding'],
    accuracy: 8,
    easeOfUse: 9,
    performance: 8,
    rating: 4.5,
    reviewCount: 12000,
    isPopular: false,
    isNew: true,
    tags: ['coding-assistant', 'replit', 'educational', 'real-time'],
    limitations: ['Limited to Replit environment', 'May not work with all languages'],
    freeFeatures: ['Basic code assistance', 'Limited usage'],
    premiumFeatures: ['Unlimited usage', 'Advanced features', 'Priority support'],
    lastUpdated: '2024-01-17'
  },
  {
    id: 'coddy-tech',
    name: 'Coddy.tech',
    description: 'AI-powered coding platform with intelligent code suggestions and debugging',
    category: categories[1], // coding
    website: 'https://coddy.tech',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic coding assistance',
        limitations: ['Limited suggestions', 'Basic features']
      },
      paidTier: {
        price: '$15',
        period: 'monthly',
        features: ['Advanced suggestions', 'Unlimited usage', 'Team features', 'Priority support']
      }
    },
    features: ['Code suggestions', 'Debugging assistance', 'Code review', 'Multi-language support', 'Learning mode'],
    useCases: ['Code development', 'Debugging', 'Code learning', 'Project assistance', 'Code review'],
    accuracy: 8,
    easeOfUse: 8,
    performance: 8,
    rating: 4.4,
    reviewCount: 5000,
    isPopular: false,
    isNew: true,
    tags: ['coding-platform', 'debugging', 'learning', 'assistance'],
    limitations: ['Limited free features', 'Newer platform'],
    freeFeatures: ['Basic assistance', 'Limited usage'],
    premiumFeatures: ['Advanced features', 'Unlimited usage', 'Team features'],
    lastUpdated: '2024-01-16'
  },

  // Design & Creative
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'AI-powered image generation tool that creates stunning artwork from text descriptions',
    category: categories[2], // design
    website: 'https://midjourney.com',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic image generation',
        limitations: ['Limited credits', 'Basic features']
      },
      paidTier: {
        price: '$10',
        period: 'monthly',
        features: ['More credits', 'Higher quality', 'Commercial rights', 'Advanced features']
      }
    },
    features: ['Text-to-image generation', 'High-quality artwork', 'Multiple art styles', 'Upscaling', 'Variations'],
    useCases: ['Digital art creation', 'Concept visualization', 'Marketing materials', 'Book covers', 'Social media content'],
    accuracy: 9,
    easeOfUse: 8,
    performance: 8,
    rating: 4.7,
    reviewCount: 45000,
    isPopular: true,
    isNew: false,
    tags: ['image-generation', 'art', 'creative', 'discord'],
    limitations: ['Requires Discord', 'Limited control over output', 'Learning curve'],
    freeFeatures: ['Basic image generation', 'Limited credits'],
    premiumFeatures: ['More credits', 'Higher quality', 'Commercial rights'],
    lastUpdated: '2024-01-10'
  },
  {
    id: 'dall-e',
    name: 'DALL-E',
    description: 'AI image generation system that creates images from natural language descriptions',
    category: categories[2], // design
    website: 'https://openai.com/dall-e-2',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic image generation',
        limitations: ['Limited credits', 'Basic features']
      },
      paidTier: {
        price: '$20',
        period: 'monthly',
        features: ['More credits', 'Higher quality', 'Advanced features', 'Commercial usage']
      }
    },
    features: ['Text-to-image', 'Image editing', 'Style transfer', 'High resolution', 'Creative variations'],
    useCases: ['Art creation', 'Design concepts', 'Marketing visuals', 'Social media content', 'Creative projects'],
    accuracy: 9,
    easeOfUse: 9,
    performance: 9,
    rating: 4.6,
    reviewCount: 32000,
    isPopular: true,
    isNew: false,
    tags: ['image-generation', 'openai', 'creative', 'art'],
    limitations: ['Limited free usage', 'May generate inappropriate content'],
    freeFeatures: ['Basic image generation', 'Limited credits'],
    premiumFeatures: ['More credits', 'Higher quality', 'Advanced features'],
    lastUpdated: '2024-01-08'
  },
  {
    id: 'lovable',
    name: 'Lovable',
    description: 'AI-powered design tool for creating beautiful user interfaces and web applications',
    category: categories[2], // design
    website: 'https://lovable.dev',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic design features',
        limitations: ['Limited projects', 'Basic templates']
      },
      paidTier: {
        price: '$25',
        period: 'monthly',
        features: ['Unlimited projects', 'Advanced templates', 'Team collaboration', 'Export options']
      }
    },
    features: ['UI design', 'Web app creation', 'Template library', 'Code generation', 'Collaboration'],
    useCases: ['Web design', 'App prototyping', 'UI/UX design', 'Rapid development', 'Design systems'],
    accuracy: 8,
    easeOfUse: 9,
    performance: 8,
    rating: 4.5,
    reviewCount: 8000,
    isPopular: false,
    isNew: true,
    tags: ['ui-design', 'web-apps', 'templates', 'collaboration'],
    limitations: ['Limited free projects', 'Newer platform'],
    freeFeatures: ['Basic design', 'Limited projects'],
    premiumFeatures: ['Unlimited projects', 'Advanced features', 'Team collaboration'],
    lastUpdated: '2024-01-21'
  },

  // Video & Animation
  {
    id: 'runway-ml',
    name: 'Runway ML',
    description: 'Creative AI suite for video editing, image generation, and multimedia content creation',
    category: categories[3], // video
    website: 'https://runwayml.com',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic video editing',
        limitations: ['Limited credits', 'Watermarked output']
      },
      paidTier: {
        price: '$12',
        period: 'monthly',
        features: ['More credits', 'No watermarks', 'Commercial rights', 'Advanced features']
      }
    },
    features: ['Video editing', 'Image generation', 'Text-to-video', 'Background removal', 'Motion tracking'],
    useCases: ['Video production', 'Content creation', 'Marketing videos', 'Social media content', 'Film editing'],
    accuracy: 8,
    easeOfUse: 7,
    performance: 8,
    rating: 4.5,
    reviewCount: 15000,
    isPopular: true,
    isNew: false,
    tags: ['video-editing', 'creative', 'multimedia', 'generative'],
    limitations: ['Credit-based system', 'Learning curve', 'Requires good hardware'],
    freeFeatures: ['Basic video editing', 'Limited credits', 'Watermarked output'],
    premiumFeatures: ['More credits', 'No watermarks', 'Commercial rights', 'Advanced features'],
    lastUpdated: '2024-01-08'
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI video generation platform that creates professional videos with virtual presenters',
    category: categories[3], // video
    website: 'https://synthesia.io',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic video generation',
        limitations: ['Limited minutes', 'Basic avatars']
      },
      paidTier: {
        price: '$30',
        period: 'monthly',
        features: ['More minutes', 'Custom avatars', 'Advanced features', 'Commercial usage']
      }
    },
    features: ['AI avatars', 'Text-to-video', 'Multi-language support', 'Custom avatars', 'Screen recording'],
    useCases: ['Training videos', 'Marketing content', 'Educational materials', 'Corporate communications', 'Social media'],
    accuracy: 9,
    easeOfUse: 8,
    performance: 9,
    rating: 4.6,
    reviewCount: 8500,
    isPopular: true,
    isNew: false,
    tags: ['video-generation', 'avatars', 'corporate', 'multilingual'],
    limitations: ['Limited customization', 'Requires good script'],
    freeFeatures: ['Basic video generation', 'Limited minutes'],
    premiumFeatures: ['More minutes', 'Custom avatars', 'Advanced features'],
    lastUpdated: '2024-01-03'
  },

  // Audio & Music
  {
    id: 'suno-ai',
    name: 'Suno AI',
    description: 'AI music generator that creates complete songs from text descriptions',
    category: categories[4], // audio
    website: 'https://suno.ai',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic music generation',
        limitations: ['Limited daily credits', 'Basic quality']
      },
      paidTier: {
        price: '$10',
        period: 'monthly',
        features: ['More credits', 'Higher quality', 'Commercial usage', 'Advanced features']
      }
    },
    features: ['Text-to-music', 'Song generation', 'Multiple genres', 'Lyrics generation', 'Audio export'],
    useCases: ['Music creation', 'Songwriting', 'Background music', 'Creative projects', 'Content creation'],
    accuracy: 8,
    easeOfUse: 9,
    performance: 8,
    rating: 4.5,
    reviewCount: 12000,
    isPopular: true,
    isNew: true,
    tags: ['music-generation', 'ai-music', 'songwriting', 'creative'],
    limitations: ['Limited control over output', 'Quality varies by genre'],
    freeFeatures: ['Basic music generation', 'Limited daily credits'],
    premiumFeatures: ['More credits', 'Higher quality', 'Commercial usage'],
    lastUpdated: '2024-01-20'
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'AI voice synthesis platform for creating realistic speech from text',
    category: categories[4], // audio
    website: 'https://elevenlabs.io',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic voice synthesis',
        limitations: ['Limited characters', 'Basic voice quality']
      },
      paidTier: {
        price: '$5',
        period: 'monthly',
        features: ['More characters', 'Premium voices', 'Commercial usage', 'Voice cloning']
      }
    },
    features: ['Text-to-speech', 'Voice cloning', 'Multiple languages', 'Emotion control', 'Voice library'],
    useCases: ['Audiobook creation', 'Podcast production', 'Video narration', 'Accessibility', 'Content localization'],
    accuracy: 9,
    easeOfUse: 8,
    performance: 9,
    rating: 4.7,
    reviewCount: 6789,
    isPopular: true,
    isNew: false,
    tags: ['voice-synthesis', 'audio', 'tts', 'voice-cloning'],
    limitations: ['Character limits', 'Voice quality varies', 'Requires good text input'],
    freeFeatures: ['Basic TTS', 'Limited characters', 'Standard voices'],
    premiumFeatures: ['More characters', 'Premium voices', 'Voice cloning', 'Commercial rights'],
    lastUpdated: '2024-01-14'
  },

  // Writing & Content
  {
    id: 'jasper',
    name: 'Jasper AI',
    description: 'AI content creation platform for marketing copy, blog posts, and business content',
    category: categories[5], // writing
    website: 'https://jasper.ai',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic content generation',
        limitations: ['Limited credits', 'Basic features']
      },
      paidTier: {
        price: '$39',
        period: 'monthly',
        features: ['Unlimited credits', 'Advanced features', 'Team collaboration', 'Brand voice']
      }
    },
    features: ['Content generation', 'Blog writing', 'Marketing copy', 'SEO optimization', 'Brand voice'],
    useCases: ['Blog posts', 'Marketing content', 'Social media', 'Email campaigns', 'Website copy'],
    accuracy: 8,
    easeOfUse: 8,
    performance: 8,
    rating: 4.4,
    reviewCount: 22000,
    isPopular: true,
    isNew: false,
    tags: ['content-creation', 'marketing', 'blogging', 'seo'],
    limitations: ['May require editing', 'Limited industry expertise'],
    freeFeatures: ['Basic content generation', 'Limited credits'],
    premiumFeatures: ['Unlimited credits', 'Advanced features', 'Team collaboration'],
    lastUpdated: '2024-01-04'
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI-powered copywriting tool for creating marketing content, sales copy, and business communications',
    category: categories[5], // writing
    website: 'https://copy.ai',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic copywriting',
        limitations: ['Limited credits', 'Basic features']
      },
      paidTier: {
        price: '$36',
        period: 'monthly',
        features: ['Unlimited credits', 'Advanced features', 'Team collaboration', 'API access']
      }
    },
    features: ['Copywriting', 'Marketing content', 'Sales emails', 'Social media posts', 'Product descriptions'],
    useCases: ['Marketing campaigns', 'Sales emails', 'Social media content', 'Website copy', 'Ad creation'],
    accuracy: 8,
    easeOfUse: 9,
    performance: 8,
    rating: 4.5,
    reviewCount: 15000,
    isPopular: true,
    isNew: false,
    tags: ['copywriting', 'marketing', 'sales', 'content-creation'],
    limitations: ['May require editing', 'Limited industry-specific knowledge'],
    freeFeatures: ['Basic copywriting', 'Limited credits'],
    premiumFeatures: ['Unlimited credits', 'Advanced features', 'Team collaboration'],
    lastUpdated: '2024-01-09'
  },

  // Business & Productivity
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'AI writing assistant integrated into Notion for content creation and productivity',
    category: categories[6], // business
    website: 'https://notion.so',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic AI writing',
        limitations: ['Limited AI responses', 'Basic features']
      },
      paidTier: {
        price: '$8',
        period: 'monthly',
        features: ['Unlimited AI responses', 'Advanced templates', 'Team collaboration', 'Priority support']
      }
    },
    features: ['Content generation', 'Text summarization', 'Translation', 'Meeting notes', 'Task management'],
    useCases: ['Documentation', 'Note-taking', 'Content planning', 'Team collaboration', 'Knowledge management'],
    accuracy: 8,
    easeOfUse: 9,
    performance: 8,
    rating: 4.4,
    reviewCount: 25000,
    isPopular: true,
    isNew: false,
    tags: ['productivity', 'writing', 'collaboration', 'notes'],
    limitations: ['Requires Notion account', 'Limited free responses', 'Dependent on Notion features'],
    freeFeatures: ['Basic AI writing', 'Limited responses', 'Core Notion features'],
    premiumFeatures: ['Unlimited AI', 'Advanced templates', 'Team features', 'Priority support'],
    lastUpdated: '2024-01-05'
  },
  {
    id: 'lindy',
    name: 'Lindy',
    description: 'AI personal assistant for automating tasks and managing your digital life',
    category: categories[6], // business
    website: 'https://lindy.ai',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic automation',
        limitations: ['Limited tasks', 'Basic features']
      },
      paidTier: {
        price: '$29',
        period: 'monthly',
        features: ['Unlimited tasks', 'Advanced automation', 'Priority support', 'Custom workflows']
      }
    },
    features: ['Task automation', 'Email management', 'Calendar scheduling', 'Data processing', 'Workflow creation'],
    useCases: ['Personal productivity', 'Email automation', 'Calendar management', 'Data processing', 'Workflow automation'],
    accuracy: 8,
    easeOfUse: 8,
    performance: 8,
    rating: 4.3,
    reviewCount: 5000,
    isPopular: false,
    isNew: true,
    tags: ['personal-assistant', 'automation', 'productivity', 'workflow'],
    limitations: ['Limited free features', 'Learning curve'],
    freeFeatures: ['Basic automation', 'Limited tasks'],
    premiumFeatures: ['Unlimited tasks', 'Advanced features', 'Custom workflows'],
    lastUpdated: '2024-01-17'
  },

  // Data & Analytics
  {
    id: 'julius-ai',
    name: 'Julius AI',
    description: 'AI data analyst that helps you understand and visualize your data through natural language queries',
    category: categories[7], // data
    website: 'https://julius.ai',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic data analysis',
        limitations: ['Limited analyses', 'Basic visualizations']
      },
      paidTier: {
        price: '$19',
        period: 'monthly',
        features: ['Unlimited analyses', 'Advanced visualizations', 'Data export', 'Custom reports']
      }
    },
    features: ['Data analysis', 'Natural language queries', 'Chart generation', 'Statistical insights', 'Data visualization'],
    useCases: ['Business intelligence', 'Data exploration', 'Report generation', 'Market research', 'Performance analysis'],
    accuracy: 8,
    easeOfUse: 9,
    performance: 8,
    rating: 4.3,
    reviewCount: 8500,
    isPopular: false,
    isNew: true,
    tags: ['data-analysis', 'business', 'visualization', 'insights'],
    limitations: ['Requires data upload', 'Limited free analyses', 'Basic statistical methods'],
    freeFeatures: ['Basic analysis', 'Simple charts', 'Limited queries'],
    premiumFeatures: ['Unlimited analysis', 'Advanced charts', 'Data export', 'Custom reports'],
    lastUpdated: '2024-01-20'
  },
  {
    id: 'tableau-ai',
    name: 'Tableau AI',
    description: 'AI-powered data visualization and analytics platform for business intelligence',
    category: categories[7], // data
    website: 'https://tableau.com',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic visualization',
        limitations: ['Limited data sources', 'Basic features']
      },
      paidTier: {
        price: '$70',
        period: 'monthly',
        features: ['Advanced analytics', 'More data sources', 'Team collaboration', 'Enterprise features']
      }
    },
    features: ['Data visualization', 'Business intelligence', 'Predictive analytics', 'Natural language queries', 'Automated insights'],
    useCases: ['Business analytics', 'Data visualization', 'Reporting', 'Predictive modeling', 'Dashboard creation'],
    accuracy: 9,
    easeOfUse: 7,
    performance: 9,
    rating: 4.5,
    reviewCount: 28000,
    isPopular: true,
    isNew: false,
    tags: ['data-visualization', 'business-intelligence', 'analytics', 'reporting'],
    limitations: ['Steep learning curve', 'Requires data preparation'],
    freeFeatures: ['Basic visualization', 'Limited data sources'],
    premiumFeatures: ['Advanced analytics', 'More data sources', 'Team collaboration'],
    lastUpdated: '2024-01-01'
  },

  // Education & Learning
  {
    id: 'khan-academy',
    name: 'Khan Academy AI',
    description: 'Personalized learning platform with AI-powered tutoring and adaptive learning paths',
    category: categories[8], // education
    website: 'https://khanacademy.org',
    pricing: { 
      type: 'free',
      freeTier: {
        description: 'Complete educational platform',
        limitations: ['Limited advanced topics']
      }
    },
    features: ['Adaptive learning', 'Personalized tutoring', 'Progress tracking', 'Interactive exercises', 'Video lessons'],
    useCases: ['Math tutoring', 'Science education', 'Test preparation', 'Skill building', 'Academic support'],
    accuracy: 9,
    easeOfUse: 10,
    performance: 9,
    rating: 4.8,
    reviewCount: 125000,
    isPopular: true,
    isNew: false,
    tags: ['education', 'tutoring', 'adaptive-learning', 'free'],
    limitations: ['Limited advanced topics', 'Requires internet connection'],
    freeFeatures: ['All educational content', 'Progress tracking', 'Personalized learning'],
    premiumFeatures: [],
    lastUpdated: '2024-01-15'
  },
  {
    id: 'duolingo',
    name: 'Duolingo',
    description: 'AI-powered language learning app with personalized lessons and gamification',
    category: categories[8], // education
    website: 'https://duolingo.com',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Core language lessons',
        limitations: ['Limited hearts', 'Basic features']
      },
      paidTier: {
        price: '$7',
        period: 'monthly',
        features: ['Unlimited hearts', 'Offline access', 'Advanced statistics', 'No ads']
      }
    },
    features: ['Language learning', 'Speech recognition', 'Adaptive lessons', 'Gamification', 'Progress tracking'],
    useCases: ['Language learning', 'Vocabulary building', 'Pronunciation practice', 'Grammar lessons', 'Conversation practice'],
    accuracy: 8,
    easeOfUse: 10,
    performance: 8,
    rating: 4.6,
    reviewCount: 89000,
    isPopular: true,
    isNew: false,
    tags: ['language-learning', 'mobile', 'gamification', 'speech-recognition'],
    limitations: ['Limited conversation practice', 'Basic grammar explanations'],
    freeFeatures: ['Core lessons', 'Basic progress tracking', 'Limited hearts'],
    premiumFeatures: ['Unlimited hearts', 'Offline access', 'Advanced statistics'],
    lastUpdated: '2024-01-12'
  },

  // Communication
  {
    id: 'zoom-ai',
    name: 'Zoom AI',
    description: 'AI-powered video conferencing platform with smart features and meeting assistance',
    category: categories[9], // communication
    website: 'https://zoom.us',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic meetings',
        limitations: ['Limited duration', 'Basic features']
      },
      paidTier: {
        price: '$15',
        period: 'monthly',
        features: ['Unlimited duration', 'Advanced features', 'Cloud recording', 'Team management']
      }
    },
    features: ['Video conferencing', 'AI transcription', 'Meeting summaries', 'Smart recording', 'Virtual backgrounds'],
    useCases: ['Remote meetings', 'Webinars', 'Team collaboration', 'Online education', 'Client presentations'],
    accuracy: 9,
    easeOfUse: 9,
    performance: 9,
    rating: 4.6,
    reviewCount: 120000,
    isPopular: true,
    isNew: false,
    tags: ['video-conferencing', 'meetings', 'collaboration', 'remote-work'],
    limitations: ['Time limits on free plan', 'Requires stable internet'],
    freeFeatures: ['Basic meetings', 'Limited duration', 'Basic features'],
    premiumFeatures: ['Unlimited duration', 'Advanced features', 'Cloud recording'],
    lastUpdated: '2024-01-11'
  },

  // Research & Analysis
  {
    id: 'cerebras',
    name: 'Cerebras',
    description: 'AI research platform with advanced computing capabilities for scientific and research applications',
    category: categories[10], // research
    website: 'https://cerebras.net',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic research tools',
        limitations: ['Limited compute', 'Basic features']
      },
      paidTier: {
        price: '$50',
        period: 'monthly',
        features: ['Advanced compute', 'Priority access', 'Custom models', 'Enterprise support']
      }
    },
    features: ['High-performance computing', 'AI model training', 'Research tools', 'Data processing', 'Scientific computing'],
    useCases: ['Scientific research', 'AI model training', 'Data processing', 'Computational research', 'Machine learning'],
    accuracy: 9,
    easeOfUse: 6,
    performance: 10,
    rating: 4.7,
    reviewCount: 3000,
    isPopular: false,
    isNew: false,
    tags: ['research', 'computing', 'scientific', 'ai-training'],
    limitations: ['Requires technical expertise', 'Limited free compute'],
    freeFeatures: ['Basic research tools', 'Limited compute'],
    premiumFeatures: ['Advanced compute', 'Priority access', 'Custom models'],
    lastUpdated: '2024-01-13'
  },

  // Automation & Workflow
  {
    id: 'n8n',
    name: 'n8n',
    description: 'Open-source workflow automation platform with AI-powered integrations and triggers',
    category: categories[11], // automation
    website: 'https://n8n.io',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Self-hosted open source',
        limitations: ['Requires self-hosting', 'Community support']
      },
      paidTier: {
        price: '$20',
        period: 'monthly',
        features: ['Cloud hosting', 'Priority support', 'Advanced features', 'Team collaboration']
      }
    },
    features: ['Workflow automation', 'API integrations', 'AI triggers', 'Data processing', 'Custom workflows'],
    useCases: ['Process automation', 'API integrations', 'Data workflows', 'Business automation', 'Custom solutions'],
    accuracy: 8,
    easeOfUse: 7,
    performance: 8,
    rating: 4.6,
    reviewCount: 15000,
    isPopular: true,
    isNew: false,
    tags: ['automation', 'workflow', 'open-source', 'integrations'],
    limitations: ['Learning curve', 'Requires technical knowledge'],
    freeFeatures: ['Open source', 'Self-hosted', 'Community support'],
    premiumFeatures: ['Cloud hosting', 'Priority support', 'Advanced features'],
    lastUpdated: '2024-01-09'
  },
  {
    id: 'august-ai',
    name: 'August AI',
    description: 'AI-powered automation platform for business processes and workflow optimization',
    category: categories[11], // automation
    website: 'https://august.ai',
    pricing: { 
      type: 'freemium',
      freeTier: {
        description: 'Basic automation',
        limitations: ['Limited workflows', 'Basic features']
      },
      paidTier: {
        price: '$25',
        period: 'monthly',
        features: ['Unlimited workflows', 'Advanced features', 'Team collaboration', 'Priority support']
      }
    },
    features: ['Business automation', 'Workflow design', 'AI triggers', 'Data processing', 'Team collaboration'],
    useCases: ['Business process automation', 'Workflow optimization', 'Data processing', 'Team coordination', 'Custom automation'],
    accuracy: 8,
    easeOfUse: 8,
    performance: 8,
    rating: 4.4,
    reviewCount: 4000,
    isPopular: false,
    isNew: true,
    tags: ['business-automation', 'workflow', 'ai-triggers', 'collaboration'],
    limitations: ['Limited free features', 'Newer platform'],
    freeFeatures: ['Basic automation', 'Limited workflows'],
    premiumFeatures: ['Unlimited workflows', 'Advanced features', 'Team collaboration'],
    lastUpdated: '2024-01-22'
  }
];
