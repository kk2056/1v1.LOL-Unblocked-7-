
import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">1v1.LOL Unblocked 2025</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            The ultimate building and shooting simulator. Play 1v1 lol unblocked for free on any device. 
            Chromebook friendly version for 2025 school season.
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="text-slate-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">How to Play</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Controls</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {['1v1.lol', 'Unblocked', 'Games', 'School', 'Shooting', 'Building', 'Action', 'Multiplayer'].map(tag => (
              <span key={tag} className="text-xs bg-slate-800 text-slate-400 px-2 py-1 rounded hover:bg-slate-700 transition-colors cursor-default">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-xs">
          &copy; {currentYear} 1v1.LOL Unblocked 2025 School Edition. All rights reserved. 
          The game "1v1.LOL" is the property of its respective owners.
        </p>
      </div>
    </footer>
  );
};
