'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS, SITE_EMAIL, SOCIAL_LINKS } from '@/lib/nav';

function Clock({ city, timeZone }: { city: string; timeZone: string }) {
  const [time, setTime] = useState('--:--:--');

  useEffect(() => {
    const update = () => {
      try {
        setTime(
          new Intl.DateTimeFormat('en-US', {
            timeZone,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          }).format(new Date())
        );
      } catch {
        setTime('00:00:00');
      }
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [timeZone]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-alrecz-blood animate-pulse" />
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-alrecz-silver/70">
          LOC // {city}
        </span>
      </div>
      <div className="text-lg md:text-xl font-mono tabular-nums tracking-widest text-alrecz-offwhite/90 ml-3.5">
        {time}
      </div>
    </div>
  );
}

/**
 * Single site-wide footer. Replaces the three divergent per-page footers
 * (legacy inline, art-ai/components/Footer.tsx, music-ai inline).
 */
export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-alrecz-black pt-20 pb-8 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="font-mono text-[10px] text-alrecz-blood tracking-[0.3em] uppercase mb-5">
              [ SYS.DIR // CONTACT ]
            </p>
            <h3 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-2 text-alrecz-offwhite">
              INITIATE_CONNECTION
            </h3>
            <a
              href={`mailto:${SITE_EMAIL}?subject=ALRECZ%20Inquiry`}
              data-cursor="link"
              className="inline-block mt-4 font-mono text-lg md:text-xl text-alrecz-silver hover:text-alrecz-blood transition-colors"
            >
              {SITE_EMAIL}
            </a>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 content-start md:justify-self-end">
            {NAV_ITEMS.map((item) =>
              item.type === 'route' ? (
                <Link
                  key={item.label}
                  href={item.href}
                  data-cursor="link"
                  className="font-mono text-xs tracking-widest uppercase text-alrecz-silver hover:text-alrecz-offwhite transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-mono text-xs tracking-widest uppercase text-alrecz-silver hover:text-alrecz-offwhite transition-colors"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-white/10 mb-10">
          <Clock city="Birmingham, AL" timeZone="America/Chicago" />
          <Clock city="Tokyo" timeZone="Asia/Tokyo" />
          <Clock city="London" timeZone="Europe/London" />
          <Clock city="Paris" timeZone="Europe/Paris" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono uppercase tracking-[0.2em] text-alrecz-silver/60">
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="link"
                className="hover:text-alrecz-blood transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
          <p>© {new Date().getFullYear()} ALRECZ // LAW OF THE JUNGLE // 205</p>
        </div>
      </div>
    </footer>
  );
}
