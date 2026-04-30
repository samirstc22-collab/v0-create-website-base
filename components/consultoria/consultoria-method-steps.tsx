import { Search, Compass, FlaskConical, LineChart } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnostico tecnico",
    duration: "Semana 1",
    desc: "Mergulho profundo no portfolio, processos, equipe e claims. Identificamos os 5 pontos criticos que travam o crescimento da operacao.",
    deliverable: "Relatorio executivo com prioridades",
  },
  {
    number: "02",
    icon: Compass,
    title: "Estrategia sob medida",
    duration: "Semanas 2 e 3",
    desc: "Construimos o plano com voce: portfolio autoral, narrativa tecnica, posicionamento por publico e cronograma de lancamentos do trimestre.",
    deliverable: "Plano de 90 dias com KPIs",
  },
  {
    number: "03",
    icon: FlaskConical,
    title: "Execucao com bancada",
    duration: "Semanas 4 a 10",
    desc: "Hands-on no laboratorio: prototipagem, ajustes sensoriais, validacao tecnica e treinamento da equipe em paralelo. Cada formula sai com racional documentado.",
    deliverable: "Protocolos prontos para prescritor",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Acompanhamento e escala",
    duration: "Continuado",
    desc: "Reunioes mensais de governanca para revisar resultados, ajustar a rota e planejar os proximos lancamentos. Voce nunca fica sozinho com a estrategia.",
    deliverable: "Operacao previsivel e escalavel",
  },
]

export function ConsultoriaMethodSteps() {
  return (
    <section className="relative overflow-hidden bg-[#fbf7f1] py-20 md:py-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0a1628]/15 bg-[#0a1628]/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#0a1628]">
            <Compass className="h-3.5 w-3.5" />
            Como trabalhamos
          </div>

          <h2 className="mt-6 font-serif text-3xl leading-[1.1] tracking-tight text-[#0a1628] md:text-5xl">
            Um metodo testado em{" "}
            <em className="text-[#b87333]">mais de 500 operacoes.</em>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#0a1628]/65 md:text-lg">
            Nada de promessas vazias. Uma sequencia de 4 etapas com entregaveis concretos em cada
            fase — voce sempre sabe onde esta no processo.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line on desktop */}
          <div
            aria-hidden
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#b87333]/30 to-transparent lg:block"
          />

          <div className="space-y-6 lg:space-y-12">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isOdd = i % 2 === 0
              return (
                <div
                  key={step.number}
                  className={`grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center ${
                    isOdd ? "" : "lg:[&>*:first-child]:order-3"
                  }`}
                >
                  {/* Card */}
                  <div
                    className={`relative rounded-3xl bg-white p-7 shadow-[0_20px_50px_rgba(10,22,40,0.06)] ring-1 ring-[#0a1628]/5 md:p-8 ${
                      isOdd ? "lg:text-right" : ""
                    }`}
                  >
                    <div
                      className={`mb-4 flex items-center gap-3 ${
                        isOdd ? "lg:justify-end" : ""
                      }`}
                    >
                      <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b87333]">
                        {step.duration}
                      </span>
                      <span className="h-px w-8 bg-[#b87333]/30" />
                    </div>

                    <h3 className="font-serif text-2xl leading-tight text-[#0a1628] md:text-[28px]">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-relaxed text-[#0a1628]/70">
                      {step.desc}
                    </p>

                    <div
                      className={`mt-5 inline-flex items-center gap-2 rounded-full bg-[#0a1628] px-4 py-2 text-xs font-semibold text-white ${
                        isOdd ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e8a87c]" />
                      Entregavel: {step.deliverable}
                    </div>
                  </div>

                  {/* Center node (desktop) */}
                  <div className="relative hidden h-20 w-20 shrink-0 items-center justify-center lg:flex">
                    <div className="absolute inset-0 rounded-full bg-[#b87333]/10" />
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#0a1628] text-white shadow-[0_10px_30px_rgba(10,22,40,0.25)]">
                      <Icon className="h-6 w-6 text-[#e8a87c]" strokeWidth={1.8} />
                    </div>
                  </div>

                  {/* Number */}
                  <div className={`hidden lg:block ${isOdd ? "lg:order-3" : ""}`}>
                    <div
                      className={`font-serif text-7xl text-[#0a1628]/10 md:text-8xl ${
                        isOdd ? "" : "lg:text-right"
                      }`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Mobile node */}
                  <div className="flex items-center gap-3 lg:hidden">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a1628] text-white">
                      <Icon className="h-5 w-5 text-[#e8a87c]" strokeWidth={1.8} />
                    </div>
                    <span className="font-serif text-3xl text-[#0a1628]/30">{step.number}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
