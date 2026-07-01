'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import SplitText from './SplitText';

type Asset = {
  type: 'image' | 'video';
  src: string;
};

type Collection = {
  name: string;
  assets: Asset[];
};


type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  archiveInfo?: string;

  year?: string;
  client?: string;
  tools?: string;

  gallery?: Asset[];
  collections?: Collection[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Jasmine Hills',
    category: 'Branding',
    image: '/images/work/jasmine-hills/preview.jpg',
    description:
      'An organic Japanese tea brand inspired by regional fruits, traditional tea culture, and modern minimalist packaging.',
       archiveInfo:
      'Jasmine Hills explores organic Japanese tea through fruit-inspired packaging, soft botanical visuals, and a calm modern identity system.',

       year: '2026',
  client: 'Personal Concept',
  tools: 'Illustrator / Photoshop / Figma / After Effects / InDesign',

    gallery: [
      { type: 'video', src: '/video/jasmine-hills/reel2.mp4' },
      { type: 'image', src: '/images/work/jasmine-hills/01.jpg' },
      { type: 'video', src: '/video/jasmine-hills/reel1.mp4' },
      { type: 'image', src: '/images/work/jasmine-hills/03.jpg' },
      { type: 'video', src: '/video/jasmine-hills/reel3.mp4' },
    ],
  },
  {
    id: 2,
    title: 'Alabama Records',
    category: 'Web Design',
    image: '/images/enter1.png',
    description:
      'A web and brand system blending music, archive culture, CRT visuals, and interactive digital storytelling.',
    gallery: [
      { type: 'video', src: '/video/alrecz/AR6.mp4' },
      { type: 'image', src: '/images/work/alrecz/AR1.jpg' },
      { type: 'image', src: '/images/work/alrecz/AR2.jpg' },
      { type: 'image', src: '/images/work/alrecz/AR3.jpg' },
      { type: 'video', src: '/video/alrecz/AR7.mp4' },
    ],
  },
  {
    id: 3,
    title: 'Manifesto of Artistic Rebelion',
    category: 'Digital Creative',
    image: '/images/MANIFESTO.jpg',
    description:
      'A digital manifesto exploring artistic rebellion, visual identity, and the tension between chaos and control.',
    gallery: [{ type: 'image', src: '/images/work/alrecz/MANIFESTO.jpg' }],
  },
  {
    id: 4,
    title: 'Sun Grown THC',
    category: 'Branding',
    image: '/images/work/sungrown/preview.jpg',
    description:
      'A cannabis branding system divided into four product worlds, each with its own visual language, color mood, and packaging direction.',
    collections: [
      {
        name: 'Ghost Orchid',
        assets: [
          { type: 'image', src: '/images/work/sungrown/ghost-orchid/01.jpg' },
          { type: 'image', src: '/images/work/sungrown/ghost-orchid/02.jpg' },
        ],
      },
      {
        name: 'Panther',
        assets: [
          { type: 'image', src: '/images/work/sungrown/panther/01.jpg' },
          { type: 'image', src: '/images/work/sungrown/panther/02.jpg' },
        ],
      },
      {
        name: 'Red Wolf',
        assets: [
          { type: 'image', src: '/images/work/sungrown/red-wolf/01.jpg' },
          { type: 'image', src: '/images/work/sungrown/red-wolf/02.jpg' },
        ],
      },
      {
        name: 'Sea Turtle',
        assets: [
          { type: 'image', src: '/images/work/sungrown/sea-turtle/01.jpg' },
          { type: 'image', src: '/images/work/sungrown/sea-turtle/02.jpg' },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Hi-C',
    category: 'Branding',
    image: '/images/hi c.png',
    description:
      'A bold visual identity exploration built around nostalgia, color, motion, and product-driven storytelling.',
    gallery: [
      { type: 'video', src: '/video/alrecz/hi-c/01.mp4' },
      { type: 'image', src: '/images/work/hi-c/01.jpg' },
      { type: 'video', src: '/video/alrecz/hi-c/02.mp4' },
      { type: 'image', src: '/images/work/hi-c/02.jpg' },
      { type: 'image', src: '/images/work/hi-c/03.jpg' },
      { type: 'image', src: '/images/work/hi-c/04.jpg' },
    ],
  },
  {
    id: 6,
    title: 'Reign Czek',
    category: 'Web Design',
    image: '/images/reign tote.png',
    description:
  'reign',
    gallery: [
      { type: 'video', src: '/video/alrecz/reignczek/01.mp4' },
      { type: 'image', src: '/images/work/reignczek/01.jpg' },
      { type: 'image', src: '/images/work/reignczek/02.jpg' },
      { type: 'image', src: '/images/work/reignczek/03.jpg' },
      { type: 'image', src: '/images/work/reignczek/04.jpg' },
      { type: 'image', src: '/images/work/reignczek/05.jpg' },
    ],
  },
];

export default function FeaturedWork() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [openProject, setOpenProject] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const renderAsset = (item: Asset, alt: string, className = '') => {
    if (item.type === 'video') {
      return (
        <video
          src={item.src}
          autoPlay
          loop
          muted
          playsInline
          className={`w-full h-full object-cover ${className}`}
        />
      );
    }

    return (
      <Image
        src={item.src}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={`object-cover grayscale hover:grayscale-0 transition-all duration-700 ${className}`}
      />
    );
  };

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
          {projects.map((project, index) => {
            const firstGalleryAsset = project.gallery?.[0];
            const supportAssets = project.gallery?.slice(1) ?? [];

            return (
              <div key={project.id}>
                <motion.a
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenProject(openProject === project.id ? null : project.id);
                  }}
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
                        {'//'} {project.category}
                      </span>
                      <ArrowRight size={32} className="group-hover:text-brand-black" />
                    </div>
                  </div>
                </motion.a>

                {openProject === project.id && (
                  <div className="border-b border-brand-red/20 py-10">
                    <div className="flex justify-between items-start mb-8 gap-6">
                      <div>
                        <p className="font-mono text-xs text-brand-red mb-4">
                          [ OPEN_ARCHIVE // {project.title} ]
                        </p>

                        <p className="max-w-xl text-sm md:text-base text-white/60 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <button
                        onClick={() => setOpenProject(null)}
                        className="font-mono text-xs border border-brand-red px-4 py-2 text-brand-red hover:bg-brand-red hover:text-black"
                      >
                        CLOSE
                      </button>
                    </div>

                    {firstGalleryAsset && (
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        <div className="lg:col-span-7 border border-brand-red/30 bg-black overflow-hidden min-h-[520px] relative">
                          {renderAsset(firstGalleryAsset, project.title, 'min-h-[520px]')}
                        </div>

                        <div className="lg:col-span-5 border border-brand-red/30 bg-black/60 p-6 md:p-8 flex flex-col justify-between">
                          <div>
                            <p className="font-mono text-xs text-brand-red mb-4">
                              [ CASE_FILE // {String(project.id).padStart(3, '0')} ]
                            </p>

                            <h4 className="text-3xl md:text-5xl font-bold uppercase mb-6">
                              {project.title}
                            </h4>

                          <p className="text-white/60 font-mono text-sm leading-relaxed">
                          {project.archiveInfo}
                          </p>
                          </div>

                          <div className="mt-10 grid grid-cols-2 gap-y-6 text-xs font-mono text-white/40 uppercase">

  {/* Project Details */}

<div>
  <p className="text-brand-red mb-1">TYPE</p>
  <p>{'// '}{project.category}</p>
</div>

<div>
  <p className="text-brand-red mb-1">YEAR</p>
  <p>{'// '}{project.year}</p>
</div>

<div>
  <p className="text-brand-red mb-1">CLIENT</p>
  <p>{'// '}{project.client}</p>
</div>

<div>
  <p className="text-brand-red mb-1">TOOLS</p>
  <p>{'// '}{project.tools}</p>
</div>

</div>
</div>
                        {supportAssets.length > 0 && (
                          <div className="lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                            {supportAssets.map((item, i) => (
                              <div
                                key={i}
                                className="border border-white/10 bg-black overflow-hidden aspect-[16/10] relative"
                              >
                                {renderAsset(item, `${project.title} ${i + 2}`)}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {project.collections && (
                      <div className="space-y-10">
                        {project.collections.map((collection) => (
                          <div key={collection.name}>
                            <h4 className="font-mono text-xs text-brand-red mb-4 uppercase">
                              [ {collection.name} ]
                            </h4>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {collection.assets.map((item, i) => (
                                <div
                                  key={i}
                                  className="border border-white/10 bg-black overflow-hidden aspect-[16/10] relative"
                                >
                                  {renderAsset(item, `${collection.name} ${i + 1}`)}
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
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
          <Image
            key={project.id}
            src={project.image}
            alt={project.title}
            fill
            sizes="25vw"
            className={`object-cover transition-opacity duration-300 ${
              hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
      </div>
    </section>
  );
}