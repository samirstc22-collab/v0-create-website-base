"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight, Beaker, Building2, Stethoscope, TrendingUp, Zap, Shield } from "lucide-react"

type Card = {
  num: string
  label: string
  pain: string
  title: string
  description: string
  icon: typeof Beaker
  proofIcon: typeof TrendingUp
  proofLabel: string
  proofValue: string
  color: string
  features: string[]
  href: string
  cta: string
}

const cards: Card[] = [
  {
    num: "01",
    label: "Farmacias magistrais",
    pain: "Disputa de preco e copia de catalogo",
    title: "Saia da disputa por preco.",
    description:
      "Portfolio autoral, narrativa tecnica documentada e protocolos exclusivos que fazem o prescritor pedir SEU nome — nao o do concorrente.",
    icon: Beaker,
    proofIcon: TrendingUp,
    proofLabel: "Margem media",
    proofValue: "+28%",
    color: "#B8783D",
    features: [
      "Formulas autorais sob medida",
      "Protocolos clinicos exclusivos",
      "Argumentacao tecnica para prescritor",
    ],
    href: "/consultoria",
    cta: "Ver consultoria magistral",
  },
  {
    num: "02",
    label: "Industria e marcas proprias",
    pain: "Time-to-market lento e claims fracos",
    title: "Lance em metade do tempo.",
    description:
      "Do prototipo a escala industrial em ciclos curtos. Sensorial refinado, claims defensaveis com lastro cientifico e suporte tecnico ate o regulatorio.",
    icon: Building2,
    proofIcon: Zap,
    proofLabel: "Time-to-market",
    proofValue: "-60%",
    color: "#0db5c8",
    features: [
      "Prototipos validados em bancada",
      "Claims com referencia peer-reviewed",
      "Suporte ate up-scale e regulatorio",
    ],
    href: "/consultoria#industrial",
    cta: "Ver consultoria industrial",
  },
  {
    num: "03",
    label: "Prescritores e clinicas",
    pain: "Inseguranca clinica e baixa adesao",
    title: "Protocolos com evidencia.",
    description:
      "Peelings, regeneracao, tricologia e dermatologia avancada com racional documentado, posologia clara e seguranca regulatoria.",
    icon: Stethoscope,
    proofIcon: Shield,
    proofLabel: "Adesao clinica",
    proofValue: "9.2/10",
    color: "#0C2340",
    features: [
      "Peelings avancados e seguros",
      "Regeneracao cutanea avancada",
      "Tricologia clinica baseada em ciencia",
    ],
    href: "/protocolos",
    cta: "Ver protocolos clinicos",
  },
]

