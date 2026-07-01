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
      panel: isNight ? 'bg-[#111B24]/88 border-[#F4EBE1]/12' : 'bg-white/45 border-[#2D4A3E]/15',
      panelSolid: isNight ? 'bg-[#101922] border-[#F4EBE1]/12' : 'bg-[#EEE3D7] border-[#2D4A3E]/14',
      muted: isNight ? 'text-[#F4EBE1]/70' : 'text-[#2D4A3E]/70',
      hairline: isNight ? 'border-[#F4EBE1]/12' : 'border-[#2D4A3E]/12',
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
    // <main className={cx('min-h-screen overflow-hidden font-sans antialiased transition-colors duration-700', palette.page)}>
    <main>
     This website is temporarily suspended. Please check back later for updates and new content.
    </main>
  );
}
