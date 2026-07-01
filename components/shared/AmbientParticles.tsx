const COUNT = 22;

// Deterministic pseudo-random layout (not Math.random()) — a value derived
// from Date.now() or Math.random() at render time would differ between the
// server-rendered HTML and the client's first paint and trigger a
// hydration mismatch. These are just spread out using prime multipliers so
// they don't look grid-aligned.
const PARTICLES = Array.from({ length: COUNT }, (_, i) => {
  const left = (i * 37) % 100;
  const size = 2 + ((i * 13) % 3);
  const duration = 10 + ((i * 7) % 12);
  const delay = (i * 0.9) % 10;
  const dx = ((i * 19) % 60) - 30;
  const opacity = 0.15 + ((i * 5) % 30) / 100;
  return { left, size, duration, delay, dx, opacity };
});

/**
 * Subtle floating-dust atmosphere layer. Pure CSS transform animation
 * (see .particle / @keyframes float-dust in globals.css) — no per-frame
 * JS, no Framer Motion overhead for 22 decorative elements. Hidden
 * entirely under prefers-reduced-motion.
 */
export default function AmbientParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none motion-reduce:hidden">
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle absolute bottom-0 rounded-full bg-alrecz-offwhite"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            ['--dx' as string]: `${p.dx}px`,
            ['--dust-opacity' as string]: p.opacity,
          }}
        />
      ))}
    </div>
  );
}