export function ConsultoriaSection() {
  return (
    <section className="relative bg-white py-16 lg:py-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(12,35,64,0.05) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      {/* Top brand wash */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 1200px 400px at 50% -10%, rgba(184,120,61,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header — denser, more impact */}
        <div className="max-w-[920px] mx-auto text-center mb-12 lg:mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-10 bg-[#B8783D]" />
            <span className="text-[12px] font-bold tracking-[3.5px] uppercase text-[#B8783D]">
              Solucoes sob medida
            </span>
            <span className="h-px w-10 bg-[#B8783D]" />
          </div>
          <h2 className="font-serif text-[clamp(38px,5.6vw,68px)] leading-[1.0] tracking-[-0.025em] text-[#0C2340] mb-5">
            Tres frentes.{" "}
            <em className="italic text-[#B8783D]">Um metodo.</em>
            <br />
            Resultado mensuravel.
          </h2>
          <p className="text-[18px] md:text-[20px] text-[#334155] leading-[1.5] max-w-[720px] mx-auto font-medium">
            Pesquisa, P&D, docencia e bancada industrial reunidos em um servico unico — para quem precisa{" "}
            <span className="text-[#0C2340] font-bold">diferenciar tecnicamente</span> e{" "}
            <span className="text-[#0C2340] font-bold">capturar valor real</span>.
          </p>
        </div>

        {/* Cards Grid — compressed, denser, more dynamic */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 mb-12">
          {cards.map((card, idx) => {
            const Icon = card.icon
            const ProofIcon = card.proofIcon
            return (
              <Link
                key={card.title}
                href={card.href}
                className="group relative bg-white rounded-3xl overflow-hidden border-2 border-[#e5e7eb] hover:border-transparent transition-all duration-500 hover:translate-y-[-6px] flex flex-col shadow-[0_4px_24px_rgba(12,35,64,0.06)] hover:shadow-[0_24px_60px_rgba(12,35,64,0.18)] motion-safe:animate-[fadeInUp_0.6s_ease-out_both]"
                style={
                  {
                    animationDelay: `${idx * 120}ms`,
                    ["--accent" as string]: card.color,
                  } as React.CSSProperties
                }
              >
                {/* Gradient sweep on hover */}
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${card.color}10 0%, transparent 50%, ${card.color}06 100%)`,
                  }}
                />

                {/* Top colored rail with hover-grow */}
                <div
                  className="h-[6px] w-full transition-all duration-500 group-hover:h-[10px]"
                  style={{ backgroundColor: card.color }}
                />

                {/* Decorative ghost numeral */}
                <div
                  aria-hidden
                  className="absolute top-2 right-3 font-serif text-[100px] leading-none opacity-[0.045] pointer-events-none select-none transition-opacity duration-500 group-hover:opacity-[0.08]"
                  style={{ color: card.color }}
                >
                  {card.num}
                </div>

                <div className="relative p-7 lg:p-8 flex flex-col flex-1">
                  {/* Number + segment label */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]"
                        style={{
                          backgroundColor: `${card.color}18`,
                          color: card.color,
                        }}
                      >
                        <Icon className="w-6 h-6" strokeWidth={1.75} />
                      </div>
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#94a3b8] leading-none mb-1">
                          {card.num}
                        </div>
                        <div
                          className="text-[12px] font-bold uppercase tracking-[1.5px] leading-none"
                          style={{ color: card.color }}
                        >
                          {card.label}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight
                      className="w-5 h-5 text-[#94a3b8] transition-all duration-300 group-hover:text-[var(--accent)] group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>

                  {/* Pain — strikethrough mini-line */}
                  <div className="mb-3 flex items-center gap-2">
                    <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#94a3b8]">
                      Dor
                    </div>
                    <div className="text-[12px] text-[#64748b] line-through decoration-[#94a3b8]/40 decoration-1 italic">
                      {card.pain}
                    </div>
                  </div>

                  {/* Title — much bigger, navy, dense */}
                  <h3 className="font-serif text-[clamp(28px,3.4vw,38px)] text-[#0C2340] leading-[1.0] tracking-[-0.03em] mb-4 font-normal">
                    {card.title}
                  </h3>

                  {/* Description — bigger, navy/85 for contrast */}
                  <p className="text-[15.5px] lg:text-[16px] text-[#0C2340]/85 leading-[1.55] mb-6 font-medium">
                    {card.description}
                  </p>

                  {/* Proof stat — colored chip */}
                  <div
                    className="flex items-center gap-3 px-4 py-3 rounded-xl mb-6 border-2 transition-all duration-300 group-hover:scale-[1.02]"
                    style={{
                      backgroundColor: `${card.color}0c`,
                      borderColor: `${card.color}30`,
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: card.color, color: "#fff" }}
                    >
                      <ProofIcon className="w-[18px] h-[18px]" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1 flex items-baseline justify-between gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#0C2340]/70">
                        {card.proofLabel}
                      </span>
                      <span
                        className="font-serif text-[24px] lg:text-[26px] leading-none tracking-[-0.02em] font-semibold"
                        style={{ color: card.color }}
                      >
                        {card.proofValue}
                      </span>
                    </div>
                  </div>

                  {/* Features — bigger, bolder */}
                  <ul className="space-y-2.5 mb-6">
                    {card.features.map((feature, fi) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-[14.5px] text-[#0C2340] font-semibold leading-snug"
                        style={{ transitionDelay: `${fi * 60}ms` }}
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300 group-hover:w-3 group-hover:h-1 group-hover:rounded-sm"
                          style={{ backgroundColor: card.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Footer CTA — appears on hover */}
                  <div className="mt-auto pt-5 border-t border-[#e5e7eb]">
                    <div
                      className="flex items-center justify-between text-[13px] font-bold transition-all duration-300"
                      style={{ color: card.color }}
                    >
                      <span className="uppercase tracking-[1.5px] flex items-center gap-2">
                        {card.cta}
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Trust strip — fills the empty space, no orphan area */}
        <div className="relative bg-gradient-to-r from-[#0C2340] via-[#0a1f3a] to-[#0C2340] rounded-3xl overflow-hidden mb-10">
          {/* Copper glow */}
          <div
            aria-hidden
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-40 pointer-events-none"
            style={{ background: "radial-gradient(circle, #B8783D 0%, transparent 70%)" }}
          />
          {/* Teal glow */}
          <div
            aria-hidden
            className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ background: "radial-gradient(circle, #0db5c8 0%, transparent 70%)" }}
          />

          <div className="relative grid md:grid-cols-[1.4fr_1fr_1fr_1fr] divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="p-7 lg:p-8">
              <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#d4a574] mb-3">
                Por que ST Farma
              </div>
              <p className="font-serif text-white text-[22px] lg:text-[26px] leading-[1.15] tracking-[-0.02em]">
                Bancada industrial real,{" "}
                <em className="italic text-[#d4a574]">nao teoria de manual</em>.
              </p>
            </div>
            {[
              { value: "6", suffix: "anos", label: "P&D no maior grupo magistral" },
              { value: "500", suffix: "+", label: "Farmacias com padrao elevado" },
              { value: "1.000", suffix: "+", label: "Formuladores treinados" },
            ].map((stat) => (
              <div key={stat.label} className="p-7 lg:p-8">
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-serif text-[44px] lg:text-[52px] leading-none tracking-[-0.03em] text-white font-medium">
                    {stat.value}
                  </span>
                  <span className="font-serif text-[20px] text-[#d4a574] leading-none">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-[13px] text-white/65 leading-snug font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Row — left content, right buttons */}
        <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#B8783D] mb-3">
              Proximo passo
            </div>
            <h3 className="font-serif text-[clamp(26px,3.2vw,38px)] text-[#0C2340] leading-[1.05] tracking-[-0.025em] mb-3">
              Diagnostico gratuito de 30 minutos.{" "}
              <em className="italic text-[#B8783D]">Mapa do que travar primeiro.</em>
            </h3>
            <p className="text-[16px] text-[#475569] leading-[1.55] font-medium max-w-[560px]">
              Sem comercial, sem enrolacao. Voce sai com um plano tecnico claro do que precisa ajustar — mesmo que escolha nao trabalhar comigo.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row md:flex-col gap-3">
            <Link
              href="/consultoria"
              className="group inline-flex items-center justify-center gap-3 bg-[#B8783D] text-white px-7 py-[18px] rounded-xl font-bold text-[15px] tracking-wide hover:bg-[#a66a32] transition-all shadow-[0_8px_30px_rgba(184,120,61,0.4)] hover:shadow-[0_12px_40px_rgba(184,120,61,0.55)] hover:translate-y-[-2px]"
            >
              Solicitar diagnostico gratuito
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contato?assunto=Consultoria%20Estrategica"
              className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0C2340] text-[#0C2340] px-7 py-[18px] rounded-xl font-bold text-[15px] tracking-wide hover:bg-[#0C2340] hover:text-white transition-all"
            >
              Falar agora pelo WhatsApp
            </Link>
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
      `}</style>
    </section>
  )
}
