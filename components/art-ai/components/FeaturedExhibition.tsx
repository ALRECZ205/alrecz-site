import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Artwork } from '../types';

interface FeaturedExhibitionProps {
  artwork: Artwork;
}

const FeaturedExhibition: React.FC<FeaturedExhibitionProps> = ({ artwork }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="relative w-full py-32 px-6 md:px-12 bg-alrecz-charcoal border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Image Container */}
        <div className="w-full lg:w-3/5 relative group" data-cursor="hover">
          <div className="absolute -inset-4 bg-alrecz-blood/5 blur-2xl group-hover:bg-alrecz-blood/10 transition-all duration-700"></div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] overflow-hidden border border-white/10"
          >
            <motion.img 
              style={{ y, scale: 1.2 }}
              src={artwork.image} 
              alt={artwork.title} 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            {/* Overlay Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
          </motion.div>
          
          {/* Metadata Labels */}
          <div className="absolute bottom-4 left-4 flex gap-3 font-mono text-[10px] tracking-widest uppercase text-alrecz-silver bg-black/80 backdrop-blur-md px-3 py-2 border border-white/10">
            <span>{artwork.medium}</span>
            <span className="text-alrecz-blood">•</span>
            <span>{artwork.status || 'EXHIBITING'}</span>
            <span className="text-alrecz-blood">•</span>
            <span>{artwork.location || 'MAIN HALL'}</span>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center">
          <div className="font-mono text-xs text-alrecz-blood tracking-widest uppercase mb-6 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-alrecz-blood"></span>
            Featured Exhibition
          </div>
          
          <h2 className="font-display font-bold text-5xl md:text-6xl uppercase tracking-tighter leading-none mb-4">
            {artwork.title}
          </h2>
          
          <div className="font-sans text-lg text-alrecz-silver mb-8 flex items-center gap-4">
            <span>{artwork.artist}</span>
            <span className="w-1 h-1 bg-white/30 rounded-full"></span>
            <span>{artwork.year}</span>
          </div>
          
          <p className="font-sans text-alrecz-offwhite/70 leading-relaxed mb-12 max-w-md">
            {artwork.description || "A deep dive into procedural generation and mixed media. This piece explores the boundaries between organic textures and digital decay, serving as a cornerstone of the current archive."}
          </p>
          
          <button data-cursor="hover" className="self-start px-8 py-4 border border-white/20 text-alrecz-offwhite font-display font-bold tracking-widest uppercase hover:border-alrecz-blood hover:text-alrecz-blood transition-all duration-300 relative overflow-hidden group">
            <span className="relative z-10">View Exhibition</span>
            <div className="absolute inset-0 bg-alrecz-blood/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default FeaturedExhibition;
