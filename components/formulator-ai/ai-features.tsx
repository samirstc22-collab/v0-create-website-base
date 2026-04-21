"use client"

import { useState } from "react"
import {
  Brain,
  FlaskConical,
  Microscope,
  BookOpen,
  Zap,
  Shield,
  LineChart,
  Layers,
  Search,
  FileText,
  Calculator,
  Beaker,
} from "lucide-react"

const features = [
  {
    id: "formulation",
    icon: FlaskConical,
    title: "Geração de Fórmulas",
    description: "Crie fórmulas completas com base em ativos, concentrações e público-alvo específico.",
    details: [
      "Sugestão de veículos compatíveis",
      "Ajuste automático de pH",
      "Verificação de incompatibilidades",
      "Cálculo de HLB para emulsões",
    ],
    color: "#4a9eff",
  },
  {
    id: "stability",
    icon: LineChart,
    title: "Análise de Estabilidade",
    description: "Previsão de estabilidade baseada em literatura científica e dados experimentais.",
    details: [
      "Avaliação de shelf-life",
      "Identificação de riscos",
      "Sugestões de conservantes",
      "Condições de armazenamento",
    ],
    color: "#8b5cf6",
  },
  {
    id: "literature",
    icon: BookOpen,
    title: "Revisão de Literatura",
    description: "Acesso instantâneo a referências PubMed, DOIs e publicações indexadas.",
    details: [
      "Citações formatadas ABNT",
      "Resumos de artigos",
      "Mecanismos de ação",
      "Evidências clínicas",
    ],
    color: "#06b6d4",
  },
  {
    id: "optimization",
    icon: Zap,
    title: "Otimização de Custos",
    description: "Sugestões para reduzir custos mantendo eficácia e qualidade do produto.",
    details: [
      "Alternativas de ativos",
      "Fornecedores sugeridos",
      "Comparativo de preços",
      "Análise custo-benefício",
    ],
    color: "#f59e0b",
  },
]

const capabilities = [
  { icon: Brain, text: "IA proprietária treinada com dados reais" },
  { icon: Microscope, text: "Base de 4.000+ fórmulas validadas" },
  { icon: Search, text: "Integração com PubMed e bases científicas" },
  { icon: FileText, text: "Exportação de relatórios técnicos" },
  { icon: Calculator, text: "Cálculos de pH, HLB e concentrações" },
  { icon: Beaker, text: "Verificação de incompatibilidades" },
  { icon: Shield, text: "Dados seguros e privados" },
  { icon: Layers, text: "Histórico de consultas ilimitado" },
]

export function AIFeatures() {
  const [activeFeature, setActiveFeature] = useState(features[0])

  return (
    <section id="recursos" className="relative bg-[#0a1221] py-24 lg:py-32">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(74, 158, 255, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74, 158, 255, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-xs text-white/60 font-bold tracking-[2px] uppercase">
              Recursos Exclusivos
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Inteligência que{" "}
            <span className="bg-gradient-to-r from-[#4a9eff] to-[#8b5cf6] bg-clip-text text-transparent">
              transforma
            </span>{" "}
            formulação
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Funcionalidades projetadas para acelerar seu trabalho, reduzir erros e elevar a qualidade das suas formulações.
          </p>
        </div>

        {/* Features interactive grid */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          {/* Feature tabs */}
          <div className="lg:col-span-2 space-y-3">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(feature)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  activeFeature.id === feature.id
                    ? "bg-white/5 border-white/20 shadow-lg"
                    : "bg-transparent border-white/5 hover:border-white/10"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{
                      backgroundColor: activeFeature.id === feature.id ? `${feature.color}20` : "rgba(255,255,255,0.05)",
                    }}
                  >
                    <feature.icon
                      className="w-6 h-6 transition-colors"
                      style={{ color: activeFeature.id === feature.id ? feature.color : "rgba(255,255,255,0.4)" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-lg mb-1 transition-colors"
                      style={{ color: activeFeature.id === feature.id ? "white" : "rgba(255,255,255,0.7)" }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-sm text-white/50 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Feature detail card */}
          <div className="lg:col-span-3">
            <div
              className="relative h-full bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-3xl p-8 lg:p-10 overflow-hidden"
              style={{
                boxShadow: `0 0 100px -30px ${activeFeature.color}30`,
              }}
            >
              {/* Decorative gradient */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20"
                style={{ backgroundColor: activeFeature.color }}
              />

              <div className="relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${activeFeature.color}20` }}
                >
                  <activeFeature.icon className="w-8 h-8" style={{ color: activeFeature.color }} />
                </div>

                <h3 className="font-serif text-3xl text-white mb-4">{activeFeature.title}</h3>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">{activeFeature.description}</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {activeFeature.details.map((detail, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: activeFeature.color }}
                      />
                      <span className="text-sm text-white/80">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="border-t border-white/10 pt-16">
          <h3 className="text-center text-xl text-white/60 font-semibold mb-10">
            Mais recursos incluídos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {capabilities.map((cap, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/[0.02] border border-white/5 rounded-xl px-4 py-4 hover:border-white/10 transition-colors"
              >
                <cap.icon className="w-5 h-5 text-[#4a9eff] flex-shrink-0" />
                <span className="text-sm text-white/70">{cap.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
