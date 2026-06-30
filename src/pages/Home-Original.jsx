import React, { useState, useEffect } from 'react';



export default function NakhylAmbientLanding() {
  // --- STATE MANAGEMENT ---
  // Theme State: 'day' (☀️ Chase the Sun) or 'night' (🌙 Follow the Sparks)
  const [isNight, setIsNight] = useState(false);
  // Audio State for Ambient Soundscape Footer Controller
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  // Virtual Campfire Overlay Popup State
  const [showCampfireModal, setShowCampfireModal] = useState(false);

  // Synchronized Dahab Time & Simple Weather Vector Simulation
  const [dahabTime, setDahabTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      // Offset to Egypt Time (GMT+2 / GMT+3 depending on exact rules, simulated clearly)
      const options = { timeZone: 'Africa/Cairo', hour: '2xl', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
      setDahabTime(new Date().toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Structural Tokens based on State Engine
  const themeBg = isNight ? 'bg-[#0A1118] transition-colors duration-1000' : 'bg-[#F4EBE1] transition-colors duration-1000';
  const themeText = isNight ? 'text-[#F4EBE1]' : 'text-[#2D4A3E]';
  const themeBorder = isNight ? 'border-[rgba(244,235,225,0.15)]' : 'border-[rgba(45,74,62,0.15)]';
  const accentColor = isNight ? 'text-[#D97706]' : 'text-[#2D4A3E]';

  return (
    <div className={`min-h-screen ${themeBg} ${themeText} font-sans antialiased overflow-x-hidden relative selection:bg-[#D97706] selection:text-white`}>
      
      {/* GLOBAL BACKGROUND NOISE OVERLAY FOR TACTILE STONE EFFECT */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80')] mix-blend-overlay z-50"></div>

      {/* --- SECTION 1: THE "SLOW-DOWN" HERO SPLIT --- */}
     


      {/* --- SECTION 2: THE SOUND OF WELCOMING --- */}
      <section className={`w-full border-b ${themeBorder} py-4 px-6 flex flex-col sm:flex-row justify-between items-center gap-4`}>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsPlayingAudio(!isPlayingAudio)}
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform active:scale-95 border ${themeBorder}`}
          >
            {isPlayingAudio ? (
              <span className="font-mono text-xs">⏸</span>
            ) : (
              <span className={`font-mono text-xs ${isNight ? 'text-[#D97706]' : 'text-[#2D4A3E]'}`}>▶</span>
            )}
          </button>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest font-semibold">listen to the oasis right now</p>
            <p className="text-xs opacity-60 tracking-normal font-sans">Palms rustling, distant acoustic strings, campfire crackle loop</p>
          </div>
        </div>

        {/* Audio Waveform Micro-Animation */}
        <div className="flex items-end space-x-1 h-6 px-4">
          {[4, 8, 3, 7, 9, 4, 8, 2, 6, 9, 5, 7, 3, 8].map((val, idx) => (
            <div 
              key={idx} 
              className={`w-[2px] transition-all duration-300 ${isNight ? 'bg-[#D97706]' : 'bg-[#2D4A3E]'}`}
              style={{ 
                height: isPlayingAudio ? `${val * 2.5}px` : '3px',
                animation: isPlayingAudio ? `pulse 1.2s ease-in-out infinite alternate` : 'none',
                animationDelay: `${idx * 0.1}s`
              }}
            ></div>
          ))}
        </div>
      </section>


      {/* --- SECTION 3: THE ASYMMETRICAL BENTO MATRIX --- */}
      <section id="explore" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Panel 1: Physical Oasis */}
          <div className={`md:col-span-7 p-8 rounded-[2.5rem_1.2rem_4rem_2rem] border ${themeBorder} shadow-sm flex flex-col justify-between min-h-[380px] group overflow-hidden relative`}>
            <div className="absolute inset-0 -z-10 opacity-10 group-hover:scale-105 transition-transform duration-700 bg-[url('https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center"></div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-60 block mb-2">[ courtyard 01 ]</span>
              <h3 className="font-serif text-3xl lowercase mb-4">the raw, living palm groves</h3>
            </div>
            <p className="font-sans text-sm tracking-wide opacity-80 max-w-md leading-relaxed">
              Ditched the tiled modern restaurant grids. Our floor is pure raw crushed sand adorned with handwoven organic Bedouin rugs that contour natively around ancient trees.
            </p>
          </div>

          {/* Panel 2: Aroma of Ember-Brewed Tea */}
          <div className={`md:col-span-5 p-8 rounded-[1.5rem_3rem_1.8rem_2.5rem] border ${themeBorder} shadow-sm flex flex-col justify-between min-h-[380px] relative overflow-hidden group`}>
            <div className="absolute inset-0 -z-10 opacity-20 group-hover:scale-110 transition-transform duration-700 bg-[url('https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80')] bg-cover bg-center mix-blend-luminosity"></div>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-60 block mb-2">[ ritual ]</span>
              <h3 className="font-serif text-3xl lowercase mb-4">ember-brewed habak infusion</h3>
            </div>
            <p className="font-sans text-sm tracking-wide opacity-80 leading-relaxed">
              Slowly boiled over real sagebrush charcoal. A delicate, intoxicating herbal sweet profile cultivated natively right within the high rocks of Saint Catherine mountain ranges.
            </p>
          </div>

          {/* Panel 3: Sound Preview Interactive Block */}
          <div className={`md:col-span-12 p-8 rounded-[3.5rem_2rem_2.5rem_4rem] border ${themeBorder} bg-opacity-50 flex flex-col md:flex-row justify-between items-start md:items-center gap-6`}>
            <div className="max-w-xl">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-60 block mb-2">[ open air acoustic ]</span>
              <h3 className="font-serif text-2xl lowercase mb-2">the slow rhythm network</h3>
              <p className="font-sans text-sm tracking-wide opacity-70 leading-relaxed">
                We ban amplified electronic soundscapes. Local travelers and nomad artists play acoustic instruments directly at sand floor level, forming raw live circles under the stars.
              </p>
            </div>
            <button 
              onClick={() => setIsPlayingAudio(!isPlayingAudio)} 
              className={`px-6 py-3 rounded-full font-mono text-xs uppercase tracking-widest border ${themeBorder} shrink-0 bg-transparent hover:scale-105 transition-transform`}
            >
              {isPlayingAudio ? "stop audio stream" : "preview soundscape live"}
            </button>
          </div>

        </div>
      </section>


      {/* --- SECTION 4: THE ANCHOR ETHOS --- */}
      <section className={`w-full py-24 px-6 border-y ${themeBorder} text-center relative overflow-hidden`}>
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-6">our non-negotiable architectural truth</span>
          <h2 className="font-serif text-3xl md:text-5xl font-light leading-relaxed lowercase mb-8">
            "we built a secret, completely quiet shelter right behind the urban rush. steps away from the water, kilometers away from the noise."
          </h2>
          <div className="w-12 h-[1px] bg-current mx-auto opacity-30"></div>
        </div>
      </section>


      {/* --- SECTION 5: DAILY HORIZON GRID --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Block tracking current state switch */}
          <div>
            <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-4">the dynamic atmosphere rhythm</span>
            <h2 className="font-serif text-4xl font-light lowercase leading-relaxed mb-6">
              how nakhyl breathes across twenty-four moon cycles
            </h2>
            <p className="font-sans text-sm tracking-wide opacity-80 leading-relaxed mb-8">
              Watch how our structural space contours elegantly to match your state of being. Toggle the system switch above or observe our daily transformation below.
            </p>

            <div className="space-y-6">
              <div className={`p-4 rounded-xl border ${!isNight ? 'border-current font-bold' : 'opacity-40 border-transparent'} transition-all`}>
                <h4 className="font-serif text-lg lowercase mb-1">☀️ the high sun focus (08:00 - 17:00)</h4>
                <p className="font-sans text-xs opacity-80 tracking-wide">Solar charged nomad desks, shade awnings, unheated cold microbrews, and pure work stillness.</p>
              </div>
              <div className={`p-4 rounded-xl border ${isNight ? 'border-current font-bold' : 'opacity-40 border-transparent'} transition-all`}>
                <h4 className="font-serif text-lg lowercase mb-1">🌙 the spark gathering (18:00 - late)</h4>
                <p className="font-sans text-xs opacity-80 tracking-wide">Open firepits ignited, low lanterns lit, habak leaves steeped, and dynamic intimate seating loops.</p>
              </div>
            </div>
          </div>

          {/* Interactive Responsive Image Shell */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#D97706]/10 rounded-[4rem_2rem_5rem_3rem] blur-2xl -z-10 animate-pulse"></div>
            <img 
              src={isNight 
                ? "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1200&q=80" 
                : "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
              } 
              alt="Oasis transition state" 
              className="w-full h-[450px] object-cover rounded-[4rem_2rem_5rem_3rem] border border-current/10 shadow-xl transition-all duration-1000 filter grayscale-[20%]"
            />
          </div>

        </div>
      </section>


      {/* --- SECTION 6: THE WEEKLY RITUALS RIBBON --- */}
      <section className={`w-full py-12 border-y ${themeBorder} overflow-x-auto whitespace-nowrap scrollbar-none`}>
        <div className="inline-flex space-x-12 px-6">
          {[
            { day: "mon / wed", title: "cinema wadi open air screenings", desc: "classic independent indie under stars" },
            { day: "every thu", title: "acoustic authentic sand loops", desc: "unplugged regional music gathers" },
            { day: "every sat", title: "the community alignment circle", desc: "slow storytelling tea rituals" },
            { day: "daily sunrise", title: "silent palm meditation hours", desc: "absolute complete zero noise deck access" }
          ].map((ritual, idx) => (
            <div key={idx} className="inline-block w-[300px] whitespace-normal group">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D97706] block mb-2">{ritual.day}</span>
              <h4 className="font-serif text-xl lowercase mb-1 group-hover:underline transition-all">{ritual.title}</h4>
              <p className="font-sans text-xs opacity-60 tracking-wide">{ritual.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* --- SECTION 7: THE LIVE FOOTPRINT STREAM --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest opacity-60 block mb-2">unfiltered live footprints</span>
          <h2 className="font-serif text-3xl lowercase">moments from the community layer</h2>
        </div>

        {/* Tactile Asymmetric Masonry Simulation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { img: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=600&q=80", rad: "rounded-[2rem_1rem_3rem_1.5rem]", user: "@nomad_lisa", text: "Finally a spot in Dahab that smells purely like mountain campfires." },
            { img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80", rad: "rounded-[1rem_2.5rem_1.5rem_3rem]", user: "@sinai_wanderer", text: "No speakers. Just acoustic frames, wind, and hot tea loops." },
            { img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80", rad: "rounded-[3rem_1.5rem_2rem_2.5rem]", user: "@karl_codes", text: "The morning Wi-Fi under the palm tree shade is magic setup." },
            { img: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80", rad: "rounded-[1.5rem_2rem_1rem_3.5rem]", user: "@boho_spirit", text: "Cinema Wadi night felt like an old family living room on sand." }
          ].map((item, idx) => (
            <div key={idx} className={`p-4 border ${themeBorder} ${item.rad} flex flex-col justify-between hover:shadow-md transition-shadow`}>
              <img src={item.img} alt="Guest snapshot" className={`w-full h-48 object-cover mb-4 ${item.rad}`} />
              <div>
                <p className="font-sans text-xs italic opacity-80 mb-3">"{item.text}"</p>
                <span className="font-mono text-[10px] tracking-widest uppercase opacity-40">{item.user}</span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* --- SECTION 8: THE "VIRTUAL CAMPFIRE" CALLOUT --- */}
      <section className={`w-full py-20 px-6 border-t ${themeBorder} bg-gradient-to-b from-transparent to-current/[0.02] text-center relative overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-10">
          <div className="w-[400px] h-[400px] rounded-full bg-[#D97706] blur-[120px]"></div>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Animated Glow Campfire Asset Action Hook */}
          <button 
            onClick={() => setShowCampfireModal(true)}
            className="w-16 h-16 rounded-full bg-stone-900 border border-[#D97706]/40 flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(217,119,6,0.3)] hover:scale-110 transition-transform animate-bounce duration-1000"
            title="Ignite the story overlay"
          >
            <span className="text-xl animate-pulse">🔥</span>
          </button>
          
          <h3 className="font-serif text-2xl lowercase mb-3">gather around the digital fire</h3>
          <p className="font-sans text-sm tracking-wide opacity-70 mb-6">
            Click the glowing spark indicator above to open our ancestral story ledger: detailing local Bedouin heritage, the authentic sourcing of Habak leaves, and our oasis building blueprints.
          </p>
        </div>

        {/* MODAL OVERLAY INLINE ELEMENT */}
        {showCampfireModal && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all animate-fadeIn">
            <div className="bg-[#F4EBE1] text-[#2D4A3E] p-8 max-w-lg rounded-[2.5rem_1rem_4rem_2rem] border-2 border-[#D97706] text-left relative shadow-2xl">
              <button 
                onClick={() => setShowCampfireModal(false)}
                className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest bg-[#2D4A3E] text-[#F4EBE1] px-2 py-1 rounded"
              >
                esc ✕
              </button>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#D97706] block mb-2">heritage ledger &bull; ritual identity</span>
              <h4 className="font-serif text-3xl lowercase mb-4">the ritual of genuine sanctuary</h4>
              <p className="font-sans text-sm tracking-wide leading-relaxed mb-4">
                In the desert, fire isn’t just warmth—it’s a physical invitation to slow down. Our space was designed directly alongside the local elders of South Sinai to guarantee that modern digital workers do not disturb or erase local memory, but instead sit quietly at its edge.
              </p>
              <p className="font-sans text-xs italic opacity-75">
                Every Thursday night, we brew tea over raw mountain scrub embers and listen without deadlines.
              </p>
            </div>
          </div>
        )}
      </section>

    </div>
  );
}