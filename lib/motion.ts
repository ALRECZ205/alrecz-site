/**
 * Shared motion presets for the portfolio section. Previously every
 * section repeated its own `initial={{opacity:0,y:20}} whileInView={...}
 * transition={{duration:0.8}}` block with a plain ease-out curve. This
 * consolidates that into one cinematic, decelerating curve (an "expo-out"
 * feel closer to how Apple/Linear-style sites move) so every entrance
 * across the page reads as one consistent, deliberate motion language
 * instead of a dozen slightly-different fades.
 */
export const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;

export const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, ease: EASE_PREMIUM },
} as const;

export function fadeUpDelay(delay: number, duration = 0.9) {
  return {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration, ease: EASE_PREMIUM, delay },
  };
}

export function staggerChild(index: number, step = 0.07) {
  return fadeUpDelay(index * step, 0.7);
}
