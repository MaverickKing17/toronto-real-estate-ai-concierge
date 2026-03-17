import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, X, ShieldCheck, Sparkles } from 'lucide-react';

interface TourStep {
  targetId: string;
  title: string;
  content: string;
  position: 'bottom' | 'top' | 'left' | 'right' | 'center';
}

const TOUR_STEPS: TourStep[] = [
  {
    targetId: 'center',
    title: 'Welcome to ARGUS',
    content: 'Experience the next generation of luxury real estate management. Let us show you around your new command center.',
    position: 'center'
  },
  {
    targetId: 'tour-stats',
    title: 'GCI Protection',
    content: 'Monitor your Gross Commission Income in real-time. Our high-precision tracking ensures your revenue is always protected.',
    position: 'bottom'
  },
  {
    targetId: 'tour-leads',
    title: 'Lead Management',
    content: 'Access your elite client list instantly. Track activity, property interests, and transaction values at a glance.',
    position: 'right'
  },
  {
    targetId: 'tour-chat',
    title: 'AI Intelligence',
    content: 'Engage with leads using ARGUS AI. Our sophisticated models handle complex inquiries while maintaining your brand prestige.',
    position: 'left'
  },
  {
    targetId: 'tour-concierge',
    title: '24/7 Concierge',
    content: 'Your personal AI assistant is always ready to provide market intelligence and administrative support.',
    position: 'top'
  }
];

export const OnboardingTour: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [spotlight, setSpotlight] = useState({ top: 0, left: 0, width: 0, height: 0 });

  useEffect(() => {
    const hasSeenTour = localStorage.getItem('argus_tour_seen');
    if (!hasSeenTour) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const step = TOUR_STEPS[currentStep];
    if (step.targetId === 'center') {
      setSpotlight({ top: 0, left: 0, width: 0, height: 0 });
      return;
    }

    const updateSpotlight = () => {
      const element = document.getElementById(step.targetId);
      if (element) {
        const rect = element.getBoundingClientRect();
        setSpotlight({
          top: rect.top - 10,
          left: rect.left - 10,
          width: rect.width + 20,
          height: rect.height + 20
        });
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    updateSpotlight();
    // Re-check after a short delay to account for layout shifts
    const timer = setTimeout(updateSpotlight, 100);
    window.addEventListener('resize', updateSpotlight);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateSpotlight);
    };
  }, [currentStep, isVisible]);

  const handleNext = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = () => {
    setIsVisible(false);
    localStorage.setItem('argus_tour_seen', 'true');
  };

  if (!isVisible) return null;

  const step = TOUR_STEPS[currentStep];

  // Calculate tooltip position with viewport safety
  const getTooltipStyle = () => {
    if (step.position === 'center') {
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      };
    }

    let top = spotlight.top;
    let left = spotlight.left;

    if (step.position === 'bottom') {
      top = spotlight.top + spotlight.height + 20;
    } else if (step.position === 'top') {
      top = spotlight.top - 280;
    } else if (step.position === 'right') {
      left = spotlight.left + spotlight.width + 20;
    } else if (step.position === 'left') {
      left = spotlight.left - 420;
    }

    // Viewport safety
    const padding = 20;
    const tooltipWidth = 400;
    const tooltipHeight = 250;

    left = Math.max(padding, Math.min(left, window.innerWidth - tooltipWidth - padding));
    top = Math.max(padding, Math.min(top, window.innerHeight - tooltipHeight - padding));

    return { top, left };
  };

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Overlay with Spotlight */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-all duration-500 pointer-events-auto cursor-pointer" 
        onClick={handleComplete}
        style={{
          clipPath: spotlight.width > 0 
            ? `polygon(0% 0%, 0% 100%, ${spotlight.left}px 100%, ${spotlight.left}px ${spotlight.top}px, ${spotlight.left + spotlight.width}px ${spotlight.top}px, ${spotlight.left + spotlight.width}px ${spotlight.top + spotlight.height}px, ${spotlight.left}px ${spotlight.top + spotlight.height}px, ${spotlight.left}px 100%, 100% 100%, 100% 0%)`
            : 'none'
        }} 
      />

      {/* Skip Button */}
      <button 
        onClick={handleComplete}
        className="absolute top-8 right-8 pointer-events-auto flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full text-white text-[10px] uppercase tracking-widest font-bold transition-all backdrop-blur-md"
      >
        Skip Tour
        <X size={14} />
      </button>

      <AnimatePresence mode="wait">
          <motion.div
          key={currentStep}
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          className="absolute pointer-events-auto bg-white border border-luxury-border p-8 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.25)] w-[400px] z-[10000]"
          style={getTooltipStyle()}
        >
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center">
                {currentStep === 0 ? <ShieldCheck className="text-gold" /> : <Sparkles className="text-gold" size={20} />}
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1">Step {currentStep + 1} of {TOUR_STEPS.length}</p>
                <h3 className="text-xl serif font-bold text-navy">{step.title}</h3>
              </div>
            </div>
          </div>

          <p className="text-sm text-navy/60 leading-relaxed mb-8">
            {step.content}
          </p>

          <div className="flex justify-between items-center">
            <button 
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="flex items-center gap-2 text-xs text-navy/40 hover:text-navy transition-colors disabled:opacity-0"
            >
              <ChevronLeft size={16} />
              Back
            </button>
            
            <div className="flex gap-1">
              {TOUR_STEPS.map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentStep ? 'bg-gold w-4' : 'bg-navy/10'}`} />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="flex items-center gap-2 bg-navy text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-gold transition-all shadow-lg"
            >
              {currentStep === TOUR_STEPS.length - 1 ? 'Finish' : 'Next'}
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
