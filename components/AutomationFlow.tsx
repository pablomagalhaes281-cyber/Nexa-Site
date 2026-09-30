'use client';

import { useEffect, useRef, useState } from 'react';

const flowSteps = ['Cliente', 'Bot', 'Inteligência Artificial', 'Qualificação', 'Atendimento', 'Conversão'];

export function AutomationFlow() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(true);
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative mx-auto max-w-6xl">
      <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-violet-400/30 to-transparent md:block" />

      <div className="grid gap-4 md:grid-cols-6">
        {flowSteps.map((step, index) => (
          <div key={step} className="relative flex flex-col items-center">
            <div
              className={`relative flex h-28 w-full items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] px-4 text-center text-[13px] font-medium text-zinc-200 transition-all duration-700 ${
                active ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 140}ms` }}
            >
              <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(102,124,255,0.20),transparent_62%)]" />
              <span className="relative z-10">{step}</span>
            </div>

            {index < flowSteps.length - 1 && (
              <div className="relative my-2 hidden h-10 w-full items-center justify-center md:flex">
                <div className="h-px w-full bg-gradient-to-r from-violet-400/30 via-violet-400/60 to-violet-400/30" />
                <span className="absolute h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_15px_rgba(167,139,250,0.8)]" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
