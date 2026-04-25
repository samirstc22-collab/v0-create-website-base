"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { 
  ArrowRight, 
  Brain, 
  FlaskConical, 
  Database, 
  BookOpen, 
  Sparkles, 
  Zap, 
  CheckCircle2,
  Globe,
  Beaker
} from "lucide-react"

export function IALabBanner() {
  const [activeMetric, setActiveMetric] = useState(0)
  
  const metrics = [
    { value: "4.000+", label: "Testes de bancada validados" },
    { value: "10.000+", label: "Perguntas respondidas" },
    { value: "100+", label: "Topicos especializados" },
    { value: "97.8%", label: "Precisao em formulacoes" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const features = [
    { 
      icon: Database, 
      title: "PubMed Integrado", 
      description: "Busca em tempo real de artigos cientificos" 
    },
    { 
      icon: FlaskConical, 
      title: "4.000 Testes", 
      description: "IA treinada com bancada real validada" 
    },
    { 
      icon: BookOpen, 
      title: "100+ Topicos", 
      description: "Dermatologia, cosmetologia e farmacia" 
    },
    { 
      icon: Sparkles, 
      title: "Formula Pioneer", 
      description: "Criacao baseada em testes validados" 
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050a12] via-[#0a1628] to-[#0f1e36] py-24 lg:py-32">
      {/* Animated background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Neural grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #4a9eff 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
        
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#4a9eff]/10 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8b5cf6]/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#06b6d4]/5 rounded-full blur-[180px]" />

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#4a9eff]/50 rounded-full animate-pulse"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4a9eff]/15 to-[#8b5cf6]/15 border border-[#4a9eff]/25 rounded-full px-5 py-2.5 mb-8">
              <div className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4a9eff] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#4a9eff]" />
              </div>
              <span className="text-[#7eb8ff] text-xs font-bold tracking-[2.5px] uppercase">
                Inteligencia Artificial Avancada
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-[-1.5px] mb-6">
              Conheca o{" "}
              <span className="relative">
                <span className="bg-gradient-to-r from-[#4a9eff] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                  iA Lab
                </span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#4a9eff] via-[#8b5cf6] to-[#06b6d4] rounded-full opacity-50" />
              </span>
              <br />
              <span className="text-white/90">O sistema de IA mais avancado.</span>
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-8 max-w-2xl">
              Treinado com{" "}
              <strong className="text-white">4.000 testes de bancada validados</strong> e capaz de responder{" "}
              <strong className="text-white">mais de 10.000 perguntas</strong> criadas por uma equipe humana altamente qualificada. 
              Integracao em tempo real com{" "}
              <strong className="text-[#4a9eff]">PubMed</strong> e base de dados exclusiva com{" "}
              <strong className="text-white">100+ topicos especializados</strong> em dermatologia, cosmetologia e farmaceutica.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 mb-10">
              {[
                "Pioneiro em criacao de formulas",
                "Testes validados em bancada",
                "Equipe cientifica dedicada",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                  <CheckCircle2 className="w-4 h-4 text-[#28c840]" />
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/formulator-ai"
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#4a9eff] to-[#8b5cf6] text-white px-8 py-4 rounded-xl font-bold text-base tracking-wide shadow-[0_8px_32px_rgba(74,158,255,0.35)] hover:shadow-[0_12px_48px_rgba(74,158,255,0.5)] transition-all duration-300"
              >
                <Brain className="w-5 h-5" />
                Experimentar iA Lab
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://wa.me/5511981403000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/15 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/10 hover:border-white/25 transition-all"
              >
                <Globe className="w-5 h-5" />
                Falar com especialista
              </Link>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4a9eff]/25 via-[#8b5cf6]/15 to-transparent rounded-3xl blur-3xl" />

              {/* Main card */}
              <div className="relative bg-[#0a1221]/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.4)]">
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-gradient-to-r from-[#4a9eff]/5 to-[#8b5cf6]/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4a9eff] to-[#8b5cf6] flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-sm">iA Lab</div>
                      <div className="text-[10px] text-white/40 font-mono">v3.2 · Advanced AI System</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#28c840] animate-pulse" />
                    <span className="text-[10px] text-[#28c840] font-bold tracking-wider uppercase">Online</span>
                  </div>
                </div>

                {/* Metrics rotating display */}
                <div className="p-6 border-b border-white/5">
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-serif text-white mb-2 tabular-nums transition-all duration-500">
                      {metrics[activeMetric].value}
                    </div>
                    <div className="text-sm text-white/50 font-medium">
                      {metrics[activeMetric].label}
                    </div>
                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-4">
                      {metrics.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveMetric(i)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            i === activeMetric 
                              ? "bg-[#4a9eff] w-6" 
                              : "bg-white/20 hover:bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features grid */}
                <div className="p-6 grid grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div
                      key={feature.title}
                      className="group bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-[#4a9eff]/20 rounded-xl p-4 transition-all"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#4a9eff]/10 border border-[#4a9eff]/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        <feature.icon className="w-4 h-4 text-[#4a9eff]" />
                      </div>
                      <div className="text-xs font-bold text-white mb-0.5">{feature.title}</div>
                      <div className="text-[10px] text-white/40 leading-tight">{feature.description}</div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gradient-to-r from-[#4a9eff]/5 to-[#8b5cf6]/5 border-t border-white/5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Beaker className="w-4 h-4 text-[#8b5cf6]" />
                      <span className="text-[11px] text-white/50">Base cientifica exclusiva</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-[#f59e0b]" />
                      <span className="text-[11px] text-white/50">Respostas em tempo real</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent badges */}
              <div className="absolute -top-3 -right-3 bg-[#0a1221] border border-[#28c840]/40 rounded-xl px-3 py-2 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#28c840] animate-pulse" />
                  <span className="text-[11px] font-bold text-[#28c840]">Confiavel</span>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-[#0a1221] border border-[#f59e0b]/40 rounded-xl px-3 py-2 shadow-xl">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span className="text-[11px] font-bold text-[#f59e0b]">Inovador</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
