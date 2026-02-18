
import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BentoCard } from './components/BentoCard';
import { AiAssistant } from './components/AiAssistant';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ContactModal } from './components/ContactModal';
import { MeshGradientBackground } from './components/MeshGradientBackground';
import { FadeIn } from './components/FadeIn';
import { TechStack } from './components/TechStack';
import { PROJECTS, INTERESTS, SOCIALS, USER_NAME, USER_ROLE, USER_BIO, GOOGLE_FORM_CONFIG } from './constants';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Dark Mode Logic
  useEffect(() => {
    // Check current state on mount (handled by inline script in index.html)
    const checkTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      setIsDarkMode(isDark);
    };
    checkTheme();
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = PROJECTS.filter(project => {
    const query = searchQuery.toLowerCase();
    return (
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  // Calculate Navigation State
  const currentIndex = selectedProject ? filteredProjects.findIndex(p => p.id === selectedProject.id) : -1;
  const hasNext = currentIndex >= 0 && currentIndex < filteredProjects.length - 1;
  const hasPrev = currentIndex > 0;

  const handleNextProject = () => {
    if (hasNext) {
      setSelectedProject(filteredProjects[currentIndex + 1]);
    }
  };

  const handlePrevProject = () => {
    if (hasPrev) {
      setSelectedProject(filteredProjects[currentIndex - 1]);
    }
  };

  return (
    <>
      <MeshGradientBackground />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header / Theme Toggle */}
        <div className="flex justify-end pt-8 pb-4">
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md transition-all duration-300 group border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            aria-label="Toggle Dark Mode"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            <span className="material-icons-outlined text-text-light-secondary dark:text-text-dark-secondary group-hover:text-primary transition-colors">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>

        <main className="pb-12 pt-2">
          {/* Top Grid: Hero/Interests/Toolbox Left, Connect/AI Right */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">

            {/* Left Column Group (Spans 2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-8">

              {/* Hero Section */}
              <FadeIn>
                <div className="relative rounded-lg bg-surface-light/80 backdrop-blur-sm p-6 shadow-sm dark:bg-surface-dark/80 transition-all duration-300 hover:shadow-md min-h-[350px] flex flex-col justify-center">
                  <div className="absolute top-6 right-6 group cursor-help">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900 dark:text-green-300 transition-transform duration-200 group-hover:scale-105">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                      Open to work
                    </span>
                  </div>
                  <div className="flex flex-col items-start space-y-6">
                    <div className="flex items-center gap-4 md:gap-6">
                      <img
                        alt={`Portrait of ${USER_NAME}`}
                        className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover ring-4 ring-white dark:ring-slate-800 shadow-md transition-transform duration-300 hover:scale-105"
                        src={`${import.meta.env.BASE_URL}portrait.png`}
                      />
                      <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text-light-primary dark:text-text-dark-primary">{USER_NAME}</h2>
                        <p className="text-lg md:text-xl text-primary font-medium">{USER_ROLE}</p>
                      </div>
                    </div>
                    <div className="w-full">
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-text-light-secondary dark:text-text-dark-secondary mb-2">About Me</h3>
                      <p className="text-base text-text-light-secondary dark:text-text-dark-secondary leading-relaxed max-w-2xl mb-6">
                        {USER_BIO}
                      </p>
                      <button
                        onClick={() => setIsResumeOpen(true)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-text-light-primary dark:bg-white text-white dark:text-text-light-primary font-medium text-sm transition-all duration-200 hover:scale-105 shadow-md hover:shadow-lg"
                      >
                        <span className="material-icons-outlined text-lg">visibility</span>
                        View Resume
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Middle Row: Interests & Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Interests */}
                <FadeIn delay={100} className="h-full">
                  <BentoCard title="Interests" className="h-full">
                    <div className="grid grid-cols-3 gap-4 h-full content-center min-h-[140px]">
                      {INTERESTS.map(interest => (
                        <div key={interest.id} className="group flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-300 hover:bg-white dark:hover:bg-slate-700 hover:shadow-lg dark:hover:shadow-slate-900/50 cursor-default hover:-translate-y-1.5 border border-transparent hover:border-slate-100 dark:hover:border-slate-600">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 dark:bg-slate-800 text-2xl shadow-sm ring-1 ring-slate-100 dark:ring-slate-700 transition-all duration-300 group-hover:scale-110 group-hover:ring-2 group-hover:ring-primary/20 group-hover:bg-primary/5 group-hover:text-primary group-hover:rotate-6">
                            <span className="transition-transform duration-300 group-hover:rotate-12 transform select-none">{interest.icon}</span>
                          </div>
                          <span className="mt-3 text-[11px] font-bold uppercase tracking-wide text-text-light-secondary dark:text-text-dark-secondary text-center transition-colors group-hover:text-primary">{interest.label}</span>
                        </div>
                      ))}
                    </div>
                  </BentoCard>
                </FadeIn>

                {/* Location Image */}
                <FadeIn delay={200} className="h-full">
                  <div className="group relative overflow-hidden rounded-lg min-h-[200px] h-full shadow-sm cursor-pointer">
                    <img
                      alt="Bradenton, FL Placeholder"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      src={`${import.meta.env.BASE_URL}location.jpg`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90"></div>
                    <div className="absolute bottom-6 left-6 transform transition-transform duration-300 group-hover:-translate-y-1">
                      <p className="text-xs font-medium text-slate-300 uppercase tracking-wider mb-1">Based in</p>
                      <h3 className="text-2xl font-bold text-white drop-shadow-md">Bradenton, FL</h3>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Technical Skills - Improved Component */}
              <FadeIn delay={300}>
                <TechStack />
              </FadeIn>

            </div>

            {/* Right Sidebar (1 col) */}
            <div className="flex flex-col gap-8">

              <FadeIn direction="left" delay={200}>
                <BentoCard title="Connect">
                  <div className="grid grid-cols-2 gap-4">
                    {SOCIALS.map(social => {
                      // Use button for Message to trigger modal, link for others
                      const isMessage = social.platform === 'Message';
                      const Component = isMessage ? 'button' : 'a';
                      const props = isMessage
                        ? { onClick: () => setIsContactModalOpen(true), type: 'button' as const }
                        : { href: social.url, target: '_blank', rel: 'noopener noreferrer' };

                      return (
                        <Component
                          key={social.platform}
                          className="flex flex-col items-center justify-center gap-3 rounded-xl bg-background-light p-4 hover:bg-white hover:shadow-md dark:bg-slate-700 dark:hover:bg-slate-600 transition-all duration-300 group hover:-translate-y-1 border border-transparent hover:border-slate-100 dark:hover:border-slate-500"
                          {...props}
                        >
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-surface-light dark:bg-slate-800 shadow-sm group-hover:scale-110 transition-transform">
                            <svg
                              className={`w-6 h-6 transition-colors ${social.color ? '' : 'fill-current text-text-light-secondary dark:text-text-dark-secondary group-hover:text-primary'}`}
                              style={social.color ? { fill: social.color } : {}}
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d={social.iconPath} />
                            </svg>
                          </div>
                          <span className="font-medium text-sm group-hover:text-primary transition-colors">{social.platform}</span>
                        </Component>
                      );
                    })}
                  </div>
                </BentoCard>
              </FadeIn>

              {/* AI Assistant - Fixed height to align with Technical Proficiency bottom, scrolls internally */}
              <FadeIn direction="left" delay={400}>
                <div className="h-[950px]">
                  <AiAssistant />
                </div>
              </FadeIn>

            </div>
          </div>

          {/* Selected Projects Section - All Projects */}
          <section className="mt-16">
            <FadeIn>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full mb-8">
                <h2 className="text-2xl font-bold text-text-light-primary dark:text-text-dark-primary whitespace-nowrap">Hobby Projects</h2>

                {/* Search Bar */}
                <div className="relative w-full sm:w-64 group">
                  <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <span className="material-icons-outlined text-text-light-secondary dark:text-text-dark-secondary text-lg group-focus-within:text-primary transition-colors">search</span>
                  </span>
                  <input
                    type="text"
                    className="w-full rounded-full border border-border-light dark:border-border-dark bg-surface-light dark:bg-slate-800 py-2 pl-10 pr-4 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-text-light-secondary dark:placeholder:text-text-dark-secondary shadow-sm group-hover:shadow-md"
                    placeholder="Filter projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </FadeIn>

            {/* Projects Container - No fixed height to allow expansion */}
            <div className="p-2 pr-4 relative">
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 pb-2">
                  {filteredProjects.map((project, index) => (
                    <FadeIn key={project.id} delay={index * 100} className="h-full">
                      <ProjectCard
                        project={project}
                        onClick={() => handleProjectClick(project)}
                      />
                    </FadeIn>
                  ))}
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface-light/50 dark:bg-surface-dark/50 rounded-lg border-2 border-dashed border-border-light dark:border-border-dark animate-in fade-in zoom-in-95 duration-300">
                  <span className="material-icons-outlined text-4xl text-text-light-secondary dark:text-text-dark-secondary mb-2">search_off</span>
                  <p className="text-text-light-secondary dark:text-text-dark-secondary text-lg">No projects found matching "{searchQuery}"</p>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="mt-4 text-primary font-medium hover:underline text-sm hover:scale-105 transition-transform"
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </section>
        </main>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
            onNext={handleNextProject}
            onPrev={handlePrevProject}
            hasNext={hasNext}
            hasPrev={hasPrev}
          />
        )}

        {/* Resume Modal */}
        {isResumeOpen && (
          <ResumeModal
            onClose={() => setIsResumeOpen(false)}
            pdfUrl={`${import.meta.env.BASE_URL}Dylan_Gamache_Resume.pdf`}
          />
        )}

        {/* Contact Modal */}
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          formActionUrl={GOOGLE_FORM_CONFIG.formActionUrl}
          entryIds={GOOGLE_FORM_CONFIG.entryIds}
        />

        {/* Vercel Web Analytics */}
        <Analytics />
      </div>
    </>
  );
};

export default App;
