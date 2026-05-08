// Dados do Portfólio Científico — Inovações em Formulação Cosmetológica & Dermatológica
// Baseado no Portfolio Científico 2019-2025 do Prof. Samir Tannuri

export interface CategoriaTecnica {
  id: string
  numero: string
  titulo: string
  subtitulo: string
  descricao: string
  tags: string[]
  highlight?: string
}

export const categorias: CategoriaTecnica[] = [
  {
    id: "facial-antiaging",
    numero: "01",
    titulo: "Facial Antiaging",
    subtitulo: "Séruns Antiaging Peptídicos",
    descricao:
      "Séruns aquosos e leitosos com peptídeos biomiméticos (GHK-Cu, Matrixyl, Argireline, Oligopeptide-7) em veículos lipossomais — estimulação de colágeno tipo I, elastina e proteoglicanos com pH cuidadosamente ajustado.",
    tags: ["Peptídeos", "Lipossomas", "pH 5,0–6,0"],
    highlight: "GHK-Cu lipossomal",
  },
  {
    id: "discromias",
    numero: "02",
    titulo: "Discromias",
    subtitulo: "Sistemas Dermoclareadores Multimodais",
    descricao:
      "Formulações multiativas associando inibidores de tirosinase (hexilresorcinol, butilresorcinol, alfa-arbutin), moduladores de α-MSH (ácido tranexâmico), bloqueadores de transferência de melanossomos (niacinamida) e antioxidantes.",
    tags: ["Tranexâmico", "Resorcinois", "Multi-target"],
    highlight: "PDRN + Lactossoma",
  },
  {
    id: "tricologia",
    numero: "03",
    titulo: "Tricologia",
    subtitulo: "Tônicos Capilares Regenerativos",
    descricao:
      "Tônicos aquosos e hidroalcoólicos para alopecia androgenética, eflúvio telógeno e áreas de transplante — integrando exossomos capilares, PDRN, peptídeos bioguiados, minoxidil, finasterida tópica e cafeína.",
    tags: ["Exossomos", "PDRN", "Minoxidil"],
    highlight: "SH-OP-118 bioguiado",
  },
  {
    id: "pos-procedimento",
    numero: "04",
    titulo: "Pós-Procedimento",
    subtitulo: "Cremes Regeneradores Clínicos",
    descricao:
      "Cremes hidratantes-regeneradores de alta tolerabilidade para pós-peeling químico, pós-laser e pós-microagulhamento — GHK-Cu, centella asiática, pantenol, alantoína e bisabolol em emulsões O/A.",
    tags: ["GHK-Cu", "Centella", "Reparo Barreira"],
    highlight: "Pós-ATA & pós-laser",
  },
  {
    id: "anestesicos",
    numero: "05",
    titulo: "Anestésicos Tópicos",
    subtitulo: "Bases Eutéticas Transdérmicas",
    descricao:
      "PLO Gel e bases modificadas para associações eutéticas triplas (benzocaína + lidocaína + tetracaína) ou duplas (lidocaína + prilocaína), com promotores de permeação DMSO, Transcutol e vasoconstritores moduláveis.",
    tags: ["PLO Gel", "Eutético", "DMSO"],
    highlight: "Mistura tripla validada",
  },
  {
    id: "corporal",
    numero: "06",
    titulo: "Corporal",
    subtitulo: "Séruns & Cremes Corporais Ativos",
    descricao:
      "Linhas corporais para estrias atróficas (PDRN + fatores de crescimento), celulite (nano-cafeína + DRONE Lipocell termogênico) e hidratação de peles extremamente secas (bases anidras sensoriais).",
    tags: ["PDRN", "Nano-cafeína", "Estrias"],
    highlight: "DRONE Lipocell",
  },
]

export interface FaseLinhaTempo {
  id: string
  periodo: string
  titulo: string
  subtitulo: string
  marcos: {
    ano: string
    titulo: string
    descricao: string
  }[]
}

