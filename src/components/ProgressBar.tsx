import React from 'react';
import { motion } from 'motion/react';

interface ProgressBarProps {
  label: string;
  percentage: number;
  color?: string;
  showPercentage?: boolean;
  striped?: boolean;
  animated?: boolean;
  height?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  percentage,
  color = 'bg-indigo-600',
  showPercentage = true,
  striped = false,
  animated = false,
  height = 'h-4',
}) => {
  return (
    <div className="mb-4 w-full" role="progressbar" aria-valuenow={percentage} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-slate-700 dark:text-slate-200">{label}</span>
        {showPercentage && (
          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{percentage}%</span>
        )}
      </div>
      <div className={`w-full bg-slate-200 dark:bg-slate-700 rounded-full ${height} overflow-hidden`}>
        <motion.div
          className={`${height} rounded-full ${color} ${
            striped
              ? 'bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] bg-[length:1rem_1rem]'
              : ''
          } ${animated ? 'animate-progress-stripes' : ''}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
};
