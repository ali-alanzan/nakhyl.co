import React, { useState, useEffect } from 'react';

export default function NakhylKitchenMenu() {
  // Master Dynamic Layout State: Managing Day (☀️ Chase the Sun) vs Night (🌙 Follow the Sparks)
  const [isNight, setIsNight] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [whatsappMessage, setWhatsappMessage] = useState('');
  
  // Virtual Campfire Overlay State
  const [showCampfireModal, setShowCampfireModal] = useState(false);
  // Audio Controller State
  const [isPlayingSound, setIsPlayingSound] = useState(false);

  // Time tracker for Ambient Sensor Console (Dahab Local Time)
  const [dahabTime, setDahabTime] = useState('');

  useEffect(() => {
    const updateDahabTime = () => {
      const options = {
        timeZone: 'Africa/Cairo',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setDahabTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateDahabTime();
    const interval = setInterval(updateDahabTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Menu Data Structure containing tags, day/night states, and tailored descriptions
  const menuItems = [
    {
      id: 1,
      title: "Bedouin Sunrise Platter",
      price: "EGP 240",
      description: "Slow farm eggs, local mountain cheeses, fresh hand-mashed foul with olive oil, served alongside fire-hot flatbread directly from the mud oven.",
      category: "Morning Under the Palms",
      tag: "Gathering Platters",
      state: "day"
    },
    {
      id: 2,
      title: "The Energizer Nomad Elixir",
      price: "EGP 110",
      description: "Fresh cold-pressed Sinai lemonades infused with wild garden mint and a delicate drizzle of organic desert blossom honey.",
      category: "Morning Under the Palms",
      tag: "Sinai Herbs",
      state: "day"
    },
    {
      id: 3,
      title: "Hand-Rolled Fig & Goat Cheese Flatbread",
      price: "EGP 185",
      description: "Crisp artisan flatbread topped with soft mountain goat cheese, sun-dried Sinai figs, and a dusting of local thyme.",
      category: "Morning Under the Palms",
      tag: "Fire-Cooked",
      state: "day"
    },
    {
      id: 4,
      title: "Nakhyl Mandi Chicken",
      price: "EGP 420",
      description: "Tender, wood-smoked half chicken slow-cooked over pit embers for six hours, buried under sand, served over spiced long-grain aromatic rice.",
      category: "Earth & Fire Dinners",
      tag: "Fire-Cooked",
      state: "night"
    },
    {
      id: 5,
      title: "Bedouin Campfire Tea (Habak & Sage)",
      price: "EGP 75",
      description: "Authentic loose-leaf black tea brewed meticulously over real open embers, heavily infused with wild Habak mint or hand-gathered desert sage.",
      category: "Earth & Fire Dinners",
      tag: "Sinai Herbs",
      state: "night"
    },
    {
      id: 6,
      title: "The Oasis Smoked Rib Platters",
      price: "EGP 580",
      description: "Shared slow-roasted lamb ribs glazed with pomegranate molasses and dates, intended for open-air circle gatherings under the sky.",
      category: "Earth & Fire Dinners",
      tag: "Gathering Platters",
      state: "night"
    }
  ];

  const filters = ['All', 'Fire-Cooked', 'Sinai Herbs', 'Gathering Platters'];

  const filteredMenu = menuItems.filter(item => {
    const matchesFilter = activeFilter === 'All' || item.tag === activeFilter;
    return matchesFilter;
  });

  const handleWhatsappSubmit = (e) => {
    e.preventDefault();
    if (!whatsappMessage.trim()) return;
    const encodedText = encodeURIComponent(`Salutations Nakhyl Oasis Team! I am planning my arrival and would love to request: ${whatsappMessage}`);
    window.open(`https://wa.me/201000000000?text=${encodedText}`, '_blank');
  };

  return (
    <div 
      className={`min-h-screen font-sans transition-colors duration-[1000ms] ease-in-out ${
        isNight ? 'bg-[#0A1118] text-[#F4EBE1]' : 'bg-[#F4EBE1] text-[#2D4A3E]'
      }`}
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* HEADER / NAVIGATION BAR */}
      <nav className={`px-6 py-6 md:px-12 flex justify-between items-center border-b transition-colors duration-500 ${
        isNight ? 'border-amber-700/20' : 'border-[#2D4A3E]/10'
      }`}>
        <div className="flex flex-col">
          <span className="font-serif text-2xl tracking-wide lowercase leading-none">nakhyl zone</span>
          <span className="text-[10px] tracking-[0.3em] uppercase mt-1 opacity-70">cultural oasis • dahab</span>
        </div>

        {/* Global Dynamic Ambient Control Switches */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsNight(!isNight)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs uppercase tracking-widest transition-all duration-300 ${
              isNight 
                ? 'border-amber-600/40 bg-amber-950/20 text-amber-500 hover:bg-amber-900/30' 
                : 'border-[#2D4A3E]/20 bg-[#2D4A3E]/5 text-[#2D4A3E] hover:bg-[#2D4A3E]/10'
            }`}
          >
            {isNight ? (
              <>
                <span className="animate-pulse">🌙</span> Follow the Sparks
              </>
            ) : (
              <>
                <span>☀️</span> Chase the Sun
              </>
            )}
          </button>
        </div>
      </nav>

      {/* SECTION 1: THE SMOKED CANVAS INTRO */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
        <span className={`text-xs tracking-[0.4em] uppercase font-semibold block mb-4 ${isNight ? 'text-amber-500' : 'text-[#2D4A3E]/70'}`}>
          The Slow Culinary Movement
        </span>
        <h1 className="font-serif text-4xl md:text-6xl lowercase tracking-tight max-w-3xl mx-auto leading-[1.15] mb-8">
          spiced by local tradition, cooked slowly on open embers
        </h1>
        <p className="text-sm md:text-base max-w-2xl mx-auto opacity-80 leading-relaxed mb-12 tracking-wide">
          In our kitchen, time is an essential seasoning. We forgo generic kitchen tech to embrace the ancestral warmth of natural palm groves, mud ovens, and heavy firewood. Every bite traces back to the sand.
        </p>

        {/* Tactical Custom Filter Switches */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-[1.5rem_0.8rem_1.8rem_1rem] text-xs uppercase tracking-widest transition-all duration-300 ${
                activeFilter === filter
                  ? isNight 
                    ? 'bg-[#D97706] text-[#0A1118] font-bold shadow-lg shadow-amber-600/20' 
                    : 'bg-[#2D4A3E] text-[#F4EBE1] font-bold shadow-md shadow-[#2D4A3E]/10'
                  : isNight
                    ? 'bg-slate-900/40 border border-amber-600/10 text-[#F4EBE1]/70 hover:border-amber-600/40'
                    : 'bg-white/40 border border-[#2D4A3E]/10 text-[#2D4A3E]/80 hover:bg-white/80'
              }`}
            >
              {filter === 'All' ? '[ All Alchemy ]' : `[ ${filter} ]`}
            </button>
          ))}
        </div>
      </header>

      <hr className={`max-w-6xl mx-auto border-t my-6 opacity-40 ${isNight ? 'border-amber-900/30' : 'border-[#2D4A3E]/20'}`} />

      {/* SECTION 2 & SECTION 3: CORE DYNAMIC MENU STATES CONTAINER */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Morning / Daytime Anchor Grid Grid Layer */}
        <section className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xl md:text-2xl font-serif lowercase">morning under the palms</span>
            <div className={`h-[1px] flex-1 opacity-20 ${isNight ? 'bg-amber-500' : 'bg-[#2D4A3E]'}`} />
            <span className="text-[10px] tracking-widest uppercase opacity-60">☀️ Day Cycle</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.filter(i => i.state === 'day').map(item => (
              <div 
                key={item.id} 
                className={`p-8 transition-all duration-500 transform hover:-translate-y-1 relative group ${
                  isNight 
                    ? 'bg-slate-900/20 border border-amber-900/10 rounded-[2.2rem_1.1rem_3.5rem_1.8rem]' 
                    : 'bg-white/50 border border-[#2D4A3E]/10 rounded-[3rem_1.5rem_2.5rem_1.2rem] shadow-sm shadow-[#2D4A3E]/5'
                }`}
              >
                <div className="absolute top-4 right-4 text-[10px] tracking-widest opacity-40 uppercase border px-2 py-0.5 rounded-full border-current">
                  {item.tag}
                </div>
                <h3 className="font-serif text-2xl lowercase pr-16 mb-2 tracking-wide group-hover:text-amber-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <span className="font-serif text-lg font-medium block mb-4 opacity-90">{item.price}</span>
                <p className="text-xs leading-relaxed opacity-70 tracking-wide">{item.description}</p>
              </div>
            ))}
          </div>
          {filteredMenu.filter(i => i.state === 'day').length === 0 && (
            <p className="text-center text-xs opacity-50 italic py-6">No daytime platters match this filter selection.</p>
          )}
        </section>

        {/* Night State / Earth & Fire Evening Section */}
        <section className="mb-12">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xl md:text-2xl font-serif lowercase">earth & fire dinners</span>
            <div className={`h-[1px] flex-1 opacity-20 ${isNight ? 'bg-amber-500' : 'bg-[#2D4A3E]'}`} />
            <span className="text-[10px] tracking-widest uppercase opacity-60">🌙 Ember Cycle</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMenu.filter(i => i.state === 'night').map(item => (
              <div 
                key={item.id} 
                className={`p-8 transition-all duration-500 transform hover:-translate-y-1 relative group ${
                  isNight 
                    ? 'bg-amber-950/10 border border-amber-600/20 rounded-[2.5rem_1.2rem_4rem_2rem] shadow-xl shadow-black/40' 
                    : 'bg-[#FAF6F0] border border-[#2D4A3E]/15 rounded-[1.8rem_2.8rem_1.2rem_3.2rem]'
                }`}
              >
                <div className="absolute top-4 right-4 text-[10px] tracking-widest opacity-50 uppercase border px-2 py-0.5 rounded-full border-amber-600 text-amber-600">
                  {item.tag}
                </div>
                <h3 className="font-serif text-2xl lowercase pr-16 mb-2 tracking-wide text-amber-600 md:text-inherit group-hover:text-amber-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <span className="font-serif text-lg font-medium block mb-4 text-[#D97706]">{item.price}</span>
                <p className="text-xs leading-relaxed opacity-70 tracking-wide">{item.description}</p>
              </div>
            ))}
          </div>
          {filteredMenu.filter(i => i.state === 'night').length === 0 && (
            <p className="text-center text-xs opacity-50 italic py-6">No night hearth platters match this filter selection.</p>
          )}
        </section>

      </main>

      {/* SECTION 4: DIRECT COUNTER ORDERING VIA CONVERSATIONAL FORM */}
      <section className="max-w-4xl mx-auto px-6 py-12 mb-24">
        <div className={`p-8 md:p-12 text-center shadow-xl relative overflow-hidden ${
          isNight 
            ? 'bg-slate-950 border border-amber-600/20 rounded-[3.5rem_2rem_4rem_1.5rem]' 
            : 'bg-[#EAE1D5] border border-[#2D4A3E]/15 rounded-[2.5rem_4rem_1.5rem_3rem]'
        }`}>
          <div className="absolute top-0 right-0 p-4 opacity-10 font-serif text-8xl pointer-events-none select-none">
            Habak
          </div>

          <span className="text-[10px] tracking-[0.3em] uppercase block opacity-60 mb-2">Frictionless Nomadic Service</span>
          <h2 className="font-serif text-3xl md:text-4xl lowercase mb-4 tracking-tight">
            want your tea ready when you walk in?
          </h2>
          <p className="text-xs md:text-sm max-w-lg mx-auto opacity-80 mb-8 leading-relaxed">
            Send your order straight to our open fire counter. Type what you need, specify your arrival time, and bypass standard waiting queues.
          </p>

          <form onSubmit={handleWhatsappSubmit} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <input 
              type="text"
              value={whatsappMessage}
              onChange={(e) => setWhatsappMessage(e.target.value)}
              placeholder="e.g., 2 Mints Lemonades & a Sunrise Platter in 20 minutes..."
              className={`flex-1 px-5 py-4 text-xs tracking-wide rounded-[1.5rem_1rem_2rem_1rem] focus:outline-none transition-all duration-300 border ${
                isNight 
                  ? 'bg-[#0A1118] text-[#F4EBE1] border-amber-600/20 focus:border-amber-500' 
                  : 'bg-[#F4EBE1] text-[#2D4A3E] border-[#2D4A3E]/20 focus:border-[#2D4A3E]'
              }`}
            />
            <button
              type="submit"
              className="px-6 py-4 rounded-[1rem_1.5rem_1rem_2rem] text-xs font-bold uppercase tracking-widest bg-[#D97706] text-white hover:bg-amber-600 transition-all duration-300 shadow-md shadow-amber-600/20 whitespace-nowrap"
            >
              🔥 Wire to WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* FLOATING ACTION ACCENTS: THE VIRTUAL CAMPFIRE & MICRO-INTERACTION TRIGGERS */}
      <div className="fixed bottom-24 right-6 flex flex-col gap-3 z-40">
        <button 
          onClick={() => setShowCampfireModal(true)}
          className="w-12 h-12 bg-[#D97706] text-white rounded-full flex items-center justify-center shadow-xl shadow-amber-600/30 hover:scale-110 transition-transform duration-300 group"
          title="Virtual Campfire Ritual"
        >
          <span className="text-xl animate-pulse group-hover:rotate-12 transition-transform">🔥</span>
        </button>
      </div>

      {/* GLOBAL BRAND FOOTER CONSOLE & AMBIENT SOUND CONTROLLER */}
      <footer className={`mt-auto px-6 py-8 border-t transition-colors duration-500 ${
        isNight ? 'bg-black/40 border-amber-900/20 text-[#F4EBE1]/60' : 'bg-[#EAE1D5]/40 border-[#2D4A3E]/10 text-[#2D4A3E]/70'
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs">
          
          {/* Ambient Soundscape Controller Component */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsPlayingSound(!isPlayingSound)}
              className={`p-2.5 rounded-full border transition-all duration-300 ${
                isPlayingSound 
                  ? 'bg-amber-600 text-white border-amber-500' 
                  : 'border-current opacity-60 hover:opacity-100'
              }`}
            >
              {isPlayingSound ? (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                </svg>
              ) : (
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
            <div className="flex flex-col">
              <span className="font-semibold tracking-wider lowercase">listen to the oasis right now</span>
              <span className="text-[10px] opacity-60">
                {isPlayingSound ? "Playing: Wind through palms, crackling crackles & faint guitar strings" : "Soundscape muted"}
              </span>
            </div>
            
            {/* Soft Simulated SVG Waveform animation */}
            {isPlayingSound && (
              <div className="flex items-end gap-0.5 h-4 ml-2">
                <div className="w-[2px] bg-amber-500 animate-[bounce_1s_infinite_100ms]" style={{height: '60%'}}></div>
                <div className="w-[2px] bg-amber-500 animate-[bounce_1s_infinite_300ms]" style={{height: '100%'}}></div>
                <div className="w-[2px] bg-amber-500 animate-[bounce_1s_infinite_200ms]" style={{height: '40%'}}></div>
                <div className="w-[2px] bg-amber-500 animate-[bounce_1s_infinite_400ms]" style={{height: '80%'}}></div>
              </div>
            )}
          </div>

          {/* Telemetry Sensor Logs */}
          <div className="flex items-center gap-6 tracking-widest text-[10px] uppercase">
            <div>
              <span className="opacity-50 mr-1">Location:</span> Dahab, Egypt
            </div>
            <div>
              <span className="opacity-50 mr-1">Local Time:</span> {dahabTime || "00:00:00 AM"}
            </div>
          </div>
        </div>
      </footer>

      {/* EDITORIAL VIRTUAL CAMPFIRE POP-UP OVERLAY */}
      {showCampfireModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-500">
          <div className="bg-[#0A1118] text-[#F4EBE1] border border-amber-600/30 max-w-lg w-full p-8 md:p-10 relative rounded-[3rem_1rem_4rem_2rem] shadow-2xl shadow-amber-900/30">
            <button 
              onClick={() => setShowCampfireModal(false)}
              className="absolute top-6 right-6 text-sm text-amber-500 hover:text-white uppercase tracking-widest"
            >
              [ close ]
            </button>
            
            <span className="text-[10px] tracking-[0.4em] uppercase text-amber-500 block mb-2">Sinai Customs</span>
            <h3 className="font-serif text-3xl lowercase mb-6 leading-tight text-[#F4EBE1]">
              The Sacred Ritual of Habak Tea
            </h3>
            <p className="text-xs leading-relaxed text-[#F4EBE1]/80 space-y-4 mb-6 tracking-wide">
              In the deep desert, hospitality is not an option; it is a sacred custom. When a nomad walks into our courtyard grove, the campfire is struck instantly. 
              <br /><br />
              Habak mint is found only hidden within the high mountain rock valleys of the Sinai peninsula. It is brewed gently on low charcoal ash embers for hours alongside sweet sage to cool the blood and settle global traveler thoughts. Here, you don't buy an hours rest—you enter a shared house.
            </p>
            <div className="bg-amber-950/40 border border-amber-600/20 p-4 rounded-xl text-center">
              <span className="text-[11px] italic text-amber-500 tracking-wide block">
                "As long as there is tea over coal, there is kinship under the stars."
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}