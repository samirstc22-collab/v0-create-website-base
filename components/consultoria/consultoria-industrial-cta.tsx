import Link from "next/link"
import { ArrowRight, Sparkles, Check } from "lucide-react"

export function ConsultoriaIndustrialCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#0C2340] via-[#0d2d4d] to-[#0a1628]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0db5c8]/20 border border-[#0db5c8]/30 text-[#5eead4] text-xs font-bold uppercase tracking-[2px] mb-6">
          <Sparkles className="w-4 h-4" />
          Proximo Passo
        </span>
        
        <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-6">
          Pronto para inovar em <em className="text-[#5eead4]">P&D</em>?
        </h2>
        
        <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
          Solicite uma proposta tecnica e descubra como desenvolver produtos com sensorial premium e claims defensaveis.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["Benchmarking de mercado", "Prototipo com racional cientifico", "Suporte ao scale-up"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-white/80">
              <Check className="w-5 h-5 text-emerald-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <Link
          href="/contato"
          className="inline-flex items-center gap-3 bg-gradient-to-r from-[#0db5c8] to-[#5eead4] text-[#0C2340] px-10 py-5 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-[0_8px_30px_rgba(13,181,200,0.4)]"
        >
          <Sparkles className="w-6 h-6" />
          Solicitar Proposta Tecnica
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  )
}
