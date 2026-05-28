'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SplitText from './SplitText';

const projects = [
  {
    id: 1,
    title: 'Jasmine Hills',
    category: 'Branding',
    image: '/images/jasmine1.png',
  },
  {
    id: 2,
    title: 'Alabama Records',
    category: 'Web Design',
    image: '/images/enter1.png',
  },
  {
    id: 3,
    title: 'Manifesto of Artistic Rebelion',
    category: 'Digital Creative',
    image: '/images/MANIFESTO.jpg',
  },
  {
    id: 4,
    title: 'Sun Grown THC',
    category: 'Branding',
    image: '/images/rw1.png',
  },
  {
    id: 5,
    title: 'Hi-C',
    category: 'Branding',
    image: '/images/hi c.png',
  },
  {
    id: 6,
    title: 'Reign Czek',
    category: 'Web Design',
    image: '/images/reign tote.png',
  },
];

export default function FeaturedWork() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="work"
      className="py-24 md:py-32 px-6 md:px-12 bg-brand-black relative border-t border-brand-red/20"
      ref={containerRef}
    >
      <div className="absolute inset-0 dither-pattern opacity-10 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs mb-6 font-mono text-brand-red">
              [ DIR // FEATURED_WORK ]
            </p>
            <SplitText
              text="代表作"
              className="text-5xl md:text-6xl font-bold uppercase tracking-tighter text-outline"
            />
          </div>

          <div className="flex items-end">
            <SplitText
              text="Selected Work Shaping Brands, Products, and Experiences"
              className="text-2xl md:text-4xl font-medium uppercase tracking-tight leading-tight text-white/80"
            />
          </div>
        </div>

        <div className="flex gap-8 mb-12 text-xs uppercase tracking-[0.15em] font-mono overflow-x-auto pb-4 border-b border-brand-red/20">
          <button className="text-brand-red border-b-2 border-brand-red pb-4 whitespace-nowrap font-bold">
            ALL_SYS
          </button>
          <button className="opacity-50 hover:opacity-100 hover:text-brand-red transition-all pb-4 whitespace-nowrap">
            BRANDING
          </button>
          <button className="opacity-50 hover:opacity-100 hover:text-brand-red transition-all pb-4 whitespace-nowrap">
            GRAPHIC_DESIGN
          </button>
          <button className="opacity-50 hover:opacity-100 hover:text-brand-red transition-all pb-4 whitespace-nowrap">
            WEB_DESIGN
          </button>
        </div>

        <div className="flex flex-col relative">
          {projects.map((project, index) => (
            <motion.a
              href="#"
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative border-b border-white/10 py-8 md:py-12 flex items-center justify-between overflow-hidden"
            >
              <div className="absolute inset-0 bg-brand-red origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.1,0.75,0.5,1)] z-0" />

              <div className="relative z-10 flex items-center gap-8 w-full transition-colors duration-500 group-hover:text-brand-black">
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs opacity-50 group-hover:opacity-100 group-hover:text-brand-black transition-colors">
                    [{String(index + 1).padStart(2, '0')}]
                  </span>
                  <h3 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter group-hover:translate-x-4 transition-transform duration-500 ease-[cubic-bezier(0.1,0.75,0.5,1)]">
                    {project.title}
                  </h3>
                </div>

                <div className="ml-auto flex items-center gap-6 group-hover:-translate-x-4 transition-transform duration-500 ease-[cubic-bezier(0.1,0.75,0.5,1)]">
                  <span className="font-mono text-xs hidden md:block opacity-50 group-hover:opacity-100 group-hover:text-brand-black transition-colors">
                    // {project.category}
                  </span>
                  <ArrowRight size={32} className="group-hover:text-brand-black" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute z-20 w-[25vw] aspect-[4/3] overflow-hidden hidden md:block transition-opacity duration-300 ease-out mix-blend-screen"
        style={{
          opacity: hoveredProject ? 1 : 0,
          transform: `translate(${mousePos.x - 100}px, ${mousePos.y - 150}px)`,
          left: 0,
          top: 0,
          filter:
            'contrast(1.2) grayscale(100%) sepia(100%) hue-rotate(300deg) saturate(500%)',
        }}
      >
        <div className="absolute inset-0 border border-brand-red z-30" />
        <div className="absolute inset-0 bg-brand-red/20 mix-blend-overlay z-20" />

        {projects.map((project) => (
          <img
            key={project.id}
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </section>
  );
}