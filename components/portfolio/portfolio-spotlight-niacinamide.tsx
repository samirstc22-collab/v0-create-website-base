import Image from "next/image"
import Link from "next/link"
import { Sparkles, CheckCircle2, Atom, Zap, ArrowRight, Snowflake } from "lucide-react"

const composition = [
  {
    name: "Niacinamida (Vit. B3)",
    pct: "25%",
    desc: "Concentracao tecnica recorde — sebo-regulador, anti-inflammaging, reparo de barreira e bloqueador de transferencia de melanossomos.",
  },
  {
    name: "Vitamina B12 (Cobalamina)",
    pct: "0,05%",
    desc: "Cofator metabolico essencial — cor rose caracteristica, antioxidante e estimulo a microcirculacao.",
  },
  {
    name: "Acido Hialuronico (baixo PM)",
    pct: "1,5%",
    desc: "Hidratacao em multiplas camadas — efeito plumping imediato e suporte de barreira.",
  },
  {
    name: "Alfa-Arbutin",
    pct: "2%",
    desc: "Inibidor seguro de tirosinase — uniformizacao de tom sem efeito halo de hidroquinona.",
  },
]

const benefits = [
  {
    icon: Zap,
    title: "Sebo-regulador",
    desc: "Reducao mensuravel da producao de sebo em 28 dias de uso continuo.",
  },
  {
    icon: Atom,
    title: "Reparo de barreira",
    desc: "Aumento da sintese de ceramidas e reducao da TEWL.",
  },
  {
    icon: Sparkles,
    title: "Uniformizacao de tom",
    desc: "Acao despigmentante por bloqueio do transporte melanossomal.",
  },
  {
    icon: Snowflake,
    title: "Anti-inflammaging",
    desc: "Modulacao da resposta inflamatoria cronica de baixo grau.",
  },
]

