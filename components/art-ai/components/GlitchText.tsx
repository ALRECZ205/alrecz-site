import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-cursor="hover"
    >
      <span className="relative z-10">{text}</span>
      
      {isHovered && (
        <>
          <motion.span 
            className="absolute top-0 left-[2px] -z-10 text-alrecz-blood mix-blend-screen"
            animate={{ x: [-2, 2, -1, 3, 0], y: [1, -1, 2, -2, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
            aria-hidden="true"
          >
            {text}
          </motion.span>
          <motion.span 
            className="absolute top-0 -left-[2px] -z-10 text-blue-500 mix-blend-screen"
            animate={{ x: [2, -2, 1, -3, 0], y: [-1, 1, -2, 2, 0] }}
            transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror", delay: 0.05 }}
            aria-hidden="true"
          >
            {text}
          </motion.span>
        </>
      )}
    </div>
  );
};

export default GlitchText;
