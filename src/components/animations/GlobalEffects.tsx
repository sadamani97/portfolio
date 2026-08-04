import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      className="cursor-follower"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const lenis = new Lenis();
    function sync(time: number) {
      lenis.raf(time);
      requestAnimationFrame(sync);
    }
    requestAnimationFrame(sync);
    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
};

export { CustomCursor, SmoothScroll };