export function PortfolioSpotlightNiacinamide() {
  return (
    <section
      id="serum-niacinamida"
      className="relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0C2340] to-[#0a1628] py-24 md:py-32"
    >
      {/* Decorative ice glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-[#0096B4]/20 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[#4a9eff]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5eead4]/30 bg-[#5eead4]/10 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#5eead4]" />
            <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#5eead4]">
              Marco 02 — Lancamento Vanguarda
            </span>
          </div>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-white md:text-5xl text-balance">
            Serum Niacinamida{" "}
            <em className="bg-gradient-to-r from-[#5eead4] to-[#4a9eff] bg-clip-text text-transparent">25%</em>{" "}
            + B12 + HA + Arbutin.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/70 text-pretty">
            Concentracao tecnica recorde de niacinamida estavel em sistema multifuncional que reune
            quatro mecanismos de acao em uma unica aplicacao — desenhado para peles oleosas,
            mistas, com manchas e perda de viço.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
          {/* Content */}
          <div className="lg:pr-4 space-y-7">
            {/* What it is */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#5eead4] mb-2">
                Tecnologia
              </div>
              <p className="text-base leading-relaxed text-white/75">
                Serum aquoso de alta performance com pH precisamente ajustado para preservar
                simultaneamente niacinamida 25%, vitamina B12 e alfa-arbutin — feito de uma
                tecnica clássicamente considerada incompativel pela industria. A cor rose
                caracteristica vem da B12 estabilizada.
              </p>
            </div>

            {/* Composition */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="flex items-center gap-2 mb-5">
                <Atom className="h-4 w-4 text-[#5eead4]" />
                <span className="text-[11px] font-bold uppercase tracking-[2px] text-white">
                  Composicao Tecnica
                </span>
              </div>
              <div className="space-y-4">
                {composition.map((item) => (
                  <div key={item.name} className="flex items-start gap-4 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                    <div className="shrink-0 rounded-lg bg-[#0096B4]/15 px-3 py-1.5 text-center min-w-[64px]">
                      <span className="font-serif text-lg font-bold text-[#5eead4]">
                        {item.pct}
                      </span>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">{item.name}</div>
                      <div className="mt-1 text-[13px] leading-relaxed text-white/60">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits grid */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#5eead4] mb-3">
                Mecanismos de acao
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {benefits.map((b) => {
                  const Icon = b.icon
                  return (
                    <div
                      key={b.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all hover:border-[#5eead4]/40 hover:bg-white/[0.06]"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#0096B4]/30 to-[#4a9eff]/20 mb-3">
                        <Icon className="h-5 w-5 text-[#5eead4]" />
                      </div>
                      <div className="text-sm font-bold text-white">{b.title}</div>
                      <div className="mt-1 text-[12px] leading-relaxed text-white/60">{b.desc}</div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Differentiators */}
            <div className="rounded-3xl border-2 border-[#5eead4]/25 bg-gradient-to-br from-[#0096B4]/10 to-transparent p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="h-5 w-5 text-[#5eead4]" />
                <span className="text-[12px] font-bold uppercase tracking-[2px] text-white">
                  Diferenciais tecnicos
                </span>
              </div>
              <ul className="space-y-2.5 text-[14px] text-white/80">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5eead4]" />
                  <span>
                    <strong className="text-white">Niacinamida 25%</strong> em pH compativel com
                    B12 e arbutin — proeza farmacotecnica
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5eead4]" />
                  <span>
                    <strong className="text-white">Cor rose</strong> caracteristica da B12 —
                    indicador visual de integridade do produto
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5eead4]" />
                  <span>
                    <strong className="text-white">Sensorial premium</strong> aquoso, sem
                    pegajosidade, absorcao em segundos
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#5eead4]" />
                  <span>
                    <strong className="text-white">Multi-target</strong> — substitui ate 3 produtos
                    de skincare em uma unica aplicacao
                  </span>
                </li>
              </ul>
            </div>

            {/* Inline CTA */}
            <Link
              href="/contato?assunto=serum-niacinamida"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#0096B4] to-[#5eead4] px-8 py-4 text-base font-bold text-[#0C2340] shadow-[0_10px_30px_-10px_rgba(0,150,180,0.6)] transition-all hover:-translate-y-0.5 sm:w-auto"
            >
              Solicitar protocolo do Serum 25%
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image stack */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#0096B4]/30 via-transparent to-[#4a9eff]/20 blur-3xl" />

            {/* Pink B12 serum hero */}
            <div className="relative overflow-hidden rounded-3xl border border-white/15 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4947-FTQyTm5fdOHPzRp1NsZ0Zyhp3mZFhb.jpg"
                alt="Serum rose com vitamina B12 derramado em superficie texturizada"
                width={800}
                height={1000}
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-xl bg-white/95 backdrop-blur p-3 shadow-lg">
                  <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#0096B4]">
                    Cor rose
                  </div>
                  <div className="text-sm font-bold text-[#0C2340]">
                    Vitamina B12 estabilizada
                  </div>
                </div>
              </div>
            </div>

            {/* Two stacked images */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1e079e4b-072d-455d-a6be-a86dd0055659-zxpBOtRL2qStFWka2XoEim6RpXndvo.jpg"
                  alt="Serum azul de niacinamida em base gelo"
                  width={400}
                  height={300}
                  className="w-full h-[180px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-white">
                    Niacinamida estavel
                  </span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-white/15 shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5705-Q8VdMBInR3tsJDUZcuWyrZKxmXWg26.jpg"
                  alt="Serum 25% em ambiente refrigerado para preservacao de ativos"
                  width={400}
                  height={300}
                  className="w-full h-[180px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-white">
                    Cold chain validado
                  </span>
                </div>
              </div>
            </div>

            {/* Floating concentration badge */}
            <div className="absolute -top-5 -left-5 hidden md:block">
              <div className="rounded-2xl border border-[#5eead4]/40 bg-gradient-to-br from-[#0096B4] to-[#0a6b75] px-5 py-4 shadow-2xl">
                <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#5eead4]">
                  Concentracao
                </div>
                <div className="font-serif text-3xl text-white">25%</div>
                <div className="text-[10px] text-white/70">niacinamida estavel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
