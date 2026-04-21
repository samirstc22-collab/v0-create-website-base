"use client"

import { useEffect, useRef, useState } from "react"
import {
  Brain,
  Sparkles,
  Zap,
  Database,
  Search,
  FileCode,
  Beaker,
  ArrowRight,
  CheckCircle2,
  Play,
  Layers,
  Leaf,
  DollarSign,
} from "lucide-react"

export function LPFormulatorAI() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const features = [
    {
      icon: Brain,
      title: "Copiloto Técnico",
      desc: "Sugere a arquitetura completa da fórmula com base em 4.000+ formulações validadas.",
      color: "#c9a227",
    },
    {
      icon: Search,
      title: "Varredura PubMed",
      desc: "Busca automática de evidências científicas para cada ativo e concentração.",
      color: "#4a9eff",
    },
    {
      icon: Layers,
      title: "Múltiplos Posicionamentos",
      desc: "Gera versões clean beauty, premium ou custo-otimizado da mesma fórmula.",
      color: "#22c55e",
    },
    {
      icon: FileCode,
      title: "Materiais Técnicos",
      desc: "Cria fichas, protocolos e materiais de treinamento para equipes de vendas.",
      color: "#a855f7",
    },
  ]

  const metrics = [
    { value: "4.000+", label: "Fórmulas na base", icon: Database },
    { value: "20.000+", label: "Respostas humanas", icon: Brain },
    { value: "PubMed", label: "Varredura científica", icon: Search },
  ]

  const applications = [
    { icon: Beaker, label: "Skincare" },
    { icon: Beaker, label: "Haircare" },
    { icon: Beaker, label: "Bodycare" },
    { icon: Beaker, label: "Peelings" },
  ]

  const audiences = [
    "Farmacêuticos formuladores",
    "Equipes de P&D",
    "Farmácias de manipulação",
    "Dermatologistas prescritores",
    "Indústrias dermocosméticas",
  ]

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveFeature((prev) => (prev + 1) % features.length)
        setIsAnimating(false)
      }, 300)
    }, 4000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [features.length])

  return (
    <section
      id="formulator-ai"
      className="relative overflow-hidden bg-gradient-to-b from-[#08080c] via-[#0a0a12] to-[#08080c] py-32"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-[#c9a227]/5 blur-[100px]" />
        <div
          className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-[#4a9eff]/5 blur-[80px]"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Grid lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#c9a227]/30 bg-gradient-to-r from-[#c9a227]/20 to-[#4a9eff]/20 px-6 py-2">
            <Sparkles className="h-5 w-5 text-[#c9a227]" />
            <span className="bg-gradient-to-r from-[#c9a227] to-[#4a9eff] bg-clip-text text-sm font-bold uppercase tracking-widest text-transparent">
              O Lançamento
            </span>
            <Zap className="h-5 w-5 text-[#4a9eff]" />
          </div>

          <h2 className="font-serif text-5xl text-white md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#c9a227] via-[#e8c547] to-[#4a9eff] bg-clip-text text-transparent">
              Formulator AI
            </span>
            <br />
            <span className="text-white/90">Lab Pro</span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-white/60">
            A infraestrutura inteligente de formulação e inteligência técnico-científica.{" "}
            <span className="text-white">
              Seu laboratório digital que transforma demandas clínicas em soluções formulatórias.
            </span>
          </p>
        </div>

        {/* Metrics row */}
        <div className="mb-16 flex flex-wrap justify-center gap-6">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-8 py-5 backdrop-blur-sm"
            >
              <metric.icon className="h-8 w-8 text-[#c9a227]" />
              <div>
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <div className="text-sm text-white/50">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main feature showcase */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left: Feature selector */}
          <div>
            <h3 className="mb-8 font-serif text-3xl text-white">
              Como o Formulator AI{" "}
              <span className="italic text-[#c9a227]">transforma</span> seu dia a dia
            </h3>

            <div className="space-y-4">
              {features.map((feature, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (intervalRef.current) clearInterval(intervalRef.current)
                    setActiveFeature(i)
                  }}
                  className={`group flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-all ${
                    activeFeature === i
                      ? "border-[#c9a227]/50 bg-[#c9a227]/10"
                      : "border-white/5 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      activeFeature === i ? "bg-[#c9a227]/20" : "bg-white/5"
                    }`}
                  >
                    <feature.icon
                      className="h-6 w-6"
                      style={{ color: activeFeature === i ? feature.color : "#666" }}
                    />
                  </div>
                  <div>
                    <h4
                      className={`font-semibold ${
                        activeFeature === i ? "text-white" : "text-white/70"
                      }`}
                    >
                      {feature.title}
                    </h4>
                    <p
                      className={`mt-1 text-sm ${
                        activeFeature === i ? "text-white/70" : "text-white/40"
                      }`}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Visual demo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0f0f14] to-[#08080c] p-1">
              <div className="rounded-2xl bg-[#0a0a0f] p-8">
                {/* Mock AI interface */}
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="h-3 w-3 rounded-full bg-[#c9a227]" />
                    <span className="text-sm font-medium text-white/80">Formulator AI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span className="text-xs text-green-500">Online</span>
                  </div>
                </div>

                {/* Feature visualization */}
                <div
                  className={`transition-all duration-300 ${
                    isAnimating ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
                  }`}
                >
                  <div className="mb-4 flex items-center gap-3">
                    {(() => {
                      const Feature = features[activeFeature]
                      return (
                        <>
                          <Feature.icon className="h-8 w-8" style={{ color: Feature.color }} />
                          <h4 className="text-xl font-semibold text-white">
                            {Feature.title}
                          </h4>
                        </>
                      )
                    })()}
                  </div>

                  {/* Mock output */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((_, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-lg bg-white/5 p-3"
                        style={{ animationDelay: `${i * 100}ms` }}
                      >
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <div
                          className="h-2 rounded bg-white/20"
                          style={{ width: `${70 - i * 15}%` }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
                    <Play className="h-4 w-4" />
                    <span>Processando com IA...</span>
                    <span className="ml-auto text-[#c9a227]">98% precisão</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -right-4 -top-4 rounded-xl border border-[#c9a227]/30 bg-[#08080c]/90 px-4 py-2 backdrop-blur-xl">
              <span className="text-sm font-semibold text-[#c9a227]">SaaS</span>
            </div>
            <div className="absolute -bottom-4 -left-4 rounded-xl border border-[#4a9eff]/30 bg-[#08080c]/90 px-4 py-2 backdrop-blur-xl">
              <span className="text-sm font-semibold text-[#4a9eff]">Startup</span>
            </div>
          </div>
        </div>

        {/* Applications + Audiences */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Applications */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <h4 className="mb-6 font-serif text-2xl text-white">Aplicações</h4>
            <div className="grid grid-cols-2 gap-4">
              {applications.map((app, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                >
                  <app.icon className="h-5 w-5 text-[#c9a227]" />
                  <span className="text-white/80">{app.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 rounded-lg bg-[#22c55e]/10 px-3 py-1.5 text-sm text-[#22c55e]">
                <Leaf className="h-4 w-4" /> Clean Beauty
              </span>
              <span className="flex items-center gap-2 rounded-lg bg-[#c9a227]/10 px-3 py-1.5 text-sm text-[#c9a227]">
                <Sparkles className="h-4 w-4" /> Premium
              </span>
              <span className="flex items-center gap-2 rounded-lg bg-[#4a9eff]/10 px-3 py-1.5 text-sm text-[#4a9eff]">
                <DollarSign className="h-4 w-4" /> Custo-otimizado
              </span>
            </div>
          </div>

          {/* Target audiences */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <h4 className="mb-6 font-serif text-2xl text-white">Público-alvo</h4>
            <ul className="space-y-4">
              {audiences.map((audience, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#4a9eff]" />
                  <span className="text-white/80">{audience}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Value proposition banner */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-[#c9a227]/30 bg-gradient-to-r from-[#c9a227]/10 via-transparent to-[#4a9eff]/10 p-8 lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="font-serif text-3xl text-white md:text-4xl">
              Reduza o tempo de desenvolvimento.
              <br />
              <span className="bg-gradient-to-r from-[#c9a227] to-[#4a9eff] bg-clip-text text-transparent">
                Aumente a assertividade.
              </span>
            </h3>
            <p className="mt-6 text-lg text-white/60">
              O Formulator AI transforma demandas clínicas em soluções formulatórias, apoia ajustes
              de base, sugere alternativas por indisponibilidade de insumos e gera materiais
              técnicos para treinar equipes de vendas.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#contato"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#c9a227] to-[#4a9eff] px-8 py-4 font-bold text-white shadow-[0_10px_40px_rgba(201,162,39,0.2)] transition-all hover:shadow-[0_15px_50px_rgba(201,162,39,0.3)]"
              >
                Quero acesso ao Formulator AI
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40"
              >
                <Play className="h-5 w-5" />
                Ver demonstração
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
