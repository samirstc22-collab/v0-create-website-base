"use client"

import { Sparkles, Cpu, Zap, ArrowRight, Brain, Database } from "lucide-react"

export function LevaIAHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 lg:px-10 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
              </span>
              <span className="text-xs font-bold tracking-[2px] uppercase text-blue-400">
                Inteligencia Artificial
              </span>
            </div>

            <h1 className="font-serif text-[clamp(40px,5vw,64px)] text-white leading-[1.05] tracking-[-1px] mb-6">
              Leva a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                IA
              </span>{" "}
              na sua
              <br />
              <span className="text-white/90">formulacao</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-8">
              Solucoes de inteligencia artificial desenvolvidas especificamente para
              o setor magistral e cosmetico. Automacao inteligente, sugestao de ativos
              e otimizacao de formulas com tecnologia de ponta.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: Brain, text: "IA treinada em formulacao" },
                { icon: Zap, text: "Respostas instantaneas" },
                { icon: Database, text: "Base de 10.000+ ativos" },
                { icon: Cpu, text: "Integracao com seu sistema" },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-white/80">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5511981403000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-[0_8px_32px_rgba(59,130,246,0.35)] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(59,130,246,0.45)] transition-all"
              >
                <Sparkles className="w-4 h-4" />
                Solicitar Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-white/10 hover:border-white/30 transition-all"
              >
                Ver Recursos
              </a>
            </div>
          </div>

          {/* Right Visual - AI Interface Mock */}
          <div className="hidden lg:block relative">
            <div className="relative bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <div className="flex-1 bg-white/5 rounded-lg px-4 py-2 text-xs text-white/50">
                  formulator.ai / ST Farma
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-6">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-500/20 border border-blue-500/30 rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs">
                    <p className="text-sm text-white/90">
                      Preciso de uma formula anti-aging com peptideos para pele madura
                    </p>
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                      <span className="text-xs font-bold text-purple-400">ST Farma AI</span>
                    </div>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Recomendo uma combinacao de Argireline 10%, Matrixyl 3000 5%,
                      e Retinol 0.3% em base O/W hidratante. Considere adicionar
                      Niacinamida 4% para potencializar...
                    </p>
                  </div>
                </div>
              </div>

              {/* Input */}
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3">
                  <span className="text-sm text-white/30">Digite sua pergunta...</span>
                </div>
                <button className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Floating Tags */}
              <div className="absolute -top-3 -right-3 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
                ONLINE
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
