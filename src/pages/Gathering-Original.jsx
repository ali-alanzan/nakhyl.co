import React, { useState, useEffect } from 'react';

// --- SYSTEM MOCK DATA ---
const WEEKLY_EVENTS = [
  { id: 'mon', day: 'Monday', time: '19:30', title: 'cinema wadi: egyptian masterpieces', host: 'Curated by Cairo Film Archive', desc: 'Rediscovering cinematic treasures under the velvet Sinai stars. Local herbal tea served at intermission.', tag: 'Film' },
  { id: 'tue', day: 'Tuesday', time: '17:00', title: 'nomad slow-talks & local dates', host: 'Hosted by Nakhyl Community', desc: 'Micro-sharing sessions by international digital creators paired with fresh premium organic dates.', tag: 'Culture' },
  { id: 'wed', day: 'Wednesday', time: '20:00', title: 'cinema wadi: global indie pop-ups', host: 'In partnership with Zawya Cinema', desc: 'Award-winning contemporary world cinema cutting across borders, projected over raw weathered sandstone.', tag: 'Film' },
  { id: 'thu', day: 'Thursday', time: '21:00', title: 'the bonfire acoustic jams', host: 'Bedouin Musicians & Global Nomads', desc: 'Our flagship collaborative ritual. Raw oud chords meet global percussion around an untamed desert campfire.', tag: 'Music' },
  { id: 'sat', day: 'Saturday', time: '06:30', title: 'sunrise soundscapes & dynamic tea', host: 'Led by Sheikh Mansour', desc: 'Ambient field recordings mixed live alongside a traditional morning fire-brewing ceremony.', tag: 'Wellness' },
];

const SEATING_ZONES = [
  { id: 'zone-campfire', name: 'Inner Circle (Campfire Sparks)', capacity: '12 seats left', description: 'Closest to the live acoustic hearth. True low-floor handmade Bedouin rugs.', premium: true },
  { id: 'zone-palm-north', name: 'The Palm Grove North Canopy', capacity: '8 seats left', description: 'Dappled moonlight through organic fronds. Cushioned floor mounds.', premium: false },
  { id: 'zone-wadi-screen', name: 'Cinema Wadi Center Deck', capacity: 'Fully Booked', description: 'Prime alignment facing the hand-molded sandstone projection wall.', premium: false },
  { id: 'zone-boho-nook', name: 'Secret Bohemian Alcove', capacity: '4 seats left', description: 'Set back into an asymmetric hand-molded stone niche for absolute privacy.', premium: true },
];

