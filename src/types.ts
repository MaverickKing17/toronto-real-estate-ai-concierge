export type View = 'dashboard' | 'messages' | 'leads' | 'settings' | 'privacy' | 'terms' | 'dmca' | 'pipeda' | 'casl' | 'market-reports' | 'faqs' | 'api-docs' | 'security' | 'iso';

export interface Lead {
  id: string;
  name: string;
  property: string;
  value: string;
  status: 'Active' | 'Pending' | 'Closed';
  lastActive: string;
  email: string;
  phone: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
