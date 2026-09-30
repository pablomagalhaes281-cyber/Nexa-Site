'use client';

import { useEffect, useState } from 'react';

export function CursorGlow() {
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) return;

    const handlePointerMove = (event: PointerEvent) => {
      setPointer({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const handlePointerLeave = () => setVisible(false);

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-40 hidden md:block ${visible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transition: 'opacity 260ms ease' }}
    >
      <div
        className="absolute h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(85,184,255,0.24),rgba(102,124,255,0.14),rgba(168,85,247,0.10),transparent_70%)] blur-3xl"
        style={{ left: pointer.x, top: pointer.y }}
      />
    </div>
  );
}
