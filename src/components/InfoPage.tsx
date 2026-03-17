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
            At ARGUS, we take your privacy with the utmost seriousness. Our platform is designed to protect both broker and client data with bank-grade encryption.
            
            ### Data Collection
            We collect only the information necessary to provide high-precision real estate intelligence. This includes property interests, transaction history, and communication logs within the platform.
            
            ### Data Usage
            Your data is used exclusively to power the ARGUS AI and provide market insights. We never sell your data to third parties.
            
            ### Security Measures
            All data is encrypted at rest and in transit. Access is strictly controlled via multi-factor authentication.
          `
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          icon: <FileText className="text-gold" size={32} />,
          content: `
            By using ARGUS, you agree to our terms of service designed to maintain the prestige and integrity of the luxury real estate sector.
            
            ### Professional Standards
            Users must be licensed real estate professionals in their respective jurisdictions.
            
            ### Platform Usage
            The ARGUS AI is a tool to assist in client engagement and market analysis. Final professional judgment remains with the broker.
            
            ### Subscription & Access
            Access is granted on a per-broker basis. Sharing credentials is strictly prohibited to maintain security integrity.
          `
        };
      case 'dmca':
        return {
          title: 'DMCA Notice',
          icon: <Shield className="text-gold" size={32} />,
          content: `
            ARGUS respects intellectual property rights. If you believe any content on our platform infringes on your copyright, please follow our DMCA notice procedure.
            
            ### Reporting Infringement
            Provide a detailed description of the copyrighted work and the location of the infringing material on our platform.
            
            ### Counter-Notice
            If you believe your content was removed in error, you may file a counter-notice as outlined in our full legal documentation.
          `
        };
      case 'pipeda':
        return {
          title: 'PIPEDA Compliance',
          icon: <Shield className="text-gold" size={32} />,
          content: `
            As a Canadian-based platform, ARGUS is fully compliant with the Personal Information Protection and Electronic Documents Act (PIPEDA).
            
            ### Ten Principles
            We adhere to the ten fair information principles, including accountability, identifying purposes, and consent.
            
            ### Individual Access
            Clients have the right to access their personal information held within the platform upon request.
          `
        };
      case 'casl':
        return {
          title: 'CASL Policy',
          icon: <Shield className="text-gold" size={32} />,
          content: `
            Our platform features built-in compliance for Canada's Anti-Spam Legislation (CASL).
            
            ### Consent Management
            ARGUS automatically tracks express and implied consent for all client communications.
            
            ### Unsubscribe Mechanism
            Every automated message includes a clear, functional unsubscribe mechanism as required by law.
          `
        };
      case 'market-reports':
        return {
          title: 'Market Reports',
          icon: <Award className="text-gold" size={32} />,
          content: `
            Access our exclusive, high-precision market reports for the Toronto luxury sector.
            
            ### Quarterly Analysis
            Deep dives into Bridle Path, Rosedale, and Forest Hill transaction trends.
            
            ### Off-Market Insights
            Intelligence on "pocket listings" and private transactions not visible on traditional MLS systems.
          `
        };
      case 'faqs':
        return {
          title: 'Broker FAQs',
          icon: <HelpCircle className="text-gold" size={32} />,
          content: `
            Common questions from our elite broker network.
            
            ### How does the GCI Protection work?
            We use predictive modeling to identify potential transaction risks before they impact your commission.
            
            ### Can I integrate with my existing CRM?
            Yes, ARGUS offers seamless API integration with major luxury real estate CRMs.
          `
        };
      case 'api-docs':
        return {
          title: 'API Documentation',
          icon: <Code className="text-gold" size={32} />,
          content: `
            Build custom integrations with the ARGUS platform.
            
            ### Authentication
            Secure OAuth2 flow for all API requests.
            
            ### Endpoints
            Access leads, properties, and market intelligence programmatically.
          `
        };
      case 'security':
        return {
          title: 'Security Whitepaper',
          icon: <Lock className="text-gold" size={32} />,
          content: `
            A detailed look at the ARGUS security architecture.
            
            ### Encryption
            AES-256 at rest and TLS 1.3 in transit.
            
            ### Infrastructure
            Hosted on isolated, high-availability cloud infrastructure with 24/7 monitoring.
          `
        };
      case 'iso':
        return {
          title: 'ISO Certification',
          icon: <Award className="text-gold" size={32} />,
          content: `
            ARGUS is proud to maintain ISO 27001 certification for information security management.
            
            ### Annual Audits
            Our systems undergo rigorous third-party audits annually to maintain our certification.
            
            ### Global Standards
            We adhere to international best practices for data protection and risk management.
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
