"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Microscope,
  GraduationCap,
  FlaskConical,
  Factory,
  Mic2,
  ArrowRight,
  Play,
  Sparkles,
} from "lucide-react"

type Slide = {
  id: string
  kicker: string
  headlineA: string
  headlineAccent: string
  headlineB: string
  description: string
  highlight: string
  ctaLabel: string
  ctaHref: string
  metricValue: string
  metricLabel: string
  image: string
  imageAlt: string
  icon: typeof Microscope
  tone: {
    accent: string
    accentSoft: string
    glow: string
    gradient: string
    dotFrom: string
    dotTo: string
  }
}

const slides: Slide[] = [
  {
    id: "consultoria",
    kicker: "Consultoria Estratégica · 1:1",
    headlineA: "A primeira consultoria",
    headlineAccent: "100% personalizada",
    headlineB: "para a sua farmácia.",
    description:
      "Diagnóstico de campo, plano sob medida e acompanhamento mês a mês. Transformamos o seu balcão em um negócio lucrativo, respeitado e insubstituível na comunidade.",
    highlight: "Vagas limitadas a 12 farmácias por ciclo",
    ctaLabel: "Agendar diagnóstico",
    ctaHref: "/consultoria",
    metricValue: "+38%",
    metricLabel: "de ticket médio em 90 dias",
    image: "/images/samir-portrait-sofa.jpg",
    imageAlt: "Prof. Samir Tannuri em retrato executivo",
    icon: Microscope,
    tone: {
      accent: "#d4a76a",
      accentSoft: "rgba(212, 167, 106, 0.18)",
      glow: "rgba(192, 133, 74, 0.35)",
      gradient: "linear-gradient(135deg, #071629 0%, #0b1d35 45%, #2a1a1a 100%)",
      dotFrom: "#c0854a",
      dotTo: "#d4af37",
    },
  },
  {
    id: "cursos",
    kicker: "Cursos Premium · 12.000+ alunos",
    headlineA: "Do fundamento à elite:",
    headlineAccent: "ciência aplicável",
    headlineB: "ao seu balcão.",
    description:
      "Masterclass e trilhas completas em farmacotécnica avançada — peelings, bases, cosmecêuticos e magistral de performance. Protocolos prontos para aplicar já na próxima manipulação.",
    highlight: "Garantia incondicional de 7 dias · 12 meses de acesso",
    ctaLabel: "Ver catálogo de cursos",
    ctaHref: "/cursos",
    metricValue: "12k+",
    metricLabel: "farmacêuticos formados",
    image: "/images/samir-stage-gesture.jpg",
    imageAlt: "Prof. Samir palestrando em congresso nacional",
    icon: GraduationCap,
    tone: {
      accent: "#12b5c8",
      accentSoft: "rgba(18, 181, 200, 0.18)",
      glow: "rgba(10, 143, 158, 0.35)",
      gradient: "linear-gradient(135deg, #051120 0%, #0a2d3d 50%, #1a1a2e 100%)",
      dotFrom: "#0a8f9e",
      dotTo: "#12b5c8",
    },
  },
  {
    id: "pd",
    kicker: "P&D Cosmético · Bancada CNPq-UNICAMP",
    headlineA: "Pesquisa peer-reviewed",
    headlineAccent: "que vira fórmula",
    headlineB: "na sua indústria.",
    description:
      "Desenvolvimento de ativos, estudos de estabilidade, validação de eficácia e transferência de tecnologia com rigor acadêmico e cronograma industrial.",
    highlight: "Publicação indexada · DOI · Missões em 3 continentes",
    ctaLabel: "Conhecer o laboratório",
    ctaHref: "/sobre",
    metricValue: "4.000+",
    metricLabel: "fórmulas validadas em bancada",
    image: "/images/samir-lab-eurotex.png",
    imageAlt: "Prof. Samir em laboratório EUROTEX — França",
    icon: FlaskConical,
    tone: {
      accent: "#7fe5ee",
      accentSoft: "rgba(127, 229, 238, 0.15)",
      glow: "rgba(10, 143, 158, 0.4)",
      gradient: "linear-gradient(135deg, #041624 0%, #0f3a4a 50%, #1a4d5c 100%)",
      dotFrom: "#0a8f9e",
      dotTo: "#7fe5ee",
    },
  },
  {
    id: "industrial",
    kicker: "Consultoria Industrial · 20+ marcas",
    headlineA: "Da formulação ao",
    headlineAccent: "scale-up industrial",
    headlineB: "com reprodutibilidade.",
    description:
      "Criação de linhas autorais, reformulação de carros-chefe e otimização de processos para indústrias cosméticas e marcas independentes que precisam de diferencial real.",
    highlight: "Contratos executados em Brasil, Europa e Ásia",
    ctaLabel: "Solicitar proposta",
    ctaHref: "/contato",
    metricValue: "20+",
    metricLabel: "indústrias atendidas",
    image: "/images/samir-portrait-smile.jpg",
    imageAlt: "Prof. Samir em retrato profissional",
    icon: Factory,
    tone: {
      accent: "#e8a87c",
      accentSoft: "rgba(232, 168, 124, 0.18)",
      glow: "rgba(192, 133, 74, 0.4)",
      gradient: "linear-gradient(135deg, #0f0a05 0%, #2d2418 50%, #3d2514 100%)",
      dotFrom: "#a86f38",
      dotTo: "#e8a87c",
    },
  },
  {
    id: "palestras",
    kicker: "Palestrante · 800+ apresentações",
    headlineA: "A palestra que vira",
    headlineAccent: "protocolo",
    headlineB: "na segunda-feira.",
    description:
      "Keynotes sob medida para congressos, convenções de vendas e treinamentos corporativos. Ciência de ponta traduzida em linguagem aplicável, com energia de palco inconfundível.",
    highlight: "26 capitais brasileiras · 15 países · 3 continentes",
    ctaLabel: "Solicitar palestra",
    ctaHref: "/contato",
    metricValue: "800+",
    metricLabel: "palestras realizadas",
    image: "/images/samir-stage-clicker.jpg",
    imageAlt: "Prof. Samir Tannuri no palco de congresso internacional",
    icon: Mic2,
    tone: {
      accent: "#c7a2e0",
      accentSoft: "rgba(199, 162, 224, 0.18)",
      glow: "rgba(140, 90, 180, 0.4)",
      gradient: "linear-gradient(135deg, #0e0a1a 0%, #241d38 50%, #4a2d5c 100%)",
      dotFrom: "#6b4e8a",
      dotTo: "#c7a2e0",
    },
  },
]

