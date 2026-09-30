'use client';

import Image from 'next/image';
import { useState } from 'react';

const nodes = [
  { label: 'SITE', x: '12%', y: '20%', info: 'Presença digital profissional e clara.' },
  { label: 'WHATSAPP', x: '16%', y: '72%', info: 'Conexão direta com clientes e oportunidades.' },
  { label: 'IA', x: '48%', y: '10%', info: 'Tomada de decisão com inteligência aplicada.' },
  { label: 'AUTOMAÇÃO', x: '73%', y: '28%', info: 'Processos organizados e recorrentes.' },
  { label: 'CLIENTES', x: '76%', y: '72%', info: 'Experiência mais fluida e eficiente.' },
  { label: 'DADOS', x: '50%', y: '82%', info: 'Informações em movimento e organização.' },
] as const;

export function TechnologyNetwork() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="relative mx-auto flex h-[520px] max-w-5xl items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent px-4 py-8">
      <div className="absolute inset-8 rounded-full border border-violet-400/15" />
      <div className="absolute inset-x-16 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
      <div className="absolute inset-y-16 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-violet-400/20 to-transparent" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 520" preserveAspectRatio="none" aria-hidden="true">
        <path d="M120 130 L500 260 L880 130" stroke="rgba(102,124,255,0.22)" strokeWidth="2" fill="none" />
        <path d="M120 360 L500 260 L880 360" stroke="rgba(168,85,247,0.22)" strokeWidth="2" fill="none" />
        <path d="M130 120 L240 340" stroke="rgba(85,184,255,0.16)" strokeWidth="2" fill="none" />
        <path d="M870 120 L760 340" stroke="rgba(85,184,255,0.16)" strokeWidth="2" fill="none" />
        <path d="M500 100 L500 410" stroke="rgba(196,62,255,0.16)" strokeWidth="2" fill="none" />
      </svg>

      {nodes.map((node) => (
        <button
          key={node.label}
          type="button"
          aria-label={node.label}
          onMouseEnter={() => setActive(node.label)}
          onMouseLeave={() => setActive(null)}
          className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#090b12]/80 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-300 transition-all duration-300 ${
            active === node.label ? 'scale-110 border-violet-400/60 shadow-[0_0_30px_rgba(168,85,247,0.28)]' : 'scale-100'
          }`}
          style={{ left: node.x, top: node.y }}
        >
          {node.label}
          {active === node.label && (
            <span className="absolute left-1/2 top-full mt-3 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-[#07070b]/90 px-3 py-1.5 text-[10px] tracking-[0.1em] text-zinc-300">
              {node.info}
            </span>
          )}
        </button>
      ))}

      <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full border border-violet-400/25 bg-[#090b12]/85 p-3 shadow-[0_0_50px_rgba(102,124,255,0.18)] backdrop-blur-xl sm:h-32 sm:w-32">
        <Image src="/logo-nexa.png" alt="Nexa Flow IA" width={110} height={110} className="h-full w-full object-contain" />
      </div>
    </div>
  );
}
