import React, { useState } from 'react';
import { 
  Sun, 
  Moon, 
  Flame, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  Play, 
  Pause, 
  ArrowRight, 
  Filter,
  ArrowUpRight,
  Sparkles,
  Bookmark,
  Share2
} from 'lucide-react';

export default function SinaiJournal() {
  // --- STATE MANAGEMENT ---
  const [isNight, setIsNight] = useState(true); // Default to night for ambient campfire vibe
  const [activeCategory, setActiveCategory] = useState('All');
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const [isCampfireOpen, setIsCampfireOpen] = useState(false);
  const [isSoundscapePlaying, setIsSoundscapePlaying] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  // --- DESIGN SYSTEM THEME TOKENS ---
  const themeBg = isNight ? 'bg-[#0A1118]' : 'bg-[#F4EBE1]';
  const themeText = isNight ? 'text-[#F4EBE1]' : 'text-[#2D4A3E]';
  const themeTextMuted = isNight ? 'text-[#F4EBE1]/60' : 'text-[#2D4A3E]/70';
  const themeBorder = isNight ? 'border-[#F4EBE1]/15' : 'border-[#2D4A3E]/15';
  const themeCardBg = isNight ? 'bg-[#111C26]/80' : 'bg-[#EFE5DA]/60';
  const themeInputBg = isNight ? 'bg-[#0E1720]' : 'bg-[#EAE0D4]';

  // --- BRAND CONTENT DATA MATRIX ---
  const categories = ['All', 'Heritage', 'Nomad Life', 'Oasis Flavors'];

  const articles = [
    {
      id: 1,
      title: "the geometry of the rug: decoding sinai weaving codes",
      excerpt: "Every dynamic knot woven into a traditional Bedouin kilim isn't decorative luxury—it's an operational topographic map. Our deep dive reveals how tribes pass down geographic coordinates, water well mapping, and generational lineages directly through natural wool arrays.",
      category: "Heritage",
      date: "14 May 2026",
      readTime: "12 min read",
      author: "Farha Salem",
      role: "Master Weaver & Historian",
      size: "large", 
      icon: "🌾",
      visualLabel: "Dahab Archive Matrix 091"
    },
    {
      id: 2,
      title: "the ritual of habak: more than just mountain mint",
      excerpt: "Wild mountain mint picked under starlight, brewed slowly over glowing embers. An intimate exploration into the multi-layered social fabric of Sinai welcoming rituals and creative grounding.",
      category: "Oasis Flavors",
      date: "02 June 2026",
      readTime: "4 min read",
      author: "Ahmed Bedouin",
      role: "Oasis Botanist",
      size: "small",
      icon: "🫖",
      visualLabel: "Wadi El-Arbaen Harvest"
    },
    {
      id: 3,
      title: "asynchronous roots: why modern nomads anchor in dahab",
      excerpt: "Beyond the fiber-optic pipelines and sea-view shared structures lies a deeper energetic grid. Exploring the unique intersection of ancient slow-living systems with cutting-edge global technical pipelines.",
      category: "Nomad Life",
      date: "22 June 2026",
      readTime: "6 min read",
      author: "Elena Rostov",
      role: "Systems Architect",
      size: "small",
      icon: "💻",
      visualLabel: "Blue Hole Digital Nexus"
    },
    {
      id: 4,
      title: "inside the wadi matrix: the architecture of absolute stillness",
      excerpt: "How leaving the noisy beach strips and walking twenty minutes inland reveals a secret layout of silent palm groves, protecting your creative focus from cognitive overload.",
      category: "Nomad Life",
      date: "27 June 2026",
      readTime: "9 min read",
      author: "Zane Miller",
      role: "Anthropologist",
      size: "medium",
      icon: "🌴",
      visualLabel: "St. Catherine Buffer Zone"
    }
  ];

  const audioStories = [
    {
      id: "audio-1",
      title: "Oral Traditions: The Songs of Mount Catherine",
      narrator: "Sheikh Moussa",
      duration: "12:40",
      description: "A spatial field recording tracing historical epic poetry passed down through generational campfire gatherings beneath the granite peaks."
    },
    {
      id: "audio-2",
      title: "The Botanical Map: Identifying Desert Herbs",
      narrator: "Dr. Layla Mansour",
      duration: "08:15",
      description: "An audio walk exploring medicinal botany found natively between the red granite cracks and hidden canyon beds of South Sinai."
    }
  ];

  // --- ACTIONS ---
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  const toggleBookmark = (id) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(bId => bId !== id) : [...prev, id]
    );
  };

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(art => art.category === activeCategory);

  return (
    <div className={`min-h-screen ${themeBg} ${themeText} transition-colors duration-1000 font-sans relative selection:bg-[#D97706]/30 overflow-x-hidden pb-12`}>
      
   

      {/* --- SECTION 1: EDITORIAL FEATURED SPREAD --- */}
      <section className="max-w-7xl mx-auto px-6 pt-12 pb-16">
        <div className="flex items-center space-x-2 text-[10px] uppercase tracking-[0.4em] mb-6 text-[#D97706] font-bold">
          <Sparkles className="w-3 h-3" />
          <span>Primary Editorial Transmission</span>
        </div>
        
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border p-6 md:p-12 rounded-[3.5rem_1.5rem_4.5rem_2.5rem] ${themeCardBg} ${themeBorder} shadow-xl backdrop-blur-sm relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Featured Metadata & Text Copy */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8">
            <div>
              <div className="flex items-center space-x-4 text-[10px] tracking-widest uppercase opacity-70 mb-4">
                <span className="px-2.5 py-0.5 rounded-full border border-[#D97706]/40 text-[#D97706] font-bold">Featured scroll</span>
                <span>•</span>
                <span>{articles[0].readTime}</span>
              </div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] lowercase mb-6 tracking-tight font-light">
                {articles[0].title}
              </h1>
              <p className={`text-sm md:text-base leading-relaxed ${themeTextMuted} font-normal max-w-2xl`}>
                {articles[0].excerpt}
              </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-dashed border-[#2D4A3E]/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-[1rem_0.5rem_1.2rem_0.7rem] bg-[#D97706]/20 flex items-center justify-center font-serif text-sm border border-[#D97706]/30">FS</div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider">{articles[0].author}</div>
                  <div className="text-[10px] opacity-60 uppercase tracking-widest">{articles[0].role}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 self-end sm:self-auto">
                <button 
                  onClick={() => toggleBookmark(articles[0].id)}
                  className={`p-2 rounded-full border ${themeBorder} transition-colors`}
                >
                  <Bookmark className={`w-4 h-4 ${bookmarkedIds.includes(articles[0].id) ? 'fill-[#D97706] text-[#D97706]' : ''}`} />
                </button>
                <button className="flex items-center space-x-2 bg-[#2D4A3E] text-[#F4EBE1] dark:bg-[#F4EBE1] dark:text-[#0A1118] px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold group hover:bg-[#D97706] dark:hover:bg-[#D97706] dark:hover:text-white transition-all duration-300 shadow-md">
                  <span>Unroll Text</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Raw Contour Principle Media Shell */}
          <div className="lg:col-span-5 w-full h-[340px] lg:h-[460px] bg-[#2D4A3E]/10 rounded-[1.8rem_4rem_2.5rem_5rem] border border-dashed border-[#2D4A3E]/30 flex flex-col justify-center items-center p-8 relative overflow-hidden group shadow-inner">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D97706]/10 via-transparent to-transparent opacity-60" />
            <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-700 filter drop-shadow-md">
              {articles[0].icon}
            </div>
            <span className="font-serif italic text-lg tracking-wide text-center opacity-90">
              [{articles[0].visualLabel}]
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] opacity-40 mt-3 text-center max-w-xs">
              Tactile wool artifact scanning station. Micro-textures recorded live at the studio oasis.
            </span>
            
            <div className="absolute bottom-4 left-4 bg-[#0A1118]/85 text-[#F4EBE1] text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
              verified artifact • 2026
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 5: JOURNAL CATEGORY HUB (Sticky Typographic Text Filters) --- */}
      <section className={`w-full border-y ${themeBorder} backdrop-blur-md sticky top-0 z-40 transition-colors duration-500 shadow-sm bg-opacity-80`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2 text-xs uppercase tracking-widest font-bold opacity-80">
            <Filter className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Archive Topology:</span>
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 text-center ${
                  activeCategory === cat
                    ? 'bg-[#2D4A3E] text-[#F4EBE1] dark:bg-[#F4EBE1] dark:text-[#0A1118] scale-105'
                    : `hover:bg-[#2D4A3E]/10 dark:hover:bg-white/5 border ${themeBorder}`
                }`}
              >
                [{cat}]
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE KNOWLEDGE STREAM GRID (Asymmetrical Masonry Matrix) --- */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => {
            // Map structural sizes into the dynamic design system layout bounds
            let layoutSpan = "col-span-1";
            if (article.size === 'large') layoutSpan = "md:col-span-2 lg:col-span-2";
            if (article.size === 'medium') layoutSpan = "md:col-span-2 lg:col-span-1";

            return (
              <article 
                key={article.id}
                className={`${layoutSpan} border ${themeBorder} ${themeCardBg} rounded-[2.2rem_1.2rem_3.5rem_1.8rem] p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 backdrop-blur-sm group relative`}
              >
                <div>
                  {/* Organic Contour Shell for Image/Icon Frame */}
                  <div className="w-full h-48 bg-[#2D4A3E]/5 border border-dashed border-[#2D4A3E]/20 rounded-[1.8rem_0.9rem_2.2rem_1.4rem] mb-6 flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
                    <span className="text-4xl mb-2 filter drop-shadow-sm group-hover:rotate-6 transition-transform duration-500">
                      {article.icon}
                    </span>
                    <span className="font-serif text-xs italic opacity-70 block max-w-[200px]">
                      [{article.visualLabel}]
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[10px] uppercase tracking-widest opacity-70 mb-3">
                    <span className="text-[#D97706] font-bold">[{article.category}]</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl lowercase leading-snug tracking-tight mb-4 group-hover:text-[#D97706] transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className={`text-xs leading-relaxed ${themeTextMuted} mb-6 line-clamp-4`}>
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-dashed border-[#2D4A3E]/10 flex justify-between items-center text-xs">
                  <div className="flex flex-col">
                    <span className="font-bold opacity-80">{article.author}</span>
                    <span className="text-[9px] opacity-40">{article.date}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={() => toggleBookmark(article.id)}
                      className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5"
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${bookmarkedIds.includes(article.id) ? 'fill-[#D97706] text-[#D97706]' : ''}`} />
                    </button>
                    <a href="#" className="flex items-center space-x-1 font-bold text-[#D97706] uppercase tracking-widest text-[10px] group-hover:underline">
                      <span>Enter</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* --- SECTION 3: EMBEDDED AUDIO STORIES (Spoken Word Transmissions) --- */}
      <section className={`w-full ${isNight ? 'bg-[#0E1720]' : 'bg-[#EAE0D4]'} border-y ${themeBorder} py-16 transition-colors duration-1000`}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#D97706] font-bold block mb-2">📻 Sonic Field Documents</span>
            <h2 className="font-serif text-3xl md:text-4xl lowercase tracking-tight">spoken word & oral frameworks</h2>
            <p className={`text-xs tracking-wide uppercase mt-2 ${themeTextMuted}`}>Listen directly to audio records preserved by local community elders.</p>
          </div>

          <div className="space-y-6">
            {audioStories.map((story) => {
              const isPlaying = playingAudioId === story.id;
              return (
                <div 
                  key={story.id} 
                  className={`p-6 border ${themeBorder} ${themeCardBg} rounded-[1.8rem_3.5rem_1.2rem_2.2rem] flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-md backdrop-blur-md transition-all duration-300 ${isPlaying ? 'ring-1 ring-[#D97706]/40' : ''}`}
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center space-x-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#D97706]/10 text-[#D97706] text-[9px] uppercase tracking-widest font-bold border border-[#D97706]/20">
                        Field Recording
                      </span>
                      <span className="text-[11px] opacity-60">Oral Link: {story.narrator}</span>
                    </div>
                    <h4 className="font-serif text-lg tracking-wide lowercase">{story.title}</h4>
                    <p className={`text-xs ${themeTextMuted} leading-relaxed`}>{story.description}</p>
                    
                    {/* Micro-animated Waveform Indicator when active */}
                    {isPlaying && (
                      <div className="flex items-center space-x-1 pt-2 animate-pulse">
                        <span className="w-1 h-3 bg-[#D97706] rounded-full inline-block animate-bounce" style={{animationDelay:'0.1s'}}></span>
                        <span className="w-1 h-5 bg-[#D97706] rounded-full inline-block animate-bounce" style={{animationDelay:'0.3s'}}></span>
                        <span className="w-1 h-2 bg-[#D97706] rounded-full inline-block animate-bounce" style={{animationDelay:'0.5s'}}></span>
                        <span className="w-1 h-4 bg-[#D97706] rounded-full inline-block animate-bounce" style={{animationDelay:'0.2s'}}></span>
                        <span className="text-[10px] tracking-widest uppercase text-[#D97706] font-mono pl-2">streaming spatial archive stream...</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-neutral-500/10">
                    <span className="font-mono text-xs tracking-wider opacity-70">{story.duration}</span>
                    <button 
                      onClick={() => setPlayingAudioId(isPlaying ? null : story.id)}
                      className="flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#2D4A3E] text-[#F4EBE1] dark:bg-[#F4EBE1] dark:text-[#0A1118] text-xs uppercase tracking-widest font-bold hover:bg-[#D97706] dark:hover:bg-[#D97706] dark:hover:text-white transition-all shadow-md active:scale-95"
                    >
                      {isPlaying ? (
                        <>
                          <Pause className="w-3.5 h-3.5 fill-current" />
                          <span>Mute Tape</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Stream Audio</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- SECTION 4: THE NEWSLETTER LEDGER (Tactile Conversational System) --- */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className={`p-8 md:p-14 border ${themeBorder} ${themeCardBg} rounded-[4.5rem_2rem_4rem_2.5rem] relative shadow-inner overflow-hidden backdrop-blur-sm`}>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#2D4A3E]/5 rounded-full blur-2xl pointer-events-none" />
          
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#D97706] font-bold block mb-4">📜 The Seasonal Ledger</span>
          <h2 className="font-serif text-3xl md:text-4xl lowercase tracking-tight mb-4 max-w-xl mx-auto leading-tight">
            receive rare physical dispatches, celestial cycles, & oasis updates
          </h2>
          <p className={`text-xs leading-relaxed max-w-md mx-auto mb-8 ${themeTextMuted} tracking-wide`}>
            Zero automated commercial noise. We only compile raw, high-value field updates concerning tribal heritage, local workshop calendars, and creative workspace openings in South Sinai.
          </p>

          {subscribed ? (
            <div className="p-4 bg-[#2D4A3E]/10 text-xs tracking-widest uppercase rounded-xl inline-block text-[#2D4A3E] dark:text-[#F4EBE1] font-bold border border-dashed border-[#2D4A3E]/30 animate-fade-in">
              ✨ your digital coordinates are safely cataloged into our sandstone servers.
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-2 border p-2 rounded-2xl bg-black/5 dark:bg-white/5 border-neutral-500/20">
              <input 
                type="email" 
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter email to scribe your lineage..."
                className="flex-1 bg-transparent border-0 text-xs px-4 py-3 focus:ring-0 focus:outline-none placeholder:opacity-40 text-inherit font-medium tracking-wide"
              />
              <button 
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#2D4A3E] text-[#F4EBE1] dark:bg-[#F4EBE1] dark:text-[#0A1118] hover:bg-[#D97706] dark:hover:bg-[#D97706] dark:hover:text-white text-xs uppercase tracking-widest font-bold transition-all shrink-0 active:scale-95 shadow-md"
              >
                Sign Ledger
              </button>
            </form>
          )}
        </div>
      </section>

      {/* --- AMBIENT BRAND FOOTER SOUNDSCAPE OVERLAY --- */}
      <footer className={`w-full max-w-7xl mx-auto border-t ${themeBorder} pt-8 px-6 flex flex-col md:flex-row justify-between items-center gap-6`}>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => setIsSoundscapePlaying(!isSoundscapePlaying)}
            className={`p-3 rounded-full border ${themeBorder} bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 transition-all relative group`}
          >
            {isSoundscapePlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-[#D97706]" />
                <span className="absolute -top-1 -right-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D97706] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D97706]"></span>
                </span>
              </>
            ) : (
              <VolumeX className="w-4 h-4 opacity-50" />
            )}
          </button>
          
          <div>
            <div className="text-xs uppercase tracking-widest font-bold flex items-center space-x-2">
              <span>Stream Live Oasis Frequencies</span>
              {isSoundscapePlaying && <span className="text-[10px] text-[#D97706] font-mono lowercase animate-pulse">(active connection)</span>}
            </div>
            <div className="text-[10px] opacity-50 tracking-wider">Coastal breeze matrices • Campfire anomalies • Acoustic grounding tracks</div>
          </div>
        </div>

        <div className="text-center md:text-right">
          <span className="text-[10px] uppercase tracking-[0.25em] opacity-40 block">Nakhyl Zone Ecosystem Framework • 2026</span>
          <span className="text-[10px] uppercase tracking-widest font-mono opacity-50 block mt-1">📍 Local Time Coordinates: Egypt (GMT+2)</span>
        </div>
      </footer>

      {/* --- INTERACTIVE MODAL overlay: CAMPFIRE COUNCIL --- */}
      {isCampfireOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
          <div className="bg-[#0A1118] text-[#F4EBE1] max-w-xl w-full p-8 md:p-10 rounded-[3rem_1.5rem_4.5rem_2rem] border border-[#D97706]/40 relative shadow-2xl shadow-[#D97706]/10 animate-fade-in">
            
            <button 
              onClick={() => setIsCampfireOpen(false)}
              className="absolute top-6 right-6 text-[10px] uppercase tracking-widest opacity-60 hover:opacity-100 border border-white/20 px-3 py-1 rounded-full bg-white/5 transition-opacity"
            >
              [Extinguish X]
            </button>

            <div className="flex items-center space-x-3 mb-6">
              <Flame className="w-8 h-8 text-[#D97706] animate-pulse" />
              <div>
                <h3 className="font-serif text-2xl lowercase tracking-tight">The Virtual Campfire</h3>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#D97706]">Traditional Hospitality Protocol</p>
              </div>
            </div>

            <div className="space-y-4 text-xs tracking-wide leading-relaxed text-gray-300 font-sans">
              <p>
                In South Sinai, the campfire is not merely a utility for heat—it functions as an ancestral social canvas. When sparks ascend into the deep mountain sky, architectural hierarchy dissolves.
              </p>
              <p>
                The brewing ritual of <strong className="text-[#D97706]">Habak Tea</strong> is our native signature handshake. It requires systematic slowness; brewed deliberately over coals, mixed with mountain flora, and poured from an elevated stance to maximize aeration.
              </p>
              <p className="italic font-serif text-base border-l-2 border-[#D97706] pl-4 text-[#F4EBE1] py-1">
                "We welcome you as an external explorer, we sit with you as family, and you depart as a living dynamic asset of this landscape."
              </p>
            </div>

            <button 
              onClick={() => setIsCampfireOpen(false)}
              className="w-full mt-8 py-3 bg-[#D97706] text-white text-xs uppercase tracking-widest font-bold rounded-xl hover:bg-amber-700 transition-colors shadow-lg active:scale-95"
            >
              Take Your Seat & Continue Reading
            </button>
          </div>
        </div>
      )}

    </div>
  );
}