"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowUpRight, ChevronRight, Instagram } from "lucide-react"

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
    <section className="relative overflow-hidden bg-gradient-to-b from-[#070f1e] via-[#0a1628] to-[#0d1d35] pt-28 pb-32 lg:pt-32 lg:pb-40">
      {/* Subtle grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(232,168,124,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232,168,124,0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Ambient orbs - richer on dark */}
      <div
        aria-hidden
        className="absolute top-1/4 right-[-10%] w-[680px] h-[680px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(184,120,61,0.18), transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-20%] left-[-10%] w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,150,180,0.15), transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="absolute top-[40%] left-[20%] w-[360px] h-[360px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,158,255,0.08), transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Top meta bar */}
        <div className="flex items-center justify-between mb-14 flex-wrap gap-4">
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-[2px] uppercase text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8a87c] animate-pulse shadow-[0_0_12px_rgba(232,168,124,0.8)]" />
            Clube de Fórmulas · Vol. XII · 2026
          </div>
          <div className="flex items-center gap-5 text-[11px] tracking-[2px] uppercase text-white/50 font-semibold">
            <span className="hidden md:inline">CNPq · UNICAMP</span>
            <span className="hidden md:inline text-white/15">|</span>
            <span>Peer-Reviewed</span>
            <span className="text-white/15">|</span>
            <span>17 Capitais</span>
          </div>
        </div>

        {/* Hero content grid */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
          {/* LEFT — Editorial column */}
          <div>
            {/* Section kicker */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-[#e8a87c]" />
              <span className="text-[10px] tracking-[3px] uppercase text-[#e8a87c] font-bold">
                § Edição de Abertura
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-serif font-normal text-[clamp(44px,7vw,88px)] leading-[0.98] tracking-[-2.5px] text-white mb-8">
              Ciência que vira{" "}
              <span className="relative inline-block">
                <em className="italic text-[#e8a87c]">fórmula</em>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  height="12"
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2,8 Q50,2 100,6 T198,4"
                    stroke="#e8a87c"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </span>
              .
              <br />
              Fórmula que vira{" "}
              <em className="italic text-[#2dd4bf]">resultado</em>.
            </h1>

            {/* Subhead — highlighted glass card */}
            <div className="relative mb-10 max-w-[640px]">
              <div className="absolute -left-1 top-3 bottom-3 w-1 bg-[#e8a87c] rounded-full shadow-[0_0_20px_rgba(232,168,124,0.6)]" />
              <div className="bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl p-6 pl-8 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
                <p className="text-lg md:text-xl text-white leading-[1.65]">
                  Pesquisa & desenvolvimento cosmético para{" "}
                  <strong className="text-[#e8a87c] bg-[#e8a87c]/12 px-1.5 rounded">
                    indústrias, marcas independentes e farmácias magistrais
                  </strong>{" "}
                  de excelência.
                </p>
                <p className="text-sm md:text-base text-white/70 leading-[1.65] mt-3">
                  Bancada <strong className="text-white">CNPq-UNICAMP</strong>, publicação
                  peer-reviewed indexada (DOI) e missões técnicas em{" "}
                  <strong className="text-white">três continentes</strong> — convertidas em
                  protocolos aplicáveis ao seu balcão.
                </p>
              </div>
            </div>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 mb-10">
              <Link
                href="/loja"
                className="group inline-flex items-center gap-2 bg-gradient-to-br from-[#e8a87c] to-[#b87333] text-[#0a1628] px-7 py-4 rounded-xl font-bold text-sm tracking-wide hover:translate-y-[-2px] transition-transform shadow-[0_12px_40px_rgba(232,168,124,0.35)]"
              >
                Ver a Loja · 60+ Artefatos
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="/consultoria"
                className="group inline-flex items-center gap-2 bg-white/[0.06] border border-white/15 backdrop-blur text-white px-6 py-4 rounded-xl font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white/30 transition-colors"
              >
                Diagnóstico da farmácia
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a
                href="https://instagram.com/samir_farma"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 bg-white/[0.03] border border-white/10 text-white/85 px-5 py-4 rounded-xl font-semibold text-sm tracking-wide hover:border-[#e8a87c]/40 hover:text-[#e8a87c] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                @samir_farma
              </a>
            </div>

            {/* Stats strip — reinforced dark card */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]">
              {[
                { num: "4.000+", label: "Fórmulas validadas", accent: "#e8a87c" },
                { num: "800+", label: "Palestras Brasil afora", accent: "#ffffff" },
                { num: "15+", label: "Países em missão", accent: "#2dd4bf" },
                { num: "60+", label: "Artefatos editoriais", accent: "#e8a87c" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#0a1628]/90 backdrop-blur px-5 py-5">
                  <div
                    className="font-serif text-3xl md:text-4xl tracking-tight mb-1 leading-none"
                    style={{ color: stat.accent }}
                  >
                    {stat.num}
                  </div>
                  <div className="text-[10px] tracking-[1.5px] uppercase text-white/55 font-bold leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Rotating service card */}
          <div className="relative">
            {/* Decorative frame glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#e8a87c]/20 via-transparent to-[#2dd4bf]/15 blur-2xl pointer-events-none" />

            {/* Service card */}
            <div
              key={activeService}
              className="relative bg-[#0d1d35]/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.7)]"
              style={{
                animation: mounted ? "fadeInUp 0.6s ease-out" : "none",
              }}
            >
              {/* Header photo */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#0a1628]">
                <Image
                  src="/images/samir-lab-eurotex.png"
                  alt="Prof. Samir Tannuri em laboratório EUROTEX"
                  fill
                  className="object-cover object-[center_30%]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/50 to-transparent" />

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
                <p className="text-sm text-white/70 leading-[1.7] mb-5">{current.desc}</p>

                {/* Metric */}
                <div className="flex items-end justify-between mb-5 pb-5 border-b border-white/10">
                  <div>
                    <div className="font-serif text-3xl text-white tracking-tight">
                      {current.metric}
                    </div>
                    <div className="text-[10px] tracking-[1.5px] uppercase text-white/45 font-bold">
                      {current.metricLabel}
                    </div>
                  </div>
                  <Link
                    href={current.href}
                    className="shrink-0 w-11 h-11 rounded-full bg-[#e8a87c] text-[#0a1628] flex items-center justify-center hover:bg-white transition-colors shadow-[0_8px_20px_rgba(232,168,124,0.35)]"
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
                        i === activeService ? "" : "opacity-40 hover:opacity-80"
                      }`}
                      aria-label={`Mostrar ${s.label}`}
                    >
                      <div
                        className="h-0.5 rounded-full mb-2 transition-colors"
                        style={{
                          backgroundColor:
                            i === activeService ? "#e8a87c" : "rgba(255,255,255,0.15)",
                        }}
                      />
                      <div className="font-mono text-[9px] text-white/40 mb-0.5">{s.id}</div>
                      <div className="font-semibold text-[10px] tracking-[1px] uppercase text-white leading-tight">
                        {s.label.split(" ")[0]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer ticker */}
              <div className="border-t border-white/10 bg-black/30 px-6 py-3 flex items-center justify-between text-[10px] font-mono tracking-[1.5px] uppercase">
                <span className="text-white/40">lab://eurotex · 2026</span>
                <span className="flex items-center gap-2 text-white/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#10b981] animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  Em atualização
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transition element: diagonal + wave divider */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 pointer-events-none">
        {/* Soft gradient fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(13,29,53,0.4) 50%, rgba(255,255,255,1) 100%)",
          }}
        />
        {/* Wave SVG */}
        <svg
          className="relative block w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ height: "90px" }}
        >
          <path
            d="M0,64 C240,100 480,20 720,50 C960,80 1200,20 1440,60 L1440,120 L0,120 Z"
            fill="white"
            opacity="0.08"
          />
          <path
            d="M0,80 C240,110 480,40 720,70 C960,100 1200,50 1440,85 L1440,120 L0,120 Z"
            fill="white"
            opacity="0.15"
          />
          <path
            d="M0,95 C240,120 480,70 720,90 C960,110 1200,75 1440,100 L1440,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
