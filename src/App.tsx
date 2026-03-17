import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatWindow } from './components/ChatWindow';
import { StatCard } from './components/StatCard';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InfoPage } from './components/InfoPage';
import { LiveChatWidget } from './components/LiveChatWidget';
import { OnboardingTour } from './components/OnboardingTour';
import { MOCK_LEADS, Lead } from './constants';
import { View } from './types';
import { ShieldCheck, TrendingUp, Briefcase, Users, Calendar, FileText, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activeLead, setActiveLead] = useState<Lead>(MOCK_LEADS[0]);
  const [activeView, setActiveView] = useState<View>('dashboard');

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="p-8 space-y-8"
          >
            {/* Stats Overview */}
            <div id="tour-stats" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <StatCard 
                title="GCI Protected" 
                value="$4.2M" 
                subtitle="vs last quarter" 
                trend="+12.4%"
                icon={<ShieldCheck size={48} />}
              />
              <StatCard 
                title="Pipeline Value" 
                value="$184.5M" 
                subtitle="Active mandates" 
                trend="+5.2%"
                icon={<TrendingUp size={48} />}
              />
              <StatCard 
                title="Avg. Transaction" 
                value="$12.8M" 
                subtitle="Premium tier" 
                trend="+2.1%"
                icon={<Briefcase size={48} />}
              />
            </div>

            {/* Engagement Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-luxury-gray border border-luxury-border rounded-3xl p-8 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                  <h3 className="text-xl serif text-navy">Recent Activity</h3>
                  <button className="text-[10px] uppercase tracking-widest text-gold hover:text-gold-light transition-colors font-bold">View All</button>
                </div>
                <div className="space-y-6">
                  <ActivityItem icon={<Users className="text-blue-600" />} title="New Lead Acquired" detail="Marcus Thorne expressed interest in 'Forest Hill Modern'" time="5m ago" />
                  <ActivityItem icon={<FileText className="text-gold" />} title="Contract Generated" detail="Purchase agreement for Yorkville Penthouse" time="1h ago" />
                  <ActivityItem icon={<Calendar className="text-emerald-600" />} title="Showing Scheduled" detail="Bridle Path Manor • Tomorrow at 2:00 PM" time="3h ago" />
                </div>
              </div>

              <div className="bg-luxury-gray border border-luxury-border rounded-3xl p-8 relative overflow-hidden group shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent pointer-events-none" />
                <h3 className="text-xl serif mb-4 text-navy">Market Intelligence</h3>
                <p className="text-sm text-navy/50 mb-6 leading-relaxed">
                  Toronto's luxury market is seeing a 4.2% uptick in off-market transactions this month. 
                  Focus on Bridle Path and Rosedale for maximum GCI protection.
                </p>
                <div className="flex gap-4">
                  <div className="flex-1 p-4 bg-navy/5 border border-luxury-border rounded-2xl">
                    <p className="text-[10px] uppercase tracking-widest text-navy/30 mb-1 font-bold">Hot Zone</p>
                    <p className="text-sm font-bold text-gold">Bridle Path</p>
                  </div>
                  <div className="flex-1 p-4 bg-navy/5 border border-luxury-border rounded-2xl">
                    <p className="text-[10px] uppercase tracking-widest text-navy/30 mb-1 font-bold">Demand</p>
                    <p className="text-sm font-bold text-emerald-600">High</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        );
      case 'messages':
        return (
          <div className="flex-1 flex overflow-hidden">
            <ChatWindow activeLead={activeLead} />
            <div className="w-80 border-l border-luxury-border bg-luxury-gray p-8 hidden xl:block overflow-y-auto">
              <h3 className="text-xs uppercase tracking-widest text-navy/40 mb-6 font-bold">Property Details</h3>
              <div className="aspect-[4/5] rounded-2xl bg-navy/5 border border-luxury-border mb-6 overflow-hidden relative group">
                <img 
                  src={`https://picsum.photos/seed/${activeLead.property.replace(/\s/g, '')}luxuryhouse/800/1000`} 
                  alt="Toronto Luxury Property" 
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-gray to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-lg serif font-medium text-navy">{activeLead.property}</p>
                  <p className="text-xs text-gold font-bold">{activeLead.value}</p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-navy/30 mb-2 font-bold">Lead Status</p>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-sm font-medium text-navy">{activeLead.status}</span>
                  </div>
                </div>
                <button className="w-full py-3 border border-gold/30 text-gold text-xs uppercase tracking-widest rounded-xl hover:bg-gold/5 transition-colors font-bold">
                  Generate Contract
                </button>
              </div>
            </div>
          </div>
        );
      case 'leads':
        return (
          <div className="p-8">
            <h2 className="text-3xl serif mb-8 text-navy">Lead Management</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {MOCK_LEADS.map(lead => (
                <div key={lead.id} className="bg-luxury-gray border border-luxury-border p-6 rounded-3xl flex justify-between items-center shadow-sm">
                  <div>
                    <h4 className="text-lg font-medium text-navy">{lead.name}</h4>
                    <p className="text-xs text-navy/40">{lead.property}</p>
                  </div>
                  <button 
                    onClick={() => { setActiveLead(lead); setActiveView('messages'); }}
                    className="px-4 py-2 bg-gold text-white text-xs font-bold rounded-xl"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'settings':
        return (
          <div className="p-8 max-w-2xl">
            <h2 className="text-3xl serif mb-8 text-navy">Account Settings</h2>
            <div className="space-y-6">
              <div className="p-6 bg-luxury-gray border border-luxury-border rounded-3xl shadow-sm">
                <h4 className="text-sm font-bold mb-4 text-navy">Profile Information</h4>
                <div className="space-y-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-navy/30 font-bold">Full Name</label>
                    <input type="text" defaultValue="Julian Thorne" className="bg-navy/5 border border-luxury-border rounded-xl p-3 text-sm text-navy focus:outline-none focus:border-gold/50" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest text-navy/30 font-bold">Email Address</label>
                    <input type="email" defaultValue="julian@argus-prestige.com" className="bg-navy/5 border border-luxury-border rounded-xl p-3 text-sm text-navy focus:outline-none focus:border-gold/50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'privacy':
      case 'terms':
      case 'dmca':
      case 'pipeda':
      case 'casl':
      case 'market-reports':
      case 'faqs':
      case 'api-docs':
      case 'security':
      case 'iso':
        return <InfoPage view={activeView} onBack={() => setActiveView('dashboard')} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-luxury-black text-navy selection:bg-gold/30">
      <Sidebar 
        activeLeadId={activeLead.id} 
        onSelectLead={setActiveLead} 
        activeView={activeView}
        onViewChange={setActiveView}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto scroll-smooth">
          <AnimatePresence mode="wait">
            {renderView()}
          </AnimatePresence>
          <Footer onViewChange={setActiveView} />
        </main>
      </div>

      <LiveChatWidget />
      <OnboardingTour />
    </div>
  );
}

const ActivityItem = ({ icon, title, detail, time }: { icon: React.ReactNode, title: string, detail: string, time: string }) => (
  <div className="flex gap-4 items-start group">
    <div className="w-10 h-10 rounded-xl bg-navy/5 border border-luxury-border flex items-center justify-center shrink-0 group-hover:border-gold/30 transition-colors">
      {icon}
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex justify-between items-start mb-1">
        <p className="text-sm font-medium text-navy/90">{title}</p>
        <span className="text-[10px] text-navy/30 uppercase tracking-tighter font-bold">{time}</span>
      </div>
      <p className="text-xs text-navy/40 truncate">{detail}</p>
    </div>
  </div>
);
