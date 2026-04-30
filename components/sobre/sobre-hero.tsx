import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  Stethoscope,
  GraduationCap,
  Microscope,
  Users,
} from "lucide-react"

export function SobreHero() {
  const pillars = [
    {
      icon: Stethoscope,
      title: "Dermatologia clínica aplicada",
      detail:
        "Critérios objetivos para tomada de decisão clínica e desenho de protocolos personalizados.",
      accent: "#e8a87c",
    },
    {
      icon: FlaskConical,
      title: "Desenvolvimento de formulações",
      detail:
        "Da bancada à transferência de tecnologia, com rigor metodológico e aplicabilidade real.",
      accent: "#e8a87c",
    },
    {
      icon: BookOpen,
      title: "Educação científica",
      detail:
        "Cursos, treinamentos e mentorias para médicos, farmacêuticos e profissionais da saúde.",
      accent: "#2dd4bf",
    },
  ]

  const trajectoryStops = [
    {
      icon: Microscope,
      label: "UNICAMP",
      detail: "Faculdade de Ciências Farmacêuticas — base em metodologia científica.",
    },
    {
      icon: Users,
      label: "Universidade São Francisco",
      detail: "Pesquisa em fibroblastos humanos.",
    },
    {
      icon: GraduationCap,
      label: "FOP · UNICAMP",
      detail: "Polímeros odontológicos — ciência básica aplicada.",
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[#0a1628] pt-32 pb-24 md:pt-40 md:pb-32">
      {/* glows decorativos */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-10 h-80 w-80 rounded-full bg-[#2dd4bf]/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-[#b87333]/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,168,124,0.06),transparent_60%)]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-start gap-14 px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        {/* COPY */}
        <div className="lg:col-span-7">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b87333]/30 bg-[#b87333]/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[3px] text-[#e8a87c]">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e8a87c]" />
            Professor · Pesquisador · Consultor
          </div>

          {/* Nome */}
          <h1 className="mt-6 font-serif text-5xl leading-[0.98] tracking-tight text-white md:text-6xl lg:text-[88px]">
            Samir <em className="italic text-[#e8a87c]">Tannuri</em>
          </h1>

          {/* Subtítulo / posicionamento */}
          <p className="mt-5 max-w-2xl font-serif text-xl italic leading-snug text-white/85 md:text-2xl">
            Dermatologia clínica aplicada · Desenvolvimento de formulações · Educação científica.
          </p>

          {/* Linha divisora dourada */}
          <div className="mt-7 h-[2px] w-24 bg-gradient-to-r from-[#b87333] via-[#e8a87c] to-transparent" />

          {/* Manifesto / lead */}
          <p className="mt-7 max-w-2xl text-lg leading-[1.7] text-white/80 md:text-xl">
            <strong className="text-white">Ensinar, pesquisar e assessorar a prática clínica</strong>{" "}
            são os eixos centrais da minha atuação. Trabalho na interface entre dermatologia clínica
            aplicada, desenvolvimento de formulações e educação científica — sempre com{" "}
            <em className="text-[#e8a87c] not-italic font-semibold">rigor metodológico</em> e{" "}
            <em className="text-[#e8a87c] not-italic font-semibold">aplicabilidade real</em>.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-[1.75] text-white/65 md:text-lg">
            Minha trajetória começou nos laboratórios de pesquisa da{" "}
            <span className="font-semibold text-white/85">Faculdade de Ciências Farmacêuticas da UNICAMP</span>
            , onde construí minha base em metodologia científica, análise crítica de dados e
            desenvolvimento experimental. Ampliei essa experiência com pesquisa em{" "}
            <span className="font-semibold text-white/85">fibroblastos humanos na Universidade São Francisco</span>{" "}
            e com{" "}
            <span className="font-semibold text-white/85">polímeros odontológicos na FOP/UNICAMP</span>
            , sempre integrando ciência básica e aplicação prática.
          </p>

          <p className="mt-5 max-w-2xl text-base leading-[1.75] text-white/65 md:text-lg">
            Não trabalho com fórmulas prontas ou soluções simplistas. Estruturo raciocínios,
            apresento fundamentos, discuto limitações de evidência e construo, junto com o
            profissional, caminhos{" "}
            <strong className="text-white">tecnicamente consistentes, seguros e personalizados</strong>{" "}
            — que respeitem a ciência, a individualidade do paciente e a responsabilidade ética de
            quem prescreve ou formula.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contato"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#b87333] via-[#e8a87c] to-[#b87333] px-7 py-4 text-[15px] font-bold tracking-wide text-[#0a1628] shadow-[0_10px_30px_rgba(184,115,51,0.45)] transition-all hover:-translate-y-[2px] hover:shadow-[0_14px_40px_rgba(232,168,124,0.55)]"
              style={{ backgroundSize: "200% 100%" }}
            >
              <FlaskConical className="h-4 w-4" />
              Quero desenvolver com estratégia
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/consultoria"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/25 bg-white/5 px-7 py-4 text-[15px] font-bold tracking-wide text-white backdrop-blur transition-all hover:-translate-y-[2px] hover:border-[#2dd4bf]/60 hover:bg-white/10"
            >
              <BookOpen className="h-4 w-4 text-[#2dd4bf]" />
              Falar com consultoria
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* PORTRAIT */}
        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm lg:max-w-none lg:sticky lg:top-28">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4128-pAVchu8AAaVoA2fHFbF3NfNqx04xGp.jpeg"
                alt="Samir Tannuri — Professor, Pesquisador e Consultor em Dermatologia Clínica Aplicada e Desenvolvimento de Formulações"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 80vw, 40vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/85 via-transparent to-transparent" />

              {/* Floating credential strip */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-black/55 p-4 backdrop-blur-xl">
                <div className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#e8a87c]">
                  Atuação científica
                </div>
                <div className="mt-1 font-serif text-base leading-tight text-white">
                  Da bancada da pesquisa à decisão clínica.
                </div>
              </div>
            </div>

            {/* Cantos coloridos */}
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-3xl border-l-4 border-t-4 border-[#b87333]" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-br-3xl border-b-4 border-r-4 border-[#2dd4bf]" />
          </div>
        </div>
      </div>

      {/* PILLARS — três frentes */}
      <div className="relative mx-auto mt-20 max-w-7xl px-6 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[3px] text-[#2dd4bf]">
              Três frentes · Um compromisso
            </div>
            <h2 className="mt-2 font-serif text-2xl leading-tight text-white md:text-3xl">
              Conhecimento científico de forma{" "}
              <em className="italic text-[#e8a87c]">crítica, prática e responsável</em>.
            </h2>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-all hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div
                  className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${p.accent}1f`, color: p.accent }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div className="font-serif text-lg text-white">{p.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.detail}</p>
                <div
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ backgroundColor: p.accent }}
                />
              </div>
            )
          })}
        </div>

        {/* Trajetória condensada */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
          <div className="text-[11px] font-bold uppercase tracking-[3px] text-[#e8a87c]">
            Formação na bancada
          </div>
          <div className="mt-4 grid gap-5 md:grid-cols-3">
            {trajectoryStops.map((stop) => {
              const Icon = stop.icon
              return (
                <div key={stop.label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#2dd4bf]" />
                  <div>
                    <div className="text-sm font-bold text-white">{stop.label}</div>
                    <div className="text-xs leading-relaxed text-white/60">{stop.detail}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
