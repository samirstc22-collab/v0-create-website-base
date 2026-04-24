import { ArrowRight, Bell, Mail } from "lucide-react"
import Link from "next/link"

export function MissoesCTA() {
  return (
    <section className="py-28 px-6 lg:px-10 bg-[#fafbfc]">
      <div className="max-w-[900px] mx-auto text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 bg-[#B8783D]/10 border border-[#B8783D]/20 rounded-full px-4 py-2 mb-6">
          <Bell className="w-4 h-4 text-[#B8783D]" />
          <span className="text-xs font-bold tracking-[2px] uppercase text-[#B8783D]">
            Proximas Missoes
          </span>
        </div>

        <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#0C2340] mb-6 leading-[1.1]">
          Fique por dentro das{" "}
          <span className="text-[#B8783D]">proximas imersoes</span>
        </h2>

        <p className="text-lg text-[#64748b] leading-relaxed mb-10 max-w-2xl mx-auto">
          As missoes sao anunciadas com antecedencia limitada e as vagas esgotam rapido.
          Entre em contato para ser notificado sobre as proximas oportunidades.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="https://wa.me/5511981403000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-[#B8783D] to-[#8a5729] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-[0_8px_32px_rgba(184,120,61,0.35)] hover:translate-y-[-2px] hover:shadow-[0_12px_40px_rgba(184,120,61,0.45)] transition-all"
          >
            Reservar Vaga 2025
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 bg-[#0C2340] text-white px-8 py-4 rounded-xl font-bold text-sm tracking-wide hover:bg-[#1a3a5c] transition-all"
          >
            <Mail className="w-4 h-4" />
            Receber Avisos
          </Link>
        </div>

        {/* Next Mission Preview */}
        <div className="bg-white rounded-2xl border border-[#0C2340]/10 p-8 shadow-[0_8px_32px_rgba(12,35,64,0.06)]">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0055A4] via-white/20 to-[#EF4135] flex items-center justify-center">
              <span className="font-serif text-3xl text-white drop-shadow-lg">FR</span>
            </div>
            <div className="flex-1 text-left">
              <div className="text-xs font-bold tracking-[2px] uppercase text-[#B8783D] mb-1">
                Abril 2025
              </div>
              <h3 className="font-serif text-2xl text-[#0C2340] mb-1">In-Cosmetics Global 2025</h3>
              <p className="text-sm text-[#64748b]">Paris, Franca · 4 vagas restantes</p>
            </div>
            <a
              href="https://wa.me/5511981403000"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 bg-[#0C2340] text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-[#1a3a5c] transition-all"
            >
              Quero Participar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
