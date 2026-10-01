'use client';

import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    const touchDevice = window.matchMedia('(pointer: coarse)').matches;

    if (reducedMotion || touchDevice) {
      glow.style.display = 'none';
      return;
    }

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let glowX = mouseX;
    let glowY = mouseY;

    let animationFrame: number;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      glow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      glow.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      glow.style.opacity = '1';
    };

    const animate = () => {
      glowX += (mouseX - glowX) * 0.09;
      glowY += (mouseY - glowY) * 0.09;

      glow.style.transform = `translate3d(
        ${glowX - 250}px,
        ${glowY - 250}px,
        0
      )`;

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,

        width: '500px',
        height: '500px',

        borderRadius: '50%',

        pointerEvents: 'none',

        zIndex: 40,

        opacity: 0,

        background:
          'radial-gradient(circle, rgba(146,129,247,0.14) 0%, rgba(146,129,247,0.075) 25%, rgba(146,129,247,0.025) 48%, rgba(146,129,247,0) 72%)',

        filter: 'blur(12px)',

        transition: 'opacity 400ms ease',

        willChange: 'transform',

        mixBlendMode: 'screen',
      }}
    />
  );
}