import React from 'react';
import { LayoutDashboard, MessageSquare, Users, Settings, LogOut, ShieldCheck } from 'lucide-react';
import { Lead, MOCK_LEADS } from '../constants';
import { View } from '../types';

interface SidebarProps {
  activeLeadId?: string;
  onSelectLead: (lead: Lead) => void;
  activeView: View;
  onViewChange: (view: View) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeLeadId, onSelectLead, activeView, onViewChange }) => {
  return (
    <div className="w-80 h-full border-r border-luxury-border flex flex-col bg-luxury-black">
      <div className="p-8">
        <h1 className="text-2xl font-bold tracking-tighter serif flex items-center gap-2">
          <ShieldCheck className="text-gold w-8 h-8" />
          ARGUS
        </h1>
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mt-1">Prestige Management</p>
      </div>

      <nav id="tour-nav" className="px-4 space-y-1 mb-8">
        <NavItem 
          icon={<LayoutDashboard size={18} />} 
          label="Dashboard" 
          active={activeView === 'dashboard'} 
          onClick={() => onViewChange('dashboard')}
        />
        <NavItem 
          icon={<MessageSquare size={18} />} 
          label="Messages" 
          active={activeView === 'messages'} 
          onClick={() => onViewChange('messages')}
        />
        <NavItem 
          icon={<Users size={18} />} 
          label="Leads" 
          active={activeView === 'leads'} 
          onClick={() => onViewChange('leads')}
        />
        <NavItem 
          icon={<Settings size={18} />} 
          label="Settings" 
          active={activeView === 'settings'} 
          onClick={() => onViewChange('settings')}
        />
      </nav>

      <div id="tour-leads" className="flex-1 px-4 overflow-y-auto">
        <p className="text-[10px] uppercase tracking-widest text-white/30 px-4 mb-4">Recent Leads</p>
        <div className="space-y-2">
          {MOCK_LEADS.map((lead) => (
            <button
              key={lead.id}
              onClick={() => {
                onSelectLead(lead);
                onViewChange('messages');
              }}
              className={`w-full text-left p-4 rounded-xl transition-all duration-300 border ${
                activeLeadId === lead.id && activeView === 'messages'
                  ? 'bg-white/5 border-gold/30' 
                  : 'border-transparent hover:bg-white/5'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="text-sm font-medium text-white/90">{lead.name}</span>
                <span className="text-[10px] text-white/40">{lead.lastActive}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-white/50 truncate max-w-[120px]">{lead.property}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-gold/10 text-gold border border-gold/20">
                  {lead.value}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 border-t border-luxury-border">
        <button className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm w-full">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

const NavItem = ({ icon, label, active = false, onClick }: { icon: React.ReactNode, label: string, active?: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
      active ? 'bg-gold text-luxury-black font-semibold shadow-[0_0_20px_rgba(212,175,55,0.2)]' : 'text-white/60 hover:text-white hover:bg-white/5'
    }`}
  >
    {icon}
    <span className="text-sm tracking-wide">{label}</span>
  </button>
);
