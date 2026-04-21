export function Industries() {
  const cards = [
    {
      num: "20+",
      title: "Indústrias Cosméticas",
      desc: "Atendimento técnico a indústrias de insumos dermatológicos, laboratórios cosméticos e embalagens farmacêuticas no Brasil.",
    },
    {
      num: "40+",
      title: "Marcas Independentes",
      desc: "Dezenas de marcas cosméticas industriais independentes com produtos desenvolvidos e lançados no mercado nacional.",
    },
    {
      num: "9",
      title: "Ativos Nano Documentados",
      desc: "Nanoencapsulamento farmacêutico de Retinol, Tranexâmico, Kojico, Q10, Vitamina C, PDRN, Peptídeos, Cisteamina e Arbutina.",
    },
    {
      num: "200+",
      title: "Páginas Originais",
      desc: "Material técnico-científico autoral produzido em formulários, guias, dossiês e compêndios para o setor magistral.",
    },
    {
      num: "50+",
      title: "Formulações Magistrais",
      desc: "Fórmulas magistrais documentadas com pH, embalagem, veículo, concentração, modo de uso e prazo de validade.",
    },
    {
      num: "17",
      title: "Ativos com pH/pKa",
      desc: "Mapa de incompatibilidades dos principais ativos — retinoides, AHAs, vitamina C, hidroquinona — para orientar prescrição segura.",
    },
  ]

  return (
    <section className="py-[110px] px-8 bg-gradient-to-b from-[#0f1f3a] to-navy-deep relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11.5px] font-bold tracking-[2.5px] uppercase text-copper-light inline-block mb-3.5">
            Portfólio Industrial
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4vw,44px)] text-white mb-4 leading-[1.15] tracking-[-0.5px]">
            Atendimento a grandes players do setor
          </h2>
          <p className="text-[15px] text-white/50 max-w-[580px] mx-auto leading-[1.7]">
            Mais de duas décadas de relações com indústrias, marcas e redes — um portfólio
            construído pela qualidade técnica e discrição profissional.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[22px] mt-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white/[0.04] border border-white/[0.08] rounded-[18px] p-8 px-7 transition-all hover:bg-white/[0.07] hover:translate-y-[-3px] hover:border-[rgba(212,167,106,0.2)]"
            >
              <div className="font-serif text-[48px] text-copper-light leading-none mb-3.5 tracking-[-2px]">
                {card.num}
              </div>
              <div className="text-[14.5px] text-white font-semibold mb-2.5 tracking-[0.2px]">
                {card.title}
              </div>
              <div className="text-[12.5px] text-white/55 leading-[1.65]">{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
