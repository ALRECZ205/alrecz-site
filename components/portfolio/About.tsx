'use client';

import { motion } from 'motion/react';
import SplitText from './SplitText';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-brand-black text-white relative overflow-hidden border-t border-brand-red/20">
      <div className="absolute inset-0 dither-pattern opacity-10 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black pointer-events-none z-10" />
      
      <div className="container mx-auto relative z-20">
        <div className="text-center mb-24 relative">
          <p className="uppercase tracking-[0.3em] text-xs mb-6 font-mono text-brand-red absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full">[ SYS.ID // 001 ]</p>
          <SplitText 
            text="Creative Director" 
            className="text-[15vw] font-bold uppercase tracking-tighter leading-none whitespace-nowrap justify-center text-glitch" 
          />
        </div>

        <div className="flex justify-center mb-32 relative">
          <div className="absolute inset-0 bg-brand-red/20 blur-3xl -z-10 rounded-full opacity-50 animate-pulse" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl overflow-hidden border border-brand-red/30 relative group"
          >
            <div className="absolute inset-0 bg-brand-red/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
            <div className="absolute inset-0 dither-pattern opacity-30 mix-blend-overlay z-10" />
            <img 
              src="https://IMDESIGN.com/wp-content/uploads/2026/02/BH.webp" 
              alt="Pelatiah Morgan" 
              className="w-full h-auto grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700" 
            />
            <div className="absolute bottom-4 right-4 z-20 bg-brand-black/80 border border-brand-red px-3 py-1 text-[10px] font-mono text-brand-red uppercase tracking-widest backdrop-blur-sm">
              REC // 00:00:00
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3"></div>
          <div className="md:col-span-9">
            <SplitText 
              text="Since the moment I could hold a pencil, I've been obsessed with creating." 
              className="text-3xl md:text-5xl font-medium leading-tight mb-12 uppercase tracking-tight" 
            />
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 text-lg md:text-xl opacity-80 max-w-4xl leading-relaxed font-mono"
            >
              <p>
                <span className="text-brand-red">{'>'}</span> Over the years that hunger pushed me in every creative direction—producing music, owning and running my own photography studio, launching a web design agency, shipping apps and SaaS products, even building video games in my spare time.
              </p>
              <p>
                <span className="text-brand-red">{'>'}</span> Early in my career I was frustrated as hell. I'd spent my entire teenage years studying the best designers in the world, dreaming of joining an agency that would level me up. Instead I watched too many agencies cut corners, bloat scope, under-deliver, and chase quick money.
              </p>
              <p>
                <span className="text-brand-red">{'>'}</span> That philosophy has guided me for the last 16 years and eventually led me to Creative Director roles where I could shape entire brands from the ground up. Today I still bring that same approach to every project—even if I'm "just" building a website.
              </p>
              <p>
                <span className="text-brand-red">{'>'}</span> And now? AI has thrown rocket fuel on the fire. Ideas hit me at 1000 per minute and I can go from concept to polished execution faster than ever. I'm shipping more projects simultaneously than I ever thought possible—and honestly, I'm not even sure AI can keep up with me anymore. (Challenge accepted.)
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
