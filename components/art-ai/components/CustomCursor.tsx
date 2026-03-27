import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      // Check if hovering over interactive elements
      const isInteractive = !!target.closest('button, a, input, [data-cursor="hover"]');
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-alrecz-blood rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isClicking ? 0.5 : isHovering ? 3 : 1,
        }}
        transition={{ type: 'spring', stiffness: 800, damping: 28, mass: 0.5 }}
      />
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-alrecz-silver/50 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
      />
      {/* Hover Text Indicator */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] font-mono text-[8px] text-alrecz-silver tracking-widest uppercase ml-6 mt-6 mix-blend-difference"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: isHovering ? 1 : 0,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28 }}
      >
        {isHovering ? '[ INTERACT ]' : ''}
      </motion.div>
    </>
  );
};

export default CustomCursor;
