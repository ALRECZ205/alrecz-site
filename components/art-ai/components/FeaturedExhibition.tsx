import React, { useRef, useState } from 'react';
import {
  motion,
  AnimatePresence
} from 'framer-motion';

interface Exhibition {
  title: string;
  artist: string;
  year: string;
  image: string;
  ratio: string;
  medium: string;
  status: string;
  location: string;
  description: string;
}

const exhibitions: Exhibition[] = [
  {
    title: 'Procedural Decay',
    artist: 'ALRECZ',
    year: '2026',
    image: '/images/art/procedural-decay.jpg',
    ratio: "aspect-[3/2]",
    medium: 'Digital',
    status: 'Exhibiting',
    location: 'Birmingham, AL',
    description: 'An exploration of algorithmic degradation and digital entropy.'
  },
  {
    title: 'The JIG is UP!',
    artist: 'Pelatiah I$H Williams',
    year: '2026',
    image: '/images/art/HOV.jpg',
    ratio: "aspect-square",
    medium: 'Digital',
    status: 'Exhibiting',
    location: 'Birmingham, AL',
    description: 'A digital painting of Jay-Z performing for the 2026 Roots Picnic.'
  },

  // NEW EXHIBITION #3
  {
    title: 'Afrofuturistic',
    artist: 'Pelatiah I$H Williams',
    year: '2026',
    image: '/images/art/LS.jpg',
    ratio: "aspect-[2/3]",
    medium: 'Acrylic Paint',
    status: 'Exhibiting',
    location: 'Birmingham, AL',
    description: '"A glimpse into the neon-lit grid. This commissioned piece brings a cyberpunk ronin to life, blending heavy industrial techwear with raw, battle-hardened resilience. Deeply inspired by the gritty energy of 90s manga, featuring sharp ink work and high-contrast cel-shading to make the city pulse."'
  },

  // NEW EXHIBITION #4
  {
    title: 'Joy, Love, & Growth',
    artist: 'Pelatiah I$H Williams',
    year: '2026',
    image: '/images/art/mural1.jpg',
    ratio: "aspect-[4/3]",
    medium: 'Digital',
    status: 'Exhibiting',
    location: 'Birmingham, AL',
    description: '"A deeply personal commission for a local father, Joy, Love, & Growth captures the essence of his three children as the core foundations of family legacy. The piece utilizes expressive, graphic linework and a vibrant color palette to give each subject a distinct emotional presence. The composition weaves together botanical elements and subtle tech-inspired circuitry to symbolize both natural grounding and limitless future potential, creating a modernized portrait of familial bonds."'
  },
];

const FeaturedExhibition = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [direction, setDirection] = useState(1);

  const artwork = exhibitions[currentIndex];

  const nextArtwork = () => {
  setDirection(1);
  setCurrentIndex(
    (prev) => (prev + 1) % exhibitions.length
  );
};

const prevArtwork = () => {
  setDirection(-1);
  setCurrentIndex(
    (prev) =>
      (prev - 1 + exhibitions.length) %
      exhibitions.length
  );
};

  return (
    <section ref={containerRef} className="relative w-full py-32 px-6 md:px-12 bg-alrecz-charcoal border-y border-white/5 overflow-hidden">
      <AnimatePresence mode="wait">
  <motion.div
  key={currentIndex}
  initial={{
    opacity: 0,
    x: direction > 0 ? 600 : -600
  }}
  animate={{
    opacity: 1,
    x: 0
  }}
  exit={{
    opacity: 0,
    x: direction > 0 ? -600 : 600
  }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1]
  }}
  className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center overflow-hidden"
>
        
        {/* Image Container */}
<div
  className="w-full lg:w-3/5 relative group"
  data-cursor="hover"
>
  <div className="absolute -inset-4 bg-alrecz-blood/5 blur-2xl group-hover:bg-alrecz-blood/10 transition-all duration-700"></div>

  <motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.5 }}
  className={`relative overflow-hidden border border-white/10 ${artwork.ratio}`}
>
    
<motion.img
  src={artwork.image}
  alt={artwork.title}
  style={{ scale: 1.01 }}
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
          <div className="flex items-center gap-4 mt-6">
  <button
    onClick={prevArtwork}
    className="w-12 h-12 border border-white/20 hover:border-alrecz-blood hover:text-alrecz-blood transition-all"
  >
    ←
  </button>

  <button
    onClick={nextArtwork}
    className="w-12 h-12 border border-white/20 hover:border-alrecz-blood hover:text-alrecz-blood transition-all"
  >
    →
  </button>

  <span className="font-mono text-xs text-white/40">
    [{String(currentIndex + 1).padStart(2, '0')} / {String(exhibitions.length).padStart(2, '0')}]
  </span>
</div>
        </div>

    </motion.div>
  </AnimatePresence>

</section>
);
};

export default FeaturedExhibition;
