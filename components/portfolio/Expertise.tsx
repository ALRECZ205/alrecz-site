'use client';

import { motion } from 'motion/react';
import SplitText from './SplitText';

const expertiseAreas = [
  {
    num: '01',
    title: 'Artificial Intelligence',
    subtitle: 'Designing the Future With Intelligent Creative Systems',
    desc: 'I use AI as a creative amplifier—building custom tools, producing on-brand imagery, training custom LoRAs, and designing automated workflows that accelerate output. Across image, video, audio, copy, and code, AI removes the friction once inherent in ideation and iteration, enabling faster exploration, broader experimentation, and more fully realized creative ideas.',
    items: ['Generative AI Systems', 'AI-Assisted Development', 'Custom LoRA Training', 'Advanced Prompt Engineering', 'Workflow Automation (n8n)', 'Creative AI Pipelines', 'AI Toolchain Architecture']
  },
  {
    num: '02',
    title: 'Creative Leadership',
    subtitle: 'Unifying Vision, Strategy, and Execution Into Cohesive Experiences',
    desc: 'I provide brand-first creative direction rooted in vision and clarity—uncovering a brand’s “why” and aligning design, voice, and experience into cohesive systems. I connect the big picture across visual, written, audio, and motion to ensure every touchpoint feels intentional.',
    items: ['Brand Vision & Alignment', 'Art Direction', 'Cross-Disciplinary Leadership', 'Concept Development', 'Design Systems Thinking', 'Visual Storytelling', 'Stakeholder Collaboration', 'Creative Review & Critique']
  },
  {
    num: '03',
    title: 'Branding',
    subtitle: 'Transforming Purpose Into Brands People Feel and Believe In',
    desc: 'I help brands uncover their “why” and translate it into identity, voice, and positioning that feel authentic and emotionally resonant—creating brands that connect deeply with the people they are meant to serve.',
    items: ['Brand Discovery', 'Uncovering the "Why"', 'Brand Strategy', 'Positioning & Differentiation', 'Brand Voice & Messaging', 'Brand Guidelines', 'Emotional Brand Connection']
  },
  {
    num: '04',
    title: 'Web Design & Development',
    subtitle: 'Where Thoughtful Design Meets Scalable Engineering',
    desc: 'With over 10 years of experience, I design and build conversion-focused websites that balance aesthetics and usability—specializing in UX/UI, WordPress development, custom code, and integrating generative AI into modern digital products.',
    items: ['UX/UI Design', 'Conversion-Focused Design', 'Web Architecture', 'WordPress Development', 'Custom Theme Development', 'JavaScript', 'AI-Integrated Applications', 'Modern Dev Workflows']
  },
  {
    num: '05',
    title: 'Digital Creative',
    subtitle: 'Designing Performance-Driven Creative That Turns Attention Into Action',
    desc: 'I design performance-driven digital creative that turns attention into action—crafting social content, paid ads, and campaign systems optimized for conversion, clarity, and consistency, guided by audience insight, creative testing, and measurable results.',
    items: ['Conversion-Focused Creative', 'Paid Media Creative Strategy', 'Campaign Systems Design', 'Funnel-Aware Creative', 'Platform-Specific Optimization', 'Visual Consistency at Scale', 'Performance-Driven Storytelling']
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-brand-black text-white relative border-t border-brand-red/20">
      <div className="py-24 md:py-32 px-6 md:px-12 container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="uppercase tracking-[0.2em] text-xs mb-6 font-mono text-brand-red">[ SYS.DIR // EXPERTISE ]</p>
            <SplitText text="専門分野" className="text-5xl md:text-6xl font-bold uppercase tracking-tighter text-outline" />
          </div>
          <div className="flex items-end">
            <SplitText 
              text="Crafting Digital Experiences Through Vision, Design, and AI" 
              className="text-2xl md:text-4xl font-medium uppercase tracking-tight leading-tight text-white/80" 
            />
          </div>
        </div>
      </div>

      {expertiseAreas.map((area) => (
        <div key={area.num} className="relative bg-brand-red py-24 md:py-32 px-6 md:px-12 border-t border-black/50 overflow-hidden group">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-red to-[#80001e] opacity-100 mix-blend-multiply" />
          <div className="absolute inset-0 dither-pattern opacity-30 mix-blend-overlay" />
          
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4 relative">
                <div className="sticky top-32">
                  <div className="text-[15vw] lg:text-[8vw] font-bold leading-none text-brand-black opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                    {area.num}
                  </div>
                  <SplitText 
                    text={area.title} 
                    className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mt-4 leading-[0.85] text-brand-black" 
                  />
                </div>
              </div>
              <div className="lg:col-span-8">
                <SplitText 
                  text={area.subtitle} 
                  className="text-2xl md:text-4xl font-medium uppercase tracking-tight leading-tight mb-8 text-brand-black" 
                />
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-lg md:text-xl opacity-90 mb-16 max-w-3xl leading-relaxed text-brand-black font-medium"
                >
                  {area.desc}
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
                  {area.items.map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex justify-between items-center border-b border-brand-black/20 py-5 hover:border-brand-black transition-colors"
                    >
                      <span className="text-lg font-bold text-brand-black uppercase tracking-tight">{item}</span>
                      <span className="text-xs opacity-50 font-mono text-brand-black">0{i + 1}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
