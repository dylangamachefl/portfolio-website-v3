import React, { useEffect } from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ 
  project, 
  onClose, 
  onNext, 
  onPrev, 
  hasNext = false, 
  hasPrev = false 
}) => {
  // Keyboard navigation & Close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && onNext && hasNext) onNext();
      if (e.key === 'ArrowLeft' && onPrev && hasPrev) onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  // Prevent scrolling on body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Navigation Arrows (Fixed to Viewport Sides) */}
      {hasPrev && onPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="fixed left-4 top-1/2 z-[60] p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-md transition-all -translate-y-1/2 border border-white/10 hover:border-white/30 group hidden sm:flex"
          aria-label="Previous project"
        >
          <span className="material-icons-outlined text-2xl group-hover:-translate-x-0.5 transition-transform">chevron_left</span>
        </button>
      )}

      {hasNext && onNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="fixed right-4 top-1/2 z-[60] p-3 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-md transition-all -translate-y-1/2 border border-white/10 hover:border-white/30 group hidden sm:flex"
          aria-label="Next project"
        >
          <span className="material-icons-outlined text-2xl group-hover:translate-x-0.5 transition-transform">chevron_right</span>
        </button>
      )}

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-surface-light dark:bg-surface-dark rounded-2xl shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 backdrop-blur-md transition-colors"
        >
          <span className="material-icons-outlined">close</span>
        </button>

        {/* Image Section - Large & Prominent */}
        <div className="w-full md:w-3/5 h-64 md:h-auto relative bg-slate-100 dark:bg-slate-800">
           <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-2/5 p-8 flex flex-col bg-surface-light dark:bg-surface-dark">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-text-light-primary dark:text-text-dark-primary mb-3">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="prose dark:prose-invert max-w-none text-text-light-secondary dark:text-text-dark-secondary mb-8 flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
            <p className="text-lg leading-relaxed">{project.description}</p>
            <p className="mt-4 text-base opacity-80">
              This project showcases advanced implementation techniques using {project.tags.slice(0, 2).join(' and ')}. 
              It solves complex problems by leveraging a modern tech stack to deliver a seamless user experience.
            </p>
            {/* Mock extra content for the modal feel */}
            <div className="mt-6 p-4 rounded-lg bg-background-light dark:bg-slate-800/50 border border-border-light dark:border-border-dark">
                <h4 className="text-sm font-semibold uppercase tracking-wider mb-2">Key Features</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Real-time data processing</li>
                    <li>Responsive accessible UI</li>
                    <li>Optimized performance metrics</li>
                </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-border-light dark:border-border-dark flex flex-col sm:flex-row gap-4 mt-auto">
             <a
                href={project.link || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:scale-[1.02]"
             >
                 View Live Project
                 <span className="material-icons-outlined ml-2 text-sm">open_in_new</span>
             </a>
             <a
                href={project.sourceUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center px-6 py-3 border border-border-light dark:border-border-dark text-base font-medium rounded-xl text-text-light-primary dark:text-text-dark-primary hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
             >
                 View Source Code
                 <span className="material-icons-outlined ml-2 text-sm">code</span>
             </a>
          </div>
        </div>
      </div>
    </div>
  );
};