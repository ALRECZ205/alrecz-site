'use client';

import { motion } from 'motion/react';

export default function Stats() {
  const stats = [
    { num: '85', label: 'Brands Directed' },
    { num: '18', label: 'Different Sectors Served' },
    { num: '500', label: 'Creative Deployments' },
    { num: '16', label: 'Years of Vision' }
  ];

  return (
    <section className="bg-brand-black text-brand-red py-12 overflow-hidden relative border-t border-brand-red/20">
      <div className="absolute inset-0 dither-pattern opacity-10 pointer-events-none mix-blend-overlay" />
      <div className="container mx-auto relative z-10">
        {stats.map((stat, idx) => (
          <div key={idx} className="border-b border-brand-red/20 last:border-0 relative group">
            <div className="absolute inset-0 bg-brand-red/5 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom" />
            <motion.div 
              initial={{ x: idx % 2 === 0 ? -50 : 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-start gap-8 md:gap-24 relative z-10"
            >
              <div className="text-[20vw] md:text-[10vw] font-bold leading-none tracking-tighter flex items-start text-glitch">
                {stat.num}
                <span className="text-[10vw] md:text-[5vw] text-brand-red-light opacity-50">+</span>
              </div>
              <div className="text-2xl md:text-4xl font-medium uppercase tracking-tight max-w-sm text-center md:text-left text-white/80">
                {stat.label}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
