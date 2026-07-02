import React, { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  CalendarDays,
  Check,
  Flame,
  Headphones,
  Mail,
  MapPin,
  Moon,
  Pause,
  Phone,
  Play,
  Send,
  ShieldCheck,
  Sun,
  Users,
  Wifi,
  X,
} from 'lucide-react';

const courtyardImage = new URL('../../identity/Nakhyl-zone-8.jpeg', import.meta.url).href;
const entranceImage = new URL('../../identity/Nakhyl-zone-12.jpeg', import.meta.url).href;
const fireImage = new URL('../../identity/Nakhyl-zone-5.jpeg', import.meta.url).href;
const loungeImage = new URL('../../identity/Nakhyl-zone-1.jpeg', import.meta.url).href;
const cinemaImage = new URL('../../identity/Nakhyl-zone-14.jpeg', import.meta.url).href;
const palmImage = new URL('../../identity/Nakhyl-zone-20.jpeg', import.meta.url).href;

const PURPOSES = [
  {
    id: 'Coworking Day',
    label: 'Coworking day',
    detail: 'Quiet tables, shade, power, and a calm first landing.',
    icon: Wifi,
  },
  {
    id: 'Attend Cinema',
    label: 'Cinema Wadi',
    detail: 'Reserved cushions for open-air film nights.',
    icon: CalendarDays,
  },
  {
    id: 'Drop in for Dinner',
    label: 'Dinner visit',
    detail: 'Slow food, Habak tea, and floor-level seating.',
    icon: Users,
  },
  {
    id: 'Host Private Event',
    label: 'Private event',
    detail: 'Venue buy-out, retreat, workshop, or cultural gathering.',
    icon: ShieldCheck,
  },
];

const CONTACT_METHODS = [
  { id: 'whatsapp', label: 'WhatsApp', icon: Phone },
  { id: 'email', label: 'Email', icon: Mail },
];

const SOCIAL_IMAGES = [entranceImage, loungeImage, cinemaImage, palmImage];

const cx = (...classes) => classes.filter(Boolean).join(' ');
const mistUnderline =
  'relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-px after:w-24 after:bg-[#B2EBF2]/70 after:shadow-[0_0_18px_rgba(178,235,242,0.42)] after:content-[""]';

