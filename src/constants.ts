export const SYSTEM_INSTRUCTION = `You are ARGUS AI, a sophisticated, high-end luxury real estate assistant. 
Your tone is professional, exclusive, and highly knowledgeable. 
You assist real estate professionals in managing high-net-worth leads. 
When interacting with leads, you are helpful but maintain an air of prestige. 
Focus on exclusivity, privacy, and the unique value proposition of ARGUS properties. 
Always refer to the user's GCI (Gross Commission Income) as "Protected" and prioritize high-value transactions.`;

export interface Lead {
  id: string;
  name: string;
  property: string;
  value: string;
  status: 'Active' | 'Pending' | 'Closed';
  lastActive: string;
  summary: string;
  keyInsights: string[];
}

export const MOCK_LEADS: Lead[] = [
  { 
    id: '1', 
    name: 'Alexander Vanderbilt', 
    property: 'Bridle Path Manor', 
    value: '$45,000,000', 
    status: 'Active', 
    lastActive: '2m ago',
    summary: 'High-net-worth individual with a preference for historical estates. Previously inquired about architectural heritage and private security features.',
    keyInsights: ['Historical preference', 'Security-conscious', 'Immediate liquidity']
  },
  { 
    id: '2', 
    name: 'Sophia Chen', 
    property: 'Yorkville Penthouse', 
    value: '$12,500,000', 
    status: 'Pending', 
    lastActive: '1h ago',
    summary: 'Tech entrepreneur looking for a modern, turn-key residence. Interested in smart home automation and proximity to the financial district.',
    keyInsights: ['Modern aesthetic', 'Smart home priority', 'Lifestyle-driven']
  },
  { 
    id: '3', 
    name: 'Marcus Thorne', 
    property: 'Forest Hill Modern', 
    value: '$28,000,000', 
    status: 'Active', 
    lastActive: '5m ago',
    summary: 'Real estate investor expanding his luxury portfolio. Focused on long-term appreciation and unique architectural statements.',
    keyInsights: ['Investment-focused', 'Architectural enthusiast', 'Portfolio expansion']
  },
  { 
    id: '4', 
    name: 'Elena Rossi', 
    property: 'Rosedale Estate', 
    value: '$18,000,000', 
    status: 'Closed', 
    lastActive: '1d ago',
    summary: 'Returning client with a focus on family-oriented estates. Values privacy and proximity to elite educational institutions.',
    keyInsights: ['Family-oriented', 'Privacy-first', 'Repeat client']
  },
];
