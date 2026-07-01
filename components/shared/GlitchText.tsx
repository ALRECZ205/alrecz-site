'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
  className?: string;
  /** Marks the element for the custom cursor's "hover" state. Default true. */
  cursorHover?: boolean;
}

/**
 * Consolidated glitch text — replaces the two divergent copies that used to
 * live in components/legacy and components/art-ai. Chaos is hover-triggered
 * only; an always-on constant glitch read as noisy/cheap in review.
 */
const GlitchText: React.FC<GlitchTextProps> = ({
  text,
  as: Tag = 'span',
  className = '',
  cursorHover = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Tag
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor={cursorHover ? 'hover' : undefined}
    >
      <span className="relative z-10">{text}</span>

      {isHovered && (
        <>
          <motion.span
            className="absolute top-0 left-[2px] -z-10 text-alrecz-blood mix-blend-screen motion-reduce:hidden"
            animate={{ x: [-2, 2, -1, 3, 0], y: [1, -1, 2, -2, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: 'mirror' }}
            aria-hidden="true"
          >
            {text}
          </motion.span>
          <motion.span
            className="absolute top-0 -left-[2px] -z-10 text-blue-500 mix-blend-screen motion-reduce:hidden"
            animate={{ x: [2, -2, 1, -3, 0], y: [-1, 1, -2, 2, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: 'mirror', delay: 0.05 }}
            aria-hidden="true"
          >
            {text}
          </motion.span>
        </>
      )}
    </Tag>
  );
};

export default GlitchText;
