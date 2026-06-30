import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Flame,
  Mail,
  MapPin,
  Moon,
  Pause,
  Phone,
  Play,
  ShieldCheck,
  Sun,
  X,
} from 'lucide-react';

const courtyardImage = new URL('../../identity/Nakhyl-zone-11.jpeg', import.meta.url).href;
const seatingImage = new URL('../../identity/Nakhyl-zone-14.jpeg', import.meta.url).href;
const entranceImage = new URL('../../identity/Nakhyl-zone-20.jpeg', import.meta.url).href;

const DOCUMENTS = [
  {
    id: 'privacy',
    label: 'Privacy',
    eyebrow: 'data rights',
    title: 'privacy framework',
    updated: 'June 2026',
    summary:
      'How we collect, protect, and respond to guest information across reservations, direct messages, and digital service touchpoints.',
    sections: [
      {
        heading: 'What we collect',
        body:
          'We only request the details needed to confirm visits, manage event capacity, respond to questions, and improve the reliability of our website experience.',
      },
      {
        heading: 'How it is protected',
        body:
          'Reservation and contact information is handled through limited-access operational channels. We do not sell guest details or distribute them to unrelated commercial lists.',
      },
      {
        heading: 'Your control',
        body:
          'Guests may request correction, deletion, or a copy of their stored contact records by writing to the legal operations address listed on this page.',
      },
    ],
  },
  {
    id: 'terms',
    label: 'Terms',
    eyebrow: 'guest agreement',
    title: 'terms of sanctuary',
    updated: 'June 2026',
    summary:
      'The practical ground rules for using this website, reserving space, and visiting Nakhyl Zone as a shared cultural courtyard.',
    sections: [
      {
        heading: 'Reservations',
        body:
          'Reserved seating, gathering slots, and Cinema Wadi places are confirmed after direct team acknowledgement. Late arrivals may be released after the stated hold window.',
      },
      {
        heading: 'Shared space',
        body:
          'Guests are expected to protect the quiet rhythm of work pockets, low seating areas, palm groves, and evening circles with respectful conduct.',
      },
      {
        heading: 'Content and imagery',
        body:
          'Commercial filming, staged productions, and brand activations require prior approval so the privacy and atmosphere of the venue remain intact.',
      },
    ],
  },
  {
    id: 'community',
    label: 'Community',
    eyebrow: 'conduct code',
    title: 'nomad community code',
    updated: 'June 2026',
    summary:
      'A concise standard for the guests, remote workers, artists, and friends sharing Nakhyl Zone throughout the day and evening.',
    sections: [
      {
        heading: 'Cultural care',
        body:
          'Treat Sinai hospitality, handmade objects, seating textiles, plants, and gathering areas as living parts of the experience rather than props.',
      },
      {
        heading: 'Quiet productivity',
        body:
          'Calls, laptop work, and group sessions should stay considerate of nearby guests. Headphones and modest volume keep the space useful for everyone.',
      },
      {
        heading: 'Fair contribution',
        body:
          'The courtyard is sustained by its kitchen, drinks, events, and local team. Outside catering and unmanaged commercial activity are discouraged.',
      },
    ],
  },
];

const TRUST_ITEMS = [
  ['Verified venue profile', 'Google Maps visual set captured Mar 2026'],
  ['Direct support channel', 'Legal and guest operations routed to one desk'],
  ['Guest data principle', 'Minimum collection, purpose-bound handling'],
];

const OPERATIONS = [
  {
    icon: Clock3,
    title: 'oasis hours',
    rows: [
      ['Day rhythm', '08:00 - 17:00'],
      ['Night rhythm', '17:00 - 02:00'],
      ['Cinema Wadi', 'Mon and Thu'],
    ],
  },
  {
    icon: Phone,
    title: 'contact directory',
    rows: [
      ['Nomad concierge', '+20 100 000 0000'],
      ['Legal operations', 'sanctuary@nakhylzonedahab.com'],
      ['Response window', 'within 2 business days'],
    ],
  },
  {
    icon: ShieldCheck,
    title: 'registry notes',
    rows: [
      ['Operating area', 'Dahab, South Sinai'],
      ['Guest standard', 'Respectful shared courtyard'],
      ['Last review', 'June 2026'],
    ],
  },
];

const cx = (...classes) => classes.filter(Boolean).join(' ');

