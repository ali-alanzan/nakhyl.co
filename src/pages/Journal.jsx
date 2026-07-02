import React, { useMemo, useState } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  BookOpen,
  Flame,
  Headphones,
  Mail,
  Moon,
  Pause,
  Play,
  Search,
  Share2,
  SlidersHorizontal,
  Sun,
  Volume2,
  VolumeX,
  X,
} from 'lucide-react';

const heroImage = new URL('../../identity/Nakhyl-zone-14.jpeg', import.meta.url).href;
const weavingImage = new URL('../../identity/Nakhyl-zone-8.jpeg', import.meta.url).href;
const teaImage = new URL('../../identity/Nakhyl-zone-6.jpeg', import.meta.url).href;
const nomadImage = new URL('../../identity/Nakhyl-zone-15.jpeg', import.meta.url).href;
const wadiImage = new URL('../../identity/Nakhyl-zone-17.jpeg', import.meta.url).href;
const fireImage = new URL('../../identity/Nakhyl-zone-5.jpeg', import.meta.url).href;
const archiveImage = new URL('../../identity/Nakhyl-zone-19.jpeg', import.meta.url).href;

const SOCIAL_IMAGES = [
  new URL('../../identity/Nakhyl-zone-1.jpeg', import.meta.url).href,
  new URL('../../identity/Nakhyl-zone-3.jpeg', import.meta.url).href,
  new URL('../../identity/Nakhyl-zone-10.jpeg', import.meta.url).href,
  new URL('../../identity/Nakhyl-zone-20.jpeg', import.meta.url).href,
];

const CATEGORIES = ['All', 'Heritage', 'Nomad Life', 'Oasis Flavors', 'Gatherings'];

const ARTICLES = [
  {
    id: 1,
    title: 'the geometry of the rug',
    deck: 'Decoding the woven memory systems carried through Sinai textiles, courtyard seating, and handbuilt hospitality.',
    category: 'Heritage',
    date: '14 May 2026',
    readTime: '12 min',
    author: 'Farha Salem',
    role: 'Master weaver and historian',
    image: weavingImage,
    featured: true,
    span: 'lg:col-span-2',
  },
  {
    id: 2,
    title: 'the ritual of habak',
    deck: 'Wild mountain mint, slow coals, and the quiet protocol that turns a first visit into a remembered welcome.',
    category: 'Oasis Flavors',
    date: '02 June 2026',
    readTime: '4 min',
    author: 'Ahmed Bedouin',
    role: 'Oasis botanist',
    image: teaImage,
    span: '',
  },
  {
    id: 3,
    title: 'why modern nomads anchor in dahab',
    deck: 'A field note on reliable focus, intentional pace, and the courtyard rhythms that help remote work feel human again.',
    category: 'Nomad Life',
    date: '22 June 2026',
    readTime: '6 min',
    author: 'Elena Rostov',
    role: 'Systems architect',
    image: nomadImage,
    span: '',
  },
  {
    id: 4,
    title: 'inside the wadi matrix',
    deck: 'How walking inland from the busy strips reveals shaded pockets, cinema corners, and the architecture of stillness.',
    category: 'Gatherings',
    date: '27 June 2026',
    readTime: '9 min',
    author: 'Zane Miller',
    role: 'Anthropologist',
    image: wadiImage,
    span: 'md:col-span-2 lg:col-span-1',
  },
];

const AUDIO_STORIES = [
  {
    id: 'songs-of-catherine',
    title: 'songs below mount catherine',
    narrator: 'Sheikh Moussa',
    duration: '12:40',
    description: 'A spoken archive of poetic refrains, fire-circle cadence, and the quiet pauses that hold the story together.',
  },
  {
    id: 'desert-herb-map',
    title: 'the botanical map of desert herbs',
    narrator: 'Dr. Layla Mansour',
    duration: '08:15',
    description: 'A guided audio walk through Habak, mountain flora, and the small details guests notice after their second cup.',
  },
];

