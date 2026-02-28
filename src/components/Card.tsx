import React, { useState } from 'react';
import { motion } from 'motion/react';

interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, title, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {title && <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4">{title}</h3>}
      {children}
    </motion.div>
  );
};
