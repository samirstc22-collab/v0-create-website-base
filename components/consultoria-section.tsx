"use client"

import Link from "next/link"
import { ArrowRight, Beaker, Building2, Stethoscope } from "lucide-react"

const cards = [
  {
    title: "Farmacias de manipulacao",
    description:
      "Formulas exclusivas, protocolos diferenciados e materiais tecnicos que transformam sua operacao em referencia regional.",
    icon: Beaker,
    color: "#B8783D", // copper
    features: ["Formulas exclusivas", "Protocolos de manipulacao", "Materiais tecnicos"],
  },
  {
    title: "Industria e marcas proprias",
    description:
      "Prototipos funcionais, ajuste sensorial refinado, claims embasados e suporte para escala industrial.",
    icon: Building2,
    color: "#0db5c8", // teal
    features: ["Prototipos funcionais", "Sensorial refinado", "Claims e escala"],
  },
  {
    title: "Prescritores e clinicas",
    description:
      "Protocolos clinicos validados em peelings, regeneracao cutanea, tricologia e dermatologia avancada.",
    icon: Stethoscope,
    color: "#0C2340", // navy
    features: ["Peelings avancados", "Regeneracao cutanea", "Tricologia clinica"],
  },
]

export function ConsultoriaSection() {
  return (
    <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.3] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(12,35,64,0.04) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-[800px] mx-auto text-center mb-16">
          <span className="inline-block text-[11px] font-bold tracking-[3px] uppercase text-[#B8783D] mb-4">
            Solucoes sob medida
          </span>
          <h2 className="font-serif text-[clamp(32px,5vw,56px)] leading-[1.1] tracking-[-1px] text-[#0C2340] mb-6">
            Da literatura ao posicionamento:{" "}
            <span className="text-[#B8783D]">solucoes exclusivas para quem precisa inovar</span>
          </h2>
          <p className="text-lg md:text-xl text-[#475569] leading-[1.7]">
            Minha formacao em pesquisa, desenvolvimento laboratorial, docencia e consultoria me permite unir rigor cientifico e aplicabilidade mercadologica na criacao de solucoes dermatologicas de alto valor.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {cards.map((card) => (
            <div
              key={card.title}
              className="group relative bg-white rounded-2xl overflow-hidden border border-[#e5e7eb] shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-all duration-300 hover:translate-y-[-4px]"
            >
              {/* Colored top border */}
              <div
                className="h-1.5 w-full"
                style={{ backgroundColor: card.color }}
              />

              <div className="p-8">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${card.color}15` }}
                >
                  <card.icon
                    className="w-7 h-7"
                    style={{ color: card.color }}
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-2xl text-[#0C2340] mb-3">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[#64748b] leading-relaxed mb-6">
                  {card.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[#475569]">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: card.color }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Impact phrase */}
        <div className="text-center mb-12">
          <p className="font-serif text-xl md:text-2xl italic text-[#64748b] max-w-[700px] mx-auto">
            &ldquo;A diferenca entre um produto comum e um produto memoravel esta nos detalhes que so a experiencia revela.&rdquo;
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/consultoria"
            className="group inline-flex items-center justify-center gap-3 bg-[#0C2340] text-white px-8 py-4 rounded-xl font-bold text-base tracking-wide hover:bg-[#0a1a33] transition-all shadow-[0_8px_30px_rgba(12,35,64,0.25)] hover:shadow-[0_12px_40px_rgba(12,35,64,0.35)] hover:translate-y-[-2px]"
          >
            Solicitar diagnostico do projeto
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contato?assunto=Consultoria%20Estrategica"
            className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-[#B8783D] text-[#B8783D] px-8 py-4 rounded-xl font-bold text-base tracking-wide hover:bg-[#B8783D] hover:text-white transition-all"
          >
            Agendar consultoria estrategica
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
