import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check touch capabilities
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Check hover targets with data-cursor attribute
      const target = e.target.closest('[data-cursor]');
      if (target) {
        const text = target.getAttribute('data-cursor');
        setCursorText(text || '');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Outer Follower Ring */}
      <div
        className={`fixed top-0 left-0 pointer-events-none z-50 transition-transform duration-300 ease-out flex items-center justify-center rounded-full mix-blend-difference ${
          isHovered
            ? 'w-24 h-24 bg-[#B99A5B] text-black scale-100'
            : 'w-8 h-8 border border-[#B99A5B] bg-transparent scale-100'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      >
        {isHovered && (
          <span className="text-[10px] uppercase tracking-widest font-semibold text-center text-[#151815]">
            {cursorText}
          </span>
        )}
      </div>

      {/* Tiny Center Dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#B99A5B] rounded-full pointer-events-none z-50 transition-opacity duration-150"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
          opacity: isHovered ? 0 : 1
        }}
      />
    </>
  );
}
