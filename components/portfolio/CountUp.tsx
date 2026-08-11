'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

interface CountUpProps {
  target: number;
  duration?: number;
}

/**
 * Numbers used to just appear as static text once they scrolled into
 * view. Counting them up on entry is a small, standard "stat reveal"
 * touch — runs once (useInView `once: true`), respects reduced-motion by
 * jumping straight to the final value.
 */
export default function CountUp({ target, duration = 1.4 }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      // One-time jump to the final value, not an ongoing animation loop —
      // there's nothing to subscribe to here.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setValue(target);
      return;
    }

    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(raf);
  }, [isInView, target, duration]);

  return <span ref={ref}>{value}</span>;
}
