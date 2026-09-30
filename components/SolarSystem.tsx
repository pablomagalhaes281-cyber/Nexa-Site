'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';

const orbitItems = [
  {
    name: 'SITES',
    description: 'Experiências digitais modernas e responsivas.',
    radius: 220,
    duration: 34,
    offset: 0,
  },
  {
    name: 'AUTOMAÇÃO',
    description: 'Processos que trabalham automaticamente pela sua empresa.',
    radius: 170,
    duration: 28,
    offset: 70,
  },
  {
    name: 'IA',
    description: 'Inteligência aplicada ao crescimento do seu negócio.',
    radius: 260,
    duration: 26,
    offset: 130,
  },
  {
    name: 'BOTS',
    description: 'Atendimento inteligente disponível a qualquer hora.',
    radius: 200,
    duration: 40,
    offset: 200,
  },
] as const;

export function SolarSystem() {
  const [active, setActive] = useState<string>('SITES');

  const orbitMarkup = useMemo(
    () =>
      orbitItems.map((item) => ({
        ...item,
        top: 50,
        left: 50,
      })),
    [],
  );

  return (
    <div className="relative mx-auto flex h-[500px] w-full max-w-[560px] items-center justify-center sm:h-[560px]">
      <div className="absolute h-[440px] w-[440px] rounded-full border border-white/5 bg-[radial-gradient(circle,rgba(98,104,255,0.08),rgba(0,0,0,0)_65%)]" />

      {orbitMarkup.map((item) => (
        <div
          key={item.name}
          className="absolute rounded-full border border-white/10"
          style={{
            width: `${item.radius * 2}px`,
            height: `${item.radius * 2}px`,
            animation: `orbit ${item.duration}s linear infinite`,
            animationDelay: `${item.offset * -0.1}s`,
          }}
        >
          <button
            type="button"
            aria-label={item.name}
            onMouseEnter={() => setActive(item.name)}
            onMouseLeave={() => setActive('SITES')}
            className="absolute -right-2 top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/90 shadow-[0_0_20px_rgba(102,124,255,0.5)] transition duration-300 hover:scale-125"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-violet-500" />
          </button>
        </div>
      ))}

      <div className="relative z-10 flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-[#090b12]/80 p-4 shadow-[0_0_50px_rgba(168,85,247,0.20)] backdrop-blur-xl sm:h-44 sm:w-44">
        <Image src="/logo-nexa.png" alt="Nexa Flow IA" width={150} height={150} className="h-full w-full object-contain" />
      </div>
    </div>
  );
}
