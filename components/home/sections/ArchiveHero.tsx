'use client';

import { motion } from 'framer-motion';
import GlitchText from '@/components/shared/GlitchText';
import AmbientParticles from '@/components/shared/AmbientParticles';
import { useArchiveMetadata } from '@/lib/useArchiveMetadata';

function scrollToId(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
}

/**
 * The front door of the archive. Replaces the old static "ALABAMA
 * RECORDS" block with a living terminal: ambient video, floating dust,
 * and a HUD panel of real-time readouts (clock, signal, session code)
 * driven by useArchiveMetadata. Same CRT/terminal identity as before —
 * elevated, not replaced.
 */
export default function ArchiveHero() {
  const { time, sessionCode, signal, filesIndexed, recovered, status } = useArchiveMetadata();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-12">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover grayscale contrast-125 brightness-[0.35]"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-alrecz-black via-alrecz-black/70 to-alrecz-black/40" />
      </div>

      <AmbientParticles />

      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute left-6 top-6 w-10 h-10 border-l border-t border-white/20" />
        <div className="absolute right-6 top-6 w-10 h-10 border-r border-t border-white/20" />
        <div className="absolute left-6 bottom-6 w-10 h-10 border-l border-b border-white/20" />
        <div className="absolute right-6 bottom-6 w-10 h-10 border-r border-b border-white/20" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[11px] md:text-xs text-alrecz-blood tracking-[0.35em] uppercase mb-6"
            >
              [ SYS.ARCHIVE // BIRMINGHAM, AL — 205 ]
            </motion.p>

            <GlitchText
              text="ALRECZ"
              as="h1"
              className="text-[19vw] lg:text-[13vw] leading-[0.82] font-display font-bold tracking-tighter text-alrecz-offwhite"
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 max-w-xl space-y-2 font-mono text-xs md:text-sm text-alrecz-silver"
            >
              <p><span className="text-alrecz-blood">RULE #1:</span> NOTHING IS REAL.</p>
              <p><span className="text-alrecz-blood">RULE #2:</span> WHEN IN DOUBT, REFER TO RULE #1.</p>
              <p className="text-alrecz-silver/60 mt-3">
                A living archive of art, music, and creative work. Merch • Music • DJ Services • Visual Archives • Client Work.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <a
                href="/art"
                data-cursor="link"
                className="border border-white px-6 py-3 hover:bg-white hover:text-black transition-all font-bold tracking-widest text-xs md:text-sm"
              >
                ENTER EXHIBITIONS
              </a>
              <a
                href="/music"
                data-cursor="link"
                className="border border-alrecz-blood text-alrecz-blood px-6 py-3 hover:bg-alrecz-blood hover:text-white transition-all font-bold tracking-widest text-xs md:text-sm"
              >
                PLAY MUSIC
              </a>
              <button
                onClick={() => scrollToId('#about')}
                data-cursor="button"
                className="border border-white/30 px-6 py-3 hover:border-alrecz-offwhite transition-all font-bold tracking-widest text-xs md:text-sm"
              >
                ABOUT THE ARCHIVE
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="lg:col-span-4 border border-white/15 bg-black/50 backdrop-blur-sm font-mono text-[11px] text-alrecz-silver"
          >
            <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
              <span className="text-alrecz-offwhite/80 tracking-widest">ARCHIVE://STATUS</span>
              <span className="flex items-center gap-2 text-alrecz-blood">
                <span className="w-1.5 h-1.5 rounded-full bg-alrecz-blood animate-pulse" />
                {status}
              </span>
            </div>
            <dl className="p-4 space-y-3">
              <div className="flex justify-between">
                <dt className="text-alrecz-silver/60">SESSION TIME</dt>
                <dd className="tabular-nums text-alrecz-offwhite">{time}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-alrecz-silver/60">ARCHIVE ID</dt>
                <dd className="text-alrecz-offwhite">205-{sessionCode}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-alrecz-silver/60">SIGNAL STRENGTH</dt>
                <dd className="text-alrecz-offwhite">{signal}%</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-alrecz-silver/60">FILES INDEXED</dt>
                <dd className="text-alrecz-offwhite">{filesIndexed}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-alrecz-silver/60">RECOVERED ARTWORKS</dt>
                <dd className="text-alrecz-offwhite">{recovered}</dd>
              </div>
              <div className="pt-2">
                <div className="h-1.5 w-full bg-white/10 overflow-hidden">
                  <div className="h-full bg-alrecz-blood/80" style={{ width: `${signal}%` }} />
                </div>
              </div>
            </dl>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/60 backdrop-blur-sm py-2 overflow-hidden">
        <div className="whitespace-nowrap alrecz-marquee font-mono text-[10px] text-alrecz-silver tracking-[0.3em]">
          ⟡ SYSTEM BROADCAST ⟡ NEW DROPS SOON ⟡ BOOKING OPEN ⟡ ARCHIVE UPDATED ⟡ SYSTEM BROADCAST ⟡ NEW DROPS SOON ⟡ BOOKING OPEN ⟡ ARCHIVE UPDATED ⟡
        </div>
      </div>
    </section>
  );
}
