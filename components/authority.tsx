import { ArrowRight } from "lucide-react"

const articles = [
  {
    cover: "b-ghkcu",
    formula: "GHK-Cu",
    label: "Lâmina Técnica #01",
    coverTitle: "Peptídeo GHK-Cu em Dermatologia",
    category: "Peptídeos",
    readTime: "12 min",
    title: "Peptídeo GHK-Cu: mecanismos moleculares e protocolos magistrais",
    excerpt:
      "Revisão técnica do tripeptídeo Gly-His-Lys quelado com cobre e suas aplicações em firmeza cutânea, regeneração e reparo tecidual. Formulações compatíveis e incompatibilidades químicas.",
    link: "#",
  },
  {
    cover: "b-fenol",
    formula: "FREE",
    label: "Lâmina Técnica #02",
    coverTitle: "Técnica Fenol FREE",
    category: "Peelings",
    readTime: "15 min",
    title: "Fenol FREE: profundidade com segurança",
    excerpt:
      "Técnica autoral criada e apresentada no 20° Congresso Consulfarma. Combinação Glicólico 20–70%, Mandélico 45%, Retinóico 5% e Azelaico para profundidade de peeling fenol sem os riscos.",
    link: "#",
  },
  {
    cover: "b-nano",
    formula: "NANO",
    label: "Lâmina Técnica #03",
    coverTitle: "Nanoencapsulamento Farmacêutico",
    category: "Nanotecnologia",
    readTime: "10 min",
    title: "9 ativos Nano: aumento de biodisponibilidade",
    excerpt:
      "Retinol, Tranexâmico, Kojico, Q10, Vitamina C, PDRN, Peptídeos, Cisteamina e Arbutina em versão nano. Drug delivery transdérmico com redução de irritação e aumento de eficácia.",
    link: "#",
  },
  {
    cover: "b-fotoprot",
    formula: "UV",
    label: "Artigo Peer-Reviewed",
    coverTitle: "Fotoproteção Inclusiva",
    category: "Publicação DOI",
    readTime: "Ensaios Pioneiros",
    title: "Protetor Solar para Peles Negras — Fitzpatrick V–VI",
    excerpt:
      "FPS 30,5 · FPUVA 10,3 · λc 378,3nm. Único trabalho no Brasil com design experimental validado laboratorialmente para peles negras. Pigmentos microencapsulados de óxido de ferro e ZnO.",
    link: "https://doi.org/10.24933/rep.v6i2.281",
    external: true,
  },
  {
    cover: "b-melasma",
    formula: "360°",
    label: "Lâmina Técnica #04",
    coverTitle: "Melasma Multimodal",
    category: "Protocolos",
    readTime: "18 min",
    title: "Abordagem multimodal para fototipos III–VI",
    excerpt:
      "8 protocolos documentados com estratégia fototipo-específica. Home care HQ e HQ-free, pré e pós-peeling, microagulhamento, lasers e combinados. Despigmentantes TXA, Arbutina, Kojico, Niacinamida e Cisteamina.",
    link: "#",
  },
  {
    cover: "b-growth",
    formula: "TGF-β",
    label: "Lâmina Técnica #05",
    coverTitle: "Fatores de Crescimento",
    category: "Regenerativa",
    readTime: "14 min",
    title: "TGF-β, EGF, FGF e PDGF na dermatologia magistral",
    excerpt:
      "Pesquisa CNPq aplicada: estabilidade, veículos anidros, conservação e protocolos pós-procedimento (laser CO2, microagulhamento). 15+ formulações completas com concentrações, pH e embalagem validados.",
    link: "#",
  },
]

export function Authority() {
  return (
    <section id="authority" className="py-[110px] px-8 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[11.5px] font-bold tracking-[2.5px] uppercase text-copper inline-block mb-3.5">
            Conteúdos de Autoridade
          </span>
          <h2 className="font-serif font-normal text-[clamp(32px,4vw,44px)] text-navy mb-4 leading-[1.15] tracking-[-0.5px]">
            Lâminas Técnicas & Artigos
          </h2>
          <p className="text-[15px] text-muted max-w-[580px] mx-auto leading-[1.7]">
            Biblioteca editorial com aprofundamento técnico em peptídeos, peelings, nanotecnologia
            e protocolos clínicos — atualizada periodicamente.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6 mt-3">
          {articles.map((article, i) => (
            <article
              key={i}
              className="bg-white border border-border rounded-[18px] overflow-hidden transition-all cursor-pointer flex flex-col hover:translate-y-[-4px] hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)] hover:border-[rgba(192,133,74,0.3)]"
            >
              <div
                className={`aspect-[16/10] flex flex-col justify-between p-6 px-[22px] text-white relative overflow-hidden ${article.cover}`}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40 pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[80px] opacity-10 tracking-[4px] z-[1] font-bold">
                  {article.formula}
                </div>
                <span className="text-[9.5px] tracking-[2.5px] uppercase font-bold relative z-[2] opacity-90">
                  {article.label}
                </span>
                <h3 className="font-serif text-[22px] leading-[1.2] relative z-[2]">
                  {article.coverTitle.split(" ").slice(0, 2).join(" ")}
                  <br />
                  {article.coverTitle.split(" ").slice(2).join(" ")}
                </h3>
              </div>
              <div className="p-[22px] px-6 flex-1 flex flex-col">
                <div className="flex gap-3 text-[11px] text-muted mb-2.5 tracking-[0.5px] uppercase font-semibold">
                  <span>{article.category}</span>
                  <span className="text-copper">·</span>
                  <span>{article.readTime}</span>
                </div>
                <h4 className="font-serif text-[17px] text-navy mb-2.5 leading-[1.3] font-normal">
                  {article.title}
                </h4>
                <p className="text-[13px] text-muted leading-[1.65] flex-1 mb-3.5">
                  {article.excerpt}
                </p>
                <a
                  href={article.link}
                  target={article.external ? "_blank" : undefined}
                  rel={article.external ? "noopener noreferrer" : undefined}
                  className="text-copper text-[12px] font-semibold tracking-[0.3px] inline-flex items-center gap-1"
                >
                  {article.external ? "Acessar DOI" : "Ler lâmina técnica"}{" "}
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
