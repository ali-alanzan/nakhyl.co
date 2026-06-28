import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer({ isNight }) {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [dahabTime, setDahabTime] = useState('');
  
  // Track real-time window path location
  const location = useLocation();
  const currentPath = location.pathname;

  // Synchronize dynamic Egypt time telemetry loop
  useEffect(() => {
    const runClock = () => {
      const format = { timeZone: 'Africa/Cairo', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      setDahabTime(new Intl.DateTimeFormat('en-US', format).format(new Date()));
    };
    runClock();
    const interval = setInterval(runClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const themeBorder = isNight ? 'border-amber-600/20' : 'border-[#2D4A3E]/15';
  const navHover = isNight ? 'hover:text-[#D97706]' : 'hover:text-emerald-700';

  // Navigation Links Matrix Structure
  const footerLinks = [
    { name: 'oasis home', path: '/' },
    { name: 'our story', path: '/about' },
    { name: 'kitchen menu', path: '/menu' },
    { name: 'gatherings hub', path: '/gathering' },
    { name: 'sinai journal', path: '/journal' },
    { name: 'connect wire', path: '/connect' }
  ];

  return (
    <footer className={`w-full border-t ${themeBorder} pt-16 pb-8 mt-24 transition-all duration-700 relative z-10`}>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Bio Frame & Local Time Telemetry */}
        <div className="md:col-span-2 space-y-5">
          <h3 className="font-serif text-3xl font-light lowercase">nakhyl zone</h3>
          <p className="font-sans text-sm tracking-wide leading-relaxed opacity-70 max-w-md">
            A private, raw bohemian sanctuary concealed inside Dahab. Where cold mountain wind sweeps through heavy ancient palm groves, framing curated spaces for live acoustic jams and open-air cinema nights.
          </p>
          
          <div className="inline-flex items-center space-x-2.5 text-[11px] font-mono tracking-widest opacity-60 bg-black/5 dark:bg-white/5 py-1.5 px-3 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping"></span>
            <span>DAHAB METRIC: {dahabTime || '00:00:00'}</span>
          </div>
        </div>

        {/* Navigation Utilities Matrix */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.25em] mb-4 text-[#D97706]">Sanctuary Navigation</h4>
          <ul className="space-y-2 text-sm tracking-wide">
            {footerLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className={`transition-all lowercase block duration-300 ${navHover} ${
                      isActive 
                        ? 'text-[#D97706] font-medium pl-1 opacity-100' 
                        : 'opacity-75'
                    }`}
                  >
                    {isActive && <span className="mr-1.5 text-[10px] inline-block translate-y-[-1px]">➔</span>}
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Ambient Soundscape Controller Box (The Raw Contour Principle Applied) */}
        <div className={`p-6 rounded-[2rem_1rem_2.5rem_1.5rem] border ${themeBorder} bg-black/5 dark:bg-white/5 backdrop-blur-sm relative overflow-hidden flex flex-col justify-between`}>
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-60 block mb-1">Immersion Engine</span>
            <h4 className="font-serif text-lg font-light leading-snug">Listen to the Oasis right now</h4>
          </div>
          
          <div className="mt-6 flex items-center space-x-4">
            <button 
              onClick={() => setIsAudioPlaying(!isAudioPlaying)}
              className="w-12 h-12 rounded-full bg-[#D97706] text-[#0A1118] flex items-center justify-center transition-transform active:scale-90 hover:brightness-110 shadow-md"
            >
              {isAudioPlaying ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>
            
            <div className="flex flex-col">
              <span className="text-xs font-medium tracking-wide">
                {isAudioPlaying ? 'Streaming Ambient Layer' : 'Soundscape Muted'}
              </span>
              <span className="text-[10px] opacity-60 tracking-wider">
                {isAudioPlaying ? 'Palms, Embers, Brushing Wind' : 'Click to untether mind'}
              </span>
            </div>
          </div>

          {/* Micro-animated visual sound waves */}
          {isAudioPlaying && (
            <div className="absolute bottom-0 left-0 right-0 h-1.5 flex items-end justify-center space-x-1 opacity-30 px-6">
              <div className="bg-[#D97706] w-full h-3 animate-[pulse_0.8s_infinite]"></div>
              <div className="bg-[#D97706] w-full h-1 animate-[pulse_1.2s_infinite_0.1s]"></div>
              <div className="bg-[#D97706] w-full h-4 animate-[pulse_1s_infinite_0.3s]"></div>
            </div>
          )}
        </div>

      </div>

      {/* Compliance / Meta Block */}
      <div className={`max-w-7xl mx-auto px-6 pt-8 border-t ${themeBorder} flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-widest text-center md:text-left opacity-60 font-mono`}>
        <div>
          &copy; {new Date().getFullYear()} NAKHYL ZONE DAHAB. TRADITION UNBROKEN.
        </div>
        <div className="flex space-x-6">
          <Link to="/compliance" className="hover:text-[#D97706] transition-colors lowercase">compliance & digital guidelines</Link>
          <span className="opacity-20">|</span>
          <span className="lowercase">crafted for slow hospitality. by <a href="https://aiwesoft.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#D97706] transition-colors"> Ai We Soft </a></span>
        </div>
      </div>
    </footer>
  );
}