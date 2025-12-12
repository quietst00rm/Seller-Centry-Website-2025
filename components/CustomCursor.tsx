import React, { useEffect, useState, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Use refs for smooth animation without re-renders for every pixel
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') || 
        target.closest('a') ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      setIsHovering(!!isClickable);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseenter', onMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor globally via style injection to ensure it works everywhere */}
      <style>{`
        body, a, button, input, textarea { cursor: none !important; }
      `}</style>

      {/* Main Reticle */}
      <div 
        className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 mix-blend-difference ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          left: `${position.x}px`, 
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
          transition: 'transform 0.15s ease-out, opacity 0.3s ease' 
        }}
      >
        {/* Center Dot */}
        <div className={`w-1 h-1 bg-orange-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isHovering ? 'bg-white' : ''}`} />
        
        {/* Crosshair Lines */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-[1px] bg-orange-500 transition-all duration-300 ${isHovering ? 'w-12 bg-white' : 'opacity-50'}`} />
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-[1px] bg-orange-500 transition-all duration-300 ${isHovering ? 'h-12 bg-white' : 'opacity-50'}`} />
        
        {/* Outer Ring */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-orange-500 rounded-full transition-all duration-300 ${isHovering ? 'w-8 h-8 border-white opacity-100' : 'opacity-0'}`} />
      </div>
    </>
  );
};

export default CustomCursor;