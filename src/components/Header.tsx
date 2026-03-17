import React from 'react';
import { Search, Bell, User, Globe, ShieldCheck } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="h-20 border-b border-luxury-border bg-luxury-gray/50 backdrop-blur-xl flex items-center justify-between px-8 sticky top-0 z-50">
      <div className="flex items-center gap-8 flex-1 max-w-2xl">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30 group-focus-within:text-gold transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search properties, leads, or contracts..." 
            className="w-full bg-navy/5 border border-luxury-border rounded-full py-2.5 pl-12 pr-6 text-sm text-navy focus:outline-none focus:border-gold/50 focus:bg-navy/10 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold uppercase tracking-widest">
          <Globe size={12} />
          Toronto Elite
        </div>
        
        <button className="relative p-2 text-navy/50 hover:text-navy transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-gold rounded-full border-2 border-luxury-gray" />
        </button>

        <div className="h-8 w-px bg-luxury-border mx-2" />

        <button className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full hover:bg-navy/5 transition-colors group">
          <div className="text-right hidden sm:block">
            <p className="text-xs font-semibold text-navy group-hover:text-gold transition-colors">Julian Thorne</p>
            <p className="text-[10px] text-navy/40 uppercase tracking-tighter">Principal Broker</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-light p-0.5">
            <div className="w-full h-full rounded-full bg-luxury-gray flex items-center justify-center overflow-hidden">
              <User size={20} className="text-gold" />
            </div>
          </div>
        </button>
      </div>
    </header>
  );
};
