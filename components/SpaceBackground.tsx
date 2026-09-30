'use client';

import { useEffect, useRef } from 'react';

type Star = {
  x: number;
  y: number;
  r: number;
  depth: number;
  alpha: number;
  twinkle: number;
  drift: number;
};

export function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const makeStars = (): Star[] => {
      const count = window.innerWidth < 640 ? 85 : window.innerWidth < 1024 ? 150 : 220;
      return Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * (window.innerWidth < 640 ? 1.8 : 2.6) + 0.7,
        depth: Math.random() * 1.8 + 0.5,
        alpha: Math.random() * 0.9 + 0.2,
        twinkle: Math.random() * 5 + 2,
        drift: Math.random() * 0.8 + 0.2,
      }));
    };

    let stars: Star[] = makeStars();
    const particles: Array<{ x: number; y: number; radius: number; speed: number; alpha: number }> = Array.from(
      { length: window.innerWidth < 640 ? 22 : 44 },
      () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: Math.random() * (window.innerWidth < 640 ? 1.4 : 2.1) + 0.75,
        speed: Math.random() * 0.5 + 0.2,
        alpha: Math.random() * 0.7 + 0.2,
      }),
    );

    const drawBackground = (time: number) => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);

      const nebulaA = context.createRadialGradient(
        window.innerWidth * 0.24,
        window.innerHeight * 0.18,
        30,
        window.innerWidth * 0.24,
        window.innerHeight * 0.18,
        window.innerWidth * 0.6,
      );
      nebulaA.addColorStop(0, 'rgba(75, 132, 255, 0.08)');
      nebulaA.addColorStop(0.35, 'rgba(122, 92, 255, 0.045)');
      nebulaA.addColorStop(1, 'rgba(0, 0, 0, 0)');
      context.fillStyle = nebulaA;
      context.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const nebulaB = context.createRadialGradient(
        window.innerWidth * 0.72,
        window.innerHeight * 0.26,
        18,
        window.innerWidth * 0.72,
        window.innerHeight * 0.26,
        window.innerWidth * 0.58,
      );
      nebulaB.addColorStop(0, 'rgba(200, 87, 255, 0.06)');
      nebulaB.addColorStop(0.35, 'rgba(123, 92, 255, 0.04)');
      nebulaB.addColorStop(1, 'rgba(0, 0, 0, 0)');
      context.fillStyle = nebulaB;
      context.fillRect(0, 0, window.innerWidth, window.innerHeight);

      const pointerX = pointerRef.current.x;
      const pointerY = pointerRef.current.y;

      stars.forEach((star) => {
        const offsetX = (pointerX / window.innerWidth - 0.5) * 22 * star.depth;
        const offsetY = (pointerY / window.innerHeight - 0.5) * 20 * star.depth;
        const x = star.x + offsetX + Math.sin(time * 0.0003 * star.drift + star.twinkle) * 0.5;
        const y = star.y + offsetY + Math.cos(time * 0.00035 * star.drift + star.twinkle) * 0.4;
        const glow = 0.35 + Math.sin(time * 0.0015 * star.twinkle + star.twinkle) * 0.5;

        context.beginPath();
        context.fillStyle = `rgba(255,255,255,${star.alpha * glow})`;
        context.arc(x, y, star.r, 0, Math.PI * 2);
        context.fill();
      });

      particles.forEach((particle, index) => {
        const driftX = ((pointerX / window.innerWidth - 0.5) * 18 * (index % 2 === 0 ? 1 : 0.6)) / 2;
        const driftY = ((pointerY / window.innerHeight - 0.5) * 12) / 2;
        particle.x += particle.speed * 0.08;
        particle.y += Math.sin(time * 0.0006 + index) * 0.04;

        if (particle.x > window.innerWidth + 20) particle.x = -20;
        if (particle.y > window.innerHeight + 20) particle.y = -20;

        context.beginPath();
        context.fillStyle = `rgba(117, 191, 255, ${particle.alpha})`;
        context.arc(particle.x + driftX, particle.y + driftY, particle.radius, 0, Math.PI * 2);
        context.fill();
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
    };

    const handleResize = () => {
      resize();
      stars = makeStars();
    };

    if (prefersReducedMotion) {
      drawBackground(0);
      window.addEventListener('resize', handleResize);
      window.addEventListener('pointermove', handlePointerMove);
      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('pointermove', handlePointerMove);
      };
    }

    resize();
    const tick = (time: number) => {
      drawBackground(time);
      requestAnimationFrame(tick);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', handlePointerMove);
    const animationFrame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-90" />;
}
