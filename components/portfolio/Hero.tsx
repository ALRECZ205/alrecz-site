'use client';

import { motion } from 'motion/react';
import SplitText from './SplitText';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-between bg-brand-black pt-32 pb-12 px-6 md:px-12 overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-brand-black mix-blend-multiply z-10 opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent z-10" />
        <div className="absolute inset-0 dither-pattern opacity-30 z-10 mix-blend-overlay" />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 brightness-75"
        >
          <source
            src="/video/hero.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative z-20 flex-1 flex flex-col justify-center items-center text-center">
        <div className="w-full flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 font-mono text-brand-red"
          >
            [ SYS.ROLE // CREATIVE_DIRECTOR ]
          </motion.p>

          <div className="relative">
            <SplitText
              text="PELATIAH"
              className="text-[15vw] md:text-[12vw] leading-[0.85] font-bold tracking-tighter uppercase whitespace-nowrap justify-center text-glitch"
              delay={0.4}
            />
            <div className="absolute -inset-4 bg-brand-red/20 blur-2xl -z-10 opacity-0 animate-pulse" />
          </div>
        </div>
      </div>

      <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left text-[10px] md:text-xs uppercase tracking-[0.2em] font-mono opacity-80 border-t border-brand-red/30 pt-8 mt-auto text-brand-red-light">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="md:text-left flex flex-col gap-1"
        >
          <span className="text-white/50">LOC //</span>
          <span>Birmingham, Alabama [205]</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="md:text-center flex flex-col gap-1"
        >
          <span className="text-white/50">SPEC //</span>
          <span>AI, Branding, & Web Design</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="md:text-right flex flex-col gap-1"
        >
          <span className="text-white/50">EXP //</span>
          <span>10+ Years</span>
        </motion.div>
      </div>
    </section>
  );
}