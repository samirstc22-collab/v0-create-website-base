export type TierItem = {
  num: number
  title: string
  pages?: string
  file?: string
  size?: string
  activos?: string
  formulas?: string
  protocolos?: string
  indicacoes?: string
  publico?: string
  desc?: string
}

export type Tier = {
  id: string
  number: string
  level: string
  icon: string
  accent: string
  accentBg: string
  accentBorder: string
  size: string
  description: string
  items: TierItem[]
}

export const TIERS: Tier[] = [
  {
    id: "tier-1",
    number: "T1",
    level: "MÁXIMA COMPLEXIDADE",
    icon: "●",
    accent: "#C8102E",
    accentBg: "rgba(200, 16, 46, 0.08)",
    accentBorder: "rgba(200, 16, 46, 0.25)",
    size: "40–200+ páginas",
    description:
      "Obras integradas e multidisciplinares. Síntese avançada de múltiplos domínios clínicos e farmacotécnicos.",
    items: [
      {
        num: 1,
        title: "Formulário Integrado Peptídeos 2026",
        pages: "150p",
        file: "FORMULARIO_INTEGRADO_PEPTIDEOS_2026.pdf",
        size: "2.6 MB",
        activos: "GHKCu · EGF · bFGF · IGF-1 · VEGFr · Colágeno I/III · PDRN · Exossomos",
        formulas: "60+ magistrais com concentrações exatas, pH e modos de uso",
        indicacoes: "Envelhecimento · Cicatrização · Pós-laser · Queloide · Alopecia areata",
        publico: "Dermatologistas regenerativistas · Pesquisadores · Consultores sênior",
      },
      {
        num: 2,
        title: "Protocolo Peelings Exclusivos",
        pages: "45p",
        file: "protocolo_peelings_exclusivos.md",
        size: "42 KB",
        activos: "ATA GREEN™ · TCA 15–35% · Mandélico · Retinóico · Salicílico · Glicólico",
        protocolos: "18 sequências — Melasma (6) · Acne (4) · Anti-Aging (5) · Pós-Laser (3)",
        publico: "Dermatologistas procedurais · Clínicas estéticas",
      },
      {
        num: 3,
        title: "Guia Terapêutico Dermatológico Magistral",
        pages: "Master",
        file: "GUIA_TERAPEUTICO_DERMATOLOGICO_MAGISTRAL.md",
        size: "43 KB",
        activos: "42 condições dermatológicas mapeadas",
        formulas: "200+ prescrições com compatibilidades confirmadas",
        publico: "Farmacêuticos magistrais sênior · Consultores · Formuladores",
      },
    ],
  },
  {
    id: "tier-2",
    number: "T2",
    level: "ALTA COMPLEXIDADE",
    icon: "◆",
    accent: "#B8783D",
    accentBg: "rgba(184, 120, 61, 0.08)",
    accentBorder: "rgba(184, 120, 61, 0.25)",
    size: "20–50 páginas",
    description: "Obras especializadas em uma disciplina. Profundidade clínica e aplicabilidade direta.",
    items: [
      {
        num: 4,
        title: "Protocolo Melasma Integrado",
        pages: "25p",
        desc: "45 fórmulas · 6 algoritmos (4/8/12 semanas) · Laser + Microagulhamento",
      },
      {
        num: 5,
        title: "Protocolo Rosácea — Graus I–III",
        pages: "20p",
        desc: "18 prescrições · Azelaico 15–20% · Niacinamida 4–5%",
      },
      {
        num: 6,
        title: "Formulário Fatores de Crescimento",
        pages: "35p",
        desc: "50+ prescrições · VEGF-r, IGF-1, EGF, bFGF, TGF-β, FGF-2, PDRN",
      },
      {
        num: 7,
        title: "Incompatibilidades & Erros Farmacotécnicos",
        pages: "Master",
        desc: "80+ pares incompatíveis · 3 níveis de criticidade · Matriz interativa",
      },
    ],
  },
  {
    id: "tier-3",
    number: "T3",
    level: "COMPLEXIDADE MÉDIA",
    icon: "◇",
    accent: "#D4A22A",
    accentBg: "rgba(212, 162, 42, 0.08)",
    accentBorder: "rgba(212, 162, 42, 0.25)",
    size: "10–25 páginas",
    description: "Obras bem estruturadas focadas em um diagnóstico ou tecnologia específica.",
    items: [
      { num: 8, title: "Periorbital, Pescoço & Colo", desc: "Rugas, flacidez, manchas · Protocolos 12 semanas" },
      { num: 9, title: "Estrias Atróficas Recentes", desc: "Laser + Microagulhamento + Tópico · Tripla terapia" },
      { num: 10, title: "Acne — Tripla Combinação", desc: "Azelaico 15–20% + Niacinamida 4–5% + Salicílico 2–5%" },
      { num: 11, title: "Acne, Rosácea, Foliculoses", desc: "5 algoritmos · 20+ prescrições" },
      { num: 12, title: "Psoríase & Eczemas", desc: "Corticosteroides · Queratolíticos · Imunomoduladores" },
      { num: 13, title: "Discromias", desc: "Melasma · Sardas · Lentigos · Vitiligo" },
      { num: 14, title: "Alopecias & Tricoses", desc: "Androgênica · Areata · Telógena" },
      { num: 15, title: "Onicoses & Onicomicoses", desc: "Antifúngicos · Keratolíticos · Protocolos 8–12 semanas" },
      { num: 16, title: "Micoses Superficiais", desc: "Dermatofitoses · Candidoses · Pitiríase versicolor" },
    ],
  },
  {
    id: "tier-4",
    number: "T4",
    level: "REFERÊNCIA RÁPIDA",
    icon: "○",
    accent: "#0096B4",
    accentBg: "rgba(0, 150, 180, 0.08)",
    accentBorder: "rgba(0, 150, 180, 0.25)",
    size: "2–10 páginas",
    description: "Guias, lâminas e compêndios para consulta objetiva em bancada ou consultório.",
    items: [
      { num: 17, title: "Apostila Veículos Dermatológicos 2026", pages: "51p", desc: "15 capítulos · Compêndio de 20 bases" },
      { num: 18, title: "Compêndio Bases Cosméticas", desc: "20 bases validadas · Propriedades físico-químicas" },
      { num: 19, title: "Tecnologia de Veículos", desc: "Emulsificação · Estabilidade · Reologia" },
      { num: 20, title: "Veículos Magistrais", desc: "Seleção rápida · INCI · Indicações" },
      { num: 21, title: "Fundamentos de Veículos", desc: "Farmacocinética · pH · Permeação" },
    ],
  },
  {
    id: "tier-5",
    number: "T5",
    level: "SÍNTESES DE PESQUISA CIENTÍFICA",
    icon: "▲",
    accent: "#0066CC",
    accentBg: "rgba(0, 102, 204, 0.08)",
    accentBorder: "rgba(0, 102, 204, 0.25)",
    size: "10–20 páginas",
    description: "Revisões de literatura com evidências selecionadas. Complementam protocolos com fundamentação.",
    items: [
      { num: 22, title: "Fisiologia de Peelings" },
      { num: 23, title: "Ativos Clareadores" },
      { num: 24, title: "Protocolos de Peelings" },
      { num: 25, title: "Fotobiomodulação" },
      { num: 26, title: "PDT & Fotossensibilizadores" },
      { num: 27, title: "Retinoides & Peeling" },
    ],
  },
  {
    id: "tier-6",
    number: "T6",
    level: "LÂMINAS TÉCNICAS DUPLA-FACE A4H",
    icon: "□",
    accent: "#475569",
    accentBg: "rgba(71, 85, 105, 0.08)",
    accentBorder: "rgba(71, 85, 105, 0.25)",
    size: "13 lâminas · 26 páginas",
    description:
      "Apresentações de consultório. Frente clínica (indicação, protocolo) + verso farmacotécnico (fórmula, pH).",
    items: [
      { num: 28, title: "01 · GHKCu — Pele Firme" },
      { num: 29, title: "02 · Botox Tópico" },
      { num: 30, title: "03 · Clareamento com Peptídeos" },
      { num: 31, title: "04 · Regeneração Pós-Procedimento" },
      { num: 32, title: "05 · Pele Sensível" },
      { num: 33, title: "06 · Colágeno Papilar" },
      { num: 34, title: "07 · GHKCu Capilar" },
      { num: 35, title: "08 · Exossomos Capilar" },
      { num: 36, title: "09 · Pós-Peeling D1 / D7 / D14" },
      { num: 37, title: "10 · Acne + PIH" },
      { num: 38, title: "11 · Rejuvenescimento Multimodal" },
      { num: 39, title: "12 · Queloidectomia" },
      { num: 40, title: "13 · GHKCu + PDRN Capilar" },
    ],
  },
  {
    id: "tier-7",
    number: "T7",
    level: "FORMULÁRIOS MAGISTRAIS INTEGRADOS",
    icon: "▣",
    accent: "#8B4513",
    accentBg: "rgba(139, 69, 19, 0.08)",
    accentBorder: "rgba(139, 69, 19, 0.25)",
    size: "40–150 fórmulas cada",
    description: "Coleções completas de prescrições magistrais por linha terapêutica.",
    items: [
      {
        num: 41,
        title: "Formulário Melasma 2026",
        desc: "45 fórmulas · 7 categorias (Clássicas · HQ-Free · Microagulhamento · Peelings · Pós-Proc · Oral · Manutenção)",
      },
      {
        num: 42,
        title: "Formulário Fatores de Crescimento",
        desc: "50+ fórmulas · VEGF · IGF-1 · EGF · bFGF · TGF-β · PDRN integrados",
      },
      {
        num: 43,
        title: "Formulário Clareadores & Antioxidantes",
        desc: "30+ fórmulas · HQ combinada · Ácido Kójico · Tranexâmico · Vitamina C",
      },
      {
        num: 44,
        title: "Formulário Bases Dermatológicas",
        desc: "20 bases validadas com protocolos de uso",
      },
    ],
  },
]

