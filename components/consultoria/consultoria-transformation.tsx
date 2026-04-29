import { ArrowRight, X, Check } from "lucide-react"

const transformations = [
  {
    before: "Portfolio com 80% das formulas iguais a qualquer concorrente",
    after: "Portfolio autoral com 12 a 18 protocolos exclusivos, com nome e narrativa propria",
  },
  {
    before: "Equipe que nao sabe explicar o racional cientifico de uma formula",
    after: "Time treinado para defender cada concentracao, ativo e mecanismo na frente do prescritor",
  },
  {
    before: "Reuniao com medico termina sem indicacao recorrente",
    after: "Medicos voltam pedindo seu protocolo pelo nome, com pacientes na fila",
  },
  {
    before: "Lancamentos travados ha 6 meses, sem prototipo finalizado",
    after: "Pipeline de 4 a 6 lancamentos por trimestre, com cronograma e responsaveis definidos",
  },
  {
    before: "Margem espremida pela disputa de preco com a farmacia da esquina",
    after: "Ticket medio 2 a 3x maior justificado por entrega tecnica e sensorial superior",
  },
  {
    before: "Voce respondendo duvida tecnica de cliente as 22h, sozinho",
    after: "Sua equipe operando com autonomia e voce focado em estrategia e crescimento",
  },
]

export function ConsultoriaTransformation() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7f1] py-20 md:py-28">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b87333]/25 bg-[#b87333]/8 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#b87333]">
            <ArrowRight className="h-3.5 w-3.5" />
            A transformacao concreta
          </div>

          <h2 className="mt-6 font-serif text-3xl leading-[1.1] tracking-tight text-[#0a1628] md:text-5xl">
            De onde voce esta hoje{" "}
            <em className="text-[#b87333]">para onde sua operacao precisa chegar</em>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#0a1628]/65 md:text-lg">
            Nao e sobre teoria de mercado. E sobre o que muda no dia a dia da sua farmacia, do seu
            time e do seu faturamento depois de 90 dias de trabalho juntos.
          </p>
        </div>

        {/* Before/After matrix */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_rgba(10,22,40,0.08)] ring-1 ring-[#0a1628]/5">
          {/* Headers */}
          <div className="grid grid-cols-1 gap-px bg-[#0a1628]/10 md:grid-cols-[1fr_auto_1fr]">
            <div className="bg-white px-6 py-4 md:px-8">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-red-500">
                <X className="h-3.5 w-3.5" strokeWidth={3} />
                Hoje, sem consultoria
              </div>
            </div>
            <div className="hidden bg-white md:block" />
            <div className="bg-white px-6 py-4 md:px-8">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
                Depois de 90 dias
              </div>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-[#0a1628]/8">
            {transformations.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-1 items-center gap-3 px-6 py-5 md:grid-cols-[1fr_auto_1fr] md:gap-6 md:px-8 md:py-6"
              >
                <p className="text-[15px] leading-relaxed text-[#0a1628]/70 line-through decoration-red-300/60 decoration-1 md:text-base">
                  {row.before}
                </p>

                <div className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#b87333] text-white shadow-[0_4px_14px_rgba(184,115,51,0.4)] md:flex">
                  <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                </div>

                <p className="font-medium text-[15px] leading-relaxed text-[#0a1628] md:text-base">
                  {row.after}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
