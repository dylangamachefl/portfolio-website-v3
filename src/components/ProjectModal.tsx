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

          <div className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-700">
            {/* Description */}
            <p className="text-base leading-relaxed text-text-light-secondary dark:text-text-dark-secondary mb-6">
              {project.description}
            </p>

            {/* Key Features Section */}
            <div className="p-5 rounded-xl bg-background-light dark:bg-slate-800/50 border border-border-light dark:border-border-dark">
              <h4 className="text-xs font-bold uppercase tracking-wider text-text-light-secondary dark:text-text-dark-secondary mb-3">
                Key Features
              </h4>
              <ul className="space-y-2.5 text-sm text-text-light-secondary dark:text-text-dark-secondary">
                <li className="flex items-start gap-2">
                  <span className="material-icons-outlined text-primary text-base mt-0.5 flex-shrink-0">check_circle</span>
                  <span>Real-time data processing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-icons-outlined text-primary text-base mt-0.5 flex-shrink-0">check_circle</span>
                  <span>Responsive accessible UI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-icons-outlined text-primary text-base mt-0.5 flex-shrink-0">check_circle</span>
                  <span>Optimized performance metrics</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-border-light dark:border-border-dark flex flex-col sm:flex-row gap-4 mt-auto">
            {/* Show both buttons if live demo link exists, otherwise only GitHub button */}
            {project.link && project.link !== '#' ? (
              <>
                <a
                  href={project.link}
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
                  View on GitHub
                  <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </>
            ) : (
              <a
                href={project.sourceUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all hover:scale-[1.02]"
              >
                View on GitHub
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};