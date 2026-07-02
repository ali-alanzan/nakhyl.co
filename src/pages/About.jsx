import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Flame,
  HandHeart,
  Headphones,
  Leaf,
  MapPin,
  Moon,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
  Sun,
  Trees,
  Users,
  Waves,
  X,
} from 'lucide-react';

const heroImage = new URL('../../identity/Nakhyl-zone-13.jpeg', import.meta.url).href;
const courtyardImage = new URL('../../identity/Nakhyl-zone-1.jpeg', import.meta.url).href;
const seatingImage = new URL('../../identity/Nakhyl-zone-4.jpeg', import.meta.url).href;
const fireImage = new URL('../../identity/Nakhyl-zone-19.jpeg', import.meta.url).href;
const seaImage = new URL('../../identity/Nakhyl-zone-16.jpeg', import.meta.url).href;
const entranceImage = new URL('../../identity/Nakhyl-zone-12.jpeg', import.meta.url).href;

const SOCIAL_IMAGES = [
  new URL('../../identity/Nakhyl-zone-3.jpeg', import.meta.url).href,
  new URL('../../identity/Nakhyl-zone-7.jpeg', import.meta.url).href,
  new URL('../../identity/Nakhyl-zone-10.jpeg', import.meta.url).href,
  new URL('../../identity/Nakhyl-zone-20.jpeg', import.meta.url).href,
];

const EXPERIENCE_ZONES = [
  {
    id: 'grove',
    icon: Trees,
    title: 'palm-grove stewardship',
    stat: 'zero clearing',
    image: courtyardImage,
    text: 'The venue is arranged around existing palms, shaded pockets, and handmade clay edges so the land remains the first architect.',
  },
  {
    id: 'floor',
    icon: HandHeart,
    title: 'floor-level hospitality',
    stat: 'shared circle',
    image: seatingImage,
    text: 'Low cushions, woven rugs, Habak tea, and host-led rituals make every arrival feel personal without becoming performative.',
  },
  {
    id: 'fire',
    icon: Flame,
    title: 'cinema wadi and firelight',
    stat: 'twilight ritual',
    image: fireImage,
    text: 'At night the courtyard shifts into acoustic sessions, open-air cinema, and quiet conversations around a central flame.',
  },
];

const PRINCIPLES = [
  {
    icon: Leaf,
    title: 'build with the climate',
    text: 'Clay, shade, airflow, and open seating create comfort through passive decisions instead of over-engineered intervention.',
  },
  {
    icon: Users,
    title: 'protect human-scale culture',
    text: 'The layout keeps guests close to local hosting, shared food, and conversation rather than stage-managed tourism.',
  },
  {
    icon: ShieldCheck,
    title: 'keep access simple',
    text: 'Visitors can understand the place quickly: arrive from Dahab, choose a calm pocket, and confirm plans through a direct team handoff.',
  },
];

const ACCORDION = [
  {
    title: 'Why the palms define the plan',
    content:
      'Nakhyl Zone treats the grove as a fixed cultural asset. Seating, walkways, shade points, and service zones are placed around the living canopy instead of forcing the site into a conventional commercial grid.',
  },
  {
    title: 'How the guest flow works',
    content:
      'The experience moves from discovery to orientation to a human booking handoff. The page now mirrors that journey with clear anchors for atmosphere, values, proof, and visit planning.',
  },
  {
    title: 'What the Google Maps capture adds',
    content:
      'The provided March 2026 Google Maps PDF validates the real venue imagery and reinforces the page with authentic, inspection-ready photos rather than abstract or stock-style visuals.',
  },
];

const cx = (...classes) => classes.filter(Boolean).join(' ');
const mistUnderline =
  'relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-px after:w-24 after:bg-[#B2EBF2]/70 after:shadow-[0_0_18px_rgba(178,235,242,0.42)] after:content-[""]';

