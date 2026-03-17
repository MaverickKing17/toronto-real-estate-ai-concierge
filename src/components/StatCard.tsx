import React from 'react';
import { motion } from 'motion/react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon?: React.ReactNode;
  trend?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle, icon, trend }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-luxury-gray border border-luxury-border p-6 rounded-2xl relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
        {icon}
      </div>
      
      <p className="text-xs uppercase tracking-widest text-white/50 mb-2">{title}</p>
      <h3 className="text-3xl font-light serif text-white mb-1">{value}</h3>
      
      {subtitle && (
        <div className="flex items-center gap-2">
          <span className="text-xs text-gold font-medium">{trend}</span>
          <span className="text-xs text-white/30">{subtitle}</span>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 h-1 bg-gold w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
};
