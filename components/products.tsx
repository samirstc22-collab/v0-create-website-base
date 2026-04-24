"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const products = [
  {
    cat: "ebook",
    tag: "eBook",
    title: "Dermatologia Regenerativa Aplicada",
    cover: "cover-regen",
    ornament: "RG",
    edition: "Manual Hotmart 2026",
    desc: "Peptídeos biomiméticos, PDRN, exossomos e 27 prescrições magistrais. 60+ páginas.",
    price: "R$ 39",
    link: "https://pay.hotmart.com/A105091762I",
    hot: true,
  },
  {
    cat: "formulario",
    tag: "Formulário",
    title: "Melasma — 4 Volumes",
    cover: "cover-melasma",
    ornament: "M",
    edition: "Volume Completo",
    desc: "Patofisiologia, home care, peelings, microagulhamento e nutracêuticos.",
    price: "Consulte",
  },
  {
    cat: "formulario",
    tag: "Formulário",
    title: "Peptídeos 2026",
    cover: "cover-peptides",
    ornament: "P",
    edition: "48 páginas · 2026",
    desc: "TGF-β, EGF, FGF, PDRN, GHK-Cu. 13 lâminas técnicas A4.",
    price: "Consulte",
  },
  {
    cat: "ebook",
    tag: "eBook",
    title: "Cicatrização & Reparo",
    cover: "cover-cicatriz",
    ornament: "C",
    edition: "9 capítulos",
    desc: "Protocolos clínicos e prescrições magistrais. Vancouver + DOI.",
    price: "Consulte",
  },
  {
    cat: "formulario",
    tag: "Guia",
    title: "Veículos Dermatológicos",
    cover: "cover-veiculos",
    ornament: "V",
    edition: "100+ páginas",
    desc: "20 bases magistrais, 15 capítulos farmacotécnicos. pH/pKa de 17 ativos.",
    price: "Consulte",
  },
  {
    cat: "formulario",
    tag: "Compêndio",
    title: "Bases Cosméticas",
    cover: "cover-bases",
    ornament: "B",
    edition: "20 fórmulas",
    desc: "Bases dermatológicas com especificações técnicas completas.",
    price: "Consulte",
  },
  {
    cat: "formulario",
    tag: "Guia",
    title: "Guia Terapêutico",
    cover: "cover-terapeutico",
    ornament: "G",
    edition: "Dermatológico Magistral",
    desc: "Acne, rosácea, psoríase, eczemas, alopecias, onicomicoses e discromias.",
    price: "Consulte",
  },
  {
    cat: "formulario",
    tag: "Formulário",
    title: "Clareadores & Antioxidantes",
    cover: "cover-clareadores",
    ornament: "Cl",
    edition: "2ª Edição",
    desc: "Ativos clareadores cutâneos e antioxidantes com prescrições magistrais.",
    price: "Consulte",
  },
  {
    cat: "formulario",
    tag: "Formulário",
    title: "Fatores de Crescimento",
    cover: "cover-growth",
    ornament: "FC",
    edition: "Protocolo",
    desc: "EGF, FGF, VEGF, PDGF e fatores lipossomados. 15+ formulações.",
    price: "Consulte",
  },
  {
    cat: "ebook",
    tag: "Guia",
    title: "Atualização Dermatologia",
    cover: "cover-atual",
    ornament: "A",
    edition: "Edição 2025",
    desc: "Novos ativos, tendências e protocolos dermatológicos atualizados.",
    price: "Consulte",
  },
  {
    cat: "curso",
    tag: "Curso EAD",
    title: "MELASMA ZERO 360°",
    cover: "cover-curso",
    ornament: "360",
    edition: "Curso ao vivo",
    desc: "Peeling ATA GREEN™ e protocolos exclusivos multimodais.",
    price: "Em breve",
  },
  {
    cat: "formulario",
    tag: "Lâminas",
    title: "Protocolos Peelings",
    cover: "cover-peelings",
    ornament: "Pe",
    edition: "Fenol FREE",
    desc: "Peelings químicos exclusivos com concentrações, pH e técnicas.",
    price: "Consulte",
  },
]

