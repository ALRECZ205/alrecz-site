'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import SplitText from './SplitText';
import { SITE_EMAIL, SOCIAL_LINKS } from '@/lib/nav';

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
      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">{city}</span>
      <span className="text-lg md:text-xl font-mono tabular-nums text-white/80">{time}</span>
    </div>
  );
}

/**
 * The portfolio previously ended on the shared site-wide (alrecz-blood)
 * archive footer, which doesn't share this page's brand-red identity —
 * and its own "[ EXECUTE // CONNECT ]" CTA in Clients.tsx pointed at an
 * `#contact` anchor that didn't exist anywhere on the page. This footer
 * is that anchor and gives the portfolio a closing statement in its own
 * voice instead of borrowing the archive's.
 */
export default function Footer() {
  return (
    <footer id="contact" className="relative bg-brand-black text-white border-t border-brand-red/20 overflow-hidden">
      <div className="absolute inset-0 dither-pattern opacity-10 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-red/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10 px-6 md:px-12 pt-24 md:pt-32 pb-12">
        <p className="uppercase tracking-[0.3em] text-xs mb-6 font-mono text-brand-red">
          [ SYS.DIR // CONTACT ]
        </p>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <SplitText
            text="Initiate Connection"
            className="text-[12vw] lg:text-[7vw] leading-[0.9] font-bold uppercase tracking-tighter text-outline"
          />

          <motion.a
            href={`mailto:${SITE_EMAIL}?subject=Project%20Inquiry`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group shrink-0 inline-flex items-center gap-4 border border-brand-red text-brand-red px-8 py-5 font-mono text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-red hover:text-brand-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden w-fit"
          >
            <div className="absolute inset-0 bg-brand-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] -z-10" />
            <span className="break-all">{SITE_EMAIL}</span>
            <ArrowUpRight
              size={18}
              className="shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:rotate-45"
            />
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-brand-red/20 mb-12">
          <Clock city="Birmingham, AL" timeZone="America/Chicago" />
          <Clock city="Tokyo" timeZone="Asia/Tokyo" />
          <Clock city="London" timeZone="Europe/London" />
          <Clock city="Paris" timeZone="Europe/Paris" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
          <div className="flex gap-8">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-red transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>

          <p>Design &amp; Direction — Pelatiah</p>

          <Link href="/" className="hover:text-brand-red transition-colors inline-flex items-center gap-1.5">
            Part of the ALRECZ Archive
            <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
