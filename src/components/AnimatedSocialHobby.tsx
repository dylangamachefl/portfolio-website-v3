import React from 'react';

// =====================
// SOCIAL ICONS
// =====================

// GitHub: The entire icon gently wags/rocks on parent hover
export const GitHubAnimatedIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current transition-all duration-300">
    <g className="gh-icon-group">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </g>
    <style>{`
      .group:hover .gh-icon-group {
        animation: gh-wag 0.5s ease-in-out infinite alternate;
        transform-origin: center bottom;
      }
      @keyframes gh-wag {
        from { transform: rotate(-8deg); }
        to   { transform: rotate(8deg); }
      }
    `}</style>
  </svg>
);

// LinkedIn: 3D flip on hover
export const LinkedInAnimatedIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current transition-colors">
    <g className="li-icon-group" style={{ transformOrigin: 'center center', transformBox: 'fill-box' }}>
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </g>
    <style>{`
      .group:hover .li-icon-group {
        animation: li-flip 0.7s ease-in-out forwards;
      }
      @keyframes li-flip {
        0%   { transform: perspective(80px) rotateY(0deg); }
        100% { transform: perspective(80px) rotateY(360deg); }
      }
    `}</style>
  </svg>
);

// Spotify: Real icon shape with animated soundwaves on hover
export const SpotifyAnimatedIcon = () => (
  <svg viewBox="0 0 168 168" className="w-6 h-6 transition-colors">
    {/* Green background circle */}
    <circle cx="84" cy="84" r="84" fill="#1DB954" />
    {/* The three authentic Spotify soundwave arcs (black) */}
    <g fill="none" stroke="black" strokeLinecap="round">
      <path className="sp-wave-3" d="M40 108 C60 95 108 95 128 108" strokeWidth="10" />
      <path className="sp-wave-2" d="M32  84 C60  68 108  68 136  84" strokeWidth="10" />
      <path className="sp-wave-1" d="M24  60 C58  42 110  42 144  60" strokeWidth="10" />
    </g>
    <style>{`
      .sp-wave-1, .sp-wave-2, .sp-wave-3 { opacity: 0.7; }
      .group:hover .sp-wave-1 { animation: sp-pulse 1.2s ease-in-out infinite 0s; }
      .group:hover .sp-wave-2 { animation: sp-pulse 1.2s ease-in-out infinite 0.2s; }
      .group:hover .sp-wave-3 { animation: sp-pulse 1.2s ease-in-out infinite 0.4s; }
      @keyframes sp-pulse {
        0%,100% { opacity: 0.4; stroke-width: 10; }
        50%      { opacity: 1;   stroke-width: 12; }
      }
    `}</style>
  </svg>
);

// Message / Envelope: rocks gently on hover
export const MessageAnimatedIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current transition-colors">
    <g className="msg-icon-group" style={{ transformOrigin: 'center', transformBox: 'fill-box' }}>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </g>
    <style>{`
      .group:hover .msg-icon-group {
        animation: msg-rock 0.5s ease-in-out infinite alternate;
      }
      @keyframes msg-rock {
        from { transform: rotate(-6deg); }
        to   { transform: rotate(6deg); }
      }
    `}</style>
  </svg>
);

// =====================
// HOBBY ICONS
// =====================

export const CookingIcon = () => (
  <svg viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 overflow-visible">
    {/* Pot body */}
    <rect x="6" y="18" width="24" height="12" rx="3" />
    {/* Pot handles */}
    <path d="M6 22H3" />
    <path d="M30 22h3" />
    {/* Steam wisps */}
    <path className="steam-1" d="M13 16 C13 13 14 12 13 10" />
    <path className="steam-2" d="M18 16 C18 13 19 12 18 10" style={{ animationDelay: '0.3s' }} />
    <path className="steam-3" d="M23 16 C23 13 24 12 23 10" style={{ animationDelay: '0.6s' }} />
    <style>{`
      .steam-1, .steam-2, .steam-3 { opacity: 0; }
      .group:hover .steam-1 { animation: steam-rise 1.5s ease-in-out infinite 0s; }
      .group:hover .steam-2 { animation: steam-rise 1.5s ease-in-out infinite 0.3s; }
      .group:hover .steam-3 { animation: steam-rise 1.5s ease-in-out infinite 0.6s; }
      @keyframes steam-rise {
        0%   { opacity: 0;   transform: translateY(0px); }
        40%  { opacity: 0.8; }
        100% { opacity: 0;   transform: translateY(-8px); }
      }
    `}</style>
  </svg>
);

