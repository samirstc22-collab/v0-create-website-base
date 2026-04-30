import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Mic2, GraduationCap, Globe2, FlaskConical } from "lucide-react"

const metrics = [
  {
    icon: Mic2,
    value: "100+",
    label: "Palestras, cursos e congressos",
    detail:
      "Eventos presenciais como palestrante — em indústria, magistrais, faculdades e congressos científicos.",
  },
  {
    icon: GraduationCap,
    value: "3.000+",
    label: "Alunos formados",
    detail:
      "Profissionais formados em cursos livres, práticos e técnicos em farmacotécnica e cosmetologia aplicada.",
  },
  {
    icon: Globe2,
    value: "4 países",
    label: "Missões internacionais",
    detail:
      "Brasil, França (Paris), Holanda (Amsterdam) e Japão — pesquisa, sourcing e ensino in loco.",
  },
]

export function TeachingShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#0A1628] py-20 md:py-28">
      {/* Camadas decorativas — gradientes sutis, paleta navy + champagne */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 60% 50% at 85% 15%, rgba(212, 185, 140, 0.10) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 10% 90%, rgba(157, 190, 177, 0.06) 0%, transparent 60%)
          `,
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(212, 185, 140, 0.6) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Cabeçalho da seção + CTA Portfólio no topo */}
        <div className="mb-12 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gradient-to-r from-transparent via-[#D4B98C] to-[#D4B98C]" />
              <span className="text-[11px] font-bold uppercase tracking-[3.5px] text-[#D4B98C]">
                Em cena · Ensino &amp; Palestras
              </span>
            </div>
            <h2 className="font-serif text-[clamp(34px,5vw,58px)] leading-[1.02] tracking-[-0.025em] text-white">
              Quando a ciência{" "}
              <em className="bg-gradient-to-r from-[#e0c89e] via-[#D4B98C] to-[#a68449] bg-clip-text italic text-transparent">
                ganha palco
              </em>
              ,<br className="hidden md:block" /> a técnica vira movimento.
            </h2>
            <p className="mt-6 max-w-2xl text-justify text-base leading-relaxed text-white/75 md:text-lg">
              De congressos internacionais a turmas in loco para indústrias e farmácias magistrais,
              o ensino é o coração do trabalho. Cada palestra, cada aula e cada mentoria assumem o
              compromisso de unir profundidade científica, clareza didática e aplicação real — para
              que o conhecimento saia da bancada e chegue, de fato, ao consultório, à prescrição e
              à prateleira.
            </p>
          </div>

          {/* CTA Portfólio — destaque visual no topo direito */}
          <Link
            href="/portfolio"
            className="group inline-flex flex-shrink-0 items-center gap-3 self-start rounded-2xl border border-[#D4B98C]/35 bg-gradient-to-br from-[#D4B98C]/15 to-[#D4B98C]/[0.04] px-5 py-4 backdrop-blur-md transition-all hover:border-[#D4B98C]/60 hover:from-[#D4B98C]/25 md:self-end"
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#D4B98C] text-[#0A1628]">
              <FlaskConical className="h-5 w-5" strokeWidth={2} />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#D4B98C]">
                Portfólio técnico
              </div>
              <div className="text-base font-bold text-white">
                Ver mais de 20 fórmulas
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 text-[#D4B98C] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Grid editorial responsivo — 3 imagens em mosaico */}
        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Imagem principal — palco com luzes, plano amplo */}
          <div className="relative lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.55)] md:aspect-[16/10] lg:aspect-[5/4]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4727-NTuBtxqrkNVd7sX59ZDNZ4ga2AjT6S.jpg"
                alt="Samir Tannuri palestrando em congresso internacional sob luzes de palco"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 30%, rgba(10,22,40,0.55) 100%)",
                }}
              />

              <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[#D4B98C]/35 bg-[#0a1628]/70 px-4 py-2 backdrop-blur-md md:left-6 md:top-6">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D4B98C] opacity-70" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#D4B98C]" />
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#D4B98C]">
                  No palco · 1º Simpósio de Peelings
                </span>
              </div>

              <figcaption className="absolute inset-x-5 bottom-5 md:inset-x-8 md:bottom-8">
                <blockquote className="font-serif text-lg italic leading-snug text-white/95 md:text-2xl">
                  &ldquo;A formulação de excelência nasce do encontro entre evidência
                  científica e sensibilidade técnica.&rdquo;
                </blockquote>
                <p className="mt-2 text-[11px] font-semibold uppercase tracking-[2px] text-white/55">
                  Samir Tannuri — Trecho de palestra
                </p>
              </figcaption>
            </div>
          </div>

          {/* Coluna lateral — Japão (grupo) + close-up da gestualidade */}
          <div className="flex flex-col gap-6 lg:col-span-5 lg:gap-7">
            {/* DESTAQUE — Missão Técnica no Japão */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.5)]">
              <Image
                src="/grupo-alunos-japao.jpg"
                alt="Grupo de alunos e profissionais em missão técnica no Japão com Samir Tannuri"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/85 via-[#0a1628]/15 to-transparent"
              />
              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0a1628]/70 px-3 py-1.5 backdrop-blur-md">
                <Globe2 className="h-3 w-3 text-[#D4B98C]" />
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-white/90">
                  Missão Técnica · Japão
                </span>
              </div>
              <div className="absolute inset-x-4 bottom-4 md:inset-x-5 md:bottom-5">
                <p className="font-serif text-base leading-snug text-white md:text-lg">
                  Imersão técnica internacional com alunos brasileiros — pesquisa, sourcing e
                  cultura científica.
                </p>
              </div>
            </div>

            {/* Foto complementar — close-up gestual (menor) */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.4)]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4728-hwaQ3hZlFj8DiEadtJBjOzAHQz2S9t.jpg"
                alt="Samir Tannuri ensinando — aproximação do gesto e da expressão"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent"
              />
              <div className="absolute bottom-4 left-5 right-5 md:bottom-5 md:left-6 md:right-6">
                <p className="font-serif text-sm leading-snug text-white/95 md:text-base">
                  Aulas e mentorias in loco — gestualidade técnica, narrativa clara e protocolos
                  aplicáveis no mesmo dia.
                </p>
              </div>
            </div>

            {/* Mini-bio */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm md:p-7">
              <p className="text-justify text-sm leading-relaxed text-white/80 md:text-[15px]">
                Mais que pesquisador, atuo como{" "}
                <strong className="text-white">tradutor de complexidade</strong> — transformo
                literatura científica densa em protocolos aplicáveis para quem formula no dia a
                dia. Em sala, online ou no palco, a missão é a mesma: gerar clareza técnica e
                resultado mensurável.
              </p>
              <Link
                href="/sobre"
                className="group mt-5 inline-flex items-center gap-2 border-b border-[#D4B98C]/40 pb-1 text-sm font-semibold text-[#D4B98C] transition-colors hover:border-[#D4B98C]"
              >
                Conhecer trajetória completa
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Faixa de métricas — 3 cartões alinhados */}
        <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
          {metrics.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition-all duration-300 hover:border-[#D4B98C]/30 hover:bg-white/[0.04] md:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#D4B98C]/25 bg-[#D4B98C]/10 text-[#D4B98C]">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div className="font-serif text-4xl leading-none text-white md:text-5xl">
                    {item.value}
                  </div>
                </div>
                <div className="mt-5">
                  <div className="text-sm font-semibold tracking-tight text-white">
                    {item.label}
                  </div>
                  <div className="mt-1.5 text-justify text-xs leading-relaxed text-white/60 md:text-[13px]">
                    {item.detail}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
