'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlitchText from '@/components/shared/GlitchText';
import { setCursorLoading } from '@/components/shared/cursor/cursorLoading';

const BOOT_LINES = [
  '[OK] mounting archive',
  '[OK] decrypting media index',
  '[OK] loading exhibition data',
  '[OK] syncing signal',
  '[READY] awaiting input',
];

type Phase = 'flicker' | 'boot' | 'ready';

interface BootSequenceProps {
  onEnter: () => void;
}

/**
 * Short, cinematic boot: a CRT flicker beat, a fast diagnostic readout,
 * then the ENTER ARCHIVE threshold. Total time-to-interactive is under
 * ~1.3s before the prompt appears — the old sequence hard-blocked on a
 * flat 2.5s setTimeout regardless of what the visitor wanted. This only
 * ever runs once per session (see HomeExperience).
 */
export default function BootSequence({ onEnter }: BootSequenceProps) {
  const [phase, setPhase] = useState<Phase>('flicker');

  useEffect(() => {
    setCursorLoading(true);
    const toBoot = setTimeout(() => setPhase('boot'), 350);
    return () => clearTimeout(toBoot);
  }, []);

  useEffect(() => {
    if (phase !== 'boot') return;
    const toReady = setTimeout(() => {
      setPhase('ready');
      setCursorLoading(false);
    }, 250 + BOOT_LINES.length * 140);
    return () => clearTimeout(toReady);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'ready') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') onEnter();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, onEnter]);

  return (
    <motion.div
      className="fixed inset-0 z-[9985] bg-alrecz-black flex flex-col items-center justify-center overflow-hidden"
      exit={{ opacity: 0, filter: 'brightness(3)' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <motion.div
        className="absolute inset-0 bg-white pointer-events-none"
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.35, times: [0, 1] }}
      />

      <div className="relative z-10 w-full max-w-md px-6 font-mono text-xs md:text-sm text-alrecz-silver">
        <AnimatePresence mode="wait">
          {phase !== 'ready' ? (
            <motion.div
              key="boot"
              exit={{ opacity: 0 }}
              className="space-y-2"
            >
              {phase === 'boot' &&
                BOOT_LINES.map((line, i) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.14, duration: 0.25 }}
                    className={i === BOOT_LINES.length - 1 ? 'text-alrecz-blood' : ''}
                  >
                    {line}
                  </motion.p>
                ))}
            </motion.div>
          ) : (
            <motion.div
              key="enter"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <button
                onClick={onEnter}
                data-cursor="button"
                className="group"
                aria-label="Enter the ALRECZ archive"
              >
                <GlitchText
                  text="ENTER ARCHIVE"
                  as="h1"
                  className="text-3xl md:text-6xl font-display font-bold text-alrecz-offwhite tracking-tight"
                />
              </button>
              <p className="mt-6 text-[10px] tracking-[0.3em] text-alrecz-silver/70 animate-pulse">
                [ CLICK OR PRESS ENTER ]
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-6 left-6 font-mono text-[10px] text-alrecz-silver/50 tracking-widest">
        ALRECZ // v2.0
      </div>
    </motion.div>
  );
}
