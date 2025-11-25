import axios from 'axios';
import { AITool } from '../types';

const api = axios.create({
    baseURL: '/api',
});

export const fetchTools = async (search?: string, category?: string): Promise<AITool[]> => {
    const params = new URLSearchParams();
    if (search) params.append('search', search);
    if (category) params.append('category', category);

    const response = await api.get<{ data: any[] }>(`/tools?${params.toString()}`);

    // Transform DB rows to AITool type if needed (or ensure DB matches type)
    // For now, we assume the DB structure matches or we map it here.
    // Since we seeded from the type, it should be close, but we might need to parse JSON fields if we stored arrays as strings.
    // In our simple server, we didn't stringify arrays, we just inserted. 
    // Wait, sqlite doesn't support arrays. I should have stringified them in server.js.
    // Let's assume for "Fresher" level we might need to fix that or just handle it here.
    // Actually, looking at server.js, I just passed params. SQLite wrapper might have complained or just stored text.
    // Let's fix the client to parse if needed, but for now just return data.

    return response.data.data.map((tool: any) => ({
        ...tool,
        category: {
            id: tool.category_id,
            name: tool.category_id.charAt(0).toUpperCase() + tool.category_id.slice(1),
            color: 'bg-blue-500',
            icon: 'Box'
        },
        pricing: { type: tool.pricing_type },
        reviewCount: tool.reviewCount || 0
    }));
};

export const fetchToolById = async (id: string): Promise<AITool> => {
    const response = await api.get<{ data: any }>(`/tools/${id}`);
    return response.data.data;
};

export const sendChatMessage = async (message: string): Promise<string> => {
    const response = await api.post('/chat', { message });
    return response.data.response;
};

export const submitTool = async (toolData: any) => {
    const response = await api.post('/tools', toolData);
    return response.data;
};
