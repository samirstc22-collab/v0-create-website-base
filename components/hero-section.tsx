"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-[#0C2340] pt-28 pb-24 lg:pt-36 lg:pb-32">
      {/* Navy overlay with gradient */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-[#0C2340]/95 via-[#0C2340]/90 to-[#0a1a33]/95 pointer-events-none z-10"
      />

      {/* Background image with zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_9321%20copiar-R9iJREd47uVnHpBixTYoO1EHXgF3Pd.jpg"
          alt=""
          fill
          className="object-cover object-[center_20%] scale-[1.2]"
          sizes="100vw"
          priority
        />
      </div>

      {/* Copper radial glow - top right */}
      <div
        aria-hidden
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-10"
        style={{
          background: "radial-gradient(circle at center, rgba(184,120,61,0.25), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.08] pointer-events-none z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10 z-20">
        {/* Eyebrow */}
        <div
          className={`text-center mb-6 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="text-[11px] font-bold uppercase tracking-[4px] text-[#B8783D]">
            HOME
          </span>
        </div>

        {/* Authority bar */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12 text-[11px] tracking-[2px] uppercase font-bold text-white/60 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span>In-Cosmetics Paris 2025</span>
          </div>
          <span className="hidden md:inline text-white/30">|</span>
          <span>Missoes Amsterdam · Japao</span>
          <span className="hidden md:inline text-white/30">|</span>
          <span>Paper Peer-Reviewed</span>
          <span className="hidden md:inline text-white/30">|</span>
          <span>ICosmetologia</span>
        </div>

        {/* Hero content grid */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — Editorial column */}
          <div className="text-center lg:text-left">
            {/* Eyebrow — short, calm, authoritative */}
            <div
              className={`mb-7 transition-all duration-700 delay-150 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-[#B8783D]/15 border border-[#B8783D]/30 text-[12px] md:text-[13px] font-bold uppercase tracking-[2.5px] text-[#d4a574]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8783D]" />
                Consultoria tecnica em formulacao
              </span>
            </div>

            {/* Main headline — service description, premium scale */}
            <h1
              className={`font-serif font-normal text-[clamp(46px,6.4vw,84px)] leading-[1.0] tracking-[-2px] text-white mb-8 transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Da literatura a bancada,
              <br />
              da bancada ao{" "}
              <span className="relative inline-block">
                <em className="italic text-[#B8783D]">mercado</em>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="10"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2,5 Q50,2 100,4 T198,3"
                    stroke="#B8783D"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.6"
                  />
                </svg>
              </span>
              .
            </h1>

            {/* Subheadline — outcome-oriented, clinical authority */}
            <p
              className={`text-[19px] md:text-[21px] text-white/85 leading-[1.6] max-w-[56ch] mx-auto lg:mx-0 mb-10 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Desenvolvo <strong className="text-white font-semibold">formulas autorais</strong>,{" "}
              <strong className="text-white font-semibold">protocolos clinicos</strong> e{" "}
              <strong className="text-white font-semibold">estrategias dermatologicas orientadas por evidencia</strong>{" "}
              — para farmacias magistrais, marcas proprias e prescritores que precisam diferenciar tecnicamente, escalar com seguranca e gerar valor percebido real.
            </p>

            {/* CTA row — action-oriented buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 transition-all duration-700 delay-400 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <Link
                href="/consultoria"
                className="group inline-flex items-center justify-center gap-3 bg-[#B8783D] text-white px-9 py-[18px] rounded-xl font-bold text-[17px] tracking-wide hover:bg-[#a66a32] transition-all shadow-[0_8px_30px_rgba(184,120,61,0.4)] hover:shadow-[0_12px_40px_rgba(184,120,61,0.5)] hover:translate-y-[-2px]"
              >
                Solicitar diagnostico do projeto
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/consultoria#tiered-offers"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur border-2 border-white/20 text-white px-7 py-[18px] rounded-xl font-semibold text-[17px] tracking-wide hover:border-[#B8783D]/60 hover:bg-[#B8783D]/10 transition-all"
              >
                Ver modelos de consultoria
              </Link>
            </div>

            {/* Trust bullets — specific value propositions */}
            <div
              className={`flex flex-wrap gap-x-7 gap-y-3 justify-center lg:justify-start text-[15px] md:text-[16px] text-white/80 font-medium transition-all duration-700 delay-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {[
                "Racional cientifico documentado",
                "Seguranca regulatoria e clinica",
                "Pronto para escala industrial",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-[18px] h-[18px] text-[#10b981]" strokeWidth={2.5} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Image card with proof */}
          <div className="relative">
            {/* Glow frame */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#B8783D]/20 via-transparent to-[#2dd4bf]/10 blur-2xl pointer-events-none" />

            {/* Main card */}
            <div
              className={`relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] ${
                mounted ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              {/* Image — tight portrait crop */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0a1a33]">
                {/* Subtle navy ground layer behind the portrait — extends the studio bg */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse at 50% 30%, #1a3358 0%, #0C2340 45%, #07172d 100%)",
                  }}
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_9321%20copiar-R9iJREd47uVnHpBixTYoO1EHXgF3Pd.jpg"
                  alt="Samir Tannuri — consultor tecnico em formulacao dermatologica"
                  fill
                  className="object-cover object-[center_8%] contrast-[1.08] saturate-[1.05]"
                  sizes="(max-width: 1024px) 100vw, 480px"
                  priority
                />

                {/* Cinematic gradient — top vignette for depth, strong navy bottom for caption legibility */}
                <div
                  aria-hidden
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(12,35,64,0.55) 0%, rgba(12,35,64,0) 22%, rgba(12,35,64,0) 50%, rgba(12,35,64,0.85) 80%, rgba(7,23,45,0.98) 100%)",
                  }}
                />

                {/* Side vignette — focuses attention on subject */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 75% 90% at center 35%, transparent 50%, rgba(7,23,45,0.55) 100%)",
                  }}
                />

                {/* Image caption */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="h-px w-8 bg-[#B8783D]" />
                    <span className="eyebrow text-[#d4a574]">
                      Pratica industrial · Bancada documentada
                    </span>
                  </div>
                  <p className="font-serif text-white text-[clamp(20px,2.4vw,26px)] leading-[1.18] max-w-[380px] tracking-[-0.025em]">
                    Da literatura a bancada — formulacao que sustenta posicionamento clinico.
                  </p>
                </div>
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-3 divide-x divide-white/10 bg-white/5 backdrop-blur">
                {[
                  { num: "6 anos", label: "Coordenando P&D" },
                  { num: "500+", label: "Farmacias atendidas" },
                  { num: "1.000+", label: "Profissionais formados" },
                ].map((stat) => (
                  <div key={stat.label} className="py-5 px-4 text-center">
                    <div className="font-serif text-2xl text-white mb-0.5">{stat.num}</div>
                    <div className="text-[10px] tracking-[1.5px] uppercase text-white/60 font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 bg-[#B8783D] text-white px-4 py-2 rounded-xl font-bold text-xs tracking-wide shadow-[0_8px_24px_rgba(184,120,61,0.5)] animate-glow">
              Boutique B2B
            </div>
          </div>
        </div>

        {/* SOLUCOES IMEDIATAS — pain → solution by segment */}
        <div
          className={`mt-20 lg:mt-28 transition-all duration-700 delay-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {/* Section header */}
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8 pb-6 border-b border-white/10">
            <div>
              <span className="inline-flex items-center gap-2 mb-3 text-[12px] font-bold uppercase tracking-[3px] text-[#B8783D]">
                <span className="h-px w-8 bg-[#B8783D]" />
                Solucoes imediatas
              </span>
              <h2 className="font-serif text-[clamp(28px,3.4vw,42px)] text-white leading-[1.1] tracking-[-0.02em] max-w-[680px]">
                Tres frentes de entrega — <em className="italic text-[#d4a574]">tudo comeca por um diagnostico tecnico</em>.
              </h2>
            </div>
            <div className="text-right hidden md:block">
              <div className="text-[11px] uppercase tracking-[2px] text-white/50 font-bold mb-1">
                Resposta
              </div>
              <div className="text-white text-[15px] font-semibold">
                Em 48h apos diagnostico
              </div>
            </div>
          </div>

          {/* 3 segment cards */}
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {[
              {
                num: "01",
                accent: "#B8783D",
                segment: "Magistrais",
                pain: "Portfolio que disputa preco e copia o vizinho.",
                solution: "Formulas autorais validadas em bancada e narrativa tecnica que justifica margem.",
                deliverables: ["Linha autoral exclusiva", "Protocolos diferenciados", "Argumentacao para prescritor"],
              },
              {
                num: "02",
                accent: "#0db5c8",
                segment: "Industriais",
                pain: "Time-to-market longo, claims fracos, escala inseguranca.",
                solution: "Prototipos com sensorial refinado, claims defensaveis e suporte tecnico ate a escala.",
                deliverables: ["Prototipos funcionais", "Claims com lastro cientifico", "Suporte ao up-scale"],
              },
              {
                num: "03",
                accent: "#d4a574",
                segment: "Educacionais",
                pain: "Equipe sem fluencia tecnica trava todo o pipeline.",
                solution: "Treinamento hands-on derivado de pratica industrial real — nao teoria de manual.",
                deliverables: ["Capacitacao in loco", "Cursos para magistrais", "Aulas em MBAs e congressos"],
              },
            ].map((card) => (
              <div
                key={card.num}
                className="group relative bg-white/[0.04] hover:bg-white/[0.06] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[var(--accent)]/40 p-7 lg:p-8 transition-all duration-300 hover:translate-y-[-4px]"
                style={{ ["--accent" as string]: card.accent } as React.CSSProperties}
              >
                {/* Number + segment label */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-serif text-[44px] leading-none text-white/15 group-hover:text-white/25 transition-colors">
                    {card.num}
                  </span>
                  <span
                    className="text-[11px] font-bold uppercase tracking-[2.5px] px-3 py-1.5 rounded-full"
                    style={{
                      color: card.accent,
                      backgroundColor: `${card.accent}15`,
                      border: `1px solid ${card.accent}40`,
                    }}
                  >
                    {card.segment}
                  </span>
                </div>

                {/* Pain */}
                <div className="mb-5">
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-white/40 mb-2">
                    Dor
                  </div>
                  <p className="text-[16px] text-white/70 leading-[1.45] line-through decoration-white/20 decoration-1">
                    {card.pain}
                  </p>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <div
                    className="text-[10px] font-bold uppercase tracking-[2px] mb-2"
                    style={{ color: card.accent }}
                  >
                    Solucao
                  </div>
                  <p className="font-serif text-[19px] lg:text-[20px] text-white leading-[1.3] tracking-[-0.015em]">
                    {card.solution}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className="h-px w-10 mb-5"
                  style={{ backgroundColor: card.accent, opacity: 0.5 }}
                />

                {/* Deliverables */}
                <ul className="space-y-2">
                  {card.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-center gap-2.5 text-[14px] text-white/85 font-medium"
                    >
                      <Check
                        className="w-[15px] h-[15px] shrink-0"
                        style={{ color: card.accent }}
                        strokeWidth={2.5}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative line copper→teal→copper at base */}
      <div className="absolute bottom-0 left-0 right-0 h-1 z-20">
        <div
          className="h-full w-full"
          style={{
            background: "linear-gradient(90deg, #B8783D 0%, #2dd4bf 50%, #B8783D 100%)",
          }}
        />
      </div>
    </section>
  )
}
