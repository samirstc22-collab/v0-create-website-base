import Link from "next/link"
import { ArrowRight, Sparkles, Check } from "lucide-react"

export function ConsultoriaMagistralCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#0C2340] via-[#0d2d4d] to-[#0a1628]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#B8783D]/20 border border-[#B8783D]/30 text-[#d4a574] text-xs font-bold uppercase tracking-[2px] mb-6">
          <Sparkles className="w-4 h-4" />
          Proximo Passo
        </span>
        
        <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-6">
          Pronto para transformar sua <em className="text-[#B8783D]">farmacia</em>?
        </h2>
        
        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Agende um diagnostico tecnico personalizado e descubra como criar um portfolio que prescritores vao pedir pelo nome.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["Analise do seu portfolio atual", "Identificacao de oportunidades", "Plano de acao personalizado"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/80">
              <Check className="w-5 h-5 text-emerald-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <Link
          href="/contato"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#B8783D] to-[#d4a574] text-white px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-[0_8px_30px_rgba(184,120,61,0.4)]"
        >
          <Sparkles className="w-6 h-6" />
          Solicitar Diagnostico Tecnico
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
