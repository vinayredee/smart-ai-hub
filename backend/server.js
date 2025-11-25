const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Use /tmp for serverless environment (Vercel)
const dbPath = process.env.VERCEL ? '/tmp/database.sqlite' : '../database/database.sqlite';
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to SQLite database');
    initializeDatabase();
  }
});

function initializeDatabase() {
  db.run(`CREATE TABLE IF NOT EXISTS tools (
    id TEXT PRIMARY KEY,
    name TEXT,
    description TEXT,
    category_id TEXT,
    website TEXT,
    pricing_type TEXT,
    rating REAL,
    is_popular INTEGER,
    is_new INTEGER,
    features TEXT,
    use_cases TEXT,
    tags TEXT,
    limitations TEXT
  )`);

  // Always seed database to ensure new tools are added
  seedDatabase();
}

// Massive Data Seed
const initialTools = [
  // Education
  {
    id: 'khan-academy',
    name: 'Khan Academy AI',
    description: 'Personalized learning platform with AI-powered tutoring and adaptive learning paths.',
    category_id: 'education',
    website: 'https://khanacademy.org',
    pricing_type: 'free',
    rating: 4.8,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Adaptive learning', 'Personalized tutoring', 'Progress tracking']),
    use_cases: JSON.stringify(['Math tutoring', 'Science education', 'Test preparation']),
    tags: JSON.stringify(['education', 'tutoring', 'free']),
    limitations: JSON.stringify(['Limited advanced topics'])
  },
  {
    id: 'duolingo',
    name: 'Duolingo',
    description: 'AI-powered language learning app with personalized lessons and gamification.',
    category_id: 'education',
    website: 'https://duolingo.com',
    pricing_type: 'freemium',
    rating: 4.6,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Language learning', 'Speech recognition', 'Gamification']),
    use_cases: JSON.stringify(['Language learning', 'Vocabulary building']),
    tags: JSON.stringify(['language', 'mobile', 'gamification']),
    limitations: JSON.stringify(['Limited conversation practice'])
  },
  {
    id: 'coursera-ai',
    name: 'Coursera AI',
    description: 'AI-assisted course recommendations and personalized learning paths.',
    category_id: 'education',
    website: 'https://coursera.org',
    pricing_type: 'freemium',
    rating: 4.7,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Course recommendations', 'Skill assessments', 'Certificates']),
    use_cases: JSON.stringify(['Professional development', 'Career advancement']),
    tags: JSON.stringify(['courses', 'certification', 'university']),
    limitations: JSON.stringify(['Some courses require payment'])
  },
  {
    id: 'photomath',
    name: 'Photomath',
    description: 'Camera-calculator that uses AI to solve math problems instantly.',
    category_id: 'education',
    website: 'https://photomath.com',
    pricing_type: 'freemium',
    rating: 4.8,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Camera scan', 'Step-by-step solutions', 'Graphing']),
    use_cases: JSON.stringify(['Math homework', 'Algebra', 'Calculus']),
    tags: JSON.stringify(['math', 'mobile', 'solver']),
    limitations: JSON.stringify(['Advanced calculus limitations'])
  },
  {
    id: 'quizlet-q-chat',
    name: 'Quizlet Q-Chat',
    description: 'AI tutor that helps students study with Socratic questioning.',
    category_id: 'education',
    website: 'https://quizlet.com',
    pricing_type: 'freemium',
    rating: 4.5,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['AI tutor', 'Flashcards', 'Practice tests']),
    use_cases: JSON.stringify(['Study sessions', 'Exam prep']),
    tags: JSON.stringify(['study', 'flashcards', 'tutor']),
    limitations: JSON.stringify(['Requires Plus subscription for full access'])
  },

  // Coding
  {
    id: 'chatgpt-coding',
    name: 'ChatGPT (Coding)',
    description: 'Advanced conversational AI capable of writing, debugging, and explaining code.',
    category_id: 'coding',
    website: 'https://chat.openai.com',
    pricing_type: 'freemium',
    rating: 4.9,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Code generation', 'Debugging', 'Refactoring']),
    use_cases: JSON.stringify(['Software development', 'Scripting', 'Learning to code']),
    tags: JSON.stringify(['coding', 'openai', 'assistant']),
    limitations: JSON.stringify(['May hallucinate libraries'])
  },
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that suggests code and entire functions in real-time.',
    category_id: 'coding',
    website: 'https://github.com/features/copilot',
    pricing_type: 'paid',
    rating: 4.8,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Code completion', 'Multi-language support', 'IDE integration']),
    use_cases: JSON.stringify(['Faster coding', 'Boilerplate reduction']),
    tags: JSON.stringify(['coding', 'github', 'ide']),
    limitations: JSON.stringify(['Paid subscription required'])
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI code completion tool that learns from your codebase.',
    category_id: 'coding',
    website: 'https://www.tabnine.com',
    pricing_type: 'freemium',
    rating: 4.5,
    is_popular: 0,
    is_new: 0,
    features: JSON.stringify(['Whole-line completion', 'Privacy-focused', 'Team training']),
    use_cases: JSON.stringify(['Enterprise coding', 'Privacy-sensitive projects']),
    tags: JSON.stringify(['coding', 'completion', 'privacy']),
    limitations: JSON.stringify(['Free version limited'])
  },
  {
    id: 'replit-ghostwriter',
    name: 'Replit Ghostwriter',
    description: 'Integrated AI coding assistant within the Replit IDE.',
    category_id: 'coding',
    website: 'https://replit.com',
    pricing_type: 'paid',
    rating: 4.6,
    is_popular: 0,
    is_new: 1,
    features: JSON.stringify(['In-browser coding', 'Debugger', 'Explanation']),
    use_cases: JSON.stringify(['Web development', 'Prototyping']),
    tags: JSON.stringify(['cloud-ide', 'coding', 'beginner-friendly']),
    limitations: JSON.stringify(['Browser-based only'])
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'An AI-first code editor built for pair programming with AI.',
    category_id: 'coding',
    website: 'https://cursor.sh',
    pricing_type: 'freemium',
    rating: 4.8,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['AI editor', 'Codebase chat', 'Auto-debug']),
    use_cases: JSON.stringify(['Full-stack development', 'Refactoring']),
    tags: JSON.stringify(['editor', 'ide', 'ai-native']),
    limitations: JSON.stringify(['New tool, evolving features'])
  },

  // Video
  {
    id: 'runway-ml',
    name: 'Runway ML',
    description: 'Advanced AI creative suite for video editing and generation.',
    category_id: 'video',
    website: 'https://runwayml.com',
    pricing_type: 'freemium',
    rating: 4.7,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Text-to-video', 'Inpainting', 'Motion brush']),
    use_cases: JSON.stringify(['Film production', 'Creative visual effects']),
    tags: JSON.stringify(['video', 'generative', 'professional']),
    limitations: JSON.stringify(['High credit usage'])
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'Create professional AI videos from text in minutes.',
    category_id: 'video',
    website: 'https://synthesia.io',
    pricing_type: 'paid',
    rating: 4.6,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['AI avatars', '120+ languages', 'Text-to-speech']),
    use_cases: JSON.stringify(['Training videos', 'Marketing', 'Explainers']),
    tags: JSON.stringify(['avatars', 'corporate', 'video-generation']),
    limitations: JSON.stringify(['Avatars can feel robotic'])
  },
  {
    id: 'pika-labs',
    name: 'Pika',
    description: 'Idea-to-video platform that brings your creativity to motion.',
    category_id: 'video',
    website: 'https://pika.art',
    pricing_type: 'freemium',
    rating: 4.5,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Text-to-video', 'Image-to-video', 'Lip sync']),
    use_cases: JSON.stringify(['Social media', 'Animation', 'Memes']),
    tags: JSON.stringify(['video', 'animation', 'fun']),
    limitations: JSON.stringify(['Short duration clips'])
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'All-in-one video and audio editing, as easy as a doc.',
    category_id: 'video',
    website: 'https://descript.com',
    pricing_type: 'freemium',
    rating: 4.7,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Text-based editing', 'Overdub', 'Studio sound']),
    use_cases: JSON.stringify(['Podcasting', 'Video editing', 'Transcription']),
    tags: JSON.stringify(['editing', 'transcription', 'audio']),
    limitations: JSON.stringify(['Desktop app recommended'])
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    description: 'AI video generator for creating business videos with avatars.',
    category_id: 'video',
    website: 'https://heygen.com',
    pricing_type: 'freemium',
    rating: 4.6,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Custom avatars', 'Voice cloning', 'Translation']),
    use_cases: JSON.stringify(['Sales outreach', 'Localization', 'Marketing']),
    tags: JSON.stringify(['business', 'avatars', 'translation']),
    limitations: JSON.stringify(['Credit system'])
  },

  // Design
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Generates hyper-realistic and artistic images from text.',
    category_id: 'design',
    website: 'https://midjourney.com',
    pricing_type: 'paid',
    rating: 4.9,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['High fidelity', 'Artistic styles', 'Upscaling']),
    use_cases: JSON.stringify(['Art', 'Concept design', 'Marketing visuals']),
    tags: JSON.stringify(['image-generation', 'art', 'discord']),
    limitations: JSON.stringify(['Discord interface only'])
  },
  {
    id: 'canva-magic',
    name: 'Canva Magic Studio',
    description: 'Suite of AI tools integrated into Canva for easy design.',
    category_id: 'design',
    website: 'https://canva.com',
    pricing_type: 'freemium',
    rating: 4.8,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Magic edit', 'Text-to-image', 'Magic design']),
    use_cases: JSON.stringify(['Social media', 'Presentations', 'Marketing']),
    tags: JSON.stringify(['design', 'easy', 'all-in-one']),
    limitations: JSON.stringify(['Pro subscription for best features'])
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description: 'Generative AI for creators, integrated into Photoshop.',
    category_id: 'design',
    website: 'https://firefly.adobe.com',
    pricing_type: 'freemium',
    rating: 4.7,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Generative fill', 'Text effects', 'Vector recoloring']),
    use_cases: JSON.stringify(['Photo editing', 'Graphic design', 'Commercial safe']),
    tags: JSON.stringify(['adobe', 'professional', 'commercial']),
    limitations: JSON.stringify(['Credit system'])
  },
  {
    id: 'dall-e-3',
    name: 'DALL-E 3',
    description: 'OpenAI\'s advanced image generation model.',
    category_id: 'design',
    website: 'https://openai.com/dall-e-3',
    pricing_type: 'paid',
    rating: 4.8,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Text accuracy', 'ChatGPT integration', 'High detail']),
    use_cases: JSON.stringify(['Illustrations', 'Logos', 'Concepts']),
    tags: JSON.stringify(['openai', 'easy', 'chatgpt']),
    limitations: JSON.stringify(['Part of ChatGPT Plus'])
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.ai',
    description: 'Create production-quality visual assets for your projects.',
    category_id: 'design',
    website: 'https://leonardo.ai',
    pricing_type: 'freemium',
    rating: 4.6,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Game assets', 'Model training', 'Canvas editor']),
    use_cases: JSON.stringify(['Game dev', 'Character design', 'Concept art']),
    tags: JSON.stringify(['game-assets', 'training', 'control']),
    limitations: JSON.stringify(['Complex interface'])
  },

  // Writing
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'AI copilot for enterprise marketing teams.',
    category_id: 'writing',
    website: 'https://jasper.ai',
    pricing_type: 'paid',
    rating: 4.6,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Brand voice', 'Marketing templates', 'SEO mode']),
    use_cases: JSON.stringify(['Blogs', 'Ads', 'Emails']),
    tags: JSON.stringify(['marketing', 'enterprise', 'copywriting']),
    limitations: JSON.stringify(['Expensive'])
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI powered copywriting for sales and marketing.',
    category_id: 'writing',
    website: 'https://copy.ai',
    pricing_type: 'freemium',
    rating: 4.5,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Workflow automation', 'Templates', 'Chat']),
    use_cases: JSON.stringify(['Social posts', 'Cold outreach', 'Product descriptions']),
    tags: JSON.stringify(['sales', 'marketing', 'automation']),
    limitations: JSON.stringify(['Generic outputs sometimes'])
  },
  {
    id: 'grammarly-go',
    name: 'GrammarlyGO',
    description: 'Context-aware AI writing assistant.',
    category_id: 'writing',
    website: 'https://grammarly.com',
    pricing_type: 'freemium',
    rating: 4.8,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Tone adjustment', 'Rewriting', 'Ideation']),
    use_cases: JSON.stringify(['Emails', 'Documents', 'Professional communication']),
    tags: JSON.stringify(['editing', 'communication', 'assistant']),
    limitations: JSON.stringify(['Premium for advanced features'])
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    description: 'AI-powered paraphrasing tool.',
    category_id: 'writing',
    website: 'https://quillbot.com',
    pricing_type: 'freemium',
    rating: 4.7,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Paraphraser', 'Grammar checker', 'Summarizer']),
    use_cases: JSON.stringify(['Academic writing', 'Rewriting', 'Simplifying']),
    tags: JSON.stringify(['student', 'academic', 'paraphrase']),
    limitations: JSON.stringify(['Word limit on free'])
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'Integrated AI assistant in your Notion workspace.',
    category_id: 'writing',
    website: 'https://notion.so',
    pricing_type: 'paid',
    rating: 4.6,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Summarization', 'Translation', 'Brainstorming']),
    use_cases: JSON.stringify(['Notes', 'Docs', 'Project management']),
    tags: JSON.stringify(['productivity', 'workspace', 'integrated']),
    limitations: JSON.stringify(['Add-on cost'])
  },

  // Audio
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'The most realistic AI text-to-speech and voice cloning.',
    category_id: 'audio',
    website: 'https://elevenlabs.io',
    pricing_type: 'freemium',
    rating: 4.9,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Voice cloning', 'Text-to-speech', 'Dubbing']),
    use_cases: JSON.stringify(['Audiobooks', 'Videos', 'Games']),
    tags: JSON.stringify(['voice', 'realistic', 'cloning']),
    limitations: JSON.stringify(['Character limits'])
  },
  {
    id: 'suno',
    name: 'Suno',
    description: 'Make a song about anything with AI.',
    category_id: 'audio',
    website: 'https://suno.ai',
    pricing_type: 'freemium',
    rating: 4.8,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Full song generation', 'Lyrics', 'Vocals']),
    use_cases: JSON.stringify(['Fun', 'Content creation', 'Demos']),
    tags: JSON.stringify(['music', 'song-generation', 'fun']),
    limitations: JSON.stringify(['Copyright grey area'])
  },
  {
    id: 'udio',
    name: 'Udio',
    description: 'Create music with AI.',
    category_id: 'audio',
    website: 'https://udio.com',
    pricing_type: 'freemium',
    rating: 4.7,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['High quality audio', 'Extension', 'Remix']),
    use_cases: JSON.stringify(['Music production', 'Samples']),
    tags: JSON.stringify(['music', 'production', 'high-fidelity']),
    limitations: JSON.stringify(['Beta access'])
  },
  {
    id: 'murf-ai',
    name: 'Murf AI',
    description: 'Go from text to speech with a versatile AI voice generator.',
    category_id: 'audio',
    website: 'https://murf.ai',
    pricing_type: 'freemium',
    rating: 4.6,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Voiceover', 'Voice cloning', 'Video sync']),
    use_cases: JSON.stringify(['E-learning', 'Podcasts', 'Ads']),
    tags: JSON.stringify(['voice', 'tts', 'professional']),
    limitations: JSON.stringify(['Download limits'])
  },
  {
    id: 'speechify',
    name: 'Speechify',
    description: '#1 AI Text to Speech Reader.',
    category_id: 'audio',
    website: 'https://speechify.com',
    pricing_type: 'freemium',
    rating: 4.7,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Reading assistant', 'Natural voices', 'Speed control']),
    use_cases: JSON.stringify(['Reading', 'Accessibility', 'Productivity']),
    tags: JSON.stringify(['tts', 'reading', 'accessibility']),
    limitations: JSON.stringify(['Premium voices paid'])
  },

  // Business
  {
    id: 'otter-ai',
    name: 'Otter.ai',
    description: 'AI meeting assistant that records, transcribes, and summarizes.',
    category_id: 'business',
    website: 'https://otter.ai',
    pricing_type: 'freemium',
    rating: 4.6,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Transcription', 'Meeting summary', 'Action items']),
    use_cases: JSON.stringify(['Meetings', 'Interviews', 'Lectures']),
    tags: JSON.stringify(['productivity', 'meetings', 'transcription']),
    limitations: JSON.stringify(['English only mostly'])
  },
  {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    description: 'Generative AI presentation software.',
    category_id: 'business',
    website: 'https://beautiful.ai',
    pricing_type: 'paid',
    rating: 4.5,
    is_popular: 0,
    is_new: 0,
    features: JSON.stringify(['Smart slides', 'Design automation', 'Templates']),
    use_cases: JSON.stringify(['Pitch decks', 'Reports', 'Sales']),
    tags: JSON.stringify(['presentation', 'design', 'business']),
    limitations: JSON.stringify(['Subscription required'])
  },
  {
    id: 'gong',
    name: 'Gong',
    description: 'Revenue intelligence platform for sales teams.',
    category_id: 'business',
    website: 'https://gong.io',
    pricing_type: 'paid',
    rating: 4.8,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Call analysis', 'Deal insights', 'Coaching']),
    use_cases: JSON.stringify(['Sales', 'Customer success', 'Revenue ops']),
    tags: JSON.stringify(['sales', 'analytics', 'enterprise']),
    limitations: JSON.stringify(['Enterprise pricing'])
  },
  {
    id: 'fireflies',
    name: 'Fireflies.ai',
    description: 'Automate your meeting notes.',
    category_id: 'business',
    website: 'https://fireflies.ai',
    pricing_type: 'freemium',
    rating: 4.6,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Meeting recording', 'Transcription', 'Search']),
    use_cases: JSON.stringify(['Team meetings', 'Recruiting', 'Management']),
    tags: JSON.stringify(['meetings', 'notes', 'automation']),
    limitations: JSON.stringify(['Integration limits'])
  },
  {
    id: 'gamma',
    name: 'Gamma',
    description: 'A new medium for presenting ideas, powered by AI.',
    category_id: 'business',
    website: 'https://gamma.app',
    pricing_type: 'freemium',
    rating: 4.7,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Presentation generation', 'Webpages', 'Docs']),
    use_cases: JSON.stringify(['Decks', 'Proposals', 'Portfolios']),
    tags: JSON.stringify(['presentation', 'design', 'fast']),
    limitations: JSON.stringify(['Credit system'])
  },

  // LLMs
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'The industry-leading AI chatbot by OpenAI, powered by GPT-4.',
    category_id: 'llms',
    website: 'https://chat.openai.com',
    pricing_type: 'freemium',
    rating: 4.9,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['GPT-4 Access', 'DALL-E 3', 'Data Analysis']),
    use_cases: JSON.stringify(['Writing', 'Coding', 'Brainstorming']),
    tags: JSON.stringify(['llm', 'openai', 'chatbot']),
    limitations: JSON.stringify(['Knowledge cutoff'])
  },
  {
    id: 'gemini',
    name: 'Gemini',
    description: 'Google\'s most capable AI model, built from the ground up to be multimodal.',
    category_id: 'llms',
    website: 'https://gemini.google.com',
    pricing_type: 'freemium',
    rating: 4.8,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Multimodal', 'Google Integration', 'Fast']),
    use_cases: JSON.stringify(['Research', 'Creative writing', 'Coding']),
    tags: JSON.stringify(['llm', 'google', 'multimodal']),
    limitations: JSON.stringify(['Can be verbose'])
  },
  {
    id: 'claude-3',
    name: 'Claude 3',
    description: 'Anthropic\'s state-of-the-art model family, known for safety and nuance.',
    category_id: 'llms',
    website: 'https://anthropic.com/claude',
    pricing_type: 'freemium',
    rating: 4.8,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Long context', 'Vision', 'Nuance']),
    use_cases: JSON.stringify(['Analysis', 'Writing', 'Coding']),
    tags: JSON.stringify(['llm', 'anthropic', 'safe']),
    limitations: JSON.stringify(['Rate limits'])
  },
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    description: 'AI-powered answer engine for research and discovery.',
    category_id: 'llms',
    website: 'https://perplexity.ai',
    pricing_type: 'freemium',
    rating: 4.8,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Real-time search', 'Citations', 'Pro search']),
    use_cases: JSON.stringify(['Academic research', 'Fact checking']),
    tags: JSON.stringify(['search', 'research', 'citations']),
    limitations: JSON.stringify(['May hallucinate sources rarely'])
  },
  {
    id: 'grok',
    name: 'Grok',
    description: 'An AI modeled after the Hitchhiker\'s Guide to the Galaxy.',
    category_id: 'llms',
    website: 'https://grok.x.ai',
    pricing_type: 'paid',
    rating: 4.6,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Real-time X data', 'Witty mode', 'Uncensored']),
    use_cases: JSON.stringify(['News analysis', 'Entertainment', 'Research']),
    tags: JSON.stringify(['llm', 'x', 'real-time']),
    limitations: JSON.stringify(['Requires X Premium+'])
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    description: 'Advanced open-source LLM with strong coding capabilities.',
    category_id: 'llms',
    website: 'https://deepseek.com',
    pricing_type: 'free',
    rating: 4.7,
    is_popular: 0,
    is_new: 1,
    features: JSON.stringify(['Open source', 'Coding focus', 'Long context']),
    use_cases: JSON.stringify(['Development', 'Local deployment']),
    tags: JSON.stringify(['llm', 'open-source', 'coding']),
    limitations: JSON.stringify(['Technical setup for local'])
  },

  // Data
  {
    id: 'julius-ai',
    name: 'Julius AI',
    description: 'Your personal AI data analyst.',
    category_id: 'data',
    website: 'https://julius.ai',
    pricing_type: 'freemium',
    rating: 4.7,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Data visualization', 'Analysis', 'Chat with data']),
    use_cases: JSON.stringify(['Business intelligence', 'Data science']),
    tags: JSON.stringify(['data', 'analytics', 'visualization']),
    limitations: JSON.stringify(['Requires clean data'])
  },
  {
    id: 'tableau-ai',
    name: 'Tableau AI',
    description: 'AI-powered analytics for everyone.',
    category_id: 'data',
    website: 'https://tableau.com',
    pricing_type: 'paid',
    rating: 4.6,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Predictive insights', 'Smart stories', 'Data prep']),
    use_cases: JSON.stringify(['Enterprise analytics', 'Reporting']),
    tags: JSON.stringify(['analytics', 'enterprise', 'visualization']),
    limitations: JSON.stringify(['Complex setup'])
  },
  {
    id: 'powerbi-copilot',
    name: 'Power BI Copilot',
    description: 'Create reports and find insights with AI.',
    category_id: 'data',
    website: 'https://powerbi.microsoft.com',
    pricing_type: 'paid',
    rating: 4.7,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Report generation', 'DAX assistance', 'Summaries']),
    use_cases: JSON.stringify(['Business reporting', 'Data analysis']),
    tags: JSON.stringify(['microsoft', 'analytics', 'business']),
    limitations: JSON.stringify(['Requires Fabric capacity'])
  },
  {
    id: 'akkio',
    name: 'Akkio',
    description: 'Generative AI for analytics and predictive modeling.',
    category_id: 'data',
    website: 'https://akkio.com',
    pricing_type: 'freemium',
    rating: 4.5,
    is_popular: 0,
    is_new: 1,
    features: JSON.stringify(['Predictive modeling', 'Chat explore', 'Forecasting']),
    use_cases: JSON.stringify(['Marketing attribution', 'Sales forecasting']),
    tags: JSON.stringify(['ml', 'no-code', 'predictive']),
    limitations: JSON.stringify(['Data size limits'])
  },
  {
    id: 'polymer',
    name: 'Polymer',
    description: 'Turn spreadsheets into smart apps with AI.',
    category_id: 'data',
    website: 'https://polymersearch.com',
    pricing_type: 'freemium',
    rating: 4.6,
    is_popular: 0,
    is_new: 1,
    features: JSON.stringify(['Interactive dashboards', 'AI insights', 'Embedding']),
    use_cases: JSON.stringify(['Client portals', 'Internal tools']),
    tags: JSON.stringify(['visualization', 'no-code', 'spreadsheets']),
    limitations: JSON.stringify(['Limited customizations'])
  },

  // Communication
  {
    id: 'slack-ai',
    name: 'Slack AI',
    description: 'Native AI features for Slack.',
    category_id: 'communication',
    website: 'https://slack.com',
    pricing_type: 'paid',
    rating: 4.5,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Thread summaries', 'Search', 'Recaps']),
    use_cases: JSON.stringify(['Team collaboration', 'Knowledge management']),
    tags: JSON.stringify(['communication', 'team', 'productivity']),
    limitations: JSON.stringify(['Enterprise plans only'])
  },
  {
    id: 'teams-premium',
    name: 'Microsoft Teams Premium',
    description: 'AI-powered meetings and collaboration.',
    category_id: 'communication',
    website: 'https://microsoft.com/teams',
    pricing_type: 'paid',
    rating: 4.4,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Intelligent recap', 'Live translation', 'Chapters']),
    use_cases: JSON.stringify(['Corporate meetings', 'Global teams']),
    tags: JSON.stringify(['microsoft', 'meetings', 'enterprise']),
    limitations: JSON.stringify(['Requires license'])
  },
  {
    id: 'zoom-ai',
    name: 'Zoom AI Companion',
    description: 'AI assistant for your Zoom meetings.',
    category_id: 'communication',
    website: 'https://zoom.us',
    pricing_type: 'freemium',
    rating: 4.5,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Meeting summary', 'Chat compose', 'Questions']),
    use_cases: JSON.stringify(['Remote work', 'Webinars']),
    tags: JSON.stringify(['video', 'meetings', 'assistant']),
    limitations: JSON.stringify(['Host must enable'])
  },
  {
    id: 'loom-ai',
    name: 'Loom AI',
    description: 'Record video messages with AI enhancements.',
    category_id: 'communication',
    website: 'https://loom.com',
    pricing_type: 'freemium',
    rating: 4.7,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Auto titles', 'Summaries', 'Silence removal']),
    use_cases: JSON.stringify(['Async updates', 'Demos', 'Feedback']),
    tags: JSON.stringify(['video', 'async', 'messaging']),
    limitations: JSON.stringify(['Video length limits'])
  },
  {
    id: 'crystal',
    name: 'Crystal',
    description: 'Personality AI for better communication.',
    category_id: 'communication',
    website: 'https://crystalknows.com',
    pricing_type: 'freemium',
    rating: 4.6,
    is_popular: 0,
    is_new: 0,
    features: JSON.stringify(['Personality insights', 'Email coaching', 'Profiles']),
    use_cases: JSON.stringify(['Sales', 'Hiring', 'Management']),
    tags: JSON.stringify(['psychology', 'sales', 'people']),
    limitations: JSON.stringify(['Privacy concerns for some'])
  },

  // Research
  {
    id: 'consensus',
    name: 'Consensus',
    description: 'AI search engine for research papers.',
    category_id: 'research',
    website: 'https://consensus.app',
    pricing_type: 'freemium',
    rating: 4.7,
    is_popular: 0,
    is_new: 1,
    features: JSON.stringify(['Scientific search', 'Summaries', 'Citations']),
    use_cases: JSON.stringify(['Academic writing', 'Literature review']),
    tags: JSON.stringify(['research', 'science', 'academic']),
    limitations: JSON.stringify(['Academic focus only'])
  },
  {
    id: 'elicit',
    name: 'Elicit',
    description: 'Analyze research papers at superhuman speed.',
    category_id: 'research',
    website: 'https://elicit.com',
    pricing_type: 'freemium',
    rating: 4.8,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Literature review', 'Data extraction', 'Synthesis']),
    use_cases: JSON.stringify(['Research', 'Systematic reviews']),
    tags: JSON.stringify(['research', 'analysis', 'papers']),
    limitations: JSON.stringify(['Credit system'])
  },
  {
    id: 'scite',
    name: 'Scite',
    description: 'See how research has been cited.',
    category_id: 'research',
    website: 'https://scite.ai',
    pricing_type: 'paid',
    rating: 4.6,
    is_popular: 0,
    is_new: 0,
    features: JSON.stringify(['Smart citations', 'Assistant', 'Reference check']),
    use_cases: JSON.stringify(['Fact checking', 'Writing', 'Evaluation']),
    tags: JSON.stringify(['citations', 'academic', 'verification']),
    limitations: JSON.stringify(['Subscription only'])
  },
  {
    id: 'researchrabbit',
    name: 'ResearchRabbit',
    description: 'Spotify for research papers.',
    category_id: 'research',
    website: 'https://researchrabbit.ai',
    pricing_type: 'free',
    rating: 4.7,
    is_popular: 0,
    is_new: 0,
    features: JSON.stringify(['Visual discovery', 'Collections', 'Alerts']),
    use_cases: JSON.stringify(['Discovery', 'Mapping fields']),
    tags: JSON.stringify(['visualization', 'discovery', 'free']),
    limitations: JSON.stringify(['Visual interface learning curve'])
  },
  {
    id: 'scholarcy',
    name: 'Scholarcy',
    description: 'The AI-powered article summarizer.',
    category_id: 'research',
    website: 'https://scholarcy.com',
    pricing_type: 'freemium',
    rating: 4.5,
    is_popular: 0,
    is_new: 0,
    features: JSON.stringify(['Flashcards', 'Summary', 'Reference extraction']),
    use_cases: JSON.stringify(['Reading quickly', 'Study aids']),
    tags: JSON.stringify(['reading', 'summary', 'study']),
    limitations: JSON.stringify(['PDF focus'])
  },

  // Automation
  {
    id: 'zapier-ai',
    name: 'Zapier AI',
    description: 'Automate workflows with natural language.',
    category_id: 'automation',
    website: 'https://zapier.com',
    pricing_type: 'freemium',
    rating: 4.7,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Workflow building', 'Integration', 'Logic']),
    use_cases: JSON.stringify(['Process automation', 'Connectivity']),
    tags: JSON.stringify(['automation', 'workflow', 'productivity']),
    limitations: JSON.stringify(['Complex logic limits'])
  },
  {
    id: 'make',
    name: 'Make',
    description: 'Visual platform to design, build, and automate anything.',
    category_id: 'automation',
    website: 'https://make.com',
    pricing_type: 'freemium',
    rating: 4.8,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['Visual builder', 'Thousands of apps', 'AI assistant']),
    use_cases: JSON.stringify(['Complex workflows', 'Backend logic']),
    tags: JSON.stringify(['visual', 'powerful', 'integration']),
    limitations: JSON.stringify(['Learning curve'])
  },
  {
    id: 'bardeen',
    name: 'Bardeen',
    description: 'AI automation for your browser.',
    category_id: 'automation',
    website: 'https://bardeen.ai',
    pricing_type: 'freemium',
    rating: 4.7,
    is_popular: 1,
    is_new: 1,
    features: JSON.stringify(['Browser automation', 'Scraping', 'Meeting assistant']),
    use_cases: JSON.stringify(['Lead gen', 'Research', 'Data entry']),
    tags: JSON.stringify(['browser', 'scraping', 'productivity']),
    limitations: JSON.stringify(['Chrome only'])
  },
  {
    id: 'uipath',
    name: 'UiPath',
    description: 'Enterprise automation platform.',
    category_id: 'automation',
    website: 'https://uipath.com',
    pricing_type: 'paid',
    rating: 4.6,
    is_popular: 1,
    is_new: 0,
    features: JSON.stringify(['RPA', 'Document understanding', 'AI center']),
    use_cases: JSON.stringify(['Enterprise processes', 'Legacy systems']),
    tags: JSON.stringify(['enterprise', 'rpa', 'robust']),
    limitations: JSON.stringify(['Expensive'])
  },
  {
    id: 'levity',
    name: 'Levity',
    description: 'No-code AI workflow automation.',
    category_id: 'automation',
    website: 'https://levity.ai',
    pricing_type: 'paid',
    rating: 4.5,
    is_popular: 0,
    is_new: 1,
    features: JSON.stringify(['Image classification', 'Text classification', 'Email routing']),
    use_cases: JSON.stringify(['Support triage', 'Content moderation']),
    tags: JSON.stringify(['no-code', 'classification', 'ops']),
    limitations: JSON.stringify(['Specific use cases'])
  }
];

