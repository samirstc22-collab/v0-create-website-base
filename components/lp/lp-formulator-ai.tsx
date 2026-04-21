"use client"

import { useEffect, useState } from "react"
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
} from "lucide-react"

export function LPFormulatorAI() {
  const [query, setQuery] = useState("")
  const [chars, setChars] = useState(0)
  const fullQuery = "Reformular serum vitamina C 15% estável pH 3.5 — via cosmecêutica"

  // Typing animation
  useEffect(() => {
    if (chars < fullQuery.length) {
      const t = setTimeout(() => {
        setQuery(fullQuery.slice(0, chars + 1))
        setChars(chars + 1)
      }, 45)
      return () => clearTimeout(t)
    }
    const reset = setTimeout(() => {
      setQuery("")
      setChars(0)
    }, 5000)
    return () => clearTimeout(reset)
  }, [chars])

  const kpis = [
    { label: "Fórmulas indexadas", value: "4.000+", accent: "#c9a961" },
    { label: "Respostas geradas", value: "20.000+", accent: "#4a9eff" },
    { label: "Papers cruzados", value: "PubMed", accent: "#c9a961" },
    { label: "Uptime", value: "99.9%", accent: "#4a9eff" },
  ]

  const applications = [
    { icon: Atom, title: "Sugestão de ativos", desc: "Recomendação baseada em evidência + compatibilidade química." },
    { icon: FileCode, title: "Cálculos de pH &amp; pKa", desc: "Faixa ótima, sistema tampão e titulação — instantâneos." },
    { icon: Database, title: "Dossiê técnico", desc: "Gere relatórios regulatórios com referências rastreáveis." },
    { icon: Activity, title: "Previsão de estabilidade", desc: "Modelo treinado em 4.000+ fórmulas históricas." },
  ]

  const audience = [
    "Farmácia magistral com P&D ativo",
    "Indústria Grau 1 & 2",
    "Marcas independentes em scale-up",
    "Laboratórios de desenvolvimento",
    "Consultorias de formulação",
    "Equipes de controle de qualidade",
  ]

  return (
    <section id="lab-pro" className="relative overflow-hidden bg-[#070A11] py-24 lg:py-32">
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(74,158,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,158,255,1) 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-[#4a9eff]/[0.08] blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-16">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[3px] text-[#4a9eff]">
                § 04
              </span>
              <span className="h-px w-12 bg-[#4a9eff]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[3px] text-white/40">
                Software · Infra-Formulatória
              </span>
            </div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#4a9eff]/25 bg-[#4a9eff]/[0.06] px-3 py-1.5">
              <span className="flex h-1.5 w-1.5">
                <span className="absolute h-1.5 w-1.5 animate-ping rounded-full bg-[#4a9eff] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4a9eff]" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#7eb8ff]">
                Private Beta · Em breve
              </span>
            </div>

            <h2 className="font-serif text-[clamp(40px,6vw,78px)] leading-[0.95] tracking-[-2px] text-white">
              Formulator AI
              <br />
              <span className="italic text-[#c9a961]">Lab Pro.</span>
            </h2>
          </div>

          <p className="text-[17px] leading-[1.7] text-white/60 lg:text-[19px]">
            O primeiro copiloto científico de formulação treinado sobre{" "}
            <span className="text-white">quatro mil fórmulas validadas em bancada</span>, cruzado
            com papers peer-reviewed e referências da PubMed. Acelere o P&amp;D da sua operação sem
            abrir mão do rigor.
          </p>
        </div>

        {/* Dashboard window */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-xl">
          {/* Window chrome */}
          <div className="flex items-center justify-between border-b border-white/[0.06] bg-black/30 px-5 py-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              </div>
              <span className="ml-3 font-mono text-[10px] uppercase tracking-widest text-white/40">
                labpro.clubedeformulas.ai / dashboard
              </span>
            </div>
            <div className="hidden items-center gap-2 md:flex">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4a9eff]" />
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                session · authenticated
              </span>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="grid gap-px bg-white/[0.04] lg:grid-cols-[260px_1fr]">
            {/* SIDEBAR */}
            <aside className="bg-[#070A11] p-6">
              <div className="mb-5 font-mono text-[9px] uppercase tracking-[2.5px] text-white/30">
                Workspace
              </div>

              <div className="space-y-1">
                {[
                  { icon: Search, label: "Consulta Semântica", active: true },
                  { icon: Database, label: "Biblioteca de Fórmulas", active: false },
                  { icon: FileCode, label: "Gerador de Dossiês", active: false },
                  { icon: Atom, label: "Cálculo pH &amp; pKa", active: false },
                  { icon: Activity, label: "Previsão de Estabilidade", active: false },
                  { icon: TrendingUp, label: "Analytics", active: false },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <button
                      key={item.label}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] transition-colors ${
                        item.active
                          ? "bg-[#4a9eff]/10 text-[#7eb8ff] border border-[#4a9eff]/20"
                          : "border border-transparent text-white/55 hover:bg-white/[0.03] hover:text-white/80"
                      }`}
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span
                        className="flex-1 text-left"
                        dangerouslySetInnerHTML={{ __html: item.label }}
                      />
                      {item.active && <ChevronRight className="h-3.5 w-3.5" />}
                    </button>
                  )
                })}
              </div>

              <div className="my-6 h-px w-full bg-white/[0.06]" />

              <div className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-3">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md border border-[#c9a961]/25 bg-[#c9a961]/[0.08]">
                    <Sparkles className="h-3.5 w-3.5 text-[#c9a961]" />
                  </div>
                  <span className="text-[11px] font-semibold text-white/80">Plano Pro</span>
                </div>
                <div className="text-[10px] leading-relaxed text-white/40">
                  Requisições ilimitadas · suporte prioritário
                </div>
              </div>
            </aside>

            {/* MAIN PANEL */}
            <div className="bg-[#080b13] p-6 md:p-8">
              {/* Breadcrumb */}
              <div className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/35">
                <span>Workspace</span>
                <ChevronRight className="h-3 w-3" />
                <span className="text-white/70">Consulta Semântica</span>
              </div>

              {/* Query input mock */}
              <div className="rounded-xl border border-[#4a9eff]/25 bg-[#4a9eff]/[0.04] p-4">
                <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-[#4a9eff]">
                  <Search className="h-3 w-3" />
                  Prompt
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[13px] text-white md:text-[15px]">
                    {query}
                  </span>
                  <span className="h-4 w-[2px] animate-pulse bg-[#4a9eff]" />
                </div>
              </div>

              {/* KPI grid */}
              <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
                {kpis.map((k) => (
                  <div
                    key={k.label}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-4"
                  >
                    <div className="font-mono text-[9px] uppercase tracking-[2px] text-white/35">
                      {k.label}
                    </div>
                    <div
                      className="mt-2 font-serif text-2xl leading-none"
                      style={{ color: k.accent }}
                    >
                      {k.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Response mock */}
              <div className="mt-5 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5">
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-[#c9a961]">
                    <Sparkles className="h-3 w-3" />
                    Sugestão validada
                  </div>
                  <span className="rounded-md border border-[#c9a961]/25 bg-[#c9a961]/[0.08] px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-[#c9a961]">
                    3 refs · PubMed
                  </span>
                </div>

                <div className="space-y-2.5">
                  {[
                    { label: "Ácido L-ascórbico 15%", meta: "pH alvo 3.2 · Tetrahexyldecyl-Ascorbate 3% (sinergista)" },
                    { label: "Sistema tampão citrato", meta: "pKa 3.13 · 4.76 · 6.40 — faixa ótima de estabilidade" },
                    { label: "Quelante EDTA dissódico 0.1%", meta: "bloqueia oxidação por metais traço" },
                    { label: "Antioxidantes", meta: "Tocoferol 0.5% + Ferúlico 0.5% — sinergia triplicada" },
                  ].map((item, i) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-lg border border-white/[0.06] bg-[#070A11] p-3"
                    >
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#4a9eff]/30 bg-[#4a9eff]/10">
                        <Check className="h-3 w-3 text-[#4a9eff]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[13px] font-medium text-white/90">{item.label}</div>
                        <div className="mt-0.5 text-[11px] text-white/45">{item.meta}</div>
                      </div>
                      <span className="font-mono text-[9px] text-white/25">0{i + 1}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-white/[0.06] pt-4">
                  <span className="font-mono text-[10px] text-white/35">
                    Resposta gerada em 1.2s · 94% confidence
                  </span>
                  <button className="flex items-center gap-2 rounded-lg border border-[#4a9eff]/25 bg-[#4a9eff]/[0.08] px-3 py-1.5 text-[11px] font-semibold text-[#7eb8ff] transition-colors hover:bg-[#4a9eff]/15">
                    Exportar dossiê
                    <ArrowUpRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Applications + Audience row */}
        <div className="mt-20 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Applications */}
          <div>
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[3px] text-white/40">
              Aplicações principais
            </div>
            <h3 className="mb-8 font-serif text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-1px] text-white">
              Quatro módulos prontos.{" "}
              <span className="italic text-[#c9a961]">Zero setup.</span>
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {applications.map((a) => {
                const Icon = a.icon
                return (
                  <div
                    key={a.title}
                    className="group rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all hover:border-[#4a9eff]/30 hover:bg-white/[0.04]"
                  >
                    <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors group-hover:border-[#4a9eff]/30 group-hover:bg-[#4a9eff]/10">
                      <Icon className="h-4 w-4 text-white/70 group-hover:text-[#4a9eff]" />
                    </div>
                    <h4
                      className="font-serif text-[18px] leading-tight text-white"
                      dangerouslySetInnerHTML={{ __html: a.title }}
                    />
                    <p
                      className="mt-1.5 text-[13px] leading-[1.6] text-white/55"
                      dangerouslySetInnerHTML={{ __html: a.desc }}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Audience */}
          <div className="rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent p-8 backdrop-blur-sm">
            <div className="mb-6 font-mono text-[10px] uppercase tracking-[3px] text-[#c9a961]">
              Para quem é
            </div>
            <h3 className="mb-6 font-serif text-[28px] leading-[1.1] tracking-[-0.5px] text-white">
              Construído para{" "}
              <span className="italic text-[#c9a961]">operações sérias</span> de P&amp;D.
            </h3>

            <ul className="space-y-3">
              {audience.map((a) => (
                <li key={a} className="flex items-center gap-3 text-[14px] text-white/75">
                  <span className="h-1 w-6 bg-gradient-to-r from-[#c9a961] to-[#c9a961]/0" />
                  {a}
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl border border-[#4a9eff]/25 bg-[#4a9eff]/[0.06] px-5 py-3 text-[12px] font-bold uppercase tracking-[2px] text-[#7eb8ff] transition-all hover:border-[#4a9eff]/50 hover:bg-[#4a9eff]/[0.12]"
            >
              Garantir acesso antecipado
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
