import Image from 'next/image';
import { AutomationFlow } from '@/components/AutomationFlow';
import { CursorGlow } from '@/components/CursorGlow';
import { Header } from '@/components/Header';
import { Reveal } from '@/components/Reveal';
import { Services } from '@/components/Services';
import { SolarSystem } from '@/components/SolarSystem';
import { SpaceBackground } from '@/components/SpaceBackground';
import { TechnologyNetwork } from '@/components/TechnologyNetwork';

const benefits = [
  { value: '24/7', label: 'Atendimento automatizado' },
  { value: '+Agilidade', label: 'Processos mais rápidos' },
  { value: '+Tempo', label: 'Menos tarefas repetitivas' },
  { value: 'Escalável', label: 'Tecnologia que acompanha o crescimento' },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#030306] text-white selection:bg-violet-500/30">
      <CursorGlow />
      <SpaceBackground />
      <Header />

      <section id="inicio" className="relative isolate flex min-h-screen items-center px-5 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-[8%] top-[14%] h-[280px] w-[280px] rounded-full bg-[#55B8FF]/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-[6%] top-[18%] h-[360px] w-[360px] rounded-full bg-[#A855F7]/12 blur-[140px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="max-w-[620px]">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[9px] font-medium tracking-[0.2em] text-zinc-300/80">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-violet-400/50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
              </span>
              AUTOMAÇÃO • IA • DESENVOLVIMENTO
            </div>

            <h1
              className="max-w-[620px] text-[clamp(2.5rem,4vw,4rem)] leading-[1.02] tracking-[-0.03em] text-[#F5F7FA]"
              style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600 }}
            >
              <span className="block">Automação inteligente</span>
              <span className="mt-1 block text-[#F5F7FA]">
                para o seu <span className="bg-gradient-to-r from-[#55B7FF] via-[#7478FF] to-[#B34DFF] bg-clip-text text-transparent">negócio</span>
              </span>
            </h1>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#solucoes"
                className="magnetic-button group rounded-full bg-white px-5 py-2.75 text-sm font-semibold text-[#050507] shadow-[0_16px_40px_rgba(167,139,250,0.20)] transition hover:shadow-[0_20px_50px_rgba(167,139,250,0.28)]"
              >
                Conheça nossas soluções
                <span className="ml-2 inline-block transition duration-300 group-hover:translate-x-1">→</span>
              </a>

              <a
                href="#contato"
                className="magnetic-button rounded-full border border-white/15 bg-white/[0.02] px-5 py-2.75 text-sm font-medium text-zinc-100 transition hover:border-violet-400/40 hover:bg-white/[0.045]"
              >
                Falar com especialista
              </a>
            </div>
          </Reveal>

          <Reveal className="relative flex justify-center lg:justify-end">
            <SolarSystem />
          </Reveal>
        </div>
      </section>

      <section id="solucoes" className="border-t border-white/10 px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-[11px] font-semibold tracking-[0.26em] text-violet-300">NOSSAS SOLUÇÕES</p>
              <h2 className="max-w-xl text-[2.25rem] font-semibold tracking-[-0.06em] text-white sm:text-[3rem]">
                Soluções que trabalham
                <span className="block text-zinc-500">por você.</span>
              </h2>
            </div>

            <div className="flex items-end lg:justify-end">
              <p className="max-w-lg text-base leading-8 text-zinc-400">
                Estruturamos ferramentas que conectam comunicação, automação e tecnologia para transformar
                sua operação em um sistema mais eficiente e preparado para crescer.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <Services />
          </Reveal>
        </div>
      </section>

      <section id="processo" className="px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent p-7 sm:p-10 lg:p-14">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.28em] text-blue-300">AUTOMAÇÃO NA PRÁTICA</p>
            <h2 className="mt-5 max-w-3xl text-[2.2rem] font-semibold tracking-[-0.06em] text-white sm:text-[3rem]">
              Menos tarefas.
              <span className="block text-zinc-500">Mais crescimento.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
              Criamos fluxos inteligentes capazes de receber clientes, organizar informações e acelerar cada etapa do atendimento.
            </p>
          </Reveal>

          <div className="mt-14">
            <AutomationFlow />
          </div>
        </div>
      </section>

      <section id="tecnologia" className="px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12 text-center">
            <p className="text-[11px] font-semibold tracking-[0.28em] text-violet-300">TECNOLOGIA</p>
            <h2 className="mt-5 text-[2.25rem] font-semibold tracking-[-0.06em] text-white sm:text-[3rem]">
              Seu negócio conectado.
            </h2>
          </Reveal>

          <Reveal>
            <TechnologyNetwork />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-12">
            <h2 className="text-[2.15rem] font-semibold tracking-[-0.06em] text-white sm:text-[3rem]">
              Menos tarefas.
              <span className="block text-zinc-500">Mais crescimento.</span>
            </h2>
          </Reveal>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item, index) => (
              <Reveal key={item.value} className="block" style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="h-full rounded-[26px] border border-white/10 bg-white/[0.02] p-6 transition hover:border-violet-400/30 hover:bg-white/[0.04]">
                  <div className="text-[11px] font-semibold tracking-[0.18em] text-violet-300">{item.value}</div>
                  <p className="mt-5 text-lg font-medium leading-7 text-zinc-200">{item.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="px-5 py-28 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal className="rounded-[30px] border border-white/10 bg-white/[0.02] p-8">
            <div className="mb-8 flex items-center gap-4">
              <Image src="/logo-nexa.png" alt="Nexa Flow IA" width={64} height={64} className="h-16 w-16 object-contain" />
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] text-white">NEXA FLOW</p>
                <p className="mt-1 text-[8px] tracking-[0.3em] text-zinc-500">INTELIGÊNCIA ARTIFICIAL</p>
              </div>
            </div>

            <h2 className="text-[2.2rem] font-semibold tracking-[-0.06em] text-white sm:text-[3rem]">
              Tecnologia simples.
              <span className="block text-zinc-500">Soluções inteligentes.</span>
            </h2>
          </Reveal>

          <Reveal>
            <div className="space-y-7 text-lg leading-8 text-zinc-400">
              <p>
                A Nexa Flow IA desenvolve soluções digitais para empresas que querem automatizar processos,
                melhorar o atendimento e construir uma presença profissional na internet.
              </p>
              <p className="text-zinc-500">
                Transformamos tecnologia em ferramentas práticas para o dia a dia da sua empresa.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="contato" className="px-5 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[34px] border border-violet-400/20 bg-[radial-gradient(circle_at_top_left,rgba(85,184,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.18),transparent_40%),rgba(255,255,255,0.02)] p-8 sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute -right-10 -top-12 h-[260px] w-[260px] rounded-full bg-[#667CFF]/20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-12 left-10 h-[300px] w-[300px] rounded-full bg-[#55B8FF]/15 blur-[120px]" />

          <Reveal className="relative z-10">
            <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
              <Image src="/logo-nexa.png" alt="Nexa Flow IA" width={56} height={56} className="h-11 w-11 object-contain" />
            </div>

            <p className="text-[11px] font-semibold tracking-[0.26em] text-violet-300">PRONTO PARA O PRÓXIMO NÍVEL?</p>
            <h2 className="mt-6 max-w-4xl text-[2.3rem] font-semibold tracking-[-0.06em] text-white sm:text-[3.2rem]">
              Pronto para colocar
              <span className="block bg-gradient-to-r from-[#55B8FF] via-[#667CFF] to-[#C43EFF] bg-clip-text text-transparent">
                seu negócio no próximo nível?
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
              Conte o que sua empresa precisa e vamos desenvolver uma solução pensada para o seu negócio.
            </p>

            <a
              href="#"
              className="magnetic-button mt-8 inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#050507] shadow-[0_18px_50px_rgba(85,184,255,0.20)] transition hover:shadow-[0_22px_60px_rgba(102,124,255,0.22)]"
            >
              Falar com a Nexa Flow IA
              <span className="ml-3">→</span>
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="px-5 pb-10 pt-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo-nexa.png" alt="Nexa Flow IA" width={36} height={36} className="h-9 w-9 object-contain" />
              <span className="text-sm font-medium text-white">NEXA FLOW IA</span>
            </div>

            <nav className="flex flex-wrap gap-5 text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              <a href="#inicio" className="transition hover:text-white">Início</a>
              <a href="#solucoes" className="transition hover:text-white">Soluções</a>
              <a href="#tecnologia" className="transition hover:text-white">Tecnologia</a>
              <a href="#sobre" className="transition hover:text-white">Sobre</a>
              <a href="#contato" className="transition hover:text-white">Contato</a>
            </nav>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-white/5 pt-6 text-[11px] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Nexa Flow IA. Todos os direitos reservados.</p>
            <p>Sites • Automação • Bots • Inteligência Artificial</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
