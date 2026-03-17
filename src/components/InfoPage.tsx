import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, FileText, Lock, HelpCircle, Code, Award } from 'lucide-react';
import { View } from '../types';

interface InfoPageProps {
  view: View;
  onBack: () => void;
}

export const InfoPage: React.FC<InfoPageProps> = ({ view, onBack }) => {
  const getPageContent = () => {
    switch (view) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          icon: <Lock className="text-gold" size={32} />,
          content: `
            At ARGUS, we recognize that privacy is the cornerstone of the luxury real estate industry. Our commitment to data sovereignty and confidentiality is absolute, ensuring that your high-net-worth client relationships remain exclusive and protected.
            
            ### Data Sovereignty
            We implement a strict data sovereignty model. All client information, property preferences, and transaction histories are stored in isolated, encrypted partitions. Your data is yours alone; ARGUS never aggregates or anonymizes your proprietary lead data for external use.
            
            ### Information Collection & Purpose
            We collect minimal, high-impact data points required for precision intelligence:
            - **Lead Profiles:** Name, contact preferences, and verified property interests.
            - **Engagement Metrics:** Interaction frequency and sentiment analysis within the ARGUS AI interface.
            - **Transaction Metadata:** Historical values and status updates to power GCI protection modeling.
            
            ### Advanced Encryption Standards
            All data is secured using AES-256 encryption at rest and TLS 1.3 for all data in transit. Our cryptographic keys are managed through a hardware security module (HSM) with zero-knowledge architecture.
            
            ### Third-Party Disclosure
            ARGUS does not sell, trade, or otherwise transfer your data to outside parties. Integration with third-party CRMs is only performed upon your explicit authorization and via secure, audited API handshakes.
          `
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          icon: <FileText className="text-gold" size={32} />,
          content: `
            The ARGUS platform is an exclusive environment reserved for elite real estate professionals. By accessing our services, you agree to uphold the prestige and ethical standards of the luxury property sector.
            
            ### Eligibility & Professional Standing
            Access to ARGUS is restricted to licensed real estate brokers and agents in good standing with their respective regulatory bodies. We reserve the right to verify credentials and terminate access for any user who fails to maintain these professional standards.
            
            ### AI Advisory Role
            The ARGUS AI (ARGUS Intelligence) functions as a strategic advisor. While it provides high-precision data and drafting capabilities, it does not constitute legal or financial advice. The final professional responsibility for all client communications and transaction decisions rests solely with the licensed user.
            
            ### Intellectual Property
            All proprietary algorithms, UI designs, and the "ARGUS" brand are the exclusive property of ARGUS Prestige Management. Users are granted a non-transferable license to use these tools for their individual professional practice.
            
            ### Confidentiality Obligations
            Users are bound by strict confidentiality regarding the platform's internal market intelligence and "pocket listing" data. Unauthorized disclosure of off-market information is grounds for immediate account termination and legal recourse.
          `
        };
      case 'dmca':
        return {
          title: 'DMCA Notice',
          icon: <Shield className="text-gold" size={32} />,
          content: `
            ARGUS respects the intellectual property of creators and expects our users to do the same. We respond to notices of alleged copyright infringement according to the process set out in the U.S. Digital Millennium Copyright Code.
            
            ### Infringement Notification
            To file a notice of infringement, please provide our designated agent with:
            - A physical or electronic signature of the copyright owner.
            - Identification of the copyrighted work claimed to have been infringed.
            - Identification of the material that is claimed to be infringing and its location on the ARGUS platform.
            - Your contact information, including address, telephone number, and email.
            
            ### Automated Content Filtering
            ARGUS employs advanced image recognition to prevent the unauthorized upload of copyrighted architectural photography. If your content was flagged in error, please contact our support team for immediate review.
          `
        };
      case 'pipeda':
        return {
          title: 'PIPEDA Compliance',
          icon: <Shield className="text-gold" size={32} />,
          content: `
            As a Canadian-founded organization, ARGUS adheres to the highest standards of the Personal Information Protection and Electronic Documents Act (PIPEDA).
            
            ### Accountability & Consent
            We have designated a Chief Privacy Officer to oversee our compliance. We obtain meaningful consent for the collection, use, and disclosure of personal information, ensuring that the purpose is always clear and justifiable.
            
            ### Safeguards & Openness
            Our security safeguards are proportional to the sensitivity of the luxury real estate data we manage. We maintain transparency about our information management practices, and our privacy policies are readily available for review.
            
            ### Individual Access Rights
            Under PIPEDA, your clients have the right to challenge the accuracy and completeness of their information and have it amended as appropriate. ARGUS provides tools for brokers to fulfill these access requests efficiently.
          `
        };
      case 'casl':
        return {
          title: 'CASL Policy',
          icon: <Shield className="text-gold" size={32} />,
          content: `
            ARGUS provides built-in compliance tools for Canada's Anti-Spam Legislation (CASL), protecting brokers from the significant penalties associated with non-compliant electronic messaging.
            
            ### Automated Consent Tracking
            The platform automatically distinguishes between Express and Implied consent based on transaction history and inquiry dates. ARGUS will alert you before sending any automated communication that may fall outside of CASL's "existing business relationship" window.
            
            ### Mandatory Identification
            All electronic messages sent through ARGUS include the mandatory sender identification and a functional, single-click unsubscribe mechanism.
            
            ### Record Keeping
            ARGUS maintains a detailed log of all consents and unsubscribe requests, providing you with a robust audit trail in the event of a regulatory inquiry.
          `
        };
      case 'market-reports':
        return {
          title: 'Market Reports',
          icon: <Award className="text-gold" size={32} />,
          content: `
            Our market reports represent the pinnacle of Toronto luxury real estate intelligence, moving beyond public MLS data to provide a true picture of high-end wealth movement.
            
            ### The "Shadow Market" Analysis
            Up to 35% of Toronto's $10M+ transactions occur off-market. ARGUS tracks these private transfers through proprietary data partnerships, providing you with insights into the "Shadow Market" that your competitors cannot see.
            
            ### Neighborhood Deep Dives
            Quarterly granular analysis of:
            - **The Bridle Path:** Tracking international capital flow and estate consolidation.
            - **Rosedale & Forest Hill:** Analyzing multi-generational wealth shifts and heritage property premiums.
            - **Yorkville:** Monitoring the luxury condominium resale market and new development absorption rates.
            
            ### Predictive Pricing Models
            Our AI analyzes global economic indicators, luxury commodity prices, and local zoning changes to predict price movements in the Toronto luxury sector with 94% historical accuracy.
          `
        };
      case 'faqs':
        return {
          title: 'Broker FAQs',
          icon: <HelpCircle className="text-gold" size={32} />,
          content: `
            Expert answers for our elite network of real estate professionals.
            
            ### How does the GCI Protection algorithm actually work?
            GCI Protection is our proprietary risk-mitigation engine. It analyzes over 200 variables—including buyer financing stability, inspection contingencies, and local market volatility—to assign a "Confidence Score" to every deal. If a transaction's score drops, ARGUS AI provides immediate strategic interventions to save the commission.
            
            ### Can I integrate ARGUS with my existing brokerage CRM?
            Absolutely. ARGUS is designed to sit atop your existing stack. We offer native, deep-link integrations with Salesforce, HubSpot, and specialized luxury CRMs. Our API allows for bidirectional data sync, ensuring your "Source of Truth" is always updated.
            
            ### Is the ARGUS AI trained on my private client data?
            No. We utilize a "Private LLM" architecture. While the AI is trained on vast amounts of luxury market data, your specific client interactions and lead notes are never used to train the global model. Your competitive advantage remains yours.
            
            ### How do I access "Pocket Listings" through the platform?
            Pocket listings are shared within the ARGUS Verified Network. Brokers can opt-in to share off-market mandates with other verified elite members, creating a secure, private marketplace for Toronto's most exclusive estates.
            
            ### What is the "Argus Score" assigned to leads?
            The Argus Score is a 1-100 metric of lead quality. It combines behavioral data (site visits, document views) with financial verification (where available) to help you prioritize your time on the leads most likely to close.
          `
        };
      case 'api-docs':
        return {
          title: 'API Documentation',
          icon: <Code className="text-gold" size={32} />,
          content: `
            The ARGUS API allows developers to extend the platform's intelligence into custom mobile apps, reporting dashboards, or internal brokerage tools.
            
            ### Authentication & Security
            We utilize OAuth 2.0 with Bearer Tokens. All requests must be made over HTTPS. API keys can be generated and rotated within your Admin Settings.
            
            ### Core Resources
            - **/leads:** Retrieve, create, and score high-net-worth leads.
            - **/properties:** Access detailed property metadata and AI-generated descriptions.
            - **/intelligence:** Fetch real-time market reports and neighborhood sentiment data.
            
            ### Rate Limiting
            To ensure platform stability, we implement a tiered rate-limiting system. Elite Tier accounts are granted 10,000 requests per hour.
          `
        };
      case 'security':
        return {
          title: 'Security Whitepaper',
          icon: <Lock className="text-gold" size={32} />,
          content: `
            ARGUS is built on a "Security First" philosophy. We understand that in luxury real estate, a data breach is a reputation breach.
            
            ### Infrastructure Security
            Our platform is hosted on dedicated, single-tenant cloud instances. We utilize VPC (Virtual Private Cloud) isolation and hardware-level firewalls to prevent unauthorized access.
            
            ### Application Security
            We conduct bi-weekly automated vulnerability scans and semi-annual manual penetration tests by CREST-certified security firms. Our codebase follows OWASP Top 10 best practices.
            
            ### Zero-Trust Architecture
            We operate on a zero-trust model. Every request, whether internal or external, is verified and authorized. Multi-factor authentication (MFA) is mandatory for all administrative and broker accounts.
          `
        };
      case 'iso':
        return {
          title: 'ISO Certification',
          icon: <Award className="text-gold" size={32} />,
          content: `
            ARGUS is one of the few real estate technology platforms globally to achieve and maintain ISO/IEC 27001:2022 certification.
            
            ### What This Means for You
            This certification is the international gold standard for information security management systems (ISMS). It proves that ARGUS has implemented a rigorous framework to identify, manage, and mitigate information security risks.
            
            ### Continuous Improvement
            ISO certification is not a one-time event. We undergo comprehensive annual surveillance audits and a full recertification every three years to ensure our security posture evolves alongside emerging threats.
            
            ### Compliance Mapping
            Our ISO framework is mapped to other global standards, including SOC2 Type II and GDPR, providing a unified compliance posture for international brokerages.
          `
        };
      default:
        return { title: 'Information', icon: <HelpCircle />, content: 'Content coming soon.' };
    }
  };

  const { title, icon, content } = getPageContent();

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="p-8 max-w-4xl mx-auto"
    >
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors mb-8 group"
      >
        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-sm font-bold uppercase tracking-widest">Back to Dashboard</span>
      </button>

      <div className="bg-luxury-gray border border-luxury-border rounded-[2rem] p-12 shadow-2xl">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-16 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center">
            {icon}
          </div>
          <h1 className="text-4xl serif font-bold text-navy">{title}</h1>
        </div>

        <div className="prose prose-invert max-w-none">
          {content.split('\n').map((line, i) => {
            const trimmed = line.trim();
            if (trimmed.startsWith('###')) {
              return <h3 key={i} className="text-xl font-bold text-gold mt-8 mb-4">{trimmed.replace('###', '')}</h3>;
            }
            if (trimmed) {
              return <p key={i} className="text-navy/70 leading-relaxed mb-4">{trimmed}</p>;
            }
            return null;
          })}
        </div>
      </div>
    </motion.div>
  );
};
