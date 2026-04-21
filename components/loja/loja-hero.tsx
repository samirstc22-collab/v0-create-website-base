import { LOJA_STATS } from "@/lib/loja-data"
import { BookOpen, FileText, Layers, Sparkles } from "lucide-react"

export function LojaHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0C2340] via-[#0a1d36] to-[#071528] pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Editorial grid */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#B8783D 1px, transparent 1px), linear-gradient(90deg, #B8783D 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Ambient orbs */}
      <div
        aria-hidden
        className="absolute top-0 right-[-10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(184,120,61,0.18), transparent 65%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,150,180,0.15), transparent 65%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Meta bar */}
        <div className="flex items-center justify-between mb-14 flex-wrap gap-4">
          <div className="flex items-center gap-3 text-[11px] font-mono tracking-[2px] uppercase text-[#e8a87c]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B8783D] animate-pulse" />
            Catálogo Técnico 2026 · Vitrine Editorial
          </div>
          <div className="text-[11px] tracking-[2px] uppercase text-white/40 font-semibold">
            60+ artefatos · ~500 páginas técnicas
          </div>
        </div>

        {/* Section kicker */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-12 bg-[#B8783D]" />
          <span className="text-[10px] tracking-[3px] uppercase text-[#B8783D] font-bold">
            § Loja Oficial · Clube de Fórmulas
          </span>
        </div>

        {/* Headline */}
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-12 items-end mb-16">
          <div>
            <h1 className="font-serif font-normal text-[clamp(48px,7vw,92px)] leading-[0.98] tracking-[-2.5px] text-white mb-8">
              Um <em className="italic text-[#e8a87c]">acervo editorial</em> inteiro
              <br />
              à mão do seu <em className="italic text-[#66d9e8]">balcão</em>.
            </h1>
            <p className="text-lg md:text-xl text-white/65 leading-[1.7] max-w-[620px]">
              Ebooks, formulários integrados, compêndios técnicos, guias terapêuticos e lâminas
              dupla-face.{" "}
              <strong className="text-white">
                Ciência editorial de alto rigor, em PDF + DOCX, pronta para imprimir, prescrever e
                ensinar.
              </strong>{" "}
              Design Navy + Copper. Zero marketing. Toda fórmula com % exata, pH e DOI.
            </p>
          </div>

          {/* Stats column */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { num: LOJA_STATS.protocolos, label: "Protocolos Clínicos", icon: FileText, color: "#B8783D" },
              { num: LOJA_STATS.laminas, label: "Lâminas Técnicas", icon: Layers, color: "#0096B4" },
              { num: LOJA_STATS.formularios, label: "Formulários Integrados", icon: BookOpen, color: "#B8783D" },
              { num: LOJA_STATS.guias, label: "Guias Técnico-Científicos", icon: Sparkles, color: "#0096B4" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/20 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif text-4xl text-white tracking-tight">{stat.num}</span>
                  <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                </div>
                <div className="text-[10px] tracking-[1.5px] uppercase font-bold text-white/55 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
          {[
            { label: "Fórmulas", detail: "% e pH validados" },
            { label: "Referências", detail: "DOI peer-reviewed" },
            { label: "Formato", detail: "PDF + DOCX editáveis" },
            { label: "Atualização", detail: "Vitalícia, sem upsell" },
          ].map((item) => (
            <div key={item.label} className="bg-[#071528] px-6 py-5">
              <div className="text-[10px] tracking-[2px] uppercase font-bold text-[#e8a87c] mb-1">
                {item.label}
              </div>
              <div className="text-sm text-white/75 font-medium">{item.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