export const linhaTempo: FaseLinhaTempo[] = [
  {
    id: "fundacao",
    periodo: "2019 — 2021",
    titulo: "Fundação Técnica",
    subtitulo: "Bases galênicas próprias e estabilidade dermocosmética",
    marcos: [
      {
        ano: "2019",
        titulo: "Fundação Técnica",
        descricao:
          "Conjunto inicial de 8 bases dermocosméticas originais — emulsões O/A leves, géis-creme sebo-reguladores e bases para peles reativas, focadas em estabilidade de AHAs e vitaminas instáveis.",
      },
      {
        ano: "2020",
        titulo: "Despigmentantes Multimodais",
        descricao:
          "Linha de séruns aquosos com ácido mandélico 10% + alfa-arbutin 1–2% em pH ajustado para estabilidade simultânea — alternativa segura para uso diário prolongado.",
      },
      {
        ano: "2020",
        titulo: "Corporais Sensoriais",
        descricao:
          "Família de séruns corporais anidros (parafina + TCM) com cúrcuma, calêndula, manteiga de karité — sistema de entrega lipofílica para pele atópica.",
      },
      {
        ano: "2021",
        titulo: "Anestésicos Tópicos",
        descricao:
          "Plataforma PLO Gel para mistura eutética tripla: benzocaína 20% + lidocaína 6% + tetracaína 4%, com DMSO como promotor de permeação e fenilefrina como vasoconstritor.",
      },
      {
        ano: "2021",
        titulo: "Rejuvenescimento",
        descricao:
          "Primeiros séruns com tripla combinação antioxidante: vitamina C estabilizada + ácido ferúlico + resveratrol em veículos funcionalizados.",
      },
    ],
  },
  {
    id: "expansao",
    periodo: "2022 — 2023",
    titulo: "Expansão Tecnológica",
    subtitulo: "Peptídeos biomiméticos e veículos galênicos funcionalizados",
    marcos: [
      {
        ano: "2022",
        titulo: "Peptídeos Biomiméticos",
        descricao:
          "Implementação clínica de fórmulas com GHK-Cu (0,5% a 2%) em sistema lipossomal — pH 5,0–6,0 para preservação da estabilidade. Aplicações anti-idade, regeneração e tricologia.",
      },
      {
        ano: "2022",
        titulo: "Tricologia Avançada",
        descricao:
          "Tônicos capilares multi-target: minoxidil 5% + finasterida 0,1% + cafeína 1% + biotina + peptídeos bioguiados em veículo hidroalcoólico de baixa pegajosidade.",
      },
      {
        ano: "2023",
        titulo: "Sistema Dermoclareador",
        descricao:
          "Protocolo bifásico para melasma refratário: Fase 1 (Fluido Dermoclareador com PDRN em lactossomas) e Fase 2 (Concentrado Uniformizador com glicólico 15% + resorcinois).",
      },
      {
        ano: "2023",
        titulo: "Veículos Premium",
        descricao:
          "Família de bases PN (Milk Sérum, Second Skin, Spicule Cream com espículas de esponja marinha para drug delivery) — vetorização de peptídeos e exossomos.",
      },
      {
        ano: "2023",
        titulo: "Pós-Procedimento",
        descricao:
          "Cremes de regeneração intensiva com GHK-Cu 1% + centella asiática 2% para protocolos pós-ATA e pós-laser de alta tolerabilidade.",
      },
    ],
  },
  {
    id: "vanguarda",
    periodo: "2024 — 2025",
    titulo: "Vanguarda Biotecnológica",
    subtitulo: "Sistemas de entrega inteligente e exossomos biomiméticos",
    marcos: [
      {
        ano: "2024",
        titulo: "Exossomos Sintéticos",
        descricao:
          "Séruns anti-inflammaging com exossomos sintéticos biomiméticos (EGF + IGF + TGF-β3 + VEGF recombinantes, sh-Oligopeptídeos) em hidrogel de ácido hialurônico de baixo peso molecular.",
      },
      {
        ano: "2024",
        titulo: "Nanoativos",
        descricao:
          "Portfólio com nano-retinol, nano-cafeína, nano-ácido tranexâmico, nano-coenzima Q10, nano-resveratrol, nano-kójico e nano-ozônio — liberação modificada e permeação otimizada.",
      },
      {
        ano: "2024",
        titulo: "Base Odontológica",
        descricao:
          "Plataforma de dispersão sublingual/bucal para anestésicos locais — sistema orodispersível com perfil de desintegração controlado para procedimentos odontológicos.",
      },
      {
        ano: "2025",
        titulo: "Tricologia Regenerativa",
        descricao:
          "Sistema integrando exossomos biomiméticos capilares 5% + Micro PDRN 2% (ativação A2A folicular) + peptídeo SH-OP-118 (2%) + cafeína 1% em tônico aquoso álcool-free.",
      },
      {
        ano: "2025",
        titulo: "Peelings Magistrais",
        descricao:
          "Conceito ATA Green (ácido tricloroacético em matriz estabilizada com antioxidantes verdes) e novas combinações de peelings magistrais de alta segurança clínica.",
      },
    ],
  },
]

export interface FormulaAssinatura {
  codigo: string
  titulo: string
  subtitulo: string
  composicao: { nome: string; concentracao: string; destaque?: boolean }[]
  ph: string
  uso: string
  indicacao: string
  cor: "copper" | "teal" | "navy"
}

