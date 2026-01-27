
import React from 'react';
import { BentoCard } from './BentoCard';
import { SKILLS } from '../constants';

export const TechStack: React.FC = () => {
  return (
    <BentoCard title="Technical Proficiency" className="min-h-[200px]">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SKILLS.map((skillGroup) => {
          // Determine color theme based on category name
          let theme: 'blue' | 'purple' | 'emerald' = 'blue';
          if (skillGroup.category.includes('AI') || skillGroup.category.includes('Machine')) theme = 'purple';
          else if (skillGroup.category.includes('Data') || skillGroup.category.includes('BI')) theme = 'emerald';
          
          const themes = {
            blue: {
              bg: 'bg-blue-50/50 dark:bg-blue-900/10',
              border: 'border-blue-100 dark:border-blue-800',
              hoverBorder: 'group-hover:border-blue-300 dark:group-hover:border-blue-600',
              iconBox: 'bg-white dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 ring-1 ring-blue-100 dark:ring-blue-800',
              badge: 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-700',
            },
            purple: {
              bg: 'bg-purple-50/50 dark:bg-purple-900/10',
              border: 'border-purple-100 dark:border-purple-800',
              hoverBorder: 'group-hover:border-purple-300 dark:group-hover:border-purple-600',
              iconBox: 'bg-white dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 ring-1 ring-purple-100 dark:ring-purple-800',
              badge: 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-200 dark:hover:border-purple-700',
            },
            emerald: {
              bg: 'bg-emerald-50/50 dark:bg-emerald-900/10',
              border: 'border-emerald-100 dark:border-emerald-800',
              hoverBorder: 'group-hover:border-emerald-300 dark:group-hover:border-emerald-600',
              iconBox: 'bg-white dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 ring-1 ring-emerald-100 dark:ring-emerald-800',
              badge: 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-200 dark:hover:border-emerald-700',
            }
          }[theme];

          return (
            <div 
              key={skillGroup.category} 
              className={`
                group relative flex flex-col p-5 rounded-2xl border transition-all duration-300
                ${themes.bg} ${themes.border} ${themes.hoverBorder}
                hover:shadow-lg hover:-translate-y-1
              `}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                 <div className={`
                   flex items-center justify-center w-12 h-12 rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3
                   ${themes.iconBox}
                 `}>
                    <span className="material-icons-outlined text-2xl">{skillGroup.icon}</span>
                 </div>
                 <h4 className="font-bold text-slate-900 dark:text-white text-base leading-tight">
                   {skillGroup.category}
                 </h4>
              </div>

              {/* Skills Grid */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill}
                    className={`
                      px-3 py-1.5 text-xs font-semibold rounded-lg border shadow-sm transition-all duration-200
                      ${themes.badge}
                      hover:shadow-md hover:-translate-y-0.5 cursor-default
                    `}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </BentoCard>
  );
};
