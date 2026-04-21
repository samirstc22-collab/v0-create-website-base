export function Missions() {
  const missions = [
    {
      visual: "mission-paris",
      flag: "FR",
      year: "2025",
      location: "Paris, França",
      title: "In-Cosmetics Global 2025",
      desc: "Imersão técnica na maior feira de ingredientes cosméticos do mundo. Acesso à pesquisa Sederma, Lucas Meyer e laboratórios de biofermentação francesa.",
      tags: ["Peptídeos", "Biofermentação", "Ingredientes ativos"],
    },
    {
      visual: "mission-amsterdam",
      flag: "NL",
      year: "2024",
      location: "Amsterdam, Holanda",
      title: "Personal Care Europe",
      desc: "Missão focada em sustentabilidade cosmética, upcycling de ingredientes e tendências europeias de clean beauty. Grupos de 12 profissionais.",
      tags: ["Sustentabilidade", "Clean Beauty", "Upcycling"],
    },
    {
      visual: "mission-japan",
      flag: "JP",
      year: "2023",
      location: "Tóquio, Japão",
      title: "J-Beauty & Water Essence",
      desc: "Estudo de biofermentação japonesa, texturas water-essence e técnicas de layering. Visitas a laboratórios Shiseido e Kose.",
      tags: ["J-Beauty", "Fermentação", "Water Essence"],
    },
  ]

  return (
    <section id="missions" className="py-[110px] px-8 bg-off-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11.5px] font-bold tracking-[2.5px] uppercase text-copper inline-block mb-3.5">
            Missões Internacionais
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4vw,44px)] text-navy mb-4 leading-[1.15] tracking-[-0.5px]">
            Pesquisa além das fronteiras
          </h2>
          <p className="text-[15px] text-muted max-w-[580px] mx-auto leading-[1.7]">
            Imersões técnicas lideradas por mim em três continentes — acesso privilegiado a
            indústrias de ingredientes, laboratórios de ponta e tendências globais.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6 mt-3">
          {missions.map((mission, i) => (
            <div
              key={i}
              className="bg-white rounded-[20px] overflow-hidden border border-border transition-all flex flex-col hover:translate-y-[-6px] hover:shadow-[0_16px_48px_rgba(11,29,53,0.12)] hover:border-[rgba(192,133,74,0.3)]"
            >
              <div
                className={`h-40 relative flex items-center justify-center overflow-hidden ${mission.visual}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_60%)]" />
                <span className="relative z-[2] font-serif text-[56px] text-white/95 tracking-[3px] uppercase">
                  {mission.flag}
                </span>
                <div className="absolute top-[18px] right-5 bg-black/40 backdrop-blur-[8px] border border-white/15 rounded-full py-1 px-3 text-[11px] text-white font-semibold tracking-[1px] z-[3]">
                  {mission.year}
                </div>
              </div>
              <div className="p-7 px-[30px] flex-1 flex flex-col">
                <div className="text-[11px] text-muted tracking-[2px] uppercase font-semibold mb-2.5">
                  {mission.location}
                </div>
                <h3 className="font-serif text-[22px] text-navy mb-3.5 leading-[1.2]">
                  {mission.title}
                </h3>
                <p className="text-[13.5px] text-body leading-[1.7] mb-[18px] flex-1">
                  {mission.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {mission.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-[rgba(192,133,74,0.15)] text-copper-deep text-[11px] font-semibold py-1 px-2.5 rounded-md tracking-[0.3px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
