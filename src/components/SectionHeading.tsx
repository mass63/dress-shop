import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = ''
}) => {
  const alignment = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center mx-auto';

  return (
    <div className={`max-w-3xl mb-10 md:mb-14 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-amber-800 tracking-wider text-xs font-semibold uppercase px-3 py-1 bg-amber-100/80 rounded-full mb-3 border border-amber-200/50">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-stone-900 tracking-tight leading-snug">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
