'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  ox: number;
  oy: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const SPACING = 32;
const REPEL_RADIUS = 90;
const SPRING = 0.06;
const DAMPING = 0.85;

/**
 * Mouse-reactive particle field, canvas-only (no library). Particles sit
 * on a grid, scatter when the cursor passes near, and spring back. The
 * rAF loop pauses when the tab is hidden and is skipped entirely under
 * prefers-reduced-motion (draws one static frame instead) so it never
 * burns cycles for no visual benefit.
 */
export default function SignalField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let particles: Particle[] = [];
    const mouse = { x: -9999, y: -9999 };
    let raf = 0;
    let running = true;

    const resize = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      particles = [];
      for (let x = SPACING / 2; x < width; x += SPACING) {
        for (let y = SPACING / 2; y < height; y += SPACING) {
          particles.push({ ox: x, oy: y, x, y, vx: 0, vy: 0 });
        }
      }
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(122, 15, 15, 0.7)';

      for (const p of particles) {
        if (!reducedMotion) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < REPEL_RADIUS) {
            const force = (REPEL_RADIUS - dist) / REPEL_RADIUS;
            p.vx += (dx / (dist || 1)) * force * 2.4;
            p.vy += (dy / (dist || 1)) * force * 2.4;
          }
          p.vx += (p.ox - p.x) * SPRING;
          p.vy += (p.oy - p.y) * SPRING;
          p.vx *= DAMPING;
          p.vy *= DAMPING;
          p.x += p.vx;
          p.y += p.vy;
        }

        const size = reducedMotion ? 1.4 : 1.4 + Math.min(1.4, Math.hypot(p.x - p.ox, p.y - p.oy) * 0.15);
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      if (!running) return;
      draw();
      raf = requestAnimationFrame(loop);
    };

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const handleVisibility = () => {
      running = document.visibilityState === 'visible';
      if (running && !reducedMotion) loop();
    };

    resize();
    draw();
    if (!reducedMotion) loop();

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseleave', handleLeave);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] border border-white/10 bg-alrecz-charcoal overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" data-cursor="hover" />
      <div className="absolute bottom-3 left-4 font-mono text-[10px] text-alrecz-silver/60 tracking-widest pointer-events-none">
        SIGNAL_FIELD.CANVAS // MOVE CURSOR TO DISTURB
      </div>
    </div>
  );
}
