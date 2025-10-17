'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-interactive')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Big glowing ball cursor effect - darker version */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 40,
          y: mousePosition.y - 40,
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      >
        <div 
          className="w-20 h-20 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(26, 123, 125, 0.8) 0%, rgba(26, 123, 125, 0.6) 40%, rgba(26, 123, 125, 0.2) 70%)',
            filter: 'blur(8px)',
          }}
        />
      </motion.div>

      {/* Ripple effect on hover */}
      {isHovering && (
        <motion.div
          className="fixed pointer-events-none z-[9998]"
          style={{
            x: mousePosition.x - 35,
            y: mousePosition.y - 35,
          }}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <div 
            className="w-[70px] h-[70px] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(26, 123, 125, 0.5) 0%, rgba(26, 123, 125, 0) 70%)',
            }}
          />
        </motion.div>
      )}
    </>
  );
}