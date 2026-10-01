'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Soluções', href: '#solucoes' },
  { label: 'Tecnologia', href: '#tecnologia' },
  { label: 'Como funciona', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);

    handleScroll();

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-[#050507]/70 shadow-[0_0_40px_rgba(99,102,241,0.08)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent backdrop-blur-0'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">

        {/* LOGO */}
        <a
          href="#inicio"
          className="flex items-center gap-3"
          aria-label="Início da Nexa Flow IA"
        >
          <Image
            src="/logo-nexa.png"
            alt="Nexa Flow IA"
            width={42}
            height={42}
            className="h-10 w-10 object-contain"
          />

          <div className="leading-none">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-white">
              NEXA FLOW
            </p>

            <p className="mt-1 text-[7px] tracking-[0.28em] text-zinc-500">
              IA
            </p>
          </div>
        </a>

        {/* MENU DESKTOP */}
        <nav className="hidden items-center gap-8 text-[13px] text-zinc-400 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* INSTAGRAM + CONTATO */}
        <div className="hidden items-center gap-4 md:flex">

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/nexa_flowia"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Nexa Flow IA"
            title="@nexa_flowia"
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white hover:shadow-[0_0_22px_rgba(168,85,247,0.18)]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect
                width="18"
                height="18"
                x="3"
                y="3"
                rx="5"
              />

              <circle
                cx="12"
                cy="12"
                r="4"
              />

              <circle
                cx="17.5"
                cy="6.5"
                r="1"
                fill="currentColor"
                stroke="none"
              />
            </svg>
          </a>

          {/* BOTÃO CONTATO */}
          <a
            href="#contato"
            className="magnetic-button rounded-full border border-white/15 bg-white/[0.03] px-5 py-2.5 text-[12px] font-medium text-white transition hover:border-violet-400/50 hover:bg-white/[0.06]"
          >
            Falar conosco
          </a>
        </div>

        {/* BOTÃO MENU MOBILE */}
        <button
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white md:hidden"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="flex w-4 flex-col gap-1.5">

            <span
              className={`block h-0.5 rounded-full bg-white transition ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />

            <span
              className={`block h-0.5 rounded-full bg-white transition ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />

            <span
              className={`block h-0.5 rounded-full bg-white transition ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />

          </span>
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#050507]/95 px-5 py-4 backdrop-blur-xl md:hidden">

          <nav className="flex flex-col gap-3 text-sm text-zinc-300">

            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl border border-white/5 px-3 py-2 transition hover:border-violet-400/30 hover:bg-white/[0.02]"
              >
                {item.label}
              </a>
            ))}

            {/* INSTAGRAM MOBILE */}
            <a
              href="https://www.instagram.com/nexa_flowia"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-zinc-300 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect
                  width="18"
                  height="18"
                  x="3"
                  y="3"
                  rx="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>

              @nexa_flowia
            </a>

            {/* CONTATO MOBILE */}
            <a
              href="#contato"
              className="rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2.5 text-center text-white"
              onClick={() => setMenuOpen(false)}
            >
              Falar conosco
            </a>

          </nav>
        </div>
      )}
    </header>
  );
}