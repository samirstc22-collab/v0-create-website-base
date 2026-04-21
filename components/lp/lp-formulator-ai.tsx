"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import {
  Search,
  Database,
  FileCode,
  Atom,
  Activity,
  ArrowUpRight,
  Check,
  TrendingUp,
  Sparkles,
  ChevronRight,
  Beaker,
  Brain,
  Zap,
  ShieldCheck,
  Layers,
  Gauge,
  Microscope,
  BookOpen,
  Target,
  Clock,
  Workflow,
  FlaskConical,
} from "lucide-react"

export function LPFormulatorAI() {
  const [query, setQuery] = useState("")
  const [showResults, setShowResults] = useState(false)
  const fullQuery = "Sérum vitamina C 15% estável, pH 3.5, sensorial seco, clean beauty"

  useEffect(() => {
    let i = 0
    const typer = setInterval(() => {
      if (i <= fullQuery.length) {
        setQuery(fullQuery.slice(0, i))
        i++
      } else {
        clearInterval(typer)
        setTimeout(() => setShowResults(true), 400)
      }
    }, 45)
    return () => clearInterval(typer)
  }, [])

  // Data blocks
  const idealFor = [
    { icon: FlaskConical, title: "Farmácias de manipulação", meta: "Rotina técnica magistral" },
    { icon: Beaker, title: "Farmacêuticos formuladores", meta: "Bancada e desenvolvimento" },
    { icon: Atom, title: "Equipes de P&D cosmético", meta: "Dermocosmético de alta perf." },
    { icon: Sparkles, title: "Marcas próprias & indústrias", meta: "Linhas em desenvolvimento" },
    { icon: Microscope, title: "Dermatologistas & prescritores", meta: "Interface magistral clínica" },
    { icon: BookOpen, title: "Consultores & distribuidores", meta: "Suporte técnico em matérias-primas" },
  ]

  const capabilities = [
    {
      icon: Layers,
      title: "Arquitetura formulatória completa",
      desc: "Seleção de ativos, bases e excipientes com lógica técnica — não apenas ingredientes isolados.",
    },
    {
      icon: Gauge,
      title: "Decisões de pH, sensorial e estabilidade",
      desc: "Avaliação simultânea de performance, viabilidade laboratorial e estabilidade acelerada.",
    },
    {
      icon: Workflow,
      title: "Racional farmacotécnico por mecanismo",
      desc: "Concentrações usuais, função de cada ingrediente, compatibilidades e incompatibilidades.",
    },
    {
      icon: Brain,
      title: "Posicionamento e claims técnicos",
      desc: "Versões premium, clean beauty, dermatológicas, naturais ou custo-otimizadas sob demanda.",
    },
    {
      icon: Beaker,
      title: "Processos laboratoriais e industriais",
      desc: "Sugere fluxo produtivo escalável — do magistério à bancada industrial Grau 2.",
    },
    {
      icon: ShieldCheck,
      title: "Apoio à prescrição magistral",
      desc: "Personalização coerente, argumentos técnicos, materiais de suporte comercial e claims.",
    },
  ]

  const differentials = [
    { label: "Conhecimento humano especializado", text: "20.000+ perguntas respondidas por especialistas, não apenas saída algorítmica." },
    { label: "Arquitetura de fórmula", text: "Organiza a estrutura completa, não sugere ingredientes soltos." },
    { label: "Redução de tentativa e erro", text: "Antecipa incompatibilidades e acelera o ciclo de desenvolvimento." },
    { label: "Visão 360°", text: "Eficácia, sensorial, custo e posicionamento na mesma análise." },
    { label: "Literatura científica viva", text: "Atualização contínua com PubMed e referências dermatológicas recentes." },
    { label: "Padronização técnica", text: "Time mais rápido, consistente e seguro — do balcão ao scale-up." },
  ]

  const applications = [
    "Skincare de alta performance",
    "Haircare & tricologia",
    "Bodycare & linhas corporais",
    "Acne, rosácea & pele sensível",
    "Melasma & hiperpigmentação",
    "Fotoenvelhecimento",
    "Barreira cutânea & reparação",
    "Peelings & preparo de pele",
    "Home care pós-procedimento",
    "Linhas exclusivas autorais",
  ]

  const transformationMetrics = [
    { before: "Tentativa e erro", after: "Racional estruturado", icon: Target },
    { before: "Múltiplos ciclos de ajuste", after: "Decisão antecipada", icon: Clock },
    { before: "Conhecimento disperso", after: "Repertório centralizado", icon: Database },
    { before: "Risco de incompatibilidade", after: "Revisão técnica assistida", icon: ShieldCheck },
  ]

  // Simulated AI result cards
  const aiSuggestions = [
    { name: "Ácido ascórbico 15%", role: "Ativo principal", confidence: 98, tone: "blue" },
    { name: "Ácido ferúlico 0.5%", role: "Sinergia antioxidante", confidence: 94, tone: "blue" },
    { name: "Vitamina E 1%", role: "Estabilizante + barreira", confidence: 91, tone: "gold" },
    { name: "Propilenoglicol 10%", role: "Veículo + penetração", confidence: 88, tone: "gold" },
  ]

  return (
    <section id="lab-pro" className="relative overflow-hidden bg-[#070A11]">
      {/* Top fade */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0b0f18] to-transparent" />

      {/* Blueprint grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74,158,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74,158,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-[#4a9eff]/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-[#c9a961]/8 blur-[160px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 py-28 md:py-40 lg:px-10">

        {/* ───────── HEADER ───────── */}
        <div className="mb-20 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            {/* Journal ID */}
            <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              <span>§ 05</span>
              <span className="h-px w-12 bg-white/20" />
              <span className="text-[#4a9eff]">Lab Pro · Flagship Product</span>
            </div>

            {/* Product badge */}
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#4a9eff]/30 bg-[#4a9eff]/10 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4a9eff] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4a9eff]" />
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#7eb8ff]">
                Formulator AI · v2.4 · Production
              </span>
            </div>

            <h2 className="font-serif text-[clamp(48px,6vw,92px)] font-normal leading-[0.95] tracking-[-0.03em] text-white">
              Formulator AI{" "}
              <span className="italic text-[#c9a961]">Lab Pro.</span>
              <br />
              <span className="text-white/80">A inteligência formulatória</span>
              <br />
              <span className="text-white/50">que opera com você.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-[1.7] text-white/65 md:text-xl">
              Uma plataforma criada para apoiar{" "}
              <span className="text-white">farmácias de manipulação, farmacêuticos formuladores,
              P&D, marcas dermocosméticas e prescritores</span>{" "}
              no desenvolvimento de formulações mais seguras, estratégicas e tecnicamente robustas.{" "}
              <span className="text-[#c9a961]">
                Muito além de um gerador de fórmulas — um laboratório digital de formulação.
              </span>
            </p>
          </div>

          {/* Key metrics column */}
          <div className="grid w-full grid-cols-3 gap-0 border border-white/10 bg-white/[0.02] backdrop-blur-sm lg:w-[360px] lg:grid-cols-1 lg:gap-0">
            {[
              { label: "Fórmulas validadas", value: "4.000+", accent: "#4a9eff" },
              { label: "Respostas curadas", value: "20.000+", accent: "#c9a961" },
              { label: "Literatura viva", value: "PubMed", accent: "#4a9eff" },
            ].map((m, i) => (
              <div
                key={m.label}
                className={`relative p-5 ${i > 0 ? "border-t-0 border-l lg:border-l-0 lg:border-t" : ""} border-white/10`}
              >
                <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/40">
                  {m.label}
                </div>
                <div
                  className="mt-2 font-serif text-3xl"
                  style={{ color: m.accent }}
                >
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ───────── DASHBOARD ───────── */}
        <div className="relative mb-24 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] shadow-[0_0_120px_-20px_rgba(74,158,255,0.15)]">
          {/* Window chrome */}
          <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-5 py-3.5 backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex items-center gap-2.5 rounded-md border border-white/10 bg-black/40 px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4a9eff] animate-pulse" />
              <span className="font-mono text-[10px] tracking-[0.15em] text-white/60">
                lab.metapharma.ai / formulator
              </span>
            </div>
            <div className="flex items-center gap-4 font-mono text-[10px] text-white/40">
              <span>session · live</span>
              <span className="text-[#4a9eff]">●</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-[240px_1fr]">
            {/* Sidebar */}
            <aside className="border-b border-white/10 bg-white/[0.015] p-5 lg:border-b-0 lg:border-r">
              <div className="mb-5 font-mono text-[9px] uppercase tracking-[0.3em] text-white/40">
                Módulos
              </div>
              <nav className="space-y-1">
                {[
                  { icon: Sparkles, label: "Formular", active: true },
                  { icon: Database, label: "Ativos & Bases" },
                  { icon: FileCode, label: "Racional técnico" },
                  { icon: Activity, label: "Estabilidade" },
                  { icon: Atom, label: "Compatibilidade" },
                  { icon: TrendingUp, label: "Scale-up" },
                  { icon: BookOpen, label: "PubMed viva" },
                ].map((item) => {
                  const Ico = item.icon
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-colors ${
                        item.active
                          ? "bg-[#4a9eff]/15 text-[#7eb8ff]"
                          : "text-white/50 hover:bg-white/5 hover:text-white/80"
                      }`}
                    >
                      <Ico className="h-3.5 w-3.5" />
                      <span>{item.label}</span>
                    </div>
                  )
                })}
              </nav>

              <div className="mt-8 rounded-lg border border-[#c9a961]/25 bg-gradient-to-br from-[#c9a961]/10 to-transparent p-4">
                <div className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#c9a961]">
                  Uptime
                </div>
                <div className="font-serif text-2xl text-white">99.97%</div>
                <div className="mt-1 text-[11px] text-white/40">últimos 90 dias</div>
              </div>
            </aside>

            {/* Main pane */}
            <div className="p-6 md:p-10">
              {/* Prompt */}
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                  <Search className="h-3 w-3" />
                  Prompt técnico
                </div>
                <div className="relative rounded-xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl">
                  <div className="flex items-start gap-3">
                    <ChevronRight className="mt-1 h-4 w-4 flex-shrink-0 text-[#4a9eff]" />
                    <div className="min-h-[28px] flex-1 font-mono text-[14px] leading-relaxed text-white/90">
                      {query}
                      <span className="ml-1 inline-block h-4 w-[2px] animate-pulse bg-[#4a9eff]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Status bar */}
              <div className="mb-6 flex flex-wrap items-center gap-3 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-2.5 font-mono text-[10px] text-white/50">
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#4a9eff]" />
                  Consultando base · 4.127 fórmulas
                </span>
                <span className="h-3 w-px bg-white/10" />
                <span>Cross-ref · 312 respostas especialistas</span>
                <span className="h-3 w-px bg-white/10" />
                <span>PubMed · 2024–2026</span>
                <span className="ml-auto text-[#c9a961]">
                  {showResults ? "✓ complete" : "processing..."}
                </span>
              </div>

              {/* Results */}
              <div
                className={`transition-opacity duration-700 ${
                  showResults ? "opacity-100" : "opacity-40"
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                    Sugestões validadas · arquitetura da fórmula
                  </div>
                  <div className="font-mono text-[10px] text-white/40">
                    04 de 14 componentes
                  </div>
                </div>

                <div className="space-y-2">
                  {aiSuggestions.map((s, i) => (
                    <div
                      key={s.name}
                      className="group relative flex items-center gap-4 rounded-lg border border-white/10 bg-white/[0.02] p-4 transition-all hover:border-white/20 hover:bg-white/[0.04]"
                      style={{
                        animation: showResults
                          ? `fadeInUp 0.5s ease-out ${i * 0.12}s both`
                          : "none",
                      }}
                    >
                      {/* Accent bar */}
                      <div
                        className="absolute left-0 top-0 h-full w-0.5 rounded-l"
                        style={{
                          background:
                            s.tone === "blue" ? "#4a9eff" : "#c9a961",
                        }}
                      />

                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md bg-white/5">
                        <Atom
                          className="h-4 w-4"
                          style={{
                            color: s.tone === "blue" ? "#7eb8ff" : "#c9a961",
                          }}
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <span className="font-serif text-[17px] text-white">
                            {s.name}
                          </span>
                          <span className="rounded-sm border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-white/50">
                            {s.role}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                            confiança
                          </div>
                          <div
                            className="font-mono text-sm"
                            style={{
                              color: s.tone === "blue" ? "#7eb8ff" : "#c9a961",
                            }}
                          >
                            {s.confidence}%
                          </div>
                        </div>
                        <Check
                          className="h-4 w-4"
                          style={{
                            color: s.tone === "blue" ? "#4a9eff" : "#c9a961",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* References */}
                <div className="mt-5 rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent p-4">
                  <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                    Referências peer-reviewed
                  </div>
                  <div className="space-y-1.5 font-mono text-[11px] text-white/55">
                    <div className="flex gap-2">
                      <span className="text-[#4a9eff]">[01]</span>
                      <span>Pinnell, S.R. — Stability of L-ascorbic acid in topical formulations · J Invest Dermatol, 2023</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#4a9eff]">[02]</span>
                      <span>Lin, F.H. et al. — Synergistic antioxidant L-ascorbic + ferulic acid · Dermatol Surg, 2022</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-[#c9a961]">[03]</span>
                      <span>Al-Niaimi, F. — Topical vitamin C & clinical applications · J Clin Aesthet Derm, 2024</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ───────── IDEAL FOR ───────── */}
        <div className="mb-24">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                § 05.1 · Target Users
              </div>
              <h3 className="font-serif text-4xl font-normal tracking-[-0.02em] text-white md:text-5xl">
                Feito para quem <em className="text-[#c9a961]">formula, prescreve,</em>
                <br />
                <em className="text-[#c9a961]">desenvolve e decide.</em>
              </h3>
            </div>
            <div className="hidden font-mono text-[10px] text-white/30 lg:block">
              06 perfis-alvo
            </div>
          </div>

          <div className="grid gap-[1px] overflow-hidden rounded-xl bg-white/[0.08] md:grid-cols-2 lg:grid-cols-3">
            {idealFor.map((p, i) => {
              const Ico = p.icon
              return (
                <div
                  key={p.title}
                  className="group relative bg-[#070A11] p-7 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#4a9eff]/8 hover:to-transparent"
                >
                  <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  <div className="mt-4 flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors group-hover:border-[#4a9eff]/40 group-hover:bg-[#4a9eff]/10">
                    <Ico className="h-5 w-5 text-white/70 transition-colors group-hover:text-[#7eb8ff]" />
                  </div>

                  <div className="mt-5 font-serif text-xl leading-tight text-white">
                    {p.title}
                  </div>
                  <div className="mt-1.5 text-sm text-white/50">{p.meta}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* ───────── CAPABILITIES ───────── */}
        <div className="mb-24">
          <div className="mb-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                § 05.2 · Capabilities
              </div>
              <h3 className="font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-white md:text-5xl">
                O que a plataforma faz{" "}
                <em className="text-[#4a9eff]">na prática.</em>
              </h3>
            </div>
            <p className="text-base leading-[1.7] text-white/60 md:text-lg">
              Do briefing clínico à bancada industrial. O sistema organiza decisões
              complexas em um fluxo único —{" "}
              <span className="text-white">estrutura formulatória, não ingredientes soltos.</span>
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => {
              const Ico = c.icon
              return (
                <div
                  key={c.title}
                  className="group relative rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-transparent p-7 transition-all duration-300 hover:border-[#4a9eff]/25 hover:from-[#4a9eff]/8"
                >
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors group-hover:border-[#4a9eff]/40 group-hover:bg-[#4a9eff]/12">
                      <Ico className="h-5 w-5 text-[#7eb8ff]" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
                      {String(i + 1).padStart(2, "0")} / 06
                    </span>
                  </div>

                  <h4 className="font-serif text-xl leading-tight text-white">
                    {c.title}
                  </h4>
                  <p className="mt-3 text-sm leading-relaxed text-white/55">
                    {c.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* ───────── DIFFERENTIALS + APPLICATIONS (two-column) ───────── */}
        <div className="mb-24 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* Differentials */}
          <div>
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              § 05.3 · Why it stands out
            </div>
            <h3 className="mb-8 font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-white md:text-5xl">
              Diferenciais que{" "}
              <em className="text-[#c9a961]">elevam o nível</em>
              <br />
              do desenvolvimento formulatório.
            </h3>

            <div className="space-y-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
              {differentials.map((d, i) => (
                <div
                  key={d.label}
                  className={`group relative grid grid-cols-[auto_1fr] items-start gap-5 p-5 transition-colors hover:bg-[#4a9eff]/5 ${
                    i < differentials.length - 1 ? "border-b border-white/10" : ""
                  }`}
                >
                  <div className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.25em] text-[#4a9eff]/70">
                    <Check className="h-3.5 w-3.5" />
                    <span className="text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <div className="font-serif text-lg leading-tight text-white">
                      {d.label}
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-white/55">
                      {d.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              § 05.4 · Application areas
            </div>
            <h3 className="mb-6 font-serif text-3xl font-normal leading-[1.1] tracking-[-0.02em] text-white md:text-4xl">
              Aplicações reais no{" "}
              <em className="text-[#4a9eff]">setor cosmético</em> e{" "}
              <em className="text-[#4a9eff]">magistral.</em>
            </h3>

            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-[#4a9eff]/[0.05] via-white/[0.02] to-transparent p-6">
              <div className="grid gap-2">
                {applications.map((app, i) => (
                  <div
                    key={app}
                    className="group flex items-center justify-between rounded-md border-b border-white/5 py-2.5 last:border-b-0"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] text-white/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-[15px] text-white/85 transition-colors group-hover:text-white">
                        {app}
                      </span>
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-[#4a9eff]" />
                  </div>
                ))}
              </div>
              <div className="mt-5 border-t border-white/10 pt-4 text-xs text-white/40">
                + protocolos complementares para estética, consultório e linhas autorais.
              </div>
            </div>
          </div>
        </div>

        {/* ───────── TRANSFORMATION METRICS ───────── */}
        <div className="mb-24 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] via-[#4a9eff]/[0.04] to-[#c9a961]/[0.04]">
          <div className="border-b border-white/10 p-8">
            <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
              § 05.5 · Process transformation
            </div>
            <h3 className="font-serif text-3xl font-normal leading-tight tracking-[-0.02em] text-white md:text-4xl">
              Como ele <em className="text-[#c9a961]">transforma</em> o processo de desenvolvimento.
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/60 md:text-lg">
              O Formulator AI Lab Pro atua como um{" "}
              <span className="text-white">copiloto técnico de formulação</span>,
              organizando conhecimento complexo em decisões práticas e aplicáveis.
            </p>
          </div>

          <div className="grid gap-[1px] bg-white/[0.08] md:grid-cols-2 lg:grid-cols-4">
            {transformationMetrics.map((m, i) => {
              const Ico = m.icon
              return (
                <div key={i} className="bg-[#070A11] p-7">
                  <Ico className="mb-4 h-5 w-5 text-[#4a9eff]" />

                  <div className="space-y-3">
                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-white/30">
                        Antes
                      </div>
                      <div className="mt-1 text-sm text-white/45 line-through">
                        {m.before}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[#4a9eff]">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#4a9eff]/40" />
                      <ArrowUpRight className="h-3.5 w-3.5" />
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#4a9eff]/40" />
                    </div>

                    <div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#c9a961]">
                        Agora
                      </div>
                      <div className="mt-1 font-serif text-lg leading-tight text-white">
                        {m.after}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="grid gap-6 border-t border-white/10 p-8 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <div className="font-serif text-xl leading-relaxed text-white/85">
                &ldquo;Converte demanda clínica, necessidade comercial e tendência de mercado em{" "}
                <em className="text-[#c9a961]">soluções formulatórias consistentes e escaláveis</em>.&rdquo;
              </div>
            </div>
            <div className="md:text-right">
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
                Resultado líquido
              </div>
              <div className="mt-2 font-serif text-5xl text-[#c9a961]">−72%</div>
              <div className="text-xs text-white/50">retrabalho de bancada</div>
            </div>
          </div>
        </div>

        {/* ───────── FINAL CTA ───────── */}
        <div className="relative overflow-hidden rounded-3xl border border-[#4a9eff]/20 bg-gradient-to-br from-[#0a1020] via-[#070A11] to-[#0a1020] p-10 md:p-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, #4a9eff 0%, transparent 40%), radial-gradient(circle at 80% 70%, #c9a961 0%, transparent 40%)`,
            }}
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4a9eff]/30 bg-[#4a9eff]/10 px-3.5 py-1.5">
                <Zap className="h-3 w-3 text-[#4a9eff]" />
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#7eb8ff]">
                  Demonstração · vagas limitadas
                </span>
              </div>

              <h3 className="font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] text-white md:text-5xl lg:text-6xl">
                Leve inteligência formulatória{" "}
                <em className="text-[#c9a961]">avançada</em>
                <br />
                para sua farmácia, P&D ou marca.
              </h3>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/65">
                Ciência, velocidade e inovação em um único sistema. Agende uma
                demonstração técnica com nossa equipe e descubra como o
                Formulator AI Lab Pro pode elevar o nível do seu desenvolvimento.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="#contato"
                className="group relative flex items-center justify-between gap-3 overflow-hidden rounded-xl bg-[#4a9eff] px-6 py-5 transition-all hover:bg-[#3a8eef]"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/70">
                    Primário
                  </div>
                  <div className="font-serif text-xl text-white">
                    Solicitar demonstração
                  </div>
                </div>
                <ArrowUpRight className="h-6 w-6 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/cursos"
                className="group flex items-center justify-between gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-5 backdrop-blur-sm transition-colors hover:border-[#c9a961]/40 hover:bg-white/[0.06]"
              >
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/50">
                    Secundário
                  </div>
                  <div className="font-serif text-xl text-white">
                    Formação para equipes
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-white/50 transition-all group-hover:translate-x-1 group-hover:text-[#c9a961]" />
              </Link>

              <div className="mt-2 flex items-center gap-2 px-1 text-[11px] text-white/40">
                <ShieldCheck className="h-3 w-3" />
                <span>Demonstração 1:1 com especialista · 45 min · sem compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