export default function About() {
  const [isNight, setIsNight] = useState(false);
  const [activeZone, setActiveZone] = useState(EXPERIENCE_ZONES[0].id);
  const [openPanel, setOpenPanel] = useState(0);
  const [isCampfireOpen, setIsCampfireOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [dahabTime, setDahabTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      setDahabTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Cairo',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date()),
      );
    };

    updateClock();
    const interval = window.setInterval(updateClock, 30000);
    return () => window.clearInterval(interval);
  }, []);

  const palette = useMemo(
    () => ({
      page: isNight ? 'bg-[#0A1118] text-[#F4EBE1]' : 'bg-[#F4EBE1] text-[#2D4A3E]',
      panel: isNight
        ? 'bg-[#111B24]/92 border-[#B2EBF2]/18 shadow-[inset_0_1px_0_rgba(224,247,250,0.08)]'
        : 'bg-[radial-gradient(circle_at_84%_0%,rgba(224,247,250,0.20),rgba(255,255,255,0.48)_38%,rgba(255,255,255,0.34)_100%)] border-[#B2EBF2]/42 shadow-[inset_0_1px_0_rgba(255,255,255,0.42)]',
      solid: isNight
        ? 'bg-[radial-gradient(circle_at_86%_0%,rgba(178,235,242,0.08),rgba(16,25,34,1)_42%)] border-[#B2EBF2]/16'
        : 'bg-[radial-gradient(circle_at_86%_0%,rgba(224,247,250,0.20),rgba(238,227,215,0.96)_40%)] border-[#B2EBF2]/36',
      muted: isNight ? 'text-[#F4EBE1]/70' : 'text-[#2D4A3E]/72',
      hairline: isNight ? 'border-[#B2EBF2]/16' : 'border-[#B2EBF2]/42',
      wash: isNight
        ? 'bg-[linear-gradient(90deg,rgba(10,17,24,0.96)_0%,rgba(10,17,24,0.74)_48%,rgba(10,17,24,0.18)_100%)]'
        : 'bg-[linear-gradient(90deg,rgba(244,235,225,0.98)_0%,rgba(244,235,225,0.76)_48%,rgba(244,235,225,0.1)_100%)]',
    }),
    [isNight],
  );

  const selectedZone = useMemo(
    () => EXPERIENCE_ZONES.find((zone) => zone.id === activeZone) || EXPERIENCE_ZONES[0],
    [activeZone],
  );

  const handleVisitPlan = () => {
    const message = encodeURIComponent(
      [
        'Marhaba Nakhyl Zone.',
        'I read the About page and would like to plan a visit.',
        'Please share the best time for the palm grove, Cinema Wadi, or the fire circle.',
      ].join('\n'),
    );

    window.open(`https://api.whatsapp.com/send?phone=201000000000&text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className={cx('min-h-screen overflow-hidden font-sans antialiased transition-colors duration-700', palette.page)}>
      <div className="fixed right-4 top-4 z-40 flex items-center gap-2 sm:right-6 sm:top-6">
        <button
          type="button"
          onClick={() => setIsNight((value) => !value)}
          className={cx(
            'inline-flex h-11 items-center gap-2 rounded-[1.3rem_0.8rem_1.7rem_1rem] border px-4 text-[10px] font-bold uppercase tracking-widest shadow-lg backdrop-blur-md transition focus:outline-none focus:ring-2 focus:ring-[#D97706]',
            isNight
              ? 'border-[#F4EBE1]/15 bg-[#F4EBE1] text-[#0A1118] hover:bg-[#D97706]'
              : 'border-[#2D4A3E]/15 bg-[#2D4A3E] text-[#F4EBE1] hover:bg-[#0A1118]',
          )}
          aria-label={isNight ? 'Switch to day mode' : 'Switch to night mode'}
        >
          {isNight ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
          <span className="hidden sm:inline">{isNight ? 'chase the sun' : 'follow sparks'}</span>
        </button>

        <button
          type="button"
          onClick={() => setIsCampfireOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#D97706] text-[#0A1118] shadow-[0_0_34px_rgba(217,119,6,0.45)] transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F4EBE1]"
          aria-label="Open the virtual campfire story"
        >
          <Flame className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <section className="relative min-h-[740px] overflow-hidden border-b border-current/10">
        <img
          src={heroImage}
          alt="Nakhyl Zone palm grove with natural shade in Dahab"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className={cx('absolute inset-0', palette.wash)} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(217,119,6,0.2),transparent_32%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(178,235,242,0.18),transparent_30%)]" />

        <div className="relative z-10 mx-auto grid min-h-[740px] max-w-7xl grid-cols-1 gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.42fr)] lg:px-10">
          <div className="flex max-w-4xl flex-col justify-center py-16">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#B2EBF2]/35 bg-[#E0F7FA]/10 px-4 py-2 backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-[#D97706]" aria-hidden="true" />
                Dahab cultural oasis
              </span>
              <span className={cx('inline-flex items-center gap-2', palette.muted)}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D97706]" />
                Google Maps visual set, Mar 2026
              </span>
            </div>

            <h1 className="max-w-4xl font-serif text-5xl font-light lowercase leading-[1.04] tracking-normal [text-shadow:0_0_24px_rgba(178,235,242,0.16)] sm:text-6xl lg:text-7xl">
              built around the palms, not over them.
            </h1>
            <p className={cx('mt-7 max-w-2xl text-base leading-8 tracking-wide sm:text-lg', palette.muted)}>
              Nakhyl Zone is a premium but grounded sanctuary inside Dahab: part palm grove, part Bedouin hosting ritual, part open-air cultural room for global nomads.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleVisitPlan}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[1.4rem_0.8rem_1.8rem_1rem] bg-[#D97706] px-6 text-xs font-bold uppercase tracking-widest text-[#0A1118] shadow-[0_18px_48px_rgba(217,119,6,0.28)] transition hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              >
                plan a visit
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <a
                href="#story"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[0.8rem_1.4rem_1rem_1.8rem] border border-[#B2EBF2]/40 bg-[#E0F7FA]/10 px-6 text-xs font-bold uppercase tracking-widest backdrop-blur-md transition hover:bg-[#E0F7FA]/16 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              >
                read the story
              </a>
            </div>
          </div>

          <aside className="flex items-end pb-8 lg:items-center lg:pb-0">
            <div className={cx('w-full rounded-[2.5rem_1.2rem_3.2rem_1.6rem] border p-4 shadow-2xl backdrop-blur-xl', palette.panel)}>
              <img
                src={entranceImage}
                alt="Nakhyl Zone entrance and clay-toned venue details"
                className="h-72 w-full rounded-[1.9rem_0.9rem_2.6rem_1.1rem] object-cover sm:h-96 lg:h-[27rem]"
              />
              <dl className="grid grid-cols-3 gap-3 pt-4">
                {[
                  ['28.5109 N', 'maps point'],
                  [dahabTime || '00:00', 'dahab time'],
                  ['oasis', 'venue type'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[1rem_0.6rem_1.2rem_0.7rem] border border-[#B2EBF2]/30 bg-[#E0F7FA]/[0.06] p-3">
                    <dt className={cx('text-[9px] uppercase tracking-[0.2em]', palette.muted)}>{label}</dt>
                    <dd className="mt-1 font-mono text-[11px] font-bold uppercase tracking-widest text-[#D97706]">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <section className={cx('border-b px-5 py-4 sm:px-8 lg:px-10', palette.hairline)}>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => setIsAudioPlaying((value) => !value)}
            className="flex items-center gap-4 text-left focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            aria-pressed={isAudioPlaying}
          >
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-current/15 bg-current/[0.04]">
              {isAudioPlaying ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
            </span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-[0.24em]">listen to the oasis right now</span>
              <span className={cx('mt-1 block text-sm leading-6', palette.muted)}>Palm wind, embers, and faint acoustic strings.</span>
            </span>
          </button>

          <div className="flex h-8 items-end gap-1" aria-hidden="true">
            {[10, 18, 12, 24, 16, 28, 14, 22, 11, 26, 17, 20].map((height, index) => (
              <span
                key={`${height}-${index}`}
                className="w-1 rounded-full bg-[#D97706] transition-all duration-300"
                style={{
                  height: isAudioPlaying ? `${height}px` : '5px',
                  animation: isAudioPlaying ? 'pulse 900ms ease-in-out infinite alternate' : 'none',
                  animationDelay: `${index * 70}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">origin and purpose</span>
            <h2 className={cx('mt-4 font-serif text-4xl font-light lowercase leading-tight sm:text-5xl', mistUnderline)}>
              a city-accessible sanctuary with a desert sense of time.
            </h2>
            <p className={cx('mt-6 text-sm leading-7 tracking-wide', palette.muted)}>
              The brand is intentionally slow, tactile, and human. It avoids the noise of beachfront cafes and the friction of remote camps by offering an easy-to-reach courtyard where culture, work, food, and firelight can coexist.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {PRINCIPLES.map((principle, index) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.title}
                  className={cx(
                    'min-h-64 rounded-[2rem_0.9rem_2.7rem_1.2rem] border p-6 shadow-lg',
                    index === 2 && 'sm:col-span-2',
                    palette.solid,
                  )}
                >
                  <Icon className="h-6 w-6 text-[#D97706]" aria-hidden="true" />
                  <h3 className={cx('mt-5 font-serif text-2xl font-light lowercase leading-tight', mistUnderline)}>{principle.title}</h3>
                  <p className={cx('mt-4 text-sm leading-7', palette.muted)}>{principle.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={cx('border-y px-5 py-20 sm:px-8 lg:px-10', palette.hairline)}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">spatial identity</span>
              <h2 className={cx('mt-4 font-serif text-4xl font-light lowercase leading-tight sm:text-5xl', mistUnderline)}>three layers of the oasis.</h2>
            </div>
            <p className={cx('max-w-md text-sm leading-7 tracking-wide', palette.muted)}>
              Each layer gives visitors a different pace while preserving one clear brand promise: quiet hospitality shaped by the land.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[380px_minmax(0,1fr)]">
            <div className="space-y-3">
              {EXPERIENCE_ZONES.map((zone) => {
                const Icon = zone.icon;
                const isSelected = activeZone === zone.id;

                return (
                  <button
                    key={zone.id}
                    type="button"
                    onClick={() => setActiveZone(zone.id)}
                    className={cx(
                      'grid w-full grid-cols-[48px_minmax(0,1fr)] gap-4 rounded-[1.6rem_0.8rem_2.1rem_1rem] border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#D97706]',
                      isSelected ? 'border-[#D97706] bg-[#D97706] text-[#0A1118] shadow-xl' : cx(palette.solid, 'hover:-translate-y-0.5 hover:border-[#D97706]/60'),
                    )}
                    aria-pressed={isSelected}
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-current/[0.09]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-serif text-xl font-light lowercase leading-tight">{zone.title}</span>
                      <span className="mt-1 block text-[10px] font-bold uppercase tracking-widest opacity-60">{zone.stat}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <article className={cx('overflow-hidden rounded-[3rem_1.3rem_4rem_1.8rem] border shadow-2xl', palette.solid)}>
              <div className="relative min-h-[300px] overflow-hidden sm:min-h-[420px]">
                <img src={selectedZone.image} alt={`${selectedZone.title} at Nakhyl Zone`} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/86 via-[#0A1118]/26 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 rounded-[1.2rem_0.7rem_1.6rem_0.9rem] border border-[#B2EBF2]/28 bg-[#0A1118]/28 p-4 text-[#F4EBE1] backdrop-blur-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">{selectedZone.stat}</p>
                  <h3 className="mt-2 max-w-2xl font-serif text-4xl font-light lowercase leading-tight">{selectedZone.title}</h3>
                </div>
              </div>
              <div className="grid gap-5 p-6 sm:grid-cols-[1fr_auto] sm:p-8">
                <p className={cx('text-sm leading-7 tracking-wide', palette.muted)}>{selectedZone.text}</p>
                <button
                  type="button"
                  onClick={() => setIsCampfireOpen(true)}
                  className="inline-flex min-h-12 items-center justify-center gap-3 self-start rounded-[1rem_1.8rem_1.3rem_0.9rem] border border-[#D97706]/40 bg-[#D97706]/10 px-5 text-xs font-bold uppercase tracking-widest text-[#D97706] transition hover:bg-[#D97706] hover:text-[#0A1118] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                >
                  <Flame className="h-4 w-4" aria-hidden="true" />
                  open ritual
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[1.4rem_3.2rem_2.6rem_1.2rem] border border-[#B2EBF2]/42 shadow-2xl">
            <img src={seaImage} alt="Dahab Red Sea horizon near Nakhyl Zone" className="h-[34rem] w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,17,24,0.72),rgba(10,17,24,0.08))]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.2rem_0.7rem_1.6rem_0.9rem] border border-[#B2EBF2]/35 bg-[#0A1118]/45 p-5 text-[#F4EBE1] backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">accessible refuge</p>
              <p className="mt-2 font-serif text-2xl font-light lowercase">near the Red Sea, held at a slower human rhythm.</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">operating philosophy</span>
            <h2 className={cx('mt-4 font-serif text-4xl font-light lowercase leading-tight sm:text-5xl', mistUnderline)}>the oasis code is simple.</h2>
            <div className="mt-8 space-y-4">
              {ACCORDION.map((item, index) => {
                const isOpen = openPanel === index;

                return (
                  <div key={item.title} className={cx('overflow-hidden rounded-[1.7rem_0.8rem_2.2rem_1.1rem] border', palette.solid)}>
                    <button
                      type="button"
                      onClick={() => setOpenPanel(isOpen ? -1 : index)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#D97706]"
                      aria-expanded={isOpen}
                    >
                      <span>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-[#D97706]">0{index + 1}</span>
                        <span className="mt-2 block font-serif text-xl font-light lowercase">{item.title}</span>
                      </span>
                      <ChevronDown className={cx('h-5 w-5 shrink-0 transition', isOpen && 'rotate-180')} aria-hidden="true" />
                    </button>
                    <div className={cx('grid transition-all duration-300', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                      <div className="overflow-hidden">
                        <p className={cx('border-t border-current/10 px-5 pb-5 pt-4 text-sm leading-7 tracking-wide', palette.muted)}>
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className={cx('border-y px-5 py-20 sm:px-8 lg:px-10', palette.hairline)}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">authentic social stream</span>
              <h2 className={cx('mt-4 font-serif text-4xl font-light lowercase leading-tight sm:text-5xl', mistUnderline)}>real textures from the grounds.</h2>
            </div>
            <p className={cx('max-w-md text-sm leading-7 tracking-wide', palette.muted)}>
              Venue imagery stays close, clear, and inspectable so the About page feels like a guided walk through the actual place.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SOCIAL_IMAGES.map((image, index) => (
              <figure
                key={image}
                className={cx(
                  'overflow-hidden border border-[#B2EBF2]/38 bg-[#E0F7FA]/[0.04]',
                  index % 2 === 0 ? 'rounded-[2.2rem_0.9rem_2.8rem_1.4rem]' : 'rounded-[0.9rem_2.2rem_1.4rem_2.8rem]',
                )}
              >
                <img src={image} alt="Nakhyl Zone courtyard detail from the venue image set" className="h-72 w-full object-cover" loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="relative overflow-hidden rounded-[3.4rem_1.4rem_4.4rem_1.9rem] border border-current/10 bg-[#0A1118] p-6 text-center text-[#F4EBE1] shadow-2xl sm:p-12">
          <img src={fireImage} alt="Nakhyl Zone evening fire circle" className="absolute inset-0 h-full w-full object-cover opacity-45" loading="lazy" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,17,24,0.92),rgba(10,17,24,0.58))]" />
          <div className="relative mx-auto max-w-3xl py-12">
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">next threshold</span>
            <h2 className="mt-4 font-serif text-4xl font-light lowercase leading-tight sm:text-6xl">
              come for the shade. stay for the circle.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-7 tracking-wide text-[#F4EBE1]/74">
              The strongest introduction to Nakhyl Zone is still physical: palm shade in the afternoon, tea at sunset, and firelight after dark.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleVisitPlan}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[1.4rem_0.8rem_1.8rem_1rem] bg-[#D97706] px-6 text-xs font-bold uppercase tracking-widest text-[#0A1118] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F4EBE1]"
              >
                ask about visiting
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => setIsCampfireOpen(true)}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[0.8rem_1.4rem_1rem_1.8rem] border border-white/20 bg-white/10 px-6 text-xs font-bold uppercase tracking-widest backdrop-blur-md transition hover:bg-white/16 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              >
                <Flame className="h-4 w-4" aria-hidden="true" />
                read the fire story
              </button>
            </div>
          </div>
        </div>
      </section>

      {isCampfireOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="campfire-title"
        >
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2.8rem_1.2rem_3.8rem_1.8rem] border border-[#D97706]/60 bg-[#F4EBE1] p-6 text-[#2D4A3E] shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setIsCampfireOpen(false)}
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2D4A3E] text-[#F4EBE1] transition hover:bg-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              aria-label="Close campfire story"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <Flame className="h-8 w-8 text-[#D97706]" aria-hidden="true" />
            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">virtual campfire</p>
            <h2 id="campfire-title" className="mt-4 max-w-lg font-serif text-4xl font-light lowercase leading-tight">
              the hospitality ritual at the center of Nakhyl Zone.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#2D4A3E]/75">
              The fire marks the social center of the courtyard. Guests settle close to the ground, tea is brewed slowly, and the evening stays intimate enough for conversation, music, and shared attention.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                [Headphones, 'acoustic first'],
                [Waves, 'sea-air calm'],
                [Sparkles, 'slow ritual'],
              ].map(([Icon, label]) => (
                <div key={label} className="rounded-[1.2rem_0.7rem_1.5rem_0.9rem] border border-[#2D4A3E]/15 bg-[#2D4A3E]/5 p-4">
                  <Icon className="h-5 w-5 text-[#D97706]" aria-hidden="true" />
                  <p className="mt-3 text-[10px] font-bold uppercase tracking-widest">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