function seedDatabase() {
  const stmt = db.prepare(`INSERT OR REPLACE INTO tools (
    id, name, description, category_id, website, pricing_type, rating, is_popular, is_new, features, use_cases, tags, limitations
  ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`);

  initialTools.forEach(tool => {
    stmt.run(
      tool.id, tool.name, tool.description, tool.category_id, tool.website,
      tool.pricing_type, tool.rating, tool.is_popular, tool.is_new,
      tool.features, tool.use_cases, tool.tags, tool.limitations
    );
  });
  stmt.finalize();
  console.log("Database seeded with massive content!");
}

// API Routes

// Get All Tools
app.get('/api/tools', (req, res) => {
  const { search, category } = req.query;
  let query = "SELECT * FROM tools WHERE 1=1";
  const params = [];

  if (category && category !== 'all') {
    query += " AND category_id = ?";
    params.push(category);
  }

  if (search) {
    query += " AND (name LIKE ? OR description LIKE ?)";
    params.push(`%${search}%`, `%${search}%`);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    // Parse JSON fields
    const tools = rows.map(row => ({
      ...row,
      features: row.features ? JSON.parse(row.features) : [],
      useCases: row.use_cases ? JSON.parse(row.use_cases) : [],
      tags: row.tags ? JSON.parse(row.tags) : [],
      limitations: row.limitations ? JSON.parse(row.limitations) : []
    }));
    res.json({ data: tools });
  });
});

