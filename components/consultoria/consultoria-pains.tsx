import {
  TrendingDown,
  Hourglass,
  Search,
  Repeat,
  AlertTriangle,
  PackageX,
} from "lucide-react"

const pains = [
  {
    icon: TrendingDown,
    title: "Disputa por preco",
    desc: "Sua farmacia compete em centavos porque o portfolio nao tem nada que o concorrente da rua nao copie em uma semana.",
  },
  {
    icon: Repeat,
    title: "Formulas geneeicas",
    desc: "Voce vende as mesmas formulas que aparecem em qualquer site, sem narrativa tecnica que justifique seu preco.",
  },
  {
    icon: Search,
    title: "Falta racional cientifico",
    desc: "Quando o medico pergunta 'por que essa concentracao?' voce nao tem uma resposta tecnica solida — e perde a indicacao.",
  },
  {
    icon: Hourglass,
    title: "P&D parado ha meses",
    desc: "Tem ideias na gaveta, prototipos pela metade e nenhum lancamento concreto entrando em prateleira em 2026.",
  },
  {
    icon: AlertTriangle,
    title: "Time sem direcao tecnica",
    desc: "Sua equipe manipula bem, mas ninguem domina a parte cientifica que vira diferencial competitivo de verdade.",
  },
  {
    icon: PackageX,
    title: "Ticket medio estagnado",
    desc: "O faturamento nao cresce porque seus clientes pedem o mesmo de sempre — e voce nao tem o que oferecer alem disso.",
  },
]

export function ConsultoriaPains() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-20 md:py-28">
      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#b87333]/5 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-red-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-400/25 bg-red-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-red-300">
            <AlertTriangle className="h-3.5 w-3.5" />
            Diagnostico de operacao
          </div>

          <h2 className="mt-6 font-serif text-3xl leading-[1.1] tracking-tight text-white md:text-5xl">
            Voce se identifica com{" "}
            <em className="text-[#e8a87c]">pelo menos 3 desses sintomas?</em>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            Sao os mesmos pontos criticos que aparecem em 90% das operacoes que chegam aqui. Se voce
            marcar 3 ou mais, sua consultoria precisa comecar essa semana.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain) => {
            const Icon = pain.icon
            return (
              <div
                key={pain.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:-translate-y-1 hover:border-[#b87333]/40 hover:bg-white/[0.05]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-300 ring-1 ring-red-400/20 transition-colors group-hover:bg-[#b87333]/15 group-hover:text-[#e8a87c] group-hover:ring-[#b87333]/30">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <h3 className="mb-2.5 font-semibold text-white text-[17px] leading-snug">
                  {pain.title}
                </h3>

                <p className="text-sm leading-relaxed text-white/65">{pain.desc}</p>

                {/* Underline accent */}
                <span className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-[#b87333]/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            )
          })}
        </div>

        {/* CTA strip */}
        <div className="mt-12 flex flex-col items-center gap-4 rounded-2xl border border-[#b87333]/20 bg-gradient-to-br from-[#b87333]/10 to-transparent p-6 text-center md:flex-row md:justify-between md:text-left">
          <p className="font-serif text-lg leading-snug text-white md:text-xl">
            Marcou 3 ou mais? <em className="text-[#e8a87c]">Esse diagnostico e gratuito.</em>
          </p>
          <a
            href="#consultoria-lead"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#b87333] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_24px_rgba(184,115,51,0.4)] transition-all hover:bg-[#c98a4b] hover:shadow-[0_12px_32px_rgba(184,115,51,0.5)]"
          >
            Receber meu diagnostico
            <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
