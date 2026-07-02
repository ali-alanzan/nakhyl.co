import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Flame,
  Headphones,
  MapPin,
  Moon,
  Pause,
  Play,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  Wifi,
  X,
} from 'lucide-react';

const heroImage = new URL('../../identity/Nakhyl-zone-2.jpeg', import.meta.url).href;
const groveImage = new URL('../../identity/Nakhyl-zone-9.jpeg', import.meta.url).href;
const loungeImage = new URL('../../identity/Nakhyl-zone-1.jpeg', import.meta.url).href;
const fireImage = new URL('../../identity/Nakhyl-zone-5.jpeg', import.meta.url).href;
const seaImage = new URL('../../identity/Nakhyl-zone-16.jpeg', import.meta.url).href;
const entranceImage = new URL('../../identity/Nakhyl-zone-12.jpeg', import.meta.url).href;
const brandBoardImage = new URL('../../identity/Nakhyl-zone-20.jpeg', import.meta.url).href;

const SOCIAL_IMAGES = [
  new URL('../../identity/Nakhyl-zone-3.jpeg', import.meta.url).href,
  new URL('../../identity/Nakhyl-zone-4.jpeg', import.meta.url).href,
  new URL('../../identity/Nakhyl-zone-7.jpeg', import.meta.url).href,
  new URL('../../identity/Nakhyl-zone-10.jpeg', import.meta.url).href,
];

const EXPERIENCE_CARDS = [
  {
    title: 'palm-grove work sessions',
    kicker: 'day rhythm',
    body: 'Quiet shaded tables, power-ready corners, low seating, and enough room to move from focused work into slow conversation.',
    image: groveImage,
  },
  {
    title: 'floor-level hospitality',
    kicker: 'bedouin ritual',
    body: 'Handwoven rugs, generous cushions, ember-brewed Habak tea, and a hosting style that feels personal rather than transactional.',
    image: loungeImage,
  },
  {
    title: 'campfire acoustic circles',
    kicker: 'night rhythm',
    body: 'Unamplified music, candle-level light, and intimate gathering formats that keep the courtyard calm after sunset.',
    image: fireImage,
  },
];

const JOURNEY = [
  {
    icon: MapPin,
    title: 'arrive from the city grid',
    text: 'A visible, easy-to-reach entrance that quickly shifts guests away from Dahab street noise.',
  },
  {
    icon: ShieldCheck,
    title: 'choose the right pocket',
    text: 'Work tables, low seating, cinema corners, and fire circles are separated so each visit has a natural flow.',
  },
  {
    icon: CalendarDays,
    title: 'reserve the next ritual',
    text: 'Guests can move from discovery into a WhatsApp handoff for cinema nights, acoustic sessions, or private gatherings.',
  },
];

const RITUALS = [
  ['mon / wed', 'Cinema Wadi', 'Independent films projected in the courtyard with reserved cushions and a soft arrival window.'],
  ['daily', 'quiet work hours', 'Palm shade, cold drinks, stable tables, and a low-stimulation layout for nomads and makers.'],
  ['thu', 'acoustic fire circle', 'Oud lines, hand percussion, shared tea, and no raised stage between guests and musicians.'],
  ['sunrise', 'Habak tea reset', 'A grounded morning service built around mountain herbs, open air, and a slower first hour.'],
];

const cx = (...classes) => classes.filter(Boolean).join(' ');
const mistUnderline =
  'relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-px after:w-24 after:bg-[#B2EBF2]/70 after:shadow-[0_0_18px_rgba(178,235,242,0.45)] after:content-[""]';

