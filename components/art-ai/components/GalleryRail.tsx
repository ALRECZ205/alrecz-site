import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Artwork } from '../types';

interface GalleryRailProps {
  title: string;
  artworks: Artwork[];
  autoScroll?: boolean;
}

const GalleryRail: React.FC<GalleryRailProps> = ({
  title,
  artworks,
  autoScroll = false
}) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

 const displayedArtworks = autoScroll
  ? [...artworks, ...artworks]
  : artworks;

  

useEffect(() => {
  if (carousel.current) {
    if (autoScroll) {
      setWidth(carousel.current.scrollWidth / 2);
    } else {
      setWidth(
        carousel.current.scrollWidth -
        carousel.current.offsetWidth
      );
    }
  }
}, [artworks, autoScroll]);

  return (
    <section className="py-24 px-6 md:px-12 w-full overflow-hidden border-b border-white/5 bg-alrecz-black">
      <div className="max-w-[1800px] mx-auto">
        
        <div className="flex justify-between items-end mb-12">
  <h3 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tighter text-alrecz-offwhite">
    {title}
  </h3>

  {!autoScroll && (
    <div className="font-mono text-xs text-alrecz-silver tracking-widest uppercase hidden md:block">
      Drag to explore &rarr;
    </div>
  )}
</div>

        {/* Horizontal Scroll Container */}
        
<motion.div
  ref={carousel}
  className={`overflow-hidden pb-12 ${
    !autoScroll
      ? "cursor-grab active:cursor-grabbing"
      : ""
  }`}
>
          <motion.div
  className="flex gap-8"
  drag={!autoScroll ? "x" : false}
  dragConstraints={!autoScroll ? { right: 0, left: -width } : undefined}
  dragElastic={0.1}
  animate={autoScroll ? { x: [0, -width] } : undefined}
  transition={
    autoScroll
      ? {
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }
      : undefined
  }
>
              {displayedArtworks.map((art, index) => (
              <motion.div 
                key={`${art.id}-${index}`}
                className="min-w-[300px] md:min-w-[400px] lg:min-w-[500px] group relative transform-gpu"
                whileHover={!autoScroll ? { y: -10 } : undefined}
                transition={{ duration: 0.4, ease: "easeOut" }}
                data-cursor={!autoScroll ? "hover" : undefined}
              >
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden border border-white/10 mb-6 bg-alrecz-charcoal pointer-events-none">
                  <motion.img 
                    src={art.image} 
                    alt={art.title} 
                    className={`w-full h-full object-cover transition-all duration-700 ${
  autoScroll
    ? ''
    : 'grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100'
}`}
                    whileHover={!autoScroll ? { scale: 1.05 } : undefined}
                    transition={{ duration: 0.7 }}
                  />
                  {/* Hover Overlay */}
                  {!autoScroll && (
  <div className="absolute inset-0 bg-alrecz-blood/0 group-hover:bg-alrecz-blood/10 transition-colors duration-500"></div>
)}
                  
                  {/* Archive Code */}
                  <div className="absolute top-4 right-4 font-mono text-[10px] text-alrecz-silver bg-black/60 px-2 py-1 backdrop-blur-sm border border-white/10">
                    {art.archiveCode || `ARC-${index.toString().padStart(3, '0')}`}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex justify-between items-start pointer-events-none">
                  <div>
                    <h4
  className={`font-display font-bold text-2xl uppercase tracking-tight mb-2 ${
    !autoScroll ? 'group-hover:text-alrecz-blood transition-colors' : ''
  }`}
>
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

