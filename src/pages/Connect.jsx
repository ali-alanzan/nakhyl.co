import React, { useState } from 'react';

export default function NomadBookingEngine() {
  // Global Theme State: true = Night (🌙 Follow the Sparks), false = Day (☀️ Chase the Sun)
  const [isNight, setIsNight] = useState(true);

  // Form State
  const [formData, setFormData] = useState({
    purpose: 'Coworking Day', // Default active pill
    fullName: '',
    emailOrWhatsapp: '',
    arrivalDate: '',
    guestCount: '1 Nomad',
    isPrivateRetreat: false,
    retreatDetails: '',
    specialVibeNotes: ''
  });

  // State for Virtual Campfire Overlay
  const [showCampfire, setShowCampfire] = useState(false);

  // State for Ambient Soundscape
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Purpose Selection Options
  const connectionPurposes = [
    { id: 'Coworking Day', label: 'Coworking / Nomad Day' },
    { id: 'Attend Cinema', label: 'Attend Cinema Night' },
    { id: 'Drop in for Dinner', label: 'Drop in for Dinner' },
    { id: 'Host Private Event', label: 'Host Private Cultural Event' }
  ];

  const handlePurposeChange = (purposeId) => {
    setFormData(prev => ({
      ...prev,
      purpose: purposeId,
      isPrivateRetreat: purposeId === 'Host Private Event' ? true : prev.isPrivateRetreat
    }));
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Section 4: WhatsApp Formatting & Dispatch Wire
  const handleDispatchWire = (e) => {
    e.preventDefault();
    
    const message = `*🌴 Nakhyl Zone Dahab - Booking & Wire Dispatch * \n\n` +
                    `• *Intent:* ${formData.purpose}\n` +
                    `• *Nomad Name:* ${formData.fullName || 'Not specified'}\n` +
                    `• *Secure Channel:* ${formData.emailOrWhatsapp || 'Not specified'}\n` +
                    `• *Arrival Coordinates:* ${formData.arrivalDate || 'Not specified'}\n` +
                    `• *Gathering Size:* ${formData.guestCount}\n` +
                    `• *Private Retreat Intent:* ${formData.isPrivateRetreat ? 'Yes' : 'No'}\n` +
                    (formData.isPrivateRetreat ? `• *Retreat Scope:* ${formData.retreatDetails}\n` : '') +
                    `• *Aura/Vibe Notes:* ${formData.specialVibeNotes || 'None'}`;
    
    const encodedMessage = encodeURIComponent(message);
    // Real operational WhatsApp API window hook
    window.open(`https://api.whatsapp.com/send?phone=201000000000&text=${encodedMessage}`, '_blank');
  };

  return (
    <div 
      className={`min-h-screen w-full font-sans transition-colors duration-1000 ${
        isNight ? 'bg-[#0A1118] text-[#F4EBE1]' : 'bg-[#F4EBE1] text-[#2D4A3E]'
      }`}
      style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
    >
      {/* GLOBAL BACKGROUND SYSTEM STYLES (FONTS SIMULATED) */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400&display=swap');
        .serif-editorial { font-family: 'Cormorant Garamond', serif; }
        .monospace-input { font-family: 'JetBrains Mono', monospace; }
      `}</style>

   
      {/* HERO / INTRO OVERVIEW STATEMENT */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-8 text-center">
        <span className="text-[11px] uppercase tracking-[0.4em] block mb-3 opacity-70">
          {isNight ? '🌙 follow the sparks' : '☀️ chase the sun'}
        </span>
        <h1 className="serif-editorial text-4xl md:text-6xl font-light leading-tight lowercase mb-6">
          escape the noise. <br />
          <span className="italic">connect with the rhythm of the oasis.</span>
        </h1>
        <p className="max-w-xl mx-auto text-sm tracking-wide opacity-80 font-light leading-relaxed">
          Tucked safely inside Dahab's stone streets lies a physical shelter for digital creators, 
          storytellers, and slow-travelers. Secure your space around our fire pit or under the shade of our palms.
        </p>
      </section>

      {/* MAIN LAYOUT WRAPPER FOR SECTIONS 1, 2 & 3 */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COMPARTMENT: BOOKING LOGIC & Retrears (8 COLS) */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* SECTION 1: MONOSPACE CONNECTION FORM */}
          <section 
            className={`p-6 md:p-10 transition-all duration-700 shadow-xl border ${
              isNight 
                ? 'bg-[#0E1822] border-gray-800 rounded-[2.5rem_1.2rem_4rem_2rem]' 
                : 'bg-[#FCF9F5] border-[rgba(45,74,62,0.1)] rounded-[3rem_1.5rem_2.5rem_2rem]'
            }`}
          >
            <div className="flex items-center space-x-3 mb-6 border-b pb-4"
                 style={{ borderColor: isNight ? 'rgba(244,235,225,0.08)' : 'rgba(45,74,62,0.08)' }}>
              <span className="monospace-input text-xs uppercase tracking-widest text-amber-600 font-bold">[01 // connection engine]</span>
            </div>

            <form onSubmit={handleDispatchWire} className="space-y-8">
              
              {/* Interactive Pill Badges Layer instead of generic select items */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] mb-4 opacity-70 font-semibold">
                  Select your current ritual focus:
                </label>
                <div className="flex flex-wrap gap-2">
                  {connectionPurposes.map((pill) => {
                    const isActive = formData.purpose === pill.id;
                    return (
                      <button
                        key={pill.id}
                        type="button"
                        onClick={() => handlePurposeChange(pill.id)}
                        className={`px-4 py-2.5 rounded-[1rem_0.5rem_1.2rem_0.6rem] text-xs tracking-wider transition-all duration-300 border font-medium ${
                          isActive
                            ? isNight
                              ? 'bg-[#D97706] text-[#0A1118] border-[#D97706] scale-102 shadow-md shadow-amber-900/20'
                              : 'bg-[#2D4A3E] text-[#F4EBE1] border-[#2D4A3E] scale-102 shadow-md shadow-emerald-900/10'
                            : isNight
                              ? 'bg-[#13202C] text-[#F4EBE1]/60 border-gray-800 hover:text-white hover:border-gray-600'
                              : 'bg-[#F4EBE1] text-[#2D4A3E]/70 border-stone-300 hover:text-[#2D4A3E] hover:border-stone-400'
                        }`}
                      >
                        {isActive && <span className="mr-1.5">✓</span>}
                        {pill.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Conversational Typewriter Monospace Fields */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[11px] uppercase tracking-widest opacity-70">Nomad Identifier (Full Name)</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="e.g., amara lin"
                      required
                      className="w-full monospace-input text-sm bg-transparent border-b py-2 focus:outline-none transition-all"
                      style={{ 
                        borderColor: isNight ? 'rgba(244,235,225,0.2)' : 'rgba(45,74,62,0.2)',
                        color: isNight ? '#F4EBE1' : '#2D4A3E'
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] uppercase tracking-widest opacity-70">Secure Contact Channel (WhatsApp or Email)</label>
                    <input 
                      type="text" 
                      name="emailOrWhatsapp"
                      value={formData.emailOrWhatsapp}
                      onChange={handleInputChange}
                      placeholder="e.g., +447123456789"
                      required
                      className="w-full monospace-input text-sm bg-transparent border-b py-2 focus:outline-none transition-all"
                      style={{ 
                        borderColor: isNight ? 'rgba(244,235,225,0.2)' : 'rgba(45,74,62,0.2)'
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-[11px] uppercase tracking-widest opacity-70">Arrival Coordinate (Date)</label>
                    <input 
                      type="date" 
                      name="arrivalDate"
                      value={formData.arrivalDate}
                      onChange={handleInputChange}
                      required
                      className="w-full monospace-input text-sm bg-transparent border-b py-2 focus:outline-none transition-all opacity-80"
                      style={{ 
                        borderColor: isNight ? 'rgba(244,235,225,0.2)' : 'rgba(45,74,62,0.2)',
                        colorScheme: isNight ? 'dark' : 'light'
                      }}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-[11px] uppercase tracking-widest opacity-70">Gathering Size (People Count)</label>
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleInputChange}
                      className="w-full monospace-input text-sm bg-transparent border-b py-2 focus:outline-none transition-all"
                      style={{ 
                        borderColor: isNight ? 'rgba(244,235,225,0.2)' : 'rgba(45,74,62,0.2)'
                      }}
                    >
                      <option value="1 Nomad" className={isNight ? 'bg-[#0A1118]' : 'bg-[#F4EBE1]'}>1 Nomad / Solivagant</option>
                      <option value="2 Gathering" className={isNight ? 'bg-[#0A1118]' : 'bg-[#F4EBE1]'}>2 Partners in Space</option>
                      <option value="3-5 Creative Crew" className={isNight ? 'bg-[#0A1118]' : 'bg-[#F4EBE1]'}>3-5 Small Creative Crew</option>
                      <option value="6+ Tribe Network" className={isNight ? 'bg-[#0A1118]' : 'bg-[#F4EBE1]'}>6+ Tribe Network (Retreat Core)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-[11px] uppercase tracking-widest opacity-70">Aura / Special Vibe Notes (Dietary, Seating preference, or Music setups)</label>
                  <textarea 
                    name="specialVibeNotes"
                    value={formData.specialVibeNotes}
                    onChange={handleInputChange}
                    placeholder="Tell our local crew what your mind requires... open campfire seating, low rugs, dark cinema corner..."
                    rows="2"
                    className="w-full text-xs tracking-wide bg-transparent border-b py-2 focus:outline-none transition-all"
                    style={{ 
                      borderColor: isNight ? 'rgba(244,235,225,0.2)' : 'rgba(45,74,62,0.2)'
                    }}
                  />
                </div>
              </div>

              {/* SECTION 4: INSTANT WIRE DISPATCH SUBMIT BUTTON */}
              <div className="pt-4">
                <button
                  type="submit"
                  className={`w-full group font-medium text-xs tracking-[0.25em] uppercase py-4 px-6 transition-all duration-500 flex items-center justify-center space-x-3 rounded-[1.5rem_0.8rem_2rem_1rem] ${
                    isNight 
                      ? 'bg-[#D97706] text-[#0A1118] hover:bg-amber-500 shadow-lg shadow-amber-900/30' 
                      : 'bg-[#2D4A3E] text-[#F4EBE1] hover:bg-[#3D6454] shadow-lg shadow-emerald-950/20'
                  }`}
                >
                  <span>🚀 dispatch secure wire via whatsapp</span>
                  <span className="transform group-hover:translate-x-2 transition-transform duration-300">➔</span>
                </button>
                <div className="text-center mt-3">
                  <span className="text-[10px] opacity-50 tracking-widest uppercase">
                    🔒 encrypted client side. direct line to crew desk.
                  </span>
                </div>
              </div>
            </form>
          </section>

          {/* SECTION 3: THE PRIVATE RETREAT INTAKE */}
          <section 
            className={`p-6 md:p-10 transition-all duration-700 border relative overflow-hidden ${
              isNight 
                ? 'bg-gradient-to-br from-[#0F1C28] to-[#0A1118] border-amber-900/40 rounded-[1.5rem_3rem_1.2rem_4rem]' 
                : 'bg-gradient-to-br from-[#FAF5EF] to-[#F4EBE1] border-[rgba(45,74,62,0.15)] rounded-[2rem_2.5rem_4rem_1.5rem]'
            }`}
          >
            {/* Soft Ambient Spark Blur Ring background */}
            <div className={`absolute -right-16 -bottom-16 w-44 h-44 rounded-full filter blur-3xl opacity-20 pointer-events-none transition-colors duration-1000 ${
              isNight ? 'bg-amber-500' : 'bg-emerald-600'
            }`} />

            <div className="flex items-center space-x-2 mb-4">
              <span className="monospace-input text-xs uppercase tracking-widest text-amber-600 font-bold">[03 // tailored sanctuary workshops]</span>
            </div>

            <h3 className="serif-editorial text-2xl lowercase mb-4">
              corporate escape, brand incubation & private tribal retreats
            </h3>
            
            <p className="text-xs font-light tracking-wide leading-relaxed mb-6 opacity-80">
              Need to block out our acoustic soundscape, natural palm groves, and fireside circles exclusively for your tech squad, wellness tribe, or creative agency design sprint? We customize the spaces, deploy private Bedouin slow-cooked dining matrices, and establish a quiet enclave.
            </p>

            <div className="space-y-4 bg-opacity-30 p-4 rounded-xl" style={{ backgroundColor: isNight ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.4)' }}>
              <label className="flex items-start space-x-3 cursor-pointer select-none">
                <input 
                  type="checkbox"
                  name="isPrivateRetreat"
                  checked={formData.isPrivateRetreat}
                  onChange={handleInputChange}
                  className="mt-1 accent-amber-600 rounded"
                />
                <span className="text-xs tracking-wide font-medium">
                  Flag this wire dispatch for exclusive venue buy-out / enterprise exploration
                </span>
              </label>

              {formData.isPrivateRetreat && (
                <div className="pt-2 animate-fadeIn">
                  <label className="block text-[10px] uppercase tracking-widest mb-1 opacity-70">Retreat Parameters & Scale Required:</label>
                  <textarea
                    name="retreatDetails"
                    value={formData.retreatDetails}
                    onChange={handleInputChange}
                    placeholder="Provide estimated count of global nomads, dynamic duration (days), and audio/video requirements for 'Cinema Wadi' projection uses..."
                    rows="3"
                    className="w-full text-xs tracking-wide bg-transparent border rounded p-2 focus:outline-none"
                    style={{ borderColor: isNight ? 'rgba(244,235,225,0.15)' : 'rgba(45,74,62,0.15)' }}
                  />
                </div>
              )}
            </div>
          </section>

        </div>

        {/* RIGHT COMPARTMENT: COORDINATES MAP & SOCIALS (5 COLS) */}
        <div className="lg:col-span-5 space-y-8">
          
          {/* SECTION 2: DESATURATED SPATIAL COORDINATES MAP */}
          <section 
            className={`p-6 border transition-all duration-700 shadow-md ${
              isNight 
                ? 'bg-[#0E1822] border-gray-800 rounded-[2rem_3rem_1.5rem_3.5rem]' 
                : 'bg-[#FCF9F5] border-[rgba(45,74,62,0.1)] rounded-[3rem_2rem_3.5rem_1.2rem]'
            }`}
          >
            <div className="flex items-center justify-between mb-4 pb-2 border-b"
                 style={{ borderColor: isNight ? 'rgba(244,235,225,0.08)' : 'rgba(45,74,62,0.08)' }}>
              <span className="monospace-input text-xs uppercase tracking-widest text-amber-600 font-bold">[02 // geographical vector]</span>
              <span className="text-[10px] tracking-widest uppercase opacity-60">28.5105° N, 34.5126° E</span>
            </div>

            <p className="text-xs font-light tracking-wide leading-relaxed mb-4 opacity-80">
              We reject high-traffic neon corridors. Nakhyl Zone is quietly nestled right behind the local heart grids of Dahab City—accessible on foot, insulated perfectly by authentic hand-molded clay structures.
            </p>

            {/* Simulated Custom Desaturated High-End Structural Map Element */}
            <div 
              className={`w-full h-64 relative overflow-hidden flex flex-col justify-between p-4 border transition-colors duration-700 shadow-inner rounded-[1.8rem_1rem_2.5rem_1.5rem] ${
                isNight ? 'bg-[#121A23] border-gray-800' : 'bg-[#EFE7DD] border-stone-300'
              }`}
            >
              {/* Absctract Stylized Topographic Vectors (Simulated via SVG Gridlines) */}
              <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke={isNight ? '#F4EBE1' : '#2D4A3E'} strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
                <circle cx="150" cy="120" r="70" fill="none" stroke={isNight ? '#F4EBE1' : '#2D4A3E'} strokeWidth="1" strokeDasharray="4"/>
              </svg>

              {/* Map Accent Markers */}
              <div className="relative z-10 flex justify-between items-start">
                <span className="text-[9px] px-2 py-0.5 rounded backdrop-blur-md uppercase bg-black/20 text-[#F4EBE1]/70">Sinai Coastal Route</span>
                <span className="text-[9px] px-2 py-0.5 rounded backdrop-blur-md uppercase bg-black/20 text-[#F4EBE1]/70">Red Sea Shoreline</span>
              </div>

              {/* The Pulse Hub Indicator (Nakhyl Zone Anchor) */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full opacity-40" style={{ backgroundColor: isNight ? '#D97706' : '#2D4A3E' }}></span>
                  <div className="relative rounded-full p-3 shadow-lg border text-xs"
                       style={{ 
                         backgroundColor: isNight ? '#0A1118' : '#F4EBE1', 
                         borderColor: isNight ? '#D97706' : '#2D4A3E'
                       }}>
                    🌴
                  </div>
                </div>
                <span className="text-[10px] tracking-widest font-bold uppercase mt-2 block backdrop-blur-sm px-2 py-0.5 rounded">
                  nakhyl sanctuary
                </span>
              </div>

              <div className="relative z-10 flex justify-between items-end pt-32">
                <span className="text-[9px] uppercase tracking-wide opacity-60">← Dahab Lighthouse (7 Mins walk)</span>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-[10px] font-bold uppercase underline tracking-wider hover:text-amber-500 transition-colors"
                >
                  open maps system ↗
                </a>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="p-3 border rounded-xl" style={{ borderColor: isNight ? 'rgba(244,235,225,0.06)' : 'rgba(45,74,62,0.06)' }}>
                <span className="block text-lg font-light">3 min</span>
                <span className="text-[9px] uppercase tracking-widest opacity-60">From Asalah Square</span>
              </div>
              <div className="p-3 border rounded-xl" style={{ borderColor: isNight ? 'rgba(244,235,225,0.06)' : 'rgba(45,74,62,0.06)' }}>
                <span className="block text-lg font-light">Fiber opt</span>
                <span className="text-[9px] uppercase tracking-widest opacity-60">Nomad Mesh Network</span>
              </div>
            </div>
          </section>

          {/* SOCIAL PROOF ACCENT ELEMENT */}
          <section className={`p-6 border ${isNight ? 'bg-[#0E1822]/50 border-gray-800' : 'bg-[#FCF9F5]/50 border-stone-200'} rounded-[2rem] text-center`}>
            <span className="text-[9px] tracking-[0.3em] uppercase block mb-3 opacity-60">🔴 Live Community Resonance Feed</span>
            <div className="grid grid-cols-3 gap-2">
              <div className="aspect-square bg-stone-600/20 rounded-lg flex items-center justify-center text-xs opacity-70 hover:opacity-100 transition-opacity">✨ rugs</div>
              <div className="aspect-square bg-stone-600/20 rounded-lg flex items-center justify-center text-xs opacity-70 hover:opacity-100 transition-opacity">🔥 jams</div>
              <div className="aspect-square bg-stone-600/20 rounded-lg flex items-center justify-center text-xs opacity-70 hover:opacity-100 transition-opacity">🎬 wadi</div>
            </div>
            <span className="text-[10px] opacity-50 block mt-2 tracking-wide font-mono">tag @nakhylzone to bind your stream</span>
          </section>

        </div>
      </main>

      {/* AMBIENT SOUNDSCAPE CONTROLLER FOOTER */}
      <footer 
        className="mt-20 border-t w-full transition-colors duration-500"
        style={{ 
          borderColor: isNight ? 'rgba(244, 235, 225, 0.08)' : 'rgba(45, 74, 62, 0.08)',
          backgroundColor: isNight ? '#070D13' : '#EFE7DD' 
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            {/* Audio Micro Interaction Animation Waveform toggle block */}
            <button 
              onClick={() => setIsAudioPlaying(!isAudioPlaying)}
              className="w-12 h-12 rounded-full flex items-center justify-center border transition-all hover:scale-105"
              style={{ 
                borderColor: isNight ? '#D97706' : '#2D4A3E',
                backgroundColor: isAudioPlaying ? (isNight ? '#D97706' : '#2D4A3E') : 'transparent'
              }}
            >
              {isAudioPlaying ? (
                <div className="flex space-x-1 items-center justify-center h-4">
                  <div className={`w-0.5 bg-current animate-bounce h-3`} style={{ animationDelay: '0.1s' }} />
                  <div className={`w-0.5 bg-current animate-bounce h-4`} style={{ animationDelay: '0.3s' }} />
                  <div className={`w-0.5 bg-current animate-bounce h-2`} style={{ animationDelay: '0.5s' }} />
                </div>
              ) : (
                <span className={isNight ? 'text-[#D97706]' : 'text-[#2D4A3E]'}>▶</span>
              )}
            </button>
            
            <div>
              <span className="text-xs font-semibold tracking-wider block uppercase">Listen to the Oasis right now</span>
              <span className="text-[11px] opacity-60 font-light block">
                {isAudioPlaying ? 'Playing: Wind through Palms, Campfire Crackles, Faint Oud Loop' : 'Soundscape offline • Click to teleport to Dahab'}
              </span>
            </div>
          </div>

          <div className="text-right flex flex-col items-center md:items-end space-y-1">
            <span className="text-[10px] tracking-widest opacity-50 uppercase">Telemetry Console Matrix</span>
            <span className="monospace-input text-[11px] tracking-tight">Dahab Time: {new Date().toLocaleTimeString('en-US', { timeZone: 'Africa/Cairo', hour: '2-digit', minute:'2-digit' })} (GMT+3)</span>
          </div>
        </div>
      </footer>

      {/* VIRTUAL CAMPFIRE EDITORIAL OVERLAY MODEL */}
      {showCampfire && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
          <div 
            className="max-w-2xl w-full p-8 md:p-12 relative border text-[#F4EBE1] bg-[#0A1118] rounded-[2.5rem_1.2rem_4rem_2rem]"
            style={{ borderColor: '#D97706' }}
          >
            <button 
              onClick={() => setShowCampfire(false)}
              className="absolute top-6 right-6 text-xl opacity-60 hover:opacity-100 transition-opacity"
            >
              ✕
            </button>

            <span className="text-[10px] tracking-[0.4em] uppercase text-amber-500 block mb-2">The Ritual of Sinai Bedouin Hospitality</span>
            <h2 className="serif-editorial text-3xl md:text-5xl lowercase mb-6 border-b border-amber-900/40 pb-4">
              brewing habak tea over glowing embers.
            </h2>

            <div className="space-y-4 text-xs tracking-wide font-light leading-relaxed opacity-90">
              <p>
                In the desert ecosystem, the campfire is not a decorative utility; it is the absolute spatial anchor of community life. When you cross our threshold into Nakhyl Zone, you leave behind corporate timelines.
              </p>
              <p>
                Every sunset, we light the fire pits using local wood remnants. Fresh mountain sage and organic Habak mint are layered carefully into handmade metal kettles, sitting directly on raw coals. It is a slow, community process intended to initiate deep, human conversations between nomads.
              </p>
              <p className="italic text-amber-400">
                "We do not build grids to capture time; we burn fires to release it."
              </p>
            </div>

            <button 
              onClick={() => { setShowCampfire(false); setIsAudioPlaying(true); }}
              className="mt-8 text-xs font-semibold tracking-widest uppercase py-3 px-6 bg-amber-600 text-[#0A1118] rounded-xl hover:bg-amber-500 transition-all duration-300"
            >
              Close Story & Activate Audio Soundscape
            </button>
          </div>
        </div>
      )}

    </div>
  );
}