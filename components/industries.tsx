import { CircuitPattern, AtomIllustration } from "./illustrations"

export function Industries() {
  const cards = [
    {
      num: "20+",
      title: "Industrias Cosmeticas",
      desc: "Atendimento tecnico a industrias de insumos dermatologicos, laboratorios cosmeticos e embalagens farmaceuticas no Brasil.",
    },
    {
      num: "40+",
      title: "Marcas Independentes",
      desc: "Dezenas de marcas cosmeticas industriais independentes com produtos desenvolvidos e lancados no mercado nacional.",
    },
    {
      num: "9",
      title: "Ativos Nano Documentados",
      desc: "Nanoencapsulamento farmaceutico de Retinol, Tranexamico, Kojico, Q10, Vitamina C, PDRN, Peptideos, Cisteamina e Arbutina.",
    },
    {
      num: "200+",
      title: "Paginas Originais",
      desc: "Material tecnico-cientifico autoral produzido em formularios, guias, dossiês e compendios para o setor magistral.",
    },
    {
      num: "50+",
      title: "Formulacoes Magistrais",
      desc: "Formulas magistrais documentadas com pH, embalagem, veiculo, concentracao, modo de uso e prazo de validade.",
    },
    {
      num: "17",
      title: "Ativos com pH/pKa",
      desc: "Mapa de incompatibilidades dos principais ativos — retinoides, AHAs, vitamina C, hidroquinona — para orientar prescricao segura.",
    },
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-gradient-to-b from-[#0f1f3a] to-navy-deep relative overflow-hidden">
      {/* Decorative Elements */}
      <CircuitPattern className="absolute top-20 right-[5%] w-40 h-40 text-copper opacity-10" />
      <AtomIllustration className="absolute bottom-20 left-[5%] w-32 h-32 text-teal opacity-10" />

      <div className="max-w-[1320px] mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[3px] uppercase text-copper-light inline-block mb-4">
            Portfolio Industrial
          </span>
          <h2 className="font-serif font-normal text-[clamp(36px,4.5vw,52px)] text-white mb-5 leading-[1.1] tracking-[-0.5px]">
            Atendimento a grandes players do setor
          </h2>
          <p className="text-lg text-white/50 max-w-[620px] mx-auto leading-relaxed">
            Mais de duas decadas de relacoes com industrias, marcas e redes — um portfolio
            construido pela qualidade tecnica e discricao profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-white/10 rounded-2xl p-9 transition-all hover:bg-white/[0.08] hover:translate-y-[-4px] hover:border-copper/30"
            >
              <div className="font-serif text-6xl text-copper-light leading-none mb-4 tracking-[-2px]">
                {card.num}
              </div>
              <div className="text-lg text-white font-semibold mb-3">
                {card.title}
              </div>
              <div className="text-base text-white/55 leading-relaxed">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
