import React, { useState } from 'react';

export default function UtilityCompliancePage() {
  // Global theme state to support both Day (☀️ Chase the Sun) and Night (🌙 Follow the Sparks) states
  const [isNight, setIsNight] = useState(false);

  // Active sub-tab for legal documents
  const [activeTab, setActiveTab] = useState('privacy');

  const toggleTheme = () => setIsNight(!isNight);

  // Styling maps based on design tokens
  const themeClasses = {
    bg: isNight ? 'bg-[#0A1118]' : 'bg-[#F4EBE1]',
    text: isNight ? 'text-[#F4EBE1]' : 'text-[#2D4A3E]',
    textMuted: isNight ? 'text-[#F4EBE1]/70' : 'text-[#2D4A3E]/70',
    border: isNight ? 'border-[#F4EBE1]/15' : 'border-[#2D4A3E]/15',
    cardBg: isNight ? 'bg-[#121B24]' : 'bg-[#EFE5DA]',
    accentText: isNight ? 'text-[#D97706]' : 'text-[#2D4A3E]',
    accentBg: 'bg-[#D97706]',
  };

  return (
    <div className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} transition-colors duration-1000 font-sans relative overflow-hidden pb-24`}>
      
      {/* Dynamic Theme Switcher & Floating Utilities */}
      <div className="absolute top-8 right-8 z-50 flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className={`flex items-center gap-2 px-4 py-2 rounded-full border ${themeClasses.border} text-xs uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95`}
        >
          {isNight ? (
            <>
              <span className="text-[#D97706]">🌙</span> Follow the Sparks
            </>
          ) : (
            <>
              <span className="text-amber-600">☀️</span> Chase the Sun
            </>
          )}
        </button>
      </div>

      {/* Decorative Organic Backdrop Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none bg-[#D97706]" />
      <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full blur-[150px] opacity-10 pointer-events-none bg-[#2D4A3E]" />

      {/* Hero Header */}
      <header className="max-w-5xl mx-auto pt-24 px-6 md:px-12 text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.3em] opacity-60 block mb-3 font-medium">
          Nakhyl Zone Dahab
        </span>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl lowercase leading-tight mb-6">
          utility &amp; compliance
        </h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base tracking-wide leading-relaxed font-light opacity-80">
          Honoring local Sinai traditions while ensuring frictionless global regulatory transparency. Here lies our structural foundation.
        </p>
      </header>

      {/* SECTION 1: CLEAN LEGAL TYPOGRAPHY CANVAS */}
      <section className="max-w-5xl mx-auto mt-16 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Document Selection Tabs */}
        <div className="lg:col-span-1 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible whitespace-nowrap pb-4 lg:pb-0 border-b lg:border-b-0 ${themeClasses.border}">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-3 text-left rounded-xl text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
              activeTab === 'privacy'
                ? `${themeClasses.cardBg} border-l-4 border-[#D97706] pl-5 text-[#D97706]`
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            Privacy Framework
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-3 text-left rounded-xl text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
              activeTab === 'terms'
                ? `${themeClasses.cardBg} border-l-4 border-[#D97706] pl-5 text-[#D97706]`
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            Terms of Sanctuary
          </button>
          <button
            onClick={() => setActiveTab('nomad')}
            className={`px-4 py-3 text-left rounded-xl text-xs uppercase tracking-widest font-medium transition-all duration-300 ${
              activeTab === 'nomad'
                ? `${themeClasses.cardBg} border-l-4 border-[#D97706] pl-5 text-[#D97706]`
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            Nomad Codex
          </button>
        </div>

        {/* Dynamic Legal Copy Canvas */}
        <div className={`lg:col-span-3 p-8 md:p-12 shadow-sm rounded-[2.5rem_1.2rem_4rem_2rem] border ${themeClasses.border} ${themeClasses.cardBg} transition-all duration-500`}>
          {activeTab === 'privacy' && (
            <div className="space-y-6 text-sm tracking-wide leading-relaxed font-light">
              <h2 className="font-serif text-2xl lowercase tracking-normal mb-4 font-normal">Privacy Framework &amp; Data Safeguards</h2>
              <p className="opacity-90">
                Last updated: June 2026. At Nakhyl Zone, we safeguard your personal data as deeply as we protect the tranquility of our palm groves. When you reserve a spot for Cinema Wadi, interact with our virtual soundscape controls, or coordinate via our WhatsApp wires, your parameters are stored under high-grade analytical security wrappers.
              </p>
              <h3 className="font-serif text-lg lowercase tracking-normal mt-6 font-medium">1. Dynamic Information Harvesting</h3>
              <p className="opacity-80">
                We collect essential interface markers (such as cookie preferences, operational session triggers, and ambient sound controller states) to provide custom digital immersion profiles. Your phone coordinates provided for direct-booking confirmation pathways are encrypted and never distributed to third-party commercial databases.
              </p>
              <h3 className="font-serif text-lg lowercase tracking-normal mt-6 font-medium">2. The Nomad Right to Erasure</h3>
              <p className="opacity-80">
                Global remote residents hold complete sovereign authority over their digital logs. You may submit a message directly via our operational legal channels at any moment to clear your transactional metadata from our secure Sinai database matrix.
              </p>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-6 text-sm tracking-wide leading-relaxed font-light">
              <h2 className="font-serif text-2xl lowercase tracking-normal mb-4 font-normal">Terms of Sanctuary &amp; Gathering Rules</h2>
              <p className="opacity-90">
                Welcome to our shared physical and virtual space. By navigating this portal or stepping into our physical oasis courtyard inside Dahab, you agree to follow the foundational rules of deep communal respect.
              </p>
              <h3 className="font-serif text-lg lowercase tracking-normal mt-6 font-medium">1. Shared Space Quiet Hours</h3>
              <p className="opacity-80">
                While our live acoustic sessions celebrate raw global sonic jams, our workspace, natural palm zones, and low floor seating focus entirely on deep focus and slow recovery. Aggressive noise distribution or disruptive commercial capture without permission is restricted.
              </p>
              <h3 className="font-serif text-lg lowercase tracking-normal mt-6 font-medium">2. Structural Reservations</h3>
              <p className="opacity-80">
                Allocated tables, custom floor cushions, or Cinema Wadi seating arrangements through this portal are held strictly up to 20 minutes past the target reservation mark, after which standard open access cycles apply to welcoming arriving global nomads.
              </p>
            </div>
          )}

          {activeTab === 'nomad' && (
            <div className="space-y-6 text-sm tracking-wide leading-relaxed font-light">
              <h2 className="font-serif text-2xl lowercase tracking-normal mb-4 font-normal">The Nomad Codex (Community Code)</h2>
              <p className="opacity-90">
                Nakhyl Zone is built as an intersection bridging authentic Sinai Bedouin heritage with international traveling creators. We maintain an uncompromising mutual ecosystem standard.
              </p>
              <h3 className="font-serif text-lg lowercase tracking-normal mt-6 font-medium">1. Cultural Preservation Rule</h3>
              <p className="opacity-80">
                All digital nomads, remote developers, and creatives utilizing our high-speed network matrices are expected to treat the physical landscape, natural palm trees, and traditional artifacts with care.
              </p>
              <h3 className="font-serif text-lg lowercase tracking-normal mt-6 font-medium">2. Fair Contribution Matrix</h3>
              <p className="opacity-80">
                Our campfire spaces, open-air cinema nights, and community lounges operate optimally through continuous collective support of our local culinary kitchen and beverage operations. Outside commercial catering items are discouraged within the inner courtyards.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 2: CONTACT DIRECTORY & OPERATING HOURS */}
      <section className="max-w-5xl mx-auto mt-20 px-6 md:px-12 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lowercase mb-3">registry &amp; operations</h2>
          <p className="text-xs uppercase tracking-widest opacity-60">Corporate identification and logistical parameters</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Operating Hours */}
          <div className={`p-8 rounded-[2rem_1rem_2.5rem_1.5rem] border ${themeClasses.border} ${themeClasses.cardBg} flex flex-col justify-between`}>
            <div>
              <div className="w-8 h-8 rounded-full bg-[#D97706]/10 flex items-center justify-center mb-4 text-[#D97706] text-sm">
                🕒
              </div>
              <h3 className="font-serif text-xl lowercase mb-4">Oasis Hours</h3>
              <ul className="space-y-3 text-xs tracking-widest uppercase opacity-80">
                <li className="flex justify-between border-b pb-2 border-dashed border-neutral-500/20">
                  <span>Day State:</span>
                  <span className="font-semibold">08:00 AM - 05:00 PM</span>
                </li>
                <li className="flex justify-between border-b pb-2 border-dashed border-neutral-500/20">
                  <span>Night State:</span>
                  <span className="font-semibold">05:00 PM - 02:00 AM</span>
                </li>
                <li className="flex justify-between text-amber-600 font-medium">
                  <span>Cinema Pop-ups:</span>
                  <span>Every Mon &amp; Thu</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Contact Directory */}
          <div className={`p-8 rounded-[1.5rem_2rem_1rem_3rem] border ${themeClasses.border} ${themeClasses.cardBg} flex flex-col justify-between`}>
            <div>
              <div className="w-8 h-8 rounded-full bg-[#D97706]/10 flex items-center justify-center mb-4 text-[#D97706] text-sm">
                📞
              </div>
              <h3 className="font-serif text-xl lowercase mb-4">Contact Directory</h3>
              <ul className="space-y-3 text-xs tracking-wider font-light">
                <li className="flex flex-col">
                  <span className="uppercase tracking-widest text-[10px] opacity-50 mb-0.5">Nomad Concierge</span>
                  <a href="tel:+201000000000" className="font-medium hover:text-[#D97706] transition-colors tracking-widest">+20 100 000 0000</a>
                </li>
                <li className="flex flex-col pt-1">
                  <span className="uppercase tracking-widest text-[10px] opacity-50 mb-0.5">Legal Operations</span>
                  <a href="mailto:sanctuary@nakhylzonedahab.com" className="font-medium hover:text-[#D97706] transition-colors break-all">sanctuary@nakhylzonedahab.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Legal Registration */}
          <div className={`p-8 rounded-[2.5rem_1.2rem_3.5rem_1.8rem] border ${themeClasses.border} ${themeClasses.cardBg} flex flex-col justify-between`}>
            <div>
              <div className="w-8 h-8 rounded-full bg-[#D97706]/10 flex items-center justify-center mb-4 text-[#D97706] text-sm">
                ⚖️
              </div>
              <h3 className="font-serif text-xl lowercase mb-4">Legal Registration</h3>
              <p className="text-xs tracking-wide leading-relaxed font-light opacity-80 mb-4">
                Nakhyl Zone is fully integrated under the Egyptian Ministry of Tourism framework for premium hospitality cultural developments in South Sinai.
              </p>
              <div className="space-y-1 text-[11px] uppercase tracking-widest opacity-60 font-mono">
                <div>TAX ID: 492-301-881</div>
                <div>REG NO: 99421-Dahab</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: BACK-TO-SANCTUARY NAVIGATION */}
      <section className="max-w-xl mx-auto mt-24 text-center px-6 relative z-10">
        <div className={`p-8 rounded-[3rem_1.5rem_2.5rem_2rem] border ${themeClasses.border} relative overflow-hidden group`}>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D97706]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
          
          <h3 className="font-serif text-2xl lowercase mb-2">finished with compliance?</h3>
          <p className="text-xs tracking-widest uppercase opacity-60 mb-6">step right back into the campfire glow</p>
          
          <a
            href="/"
            className="inline-flex items-center gap-3 bg-[#2D4A3E] text-[#F4EBE1] hover:bg-[#D97706] px-8 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 shadow-md transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>← return to sanctuary</span>
          </a>
        </div>
      </section>

    </div>
  );
}