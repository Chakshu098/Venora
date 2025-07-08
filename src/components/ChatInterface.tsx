import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Send, X, Mic, MicOff, Minimize2, Maximize2 } from 'lucide-react';
import { GlassmorphicCard } from './GlassmorphicCard';
import { useStore } from '../store/useStore';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  agentId?: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
  selectedAgentId?: string;
}

export const ChatInterface = ({ isOpen, onClose, selectedAgentId }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { agents } = useStore();

  const selectedAgent = agents.find(agent => agent.id === selectedAgentId);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (selectedAgent && messages.length === 0) {
      // Add welcome message from selected agent
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        content: `Hello! I'm ${selectedAgent.name}, your ${selectedAgent.role}. How can I help you today?`,
        sender: 'agent',
        agentId: selectedAgent.id,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [selectedAgent]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate agent response
    setTimeout(() => {
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAgentResponse(inputValue, selectedAgent),
        sender: 'agent',
        agentId: selectedAgent?.id,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, agentResponse]);
    }, 1000);
  };

  const generateAgentResponse = (userInput: string, agent: any) => {
    const responses = {
      '1': [ // Team Leader
        "I'll coordinate with the team to handle that request.",
        "Let me assign this task to the appropriate team member.",
        "I'll make sure this gets prioritized in our workflow."
      ],
      '2': [ // Developer
        "I can help you with that technical implementation.",
        "Let me check the codebase and provide a solution.",
        "I'll start working on that feature right away."
      ],
      '3': [ // Manager
        "I'll review our current operations and optimize accordingly.",
        "Let me analyze the data and provide strategic recommendations.",
        "I'll ensure this aligns with our business objectives."
      ],
      '4': [ // Marketing
        "I'll create a campaign strategy for that.",
        "Let me analyze the market trends and target audience.",
        "I'll optimize our marketing channels for better reach."
      ],
      '5': [ // Customer Service
        "I'll handle that customer inquiry immediately.",
        "Let me check our support tickets and resolve any issues.",
        "I'll ensure all customers receive excellent service."
      ],
      '6': [ // Problem Solver
        "I'll investigate that issue and find a solution.",
        "Let me troubleshoot and optimize the system.",
        "I'll implement a fix to prevent future problems."
      ],
      '7': [ // Strategy
        "I'll develop a strategic plan for that initiative.",
        "Let me analyze the competitive landscape and opportunities.",
        "I'll create a roadmap for sustainable growth."
      ]
    };

    const agentResponses = responses[agent?.id as keyof typeof responses] || [
      "I understand your request and I'm working on it.",
      "Let me help you with that right away.",
      "I'm here to assist you with whatever you need."
    ];

    return agentResponses[Math.floor(Math.random() * agentResponses.length)];
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    // Simulate voice recognition
    if (!isListening) {
      setTimeout(() => {
        setIsListening(false);
        setInputValue("Voice command recognized");
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 20 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <GlassmorphicCard className={`${isMinimized ? 'w-80 h-16' : 'w-96 h-[500px]'} transition-all duration-300`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#FFD700]/20">
            <div className="flex items-center gap-3">
              {selectedAgent && (
                <>
                  <span className="text-2xl">{selectedAgent.avatar}</span>
                  <div>
                    <h3 className="font-bold text-[#2C2C2E] text-sm">{selectedAgent.name}</h3>
                    <p className="text-xs text-[#8B5E3C]">{selectedAgent.role}</p>
                  </div>
                </>
              )}
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-[#FFD700]/20 rounded-lg transition-colors"
              >
                {isMinimized ? <Maximize2 size={16} /> : <Minimize2 size={16} />}
              </button>
              <button
                onClick={onClose}
                className="p-1 hover:bg-red-500/20 rounded-lg transition-colors"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-[#FFD700] to-[#F4A261] text-white'
                          : 'bg-[#FAF8F4] text-[#2C2C2E] border border-[#D7C0AE]/30'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-white/70' : 'text-[#8B5E3C]/70'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-[#FFD700]/20">
                <div className="flex items-center gap-2">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message..."
                      className="w-full px-4 py-2 bg-[#FAF8F4] border border-[#D7C0AE]/30
                               rounded-xl focus:outline-none focus:border-[#FFD700]/50
                               text-[#2C2C2E] placeholder-[#8B5E3C]/60 text-sm"
                    />
                  </div>
                  <button
                    onClick={handleVoiceToggle}
                    className={`p-2 rounded-xl transition-all duration-300 ${
                      isListening 
                        ? 'bg-red-500 text-white animate-pulse' 
                        : 'bg-[#D7C0AE] text-[#2C2C2E] hover:bg-[#8B5E3C] hover:text-white'
                    }`}
                  >
                    {isListening ? <MicOff size={16} /> : <Mic size={16} />}
                  </button>
                  <button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                    className="p-2 bg-gradient-to-r from-[#FFD700] to-[#F4A261] text-white
                             rounded-xl hover:shadow-lg transition-all duration-300
                             disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send size={16} />
                  </button>
                </div>
              </div>
            </>
          )}
        </GlassmorphicCard>
      </motion.div>
    </AnimatePresence>
  );
};