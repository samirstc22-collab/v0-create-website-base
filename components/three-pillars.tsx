"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, FlaskConical, Microscope, Sparkles, Zap, Target, TrendingUp, ShieldCheck } from "lucide-react"

const pillars = [
  {
    number: "01",
    icon: FlaskConical,
    badge: "Formulacao Magistral",
    title: "Sair da disputa por preco",
    problem: "Sua farmacia compete por R$ 0,50 a menos enquanto o concorrente vende a mesma formula generica.",
    solution:
      "Construo seu portfolio autoral com formulas exclusivas, racional cientifico documentado e narrativa tecnica que prescritores reconhecem.",
    benefits: [
      "Formulas autorais protegidas",
      "Protocolos com peer-review",
      "Diferenciacao tecnica real",
    ],
    accent: "from-[#B8783D] to-[#d4a574]",
    color: "#B8783D",
    iconBg: "bg-[#B8783D]",
  },
  {
    number: "02",
    icon: Microscope,
    badge: "P&D Industrial",
    title: "Lancar com defensabilidade",
    problem: "Voce tem uma ideia, mas falta racional cientifico, claims defensaveis e roadmap de escalonamento.",
    solution:
      "Desenvolvo prototipos de alta performance, claims sustentados em literatura e suporte completo do conceito a producao em escala.",
    benefits: [
      "Prototipos com sensorial premium",
      "Claims com base cientifica",
      "Do laboratorio a escala industrial",
    ],
    accent: "from-[#0db5c8] to-[#5eead4]",
    color: "#0db5c8",
    iconBg: "bg-[#0db5c8]",
  },
  {
    number: "03",
    icon: Target,
    badge: "Protocolos Clinicos",
    title: "Resultados que se veem",
    problem: "Procedimentos dermatologicos com protocolos genericos entregam resultados medianos para seus pacientes.",
    solution:
      "Crio protocolos personalizados para peelings, regeneracao, tricologia e tecnologias laser/LED — com formulas magistrais que potencializam cada procedimento.",
    benefits: [
      "Protocolos pre/pos-procedimento",
      "Formulas exclusivas validadas",
      "Cases clinicos documentados",
    ],
    accent: "from-violet-500 to-purple-400",
    color: "#a855f7",
    iconBg: "bg-violet-500",
  },
]

export function ThreePillars() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = cardsRef.current.map((el, idx) => {
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards((prev) => {
                const next = [...prev]
                next[idx] = true
                return next
              })
            }, idx * 150)
          }
        },
        { threshold: 0.2 }
      )
      obs.observe(el)
      return obs
    })

    return () => {
      observers.forEach((obs) => obs?.disconnect())
    }
  }, [])

  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-[#050a14] via-[#0a1628] to-[#050a14] overflow-hidden">
      {/* Background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Glows */}
      <div
        aria-hidden
        className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(184,120,61,0.18), transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-20 right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(13,181,200,0.15), transparent 60%)",
          filter: "blur(80px)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Header de alto contraste */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B8783D]/15 border border-[#B8783D]/40 text-[#d4a574] text-[11px] font-bold uppercase tracking-[2.5px] mb-6 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            O que eu resolvo
          </span>
          <h2
            className="font-serif text-[clamp(36px,5vw,60px)] leading-[1.05] tracking-[-1.5px] text-white mb-6"
            style={{ textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}
          >
            Tres pilares para transformar sua{" "}
            <em className="italic bg-gradient-to-r from-[#d4a574] via-[#B8783D] to-[#d4a574] bg-clip-text text-transparent">
              autoridade tecnica
            </em>
          </h2>
          <p className="text-[18px] md:text-[20px] text-white/85 leading-[1.6] font-light">
            Cada projeto que conduzo nasce de um destes tres eixos. Identifique o seu desafio e veja exatamente como vamos resolve-lo juntos.
          </p>
        </div>

        {/* Grid de pilares */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.number}
              ref={(el) => {
                cardsRef.current[idx] = el
              }}
              className={`group relative transition-all duration-700 ${
                visibleCards[idx]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              {/* Glow no hover */}
              <div
                className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${pillar.accent} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500`}
              />

              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md border border-white/[0.12] rounded-3xl p-8 lg:p-9 hover:border-white/25 transition-all duration-500 overflow-hidden">
                {/* Numero gigante de fundo */}
                <div
                  aria-hidden
                  className="absolute -top-8 -right-2 text-[180px] font-serif font-bold leading-none text-white/[0.04] select-none"
                >
                  {pillar.number}
                </div>

                {/* Linha decorativa superior */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.accent}`}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl ${pillar.iconBg} flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.3)] group-hover:scale-110 transition-transform duration-500`}
                  >
                    <pillar.icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                </div>

                {/* Badge */}
                <div className="text-[10px] font-bold uppercase tracking-[2px] mb-3" style={{ color: pillar.color }}>
                  {pillar.badge}
                </div>

                {/* Titulo nitido */}
                <h3
                  className="font-serif text-[28px] lg:text-[30px] leading-[1.1] text-white mb-5 tracking-tight"
                  style={{ textShadow: "0 1px 20px rgba(0,0,0,0.4)" }}
                >
                  {pillar.title}
                </h3>

                {/* Problema */}
                <div className="mb-5 pb-5 border-b border-white/10">
                  <div className="text-[10px] uppercase tracking-[2px] text-red-300/80 font-bold mb-2 flex items-center gap-1.5">
                    <Zap className="w-3 h-3" />
                    O Problema
                  </div>
                  <p className="text-[15px] leading-[1.55] text-white/75 font-light">
                    {pillar.problem}
                  </p>
                </div>

                {/* Solucao */}
                <div className="mb-6">
                  <div
                    className="text-[10px] uppercase tracking-[2px] font-bold mb-2 flex items-center gap-1.5"
                    style={{ color: pillar.color }}
                  >
                    <ShieldCheck className="w-3 h-3" />
                    Como eu resolvo
                  </div>
                  <p className="text-[15px] leading-[1.55] text-white font-medium">
                    {pillar.solution}
                  </p>
                </div>

                {/* Beneficios */}
                <ul className="space-y-2.5 mb-8">
                  {pillar.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-[14px] text-white/85 font-medium"
                    >
                      <div
                        className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: pillar.color }}
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href="/contato"
                  className={`inline-flex items-center gap-2 text-[14px] font-bold pb-1.5 border-b-2 transition-all hover:gap-3`}
                  style={{ color: pillar.color, borderColor: `${pillar.color}50` }}
                >
                  <span>Quero esse resultado</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="mt-16 text-center">
          <p className="text-white/70 text-[15px] mb-5 font-light">
            Nao sabe qual desses pilares e o seu? Eu te ajudo a descobrir.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center gap-3 bg-white text-[#0C2340] px-8 py-4 rounded-2xl font-bold text-[15px] tracking-wide hover:bg-[#d4a574] hover:text-white transition-all shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:translate-y-[-2px]"
          >
            <TrendingUp className="w-5 h-5" />
            Solicitar Diagnostico Tecnico
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
