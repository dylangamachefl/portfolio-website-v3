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
      {/* Background Image */}
      <img
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        src={project.imageUrl}
      />

      {/* Gradient Overlay - Darkens on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/90 group-hover:via-black/60 transition-all duration-500"></div>

      {/* Default State: Only Project Title (Centered) */}
      <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-all duration-300">
        <h3 className="text-3xl font-bold text-white text-center px-6 drop-shadow-lg">
          {project.title}
        </h3>
      </div>

      {/* Hover State: Description + Tags (Slide up from bottom) */}
      <div className="absolute bottom-0 left-0 p-6 w-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
        <p className="text-sm text-slate-200 leading-relaxed mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-xs bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/30 font-medium">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};