"use client"

import Link from "next/link"
import { ArrowRight, Sparkles, Zap, Brain, Search, Shield, Clock } from "lucide-react"

export function HomeLabPro() {
  const features = [
    { icon: Brain, label: "4.000+ formulas na base" },
    { icon: Search, label: "PubMed integrado" },
    { icon: Shield, label: "Validacao cientifica" },
    { icon: Clock, label: "Resposta em segundos" },
  ]

  return (
    <section className="relative bg-gradient-to-b from-[#f8fafc] to-white py-20 px-6 lg:px-10 overflow-hidden">
      {/* Background elements */}
      <div
        aria-hidden
        className="absolute top-0 right-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(74,158,255,0.08), transparent 60%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#4a9eff]/10 border border-[#4a9eff]/20 rounded-full px-4 py-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4a9eff] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4a9eff]" />
              </span>
              <span className="text-[11px] tracking-[2px] uppercase font-bold text-[#4a9eff]">
                Novo · Inteligencia Artificial
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#0C2340] leading-[1.1] tracking-tight mb-6">
              Formulator AI{" "}
              <span className="text-[#4a9eff]">Lab Pro</span>
            </h2>

            <p className="text-lg text-[#475569] leading-[1.7] mb-8 max-w-[500px]">
              Assistente de IA treinado em{" "}
              <strong className="text-[#0C2340]">4.000+ formulas validadas</strong> e literatura
              peer-reviewed. Consulte, valide e otimize formulacoes em segundos — com lastro cientifico.
            </p>

            {/* Feature chips */}
            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((f) => {
                const Icon = f.icon
                return (
                  <div
                    key={f.label}
                    className="flex items-center gap-2 bg-white border border-[#e5e7eb] rounded-lg px-4 py-2.5 shadow-sm"
                  >
                    <Icon className="w-4 h-4 text-[#4a9eff]" />
                    <span className="text-sm font-medium text-[#374151]">{f.label}</span>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/formulator-ai"
                className="group inline-flex items-center gap-2 bg-[#4a9eff] text-white px-7 py-4 rounded-xl font-bold text-base tracking-wide hover:bg-[#3b8fe8] transition-all shadow-[0_8px_30px_rgba(74,158,255,0.3)] hover:shadow-[0_12px_40px_rgba(74,158,255,0.4)] hover:translate-y-[-2px]"
              >
                <Sparkles className="w-5 h-5" />
                Acessar o Lab Pro
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/cursos"
                className="inline-flex items-center gap-2 bg-white border-2 border-[#e5e7eb] text-[#374151] px-6 py-4 rounded-xl font-semibold text-base tracking-wide hover:border-[#4a9eff]/30 hover:bg-[#4a9eff]/5 transition-all"
              >
                Ver cursos inclusos
              </Link>
            </div>
          </div>

          {/* RIGHT — Demo mockup */}
          <div className="relative">
            {/* Glow */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#4a9eff]/15 via-transparent to-[#0C2340]/10 blur-2xl pointer-events-none" />

            {/* Chat mockup */}
            <div className="relative bg-[#0C2340] rounded-2xl overflow-hidden border border-[#1a3a5c] shadow-[0_40px_80px_-20px_rgba(12,35,64,0.5)]">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#4a9eff] flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">Formulator AI</div>
                    <div className="text-[10px] text-white/50">Lab Pro · Online</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                  <span className="text-[10px] text-white/50 uppercase tracking-wider">Ativo</span>
                </div>
              </div>

              {/* Chat area */}
              <div className="p-5 space-y-4 min-h-[280px]">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-[#4a9eff] text-white px-4 py-3 rounded-2xl rounded-tr-md max-w-[280px]">
                    <p className="text-sm">
                      Preciso de um serum anti-idade com peptideos para pele sensivel
                    </p>
                  </div>
                </div>

                {/* AI response */}
                <div className="flex gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#4a9eff]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Zap className="w-3.5 h-3.5 text-[#4a9eff]" />
                  </div>
                  <div className="bg-white/[0.06] border border-white/10 px-4 py-3 rounded-2xl rounded-tl-md max-w-[320px]">
                    <p className="text-sm text-white/90 mb-3">
                      Baseado em 847 formulacoes similares validadas, recomendo:
                    </p>
                    <div className="space-y-2 text-xs text-white/70">
                      <div className="flex justify-between">
                        <span>Argireline 10%</span>
                        <span className="text-[#10b981]">5%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Matrixyl 3000</span>
                        <span className="text-[#10b981]">3%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Acido hialuronico</span>
                        <span className="text-[#10b981]">1%</span>
                      </div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
                      <Shield className="w-3 h-3 text-[#10b981]" />
                      <span className="text-[10px] text-[#10b981] font-medium">
                        97% confianca · 3 refs PubMed
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Input area */}
              <div className="px-5 pb-5">
                <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3">
                  <input
                    type="text"
                    placeholder="Pergunte sobre qualquer formulacao..."
                    className="flex-1 bg-transparent text-white/80 text-sm placeholder:text-white/30 outline-none"
                    disabled
                  />
                  <button className="w-8 h-8 rounded-lg bg-[#4a9eff] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Floating metrics */}
            <div className="absolute -top-3 -left-3 bg-white rounded-xl px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-[#e5e7eb]">
              <div className="text-2xl font-serif text-[#0C2340]">20.847</div>
              <div className="text-[10px] text-[#64748b] font-bold uppercase tracking-wider">Consultas</div>
            </div>

            <div className="absolute -bottom-3 -right-3 bg-white rounded-xl px-4 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.12)] border border-[#e5e7eb]">
              <div className="text-2xl font-serif text-[#10b981]">-72%</div>
              <div className="text-[10px] text-[#64748b] font-bold uppercase tracking-wider">Retrabalho</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
