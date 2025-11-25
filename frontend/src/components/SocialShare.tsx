import React, { useState } from 'react';
import { Share2, Twitter, Facebook, Linkedin, Link, Check } from 'lucide-react';

interface SocialShareProps {
  toolName: string;
  toolUrl: string;
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ toolName, toolUrl, className = '' }) => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const shareUrl = `${window.location.origin}${toolUrl}`;
  const shareText = `Check out ${toolName} on AI Compass - the best AI tool discovery platform!`;

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-colors"
      >
        <Share2 className="w-4 h-4" />
      </button>

      {isOpen && (
        <>
          <div className="absolute right-0 top-10 bg-white dark:bg-dark-800 rounded-lg shadow-lg border border-gray-200 dark:border-dark-700 p-2 z-10 min-w-[200px]">
            <div className="space-y-1">
              {shareLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${link.color}`}
                >
                  <link.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">Share on {link.name}</span>
                </a>
              ))}
              <button
                onClick={copyToClipboard}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 w-full"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Link className="w-4 h-4" />
                    <span className="text-sm font-medium">Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>
          <div
            className="fixed inset-0 z-0"
            onClick={() => setIsOpen(false)}
          ></div>
        </>
      )}
    </div>
  );
};

export default SocialShare;
