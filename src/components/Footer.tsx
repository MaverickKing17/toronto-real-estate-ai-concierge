import React from 'react';
import { Shield, Globe, Lock, Info, ExternalLink, MapPin } from 'lucide-react';

import { View } from '../types';

interface FooterProps {
  onViewChange: (view: View) => void;
}

export const Footer: React.FC<FooterProps> = ({ onViewChange }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black border-t border-luxury-border pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Shield className="text-gold w-6 h-6" />
            <span className="text-xl font-bold serif tracking-tighter text-white">ARGUS</span>
          </div>
          <p className="text-sm text-white leading-relaxed">
            The definitive platform for Toronto's luxury real estate sector. 
            Empowering brokers with high-precision intelligence and GCI protection.
          </p>
          <div className="flex items-center gap-3 text-white/70 text-xs">
            <MapPin size={14} className="text-gold" />
            Bay Street, Toronto, ON M5H 2Y4
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6">Legal & Compliance</h4>
          <ul className="space-y-4">
            <FooterLink label="Privacy Policy" onClick={() => onViewChange('privacy')} />
            <FooterLink label="Terms of Service" onClick={() => onViewChange('terms')} />
            <FooterLink label="DMCA Notice" onClick={() => onViewChange('dmca')} />
            <FooterLink label="PIPEDA Compliance" onClick={() => onViewChange('pipeda')} />
            <FooterLink label="CASL Policy" onClick={() => onViewChange('casl')} />
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6">Resources</h4>
          <ul className="space-y-4">
            <FooterLink label="Market Reports" onClick={() => onViewChange('market-reports')} />
            <FooterLink label="Broker FAQs" onClick={() => onViewChange('faqs')} />
            <FooterLink label="API Documentation" onClick={() => onViewChange('api-docs')} />
            <FooterLink label="Security Whitepaper" onClick={() => onViewChange('security')} />
            <FooterLink label="ISO Certification" onClick={() => onViewChange('iso')} />
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6">Industry Standards</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-white/5 border border-luxury-border rounded-xl flex flex-col items-center justify-center gap-2">
              <span className="text-[10px] font-bold text-white/80">ISO 27001</span>
              <div className="w-6 h-1 bg-gold/30 rounded-full" />
            </div>
            <div className="p-3 bg-white/5 border border-luxury-border rounded-xl flex flex-col items-center justify-center gap-2">
              <span className="text-[10px] font-bold text-white/80">PIPEDA</span>
              <div className="w-6 h-1 bg-gold/30 rounded-full" />
            </div>
            <div className="p-3 bg-white/5 border border-luxury-border rounded-xl flex flex-col items-center justify-center gap-2">
              <span className="text-[10px] font-bold text-white/80">CASL</span>
              <div className="w-6 h-1 bg-gold/30 rounded-full" />
            </div>
            <div className="p-3 bg-white/5 border border-luxury-border rounded-xl flex flex-col items-center justify-center gap-2">
              <span className="text-[10px] font-bold text-white/80">GDPR</span>
              <div className="w-6 h-1 bg-gold/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-luxury-border flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-xs text-white/50 uppercase tracking-widest font-medium">
          © {currentYear} ARGUS PRESTIGE MANAGEMENT INC. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-8">
          <p className="text-xs text-white/50 uppercase tracking-widest flex items-center gap-2 font-medium">
            <Lock size={14} className="text-gold" />
            Bank-Grade Encryption
          </p>
          <p className="text-xs text-white/50 uppercase tracking-widest flex items-center gap-2 font-medium">
            <Globe size={14} className="text-gold" />
            Toronto, Canada
          </p>
        </div>
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-xs text-white/40 max-w-4xl mx-auto leading-relaxed italic font-medium">
          Disclaimer: Real estate market data is provided for informational purposes only. ARGUS does not guarantee the accuracy of pipeline valuations. All GCI projections are estimates based on current market trends and historical performance.
        </p>
      </div>
    </footer>
  );
};

const FooterLink = ({ label, onClick }: { label: string, onClick?: () => void }) => (
  <li>
    <button 
      onClick={onClick}
      className="text-xs text-white/60 hover:text-gold transition-colors flex items-center gap-2 group text-left"
    >
      {label}
      <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  </li>
);
