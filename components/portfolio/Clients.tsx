'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SplitText from './SplitText';

const clientCategories = [
  {
    title: 'Arts, Entertainment & Venues',
    clients: ['World Police & Fire Games 2025', 'Coca-Cola', 'Redbull', 'Monster Energy', 'Mattel', 'Workplay', '3000 Bar', 'ZYDECO', 'Daves Pub', 'Saturn Birmingham', 'Freedom House', 'Woodlawn Theatre', 'Firehouse Avondale', 'Upstairs At Avondale', 'Contiental Drift']
  },
  {
    title: 'Legal & Professional',
    clients: ['City of Birmingham', 'City of Bessemer', 'Halo Dental', 'Adams Dental', 'Dataforge', 'Reality Link', 'DST Advisory Group', 'Rebirth Marketing & Consulting', 'Gulf South Holdings', 'Signature Brand Management', 'Sophia',]
  },
  {
    title: 'Construction, Trades & Auto',
    clients: ['Altec', 'CraneWorks', 'Brookstone Restoration', 'Crusher Works', 'DJ Construction', 'EMCOR Services', 'Grenergy', 'Max Tool, INC.', 'McWaye Plant & Industrial', 'Valcor Construction', 'Ace Tree Services', 'Robins & Morton', 'Sprayroq', 'Steel City Industrial', 'SUNOCO' ]
  },
  {
    title: 'Manufacturing & Logistics',
    clients: ['Bulldog Logistics', 'EBSCO Industries', 'UPS', 'Fed-x', 'MOHR', 'Polaris Inc.', 'Pyne Rock', 'Rather Recycling', 'Vinyl Trends', 'SA Recycling', 'Sain Engineering', 'Satellites Unlimited', 'Steel City Tap']
  },
  {
    title: 'Healthcare & Wellness',
    clients: ['24/7 Fitness', 'Midfield Animal Hospital', 'Natures Food Store', 'Near To Me CBD', 'Canna-Bliss', 'Cannabama', 'P4 Physical Therapy', 'Panther Nutrition', 'Pelham Eye Center', 'UAB Hospital', 'Perfect Body Laser and Wellness', 'Sanctuary Gym']
  },
  {
    title: 'Tech, Gaming & Agency',
    clients: ['ITAC Solutions', 'Cloud Secure Tech', 'Digital 21', 'TraiVision', 'FutureCraft', 'ARECZ', 'Visual Marking Systems', 'Vision Security Technologies', 'Ryecroft Creative', 'Muse Marketing Group', 'nVision', 'P3T Lab', 'Quilen', 'Soil Health', 'The Legend of Haven', 'Veritas Branding', 'WebMarketers', 'Zenith VR']
  },
  {
    title: 'Education, Public & Food',
    clients: ['Birmingham Youth YMCA', 'MCYI', 'Red Diamond', 'UAB HCOP Program', 'UAB', 'Birmingham Public Library', 'Homewood Middle School', 'Alabama Schoole of Fine Arts', 'Birmingham Southern College', 'Exotic Wings & Things', 'City Bowls', 'Hokes Bluff Public Library', '5 Star Cutz']
  }
];

export default function Clients() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="clients" className="py-24 md:py-32 px-6 md:px-12 bg-brand-black text-white border-t border-brand-red/20 relative">
      <div className="absolute inset-0 dither-pattern opacity-5 pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <div className="sticky top-32">
              <p className="uppercase tracking-[0.2em] text-xs mb-6 font-mono text-brand-red">[ SYS.DIR // CLIENTS ]</p>
              <SplitText text="これまでのクライアント" className="text-5xl md:text-6xl font-bold uppercase tracking-tighter mb-8 text-outline" />
              <SplitText 
                text="A decade of shaping brand identities for global tech leaders and local cultural icons." 
                className="text-3xl md:text-5xl font-medium uppercase tracking-tight leading-tight mb-16 text-white/80" 
              />
              
              <a href="#contact" className="inline-flex items-center gap-6 bg-transparent border border-brand-red text-brand-red px-8 py-5 font-mono text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-red hover:text-brand-black transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-brand-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out -z-10" />
                <span>[ EXECUTE // CONNECT ]</span>
                <div className="w-8 h-8 flex items-center justify-center">
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5">
            <div className="border-t border-brand-red/20">
              {clientCategories.map((cat, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="border-b border-brand-red/20">
                    <button 
                      className="w-full py-8 flex items-center gap-6 text-left hover:text-brand-red transition-colors group"
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                    >
                      <div className="w-10 h-10 shrink-0 relative text-brand-red">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" preserveAspectRatio="none">
                          <rect x="2" y="2" width="36" height="36" stroke="currentColor" strokeWidth="1" fill="none" className="opacity-30" />
                          <rect 
                            x="2" y="2" width="36" height="36" stroke="currentColor" strokeWidth="1" fill="none" 
                            strokeDasharray="144" 
                            strokeDashoffset={isOpen ? 0 : 144} 
                            className="transition-all duration-700 ease-in-out"
                          />
                          <path 
                            d="M20,12 L20,28" 
                            stroke="currentColor" strokeWidth="1" strokeLinecap="square"
                            className={`transition-transform duration-700 ease-in-out origin-center ${isOpen ? 'rotate-90' : ''}`}
                          />
                          <path 
                            d="M12,20 L28,20" 
                            stroke="currentColor" strokeWidth="1" strokeLinecap="square"
                            className={`transition-transform duration-700 ease-in-out origin-center ${isOpen ? 'rotate-90 scale-x-0' : ''}`}
                          />
                        </svg>
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold tracking-tight uppercase">{cat.title}</h4>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="pb-12 pl-16">
                            <ul className="grid grid-cols-1 gap-y-4">
                              {cat.clients.map((client, i) => (
                                <li key={i} className="opacity-70 text-sm font-mono flex items-start gap-4 hover:text-brand-red hover:opacity-100 transition-colors cursor-default">
                                  <span className="text-brand-red mt-1 font-bold">{'>'}</span>
                                  {client}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
