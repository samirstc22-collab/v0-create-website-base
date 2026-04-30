import Link from "next/link"
import {
  Beaker,
  FlaskConical,
  Sparkles,
  Droplets,
  Pill,
  Microscope,
  TestTube2,
  Leaf,
  ShieldCheck,
  ArrowRight,
  Factory,
  Building2,
  Briefcase,
  Award,
} from "lucide-react"

type Industry = "Grau I" | "Grau II" | "Magistral" | "Marca Própria"

interface PortfolioItem {
  num: number
  title: string
  category: string
  industry: Industry
  desc: string
  icon: typeof FlaskConical
}

const items: PortfolioItem[] = [
  {
    num: 1,
    title: "Peeling de Ácido Azelaico em Pasta Anidra",
    category: "Peelings Químicos",
    industry: "Magistral",
    desc:
      "Primeiro peeling autoral em apresentação de pasta anidra do mundo. Veículo lipídico com penetração controlada e redução de irritabilidade.",
    icon: FlaskConical,
  },
  {
    num: 2,
    title: "Sérum Niacinamida 25% — Bench to Bedside",
    category: "Skincare Avançado",
    industry: "Grau I",
    desc:
      "Sérum facial com biodisponibilidade otimizada. Ensaio Visia® demonstrou +30,5% de melhora média em 60 dias.",
    icon: Droplets,
  },
  {
    num: 3,
    title: "Técnica Fenol FREE",
    category: "Peelings Profundos",
    industry: "Magistral",
    desc:
      "Substituição segura do fenol em peelings profundos. Protocolo replicável com lastro científico e segurança ampliada.",
    icon: ShieldCheck,
  },
  {
    num: 4,
    title: "Base Galênica Hidrofóbica Capilar",
    category: "Tricologia",
    industry: "Grau II",
    desc:
      "Base de leave-in com afinidade lipídica controlada para peles negras e cabelos crespos — apresentada em conferência técnica internacional.",
    icon: Beaker,
  },
  {
    num: 5,
    title: "Sérum Clareador Rosa Selvagem",
    category: "Hipercromias",
    industry: "Marca Própria",
    desc:
      "Combinação sinérgica de Niacinamida, Ácido Hialurônico e Alpha-Arbutin para melasma e fotodano cumulativo.",
    icon: Droplets,
  },
  {
    num: 6,
    title: "Cápsula Oral Bioidêntica de Liberação Modificada",
    category: "Hormônios Bioidênticos",
    industry: "Magistral",
    desc:
      "Tecnologia de liberação modificada para padronização farmacocinética. Rastreabilidade analítica completa.",
    icon: Pill,
  },
  {
    num: 7,
    title: "Sérum Anti-Idade Vetorizado em Lipossoma",
    category: "Anti-aging",
    industry: "Grau I",
    desc:
      "Vetorização lipossomal de retinaldeído + peptídeo sinalizador. Estudo controlado de 90 dias com análise instrumental.",
    icon: TestTube2,
  },
  {
    num: 8,
    title: "Hidratante Corporal com Bioativos Amazônicos",
    category: "Bioativos Naturais",
    industry: "Grau II",
    desc:
      "Cinco bioativos amazônicos em sinergia, com claims defensáveis e cadeia de fornecimento rastreada.",
    icon: Leaf,
  },
  {
    num: 9,
    title: "Loção Capilar para Alopecia Androgenética",
    category: "Tricologia Clínica",
    industry: "Magistral",
    desc:
      "Combinação multi-ativo com penetração folicular validada e protocolo posológico para clínicas e prescritores.",
    icon: FlaskConical,
  },
  {
    num: 10,
    title: "Linha Pediátrica de Cápsulas Palatabilizadas",
    category: "Manipulação Oral",
    industry: "Magistral",
    desc:
      "Sistema de mascaramento de sabor + estabilidade ampliada. Aceitação pediátrica medida em estudo clínico magistral.",
    icon: Pill,
  },
  {
    num: 11,
    title: "Emulsão Solar com Filtros Vetorizados",
    category: "Fotoproteção",
    industry: "Grau I",
    desc:
      "Combinação de filtros químicos vetorizados em micropartículas, com sensorial leve e claims regulatórios robustos.",
    icon: ShieldCheck,
  },
  {
    num: 12,
    title: "Base Anidra para Vitamina C Pura",
    category: "Skincare Premium",
    industry: "Grau II",
    desc:
      "Sistema veicular anidro que mantém L-ascórbico estável por 24 meses sem refrigeração. Patenteável.",
    icon: Beaker,
  },
  {
    num: 13,
    title: "Matéria-Prima · Complexo Despigmentante Autoral",
    category: "Insumos · MP",
    industry: "Marca Própria",
    desc:
      "Complexo despigmentante de marca própria, com dossiê técnico completo, licenciado para indústria e magistral.",
    icon: Microscope,
  },
  {
    num: 14,
    title: "Creme de Regeneração Pós-Procedimento",
    category: "Reparação Cutânea",
    industry: "Grau I",
    desc:
      "Cicatrização acelerada e redução de eritema pós-laser/peeling. Testado em ensaio clínico aplicado.",
    icon: Sparkles,
  },
  {
    num: 15,
    title: "Tônico Equilibrante para Acne Adulta",
    category: "Acne & Oleosidade",
    industry: "Grau II",
    desc:
      "Sinergia de queratolíticos suaves + sebo-regulador. Compatível com ativos prescritos por dermatologistas.",
    icon: Droplets,
  },
  {
    num: 16,
    title: "Suplemento Nutracêutico Capilar",
    category: "Nutracêuticos",
    industry: "Marca Própria",
    desc:
      "Fórmula oral autoral para queda capilar. Posologia validada em estudo de 6 meses com avaliação fototricoscópica.",
    icon: Pill,
  },
  {
    num: 17,
    title: "Sérum Antioxidante Polifenólico",
    category: "Antioxidantes",
    industry: "Grau I",
    desc:
      "Combinação de polifenóis vegetais com sinergia comprovada em ORAC. Pronto para escala industrial.",
    icon: Leaf,
  },
  {
    num: 18,
    title: "Loção Corporal de Uso Hospitalar",
    category: "Cuidados Hospitalares",
    industry: "Grau II",
    desc:
      "Formulação para uso em ambiente hospitalar — hipoalergênica, sem fragrância, com claims dermatológicos.",
    icon: ShieldCheck,
  },
  {
    num: 19,
    title: "Espuma de Limpeza Sebo-Reguladora",
    category: "Higiene Facial",
    industry: "Grau I",
    desc:
      "Tensoativos suaves de origem vegetal com surfactância balanceada. Sensorial premium e claims defensáveis.",
    icon: Droplets,
  },
  {
    num: 20,
    title: "Pasta Oral para Hipersensibilidade",
    category: "Cosmética Oral",
    industry: "Grau II",
    desc:
      "Pasta dental oclusiva com efeito de remineralização. Desenvolvida para grandes marcas em ciclo curto.",
    icon: Pill,
  },
  {
    num: 21,
    title: "Loção Capilar Anti-Caspa Profissional",
    category: "Tricologia",
    industry: "Marca Própria",
    desc:
      "Combinação antifúngica + sebo-reguladora para uso prolongado. Aprovada em painel sensorial profissional.",
    icon: FlaskConical,
  },
  {
    num: 22,
    title: "Matéria-Prima · Veículo Lipídico Próprio",
    category: "Insumos · MP",
    industry: "Marca Própria",
    desc:
      "Sistema veicular lipídico licenciável para terceiros. Reduz tempo de desenvolvimento de novos produtos em até 60%.",
    icon: TestTube2,
  },
]

