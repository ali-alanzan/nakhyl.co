import React, { useEffect, useMemo, useState } from 'react';
import {
  Camera,
  Clock3,
  Flame,
  Leaf,
  MapPin,
  MessageCircle,
  Moon,
  Pause,
  Play,
  Search,
  Sun,
  UtensilsCrossed,
  Volume2,
  X,
} from 'lucide-react';

import heroImage from '../../identity/Nakhyl-zone-20.jpeg';
import counterImage from '../../identity/Nakhyl-zone-4.jpeg';
import teaImage from '../../identity/Nakhyl-zone-13.jpeg';
import sunriseImage from '../../identity/Nakhyl-zone-1.jpeg';
import elixirImage from '../../identity/Nakhyl-zone-6.jpeg';
import flatbreadImage from '../../identity/Nakhyl-zone-8.jpeg';
import mandiImage from '../../identity/Nakhyl-zone-14.jpeg';
import teaMenuImage from '../../identity/Nakhyl-zone-11.jpeg';
import ribsImage from '../../identity/Nakhyl-zone-16.jpeg';
import socialOne from '../../identity/Nakhyl-zone-2.jpeg';
import socialTwo from '../../identity/Nakhyl-zone-7.jpeg';
import socialThree from '../../identity/Nakhyl-zone-18.jpeg';

const WHATSAPP_NUMBER = '201000000000';

const filters = ['All', 'Fire-Cooked', 'Sinai Herbs', 'Gathering Platters'];

const menuItems = [
  {
    id: 1,
    title: 'Bedouin Sunrise Platter',
    price: 'EGP 240',
    description:
      'Slow farm eggs, mountain cheese, hand-mashed foul with olive oil, and fire-hot flatbread from the mud oven.',
    category: 'Morning Under the Palms',
    tag: 'Gathering Platters',
    state: 'day',
    image: sunriseImage,
    accent: 'For shared starts',
  },
  {
    id: 2,
    title: 'The Energizer Nomad Elixir',
    price: 'EGP 110',
    description:
      'Cold-pressed Sinai lemonade lifted with garden mint and a light drizzle of desert blossom honey.',
    category: 'Morning Under the Palms',
    tag: 'Sinai Herbs',
    state: 'day',
    image: elixirImage,
    accent: 'Bright and cooling',
  },
  {
    id: 3,
    title: 'Hand-Rolled Fig & Goat Cheese Flatbread',
    price: 'EGP 185',
    description:
      'Blistered artisan flatbread with mountain goat cheese, sun-dried Sinai figs, and local thyme.',
    category: 'Morning Under the Palms',
    tag: 'Fire-Cooked',
    state: 'day',
    image: flatbreadImage,
    accent: 'From the clay oven',
  },
  {
    id: 4,
    title: 'Nakhyl Mandi Chicken',
    price: 'EGP 420',
    description:
      'Wood-smoked half chicken slow-cooked over pit embers and served over spiced aromatic rice.',
    category: 'Earth & Fire Dinners',
    tag: 'Fire-Cooked',
    state: 'night',
    image: mandiImage,
    accent: 'Six-hour ember cook',
  },
  {
    id: 5,
    title: 'Bedouin Campfire Tea',
    price: 'EGP 75',
    description:
      'Loose-leaf black tea brewed over open embers with wild Habak mint or hand-gathered desert sage.',
    category: 'Earth & Fire Dinners',
    tag: 'Sinai Herbs',
    state: 'night',
    image: teaMenuImage,
    accent: 'Habak and sage',
  },
  {
    id: 6,
    title: 'The Oasis Smoked Rib Platter',
    price: 'EGP 580',
    description:
      'Slow-roasted lamb ribs glazed with pomegranate molasses and dates for open-air circle gatherings.',
    category: 'Earth & Fire Dinners',
    tag: 'Gathering Platters',
    state: 'night',
    image: ribsImage,
    accent: 'Built for the table',
  },
];

