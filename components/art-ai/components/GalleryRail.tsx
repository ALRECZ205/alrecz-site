import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Artwork } from '../types';

interface GalleryRailProps {
  title: string;
  artworks: Artwork[];
}

const GalleryRail: React.FC<GalleryRailProps> = ({ title, artworks }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 w-full overflow-hidden border-b border-white/5 bg-alrecz-black">
      <div className="max-w-[1800px] mx-auto">
        
        <div className="flex justify-between items-end mb-12">
          <h3 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-alrecz-offwhite">
            {title}
          </h3>
          <div className="font-mono text-xs text-alrecz-silver tracking-widest uppercase hidden md:block">
            Drag to explore &rarr;
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <motion.div 
          ref={carousel} 
          className="cursor-grab active:cursor-grabbing overflow-hidden pb-12"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }} 
            className="flex gap-8"
            dragElastic={0.1}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
          >
            {artworks.map((art, index) => (
              <motion.div 
                key={art.id}
                className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] group relative"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                data-cursor="hover"
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden border border-white/10 mb-6 bg-alrecz-charcoal pointer-events-none">
                  <motion.img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-alrecz-blood/0 group-hover:bg-alrecz-blood/10 transition-colors duration-500"></div>
                  
                  {/* Archive Code */}
                  <div className="absolute top-4 right-4 font-mono text-[10px] text-alrecz-silver bg-black/60 px-2 py-1 backdrop-blur-sm border border-white/10">
                    {art.archiveCode || `ARC-${index.toString().padStart(3, '0')}`}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex justify-between items-start pointer-events-none">
                  <div>
                    <h4 className="font-display font-bold text-2xl uppercase tracking-tight mb-2 group-hover:text-alrecz-blood transition-colors">
                      {art.title}
                    </h4>
                    <p className="font-sans text-sm text-alrecz-silver">
                      {art.artist} <span className="mx-2 opacity-50">•</span> {art.year}
                    </p>
                  </div>
                  <div className="font-mono text-[10px] text-alrecz-offwhite border border-white/20 px-2 py-1 uppercase tracking-widest">
                    {art.medium}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default GalleryRail;

