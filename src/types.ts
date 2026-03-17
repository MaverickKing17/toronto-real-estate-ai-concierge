export type View = 'dashboard' | 'messages' | 'leads' | 'settings';

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
