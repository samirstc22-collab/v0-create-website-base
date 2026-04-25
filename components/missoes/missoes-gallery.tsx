import Image from "next/image"
import { MapPin, Calendar, ArrowRight, Users, FlaskConical, Globe } from "lucide-react"

const missions = [
  {
    flag: "FR",
    year: "2025",
    location: "Paris, Franca",
    title: "In-Cosmetics Global 2025",
    subtitle: "Intercambio de Cosmetologia · Delegado Tecnico",
    role: "Speaker & Guia Tecnico",
    description:
      "Intercambio de estudos em cosmetologia em Paris com imersao completa na maior feira de ingredientes do mundo. Guiei alunos e profissionais pelos stands e laboratorios das principais marcas globais, com treinamentos tecnicos exclusivos na Lucas Meyer Cosmetics, Gattefossé e Sensient. Estudo aprofundado do mercado cosmetico parisiense — tendencias, ativos de vanguarda e inovacoes em biofermentacao francesa.",
    highlights: ["Lucas Meyer · Paris", "Gattefossé · Lyon", "Sensient", "In-Cosmetics Global", "Mercado Parisiense", "Peptideos 2025"],
    photos: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/24da41c1-6aed-4c98-a405-36a49a556cd7-yTaMOtFNI9o8wCxLqXDSxSiWJeNl2o.jpeg", alt: "Grupo na sede da Lucas Meyer Cosmetics, Campus Edison, Paris 2025", caption: "Lucas Meyer HQ · Campus Edison, Paris", wide: true },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_2492-JxhgefX7fKKPzUqysDvarshOrjNzep.jpeg", alt: "Grupo de profissionais no laboratorio durante o intercambio de cosmetologia Paris 2025", caption: "Treinamento no laboratorio · Paris 2025", wide: false },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1997-5VGHtNskxbZ2tAZcmioaPyPbgsgiYO.jpeg", alt: "Equipe da missao Paris 2025 na Torre Eiffel", caption: "Equipe · Torre Eiffel, Paris", wide: false },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0847-YzePQaJM6RUuyf3kkWgCqDajZo190r.jpeg", alt: "Samir Tannuri no stand da Vytrus Biotech no In-Cosmetics Global 2025", caption: "In-Cosmetics Global · Stand Vytrus / Clarivine", wide: false },
    ],
    gradientCard: "from-[#0055A4] via-[#FFFFFF]/20 to-[#EF4135]",
    featured: true,
    spots: "4 vagas restantes",
    accentColor: "#B8783D",
  },
  {
    flag: "NL",
    year: "2024",
    location: "Amsterdam, Holanda",
    title: "InCos Global · Personal Care Europe 2024",
    subtitle: "Imersao Sustentabilidade & Clean Beauty",
    role: "Delegado Tecnico",
    description:
      "Missao tecnica centrada em sustentabilidade cosmetica, upcycling de ingredientes e tendencias europeias de clean beauty. Treinamentos com Croda e Sederma em Amsterdam — aprofundamento em bioativos de nova geracao, sistemas de entrega dermica e ingredientes verdes certificados. Acesso privilegiado a grandes players como Evonik e DKSH.",
    highlights: ["Croda · Amsterdam", "Sederma · Ativos", "Clean Beauty EU", "Upcycling", "Evonik & DKSH", "Biotecnologia"],
    photos: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5807-MVrZXwAjG1TA5axkZtyIbGxca3Yufh.jpeg", alt: "Grande grupo de profissionais nos stands da Evonik e DKSH no InCos Global Amsterdam 2024", caption: "Evonik & DKSH · InCos Global Amsterdam 2024", wide: true },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a7569bb8-0076-4109-9f7a-d979fb1ba1c0-iBKSJh9OSox2CrRE3hm6iyeUnwbX8F.jpeg", alt: "Grupo na sessao do In-Cosmetics Global Amsterdam com sacolas do evento", caption: "In-Cosmetics Global · Amsterdam 2024", wide: false },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1834-1lxARFUBsgXPmA0zhCBFVUp3lWiBvB.jpeg", alt: "Samir Tannuri com colegas em evento tecnico de cosmetologia Amsterdam", caption: "Networking tecnico · Amsterdam", wide: false },
    ],
    gradientCard: "from-[#AE1C28] via-[#FFFFFF]/20 to-[#21468B]",
    featured: false,
    spots: "Encerrada",
    accentColor: "#0a8f9e",
  },
  {
    flag: "JP",
    year: "2023",
    location: "Toquio, Japao",
    title: "J-Beauty & Mercado Asiatico",
    subtitle: "Conferencia Internacional · Convite de Fornecedores",
    role: "Convidado por Fornecedores Internacionais",
    description:
      "Convite de fornecedores internacionais para estudo das tecnologias do mercado asiatico e ativos inovadores japoneses. Participacao em conferencia em Toquio com acesso exclusivo a ingredientes de biofermentacao japonesa, texturas water-essence, tecnicas de layering e filosofia J-Beauty — referencia global de inovacao em cuidados com a pele.",
    highlights: ["Biofermentacao Japonesa", "Water Essence", "Layering Techniques", "J-Beauty", "Mercado Asiatico", "Ativos Inovadores"],
    photos: [
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0127-Fp5kYPh4TrQNv6ulvJX6tDZ0VxuwHM.jpeg", alt: "Samir Tannuri com grupo no templo Senso-ji, Toquio, Japao 2023", caption: "Templo Senso-ji · Toquio, Japao 2023", wide: true },
      { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0129-COqZ4gEAffFyUCl3TBIVvfbsnPBOrE.jpeg", alt: "Equipe da missao em Asakusa, Toquio 2023", caption: "Asakusa · Conferencia Toquio 2023", wide: false },
    ],
    gradientCard: "from-[#BC002D] via-[#FFFFFF]/30 to-[#BC002D]",
    featured: false,
    spots: "Encerrada",
    accentColor: "#BC002D",
  },
]

