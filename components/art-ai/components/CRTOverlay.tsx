import React from 'react';

const CRTOverlay: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-30">
      <div className="absolute inset-0 scanlines"></div>
      <div className="absolute inset-0 noise"></div>
      <div className="absolute inset-0 vignette"></div>
    </div>
  );
};

export default CRTOverlay;
