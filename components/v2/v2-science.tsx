import { BookOpen, FileText, Microscope } from "lucide-react"

export function V2Science() {
  const pillars = [
    {
      icon: Microscope,
      title: "Pesquisa CNPq",
      text: "Bancada ativa na UNICAMP com projetos validados de bioativos aplicados à cosmetologia.",
    },
    {
      icon: FileText,
      title: "Publicação indexada",
      text: "Primeira autoria em artigo peer-reviewed com DOI e protocolos replicáveis internacionalmente.",
    },
    {
      icon: BookOpen,
      title: "Formação contínua",
      text: "Atualização técnica em laboratórios europeus e presença em congressos de cinco continentes.",
    },
  ]

  return (
    <section
      id="ciencia"
      className="relative py-28 md:py-36 bg-[#1a3d2e] text-[#f5f1e8] overflow-hidden"
    >
      {/* Editorial serif ornament */}
      <div className="absolute top-10 left-10 md:top-16 md:left-16 font-serif italic text-[220px] md:text-[320px] leading-none text-[#c9a961]/8 pointer-events-none select-none">
        &ldquo;
      </div>

      <div className="relative max-w-[1360px] mx-auto px-6 md:px-10">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[3px] text-[#c9a961] font-bold mb-6">
            <span className="w-8 h-px bg-[#c9a961]" />
            Ciência, com endereço e DOI
          </div>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.02] tracking-[-0.02em]">
            Entre a bancada e o balcão,{" "}
            <em className="text-[#c9a961]">uma ponte de rigor.</em>
          </h2>
          <p className="mt-7 text-lg text-[#f5f1e8]/75 leading-[1.7]">
            O conhecimento que chega à sua farmácia passa por revisão por pares, estabilidade
            acelerada e estudo aplicado. Nada entra no protocolo sem antes atravessar o crivo
            do método científico.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="relative bg-[#f5f1e8]/5 border border-[#c9a961]/20 rounded-3xl p-8 hover:bg-[#f5f1e8]/8 hover:border-[#c9a961]/50 transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#c9a961] flex items-center justify-center mb-6">
                <Icon className="w-6 h-6 text-[#0f2419]" strokeWidth={2} />
              </div>
              <h3 className="font-serif text-2xl mb-3 text-[#f5f1e8]">{title}</h3>
              <p className="text-[#f5f1e8]/70 leading-[1.7] text-sm md:text-base">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted publication */}
        <div className="mt-14 grid lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 bg-[#f5f1e8] text-[#0f2419] rounded-[32px] p-8 md:p-12 items-center">
          <div className="w-24 h-24 rounded-full bg-[#1a3d2e] text-[#c9a961] flex flex-col items-center justify-center font-serif text-2xl italic leading-tight">
            DOI
            <span className="text-[10px] tracking-[2px] text-[#c9a961]/70 mt-1 not-italic font-sans">
              2025
            </span>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[3px] text-[#1a3d2e]/60 font-bold mb-3">
              Publicação de primeira autoria
            </div>
            <h3 className="font-serif text-2xl md:text-3xl leading-snug mb-3">
              &ldquo;Desenvolvimento e estabilidade de sistema emulsionado com ativo magistral
              em plataforma de liberação modificada&rdquo;
            </h3>
            <p className="text-[#0f2419]/70 text-sm md:text-base leading-[1.7]">
              Revista peer-reviewed internacional indexada · Projeto CNPq-UNICAMP · Protocolo
              replicável em farmácia magistral com controle de estabilidade a 45 °C por 90
              dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
