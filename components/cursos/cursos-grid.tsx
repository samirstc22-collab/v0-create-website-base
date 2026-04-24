import Link from "next/link"
import {
  FlaskConical,
  Sparkles,
  TrendingUp,
  Microscope,
  Store,
  Briefcase,
  Pill,
  Syringe,
  Award,
  ArrowRight,
} from "lucide-react"

export function CursosGrid() {
  const courses = [
    {
      icon: FlaskConical,
      level: "Fundamentos",
      levelColor: "#2dd4bf",
      title: "Manipulação Farmacêutica do Zero",
      description:
        "Base sólida em BPF, cálculo galênico, incompatibilidades e boas práticas de bancada. Ideal para recém-formados e farmacêuticos que querem reciclar.",
      duration: "6 semanas",
      lessons: "28 aulas",
      price: "R$ 197",
    },
    {
      icon: Sparkles,
      level: "Intermediário",
      levelColor: "#e8a87c",
      title: "Cosmetologia Aplicada ao Balcão",
      description:
        "Ativos dermatológicos mais vendidos, protocolos anti-idade, clareamento e hidratação. Conecte ciência com a queixa real do cliente.",
      duration: "5 semanas",
      lessons: "32 aulas",
      price: "R$ 297",
    },
    {
      icon: Microscope,
      level: "Avançado",
      levelColor: "#b87333",
      title: "Veiculação e Nanotecnologia",
      description:
        "Lipossomas, niossomas, nanoemulsões e microencapsulação. O estado da arte em biodisponibilidade cutânea, com protocolos testados.",
      duration: "8 semanas",
      lessons: "45 aulas",
      price: "R$ 497",
    },
    {
      icon: Pill,
      level: "Intermediário",
      levelColor: "#e8a87c",
      title: "Manipulação Oral Avançada",
      description:
        "Cápsulas, xaropes, soluções e sachês com foco em palatabilidade, estabilidade e aceitação pediátrica. Do caderno ao frasco.",
      duration: "4 semanas",
      lessons: "24 aulas",
      price: "R$ 247",
    },
    {
      icon: Syringe,
      level: "Avançado",
      levelColor: "#b87333",
      title: "Hormônios Bioidênticos na Magistral",
      description:
        "Manejo técnico e regulatório de hormônios bioidênticos, com foco em segurança, padronização e rastreabilidade.",
      duration: "6 semanas",
      lessons: "30 aulas",
      price: "R$ 597",
    },
    {
      icon: Store,
      level: "Gestão",
      levelColor: "#2dd4bf",
      title: "Farmácia Lucrativa: Do Balcão ao Caixa",
      description:
        "Precificação estratégica, mix de produtos, gestão de estoque e marketing farmacêutico com ética e resultado.",
      duration: "5 semanas",
      lessons: "26 aulas",
      price: "R$ 347",
    },
    {
      icon: Briefcase,
      level: "Gestão",
      levelColor: "#2dd4bf",
      title: "Como Abrir sua Farmácia de Manipulação",
      description:
        "Do plano de negócios à inauguração. Regulatório ANVISA, projeto arquitetônico, equipamentos essenciais e primeiros 90 dias.",
      duration: "7 semanas",
      lessons: "38 aulas",
      price: "R$ 697",
    },
    {
      icon: TrendingUp,
      level: "Executivo",
      levelColor: "#b87333",
      title: "Liderança & Escala na Farmácia",
      description:
        "Para donos de rede e farmacêuticos-empresários que querem escalar sem perder qualidade técnica. Casos reais de Brasil e Europa.",
      duration: "8 semanas",
      lessons: "40 aulas",
      price: "R$ 897",
    },
    {
      icon: Award,
      level: "Elite",
      levelColor: "#0a1628",
      title: "Imersão Executiva Presencial",
      description:
        "3 dias presenciais em Goiânia com Samir e equipe. Diagnóstico do seu negócio, mentoria coletiva e networking de alto nível.",
      duration: "3 dias",
      lessons: "Presencial",
      price: "R$ 4.997",
    },
  ]

  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mb-14 max-w-3xl">
          <div className="text-[11px] font-bold uppercase tracking-[3px] text-[#b87333]">
            Catálogo completo
          </div>
          <h2 className="mt-3 font-serif text-4xl leading-[1.03] tracking-[-0.02em] text-[#0a1628] md:text-6xl">
            Uma trilha pensada para cada momento da sua carreira.
          </h2>
          <p className="mt-6 text-lg leading-[1.7] text-[#0a1628]/65">
            Do recém-formado ao farmacêutico-empresário: nove cursos encadeados para levar você do
            zero ao domínio técnico e comercial do seu setor.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon
            return (
              <article
                key={course.title}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#0a1628]/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#b87333]/40 hover:shadow-[0_20px_60px_rgba(184,115,51,0.12)]"
              >
                <div className="flex items-center justify-between">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{
                      backgroundColor: `${course.levelColor}15`,
                      border: `1px solid ${course.levelColor}40`,
                    }}
                  >
                    <Icon className="h-5 w-5" style={{ color: course.levelColor }} />
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[2px]"
                    style={{
                      backgroundColor: `${course.levelColor}12`,
                      color: course.levelColor,
                    }}
                  >
                    {course.level}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-xl leading-tight text-[#0a1628] md:text-2xl">
                  {course.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#0a1628]/65">
                  {course.description}
                </p>

                <div className="mt-6 flex items-center gap-4 border-t border-[#0a1628]/10 pt-5 text-[11px] font-semibold uppercase tracking-wider text-[#0a1628]/55">
                  <span>{course.duration}</span>
                  <span className="h-1 w-1 rounded-full bg-[#0a1628]/30" />
                  <span>{course.lessons}</span>
                </div>

                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-[#0a1628]/40">
                      A partir de
                    </div>
                    <div className="font-serif text-2xl text-[#0a1628]">{course.price}</div>
                  </div>
                  <Link
                    href="/contato"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-[#0a1628]/15 bg-[#f7f3ee] px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#0a1628] transition-all group-hover:border-[#b87333] group-hover:bg-[#b87333] group-hover:text-white"
                  >
                    Detalhes
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
