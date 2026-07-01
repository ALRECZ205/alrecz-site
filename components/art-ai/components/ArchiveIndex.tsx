import React from 'react';

const ArchiveIndex: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 w-full bg-alrecz-black border-t border-white/5">
      <div className="max-w-[1800px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-start">
        
        {/* Left: Curatorial Statement */}
        <div className="w-full lg:w-1/2">
          <div className="font-mono text-xs text-alrecz-silver tracking-widest uppercase mb-8 flex items-center gap-4">
            <span className="w-2 h-2 bg-alrecz-blood rounded-full"></span>
            Archive Philosophy
          </div>
          
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-none mb-12">
            The ALRECZ Visual Archive
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-alrecz-offwhite/80 font-light tracking-wide mb-8 leading-relaxed">
            This space serves as a digital repository for the visual output of the ALRECZ ecosystem. It is not merely a portfolio, but a curated exhibition of ongoing experiments, finalized works, and the raw materials of our creative process.
          </p>
          
          <p className="font-sans text-base text-alrecz-silver/60 leading-relaxed mb-12">
            We believe in the preservation of digital artifacts. Every piece logged here is assigned a unique identifier and stored within the terminal&apos;s memory banks, accessible to those who seek the intersection of art, technology, and underground culture.
          </p>
          
          <button data-cursor="hover" className="px-8 py-4 border border-white/20 text-alrecz-offwhite font-display font-bold tracking-widest uppercase hover:border-alrecz-blood hover:text-alrecz-blood transition-all duration-300">
            Read Manifesto
          </button>
        </div>

        {/* Right: Terminal Metadata Panel */}
        <div className="w-full lg:w-1/2 relative group">
          <div className="absolute -inset-4 bg-alrecz-blood/5 blur-xl group-hover:bg-alrecz-blood/10 transition-all duration-700"></div>
          <div className="relative border border-white/10 bg-alrecz-charcoal/50 backdrop-blur-md p-8 md:p-12 font-mono text-sm tracking-widest uppercase text-alrecz-silver">
            
            <div className="flex justify-between items-center border-b border-white/10 pb-6 mb-6">
              <span className="text-alrecz-blood font-bold">TERMINAL_DATA</span>
              <span className="animate-pulse">_REC</span>
            </div>
            
            <ul className="space-y-6">
              <li className="flex justify-between items-center group/item hover:text-alrecz-offwhite transition-colors">
                <span className="opacity-50">Collection ID:</span>
                <span className="text-right">ALR-ART-001</span>
              </li>
              <li className="flex justify-between items-center group/item hover:text-alrecz-offwhite transition-colors">
                <span className="opacity-50">Exhibition Status:</span>
                <span className="text-right text-alrecz-blood">ACTIVE</span>
              </li>
              <li className="flex justify-between items-center group/item hover:text-alrecz-offwhite transition-colors">
                <span className="opacity-50">Current Node:</span>
                <span className="text-right">MAIN_GALLERY</span>
              </li>
              <li className="flex justify-between items-center group/item hover:text-alrecz-offwhite transition-colors">
                <span className="opacity-50">City:</span>
                <span className="text-right">GLOBAL_NETWORK</span>
              </li>
              <li className="flex justify-between items-center group/item hover:text-alrecz-offwhite transition-colors">
                <span className="opacity-50">Year:</span>
                <span className="text-right">2026</span>
              </li>
              <li className="flex justify-between items-center group/item hover:text-alrecz-offwhite transition-colors">
                <span className="opacity-50">Access Level:</span>
                <span className="text-right">PUBLIC_VIEWING</span>
              </li>
              <li className="flex justify-between items-center group/item hover:text-alrecz-offwhite transition-colors">
                <span className="opacity-50">Medium Categories:</span>
                <span className="text-right">7_ACTIVE</span>
              </li>
            </ul>
            
            <div className="mt-12 pt-6 border-t border-white/10 flex justify-between items-center text-[10px] opacity-50">
              <span>SYSTEM_UPTIME: 99.9%</span>
              <span>LAST_SYNC: JUST NOW</span>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ArchiveIndex;
