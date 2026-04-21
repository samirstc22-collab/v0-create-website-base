"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowUpRight, ChevronRight } from "lucide-react"

const SERVICES = [
  {
    id: "01",
    label: "Consultoria Magistral",
    title: "Farmácias & drogarias que querem lucrar mais.",
    desc: "Diagnóstico de campo, reformulação de vitrine e treinamento de equipe — do balcão ao caixa.",
    href: "/consultoria",
    metric: "+38% ticket médio",
    metricLabel: "média dos clientes 2024/25",
  },
  {
    id: "02",
    label: "Consultoria Industrial",
    title: "Indústrias cosméticas em scale-up.",
    desc: "P&D grau 1/2, private label, compatibilidade, estabilidade, claims regulatórios e dossiês técnicos.",
    href: "/lp",
    metric: "20+ indústrias",
    metricLabel: "no Brasil, Paraguai e Japão",
  },
  {
    id: "03",
    label: "Cursos & Formação",
    title: "Dermatologia clínica e farmacotécnica.",
    desc: "Do fundamental ao elite — peptídeos, peelings exclusivos, fatores de crescimento e regeneração.",
    href: "/cursos",
    metric: "12.000+ alunos",
    metricLabel: "formados em 17 capitais",
  },
  {
    id: "04",
    label: "Lab Pro · IA",
    title: "Formulator AI Lab Pro.",
    desc: "Assistente de IA treinado em 4.000+ fórmulas validadas e literatura peer-reviewed indexada.",
    href: "/lp",
    metric: "−72% retrabalho",
    metricLabel: "de bancada validado",
  },
]

