import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassmorphicCard = ({ children, className = '', hover = true }: GlassmorphicCardProps) => {
  return (
    <motion.div
      className={`
        backdrop-blur-lg bg-white/20 
        border border-[#FFD700]/30 
        rounded-2xl shadow-xl
        ${hover ? 'hover:bg-white/30 hover:border-[#FFD700]/50' : ''}
        ${className}
      `}
      whileHover={hover ? { scale: 1.02, y: -2 } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
};