'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GlitchText from '@/components/shared/GlitchText';

interface BootSequenceProps {
  onEnter: () => void;
}

/**
 * The original opening screen, restored as-is: video background, a fixed
 * 2.5s "LOADING... / INITIALIZING ASSETS" beat, then the ENTER ARCHIVE
 * prompt. This intentionally does not add session-skip or keyboard
 * shortcuts beyond what the original had — it's a faithful restore, not
 * a redesign.
 */
export default function BootSequence({ onEnter }: BootSequenceProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9985] w-full h-screen bg-black overflow-hidden cursor-crosshair"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/video/Intro.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60 z-[1]" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
        {loading ? (
          <div className="text-center">
            <h1 className="text-4xl md:text-8xl font-retro text-white animate-pulse">
              LOADING...
            </h1>
            <p className="font-mono text-xs text-awge-yellow mt-4">
              INITIALIZING ASSETS
            </p>
          </div>
        ) : (
          <div className="text-center cursor-pointer" onClick={onEnter}>
            <GlitchText
              text="ENTER ARCHIVE"
              as="h1"
              className="text-4xl md:text-8xl font-retro font-bold text-white mb-8"
            />
            <p className="text-xs font-mono text-gray-400 mt-4 animate-bounce">
              [ CLICK TO START ]
            </p>
          </div>
        )}

        <div className="absolute bottom-4 left-4 font-mono text-xs text-gray-500">
          v2.0.25 - SYSTEM READY
        </div>
      </div>
    </motion.div>
  );
}
