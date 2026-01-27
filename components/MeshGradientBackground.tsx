import React from 'react';

export const MeshGradientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
       
       {/* Aurora Effect Container */}
       <div className="absolute inset-0 w-full h-full">
          
          {/* Violet/Purple Blob - Top Left */}
          {/* Adds depth and richness to the top corner */}
          <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 dark:opacity-20 animate-blob bg-violet-200 dark:bg-violet-700"></div>
          
          {/* Mint/Teal Blob - Top Right */}
          {/* Provides a fresh, modern contrast */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 dark:opacity-20 animate-blob animation-delay-2000 bg-emerald-200 dark:bg-emerald-600"></div>
          
          {/* Soft Blue Blob - Bottom Center */}
          {/* Grounds the design with a calming blue tone */}
          <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[100px] opacity-40 dark:opacity-20 animate-blob animation-delay-4000 bg-blue-200 dark:bg-blue-600"></div>
          
          {/* Optional Extra Light/Accent Blob for movement */}
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-30 dark:opacity-20 animate-blob animation-delay-2000 bg-indigo-200 dark:bg-indigo-600"></div>

       </div>
    </div>
  );
};