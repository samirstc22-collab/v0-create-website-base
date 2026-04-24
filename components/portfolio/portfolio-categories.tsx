import Image from "next/image"
import { Sparkles, Sun, Droplets, Stethoscope, Pill, Heart, Layers3 } from "lucide-react"

const categories = [
  {
    n: "01",
    icon: Sparkles,
    title: "Facial Antiaging",
    desc: "Séruns peptídicos com GHK-Cu, Matrixyl, Argireline em veículos lipossomais com pH 5,0–6,0.",
    tags: ["Peptídeos", "Lipossomas", "pH ajustado"],
    color: "from-[#B8783D] to-[#8a5729]",
  },
  {
    n: "02",
    icon: Sun,
    title: "Discromias",
    desc: "Inibidores de tirosinase, moduladores α-MSH, bloqueadores de melanossomos e antioxidantes sinérgicos.",
    tags: ["Tranexâmico", "Resorcinois", "Multi-target"],
    color: "from-[#d4af37] to-[#c9a227]",
  },
  {
    n: "03",
    icon: Droplets,
    title: "Tricologia",
    desc: "Tônicos com exossomos capilares, PDRN, peptídeos bioguiados, minoxidil e finasterida tópica.",
    tags: ["Exossomos", "PDRN", "Minoxidil"],
    color: "from-[#0096B4] to-[#0a6b75]",
  },
  {
    n: "04",
    icon: Stethoscope,
    title: "Pós-procedimento",
    desc: "Cremes regeneradores com GHK-Cu, centella, pantenol e bisabolol — alta tolerabilidade.",
    tags: ["GHK-Cu", "Centella", "Reparo barreira"],
    color: "from-[#0a6b75] to-[#0a8f9e]",
  },
  {
    n: "05",
    icon: Pill,
    title: "Anestésicos",
    desc: "PLO Gel para misturas eutéticas triplas com promotores DMSO e Transcutol.",
    tags: ["PLO Gel", "Eutético", "DMSO"],
    color: "from-[#1a4672] to-[#2a5a8a]",
  },
  {
    n: "06",
    icon: Heart,
    title: "Corporal",
    desc: "Séruns para estrias com PDRN, anticelulite com nano-cafeína e DRONE Lipocell, hidratação anidra.",
    tags: ["PDRN", "Nano-cafeína", "Bases anidras"],
    color: "from-[#0C2340] to-[#1a3a5c]",
  },
]

export function PortfolioCategories() {
  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end mb-14">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0C2340]/15 bg-[#0C2340]/5 px-4 py-1.5">
              <Layers3 className="h-3.5 w-3.5 text-[#0C2340]" />
              <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#0C2340]">
                Portfolio Tecnico
              </span>
            </div>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-[#0C2340] md:text-5xl text-balance">
              Seis grandes famílias de <em className="text-[#B8783D]">formulações</em>.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-[#475569] text-pretty">
            Sistematização das categorias terapêuticas desenvolvidas ao longo dos seis anos de
            P&amp;D — apresentadas em formato genérico para referência técnica de prescritores e
            farmácias magistrais.
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <article
                key={cat.n}
                className="group relative flex flex-col rounded-3xl border border-[#0C2340]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8783D]/30 hover:shadow-[0_15px_40px_-15px_rgba(12,35,64,0.2)]"
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${cat.color} shadow-md`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="font-serif text-3xl text-[#0C2340]/15 group-hover:text-[#B8783D]/30 transition-colors">
                    {cat.n}
                  </span>
                </div>

                <h3 className="font-serif text-xl text-[#0C2340] leading-tight">{cat.title}</h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[#64748b]">{cat.desc}</p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#0C2340]/10 bg-[#fafbfc] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[1px] text-[#475569]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>

        {/* Product portfolio image */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-[#0C2340]/10 shadow-[0_15px_40px_-15px_rgba(12,35,64,0.2)]">
            <Image
              src="/portfolio/products-portfolio.jpeg"
              alt="Portfolio amplo de produtos magistrais desenvolvidos"
              width={800}
              height={500}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#d4af37] mb-1">
                Maquiagem &amp; Skincare
              </div>
              <div className="font-serif text-xl text-white">Portfolio amplo de produtos</div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-[#0C2340]/10 shadow-[0_15px_40px_-15px_rgba(12,35,64,0.2)]">
            <Image
              src="/portfolio/skincare-line.jpeg"
              alt="Linha completa de skincare em desenvolvimento"
              width={800}
              height={500}
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#5eead4] mb-1">
                Linha Skincare
              </div>
              <div className="font-serif text-xl text-white">Bases galênicas + ativos premium</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