export default function GatheringHub() {
  // Global Theme Engine: Day (☀️ Chase the Sun) vs Night (🌙 Follow the Sparks)
  const [isNight, setIsNight] = useState(true);
  
  // Component Interaction States
  const [selectedEvent, setSelectedEvent] = useState('thu');
  const [selectedZone, setSelectedZone] = useState('zone-campfire');
  const [showCampfireOverlay, setShowCampfireOverlay] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [bookingStatus, setBookingStatus] = useState('');

  // Auto-scrolling ambient ticket glow or status messaging simulation
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingStatus('Connecting via secure WhatsApp API...');
    setTimeout(() => {
      const chosenEvent = WEEKLY_EVENTS.find(ev => ev.id === selectedEvent)?.title || 'Weekly Ritual';
      const chosenZone = SEATING_ZONES.find(z => z.id === selectedZone)?.name || 'General Rug Seating';
      const message = encodeURIComponent(`Marhaba Nakhyl Zone! I would like to lock in ${ticketQuantity} spot(s) for "${chosenEvent}" sitting at the "${chosenZone}". Please let me know availability.`);
      window.open(`https://api.whatsapp.com/send?phone=201000000000&text=${message}`, '_blank');
      setBookingStatus('');
    }, 800);
  };

  return (
    <div 
      className={`min-h-screen font-sans transition-colors duration-1000 ease-in-out ${
        isNight ? 'bg-[#0A1118] text-[#F4EBE1]' : 'bg-[#F4EBE1] text-[#2D4A3E]'
      } overflow-x-hidden relative`}
    >
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-radial-gradient from-amber-500/10 to-transparent pointer-events-none blur-3xl opacity-60" />
      <div className="absolute bottom-1/3 left-0 w-[40vw] h-[40vw] bg-radial-gradient from-[#2D4A3E]/10 to-transparent pointer-events-none blur-3xl opacity-40" />

      {/* --- FLOATING PREMIUM STICKY CONTROLS --- */}
      <div className="fixed top-6 right-6 z-50 flex items-center gap-3">
        {/* Day/Night Cosmic Switcher */}
        <button 
          onClick={() => setIsNight(!isNight)}
          className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500 shadow-md flex items-center gap-2 border ${
            isNight 
              ? 'bg-[#F4EBE1] text-[#0A1118] border-transparent hover:bg-amber-500 hover:text-white' 
              : 'bg-[#2D4A3E] text-[#F4EBE1] border-transparent hover:bg-[#0A1118]'
          }`}
        >
          {isNight ? (
            <><span>☀️</span> chase the sun</>
          ) : (
            <><span>🌙</span> follow the sparks</>
          )}
        </button>
        
        {/* Quick Campfire Pulse Hook */}
        <button 
          onClick={() => setShowCampfireOverlay(true)}
          className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center animate-pulse shadow-lg text-white text-lg hover:scale-110 transition-transform"
          title="The Ritual of Habak Tea"
        >
          🔥
        </button>
      </div>

      {/* --- HERO / INTRODUCTION HEADER --- */}
      <header className="max-w-7xl mx-auto px-6 pt-24 pb-12 text-center relative z-10">
        <span className="text-xs uppercase tracking-[0.3em] opacity-70 font-semibold block mb-3">
          dahab sanctuary &bull; gatherings & ritual spaces
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-light leading-tight lowercase max-w-4xl mx-auto">
          where raw sinai dust meets the <span className="italic text-amber-500">global creative wanderer</span>.
        </h1>
        <p className="mt-6 text-sm max-w-xl mx-auto tracking-wide leading-relaxed opacity-80">
          We don't build schedules; we hold space. Every week, the natural palm canopy provides refuge for open-air cinema showcases, ancestral string rhythms, and slow community gathering.
        </p>
      </header>

      {/* ==========================================
          SECTION 1: THE CALENDAR MATRIX
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between border-b pb-4 border-current/10">
          <div>
            <h2 className="font-serif text-3xl lowercase">the weekly rotation</h2>
            <p className="text-xs tracking-widest uppercase opacity-60 mt-1">recurring seasonal gatherings</p>
          </div>
          <div className="text-xs tracking-widest opacity-50 uppercase mt-2 md:mt-0">
            [ scroll down to book your floor pillow ]
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Navigation: Days */}
          <div className="lg:col-span-5 space-y-3">
            {WEEKLY_EVENTS.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedEvent(item.id)}
                className={`w-full text-left p-6 transition-all duration-300 transform rounded-[1.8rem_0.8rem_2.5rem_1.2rem] border ${
                  selectedEvent === item.id
                    ? isNight 
                      ? 'bg-[#F4EBE1] text-[#0A1118] border-transparent -translate-y-1 shadow-xl' 
                      : 'bg-[#2D4A3E] text-[#F4EBE1] border-transparent -translate-y-1 shadow-xl'
                    : isNight
                      ? 'bg-[#0A1118] text-[#F4EBE1]/80 border-white/10 hover:border-amber-500/40'
                      : 'bg-[#F4EBE1] text-[#2D4A3E]/80 border-[#2D4A3E]/10 hover:border-[#2D4A3E]'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-xs uppercase tracking-widest font-mono font-semibold opacity-60">{item.day} &bull; {item.time}</span>
                  <span className={`text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-widest border ${
                    selectedEvent === item.id ? 'border-current/30' : 'border-current/20'
                  }`}>{item.tag}</span>
                </div>
                <h3 className="font-serif text-xl mt-2 tracking-wide lowercase font-medium">
                  {item.title.split(':')[0]}
                  <span className="block text-sm font-sans mt-0.5 italic opacity-80">{item.title.split(':')[1]}</span>
                </h3>
              </button>
            ))}
          </div>

          {/* Right Presentation Panel: Event Details Dynamically Rendered */}
          <div className="lg:col-span-7">
            {(() => {
              const active = WEEKLY_EVENTS.find(e => e.id === selectedEvent);
              return (
                <div className={`p-8 md:p-12 h-full flex flex-col justify-between rounded-[2.5rem_1.5rem_4.5rem_2rem] border transition-all duration-500 ${
                  isNight 
                    ? 'bg-gradient-to-br from-[#121B24] to-[#0A1118] border-white/5 text-[#F4EBE1]' 
                    : 'bg-gradient-to-br from-[#EAE1D7] to-[#F4EBE1] border-[#2D4A3E]/10 text-[#2D4A3E]'
                } shadow-2xl`}>
                  <div>
                    <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-60 mb-4">
                      <span>⚡ active selection</span>
                      <span>&bull;</span>
                      <span>dahab time {active.time}</span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl lowercase mb-3 leading-tight font-light text-amber-500">
                      {active.title}
                    </h3>
                    <p className="text-xs tracking-widest uppercase font-semibold mb-6 opacity-80">
                      orchestrated by: <span className="underline decoration-amber-500/50">{active.host}</span>
                    </p>
                    <p className="text-sm tracking-wide leading-relaxed max-w-xl opacity-90 font-light">
                      {active.desc}
                    </p>
                  </div>

                  <div className="mt-12 pt-6 border-t border-current/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="text-xs tracking-wide">
                      <span className="block font-bold uppercase tracking-widest opacity-60">cultural framework</span>
                      No modern ticketing barriers. Contribution based entry or preset food voucher minimum.
                    </div>
                    <a 
                      href="#reservation-anchor" 
                      className={`px-6 py-3 rounded-[1rem_0.5rem_1.5rem_0.8rem] text-xs font-bold uppercase tracking-widest transition-all ${
                        isNight 
                          ? 'bg-amber-500 text-black hover:bg-amber-400' 
                          : 'bg-[#2D4A3E] text-white hover:bg-[#1C3028]'
                      }`}
                    >
                      secure entry spot
                    </a>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 2: CINEMA WADI TICKET STUB
          ========================================== */}
      <section className="max-w-5xl mx-auto px-6 py-16 relative z-10">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl lowercase">cinema wadi access coupon</h2>
          <p className="text-xs tracking-widest uppercase opacity-60 mt-1">analog format aesthetic protection</p>
        </div>

        {/* Outer Ticket Shell adhering to Raw Contour Principle */}
        <div className="relative group select-none">
          {/* Asymmetric Ticket Body with cut-out notched side styling */}
          <div className={`w-full grid grid-cols-1 md:grid-cols-4 rounded-[3rem_1.5rem_3.5rem_1.5rem] border overflow-hidden transition-all duration-500 shadow-xl ${
            isNight ? 'bg-[#111A24] border-white/10 text-white' : 'bg-[#EFE5DC] border-[#2D4A3E]/15 text-[#2D4A3E]'
          }`}>
            
            {/* Main Ticket Part */}
            <div className="md:col-span-3 p-8 md:p-10 relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-dashed border-current/20">
              {/* Top Details */}
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="text-[10px] tracking-[0.25em] uppercase font-mono px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-500 border border-amber-500/20">
                      pass entry ticket
                    </span>
                    <h3 className="font-serif text-4xl mt-3 lowercase font-normal tracking-wide">cinema wadi pop-up</h3>
                  </div>
                  <div className="text-right font-mono text-xs opacity-50">
                    <div>SERIES // NW-2026</div>
                    <div>DAHAB, EG</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest opacity-50">mon screenings</span>
                    <span className="text-sm font-serif lowercase block mt-0.5">egyptian classic retro</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest opacity-50">wed screenings</span>
                    <span className="text-sm font-serif lowercase block mt-0.5">global alternative indie</span>
                  </div>
                </div>
              </div>

              {/* Bottom Instructions */}
              <div className="mt-8 pt-4 border-t border-current/5 flex items-center gap-4 text-xs font-mono opacity-70">
                <div>• gates 19:00</div>
                <div>• warm loose tea included</div>
                <div>• pillow space provided</div>
              </div>

              {/* Left Circular Analog Hole Punch Mock */}
              <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-inherit border-r border-current/20 transform -translate-y-1/2 hidden md:block" />
            </div>

            {/* Ticket Stub Stub Part */}
            <div className={`p-8 flex flex-col justify-between items-center text-center relative ${
              isNight ? 'bg-[#15202C]' : 'bg-[#E7DCD2]'
            }`}>
              <div className="w-full">
                <span className="text-[10px] uppercase tracking-widest opacity-50 block font-mono">stub section</span>
                <div className="my-3 font-serif text-2xl tracking-tight">admit 01</div>
                <div className="border border-current/20 rounded-md p-2 inline-block mx-auto">
                  {/* Faux Minimal Barcode Design */}
                  <div className="flex gap-0.5 h-10 items-center justify-center">
                    {[1, 3, 1, 4, 2, 1, 3, 2, 4, 1, 2, 1, 3, 1].map((w, i) => (
                      <div key={i} className={`bg-current h-full`} style={{ width: `${w}px` }} />
                    ))}
                  </div>
                  <span className="text-[8px] font-mono tracking-widest block mt-1 opacity-60">NAKHYL-WADI-99</span>
                </div>
              </div>

              <a
                href="#reservation-anchor"
                className="mt-6 w-full py-2.5 text-center text-[11px] font-bold uppercase tracking-widest rounded-lg bg-current text-inherit transition-all invert hover:opacity-90"
              >
                claim stub
              </a>

              {/* Right Circular Analog Hole Punch Mock */}
              <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-inherit border-l border-current/20 transform -translate-y-1/2 hidden md:block" />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 3: INTERACTIVE FLOOR PLAN RUG-MAP
          ========================================== */}
      <section id="reservation-anchor" className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-serif text-3xl lowercase">sanctuary layout mapping</h2>
          <p className="text-xs tracking-widest uppercase opacity-60 mt-1">tap a textured segment zone to mark your floor pillow territory</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Schematic Interactive Map Canvas */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className={`p-8 rounded-[4rem_1.5rem_5rem_2rem] border relative overflow-hidden flex flex-col items-center justify-center min-h-[400px] ${
              isNight ? 'bg-[#0E1720] border-white/10' : 'bg-[#ECE2D8] border-[#2D4A3E]/15'
            }`}>
              
              {/* The Oasis Structural Layout Layout Simulation */}
              <div className="w-full max-w-md grid grid-cols-2 gap-4 relative z-10 font-mono">
                
                {/* Center campfire element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center">
                  <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500 flex items-center justify-center animate-ping absolute top-0 left-0" />
                  <div className="w-16 h-16 rounded-full bg-[#0A1118] border-2 border-amber-500 flex flex-col items-center justify-center shadow-xl relative z-30">
                    <span className="text-lg">🔥</span>
                    <span className="text-[8px] uppercase tracking-tighter text-amber-500">hearth</span>
                  </div>
                </div>

                {/* Zone Cards acting as spatial map components */}
                {SEATING_ZONES.map((zone) => {
                  const isSelected = selectedZone === zone.id;
                  const isBooked = zone.capacity === 'Fully Booked';
                  
                  return (
                    <button
                      key={zone.id}
                      disabled={isBooked}
                      onClick={() => setSelectedZone(zone.id)}
                      className={`p-5 text-left h-36 relative transition-all rounded-[1.5rem_0.8rem_2rem_1rem] border ${
                        isBooked ? 'opacity-30 cursor-not-allowed border-dashed' : 'cursor-pointer'
                      } ${
                        isSelected 
                          ? 'bg-amber-500 border-transparent text-black scale-[1.02] shadow-lg z-10' 
                          : isNight 
                            ? 'bg-[#15202C] border-white/5 text-white hover:border-white/30' 
                            : 'bg-[#F4EBE1] border-[#2D4A3E]/10 text-[#2D4A3E] hover:border-[#2D4A3E]'
                      }`}
                    >
                      <span className="text-[10px] tracking-widest block opacity-60 uppercase">
                        {zone.id.replace('zone-', '')}
                      </span>
                      <h4 className="font-serif text-lg lowercase mt-1 leading-tight font-bold">
                        {zone.name.split('(')[0]}
                      </h4>
                      <span className="absolute bottom-4 left-5 text-[10px] uppercase font-mono tracking-wider opacity-80">
                        {zone.capacity}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Aesthetic Landscape Labels */}
              <div className="absolute bottom-4 right-8 text-[10px] font-mono tracking-[0.3em] uppercase opacity-30">
                [ projection wadi wall axis ]
              </div>
              <div className="absolute top-4 left-8 text-[10px] font-mono tracking-[0.3em] uppercase opacity-30">
                [ main palm canopy entry ]
              </div>
            </div>
          </div>

          {/* Connected Secure Custom Booking Console */}
          <div className="lg:col-span-5">
            <form 
              onSubmit={handleBookingSubmit}
              className={`p-8 md:p-10 h-full flex flex-col justify-between rounded-[2rem_3rem_1.5rem_4.4rem] border ${
                isNight ? 'bg-[#121B24] border-white/10' : 'bg-[#EAE1D7] border-[#2D4A3E]/20'
              }`}
            >
              <div>
                <h3 className="font-serif text-2xl lowercase mb-1">lock gathering perimeter access</h3>
                <p className="text-xs tracking-wide opacity-70 mb-6">direct operation dispatch connection</p>
                
                {/* Chosen Summary display block */}
                <div className="mb-6 p-4 rounded-xl bg-current/5 space-y-1 text-xs">
                  <div><strong className="uppercase opacity-60 font-mono tracking-wider">ritual selected:</strong> {WEEKLY_EVENTS.find(e => e.id === selectedEvent)?.title}</div>
                  <div><strong className="uppercase opacity-60 font-mono tracking-wider">allocated rug sector:</strong> {SEATING_ZONES.find(z => z.id === selectedZone)?.name}</div>
                </div>

                {/* Input 1: Ticket pillow count */}
                <div className="mb-4">
                  <label className="block text-[10px] uppercase tracking-widest mb-1.5 font-bold opacity-75">
                    number of floor cushions / attendees
                  </label>
                  <select
                    value={ticketQuantity}
                    onChange={(e) => setTicketQuantity(Number(e.target.value))}
                    className="w-full bg-transparent border border-current/20 p-3 rounded-lg text-xs font-mono tracking-widest focus:outline-none focus:border-amber-500"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num} className={isNight ? 'bg-[#0A1118]' : 'bg-[#F4EBE1]'}>
                        {num} pillow{num > 1 ? 's' : ''} requested
                      </option>
                    ))}
                  </select>
                </div>

                {/* Input 2: Dietary custom field hook */}
                <div className="mb-6">
                  <label className="block text-[10px] uppercase tracking-widest mb-1.5 font-bold opacity-75">
                    special accommodation notice (optional)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., preference for extra sage tea / wheelchair accessibility needs"
                    className="w-full bg-transparent border border-current/20 p-3 rounded-lg text-xs tracking-wide focus:outline-none focus:border-amber-500 placeholder:opacity-40"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-[1rem_2rem_0.8rem_1.5rem] bg-amber-500 text-black text-xs font-bold uppercase tracking-widest transition-transform hover:scale-[1.01] shadow-md flex items-center justify-center gap-2"
                >
                  <span>💬</span> dispatch request to whatsapp lines
                </button>
                {bookingStatus && (
                  <p className="text-center font-mono text-[10px] text-amber-500 mt-2 tracking-widest animate-pulse">
                    {bookingStatus}
                  </p>
                )}
                <span className="block text-center text-[10px] opacity-40 font-mono tracking-wide mt-3">
                  no instant online payment tracking required &bull; pay at native counter
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 4: THE THURSDAY LIVE JAM FRAME
          ========================================== */}
      <section className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Container with irregular hand-molded sandstone walls border framing style */}
        <div className={`relative rounded-[4.5rem_2rem_5.5rem_2.5rem] overflow-hidden border p-8 md:p-16 min-h-[500px] flex items-end shadow-2xl transition-all duration-500 ${
          isNight ? 'border-white/10' : 'border-[#2D4A3E]/20'
        }`}>
          
          {/* Embedded Background Cinematic Video Frame Simulation (Raw textured cover overlay) */}
          <div className="absolute inset-0 z-0 bg-cover bg-center mix-blend-cover opacity-35 filter brightness-50 contrast-125" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1200')" }} />
          {/* Subtle colored shadow scrim overlay */}
          <div className={`absolute inset-0 z-0 bg-gradient-to-t via-transparent ${
            isNight ? 'from-[#0A1118]' : 'from-[#F4EBE1]'
          } to-transparent`} />

          <div className="relative z-10 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500 text-black text-[9px] font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-red-600 animate-ping" />
              thursday night cultural epicenter
            </div>
            <h3 className="font-serif text-4xl md:text-5xl lowercase leading-tight mb-4 font-normal">
              the bonfire jam sessions: <span className="italic block mt-1">unfiltered global acoustics.</span>
            </h3>
            <p className="text-sm tracking-wide leading-relaxed opacity-90 font-light mb-6">
              When darkness falls over the Dahab peaks on Thursdays, professional Oud players, traditional Sinai Bedouin vocalists, and touring nomads sit cross-legged in a singular campfire ring. No stages. No separating bars. True acoustic unity.
            </p>

            {/* Dynamic Interactive Soundscape Controller inside frame */}
            <div className={`p-4 rounded-[1.5rem_0.8rem_2rem_1rem] border inline-flex items-center gap-4 ${
              isNight ? 'bg-[#0A1118]/90 border-white/10' : 'bg-[#F4EBE1]/90 border-[#2D4A3E]/20'
            }`}>
              <button
                onClick={() => setIsAudioPlaying(!isAudioPlaying)}
                className="w-10 h-10 rounded-full bg-amber-500 text-black flex items-center justify-center text-xs font-bold hover:scale-105 transition-transform"
              >
                {isAudioPlaying ? '⏸' : '▶'}
              </button>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest block opacity-60">ambient soundscape layer</span>
                <span className="text-xs font-serif lowercase tracking-wide block font-semibold">
                  {isAudioPlaying ? 'now streaming: live campfire crackle & oud line' : 'listen to the oasis right now'}
                </span>
              </div>
              
              {/* Simple Animated Visual Waveform Display */}
              {isAudioPlaying && (
                <div className="flex items-end gap-0.5 h-4 px-2">
                  {[6, 12, 8, 14, 4, 10, 7].map((h, i) => (
                    <div 
                      key={i} 
                      className="w-0.5 bg-amber-500 rounded-full animate-bounce" 
                      style={{ height: `${h}px`, animationDelay: `${i * 0.1}s`, animationDuration: '0.6s' }} 
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          GLOBAL POP-UP OVERLAY: VIRTUAL CAMPFIRE
          ========================================== */}
      {showCampfireOverlay && (
        <div className="fixed inset-0 z-50 bg-[#0A1118]/95 backdrop-blur-md flex items-center justify-center p-4 transition-all animate-fadeIn">
          <div className="bg-[#F4EBE1] text-[#2D4A3E] p-8 md:p-12 max-w-2xl rounded-[3rem_1.5rem_4rem_2rem] border-2 border-amber-500 shadow-2xl relative">
            <button
              onClick={() => setShowCampfireOverlay(false)}
              className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest hover:text-amber-600 font-bold"
            >
              [ close courtyard ]
            </button>
            
            <span className="text-amber-600 text-3xl block mb-2">🔥</span>
            <span className="text-[10px] uppercase tracking-widest font-mono opacity-60 block mb-2">sinai code of hospitality</span>
            <h4 className="font-serif text-3xl lowercase mb-4 font-normal">the sacred ritual of habak mint tea</h4>
            
            <div className="space-y-4 text-sm tracking-wide leading-relaxed font-light text-[#2D4A3E]/90">
              <p>
                In the Sinai desert, a fire is never lit solely for warmth or cooking—it is an open physical invitation to connect. When you approach our flame, you are immediately offered a glass of hand-harvested wild mountain Habak mint or local sage tea.
              </p>
              <p>
                This space operates outside the frenetic pace of commercial tourism. We invite digital creators and global travelers to lower their digital walls, sit close to the soil, and participate in authentic cross-cultural storytelling.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#2D4A3E]/10 flex justify-between items-center text-xs italic font-serif">
              <span>"strangers are simply friends we haven't shared tea with yet."</span>
              <button
                onClick={() => setShowCampfireOverlay(false)}
                className="px-4 py-2 bg-[#2D4A3E] text-[#F4EBE1] font-sans font-bold uppercase tracking-widest text-[10px] rounded-md hover:bg-amber-600 hover:text-white transition-colors"
              >
                marhaba
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- MINI TRANQUIL AMBIENT FOOTER --- */}
      <footer className="text-center py-8 border-t border-current/10 opacity-60 text-xs font-mono tracking-widest">
        &copy; 2026 NAKHYL ZONE DAHAB &bull; LOCATED IN THE SECRET PALM COURTYARD CENTER &bull; EGYPT TIMELINE STAMP GMT+2
      </footer>
    </div>
  );
}