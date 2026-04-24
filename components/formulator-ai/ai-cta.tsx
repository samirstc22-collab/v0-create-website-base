import Link from "next/link"
import { ArrowRight, Brain, Shield, Clock } from "lucide-react"

export function AICTA() {
  return (
    <section className="relative bg-[#050a12] py-24 lg:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-gradient-to-r from-[#4a9eff]/10 via-[#8b5cf6]/10 to-[#06b6d4]/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, #4a9eff 1px, transparent 0)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#4a9eff] to-[#8b5cf6] flex items-center justify-center mx-auto mb-8 shadow-[0_0_60px_rgba(74,158,255,0.4)]">
          <Brain className="w-10 h-10 text-white" />
        </div>

        {/* Headline */}
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
          Pronto para transformar
          <br />
          <span className="bg-gradient-to-r from-[#4a9eff] via-[#8b5cf6] to-[#06b6d4] bg-clip-text text-transparent">
            sua formulação?
          </span>
        </h2>

        {/* Subhead */}
        <p className="text-xl text-white/60 max-w-2xl mx-auto mb-10">
          Junte-se a centenas de profissionais que já estão usando inteligência artificial para criar fórmulas melhores, mais rápido.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="#"
            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#4a9eff] to-[#8b5cf6] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_0_50px_rgba(74,158,255,0.5)] transition-all"
          >
            Começar agora — Grátis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contato"
            className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/15 text-white px-10 py-5 rounded-2xl font-semibold text-lg hover:bg-white/10 transition-colors"
          >
            Falar com especialista
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-white/50">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#28c840]" />
            <span>Garantia 7 dias</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#4a9eff]" />
            <span>Setup em 2 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-4 h-4 text-[#8b5cf6]" />
            <span>+20.000 consultas realizadas</span>
          </div>
        </div>
      </div>
    </section>
  )
}
