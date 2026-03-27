import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Artwork, ArtCategory } from '../types';

interface CollectionGridProps {
  artworks: Artwork[];
}

const CATEGORIES: ArtCategory[] = ['ALL', 'PAINTING', 'DIGITAL', 'INSTALLATION', 'DESIGN', 'ARCHIVE', 'COLLABORATION'];

const CollectionGrid: React.FC<CollectionGridProps> = ({ artworks }) => {
  const [activeFilter, setActiveFilter] = useState<ArtCategory>('ALL');

  const filteredArtworks = activeFilter === 'ALL' 
    ? artworks 
    : artworks.filter(art => art.category === activeFilter);

  return (
    <section className="py-32 px-6 md:px-12 w-full bg-alrecz-black">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Filter System */}
        <div className="mb-20">
          <div className="font-mono text-xs text-alrecz-silver tracking-widest uppercase mb-8 flex items-center gap-4">
            <span className="w-2 h-2 bg-alrecz-blood rounded-full"></span>
            Collection Filter
          </div>
          
          <div className="flex flex-wrap gap-4 md:gap-8 border-b border-white/10 pb-6">
            {CATEGORIES.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveFilter(cat)}
                data-cursor="hover"
                className={`relative font-display font-medium text-sm md:text-lg uppercase tracking-widest transition-all duration-300 pb-2 ${activeFilter === cat ? 'text-alrecz-offwhite' : 'text-alrecz-silver/50 hover:text-alrecz-silver'}`}
              >
                {cat}
                {activeFilter === cat && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-alrecz-blood"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16"
        >
          <AnimatePresence>
            {filteredArtworks.map((art, index) => (
              <motion.div 
                key={art.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="group cursor-pointer"
                data-cursor="hover"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden border border-white/10 mb-6 bg-alrecz-charcoal">
                  <img 
                    src={art.image} 
                    alt={art.title} 
                    className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-alrecz-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Archive Label */}
                  <div className="absolute bottom-4 left-4 font-mono text-[10px] text-alrecz-silver bg-black/80 px-2 py-1 backdrop-blur-sm border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {art.archiveCode || `ARC-${index.toString().padStart(3, '0')}`}
                  </div>
                </div>

                {/* Text Content */}
                <div>
                  <h4 className="font-display font-bold text-xl uppercase tracking-tight mb-2 group-hover:text-alrecz-blood transition-colors">
                    {art.title}
                  </h4>
                  <div className="flex justify-between items-center">
                    <p className="font-sans text-sm text-alrecz-silver">
                      {art.year} <span className="mx-2 opacity-50">•</span> {art.medium}
                    </p>
                    <span className="font-mono text-[10px] text-alrecz-offwhite/50 uppercase tracking-widest border border-white/10 px-2 py-1">
                      {art.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
};

export default CollectionGrid;
