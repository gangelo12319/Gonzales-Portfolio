import React, { useEffect, useState } from 'react';

const StarField = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  let lastMoved = 0;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const now = Date.now();
      // Throttle the mouse move to 60FPS (every 16ms)
      if (now - lastMoved > 16) {
        setCursorPosition({ x: e.clientX, y: e.clientY });
        lastMoved = now;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="w-full h-full object-cover"
        style={{
          transform: `translate(-${cursorPosition.x / 100}px, -${cursorPosition.y / 100}px)`,
        }}
      >
        <source src="/img/StarField.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default StarField;
