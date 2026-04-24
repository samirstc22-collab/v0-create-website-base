import Image from "next/image"

export function V2Method() {
  const steps = [
    {
      n: "I",
      title: "Imersão de campo",
      text: "Visita presencial à farmácia. Escuta da equipe, leitura do fluxo, análise de mix e caixa real.",
    },
    {
      n: "II",
      title: "Diagnóstico autoral",
      text: "Relatório técnico-estratégico com pontos cegos, oportunidades e projeção de lucratividade.",
    },
    {
      n: "III",
      title: "Plano sob medida",
      text: "Protocolos, vitrine, mix, precificação e treinamento desenhados para o seu bairro e público.",
    },
    {
      n: "IV",
      title: "Execução a quatro mãos",
      text: "Acompanhamento mensal, correção de rota e indicadores revisados até o resultado comprovado.",
    },
  ]

  return (
    <section
      id="metodo"
      className="relative py-28 md:py-36 bg-[#f5f1e8] overflow-hidden"
    >
      {/* Decorative border frame */}
      <div className="absolute inset-8 border border-[#1a3d2e]/8 rounded-[40px] pointer-events-none" />

      <div className="relative max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Quote column */}
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[3px] text-[#1a3d2e] font-bold mb-6">
              <span className="w-8 h-px bg-[#c9a961]" />
              O método autoral
            </div>
            <h2 className="font-serif text-5xl md:text-6xl text-[#0f2419] leading-[1.02] tracking-[-0.02em]">
              Nenhuma farmácia é igual.
              <br />
              <em className="text-[#1a3d2e]">Nenhuma consultoria deveria ser.</em>
            </h2>

            <div className="relative mt-10 p-8 bg-[#1a3d2e] rounded-3xl text-[#f5f1e8]">
              <svg
                className="absolute -top-5 left-8 w-10 h-10 text-[#c9a961]"
                viewBox="0 0 48 48"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M14 14h8l-4 8v12h-12v-12l8-8zm20 0h8l-4 8v12h-12v-12l8-8z" />
              </svg>
              <p className="font-serif text-xl md:text-2xl leading-[1.45] italic">
                Eu não entrego relatórios de gaveta. Eu entrego uma farmácia diferente da
                que encontrei — com{" "}
                <span className="text-[#c9a961]">ciência no balcão</span> e{" "}
                <span className="text-[#c9a961]">lucro no caixa</span>.
              </p>
              <div className="mt-6 text-sm text-[#f5f1e8]/65 tracking-wide">
                — Samir Tannuri
              </div>
            </div>

            {/* Photo accent */}
            <div className="mt-8 relative h-64 rounded-3xl overflow-hidden border border-[#1a3d2e]/15">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Samir Tannuri em palestra"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2419]/70 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-[#f5f1e8]">
                <div className="text-[10px] uppercase tracking-[2.5px] text-[#c9a961] font-bold">
                  Palco · 20º In-Cosmetics
                </div>
                <div className="font-serif text-lg mt-1">Paixão por ensinar</div>
              </div>
            </div>
          </div>

          {/* Steps column */}
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="group relative bg-white border border-[#1a3d2e]/10 rounded-3xl p-8 md:p-10 hover:border-[#c9a961] hover:shadow-[0_20px_60px_rgba(15,36,25,0.08)] transition-all"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#1a3d2e] text-[#c9a961] flex items-center justify-center font-serif text-2xl italic">
                    {s.n}
                  </div>
                  <div className="flex-1">
                    <div className="text-[10px] uppercase tracking-[2.5px] text-[#1a3d2e]/55 font-bold mb-2">
                      Etapa {i + 1} de {steps.length}
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl text-[#0f2419] mb-3">
                      {s.title}
                    </h3>
                    <p className="text-[#0f2419]/70 leading-[1.7]">{s.text}</p>
                  </div>
                </div>
                {/* Connecting line */}
                {i < steps.length - 1 && (
                  <div className="absolute -bottom-6 left-14 w-px h-6 bg-gradient-to-b from-[#c9a961] to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
