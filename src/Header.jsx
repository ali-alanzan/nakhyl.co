import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header({ isNight, setIsNight, onOpenCampfire }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  // Design Tokens mapped to states
  const themeText = isNight ? 'text-[#F4EBE1]' : 'text-[#2D4A3E]';
  const themeBorder = isNight ? 'border-amber-600/20' : 'border-[#2D4A3E]/15';
  const themeBg = isNight ? 'bg-[#0A1118]/90' : 'bg-[#F4EBE1]/90';
  const navHover = isNight ? 'hover:text-[#D97706]' : 'hover:text-emerald-700';

  const navLinks = [
    { name: 'oasis', path: '/' },
    { name: 'story', path: '/about' },
    { name: 'kitchen', path: '/menu' },
    { name: 'gatherings', path: '/gathering' },
    { name: 'journal', path: '/journal' },
    { name: 'connect', path: '/connect' },
  ];

  return (
    <header className={`w-full border-b ${themeBorder} ${themeBg} backdrop-blur-md sticky top-0 z-40 transition-all duration-700`}>
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Brand Identity / Logo */}
        <Link to="/" className="flex flex-col items-start group">
          <span className={`font-serif text-2xl tracking-normal leading-none font-light lowercase ${themeText}`}>
            nakhyl <span className="text-[#D97706]">zone</span>
          </span>
          <span className="text-[9px] uppercase tracking-[0.25em] opacity-60 mt-1 font-sans text-current">
            dahab • cultural oasis
          </span>
        </Link>

        {/* Desktop Editorial Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${themeText} ${navHover} ${
                  isActive ? 'text-[#D97706] underline underline-offset-8 decoration-1' : 'opacity-80'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Global Accent Utility Controls */}
        <div className="flex items-center space-x-3.5">
          
          {/* Hook: "Virtual Campfire" Pop-Up Trigger */}
          <button 
            onClick={onOpenCampfire}
            className="p-2.5 rounded-[1rem_0.5rem_1.2rem_0.6rem] border border-amber-500/30 bg-amber-500/5 hover:bg-amber-500/20 text-[#D97706] transition-all duration-300 group"
            title="Ignite Virtual Campfire"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 animate-pulse">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.467 5.99 5.99 0 0 0-1.925 3.546 5.974 5.974 0 0 1-2.133-1A3.75 3.75 0 0 0 12 18Z" />
            </svg>
          </button>

          {/* Core Feature: Day/Night State Switcher */}
          <button
            onClick={() => setIsNight(!isNight)}
            className={`p-2.5 rounded-[0.5rem_1rem_0.6rem_1.2rem] border ${themeBorder} flex items-center justify-center transition-transform duration-500 active:scale-95`}
            title={isNight ? "Day Mode (Chase the Sun)" : "Night Mode (Follow the Sparks)"}
          >
            {isNight ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-amber-400">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m0 13.5V21M4.22 4.22l1.585 1.585m12.39 12.39l1.585 1.585M12 7.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9ZM3.75 12h2.25m13.5 0H21M5.805 18.195l1.585-1.585m12.39-12.39l1.585-1.585" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[#2D4A3E]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
              </svg>
            )}
          </button>

          {/* Mobile Menu Toggle button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className={`md:hidden p-2.5 text-current opacity-80`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isMobileMenuOpen && (
        <nav className={`md:hidden px-6 pb-6 pt-2 flex flex-col space-y-4 border-t ${themeBorder} ${themeBg}`}>
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm uppercase tracking-[0.15em] py-1 font-medium transition-colors duration-300 ${themeText} ${
                  isActive ? 'text-[#D97706]' : 'opacity-70'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}