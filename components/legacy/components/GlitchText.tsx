'use client';

import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  hoverEffect?: boolean;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, as: Tag = 'span', className = '', hoverEffect = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [skew, setSkew] = useState(0);

  useEffect(() => {
    if (!hoverEffect || isHovered) {
      const interval = setInterval(() => {
        setSkew(Math.random() > 0.9 ? Math.random() * 20 - 10 : 0);
      }, 100);
      return () => clearInterval(interval);
    } else {
  setTimeout(() => setSkew(0), 0);
    }
  }, [isHovered, hoverEffect]);

  const baseClasses = `relative inline-block ${className}`;
  const glitchClasses = "absolute top-0 left-0 -z-10 opacity-70 mix-blend-screen";

  return (
    <Tag 
      className={baseClasses}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transform: `skewX(${skew}deg)` }}
    >
      {/* Main Text */}
      <span className="relative z-10">{text}</span>
      
      {/* Cyan Layer */}
      <span 
        className={`${glitchClasses} text-cyan-500 animate-pulse`}
        style={{ transform: `translate(${isHovered ? -2 : -1}px, 0)` }}
        aria-hidden="true"
      >
        {text}
      </span>

      {/* Red Layer */}
      <span 
        className={`${glitchClasses} text-red-500 animate-pulse`}
        style={{ transform: `translate(${isHovered ? 2 : 1}px, 0)` }}
        aria-hidden="true"
      >
        {text}
      </span>
    </Tag>
  );
};

export default GlitchText;