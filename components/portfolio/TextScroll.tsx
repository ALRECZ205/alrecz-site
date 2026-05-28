'use client';

import { motion } from 'motion/react';

export default function TextScroll() {
  return (
    <section className="py-32 md:py-48 px-6 md:px-12 bg-brand-black text-white overflow-hidden relative border-t border-brand-red/20">
      <div className="absolute inset-0 dither-pattern opacity-10 pointer-events-none mix-blend-overlay" />
      <div className="container mx-auto text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-[10vw] md:text-[6vw] leading-[1.1] font-bold tracking-tighter uppercase"
        >
          <span className="text-outline">In a world filled with generic AI noise,</span> 
          <span className="inline-block mx-4 align-middle w-[15vw] h-[8vw] md:w-[12vw] md:h-[6vw] rounded-none overflow-hidden border border-brand-red relative group">
            <div className="absolute inset-0 bg-brand-red/30 mix-blend-overlay z-10" />
            <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition-all duration-500" alt="" />
          </span>
          I help brands uncover their why 
          <span className="inline-block mx-4 align-middle w-[15vw] h-[8vw] md:w-[12vw] md:h-[6vw] rounded-none overflow-hidden border border-brand-red relative group">
            <div className="absolute inset-0 bg-brand-red/30 mix-blend-overlay z-10" />
            <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition-all duration-500" alt="" />
          </span>
          <span className="text-outline">and scale it with creativity</span> 
          <span className="inline-block mx-4 align-middle w-[15vw] h-[8vw] md:w-[12vw] md:h-[6vw] rounded-none overflow-hidden border border-brand-red relative group">
            <div className="absolute inset-0 bg-brand-red/30 mix-blend-overlay z-10" />
            <img src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 transition-all duration-500" alt="" />
          </span>
          and technology driven by strategy.
        </motion.h2>
      </div>
    </section>
  );
}
