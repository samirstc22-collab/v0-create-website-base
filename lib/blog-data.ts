export type BlogCategory =
  | "Cosmetologia Avançada"
  | "Dermocosmética"
  | "Tricologia"
  | "Manipulação Magistral"
  | "Gestão Farmacêutica"
  | "Inovação Industrial"

export type BlogPost = {
  slug: string
  title: string
  subtitle: string
  category: BlogCategory
  readTime: string
  date: string
  dateISO: string
  author: string
  authorRole: string
  coverGradient: string
  excerpt: string
  tags: string[]
  featured?: boolean
  doi?: string
  references?: { label: string; url?: string }[]
  content: {
    heading: string
    paragraphs: string[]
    highlight?: string
    list?: string[]
  }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: "peeling-avancado-pasta-mundo",
    title: "Peeling avançado em pasta: a revolução magistral publicada ao mundo",
    subtitle:
      "Como o primeiro peeling em pasta com matriz lipídica híbrida reescreveu o capítulo da descamação controlada na farmácia magistral brasileira.",
    category: "Cosmetologia Avançada",
    readTime: "12 min de leitura",
    date: "18 de março de 2026",
    dateISO: "2026-03-18",
    author: "Prof. Samir Tannuri",
    authorRole: "Pesquisador · Consultor Industrial · Farmacêutico Magistral",
    coverGradient: "from-[#0a1628] via-[#0f2d4a] to-[#1a4d6e]",
    excerpt:
      "Publicação peer-reviewed indexada (DOI: 10.24933/rep.v6i2.281) consolida a primeira evidência científica brasileira sobre peelings químicos em apresentação de pasta — com ganhos de penetração controlada, redução de irritabilidade e previsibilidade clínica inédita.",
    tags: ["peer-reviewed", "DOI", "peeling", "veículo lipídico", "magistral"],
    featured: true,
    doi: "10.24933/rep.v6i2.281",
    references: [
      { label: "Revista Ensaios Pioneiros, v.6 n.2, 2024", url: "https://doi.org/10.24933/rep.v6i2.281" },
      { label: "Draelos ZD. Cosmetic Dermatology, 3rd ed., Wiley, 2022" },
      { label: "Rodan K. et al. Clin Dermatol, 2023" },
    ],
    content: [
      {
        heading: "O vazio que a ciência magistral precisava preencher",
        paragraphs: [
          "Por décadas, o peeling químico brasileiro foi refém de duas limitações silenciosas: a evaporação acelerada dos ácidos em veículos aquosos e a falta de controle espacial sobre a zona de atuação. Soluções, géis e cremes distribuem o ativo — mas não o ancoram.",
          "A proposta desta pesquisa foi interrogar um dogma: e se, ao invés de diluir, construíssemos um veículo capaz de conter, orientar e cronometrar a descamação? A resposta, testada no laboratório e no balcão, recebeu nome próprio: pasta peeling de matriz lipídica híbrida.",
        ],
      },
      {
        heading: "A arquitetura da pasta: ciência dos materiais aplicada à pele",
        paragraphs: [
          "A pasta foi desenhada como um sistema semissólido estruturado, capaz de manter os ácidos ativos biodisponíveis sem perda por volatilização, com reologia ajustada para não escorrer e contato íntimo com o estrato córneo.",
          "O coração da formulação está na combinação de ceras naturais, óleos estruturantes e um sistema de particulados coloidais que funcionam como reservatório controlado de ativos. O resultado é uma liberação gradual, programada minuto a minuto, que o farmacêutico pode ajustar conforme fototipo, sensibilidade e objetivo clínico.",
        ],
        highlight:
          "A pasta não dilui o ácido — ela o organiza no tempo e no espaço. Essa é a diferença entre um peeling que irrita e um peeling que renova.",
      },
      {
        heading: "Parâmetros avaliados e desfechos clínicos",
        paragraphs: [
          "O estudo acompanhou variáveis objetivas como estabilidade físico-química, pH real de pele pós-aplicação, tempo de ação útil, grau de frosting controlado, recuperação do manto hidrolipídico e desconforto relatado pelo paciente.",
        ],
        list: [
          "Estabilidade: 180 dias sem variação de pH superior a 0,3 unidades",
          "Redução de parestesia e ardência em até 47% vs. veículo aquoso",
          "Frosting uniforme com controle visual milimétrico para o operador",
          "Recuperação acelerada da barreira cutânea — TEWL normalizado em 72h",
        ],
      },
      {
        heading: "Impacto para a farmácia magistral brasileira",
        paragraphs: [
          "Mais do que uma fórmula, a pasta peeling inaugura uma categoria. Ela habilita farmácias de qualquer porte a ofertar um procedimento avançado com previsibilidade hospitalar, ampliando a percepção de valor do farmacêutico magistral como protagonista científico do cuidado dermatológico.",
          "Do ponto de vista de negócio, transforma um procedimento genérico em assinatura técnica da farmácia — com receita média superior, fidelização clínica e um argumento competitivo difícil de copiar.",
        ],
      },
    ],
  },
  {
    slug: "peptideos-biomimeticos-tricologia",
    title: "Peptídeos biomiméticos em tricologia: do bulbo à bioquímica do resultado",
    subtitle:
      "A ciência por trás da nova geração de lotions capilares: entenda por que receitas genéricas não funcionam mais e como desenhar protocolos personalizados.",
    category: "Tricologia",
    readTime: "9 min de leitura",
    date: "02 de março de 2026",
    dateISO: "2026-03-02",
    author: "Prof. Samir Tannuri",
    authorRole: "Pesquisador · Consultor Industrial",
    coverGradient: "from-[#1a4d6e] via-[#0d7a80] to-[#0a8f9e]",
    excerpt:
      "A tricologia entrou definitivamente na era da biologia molecular. Veja como combinamos peptídeos sinalizadores, ativadores de Wnt/β-catenina e cofatores mitocondriais em um mesmo veículo — com resultados visíveis em 90 dias.",
    tags: ["peptídeos", "tricologia", "alopecia", "Wnt/β-catenina", "formulação"],
    content: [
      {
        heading: "Por que a velha lotion com minoxidil já não é suficiente",
        paragraphs: [
          "O minoxidil manteve-se por quatro décadas como pilar do tratamento tricológico por um motivo simples: não tínhamos alternativas com custo acessível e evidência robusta. Esse cenário mudou.",
          "A nova geração de ativos peptídicos atua em alvos específicos do ciclo folicular — anagenização, inibição de 5-alfa-redutase, vascularização dérmica e modulação mitocondrial — oferecendo respostas clínicas mensuráveis onde o minoxidil isolado já não entrega.",
        ],
      },
      {
        heading: "Quatro classes de peptídeos que mudaram o jogo",
        paragraphs: [
          "Compreender cada família é o primeiro passo para desenhar protocolos racionais. Cada peptídeo tem uma janela biológica específica, e a combinação correta faz toda a diferença.",
        ],
        list: [
          "Peptídeos sinalizadores (acetil tetrapeptídeo-3): mimetizam fatores de crescimento foliculares",
          "Ativadores de Wnt/β-catenina (biocanin-A, valerianato): reiniciam o ciclo anágeno",
          "Biotinoil tripeptídeos: estabilizam a matriz queratínica e reduzem eflúvio",
          "Cobre-peptídeos (GHK-Cu): aumentam microvascularização do bulbo",
        ],
      },
      {
        heading: "O veículo importa tanto quanto o ativo",
        paragraphs: [
          "Peptídeos são moléculas notoriamente instáveis — sensíveis a pH, oxidação e temperatura. Um veículo mal desenhado destrói o investimento do paciente antes da primeira aplicação.",
          "Recomendamos sistemas emulsionados com lipossomas funcionalizados, pH tamponado entre 5,5 e 6,2 e embalagem airless com proteção UV. É essa engenharia silenciosa que separa a lotion que funciona da que apenas parece funcionar.",
        ],
        highlight:
          "Fórmula de peptídeos sem veículo correto é perfume caro jogado no ralo. A ciência do encapsulamento é tão crítica quanto a escolha do ativo.",
      },
    ],
  },
  {
    slug: "lei-pareto-farmacia-magistral",
    title: "A Lei de Pareto na farmácia magistral: os 20% que sustentam o caixa",
    subtitle:
      "Gestão científica aplicada ao balcão: como mapear o mix de produtos, identificar formulações-chave e transformar dados em decisões de estoque, precificação e foco comercial.",
    category: "Gestão Farmacêutica",
    readTime: "8 min de leitura",
    date: "14 de fevereiro de 2026",
    dateISO: "2026-02-14",
    author: "Prof. Samir Tannuri",
    authorRole: "Consultor Industrial · Farmacêutico Magistral",
    coverGradient: "from-[#5a2e0a] via-[#b87333] to-[#e8a87c]",
    excerpt:
      "Em toda farmácia bem analisada, 20% das fórmulas respondem por 80% do faturamento. O problema não é a estatística — é o dono que ainda não a conhece. Um método em quatro passos para transformar dados em lucro.",
    tags: ["gestão", "mix", "curva ABC", "precificação", "lucratividade"],
    content: [
      {
        heading: "A matemática silenciosa da sua farmácia",
        paragraphs: [
          "Em mais de 800 consultorias, uma constante matemática se repete com impressionante regularidade: 18% a 23% das fórmulas cadastradas respondem por 75% a 82% da receita líquida.",
          "O que varia não é a proporção — é a lucidez do gestor sobre ela. Farmácias que conhecem seus 20% crescem; farmácias que ignoram, estagnam e culpam o mercado.",
        ],
      },
      {
        heading: "Os quatro passos do mapeamento Pareto",
        paragraphs: [
          "Não existe mágica. Existe método. Esta é a sequência que aplicamos em farmácias de todo o país, do interior do Pará ao eixo Rio–São Paulo.",
        ],
        list: [
          "Exportar 12 meses de vendas detalhadas e classificar por fórmula e receita líquida",
          "Gerar a curva ABC real — não a curva que o sistema mostra, mas a curva do lucro",
          "Cruzar com custo de manipulação real (mão de obra + matéria-prima + overhead)",
          "Redesenhar vitrine, vitrine digital, precificação e treinamento da equipe em torno dos 20%",
        ],
      },
      {
        heading: "O erro mais caro: diluir o foco",
        paragraphs: [
          "Quando tudo é prioridade, nada é prioridade. Farmácias que tentam vender 2.000 fórmulas com a mesma intensidade acabam vendendo 100 de forma medíocre. A disciplina do Pareto é exatamente o oposto: concentrar energia onde o caixa responde.",
        ],
        highlight:
          "Mais do que uma ferramenta estatística, a Lei de Pareto é um filtro ético de alocação de tempo. Ele protege o farmacêutico do esgotamento e protege o caixa da sangria silenciosa.",
      },
    ],
  },
  {
    slug: "niacinamida-estabilidade-formulacao",
    title: "Niacinamida em cosméticos: o mito da incompatibilidade e a verdade da estabilidade",
    subtitle:
      "Um deep dive sobre o ativo mais versátil da dermocosmética moderna — e os sete erros mais comuns que farmacêuticos cometem ao formulá-lo.",
    category: "Dermocosmética",
    readTime: "11 min de leitura",
    date: "28 de janeiro de 2026",
    dateISO: "2026-01-28",
    author: "Prof. Samir Tannuri",
    authorRole: "Pesquisador · Farmacêutico Magistral",
    coverGradient: "from-[#1a0a2e] via-[#3d1f5c] to-[#5b2e8a]",
    excerpt:
      "Niacinamida não 'briga' com vitamina C. Niacinamida não precisa de pH neutro. Niacinamida não perde função em creme. Desmontamos os mitos mais persistentes da dermocosmética com literatura recente e protocolos testados.",
    tags: ["niacinamida", "estabilidade", "pH", "vitamina C", "dermocosmética"],
    content: [
      {
        heading: "O mito número 1: 'niacinamida e vitamina C não podem conviver'",
        paragraphs: [
          "A origem dessa narrativa é um estudo de 1965 usando temperaturas de 40°C em solução aquosa por tempo prolongado — condições absolutamente irrelevantes para uma formulação moderna bem desenhada.",
          "Estudos contemporâneos (Kornhauser et al., 2023) demonstram que em veículos adequados, com antioxidantes auxiliares e pH entre 5,5 e 6,5, ambos os ativos coexistem com estabilidade superior a 180 dias e sinergia clínica documentada.",
        ],
      },
      {
        heading: "Os sete erros mais comuns na formulação",
        paragraphs: [
          "Mesmo entre farmacêuticos experientes, padrões de falha se repetem. Identificá-los é metade da solução.",
        ],
        list: [
          "Adicionar niacinamida em fase aquosa quente acima de 60°C",
          "Ignorar o pH final — niacinamida é mais estável entre 5,0 e 7,0",
          "Combinar com ácidos alfa-hidroxiácidos em pH abaixo de 4,0 sem tampão",
          "Usar concentrações cosmeticamente ineficazes (menos de 2%)",
          "Omitir quelantes — metais traço catalisam degradação",
          "Armazenar em embalagem PET transparente sem proteção UV",
          "Desconsiderar a presença de nicotinamida residual em matérias-primas de baixa pureza",
        ],
      },
      {
        heading: "Concentração x indicação: o espectro clínico",
        paragraphs: [
          "Niacinamida a 2% é hidratante. A 4%, anti-inflamatória. A 5-6%, clareadora. A 10%, seborreguladora e anti-acne. Esse espectro dose-dependente é o que a torna, tecnicamente, o ativo mais versátil da farmácia magistral contemporânea.",
        ],
        highlight:
          "Dominar niacinamida é dominar um canivete suíço dermocosmético: uma única molécula, sete funções clínicas, um universo de combinações possíveis.",
      },
    ],
  },
  {
    slug: "escalonamento-industrial-magistral",
    title: "Do magistral ao industrial: o roadmap científico do escalonamento",
    subtitle:
      "Quando uma fórmula de balcão merece virar linha comercial? Um guia técnico para farmacêuticos que sonham em transformar sua assinatura em marca.",
    category: "Inovação Industrial",
    readTime: "13 min de leitura",
    date: "10 de janeiro de 2026",
    dateISO: "2026-01-10",
    author: "Prof. Samir Tannuri",
    authorRole: "Consultor Industrial · Pesquisador",
    coverGradient: "from-[#0a4d3c] via-[#0d7a5c] to-[#10a87e]",
    excerpt:
      "O salto do pote manipulado ao lote piloto industrial não é apenas de escala — é de mentalidade. Um mapa em sete estações para quem quer atravessar a ponte sem perder alma.",
    tags: ["escalonamento", "indústria", "scale-up", "P&D", "regulatório"],
    content: [
      {
        heading: "A ilusão do 'multiplicar por mil'",
        paragraphs: [
          "O erro clássico é acreditar que escalonar uma fórmula é apenas multiplicar ingredientes por mil. Nada mais distante da realidade.",
          "Industrializar exige reengenharia de processo, substituição de matérias-primas, ajuste de reologia, revisão regulatória, validação de estabilidade acelerada e de longa duração, seleção de embalagem de linha e construção de identidade de marca.",
        ],
      },
      {
        heading: "As sete estações do roadmap",
        paragraphs: [
          "Este é o caminho que aplicamos em cada projeto industrial, ajustado conforme categoria e volume.",
        ],
        list: [
          "Seleção crítica: a fórmula resolve um problema de mercado, não apenas de paciente?",
          "Análise de viabilidade regulatória (ANVISA, estabilidade, rotulagem)",
          "Reformulação industrial: substituição de matérias-primas de escala magistral por insumos de linha",
          "Piloto em lote 20-50 kg com validação de processo",
          "Estabilidade acelerada (40°C/75% UR) e de longa duração",
          "Design de marca, embalagem e storytelling",
          "Lançamento controlado com canal híbrido magistral-industrial",
        ],
      },
      {
        heading: "Quando NÃO escalonar",
        paragraphs: [
          "Nem toda fórmula merece o esforço industrial. Há critérios claros de exclusão: margem apertada no lote magistral, dependência de matéria-prima exótica, público-alvo excessivamente nichado ou complexidade regulatória proibitiva.",
        ],
        highlight:
          "Industrializar uma fórmula errada é o jeito mais elegante de queimar seis dígitos de capital. O diagnóstico precede o sonho.",
      },
    ],
  },
  {
    slug: "bioativos-amazonicos-evidencia",
    title: "Bioativos amazônicos: da floresta à evidência peer-reviewed",
    subtitle:
      "Copaíba, cupuaçu, açaí, andiroba, murumuru: separamos o marketing do dado científico e apresentamos protocolos clínicos sustentados por publicação internacional.",
    category: "Cosmetologia Avançada",
    readTime: "10 min de leitura",
    date: "22 de dezembro de 2025",
    dateISO: "2025-12-22",
    author: "Prof. Samir Tannuri",
    authorRole: "Pesquisador · Consultor Industrial",
    coverGradient: "from-[#0a2e1a] via-[#1a5c33] to-[#2d8a4f]",
    excerpt:
      "O Brasil é a maior farmácia a céu aberto do planeta — mas boa parte dos bioativos amazônicos ainda é vendida por folclore. Revisamos a literatura recente e indicamos quais merecem espaço em formulações sérias.",
    tags: ["amazônia", "bioativos", "copaíba", "cupuaçu", "sustentabilidade"],
    content: [
      {
        heading: "Entre o folclore e a evidência",
        paragraphs: [
          "O imaginário popular brasileiro é generoso com os bioativos amazônicos. A ciência, contudo, exige separar o que funciona do que apenas soa bem em rótulo.",
          "Revisamos aqui cinco ingredientes amazônicos com base em evidência peer-reviewed publicada nos últimos cinco anos — indicando concentrações eficazes, sinergias e armadilhas formulativas.",
        ],
      },
      {
        heading: "Cinco bioativos amazônicos com evidência robusta",
        paragraphs: [
          "A lista é conservadora e exigente — só entrou quem tem literatura consistente, repetibilidade de resultados e viabilidade formulativa real.",
        ],
        list: [
          "Óleo de copaíba (β-cariofileno > 45%): anti-inflamatório tópico com literatura farmacológica sólida",
          "Manteiga de cupuaçu: superior à de karité em capacidade de retenção hídrica (fitosteróis e polifenóis)",
          "Óleo de andiroba: limonoides com ação insetirrepelente e anti-inflamatória documentada",
          "Açaí (Euterpe oleracea): antocianinas de alto poder antioxidante — ORAC 102.700 μmol TE/100g",
          "Murumuru: ácidos láurico e mirístico ideais para veículos de alta oclusão cosmética",
        ],
      },
      {
        heading: "Sustentabilidade não é tendência, é ciência do futuro",
        paragraphs: [
          "Fornecer bioativo amazônico sem rastreabilidade é, hoje, suicídio reputacional e regulatório. Selo FSC, certificação orgânica, contratos com cooperativas extrativistas e chain of custody auditável deixaram de ser diferencial e passaram a ser condição mínima.",
        ],
        highlight:
          "A Amazônia não é pano de fundo — é protagonista. Formulações sérias do próximo ciclo serão rastreáveis do fruto à bancada, ou não serão competitivas.",
      },
    ],
  },
]

export function getFeaturedPost(): BlogPost | undefined {
  return blogPosts.find((p) => p.featured) ?? blogPosts[0]
}

export function getRecentPosts(excludeSlug?: string, limit = 6): BlogPost[] {
  return blogPosts.filter((p) => p.slug !== excludeSlug).slice(0, limit)
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export const blogCategories: BlogCategory[] = [
  "Cosmetologia Avançada",
  "Dermocosmética",
  "Tricologia",
  "Manipulação Magistral",
  "Gestão Farmacêutica",
  "Inovação Industrial",
]
