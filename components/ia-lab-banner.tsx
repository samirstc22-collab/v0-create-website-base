"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { 
  ArrowRight, 
  Brain, 
  FlaskConical, 
  Sparkles, 
  Zap, 
  CheckCircle2,
  X,
  Check,
  Rocket,
  RefreshCw,
  Droplets,
  Target,
  Sliders,
  Mail,
  Loader2
} from "lucide-react"

export function IALabBanner() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeMetric, setActiveMetric] = useState(0)
  
  const metrics = [
    { value: "4.000+", label: "Testes de bancada validados" },
    { value: "10.000+", label: "Perguntas respondidas" },
    { value: "100+", label: "Topicos especializados" },
    { value: "7 dias", label: "Teste gratuito" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric((prev) => (prev + 1) % metrics.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const features = [
    { icon: RefreshCw, text: "Substituo materias-primas sob demanda" },
    { icon: Sliders, text: "Ajusto textura e viscosidade" },
    { icon: Droplets, text: "Melhoro sensorial (toque, espalhabilidade, absorcao)" },
    { icon: Target, text: "Otimizo performance da formula" },
    { icon: Sparkles, text: "Personalizo conforme seu objetivo tecnico" },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#050a12] via-[#0a1628] to-[#0f1e36] py-20 lg:py-28">
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

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
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
        {/* Catchy Phrase - Top Banner */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-[#f59e0b]/20 via-[#f59e0b]/10 to-[#f59e0b]/20 border border-[#f59e0b]/30 rounded-2xl px-8 py-6 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f59e0b]/5 to-transparent animate-pulse" />
            <p className="text-lg md:text-xl lg:text-2xl font-serif italic text-[#fbbf24] leading-relaxed relative z-10">
              {'"'}Farmacotecnica de prateleira e <span className="line-through opacity-60">museu</span>.{'"'}
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-serif text-white mt-2 relative z-10">
              Formulacao inteligente e <span className="text-[#4a9eff] font-bold">futuro</span>.
            </p>
            <p className="text-sm md:text-base text-white/50 mt-3 relative z-10">
              Em terra de IA, quem so copia formula vira rodape.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#4a9eff]/15 to-[#8b5cf6]/15 border border-[#4a9eff]/25 rounded-full px-5 py-2.5 mb-6">
              <Rocket className="w-4 h-4 text-[#4a9eff]" />
              <span className="text-[#7eb8ff] text-xs font-bold tracking-[2px] uppercase">
                Lancamento 2025
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-[-1.5px] mb-4">
              <span className="text-3xl md:text-4xl">🚀</span>{" "}
              <span className="bg-gradient-to-r from-[#4a9eff] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
                STAi Formulator LAB
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-white/80 font-medium mb-6">
              A IA que <span className="text-[#4a9eff]">cria</span>, <span className="text-[#8b5cf6]">ajusta</span> e <span className="text-[#06b6d4]">evolui</span> suas formulas cosmeticas
            </p>

            {/* Description */}
            <p className="text-base md:text-lg text-white/50 leading-relaxed mb-8">
              Chega de formulas prontas limitadas. Agora voce desenvolve do seu jeito — com <strong className="text-white">seguranca</strong> e <strong className="text-white">eficacia</strong>.
            </p>

            {/* What I do for you */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 mb-8">
              <h3 className="text-sm font-bold text-[#4a9eff] uppercase tracking-[2px] mb-5 flex items-center gap-2">
                <Brain className="w-4 h-4" />
                O que eu faco por voce
              </h3>
              <div className="space-y-3">
                {features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-[#4a9eff]/10 border border-[#4a9eff]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <feature.icon className="w-3.5 h-3.5 text-[#4a9eff]" />
                    </div>
                    <span className="text-white/70 text-sm leading-relaxed">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Old vs New */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="bg-[#dc2626]/10 border border-[#dc2626]/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <X className="w-5 h-5 text-[#dc2626]" />
                  <span className="text-xs font-bold text-[#dc2626] uppercase tracking-wider">Antes</span>
                </div>
                <p className="text-sm text-white/60">Comprar bases prontas de prateleira</p>
              </div>
              <div className="bg-[#28c840]/10 border border-[#28c840]/20 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Check className="w-5 h-5 text-[#28c840]" />
                  <span className="text-xs font-bold text-[#28c840] uppercase tracking-wider">Agora</span>
                </div>
                <p className="text-sm text-white/60">Criar formulas sob medida, com controle total</p>
              </div>
            </div>

            {/* CTA to AI page */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/formulator-ai"
                className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-[#4a9eff] to-[#8b5cf6] text-white px-8 py-4 rounded-xl font-bold text-base tracking-wide shadow-[0_8px_32px_rgba(74,158,255,0.35)] hover:shadow-[0_12px_48px_rgba(74,158,255,0.5)] transition-all duration-300"
              >
                <Brain className="w-5 h-5" />
                Acessar STAi Formulator LAB
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right: Email Signup Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Glow behind */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#4a9eff]/25 via-[#8b5cf6]/15 to-transparent rounded-3xl blur-3xl" />

              {/* Main card */}
              <div className="relative bg-[#0a1221]/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-[0_32px_64px_rgba(0,0,0,0.4)]">
                {/* Header */}
                <div className="px-6 py-5 border-b border-white/5 bg-gradient-to-r from-[#28c840]/10 to-[#4a9eff]/10">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#28c840] to-[#4a9eff] flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-base">Teste Gratis por 7 Dias</div>
                      <div className="text-[11px] text-white/40">Sem cartao de credito</div>
                    </div>
                  </div>
                </div>

                {/* Metrics rotating display */}
                <div className="p-6 border-b border-white/5">
                  <div className="text-center">
                    <div className="text-5xl font-serif text-white mb-2 tabular-nums transition-all duration-500">
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

                {/* Email signup form */}
                <div className="p-6">
                  {!isSubmitted ? (
                    <>
                      <p className="text-center text-white/60 text-sm mb-5">
                        <strong className="text-white">Voce pede. Eu reformulo.</strong><br />
                        Tenha sua base personalizada em minutos.
                      </p>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Seu melhor e-mail"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-[#4a9eff]/50 focus:ring-2 focus:ring-[#4a9eff]/20 transition-all"
                          />
                        </div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-[#28c840] to-[#4a9eff] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(40,200,64,0.3)] hover:shadow-[0_12px_32px_rgba(40,200,64,0.4)] transition-all disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Processando...
                            </>
                          ) : (
                            <>
                              <Rocket className="w-5 h-5" />
                              Quero testar gratis
                            </>
                          )}
                        </button>
                      </form>
                      <p className="text-center text-[11px] text-white/30 mt-4">
                        Ao se inscrever, voce concorda em receber emails sobre o STAi.
                      </p>
                    </>
                  ) : (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#28c840] to-[#4a9eff] flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Inscricao confirmada!</h3>
                      <p className="text-white/60 text-sm">
                        Voce recebera acesso ao teste gratuito em breve.
                      </p>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gradient-to-r from-[#4a9eff]/5 to-[#8b5cf6]/5 border-t border-white/5">
                  <div className="flex items-center justify-center gap-4 text-[11px] text-white/40">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#28c840]" />
                      <span>Acesso imediato</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#28c840]" />
                      <span>Cancele quando quiser</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent badges */}
              <div className="absolute -top-3 -right-3 bg-[#0a1221] border border-[#28c840]/40 rounded-xl px-3 py-2 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#28c840] animate-pulse" />
                  <span className="text-[11px] font-bold text-[#28c840]">Gratuito</span>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-3 bg-[#0a1221] border border-[#f59e0b]/40 rounded-xl px-3 py-2 shadow-xl">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span className="text-[11px] font-bold text-[#f59e0b]">Nova Era</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
