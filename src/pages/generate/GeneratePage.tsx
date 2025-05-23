import React, { useState } from "react";
import {
  Send,
  Paperclip,
  Edit3,
  MessageSquare,
  Upload,
  Eye,
  Target,
  Image as ImageIcon,
  Loader2,
} from "lucide-react";

type Message = {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
};

type Props = {};

function GeneratePage({}: Props) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "I want to create a Medium-like blog application with:\n\n• A clean, minimalist home page layout\n• A featured/trending section\n• A clean reading experience page\n• Mobile-responsive design\n\nI'll use a clean color palette with:\n\n• Primary colors: Black and white for main text and background\n• Accent color: A subtle green (#1a8917) similar to Medium's branding\n• Typography: Clean sans-serif fonts (Inter for UI, Georgia for article text)\n• Subtle animations for page transitions and interactions\n\nLet me create this for you!",
      isUser: true,
      timestamp: new Date(),
    },
  ]);

  const [currentMessage, setCurrentMessage] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: currentMessage,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setCurrentMessage("");

    // Simulate AI response
    setIsGenerating(true);
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I'll create that for you! Generating a Medium-like blog application with all the features you requested...",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsGenerating(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-96 bg-gray-800 border-r border-gray-700 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            <span className="text-sm text-gray-300">write-like-medium</span>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className="space-y-2">
              <div className="text-xs text-gray-400">
                {message.isUser ? "You" : "auraNest"}
              </div>
              <div className="text-sm text-gray-200 leading-relaxed whitespace-pre-wrap">
                {message.content}
              </div>
            </div>
          ))}

          {isGenerating && (
            <div className="space-y-2">
              <div className="text-xs text-gray-400">auraNest</div>
              <div className="flex items-center gap-2 text-sm text-gray-200">
                <Loader2 size={16} className="animate-spin" />
                Working...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-700">
          <div className="bg-gray-700 rounded-lg p-3">
            <textarea
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask Lovable..."
              className="w-full bg-transparent text-sm text-white placeholder-gray-400 resize-none outline-none min-h-[60px] max-h-32"
              rows={3}
            />
            <div className="flex justify-between items-center mt-2">
              <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-600 rounded transition-colors">
                  <Paperclip size={16} className="text-gray-400" />
                </button>
                <button className="p-1 hover:bg-gray-600 rounded transition-colors">
                  <Edit3 size={16} className="text-gray-400" />
                </button>
              </div>
              <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-600 rounded transition-colors">
                  <MessageSquare size={16} className="text-gray-400" />
                </button>
                <button
                  onClick={handleSendMessage}
                  disabled={!currentMessage.trim() || isGenerating}
                  className="p-1 hover:bg-gray-600 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} className="text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Preview Area */}
        <div className="flex-1 flex items-center justify-center bg-gray-850">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto">
              <Loader2 size={24} className="text-gray-400 animate-spin" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-200">
                Spinning up preview...
              </h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  <Target size={16} />
                  <span>Select specific elements to modify</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <ImageIcon size={16} />
                  <span>Upload images as a reference</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Eye size={16} />
                  <span>Instantly preview your changes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
              <span>Working...</span>
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1.5 text-sm bg-gray-700 hover:bg-gray-600 rounded transition-colors">
                Writing index.css
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneratePage;
