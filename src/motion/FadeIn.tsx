import React from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
  className?: string;
}

export const FadeIn: React.FC<FadeInProps> = ({ delay = 0, duration = 0.45, children, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
};
