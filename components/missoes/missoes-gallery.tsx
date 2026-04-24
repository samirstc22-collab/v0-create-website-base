import { MapPin, Calendar, ArrowRight, Users, Building2 } from "lucide-react"

export function MissoesGallery() {
  const missions = [
    {
      flag: "FR",
      year: "2025",
      location: "Paris, Franca",
      title: "In-Cosmetics Global 2025",
      subtitle: "Delegado Tecnico Oficial",
      description: "Imersao tecnica na maior feira de ingredientes cosmeticos do mundo. Acesso a pesquisa Sederma, Lucas Meyer e laboratorios de biofermentacao francesa. Grupos fechados de 12 profissionais.",
      highlights: ["Peptideos de nova geracao", "Biofermentacao francesa", "Ingredientes ativos 2025", "Networking internacional"],
      image: "from-[#0055A4] via-[#FFFFFF]/20 to-[#EF4135]",
      featured: true,
      spots: "4 vagas restantes",
    },
    {
      flag: "NL",
      year: "2024",
      location: "Amsterdam, Holanda",
      title: "Personal Care Europe",
      subtitle: "Imersao Sustentabilidade",
      description: "Missao focada em sustentabilidade cosmetica, upcycling de ingredientes e tendencias europeias de clean beauty. Visitas a laboratorios holandeses e belgas.",
      highlights: ["Sustentabilidade", "Clean Beauty", "Upcycling", "Biotecnologia"],
      image: "from-[#AE1C28] via-[#FFFFFF]/20 to-[#21468B]",
      featured: false,
      spots: "Encerrada",
    },
    {
      flag: "JP",
      year: "2023",
      location: "Toquio, Japao",
      title: "J-Beauty & Water Essence",
      subtitle: "Imersao Biofermentacao",
      description: "Estudo de biofermentacao japonesa, texturas water-essence e tecnicas de layering. Visitas a laboratorios Shiseido e Kose. Experiencia sensorial unica.",
      highlights: ["J-Beauty", "Fermentacao", "Water Essence", "Layering"],
      image: "from-[#BC002D] via-[#FFFFFF]/30 to-[#BC002D]",
      featured: false,
      spots: "Encerrada",
    },
  ]

  return (
    <section className="py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0C2340]/5 border border-[#0C2340]/10 rounded-full px-4 py-2 mb-6">
            <span className="text-xs font-bold tracking-[2px] uppercase text-[#0C2340]">
              Historico de Missoes
            </span>
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] text-[#0C2340] mb-6 leading-[1.1]">
            Destinos que transformam{" "}
            <span className="text-[#B8783D]">carreiras</span>
          </h2>
        </div>

        {/* Missions Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {missions.map((mission, i) => (
            <div
              key={i}
              className={`group bg-white rounded-3xl overflow-hidden border transition-all flex flex-col ${
                mission.featured
                  ? "border-[#B8783D] shadow-[0_16px_60px_rgba(184,120,61,0.15)] lg:scale-[1.02]"
                  : "border-[#0C2340]/10 hover:border-[#B8783D]/30 hover:shadow-[0_20px_50px_rgba(12,35,64,0.1)]"
              }`}
            >
              {/* Header with Flag */}
              <div className={`h-40 relative flex items-center justify-center bg-gradient-to-br ${mission.image}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.15),transparent_60%)]" />
                <span className="relative z-[2] font-serif text-6xl text-white/95 tracking-[4px] uppercase drop-shadow-lg">
                  {mission.flag}
                </span>
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-xl border border-white/20 rounded-full py-2 px-4 text-xs text-white font-bold tracking-[1.5px] z-[3] flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5" />
                  {mission.year}
                </div>

                {/* Featured Badge */}
                {mission.featured && (
                  <div className="absolute top-4 left-4 bg-[#B8783D] rounded-full py-1.5 px-3 text-[10px] font-bold text-white tracking-[1px] uppercase">
                    Proxima
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-sm text-[#64748b] mb-2">
                  <MapPin className="w-4 h-4" />
                  {mission.location}
                </div>

                <h3 className="font-serif text-2xl text-[#0C2340] mb-1">{mission.title}</h3>
                <p className="text-sm font-semibold text-[#B8783D] mb-4">{mission.subtitle}</p>

                <p className="text-sm text-[#64748b] leading-relaxed mb-6 flex-1">{mission.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {mission.highlights.map((tag, j) => (
                    <span
                      key={j}
                      className="bg-[#0C2340]/5 text-[#0C2340] text-xs font-semibold py-1.5 px-3 rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-[#0C2340]/8">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-[#64748b]" />
                    <span className={mission.featured ? "text-[#B8783D] font-semibold" : "text-[#94a3b8]"}>
                      {mission.spots}
                    </span>
                  </div>
                  {mission.featured && (
                    <a
                      href="https://wa.me/5511981403000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#B8783D] text-sm font-bold hover:gap-3 transition-all"
                    >
                      Reservar vaga
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
