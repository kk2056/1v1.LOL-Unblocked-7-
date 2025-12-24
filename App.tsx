
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
        alert(`Error attempting to enable fullscreen: ${err.message}`);
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const gameLinks = [
    { name: "Play Snake Game Unblocked 2025", url: "https://snakegame.cfd" },
    { name: "Play Zero Lag Games Unblocked 2025", url: "https://playzero2025.sbs" },
    { name: "Play Free Games Unblocked 2025", url: "https://freegames2025.sbs" },
    { name: "Play No Download Games Unblocked 2025", url: "https://nodownload2025.online" },
    { name: "Play Unblocked Games 2025 (Main)", url: "https://unblocked2025.cfd" },
    { name: "Play Best Unblocked Games 2025", url: "https://unblocked2025.sbs" },
    { name: "Play ProMax Games Unblocked 2025", url: "https://promax.it.com" },
    { name: "Play Retro Bowl Unblocked 2025", url: "https://retrobowl2025.online" },
    { name: "Play 1v1.LOL Unblocked 2025", url: "https://1v1lol2025.online" },
    { name: "Play Drift Hunters Unblocked 2025", url: "https://drift2025.site" },
    { name: "Play Slope Game Unblocked 2025", url: "https://slope2025.online" },
    { name: "Play Geometry Dash Unblocked 2025", url: "https://gd2025.site" },
    { name: "Play Moto X3M Unblocked 2025", url: "https://motox3m2025.online" },
    { name: "Play Subway Surfers Unblocked 2025", url: "https://surfers2025.site" },
    { name: "Play Run 3 Unblocked 2025", url: "https://run32025.online" },
    { name: "Play Fireboy & Watergirl Unblocked 2025", url: "https://fireboy2025.site" },
    { name: "Play Paper.io Unblocked 2025", url: "https://paperio2025.online" },
    { name: "Play Drift Hunters MAX Unblocked 2025", url: "https://driftbest2025.site" },
    { name: "Play Geometry Dash Full Unblocked 2025", url: "https://gd-full2025.site" },
    { name: "Play Subway Surfers World Unblocked 2025", url: "https://subway2025.online" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header onFullscreen={toggleFullscreen} />
      
      <main className="flex-grow flex flex-col items-center bg-slate-900">
        {/* Top Ad Space */}
        <div className="w-full max-w-7xl mx-auto px-4 py-2">
          <AdPlaceholder label="Top Advertisement" />
        </div>

        {/* Game Area */}
        <div 
          ref={gameContainerRef}
          className={`w-full relative bg-black transition-all duration-300 ${
            isFullscreen ? 'h-screen' : 'h-[70vh] md:h-[85vh]'
          }`}
        >
          <GameFrame 
            src="https://1v1lol.ee/" 
            isFullscreen={isFullscreen} 
            onToggleFullscreen={toggleFullscreen}
          />
        </div>

        <div className="w-full max-w-4xl mx-auto px-4">
          {/* Strategy Tips Section */}
          <div className="strategy mt-8 text-gray-300 p-4 bg-gray-800 rounded-lg">
            Restricted from playing Fortnite at school? 1v1.LOL Unblocked 2025 is the perfect alternative. This third-person shooter focuses heavily on the "Build and Shoot" mechanic. Here, your building speed is just as important as your aim. Use walls, ramps, and floors to instantly change the battlefield topography and secure the High Ground to dominate your opponents with a sniper or shotgun.
            <br /><br />
            Combat Tips: Practicing your "90s" (building 90-degree turns upwards) is mandatory. Jump into "JustBuild" mode to refine your muscle memory and keybinds. Don't panic when shot; build a defensive box first, then counter-attack. Being browser-based, it runs smoothly on any Chromebook, allowing you to enjoy competitive 1v1 duels with your classmates during breaks.
          </div>

          {/* More Games Internal Links Section */}
          <div className="other-games mt-8 bg-gray-900 p-6 rounded-lg shadow-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-600 pb-2">More Unblocked Games 2025</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 list-none">
              {gameLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href={link.url} 
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Ad Space */}
        <div className="w-full max-w-7xl mx-auto px-4 py-8">
          <AdPlaceholder label="Middle Advertisement" />
        </div>

        {/* Existing SEO Content Section */}
        <section className="w-full max-w-4xl mx-auto px-6 py-12 text-slate-300 prose prose-invert border-t border-slate-800">
          <h1 className="text-4xl font-bold text-white mb-6">1v1.LOL Unblocked 2025: The Best School Game</h1>
          <p className="text-lg leading-relaxed mb-4">
            Welcome to the premier destination for <strong>1v1.LOL Unblocked 2025</strong>. If you're looking for a way to play your favorite building and shooting game at school or work, you've come to the right place. Our version is optimized for high performance on <strong>Chromebooks</strong> and standard school networks.
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
