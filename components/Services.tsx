'use client';

import { useState } from 'react';

const services = [
  {
    number: '01',
    title: 'SITES PROFISSIONAIS',
    text: 'Criamos experiências digitais modernas, rápidas e responsivas para transformar visitantes em oportunidades.',
    icon: '◌',
  },
  {
    number: '02',
    title: 'AUTOMAÇÃO INTELIGENTE',
    text: 'Automatizamos tarefas e processos repetitivos para sua empresa ganhar tempo e eficiência.',
    icon: '⚡',
  },
  {
    number: '03',
    title: 'BOTS DE ATENDIMENTO',
    text: 'Atendimento inteligente para responder clientes, organizar oportunidades e automatizar conversas.',
    icon: '✦',
  },
] as const;

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="mt-20 grid gap-5 md:grid-cols-3">
      {services.map((service, index) => {
        const isActive = hovered === index;

        return (
          <article
            key={service.number}
            onMouseMove={(event) => {
              const bounds = event.currentTarget.getBoundingClientRect();
              const x = event.clientX - bounds.left;
              const y = event.clientY - bounds.top;
              const rotateY = ((x / bounds.width) - 0.5) * 6;
              const rotateX = (0.5 - (y / bounds.height)) * 6;
              event.currentTarget.style.transform = `perspective(1100px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.transform = 'perspective(1100px) rotateX(0deg) rotateY(0deg) translateY(0px)';
              setHovered(null);
            }}
            onMouseEnter={() => setHovered(index)}
            className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.02] p-7 transition duration-500 hover:border-violet-400/30 hover:bg-white/[0.04]"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <div
                className="absolute left-0 top-0 h-full w-full"
                style={{
                  background: `radial-gradient(circle at ${isActive ? '60%' : '50%'} 30%, rgba(167,139,250,0.2), transparent 45%)`,
                }}
              />
            </div>

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium tracking-[0.32em] text-zinc-600">{service.number}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-lg text-violet-300 shadow-[0_0_20px_rgba(168,85,247,0.18)] transition duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>

              <h3 className="mt-16 text-[20px] font-semibold leading-tight tracking-[-0.04em] text-white">{service.title}</h3>
              <p className="mt-5 text-[15px] leading-7 text-zinc-400">{service.text}</p>

              <div className="mt-8 flex items-center gap-2 text-sm text-zinc-300">
                <span className="text-violet-300">Saiba mais</span>
                <span className="transition duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
