import React, { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop
    if (window.innerWidth < 1024) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed w-[400px] h-[400px] rounded-full z-[9999] mix-blend-screen transition-opacity duration-300"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
        opacity: isVisible ? 1 : 0,
      }}
      aria-hidden="true"
    />
  );
};

export default CursorGlow;
