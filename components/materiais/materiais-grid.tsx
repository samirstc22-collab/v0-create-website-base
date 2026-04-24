"use client"

import { useState } from "react"
import { ArrowRight, Sparkles } from "lucide-react"
import { HexagonPattern } from "../illustrations"

const products = [
  {
    cat: "ebook",
    tag: "eBook",
    title: "Dermatologia Regenerativa Aplicada",
    cover: "cover-regen",
    ornament: "RG",
    edition: "Manual Hotmart 2026",
    desc: "Peptideos biomimeticos, PDRN, exossomos e 27 prescricoes magistrais. 60+ paginas.",
    price: "R$ 39",
    link: "https://pay.hotmart.com/A105091762I",
    hot: true,
  },
  {
    cat: "formulario",
    tag: "Formulario",
    title: "Melasma — 4 Volumes",
    cover: "cover-melasma",
    ornament: "M",
    edition: "Volume Completo",
    desc: "Patofisiologia, home care, peelings, microagulhamento e nutraceuticos.",
    price: "Consulte",
  },
  {
    cat: "formulario",
    tag: "Formulario",
    title: "Peptideos 2026",
    cover: "cover-peptides",
    ornament: "P",
    edition: "48 paginas | 2026",
    desc: "TGF-B, EGF, FGF, PDRN, GHK-Cu. 13 laminas tecnicas A4.",
    price: "Consulte",
  },
  {
    cat: "ebook",
    tag: "eBook",
    title: "Cicatrizacao & Reparo",
    cover: "cover-cicatriz",
    ornament: "C",
    edition: "9 capitulos",
    desc: "Protocolos clinicos e prescricoes magistrais. Vancouver + DOI.",
    price: "Consulte",
  },
  {
    cat: "formulario",
    tag: "Guia",
    title: "Veiculos Dermatologicos",
    cover: "cover-veiculos",
    ornament: "V",
    edition: "100+ paginas",
    desc: "20 bases magistrais, 15 capitulos farmacotecnicos. pH/pKa de 17 ativos.",
    price: "Consulte",
  },
  {
    cat: "formulario",
    tag: "Compendio",
    title: "Bases Cosmeticas",
    cover: "cover-bases",
    ornament: "B",
    edition: "20 formulas",
    desc: "Bases dermatologicas com especificacoes tecnicas completas.",
    price: "Consulte",
  },
  {
    cat: "formulario",
    tag: "Guia",
    title: "Guia Terapeutico",
    cover: "cover-terapeutico",
    ornament: "G",
    edition: "Dermatologico Magistral",
    desc: "Acne, rosacea, psoriase, eczemas, alopecias, onicomicoses e discromias.",
    price: "Consulte",
  },
  {
    cat: "formulario",
    tag: "Formulario",
    title: "Clareadores & Antioxidantes",
    cover: "cover-clareadores",
    ornament: "Cl",
    edition: "2a Edicao",
    desc: "Ativos clareadores cutaneos e antioxidantes com prescricoes magistrais.",
    price: "Consulte",
  },
  {
    cat: "formulario",
    tag: "Formulario",
    title: "Fatores de Crescimento",
    cover: "cover-growth",
    ornament: "FC",
    edition: "Protocolo",
    desc: "EGF, FGF, VEGF, PDGF e fatores lipossomados. 15+ formulacoes.",
    price: "Consulte",
  },
  {
    cat: "ebook",
    tag: "Guia",
    title: "Atualizacao Dermatologia",
    cover: "cover-atual",
    ornament: "A",
    edition: "Edicao 2025",
    desc: "Novos ativos, tendencias e protocolos dermatologicos atualizados.",
    price: "Consulte",
  },
  {
    cat: "curso",
    tag: "Curso EAD",
    title: "MELASMA ZERO 360",
    cover: "cover-curso",
    ornament: "360",
    edition: "Curso ao vivo",
    desc: "Peeling ATA GREEN e protocolos exclusivos multimodais.",
    price: "Em breve",
  },
  {
    cat: "formulario",
    tag: "Laminas",
    title: "Protocolos Peelings",
    cover: "cover-peelings",
    ornament: "Pe",
    edition: "Fenol FREE",
    desc: "Peelings quimicos exclusivos com concentracoes, pH e tecnicas.",
    price: "Consulte",
  },
]

