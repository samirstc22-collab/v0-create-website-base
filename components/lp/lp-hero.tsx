"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ChevronRight } from "lucide-react"

export function LPHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#070A11]">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(196,210,230,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(196,210,230,0.8) 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Radial gradient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[20%] top-[10%] h-[700px] w-[700px] rounded-full bg-[#1a2a44]/30 blur-[140px]" />
        <div className="absolute right-[10%] bottom-0 h-[500px] w-[500px] rounded-full bg-[#0a1a2e]/40 blur-[120px]" />
      </div>

      {/* Scanline effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 3px)`,
        }}
      />

      {/* Top bar — SaaS style */}
      <div className="relative z-10 border-b border-white/[0.06]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02] font-serif text-lg text-[#c9a961] transition-colors group-hover:border-[#c9a961]/30">
              Cf
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-[15px] text-white/90">Clube de Fórmulas</span>
              <span className="text-[10px] uppercase tracking-[2.5px] text-white/40">
                Prof. Samir Tannuri
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            <a href="#missoes" className="px-3 py-2 text-xs font-medium uppercase tracking-[1.5px] text-white/50 transition-colors hover:text-white">
              Missões
            </a>
            <a href="#industrial" className="px-3 py-2 text-xs font-medium uppercase tracking-[1.5px] text-white/50 transition-colors hover:text-white">
              Industrial
            </a>
            <a href="#magistral" className="px-3 py-2 text-xs font-medium uppercase tracking-[1.5px] text-white/50 transition-colors hover:text-white">
              Magistral
            </a>
            <a href="#lab-pro" className="px-3 py-2 text-xs font-medium uppercase tracking-[1.5px] text-white/50 transition-colors hover:text-white">
              Lab Pro
            </a>
            <a href="#contato" className="px-3 py-2 text-xs font-medium uppercase tracking-[1.5px] text-white/50 transition-colors hover:text-white">
              Contato
            </a>
          </nav>

          <Link
            href="/"
            className="hidden items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2 text-xs font-semibold text-white/70 transition-all hover:border-white/20 hover:text-white lg:flex"
          >
            Site principal
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid max-w-[1400px] gap-16 px-6 py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:px-12 lg:py-28">
        {/* Left: Editorial copy */}
        <div
          className={`flex flex-col justify-center transition-all duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Research ID tag — scientific journal style */}
          <div className="mb-10 flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-[#4a9eff]/25 bg-[#4a9eff]/[0.06] px-3 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4a9eff] shadow-[0_0_8px_rgba(74,158,255,0.6)]" />
              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#7eb8ff]">
                Research &amp; Development
              </span>
            </div>
            <span className="hidden text-[10px] uppercase tracking-[2.5px] text-white/30 md:inline">
              · Vol. 24 · 2026
            </span>
          </div>

          {/* Editorial headline */}
          <h1 className="font-serif text-[clamp(44px,6.5vw,84px)] font-normal leading-[0.96] tracking-[-2.2px] text-white">
            Ciência que vira{" "}
            <span className="italic text-[#c9a961]">fórmula.</span>
            <br />
            <span className="text-white/85">Fórmula que vira</span>{" "}
            <span className="relative inline-block italic text-[#4a9eff]">
              resultado.
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 8"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M1 5 Q 75 1, 150 4 T 299 3"
                  stroke="url(#hero-underline)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="hero-underline" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4a9eff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#4a9eff" />
                    <stop offset="100%" stopColor="#4a9eff" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Editorial lede */}
          <p className="mt-10 max-w-xl text-[17px] leading-[1.7] text-white/60 lg:text-[19px]">
            Pesquisa &amp; Desenvolvimento cosmético de alta performance para{" "}
            <span className="text-white/90">indústrias Grau 1 e 2, marcas independentes</span>{" "}
            e{" "}
            <span className="text-white/90">farmácias magistrais de excelência</span>. Bancada
            CNPq-UNICAMP, publicação peer-reviewed indexada e infraestrutura inteligente de
            formulação.
          </p>

          {/* CTA row */}
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <a
              href="#contato"
              className="group inline-flex items-center gap-3 rounded-xl bg-[#c9a961] px-6 py-3.5 text-[13px] font-bold uppercase tracking-[1.5px] text-[#070A11] shadow-[0_12px_40px_rgba(201,169,97,0.2)] transition-all hover:bg-[#d4b673] hover:shadow-[0_16px_50px_rgba(201,169,97,0.35)]"
            >
              Solicitar Proposta
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#lab-pro"
              className="group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[1.5px] text-white/85 backdrop-blur-sm transition-all hover:border-[#4a9eff]/40 hover:bg-[#4a9eff]/[0.06] hover:text-white"
            >
              Formulator AI Lab Pro
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Credentials strip */}
          <div className="mt-14 grid grid-cols-2 gap-6 border-t border-white/[0.06] pt-8 md:grid-cols-4">
            {[
              { k: "CNPq", v: "UNICAMP" },
              { k: "DOI", v: "Peer-Reviewed" },
              { k: "EUROTEX", v: "França" },
              { k: "17+", v: "Capitais" },
            ].map((c) => (
              <div key={c.k}>
                <div className="font-serif text-lg text-[#c9a961]">{c.k}</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-[2px] text-white/40">
                  {c.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Lab card — SaaS dashboard aesthetic */}
        <div
          className={`relative transition-all delay-200 duration-1000 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="relative">
            {/* Window frame */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl">
              {/* Window chrome */}
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4a9eff]" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                    LIVE · EUROTEX.FR
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/samir-lab-eurotex.jpg"
                  alt="Prof. Samir Tannuri em treinamento internacional no laboratório EUROTEX na França"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-[#070A11]/30 to-transparent" />

                {/* Corner markers — scientific journal aesthetic */}
                <svg className="absolute left-4 top-4 h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24">
                  <path d="M2 8 V2 H8" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                <svg className="absolute right-4 top-4 h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24">
                  <path d="M16 2 H22 V8" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                <svg className="absolute bottom-4 left-4 h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24">
                  <path d="M2 16 V22 H8" stroke="currentColor" strokeWidth="1.2" />
                </svg>
                <svg className="absolute bottom-4 right-4 h-6 w-6 text-white/40" fill="none" viewBox="0 0 24 24">
                  <path d="M16 22 H22 V16" stroke="currentColor" strokeWidth="1.2" />
                </svg>

                {/* Bottom caption */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-[2.5px] text-[#4a9eff]">
                        FIG. 01
                      </div>
                      <div className="mt-2 font-serif text-lg text-white/95 leading-tight">
                        Missão técnica · Laboratório EUROTEX
                      </div>
                      <div className="mt-1 text-xs text-white/50">
                        França · Homogeneização industrial
                      </div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1.5 backdrop-blur-md">
                      <span className="font-mono text-[10px] text-white/60">pH · 24.0°C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating KPI — top right */}
            <div className="absolute -right-3 top-20 hidden rounded-xl border border-[#c9a961]/25 bg-[#0b0f17]/95 p-4 backdrop-blur-xl md:block lg:-right-8">
              <div className="mb-1 text-[9px] font-bold uppercase tracking-[2px] text-[#c9a961]/70">
                Fórmulas validadas
              </div>
              <div className="font-serif text-3xl text-white">4.000<span className="text-[#c9a961]">+</span></div>
              <div className="mt-1 flex items-center gap-1.5">
                <span className="h-1 w-1 animate-pulse rounded-full bg-[#4a9eff]" />
                <span className="text-[10px] text-white/40">em bancada · 24 anos</span>
              </div>
            </div>

            {/* Floating KPI — bottom left */}
            <div className="absolute -left-3 bottom-24 hidden rounded-xl border border-[#4a9eff]/25 bg-[#0b0f17]/95 p-4 backdrop-blur-xl md:block lg:-left-8">
              <div className="mb-1 text-[9px] font-bold uppercase tracking-[2px] text-[#4a9eff]/80">
                Profissionais formados
              </div>
              <div className="font-serif text-3xl text-white">1.000<span className="text-[#4a9eff]">+</span></div>
              <div className="mt-1 text-[10px] text-white/40">Brasil · Europa · Japão</div>
            </div>
          </div>
        </div>
      </div>

      {/* Running ticker footer */}
      <div className="relative z-10 border-t border-white/[0.06] bg-black/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1400px] items-center gap-8 overflow-hidden px-6 py-3 lg:px-12">
          <div className="flex shrink-0 items-center gap-2">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4a9eff]" />
            <span className="font-mono text-[10px] uppercase tracking-[2.5px] text-white/50">
              Status
            </span>
          </div>
          <div className="flex flex-1 items-center gap-8 font-mono text-[11px] text-white/40 overflow-hidden whitespace-nowrap">
            <span>CNPq · Bolsista ativo</span>
            <span className="text-white/15">·</span>
            <span>DOI · Publicação peer-reviewed indexada</span>
            <span className="text-white/15">·</span>
            <span>Lattes · Currículo atualizado</span>
            <span className="text-white/15">·</span>
            <span>ResearchGate · Network ativo</span>
            <span className="text-white/15">·</span>
            <span>ANVISA · Compliance regulatório</span>
          </div>
        </div>
      </div>
    </section>
  )
}
