import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { ChatWindow } from './components/ChatWindow';
import { StatCard } from './components/StatCard';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { InfoPage } from './components/InfoPage';
import { LiveChatWidget } from './components/LiveChatWidget';
import { OnboardingTour } from './components/OnboardingTour';
import { MOCK_LEADS, Lead, MOCK_PROPERTIES, PropertyListing } from './constants';
import { View } from './types';
import { ShieldCheck, TrendingUp, Briefcase, Users, Calendar, FileText, Activity, Zap, MapPin, Clock } from 'lucide-react';
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

            {/* Main Dashboard Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Activity & Intelligence */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-luxury-gray border border-luxury-border rounded-3xl p-8 shadow-sm relative overflow-hidden">
                  <div className="flex justify-between items-center mb-10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                        <Activity size={20} />
                      </div>
                      <h3 className="text-xl serif text-navy">Recent Activity</h3>
                    </div>
                    <button className="text-[10px] uppercase tracking-widest text-gold hover:text-gold-light transition-colors font-bold border-b border-gold/20 pb-1">View Full Audit</button>
                  </div>
                  <div className="relative space-y-8 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-luxury-border">
                    <ActivityItem icon={<Users size={18} className="text-blue-600" />} title="New Lead Acquired" detail="Marcus Thorne expressed interest in 'Forest Hill Modern'" time="5m ago" />
                    <ActivityItem icon={<FileText size={18} className="text-gold" />} title="Contract Generated" detail="Purchase agreement for Yorkville Penthouse" time="1h ago" />
                    <ActivityItem icon={<Calendar size={18} className="text-emerald-600" />} title="Showing Scheduled" detail="Bridle Path Manor • Tomorrow at 2:00 PM" time="3h ago" />
                  </div>
                </div>

                <div className="bg-luxury-gray border border-luxury-border rounded-3xl p-8 relative overflow-hidden group shadow-sm">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-navy/5 rounded-full -ml-24 -mb-24 blur-3xl pointer-events-none" />
                  
                  <div className="flex justify-between items-start mb-8">
                    <div className="space-y-1">
                      <h3 className="text-xl serif text-navy">Market Intelligence</h3>
                      <p className="text-xs text-navy/40 font-medium">Real-time Toronto Luxury Sector Analysis</p>
                    </div>
                    <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[9px] uppercase tracking-widest font-black text-emerald-600">Bullish Sentiment</span>
                    </div>
                  </div>

                  <p className="text-sm text-navy/60 mb-8 leading-relaxed max-w-2xl">
                    Toronto's luxury market is seeing a <span className="text-gold font-bold">4.2% uptick</span> in off-market transactions this month. 
                    Institutional capital is shifting toward <span className="text-navy font-bold">Bridle Path</span> and <span className="text-navy font-bold">Rosedale</span> for maximum GCI protection.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="p-6 bg-white/40 backdrop-blur-sm border border-luxury-border rounded-2xl group hover:border-gold/30 transition-all">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center text-gold">
                          <MapPin size={16} />
                        </div>
                        <p className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">Primary Hot Zone</p>
                      </div>
                      <p className="text-xl font-bold text-navy mb-1">Bridle Path</p>
                      <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">+12% Velocity Increase</p>
                    </div>

                    <div className="p-6 bg-white/40 backdrop-blur-sm border border-luxury-border rounded-2xl group hover:border-gold/30 transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                            <TrendingUp size={16} />
                          </div>
                          <p className="text-[10px] uppercase tracking-widest text-navy/40 font-bold">Market Demand</p>
                        </div>
                        <span className="text-xs font-black text-emerald-600">92%</span>
                      </div>
                      <div className="h-2 w-full bg-navy/5 rounded-full overflow-hidden mb-3">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: '92%' }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-emerald-500"
                        />
                      </div>
                      <p className="text-[10px] text-navy/40 font-medium">Elevated buyer competition in $15M+ tier</p>
                    </div>
                  </div>
                </div>

                {/* Deal Risk Monitor */}
                <div className="bg-luxury-gray border border-luxury-border rounded-3xl p-8 shadow-sm">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={20} className="text-emerald-500" />
                      <h3 className="text-lg serif text-navy">GCI Protection Alerts</h3>
                    </div>
                    <span className="text-[10px] text-navy/30 font-bold uppercase tracking-widest">2 Active Risks</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-red-500/5 border border-red-500/20 rounded-2xl">
                      <p className="text-[10px] uppercase tracking-widest text-red-500 font-black mb-1">High Risk</p>
                      <p className="text-sm font-bold text-navy mb-1">Yorkville Penthouse</p>
                      <p className="text-xs text-navy/50">Buyer financing contingency expiring in 24h. Recommend immediate follow-up.</p>
                    </div>
                    <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
                      <p className="text-[10px] uppercase tracking-widest text-amber-500 font-black mb-1">Medium Risk</p>
                      <p className="text-sm font-bold text-navy mb-1">Forest Hill Modern</p>
                      <p className="text-xs text-navy/50">Inspection report delayed. Potential impact on closing date.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Real-time Property Feed */}
              <div className="space-y-8">
                <div className="bg-luxury-gray border border-luxury-border rounded-3xl p-8 shadow-sm flex flex-col h-full">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-2">
                      <Zap size={18} className="text-gold" />
                      <h3 className="text-lg serif text-navy">Shadow Market</h3>
                    </div>
                    <span className="text-[8px] bg-gold/10 text-gold px-2 py-0.5 rounded-full font-bold uppercase tracking-widest">Live Feed</span>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    {MOCK_PROPERTIES.map((prop) => (
                      <div key={prop.id} className="p-4 bg-white/5 border border-luxury-border rounded-2xl hover:border-gold/30 transition-all cursor-pointer group">
                        <div className="flex justify-between items-start mb-2">
                          <span className={`text-[9px] uppercase tracking-widest font-bold px-2 py-0.5 rounded ${
                            prop.type === 'Off-Market' ? 'bg-navy text-gold' : 
                            prop.type === 'New Listing' ? 'bg-emerald-500/10 text-emerald-600' : 
                            'bg-blue-500/10 text-blue-600'
                          }`}>
                            {prop.type}
                          </span>
                          <div className="flex items-center gap-1 text-[9px] text-navy/30 font-bold">
                            <Clock size={10} />
                            {prop.timestamp}
                          </div>
                        </div>
                        <p className="text-sm font-bold text-navy group-hover:text-gold transition-colors">{prop.address}</p>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center gap-1 text-[10px] text-navy/40">
                            <MapPin size={10} />
                            {prop.neighborhood}
                          </div>
                          <p className="text-xs font-black text-navy">{prop.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full mt-6 py-3 bg-navy text-white text-[10px] uppercase tracking-[0.2em] font-black rounded-xl hover:bg-navy/90 transition-all shadow-lg">
                    Access Full Inventory
                  </button>
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
  <div className="flex gap-4 items-start group relative z-10">
    <div className="w-10 h-10 rounded-xl bg-white border border-luxury-border flex items-center justify-center shrink-0 group-hover:border-gold/30 group-hover:shadow-lg group-hover:shadow-gold/5 transition-all duration-300 z-10">
      {icon}
    </div>
    <div className="flex-1 min-w-0 pt-0.5">
      <div className="flex justify-between items-start mb-1">
        <p className="text-sm font-bold text-navy group-hover:text-gold transition-colors duration-300">{title}</p>
        <span className="text-[10px] text-navy/30 uppercase tracking-widest font-black">{time}</span>
      </div>
      <p className="text-xs text-navy/50 leading-relaxed">{detail}</p>
    </div>
  </div>
);
