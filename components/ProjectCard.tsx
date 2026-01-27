import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  className?: string;
  onClick?: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = "", onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`group relative overflow-hidden rounded-lg h-full min-h-[280px] cursor-pointer transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-primary/50 ${className}`}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick?.();
        }
      }}
    >
      <img 
        alt={project.title} 
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
        src={project.imageUrl} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
      
      {/* Hover Reveal content */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <span className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full font-medium flex items-center transform translate-y-4 group-hover:translate-y-0 transition-transform">
            View Details <span className="material-icons-outlined ml-2 text-sm">visibility</span>
          </span>
      </div>

      <div className="absolute bottom-0 left-0 p-6 w-full transform transition-transform duration-300 group-hover:-translate-y-2">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-sm text-slate-300 line-clamp-2 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
           {project.tags.slice(0, 3).map(tag => (
             <span key={tag} className="text-[10px] bg-white/10 backdrop-blur-sm text-slate-200 px-2 py-0.5 rounded border border-white/10">{tag}</span>
           ))}
           {project.tags.length > 3 && (
             <span className="text-[10px] bg-white/10 backdrop-blur-sm text-slate-200 px-2 py-0.5 rounded border border-white/10">+{project.tags.length - 3}</span>
           )}
        </div>
      </div>
    </div>
  );
};