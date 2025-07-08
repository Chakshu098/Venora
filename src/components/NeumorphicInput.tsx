import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface NeumorphicInputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  className?: string;
}

export const NeumorphicInput = ({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange, 
  icon, 
  className = '' 
}: NeumorphicInputProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      whileFocus={{ scale: 1.02 }}
    >
      <div className="relative">
        {icon && (
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#8B5E3C]/60">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`
            w-full px-4 py-4 ${icon ? 'pl-12' : ''}
            bg-[#FAF8F4] 
            border-2 border-[#D7C0AE]/30
            rounded-2xl
            shadow-inner
            focus:outline-none focus:border-[#FFD700]/50
            text-[#2C2C2E] placeholder-[#8B5E3C]/60
            font-medium
            transition-all duration-300
            hover:shadow-lg
          `}
        />
      </div>
    </motion.div>
  );
};