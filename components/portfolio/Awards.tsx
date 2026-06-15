'use client';

import { motion } from 'motion/react';
import SplitText from './SplitText';

export default function Awards() {
  const awards = [
    { agency: 'Jasmine Hills', org: 'American Advertising Awards (ADDY)', award: 'Top Marketing Design (Gold)', year: '2024' },
    { agency: 'Bauhaus', org: 'Hamilton Spectator', award: 'Top in Illustration (Silver)', year: '2024' },
    { agency: 'Mack Miller (Lithograph)', org: 'Hamilton Spectator', award: 'UAB Top Committe', year: '2024' },
    { agency: 'Lauryn Hill (Digital PAinting)', org: 'Hamilton Spectator', award: 'UAB Top Committe', year: '2024' },
  ];

  return (
    <section id="awards" className="py-24 md:py-32 px-6 md:px-12 bg-brand-black text-white border-t border-brand-red/20 relative">
      <div className="absolute inset-0 dither-pattern opacity-5 pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-4">
            <p className="uppercase tracking-[0.2em] text-xs mb-6 font-mono text-brand-red">[ SYS.DIR // AWARDS ]</p>
            <SplitText text="受賞・表彰" className="text-5xl md:text-6xl font-bold uppercase tracking-tighter text-outline" />
          </div>
          <div className="md:col-span-8 flex items-end">
            <SplitText 
              text="Creative leadership that directly drove agency-wide recognition and growth" 
              className="text-2xl md:text-4xl font-medium uppercase tracking-tight leading-tight text-white/80" 
            />
          </div>
        </div>

        <div className="border-t border-brand-red/20">
          {awards.map((award, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b border-brand-red/20 text-sm md:text-base items-center hover:bg-brand-red/10 transition-colors px-4 -mx-4 font-mono"
            >
              <div className="opacity-70 text-white/70">{award.agency}</div>
              <div className="font-bold text-white/90">{award.org}</div>
              <div className="font-bold text-brand-red">{award.award}</div>
              <div className="md:text-right opacity-50 text-brand-red-light">[{award.year}]</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
