
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

        {/* Bottom Ad Space */}
        <div className="w-full max-w-7xl mx-auto px-4 py-4">
          <AdPlaceholder label="Middle Advertisement" />
        </div>

        {/* SEO Content Section */}
        <section className="w-full max-w-4xl mx-auto px-6 py-12 text-slate-300 prose prose-invert">
          <h1 className="text-4xl font-bold text-white mb-6">1v1.LOL Unblocked 2025: The Best School Game</h1>
          <p className="text-lg leading-relaxed mb-4">
            Welcome to the premier destination for <strong>1v1.LOL Unblocked 2025</strong>. If you're looking for a way to play your favorite building and shooting game at school or work, you've come to the right place. Our version is optimized for high performance on <strong>Chromebooks</strong> and standard school networks.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h2 className="text-xl font-semibold text-blue-400 mb-3">Why Play 1v1.LOL Unblocked?</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>No download or installation required</li>
                <li>Bypass school web filters effortlessly</li>
                <li>Low latency and high FPS support</li>
                <li>Play with friends in private 1v1 rooms</li>
                <li>Practice building skills without limits</li>
              </ul>
            </div>
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700">
              <h2 className="text-xl font-semibold text-purple-400 mb-3">Controls Guide</h2>
              <ul className="list-none space-y-2">
                <li><span className="font-mono text-white bg-slate-700 px-2 rounded">WASD</span> - Movement</li>
                <li><span className="font-mono text-white bg-slate-700 px-2 rounded">Space</span> - Jump</li>
                <li><span className="font-mono text-white bg-slate-700 px-2 rounded">Left Click</span> - Shoot / Build</li>
                <li><span className="font-mono text-white bg-slate-700 px-2 rounded">Z/X/C/V</span> - Build Pieces</li>
                <li><span className="font-mono text-white bg-slate-700 px-2 rounded">F/1/2</span> - Switch Weapons</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-white mt-8 mb-4">1v1.LOL School 2025 Update</h2>
          <p className="mb-4">
            Our 2025 version features all the latest weapons, skins, and game modes. Whether you are playing the classic <strong>1v1 Battle</strong>, the <strong>Zone Royale</strong>, or the <strong>Box Fight</strong>, you'll experience zero interruptions. We host the game on secure, high-speed servers to ensure your gaming experience is "Unblocked" in every sense of the word.
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
