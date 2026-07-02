import React, { useEffect, useMemo, useState } from 'react';
import {
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Flame,
  MapPin,
  MessageCircle,
  Moon,
  Pause,
  Play,
  Sparkles,
  Sun,
  Ticket,
  Users,
  X,
} from 'lucide-react';

const heroImage = new URL('../../identity/Nakhyl-zone-2.jpeg', import.meta.url).href;
const courtyardImage = new URL('../../identity/Nakhyl-zone-9.jpeg', import.meta.url).href;
const cinemaImage = new URL('../../identity/Nakhyl-zone-10.jpeg', import.meta.url).href;
const socialImages = [
  new URL('../../identity/Nakhyl-zone-1.jpeg', import.meta.url).href,
  new URL('../../identity/Nakhyl-zone-4.jpeg', import.meta.url).href,
  new URL('../../identity/Nakhyl-zone-7.jpeg', import.meta.url).href,
  new URL('../../identity/Nakhyl-zone-14.jpeg', import.meta.url).href,
];

const WEEKLY_EVENTS = [
  {
    id: 'mon',
    day: 'Monday',
    time: '19:30',
    title: 'Cinema Wadi: Egyptian Masterpieces',
    host: 'Cairo Film Archive',
    description:
      'A slow open-air screening series for Egyptian classics, served with hot Habak tea and low floor seating under the palm canopy.',
    tag: 'Film',
    capacity: '18 places',
  },
  {
    id: 'tue',
    day: 'Tuesday',
    time: '17:00',
    title: 'Nomad Slow Talks',
    host: 'Nakhyl Community',
    description:
      'Micro-sessions for founders, creators, and travelers. Short stories, practical exchanges, and local dates around shared tables.',
    tag: 'Culture',
    capacity: '24 places',
  },
  {
    id: 'wed',
    day: 'Wednesday',
    time: '20:00',
    title: 'Cinema Wadi: Global Indie',
    host: 'Zawya Cinema Partners',
    description:
      'Contemporary independent films projected against a raw sandstone wall, with quiet arrival windows and reserved cushion zones.',
    tag: 'Film',
    capacity: '16 places',
  },
  {
    id: 'thu',
    day: 'Thursday',
    time: '21:00',
    title: 'Bonfire Acoustic Circle',
    host: 'Bedouin Musicians & Global Nomads',
    description:
      'The weekly center of gravity: oud lines, hand percussion, shared tea, and acoustic collaboration without a raised stage.',
    tag: 'Music',
    capacity: '12 places',
  },
  {
    id: 'sat',
    day: 'Saturday',
    time: '06:30',
    title: 'Sunrise Soundscapes',
    host: 'Sheikh Mansour',
    description:
      'Ambient field recordings, a morning fire-brewing ceremony, and a calm reset before Dahab wakes into the day.',
    tag: 'Wellness',
    capacity: '14 places',
  },
];

const SEATING_ZONES = [
  {
    id: 'zone-campfire',
    name: 'Inner Fire Circle',
    capacity: '12 seats left',
    description: 'Closest to the acoustic hearth with low handmade Bedouin rugs.',
    premium: true,
  },
  {
    id: 'zone-palm-north',
    name: 'Palm Grove North',
    capacity: '8 seats left',
    description: 'Shaded, quiet seating under natural fronds and canvas sails.',
    premium: false,
  },
  {
    id: 'zone-wadi-screen',
    name: 'Cinema Wadi Deck',
    capacity: 'Fully booked',
    description: 'Prime projection alignment facing the sandstone cinema wall.',
    premium: false,
  },
  {
    id: 'zone-alcove',
    name: 'Private Stone Alcove',
    capacity: '4 seats left',
    description: 'A tucked-away clay and stone niche for smaller groups.',
    premium: true,
  },
];

const JOURNEY_STEPS = [
  'Choose the gathering that matches your night',
  'Select the cushion zone that fits your group',
  'Send the request through WhatsApp for confirmation',
];

const cx = (...classes) => classes.filter(Boolean).join(' ');
const mistUnderline =
  'relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-px after:w-24 after:bg-[#B2EBF2]/70 after:shadow-[0_0_18px_rgba(178,235,242,0.42)] after:content-[""]';

