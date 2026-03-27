import React from 'react';
import { motion } from 'framer-motion';
import Artifact3D from './Artifact3D';
import GlitchText from './GlitchText';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-alrecz-black via-alrecz-charcoal to-alrecz-black z-0"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-alrecz-blood via-transparent to-transparent z-0"></div>
      
      {/* Left Content */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center h-full pt-20 md:pt-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-4"
        >
          <div className="font-mono text-xs tracking-widest text-alrecz-silver mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-alrecz-blood rounded-full animate-pulse"></span>
            SIGNAL: ACTIVE • MODE: EXHIBITION • YEAR: 2026
          </div>
          
          <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-none mb-4 text-shadow-red relative z-20">
            <GlitchText text="ALRECZ" className="block" /><br />
            <GlitchText text="ART" className="block" />
          </h1>
          
          <h2 className="font-sans text-xl md:text-2xl text-alrecz-offwhite font-light tracking-wide mb-8 opacity-90 relative z-20">
            Experimental transmissions from the archive.
          </h2>
          
          <p className="font-mono text-sm text-alrecz-silver max-w-md mb-12 leading-relaxed relative z-20">
            A living gallery of visual experiments, archive fragments, installations, design language, and worldbuilding.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 relative z-20">
            <button data-cursor="hover" className="px-8 py-4 bg-alrecz-offwhite text-alrecz-black font-display font-bold tracking-widest uppercase hover:bg-alrecz-blood hover:text-white transition-all duration-300 glow-red-hover group overflow-hidden relative">
              <span className="relative z-10">Enter Gallery</span>
              <div className="absolute inset-0 bg-alrecz-blood translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </button>
            <button data-cursor="hover" className="px-8 py-4 border border-white/20 text-alrecz-offwhite font-display font-bold tracking-widest uppercase hover:border-alrecz-blood hover:text-alrecz-blood transition-all duration-300 group overflow-hidden relative">
              <span className="relative z-10">View Current Exhibition</span>
              <div className="absolute inset-0 bg-alrecz-blood/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0"></div>
            </button>
          </div>
        </motion.div>
      </div>
      
      {/* Right Visual - 3D Artifact */}
      <div className="relative z-10 w-full md:w-1/2 h-[50vh] md:h-screen flex items-center justify-center mt-12 md:mt-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="relative w-full max-w-lg aspect-square"
        >
          {/* Abstract Sculpture Placeholder */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-alrecz-blood/20 to-transparent blur-3xl animate-pulse-slow"></div>
          <div className="w-full h-full border border-white/10 rounded-full flex items-center justify-center relative overflow-hidden backdrop-blur-sm">
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay pointer-events-none"></div>
            
            {/* 3D Canvas */}
            <div className="absolute inset-0 z-10">
              <Artifact3D />
            </div>
            
          </div>
          
          {/* HUD Elements */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-alrecz-blood/50 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-alrecz-blood/50 pointer-events-none"></div>
          <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 font-mono text-[10px] text-alrecz-silver rotate-90 tracking-widest pointer-events-none">
            OBJ_ID: 8992.A // RENDER_MODE: ALPHA
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
