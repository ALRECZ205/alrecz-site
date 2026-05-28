'use client';

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black/90 backdrop-blur-md py-4 border-b border-brand-red/30'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-brand-red text-black flex items-center justify-center font-bold text-lg font-sans shadow-[0_0_10px_#ff003c]">
            DB
          </div>
          <span className="font-mono font-bold text-xs tracking-widest hidden sm:block text-brand-red">
            SYS.ADMIN // [ I$H ]
          </span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#contact"
            className="hidden md:inline-block border border-brand-red text-brand-red px-6 py-2 text-xs font-mono uppercase tracking-widest hover:bg-brand-red hover:text-black transition-colors shadow-[inset_0_0_10px_rgba(255,0,60,0.2)]"
          >
            [ INIT_CONNECTION ]
          </a>

          <button className="p-2 text-brand-red hover:text-white transition-colors">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}