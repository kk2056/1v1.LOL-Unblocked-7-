import React from 'react';

interface HeaderProps {
  onFullscreen: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onFullscreen }) => {
  return (
    <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-black text-xl italic text-white transform -rotate-6 shadow-lg shadow-blue-500/20">
          1v1
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white hidden sm:block">
            1v1.LOL <span className="text-blue-500">Unblocked 2026</span>
          </h1>
          <p className="text-xs text-slate-400 hidden sm:block">2026 School & Chromebook Optimized</p>
        </div>
      </div>

      <nav className="flex items-center gap-4">
        <button 
          onClick={onFullscreen}
          className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
          Full Screen
        </button>
        <a 
          href="https://1v1.lol" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-md text-sm font-bold shadow-lg shadow-blue-900/20 transition-all hover:scale-105"
        >
          Official
        </a>
      </nav>
    </header>
  );
};