export function MissoesGallery() {
  return (
    <section className="py-28 px-6 lg:px-10 bg-white">
      <div className="max-w-[1320px] mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#0C2340]/5 border border-[#0C2340]/10 rounded-full px-4 py-2 mb-6">
            <Globe className="w-4 h-4 text-[#0C2340]" />
            <span className="text-xs font-bold tracking-[2px] uppercase text-[#0C2340]">
              Historico de Missoes
            </span>
          </div>
          <h2 className="font-serif text-[clamp(32px,4vw,52px)] text-[#0C2340] mb-5 leading-[1.1]">
            Destinos que transformam{" "}
            <span className="text-[#B8783D]">carreiras</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#64748b] text-lg leading-relaxed">
            Imersoes tecnicas conduzidas pessoalmente em tres continentes — com acesso a
            laboratorios, fornecedores globais e as maiores feiras de cosmeticos do mundo.
          </p>
        </div>

        {/* Missions */}
        <div className="flex flex-col gap-24">
          {missions.map((mission, i) => (
            <article key={i}>

              {/* Mission Header Row */}
              <div className="flex flex-wrap items-start justify-between gap-6 mb-10">
                <div className="flex items-center gap-5">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-serif text-2xl text-white bg-gradient-to-br ${mission.gradientCard} shadow-lg flex-shrink-0`}>
                    {mission.flag}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1.5">
                      <span className="flex items-center gap-1.5 text-sm text-[#64748b]">
                        <MapPin className="w-3.5 h-3.5" />
                        {mission.location}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs bg-[#0C2340]/5 border border-[#0C2340]/10 rounded-full px-3 py-1 text-[#0C2340] font-semibold">
                        <Calendar className="w-3 h-3" />
                        {mission.year}
                      </span>
                      {mission.featured && (
                        <span className="text-xs bg-[#B8783D] text-white rounded-full px-3 py-1 font-bold uppercase tracking-wide">
                          Proxima
                        </span>
                      )}
                    </div>
                    <h3 className="font-serif text-[clamp(20px,2.5vw,32px)] text-[#0C2340] leading-tight">
                      {mission.title}
                    </h3>
                    <p className="text-sm font-semibold mt-1" style={{ color: mission.accentColor }}>
                      {mission.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-[#0C2340]/4 border border-[#0C2340]/10 rounded-xl px-4 py-3">
                  <FlaskConical className="w-4 h-4 text-[#0C2340]" />
                  <span className="text-sm font-semibold text-[#0C2340]">{mission.role}</span>
                </div>
              </div>

              {/* Two-column: description + photos */}
              <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 items-start">

                {/* Left: text */}
                <div>
                  <p className="text-[#374151] text-base leading-[1.8] mb-8">
                    {mission.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {mission.highlights.map((tag, j) => (
                      <span
                        key={j}
                        className="text-xs font-semibold py-1.5 px-3 rounded-lg border"
                        style={{
                          color: mission.accentColor,
                          borderColor: mission.accentColor + "40",
                          background: mission.accentColor + "0a",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-[#94a3b8]" />
                      <span
                        className={mission.featured ? "font-semibold" : "text-[#94a3b8]"}
                        style={mission.featured ? { color: mission.accentColor } : {}}
                      >
                        {mission.spots}
                      </span>
                    </div>
                    {mission.featured && (
                      <a
                        href="https://wa.me/5511981403000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all"
                        style={{ color: mission.accentColor }}
                      >
                        Reservar vaga
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: photo grid */}
                <div className="grid grid-cols-2 gap-3">
                  {mission.photos.map((photo, j) => (
                    <div
                      key={j}
                      className={`relative overflow-hidden rounded-2xl group/photo ${
                        photo.wide ? "col-span-2 h-60" : "h-44"
                      }`}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover/photo:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      <p className="absolute bottom-0 left-0 right-0 px-3 py-2.5 text-[11px] text-white/90 font-medium leading-tight">
                        {photo.caption}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {i < missions.length - 1 && (
                <div className="mt-24 h-px bg-gradient-to-r from-transparent via-[#0C2340]/10 to-transparent" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
