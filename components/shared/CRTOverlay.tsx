'use client';

import React from 'react';

/**
 * Single global CRT layer — mounted once in the root layout.
 * Previously duplicated per-page (legacy, art-ai, music, portfolio each
 * mounted their own). One instance keeps the look consistent and avoids
 * stacking multiple fixed full-screen overlays on top of each other.
 */
const CRTOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9990] overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
          backgroundSize: '100% 2px, 3px 100%',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-screen w-full animate-scanline pointer-events-none motion-reduce:hidden" />
      <div
        className="absolute inset-0"
        style={{ boxShadow: 'inset 0 0 150px rgba(0,0,0,0.9)' }}
      />
      <div className="absolute inset-0 mix-blend-screen opacity-[0.04] pointer-events-none animate-pulse-fast motion-reduce:hidden noise" />
    </div>
  );
};

export default CRTOverlay;
