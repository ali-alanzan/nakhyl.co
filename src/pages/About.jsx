import React, { useState, useEffect } from 'react';

export default function SinaiAnchorAboutPage() {
  // Global Ambient Layout Theme State: Day (☀️ Chase the Sun) vs Night (🌙 Follow the Sparks)
  const [isNight, setIsNight] = useState(true);
  
  // Interactive Section States
  const [activeMaterial, setActiveMaterial] = useState('clay');
  const [openAccordion, setOpenAccordion] = useState(0);
  const [isCampfireOpen, setIsCampfireOpen] = useState(false);
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  // Dynamic Theme Styling Variables based on Ecosystem Blueprint
  const themeBg = isNight ? 'bg-[#0A1118]' : 'bg-[#F4EBE1]';
  const themeText = isNight ? 'text-[#F4EBE1]' : 'text-[#2D4A3E]';
  const themeTextMuted = isNight ? 'text-gray-400' : 'text-[#2D4A3E]/70';
  const themeBorder = isNight ? 'border-amber-700/30' : 'border-[#2D4A3E]/15';
  const cardBg = isNight ? 'bg-[#121B24]' : 'bg-[#EFE5D9]';
  const accentColor = 'text-[#D97706]';
  const accentBg = 'bg-[#D97706]';

  // Section 3: Material Index Data
  const materials = {
    clay: {
      title: 'sinai mountain clay',
      desc: 'Sourced from local highlands, our handmade walls breathe naturally, radiating cooling atmospheric moisture by day and storing comforting campfire heat by night.',
      tag: 'Hand-molded structure',
      radius: 'rounded-[3rem_1.5rem_4rem_2rem]'
    },
    palm: {
      title: 'palm-leaf thatch roofs',
      desc: 'Woven entirely by generational local craftspeople, these canopy layouts create an organic micro-climate breeze system while casting cinematic, dappled geometric shadows.',
      tag: 'Zero-waste ventilation',
      radius: 'rounded-[1.8rem_4rem_2.2rem_3.5rem]'
    },
    carpets: {
      title: 'hand-knotted tribal carpets',
      desc: 'Authentic floor layers displaying traditional symbols woven by Sinai Bedouin women, preserving centuries of geographic heritage, slow-paced luxury, and deep community comfort.',
      tag: 'Living historic tapestries',
      radius: 'rounded-[2.5rem_1.2rem_4rem_1.8rem]'
    }
  };

  // Section 6: Sustainable Roots Accordion Data
  const sustainabilitySteps = [
    {
      title: "zero single-use plastics ecosystem",
      content: "We partner exclusively with clay-potters and filtration artisans to serve water and traditional juices in hand-baked earthenware jars. No plastic crosses our perimeter courtyard walls."
    },
    {
      title: "passive micro-climatic palm zoning",
      content: "Instead of clinical modern air conditioning systems, our layout positions seating configurations precisely along natural air vectors channeled between indigenous palm trunks."
    },
    {
      title: "zero-waste traditional campfire kitchen",
      content: "Every single dish cooked over open embers is precisely calculated. Organic materials return straight into local compost systems, nourishing the soils of neighboring oasis growers."
    }
  ];

  return (
    <div className={`min-h-screen ${themeBg} ${themeText} font-sans transition-colors duration-1000 ease-in-out relative overflow-hidden px-4 md:px-12 lg:px-24 py-8`}>
      
      {/* GLOBAL AMBIENT TOP CONTROL NAV */}
      <header className="max-w-7xl mx-auto flex justify-between items-center mb-16 border-b pb-6 border-opacity-20 border-current">
        <div className="flex flex-col">
          <span className="font-serif text-2xl tracking-wide lowercase">nakhyl zone</span>
          <span className="font-sans text-[9px] tracking-[0.3em] uppercase opacity-60">dahab cultural oasis</span>
        </div>
        
        {/* INTERACTIVE AMBIENT SWITCHER */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsNight(!isNight)}
            className={`flex items-center gap-2 px-4 py-2 border rounded-full text-xs font-sans tracking-widest uppercase transition-all duration-300 hover:scale-105 ${themeBorder}`}
          >
            {isNight ? (
              <>
                <span className={accentColor}>🌙 follow the sparks</span>
                <span className="text-gray-500 text-[10px]">| day state</span>
              </>
            ) : (
              <>
                <span className="text-[#2D4A3E]">☀️ chase the sun</span>
                <span className="text-[#2D4A3E]/40 text-[10px]">| night state</span>
              </>
            )}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto space-y-32">

        {/* SECTION 1: THE ORIGIN PORTAL */}
        <section className="text-center py-12 max-w-4xl mx-auto">
          <span className="font-sans text-[11px] tracking-[0.4em] uppercase opacity-50 block mb-6">
            — building deep trust through preservation
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.15] lowercase tracking-tight">
            "we did not clear the palms to build a business. we built a shelter around them to honor the culture."
          </h1>
          <div className="mt-8 flex justify-center">
            <div className={`h-[1px] w-24 ${isNight ? 'bg-amber-600/50' : 'bg-[#2D4A3E]/30'}`}></div>
          </div>
        </section>


        {/* SECTION 2: THE ANCESTRAL CONNECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`relative p-8 md:p-12 ${cardBg} rounded-[3.5rem_2rem_4.5rem_1.5rem] shadow-sm border ${themeBorder} transition-all duration-700`}>
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-60 block mb-4">
              cooperative community networks
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lowercase mb-6">
              stewarded by generational guardians
            </h2>
            <p className={`font-sans ${themeTextMuted} text-sm md:text-base leading-relaxed tracking-wide space-y-4`}>
              Every raw beam, every structural woven roof panel, and every dynamic campfire placement within Nakhyl Zone was established in deliberate partnership with native Bedouin trackers, elders, and craftspeople. 
              <br /><br />
              We do not treat Bedouin culture as an aesthetic ornament; it is our foundational ecosystem blueprint. By sourcing materials natively, we guarantee direct financial flows stay permanently inside local tribes, preserving ancient desert micro-industries.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className={`h-64 bg-cover bg-center rounded-[2rem_3.5rem_1.5rem_4rem] border ${themeBorder} flex items-end p-4 bg-black/20 relative group overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <span className="font-serif text-white text-lg lowercase relative z-10">sinai tracking guides</span>
            </div>
            <div className={`h-64 bg-cover bg-center rounded-[4rem_1.5rem_3rem_2rem] border ${themeBorder} flex items-end p-4 bg-black/20 relative group overflow-hidden mt-8`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <span className="font-serif text-white text-lg lowercase relative z-10">weaving collectives</span>
            </div>
          </div>
        </section>


        {/* SECTION 3: THE MATERIAL INDEX */}
        <section className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-60 block mb-2">tactile anatomy</span>
            <h2 className="font-serif text-3xl md:text-4xl lowercase">explore our raw textures</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(materials).map((key) => (
              <button
                key={key}
                onClick={() => setActiveMaterial(key)}
                className={`px-6 py-3 font-sans text-xs uppercase tracking-widest transition-all duration-300 rounded-full border ${
                  activeMaterial === key 
                    ? isNight ? 'bg-[#D97706] border-amber-600 text-[#0A1118]' : 'bg-[#2D4A3E] border-[#2D4A3E] text-[#F4EBE1]'
                    : themeBorder
                }`}
              >
                {key} index
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto mt-6">
            <div className={`p-8 md:p-12 ${cardBg} ${materials[activeMaterial].radius} border ${themeBorder} transition-all duration-500 shadow-md flex flex-col md:flex-row gap-8 items-center`}>
              <div className="flex-1 space-y-4">
                <span className="font-sans text-[10px] tracking-[0.2em] uppercase px-3 py-1 bg-black/10 rounded-full inline-block opacity-70">
                  {materials[activeMaterial].tag}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl lowercase">{materials[activeMaterial].title}</h3>
                <p className={`${themeTextMuted} font-sans text-sm md:text-base leading-relaxed tracking-wide`}>
                  {materials[activeMaterial].desc}
                </p>
              </div>
              <div className="w-full md:w-1/3 flex justify-center">
                {/* Asymmetric Micro Dynamic Element representing textures */}
                <div className={`w-32 h-32 ${materials[activeMaterial].radius} bg-gradient-to-br from-amber-600/30 to-emerald-800/20 border ${themeBorder} animate-pulse flex items-center justify-center`}>
                  <span className="font-serif text-xs opacity-40">tactile layer</span>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 4: THE VISIONARY VOICES */}
        <section className="space-y-12">
          <div className="border-l-2 pl-6 border-amber-600/40">
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-60 block">the synthesis philosophy</span>
            <h2 className="font-serif text-3xl md:text-4xl lowercase">balancing code & campfires</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-8 ${cardBg} rounded-[2rem_1rem_3.5rem_1.5rem] border ${themeBorder} space-y-4`}>
              <p className="font-serif text-xl italic opacity-90 leading-relaxed">
                "global nomads aren't seeking faster wifi loops anymore; they are desperately searching for rooted anchor points. we built a portal where high-capacity modern work meets uninterrupted ancient ritual."
              </p>
              <div className="pt-4 border-t border-black/5 flex justify-between items-center">
                <span className="font-sans text-xs tracking-widest uppercase font-semibold">karim & nadia</span>
                <span className="font-sans text-[10px] tracking-wider opacity-50">founding collective</span>
              </div>
            </div>

            <div className={`p-8 ${cardBg} rounded-[1rem_2.5rem_1.5rem_3rem] border ${themeBorder} space-y-4`}>
              <p className="font-serif text-xl italic opacity-90 leading-relaxed">
                "this is about preserving generational memory space. our children build the brick foundations alongside the bedrock artisans. this isn't commercial staging, it's our direct familial legacy."
              </p>
              <div className="pt-4 border-t border-black/5 flex justify-between items-center">
                <span className="font-sans text-xs tracking-widest uppercase font-semibold">sheikh salem</span>
                <span className="font-sans text-[10px] tracking-wider opacity-50">cultural advisor</span>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 5: THE SANCTUARY RULES */}
        <section className="py-8">
          <div className={`border ${themeBorder} rounded-[4rem_1.5rem_4rem_1.5rem] p-8 md:p-16 relative overflow-hidden backdrop-blur-sm`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-60 block mb-2">communal code of conduct</span>
              <h2 className="font-serif text-3xl md:text-4xl lowercase">the protocol of the sanctuary</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-3 px-4">
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-xs font-mono ${isNight ? 'bg-amber-900/40 text-amber-500' : 'bg-emerald-900/10 text-emerald-800'}`}>01</div>
                <h4 className="font-serif text-lg lowercase">respect the slow pace</h4>
                <p className={`font-sans text-xs ${themeTextMuted} leading-relaxed tracking-wide`}>
                  Leave micro-second stress metrics at the outer cedar archway. The oasis moves with solar rhythms.
                </p>
              </div>

              <div className="space-y-3 px-4 border-y md:border-y-0 md:border-x py-6 md:py-0 border-current border-opacity-10">
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-xs font-mono ${isNight ? 'bg-amber-900/40 text-amber-500' : 'bg-emerald-900/10 text-emerald-800'}`}>02</div>
                <h4 className="font-serif text-lg lowercase">silence devices near the pits</h4>
                <p className={`font-sans text-xs ${themeTextMuted} leading-relaxed tracking-wide`}>
                  Keep active video loops and ringing notification logs confined away from the burning wadi embers.
                </p>
              </div>

              <div className="space-y-3 px-4">
                <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-xs font-mono ${isNight ? 'bg-amber-900/40 text-amber-500' : 'bg-emerald-900/10 text-emerald-800'}`}>03</div>
                <h4 className="font-serif text-lg lowercase">unconditional open dialogue</h4>
                <p className={`font-sans text-xs ${themeTextMuted} leading-relaxed tracking-wide`}>
                  Every floor cushion around the campfire belongs to the community. No private VIP segregations exist.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* SECTION 6: SUSTAINABLE ROOTS ACCORDION */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div>
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-60 block mb-2">ecological parameters</span>
            <h2 className="font-serif text-3xl md:text-4xl lowercase mb-4">our invisible carbon foot footprint</h2>
            <p className={`font-sans text-xs ${themeTextMuted} leading-relaxed tracking-wide`}>
              We maintain deep alignment with the earth of Dahab. Click through our primary systems to view how our modern operational infrastructure operates entirely without friction or heavy environmental disruption.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {sustainabilitySteps.map((step, idx) => (
              <div 
                key={idx} 
                className={`border ${themeBorder} rounded-[1.5rem_1rem_2rem_1rem] overflow-hidden transition-all duration-300`}
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
                  className="w-full text-left p-6 flex justify-between items-center font-serif text-lg lowercase hover:opacity-80 transition-opacity"
                >
                  <span>{step.title}</span>
                  <span className={`transform transition-transform text-xs ${openAccordion === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openAccordion === idx ? 'max-h-40 p-6 pt-0 border-t border-opacity-5 border-current' : 'max-h-0'
                  }`}
                >
                  <p className={`font-sans text-xs md:text-sm ${themeTextMuted} leading-relaxed tracking-wide`}>
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* SECTION 7: THE HERITAGE CALL TO ACTION */}
        <section className="pt-8 pb-16">
          <div className={`p-12 md:p-20 ${isNight ? 'bg-amber-950/20 border-amber-900/50' : 'bg-[#EADED2] border-[#2D4A3E]/30'} border rounded-[3rem_1.5rem_5rem_2rem] text-center space-y-6 relative`}>
            <div className="absolute top-4 left-4 font-serif text-xs opacity-20 hidden md:block">coords: 28.5006° N, 34.5173° E</div>
            
            <h2 className="font-serif text-3xl md:text-5xl lowercase max-w-2xl mx-auto leading-tight">
              pull up a cushion and join the community story.
            </h2>
            <p className={`font-mono text-xs md:text-sm max-w-md mx-auto ${isNight ? 'text-amber-500/80' : 'text-[#2D4A3E]/80'} tracking-wide`}>
              &gt;&gt; our campfires fire up daily at dusk. no registration card required, your presence is the ticket.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://wa.me/your operational link here" 
                target="_blank" 
                rel="noreferrer"
                className={`px-8 py-4 font-sans text-xs uppercase tracking-widest rounded-full font-semibold transition-all duration-300 shadow-md ${
                  isNight ? 'bg-[#D97706] text-[#0A1118] hover:bg-amber-500' : 'bg-[#2D4A3E] text-[#F4EBE1] hover:bg-[#20352c]'
                }`}
              >
                wire into whatsapp concierge
              </a>
              <button 
                onClick={() => setIsCampfireOpen(true)}
                className={`px-8 py-4 font-sans text-xs uppercase tracking-widest rounded-full transition-all duration-300 border ${themeBorder} hover:bg-black/5`}
              >
                read full ritual story
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* FOOTER ACCENTS: SIGNATURE AMBIENT SOUNDSCAPE CONTROLLER & TELEMENTRY CONTROLLER */}
      <footer className="max-w-7xl mx-auto mt-20 border-t border-opacity-10 border-current pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-sans tracking-[0.2em] uppercase opacity-70">
        <div>
          © 2026 nakhyl zone dahab. code by culture.
        </div>
        
        {/* WOW INTERACTION 2: AMBIENT SOUNDSCAPE CONTROLLER */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsPlayingSound(!isPlayingSound)}
            className={`flex items-center gap-3 px-4 py-2 border ${themeBorder} rounded-full hover:scale-105 transition-all`}
          >
            <span className="flex items-center gap-1">
              {/* Animated SVG Audio Waveform */}
              <span className={`w-[2px] h-3 bg-current ${isPlayingSound ? 'animate-bounce' : ''}`}></span>
              <span className={`w-[2px] h-4 bg-current delay-75 ${isPlayingSound ? 'animate-bounce' : ''}`}></span>
              <span className={`w-[2px] h-2 bg-current delay-150 ${isPlayingSound ? 'animate-bounce' : ''}`}></span>
            </span>
            <span>{isPlayingSound ? 'mute oasis stream' : 'listen to oasis right now'}</span>
          </button>
        </div>

        <div>
          live from dahab: {new Date().toLocaleTimeString('en-US', { timeZone: 'Africa/Cairo', hour: '2-digit', minute: '2-digit' })} egypt time
        </div>
      </footer>

      {/* WOW INTERACTION 1: VIRTUAL CAMPFIRE POP-UP OVERLAY */}
      {isCampfireOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-500">
          <div className="bg-[#0A1118] border border-amber-600/30 p-8 md:p-12 rounded-[2.5rem_1.2rem_4rem_2rem] max-w-xl text-[#F4EBE1] space-y-6 relative shadow-2xl">
            <button 
              onClick={() => setIsCampfireOpen(false)}
              className="absolute top-6 right-6 text-xl text-amber-600 hover:text-white"
            >
              ✕
            </button>
            <div className="text-amber-500 text-3xl">🔥</div>
            <span className="font-sans text-[10px] tracking-[0.3em] uppercase opacity-60 block">the ritual of habak</span>
            <h3 className="font-serif text-2xl lowercase">the vision of our hearth</h3>
            <p className="font-sans text-xs md:text-sm text-gray-300 leading-relaxed tracking-wide">
              Hospitality under the Sinai sky isn't a modern system transaction; it is a spiritual protection ritual. For hundreds of years, when smoke rose from a Bedouin campfire, it signaled a sanctuary to any weary traveler across the mountain passes. 
              <br /><br />
              Nakhyl Zone honors this directly. Our Habak tea leaves are hand-picked from ancestral plots, and our fire pits are managed with the exact same slow-burn parameters that protected travelers centuries before us. You are part of that lineage the moment you step onto our rugs.
            </p>
            <div className="pt-4">
              <button 
                onClick={() => setIsCampfireOpen(false)}
                className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-[#0A1118] font-sans text-xs uppercase tracking-widest rounded-full font-semibold transition-all"
              >
                return to oasis layout
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}