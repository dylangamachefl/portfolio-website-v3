
import React from 'react';

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  subtitle?: string; // Added subtitle prop for "Powered by..." etc
  noPadding?: boolean;
  headerAction?: React.ReactNode;
}

export const BentoCard: React.FC<BentoCardProps> = ({ children, className = "", title, subtitle, noPadding = false, headerAction }) => {
  return (
    <div className={`rounded-lg bg-surface-light dark:bg-surface-dark shadow-sm flex flex-col ${className}`}>
      {(title || headerAction) && (
        <div className={`flex items-center justify-between shrink-0 ${noPadding ? 'p-6 pb-0' : 'px-6 pt-6 pb-2'}`}>
          <div className="flex flex-col">
            {title && <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light-secondary dark:text-text-dark-secondary">{title}</h3>}
            {subtitle && <p className="text-xs text-text-light-secondary dark:text-text-dark-secondary">{subtitle}</p>}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      <div className={`flex-1 min-h-0 ${noPadding ? '' : 'p-6'}`}>
        {children}
      </div>
    </div>
  );
};
