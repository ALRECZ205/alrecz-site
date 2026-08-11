'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import SplitText from './SplitText';

const META = [
  { label: 'LOC //', value: 'Birmingham, Alabama [205]', align: 'md:text-left' },
  { label: 'SPEC //', value: 'AI, Branding, & Web Design', align: 'md:text-center' },
  { label: 'EXP //', value: '10+ Years', align: 'md:text-right' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // A slow, subtle Ken-Burns drift on the background as the hero scrolls
  // out of view — reads as cinematic depth rather than a flashy effect,
  // and settles by the time the next section arrives.
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex flex-col justify-between bg-brand-black pt-32 pb-12 px-6 md:px-12 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-brand-black mix-blend-multiply z-10 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10" />
        <div className="absolute inset-0 dither-pattern opacity-30 z-10 mix-blend-overlay" />

        <motion.video
          autoPlay
          loop
          muted
          playsInline
          style={{ scale: videoScale }}
          className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 brightness-75 will-change-transform"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </motion.video>
      </div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-20 flex-1 flex flex-col justify-center items-center text-center"
      >
        <div className="w-full flex flex-col items-center group">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.3em] mb-4 font-mono text-brand-red"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse motion-reduce:animate-none" />
            SYS.ROLE // CREATIVE_DIRECTOR
          </motion.p>

          <div className="relative">
            <SplitText
              text="PELATIAH"
              className="text-[15vw] md:text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase whitespace-nowrap justify-center text-glitch"
              delay={0.4}
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1.4, delay: 1.1, ease: 'easeOut' }}
              whileHover={{ opacity: 0.85 }}
              className="absolute -inset-4 bg-brand-red/20 blur-2xl -z-10 pointer-events-none motion-reduce:hidden"
            />
          </div>
        </div>
      </motion.div>

      {/* Scroll cue — a quiet signal, not a spectacle */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.8, delay: 1.6 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-[104px] md:bottom-[118px] left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 motion-reduce:hidden"
        aria-hidden="true"
      >
        <span className="font-mono text-[9px] tracking-[0.3em] text-white/40 uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-brand-red to-transparent"
        />
      </motion.div>

      <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono opacity-80 border-t border-brand-red/30 pt-8 mt-auto text-brand-red-light">
        {META.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col gap-1 ${item.align}`}
          >
            <span className="text-white/50">{item.label}</span>
            <span>{item.value}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