export const formulasAssinatura: FormulaAssinatura[] = [
  {
    codigo: "RX 01",
    titulo: "Sérum Dermoclareador Multiativo",
    subtitulo: "Fluido Bifásico — Fase 1",
    composicao: [
      { nome: "Alfa-arbutin", concentracao: "3,0%", destaque: true },
      { nome: "Niacinamida PC", concentracao: "5,0%" },
      { nome: "Ácido tranexâmico", concentracao: "9,0%", destaque: true },
      { nome: "Ácido fítico", concentracao: "2,6%" },
      { nome: "PDRN (Sodium DNA)", concentracao: "0,05%" },
      { nome: "Lactossoma 55", concentracao: "2,0%" },
      { nome: "Ácido lático 85%", concentracao: "13,0%" },
      { nome: "Veículo aquoso gelificado", concentracao: "qsp 100 mL" },
    ],
    ph: "4,5–5,0",
    uso: "Noturno",
    indicacao: "Melasma facial persistente, HPI",
    cor: "copper",
  },
  {
    codigo: "RX 02",
    titulo: "Sérum Antiaging Peptídico",
    subtitulo: "Regenerador Intensivo GHK-Cu",
    composicao: [
      { nome: "GHK-Cu lipossomal", concentracao: "1,0%", destaque: true },
      { nome: "Ácido hialurônico (baixo PM)", concentracao: "1,0%" },
      { nome: "Niacinamida", concentracao: "4,0%" },
      { nome: "Pantenol", concentracao: "2,0%" },
      { nome: "Glicerina bidestilada", concentracao: "5,0%" },
      { nome: "Sérum leitoso premium", concentracao: "qsp 50 mL" },
    ],
    ph: "5,5–6,0",
    uso: "Noturno",
    indicacao: "Anti-idade regeneração intensiva",
    cor: "teal",
  },
  {
    codigo: "RX 03",
    titulo: "Tônico Tricologia Regenerativa",
    subtitulo: "Exossomos Capilares + PDRN",
    composicao: [
      { nome: "Exossomos biomiméticos capilares", concentracao: "5,0%", destaque: true },
      { nome: "Micro PDRN hidrogel", concentracao: "2,0%", destaque: true },
      { nome: "Peptídeo bioguiado Capilboost", concentracao: "2,0%" },
      { nome: "Cafeína", concentracao: "1,0%" },
      { nome: "Tônico aquoso álcool-free", concentracao: "qsp 100 mL" },
    ],
    ph: "5,0–5,5",
    uso: "Diário (manhã ou noite)",
    indicacao: "Alopecia androgenética, eflúvio telógeno",
    cor: "navy",
  },
]

export interface PilarTecnico {
  numero: string
  titulo: string
  descricao: string
}

export const pilares: PilarTecnico[] = [
  {
    numero: "01",
    titulo: "Compatibilidade iônica e físico-química",
    descricao:
      "Toda formulação multi-ativa passa por avaliação sistemática de compatibilidade iônica (aniônico vs. catiônico vs. não-iônico), solubilidade no veículo prescrito e sequência correta de adição — com atenção a ativos termolábeis incorporados sempre abaixo de 40°C.",
  },
  {
    numero: "02",
    titulo: "pH como pilar de estabilidade",
    descricao:
      "O pH é tratado como variável primária de design: vitamina C pura a 3,0–3,5, retinol em base oleosa ou pH 5,0–6,0, GHK-Cu em pH 5,0–6,0, ácido tranexâmico acima de 5,5, peelings em faixas estritas validadas para cada profundidade.",
  },
  {
    numero: "03",
    titulo: "Sistemas de entrega modificada",
    descricao:
      "Escolha racional de veículo por polaridade do ativo, lipossolubilidade, ponto-alvo de ação (epidérmico, dérmico, folicular) e perfil de liberação. Uso sistemático de lipossomas para peptídeos, nanoencapsulação para ativos instáveis e espículas para potencialização.",
  },
  {
    numero: "04",
    titulo: "Prevenção de incompatibilidades clássicas",
    descricao:
      "Separação estratégica de pares incompatíveis (hidroquinona × vitamina C, clindamicina × peróxido de benzoíla, retinol × vitamina C ácida, tretinoína × ácido glicólico) em fórmulas alternadas ou horários distintos.",
  },
  {
    numero: "05",
    titulo: "Evidência científica rastreável",
    descricao:
      "Cada protocolo clínico é sustentado por referências PubMed verificáveis, DOIs confirmados e hierarquia de evidência explicitada. O trabalho científico dialoga com a prática magistral em material acessível ao prescritor.",
  },
]

export const heroStats = [
  { num: "+200", label: "Fórmulas Originais" },
  { num: "20+", label: "Bases Galênicas" },
  { num: "6", label: "Anos de P&D" },
  { num: "9", label: "Áreas Terapêuticas" },
]
