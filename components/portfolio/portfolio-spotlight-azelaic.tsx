import Image from "next/image"
import Link from "next/link"
import { Beaker, CheckCircle2, TrendingUp, ShieldCheck, Droplets, ArrowRight } from "lucide-react"

const benefits = [
  {
    title: "Acne ativa e papulopustulosa",
    description: "Acao queratolitica seletiva nos canais foliculares com efeito antibacteriano sobre P. acnes.",
  },
  {
    title: "Melasma e hiperpigmentacao",
    description: "Inibicao da tirosinase com seletividade para melanocitos hiperativos — sem efeito clareador em pele saudavel.",
  },
  {
    title: "Rosacea papulopustulosa",
    description: "Reducao do eritema persistente e das papulas inflamatorias por modulacao de catelicidinas.",
  },
  {
    title: "Pele intolerante a peelings",
    description: "Alta tolerabilidade — opcao para pacientes com barreira cutanea comprometida.",
  },
]

const technicalData = [
  { label: "Concentracao", value: "20% / 25% / 30%" },
  { label: "Forma farmaceutica", value: "Pasta estavel" },
  { label: "pH", value: "4,5 — 5,5" },
  { label: "Tempo de acao", value: "5 — 15 min" },
  { label: "Frequencia", value: "Sessao quinzenal" },
  { label: "Visia melhora", value: "+30,5% media" },
]

export function PortfolioSpotlightAzelaic() {
  return (
    <section id="peeling-azelaico" className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafbfc] to-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#d4af37]/8 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 px-4 py-1.5">
            <Beaker className="h-3.5 w-3.5 text-[#a88615]" />
            <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#a88615]">
              Marco 01 — 2024
            </span>
          </div>
          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-[#0C2340] md:text-5xl text-balance">
            Primeiro Peeling Azelaico em <em className="text-[#B8783D]">Pasta</em> do mundo.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-[#475569] text-pretty">
            Inovacao galenica original que transformou um ativo classico (acido azelaico) em forma
            farmaceutica inedita — pasta estavel, alta concentracao, tolerabilidade superior aos
            peelings convencionais.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          {/* Image stack */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#d4af37]/20 via-transparent to-[#B8783D]/20 blur-2xl" />

            {/* Main hero image — paste jars */}
            <div className="relative overflow-hidden rounded-3xl border border-[#0C2340]/10 shadow-[0_20px_60px_-20px_rgba(12,35,64,0.3)]">
              <Image
                src="/portfolio/peeling-azelaico-pasta.jpeg"
                alt="Pasta de peeling azelaico em diferentes pigmentacoes em frascos identificados"
                width={800}
                height={900}
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/70 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="rounded-xl bg-white/95 backdrop-blur p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d4af37]/15">
                      <TrendingUp className="h-5 w-5 text-[#a88615]" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#a88615]">
                        Estudo Visia&reg;
                      </div>
                      <div className="text-sm font-semibold text-[#0C2340]">
                        +30,5% melhora media — textura, manchas, vermelhidao
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage image — credibility */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl border border-[#0C2340]/10 shadow-md">
                <Image
                  src="/portfolio/congresso-peeling-azelaico.jpg"
                  alt="Apresentacao em congresso: Primeiro peeling azelaico em pasta do mundo"
                  width={400}
                  height={250}
                  className="w-full h-[160px] object-cover object-[center_30%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-white">
                    Apresentado em congresso
                  </span>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-2xl border border-[#0C2340]/10 shadow-md">
                <Image
                  src="/portfolio/lab-equipment.jpeg"
                  alt="Desenvolvimento da pasta em ambiente laboratorial controlado"
                  width={400}
                  height={250}
                  className="w-full h-[160px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 right-2">
                  <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-white">
                    P&amp;D Laboratorio
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-4">
            <div className="space-y-7">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#a88615] mb-2">
                  O que e
                </div>
                <p className="text-base leading-relaxed text-[#334155]">
                  Forma farmaceutica original em pasta estavel que veicula acido azelaico em
                  concentracoes terapeuticas (20%, 25% e 30%) com sensorial superior, distribuicao
                  homogenea sobre a pele e tempo de exposicao controlado — superando as limitacoes
                  classicas de cremes, geis e solucoes alcoolicas.
                </p>
              </div>

              {/* Technical specs */}
              <div className="rounded-3xl border border-[#0C2340]/10 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <Droplets className="h-4 w-4 text-[#B8783D]" />
                  <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#0C2340]">
                    Ficha Tecnica
                  </span>
                </div>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-3">
                  {technicalData.map((item) => (
                    <div key={item.label} className="flex flex-col border-b border-[#0C2340]/5 pb-2 last:border-0">
                      <dt className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#64748b]">
                        {item.label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-bold text-[#0C2340]">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Benefits */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#a88615] mb-3">
                  Indicacoes clinicas
                </div>
                <div className="space-y-3">
                  {benefits.map((b) => (
                    <div
                      key={b.title}
                      className="flex items-start gap-3 rounded-xl bg-white border border-[#0C2340]/8 p-4 transition-all hover:border-[#d4af37]/40 hover:shadow-sm"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#a88615]" />
                      <div>
                        <div className="text-sm font-bold text-[#0C2340]">{b.title}</div>
                        <div className="mt-0.5 text-[13px] leading-relaxed text-[#64748b]">
                          {b.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Differentiators */}
              <div className="rounded-3xl border-2 border-[#d4af37]/30 bg-gradient-to-br from-[#fefcf3] to-white p-6">
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="h-5 w-5 text-[#a88615]" />
                  <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#0C2340]">
                    Por que e diferente
                  </span>
                </div>
                <ul className="space-y-2.5 text-[14px] text-[#334155]">
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />
                    <span>
                      <strong className="text-[#0C2340]">Pasta proprietaria</strong> — nao existe
                      no mercado tradicional, apenas em formula magistral exclusiva
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />
                    <span>
                      <strong className="text-[#0C2340]">Estabilidade comprovada</strong> em
                      estudos de prateleira de longa duracao (24 meses)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />
                    <span>
                      <strong className="text-[#0C2340]">Tolerabilidade superior</strong> — alta
                      adesao em pacientes intolerantes a peelings classicos
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d4af37]" />
                    <span>
                      <strong className="text-[#0C2340]">Validado clinicamente</strong> — estudo
                      Visia&reg; com 30,5% de melhora media documentada
                    </span>
                  </li>
                </ul>
              </div>

              {/* Inline CTA */}
              <Link
                href="/contato?assunto=peeling-azelaico"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#0C2340] to-[#1a3a5c] px-8 py-4 text-base font-bold text-white shadow-[0_10px_30px_-10px_rgba(12,35,64,0.5)] transition-all hover:-translate-y-0.5 sm:w-auto"
              >
                Solicitar protocolo magistral
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
