"use client"

import { Check, ArrowRight, Star, Zap, Crown } from "lucide-react"

export function MentoriaPlans() {
  const plans = [
    {
      icon: Zap,
      name: "Essencial",
      tagline: "Para quem esta comecando",
      price: "1.497",
      period: "/mes",
      description: "Ideal para farmacias magistrais em fase inicial ou profissionais buscando orientacao tecnica pontual.",
      features: [
        { text: "1 sessao tecnica mensal (60min)", included: true },
        { text: "Suporte via WhatsApp (seg-sex)", included: true },
        { text: "Acesso ao grupo de membros", included: true },
        { text: "1 formulario tecnico/mes", included: true },
        { text: "Revisao de formulas", included: false },
        { text: "Materiais exclusivos", included: false },
      ],
      cta: "Iniciar Essencial",
      popular: false,
      accent: "#0d7a80",
    },
    {
      icon: Star,
      name: "Profissional",
      tagline: "Mais escolhido",
      price: "2.997",
      period: "/mes",
      description: "Para farmacias magistrais consolidadas e industrias cosmeticas buscando evolucao tecnica continua.",
      features: [
        { text: "2 sessoes tecnicas mensais (90min)", included: true },
        { text: "Suporte prioritario WhatsApp", included: true },
        { text: "Acesso ao grupo de membros", included: true },
        { text: "3 formularios tecnicos/mes", included: true },
        { text: "Revisao de ate 5 formulas/mes", included: true },
        { text: "Dossie de tendencias trimestral", included: true },
      ],
      cta: "Iniciar Profissional",
      popular: true,
      accent: "#B8783D",
    },
    {
      icon: Crown,
      name: "Enterprise",
      tagline: "Consultoria completa",
      price: "5.997",
      period: "/mes",
      description: "Para industrias e redes de farmacias que precisam de suporte tecnico integral e dedicado.",
      features: [
        { text: "4 sessoes tecnicas mensais (90min)", included: true },
        { text: "Suporte direto ilimitado", included: true },
        { text: "Treinamento de equipe incluso", included: true },
        { text: "Formularios ilimitados", included: true },
        { text: "Revisao de formulas ilimitada", included: true },
        { text: "Visita tecnica presencial/trimestre", included: true },
      ],
      cta: "Falar com Consultor",
      popular: false,
      accent: "#0C2340",
    },
  ]

  return (
    <section id="plans" className="py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#B8783D]/10 border border-[#B8783D]/20 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold tracking-[2px] uppercase text-[#B8783D]">
              Planos Mensais
            </span>
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#0C2340] mb-6 leading-[1.1]">
            Escolha o nivel de{" "}
            <span className="text-[#B8783D]">suporte</span> ideal
          </h2>
          <p className="text-lg text-[#64748b] max-w-2xl mx-auto leading-relaxed">
            Tres opcoes desenhadas para diferentes estagios de maturidade tecnica.
            Todos os planos incluem acesso exclusivo a materiais e comunidade.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl p-8 flex flex-col transition-all ${
                plan.popular
                  ? "border-2 border-[#B8783D] shadow-[0_20px_60px_rgba(184,120,61,0.15)] scale-[1.02]"
                  : "border border-[#0C2340]/10 hover:border-[#B8783D]/30 hover:shadow-[0_16px_48px_rgba(12,35,64,0.1)]"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#B8783D] text-white text-xs font-bold tracking-[1.5px] uppercase px-4 py-2 rounded-full">
                  Mais Escolhido
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${plan.accent}15` }}
                >
                  <plan.icon className="w-6 h-6" style={{ color: plan.accent }} />
                </div>
                <h3 className="font-serif text-2xl text-[#0C2340] mb-1">{plan.name}</h3>
                <p className="text-sm text-[#94a3b8]">{plan.tagline}</p>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-sm text-[#64748b]">R$</span>
                  <span className="font-serif text-5xl text-[#0C2340]">{plan.price}</span>
                  <span className="text-sm text-[#64748b]">{plan.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#64748b] leading-relaxed mb-8">
                {plan.description}
              </p>

              {/* Features */}
              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                        feature.included ? "bg-emerald-100" : "bg-[#f1f5f9]"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          feature.included ? "text-emerald-600" : "text-[#94a3b8]"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        feature.included ? "text-[#475569]" : "text-[#94a3b8] line-through"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="https://wa.me/5511981403000"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? "bg-gradient-to-br from-[#B8783D] to-[#8a5729] text-white shadow-[0_6px_24px_rgba(184,120,61,0.3)] hover:translate-y-[-2px] hover:shadow-[0_10px_32px_rgba(184,120,61,0.4)]"
                    : "bg-[#0C2340] text-white hover:bg-[#1a3a5c]"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 bg-[#fafbfc] rounded-2xl p-8 border border-[#0C2340]/8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { label: "Garantia", value: "7 dias para cancelar" },
              { label: "Fidelidade", value: "Sem contrato minimo" },
              { label: "Pagamento", value: "Cartao, PIX ou boleto" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-xs font-bold tracking-[2px] uppercase text-[#94a3b8] mb-2">
                  {item.label}
                </div>
                <div className="text-base font-semibold text-[#0C2340]">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