export default function Compliance() {
  const [isNight, setIsNight] = useState(false);
  const [activeDocument, setActiveDocument] = useState(DOCUMENTS[0].id);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isCampfireOpen, setIsCampfireOpen] = useState(false);

  const activeContent = useMemo(
    () => DOCUMENTS.find((document) => document.id === activeDocument) ?? DOCUMENTS[0],
    [activeDocument],
  );

  const palette = useMemo(
    () => ({
      page: isNight ? 'bg-[#0A1118] text-[#F4EBE1]' : 'bg-[#F4EBE1] text-[#2D4A3E]',
      panel: isNight ? 'border-[#F4EBE1]/12 bg-[#111B24]/90' : 'border-[#2D4A3E]/14 bg-white/45',
      panelSolid: isNight ? 'border-[#F4EBE1]/12 bg-[#101922]' : 'border-[#2D4A3E]/14 bg-[#EEE3D7]',
      soft: isNight ? 'bg-[#F4EBE1]/6' : 'bg-[#2D4A3E]/6',
      muted: isNight ? 'text-[#F4EBE1]/70' : 'text-[#2D4A3E]/68',
      hairline: isNight ? 'border-[#F4EBE1]/12' : 'border-[#2D4A3E]/12',
      heroOverlay: isNight
        ? 'bg-[linear-gradient(90deg,rgba(10,17,24,0.96)_0%,rgba(10,17,24,0.78)_50%,rgba(10,17,24,0.28)_100%)]'
        : 'bg-[linear-gradient(90deg,rgba(244,235,225,0.98)_0%,rgba(244,235,225,0.78)_52%,rgba(244,235,225,0.2)_100%)]',
    }),
    [isNight],
  );

  return (
    <main className={cx('min-h-screen overflow-hidden font-sans antialiased transition-colors duration-700', palette.page)}>
      <section className="relative min-h-[42rem] overflow-hidden border-b border-current/10">
        <img
          src={courtyardImage}
          alt="Nakhyl Zone courtyard seating and palms in Dahab"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className={cx('absolute inset-0', palette.heroOverlay)} />

        <div className="relative z-10 mx-auto grid min-h-[42rem] max-w-7xl grid-cols-1 gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(340px,0.58fr)] lg:px-10">
          <div className="flex max-w-3xl flex-col justify-center py-12">
            <div className="mb-8 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em]">
              <span className="rounded-full border border-current/15 bg-current/[0.05] px-4 py-2 backdrop-blur-md">
                Nakhyl Zone Dahab
              </span>
              <span className={cx('inline-flex items-center gap-2', palette.muted)}>
                <CheckCircle2 className="h-3.5 w-3.5 text-[#D97706]" aria-hidden="true" />
                compliance desk
              </span>
            </div>

            <h1 className="max-w-3xl font-serif text-5xl font-light lowercase leading-[1.04] tracking-normal sm:text-6xl lg:text-7xl">
              clear policies for a quiet cultural oasis.
            </h1>
            <p className={cx('mt-7 max-w-2xl text-base leading-8 tracking-wide sm:text-lg', palette.muted)}>
              Practical privacy, guest conduct, and operating details for visitors, collaborators, and remote workers sharing the courtyard.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#documents"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[1.4rem_0.8rem_1.8rem_1rem] bg-[#D97706] px-6 text-xs font-bold uppercase tracking-widest text-[#0A1118] shadow-[0_18px_48px_rgba(217,119,6,0.28)] transition hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:ring-offset-2 focus:ring-offset-transparent"
              >
                view documents
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:sanctuary@nakhylzonedahab.com"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[0.8rem_1.4rem_1rem_1.8rem] border border-current/15 bg-current/[0.05] px-6 text-xs font-bold uppercase tracking-widest backdrop-blur-md transition hover:bg-current/[0.09] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              >
                contact legal
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <aside className="flex items-end lg:items-center">
            <div className={cx('w-full rounded-[2.6rem_1.2rem_3.4rem_1.6rem] border p-4 shadow-2xl backdrop-blur-xl', palette.panel)}>
              <div className="overflow-hidden rounded-[2rem_0.9rem_2.8rem_1.2rem]">
                <img
                  src={entranceImage}
                  alt="Nakhyl Zone venue sign and entrance details"
                  className="h-72 w-full object-cover sm:h-96 lg:h-[27rem]"
                />
              </div>
              <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3">
                {[
                  ['Mar 2026', 'visual record'],
                  ['Dahab', 'operating area'],
                  ['3 docs', 'policy set'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[1rem_0.6rem_1.2rem_0.7rem] border border-current/10 bg-current/[0.04] p-3">
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
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
                {isAudioPlaying ? 'Ambient layer active: palm wind, embers, and low strings.' : 'A calm context layer for reading policy details.'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setIsCampfireOpen(true)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[1rem_0.6rem_1.2rem_0.8rem] border border-[#D97706]/30 bg-[#D97706]/10 px-4 text-xs font-bold uppercase tracking-widest text-[#D97706] transition hover:bg-[#D97706]/18 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            >
              <Flame className="h-4 w-4" aria-hidden="true" />
              campfire note
            </button>
            <button
              type="button"
              onClick={() => setIsNight((value) => !value)}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.7rem_1rem_0.9rem_1.2rem] border border-current/15 bg-current/[0.04] px-4 text-xs font-bold uppercase tracking-widest transition hover:bg-current/[0.09] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              aria-pressed={isNight}
            >
              {isNight ? <Sun className="h-4 w-4 text-[#D97706]" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
              {isNight ? 'day state' : 'night state'}
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10" aria-labelledby="trust-heading">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">guest assurance</p>
              <h2 id="trust-heading" className="mt-3 max-w-xl font-serif text-4xl font-light lowercase leading-tight sm:text-5xl">
                transparent enough for planning, warm enough for hospitality.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {TRUST_ITEMS.map(([title, detail]) => (
                <div key={title} className={cx('rounded-[1.4rem_0.8rem_1.8rem_1rem] border p-5', palette.panelSolid)}>
                  <CheckCircle2 className="h-5 w-5 text-[#D97706]" aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-bold uppercase tracking-[0.18em]">{title}</h3>
                  <p className={cx('mt-3 text-sm leading-6 tracking-wide', palette.muted)}>{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="documents" className={cx('border-y px-5 py-16 sm:px-8 lg:px-10', palette.hairline)} aria-labelledby="documents-heading">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[300px_minmax(0,1fr)]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">policy library</p>
            <h2 id="documents-heading" className="mt-3 font-serif text-4xl font-light lowercase leading-tight">
              choose a document.
            </h2>
            <p className={cx('mt-4 text-sm leading-7 tracking-wide', palette.muted)}>
              Each section is intentionally short, written for fast scanning, and connected to a direct response channel.
            </p>

            <div className="mt-8 flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0" role="tablist" aria-label="Compliance documents">
              {DOCUMENTS.map((document) => {
                const isActive = activeDocument === document.id;
                return (
                  <button
                    key={document.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`${document.id}-panel`}
                    id={`${document.id}-tab`}
                    onClick={() => setActiveDocument(document.id)}
                    className={cx(
                      'min-w-44 rounded-[1rem_0.7rem_1.2rem_0.8rem] border px-4 py-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#D97706] lg:min-w-0',
                      isActive ? 'border-[#D97706] bg-[#D97706]/12 text-[#D97706]' : 'border-current/12 bg-current/[0.035] hover:bg-current/[0.07]',
                    )}
                  >
                    <span className="block text-[10px] font-bold uppercase tracking-[0.24em] opacity-70">{document.eyebrow}</span>
                    <span className="mt-1 block text-sm font-bold uppercase tracking-[0.2em]">{document.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <article
            id={`${activeContent.id}-panel`}
            role="tabpanel"
            aria-labelledby={`${activeContent.id}-tab`}
            className={cx('rounded-[2.6rem_1.1rem_3.4rem_1.5rem] border p-5 shadow-xl sm:p-8 lg:p-10', palette.panelSolid)}
          >
            <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_260px]">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em]">
                  <span className="inline-flex items-center gap-2 rounded-full border border-current/12 bg-current/[0.04] px-3 py-2">
                    <FileText className="h-3.5 w-3.5 text-[#D97706]" aria-hidden="true" />
                    {activeContent.eyebrow}
                  </span>
                  <span className={palette.muted}>updated {activeContent.updated}</span>
                </div>
                <h3 className="mt-5 font-serif text-4xl font-light lowercase leading-tight sm:text-5xl">{activeContent.title}</h3>
                <p className={cx('mt-5 max-w-2xl text-base leading-8 tracking-wide', palette.muted)}>{activeContent.summary}</p>

                <div className="mt-9 space-y-4">
                  {activeContent.sections.map((section, index) => (
                    <section key={section.heading} className={cx('rounded-[1.4rem_0.8rem_1.8rem_1rem] border p-5', palette.soft, palette.hairline)}>
                      <div className="flex gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D97706] font-mono text-xs font-bold text-[#0A1118]">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h4 className="font-serif text-2xl font-light lowercase leading-snug">{section.heading}</h4>
                          <p className={cx('mt-2 text-sm leading-7 tracking-wide', palette.muted)}>{section.body}</p>
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
              </div>

              <aside className={cx('rounded-[1.8rem_0.9rem_2.4rem_1.2rem] border p-4', palette.panel)}>
                <img
                  src={seatingImage}
                  alt="Low seating and woven textures at Nakhyl Zone"
                  className="h-52 w-full rounded-[1.3rem_0.7rem_1.8rem_0.9rem] object-cover"
                  loading="lazy"
                />
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#D97706]">response route</p>
                    <p className={cx('mt-2 text-sm leading-6 tracking-wide', palette.muted)}>
                      Send policy requests by email so the team can track, confirm, and close the loop clearly.
                    </p>
                  </div>
                  <a
                    href="mailto:sanctuary@nakhylzonedahab.com"
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-[1rem_0.6rem_1.2rem_0.8rem] bg-[#2D4A3E] px-4 text-xs font-bold uppercase tracking-widest text-[#F4EBE1] transition hover:bg-[#D97706] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                  >
                    email legal
                    <Mail className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </aside>
            </div>
          </article>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10" aria-labelledby="operations-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">registry and operations</p>
              <h2 id="operations-heading" className="mt-3 font-serif text-4xl font-light lowercase leading-tight sm:text-5xl">
                useful details, no maze.
              </h2>
            </div>
            <a
              href="https://www.google.com/maps/place/Nakhyl+Zone+Dahab+%E2%80%93+Cultural+Oasis+%F0%9F%8C%B4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[0.8rem_1.2rem_1rem_1.4rem] border border-current/15 bg-current/[0.04] px-4 text-xs font-bold uppercase tracking-widest transition hover:bg-current/[0.09] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            >
              maps profile
              <MapPin className="h-4 w-4 text-[#D97706]" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {OPERATIONS.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className={cx('rounded-[2rem_1rem_2.6rem_1.4rem] border p-6', palette.panelSolid)}>
                  <Icon className="h-6 w-6 text-[#D97706]" aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-2xl font-light lowercase">{item.title}</h3>
                  <dl className="mt-5 space-y-3">
                    {item.rows.map(([label, value]) => (
                      <div key={label} className="flex gap-4 border-b border-current/10 pb-3 last:border-b-0 last:pb-0">
                        <dt className={cx('min-w-24 text-[10px] font-bold uppercase tracking-[0.22em]', palette.muted)}>{label}</dt>
                        <dd className="min-w-0 flex-1 break-words text-right text-xs font-bold uppercase tracking-[0.12em]">{value}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 lg:px-10">
        <div className={cx('mx-auto grid max-w-7xl gap-6 rounded-[3rem_1.4rem_3.6rem_1.8rem] border p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center', palette.panel)}>
          <div>
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#D97706]">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              next step
            </div>
            <h2 className="mt-3 font-serif text-3xl font-light lowercase leading-tight sm:text-4xl">
              return to the courtyard when the paperwork is clear.
            </h2>
            <p className={cx('mt-3 max-w-2xl text-sm leading-7 tracking-wide', palette.muted)}>
              Move back into the main experience, plan a visit, or contact the team for a specific policy request.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[1.4rem_0.8rem_1.8rem_1rem] bg-[#D97706] px-6 text-xs font-bold uppercase tracking-widest text-[#0A1118] shadow-[0_18px_48px_rgba(217,119,6,0.22)] transition hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            >
              oasis home
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/connect"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[0.8rem_1.4rem_1rem_1.8rem] border border-current/15 bg-current/[0.04] px-6 text-xs font-bold uppercase tracking-widest transition hover:bg-current/[0.09] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            >
              connect wire
            </Link>
          </div>
        </div>
      </section>

      {isCampfireOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1118]/75 px-5 py-8 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="campfire-title">
          <div className="max-h-full w-full max-w-xl overflow-y-auto rounded-[2.8rem_1.2rem_3.4rem_1.6rem] border border-[#F4EBE1]/14 bg-[#0A1118] p-6 text-[#F4EBE1] shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D97706]">virtual campfire</p>
                <h2 id="campfire-title" className="mt-3 font-serif text-4xl font-light lowercase leading-tight">
                  hospitality is the first policy.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setIsCampfireOpen(false)}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#F4EBE1]/15 bg-[#F4EBE1]/8 transition hover:bg-[#F4EBE1]/14 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                aria-label="Close campfire note"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
            <p className="mt-5 text-sm leading-7 tracking-wide text-[#F4EBE1]/72">
              The compliance layer exists to protect the same thing the courtyard protects: calm, consent, and generous shared presence. Habak tea, quiet work, cinema nights, and acoustic circles all depend on clear boundaries guests can understand quickly.
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
