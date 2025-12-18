
import React from 'react';

interface GameFrameProps {
  src: string;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const GameFrame: React.FC<GameFrameProps> = ({ src, isFullscreen, onToggleFullscreen }) => {
  return (
    <div className="w-full h-full relative group">
      <iframe
        src={src}
        className="w-full h-full"
        title="1v1.LOL Unblocked 2025"
        allow="autoplay; fullscreen; pointer-lock"
        sandbox="allow-scripts allow-same-origin allow-modals allow-popups allow-forms allow-pointer-lock"
        loading="lazy"
      />
      
      {/* Fullscreen Overlay Button (shows on hover) */}
      {!isFullscreen && (
        <button
          onClick={onToggleFullscreen}
          className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8V4m0 0h4M3 4l4 4m8 0V4m0 0h-4m4 0l-4 4m-8 4v4m0 0h4m-4 0l4-4m8 4v-4m0 4h-4m4 0l-4-4" />
          </svg>
          Full Screen
        </button>
      )}
    </div>
  );
};
