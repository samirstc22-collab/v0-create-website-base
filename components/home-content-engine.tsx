"use client"

import Link from "next/link"
import {
  ArrowUpRight,
  FileText,
  Beaker,
  Layers,
  AlertTriangle,
  TrendingUp,
  Quote,
  ArrowRight,
  BookOpen,
  Microscope,
} from "lucide-react"
import {
  MoleculeIllustration,
  HexagonPattern,
  AtomIllustration,
  DNAHelix,
  FlaskIllustration,
} from "./illustrations"

type ContentFormat = {
  id: string
  formatLabel: string
  formatTag: string
  hook: string
  title: string
  rationale: string
  proof: string
  proofMetric: string
  proofLabel: string
  cta: string
  href: string
  accent: string
  Icon: typeof FileText
  Decor: React.ComponentType<{ className?: string }>
  decorPosition: string
}

const contentFormats: ContentFormat[] = [
  {
    id: "01",
    formatLabel: "Caso comentado",
    formatTag: "Bancada real",
    hook: "Por que esta formula falhou no balcao em 14 dias?",
    title: "Sistema clareador instavel: como o pH errado destroi 3 ativos de uma vez.",
    rationale:
      "Combinacao classica (acido kojico + arbutin + niacinamida) que perde 60% da atividade em 21 dias quando formulada em emulsao com pH > 5,5. Mostro o mecanismo, o erro de tamponamento e a correcao validada em bancada.",
    proof: "Estabilidade",
    proofMetric: "60%",
    proofLabel: "Perda de atividade em 21d",
    cta: "Ler caso completo",
    href: "/blog/case-clareador-ph",
    accent: "#B8783D",
    Icon: FileText,
    Decor: MoleculeIllustration,
    decorPosition: "top-4 right-4",
  },
  {
    id: "02",
    formatLabel: "Analise de ativo",
    formatTag: "Mecanismo & dose",
    hook: "Bakuchiol substitui retinoide? A literatura diz outra coisa.",
    title: "Bakuchiol: o que a evidencia clinica realmente sustenta — e onde para.",
    rationale:
      "Compilacao de 8 estudos peer-reviewed cruzando concentracao terapeutica, comparacao direta com retinol 0,5% e limites de eficacia em fotoenvelhecimento severo. Inclui veiculacao recomendada e incompatibilidades.",
    proof: "Evidencia",
    proofMetric: "8 RCT",
    proofLabel: "Estudos analisados",
    cta: "Ver analise tecnica",
    href: "/blog/bakuchiol-evidencia",
    accent: "#0a8f9e",
    Icon: Beaker,
    Decor: AtomIllustration,
    decorPosition: "bottom-4 right-4",
  },
  {
    id: "03",
    formatLabel: "Racional de combinacao",
    formatTag: "Sinergias validadas",
    hook: "Niacinamida + Vitamina C: contraindicado ou mal explicado?",
    title: "Combinacao niacinamida 5% + ascorbil glucosideo 3%: por que funciona quando bem desenhada.",
    rationale:
      "Desconstruo o mito da incompatibilidade, mostro a diferenca quimica entre formas de vitamina C, e dou o desenho de formula com pH-buffering correto que entrega ambos os efeitos simultaneamente.",
    proof: "Sinergia",
    proofMetric: "+47%",
    proofLabel: "Brilho/uniformidade vs monoterapia",
    cta: "Ver racional completo",
    href: "/blog/niacinamida-vitamina-c",
    accent: "#0C2340",
    Icon: Layers,
    Decor: DNAHelix,
    decorPosition: "top-4 right-4",
  },
  {
    id: "04",
    formatLabel: "Erro frequente",
    formatTag: "Top 5 do balcao",
    hook: "9 em cada 10 farmacias erram este passo no peeling de mandelico.",
    title: "Peeling de mandelico 30%: o erro de pH que cancela o efeito clinico inteiro.",
    rationale:
      "Auditoria de 47 formulas magistrais reais mostrou que 89% estavam com pH acima do limite de protonacao. Explico o pKa, o impacto na queratolise e o protocolo correto de ajuste com lactato de sodio.",
    proof: "Auditoria",
    proofMetric: "89%",
    proofLabel: "Formulas auditadas com pH errado",
    cta: "Corrigir minha formula",
    href: "/blog/peeling-mandelico-ph",
    accent: "#dc2626",
    Icon: AlertTriangle,
    Decor: HexagonPattern,
    decorPosition: "bottom-4 left-4",
  },
]

