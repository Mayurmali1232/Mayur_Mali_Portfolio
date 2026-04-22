import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Cursor = () => {
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;


    const moveCursor = (e) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
        cursorDotRef.current.style.left = e.clientX + 'px';
        cursorDotRef.current.style.top = e.clientY + 'px';
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1.5)';
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = 'scale(1)';
      }
    };

    document.addEventListener('mousemove', moveCursor);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .hover-lift');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 w-8 h-8 border-2 border-white rounded-full transition-transform duration-100 ease-out mix-blend-difference hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={cursorDotRef}
        className="fixed pointer-events-none z-50 w-2 h-2 bg-white rounded-full transition-transform duration-75 ease-out hidden md:block"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default Cursor;