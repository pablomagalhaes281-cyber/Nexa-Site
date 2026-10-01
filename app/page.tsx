'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Reveal } from '@/components/Reveal';
import CursorGlow from '@/components/CursorGlow';

const WHATSAPP_URL =
  'https://wa.me/553592602600?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Nexa%20Flow%20e%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es.';

const services = [
  {
    number: '01',
    title: 'Automação',
    description:
      'Automatizamos processos repetitivos para sua empresa ganhar velocidade, organização e tempo.',
    tag: 'PROCESSOS',
  },
  {
    number: '02',
    title: 'Inteligência Artificial',
    description:
      'Integramos inteligência artificial ao atendimento e às operações do seu negócio.',
    tag: 'IA',
  },
  {
    number: '03',
    title: 'Sites & Landing Pages',
    description:
      'Criamos experiências digitais rápidas, profissionais e pensadas para transformar visitas em oportunidades.',
    tag: 'WEB',
  },
  {
    number: '04',
    title: 'WhatsApp & Bots',
    description:
      'Atendimento automatizado para responder clientes, organizar contatos e gerar novas oportunidades.',
    tag: 'BOTS',
  },
];

const benefits = [
  { value: '24/7', label: 'Atendimento automatizado' },
  { value: '+Agilidade', label: 'Processos mais rápidos' },
  { value: '+Tempo', label: 'Menos tarefas repetitivas' },
  { value: 'Escalável', label: 'Tecnologia que cresce com você' },
];

const processSteps = [
  {
    number: '01',
    title: 'Entendemos',
    description:
      'Conhecemos sua empresa, sua rotina e os processos que podem ser melhorados.',
  },
  {
    number: '02',
    title: 'Planejamos',
    description:
      'Desenhamos uma solução objetiva e adequada às necessidades do negócio.',
  },
  {
    number: '03',
    title: 'Desenvolvemos',
    description:
      'Transformamos o planejamento em uma solução digital funcional.',
  },
  {
    number: '04',
    title: 'Evoluímos',
    description:
      'Acompanhamos o projeto e buscamos novas oportunidades de automação.',
  },
];