export function HomeContentEngine() {
  return (
    <section className="relative bg-white py-20 lg:py-28 px-6 lg:px-10 overflow-hidden">
      {/* Background — soft brand wash */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1000px 500px at 0% 0%, rgba(184,120,61,0.05) 0%, transparent 60%), radial-gradient(ellipse 800px 500px at 100% 100%, rgba(12,35,64,0.06) 0%, transparent 60%)",
        }}
      />
      {/* Subtle dot grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.3] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(12,35,64,0.06) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative vectors */}
      <FlaskIllustration className="absolute top-20 -left-20 w-72 h-72 text-[#B8783D]/[0.04] pointer-events-none animate-[float_18s_ease-in-out_infinite]" />
      <MoleculeIllustration className="absolute bottom-20 -right-16 w-64 h-64 text-[#0a8f9e]/[0.05] pointer-events-none animate-[spin_50s_linear_infinite]" />

      <div className="relative max-w-[1320px] mx-auto">
        {/* Section Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-14 lg:mb-16 items-end">
          <div className="lg:col-span-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5 bg-[#0C2340] px-4 py-2 rounded-full">
              <Microscope className="w-4 h-4 text-[#d4a574]" strokeWidth={2} />
              <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-white">
                Inteligencia tecnica em circulacao
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-[clamp(36px,5.2vw,68px)] text-[#0C2340] leading-[1.0] tracking-[-0.03em] mb-5">
              Antes de me contratar,{" "}
              <em className="italic text-[#B8783D]">leia o que eu penso</em>.
            </h2>

            {/* Persuasion subhead */}
            <p className="text-[18px] lg:text-[20px] text-[#334155] leading-[1.55] max-w-[680px] font-medium">
              Nao publico texto motivacional. Publico{" "}
              <strong className="text-[#0C2340] font-bold">analise de ativo, racional de combinacao, caso comentado de bancada e auditoria de erros frequentes</strong>{" "}
              — o tipo de conteudo que faz voce decidir se faz sentido conversar comigo.
            </p>
          </div>

          {/* Right CTA + content count */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-4">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-[64px] leading-none text-[#B8783D] tracking-[-0.04em]">
                120+
              </span>
              <div className="text-left">
                <div className="text-[12px] font-bold uppercase tracking-[2px] text-[#64748b]">
                  Artigos tecnicos
                </div>
                <div className="text-[12px] text-[#0C2340] font-semibold">
                  publicados ate hoje
                </div>
              </div>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 bg-[#0C2340] text-white px-6 py-3 rounded-xl text-[14px] font-bold tracking-wide hover:bg-[#B8783D] transition-all"
            >
              <BookOpen className="w-4 h-4" />
              Acessar biblioteca
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Content format grid — 4 cards in 2x2 on lg, 1col mobile */}
        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {contentFormats.map((item, idx) => {
            const { Icon, Decor } = item
            return (
              <Link
                key={item.id}
                href={item.href}
                className="group relative flex flex-col bg-white rounded-3xl border-2 border-[#0C2340]/8 hover:border-[var(--accent)]/40 overflow-hidden shadow-[0_10px_30px_rgba(12,35,64,0.05)] hover:shadow-[0_25px_60px_rgba(12,35,64,0.15)] transition-all duration-500 hover:-translate-y-1 motion-safe:animate-[fadeInUp_0.6s_ease-out_both]"
                style={
                  {
                    ["--accent" as string]: item.accent,
                    animationDelay: `${idx * 120}ms`,
                  } as React.CSSProperties
                }
              >
                {/* Top accent rail */}
                <div
                  className="h-1.5 w-full"
                  style={{ backgroundColor: item.accent }}
                />

                {/* Decorative vector */}
                <div
                  className={`absolute ${item.decorPosition} pointer-events-none transition-all duration-500 group-hover:scale-110 group-hover:opacity-20`}
                  style={{ color: item.accent, opacity: 0.08 }}
                  aria-hidden
                >
                  <Decor className="w-32 h-32" />
                </div>

                <div className="relative p-7 lg:p-8 flex-1 flex flex-col">
                  {/* Header row: format chip + ID */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                      style={{
                        backgroundColor: `${item.accent}15`,
                        border: `1px solid ${item.accent}35`,
                      }}
                    >
                      <Icon
                        className="w-3.5 h-3.5"
                        style={{ color: item.accent }}
                        strokeWidth={2.5}
                      />
                      <span
                        className="text-[10px] font-bold uppercase tracking-[2px]"
                        style={{ color: item.accent }}
                      >
                        {item.formatLabel}
                      </span>
                    </div>
                    <span
                      className="font-serif text-[30px] leading-none opacity-30"
                      style={{ color: item.accent }}
                    >
                      {item.id}
                    </span>
                  </div>

                  {/* Hook — the curiosity opener */}
                  <div className="flex items-start gap-2.5 mb-4">
                    <Quote
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: item.accent }}
                      strokeWidth={2}
                    />
                    <p className="text-[15px] lg:text-[16px] font-semibold text-[#0C2340] leading-[1.4] italic">
                      {item.hook}
                    </p>
                  </div>

                  {/* Title — the actual technical article */}
                  <h3
                    className="font-serif text-[22px] lg:text-[26px] leading-[1.15] tracking-[-0.02em] mb-4 transition-colors text-[#0C2340] group-hover:[color:var(--accent)]"
                  >
                    {item.title}
                  </h3>

                  {/* Rationale — what's inside */}
                  <p className="text-[14.5px] lg:text-[15px] text-[#475569] leading-[1.55] mb-6">
                    {item.rationale}
                  </p>

                  {/* Proof strip — pulls before the CTA */}
                  <div
                    className="flex items-center justify-between gap-4 mt-auto pt-5 border-t"
                    style={{ borderColor: `${item.accent}22` }}
                  >
                    <div className="flex items-baseline gap-2.5">
                      <TrendingUp
                        className="w-4 h-4"
                        style={{ color: item.accent }}
                        strokeWidth={2.5}
                      />
                      <div>
                        <div
                          className="text-[10px] font-bold uppercase tracking-[1.5px]"
                          style={{ color: item.accent }}
                        >
                          {item.proof}
                        </div>
                        <div className="flex items-baseline gap-1.5">
                          <span
                            className="font-serif text-[28px] leading-none tracking-[-0.02em]"
                            style={{ color: item.accent }}
                          >
                            {item.proofMetric}
                          </span>
                          <span className="text-[11px] text-[#64748b] font-medium">
                            {item.proofLabel}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <span
                      className="inline-flex items-center gap-1.5 text-[13px] font-bold tracking-tight whitespace-nowrap"
                      style={{ color: item.accent }}
                    >
                      {item.cta}
                      <ArrowUpRight
                        className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={2.5}
                      />
                    </span>
                  </div>
                </div>

                {/* Hover sweep gradient */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, transparent 0%, ${item.accent}05 50%, transparent 100%)`,
                  }}
                />
              </Link>
            )
          })}
        </div>

        {/* Footer strip — newsletter / capture */}
        <div className="relative mt-12 lg:mt-14 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0C2340] via-[#0a1f3a] to-[#07172d] p-8 lg:p-10">
          {/* Glows */}
          <div
            aria-hidden
            className="absolute -top-32 -right-20 w-96 h-96 rounded-full opacity-25 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, #B8783D 0%, transparent 70%)" }}
          />
          <div
            aria-hidden
            className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, #0a8f9e 0%, transparent 70%)" }}
          />
          <HexagonPattern className="absolute right-10 top-1/2 -translate-y-1/2 w-40 h-40 text-white/5 pointer-events-none animate-[spin_60s_linear_infinite]" />

          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full bg-[#B8783D]/15 border border-[#B8783D]/30">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B8783D] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#d4a574]">
                  Newsletter Bancada
                </span>
              </div>
              <h3 className="font-serif text-[clamp(26px,3.4vw,40px)] text-white leading-[1.05] tracking-[-0.02em] mb-3">
                Toda quinta, um caso novo de bancada{" "}
                <em className="italic text-[#d4a574]">na sua caixa de entrada</em>.
              </h3>
              <p className="text-[15px] lg:text-[16px] text-white/75 leading-[1.55] max-w-[520px]">
                Analise de ativo + racional de combinacao + 1 erro frequente comentado. Sem propaganda. Cancela quando quiser.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="/contato?assunto=Newsletter"
                className="group inline-flex items-center justify-between gap-3 bg-[#B8783D] hover:bg-[#a66a32] text-white px-6 py-4 rounded-xl font-bold text-[15px] tracking-wide transition-all shadow-[0_10px_30px_rgba(184,120,61,0.4)] hover:-translate-y-0.5"
              >
                <span>Assinar newsletter tecnica</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/blog"
                className="group inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 backdrop-blur border border-white/20 text-white px-6 py-3.5 rounded-xl font-semibold text-[14px] tracking-wide transition-all"
              >
                <BookOpen className="w-4 h-4" />
                Explorar todos os artigos
              </Link>
              {/* Risk-reverse */}
              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-[11px] text-white/55 mt-1">
                <span>Mais de 3.200 leitores</span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span>Conteudo 100% tecnico</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </section>
  )
}
