import Image from "next/image"
import { Search, ClipboardList, Rocket, LineChart } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico no chão da farmácia",
    text: "Visita presencial ou imersiva, entrevista com a equipe e análise de DRE, mix, vitrines e fluxo de atendimento.",
    highlight: "Nada é decidido antes de entender o seu negócio por dentro.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Plano sob medida",
    text: "Documento exclusivo com ações prioritárias, portfólio reformulado, precificação inteligente e metas reais.",
    highlight: "Feito à mão, não copiado de outro cliente.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Execução conjunta",
    text: "Acompanhamento da implementação com treinamento de equipe, ajustes de protocolos e suporte semanal.",
    highlight: "O Samir e o time ao lado do seu especialista.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Lucratividade medida",
    text: "Indicadores de ticket médio, margem, recompra e satisfação — revisados mês a mês até a estabilização.",
    highlight: "Só é resultado quando aparece no caixa.",
  },
]

export function ConsultoriaMethod() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-40 h-80 w-80 rounded-full bg-[#b87333]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#2dd4bf]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#b87333]/30 bg-[#b87333]/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#b87333]">
              O Método Samir Tannuri
            </div>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-[#0a1628] md:text-5xl lg:text-6xl">
              Quatro passos para transformar{" "}
              <em className="text-[#b87333]">uma farmácia qualquer</em> em uma referência da região.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#0a1628]/70">
              Todo projeto começa pelo <strong>seu caixa</strong>, passa pela <strong>sua equipe</strong> e termina
              em <strong>resultados tangíveis</strong> — com números que fazem sentido para a sua realidade.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="relative aspect-[16/11] overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=700"
                  alt="Samir Tannuri palestrando sobre gestão magistral"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/40 via-transparent to-transparent" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-[#0a1628]/85 p-4 backdrop-blur-sm md:max-w-md">
                <p className="font-serif text-base italic leading-relaxed text-white md:text-lg">
                  "Personalizar é ter coragem de ouvir antes de prescrever."
                </p>
                <div className="mt-2 text-xs font-medium uppercase tracking-wider text-[#e8a87c]">
                  Samir Tannuri
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-2xl border border-[#0a1628]/10 bg-white p-8 transition hover:border-[#b87333]/40 hover:shadow-xl"
            >
              <div className="absolute -right-6 -top-6 font-serif text-[120px] leading-none text-[#0a1628]/[0.04] transition group-hover:text-[#b87333]/10">
                {step.number}
              </div>

              <div className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0a1628] transition group-hover:bg-[#b87333]">
                  <step.icon className="h-6 w-6 text-white" />
                </div>

                <div className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-[#b87333]">
                  Passo {step.number}
                </div>
                <h3 className="mt-2 font-serif text-2xl leading-tight text-[#0a1628] md:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#0a1628]/70">{step.text}</p>

                <div className="mt-6 border-l-2 border-[#b87333] pl-4">
                  <p className="font-serif text-sm italic leading-relaxed text-[#0a1628]">
                    {step.highlight}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