const industryStyle: Record<Industry, { bg: string; text: string; border: string; icon: typeof Factory }> = {
  "Grau I": { bg: "bg-[#0096B4]/10", text: "text-[#0d8aa3]", border: "border-[#0096B4]/30", icon: Factory },
  "Grau II": { bg: "bg-[#b87333]/10", text: "text-[#b87333]", border: "border-[#b87333]/30", icon: Building2 },
  Magistral: { bg: "bg-[#0C2340]/8", text: "text-[#0C2340]", border: "border-[#0C2340]/25", icon: Briefcase },
  "Marca Própria": { bg: "bg-[#9e7b3a]/10", text: "text-[#9e7b3a]", border: "border-[#9e7b3a]/30", icon: Award },
}

export function PortfolioShowcase() {
  return (
    <section
      id="vitrine"
      className="relative bg-[#fbf8f3] py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header — eyebrow + título + parágrafo justificado + counter de fórmulas */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b87333]/30 bg-[#b87333]/8 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[2.5px] text-[#b87333]">
            <Sparkles className="h-3.5 w-3.5" />
            Vitrine de Fórmulas · 2019 — 2026
          </div>
          <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-[#0a1628] md:text-5xl lg:text-6xl text-balance">
            +20 fórmulas autorais entregues a marcas líderes em P&amp;D, criação de produto e formulação de matéria-prima.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-justify text-[17px] leading-relaxed text-[#0a1628]/75 md:text-center">
            Da bancada magistral à indústria{" "}
            <strong className="text-[#0a1628]">Grau I e II</strong>: cada fórmula nasce de
            pesquisa aplicada, evidência clínica e ciclo de inovação curto. Esta é uma seleção
            curada do que foi entregue nos últimos seis anos para clínicas, magistrais, marcas
            próprias e grandes indústrias cosméticas.
          </p>
        </div>

        {/* Faixa de KPIs */}
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {[
            { v: "22", l: "Fórmulas exibidas" },
            { v: "9", l: "Categorias" },
            { v: "I & II", l: "Indústria · Grau" },
            { v: "6 anos", l: "P&D aplicado" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-xl border border-[#0a1628]/10 bg-white px-4 py-3 text-center"
            >
              <div className="font-serif text-2xl text-[#0a1628] md:text-3xl">{s.v}</div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-[1.5px] text-[#0a1628]/55">
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Industry legend */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {(["Grau I", "Grau II", "Magistral", "Marca Própria"] as Industry[]).map((ind) => {
            const s = industryStyle[ind]
            const Icon = s.icon
            return (
              <span
                key={ind}
                className={`inline-flex items-center gap-2 rounded-full border ${s.border} ${s.bg} px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] ${s.text}`}
              >
                <Icon className="h-3 w-3" />
                {ind}
              </span>
            )
          })}
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon
            const s = industryStyle[item.industry]
            const IndIcon = s.icon
            return (
              <article
                key={item.num}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#0a1628]/10 bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-[#b87333]/40 hover:shadow-[0_18px_50px_-20px_rgba(184,115,51,0.25)]"
              >
                {/* Number watermark */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-2 -top-3 select-none font-serif text-[100px] leading-none text-[#0a1628]/[0.04] tracking-tighter"
                >
                  {String(item.num).padStart(2, "0")}
                </span>

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0a1628] text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border ${s.border} ${s.bg} px-3 py-1 text-[10px] font-bold uppercase tracking-[1.5px] ${s.text}`}
                  >
                    <IndIcon className="h-3 w-3" />
                    {item.industry}
                  </span>
                </div>

                <div className="relative mt-5 text-[10px] font-bold uppercase tracking-[2.5px] text-[#b87333]">
                  {item.category}
                </div>
                <h3 className="relative mt-2 font-serif text-[22px] leading-[1.15] text-[#0a1628]">
                  {item.title}
                </h3>
                <p className="relative mt-3 flex-1 text-justify text-[14.5px] leading-relaxed text-[#0a1628]/70 hyphens-auto">
                  {item.desc}
                </p>

                <div className="relative mt-5 flex items-center justify-between border-t border-[#0a1628]/10 pt-4 text-[11px] font-bold uppercase tracking-wider text-[#0a1628]/45">
                  <span>Fórmula nº {String(item.num).padStart(2, "0")}</span>
                  <span className="inline-flex items-center gap-1 text-[#b87333] opacity-0 transition-opacity group-hover:opacity-100">
                    Detalhes <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA — confidencialidade + briefing */}
        <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-[#0a1628]/10 bg-white p-6 md:mt-16 md:p-8">
          <div className="flex flex-col items-start gap-5 md:flex-row md:items-center md:justify-between md:gap-6">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-[#b87333]">
                <ShieldCheck className="h-3 w-3" />
                Vitrine pública
              </div>
              <p className="text-justify text-[15px] leading-relaxed text-[#0a1628]/75">
                Esta é uma seleção pública. Projetos sob NDA, marcas próprias confidenciais e
                fórmulas em desenvolvimento ficam fora desta lista. Para conversar sobre um
                briefing específico, traga seu desafio.
              </p>
            </div>
            <Link
              href="/contato"
              className="group inline-flex flex-shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#b87333] to-[#8a5729] px-6 py-3.5 text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(184,115,51,0.5)] transition-all hover:-translate-y-0.5"
            >
              <Microscope className="h-4 w-4" />
              Solicitar briefing técnico
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
