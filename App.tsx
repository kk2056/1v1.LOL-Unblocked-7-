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

    // Initialize AdSense pushes
    const initAds = () => {
      try {
        // Only push once as there is exactly one <ins> element in this component's DOM
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("AdSense initialization error:", e);
      }
    };

    // Small timeout to ensure DOM is ready for ad injection
    const timer = setTimeout(initAds, 500);

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
          <AdPlaceholder label="Top Advertisement" />
        </div>

        {/* Mobile Experience Tip */}
        <div className="w-full max-w-4xl mx-auto px-4 mt-6">
          <div className="text-center text-white bg-purple-800 p-4 rounded-lg mb-6 max-w-md mx-auto shadow-lg border border-purple-600 font-medium">
            Tip: Rotate to landscape for better mobile experience! Perfect on phone or Chromebook.
          </div>

          {/* Prominent Fullscreen Button */}
          <button 
            onClick={toggleFullscreen} 
            className="block mx-auto bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl text-xl mb-6 shadow-lg transform transition hover:scale-105 active:scale-95"
          >
            Play Full Screen (Press F - Ultimate Experience!)
          </button>

          {/* Fullscreen Hint Text */}
          <div className="text-center text-white bg-blue-800 p-4 rounded-lg mb-6 max-w-lg mx-auto shadow-md border border-blue-600">
            Press F for fullscreen - No lag, full immersion on any device!
          </div>
        </div>

        {/* Game Area */}
        <div 
          ref={gameContainerRef}
          className={`w-full relative bg-black transition-all duration-300 shadow-2xl ${
            isFullscreen ? 'h-screen' : 'h-[70vh] md:h-[85vh] border-y border-slate-700'
          }`}
        >
          <GameFrame 
            src="https://1v1lol.ee/" 
            isFullscreen={isFullscreen} 
            onToggleFullscreen={toggleFullscreen}
          />
        </div>

        {/* Main AdSense Placement below Game for RPM Boost */}
        <div className="ad-bottom mt-8 text-center w-full max-w-4xl mx-auto px-4">
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-9774042341049510"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
        </div>

        <div className="w-full max-w-4xl mx-auto px-4 pb-12">
          {/* Strategy Text Section */}
          <div className="strategy mt-8 text-gray-300 p-6 bg-gray-800 rounded-lg border border-slate-700 shadow-inner">
            <h2 className="text-2xl font-bold text-white mb-4">Mastering 1v1.LOL Unblocked 2025</h2>
            <p className="mb-4">
              Restricted from playing Fortnite at school? <strong>1v1.LOL Unblocked 2025</strong> is the perfect alternative. This third-person shooter focuses heavily on the "Build and Shoot" mechanic. Here, your building speed is just as important as your aim. Use walls, ramps, and floors to instantly change the battlefield topography and secure the High Ground to dominate your opponents with a sniper or shotgun.
            </p>
            <p className="mb-4">
              <strong>Combat Tips:</strong> Practicing your "90s" (building 90-degree turns upwards) is mandatory. Jump into "JustBuild" mode to refine your muscle memory and keybinds. Don't panic when shot; build a defensive box first, then counter-attack. Being browser-based, it runs smoothly on any Chromebook, allowing you to enjoy competitive 1v1 duels with your classmates during breaks.
            </p>
          </div>

          {/* Internal Links Section */}
          <div className="other-games mt-8 bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">More Unblocked Games 2025</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none">
                <li className="mb-2"><a href="https://snakegame.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Snake Game Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://playzero2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Zero Lag Games Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://freegames2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Free Games Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://nodownload2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play No Download Games Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://unblocked2025.cfd" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Unblocked Games 2025 (Main)</a></li>
                <li className="mb-2"><a href="https://unblocked2025.sbs" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Best Unblocked Games 2025</a></li>
                <li className="mb-2"><a href="https://promax.it.com" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play ProMax Games Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://retrobowl2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Retro Bowl Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://1v1lol2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play 1v1.LOL Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://drift2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Drift Hunters Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://slope2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Slope Game Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://gd2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Geometry Dash Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://motox3m2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Moto X3M Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://surfers2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Subway Surfers Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://run32025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Run 3 Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://fireboy2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Fireboy & Watergirl Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://paperio2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Paper.io Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://driftbest2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Drift Hunters MAX Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://gd-full2025.site" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Geometry Dash Full Unblocked 2025</a></li>
                <li className="mb-2"><a href="https://subway2025.online" className="text-blue-400 hover:text-blue-300 transition-colors duration-200">Play Subway Surfers World Unblocked 2025</a></li>
            </ul>
          </div>
        </div>

        {/* Middle Ad Space */}
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <AdPlaceholder label="Middle Advertisement" />
        </div>

        {/* SEO Content Section */}
        <section className="w-full max-w-4xl mx-auto px-6 py-12 text-slate-300 prose prose-invert border-t border-slate-800">
          <h1 className="text-4xl font-bold text-white mb-6">1v1.LOL Unblocked 2025: Premium Gaming Experience</h1>
          <p className="text-lg leading-relaxed mb-4">
            Welcome to the premier destination for <strong>1v1.LOL Unblocked 2025</strong>. If you're looking for a way to play your favorite building and shooting game at school or work, you've come to the right place. Our version is optimized for high performance on <strong>Chromebooks</strong> and standard school networks with zero lag.
          </p>
        </section>

        <div className="w-full max-w-7xl mx-auto px-4 py-4">
          <AdPlaceholder label="Bottom Advertisement" />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;