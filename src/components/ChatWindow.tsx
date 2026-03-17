import React, { useState, useRef, useEffect } from 'react';
import { Send, User, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import { Lead, SYSTEM_INSTRUCTION } from '../constants';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatWindowProps {
  activeLead: Lead;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ activeLead }) => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: `Welcome back. I am monitoring the activity for ${activeLead.name}. How shall we proceed with the ${activeLead.property} inquiry?` }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [...messages, userMessage].map(m => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        })),
        config: {
          systemInstruction: SYSTEM_INSTRUCTION
        }
      });

      const text = response.text;
      
      if (text) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: text 
        }]);
      } else {
        throw new Error('Empty response from AI');
      }
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: `I apologize, but I encountered a technical interruption: ${errorMessage}. Please ensure the platform configuration is correct.` 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="tour-chat" className="flex-1 flex flex-col bg-luxury-black relative">
      {/* Chat Header */}
      <div className="p-6 border-b border-luxury-border flex justify-between items-center bg-luxury-gray/80 backdrop-blur-md sticky top-0 z-10">
        <div>
          <h2 className="text-xl serif font-medium text-navy">{activeLead.name}</h2>
          <p className="text-xs text-navy/40">{activeLead.property} • {activeLead.value}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-bold">Live Monitoring</span>
        </div>
      </div>

      {/* Messages Area */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-4 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                  msg.role === 'user' ? 'bg-gold/10 border-gold/30 text-gold' : 'bg-navy/5 border-navy/10 text-navy/50'
                }`}>
                  {msg.role === 'user' ? <User size={16} /> : <ShieldCheck size={16} />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-gold text-white font-medium rounded-tr-none shadow-sm' 
                    : 'bg-luxury-gray border border-luxury-border text-navy/90 rounded-tl-none shadow-sm'
                }`}>
                  {msg.content}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-navy/5 border border-navy/10 flex items-center justify-center text-navy/50">
              <ShieldCheck size={16} className="animate-pulse" />
            </div>
            <div className="bg-luxury-gray border border-luxury-border p-4 rounded-2xl rounded-tl-none shadow-sm">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-gold/50 rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-gold/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-gold/50 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-luxury-black">
        <div className="relative max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Instruct ARGUS AI..."
            className="w-full bg-luxury-gray border border-luxury-border rounded-2xl py-4 pl-6 pr-16 text-sm text-navy focus:outline-none focus:border-gold/50 transition-colors shadow-sm"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 bottom-2 px-4 bg-gold text-white rounded-xl hover:bg-gold/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-center text-[10px] text-navy/20 mt-4 uppercase tracking-[0.2em] font-bold">
          Powered by OpenRouter • High Precision Intelligence
        </p>
      </div>
    </div>
  );
};