export function HomeHeroLight() {
  const [activeService, setActiveService] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % SERVICES.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const current = SERVICES[activeService]

  return (
    <section className="relative overflow-hidden bg-[#dde6f0] pt-28 pb-20 lg:pt-32 lg:pb-28">
      {/* Soft navy grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#0C2340 1px, transparent 1px), linear-gradient(90deg, #0C2340 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient navy orbs */}
      <div
        aria-hidden
        className="absolute top-1/4 right-[-10%] w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(12,35,64,0.09), transparent 65%)",
          filter: "blur(50px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-20%] left-[-10%] w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(184,120,61,0.10), transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Top meta bar */}
        <div className="flex items-center justify-between mb-14 flex-wrap gap-4">
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-[2px] uppercase text-[#475569]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B8783D] animate-pulse" />
            Clube de Fórmulas · Vol. XII · 2026
          </div>
          <div className="flex items-center gap-5 text-[11px] tracking-[2px] uppercase text-[#64748b] font-semibold">
            <span className="hidden md:inline">CNPq · UNICAMP</span>
            <span className="hidden md:inline text-[#cbd5e1]">|</span>
            <span>Peer-Reviewed</span>
            <span className="text-[#cbd5e1]">|</span>
            <span>17 Capitais</span>
          </div>
        </div>

        {/* Hero content grid */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          {/* LEFT — Editorial column */}
          <div>
            {/* Section kicker */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-[#B8783D]" />
              <span className="text-[10px] tracking-[3px] uppercase text-[#B8783D] font-bold">
                § Edição de Abertura
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-serif font-normal text-[clamp(44px,7vw,88px)] leading-[0.98] tracking-[-2.5px] text-[#0C2340] mb-8">
              Ciência que vira{" "}
              <span className="relative inline-block">
                <em className="italic text-[#B8783D]">fórmula</em>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2,8 Q50,2 100,6 T198,4"
                    stroke="#B8783D"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.35"
                  />
                </svg>
              </span>
              .
              <br />
              Fórmula que vira{" "}
              <em className="italic text-[#0096B4]">resultado</em>.
            </h1>

            {/* Subhead */}
            <p className="text-lg md:text-xl text-[#334155] leading-[1.7] max-w-[620px] mb-10">
              Pesquisa & desenvolvimento cosmético para{" "}
              <strong className="text-[#0C2340]">indústrias, marcas independentes e farmácias magistrais</strong>
              {" "}de excelência. Bancada CNPq-UNICAMP, publicação peer-reviewed indexada e missões
              técnicas em três continentes — convertidas em protocolos aplicáveis ao seu balcão.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/consultoria"
                className="group inline-flex items-center gap-2 bg-[#0C2340] text-white px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide hover:bg-[#0a1a33] transition-colors shadow-[0_8px_24px_rgba(12,35,64,0.2)]"
              >
                Diagnóstico da farmácia
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/lp"
                className="group inline-flex items-center gap-2 bg-white border border-[#0C2340]/15 text-[#0C2340] px-6 py-3.5 rounded-xl font-semibold text-sm tracking-wide hover:border-[#0C2340]/30 transition-colors"
              >
                Lab Pro · IA de Formulação
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#0C2340]/10">
              {[
                { num: "4.000+", label: "Fórmulas validadas" },
                { num: "800+", label: "Palestras Brasil afora" },
                { num: "15+", label: "Países em missão" },
                { num: "60+", label: "Artefatos editoriais" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-2xl md:text-3xl text-[#0C2340] tracking-tight mb-1">
                    {stat.num}
                  </div>
                  <div className="text-[10px] tracking-[1.5px] uppercase text-[#64748b] font-semibold leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Rotating service card */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-br from-[#0C2340]/5 via-transparent to-[#B8783D]/5 pointer-events-none" />

            {/* Service card */}
            <div
              key={activeService}
              className="relative bg-white rounded-3xl overflow-hidden border border-[#0C2340]/10 shadow-[0_40px_80px_-30px_rgba(12,35,64,0.25)]"
              style={{
                animation: mounted ? "fadeInUp 0.6s ease-out" : "none",
              }}
            >
              {/* Header photo */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#0C2340]">
                <Image
                  src="/images/samir-lab-eurotex.png"
                  alt="Prof. Samir Tannuri em laboratório EUROTEX"
                  fill
                  className="object-cover object-[center_30%]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/85 via-[#0C2340]/20 to-transparent" />

                {/* Service overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="font-serif text-4xl text-[#e8a87c]">{current.id}</span>
                    <span className="text-[10px] tracking-[2.5px] uppercase font-bold text-[#e8a87c]/90">
                      {current.label}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-[28px] leading-[1.15] tracking-[-0.5px]">
                    {current.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-sm text-[#475569] leading-[1.7] mb-5">{current.desc}</p>

                {/* Metric */}
                <div className="flex items-end justify-between mb-5 pb-5 border-b border-[#0C2340]/8">
                  <div>
                    <div className="font-serif text-3xl text-[#0C2340] tracking-tight">
                      {current.metric}
                    </div>
                    <div className="text-[10px] tracking-[1.5px] uppercase text-[#94a3b8] font-bold">
                      {current.metricLabel}
                    </div>
                  </div>
                  <Link
                    href={current.href}
                    className="shrink-0 w-11 h-11 rounded-full bg-[#0C2340] text-white flex items-center justify-center hover:bg-[#B8783D] transition-colors"
                    aria-label={`Ir para ${current.label}`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Service tabs */}
                <div className="grid grid-cols-4 gap-1">
                  {SERVICES.map((s, i) => (
                    <button
                      key={s.id}
                      onClick={() => setActiveService(i)}
                      className={`group relative pt-3 pb-3 text-left transition-colors ${
                        i === activeService ? "" : "opacity-40 hover:opacity-70"
                      }`}
                      aria-label={`Mostrar ${s.label}`}
                    >
                      <div
                        className="h-0.5 rounded-full mb-2 transition-colors"
                        style={{
                          backgroundColor: i === activeService ? "#B8783D" : "#cbd5e1",
                        }}
                      />
                      <div className="font-mono text-[9px] text-[#94a3b8] mb-0.5">{s.id}</div>
                      <div className="font-semibold text-[10px] tracking-[1px] uppercase text-[#0C2340] leading-tight">
                        {s.label.split(" ")[0]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer ticker */}
              <div className="border-t border-[#0C2340]/8 bg-[#eef2f7] px-6 py-3 flex items-center justify-between text-[10px] font-mono tracking-[1.5px] uppercase">
                <span className="text-[#94a3b8]">lab://eurotex · 2026</span>
                <span className="flex items-center gap-2 text-[#0C2340]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse" />
                  Em atualização
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
