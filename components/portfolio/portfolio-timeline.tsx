import { CalendarRange, FlaskConical, Sparkles, Atom, Beaker, Dna, Microscope, Layers } from "lucide-react"

const timeline = [
  {
    year: "2019",
    title: "Fundação Técnica",
    desc: "8 bases galênicas próprias para perfil de pele miscigenada brasileira.",
    icon: FlaskConical,
    color: "from-[#0C2340] to-[#1a3a5c]",
    accent: "text-[#0C2340]",
    bg: "bg-[#0C2340]/5",
  },
  {
    year: "2020",
    title: "Despigmentantes Multimodais",
    desc: "Séruns aquosos com mandélico 10% + alfa-arbutin em pH ajustado.",
    icon: Sparkles,
    color: "from-[#1a4672] to-[#2a5a8a]",
    accent: "text-[#1a4672]",
    bg: "bg-[#1a4672]/5",
  },
  {
    year: "2021",
    title: "Anestésicos Tópicos",
    desc: "PLO Gel para mistura eutética tripla com promotor DMSO.",
    icon: Atom,
    color: "from-[#0a6b75] to-[#0a8f9e]",
    accent: "text-[#0a8f9e]",
    bg: "bg-[#0a8f9e]/5",
  },
  {
    year: "2022",
    title: "Peptídeos Biomiméticos",
    desc: "Protocolos GHK-Cu em sistema lipossomal com pH ajustado 5,0–6,0.",
    icon: Dna,
    color: "from-[#0a8f9e] to-[#0db5c8]",
    accent: "text-[#0a8f9e]",
    bg: "bg-[#0a8f9e]/5",
  },
  {
    year: "2023",
    title: "Sistema Dermoclareador",
    desc: "Protocolo bifásico para melasma refratário — Fluido + Concentrado.",
    icon: Beaker,
    color: "from-[#B8783D] to-[#a66a32]",
    accent: "text-[#B8783D]",
    bg: "bg-[#B8783D]/5",
  },
  {
    year: "2024",
    title: "Exossomos Sintéticos",
    desc: "Nanovesículas biomiméticas com EGF, IGF, TGF-β3 e VEGF recombinantes.",
    icon: Microscope,
    color: "from-[#B8783D] to-[#d4af37]",
    accent: "text-[#B8783D]",
    bg: "bg-[#d4af37]/10",
  },
  {
    year: "2024",
    title: "Peeling Azelaico em Pasta",
    desc: "Forma farmacêutica original — primeiro peeling azelaico em pasta do mundo.",
    icon: Beaker,
    color: "from-[#d4af37] to-[#c9a227]",
    accent: "text-[#a88615]",
    bg: "bg-[#d4af37]/15",
    highlight: true,
  },
  {
    year: "2025",
    title: "Tricologia Regenerativa",
    desc: "Tônicos com exossomos capilares + PDRN + peptídeo bioguiado SH-OP-118.",
    icon: Dna,
    color: "from-[#0096B4] to-[#0db5c8]",
    accent: "text-[#0096B4]",
    bg: "bg-[#0096B4]/5",
  },
  {
    year: "2025",
    title: "Sérum Niacinamida 25% + B12",
    desc: "Concentração técnica recorde com B12 estabilizada — multifuncional.",
    icon: Sparkles,
    color: "from-[#0096B4] to-[#5eead4]",
    accent: "text-[#0096B4]",
    bg: "bg-[#0096B4]/10",
    highlight: true,
  },
]

export function PortfolioTimeline() {
  return (
    <section className="relative overflow-hidden bg-[#fafbfc] py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#B8783D]/25 bg-[#B8783D]/8 px-4 py-1.5">
            <CalendarRange className="h-3.5 w-3.5 text-[#B8783D]" />
            <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#B8783D]">
              Cronologia 2019 — 2025
            </span>
          </div>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-[#0C2340] md:text-5xl text-balance">
            Seis anos de <em className="text-[#B8783D]">inovações</em> em ordem cronológica.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#475569] text-pretty">
            Da fundação galênica em 2019 às vanguardas biotecnológicas de 2025 — cada marco
            sustentado por evidência científica rastreável.
          </p>
        </div>

        {/* Timeline grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {timeline.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className={`relative flex flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_-15px_rgba(12,35,64,0.2)] ${
                  item.highlight
                    ? "border-[#d4af37]/40 shadow-[0_10px_30px_-10px_rgba(212,175,55,0.3)] ring-2 ring-[#d4af37]/20"
                    : "border-[#0C2340]/10 shadow-sm"
                }`}
              >
                {item.highlight && (
                  <div className="absolute -top-2 -right-2 rounded-full bg-[#d4af37] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[1.5px] text-[#0C2340] shadow-md">
                    Destaque
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-md`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl font-bold text-[#0C2340]">{item.year}</div>
                  </div>
                </div>
                <h3 className="mt-5 text-base font-bold text-[#0C2340] leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[#64748b]">{item.desc}</p>
              </article>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#0C2340]/10 bg-white px-5 py-2.5 shadow-sm">
            <Layers className="h-4 w-4 text-[#B8783D]" />
            <span className="text-sm text-[#475569]">
              <strong className="text-[#0C2340]">+200 fórmulas originais</strong> ·{" "}
              <strong className="text-[#0C2340]">20+ bases galênicas</strong> · 9 áreas
              terapêuticas
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
