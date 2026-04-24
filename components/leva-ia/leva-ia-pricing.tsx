"use client"

import { Check, ArrowRight, Sparkles, Building2, Rocket } from "lucide-react"

export function LevaIAPricing() {
  const plans = [
    {
      icon: Sparkles,
      name: "Starter",
      price: "297",
      period: "/mes",
      description: "Para farmacias magistrais iniciando com IA.",
      features: [
        "100 consultas/mes",
        "Busca de ativos",
        "Sugestao de formulas basicas",
        "Suporte por email",
      ],
      cta: "Comecar Agora",
      popular: false,
    },
    {
      icon: Rocket,
      name: "Professional",
      price: "597",
      period: "/mes",
      description: "Para farmacias e industrias em crescimento.",
      features: [
        "500 consultas/mes",
        "Todos os recursos Starter",
        "Geracao de dossies",
        "Analise de compatibilidade",
        "Suporte prioritario",
      ],
      cta: "Escolher Professional",
      popular: true,
    },
    {
      icon: Building2,
      name: "Enterprise",
      price: "Sob consulta",
      period: "",
      description: "Para redes e industrias com demanda alta.",
      features: [
        "Consultas ilimitadas",
        "Todos os recursos Pro",
        "API de integracao",
        "Treinamento de equipe",
        "Gerente de conta dedicado",
      ],
      cta: "Falar com Vendas",
      popular: false,
    },
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-[1100px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold tracking-[2px] uppercase text-blue-500">
              Planos
            </span>
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#0C2340] mb-6 leading-[1.1]">
            Escolha o plano ideal para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              sua operacao
            </span>
          </h2>
        </div>

        {/* Plans */}
        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl p-8 flex flex-col transition-all ${
                plan.popular
                  ? "border-2 border-blue-500 shadow-[0_20px_60px_rgba(59,130,246,0.15)] scale-[1.02]"
                  : "border border-[#0C2340]/10 hover:border-blue-500/30 hover:shadow-[0_16px_48px_rgba(59,130,246,0.1)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold tracking-[1.5px] uppercase px-4 py-2 rounded-full">
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${
                  plan.popular ? "bg-blue-500/15" : "bg-[#0C2340]/5"
                }`}>
                  <plan.icon className={`w-6 h-6 ${plan.popular ? "text-blue-500" : "text-[#0C2340]"}`} />
                </div>
                <h3 className="font-serif text-2xl text-[#0C2340] mb-1">{plan.name}</h3>
                <p className="text-sm text-[#94a3b8]">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  {plan.price !== "Sob consulta" && <span className="text-sm text-[#64748b]">R$</span>}
                  <span className="font-serif text-4xl text-[#0C2340]">{plan.price}</span>
                  {plan.period && <span className="text-sm text-[#64748b]">{plan.period}</span>}
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                      plan.popular ? "bg-blue-100" : "bg-emerald-100"
                    }`}>
                      <Check className={`w-3 h-3 ${plan.popular ? "text-blue-600" : "text-emerald-600"}`} />
                    </div>
                    <span className="text-sm text-[#475569]">{feature}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5511981403000"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-xl font-bold text-sm tracking-wide flex items-center justify-center gap-2 transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-[0_6px_24px_rgba(59,130,246,0.3)] hover:translate-y-[-2px] hover:shadow-[0_10px_32px_rgba(59,130,246,0.4)]"
                    : "bg-[#0C2340] text-white hover:bg-[#1a3a5c]"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* FAQ Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[#94a3b8]">
            Todos os planos incluem 7 dias de teste gratuito. Cancele a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  )
}
