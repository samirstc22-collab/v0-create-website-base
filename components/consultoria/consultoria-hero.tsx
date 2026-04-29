import Image from "next/image"
import {
  Sparkles,
  Briefcase,
  Stethoscope,
  GraduationCap,
  Globe2,
  BookOpen,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react"

const services = [
  {
    icon: Briefcase,
    title: "Consultoria Magistral",
    desc: "Portfolio autoral, protocolos diferenciados e narrativa tecnica para sair da disputa por preco.",
    featured: true,
  },
  {
    icon: Sparkles,
    title: "Consultoria Industrial",
    desc: "Prototipos com sensorial refinado, claims defensaveis e suporte do conceito a escala.",
  },
  {
    icon: Stethoscope,
    title: "Protocolos Clinicos",
    desc: "Peelings, regeneracao, tricologia e dermatologia avancada com racional documentado.",
  },
  {
    icon: GraduationCap,
    title: "Mentoria Premium",
    desc: "Acompanhamento individual: 4 sessoes intensivas + plano mensal continuado.",
  },
  {
    icon: Globe2,
    title: "Treinamentos In Loco",
    desc: "Capacitacao hands-on para equipes de magistrais, industria e clinicas.",
  },
  {
    icon: BookOpen,
    title: "Materiais Tecnicos",
    desc: "Formularios, e-books e compendios para acelerar seu time.",
  },
]

export function ConsultoriaHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a1628] pt-28 pb-16 md:pt-36 md:pb-24">
      {/* decorative glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#b87333]/15 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#2dd4bf]/10 blur-3xl" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden="true">
          <defs>
            <pattern id="consHeroGrid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#consHeroGrid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Top heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b87333]/30 bg-[#b87333]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e8a87c]">
            <Sparkles className="h-3.5 w-3.5" />
            Consultoria Personalizada
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
            A primeira consultoria construida{" "}
            <em className="text-[#e8a87c]">para a sua farmacia</em>. Nao para o mercado.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Em vez de aplicar o mesmo manual em todo lugar, desenho uma estrategia sob medida para a
            realidade, o publico e a lucratividade da sua operacao.
          </p>
        </div>

        {/* Main panel — services grid + CTA card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
          <div className="grid lg:grid-cols-[1.4fr_1fr]">
            {/* LEFT — services grid (light surface) */}
            <div className="bg-[#fbf7f1] p-7 md:p-10">
              <div className="mb-7 flex items-center gap-3">
                <span className="h-px w-10 bg-[#b87333]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b87333]">
                  Solucoes ST Farma
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {services.map((s) => {
                  const Icon = s.icon
                  return (
                    <div
                      key={s.title}
                      className={`group relative flex gap-4 rounded-2xl p-5 transition-all ${
                        s.featured
                          ? "bg-[#f3e7d3] ring-1 ring-[#b87333]/25"
                          : "hover:bg-white"
                      }`}
                    >
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                          s.featured ? "bg-[#b87333] text-white" : "bg-[#0a1628]/[0.04] text-[#0a1628]"
                        }`}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.6} />
                      </div>

                      <div className="min-w-0">
                        <h3
                          className={`flex items-center gap-1.5 font-semibold leading-tight ${
                            s.featured ? "text-[#b87333]" : "text-[#0a1628]"
                          }`}
                        >
                          {s.title}
                          {s.featured && (
                            <ArrowUpRight className="h-3.5 w-3.5 opacity-70" strokeWidth={2} />
                          )}
                        </h3>
                        <p className="mt-1.5 text-sm leading-snug text-[#0a1628]/65">{s.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* RIGHT — CTA panel (dark navy) */}
            <div className="relative flex flex-col bg-[#0a1628] p-7 md:p-10">
              {/* Optional portrait — single image, subtle on top */}
              <div className="relative mb-6 hidden h-44 overflow-hidden rounded-2xl ring-1 ring-white/10 lg:block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_0101%20copiar-fVKNBWLv6ZALcCRwbeg0uBTc9mEPEA.jpg"
                  alt="Samir Tannuri — consultor especialista em formulacao magistral"
                  fill
                  className="object-cover object-[center_15%]"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/30 to-transparent" />
              </div>

              <div className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#e8a87c]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e8a87c]" />
                Diagnostico gratuito
              </div>

              <h2 className="font-serif text-2xl leading-[1.1] text-white md:text-[28px] lg:text-3xl">
                Identifique onde sua operacao{" "}
                <em className="text-[#e8a87c]">trava o crescimento.</em>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/70 md:text-base">
                Conversa de 30 min para mapear pontos criticos do seu portfolio e o caminho mais
                curto ate diferenciacao tecnica real.
              </p>

              {/* Mini-stats */}
              <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <div className="font-serif text-3xl text-white">500+</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Operacoes
                  </div>
                </div>
                <div>
                  <div className="font-serif text-3xl text-white">6 anos</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Em P&D
                  </div>
                </div>
              </div>

              {/* Single prominent CTA */}
              <a
                href="https://wa.me/5511981403000"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-auto inline-flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-br from-[#c98a4b] to-[#a96a2f] px-6 py-5 text-base font-bold text-white shadow-[0_12px_40px_rgba(184,115,51,0.45)] transition-all hover:translate-y-[-2px] hover:shadow-[0_16px_50px_rgba(184,115,51,0.6)] md:mt-10"
              >
                <span className="tracking-wide">Solicitar diagnostico</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
                </span>
              </a>
            </div>
          </div>

          {/* Footer bar */}
          <div className="flex flex-col items-start justify-between gap-3 border-t border-[#0a1628]/10 bg-[#fbf7f1] px-7 py-4 text-sm text-[#0a1628]/75 md:flex-row md:items-center md:px-10">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[#b87333]" />
              Nao sabe qual servico escolher?{" "}
              <a
                href="https://wa.me/5511981403000"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#0a1628] underline-offset-4 hover:underline"
              >
                Fale comigo
              </a>
            </div>
            <a
              href="/contato"
              className="inline-flex items-center gap-1.5 font-semibold text-[#0a1628] hover:text-[#b87333]"
            >
              <MessageCircle className="h-4 w-4" />
              Ver todos os contatos
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
