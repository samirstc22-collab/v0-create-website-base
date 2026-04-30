import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  FlaskConical,
  Lightbulb,
  Users,
  GraduationCap,
  Globe2,
  Stethoscope,
  Quote,
} from "lucide-react"
import { FlaskIllustration, BeakerIllustration } from "../illustrations"

export function SobreAbout() {
  const expertisePillars = [
    {
      icon: Stethoscope,
      title: "Dermatologia clínica aplicada",
      detail:
        "Raciocínio clínico transposto para a bancada — protocolos seguros, personalizados e replicáveis para o consultório.",
    },
    {
      icon: FlaskConical,
      title: "Desenvolvimento de formulações",
      detail:
        "P&D autoral em cosméticos magistrais e industriais: estabilidade, performance, escalabilidade e diferenciação de portfólio.",
    },
    {
      icon: GraduationCap,
      title: "Educação científica",
      detail:
        "Cursos, mentorias e palestras com método próprio — formando farmacêuticos, prescritores e equipes de P&D Brasil afora.",
    },
  ]

  const innovations = [
    {
      icon: Lightbulb,
      title: "Técnica Fenol FREE",
      detail:
        "Protocolo autoral de peeling profundo sem fenol — segurança elevada e resultado clínico replicável.",
    },
    {
      icon: FlaskConical,
      title: "Peeling de azelaico em pasta anidra",
      detail:
        "Primeiro peeling de ácido azelaico em pasta anidra do mundo — concebido, formulado e validado na bancada.",
    },
    {
      icon: Users,
      title: "+500 farmácias atendidas",
      detail:
        "Suporte técnico, reformulação de portfólio e implantação de novidades em farmácias magistrais do Brasil inteiro.",
    },
    {
      icon: Globe2,
      title: "Pesquisa internacional",
      detail:
        "Treinamentos e missões técnicas em +23 capitais e 6 países — Europa, Ásia e América Latina.",
    },
  ]

  return (
    <section id="sobre" className="relative overflow-hidden bg-white py-28 px-6 lg:px-10">
      {/* Decorative illustrations */}
      <FlaskIllustration className="absolute top-20 right-[3%] w-24 h-32 text-[#0a8f9e] opacity-10" />
      <BeakerIllustration className="absolute bottom-20 left-[3%] w-20 h-28 text-[#B8783D] opacity-10" />

      <div className="relative mx-auto max-w-[1200px]">
        <div className="flex flex-wrap items-start gap-16 lg:gap-20">
          {/* Photo column */}
          <div className="hidden min-w-[300px] flex-[0_0_400px] lg:block">
            <div className="sticky top-32">
              <div className="relative overflow-hidden rounded-3xl shadow-[0_30px_80px_rgba(12,35,64,0.18)]">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2000.11.30-UkIMWFmpL5lZ3gn4blX8ZmP2oSU9L6.jpeg"
                    alt="Prof. Samir Tannuri — professor, pesquisador e consultor em tecnologia magistral"
                    fill
                    className="object-cover object-center"
                    sizes="400px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/45 via-transparent to-transparent" />
                </div>
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/40 bg-white/95 p-5 shadow-[0_12px_40px_rgba(12,35,64,0.18)] backdrop-blur-xl">
                  <div className="font-serif text-xl text-[#0C2340]">Prof. Samir Tannuri</div>
                  <div className="mt-1 text-sm text-[#64748b]">
                    Professor · Pesquisador · Consultor
                  </div>
                </div>
              </div>

              {/* Mini-stats abaixo da foto */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-[#0C2340]/10 bg-[#0C2340]/[0.03] p-4">
                  <div className="font-serif text-2xl text-[#0C2340]">+500</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[2px] text-[#64748b]">
                    Farmácias atendidas
                  </div>
                </div>
                <div className="rounded-2xl border border-[#B8783D]/15 bg-[#B8783D]/[0.05] p-4">
                  <div className="font-serif text-2xl text-[#B8783D]">+23</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[2px] text-[#64748b]">
                    Capitais e 6 países
                  </div>
                </div>
                <div className="rounded-2xl border border-[#0a8f9e]/15 bg-[#0a8f9e]/[0.05] p-4">
                  <div className="font-serif text-2xl text-[#0a8f9e]">4.000</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[2px] text-[#64748b]">
                    Fórmulas testadas
                  </div>
                </div>
                <div className="rounded-2xl border border-[#0C2340]/10 bg-[#0C2340]/[0.03] p-4">
                  <div className="font-serif text-2xl text-[#0C2340]">20+</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[2px] text-[#64748b]">
                    Indústrias atendidas
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="min-w-[320px] flex-1">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#B8783D]/25 bg-[#B8783D]/8 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B8783D]" />
              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#B8783D]">
                Sobre · Trajetória & Propósito
              </span>
            </div>

            <h2 className="mb-6 font-serif text-3xl leading-[1.08] text-[#0C2340] md:text-4xl lg:text-[44px]">
              Da farmácia do meu pai{" "}
              <em className="text-[#B8783D]">para o balcão de centenas</em> de farmácias do Brasil.
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-[#374151]">
              <strong className="font-semibold text-[#0C2340]">Quem me ensinou foi o meu pai.</strong>{" "}
              Cresci dentro de farmácia magistral, ouvindo conversa de balcão, vendo manipulação
              acontecer e perguntando por que cada ativo entrava na fórmula. O que começou como
              herança virou método — e o método virou a paixão de compartilhar conhecimento que me
              acompanha até hoje.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-[#374151]">
              Sou <strong className="font-semibold text-[#0C2340]">professor, pesquisador e consultor</strong>{" "}
              atuando na interface entre <strong className="font-semibold text-[#0C2340]">dermatologia clínica aplicada, desenvolvimento de formulações e educação científica</strong>. Coordenei o P&amp;D de cosméticos no maior grupo magistral do Brasil, atendi tecnicamente mais de 500 farmácias e formei profissionais em mais de 23 capitais e 6 países, com intercâmbios de pesquisa na Europa, Ásia e América Latina.
            </p>

            <p className="mb-10 text-lg leading-relaxed text-[#374151]">
              Trabalho com{" "}
              <strong className="font-semibold text-[#0C2340]">rigor metodológico, base científica sólida</strong>{" "}
              e foco em aplicabilidade real — para que cada conhecimento se traduza em raciocínios{" "}
              <strong className="font-semibold text-[#0C2340]">consistentes, seguros e personalizados</strong>{" "}
              tanto na prática clínica quanto na bancada de quem desenvolve produtos.
            </p>

            {/* Pillars */}
            <div className="mb-12 grid gap-4 sm:grid-cols-3">
              {expertisePillars.map((p) => {
                const Icon = p.icon
                return (
                  <div
                    key={p.title}
                    className="group rounded-2xl border border-[#0C2340]/10 bg-white p-5 transition-all hover:-translate-y-0.5 hover:border-[#B8783D]/35 hover:shadow-[0_18px_45px_rgba(184,120,61,0.14)]"
                  >
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0C2340]/[0.06] text-[#0C2340] transition-colors group-hover:bg-[#B8783D]/15 group-hover:text-[#B8783D]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mb-1 font-serif text-lg leading-tight text-[#0C2340]">
                      {p.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#64748b]">{p.detail}</p>
                  </div>
                )
              })}
            </div>

            {/* Innovations subhead */}
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-10 bg-[#B8783D]" />
              <span className="text-[11px] font-bold uppercase tracking-[2.8px] text-[#B8783D]">
                Inovações & Criações Autorais
              </span>
            </div>

            <div className="mb-12 grid gap-4 sm:grid-cols-2">
              {innovations.map((i) => {
                const Icon = i.icon
                return (
                  <div
                    key={i.title}
                    className="flex items-start gap-4 rounded-2xl border border-[#0C2340]/8 bg-[#F8F6F2] p-5"
                  >
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#B8783D]/15 to-[#0a8f9e]/12 text-[#B8783D]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="mb-1 font-serif text-base leading-tight text-[#0C2340]">
                        {i.title}
                      </h4>
                      <p className="text-sm leading-relaxed text-[#64748b]">{i.detail}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quote */}
            <div className="relative mb-12 overflow-hidden rounded-2xl border border-[#B8783D]/20 bg-gradient-to-br from-[#B8783D]/8 to-[#0C2340]/[0.04] p-7 pl-16">
              <Quote className="absolute left-5 top-5 h-7 w-7 text-[#B8783D]/55" />
              <p className="mb-3 font-serif text-xl italic leading-relaxed text-[#0C2340]">
                Fórmula boa não nasce de opinião — nasce de evidência, método e iteração. E ensinar
                é a única forma de devolver ao mercado o que a bancada me entregou.
              </p>
              <span className="text-sm font-semibold text-[#64748b]">— Prof. Samir Tannuri</span>
            </div>

            {/* CTAs estratégicos */}
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contato"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#B8783D] px-6 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(184,120,61,0.32)] transition-all hover:-translate-y-0.5 hover:bg-[#9a6530] hover:shadow-[0_14px_38px_rgba(184,120,61,0.42)]"
              >
                <FlaskConical className="h-4 w-4" />
                Quero desenvolver com estratégia
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/consultoria"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#0C2340] bg-transparent px-6 py-3.5 font-semibold text-[#0C2340] transition-all hover:-translate-y-0.5 hover:bg-[#0C2340] hover:text-white"
              >
                <Stethoscope className="h-4 w-4" />
                Falar com consultoria
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile-only photo (mostrada no topo do mobile, antes do texto, via uma versão compacta) */}
        <div className="mt-12 lg:hidden">
          <div className="relative overflow-hidden rounded-3xl shadow-[0_20px_60px_rgba(12,35,64,0.18)]">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-04-30%20at%2000.11.30-UkIMWFmpL5lZ3gn4blX8ZmP2oSU9L6.jpeg"
                alt="Prof. Samir Tannuri — professor, pesquisador e consultor"
                fill
                className="object-cover object-center"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/55 via-transparent to-transparent" />
            </div>
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/40 bg-white/95 p-4 backdrop-blur-xl">
              <div className="font-serif text-lg text-[#0C2340]">Prof. Samir Tannuri</div>
              <div className="mt-0.5 text-xs text-[#64748b]">
                Professor · Pesquisador · Consultor
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