export default function GatheringHub() {
  const [isNight, setIsNight] = useState(true);
  const [selectedEventId, setSelectedEventId] = useState('thu');
  const [selectedZoneId, setSelectedZoneId] = useState('zone-campfire');
  const [isCampfireOpen, setIsCampfireOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [ticketQuantity, setTicketQuantity] = useState(2);
  const [accommodation, setAccommodation] = useState('');
  const [bookingStatus, setBookingStatus] = useState('');
  const [dahabTime, setDahabTime] = useState('');

  const selectedEvent = useMemo(
    () => WEEKLY_EVENTS.find((event) => event.id === selectedEventId) || WEEKLY_EVENTS[0],
    [selectedEventId],
  );

  const selectedZone = useMemo(
    () => SEATING_ZONES.find((zone) => zone.id === selectedZoneId) || SEATING_ZONES[0],
    [selectedZoneId],
  );

  useEffect(() => {
    const updateDahabTime = () => {
      setDahabTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Cairo',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date()),
      );
    };

    updateDahabTime();
    const interval = window.setInterval(updateDahabTime, 30000);
    return () => window.clearInterval(interval);
  }, []);

  const palette = {
    page: isNight ? 'bg-[#0A1118] text-[#F4EBE1]' : 'bg-[#F4EBE1] text-[#2D4A3E]',
    panel: isNight
      ? 'bg-[#101A23]/92 border-[#B2EBF2]/18 shadow-[inset_0_1px_0_rgba(224,247,250,0.08)]'
      : 'bg-[radial-gradient(circle_at_84%_0%,rgba(224,247,250,0.20),rgba(255,255,255,0.46)_38%)] border-[#B2EBF2]/42',
    elevated: isNight
      ? 'bg-[radial-gradient(circle_at_86%_0%,rgba(178,235,242,0.08),#121E29_42%)] border-[#B2EBF2]/16'
      : 'bg-[radial-gradient(circle_at_86%_0%,rgba(224,247,250,0.18),rgba(239,229,218,0.96)_42%)] border-[#B2EBF2]/36',
    muted: isNight ? 'text-[#F4EBE1]/68' : 'text-[#2D4A3E]/68',
    hairline: isNight ? 'border-[#B2EBF2]/16' : 'border-[#B2EBF2]/42',
  };

  const handleBookingSubmit = (event) => {
    event.preventDefault();
    setBookingStatus('Preparing WhatsApp handoff...');

    window.setTimeout(() => {
      const message = encodeURIComponent(
        [
          'Marhaba Nakhyl Zone.',
          `I would like to reserve ${ticketQuantity} place(s) for ${selectedEvent.title}.`,
          `Preferred zone: ${selectedZone.name}.`,
          accommodation ? `Note: ${accommodation}` : '',
          'Please confirm availability and arrival guidance.',
        ]
          .filter(Boolean)
          .join('\n'),
      );

      window.open(`https://api.whatsapp.com/send?phone=201000000000&text=${message}`, '_blank', 'noopener,noreferrer');
      setBookingStatus('');
    }, 500);
  };

  return (
    <main className={cx('min-h-screen overflow-hidden font-sans antialiased transition-colors duration-700', palette.page)}>
      <div className="fixed right-4 top-4 z-40 flex items-center gap-2 sm:right-6 sm:top-6">
        <button
          type="button"
          onClick={() => setIsNight((value) => !value)}
          className={cx(
            'inline-flex h-11 items-center gap-2 rounded-[1.4rem_0.8rem_1.7rem_1rem] border px-4 text-[10px] font-bold uppercase tracking-widest shadow-lg backdrop-blur-md transition',
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

      <section className="relative min-h-[760px] overflow-hidden border-b border-current/10">
        <img
          src={heroImage}
          alt="Nakhyl Zone palm courtyard with open seating and natural shade"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className={cx(
            'absolute inset-0',
            isNight
              ? 'bg-[linear-gradient(90deg,rgba(10,17,24,0.94)_0%,rgba(10,17,24,0.76)_44%,rgba(10,17,24,0.2)_100%)]'
              : 'bg-[linear-gradient(90deg,rgba(244,235,225,0.96)_0%,rgba(244,235,225,0.78)_45%,rgba(244,235,225,0.14)_100%)]',
          )}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_16%,rgba(178,235,242,0.18),transparent_30%)]" />

        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-7xl flex-col justify-between px-5 py-8 sm:px-8 lg:px-10">
          <nav className="flex max-w-[calc(100%-7rem)] items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em]">
            <span className="font-serif text-2xl font-semibold lowercase tracking-normal">nakhyl zone</span>
            <span className={cx('hidden h-px w-12 sm:block', isNight ? 'bg-[#F4EBE1]/24' : 'bg-[#2D4A3E]/24')} />
            <span className={cx('hidden sm:inline', palette.muted)}>gatherings, cinema, acoustic circles</span>
          </nav>

          <div className="grid gap-10 pb-8 pt-28 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B2EBF2]/35 bg-[#E0F7FA]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                <MapPin className="h-3.5 w-3.5 text-[#D97706]" aria-hidden="true" />
                Dahab courtyard sanctuary
                <span className="opacity-50">/</span>
                {dahabTime || 'Africa/Cairo'}
              </div>

              <h1 className="max-w-4xl font-serif text-5xl font-light lowercase leading-[1.08] [text-shadow:0_0_24px_rgba(178,235,242,0.16)] sm:text-6xl lg:text-7xl">
                weekly rituals inside the palm grove.
              </h1>
              <p className={cx('mt-6 max-w-2xl text-sm leading-7 tracking-wide sm:text-base', palette.muted)}>
                Reserve a cushion for Cinema Wadi, nomad talks, sunrise soundscapes, or the Thursday acoustic circle. The flow is intentionally simple: select the night, choose your zone, and confirm through WhatsApp with the Nakhyl team.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#reserve"
                  className="inline-flex items-center justify-center gap-2 rounded-[1.5rem_0.8rem_1.9rem_1rem] bg-[#D97706] px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-[#0A1118] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#F59E0B]"
                >
                  reserve a place
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <button
                  type="button"
                  onClick={() => setIsAudioPlaying((value) => !value)}
                  className="inline-flex items-center justify-center gap-3 rounded-[1.2rem_1.8rem_0.9rem_1.4rem] border border-[#B2EBF2]/40 bg-[#E0F7FA]/10 px-6 py-4 text-[11px] font-bold uppercase tracking-widest backdrop-blur-md transition hover:bg-[#E0F7FA]/16"
                  aria-pressed={isAudioPlaying}
                >
                  {isAudioPlaying ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
                  listen to the oasis
                </button>
              </div>
            </div>

            <aside className={cx('rounded-[2rem_1rem_2.8rem_1.4rem] border p-5 shadow-2xl backdrop-blur-xl', palette.panel)}>
              <div className="flex items-center justify-between gap-4 border-b border-[#B2EBF2]/18 pb-4">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-55">Tonight's featured circle</p>
                  <h2 className="mt-1 font-serif text-2xl lowercase leading-tight">{selectedEvent.title}</h2>
                </div>
                <Flame className="h-8 w-8 shrink-0 text-[#D97706]" aria-hidden="true" />
              </div>
              <dl className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  ['Day', selectedEvent.day],
                  ['Time', selectedEvent.time],
                  ['Open', selectedEvent.capacity],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-[1rem_0.6rem_1.3rem_0.8rem] border border-[#B2EBF2]/25 bg-[#E0F7FA]/[0.06] px-3 py-4">
                    <dt className="text-[9px] font-bold uppercase tracking-widest opacity-50">{label}</dt>
                    <dd className="mt-1 text-xs font-semibold tracking-wide">{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className={cx('border-b px-5 py-5 sm:px-8 lg:px-10', palette.hairline)}>
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {JOURNEY_STEPS.map((step, index) => (
            <div key={step} className="flex items-center gap-3 text-xs tracking-wide">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D97706]/14 text-[11px] font-bold text-[#D97706]">
                0{index + 1}
              </span>
              <span className={palette.muted}>{step}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">seasonal rhythm</p>
            <h2 className={cx('mt-3 font-serif text-4xl lowercase leading-tight sm:text-5xl', mistUnderline)}>choose your gathering</h2>
          </div>
          <p className={cx('max-w-md text-sm leading-6 tracking-wide', palette.muted)}>
            A clear event matrix replaces hidden schedules and helps visitors understand the mood, timing, and capacity before they request a place.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="space-y-3">
            {WEEKLY_EVENTS.map((event) => {
              const isSelected = selectedEventId === event.id;

              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => setSelectedEventId(event.id)}
                  className={cx(
                    'group grid w-full grid-cols-[72px_minmax(0,1fr)_auto] items-center gap-4 rounded-[1.6rem_0.8rem_2.1rem_1rem] border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#D97706]',
                    isSelected
                      ? 'border-[#D97706] bg-[#D97706] text-[#0A1118] shadow-xl'
                      : cx(palette.elevated, 'hover:-translate-y-0.5 hover:border-[#B2EBF2]/60'),
                  )}
                  aria-pressed={isSelected}
                >
                  <span className="rounded-[1rem_0.5rem_1.3rem_0.7rem] bg-current/[0.08] px-3 py-3 text-center">
                    <span className="block text-[10px] font-bold uppercase tracking-widest opacity-60">{event.day.slice(0, 3)}</span>
                    <span className="mt-1 block font-mono text-xs">{event.time}</span>
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-serif text-xl lowercase leading-tight">{event.title}</span>
                    <span className="mt-1 block truncate text-[11px] font-semibold uppercase tracking-widest opacity-60">{event.host}</span>
                  </span>
                  <span className="hidden rounded-full border border-current/20 px-3 py-1 text-[9px] font-bold uppercase tracking-widest opacity-75 sm:block">
                    {event.tag}
                  </span>
                </button>
              );
            })}
          </div>

          <article className={cx('overflow-hidden rounded-[2.8rem_1.2rem_3.8rem_1.7rem] border shadow-2xl', palette.elevated)}>
            <div className="relative min-h-[240px] overflow-hidden">
              <img
                src={selectedEvent.tag === 'Film' ? cinemaImage : courtyardImage}
                alt={`${selectedEvent.title} atmosphere at Nakhyl Zone`}
                className="h-full min-h-[240px] w-full object-cover transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/88 via-[#0A1118]/28 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-[#F4EBE1]">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#D97706]">active selection</p>
                <h3 className="mt-2 max-w-2xl font-serif text-3xl lowercase leading-tight sm:text-4xl">{selectedEvent.title}</h3>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <p className={cx('text-sm leading-7 tracking-wide', palette.muted)}>{selectedEvent.description}</p>
              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                {[
                  [CalendarDays, `${selectedEvent.day} at ${selectedEvent.time}`],
                  [Users, selectedEvent.capacity],
                  [Sparkles, selectedEvent.host],
                ].map(([Icon, value]) => (
                  <div key={value} className="flex items-center gap-3 rounded-[1.2rem_0.8rem_1.5rem_1rem] border border-[#B2EBF2]/28 bg-[#E0F7FA]/[0.05] p-4">
                    <Icon className="h-4 w-4 shrink-0 text-[#D97706]" aria-hidden="true" />
                    <span className="text-xs font-semibold tracking-wide">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="reserve" className={cx('border-y px-5 py-20 sm:px-8 lg:px-10', palette.hairline)}>
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(380px,0.9fr)]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">sanctuary map</p>
            <h2 className={cx('mt-3 font-serif text-4xl lowercase leading-tight sm:text-5xl', mistUnderline)}>select your cushion zone</h2>

            <div className={cx('mt-8 rounded-[3.2rem_1.4rem_4rem_1.8rem] border p-5 sm:p-7', palette.elevated)}>
              <div className="relative grid min-h-[470px] grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="pointer-events-none absolute inset-8 hidden rounded-[45%_35%_50%_40%] border border-dashed border-[#B2EBF2]/45 sm:block" />
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 sm:block">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-[#D97706]/50 bg-[#D97706]/12 shadow-[0_0_45px_rgba(217,119,6,0.25)]">
                    <Flame className="h-8 w-8 text-[#D97706]" aria-hidden="true" />
                  </div>
                </div>

                {SEATING_ZONES.map((zone) => {
                  const isSelected = selectedZoneId === zone.id;
                  const isBooked = zone.capacity.toLowerCase().includes('booked');

                  return (
                    <button
                      key={zone.id}
                      type="button"
                      disabled={isBooked}
                      onClick={() => setSelectedZoneId(zone.id)}
                      className={cx(
                        'relative flex min-h-[180px] flex-col justify-between rounded-[1.7rem_0.8rem_2.2rem_1.1rem] border p-5 text-left transition focus:outline-none focus:ring-2 focus:ring-[#D97706]',
                        isBooked && 'cursor-not-allowed opacity-45',
                        isSelected
                          ? 'z-20 border-[#D97706] bg-[#D97706] text-[#0A1118] shadow-2xl'
                          : cx('z-0 hover:-translate-y-0.5 hover:border-[#B2EBF2]/60', isNight ? 'bg-[#0A1118]/45 border-[#B2EBF2]/14' : 'bg-[#E0F7FA]/10 border-[#B2EBF2]/36'),
                      )}
                    >
                      <span>
                        <span className="mb-3 inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest opacity-65">
                          {zone.premium && <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />}
                          {zone.premium ? 'premium zone' : 'shared zone'}
                        </span>
                        <span className="block font-serif text-2xl lowercase leading-tight">{zone.name}</span>
                        <span className="mt-3 block text-xs leading-5 opacity-70">{zone.description}</span>
                      </span>
                      <span className="mt-6 text-[10px] font-bold uppercase tracking-widest opacity-65">{zone.capacity}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleBookingSubmit}
            className={cx('rounded-[2rem_3rem_1.4rem_3.6rem] border p-6 shadow-2xl sm:p-8', palette.panel)}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">booking console</p>
                <h3 className={cx('mt-2 font-serif text-3xl lowercase leading-tight', mistUnderline)}>request your place</h3>
              </div>
              <Ticket className="h-8 w-8 text-[#D97706]" aria-hidden="true" />
            </div>

            <div className="mt-7 space-y-3 rounded-[1.4rem_0.8rem_1.8rem_1rem] border border-[#B2EBF2]/28 bg-[#E0F7FA]/[0.06] p-5">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest opacity-50">Gathering</p>
                <p className="mt-1 text-sm font-semibold tracking-wide">{selectedEvent.title}</p>
              </div>
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest opacity-50">Zone</p>
                <p className="mt-1 text-sm font-semibold tracking-wide">{selectedZone.name}</p>
              </div>
            </div>

            <label className="mt-6 block">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-65">Attendees</span>
              <select
                value={ticketQuantity}
                onChange={(event) => setTicketQuantity(Number(event.target.value))}
                className={cx(
                  'mt-2 w-full rounded-[1rem_0.6rem_1.2rem_0.8rem] border border-current/18 bg-transparent p-4 text-sm font-semibold tracking-wide outline-none transition focus:border-[#D97706]',
                  isNight ? 'text-[#F4EBE1]' : 'text-[#2D4A3E]',
                )}
              >
                {[1, 2, 3, 4, 5, 6].map((count) => (
                  <option key={count} value={count} className={isNight ? 'bg-[#0A1118]' : 'bg-[#F4EBE1]'}>
                    {count} {count === 1 ? 'person' : 'people'}
                  </option>
                ))}
              </select>
            </label>

            <label className="mt-5 block">
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-65">Access or hospitality notes</span>
              <textarea
                value={accommodation}
                onChange={(event) => setAccommodation(event.target.value)}
                rows={4}
                placeholder="Accessibility needs, tea preference, arrival timing, or group context"
                className="mt-2 w-full resize-none rounded-[1rem_0.6rem_1.3rem_0.8rem] border border-current/18 bg-transparent p-4 text-sm leading-6 tracking-wide outline-none transition placeholder:text-current/35 focus:border-[#D97706]"
              />
            </label>

            <button
              type="submit"
              className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-[1.4rem_0.8rem_1.9rem_1rem] bg-[#D97706] px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-[#0A1118] shadow-xl transition hover:-translate-y-0.5 hover:bg-[#F59E0B] focus:outline-none focus:ring-2 focus:ring-[#F4EBE1]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              send WhatsApp request
            </button>

            {bookingStatus && (
              <p className="mt-3 text-center text-[10px] font-bold uppercase tracking-widest text-[#D97706]" role="status">
                {bookingStatus}
              </p>
            )}

            <p className={cx('mt-4 text-center text-[11px] leading-5 tracking-wide', palette.muted)}>
              No payment wall. The team confirms availability, arrival instructions, and any hospitality notes directly.
            </p>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">authentic proof</p>
            <h2 className={cx('mt-3 font-serif text-4xl lowercase leading-tight sm:text-5xl', mistUnderline)}>a real courtyard, not a generic venue page</h2>
            <p className={cx('mt-5 text-sm leading-7 tracking-wide', palette.muted)}>
              The layout uses the provided Maps imagery as native visual proof: palm shade, hand-built seating, sandstone textures, and the accessible Dahab location. It keeps the enterprise polish while preserving the raw cultural atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {socialImages.map((image, index) => (
              <figure
                key={image}
                className={cx(
                  'group overflow-hidden border shadow-lg',
                  palette.hairline,
                  index === 0 && 'rounded-[2.4rem_0.9rem_1.4rem_1rem]',
                  index === 1 && 'rounded-[1rem_2rem_1rem_1.4rem]',
                  index === 2 && 'rounded-[1.2rem_1rem_2.4rem_0.9rem]',
                  index === 3 && 'rounded-[0.9rem_1.4rem_1rem_2.4rem]',
                )}
              >
                <img
                  src={image}
                  alt={`Visitor view ${index + 1} of Nakhyl Zone Dahab`}
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className={cx('border-t px-5 py-8 sm:px-8 lg:px-10', palette.hairline)}>
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setIsAudioPlaying((value) => !value)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-current/12 bg-current/[0.04] transition hover:bg-current/[0.08]"
              aria-label={isAudioPlaying ? 'Pause ambient soundscape' : 'Play ambient soundscape'}
              aria-pressed={isAudioPlaying}
            >
              {isAudioPlaying ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
            </button>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest">Listen to the oasis right now</p>
              <p className={cx('text-xs tracking-wide', palette.muted)}>
                {isAudioPlaying ? 'Ambient preview active: palm wind, ember crackle, soft strings' : 'Ambient preview ready'}
              </p>
            </div>
          </div>

          <div className="flex h-8 items-end gap-1" aria-hidden="true">
            {[8, 16, 10, 22, 12, 18, 9, 20, 13, 17].map((height, index) => (
              <span
                key={index}
                className="w-1 rounded-full bg-[#D97706] transition-all duration-300"
                style={{
                  height: isAudioPlaying ? `${height}px` : '4px',
                  animation: isAudioPlaying ? 'pulse 900ms ease-in-out infinite alternate' : 'none',
                  animationDelay: `${index * 80}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {isCampfireOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1118]/92 p-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="campfire-title"
        >
          <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[2.6rem_1.1rem_3.6rem_1.6rem] border border-[#D97706]/55 bg-[#F4EBE1] p-6 text-[#2D4A3E] shadow-2xl sm:p-9">
            <button
              type="button"
              onClick={() => setIsCampfireOpen(false)}
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#2D4A3E]/12 transition hover:bg-[#2D4A3E]/8"
              aria-label="Close campfire story"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#D97706]/15 text-[#D97706]">
              <Flame className="h-7 w-7" aria-hidden="true" />
            </div>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">Sinai hospitality code</p>
            <h2 id="campfire-title" className="mt-3 font-serif text-4xl lowercase leading-tight">
              the sacred ritual of Habak tea
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-7 tracking-wide text-[#2D4A3E]/78">
              <p>
                At Nakhyl, the fire is an invitation before it is a feature. Visitors arrive into a circle where tea, music, and conversation soften the boundary between locals, travelers, and working nomads.
              </p>
              <p>
                Habak mint and sage are served slowly, not as decoration, but as the rhythm of the place: sit low, share the warmth, and let the night unfold without a stage between people.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsCampfireOpen(false)}
              className="mt-8 inline-flex items-center justify-center rounded-[1.2rem_0.7rem_1.6rem_0.9rem] bg-[#2D4A3E] px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-[#F4EBE1] transition hover:bg-[#D97706] hover:text-[#0A1118]"
            >
              return to gatherings
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