// Get Single Tool
app.get('/api/tools/:id', (req, res) => {
  const { id } = req.params;
  db.get("SELECT * FROM tools WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    if (!row) {
      res.status(404).json({ error: "Tool not found" });
      return;
    }

    const tool = {
      ...row,
      features: row.features ? JSON.parse(row.features) : [],
      useCases: row.use_cases ? JSON.parse(row.use_cases) : [],
      tags: row.tags ? JSON.parse(row.tags) : [],
      limitations: row.limitations ? JSON.parse(row.limitations) : [],
      // Mock nested objects for frontend compatibility
      category: { id: row.category_id, name: row.category_id.charAt(0).toUpperCase() + row.category_id.slice(1), color: 'bg-blue-500' },
      pricing: {
        type: row.pricing_type,
        paidTier: { price: '$20', period: 'month', features: ['Pro Access'] },
        freeTier: { description: 'Basic access', limitations: ['Limited usage'] }
      },
      reviewCount: 1000 + Math.floor(Math.random() * 5000),
      accuracy: 9,
      easeOfUse: 9,
      performance: 9
    };

    res.json({ data: tool });
  });
});

// Add New Tool
app.post('/api/tools', (req, res) => {
  const { name, description, category_id, website, pricing_type } = req.body;
  const id = name.toLowerCase().replace(/\s+/g, '-');

  const sql = "INSERT INTO tools (id, name, description, category_id, website, pricing_type, rating, is_popular, is_new, features, use_cases, tags, limitations) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  const params = [
    id, name, description, category_id, website, pricing_type, 0, 0, 1,
    JSON.stringify([]), JSON.stringify([]), JSON.stringify([]), JSON.stringify([])
  ];

  db.run(sql, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: { id, ...req.body }
    });
  });
});

// Chat Endpoint
app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  let response = "I can help you find AI tools. Try asking for 'video editors' or 'coding assistants'.";

  const lowerMsg = message.toLowerCase();
  if (lowerMsg.includes('video')) response = "Top video tools include Runway ML, Synthesia, and Pika Labs.";
  else if (lowerMsg.includes('code') || lowerMsg.includes('dev')) response = "For coding, I highly recommend ChatGPT, GitHub Copilot, and Cursor.";
  else if (lowerMsg.includes('image') || lowerMsg.includes('art')) response = "Midjourney and DALL-E 3 are the leaders in AI image generation.";
  else if (lowerMsg.includes('write') || lowerMsg.includes('copy')) response = "Jasper and Copy.ai are great for marketing copy, while Grammarly helps with general writing.";

  setTimeout(() => {
    res.json({ response });
  }, 800);
});

// Only listen when running locally
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