const tabs = [
  { key: "all", label: "Todos", count: 12 },
  { key: "ebook", label: "eBooks & Guias", count: 3 },
  { key: "formulario", label: "Formularios", count: 8 },
  { key: "curso", label: "Cursos", count: 1 },
]

export function MateriaisGrid() {
  const [activeTab, setActiveTab] = useState("all")

  const filtered = activeTab === "all" ? products : products.filter((p) => p.cat === activeTab)

  const getTagStyle = (cat: string) => {
    if (cat === "curso") return { bg: "bg-teal/10", color: "text-teal" }
    if (cat === "formulario") return { bg: "bg-copper/15", color: "text-copper" }
    return { bg: "bg-navy/6", color: "text-navy" }
  }

  return (
    <section className="py-28 px-6 lg:px-10 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <HexagonPattern className="absolute top-20 right-[2%] w-32 h-32 text-teal opacity-8" />
      <HexagonPattern className="absolute bottom-40 left-[2%] w-28 h-28 text-copper opacity-8" />

      <div className="max-w-[1320px] mx-auto">
        {/* Tabs */}
        <div className="flex gap-3 justify-center mb-14 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`border rounded-full py-3 px-7 text-sm font-semibold transition-all ${
                activeTab === tab.key
                  ? "bg-navy border-navy text-white"
                  : "bg-transparent border-border text-body hover:border-copper hover:text-copper"
              }`}
            >
              {tab.label}
              <span className={`ml-2 text-xs ${activeTab === tab.key ? "opacity-70" : "opacity-50"}`}>
                ({tab.count})
              </span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <article
              key={i}
              onClick={() => p.link && window.open(p.link, "_blank")}
              className="group bg-white rounded-2xl overflow-hidden border border-border transition-all cursor-pointer flex flex-col hover:translate-y-[-8px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:border-copper/40"
            >
              {/* Cover */}
              <div
                className={`aspect-[3/4] relative overflow-hidden flex flex-col justify-between p-6 text-white ${p.cover}`}
              >
                {p.hot && (
                  <div className="absolute top-4 right-4 bg-green-500 rounded-full p-2 shadow-[0_0_16px_rgba(34,197,94,0.6)] z-[5]">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/40 pointer-events-none" />
                <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.1] font-serif text-[180px] leading-none font-bold z-[1] pointer-events-none">
                  {p.ornament}
                </div>
                <div className="relative z-[2] flex justify-between items-start">
                  <span className="text-[10px] tracking-[2px] uppercase opacity-90 font-bold">
                    Clube de Formulas
                  </span>
                  <span className="font-serif text-sm opacity-70">2026</span>
                </div>
                <div className="relative z-[2]">
                  <div className="w-10 h-0.5 bg-white/60 mb-3" />
                  <div className="text-[10px] tracking-[3px] uppercase font-bold opacity-85 mb-3">
                    {p.tag}
                  </div>
                  <h3 className="font-serif text-2xl leading-tight mb-2 tracking-[-0.3px]">
                    {p.title}
                  </h3>
                  <div className="text-xs opacity-80 font-medium tracking-wide">
                    Samir Tannuri | {p.edition}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 border-t border-border flex-1 flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <span
                    className="text-xs font-bold py-1 px-3 rounded-lg tracking-wide uppercase"
                    style={{
                      background: getTagStyle(p.cat).bg.replace("bg-", ""),
                      color: getTagStyle(p.cat).color.replace("text-", ""),
                    }}
                  >
                    {p.tag}
                  </span>
                  <span className="text-lg font-bold text-copper">{p.price}</span>
                </div>
                <h4 className="font-serif text-xl text-navy mb-2 leading-tight">
                  {p.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{p.desc}</p>
                <div className="inline-flex items-center gap-2 text-copper text-sm font-bold tracking-wide group-hover:gap-3 transition-all">
                  {p.link ? "Comprar agora" : "Saiba mais"} <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
