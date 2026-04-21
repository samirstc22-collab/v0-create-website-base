import { Check } from "lucide-react"

export function DualExpertise() {
  const cards = [
    {
      badge: "Expertise Magistral",
      title: "P&D para Farmácias Magistrais",
      years: "15 anos · 500+ prescrições desenvolvidas",
      desc: "Desenvolvimento de formulações dermatológicas sob medida para farmácias magistrais, com dossiês técnicos completos, laudos de estabilidade e treinamento de equipe.",
      items: [
        "Reformulação de portfólio e bases dermatológicas",
        "Dossiês técnicos com pH, pKa e embalagem",
        "Treinamento de farmacêuticos e prescritores",
        "Auditoria de boas práticas de manipulação",
      ],
    },
    {
      badge: "Expertise Industrial",
      title: "Consultoria para Indústrias",
      years: "20+ indústrias · 40+ marcas lançadas",
      desc: "P&D cosmético grau 1 e 2 para indústrias de insumos, laboratórios de private label e marcas independentes — do briefing ao produto na gôndola.",
      items: [
        "Briefing → formulação → estabilidade → claims",
        "Private label e desenvolvimento de marcas próprias",
        "Compatibilidade embalagem–fórmula",
        "Estudos de estabilidade e eficácia clínica",
      ],
    },
  ]

  return (
    <section id="expertise" className="py-[110px] px-8 bg-gradient-to-b from-navy to-navy-deep relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11.5px] font-bold tracking-[2.5px] uppercase text-copper-light inline-block mb-3.5">
            Dupla Expertise
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4vw,44px)] text-white mb-4 leading-[1.15] tracking-[-0.5px]">
            Magistral & Industrial
          </h2>
          <p className="text-[15px] text-white/50 max-w-[580px] mx-auto leading-[1.7]">
            Duas décadas transitando entre bancada magistral e linha de produção industrial — um
            posicionamento raro que garante formulações robustas em qualquer escala.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(360px,1fr))] gap-7">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white/[0.035] border border-white/[0.08] rounded-[20px] p-[44px_38px] transition-all relative overflow-hidden hover:bg-white/[0.06] hover:translate-y-[-4px] group"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-copper to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="inline-block bg-[rgba(192,133,74,0.15)] text-copper-light text-[10.5px] font-bold py-[5px] px-3 rounded-full tracking-[1.5px] uppercase mb-5">
                {card.badge}
              </div>
              <h3 className="font-serif text-[28px] text-white mb-4 leading-[1.2]">{card.title}</h3>
              <p className="font-serif text-[16px] text-copper-light mb-5 tracking-[0.5px]">
                {card.years}
              </p>
              <p className="text-[14.5px] text-white/[0.58] leading-[1.75] mb-6">{card.desc}</p>
              <div className="flex flex-col gap-3">
                {card.items.map((item, j) => (
                  <div key={j} className="flex gap-3 items-start text-[13.5px] text-white/70 leading-[1.55]">
                    <Check className="w-4 h-4 text-teal-light shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
