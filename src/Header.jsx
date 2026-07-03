import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, Menu, Moon, Sun, X } from 'lucide-react';

export default function Header({ isNight, setIsNight, onOpenCampfire }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [localIsNight, setLocalIsNight] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const activeIsNight = isNight ?? localIsNight;

  // Design Tokens mapped to states
  const themeText = activeIsNight ? 'text-[#F4EBE1]' : 'text-[#2D4A3E]';
  const themeBorder = activeIsNight ? 'border-amber-600/20' : 'border-[#2D4A3E]/15';
  const themeBg = activeIsNight ? 'bg-[#0A1118]/90' : 'bg-[#F4EBE1]/90';
  const navHover = activeIsNight ? 'hover:text-[#D97706]' : 'hover:text-emerald-700';

  const toggleNight = () => {
    if (setIsNight) {
      setIsNight(!activeIsNight);
      return;
    }

    setLocalIsNight((value) => !value);
  };

  const openCampfire = () => {
    if (onOpenCampfire) {
      onOpenCampfire();
    }
  };

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
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between gap-3 px-4 sm:h-24 sm:px-6">
        
        {/* Brand Identity / Logo */}
        <Link to="/" className="group flex min-w-0 flex-col items-start">
          <span className={`font-serif text-xl tracking-normal leading-none font-light lowercase sm:text-2xl ${themeText}`}>
            nakhyl <span className="text-[#D97706]">zone</span>
          </span>
          <span className="mt-1 max-w-[8.5rem] text-[8px] uppercase tracking-[0.22em] opacity-60 sm:max-w-none sm:text-[9px] sm:tracking-[0.25em] font-sans text-current">
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
        <div className="flex shrink-0 items-center gap-2 sm:gap-3.5">
          
          {/* Hook: "Virtual Campfire" Pop-Up Trigger */}
          <button 
            type="button"
            onClick={openCampfire}
            className="hidden h-11 w-11 items-center justify-center rounded-[1rem_0.5rem_1.2rem_0.6rem] border border-amber-500/30 bg-amber-500/5 text-[#D97706] transition-all duration-300 hover:bg-amber-500/20 min-[430px]:inline-flex"
            title="Ignite Virtual Campfire"
            aria-label="Open virtual campfire story"
          >
            <Flame className="h-5 w-5" aria-hidden="true" />
          </button>

          {/* Core Feature: Day/Night State Switcher */}
          <button
            type="button"
            onClick={toggleNight}
            className={`flex h-11 w-11 items-center justify-center rounded-[0.5rem_1rem_0.6rem_1.2rem] border ${themeBorder} bg-current/[0.04] transition-transform duration-500 active:scale-95`}
            title={activeIsNight ? "Day Mode (Chase the Sun)" : "Night Mode (Follow the Sparks)"}
            aria-label={activeIsNight ? 'Switch to day mode' : 'Switch to night mode'}
          >
            {activeIsNight ? <Sun className="h-5 w-5 text-amber-400" aria-hidden="true" /> : <Moon className="h-5 w-5 text-[#2D4A3E]" aria-hidden="true" />}
          </button>

          {/* Mobile Menu Toggle button */}
          <button 
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
            className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-[1rem_0.7rem_1.2rem_0.8rem] bg-[#D97706] text-[#0A1118] shadow-[0_10px_26px_rgba(217,119,6,0.28)] transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:ring-offset-2 focus:ring-offset-transparent md:hidden"
            aria-label={isMobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
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
