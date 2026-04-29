"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Brain,
  FlaskConical,
  Sparkles,
  Zap,
  CheckCircle2,
  X,
  Check,
  RefreshCw,
  Droplets,
  Target,
  Sliders,
  Mail,
  Loader2,
  Terminal,
  Activity,
  ChevronRight,
} from "lucide-react"

/* ─── Animated AI terminal lines ─── */
const formulaSteps = [
  { type: "cmd",    text: "> analisando objetivo: sérum clareador com vitamina C" },
  { type: "info",   text: "  carregando base de 4.000 testes validados..." },
  { type: "active", text: "  selecionando ativos: Niacinamida 10% + Arbutin 2%" },
  { type: "info",   text: "  ajustando pH para 5.5 — estabilidade otimizada" },
  { type: "active", text: "  textura: sérum aquoso fluido, espalhabilidade 9/10" },
  { type: "info",   text: "  conservação: Phenoxyethanol 0.8% + Ethylhexylglycerin" },
  { type: "active", text: "  adicionando agente filmogênico: Hyaluronate 0.2%" },
  { type: "info",   text: "  verificando compatibilidade entre ativos..." },
  { type: "success",text: "  fórmula validada — 98.4% de aderência aos testes" },
  { type: "cmd",    text: "> exportando protocolo de fabricação..." },
  { type: "success",text: "  pronto. fórmula gerada em 14 segundos." },
]

function AITerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const [isRunning, setIsRunning] = useState(true)
  const termRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isRunning) return
    if (visibleLines >= formulaSteps.length) {
      // reset after pause
      const timeout = setTimeout(() => {
        setVisibleLines(0)
      }, 3500)
      return () => clearTimeout(timeout)
    }
    const timeout = setTimeout(
      () => setVisibleLines((v) => v + 1),
      visibleLines === 0 ? 400 : 520
    )
    return () => clearTimeout(timeout)
  }, [visibleLines, isRunning])

  useEffect(() => {
    if (termRef.current) {
      termRef.current.scrollTop = termRef.current.scrollHeight
    }
  }, [visibleLines])

  const lineColor: Record<string, string> = {
    cmd:     "text-[#4a9eff]",
    info:    "text-white/45",
    active:  "text-[#2dd4bf]",
    success: "text-[#28c840]",
  }

  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.5)] bg-[#080e1a]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0d1526] border-b border-white/5">
        <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3 flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-white/30" />
          <span className="text-[11px] font-mono text-white/30 tracking-wide">STAi Formulator — engine v2.6.0</span>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-[#28c840] animate-pulse" />
          <span className="text-[10px] text-[#28c840] font-mono">LIVE</span>
        </div>
      </div>

      {/* Terminal body */}
      <div
        ref={termRef}
        className="font-mono text-[12px] leading-relaxed p-5 h-56 overflow-y-auto scrollbar-none space-y-1.5"
      >
        {formulaSteps.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={`${lineColor[line.type]} transition-opacity duration-300`}>
            {line.text}
          </div>
        ))}
        {visibleLines < formulaSteps.length && (
          <span className="inline-block w-2 h-4 bg-[#4a9eff]/80 animate-pulse align-middle" />
        )}
      </div>

      {/* Stats bar */}
      <div className="px-5 py-3 border-t border-white/5 bg-[#0d1526] flex items-center gap-6 flex-wrap">
        {[
          { label: "Testes", value: "4.000+" },
          { label: "Perguntas", value: "10k+" },
          { label: "Tópicos", value: "100+" },
          { label: "Precisão", value: "98.4%" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col">
            <span className="text-[10px] text-white/30 font-mono uppercase tracking-wider">{s.label}</span>
            <span className="text-sm font-bold text-white">{s.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─── Main Banner ─── */
export function IALabBanner() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const features = [
    { icon: RefreshCw,    text: "Substitui matérias-primas sob demanda" },
    { icon: Sliders,      text: "Ajusta textura e viscosidade" },
    { icon: Droplets,     text: "Melhora sensorial: toque, espalhabilidade, absorção" },
    { icon: Target,       text: "Otimiza performance da fórmula" },
    { icon: Sparkles,     text: "Personaliza conforme seu objetivo técnico" },
    { icon: FlaskConical, text: "Integração em tempo real com PubMed e bases científicas" },
  ]

  return (
    <section className="relative overflow-hidden bg-[#050b18]">
      {/* ── Background layer ── */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #4a9eff 1px, transparent 0)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute -top-40 left-1/3 w-[700px] h-[700px] rounded-full bg-[#4a9eff]/8 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#0a8f9e]/10 blur-[140px]" />
        <div className="absolute top-1/2 left-0 w-[350px] h-[350px] rounded-full bg-[#B8783D]/6 blur-[120px]" />
      </div>

      {/* ══════════════════════════════════════
          PART 1 — HERO PHRASE (full-width)
      ══════════════════════════════════════ */}
      <div className="relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16 text-center">
          {/* 2026 launch pill */}
          <div className="inline-flex items-center gap-2 bg-[#B8783D]/15 border border-[#B8783D]/30 rounded-full px-5 py-2 mb-10">
            <span className="w-2 h-2 rounded-full bg-[#B8783D] animate-pulse" />
            <span className="text-[#e8a87c] text-[11px] font-bold tracking-[2.5px] uppercase">
              Lancamento 2026 — STAi Formulator LAB
            </span>
          </div>

          {/* BIG phrases */}
          <div className="space-y-4 mb-6">
            {/* Line 1 — strikethrough contrast */}
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-white/35 leading-tight">
              Farmacotécnica de prateleira é{" "}
              <span className="relative inline-block">
                <span className="text-white/50">museu</span>
                <span
                  className="absolute left-0 top-1/2 w-full h-[3px] -rotate-1"
                  style={{ background: "linear-gradient(90deg,#dc2626,#ef4444)" }}
                />
              </span>
              .
            </p>

            {/* Line 2 — the REAL statement */}
            <p className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.0] tracking-tight">
              Formulação inteligente{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: "linear-gradient(135deg, #4a9eff 0%, #2dd4bf 50%, #0a8f9e 100%)",
                }}
              >
                é futuro
              </span>
              .
            </p>

            {/* Line 3 — the zinger */}
            <p className="text-xl md:text-2xl lg:text-3xl text-white/50 font-medium italic mt-2">
              Em terra de IA, quem só copia fórmula{" "}
              <span className="text-[#e8a87c] not-italic font-bold">vira rodapé</span>.
            </p>
          </div>

          {/* Thin separator line */}
          <div className="mx-auto mt-10 w-24 h-px bg-gradient-to-r from-transparent via-[#4a9eff]/40 to-transparent" />
        </div>
      </div>

      {/* ══════════════════════════════════════
          PART 2 — AI IN ACTION + EMAIL FORM
      ══════════════════════════════════════ */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-14 xl:gap-20 items-start">

          {/* ── LEFT: Product pitch + Features ── */}
          <div className="lg:col-span-6 xl:col-span-5">
            <h2 className="font-serif text-4xl md:text-5xl text-white leading-[1.08] tracking-tight mb-5">
              A IA que{" "}
              <span className="text-[#4a9eff]">cria</span>,{" "}
              <span className="text-[#2dd4bf]">ajusta</span> e{" "}
              <span className="text-[#0a8f9e]">evolui</span>{" "}
              suas fórmulas cosméticas
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Chega de fórmulas prontas e limitadas. Agora você desenvolve do seu jeito —
              com <strong className="text-white/80">segurança</strong> e{" "}
              <strong className="text-white/80">eficácia</strong> comprovadas em bancada.
            </p>

            {/* Comparison */}
            <div className="grid grid-cols-2 gap-3 mb-10">
              <div className="rounded-xl border border-[#dc2626]/20 bg-[#dc2626]/6 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <X className="w-4 h-4 text-[#dc2626]" />
                  <span className="text-[10px] font-bold text-[#dc2626] uppercase tracking-widest">Antes</span>
                </div>
                <p className="text-sm text-white/50 leading-snug">
                  Comprar bases prontas de prateleira
                </p>
              </div>
              <div className="rounded-xl border border-[#2dd4bf]/20 bg-[#2dd4bf]/6 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Check className="w-4 h-4 text-[#2dd4bf]" />
                  <span className="text-[10px] font-bold text-[#2dd4bf] uppercase tracking-widest">Agora</span>
                </div>
                <p className="text-sm text-white/50 leading-snug">
                  Criar fórmulas sob medida, com controle total
                </p>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 mb-10">
              <p className="text-[11px] font-bold text-white/30 uppercase tracking-[2.5px] mb-4">
                O que eu faço por você
              </p>
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#4a9eff]/10 border border-[#4a9eff]/15 flex items-center justify-center mt-0.5">
                    <f.icon className="w-3.5 h-3.5 text-[#4a9eff]" />
                  </div>
                  <span className="text-sm text-white/60 leading-relaxed">{f.text}</span>
                </div>
              ))}
            </div>

            {/* Go to page CTA */}
            <Link
              href="/ia"
              className="group inline-flex items-center gap-2 text-[#4a9eff] hover:text-white text-sm font-semibold transition-colors border-b border-[#4a9eff]/30 hover:border-white/50 pb-0.5"
            >
              Conhecer o iA Labs completo
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* ── RIGHT: AI Terminal + Email Capture ── */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-6">

            {/* AI Terminal mockup */}
            <AITerminal />

            {/* Email capture card */}
            <div className="relative rounded-2xl border border-[#4a9eff]/20 bg-gradient-to-br from-[#0d1a30] to-[#091220] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.35)]">
              {/* Shimmer accent bar */}
              <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#4a9eff,#2dd4bf,#B8783D)" }} />

              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-[#B8783D]/15 border border-[#B8783D]/30 rounded-full px-3 py-1 mb-3">
                      <Zap className="w-3.5 h-3.5 text-[#e8a87c]" />
                      <span className="text-[#e8a87c] text-[10px] font-bold tracking-[2px] uppercase">
                        Oferta de Lançamento 2026
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-white leading-tight">
                      7 dias grátis +{" "}
                      <span className="text-[#2dd4bf]">desconto exclusivo</span>
                    </h3>
                    <p className="text-white/45 text-sm mt-2">
                      Insira seu e-mail e receba acesso antecipado com desconto de lançamento.
                    </p>
                  </div>
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#4a9eff] to-[#2dd4bf] flex items-center justify-center shadow-[0_8px_24px_rgba(74,158,255,0.3)]">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="relative flex-1">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/25 pointer-events-none" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="seu@email.com"
                          required
                          className="w-full bg-white/[0.06] border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-white/25 text-sm focus:outline-none focus:border-[#4a9eff]/60 focus:ring-2 focus:ring-[#4a9eff]/15 transition-all"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold text-sm text-white transition-all disabled:opacity-60 shadow-[0_8px_24px_rgba(74,158,255,0.3)] hover:shadow-[0_12px_36px_rgba(74,158,255,0.45)]"
                        style={{ background: "linear-gradient(135deg,#4a9eff,#2dd4bf)" }}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Processando...
                          </>
                        ) : (
                          <>
                            Quero testar grátis
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Trust micro-copy */}
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4">
                      {[
                        "Sem cartão de crédito",
                        "Cancele quando quiser",
                        "Acesso imediato",
                      ].map((t) => (
                        <div key={t} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#2dd4bf]" />
                          <span className="text-[11px] text-white/35">{t}</span>
                        </div>
                      ))}
                    </div>
                  </form>
                ) : (
                  <div className="flex items-center gap-4 py-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg,#28c840,#2dd4bf)" }}>
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-white">Inscricao confirmada</p>
                      <p className="text-sm text-white/45 mt-0.5">
                        Voce recebera seu acesso e desconto de lancamento em breve.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