const cx = (...classes) => classes.filter(Boolean).join(' ');
const mistUnderline =
  'relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-px after:w-24 after:bg-[#B2EBF2]/70 after:shadow-[0_0_18px_rgba(178,235,242,0.42)] after:content-[""]';

function IconButton({ children, label, className = '', ...props }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className={cx(
        'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem_0.65rem_1.25rem_0.8rem] border transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:ring-offset-2 focus:ring-offset-transparent',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

function ArticleCard({ article, bookmarked, onBookmark, palette }) {
  return (
    <article
      className={cx(
        'group grid min-h-[34rem] overflow-hidden border shadow-xl transition duration-500 hover:-translate-y-1 hover:shadow-2xl md:min-h-[30rem]',
        'rounded-[2.4rem_1.1rem_3.2rem_1.5rem]',
        palette.panel,
        article.span,
      )}
    >
      <div className="relative min-h-64 overflow-hidden">
        <img
          src={article.image}
          alt={`${article.title} journal visual`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          loading={article.featured ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,17,24,0.02),rgba(10,17,24,0.62))]" />
        <div className="absolute left-5 top-5 rounded-full border border-[#B2EBF2]/35 bg-[#0A1118]/55 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#F4EBE1] backdrop-blur-md">
          {article.category}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <div>
          <div className={cx('mb-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em]', palette.muted)}>
            <span>{article.date}</span>
            <span className="h-1 w-1 rounded-full bg-[#D97706]" />
            <span>{article.readTime} read</span>
          </div>
          <h3 className={cx('font-serif text-3xl font-light lowercase leading-tight tracking-normal transition group-hover:text-[#D97706]', mistUnderline)}>
            {article.title}
          </h3>
          <p className={cx('mt-4 max-w-2xl text-sm leading-7 tracking-wide', palette.muted)}>{article.deck}</p>
        </div>

        <div className={cx('mt-8 flex items-center justify-between gap-4 border-t pt-5', palette.hairline)}>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em]">{article.author}</p>
            <p className={cx('mt-1 text-xs leading-5', palette.muted)}>{article.role}</p>
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              label={bookmarked ? `Remove bookmark for ${article.title}` : `Bookmark ${article.title}`}
              onClick={() => onBookmark(article.id)}
              className={cx('border-current/15 bg-current/[0.035] hover:bg-current/[0.08]', bookmarked && 'text-[#D97706]')}
            >
              <Bookmark className={cx('h-4 w-4', bookmarked && 'fill-current')} aria-hidden="true" />
            </IconButton>
            <a
              href="#journal-dispatch"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[0.8rem_1.2rem_0.9rem_1.4rem] bg-[#D97706] px-4 text-[11px] font-bold uppercase tracking-widest text-[#0A1118] transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            >
              read
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function AudioStory({ story, isPlaying, onToggle, palette }) {
  return (
    <div className={cx('border p-5 shadow-lg transition duration-300 sm:p-6', 'rounded-[1.8rem_3rem_1.2rem_2.2rem]', palette.panel, isPlaying && 'ring-1 ring-[#B2EBF2]/55')}>
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.1rem_0.7rem_1.4rem_0.9rem] bg-[#D97706]/15 text-[#D97706]">
            <Headphones className="h-5 w-5" aria-hidden="true" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D97706]">field recording</p>
            <h4 className={cx('mt-2 font-serif text-2xl font-light lowercase leading-snug', mistUnderline)}>{story.title}</h4>
            <p className={cx('mt-2 text-sm leading-7 tracking-wide', palette.muted)}>{story.description}</p>
            <p className={cx('mt-3 text-[11px] uppercase tracking-[0.22em]', palette.muted)}>
              Narrated by {story.narrator}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-current/10 pt-4 md:border-t-0 md:pt-0">
          <span className="font-mono text-xs font-bold tracking-widest text-[#D97706]">{story.duration}</span>
          <button
            type="button"
            onClick={onToggle}
            className="inline-flex h-12 items-center justify-center gap-2 rounded-[1.3rem_0.8rem_1.6rem_0.9rem] bg-[#2D4A3E] px-5 text-xs font-bold uppercase tracking-widest text-[#F4EBE1] transition hover:bg-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            aria-pressed={isPlaying}
          >
            {isPlaying ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4 fill-current" aria-hidden="true" />}
            {isPlaying ? 'pause' : 'listen'}
          </button>
        </div>
      </div>

      {isPlaying && (
        <div className="mt-5 flex h-8 items-end gap-1 pl-16" aria-hidden="true">
          {[12, 24, 15, 29, 18, 26, 14, 22, 10, 20].map((height, index) => (
            <span
              key={`${story.id}-${height}-${index}`}
              className="w-1 rounded-full bg-[#D97706]"
              style={{
                height,
                animation: 'pulse 900ms ease-in-out infinite alternate',
                animationDelay: `${index * 80}ms`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Journal() {
  const [isNight, setIsNight] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const [isCampfireOpen, setIsCampfireOpen] = useState(false);
  const [isSoundscapePlaying, setIsSoundscapePlaying] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  const palette = useMemo(
    () => ({
      page: isNight ? 'bg-[#0A1118] text-[#F4EBE1]' : 'bg-[#F4EBE1] text-[#2D4A3E]',
      panel: isNight
        ? 'border-[#B2EBF2]/18 bg-[radial-gradient(circle_at_86%_0%,rgba(178,235,242,0.08),rgba(17,27,36,0.9)_42%)]'
        : 'border-[#B2EBF2]/42 bg-[radial-gradient(circle_at_86%_0%,rgba(224,247,250,0.18),rgba(255,255,255,0.46)_42%)]',
      panelSolid: isNight
        ? 'border-[#B2EBF2]/16 bg-[radial-gradient(circle_at_86%_0%,rgba(178,235,242,0.08),#101922_42%)]'
        : 'border-[#B2EBF2]/36 bg-[radial-gradient(circle_at_86%_0%,rgba(224,247,250,0.18),rgba(238,227,215,0.96)_42%)]',
      muted: isNight ? 'text-[#F4EBE1]/68' : 'text-[#2D4A3E]/72',
      hairline: isNight ? 'border-[#B2EBF2]/16' : 'border-[#B2EBF2]/42',
      heroOverlay: isNight
        ? 'bg-[linear-gradient(90deg,rgba(10,17,24,0.96)_0%,rgba(10,17,24,0.75)_48%,rgba(10,17,24,0.22)_100%)]'
        : 'bg-[linear-gradient(90deg,rgba(244,235,225,0.96)_0%,rgba(244,235,225,0.74)_48%,rgba(244,235,225,0.18)_100%)]',
      sticky: isNight ? 'border-[#B2EBF2]/16 bg-[#0A1118]/88' : 'border-[#B2EBF2]/42 bg-[#F4EBE1]/88',
    }),
    [isNight],
  );

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return ARTICLES.filter((article) => {
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        [article.title, article.deck, article.author, article.category].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        );

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const featuredArticle = ARTICLES[0];

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setEmailInput('');
    }
  };

  const toggleBookmark = (id) => {
    setBookmarkedIds((current) => (current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id]));
  };

  return (
    <main className={cx('min-h-screen overflow-hidden font-sans antialiased transition-colors duration-700', palette.page)}>
      <section className="relative min-h-[calc(100vh-6rem)] overflow-hidden border-b border-current/10">
        <img
          src={heroImage}
          alt="Nakhyl Zone journal courtyard in Dahab"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className={cx('absolute inset-0', palette.heroOverlay)} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_16%,rgba(178,235,242,0.18),transparent_30%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-current/[0.08] to-transparent" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl grid-cols-1 gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.5fr)] lg:px-10">
          <div className="flex max-w-4xl flex-col justify-center py-12 lg:py-20">
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#B2EBF2]/35 bg-[#E0F7FA]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] backdrop-blur-md">
                sinai journal
              </span>
              <span className={cx('inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em]', palette.muted)}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D97706]" />
                oral culture, field notes, oasis rituals
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-5xl font-light lowercase leading-[1.03] tracking-normal [text-shadow:0_0_24px_rgba(178,235,242,0.16)] sm:text-6xl lg:text-7xl">
              stories from the quiet side of dahab.
            </h1>
            <p className={cx('mt-7 max-w-2xl text-base leading-8 tracking-wide sm:text-lg', palette.muted)}>
              A curated editorial archive for Sinai hospitality, nomad life, courtyard gatherings, and the small rituals that make Nakhyl Zone feel lived-in rather than designed-at.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#journal-stream"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[1.4rem_0.8rem_1.8rem_1rem] bg-[#D97706] px-6 text-xs font-bold uppercase tracking-widest text-[#0A1118] shadow-[0_18px_48px_rgba(217,119,6,0.28)] transition hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              >
                enter the archive
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setIsCampfireOpen(true)}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[0.8rem_1.4rem_1rem_1.8rem] border border-[#B2EBF2]/40 bg-[#E0F7FA]/10 px-6 text-xs font-bold uppercase tracking-widest backdrop-blur-md transition hover:bg-[#E0F7FA]/16 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              >
                open campfire story
                <Flame className="h-4 w-4 text-[#D97706]" aria-hidden="true" />
              </button>
            </div>
          </div>

          <aside className="flex items-end lg:items-center">
            <div className={cx('w-full rounded-[2.6rem_1.2rem_3.4rem_1.6rem] border p-4 shadow-2xl backdrop-blur-xl', palette.panel)}>
              <div className="overflow-hidden rounded-[2rem_0.9rem_2.8rem_1.2rem]">
                <img src={archiveImage} alt="Nakhyl Zone archive seating detail" className="h-72 w-full object-cover sm:h-96 lg:h-[27rem]" />
              </div>
              <div className="grid grid-cols-3 gap-3 pt-4">
                {[
                  ['23', 'map captures'],
                  ['4', 'editorial tracks'],
                  ['2026', 'field season'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[1rem_0.6rem_1.2rem_0.7rem] border border-[#B2EBF2]/30 bg-[#E0F7FA]/[0.06] p-3">
                    <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#D97706]">{value}</div>
                    <div className={cx('mt-1 text-[10px] uppercase tracking-[0.2em]', palette.muted)}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className={cx('sticky top-0 z-30 border-b backdrop-blur-xl', palette.sticky)}>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-3">
            <SlidersHorizontal className="h-4 w-4 text-[#D97706]" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.24em]">archive filters</p>
          </div>

          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0" aria-label="Journal categories">
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={cx(
                      'min-h-10 shrink-0 rounded-full border px-4 text-[11px] font-bold uppercase tracking-widest transition focus:outline-none focus:ring-2 focus:ring-[#D97706]',
                      isActive ? 'border-[#D97706] bg-[#D97706] text-[#0A1118]' : 'border-current/15 bg-current/[0.035] hover:bg-current/[0.08]',
                    )}
                    aria-pressed={isActive}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            <label className="relative block lg:w-72">
              <span className="sr-only">Search journal</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#D97706]" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search the archive"
                className="h-11 w-full rounded-[1.2rem_0.7rem_1.4rem_0.9rem] border border-current/15 bg-current/[0.035] pl-11 pr-4 text-sm outline-none transition placeholder:text-current/45 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/25"
              />
            </label>
          </div>
        </div>
      </section>

      <section id="journal-stream" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">latest dispatch</p>
            <h2 className={cx('mt-4 font-serif text-4xl font-light lowercase leading-tight sm:text-5xl', mistUnderline)}>{featuredArticle.title}.</h2>
          </div>
          <p className={cx('max-w-2xl text-sm leading-7 tracking-wide lg:justify-self-end', palette.muted)}>
            Designed as a living editorial surface: filter, save, listen, and subscribe without leaving the journal flow.
          </p>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                bookmarked={bookmarkedIds.includes(article.id)}
                onBookmark={toggleBookmark}
                palette={palette}
              />
            ))}
          </div>
        ) : (
          <div className={cx('border p-10 text-center', 'rounded-[2.4rem_1.1rem_3.2rem_1.5rem]', palette.panel)}>
            <BookOpen className="mx-auto h-8 w-8 text-[#D97706]" aria-hidden="true" />
            <h3 className="mt-4 font-serif text-3xl font-light lowercase">no dispatches found</h3>
            <p className={cx('mt-3 text-sm leading-7', palette.muted)}>Try another category or clear the search field.</p>
          </div>
        )}
      </section>

      <section className={cx('border-y px-5 py-16 sm:px-8 lg:px-10', palette.hairline, isNight ? 'bg-[radial-gradient(circle_at_84%_0%,rgba(178,235,242,0.07),#0F1922_42%)]' : 'bg-[radial-gradient(circle_at_84%_0%,rgba(224,247,250,0.16),#EAE0D4_42%)]')}>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">spoken archive</p>
            <h2 className={cx('mt-4 font-serif text-4xl font-light lowercase leading-tight sm:text-5xl', mistUnderline)}>oral notes that slow the page down.</h2>
            <p className={cx('mt-5 max-w-xl text-sm leading-7 tracking-wide', palette.muted)}>
              Audio cards give the journal a more human rhythm while keeping controls lightweight, keyboard-accessible, and clear.
            </p>
          </div>

          <div className="space-y-5">
            {AUDIO_STORIES.map((story) => (
              <AudioStory
                key={story.id}
                story={story}
                isPlaying={playingAudioId === story.id}
                onToggle={() => setPlayingAudioId((current) => (current === story.id ? null : story.id))}
                palette={palette}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div id="journal-dispatch" className={cx('border p-7 shadow-xl sm:p-9', 'rounded-[3rem_1.2rem_3.8rem_1.8rem]', palette.panel)}>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">seasonal ledger</p>
            <h2 className={cx('mt-4 font-serif text-4xl font-light lowercase leading-tight', mistUnderline)}>receive the rare dispatches.</h2>
            <p className={cx('mt-4 text-sm leading-7 tracking-wide', palette.muted)}>
              A low-frequency note for workshop calendars, cinema nights, acoustic circles, and the cultural references behind the space.
            </p>

            {subscribed ? (
              <div className="mt-8 rounded-[1.2rem_0.8rem_1.4rem_1rem] border border-[#D97706]/35 bg-[#D97706]/12 p-4 text-sm font-bold uppercase tracking-[0.16em] text-[#D97706]">
                Your dispatch address is now in the ledger.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <label className="relative flex-1">
                  <span className="sr-only">Email address</span>
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#D97706]" aria-hidden="true" />
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(event) => setEmailInput(event.target.value)}
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-[1.1rem_0.7rem_1.4rem_0.9rem] border border-current/15 bg-current/[0.035] pl-11 pr-4 text-sm outline-none transition placeholder:text-current/45 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/25"
                  />
                </label>
                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-[0.8rem_1.2rem_0.9rem_1.5rem] bg-[#2D4A3E] px-6 text-xs font-bold uppercase tracking-widest text-[#F4EBE1] transition hover:bg-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                >
                  subscribe
                </button>
              </form>
            )}
          </div>

          <div className={cx('border p-4 shadow-xl', 'rounded-[1.6rem_3rem_1.3rem_2.4rem]', palette.panelSolid)}>
            <div className="grid grid-cols-2 gap-3">
              {SOCIAL_IMAGES.map((image, index) => (
                <figure key={image} className="group relative overflow-hidden rounded-[1.3rem_0.7rem_1.6rem_0.9rem] border border-[#B2EBF2]/30">
                  <img
                    src={image}
                    alt={`Nakhyl Zone social proof capture ${index + 1}`}
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 border-t border-[#B2EBF2]/25 bg-[#0A1118]/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F4EBE1] opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                    visitor capture {index + 1}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={cx('mx-auto mb-14 flex max-w-7xl flex-col gap-5 border-t px-5 pt-8 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10', palette.hairline)}>
        <div className="flex items-center gap-4">
          <IconButton
            label={isSoundscapePlaying ? 'Pause oasis soundscape' : 'Play oasis soundscape'}
            onClick={() => setIsSoundscapePlaying((value) => !value)}
            className={cx('border-current/15 bg-current/[0.04] hover:bg-current/[0.09]', isSoundscapePlaying && 'text-[#D97706]')}
          >
            {isSoundscapePlaying ? <Volume2 className="h-5 w-5" aria-hidden="true" /> : <VolumeX className="h-5 w-5" aria-hidden="true" />}
          </IconButton>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em]">listen to the oasis right now</p>
            <p className={cx('mt-1 text-sm leading-6', palette.muted)}>Palm wind, ember crackle, birds, and faint acoustic strings.</p>
          </div>
        </div>

        <div className="flex items-end gap-1" aria-hidden="true">
          {[10, 18, 12, 24, 16, 28, 14, 22, 11, 26, 17, 20].map((height, index) => (
            <span
              key={`${height}-${index}`}
              className="w-1 rounded-full bg-[#D97706] transition-all duration-300"
              style={{
                height: isSoundscapePlaying ? `${height}px` : '5px',
                animation: isSoundscapePlaying ? 'pulse 900ms ease-in-out infinite alternate' : 'none',
                animationDelay: `${index * 70}ms`,
              }}
            />
          ))}
        </div>
      </section>

      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
        <IconButton
          label={isNight ? 'Switch to day mode' : 'Switch to night mode'}
          onClick={() => setIsNight((value) => !value)}
          className="border-[#D97706]/30 bg-[#0A1118]/80 text-[#F4EBE1] shadow-xl backdrop-blur-md hover:bg-[#D97706] hover:text-[#0A1118]"
        >
          {isNight ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
        </IconButton>
        <IconButton
          label="Open virtual campfire"
          onClick={() => setIsCampfireOpen(true)}
          className="border-[#D97706]/30 bg-[#D97706] text-[#0A1118] shadow-xl hover:brightness-105"
        >
          <Flame className="h-5 w-5" aria-hidden="true" />
        </IconButton>
      </div>

      {isCampfireOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1118]/82 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="campfire-title">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[3rem_1.4rem_4rem_1.9rem] border border-[#D97706]/40 bg-[#0A1118] p-7 text-[#F4EBE1] shadow-2xl shadow-[#D97706]/15 sm:p-10">
            <button
              type="button"
              onClick={() => setIsCampfireOpen(false)}
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#F4EBE1]/15 bg-[#F4EBE1]/5 transition hover:bg-[#F4EBE1]/10 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              aria-label="Close virtual campfire"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <img src={fireImage} alt="Nakhyl Zone evening fire circle" className="mb-7 h-56 w-full rounded-[2rem_0.9rem_2.7rem_1.2rem] object-cover" />
            <div className="flex items-center gap-3">
              <Flame className="h-8 w-8 text-[#D97706]" aria-hidden="true" />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D97706]">traditional hospitality protocol</p>
                <h2 id="campfire-title" className="font-serif text-3xl font-light lowercase leading-tight">
                  the virtual campfire
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-7 tracking-wide text-[#F4EBE1]/78">
              <p>
                In South Sinai, the fire is a social architecture: a warm center where hierarchy softens, arrivals slow down, and stories have room to breathe.
              </p>
              <p>
                Habak tea carries that same rhythm. Mountain mint, ember heat, and patient pouring turn hospitality into a ritual guests can feel before they understand it.
              </p>
              <blockquote className="border-l-2 border-[#D97706] pl-4 font-serif text-xl font-light lowercase leading-relaxed text-[#F4EBE1]">
                arrive as a visitor, sit as a friend, leave with a place in the story.
              </blockquote>
            </div>

            <button
              type="button"
              onClick={() => setIsCampfireOpen(false)}
              className="mt-8 inline-flex h-12 w-full items-center justify-center gap-2 rounded-[1.2rem_0.7rem_1.5rem_0.9rem] bg-[#D97706] px-6 text-xs font-bold uppercase tracking-widest text-[#0A1118] transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            >
              continue reading
              <Share2 className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
