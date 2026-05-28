'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const experiences = [
  {
    company: 'JumpFactor',
    role: 'Creative Director',
    location: 'Toronto, ON',
    date: 'May 2025 – March 2026',
    desc: 'Partnered with executive leadership to define brand purpose, reposition the organization, and elevate creative strategy as a core business driver.',
    bullets: [
      'Led brand discovery and positioning workshops (“Uncover Your Greatness”), aligning leadership, teams, and long-term vision across the organization.',
      'Architected a complete internal brand replatform, modernizing visual systems for consistency, scalability, and stronger market authority.',
      'Directed rapid turnaround rebrand and website realignment for a subsidiary business, resolving brand perception and conversion issues within months.',
      'Provided strategic creative leadership across design, development, and marketing teams, improving execution velocity and reducing cross-functional friction.',
      'Implemented AI-powered creative workflows that accelerated on-brand asset and video production by 40–60% while preserving creative integrity.',
      'Served as a senior creative advisor, translating complex business objectives into cohesive brand, marketing, and experiential strategies.'
    ]
  },
  {
    company: 'FutureCraft',
    role: 'Creative Director / Partner',
    location: 'Hamilton, ON',
    date: 'Jan 2023 – Present',
    desc: 'Co-founded and scaled a boutique brand consultancy focused on clarity, differentiation, and sustainable growth for founders and leadership teams.',
    bullets: [
      'Owned end-to-end brand vision and execution, leading deep discovery through positioning, messaging, visual identity, and digital experience systems.',
      'Led executive “why” workshops, translating insight into actionable brand frameworks that support long-term relevance and alignment.',
      'Directed multidisciplinary teams and external partners, maintaining rigorous standards across design, UX, copy, and delivery.',
      'Launched high-impact brands across diverse industries, balancing creative ambition with strategic and operational constraints.',
      'Served as a long-term strategic partner to clients, advising on brand evolution, competitive differentiation, and creative direction beyond individual engagements.'
    ]
  },
  {
    company: 'Muse Marketing Group',
    role: 'Founding Partner & Creative Director',
    location: 'Hamilton, ON',
    date: '2015 – 2023',
    desc: 'Helped grow and shape a boutique agency into a nationally recognized firm through brand leadership, systems thinking, and high-impact creative execution.',
    bullets: [
      'Partnered in scaling the agency from a founding team of 3 to a multidisciplinary team of 12, supporting operational growth, process maturity, and creative output.',
      'Contributed to national recognition as a Top Marketing Agency in Canada (Clutch, 2020) and Best Local Advertising Agency for three consecutive years.',
      'Led the agency’s internal rebrand and positioning, strengthening market perception and supporting accelerated growth.',
      'Built, managed, and mentored multidisciplinary teams across design, photography, development, copywriting, SEO, and brand strategy.',
      'Directed over 80 website launches and numerous brand engagements, overseeing work from executive discovery through launch and post-launch evolution.',
      'Designed and implemented proprietary discovery workshops and long-term client partnership programs that elevated work quality, improved retention, and increased recurring revenue.'
    ]
  }
];

export default function Experience() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-12 bg-brand-black text-white relative border-t border-brand-red/20">
      <div className="absolute inset-0 dither-pattern opacity-5 pointer-events-none" />
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs mb-6 font-mono text-brand-red">[ SYS.DIR // EXPERIENCE ]</p>
            <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tighter text-outline">経験</h2>
          </div>
          <div className="flex items-end">
            <h3 className="text-2xl md:text-4xl font-medium uppercase tracking-tight leading-tight text-white/80">
              Work Experience spanning 15+ years of Creativity, Imagination, and Passion.
            </h3>
          </div>
        </div>

        <div className="border-t border-brand-red/20">
          {experiences.map((exp, idx) => (
            <div key={idx} className="border-b border-brand-red/20">
              <button 
                className="w-full py-10 flex items-center justify-between text-left hover:text-brand-red transition-colors group"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <div className="flex items-center gap-8">
                  <div className={`w-10 h-10 rounded-none border flex items-center justify-center transition-colors ${openIdx === idx ? 'border-brand-red text-brand-red bg-brand-red/10' : 'border-white/20 group-hover:border-brand-red'}`}>
                    {openIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">{exp.company}</h3>
                </div>
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-16 pt-4 pl-0 md:pl-18">
                      <div className="flex flex-col md:flex-row justify-between mb-12 gap-4 border-b border-white/10 pb-8">
                        <div className="inline-block px-6 py-2 border border-brand-red text-brand-red text-xs font-mono uppercase tracking-widest w-fit bg-brand-red/5">
                          {exp.role}
                        </div>
                        <div className="text-xs opacity-70 uppercase tracking-[0.2em] font-mono flex items-center text-brand-red-light">
                          {exp.location} // {exp.date}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/90">
                          {exp.desc}
                        </p>
                        <ul className="space-y-6">
                          {exp.bullets.map((bullet, i) => (
                            <li key={i} className="flex gap-4 opacity-80 text-sm md:text-base font-mono">
                              <span className="text-brand-red mt-1 font-bold">{'>'}</span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
