'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { FileDown } from 'lucide-react';
import SplitText from './SplitText';
import { fadeUpDelay } from '@/lib/motion';

const RESUME_PATH = '/documents/Ishmael_Morgan_Resume_2026.pdf';
const RESUME_FILENAME = 'Ishmael-Morgan-Resume-2026.pdf';

const STORY = [
  "Since the moment I could hold a pencil, I've been obsessed with creating.",
  "Over the years that hunger pushed me in every creative direction—producing music, owning and running my own photography studio, launching a web design agency, shipping apps and SaaS products, even building video games in my spare time.",
  "Early in my career I was frustrated as hell. I'd spent my entire teenage years studying the best designers in the world, dreaming of joining an agency that would level me up. Instead I watched too many agencies cut corners, bloat scope, under-deliver, and chase quick money.",
  'That philosophy has guided me for the last 16 years and eventually led me to Creative Director roles where I could shape entire brands from the ground up. Today I still bring that same approach to every project—even if I\'m "just" building a website.',
  "And now? AI has thrown rocket fuel on the fire. Ideas hit me at 1000 per minute and I can go from concept to polished execution faster than ever. I'm shipping more projects simultaneously than I ever thought possible—and honestly, I'm not even sure AI can keep up with me anymore. (Challenge accepted.)",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 md:px-12 bg-brand-black text-white relative overflow-hidden border-t border-brand-red/20"
    >
      <div className="absolute inset-0 dither-pattern opacity-10 pointer-events-none mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-transparent to-brand-black pointer-events-none z-10" />

      <div className="container mx-auto relative z-20">
        <div className="text-center mb-24 relative">
          <motion.p
            {...fadeUpDelay(0, 0.6)}
            className="uppercase tracking-[0.3em] text-xs mb-6 font-mono text-brand-red absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full"
          >
            [ SYS.ID // 001 ]
          </motion.p>
          <SplitText
            text="Creative Director"
            className="text-[15vw] font-bold uppercase tracking-tighter leading-none whitespace-nowrap justify-center text-glitch"
          />
          <p className="mt-6 font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-white/40">
            The story behind the work
          </p>
        </div>

        <div className="flex justify-center mb-32 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            className="absolute inset-0 bg-brand-red/20 blur-3xl -z-10 rounded-full"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-3xl aspect-[4/5] overflow-hidden border border-brand-red/30 relative group"
          >
            <div className="absolute inset-0 bg-brand-red/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
            <div className="absolute inset-0 dither-pattern opacity-30 mix-blend-overlay z-10" />
            <Image
              src="/images/about/me01.jpg"
              alt="Pelatiah Morgan"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover grayscale contrast-125 brightness-75 group-hover:grayscale-0 group-hover:contrast-100 group-hover:scale-[1.03] transition-all duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            />
            <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 bg-brand-black/80 border border-brand-red px-3 py-1 text-[10px] font-mono text-brand-red uppercase tracking-widest backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse motion-reduce:animate-none" />
              REC // ARCHIVED
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3" aria-hidden="true">
            <div className="sticky top-32 hidden md:block">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/30 [writing-mode:vertical-lr]">
                — Log Entry
              </p>
            </div>
          </div>
          <div className="md:col-span-9">
            <SplitText
              text={STORY[0]}
              className="text-3xl md:text-5xl font-medium leading-tight mb-12 uppercase tracking-tight"
            />
            {/* Each paragraph settles in on its own as it's scrolled to,
                rather than one flat block-fade — pacing the story out the
                way it'd actually be told, instead of dumping it all at
                once. Line length is capped to a comfortable measure
                (max-w-2xl) instead of the previous max-w-4xl, which ran
                past ~95 characters a line at this type size. */}
            <div className="space-y-8 text-lg md:text-xl opacity-80 max-w-2xl leading-relaxed font-mono">
              {STORY.slice(1).map((paragraph, i) => (
                <motion.p key={i} {...fadeUpDelay(i * 0.05, 0.7)}>
                  <span className="text-brand-red">{'>'}</span> {paragraph}
                </motion.p>
              ))}
            </div>

            <motion.div
              {...fadeUpDelay(0.25, 0.7)}
              className="mt-16 pt-8 border-t border-white/10 max-w-2xl"
            >
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-brand-red mb-4">
                [ SYS.FILE // RESUME.PDF ]
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <a
                  href={RESUME_PATH}
                  download={RESUME_FILENAME}
                  className="group inline-flex items-center gap-4 border border-brand-red text-brand-red px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-red hover:text-brand-black transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] relative overflow-hidden w-fit"
                >
                  <div className="absolute inset-0 bg-brand-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] -z-10" />
                  <FileDown size={16} className="shrink-0" />
                  Download Résumé
                </a>

                <a
                  href={RESUME_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300 underline underline-offset-4 decoration-white/20 hover:decoration-white"
                >
                  View in browser
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
