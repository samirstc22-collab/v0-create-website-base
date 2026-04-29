import { Quote, TrendingUp } from "lucide-react"

const cases = [
  {
    metric: "+187%",
    label: "Ticket medio",
    duration: "em 6 meses",
    company: "Farmacia Magistral · SP",
    headline: "Saimos da disputa por preco.",
    quote:
      "O Samir reorganizou nosso portfolio em 12 protocolos autorais. Os medicos passaram a pedir nossas formulas pelo nome. Nao competimos mais com farmacia de bairro.",
    person: "Diretora tecnica · 4 unidades",
  },
  {
    metric: "+9",
    label: "Lancamentos",
    duration: "em 90 dias",
    company: "Industria cosmetica · GO",
    headline: "Pipeline destravado.",
    quote:
      "Tinhamos 3 prototipos parados ha mais de um ano. Em 90 dias com a consultoria entregamos 9 lancamentos prontos para escala, com claims defensaveis e racional cientifico.",
    person: "Head de P&D",
  },
  {
    metric: "32%",
    label: "Margem bruta",
    duration: "ganho real",
    company: "Rede de magistrais · MG",
    headline: "Time treinado, operacao previsivel.",
    quote:
      "O treinamento in loco mudou nossa equipe de patamar. Hoje cada manipulador entende o porque de cada concentracao. A consequencia foi natural: ganho de margem de 32%.",
    person: "Socio fundador",
  },
]

export function ConsultoriaResults() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#2dd4bf]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-emerald-300">
            <TrendingUp className="h-3.5 w-3.5" />
            Resultados reais
          </div>

          <h2 className="mt-6 font-serif text-3xl leading-[1.1] tracking-tight text-white md:text-5xl">
            Numeros que saem da{" "}
            <em className="text-[#e8a87c]">conversa para a planilha.</em>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            Tres operacoes reais — magistrais e industria — que aplicaram o metodo. Os nomes ficam
            sob NDA, os numeros sao transparentes.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {cases.map((c, i) => (
            <div
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.01] p-7 transition-all hover:-translate-y-1 hover:border-[#b87333]/30 md:p-8"
            >
              <Quote
                className="absolute -right-2 -top-2 h-24 w-24 text-white/[0.03]"
                strokeWidth={1}
              />

              {/* Metric block */}
              <div className="relative mb-6 flex items-baseline gap-3 border-b border-white/10 pb-6">
                <span className="font-serif text-5xl text-[#e8a87c] md:text-6xl">{c.metric}</span>
                <div>
                  <div className="text-sm font-semibold text-white">{c.label}</div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">
                    {c.duration}
                  </div>
                </div>
              </div>

              <div className="relative mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#2dd4bf]">
                {c.company}
              </div>

              <h3 className="relative font-serif text-xl leading-snug text-white md:text-2xl">
                {c.headline}
              </h3>

              <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-white/70">
                &ldquo;{c.quote}&rdquo;
              </p>

              <div className="relative mt-6 flex items-center gap-3 border-t border-white/8 pt-5">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#b87333] to-[#7a4a20] ring-2 ring-white/10" />
                <span className="text-sm font-medium text-white/80">{c.person}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Inline social proof */}
        <div className="mt-12 flex flex-col items-center justify-center gap-6 rounded-2xl bg-white/[0.03] px-6 py-6 ring-1 ring-white/8 md:flex-row md:gap-12">
          <div className="text-center">
            <div className="font-serif text-3xl text-white md:text-4xl">500+</div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Operacoes atendidas
            </div>
          </div>
          <div className="hidden h-10 w-px bg-white/10 md:block" />
          <div className="text-center">
            <div className="font-serif text-3xl text-white md:text-4xl">98%</div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Renovacao de contrato
            </div>
          </div>
          <div className="hidden h-10 w-px bg-white/10 md:block" />
          <div className="text-center">
            <div className="font-serif text-3xl text-white md:text-4xl">6 anos</div>
            <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
              Em P&D dedicado
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
