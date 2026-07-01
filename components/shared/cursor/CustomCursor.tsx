'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CURSOR_LOADING_EVENT } from './cursorLoading';

export type CursorState =
  | 'default'
  | 'hover'
  | 'gallery'
  | 'music'
  | 'button'
  | 'image'
  | 'link'
  | 'loading';

const CURSOR_LABEL: Partial<Record<CursorState, string>> = {
  hover: '[ INTERACT ]',
  link: '[ OPEN ]',
  button: '[ SELECT ]',
  gallery: '[ DRAG ]',
  music: '[ PLAY ]',
  image: '[ VIEW ]',
  loading: '[ LOADING ]',
};

const RING_SCALE: Record<CursorState, number> = {
  default: 1,
  hover: 1.4,
  link: 1.4,
  button: 1.6,
  gallery: 2.2,
  music: 1.8,
  image: 2,
  loading: 1.2,
};

const DOT_SCALE: Record<CursorState, number> = {
  default: 1,
  hover: 0.4,
  link: 0.4,
  button: 0.4,
  gallery: 0,
  music: 0.4,
  image: 0.4,
  loading: 0.6,
};

/**
 * Reads state from the closest ancestor's data-cursor attribute, e.g.
 * <div data-cursor="gallery"> or <button data-cursor="music">. Plain
 * <a>/<button> tags without an explicit attribute still get a sensible
 * default so the whole site is covered with zero extra markup.
 */
function resolveState(target: EventTarget | null): CursorState {
  if (!(target instanceof Element)) return 'default';
  const explicit = target.closest<HTMLElement>('[data-cursor]');
  if (explicit) {
    const value = explicit.dataset.cursor as CursorState | undefined;
    if (value) return value;
  }
  if (target.closest('a')) return 'link';
  if (target.closest('button, input, select, textarea')) return 'button';
  return 'default';
}

const CustomCursor: React.FC = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [state, setState] = useState<CursorState>('default');
  const [isClicking, setIsClicking] = useState(false);
  const [forcedLoading, setForcedLoading] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    // One-time capability check on mount, not a value we track live —
    // mid-session pointer-type switches are rare enough not to justify a
    // matchMedia change-listener here.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(fine);
    if (!fine) return;

    document.documentElement.classList.add('cursor-none-custom');

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setState(resolveState(e.target));
    };
    const handleDown = () => setIsClicking(true);
    const handleUp = () => setIsClicking(false);
    const handleLoading = (e: Event) => {
      const detail = (e as CustomEvent<{ loading: boolean }>).detail;
      setForcedLoading(!!detail?.loading);
    };
    const handleLeave = () => setState('default');

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    window.addEventListener('mouseleave', handleLeave);
    window.addEventListener(CURSOR_LOADING_EVENT, handleLoading);

    return () => {
      document.documentElement.classList.remove('cursor-none-custom');
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      window.removeEventListener('mouseleave', handleLeave);
      window.removeEventListener(CURSOR_LOADING_EVENT, handleLoading);
    };
  }, []);

  if (!enabled) return null;

  const activeState: CursorState = forcedLoading ? 'loading' : state;
  const label = CURSOR_LABEL[activeState];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-alrecz-blood rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isClicking ? 0.5 : DOT_SCALE[activeState],
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 28, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-alrecz-silver/50 rounded-full pointer-events-none z-[9998] mix-blend-difference will-change-transform flex items-center justify-center"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: isClicking ? RING_SCALE[activeState] * 0.85 : RING_SCALE[activeState],
          rotate: activeState === 'loading' ? 360 : 0,
        }}
        transition={
          activeState === 'loading'
            ? { rotate: { duration: 1, repeat: Infinity, ease: 'linear' }, default: { type: 'spring', stiffness: 250, damping: 20 } }
            : { type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }
        }
      >
        {activeState === 'loading' && (
          <span className="absolute inset-[3px] rounded-full border-t border-alrecz-blood" />
        )}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] font-mono text-[8px] text-alrecz-silver tracking-widest uppercase ml-6 mt-6 mix-blend-difference will-change-transform"
        animate={{
          x: position.x,
          y: position.y,
          opacity: label ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        {label ?? ''}
      </motion.div>
    </>
  );
};

export default CustomCursor;
