import { Check, Sparkles, Crown, Rocket } from "lucide-react"

const tiers = [
  {
    icon: Sparkles,
    badge: "Entrada",
    name: "Diagnostico Tecnico",
    duration: "1 sessao + relatorio",
    price: "Sob consulta",
    accent: false,
    headline: "Para quem precisa de clareza antes de investir mais.",
    deliverables: [
      "Analise completa do portfolio atual (ativos, concentracoes, claims)",
      "Mapeamento de 5 a 8 oportunidades de diferenciacao tecnica",
      "Relatorio estrategico em PDF com prioridades e prazos",
      "Roteiro de proximos 90 dias para a operacao",
      "1 sessao de 90 min de leitura conjunta do diagnostico",
    ],
  },
  {
    icon: Crown,
    badge: "Mais procurado",
    name: "Mentoria Premium",
    duration: "3 meses · 4 sessoes intensivas",
    price: "A partir de R$ 12.000",
    accent: true,
    headline: "Acompanhamento individual com plano de execucao mensal.",
    deliverables: [
      "Diagnostico completo (incluso)",
      "4 sessoes intensivas de 2h, focadas em P&D, posicionamento e operacao",
      "Plano mensal continuado com metas, KPIs e cronograma de lancamentos",
      "Acesso direto via WhatsApp para duvidas tecnicas em tempo real",
      "Revisao tecnica de ate 8 formulas autorais por mes",
      "Templates de protocolos clinicos prontos para personalizar",
      "Materiais de marketing tecnico (rationale para prescritor)",
    ],
  },
  {
    icon: Rocket,
    badge: "Operacao completa",
    name: "Consultoria 360",
    duration: "6 a 12 meses · Time integrado",
    price: "Sob proposta",
    accent: false,
    headline: "Quando a meta e transformar a operacao de ponta a ponta.",
    deliverables: [
      "Mentoria Premium (incluso)",
      "Reformulacao completa do portfolio (15 a 30 protocolos autorais)",
      "Treinamento In Loco da equipe tecnica e comercial",
      "Implementacao de SOPs (procedimentos operacionais padrao)",
      "Acompanhamento de cada lancamento, do conceito ao prescritor",
      "Sourcing internacional de ativos e materias-primas premium",
      "Reuniao quinzenal de governanca com a diretoria",
    ],
  },
]

export function ConsultoriaDeliverables() {
  return (
    <section
      id="consultoria-tiers"
      className="relative overflow-hidden bg-[#0a1628] py-20 md:py-28"
    >
      {/* Decorative */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-[#b87333]/8 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#2dd4bf]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b87333]/30 bg-[#b87333]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8a87c]">
            <Crown className="h-3.5 w-3.5" />
            Modalidades de consultoria
          </div>

          <h2 className="mt-6 font-serif text-3xl leading-[1.1] tracking-tight text-white md:text-5xl">
            Tres caminhos.{" "}
            <em className="text-[#e8a87c]">Um diagnostico unico para voce.</em>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
            Cada operacao tem um momento. O caminho ideal e definido na conversa de diagnostico —
            sem upsell e sem empurrar pacote.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier) => {
            const Icon = tier.icon
            return (
              <div
                key={tier.name}
                className={`relative flex flex-col overflow-hidden rounded-3xl p-7 md:p-8 ${
                  tier.accent
                    ? "border-2 border-[#b87333]/60 bg-gradient-to-br from-[#b87333]/15 via-[#0a1628] to-[#0a1628] shadow-[0_30px_80px_rgba(184,115,51,0.25)]"
                    : "border border-white/10 bg-white/[0.03]"
                }`}
              >
                {tier.accent && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-lg bg-[#b87333] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white">
                    {tier.badge}
                  </div>
                )}

                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      tier.accent
                        ? "bg-[#b87333] text-white"
                        : "bg-white/8 text-[#e8a87c] ring-1 ring-white/10"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  {!tier.accent && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/50">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl leading-tight text-white md:text-[28px]">
                  {tier.name}
                </h3>

                <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#e8a87c]/85">
                  {tier.duration}
                </p>

                <p className="mt-4 text-base leading-relaxed text-white/70">{tier.headline}</p>

                <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

                <ul className="space-y-3 text-sm">
                  {tier.deliverables.map((item, i) => (
                    <li key={i} className="flex gap-3 text-white/80">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          tier.accent ? "text-[#e8a87c]" : "text-[#2dd4bf]"
                        }`}
                        strokeWidth={2.5}
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <div className="mb-4 flex items-baseline gap-2">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/50">
                      Investimento
                    </span>
                    <span
                      className={`text-base font-semibold ${
                        tier.accent ? "text-[#e8a87c]" : "text-white"
                      }`}
                    >
                      {tier.price}
                    </span>
                  </div>

                  <a
                    href="#consultoria-lead"
                    className={`block rounded-xl px-6 py-3.5 text-center text-sm font-bold transition-all ${
                      tier.accent
                        ? "bg-[#b87333] text-white shadow-[0_10px_30px_rgba(184,115,51,0.4)] hover:bg-[#c98a4b]"
                        : "bg-white/8 text-white ring-1 ring-white/15 hover:bg-white/12"
                    }`}
                  >
                    Quero esse caminho
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
