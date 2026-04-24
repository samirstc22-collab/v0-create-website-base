import { ArrowRight, ExternalLink, Clock, Tag } from "lucide-react"
import { CircuitPattern } from "../illustrations"

const articles = [
  {
    cover: "b-ghkcu",
    formula: "GHK-Cu",
    label: "Lamina Tecnica #01",
    coverTitle: "Peptideo GHK-Cu em Dermatologia",
    category: "Peptideos",
    readTime: "12 min",
    title: "Peptideo GHK-Cu: mecanismos moleculares e protocolos magistrais",
    excerpt:
      "Revisao tecnica do tripeptideo Gly-His-Lys quelado com cobre e suas aplicacoes em firmeza cutanea, regeneracao e reparo tecidual. Formulacoes compativeis e incompatibilidades quimicas.",
    link: "#",
  },
  {
    cover: "b-fenol",
    formula: "FREE",
    label: "Lamina Tecnica #02",
    coverTitle: "Tecnica Fenol FREE",
    category: "Peelings",
    readTime: "15 min",
    title: "Fenol FREE: profundidade com seguranca",
    excerpt:
      "Tecnica autoral criada e apresentada no 20o Congresso In-Cosmetics. Combinacao Glicolico 20-70%, Mandelico 45%, Retinoico 5% e Azelaico para profundidade de peeling fenol sem os riscos.",
    link: "#",
  },
  {
    cover: "b-nano",
    formula: "NANO",
    label: "Lamina Tecnica #03",
    coverTitle: "Nanoencapsulamento Farmaceutico",
    category: "Nanotecnologia",
    readTime: "10 min",
    title: "9 ativos Nano: aumento de biodisponibilidade",
    excerpt:
      "Retinol, Tranexamico, Kojico, Q10, Vitamina C, PDRN, Peptideos, Cisteamina e Arbutina em versao nano. Drug delivery transdermico com reducao de irritacao e aumento de eficacia.",
    link: "#",
  },
  {
    cover: "b-fotoprot",
    formula: "UV",
    label: "Artigo Peer-Reviewed",
    coverTitle: "Fotoprotecao Inclusiva",
    category: "Publicacao DOI",
    readTime: "Ensaios Pioneiros",
    title: "Protetor Solar para Peles Negras — Fitzpatrick V-VI",
    excerpt:
      "FPS 30,5 | FPUVA 10,3 | Lc 378,3nm. Unico trabalho no Brasil com design experimental validado laboratorialmente para peles negras. Pigmentos microencapsulados de oxido de ferro e ZnO.",
    link: "https://doi.org/10.24933/rep.v6i2.281",
    external: true,
  },
  {
    cover: "b-melasma",
    formula: "360",
    label: "Lamina Tecnica #04",
    coverTitle: "Melasma Multimodal",
    category: "Protocolos",
    readTime: "18 min",
    title: "Abordagem multimodal para fototipos III-VI",
    excerpt:
      "8 protocolos documentados com estrategia fototipo-especifica. Home care HQ e HQ-free, pre e pos-peeling, microagulhamento, lasers e combinados. Despigmentantes TXA, Arbutina, Kojico, Niacinamida e Cisteamina.",
    link: "#",
  },
  {
    cover: "b-growth",
    formula: "TGF-B",
    label: "Lamina Tecnica #05",
    coverTitle: "Fatores de Crescimento",
    category: "Regenerativa",
    readTime: "14 min",
    title: "TGF-B, EGF, FGF e PDGF na dermatologia magistral",
    excerpt:
      "Pesquisa aplicada: estabilidade, veiculos anidros, conservacao e protocolos pos-procedimento (laser CO2, microagulhamento). 15+ formulacoes completas com concentracoes, pH e embalagem validados.",
    link: "#",
  },
]

export function ConteudosGrid() {
  return (
    <section className="py-28 px-6 lg:px-10 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <CircuitPattern className="absolute top-20 right-[3%] w-36 h-36 text-copper opacity-8" />
      <CircuitPattern className="absolute bottom-40 left-[3%] w-28 h-28 text-teal opacity-8 rotate-180" />

      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, i) => (
            <article
              key={i}
              className="group bg-white border border-border rounded-3xl overflow-hidden transition-all cursor-pointer flex flex-col hover:translate-y-[-6px] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:border-copper/40"
            >
              {/* Cover */}
              <div
                className={`aspect-[16/10] flex flex-col justify-between p-6 text-white relative overflow-hidden ${article.cover}`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/50 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[100px] opacity-[0.12] tracking-[4px] z-[1] font-bold">
                  {article.formula}
                </div>
                <span className="text-[10px] tracking-[3px] uppercase font-bold relative z-[2] opacity-90">
                  {article.label}
                </span>
                <h3 className="font-serif text-2xl leading-tight relative z-[2]">
                  {article.coverTitle}
                </h3>
              </div>

              {/* Content */}
              <div className="p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-muted mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5" />
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
                
                <h4 className="font-serif text-xl text-navy mb-3 leading-tight">
                  {article.title}
                </h4>
                
                <p className="text-base text-muted leading-relaxed flex-1 mb-5">
                  {article.excerpt}
                </p>
                
                <a
                  href={article.link}
                  target={article.external ? "_blank" : undefined}
                  rel={article.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-copper text-sm font-bold tracking-wide group-hover:gap-3 transition-all"
                >
                  {article.external ? (
                    <>
                      Acessar DOI <ExternalLink className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Ler lamina tecnica <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
