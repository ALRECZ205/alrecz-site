import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GlitchText from './GlitchText';

const ImmersiveBreak: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2]);

  return (
    <section ref={containerRef} className="relative w-full h-screen min-h-[800px] bg-alrecz-black overflow-hidden flex items-center justify-center border-y border-white/5">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-alrecz-black/60 mix-blend-multiply z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-alrecz-black via-transparent to-alrecz-black z-20"></div>
        <motion.img 
          style={{ y, scale: 1.2 }}
          src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1920&auto=format&fit=crop" 
          alt="Immersive Installation" 
          className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
        />
      </div>

      {/* Red Glow Accent */}
      <motion.div 
        style={{ opacity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-alrecz-blood/20 rounded-full blur-[120px] z-10 pointer-events-none mix-blend-screen animate-pulse-slow"
      />

      {/* Content */}
      <div className="relative z-30 flex flex-col items-center text-center px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="font-mono text-xs text-alrecz-blood tracking-widest uppercase mb-8 border border-alrecz-blood/30 px-4 py-2 bg-alrecz-blood/10 backdrop-blur-sm inline-block">
            EXHIBITION_MODE: LIVE
          </div>
          
          <h2 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-[0.9] mb-8 text-shadow-red flex flex-col items-center gap-2">
            <GlitchText text="A rotating archive" />
            <GlitchText text="of image systems," />
            <GlitchText text="memory fragments," />
            <GlitchText text="visual experiments," />
            <GlitchText text="and cultural residue." />
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-alrecz-silver font-light tracking-wide mb-12 max-w-2xl mx-auto opacity-80">
            The ALRECZ terminal is a living entity. It consumes, processes, and outputs visual data in real-time.
          </p>
          
          <button data-cursor="hover" className="px-10 py-5 bg-alrecz-offwhite text-alrecz-black font-display font-bold tracking-widest uppercase hover:bg-alrecz-blood hover:text-white transition-all duration-300 glow-red-hover">
            Enter The Void
          </button>
        </motion.div>
      </div>

      {/* Terminal Overlays */}
      <div className="absolute top-8 left-8 font-mono text-[10px] text-alrecz-silver/50 tracking-widest uppercase z-30 hidden md:block">
        SYS.REQ: 0x8F92A<br/>
        MEM.ALLOC: 1024TB<br/>
        STATUS: RENDERING
      </div>
      
      <div className="absolute bottom-8 right-8 font-mono text-[10px] text-alrecz-silver/50 tracking-widest uppercase z-30 hidden md:block text-right">
        COORD: 34.0522° N, 118.2437° W<br/>
        NODE: ALPHA_01<br/>
        SYNC: 99.9%
      </div>
    </section>
  );
};

export default ImmersiveBreak;
