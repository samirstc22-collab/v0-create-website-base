import { Check } from "lucide-react"
import { HexagonPattern, CircuitPattern } from "./illustrations"

export function DualExpertise() {
  const cards = [
    {
      badge: "Expertise Magistral",
      title: "P&D para Farmacias Magistrais",
      years: "15 anos | 500+ prescricoes desenvolvidas",
      desc: "Desenvolvimento de formulacoes dermatologicas sob medida para farmacias magistrais, com dossiês tecnicos completos, laudos de estabilidade e treinamento de equipe.",
      items: [
        "Reformulacao de portfolio e bases dermatologicas",
        "Dossiês tecnicos com pH, pKa e embalagem",
        "Treinamento de profissionais e prescritores",
        "Auditoria de boas praticas de manipulacao",
      ],
    },
    {
      badge: "Expertise Industrial",
      title: "Consultoria para Industrias",
      years: "20+ industrias | 40+ marcas lancadas",
      desc: "P&D cosmetico grau 1 e 2 para industrias de insumos, laboratorios de private label e marcas independentes — do briefing ao produto na gondola.",
      items: [
        "Briefing -> formulacao -> estabilidade -> claims",
        "Private label e desenvolvimento de marcas proprias",
        "Compatibilidade embalagem-formula",
        "Estudos de estabilidade e eficacia clinica",
      ],
    },
  ]

  return (
    <section id="expertise" className="py-28 px-6 lg:px-10 bg-gradient-to-b from-navy to-navy-deep relative overflow-hidden">
      {/* Decorative Elements */}
      <HexagonPattern className="absolute top-20 right-[5%] w-40 h-40 text-copper opacity-10" />
      <CircuitPattern className="absolute bottom-20 left-[5%] w-36 h-36 text-teal opacity-10" />
      
      <div className="absolute top-[30%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(10,143,158,0.1),transparent_60%)] blur-[60px]" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[3px] uppercase text-copper-light inline-block mb-4">
            Dupla Expertise
          </span>
          <h2 className="font-serif font-normal text-[clamp(36px,4.5vw,52px)] text-white mb-5 leading-[1.1] tracking-[-0.5px]">
            Magistral & Industrial
          </h2>
          <p className="text-lg text-white/50 max-w-[620px] mx-auto leading-relaxed">
            Duas decadas transitando entre bancada magistral e linha de producao industrial — um
            posicionamento raro que garante formulacoes robustas em qualquer escala.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-white/10 rounded-3xl p-12 transition-all relative overflow-hidden hover:bg-white/[0.07] hover:translate-y-[-6px] group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-copper to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="inline-block bg-copper/20 text-copper-light text-xs font-bold py-2 px-4 rounded-full tracking-[2px] uppercase mb-6">
                {card.badge}
              </div>
              
              <h3 className="font-serif text-3xl text-white mb-4 leading-tight">{card.title}</h3>
              
              <p className="font-serif text-lg text-copper-light mb-5 tracking-wide">
                {card.years}
              </p>
              
              <p className="text-base text-white/55 leading-relaxed mb-8">{card.desc}</p>
              
              <div className="flex flex-col gap-4">
                {card.items.map((item, j) => (
                  <div key={j} className="flex gap-3 items-start text-base text-white/70 leading-relaxed">
                    <div className="w-5 h-5 rounded-full bg-teal/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-teal-light" />
                    </div>
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
