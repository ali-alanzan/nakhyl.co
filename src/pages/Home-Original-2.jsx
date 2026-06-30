import React, { useState, useEffect } from 'react';

export default function NakhylMasterRedesign() {
  // --- STATE SYSTEM ---
  // Theme Toggle: false = ☀️ Day State (Sand/Palm), true = 🌙 Night State (Velvet/Amber)
  const [isNight, setIsNight] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showCampfirePortal, setShowCampfirePortal] = useState(false);
  const [dahabTime, setDahabTime] = useState('');

  // Synchronized Telemetry Clock (Egypt Time Zone)
  useEffect(() => {
    const updateOasisTime = () => {
      const options = { 
        timeZone: 'Africa/Cairo', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        hour12: false 
      };
      setDahabTime(new Date().toLocaleTimeString('en-US', options));
    };
    updateOasisTime();
    const interval = setInterval(updateOasisTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // --- DYNAMIC DESIGN TOKEN MAPS ---
  const themeBg = isNight ? 'bg-[#0A1118]' : 'bg-[#F4EBE1]';
  const themeText = isNight ? 'text-[#F4EBE1]' : 'text-[#2D4A3E]';
  const themeBorder = isNight ? 'border-[rgba(244,235,225,0.12)]' : 'border-[rgba(45,74,62,0.12)]';
  const themeBorderMuted = isNight ? 'border-[rgba(244,235,225,0.06)]' : 'border-[rgba(45,74,62,0.06)]';
  const accentText = isNight ? 'text-[#D97706]' : 'text-[#2D4A3E]';
  const accentBg = isNight ? 'bg-[#D97706]/10' : 'bg-[#2D4A3E]/5';
  
  // Textured Overlay Mask determined by active sun/moon cycle
  const textProtectionMask = isNight 
    ? 'bg-gradient-to-t from-[#0A1118]/90 via-[#0A1118]/40 to-transparent' 
    : 'bg-gradient-to-t from-[#F4EBE1]/95 via-[#F4EBE1]/50 to-transparent';

  return (
    <div className={`min-h-screen ${themeBg} ${themeText} font-sans antialiased overflow-x-hidden relative transition-colors duration-700 selection:bg-[#D97706] selection:text-white`}>
      
      {/* RAW TACTILE SURFACE OVERLAY - Multiplies over images to create hand-plastered mud texture */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80')] mix-blend-overlay z-50"></div>

      {/* --- SECTION 1: THE "SLOW-DOWN" HERO SPLIT --- */}
      <header className={`relative min-h-screen w-full flex flex-col lg:flex-row border-b ${themeBorder} justify-between items-stretch overflow-hidden`}>
        
        {/* 60% Full-Bleed Immersive Viewport */}
        <div className="w-full lg:w-[60%] relative min-h-[50vh] lg:min-h-screen overflow-hidden bg-stone-900">
          {/* Dynamic Protection Overlays */}
          <div className={`absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r ${textProtectionMask} z-20 pointer-events-none`}></div>
          <div className="absolute inset-0 bg-black/10 z-10 mix-blend-multiply"></div>
          
          <img 
            /* WIRE_ASSET: Your premium slow-motion atmospheric landscape frame or looping video thumbnail */
            src="/images/hero-ambient-loop-frame.jpg" 
            fallbackSrc="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
            alt="Cinematic frame of Nakhyl Zone courtyard looking toward the Gulf of Aqaba" 
            className="w-full h-full object-cover object-center transform scale-100 animate-[pulse_10s_ease-in-out_infinite] transition-transform duration-[1200ms]"
            onError={(e) => { e.target.src = e.target.getAttribute('fallbackSrc') }}
          />
          
          <div className="absolute bottom-8 left-8 z-30 flex items-center space-x-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#D97706] animate-ping"></span>
            <span className="font-mono text-[9px] uppercase tracking-widest text-stone-200">Atmosphere Status &bull; Live Stream</span>
          </div>
        </div>

        {/* 40% Editorial Content & Toggle Pane */}
        <div className={`w-full lg:w-[40%] p-8 lg:p-16 flex flex-col justify-between items-start relative ${themeBorder} lg:border-l z-20 bg-transparent`}>
          
          <div className="w-full flex justify-between items-center mb-16 lg:mb-0">
            <div className="lowercase font-serif text-2xl tracking-tighter font-bold">nakhyl zone</div>
            
            {/* Ambient State Switcher */}
            <button 
              onClick={() => setIsNight(!isNight)}
              className={`flex items-center space-x-3 px-4 py-2 rounded-full border ${themeBorder} hover:scale-105 transition-transform duration-300 bg-current/5`}
            >
              <span className="font-mono text-[10px] tracking-widest uppercase font-semibold">
                {isNight ? '🌙 follow sparks' : '☀️ chase sun'}
              </span>
              <div className={`w-6 h-3 rounded-full relative ${isNight ? 'bg-[#D97706]' : 'bg-[#2D4A3E]'} transition-colors duration-500`}>
                <div className={`absolute top-0.5 w-2 h-2 rounded-full bg-[#F4EBE1] transition-all duration-300 ${isNight ? 'right-0.5' : 'left-0.5'}`}></div>
              </div>
            </button>
          </div>

          <div className="my-auto max-w-md">
            <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-4">the threshold</span>
            <h1 className="font-serif text-4xl lg:text-5xl font-light leading-relaxed lowercase mb-6">
              where the sinai desert breathes into a <span className="italic underline decoration-1 underline-offset-8">slow-paced courtyard</span>.
            </h1>
            <p className="font-sans text-sm tracking-wide opacity-80 leading-relaxed mb-8">
              Tucked cleanly inside Dahab’s city grid lies an ancient palm grove where global tech nomads, creators, and traditional Bedouin hospitality align. No storefront clamor. Only smoke, strings, and sand.
            </p>
            <a 
              href="#matrix"
              className={`inline-block font-mono text-xs uppercase tracking-widest px-8 py-4 rounded-[1.8rem_0.9rem_2.2rem_1.1rem] border ${themeBorder} ${isNight ? 'hover:bg-[#F4EBE1] hover:text-[#0A1118]' : 'hover:bg-[#2D4A3E] hover:text-[#F4EBE1]'} transition-all duration-300 font-semibold`}
            >
              step into sanctuary &rarr;
            </a>
          </div>

          <div className="w-full flex justify-between border-t pt-6 opacity-50 font-mono text-[11px] tracking-widest uppercase mt-12 lg:mt-0">
            <div>28.4975° N, 34.5132° E</div>
            <div>dahab, egypt</div>
          </div>
        </div>
      </header>

      {/* --- SECTION 2: THE SOUND OF WELCOMING --- */}
      <section className={`w-full border-b ${themeBorder} py-4 px-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-current/[0.01]`}>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform active:scale-95 border ${themeBorder} bg-current/5 hover:bg-current/10`}
          >
            {isPlayingAudio ? <span className="font-mono text-xs">⏸</span> : <span className="font-mono text-xs pl-0.5">▶</span>}
          </button>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest font-bold">listen to the oasis environment</p>
            <p className="text-xs opacity-60 font-sans">Live-captured background layer: palm wind, sea lapse, and crackling fire wood</p>
          </div>
        </div>

        {/* Waveform Micro-Animation */}
        <div className="flex items-end space-x-1 h-6 px-4">
          {[5, 9, 4, 8, 11, 5, 9, 3, 7, 11, 6, 8, 4, 10].map((val, idx) => (
            <div 
              key={idx} 
              className={`w-[2px] rounded-full transition-all duration-300 ${isNight ? 'bg-[#D97706]' : 'bg-[#2D4A3E]'}`}
              style={{ 
                height: isPlayingAudio ? `${val * 2.2}px` : '3px',
                animation: isPlayingAudio ? `pulse 1s ease-in-out infinite alternate` : 'none',
                animationDelay: `${idx * 0.08}s`
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: THE ASYMMETRICAL BENTO MATRIX --- */}
      <section id="matrix" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Panel 1: The Physical Oasis */}
          <div className={`md:col-span-7 p-8 md:p-12 rounded-[3rem_1.5rem_4.5rem_2.5rem] border ${themeBorder} shadow-md flex flex-col justify-between min-h-[460px] group overflow-hidden relative transition-all duration-500`}>
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute inset-0 bg-black/20 z-10 mix-blend-multiply"></div>
              <div className={`absolute inset-0 ${textProtectionMask} z-10`}></div>
              <img 
                /* WIRE_ASSET: Photo highlighting your handwoven rugs, low seating, and floor level workspace layouts */
                src="/images/courtyard-sand-rugs.jpg" 
                fallbackSrc="https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80"
                alt="Physical sand footprint layout at Nakhyl Zone featuring low handmade carpets" 
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 group-hover:brightness-105"
                onError={(e) => { e.target.src = e.target.getAttribute('fallbackSrc') }}
              />
            </div>
            <div className="z-20">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 block mb-2">[ architecture layer ]</span>
              <h3 className="font-serif text-3xl md:text-4xl lowercase mb-4">the raw, living palm groves</h3>
            </div>
            <p className="font-sans text-sm tracking-wide opacity-95 max-w-md leading-relaxed z-20">
              We stripped away uniform paving stones. Our structural foundation is native crushed sand adorned with handwoven organic Bedouin rugs that contour gracefully around centuries-old palm roots.
            </p>
          </div>

          {/* Panel 2: Aroma of Ember-Brewed Tea */}
          <div className={`md:col-span-5 p-8 md:p-12 rounded-[1.8rem_3.5rem_2.2rem_3rem] border ${themeBorder} shadow-md flex flex-col justify-between min-h-[460px] group overflow-hidden relative transition-all duration-500`}>
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute inset-0 bg-black/15 z-10 mix-blend-multiply"></div>
              <div className={`absolute inset-0 ${textProtectionMask} z-10`}></div>
              <img 
                /* WIRE_ASSET: Close up photo of the clay teapots boiling on the sand charcoal pits */
                src="/images/ember-tea-ritual.jpg" 
                fallbackSrc="https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80"
                alt="Authentic Bedouin Habak tea boiling on charcoal embers in the open air" 
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 group-hover:brightness-105 filter grayscale-[15%]"
                onError={(e) => { e.target.src = e.target.getAttribute('fallbackSrc') }}
              />
            </div>
            <div className="z-20">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 block mb-2">[ sensory layer ]</span>
              <h3 className="font-serif text-3xl lowercase mb-4">the aroma of ember-brewed habak</h3>
            </div>
            <p className="font-sans text-sm tracking-wide opacity-95 leading-relaxed z-20">
              Slow-boiled over real sagebrush embers. An aromatic, deeply grounding herbal wild sweet mint profile cultivated natively across the high granite rock shelves of Saint Catherine mountains.
            </p>
          </div>

          {/* Panel 3: Sound Preview Live Block */}
          <div className={`md:col-span-12 p-8 md:p-10 rounded-[4rem_2rem_3rem_4.5rem] border ${themeBorder} bg-current/[0.02] flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 shadow-inner`}>
            <div className="max-w-2xl">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-50 block mb-1">[ performance ethos ]</span>
              <h3 className="font-serif text-2xl lowercase mb-2 text-[#D97706]">the zero amplification covenant</h3>
              <p className="font-sans text-sm opacity-80 leading-relaxed">
                We strictly protect our atmosphere from synthetic electronic feedback. Visiting global musicians, nomadic string players, and local storytellers sit directly at sand level, cultivating unamplified acoustic circles under the palm canopy.
              </p>
            </div>
            <button 
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className={`px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest border ${themeBorder} bg-transparent hover:scale-105 transition-transform font-bold tracking-widest shrink-0`}
            >
              {isPlayingAudio ? "mute background environment" : "experience live preview loop"}
            </button>
          </div>

        </div>
      </section>

      {/* --- SECTION 4: THE ANCHOR ETHOS (The Gulf Contrast Canvas) --- */}
      <section className="w-full relative py-32 px-6 border-y border-transparent overflow-hidden flex items-center justify-center min-h-[45vh]">
        {/* Immersive Background Image showing beachfront/sea proximity but courtyard containment */}
        <div className="absolute inset-0 z-0">
          <div className={`absolute inset-0 ${isNight ? 'bg-[#0A1118]/85' : 'bg-[#F4EBE1]/90'} z-10 mix-blend-normal`}></div>
          <img 
            /* WIRE_ASSET: High-end wide crop showing the turquoise Aqaba gulf waters framed past your entry point */
            src="/images/gulf-sea-contrast.jpg" 
            fallbackSrc="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1800&q=80"
            alt="The deep blue gulf water meeting the sand wall boundaries of Nakhyl Zone" 
            className="w-full h-full object-cover object-center filter saturate-[75%] opacity-35"
            onError={(e) => { e.target.src = e.target.getAttribute('fallbackSrc') }}
          />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-20">
          <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-6">the sanctuary geography</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-relaxed lowercase mb-8">
            "we built an unpolished, completely silent shelter right behind the urban coastline. steps from the water, kilometers from the noise."
          </h2>
          <div className={`w-16 h-[1px] bg-current mx-auto opacity-20`}></div>
        </div>
      </section>

      {/* --- SECTION 5: DAILY HORIZON GRID --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-4">diurnal atmosphere cycles</span>
            <h2 className="font-serif text-4xl font-light lowercase leading-relaxed mb-6">
              how our physical space adapts from sun to smoke
            </h2>
            <p className="font-sans text-sm tracking-wide opacity-80 leading-relaxed mb-8">
              Nakhyl undergoes a deliberate structural transformation throughout the day. Interact with the system options below to observe how the physical orientation contours to support your energy.
            </p>

            <div className="space-y-4">
              <div 
                onClick={() => setIsNight(false)}
                className={`p-5 rounded-[2rem_1rem_2.5rem_1.2rem] border cursor-pointer transition-all duration-500 ${!isNight ? 'border-current bg-current/[0.03] translate-x-1' : 'opacity-40 border-transparent hover:opacity-70'}`}
              >
                <h4 className="font-serif text-lg lowercase mb-1">☀️ high sun workspace (08:00 - 17:00)</h4>
                <p className="font-sans text-xs opacity-90 leading-relaxed">Shaded palm-canopy work desks, solar generator ports, raw iced coffees, and complete silent concentration blocks for deep system architecture.</p>
              </div>
              
              <div 
                onClick={() => setIsNight(true)}
                className={`p-5 rounded-[1rem_2rem_1.2rem_2.5rem] border cursor-pointer transition-all duration-500 ${isNight ? 'border-current bg-current/[0.03] translate-x-1' : 'opacity-40 border-transparent hover:opacity-70'}`}
              >
                <h4 className="font-serif text-lg lowercase mb-1">🌙 campfire alignment circles (18:00 - late)</h4>
                <p className="font-sans text-xs opacity-90 leading-relaxed">Central fire pits sparked, low-voltage copper lanterns lit, fresh Habak leaves added to boilers, and warm open-layout communion loops.</p>
              </div>
            </div>
          </div>

          {/* Layered Image Container with organic frame */}
          <div className="relative group overflow-hidden rounded-[3.5rem_2rem_5rem_2.5rem] border border-current/10 shadow-2xl">
            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none mix-blend-multiply"></div>
            <img 
              /* WIRE_ASSET: Toggle image: /images/coworking-day-palms.jpg VS /images/campfire-night-lounge.jpg */
              src={isNight ? "/images/campfire-night-lounge.jpg" : "/images/coworking-day-palms.jpg"} 
              fallbackSrc={isNight 
                ? "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80" 
                : "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
              }
              alt="Physical layout showing transition states of Nakhyl space" 
              className="w-full h-[500px] object-cover transition-all duration-[1000ms] transform scale-100 hover:scale-103"
              onError={(e) => { e.target.src = e.target.getAttribute('fallbackSrc') }}
            />
          </div>

        </div>
      </section>

      {/* --- SECTION 6: THE WEEKLY RITUALS RIBBON --- */}
      <section className={`w-full py-16 border-y ${themeBorder} overflow-x-auto whitespace-nowrap scrollbar-none bg-current/[0.005]`}>
        <div className="inline-flex space-x-16 px-6">
          {[
            { tag: "mon / wed", event: "cinema wadi independent films", details: "handpicked underground films projected directly across rough clay plaster facades" },
            { tag: "every thu", event: "unplugged courtyard session", desc: "regional string lute and frame drum players jamming natively at sand floor level" },
            { tag: "every sat", event: "high rock herb collection loop", details: "traditional tea gathering circles reviewing ancestral sourcing and mountain heritage" },
            { tag: "daily dusk", event: "the quiet hours protocol", details: "all background acoustic media ceases entirely as the sun transitions behind the Sinai ridge" }
          ].map((item, idx) => (
            <div key={idx} className="inline-block w-[320px] whitespace-normal group cursor-default">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D97706] block mb-2 font-bold">{item.tag}</span>
              <h4 className="font-serif text-xl lowercase mb-2 transition-colors duration-300 group-hover:text-[#D97706]">{item.event}</h4>
              <p className="font-sans text-xs opacity-65 tracking-wide leading-relaxed">{item.details || item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 7: THE LIVE FOOTPRINT STREAM (Masonry Community Grid) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">unfiltered community canvas</span>
          <h2 className="font-serif text-3xl lowercase">moments captured inside our structural lines</h2>
        </div>

        {/* Tactical Asymmetrical Masonry Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { path: "/images/footprint-front-angle.jpg", defaultImg: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80", radius: "rounded-[2.8rem_1.2rem_3.5rem_2rem]", user: "@nomad_lisa", text: "Finally a spot in Dahab that smells purely like mountain campfires and open sea air." },
            { path: "/images/footprint-beachfront-lounge.jpg", defaultImg: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80", radius: "rounded-[1.5rem_3.2rem_2rem_2.8rem]", user: "@sinai_wanderer", text: "Completely unplugged. No rowdy speakers. Just pure oud, palm wind, and infinite tea layers." },
            { path: "/images/footprint-nomad-setup.jpg", defaultImg: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80", radius: "rounded-[3.8rem_1.8rem_2.5rem_3.2rem]", user: "@karl_codes", text: "The network stability under the dense palm shade makes this the premier nomad hideout." },
            { path: "/images/footprint-cinema-night.jpg", defaultImg: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80", radius: "rounded-[2rem_2.5rem_1.5rem_4rem]", user: "@boho_spirit", text: "Cinema Wadi night felt exactly like an ancient living room constructed out of sand walls." }
          ].map((snap, i) => (
            <div key={i} className={`p-4 border ${themeBorder} ${snap.radius} flex flex-col justify-between hover:shadow-xl transition-all duration-500 group bg-current/[0.005]`}>
              <div className={`w-full h-56 overflow-hidden mb-4 ${snap.radius}`}>
                <img 
                  src={snap.path} 
                  fallbackSrc={snap.defaultImg}
                  alt="Real community snapshot inside Nakhyl Zone layout" 
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 group-hover:brightness-105" 
                  onError={(e) => { e.target.src = e.target.getAttribute('fallbackSrc') }}
                />
              </div>
              <div>
                <p className="font-sans text-xs italic opacity-85 mb-3 leading-relaxed">"{snap.text}"</p>
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-40 font-bold">{snap.user}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SECTION 8: THE "VIRTUAL CAMPFIRE" OVERLAY CALLOUT --- */}
      <section className={`w-full py-28 px-6 border-t ${themeBorder} bg-gradient-to-b from-transparent to-current/[0.02] text-center relative overflow-hidden`}>
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
          <img 
            /* WIRE_ASSET: Dark atmospheric snapshot highlighting the main stone campfire layout */
            src="/images/campfire-ritual-glow.jpg"
            fallbackSrc="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80"
            alt="The focal mud fire pit glowing in the night state layout"
            className="w-full h-full object-cover filter brightness-50 blur-sm"
            onError={(e) => { e.target.src = e.target.getAttribute('fallbackSrc') }}
          />
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 opacity-30">
          <div className="w-[500px] h-[500px] rounded-full bg-[#D97706] blur-[150px] animate-pulse"></div>
        </div>

        <div className="max-w-xl mx-auto relative z-10">
          {/* Dynamic Interactive Spark Node */}
          <button 
            onClick={() => setShowCampfirePortal(true)}
            className="w-20 h-20 rounded-full bg-stone-900 border-2 border-[#D97706]/70 flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(217,119,6,0.4)] hover:scale-110 active:scale-95 transition-transform duration-300 animate-bounce"
          >
            <span className="text-2xl animate-pulse">🔥</span>
          </button>
          
          <h3 className="font-serif text-3xl lowercase mb-4">gather around the courtyard flame</h3>
          <p className="font-sans text-sm tracking-wide opacity-90 mb-6 leading-relaxed">
            Activate the campfire node above to reveal our regional heritage logs: exploring authentic Bedouin hospitality frameworks, mountain-soured Habak tea leaves, and our low-impact building blueprints.
          </p>
        </div>

        {/* IMMERSIVE HERITAGE PORTAL MODAL */}
        {showCampfirePortal && (
          <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="bg-[#F4EBE1] text-[#2D4A3E] p-8 lg:p-12 max-w-xl rounded-[3rem_1.5rem_4rem_2rem] border-2 border-[#D97706] text-left relative shadow-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80')]"></div>
              
              <button 
                onClick={() => setShowCampfirePortal(false)}
                className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest bg-[#2D4A3E] text-[#F4EBE1] px-4 py-2 rounded-full hover:bg-[#D97706] transition-colors"
              >
                close ledger ✕
              </button>
              
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D97706] block mb-2 font-bold">[ ancestral logs &bull; dahab ]</span>
              <h4 className="font-serif text-3xl lowercase mb-4">the covenants of the sand ring</h4>
              <p className="font-sans text-sm tracking-wide leading-relaxed mb-6 text-stone-800">
                In the desert matrix, open flame isn’t ornamental—it’s an architectural point of arrival. This layout was plotted step-by-step alongside local Muzayna tribe elders to ensure that modern global nomad work habits never compromise or displace local cultural dignity, but respect its borders instead.
              </p>
              <div className="border-t border-[#2D4A3E]/20 pt-4">
                <p className="font-sans text-xs italic text-[#2D4A3E]/80 leading-relaxed">
                  Every Thursday evening, we initiate the complete electronic disconnection protocol, steep dry wild sage leaf formulas over live coals, and share communal history without deadlines.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* --- SECTION 9: THE GROUNDING FOOTER --- */}
      <footer className={`w-full py-16 px-6 border-t ${themeBorder} flex flex-col gap-12 max-w-7xl mx-auto relative z-20 bg-transparent`}>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Identity Matrix */}
          <div className="md:col-span-4 space-y-3">
            <h5 className="font-serif text-2xl lowercase font-bold tracking-tighter">nakhyl zone</h5>
            <p className="font-mono text-xs uppercase tracking-widest opacity-60 font-semibold">cultural oasis sanctuary &bull; south sinai</p>
            <div className="text-xs font-mono opacity-50 space-y-1 pt-2">
              <div>Coordinates: 28.4975° N, 34.5132° E</div>
              <div>Mashraba Courtyard Track, Inward Palm Stand, Dahab</div>
            </div>
          </div>

          {/* Environmental Sensor Telemetry Column */}
          <div className={`md:col-span-4 border-l-0 md:border-l pl-0 md:pl-8 ${themeBorder} space-y-2`}>
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 block font-bold">live environmental metrics</span>
            <div className="flex items-center space-x-3">
              <span className="text-xs font-mono tracking-widest opacity-70">Oasis Clock:</span>
              <span className="font-mono text-xs bg-current/5 px-3 py-1 rounded text-[#D97706] font-bold tracking-widest">{dahabTime || "00:00:00"}</span>
            </div>
            <div className="text-xs font-sans opacity-70 leading-relaxed">
              Sensor Index: 29°C &bull; Boundless Clear Starlight &bull; Wind Pattern NNW 14 knots
            </div>
          </div>

          {/* Blueprint Navigation */}
          <div className="md:col-span-4 flex flex-col md:items-end gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 block font-bold">sanctuary blueprints</span>
            <div className="flex flex-wrap md:justify-end gap-4 font-mono text-xs uppercase tracking-widest pt-1">
              <a href="#matrix" className="hover:text-[#D97706] transition-colors">the groves</a>
              <a href="#matrix" className="hover:text-[#D97706] transition-colors">weekly rituals</a>
              <a href="#matrix" className="hover:text-[#D97706] transition-colors">habak lounge</a>
              <a href="#matrix" className="font-bold underline decoration-[#D97706] underline-offset-4 hover:text-[#D97706] transition-colors">nomad validation</a>
            </div>
          </div>

        </div>

        {/* Global Copyright Regulatory Stamp */}
        <div className="w-full border-t pt-8 flex flex-col sm:flex-row justify-between items-center opacity-40 font-mono text-[10px] tracking-widest uppercase gap-4">
          <div>&copy; 2026 nakhyl zone dahab. all system rights preserved under native desert law.</div>
          <div className="tracking-widest">architected by senior structural web engineers</div>
        </div>
      </footer>

    </div>
  );
}