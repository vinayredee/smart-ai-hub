import { AITool } from '../types';
import { aiTools } from '../data/aiTools';

// Use frontend data instead of broken backend API
export const fetchTools = async (search?: string, category?: string): Promise<AITool[]> => {
    // Simulate async for consistency
    await new Promise(resolve => setTimeout(resolve, 100));

    let filtered = aiTools;

    // Filter by category
    if (category) {
        filtered = filtered.filter(tool => tool.category.id === category);
    }

    // Filter by search
    if (search) {
        const searchLower = search.toLowerCase();
        filtered = filtered.filter(tool =>
            tool.name.toLowerCase().includes(searchLower) ||
            tool.description.toLowerCase().includes(searchLower) ||
            tool.category.name.toLowerCase().includes(searchLower)
        );
    }

    return filtered;
};

export const fetchToolById = async (id: string): Promise<AITool> => {
    // Simulate async
    await new Promise(resolve => setTimeout(resolve, 100));

    const tool = aiTools.find(t => t.id === id);
    if (!tool) {
        throw new Error('Tool not found');
    }
    return tool;
};

export const sendChatMessage = async (message: string): Promise<string> => {
    // Simulate async
    await new Promise(resolve => setTimeout(resolve, 500));

    // Simple AI responses
    const responses: Record<string, string> = {
        'video': "For video editing, I recommend checking out RunwayML, Descript, or Pictory. They all have AI-powered features for video creation and editing!",
        'code': "For coding assistance, try GitHub Copilot, Cursor AI, or Tabnine. They're excellent AI-powered coding assistants!",
        'content': "For content creation, check out Jasper, Copy.ai, or Writesonic. They're great for generating marketing copy, blog posts, and more!",
        'default': "I can help you find AI tools! Try asking about specific use cases like 'video editing', 'coding', 'content creation', or browse our categories."
    };

    const messageLower = message.toLowerCase();
    if (messageLower.includes('video')) return responses.video;
    if (messageLower.includes('code') || messageLower.includes('coding')) return responses.code;
    if (messageLower.includes('content') || messageLower.includes('writing')) return responses.content;

    return responses.default;
};

export const submitTool = async (toolData: any) => {
    // Simulate async
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true, message: 'Tool submitted successfully!' };
};
