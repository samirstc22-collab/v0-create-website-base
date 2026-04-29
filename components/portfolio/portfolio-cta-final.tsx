import Link from "next/link"
import { ArrowRight, MessageCircle, ShieldCheck, Clock, Lock } from "lucide-react"

export function PortfolioCtaFinal() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-24 md:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#b87333]/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#0096B4]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6 text-center lg:px-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#e8a87c]/30 bg-[#e8a87c]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[2.5px] text-[#e8a87c]">
          <MessageCircle className="h-3.5 w-3.5" />
          Briefing técnico · Sem compromisso
        </div>

        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-5xl lg:text-[58px] text-balance">
          Sua próxima fórmula pode estar entre as próximas{" "}
          <em className="text-[#e8a87c]">vinte.</em>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
          Indústria, magistral ou marca própria — se você precisa de um produto que
          <strong className="text-white"> diferencie tecnicamente</strong> e chegue ao mercado com
          claims defensáveis, vamos conversar. Eu reservo até três briefings novos por mês.
        </p>

        {/* Benefits */}
        <div className="mx-auto mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
          {[
            { icon: ShieldCheck, label: "NDA antes de qualquer detalhe" },
            { icon: Clock, label: "Resposta técnica em até 48h" },
            { icon: Lock, label: "Confidencialidade total" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-left text-sm text-white/80"
            >
              <Icon className="h-4 w-4 shrink-0 text-[#e8a87c]" />
              <span>{label}</span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contato"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-[#B8783D] to-[#8a5729] px-9 py-5 text-base font-bold text-white shadow-[0_15px_40px_-15px_rgba(184,120,61,0.7)] transition-all hover:-translate-y-0.5"
          >
            Solicitar briefing técnico
            <span className="ml-1 flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
              <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
          <Link
            href="https://wa.me/5511981403000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/[0.04] px-7 py-5 text-base font-semibold text-white backdrop-blur transition-all hover:border-white/40 hover:bg-white/10"
          >
            <MessageCircle className="h-4 w-4" />
            Conversar no WhatsApp
          </Link>
        </div>

        <p className="mt-6 text-xs uppercase tracking-[2px] text-white/40">
          Campinas — SP · Atendimento nacional &amp; internacional
        </p>
      </div>
    </section>
  )
}