const socialPhotos = [
  { src: socialOne, label: 'Palm grove seating' },
  { src: socialTwo, label: 'Low table gathering' },
  { src: socialThree, label: 'Open-air evening at Nakhyl Zone' },
];

const cx = (...classes) => classes.filter(Boolean).join(' ');
const mistUnderline =
  'relative inline-block after:absolute after:-bottom-2 after:left-0 after:h-px after:w-24 after:bg-[#B2EBF2]/70 after:shadow-[0_0_18px_rgba(178,235,242,0.42)] after:content-[""]';

function getSectionItems(items, state) {
  return items.filter((item) => item.state === state);
}

function MenuCard({ item, isNight }) {
  return (
    <article
      className={`group flex min-h-full flex-col overflow-hidden border transition duration-500 hover:-translate-y-1 focus-within:-translate-y-1 ${
        isNight
          ? 'border-[#B2EBF2]/16 bg-[radial-gradient(circle_at_86%_0%,rgba(178,235,242,0.08),rgba(18,26,35,0.84)_40%)] shadow-[0_22px_70px_rgba(0,0,0,0.26)]'
          : 'border-[#B2EBF2]/40 bg-[radial-gradient(circle_at_86%_0%,rgba(224,247,250,0.18),rgba(255,255,255,0.56)_42%)] shadow-[0_18px_55px_rgba(45,74,62,0.08)]'
      } rounded-[1.8rem_0.9rem_2.6rem_1.2rem]`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition duration-[1200ms] group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/70 via-[#0A1118]/10 to-transparent" />
        <span className="absolute left-4 top-4 rounded-[1rem_0.55rem_1.2rem_0.75rem] border border-[#B2EBF2]/35 bg-[#0A1118]/45 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#F4EBE1] backdrop-blur-md">
          {item.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="mb-5 flex items-start justify-between gap-5">
          <div>
            <p
              className={`mb-2 text-[0.64rem] font-bold uppercase tracking-[0.28em] ${
                isNight ? 'text-[#D97706]' : 'text-[#2D4A3E]/55'
              }`}
            >
              {item.accent}
            </p>
            <h3 className={cx('font-serif text-2xl lowercase leading-snug text-current', mistUnderline)}>
              {item.title}
            </h3>
          </div>
          <p
            className={`shrink-0 rounded-[0.9rem_0.5rem_1rem_0.7rem] px-3 py-2 text-sm font-bold ${
              isNight ? 'bg-[#D97706] text-[#0A1118]' : 'bg-[#2D4A3E] text-[#F4EBE1]'
            }`}
          >
            {item.price}
          </p>
        </div>
        <p className="mt-auto text-sm leading-7 opacity-75">{item.description}</p>
      </div>
    </article>
  );
}

function MenuSection({ eyebrow, icon: Icon, items, isNight }) {
  return (
    <section className="scroll-mt-28" aria-labelledby={`${eyebrow}-heading`}>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div
            className={`mb-3 inline-flex items-center gap-2 rounded-[1rem_0.6rem_1.25rem_0.8rem] border px-3 py-2 text-[0.64rem] font-bold uppercase tracking-[0.28em] ${
              isNight
                ? 'border-[#B2EBF2]/24 bg-[#E0F7FA]/[0.04] text-[#D97706]'
                : 'border-[#B2EBF2]/42 bg-[#E0F7FA]/10 text-[#2D4A3E]/70'
            }`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            {items.length} selections
          </div>
          <h2 id={`${eyebrow}-heading`} className={cx('font-serif text-4xl lowercase leading-tight md:text-5xl', mistUnderline)}>
            {eyebrow}
          </h2>
        </div>
        <div
          className={`hidden h-px flex-1 sm:block ${
            isNight ? 'bg-[#B2EBF2]/24' : 'bg-[#B2EBF2]/55'
          }`}
        />
      </div>

      {items.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <MenuCard key={item.id} item={item} isNight={isNight} />
          ))}
        </div>
      ) : (
        <div
          className={`rounded-[2rem_1rem_2.6rem_1.4rem] border px-6 py-10 text-center text-sm ${
            isNight
              ? 'border-[#B2EBF2]/16 bg-[#121A23]/70 text-[#F4EBE1]/65'
              : 'border-[#B2EBF2]/38 bg-[#E0F7FA]/10 text-[#2D4A3E]/65'
          }`}
        >
          No dishes in this section match the selected filter.
        </div>
      )}
    </section>
  );
}

