import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({ role: m.role, content: m.content })),
          systemInstruction: SYSTEM_INSTRUCTION
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]) {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: data.choices[0].message.content 
        }]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: "I apologize, but I encountered a technical interruption. Please ensure your OpenRouter API key is correctly configured." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="tour-chat" className="flex-1 flex flex-col bg-luxury-black relative">
      {/* Chat Header */}
      <div className="p-6 border-b border-luxury-border flex justify-between items-center bg-luxury-black/80 backdrop-blur-md sticky top-0 z-10">
        <div>
          <h2 className="text-xl serif font-medium">{activeLead.name}</h2>
          <p className="text-xs text-white/40">{activeLead.property} • {activeLead.value}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[10px] uppercase tracking-widest text-emerald-500 font-semibold">Live Monitoring</span>
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
                  msg.role === 'user' ? 'bg-gold/10 border-gold/30 text-gold' : 'bg-white/5 border-white/10 text-white/50'
                }`}>
                  {msg.role === 'user' ? <User size={16} /> : <ShieldCheck size={16} />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-gold text-luxury-black font-medium rounded-tr-none' 
                    : 'bg-luxury-gray border border-luxury-border text-white/90 rounded-tl-none'
                }`}>
                  {msg.content}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50">
              <ShieldCheck size={16} className="animate-pulse" />
            </div>
            <div className="bg-luxury-gray border border-luxury-border p-4 rounded-2xl rounded-tl-none">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-gold/50 rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-gold/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-gold/50 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-6 bg-luxury-black">
        <div className="relative max-w-4xl mx-auto">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Instruct ARGUS AI..."
            className="w-full bg-luxury-gray border border-luxury-border rounded-2xl py-4 pl-6 pr-16 text-sm focus:outline-none focus:border-gold/50 transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-2 bottom-2 px-4 bg-gold text-luxury-black rounded-xl hover:bg-gold-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send size={18} />
          </button>
        </div>
        <p className="text-center text-[10px] text-white/20 mt-4 uppercase tracking-[0.2em]">
          Powered by OpenRouter • High Precision Intelligence
        </p>
      </div>
    </div>
  );
};
