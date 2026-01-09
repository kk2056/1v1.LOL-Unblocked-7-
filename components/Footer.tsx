import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-white font-bold text-lg mb-4">1v1.LOL Unblocked 2026</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            The ultimate building and shooting simulator. Play <strong>unblocked games 2026 school chromebook no download free play</strong> version of 1v1.lol for free on any device. 
          </p>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="text-slate-400 text-sm space-y-3">
            <li><a href="#" className="hover:text-blue-400 transition-colors">2026 Home</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Game Guide</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Controls</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Mirror Sites</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold text-lg mb-4">SEO Tags</h3>
          <div className="flex flex-wrap gap-2">
            {['1v1.lol', 'Unblocked 2026', 'School Games', 'Chromebook', 'No Download', 'Free Play', 'Shooting', 'Building'].map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-widest bg-slate-800 text-slate-500 px-2 py-1 rounded hover:bg-slate-700 transition-colors cursor-default border border-slate-700">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-900 text-center">
        <p className="text-slate-600 text-xs">
          &copy; {currentYear} 1v1.LOL Unblocked 2026 Hub. School & Chromebook Certified Edition.
          The game "1v1.LOL" is the property of its respective owners.
        </p>
      </div>
    </footer>
  );
};