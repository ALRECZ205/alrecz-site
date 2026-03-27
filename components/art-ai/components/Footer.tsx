import React from 'react';
import { Instagram, Youtube, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-alrecz-black border-t border-white/10 pt-16 pb-8 px-6 md:px-12 font-mono text-xs overflow-hidden relative">
      <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 relative z-10">
        
        {/* Left */}
        <div>
          <div className="text-4xl font-display font-bold mb-4 text-alrecz-offwhite uppercase tracking-tighter">ALRECZ://ART_TERMINAL</div>
          <p className="text-alrecz-silver/60 max-w-xs mb-8 leading-relaxed">
            A digital exhibition archive for visual art, installations, design, and experimental image-making.
            <br/><br/>
            Est. 2026. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" data-cursor="hover" className="text-alrecz-silver/60 hover:text-alrecz-blood transition-colors"><Instagram size={20} /></a>
            <a href="#" data-cursor="hover" className="text-alrecz-silver/60 hover:text-alrecz-blood transition-colors"><Youtube size={20} /></a>
            <a href="#" data-cursor="hover" className="text-alrecz-silver/60 hover:text-alrecz-blood transition-colors"><Globe size={20} /></a>
            <a href="#" data-cursor="hover" className="text-alrecz-silver/60 hover:text-alrecz-blood transition-colors"><Mail size={20} /></a>
          </div>
        </div>
        
        {/* Right */}
        <div className="text-left md:text-right">
           <div className="mb-4 text-alrecz-blood animate-pulse flex items-center gap-2 md:justify-end">
             <span className="w-2 h-2 bg-alrecz-blood rounded-full"></span>
             SYSTEM ONLINE
           </div>
           <div className="text-alrecz-silver/60 space-y-2">
             <p>ALRECZ://ART_TERMINAL</p>
             <p>V.3.0.0_EXHIBITION</p>
             <p>NODE: GLOBAL</p>
           </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="w-full border-t border-white/10 pt-6 mt-8 relative z-10 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite] text-alrecz-silver/40 tracking-widest uppercase text-[10px]">
          <span className="mx-4">NEW WORKS LOADING</span> • 
          <span className="mx-4">EXHIBITION OPEN</span> • 
          <span className="mx-4">ARCHIVE ACTIVE</span> • 
          <span className="mx-4">SIGNAL STRENGTH 100%</span> • 
          <span className="mx-4">NEW WORKS LOADING</span> • 
          <span className="mx-4">EXHIBITION OPEN</span> • 
          <span className="mx-4">ARCHIVE ACTIVE</span> • 
          <span className="mx-4">SIGNAL STRENGTH 100%</span> • 
          <span className="mx-4">NEW WORKS LOADING</span> • 
          <span className="mx-4">EXHIBITION OPEN</span> • 
          <span className="mx-4">ARCHIVE ACTIVE</span> • 
          <span className="mx-4">SIGNAL STRENGTH 100%</span>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-alrecz-blood/5 rounded-full blur-[100px] pointer-events-none z-0"></div>
    </footer>
  );
};

export default Footer;