export default function Home() {
  const [isNight, setIsNight] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isCampfireOpen, setIsCampfireOpen] = useState(false);
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
        ? 'bg-[#111B24]/88 border-[#B2EBF2]/18 shadow-[inset_0_1px_0_rgba(224,247,250,0.08)]'
        : 'bg-[radial-gradient(circle_at_82%_0%,rgba(224,247,250,0.22),rgba(255,255,255,0.46)_38%,rgba(255,255,255,0.34)_100%)] border-[#B2EBF2]/45 shadow-[inset_0_1px_0_rgba(255,255,255,0.42)]',
      panelSolid: isNight
        ? 'bg-[radial-gradient(circle_at_86%_0%,rgba(178,235,242,0.08),rgba(16,25,34,1)_42%)] border-[#B2EBF2]/16'
        : 'bg-[radial-gradient(circle_at_86%_0%,rgba(224,247,250,0.20),rgba(238,227,215,0.96)_40%)] border-[#B2EBF2]/38',
      muted: isNight ? 'text-[#F4EBE1]/70' : 'text-[#2D4A3E]/70',
      hairline: isNight ? 'border-[#B2EBF2]/16' : 'border-[#B2EBF2]/45',
      heroOverlay: isNight
        ? 'bg-[linear-gradient(90deg,rgba(10,17,24,0.96)_0%,rgba(10,17,24,0.76)_46%,rgba(10,17,24,0.18)_100%)]'
        : 'bg-[linear-gradient(90deg,rgba(244,235,225,0.98)_0%,rgba(244,235,225,0.78)_47%,rgba(244,235,225,0.12)_100%)]',
    }),
    [isNight],
  );

  const handleReservation = () => {
    const message = encodeURIComponent(
      [
        'Marhaba Nakhyl Zone.',
        'I would like to plan a visit to the cultural oasis.',
        'Please share availability for work sessions, Cinema Wadi, or the acoustic fire circle.',
      ].join('\n'),
    );

    window.open(`https://api.whatsapp.com/send?phone=201000000000&text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className={cx('min-h-screen overflow-hidden font-sans antialiased transition-colors duration-700', palette.page)}>
      <section className="relative min-h-[calc(100vh-6rem)] overflow-hidden border-b border-current/10">
        <img
          src={heroImage}
          alt="Nakhyl Zone palm courtyard with shaded seating in Dahab"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className={cx('absolute inset-0', palette.heroOverlay)} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(217,119,6,0.18),transparent_32%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_14%,rgba(178,235,242,0.20),transparent_30%)]" />

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl grid-cols-1 gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.55fr)] lg:px-10">
          <div className="flex max-w-3xl flex-col justify-center py-16 lg:py-24">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em]">
              <span className="rounded-full border border-[#B2EBF2]/35 bg-[#E0F7FA]/10 px-4 py-2 backdrop-blur-md">
                Dahab cultural oasis
              </span>
              <span className={cx('inline-flex items-center gap-2', palette.muted)}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D97706]" />
                captured from real venue imagery
              </span>
            </div>

            <h1 className="max-w-3xl font-serif text-5xl font-light lowercase leading-[1.04] tracking-normal [text-shadow:0_0_24px_rgba(178,235,242,0.16)] sm:text-6xl lg:text-7xl">
              a quiet palm sanctuary tucked inside dahab.
            </h1>
            <p className={cx('mt-7 max-w-2xl text-base leading-8 tracking-wide sm:text-lg', palette.muted)}>
              Nakhyl Zone blends Sinai hospitality, low floor seating, acoustic nights, open-air cinema, and nomad-ready work pockets into one grounded courtyard experience.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleReservation}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[1.4rem_0.8rem_1.8rem_1rem] bg-[#D97706] px-6 text-xs font-bold uppercase tracking-widest text-[#0A1118] shadow-[0_18px_48px_rgba(217,119,6,0.28)] transition hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:ring-offset-2 focus:ring-offset-transparent"
              >
                reserve by whatsapp
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
              <a
                href="#experience"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[0.8rem_1.4rem_1rem_1.8rem] border border-[#B2EBF2]/40 bg-[#E0F7FA]/10 px-6 text-xs font-bold uppercase tracking-widest backdrop-blur-md transition hover:bg-[#E0F7FA]/16 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              >
                explore the courtyard
              </a>
            </div>
          </div>

          <aside className="flex items-end lg:items-center">
            <div className={cx('w-full rounded-[2.6rem_1.2rem_3.4rem_1.6rem] border p-4 shadow-2xl backdrop-blur-xl', palette.panel)}>
              <div className="overflow-hidden rounded-[2rem_0.9rem_2.8rem_1.2rem]">
                <img
                  src={entranceImage}
                  alt="Nakhyl Zone entrance with warm stone and yellow-framed windows"
                  className="h-72 w-full object-cover sm:h-96 lg:h-[28rem]"
                />
              </div>
              <div className="grid grid-cols-3 gap-3 pt-4">
                {[
                  ['28.5109 N', 'maps point'],
                  [dahabTime || '00:00', 'dahab time'],
                  ['Mar 2026', 'visual set'],
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

      <section className={cx('border-b px-5 py-4 sm:px-8 lg:px-10', palette.hairline)}>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsAudioPlaying((value) => !value)}
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-current/15 bg-current/[0.04] transition hover:bg-current/[0.09] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              aria-label={isAudioPlaying ? 'Pause oasis soundscape preview' : 'Play oasis soundscape preview'}
            >
              {isAudioPlaying ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
            </button>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em]">listen to the oasis right now</p>
              <p className={cx('mt-1 text-sm leading-6', palette.muted)}>
                A tactile preview module for palm wind, embers, and faint acoustic strings.
              </p>
            </div>
          </div>

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

      <section id="experience" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">first-shot impact</span>
            <h2 className={cx('mt-4 font-serif text-4xl font-light lowercase leading-tight sm:text-5xl', mistUnderline)}>
              every scroll reveals another hidden courtyard.
            </h2>
          </div>
          <p className={cx('max-w-2xl text-sm leading-7 tracking-wide lg:justify-self-end', palette.muted)}>
            The home page now uses the brand guide's raw contour principle: asymmetric frames, warm sand and palm contrast, amber action points, and real Google Maps venue captures instead of generic placeholders.
          </p>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {EXPERIENCE_CARDS.map((card, index) => (
            <article
              key={card.title}
              className={cx(
                'group min-h-[31rem] overflow-hidden border bg-[radial-gradient(circle_at_85%_0%,rgba(224,247,250,0.12),rgba(255,255,255,0.025)_36%)] shadow-xl transition duration-500 hover:-translate-y-1',
                palette.hairline,
                index === 0 && 'rounded-[3rem_1.2rem_2rem_1.5rem]',
                index === 1 && 'rounded-[1.4rem_3rem_1.8rem_2.4rem]',
                index === 2 && 'rounded-[2.4rem_1.6rem_3rem_1.1rem]',
              )}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={card.image}
                  alt={`${card.title} at Nakhyl Zone`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D97706]">{card.kicker}</span>
                <h3 className="mt-3 font-serif text-3xl font-light lowercase leading-tight">{card.title}</h3>
                <p className={cx('mt-4 text-sm leading-7', palette.muted)}>{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={cx('border-y px-5 py-20 sm:px-8 lg:px-10', palette.hairline)}>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[1.4rem_3.2rem_2.6rem_1.2rem] border border-[#B2EBF2]/45">
            <img src={seaImage} alt="Dahab coastline near Nakhyl Zone" className="h-[32rem] w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,17,24,0.72),rgba(10,17,24,0.06))]" />
            <div className="absolute bottom-5 left-5 right-5 rounded-[1.2rem_0.7rem_1.6rem_0.9rem] border border-[#B2EBF2]/35 bg-[#0A1118]/45 p-5 text-[#F4EBE1] backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">accessible sanctuary</p>
              <p className="mt-2 font-serif text-2xl lowercase">steps from the water, emotionally far from the noise.</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">optimized guest flow</span>
            <h2 className={cx('mt-4 font-serif text-4xl font-light lowercase leading-tight sm:text-5xl', mistUnderline)}>
              from map discovery to confirmed visit in three clear moves.
            </h2>
            <div className="mt-8 space-y-4">
              {JOURNEY.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.title} className={cx('flex gap-4 rounded-[1.8rem_0.9rem_2.2rem_1.1rem] border p-5', palette.panelSolid)}>
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D97706]/15 text-[#D97706]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl lowercase">{step.title}</h3>
                      <p className={cx('mt-1 text-sm leading-6', palette.muted)}>{step.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className={cx('rounded-[2.6rem_1.4rem_3.4rem_1.7rem] border p-6 sm:p-8 lg:col-span-5', palette.panelSolid)}>
            <div className="flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">ambient state</span>
                <h2 className={cx('mt-3 font-serif text-3xl font-light lowercase', mistUnderline)}>chase sun or follow sparks.</h2>
              </div>
              <button
                type="button"
                onClick={() => setIsNight((value) => !value)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-current/15 bg-current/[0.05] transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                aria-label={isNight ? 'Switch to day mode' : 'Switch to night mode'}
              >
                {isNight ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
              </button>
            </div>
            <p className={cx('mt-5 text-sm leading-7', palette.muted)}>
              The interface changes the same way the venue does: sand and palm for bright work sessions, deep indigo and amber for the fire-lit evening program.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {[
                [Wifi, 'nomad ready', 'quiet work pockets'],
                [Users, 'community', 'hosted circles'],
                [Headphones, 'low noise', 'acoustic-first nights'],
                [Sparkles, 'premium raw', 'organic visual system'],
              ].map(([Icon, label, text]) => (
                <div key={label} className="rounded-[1.2rem_0.7rem_1.4rem_0.9rem] border border-[#B2EBF2]/28 bg-[#E0F7FA]/[0.05] p-4">
                  <Icon className="h-5 w-5 text-[#D97706]" aria-hidden="true" />
                  <p className="mt-3 text-xs font-bold uppercase tracking-widest">{label}</p>
                  <p className={cx('mt-1 text-xs leading-5', palette.muted)}>{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {RITUALS.map(([tag, title, text]) => (
              <article key={title} className={cx('rounded-[1.8rem_0.9rem_2.4rem_1.2rem] border p-6', palette.panel)}>
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">{tag}</span>
                <h3 className={cx('mt-4 font-serif text-2xl font-light lowercase', mistUnderline)}>{title}</h3>
                <p className={cx('mt-3 text-sm leading-7', palette.muted)}>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={cx('border-y px-5 py-20 sm:px-8 lg:px-10', palette.hairline)}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">authentic social stream</span>
              <h2 className={cx('mt-4 font-serif text-4xl font-light lowercase', mistUnderline)}>real textures, real courtyard proof.</h2>
            </div>
            <button
              type="button"
              onClick={() => setIsCampfireOpen(true)}
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[1rem_1.8rem_1.3rem_0.9rem] border border-[#D97706]/40 bg-[#D97706]/10 px-5 text-xs font-bold uppercase tracking-widest text-[#D97706] transition hover:bg-[#D97706] hover:text-[#0A1118] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            >
              <Flame className="h-4 w-4" aria-hidden="true" />
              open campfire story
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SOCIAL_IMAGES.map((image, index) => (
              <div
                key={image}
                className={cx(
                  'overflow-hidden border border-[#B2EBF2]/40 bg-[#E0F7FA]/[0.04]',
                  index % 2 === 0 ? 'rounded-[2.2rem_0.9rem_2.8rem_1.4rem]' : 'rounded-[0.9rem_2.2rem_1.4rem_2.8rem]',
                )}
              >
                <img src={image} alt="Nakhyl Zone courtyard social proof" className="h-72 w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>

          <div className={cx('mt-6 grid gap-4 rounded-[2.4rem_1rem_3rem_1.4rem] border p-5 sm:grid-cols-[0.8fr_1.2fr]', palette.panelSolid)}>
            <img src={brandBoardImage} alt="Nakhyl Zone brand board and design references" className="h-52 w-full rounded-[1.6rem_0.8rem_2rem_1rem] object-cover" loading="lazy" />
            <div className="flex flex-col justify-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">brand system applied</span>
              <p className="mt-3 font-serif text-2xl font-light lowercase leading-snug">
                sand, palm, indigo, and amber now drive every visual decision instead of living only in documentation.
              </p>
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
            <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">virtual campfire</span>
            <h2 id="campfire-title" className="mt-4 max-w-lg font-serif text-4xl font-light lowercase leading-tight">
              the hospitality ritual at the center of the courtyard.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#2D4A3E]/75">
              At Nakhyl Zone, the flame is the arrival point: tea is brewed slowly, guests settle at floor level, and music stays human-scale. The digital experience now mirrors that rhythm with warmer interactions, clearer booking intent, and quieter navigation.
            </p>
            <div className="mt-6 rounded-[1.6rem_0.8rem_2rem_1rem] border border-[#2D4A3E]/15 bg-[#2D4A3E]/5 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#D97706]">guest promise</p>
              <p className="mt-2 text-sm leading-7 text-[#2D4A3E]/75">
                No loud beachfront clutter. No remote-camp friction. Just an accessible city sanctuary built from palm shade, acoustic rituals, and attentive local hosting.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
