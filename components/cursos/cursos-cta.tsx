import Link from "next/link"
import { ArrowRight, Shield, Clock, RefreshCw, PlayCircle, BookOpen, MessageCircle } from "lucide-react"

export function CursosCTA() {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantia de 7 dias",
      detail: "Teste sem risco — se não for pra você, devolvemos 100%.",
    },
    {
      icon: Clock,
      title: "Gravado por 12 meses",
      detail: "Curso fica disponível por 12 meses — assista quantas vezes quiser, no seu ritmo.",
    },
    {
      icon: RefreshCw,
      title: "Atualizações contínuas",
      detail: "Novas aulas sempre que a ciência avançar — sem custo extra.",
    },
  ]

  const courseBenefits = [
    {
      icon: PlayCircle,
      label: "Curso gravado disponível por 12 meses",
    },
    {
      icon: BookOpen,
      label: "Apostila de apoio inclusa em cada módulo",
    },
    {
      icon: MessageCircle,
      label: "Dúvidas com o professor via tutoria",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#b87333] via-[#d89560] to-[#e8a87c] py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern id="grid-cta" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-cta)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/15 px-4 py-1.5 backdrop-blur">
            <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-white">
              Sua decisão hoje
            </span>
          </div>
          <h2 className="mt-6 font-serif text-4xl leading-[1.03] tracking-[-0.02em] text-white md:text-6xl lg:text-7xl">
            Daqui a um ano, você vai desejar{" "}
            <em className="italic">ter começado hoje.</em>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-[1.7] text-white/90 md:text-xl">
            Enquanto o seu concorrente decide se vale a pena estudar, você pode estar há 365 dias
            formulando melhor, vendendo melhor e cobrando pelo que realmente entrega. O método está
            pronto. A bancada está montada. Falta apenas a sua matrícula.
          </p>
        </div>

        {/* Bullets de benefícios do curso */}
        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4">
          {courseBenefits.map((b) => {
            const Icon = b.icon
            return (
              <div
                key={b.label}
                className="flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-5 py-2.5 backdrop-blur"
              >
                <Icon className="h-4 w-4 flex-shrink-0 text-white" />
                <span className="text-sm font-semibold text-white">{b.label}</span>
              </div>
            )
          })}
        </div>

        {/* Guarantees */}
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
          {guarantees.map((g) => {
            const Icon = g.icon
            return (
              <div
                key={g.title}
                className="rounded-2xl border border-white/30 bg-white/10 p-6 backdrop-blur"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/40 bg-white/20">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="mt-4 font-serif text-xl text-white">{g.title}</div>
                <p className="mt-1.5 text-sm leading-relaxed text-white/80">{g.detail}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-4">
          <Link
            href="/contato"
            className="group inline-flex items-center gap-2 rounded-xl bg-[#0a1628] px-10 py-4 text-base font-bold text-white shadow-[0_12px_40px_rgba(10,22,40,0.35)] transition-all hover:-translate-y-0.5 hover:bg-[#0d1d35]"
          >
            Falar com a equipe agora
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/consultoria"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-white/50 bg-white/5 px-10 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all hover:border-white hover:bg-white/15"
          >
            Conhecer a consultoria
          </Link>
        </div>
      </div>
    </section>
  )
}