export const VolleyballIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <g className="vb-ball" style={{ transformOrigin: 'center', transformBox: 'fill-box' }}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </g>
    <style>{`
      .group:hover .vb-ball {
        animation: vb-bounce 0.5s ease-in-out 2;
      }
      @keyframes vb-bounce {
        0%, 100% { transform: translateY(0); }
        50%       { transform: translateY(-7px); }
      }
    `}</style>
  </svg>
);

export const GolfIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 overflow-visible">
    <g className="golf-club" style={{ transformOrigin: '50% 80%', transformBox: 'fill-box' }}>
      {/* Shaft */}
      <line x1="12" y1="2" x2="12" y2="18" />
      {/* Club head */}
      <path d="M9 18 Q12 17 15 18 L14 20 Q12 21 10 20Z" fill="currentColor" stroke="none" />
    </g>
    {/* Ball */}
    <circle cx="17" cy="21" r="1.5" fill="currentColor" stroke="none" />
    <style>{`
      .group:hover .golf-club {
        animation: golf-swing 0.6s ease-in-out forwards;
      }
      @keyframes golf-swing {
        0%   { transform: rotate(-20deg); }
        60%  { transform: rotate(20deg);  }
        100% { transform: rotate(0deg);   }
      }
    `}</style>
  </svg>
);

export const FootballIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 overflow-visible">
    <g className="football-body" style={{ transformOrigin: 'center', transformBox: 'fill-box' }}>
      {/* Football body - pointed oval */}
      <path d="M12 3 C17 3 21 7 21 12 C21 17 17 21 12 21 C7 21 3 17 3 12 C3 7 7 3 12 3Z" fill="currentColor" opacity="0.15" />
      <path d="M12 3 C17 3 21 7 21 12 C21 17 17 21 12 21 C7 21 3 17 3 12 C3 7 7 3 12 3Z" />
      {/* Center lace seam */}
      <line x1="12" y1="6" x2="12" y2="18" />
      {/* Lacing stitches */}
      <line x1="10" y1="9" x2="14" y2="9" />
      <line x1="10" y1="12" x2="14" y2="12" />
      <line x1="10" y1="15" x2="14" y2="15" />
    </g>
    <style>{`
      .group:hover .football-body {
        animation: football-throw 0.5s ease-in-out forwards;
      }
      @keyframes football-throw {
        0%   { transform: translate(0, 0) rotate(0deg); }
        50%  { transform: translate(5px, -7px) rotate(-20deg); }
        100% { transform: translate(0, 0) rotate(0deg); }
      }
    `}</style>
  </svg>
);

export const MusicIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 overflow-visible">
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
    <path d="M9 18V5l12-2v13" />
    <path d="M9 13h12" />
    {/* Floating note */}
    <g className="music-note" style={{ transformOrigin: 'center', transformBox: 'fill-box' }}>
      <path d="M12 8 l1.5-1 v3" strokeWidth="1.3" opacity="0.7" />
    </g>
    <style>{`
      .group:hover .music-note {
        animation: note-float 1s ease-in-out infinite;
      }
      @keyframes note-float {
        0%   { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(-10px); opacity: 0; }
      }
    `}</style>
  </svg>
);

export const AIIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    {/* Static rays */}
    <path d="M12 2v3" />
    <path d="M12 19v3" />
    <path d="M4.22 4.22l2.12 2.12" />
    <path d="M17.66 17.66l2.12 2.12" />
    <path d="M2 12h3" />
    <path d="M19 12h3" />
    <path d="M4.22 19.78l2.12-2.12" />
    <path d="M17.66 6.34l2.12-2.12" />
    {/* Animated spinning dashed circle */}
    <circle cx="12" cy="12" r="4" className="ai-ring" strokeDasharray="3 3" />
    {/* Solid inner circle */}
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    <style>{`
      .ai-ring {
        transform-origin: center;
        transform-box: fill-box;
      }
      .group:hover .ai-ring {
        animation: ai-spin 1.5s linear infinite;
      }
      @keyframes ai-spin {
        from { transform: rotate(0deg); }
        to   { transform: rotate(360deg); }
      }
    `}</style>
  </svg>
);
