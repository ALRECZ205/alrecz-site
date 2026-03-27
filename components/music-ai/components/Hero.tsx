import React from 'react';
import ThreeScene from '@/components/legacy/components/ThreeScene';
import GlitchText from '@/components/legacy/components/GlitchText';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[85vh] md:h-screen flex flex-col justify-center overflow-hidden border-b border-white/10">
      {/* Background visuals */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[70vw] h-[70vh] max-w-[900px] opacity-30">
          <ThreeScene />
        </div>
      </div>

      {/* Red glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-alrecz-blood opacity-15 blur-[160px]" />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black opacity-95" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 w-full max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center h-full">
        <div className="md:col-span-8 flex flex-col justify-center">
          <div className="font-mono text-alrecz-blood text-xs md:text-sm mb-4 tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-alrecz-blood rounded-full animate-pulse" />
            SIGNAL: LIVE • MODE: BROADCAST • 2026
          </div>

          <h1 className="text-6xl md:text-9xl lg:text-[10rem] font-grotesk font-bold leading-[0.85] tracking-tighter uppercase text-alrecz-paper mb-6 mix-blend-difference">
            Alrecz <br />
            <span className="text-transparent stroke-text hover:text-alrecz-blood transition-colors duration-500">
              Music
            </span>
          </h1>

          <p className="font-mono text-gray-400 max-w-xl text-sm md:text-lg leading-relaxed border-l border-alrecz-blood pl-4">
            Broadcasting from the underground. A digital archive of heavy metal undertones, phonk rhythms, and experimental frequencies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="group relative px-8 py-4 bg-alrecz-paper text-black font-grotesk font-bold text-xl uppercase tracking-wider overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Play Latest Drop <ArrowRight size={20} />
              </span>
              <div className="absolute inset-0 bg-alrecz-blood transform -translate-x-full skew-x-12 group-hover:translate-x-0 transition-transform duration-300" />
            </button>

            <button className="px-8 py-4 border border-white/20 text-white font-grotesk font-bold text-xl uppercase tracking-wider hover:bg-white/5 transition-colors">
              Enter Lost Boys
            </button>
          </div>
        </div>

        {/* Right side panel */}
        <div className="hidden md:flex md:col-span-4 flex-col items-end justify-between h-1/2 border-l border-white/10 pl-8">
          <div className="text-right">
            <GlitchText text="SYSTEM_READY" className="font-mono text-xs text-gray-500" />
            <div className="w-full h-px bg-gray-800 my-2" />
            <p className="font-mono text-[10px] text-gray-600">
              LOC: UNKNOWN <br />
              LAT: 33.5186 <br />
              LNG: 86.8104
            </p>
          </div>

          <div className="w-full aspect-square border border-white/10 p-2 relative bg-white/[0.03]">
            <div className="absolute top-0 left-0 w-full h-px bg-alrecz-blood" />
            <div className="w-full h-full flex items-center justify-center bg-white/[0.02] overflow-hidden">
              <div className="w-full h-1 bg-alrecz-blood animate-scanline absolute top-0" />
              <span className="font-grotesk text-6xl text-white/10 font-bold">AL</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 2px #EDEDED;
        }
        @media (min-width: 768px) {
          .stroke-text {
            -webkit-text-stroke: 4px #EDEDED;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;