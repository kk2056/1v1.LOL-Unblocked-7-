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

  // Keyboard shortcut 'F' for fullscreen and AdSense initialization
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Google AdSense initialization - optimized for multiple slots
    const initAds = () => {
      const adContainers = document.querySelectorAll('.adsbygoogle-container');
      adContainers.forEach(container => {
        const ins = container.querySelector('ins.adsbygoogle');
        if (ins && !ins.hasAttribute('data-adsbygoogle-status')) {
          try {
            // @ts-ignore
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          } catch (e) {
            console.debug("AdSense: Slot already initialized or pending.");
          }
        }
      });
    };

    // Delay initialization to ensure DOM and Layout are stable for RPM optimization
    const timer = setTimeout(initAds, 1000);

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
        {/* Top Ad Space */}
        <div className="w-full max-w-7xl mx-auto px-4 py-2">
          <AdPlaceholder label="Top Banner Ad" />
        </div>

        {/* 1. Mobile & Chromebook Experience Tip */}
        <div className="w-full max-w-4xl mx-auto px-4 mt-6">
          <div className="text-center text-white bg-purple-800 p-4 rounded-lg mb-6 max-w-md mx-auto shadow-xl border border-purple-500 font-semibold animate-pulse-subtle">
            Tip: Rotate to landscape for the best 2026 mobile experience! Optimized for Chromebook and Tablets.
          </div>

          {/* 2. Optimized High-Impact Fullscreen Button */}
          <button 
            onClick={toggleFullscreen} 
            className="block mx-auto bg-green-600 hover:bg-green-500 text-white font-black py-5 px-10 rounded-2xl text-2xl mb-4 shadow-[0_8px_0_rgb(22,101,52)] active:shadow-none active:translate-y-1 transform transition-all hover:scale-105"
          >
            PLAY FULL SCREEN (PRESS F)
          </button>

          {/* 3. Immersive Fullscreen Hint */}
          <div className="text-center text-white bg-blue-900/60 p-3 rounded-lg mb-8 max-w-lg mx-auto border border-blue-700 backdrop-blur-sm">
            Ultimate 1v1.LOL Experience: No lag, 120FPS feel, full immersion!
          </div>
        </div>

        {/* Game Area */}
        <div 
          ref={gameContainerRef}
          className={`w-full relative bg-black transition-all duration-500 shadow-2xl ${
            isFullscreen ? 'h-screen' : 'h-[65vh] md:h-[80vh] border-y border-slate-800'
          }`}
        >
          <GameFrame 
            src="https://1v1lol.ee/" 
            isFullscreen={isFullscreen} 
            onToggleFullscreen={toggleFullscreen}
          />
        </div>

        {/* 4. Strategic AdSense Placement (Below Game) for High RPM */}
        <div className="ad-bottom mt-8 text-center w-full max-w-4xl mx-auto px-4 adsbygoogle-container" style={{ minHeight: '120px' }}>
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-9774042341049510"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>

        <div className="w-full max-w-4xl mx-auto px-4 pb-16">
          {/* 2026 Strategy & SEO Content Section */}
          <div className="strategy mt-12 text-gray-300 p-8 bg-gray-800/80 rounded-2xl border border-slate-700 shadow-2xl backdrop-blur-md">
            <h2 className="text-3xl font-extrabold text-white mb-6">Unblocked Games 2026 School Guide: 1v1.LOL</h2>
            <p className="mb-6 leading-relaxed text-lg">
              Are you searching for the best <strong>unblocked games 2026 school chromebook no download</strong>? Look no further. Our 2026 edition of 1v1.LOL is fully optimized to bypass restrictions while maintaining ultra-low latency. Whether you are in the classroom or at home, you can jump into the action instantly.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                <h3 className="text-blue-400 font-bold mb-2 uppercase text-sm tracking-widest">2026 Pro Tactics</h3>
                <p className="text-sm">Master the 'Triple-Ramp' build and the fast-edit shotgun combo. In 2026, the meta is all about speed and precision editing on school networks.</p>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-xl border border-slate-700">
                <h3 className="text-green-400 font-bold mb-2 uppercase text-sm tracking-widest">Chromebook Setup</h3>
                <p className="text-sm">Turn off hardware acceleration for a smoother experience. This version of 1v1.LOL requires <strong>no download</strong> and runs directly in your browser.</p>
              </div>
            </div>
            <p className="mt-8 italic text-slate-400 border-l-4 border-blue-600 pl-4">
              "The most reliable source for unblocked games 2026 – play 1v1.LOL anytime, anywhere."
            </p>
          </div>

          {/* Internal Links (SEO Circulation) */}
          <div className="other-games mt-12 bg-slate-950/40 p-8 rounded-2xl shadow-xl border border-slate-800">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
              Trending Unblocked Games 2026
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {['Snake Game', 'Zero Lag Games', 'Retro Bowl', 'Drift Hunters', 'Slope Game', 'Geometry Dash', 'Moto X3M', 'Subway Surfers', 'Run 3', 'Fireboy & Watergirl', 'Paper.io', 'Subway Surfers World'].map((game) => (
                  <li key={game}>
                    <a href={`https://${game.toLowerCase().replace(/\s+/g, '')}2026.online`} className="block p-3 rounded-lg bg-slate-800/30 hover:bg-blue-600/20 border border-slate-700 hover:border-blue-500 transition-all text-blue-300 hover:text-white font-medium truncate">
                      Play {game} Unblocked 2026
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* SEO & Engagement Section */}
        <section className="w-full max-w-4xl mx-auto px-6 py-16 text-slate-300 border-t border-slate-800">
          <h1 className="text-5xl font-black text-white mb-8 tracking-tighter">1v1.LOL UNBLOCKED 2026</h1>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Experience the next generation of building-based combat. <strong>1v1.LOL Unblocked 2026</strong> brings you the most stable servers and updated game modes for the new academic year. Our platform is the #1 hub for <strong>unblocked games 2026 school</strong> environments, ensuring you never miss a beat of the action.
            </p>
            <p>
              With <strong>no download</strong> required, you can play directly on your <strong>Chromebook</strong> or any mobile device. We focus on performance and accessibility, making this the premium version of 1v1 lol unblocked for students and casual gamers alike.
            </p>
          </div>
        </section>

        {/* Bottom Banner for Additional Revenue */}
        <div className="w-full max-w-7xl mx-auto px-4 py-8 adsbygoogle-container">
          <AdPlaceholder label="Footer Recommendation Ad" />
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-9774042341049510"
               data-ad-format="autorelaxed"
               data-ad-slot="9876543210"></ins>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
