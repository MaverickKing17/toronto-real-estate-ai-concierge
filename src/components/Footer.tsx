import React from 'react';
import { Shield, Globe, Lock, Info, ExternalLink, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-black border-t border-luxury-border pt-16 pb-8 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <Shield className="text-gold w-6 h-6" />
            <span className="text-xl font-bold serif tracking-tighter">ARGUS</span>
          </div>
          <p className="text-sm text-navy/50 leading-relaxed">
            The definitive platform for Toronto's luxury real estate sector. 
            Empowering brokers with high-precision intelligence and GCI protection.
          </p>
          <div className="flex items-center gap-3 text-navy/40 text-xs">
            <MapPin size={14} className="text-gold" />
            Bay Street, Toronto, ON M5H 2Y4
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6">Legal & Compliance</h4>
          <ul className="space-y-4">
            <FooterLink label="Privacy Policy" />
            <FooterLink label="Terms of Service" />
            <FooterLink label="DMCA Notice" />
            <FooterLink label="PIPEDA Compliance" />
            <FooterLink label="CASL Policy" />
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6">Resources</h4>
          <ul className="space-y-4">
            <FooterLink label="Market Reports" />
            <FooterLink label="Broker FAQs" />
            <FooterLink label="API Documentation" />
            <FooterLink label="Security Whitepaper" />
            <FooterLink label="ISO Certification" />
          </ul>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold font-bold mb-6">Industry Standards</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-navy/5 border border-luxury-border rounded-xl flex flex-col items-center justify-center gap-2">
              <span className="text-[10px] font-bold text-navy/60">ISO 27001</span>
              <div className="w-6 h-1 bg-gold/30 rounded-full" />
            </div>
            <div className="p-3 bg-navy/5 border border-luxury-border rounded-xl flex flex-col items-center justify-center gap-2">
              <span className="text-[10px] font-bold text-navy/60">PIPEDA</span>
              <div className="w-6 h-1 bg-gold/30 rounded-full" />
            </div>
            <div className="p-3 bg-navy/5 border border-luxury-border rounded-xl flex flex-col items-center justify-center gap-2">
              <span className="text-[10px] font-bold text-navy/60">CASL</span>
              <div className="w-6 h-1 bg-gold/30 rounded-full" />
            </div>
            <div className="p-3 bg-navy/5 border border-luxury-border rounded-xl flex flex-col items-center justify-center gap-2">
              <span className="text-[10px] font-bold text-navy/60">GDPR</span>
              <div className="w-6 h-1 bg-gold/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-luxury-border flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-navy/30 uppercase tracking-widest">
          © {currentYear} ARGUS PRESTIGE MANAGEMENT INC. ALL RIGHTS RESERVED.
        </p>
        <div className="flex items-center gap-8">
          <p className="text-[10px] text-navy/30 uppercase tracking-widest flex items-center gap-2">
            <Lock size={12} className="text-gold" />
            Bank-Grade Encryption
          </p>
          <p className="text-[10px] text-navy/30 uppercase tracking-widest flex items-center gap-2">
            <Globe size={12} className="text-gold" />
            Toronto, Canada
          </p>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-[9px] text-navy/20 max-w-3xl mx-auto leading-relaxed italic">
          Disclaimer: Real estate market data is provided for informational purposes only. ARGUS does not guarantee the accuracy of pipeline valuations. All GCI projections are estimates based on current market trends and historical performance.
        </p>
      </div>
    </footer>
  );
};

const FooterLink = ({ label }: { label: string }) => (
  <li>
    <a href="#" className="text-xs text-navy/40 hover:text-gold transition-colors flex items-center gap-2 group">
      {label}
      <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  </li>
);
