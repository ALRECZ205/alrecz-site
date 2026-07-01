'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import GlitchText from '@/components/shared/GlitchText';

const LOG_ENTRIES = [
  {
    code: 'LOG-001 // ORIGIN',
    text: 'Since the moment I could hold a pencil, obsessed with creating.',
  },
  {
    code: 'LOG-002 // EXPANSION',
    text: 'That hunger pushed into every direction — producing music, running a photography studio, launching a web design agency, shipping apps and SaaS products, building video games in spare time.',
  },
  {
    code: 'LOG-003 // FRUSTRATION',
    text: 'Spent teenage years studying the best designers in the world, dreaming of an agency that would level me up. Watched too many cut corners, bloat scope, and chase quick money instead.',
  },
  {
    code: 'LOG-004 // PHILOSOPHY',
    text: '16 years of that same standard, eventually leading to Creative Director roles — shaping entire brands from the ground up.',
  },
  {
    code: 'LOG-005 // NOW',
    text: 'AI threw rocket fuel on the fire. Concept to polished execution faster than ever — still not sure it can keep up. Challenge accepted.',
  },
];

/**
 * Documentary-style About — a photo + a scrolling timeline of "log
 * entries" rather than a wall of prose. Copy is adapted from the real
 * bio already written in components/portfolio/About.tsx (kept verbatim
 * in substance), restructured for the archive's terminal-log aesthetic.
 */
export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 border-b border-white/5 bg-alrecz-black scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-[10px] text-alrecz-blood tracking-[0.3em] uppercase mb-6">
          [ SYS.ID // 001 ]
        </p>
        <GlitchText
          text="ABOUT THE ARCHIVE"
          as="h2"
          className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-alrecz-offwhite mb-16 block"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] border border-white/10 overflow-hidden group">
              <Image
                src="/images/about/me01.jpg"
                alt="Portrait — ALRECZ / I$H"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover grayscale contrast-125 brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
              />
              <div className="absolute bottom-4 right-4 bg-black/80 border border-alrecz-blood/60 px-3 py-1 font-mono text-[10px] text-alrecz-blood tracking-widest">
                REC // ARCHIVED
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-8">
            {LOG_ENTRIES.map((entry, i) => (
              <motion.div
                key={entry.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="border-l-2 border-alrecz-blood/40 pl-6"
              >
                <p className="font-mono text-[10px] text-alrecz-blood tracking-widest uppercase mb-2">
                  {entry.code}
                </p>
                <p className="text-alrecz-silver/80 leading-relaxed">{entry.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
