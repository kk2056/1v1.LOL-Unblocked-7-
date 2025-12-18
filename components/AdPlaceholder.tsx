
import React from 'react';

interface AdPlaceholderProps {
  label: string;
}

export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ label }) => {
  return (
    <div className="w-full bg-slate-800/50 border-2 border-dashed border-slate-700 rounded-lg h-24 md:h-32 flex flex-col items-center justify-center overflow-hidden transition-all hover:border-slate-600">
      <span className="text-slate-500 text-xs font-semibold uppercase tracking-widest">{label}</span>
      <div className="mt-2 flex items-center gap-2">
        <div className="h-1 w-8 bg-slate-700 rounded"></div>
        <div className="h-1 w-16 bg-slate-700 rounded"></div>
        <div className="h-1 w-8 bg-slate-700 rounded"></div>
      </div>
      {/* Real Adsense code would go here in production */}
      {/* <ins className="adsbygoogle" ... /> */}
    </div>
  );
};