const tabs = [
  { key: "all", label: "Todos (12)" },
  { key: "ebook", label: "eBooks & Guias" },
  { key: "formulario", label: "Formulários" },
  { key: "curso", label: "Cursos" },
]

export function Products() {
  const [activeTab, setActiveTab] = useState("all")

  const filtered = activeTab === "all" ? products : products.filter((p) => p.cat === activeTab)

  const getTagStyle = (cat: string) => {
    if (cat === "curso") return { bg: "rgba(10,143,158,0.1)", color: "var(--teal)" }
    if (cat === "formulario") return { bg: "rgba(192,133,74,0.15)", color: "var(--copper)" }
    return { bg: "rgba(11,29,53,0.06)", color: "var(--navy)" }
  }

  return (
    <section id="products" className="py-[110px] px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11.5px] font-bold tracking-[2.5px] uppercase text-teal inline-block mb-3.5">
            Biblioteca Técnica
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4vw,44px)] text-navy mb-4 leading-[1.15] tracking-[-0.5px]">
            Cursos, eBooks & Formulários
          </h2>
          <p className="text-[15px] text-muted max-w-[580px] mx-auto leading-[1.7]">
            Doze materiais clínico-prescritivos com rigor científico. Cada obra é um compêndio
            autoral pronto para aplicação em consultório ou laboratório.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 justify-center mb-11 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`bg-transparent border rounded-full py-[9px] px-5 text-[12.5px] font-medium transition-all ${
                activeTab === tab.key
                  ? "bg-navy border-navy text-white"
                  : "border-border text-body hover:border-copper"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-[22px]">
          {filtered.map((p, i) => (
            <article
              key={i}
              onClick={() => p.link && window.open(p.link, "_blank")}
              className="bg-white rounded-[16px] overflow-hidden border border-border transition-all cursor-pointer flex flex-col hover:translate-y-[-6px] hover:shadow-[0_16px_44px_rgba(0,0,0,0.1)] hover:border-[rgba(192,133,74,0.3)]"
            >
              {p.hot && (
                <div className="absolute top-3 right-3 w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.6)] animate-pulse z-[5]" />
              )}
              <div
                className={`aspect-[3/4] relative overflow-hidden flex flex-col justify-between p-6 px-[22px] text-white ${p.cover}`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 pointer-events-none" />
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08] font-serif text-[160px] leading-none font-bold z-[1] pointer-events-none">
                  {p.ornament}
                </div>
                <div className="relative z-[2] flex justify-between items-start">
                  <span className="text-[9.5px] tracking-[2px] uppercase opacity-85 font-semibold">
                    Clube de Fórmulas
                  </span>
                  <span className="font-serif text-[12px] opacity-70">2026</span>
                </div>
                <div className="relative z-[2]">
                  <div className="w-9 h-0.5 bg-white/50 mb-2.5" />
                  <div className="text-[10px] tracking-[2.5px] uppercase font-bold opacity-80 mb-2.5">
                    {p.tag}
                  </div>
                  <h3 className="font-serif text-[22px] leading-[1.15] mb-2 font-normal tracking-[-0.3px]">
                    {p.title}
                  </h3>
                  <div className="text-[11.5px] opacity-75 font-medium tracking-[0.3px]">
                    Samir Tannuri · {p.edition}
                  </div>
                </div>
              </div>
              <div className="p-[22px] px-[22px] pb-6 border-t border-border">
                <div className="flex justify-between items-center mb-2.5">
                  <span
                    className="text-[10.5px] font-semibold py-[3px] px-2.5 rounded-md tracking-[0.5px] uppercase"
                    style={{
                      background: getTagStyle(p.cat).bg,
                      color: getTagStyle(p.cat).color,
                    }}
                  >
                    {p.tag}
                  </span>
                  <span className="text-[14px] font-bold text-copper">{p.price}</span>
                </div>
                <h4 className="font-serif text-[17px] font-normal text-navy mb-1.5 leading-[1.3]">
                  {p.title}
                </h4>
                <p className="text-[12px] text-muted leading-[1.6] mb-3 min-h-[38px]">{p.desc}</p>
                <div className="inline-flex items-center gap-1.5 text-copper text-[12px] font-semibold tracking-[0.3px]">
                  {p.link ? "Comprar agora" : "Saiba mais"} <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
