'use client';

import { useEffect, useState } from 'react';

const Clock = ({ city, timeZone }: { city: string, timeZone: string }) => {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        setTime(formatter.format(new Date()));
      } catch (e) {
        setTime('00:00:00');
      }
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [timeZone]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-brand-red rounded-none animate-pulse" />
        <span className="text-xs font-mono uppercase tracking-[0.2em] opacity-70 text-brand-red-light">LOC // {city}</span>
      </div>
      <div className="text-xl md:text-2xl font-mono tracking-widest ml-5 text-white/90">{time}</div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-brand-black text-white pt-24 pb-12 px-6 md:px-12 border-t border-brand-red/30 relative overflow-hidden">
      <div className="absolute inset-0 dither-pattern opacity-10 pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs mb-6 font-mono text-brand-red">[ SYS.DIR // CONTACT ]</p>
            <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-8 text-outline">INITIATE_CONNECTION</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-end">
            <div>
              <p className="text-xs font-mono uppercase tracking-[0.2em] opacity-50 mb-4 text-brand-red">{'//'} EMAIL_PROTOCOL</p>
              <a href="mailto:brandinwhall@gmail.com" className="text-xl md:text-2xl font-bold uppercase tracking-tight hover:text-brand-red transition-colors text-glitch">Pelatiahm@outlook.com</a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 py-16 border-t border-b border-brand-red/20 mb-12">
          <Clock city="Toronto" timeZone="America/Toronto" />
          <Clock city="Tokyo" timeZone="Asia/Tokyo" />
          <Clock city="London" timeZone="Europe/London" />
          <Clock city="Paris" timeZone="Europe/Paris" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono opacity-50 uppercase tracking-[0.2em]">
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-red transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-brand-red transition-colors">GITHUB</a>
          </div>
          <p>SYS.ADMIN © {new Date().getFullYear()} // DESIGN BY PELATIAH</p>
        </div>
      </div>
    </footer>
  );
}