export type Profile = {
  title: string
  subtitle: string
  tiers: string
  laminas?: string
  formularios?: string
  pesquisa?: string
  icon: string
  accent: string
}

export const PROFILES: Profile[] = [
  {
    title: "Dermatologista Estético",
    subtitle: "Procedimentos + prescrição",
    tiers: "T1 (Peptídeos, Peelings) · T2 (Melasma, Rosácea) · T3 (Periorbital, Estrias, Acne)",
    laminas: "02, 03, 04, 06, 09, 11",
    formularios: "Melasma",
    icon: "ES",
    accent: "#B8783D",
  },
  {
    title: "Farmacêutico Magistral Sênior",
    subtitle: "Formulação avançada",
    tiers: "T1 (Guia Terapêutico, Incompatibilidades) · T2 (Fatores) · T4 (Bases, Veículos)",
    formularios: "TODOS (Melasma, Fatores, Clareadores, Bases)",
    icon: "FM",
    accent: "#0096B4",
  },
  {
    title: "Dermatologista Clínico",
    subtitle: "Diagnóstico + conduta",
    tiers: "T2 (Melasma, Rosácea) · T3 (Acne, Alopecia, Psoríase)",
    pesquisa: "22–27 (Todas as 6 sínteses científicas)",
    icon: "DC",
    accent: "#0C2340",
  },
  {
    title: "Clínica Laser/Procedimento",
    subtitle: "Pós-operatório técnico",
    tiers: "T2 (Pós-Laser) · T3 (Periorbital, Estrias)",
    laminas: "04, 07, 08, 09",
    formularios: "Fatores de Crescimento",
    icon: "CL",
    accent: "#C8102E",
  },
  {
    title: "Formador / Educador",
    subtitle: "Docência clínica",
    tiers: "T4 (Apostila Veículos Dermatológicos 2026 — 51p)",
    pesquisa: "Todas as 6 sínteses científicas",
    icon: "FE",
    accent: "#0066CC",
  },
]

export const CATALOG_STATS = [
  { num: "60+", label: "Artefatos Totais" },
  { num: "27", label: "Protocolos Clínicos" },
  { num: "13", label: "Lâminas A4H" },
  { num: "7", label: "Tiers Editoriais" },
  { num: "450+", label: "Páginas Totais" },
  { num: "100%", label: "DOI Validado" },
]