function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <CursorGlow />

      <main className="min-h-screen overflow-x-hidden bg-black text-white">
        {/* HEADER */}
        <header className="fixed inset-x-0 top-0 z-50 border-b border-[#292d30] bg-black/85 backdrop-blur-xl">
          <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 sm:px-6">
            <a href="#inicio" className="flex items-center gap-3">
              <Image
                src="/logo-nexa.png"
                alt="Nexa Flow"
                width={38}
                height={38}
                priority
                className="h-[38px] w-[38px] object-contain"
              />

              <div>
                <p className="text-[11px] font-semibold tracking-[0.18em]">
                  NEXA FLOW
                </p>

                <p className="mt-1 font-mono text-[8px] tracking-[0.22em] text-[#6e727a]">
                  IA
                </p>
              </div>
            </a>

            <nav className="hidden items-center gap-7 text-[13px] text-[#a1a4a5] md:flex">
              <a href="#inicio" className="nav-link hover:text-white">
                Início
              </a>

              <a href="#solucoes" className="nav-link hover:text-white">
                Soluções
              </a>

              <a href="#tecnologia" className="nav-link hover:text-white">
                Tecnologia
              </a>

              <a href="#processo" className="nav-link hover:text-white">
                Como funciona
              </a>

              <a href="#sobre" className="nav-link hover:text-white">
                Sobre
              </a>
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <a
                href="https://www.instagram.com/nexa_flowia"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Nexa Flow"
                className="magnetic-button flex h-9 w-9 items-center justify-center rounded-[6px] border border-[#292d30] text-[#a1a4a5] hover:border-[#555] hover:text-white"
              >
                <InstagramIcon />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-button rounded-[6px] border border-[#292d30] px-4 py-2 text-[13px] hover:border-[#777]"
              >
                Falar conosco
              </a>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-[6px] border border-[#292d30] md:hidden"
            >
              <span className="flex w-4 flex-col gap-1.5">
                <span
                  className={`h-px w-full bg-white transition ${
                    menuOpen ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />

                <span
                  className={`h-px w-full bg-white transition ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />

                <span
                  className={`h-px w-full bg-white transition ${
                    menuOpen ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </span>
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-[#292d30] bg-black px-5 py-5 md:hidden">
              <nav className="mx-auto flex max-w-[1200px] flex-col text-sm text-[#a1a4a5]">
                <a
                  href="#inicio"
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#292d30] py-3"
                >
                  Início
                </a>

                <a
                  href="#solucoes"
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#292d30] py-3"
                >
                  Soluções
                </a>

                <a
                  href="#tecnologia"
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#292d30] py-3"
                >
                  Tecnologia
                </a>

                <a
                  href="#processo"
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#292d30] py-3"
                >
                  Como funciona
                </a>

                <a
                  href="#sobre"
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#292d30] py-3"
                >
                  Sobre
                </a>

                <a
                  href="https://www.instagram.com/nexa_flowia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border-b border-[#292d30] py-3"
                >
                  <InstagramIcon />
                  @nexa_flowia
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 rounded-[6px] border border-[#292d30] px-4 py-3 text-center text-white"
                >
                  Falar conosco
                </a>
              </nav>
            </div>
          )}
        </header>

        {/* HERO */}
        <section
          id="inicio"
          className="relative flex min-h-screen items-center overflow-hidden border-b border-[#292d30] px-5 pb-20 pt-32 sm:px-6"
        >
          <div className="animated-line absolute inset-x-0 top-0 h-px" />

          <div className="mx-auto grid w-full max-w-[1200px] items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="hero-fade mb-8 inline-flex items-center gap-3 rounded-full border border-[#292d30] px-3 py-1.5 font-mono text-[11px] text-[#a1a4a5]">
                <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#3ad389]" />
                NEXA SYSTEM ONLINE
              </div>

              <h1 className="hero-fade hero-fade-delay-1 max-w-[760px] text-[clamp(3.3rem,7vw,6rem)] font-normal leading-[0.96] tracking-[-0.04em]">
                Automação
                <br />
                inteligente para
                <br />
                o seu negócio.
              </h1>

              <p className="hero-fade hero-fade-delay-2 mt-8 max-w-[560px] text-[16px] leading-7 text-[#a1a4a5] sm:text-[18px]">
                Criamos soluções digitais para empresas que querem automatizar
                processos, melhorar o atendimento e crescer usando tecnologia.
              </p>

              <div className="hero-fade hero-fade-delay-3 mt-10 flex flex-wrap gap-3">
                <a
                  href="#solucoes"
                  className="magnetic-button rounded-[6px] border border-[#f0f0f0] px-5 py-3 text-sm hover:bg-white hover:text-black"
                >
                  Conheça nossas soluções
                </a>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-button rounded-[6px] border border-[#292d30] px-5 py-3 text-sm hover:border-[#777]"
                >
                  Falar com especialista →
                </a>
              </div>
            </div>

            {/* OBJETO ANIMADO */}
            <div className="nexa-object relative hidden min-h-[500px] items-center justify-center lg:flex">
              <div className="nexa-object-ring-one absolute h-[340px] w-[340px] rounded-[42px] border border-[#292d30]" />

              <div className="nexa-object-ring-two absolute h-[255px] w-[255px] rounded-[12px] border border-[#292d30]" />

              <div className="absolute h-[410px] w-px bg-gradient-to-b from-transparent via-[#292d30] to-transparent" />

              <div className="absolute h-px w-[410px] bg-gradient-to-r from-transparent via-[#292d30] to-transparent" />

              <div className="nexa-object-core relative flex h-[180px] w-[180px] rotate-[12deg] items-center justify-center rounded-[24px] border border-[#464a4d] bg-black">
                <div className="absolute inset-5 rounded-[16px] border border-[#292d30]" />

                <Image
                  src="/logo-nexa.png"
                  alt="Nexa Flow"
                  width={90}
                  height={90}
                  className="relative z-10 h-[90px] w-[90px] object-contain opacity-90"
                />
              </div>
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="border-b border-[#292d30] px-5 sm:px-6">
          <div className="mx-auto grid max-w-[1200px] sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => (
              <Reveal
                key={item.label}
                className={`border-b border-[#292d30] px-6 py-8 sm:border-b-0 ${
                  index !== benefits.length - 1
                    ? 'lg:border-r lg:border-[#292d30]'
                    : ''
                }`}
              >
                <p className="font-mono text-[12px] text-[#9281f7]">
                  {item.value}
                </p>

                <p className="mt-2 text-sm text-[#a1a4a5]">{item.label}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SOLUÇÕES */}
        <section
          id="solucoes"
          className="border-b border-[#292d30] px-5 py-28 sm:px-6 lg:py-36"
        >
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <div className="mb-16 grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="mb-5 font-mono text-[11px] tracking-[0.12em] text-[#9281f7]">
                    01 / SOLUÇÕES
                  </p>

                  <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.05em]">
                    Tecnologia que
                    <br />
                    trabalha por você.
                  </h2>
                </div>

                <div className="flex items-end">
                  <p className="max-w-[480px] text-base leading-7 text-[#a1a4a5]">
                    Soluções pensadas para eliminar tarefas repetitivas,
                    melhorar a experiência dos seus clientes e criar uma
                    operação mais eficiente.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <Reveal
                  key={service.number}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <article className="interactive-card group h-full rounded-[16px] border border-[#292d30] bg-black p-7 sm:p-8">
                    <div className="relative z-10 mb-16 flex items-start justify-between">
                      <span className="font-mono text-[11px] text-[#6e727a]">
                        {service.number}
                      </span>

                      <span className="rounded-[6px] border border-[#292d30] px-2 py-1 font-mono text-[9px] tracking-[0.12em] text-[#9281f7]">
                        {service.tag}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl tracking-[-0.03em]">
                        {service.title}
                      </h3>

                      <p className="mt-4 max-w-[460px] text-sm leading-6 text-[#a1a4a5]">
                        {service.description}
                      </p>

                      <div className="mt-8 border-t border-[#292d30] pt-5">
                        <span className="inline-block text-sm transition duration-200 group-hover:translate-x-1">
                          Saiba mais →
                        </span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* TECNOLOGIA */}
        <section
          id="tecnologia"
          className="border-b border-[#292d30] px-5 py-28 sm:px-6 lg:py-36"
        >
          <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <div>
                <p className="mb-5 font-mono text-[11px] tracking-[0.12em] text-[#9281f7]">
                  02 / TECNOLOGIA
                </p>

                <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.05em]">
                  Menos tarefas.
                  <br />
                  Mais crescimento.
                </h2>

                <p className="mt-7 max-w-[500px] text-base leading-7 text-[#a1a4a5]">
                  Conectamos ferramentas, atendimento e inteligência artificial
                  para construir processos que funcionam mesmo quando você não
                  está olhando.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="interactive-card overflow-hidden rounded-[16px] border border-[#292d30] bg-black">
                <div className="flex h-12 items-center gap-2 border-b border-[#292d30] px-4">
                  <span className="h-2 w-2 rounded-full bg-[#464a4d]" />
                  <span className="h-2 w-2 rounded-full bg-[#464a4d]" />
                  <span className="h-2 w-2 rounded-full bg-[#464a4d]" />

                  <span className="ml-3 font-mono text-[10px] text-[#6e727a]">
                    nexa-flow / automation
                  </span>
                </div>

                <div className="relative z-10 space-y-5 p-6 font-mono text-[12px] sm:p-8 sm:text-[13px]">
                  <p className="terminal-cursor text-[#6e727a]">
                    {'>'} iniciando automação
                  </p>

                  <p>
                    <span className="text-[#a1a4a5]">cliente:</span>{' '}
                    <span className="text-[#9281f7]">novo_contato</span>
                  </p>

                  <p>
                    <span className="text-[#a1a4a5]">canal:</span>{' '}
                    <span>whatsapp</span>
                  </p>

                  <p>
                    <span className="text-[#a1a4a5]">inteligência:</span>{' '}
                    <span>atendimento_automatico</span>
                  </p>

                  <p>
                    <span className="text-[#a1a4a5]">status:</span>{' '}
                    <span className="inline-flex items-center gap-2 text-[#3ad389]">
                      <span className="status-dot h-1.5 w-1.5 rounded-full bg-[#3ad389]" />
                      conectado
                    </span>
                  </p>

                  <div className="border-t border-[#292d30] pt-5 text-[#6e727a]">
                    Nexa Flow System — operação concluída.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROCESSO */}
        <section
          id="processo"
          className="border-b border-[#292d30] px-5 py-28 sm:px-6 lg:py-36"
        >
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <p className="mb-5 font-mono text-[11px] tracking-[0.12em] text-[#9281f7]">
                03 / COMO FUNCIONA
              </p>

              <h2 className="max-w-[760px] text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.05em]">
                Da ideia à automação.
              </h2>
            </Reveal>

            <div className="mt-16 border-t border-[#292d30]">
              {processSteps.map((step, index) => (
                <Reveal
                  key={step.number}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="group grid gap-5 border-b border-[#292d30] py-8 transition duration-200 hover:bg-white/[0.015] md:grid-cols-[100px_1fr_1fr] md:items-center">
                    <span className="font-mono text-[11px] text-[#9281f7]">
                      {step.number}
                    </span>

                    <h3 className="text-2xl tracking-[-0.03em] transition duration-200 group-hover:translate-x-1">
                      {step.title}
                    </h3>

                    <p className="max-w-[440px] text-sm leading-6 text-[#a1a4a5]">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section
          id="sobre"
          className="border-b border-[#292d30] px-5 py-28 sm:px-6 lg:py-36"
        >
          <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <p className="font-mono text-[11px] tracking-[0.12em] text-[#9281f7]">
                04 / NEXA FLOW
              </p>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="text-[clamp(2.8rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.05em]">
                  Tecnologia simples.
                  <br />
                  Soluções inteligentes.
                </h2>

                <div className="mt-10 grid gap-8 text-base leading-7 text-[#a1a4a5] sm:grid-cols-2">
                  <p>
                    A Nexa Flow desenvolve soluções digitais para empresas que
                    querem automatizar processos e melhorar seu atendimento.
                  </p>

                  <p>
                    Transformamos tecnologia em ferramentas práticas para o dia
                    a dia do seu negócio.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="px-5 py-28 sm:px-6 lg:py-40">
          <div className="mx-auto max-w-[1200px]">
            <Reveal>
              <div className="interactive-card rounded-[16px] border border-[#292d30] p-8 sm:p-12 lg:p-16">
                <div className="relative z-10">
                  <p className="font-mono text-[11px] tracking-[0.12em] text-[#9281f7]">
                    05 / VAMOS CONVERSAR
                  </p>

                  <h2 className="mt-7 max-w-[850px] text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.05em]">
                    Seu negócio pode
                    <br />
                    trabalhar melhor.
                  </h2>

                  <p className="mt-8 max-w-[570px] text-base leading-7 text-[#a1a4a5]">
                    Conte o que sua empresa precisa. Vamos pensar em uma solução
                    simples, eficiente e construída para o seu negócio.
                  </p>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magnetic-button rounded-[6px] border border-white px-5 py-3 text-sm hover:bg-white hover:text-black"
                    >
                      Falar com a Nexa Flow →
                    </a>

                    <a
                      href="https://www.instagram.com/nexa_flowia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="magnetic-button flex items-center gap-2 rounded-[6px] border border-[#292d30] px-5 py-3 text-sm text-[#a1a4a5] hover:border-[#777] hover:text-white"
                    >
                      <InstagramIcon />
                      @nexa_flowia
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[#292d30] px-5 py-8 sm:px-6">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-4 text-[12px] text-[#6e727a] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Nexa Flow IA. Todos os direitos reservados.</p>

            <p className="font-mono">AUTOMAÇÃO • IA • DESENVOLVIMENTO</p>
          </div>
        </footer>
      </main>
    </>
  );
}