import React, { useState, useRef, useEffect } from 'react';
import { GameFrame } from './components/GameFrame';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AdPlaceholder } from './components/AdPlaceholder';

const App: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const gameContainerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!gameContainerRef.current) return;

    if (!document.fullscreenElement) {
      gameContainerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Optimized AdSense initialization for multiple slots
    const initAds = () => {
      try {
        const ads = document.querySelectorAll('.adsbygoogle:not([data-adsbygoogle-status])');
        ads.forEach(() => {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        });
      } catch (e) {
        console.debug("AdSense initialization skip or pending.");
      }
    };

    const timer = setTimeout(initAds, 1500);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header onFullscreen={toggleFullscreen} />
      
      <main className="flex-grow flex flex-col items-center bg-slate-900">
        {/* Top Header Ad */}
        <div className="w-full max-w-7xl mx-auto px-4 py-4">
          <AdPlaceholder label="Leaderboard Ad" />
        </div>

        {/* Hero Keywords Section */}
        <div className="w-full max-w-4xl mx-auto px-4 mt-4 text-center">
          <p className="text-blue-400 font-bold text-sm uppercase tracking-widest mb-2">New Release</p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            1v1.LOL <span className="text-blue-500">Unblocked Games 2026</span>
          </h2>
          
          <div className="bg-purple-900/40 border border-purple-500/50 p-4 rounded-xl mb-6 shadow-2xl backdrop-blur-sm">
            <p className="text-white font-medium">
              🚀 <strong>Unblocked games 2026 school chromebook no download free play</strong>: 
              Our 1v1.LOL mirrors are specially optimized for high-speed performance on restricted networks.
            </p>
          </div>

          <button 
            onClick={toggleFullscreen} 
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white font-black py-4 px-10 rounded-2xl text-xl mb-8 shadow-[0_6px_0_rgb(21,128,61)] active:shadow-none active:translate-y-1 transition-all transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
            PLAY FULLSCREEN (F)
          </button>
        </div>

        {/* Game Area */}
        <div 
          ref={gameContainerRef}
          className={`w-full relative bg-black transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)] ${
            isFullscreen ? 'h-screen' : 'h-[60vh] md:h-[80vh] border-y border-slate-800'
          }`}
        >
          <GameFrame 
            src="https://1v1lol.ee/" 
            isFullscreen={isFullscreen} 
            onToggleFullscreen={toggleFullscreen}
          />
        </div>

        {/* Crucial AdSense Placement - Below Game (Max RPM) */}
        <div className="w-full max-w-4xl mx-auto px-4 mt-8">
          <div className="bg-slate-800/30 p-2 rounded-lg border border-slate-700/50">
            <ins className="adsbygoogle"
                 style={{ display: 'block' }}
                 data-ad-client="ca-pub-9774042341049510"
                 data-ad-format="auto"
                 data-full-width-responsive="true"></ins>
          </div>
        </div>

        {/* 2026 Strategy Content Section */}
        <div className="w-full max-w-4xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Master 1v1.LOL 2026 Meta</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                The 2026 season introduces faster edit speeds and tighter building mechanics. To dominate in <strong>unblocked games 2026 school</strong> environments, ensure you practice your '90s' in the JustBuild mode. High ground is more critical than ever.
              </p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-center gap-2"><span className="text-blue-500">✔</span> Zero Lag Chromebook Optimization</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✔</span> No Download Required</li>
                <li className="flex items-center gap-2"><span className="text-blue-500">✔</span> Full Free Play Access</li>
              </ul>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Why Choose Our 2026 Mirror?</h3>
              <p className="text-slate-400 text-base leading-relaxed">
                Finding a reliable <strong>unblocked games 2026 school chromebook no download free play</strong> site is difficult. We utilize premium hosting to ensure that even on crowded school Wi-Fi, your 1v1 duels remain smooth. Our platform is updated weekly with the latest game patches.
              </p>
            </div>
          </div>

          {/* Internal Games Links */}
          <div className="mt-12 bg-slate-950/50 p-8 rounded-2xl border border-slate-800">
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-center">Unblocked Games 2026 Network</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {['Snake', 'Retro Bowl', 'Geometry Dash', 'Slope', 'Drift Hunters', 'Moto X3M', 'Subway Surfers', 'Run 3'].map(game => (
                <a key={game} href="#" className="p-3 bg-slate-800/50 hover:bg-blue-600/20 border border-slate-700 hover:border-blue-500 rounded-lg text-center text-sm text-blue-300 transition-all font-medium">
                  {game} 2026
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <AdPlaceholder label="Recommended for You" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;