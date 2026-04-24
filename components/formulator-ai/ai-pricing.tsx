"use client"

import { Check, Sparkles, Zap, Crown } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    id: "starter",
    name: "Starter",
    description: "Para profissionais iniciando na formulação",
    price: "47",
    period: "/mês",
    icon: Zap,
    color: "#4a9eff",
    features: [
      "50 consultas/mês",
      "Acesso à base de fórmulas",
      "Sugestões de veículos",
      "Cálculos de pH e HLB",
      "Suporte por email",
    ],
    cta: "Começar grátis",
    popular: false,
  },
  {
    id: "pro",
    name: "Pro",
    description: "Para farmácias magistrais e formuladores",
    price: "127",
    period: "/mês",
    icon: Sparkles,
    color: "#8b5cf6",
    features: [
      "Consultas ilimitadas",
      "Tudo do Starter +",
      "Referências PubMed",
      "Exportação de relatórios",
      "Histórico completo",
      "Suporte prioritário",
      "Atualizações mensais",
    ],
    cta: "Assinar Pro",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "Para indústrias e laboratórios",
    price: "Sob consulta",
    period: "",
    icon: Crown,
    color: "#f59e0b",
    features: [
      "Tudo do Pro +",
      "API de integração",
      "Treinamento customizado",
      "Base de dados exclusiva",
      "Múltiplos usuários",
      "SLA garantido",
      "Consultoria dedicada",
    ],
    cta: "Falar com vendas",
    popular: false,
  },
]

export function AIPricing() {
  return (
    <section className="relative bg-[#0a1221] py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#4a9eff]/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            Escolha seu plano
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Comece gratuitamente. Escale conforme sua necessidade.
          </p>
        </div>

        {/* Plans grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white/[0.02] border rounded-3xl p-8 transition-all duration-300 hover:bg-white/[0.04] ${
                plan.popular
                  ? "border-[#8b5cf6]/50 shadow-[0_0_60px_-20px_rgba(139,92,246,0.4)]"
                  : "border-white/10"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#8b5cf6] to-[#4a9eff] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  Mais popular
                </div>
              )}

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${plan.color}20` }}
              >
                <plan.icon className="w-7 h-7" style={{ color: plan.color }} />
              </div>

              {/* Plan info */}
              <h3 className="text-2xl text-white font-semibold mb-2">{plan.name}</h3>
              <p className="text-sm text-white/50 mb-6">{plan.description}</p>

              {/* Price */}
              <div className="flex items-baseline gap-1 mb-8">
                {plan.price !== "Sob consulta" && (
                  <span className="text-sm text-white/50">R$</span>
                )}
                <span className="text-4xl text-white font-serif">{plan.price}</span>
                <span className="text-white/50">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#28c840] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#"
                className={`block text-center py-4 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-gradient-to-r from-[#8b5cf6] to-[#4a9eff] text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                    : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white/40">
            Garantia de 7 dias · Cancele quando quiser · Sem compromisso
          </p>
        </div>
      </div>
    </section>
  )
}
