import { MapPin, Calendar, ArrowRight } from "lucide-react"
import { MoleculeIllustration, HexagonPattern } from "./illustrations"

export function Missions() {
  const missions = [
    {
      visual: "mission-paris",
      flag: "FR",
      year: "2025",
      location: "Paris, Franca",
      title: "In-Cosmetics Global 2025",
      desc: "Imersao tecnica na maior feira de ingredientes cosmeticos do mundo. Acesso a pesquisa Sederma, Lucas Meyer e laboratorios de biofermentacao francesa.",
      tags: ["Peptideos", "Biofermentacao", "Ingredientes ativos"],
    },
    {
      visual: "mission-amsterdam",
      flag: "NL",
      year: "2024",
      location: "Amsterdam, Holanda",
      title: "Personal Care Europe",
      desc: "Missao focada em sustentabilidade cosmetica, upcycling de ingredientes e tendencias europeias de clean beauty. Grupos de 12 profissionais.",
      tags: ["Sustentabilidade", "Clean Beauty", "Upcycling"],
    },
    {
      visual: "mission-japan",
      flag: "JP",
      year: "2023",
      location: "Toquio, Japao",
      title: "J-Beauty & Water Essence",
      desc: "Estudo de biofermentacao japonesa, texturas water-essence e tecnicas de layering. Visitas a laboratorios Shiseido e Kose.",
      tags: ["J-Beauty", "Fermentacao", "Water Essence"],
    },
  ]

  return (
    <section id="missions" className="py-28 px-6 lg:px-10 bg-off-white relative overflow-hidden">
      {/* Decorative Elements */}
      <MoleculeIllustration className="absolute top-20 right-[3%] w-32 h-32 text-copper opacity-8" />
      <HexagonPattern className="absolute bottom-20 left-[3%] w-36 h-36 text-teal opacity-8" />

      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[3px] uppercase text-copper inline-block mb-4">
            Missoes Internacionais
          </span>
          <h2 className="font-serif font-normal text-[clamp(36px,4.5vw,52px)] text-navy mb-5 leading-[1.1] tracking-[-0.5px]">
            Pesquisa alem das fronteiras
          </h2>
          <p className="text-lg text-muted max-w-[620px] mx-auto leading-relaxed">
            Imersoes tecnicas lideradas por mim em tres continentes — acesso privilegiado a
            industrias de ingredientes, laboratorios de ponta e tendencias globais.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {missions.map((mission, i) => (
            <div
              key={i}
              className="group bg-white rounded-3xl overflow-hidden border border-border transition-all flex flex-col hover:translate-y-[-8px] hover:shadow-[0_24px_60px_rgba(11,29,53,0.12)] hover:border-copper/40"
            >
              <div
                className={`h-48 relative flex items-center justify-center overflow-hidden ${mission.visual}`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.12),transparent_60%)]" />
                <span className="relative z-[2] font-serif text-7xl text-white/95 tracking-[4px] uppercase">
                  {mission.flag}
                </span>
                <div className="absolute top-5 right-5 bg-black/50 backdrop-blur-xl border border-white/20 rounded-full py-2 px-4 text-xs text-white font-bold tracking-[1.5px] z-[3] flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {mission.year}
                </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-sm text-muted mb-3">
                  <MapPin className="w-4 h-4" />
                  {mission.location}
                </div>
                
                <h3 className="font-serif text-2xl text-navy mb-4 leading-tight">
                  {mission.title}
                </h3>
                
                <p className="text-base text-body leading-relaxed mb-6 flex-1">
                  {mission.desc}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {mission.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-copper/12 text-copper-deep text-xs font-semibold py-1.5 px-3 rounded-lg tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <span className="inline-flex items-center gap-2 text-copper text-sm font-bold tracking-wide group-hover:gap-3 transition-all">
                  Saiba mais <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
