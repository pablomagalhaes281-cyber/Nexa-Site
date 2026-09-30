'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

export function Reveal({
  children,
  className = '',
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} reveal ${visible ? 'is-visible' : ''}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
