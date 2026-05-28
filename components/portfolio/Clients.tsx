'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SplitText from './SplitText';

const clientCategories = [
  {
    title: 'Arts, Entertainment & Venues',
    clients: ['97 South Song Sessions', 'Desert Star Estate', 'Lauzon Music', 'Liz Long', 'Ottawa Black Bears', 'Paranormal Tours', 'Reid Flocking', 'Steady Canoe Studio', 'Telling Tales Festival', 'The Cotton Factory', 'Tim Hawkes Music']
  },
  {
    title: 'Legal & Professional',
    clients: ['ACT (Advanced Consulting & Training)', 'Baumen Associates Limited', 'Brown Lawyers', 'Corporate Protection Group', 'Dataforge', 'DMC LLP', 'DST Advisory Group', 'Elby Professional Recruitment', 'Financial Planet', 'Findlay Law', 'Findlay Personal Injury Lawyers', 'InRoads Insurance', 'Kulark (Law)', 'Eyko', 'MacKinnon Law Associates', 'Manifestology', 'Mayfield Mathers (Law)', 'Proma Management Inc.', 'Reybroek Law', 'RossMcbride', 'Scarfone Hawkins LLP', 'Smithen Family Law', 'The Design Squire', 'White Oak Transport Ltd.', 'William Adams (Law)']
  },
  {
    title: 'Construction, Trades & Auto',
    clients: ['Altra Construction Rentals', 'Armada Construction', 'Beech Motorworks', 'Catlin Contracting', 'Cicala Homes', 'Deckton', 'Eastside Auto', 'Nelson Water', 'Titan Demolition', 'Valcor Construction']
  },
  {
    title: 'Manufacturing & Logistics',
    clients: ['Adventec Manufacturing Inc.', 'Air Separation Technologies Inc.', 'Allegro Freight', 'AML Crating', 'CFT Storage', 'IceCo Advanced Arena Products', 'Intuitive Water Systems', 'Soper’s Engineered Fabric Solutions', 'Vinyl Trends']
  },
  {
    title: 'Healthcare & Wellness',
    clients: ['100x Mobile Vet', 'Dental Place', 'Dentist Lawyers', 'Denturist Association of Ontario', 'Dr Wendy Low (Dentistry)', 'Eden Exotics', 'Elysian', 'Paws & Claws', 'St. Joseph’s Healthcare Hamilton', 'St. Joseph’s Health System', 'Treat Hearing, Health, Care', 'Zee Float']
  },
  {
    title: 'Tech, Gaming & Agency',
    clients: ['Airwhistle Media', 'Cloud Secure Tech', 'Digital 21', 'Enedym', 'FutureCraft', 'Geotab', 'Glitch Energy', 'Human Code / Imagination Plus', 'Innosys Power', 'JumpFactor', 'Muse Marketing Group', 'nVision', 'P3T Lab', 'Quilen', 'Soil Health', 'The Legend of Haven', 'Veritas Branding', 'WebMarketers', 'Zenith VR']
  },
  {
    title: 'Education, Public & Food',
    clients: ['Acces Employment', 'Automotive Policy Research Centre', 'Beech Consulting', 'Bullivant & Associates', 'Dundas Valley School of Art', 'Flour Child Bakery', 'Hamilton Literacy Council', 'Modern Training Ontario', 'Oakville Meals on Wheels', 'Ottawa Meal Prep', 'PIVOT Tech Conference', 'Sensity Deafblind Network', 'ShopPros']
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
