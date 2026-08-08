import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'emerald' | 'amber' | 'neutral' | 'rose';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'gold', className = '' }) => {
  const variantStyles = {
    gold: 'bg-amber-100 text-amber-900 border-amber-200/60',
    emerald: 'bg-emerald-100 text-emerald-900 border-emerald-200/60',
    amber: 'bg-amber-100 text-amber-800 border-amber-200',
    neutral: 'bg-stone-200/70 text-stone-800 border-stone-300/60',
    rose: 'bg-rose-100 text-rose-900 border-rose-200/60',
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
