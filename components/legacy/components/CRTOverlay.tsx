import React from 'react';

const CRTOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Scanlines */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
          backgroundSize: '100% 2px, 3px 100%'
        }}
      />
      
      {/* Moving scanline bar */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-screen w-full animate-scanline pointer-events-none" />

      {/* Vignette / Tube Border */}
      <div 
        className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]" 
        style={{
          boxShadow: 'inset 0 0 150px rgba(0,0,0,0.9)'
        }}
      />
      
      {/* RGB Shift at edges */}
      <div className="absolute inset-0 mix-blend-screen opacity-5 pointer-events-none bg-repeat animate-pulse-fast" />
    </div>
  );
};

export default CRTOverlay;