export default function NakhylKitchenMenuRedesigned() {
  const [isNight, setIsNight] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [orderRequest, setOrderRequest] = useState('');
  const [showCampfireModal, setShowCampfireModal] = useState(false);
  const [isPlayingSound, setIsPlayingSound] = useState(false);
  const [dahabTime, setDahabTime] = useState('');

  useEffect(() => {
    const updateDahabTime = () => {
      setDahabTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: 'Africa/Cairo',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date()),
      );
    };

    updateDahabTime();
    const interval = window.setInterval(updateDahabTime, 30000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!showCampfireModal) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setShowCampfireModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showCampfireModal]);

  const filteredMenu = useMemo(() => {
    return menuItems.filter((item) => activeFilter === 'All' || item.tag === activeFilter);
  }, [activeFilter]);

  const dayItems = useMemo(() => getSectionItems(filteredMenu, 'day'), [filteredMenu]);
  const nightItems = useMemo(() => getSectionItems(filteredMenu, 'night'), [filteredMenu]);

  const handleWhatsappSubmit = (event) => {
    event.preventDefault();
    const trimmedRequest = orderRequest.trim();

    if (!trimmedRequest) return;

    const text = encodeURIComponent(
      `Hello Nakhyl Zone. I would like to request from the kitchen menu: ${trimmedRequest}`,
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className={`min-h-screen overflow-hidden font-sans transition-colors duration-700 ${
        isNight ? 'bg-[#0A1118] text-[#F4EBE1]' : 'bg-[#F4EBE1] text-[#2D4A3E]'
      }`}
    >
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden border-b border-[#B2EBF2]/35">
        <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div
          className={`absolute inset-0 ${
            isNight
              ? 'bg-gradient-to-b from-[#0A1118]/65 via-[#0A1118]/58 to-[#0A1118]'
              : 'bg-gradient-to-b from-[#0A1118]/20 via-[#F4EBE1]/60 to-[#F4EBE1]'
          }`}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_14%,rgba(178,235,242,0.18),transparent_30%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col px-5 py-8 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div
              className={`inline-flex items-center gap-3 rounded-[1.4rem_0.7rem_1.8rem_1rem] border px-4 py-3 backdrop-blur-md ${
                isNight
                  ? 'border-[#B2EBF2]/20 bg-[#0A1118]/45'
                  : 'border-[#B2EBF2]/45 bg-[#E0F7FA]/12'
              }`}
            >
              <UtensilsCrossed className="h-5 w-5 text-[#D97706]" aria-hidden="true" />
              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.32em]">Nakhyl Kitchen</p>
                <p className="mt-1 text-[0.72rem] uppercase tracking-[0.22em] opacity-70">
                  Cultural oasis menu
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsNight((current) => !current)}
              className={`inline-flex min-h-12 items-center gap-3 rounded-[1.6rem_0.8rem_1.9rem_1rem] border px-4 py-3 text-xs font-bold uppercase tracking-[0.22em] transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] ${
                isNight
                  ? 'border-[#D97706]/35 bg-[#D97706] text-[#0A1118]'
                  : 'border-[#2D4A3E]/20 bg-[#2D4A3E] text-[#F4EBE1]'
              }`}
              aria-pressed={isNight}
            >
              {isNight ? <Moon className="h-4 w-4" aria-hidden="true" /> : <Sun className="h-4 w-4" aria-hidden="true" />}
              {isNight ? 'Follow the Sparks' : 'Chase the Sun'}
            </button>
          </div>

          <div className="grid flex-1 items-end gap-10 pb-8 pt-20 lg:grid-cols-[minmax(0,1fr)_22rem] lg:pt-28">
            <div className="max-w-4xl">
              <p
                className={`mb-5 text-[0.68rem] font-bold uppercase tracking-[0.42em] ${
                  isNight ? 'text-[#D97706]' : 'text-[#2D4A3E]/75'
                }`}
              >
                Slow fire, palm shade, Sinai herbs
              </p>
              <h1 className="font-serif text-5xl lowercase leading-[1.03] [text-shadow:0_0_24px_rgba(178,235,242,0.16)] sm:text-6xl lg:text-7xl">
                spiced by local tradition, cooked slowly on open embers
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 opacity-82 md:text-lg">
                A refined menu experience for nomads, families, and evening circles. Filter quickly,
                browse visually, and send your kitchen request before you arrive.
              </p>

              <div className="mt-9 flex flex-wrap gap-3" role="tablist" aria-label="Menu filters">
                {filters.map((filter) => {
                  const isActive = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveFilter(filter)}
                      className={`min-h-11 rounded-[1.3rem_0.65rem_1.55rem_0.9rem] border px-4 py-2.5 text-xs font-bold uppercase tracking-[0.22em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] ${
                        isActive
                          ? isNight
                            ? 'border-[#D97706] bg-[#D97706] text-[#0A1118] shadow-[0_0_28px_rgba(217,119,6,0.28)]'
                            : 'border-[#2D4A3E] bg-[#2D4A3E] text-[#F4EBE1] shadow-[0_18px_40px_rgba(45,74,62,0.15)]'
                          : isNight
                            ? 'border-[#B2EBF2]/18 bg-[#0A1118]/40 text-[#F4EBE1] hover:border-[#B2EBF2]/45'
                            : 'border-[#B2EBF2]/38 bg-[#E0F7FA]/10 text-[#2D4A3E] hover:bg-[#E0F7FA]/18'
                      }`}
                      role="tab"
                      aria-selected={isActive}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>

            <aside
              className={`rounded-[2.4rem_1rem_3.2rem_1.45rem] border p-5 backdrop-blur-xl ${
                isNight
                  ? 'border-[#B2EBF2]/18 bg-[#0A1118]/60'
                  : 'border-[#B2EBF2]/45 bg-[#E0F7FA]/12'
              }`}
              aria-label="Live menu context"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.32em] opacity-62">
                    Dahab local time
                  </p>
                  <p className="mt-1 font-serif text-3xl lowercase">{dahabTime || '--:--'}</p>
                </div>
                <Clock3 className="h-8 w-8 text-[#D97706]" aria-hidden="true" />
              </div>
              <div className={`h-px ${isNight ? 'bg-[#B2EBF2]/18' : 'bg-[#B2EBF2]/55'}`} />
              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] opacity-55">
                    Showing
                  </p>
                  <p className="mt-1">{filteredMenu.length} dishes</p>
                </div>
                <div>
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] opacity-55">
                    Best for
                  </p>
                  <p className="mt-1">Walk-ins</p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-7xl space-y-20 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <MenuSection eyebrow="morning under the palms" icon={Sun} items={dayItems} isNight={isNight} />
        <MenuSection eyebrow="earth and fire dinners" icon={Flame} items={nightItems} isNight={isNight} />

        <section className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
          <div className="relative min-h-[26rem] overflow-hidden rounded-[2.8rem_1.1rem_3.7rem_1.6rem]">
            <img src={counterImage} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118]/70 via-[#0A1118]/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-[#F4EBE1]">
              <p className="mb-2 text-[0.64rem] font-bold uppercase tracking-[0.3em] text-[#D97706]">
                Direct counter request
              </p>
              <h2 className={cx('font-serif text-4xl lowercase leading-tight', mistUnderline)}>want your tea ready when you walk in?</h2>
            </div>
          </div>

          <div
            className={`flex flex-col justify-center rounded-[1.4rem_3rem_1.8rem_2.2rem] border p-7 md:p-10 ${
              isNight
                ? 'border-[#B2EBF2]/16 bg-[radial-gradient(circle_at_86%_0%,rgba(178,235,242,0.08),#121A23_42%)] shadow-[0_28px_80px_rgba(0,0,0,0.28)]'
                : 'border-[#B2EBF2]/38 bg-[radial-gradient(circle_at_86%_0%,rgba(224,247,250,0.18),rgba(234,225,213,0.86)_42%)] shadow-[0_18px_60px_rgba(45,74,62,0.08)]'
            }`}
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-[1rem_0.55rem_1.2rem_0.75rem] bg-[#D97706] text-[#0A1118]">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] opacity-60">
                  WhatsApp kitchen line
                </p>
                <p className="mt-1 text-sm opacity-75">Write the items, timing, and guest count.</p>
              </div>
            </div>

            <form onSubmit={handleWhatsappSubmit} className="space-y-4">
              <label htmlFor="menu-order-request" className="sr-only">
                Kitchen request
              </label>
              <div
                className={`flex items-center gap-3 rounded-[1.4rem_0.8rem_1.8rem_1rem] border px-4 ${
                  isNight ? 'border-[#B2EBF2]/16 bg-[#0A1118]/60' : 'border-[#B2EBF2]/38 bg-[#E0F7FA]/10'
                }`}
              >
                <Search className="h-4 w-4 opacity-45" aria-hidden="true" />
                <input
                  id="menu-order-request"
                  type="text"
                  value={orderRequest}
                  onChange={(event) => setOrderRequest(event.target.value)}
                  placeholder="2 campfire teas and a sunrise platter at 7:30..."
                  className="min-h-14 w-full bg-transparent text-sm outline-none placeholder:text-current placeholder:opacity-45"
                />
              </div>
              <button
                type="submit"
                className={`inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-[1.4rem_0.8rem_1.8rem_1rem] px-5 py-3 text-xs font-bold uppercase tracking-[0.24em] transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] sm:w-auto ${
                  isNight
                    ? 'bg-[#D97706] text-[#0A1118] hover:bg-[#F4EBE1]'
                    : 'bg-[#2D4A3E] text-[#F4EBE1] hover:bg-[#D97706] hover:text-[#0A1118]'
                }`}
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Send request
              </button>
            </form>
          </div>
        </section>

        <section aria-labelledby="social-proof-heading">
          <div className="mb-7 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p
                className={`mb-3 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.3em] ${
                  isNight ? 'text-[#D97706]' : 'text-[#2D4A3E]/60'
                }`}
              >
                <Camera className="h-4 w-4" aria-hidden="true" />
                Visitor atmosphere
              </p>
              <h2 id="social-proof-heading" className={cx('font-serif text-4xl lowercase leading-tight md:text-5xl', mistUnderline)}>
                a real courtyard, not a stock moodboard
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 opacity-70">
              The menu experience uses venue imagery from the supplied Google Maps capture set to make
              the food journey feel physically grounded.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {socialPhotos.map((photo) => (
              <figure
                key={photo.label}
                className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem_0.9rem_2.4rem_1.2rem] border border-[#B2EBF2]/38"
              >
                <img src={photo.src} alt={photo.label} loading="lazy" className="h-full w-full object-cover" />
                <figcaption className="absolute bottom-4 left-4 right-4 rounded-[1rem_0.6rem_1.2rem_0.8rem] border border-[#B2EBF2]/30 bg-[#0A1118]/55 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#F4EBE1] backdrop-blur-md">
                  {photo.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <button
        type="button"
        onClick={() => setShowCampfireModal(true)}
        className="fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-[1.4rem_0.75rem_1.8rem_1rem] bg-[#D97706] text-[#0A1118] shadow-[0_0_34px_rgba(217,119,6,0.45)] transition hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4EBE1] md:bottom-8 md:right-8"
        aria-label="Open the virtual campfire story"
      >
        <Flame className="h-6 w-6" aria-hidden="true" />
      </button>

      <footer
        className={`border-t px-5 py-6 transition-colors sm:px-8 lg:px-12 ${
          isNight
            ? 'border-[#F4EBE1]/10 bg-[#0A1118] text-[#F4EBE1]/70'
            : 'border-[#2D4A3E]/10 bg-[#EAE1D5]/55 text-[#2D4A3E]/75'
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <button
            type="button"
            onClick={() => setIsPlayingSound((current) => !current)}
            className={`inline-flex items-center gap-4 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] ${
              isPlayingSound ? 'opacity-100' : 'opacity-78 hover:opacity-100'
            }`}
            aria-pressed={isPlayingSound}
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-[1rem_0.55rem_1.25rem_0.75rem] border ${
                isPlayingSound
                  ? 'border-[#D97706] bg-[#D97706] text-[#0A1118]'
                  : isNight
                    ? 'border-[#F4EBE1]/18'
                    : 'border-[#2D4A3E]/20'
              }`}
            >
              {isPlayingSound ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
            </span>
            <span>
              <span className="flex items-center gap-2 text-[0.66rem] font-bold uppercase tracking-[0.28em]">
                <Volume2 className="h-4 w-4" aria-hidden="true" />
                Listen to the oasis right now
              </span>
              <span className="mt-1 block text-sm opacity-65">
                {isPlayingSound ? 'Wind through palms and crackling embers' : 'Ambient layer muted'}
              </span>
            </span>
          </button>

          <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em]">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#D97706]" aria-hidden="true" />
              Dahab, South Sinai
            </span>
            <span className="inline-flex items-center gap-2">
              <Leaf className="h-4 w-4 text-[#D97706]" aria-hidden="true" />
              Palm grove kitchen
            </span>
          </div>
        </div>
      </footer>

      {showCampfireModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0A1118]/88 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="campfire-title"
        >
          <button
            type="button"
            className="absolute inset-0 cursor-default"
            onClick={() => setShowCampfireModal(false)}
            aria-label="Close campfire story"
          />

          <div className="relative grid max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-[2.8rem_1.2rem_3.8rem_1.6rem] border border-[#D97706]/30 bg-[#0A1118] text-[#F4EBE1] shadow-[0_36px_120px_rgba(0,0,0,0.5)] md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-64">
              <img src={teaImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1118] via-[#0A1118]/20 to-transparent md:bg-gradient-to-r" />
            </div>

            <div className="overflow-y-auto p-7 md:p-10">
              <button
                type="button"
                onClick={() => setShowCampfireModal(false)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-[0.9rem_0.5rem_1.1rem_0.7rem] border border-[#F4EBE1]/12 bg-[#0A1118]/60 text-[#F4EBE1] transition hover:border-[#D97706] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706]"
                aria-label="Close"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              <p className="mb-4 text-[0.65rem] font-bold uppercase tracking-[0.34em] text-[#D97706]">
                Sinai hospitality
              </p>
              <h2 id="campfire-title" className="font-serif text-4xl lowercase leading-tight">
                the ritual begins before the first cup
              </h2>
              <p className="mt-6 text-sm leading-8 text-[#F4EBE1]/78">
                At Nakhyl Zone, tea is the welcome signal. Habak mint, sage, coal heat, and slow
                conversation turn the courtyard into a shared house for travelers, locals, families,
                and musicians moving through Dahab.
              </p>
              <div className="mt-8 border-l-2 border-[#D97706] pl-5">
                <p className="font-serif text-2xl lowercase leading-snug text-[#D97706]">
                  fire first, service second, community always.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