export default function Connect() {
  const [isNight, setIsNight] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isCampfireOpen, setIsCampfireOpen] = useState(false);
  const [dahabTime, setDahabTime] = useState('');
  const [formData, setFormData] = useState({
    purpose: 'Coworking Day',
    fullName: '',
    contactMethod: 'whatsapp',
    contactValue: '',
    arrivalDate: '',
    guestCount: '1 guest',
    retreatDetails: '',
    notes: '',
  });

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
        ? 'border-[#B2EBF2]/18 bg-[radial-gradient(circle_at_86%_0%,rgba(178,235,242,0.08),rgba(16,25,34,0.9)_42%)]'
        : 'border-[#B2EBF2]/42 bg-[radial-gradient(circle_at_86%_0%,rgba(224,247,250,0.18),rgba(255,255,255,0.52)_42%)]',
      panelSolid: isNight
        ? 'border-[#B2EBF2]/16 bg-[radial-gradient(circle_at_86%_0%,rgba(178,235,242,0.08),#111B24_42%)]'
        : 'border-[#B2EBF2]/36 bg-[radial-gradient(circle_at_86%_0%,rgba(224,247,250,0.18),rgba(238,227,215,0.96)_42%)]',
      inset: isNight ? 'border-[#B2EBF2]/16 bg-[#E0F7FA]/[0.04]' : 'border-[#B2EBF2]/34 bg-[#E0F7FA]/[0.08]',
      muted: isNight ? 'text-[#F4EBE1]/68' : 'text-[#2D4A3E]/68',
      hairline: isNight ? 'border-[#B2EBF2]/16' : 'border-[#B2EBF2]/42',
      heroOverlay: isNight
        ? 'bg-[linear-gradient(90deg,rgba(10,17,24,0.96)_0%,rgba(10,17,24,0.78)_48%,rgba(10,17,24,0.18)_100%)]'
        : 'bg-[linear-gradient(90deg,rgba(244,235,225,0.98)_0%,rgba(244,235,225,0.78)_48%,rgba(244,235,225,0.14)_100%)]',
      input:
        'border-[#B2EBF2]/34 bg-[#E0F7FA]/[0.04] placeholder:text-current/35 focus:border-[#B2EBF2] focus:outline-none focus:ring-2 focus:ring-[#B2EBF2]/25',
    }),
    [isNight],
  );

  const selectedPurpose = PURPOSES.find((purpose) => purpose.id === formData.purpose) || PURPOSES[0];
  const isPrivateEvent = formData.purpose === 'Host Private Event';

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handlePurposeChange = (purposeId) => {
    setFormData((current) => ({
      ...current,
      purpose: purposeId,
      retreatDetails: purposeId === 'Host Private Event' ? current.retreatDetails : '',
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = encodeURIComponent(
      [
        'Marhaba Nakhyl Zone.',
        '',
        `Visit intent: ${formData.purpose}`,
        `Name: ${formData.fullName || 'Not specified'}`,
        `Preferred contact: ${formData.contactMethod} - ${formData.contactValue || 'Not specified'}`,
        `Arrival date: ${formData.arrivalDate || 'Flexible'}`,
        `Group size: ${formData.guestCount}`,
        isPrivateEvent ? `Private event scope: ${formData.retreatDetails || 'To be discussed'}` : null,
        `Notes: ${formData.notes || 'None'}`,
      ]
        .filter(Boolean)
        .join('\n'),
    );

    window.open(`https://api.whatsapp.com/send?phone=201000000000&text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className={cx('min-h-screen overflow-hidden font-sans antialiased transition-colors duration-700', palette.page)}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        .font-sans { font-family: 'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif; }
        .font-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
      `}</style>

      <section className="relative border-b border-[#B2EBF2]/35">
        <img
          src={courtyardImage}
          alt="Nakhyl Zone courtyard with palms and shaded seating in Dahab"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
        />
        <div className={cx('absolute inset-0', palette.heroOverlay)} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_86%_16%,rgba(178,235,242,0.18),transparent_30%)]" />
        <div className="relative z-10 mx-auto grid min-h-[34rem] max-w-7xl grid-cols-1 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(360px,0.48fr)] lg:px-10 lg:py-20">
          <div className="flex max-w-3xl flex-col justify-center">
            <div className="mb-7 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em]">
              <span className="rounded-full border border-[#B2EBF2]/35 bg-[#E0F7FA]/10 px-4 py-2 backdrop-blur-md">
                connect with the oasis
              </span>
              <span className={cx('inline-flex items-center gap-2', palette.muted)}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#D97706]" />
                Dahab, Egypt
              </span>
            </div>

            <h1 className="font-serif text-5xl font-light lowercase leading-[1.04] tracking-normal [text-shadow:0_0_24px_rgba(178,235,242,0.16)] sm:text-6xl lg:text-7xl">
              plan the right kind of arrival.
            </h1>
            <p className={cx('mt-7 max-w-2xl text-base leading-8 tracking-wide sm:text-lg', palette.muted)}>
              Reserve a quiet work day, dinner around low seating, Cinema Wadi cushions, or a private cultural gathering inside Nakhyl Zone's palm-lined sanctuary.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#booking-form"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[1.4rem_0.8rem_1.8rem_1rem] bg-[#D97706] px-6 text-xs font-bold uppercase tracking-widest text-[#0A1118] shadow-[0_18px_48px_rgba(217,119,6,0.28)] transition hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              >
                start request
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={() => setIsCampfireOpen(true)}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[0.8rem_1.4rem_1rem_1.8rem] border border-[#B2EBF2]/40 bg-[#E0F7FA]/10 px-6 text-xs font-bold uppercase tracking-widest backdrop-blur-md transition hover:bg-[#E0F7FA]/16 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              >
                <Flame className="h-4 w-4 text-[#D97706]" aria-hidden="true" />
                campfire story
              </button>
            </div>
          </div>

          <aside className={cx('self-end rounded-[2.4rem_1.1rem_3rem_1.4rem] border p-4 shadow-2xl backdrop-blur-xl lg:self-center', palette.panel)}>
            <img
              src={entranceImage}
              alt="Nakhyl Zone entrance with warm stone walls and yellow-framed windows"
              className="h-72 w-full rounded-[1.8rem_0.8rem_2.5rem_1.1rem] object-cover sm:h-80"
            />
            <div className="grid grid-cols-3 gap-3 pt-4">
              {[
                ['28.5109 N', 'map point'],
                [dahabTime || '00:00', 'dahab time'],
                ['Mar 2026', 'venue imagery'],
              ].map(([value, label]) => (
                <div key={label} className={cx('rounded-[1rem_0.6rem_1.2rem_0.7rem] border p-3', palette.inset)}>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#D97706]">{value}</p>
                  <p className={cx('mt-1 text-[10px] uppercase tracking-[0.2em]', palette.muted)}>{label}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(340px,0.32fr)] lg:px-10 lg:py-14">
        <form
          id="booking-form"
          onSubmit={handleSubmit}
          className={cx('rounded-[2.2rem_1rem_3.2rem_1.4rem] border p-5 shadow-xl backdrop-blur-xl sm:p-7 lg:p-9', palette.panel)}
        >
          <div className="flex flex-col gap-4 border-b border-[#B2EBF2]/22 pb-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D97706]">request desk</p>
              <h2 className={cx('mt-3 font-serif text-4xl font-light lowercase leading-tight sm:text-5xl', mistUnderline)}>tell us what you need.</h2>
            </div>
            <button
              type="button"
              onClick={() => setIsNight((value) => !value)}
              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-current/15 bg-current/[0.05] transition hover:bg-current/[0.1] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              aria-label={isNight ? 'Switch to day theme' : 'Switch to night theme'}
            >
              {isNight ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
            </button>
          </div>

          <fieldset className="mt-7">
            <legend className="text-xs font-bold uppercase tracking-[0.24em]">Visit intent</legend>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {PURPOSES.map((purpose) => {
                const Icon = purpose.icon;
                const isActive = formData.purpose === purpose.id;

                return (
                  <button
                    key={purpose.id}
                    type="button"
                    onClick={() => handlePurposeChange(purpose.id)}
                    aria-pressed={isActive}
                    className={cx(
                      'group min-h-28 rounded-[1.25rem_0.65rem_1.6rem_0.8rem] border p-4 text-left transition focus:outline-none focus:ring-2 focus:ring-[#D97706]',
                      isActive ? 'border-[#D97706] bg-[#D97706] text-[#0A1118] shadow-[0_16px_36px_rgba(217,119,6,0.24)]' : cx('hover:border-[#B2EBF2]/70 hover:bg-[#E0F7FA]/10', palette.inset),
                    )}
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-current/15 bg-current/[0.06]">
                        <Icon className="h-4 w-4" aria-hidden="true" />
                      </span>
                      {isActive && <Check className="h-4 w-4" aria-hidden="true" />}
                    </span>
                    <span className="mt-4 block text-sm font-bold uppercase tracking-[0.18em]">{purpose.label}</span>
                    <span className={cx('mt-2 block text-sm leading-6', isActive ? 'text-[#0A1118]/75' : palette.muted)}>{purpose.detail}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Full name</span>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your name"
                required
                autoComplete="name"
                className={cx('mt-2 h-12 w-full rounded-[0.9rem_0.5rem_1.1rem_0.6rem] border px-4 text-sm transition', palette.input)}
              />
            </label>

            <label className="block">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Arrival date</span>
              <input
                type="date"
                name="arrivalDate"
                value={formData.arrivalDate}
                onChange={handleInputChange}
                className={cx('mt-2 h-12 w-full rounded-[0.9rem_0.5rem_1.1rem_0.6rem] border px-4 text-sm transition', palette.input)}
                style={{ colorScheme: isNight ? 'dark' : 'light' }}
              />
            </label>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-[0.42fr_0.58fr]">
            <fieldset>
              <legend className="text-[11px] font-bold uppercase tracking-[0.2em]">Reply by</legend>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {CONTACT_METHODS.map((method) => {
                  const Icon = method.icon;
                  const isActive = formData.contactMethod === method.id;

                  return (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setFormData((current) => ({ ...current, contactMethod: method.id }))}
                      className={cx(
                        'inline-flex h-12 items-center justify-center gap-2 rounded-[0.9rem_0.5rem_1.1rem_0.6rem] border text-xs font-bold uppercase tracking-widest transition focus:outline-none focus:ring-2 focus:ring-[#D97706]',
                        isActive ? 'border-[#D97706] bg-[#D97706] text-[#0A1118]' : cx('hover:border-[#B2EBF2]/70', palette.inset),
                      )}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {method.label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <label className="block">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Contact detail</span>
              <input
                type={formData.contactMethod === 'email' ? 'email' : 'text'}
                name="contactValue"
                value={formData.contactValue}
                onChange={handleInputChange}
                placeholder={formData.contactMethod === 'email' ? 'name@example.com' : '+20 100 000 0000'}
                required
                autoComplete={formData.contactMethod === 'email' ? 'email' : 'tel'}
                className={cx('mt-2 h-12 w-full rounded-[0.9rem_0.5rem_1.1rem_0.6rem] border px-4 text-sm transition', palette.input)}
              />
            </label>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Group size</span>
              <select
                name="guestCount"
                value={formData.guestCount}
                onChange={handleInputChange}
                className={cx('mt-2 h-12 w-full rounded-[0.9rem_0.5rem_1.1rem_0.6rem] border px-4 text-sm transition', palette.input)}
              >
                <option value="1 guest">1 guest</option>
                <option value="2 guests">2 guests</option>
                <option value="3-5 guests">3-5 guests</option>
                <option value="6-12 guests">6-12 guests</option>
                <option value="13+ guests">13+ guests</option>
              </select>
            </label>

            <div className={cx('rounded-[1rem_0.6rem_1.4rem_0.8rem] border p-4', palette.inset)}>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#D97706]">{selectedPurpose.label}</p>
              <p className={cx('mt-2 text-sm leading-6', palette.muted)}>{selectedPurpose.detail}</p>
            </div>
          </div>

          {isPrivateEvent && (
            <label className="mt-5 block">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Private event scope</span>
              <textarea
                name="retreatDetails"
                value={formData.retreatDetails}
                onChange={handleInputChange}
                rows={3}
                placeholder="Share expected count, timing, dining, projection, music, or workshop needs."
                className={cx('mt-2 w-full resize-none rounded-[1rem_0.6rem_1.4rem_0.8rem] border px-4 py-3 text-sm leading-6 transition', palette.input)}
              />
            </label>
          )}

          <label className="mt-5 block">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Notes for the crew</span>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              rows={4}
              placeholder="Dietary needs, seating preferences, work setup, accessibility needs, or arrival timing."
              className={cx('mt-2 w-full resize-none rounded-[1rem_0.6rem_1.4rem_0.8rem] border px-4 py-3 text-sm leading-6 transition', palette.input)}
            />
          </label>

          <div className="mt-7 flex flex-col gap-4 border-t border-[#B2EBF2]/22 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className={cx('max-w-md text-sm leading-6', palette.muted)}>
              Your request opens a prepared WhatsApp message so the local crew can confirm availability with the fastest response path.
            </p>
            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center gap-3 rounded-[1.3rem_0.75rem_1.7rem_0.95rem] bg-[#D97706] px-6 text-xs font-bold uppercase tracking-widest text-[#0A1118] shadow-[0_18px_48px_rgba(217,119,6,0.25)] transition hover:-translate-y-0.5 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            >
              send request
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </form>

        <aside className="space-y-5">
          <section className={cx('rounded-[1.8rem_0.9rem_2.6rem_1.2rem] border p-5 shadow-lg', palette.panelSolid)}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">location</p>
                <h3 className={cx('mt-3 font-serif text-3xl font-light lowercase leading-tight', mistUnderline)}>tucked inside dahab.</h3>
              </div>
              <MapPin className="mt-1 h-5 w-5 text-[#D97706]" aria-hidden="true" />
            </div>
            <p className={cx('mt-4 text-sm leading-7', palette.muted)}>
              Find Nakhyl Zone at 28.5109079, 34.5164631, a city-accessible sanctuary away from the beachfront rush.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=28.5109079,34.5164631"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#D97706] transition hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
            >
              open map
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </section>

          <section className={cx('rounded-[1.8rem_0.9rem_2.6rem_1.2rem] border p-5 shadow-lg', palette.panelSolid)}>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#D97706]">live proof</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {SOCIAL_IMAGES.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Nakhyl Zone venue detail ${index + 1}`}
                  className="aspect-square rounded-[1rem_0.55rem_1.35rem_0.75rem] border border-[#B2EBF2]/30 object-cover"
                  loading="lazy"
                />
              ))}
            </div>
            <p className={cx('mt-4 text-sm leading-6', palette.muted)}>
              Rugs, palms, cinema corners, and the approachable city entrance give your crew a quick read of the venue before arrival.
            </p>
          </section>

          <section className={cx('rounded-[1.8rem_0.9rem_2.6rem_1.2rem] border p-5 shadow-lg', palette.panelSolid)}>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setIsAudioPlaying((value) => !value)}
                className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D97706] text-[#D97706] transition hover:bg-[#D97706] hover:text-[#0A1118] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                aria-label={isAudioPlaying ? 'Pause oasis soundscape preview' : 'Play oasis soundscape preview'}
              >
                {isAudioPlaying ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
              </button>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em]">listen to the oasis right now</p>
                <p className={cx('mt-1 text-sm leading-6', palette.muted)}>
                  {isAudioPlaying ? 'Playing preview: palm wind, embers, faint acoustic strings.' : 'Soundscape preview is paused.'}
                </p>
              </div>
            </div>
          </section>
        </aside>
      </section>

      <footer className={cx('border-t px-5 py-6 sm:px-8 lg:px-10', palette.hairline)}>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Headphones className="h-4 w-4 text-[#D97706]" aria-hidden="true" />
            <p className="text-xs font-bold uppercase tracking-[0.22em]">Nakhyl Zone Dahab request console</p>
          </div>
          <p className={cx('font-mono text-[11px] uppercase tracking-widest', palette.muted)}>
            Coordinates 28.5109079, 34.5164631 / Dahab time {dahabTime || '00:00'}
          </p>
        </div>
      </footer>

      {isCampfireOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/78 p-4 backdrop-blur-md" role="dialog" aria-modal="true" aria-labelledby="campfire-title">
          <div className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-hidden rounded-[2.4rem_1.1rem_3.2rem_1.4rem] border border-[#D97706]/70 bg-[#0A1118] text-[#F4EBE1] shadow-2xl md:grid-cols-[0.45fr_0.55fr]">
            <img src={fireImage} alt="Nakhyl Zone evening fire gathering" className="h-64 w-full object-cover md:h-full" />
            <div className="overflow-y-auto p-7 sm:p-9">
              <button
                type="button"
                onClick={() => setIsCampfireOpen(false)}
                className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/20 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                aria-label="Close campfire story"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
              <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D97706]">Sinai hospitality ritual</p>
              <h2 id="campfire-title" className="mt-3 font-serif text-4xl font-light lowercase leading-tight sm:text-5xl">
                habak tea, embers, and slower conversation.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 tracking-wide text-[#F4EBE1]/78">
                <p>
                  The campfire is the spatial anchor of Nakhyl Zone: a place to arrive after work, share tea, and let conversations become human again.
                </p>
                <p>
                  Fresh mountain herbs, handmade kettles, low seating, acoustic music, and careful hosting create the slow-paced hospitality rhythm behind the brand.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsCampfireOpen(false);
                  setIsAudioPlaying(true);
                }}
                className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-[1.2rem_0.7rem_1.6rem_0.9rem] bg-[#D97706] px-6 text-xs font-bold uppercase tracking-widest text-[#0A1118] transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-[#D97706]"
              >
                start soundscape
                <Play className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