const AUTO_INTERVAL = 7000

export function DynamicBanner() {
  const [active, setActive] = useState(0)
  const [progress, setProgress] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((index: number) => {
    setActive(((index % slides.length) + slides.length) % slides.length)
    setProgress(0)
  }, [])

  useEffect(() => {
    if (paused) return
    const step = 50
    const tickInterval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + (step / AUTO_INTERVAL) * 100
        if (next >= 100) {
          setActive((curr) => (curr + 1) % slides.length)
          return 0
        }
        return next
      })
    }, step)
    return () => clearInterval(tickInterval)
  }, [paused, active])

  const slide = slides[active]
  const Icon = slide.icon

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: slide.tone.gradient, transition: "background 900ms ease" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Animated background orbs */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full blur-3xl opacity-50 transition-all duration-1000"
        style={{ background: slide.tone.glow }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full blur-3xl opacity-40 transition-all duration-1000"
        style={{ background: slide.tone.accentSoft }}
      />

      {/* Floating dots pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.08]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="banner-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#banner-dots)" />
      </svg>

      {/* Top brand strip */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between gap-6 border-b border-white/10 px-6 py-5 md:px-10">
        <div className="flex items-center gap-3">
          <div
            className="grid h-9 w-9 place-items-center rounded-xl shadow-lg"
            style={{
              background: `linear-gradient(135deg, ${slide.tone.dotFrom}, ${slide.tone.dotTo})`,
              transition: "background 700ms ease",
            }}
          >
            <span className="font-serif text-base leading-none text-white">S</span>
          </div>
          <div>
            <div className="font-serif text-sm text-white/90">Clube de Fórmulas</div>
            <div className="text-[11px] uppercase tracking-[2px] text-white/50">
              Prof. Samir Tannuri · desde 2001
            </div>
          </div>
        </div>
        <div className="hidden items-center gap-3 md:flex">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          <span className="text-[11px] uppercase tracking-[2px] text-white/60">
            Agenda 2026 · vagas abertas
          </span>
        </div>
      </div>

      {/* Main grid */}
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-6 pt-14 pb-20 md:px-10 md:pt-20 md:pb-24 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        {/* LEFT — Copy */}
        <div className="flex min-h-[560px] flex-col justify-between">
          <div key={slide.id} className="animate-fade-in-up">
            {/* Kicker */}
            <div
              className="inline-flex items-center gap-3 rounded-full border px-5 py-2.5 mb-8"
              style={{
                background: slide.tone.accentSoft,
                borderColor: `${slide.tone.accent}55`,
                transition: "all 700ms ease",
              }}
            >
              <Icon className="h-3.5 w-3.5" style={{ color: slide.tone.accent }} />
              <span
                className="text-[11px] font-bold uppercase tracking-[2.5px]"
                style={{ color: slide.tone.accent }}
              >
                {slide.kicker}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[clamp(40px,6vw,72px)] font-normal leading-[1.02] tracking-[-1.8px] text-white">
              {slide.headlineA}{" "}
              <span
                className="italic"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${slide.tone.accent}, #ffffff 160%)`,
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  transition: "all 700ms ease",
                }}
              >
                {slide.headlineAccent}
              </span>
              <br />
              {slide.headlineB}
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-lg leading-[1.65] text-white/70 md:text-xl">
              {slide.description}
            </p>

            {/* Highlight pill */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 backdrop-blur-sm">
              <Sparkles className="h-4 w-4" style={{ color: slide.tone.accent }} />
              <span className="text-sm font-medium text-white/85">{slide.highlight}</span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href={slide.ctaHref}
                className="group inline-flex items-center gap-3 rounded-xl px-7 py-4 font-bold text-white shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg, ${slide.tone.dotFrom}, ${slide.tone.dotTo})`,
                }}
              >
                {slide.ctaLabel}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/sobre"
                className="inline-flex items-center gap-2.5 rounded-xl border border-white/20 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white/85 backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <Play className="h-3.5 w-3.5" fill="currentColor" />
                Conhecer a trajetória
              </Link>
            </div>
          </div>

          {/* Bottom: metric + dots */}
          <div className="mt-12 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-7">
            <div>
              <div
                className="font-serif text-5xl leading-none tracking-tight md:text-6xl"
                style={{ color: slide.tone.accent, transition: "color 700ms ease" }}
              >
                {slide.metricValue}
              </div>
              <div className="mt-2 text-xs uppercase tracking-[2.5px] text-white/50">
                {slide.metricLabel}
              </div>
            </div>

            {/* Slide indicators */}
            <div className="flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  aria-label={`Ir para ${s.id}`}
                  className="group relative h-2 overflow-hidden rounded-full bg-white/15 transition-all"
                  style={{ width: i === active ? 56 : 20 }}
                >
                  {i === active && (
                    <span
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{
                        width: `${progress}%`,
                        background: `linear-gradient(90deg, ${slide.tone.dotFrom}, ${slide.tone.dotTo})`,
                        transition: "width 50ms linear",
                      }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Showcase */}
        <div className="relative">
          {/* Main card */}
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[32px] border border-white/15 shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
            {slides.map((s, i) => (
              <div
                key={s.id}
                className="absolute inset-0 transition-all duration-1000 ease-out"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "scale(1)" : "scale(1.06)",
                  zIndex: i === active ? 10 : 0,
                }}
              >
                <Image
                  src={s.image || "/placeholder.svg"}
                  alt={s.imageAlt}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 1024px) 90vw, 520px"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(180deg, transparent 40%, ${s.tone.gradient.match(/#[0-9a-f]+/gi)?.[2] || "#000"}cc 100%)`,
                  }}
                />
              </div>
            ))}

            {/* Floating icon badge top-left */}
            <div
              className="absolute left-6 top-6 z-20 grid h-14 w-14 place-items-center rounded-2xl border border-white/20 backdrop-blur-xl transition-all duration-700"
              style={{ background: `${slide.tone.accent}33` }}
            >
              <Icon className="h-6 w-6" style={{ color: slide.tone.accent }} />
            </div>

            {/* Floating stat badge top-right */}
            <div className="absolute right-6 top-6 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3.5 py-2 backdrop-blur-xl">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[1.5px] text-white/90">
                Ao vivo
              </span>
            </div>

            {/* Caption card bottom */}
            <div className="absolute bottom-5 left-5 right-5 z-20 rounded-2xl border border-white/15 bg-black/55 p-5 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-serif text-lg text-white">{slide.imageAlt}</div>
                  <div className="mt-1 text-xs uppercase tracking-[2px] text-white/55">
                    {slide.kicker.split("·")[0].trim()}
                  </div>
                </div>
                <div
                  className="shrink-0 rounded-lg px-3 py-1.5 font-serif text-sm"
                  style={{
                    background: `${slide.tone.accent}22`,
                    color: slide.tone.accent,
                    border: `1px solid ${slide.tone.accent}55`,
                  }}
                >
                  0{active + 1} / 0{slides.length}
                </div>
              </div>
            </div>
          </div>

          {/* Thumbnail rail */}
          <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-2 lg:justify-end">
            {slides.map((s, i) => {
              const ItemIcon = s.icon
              return (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className={`group relative flex shrink-0 items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all ${
                    i === active
                      ? "bg-white/10 border-white/30"
                      : "border-white/10 bg-white/[0.02] hover:bg-white/[0.06]"
                  }`}
                  aria-label={`Ver ${s.id}`}
                >
                  <div
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
                    style={{
                      background: i === active ? `${s.tone.accent}33` : "rgba(255,255,255,0.05)",
                    }}
                  >
                    <ItemIcon
                      className="h-4 w-4"
                      style={{ color: i === active ? s.tone.accent : "rgba(255,255,255,0.6)" }}
                    />
                  </div>
                  <div className="hidden sm:block">
                    <div className="text-[10px] uppercase tracking-[1.5px] text-white/45">
                      0{i + 1}
                    </div>
                    <div className="text-xs font-semibold text-white/85">
                      {s.id.charAt(0).toUpperCase() + s.id.slice(1)}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom marquee strip — subtle */}
      <div className="relative z-10 border-t border-white/10 bg-black/20 py-4 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 md:px-10">
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[2.5px] text-white/45">
            <span>CNPq · UNICAMP</span>
            <span className="hidden sm:inline">Peer-Reviewed · DOI</span>
            <span className="hidden md:inline">ISO 9001 · GMP</span>
          </div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[2.5px] text-white/45">
            <span>Próximo ciclo:</span>
            <span className="font-semibold" style={{ color: slide.tone.accent }}>
              Fev / 2026
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
