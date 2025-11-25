import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Mock analytics tracking - in production, replace with real analytics service
const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  // In production, this would send data to your analytics service
  console.log('Analytics Event:', eventName, properties);
  
  // Example: Google Analytics 4
  // gtag('event', eventName, properties);
  
  // Example: Mixpanel
  // mixpanel.track(eventName, properties);
};

const trackPageView = (path: string) => {
  console.log('Page View:', path);
  
  // Example: Google Analytics 4
  // gtag('config', 'GA_MEASUREMENT_ID', {
  //   page_path: path,
  // });
};

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  const trackToolView = (toolId: string, toolName: string) => {
    trackEvent('tool_viewed', {
      tool_id: toolId,
      tool_name: toolName,
      timestamp: new Date().toISOString()
    });
  };

  const trackToolComparison = (toolIds: string[]) => {
    trackEvent('tools_compared', {
      tool_ids: toolIds,
      comparison_count: toolIds.length,
      timestamp: new Date().toISOString()
    });
  };

  const trackToolFavorite = (toolId: string, toolName: string, action: 'added' | 'removed') => {
    trackEvent('tool_favorite', {
      tool_id: toolId,
      tool_name: toolName,
      action,
      timestamp: new Date().toISOString()
    });
  };

  const trackSearch = (query: string, resultsCount: number) => {
    trackEvent('search_performed', {
      query,
      results_count: resultsCount,
      timestamp: new Date().toISOString()
    });
  };

  const trackFilter = (filterType: string, filterValue: string) => {
    trackEvent('filter_applied', {
      filter_type: filterType,
      filter_value: filterValue,
      timestamp: new Date().toISOString()
    });
  };

  const trackChatInteraction = (message: string, responseType: string) => {
    trackEvent('chat_interaction', {
      message,
      response_type: responseType,
      timestamp: new Date().toISOString()
    });
  };

  const trackSocialShare = (platform: string, toolName: string) => {
    trackEvent('social_share', {
      platform,
      tool_name: toolName,
      timestamp: new Date().toISOString()
    });
  };

  return {
    trackToolView,
    trackToolComparison,
    trackToolFavorite,
    trackSearch,
    trackFilter,
    trackChatInteraction,
    trackSocialShare
  };
};
