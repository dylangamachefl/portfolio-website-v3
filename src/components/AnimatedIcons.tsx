import React from 'react';

// 1. Theme Toggle Icon (Sun/Moon morph)
export const ThemeToggleIcon = ({ isDark }: { isDark: boolean }) => {
    return (
        <svg
            className="w-6 h-6 transition-transform duration-500 text-text-light-secondary dark:text-text-dark-secondary group-hover:text-primary"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
                transform: !isDark ? 'rotate(40deg)' : 'rotate(90deg)',
            }}
        >
            <mask id="moon-mask">
                <rect x="0" y="0" width="100%" height="100%" fill="white" />
                <circle
                    cx={!isDark ? "12" : "24"}
                    cy={!isDark ? "4" : "10"}
                    r="6"
                    fill="black"
                    className="transition-all duration-500"
                />
            </mask>
            <circle
                cx="12"
                cy="12"
                r={!isDark ? "9" : "5"}
                fill="currentColor"
                mask="url(#moon-mask)"
                className="transition-all duration-500"
            />
            <g
                className="transition-all duration-500"
                style={{
                    opacity: !isDark ? 0 : 1,
                }}
            >
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </g>
        </svg>
    );
};

// 2. Download Arrow Icon
export const DownloadArrowIcon = ({ className = "" }: { className?: string }) => {
    return (
        <svg
            className={`w-5 h-5 ${className} overflow-visible`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <g className="arrow-down-group">
                <path d="M12 3v14" className="arrow-line" />
                <path d="M7 12l5 5 5-5" className="arrow-head" />
            </g>
            <line x1="5" y1="21" x2="19" y2="21" />
            <style>{`
        .group:hover .arrow-down-group {
          animation: arrow-download 1s ease infinite;
        }
        @keyframes arrow-download {
          0% { transform: translateY(0); opacity: 1; }
          40% { transform: translateY(5px); opacity: 0; }
          41% { transform: translateY(-8px); opacity: 0; }
          42% { transform: translateY(-4px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
        </svg>
    );
};

// 3. AI Assistant Thinking Dots
export const ThinkingDotsIcon = () => (
    <svg width="24" height="6" viewBox="0 0 24 6" xmlns="http://www.w3.org/2000/svg" className="fill-slate-400 dark:fill-slate-500 overflow-visible">
        <circle cx="3" cy="3" r="3" className="animate-bounce" style={{ animationDelay: '0ms' }} />
        <circle cx="12" cy="3" r="3" className="animate-bounce" style={{ animationDelay: '150ms' }} />
        <circle cx="21" cy="3" r="3" className="animate-bounce" style={{ animationDelay: '300ms' }} />
    </svg>
);

// 4. Send Arrow Icon
export const SendArrowIcon = ({ className = "" }: { className?: string }) => (
    <svg
        className={`w-4 h-4 ${className}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14" />
        <path d="M12 5l7 7-7 7" />
    </svg>
);

// 5. Tech Stack Icons (Draw-in on group hover, self-contained styles)
export const CodeDrawIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline className="code-path" points="16 18 22 12 16 6" />
        <polyline className="code-path" points="8 6 2 12 8 18" />
        <style>{`
            .code-path { stroke-dasharray: 30; stroke-dashoffset: 0; }
            .group:hover .code-path { animation: di-draw 0.8s cubic-bezier(0.4,0,0.2,1) forwards; }
            @keyframes di-draw { from { stroke-dashoffset: 30; } to { stroke-dashoffset: 0; } }
        `}</style>
    </svg>
);

export const BrainDrawIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path className="brain-path" d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path className="brain-path" style={{ animationDelay: '0.1s' }} d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
        <style>{`
            .brain-path { stroke-dasharray: 80; stroke-dashoffset: 0; }
            .group:hover .brain-path { animation: di-brain 1s cubic-bezier(0.4,0,0.2,1) forwards; }
            @keyframes di-brain { from { stroke-dashoffset: 80; } to { stroke-dashoffset: 0; } }
        `}</style>
    </svg>
);

export const DatabaseDrawIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <ellipse className="db-path" cx="12" cy="5" rx="9" ry="3" />
        <path className="db-path" style={{ animationDelay: '0.15s' }} d="M3 5V19A9 3 0 0 0 21 19V5" />
        <path className="db-path" style={{ animationDelay: '0.3s' }} d="M3 12A9 3 0 0 0 21 12" />
        <style>{`
            .db-path { stroke-dasharray: 60; stroke-dashoffset: 0; }
            .group:hover .db-path { animation: di-db 0.9s cubic-bezier(0.4,0,0.2,1) forwards; }
            @keyframes di-db { from { stroke-dashoffset: 60; } to { stroke-dashoffset: 0; } }
        `}</style>
    </svg>
);

export const WrenchDrawIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path className="wrench-path" d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        <style>{`
            .wrench-path { stroke-dasharray: 100; stroke-dashoffset: 0; }
            .group:hover .wrench-path { animation: di-wrench 1s cubic-bezier(0.4,0,0.2,1) forwards; }
            @keyframes di-wrench { from { stroke-dashoffset: 100; } to { stroke-dashoffset: 0; } }
        `}</style>
    </svg>
);
