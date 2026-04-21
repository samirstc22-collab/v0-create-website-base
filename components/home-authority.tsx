import Image from "next/image"
import Link from "next/link"
import {
  Globe2,
  Users,
  Mic2,
  FlaskConical,
  GraduationCap,
  Building2,
  Award,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export function HomeAuthority() {
  const bigNumbers = [
    {
      icon: Mic2,
      value: "800+",
      label: "Palestras ministradas",
      detail: "Congressos nacionais e internacionais",
    },
    {
      icon: MapPin,
      value: "26",
      label: "Capitais brasileiras",
      detail: "Tour técnico em todos os estados",
    },
    {
      icon: Globe2,
      value: "15+",
      label: "Países visitados",
      detail: "Missões técnicas em 3 continentes",
    },
    {
      icon: GraduationCap,
      value: "12.000+",
      label: "Alunos impactados",
      detail: "Farmacêuticos e estudantes formados",
    },
    {
      icon: FlaskConical,
      value: "4.000+",
      label: "Fórmulas validadas",
      detail: "Testadas em bancada e mercado",
    },
    {
      icon: Building2,
      value: "20+",
      label: "Indústrias atendidas",
      detail: "Brasil, Europa e América do Sul",
    },
  ]

  const countries = [
    "Brasil",
    "França",
    "Holanda",
    "Portugal",
    "Espanha",
    "Itália",
    "Alemanha",
    "Japão",
    "Estados Unidos",
    "México",
    "Argentina",
    "Chile",
    "Colômbia",
    "Peru",
    "Uruguai",
  ]

  const authoritySeals = [
    "CNPq - Conselho Nacional",
    "UNICAMP - Pós-Graduação",
    "Peer-Reviewed DOI",
    "Lattes K2699008D8",
    "ResearchGate",
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0d1d35] to-[#0a1628] py-24 md:py-32">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(232,168,124,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(45,212,191,0.3) 0%, transparent 50%)",
          }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <pattern id="grid-authority" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-authority)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#e8a87c]/30 bg-[#e8a87c]/10 px-5 py-2">
            <Award className="h-4 w-4 text-[#e8a87c]" />
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#e8a87c]">
              Autoridade Comprovada
            </span>
          </div>
          <h2 className="mt-6 font-serif text-4xl leading-[1.03] tracking-[-0.02em] text-white md:text-6xl lg:text-[72px]">
            Enquanto outros leem sobre cosmetologia,{" "}
            <span className="italic text-[#e8a87c]">ele formula ao lado de quem escreve os livros.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-[1.7] text-white/70 md:text-xl">
            Mais de duas décadas na ponta da pesquisa cosmética global. Quando o Prof. Samir senta à sua
            mesa para pensar a sua farmácia, ele traz com ele{" "}
            <span className="font-semibold text-white">o que há de mais avançado em Paris, Tóquio e
            Amsterdam</span> — traduzido em protocolos que cabem no seu caixa.
          </p>
        </div>

        {/* Featured lab photo + copy */}
        <div className="mt-20 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          {/* Photo */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-[#e8a87c]/30 via-transparent to-[#2dd4bf]/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
              <Image
                src="/images/samir-lab-eurotex.png"
                alt="Prof. Samir Tannuri em laboratório internacional EUROTEX operando homogenizador"
                width={1200}
                height={1500}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/70 via-transparent to-transparent" />

              {/* Floating info card */}
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-black/75 p-5 backdrop-blur-xl">
                <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[2.5px] text-[#e8a87c]">
                  <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e8a87c]" />
                  Em bancada · EUROTEX França
                </div>
                <p className="font-serif text-lg leading-tight text-white">
                  Imersão técnica europeia em novas tecnologias de emulsão a frio e veiculação
                  dermatológica avançada.
                </p>
              </div>
            </div>

            {/* Corner badges */}
            <div className="absolute -right-4 top-8 hidden rounded-2xl border border-white/15 bg-white/[0.08] px-5 py-4 backdrop-blur-xl lg:block">
              <div className="text-[10px] font-bold uppercase tracking-[2.5px] text-white/60">
                Lattes
              </div>
              <div className="font-mono text-sm text-white">K2699008D8</div>
            </div>
            <div className="absolute -left-4 bottom-24 hidden rounded-2xl border border-white/15 bg-white/[0.08] px-5 py-4 backdrop-blur-xl lg:block">
              <div className="text-[10px] font-bold uppercase tracking-[2.5px] text-white/60">
                Peer-Reviewed
              </div>
              <div className="font-mono text-sm text-white">DOI · 281</div>
            </div>
          </div>

          {/* Sales copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#2dd4bf]/30 bg-[#2dd4bf]/10 px-4 py-1.5">
              <span className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#2dd4bf]">
                Por que isso importa para você
              </span>
            </div>
            <h3 className="mt-5 font-serif text-3xl leading-[1.1] text-white md:text-5xl">
              A sua concorrência vende <em className="text-[#e8a87c]">receita de bolo.</em>{" "}
              <br />
              Você vai entregar <em className="text-[#2dd4bf]">ciência de ponta.</em>
            </h3>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all hover:border-[#e8a87c]/30 hover:bg-white/[0.07]">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#e8a87c]" />
                <div>
                  <div className="font-semibold text-white">
                    Protocolos que chegam anos antes do mercado brasileiro
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">
                    Tecnologias testadas em laboratórios europeus e asiáticos, adaptadas com rigor
                    técnico para a sua bancada — antes mesmo de virarem tendência no Instagram.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all hover:border-[#e8a87c]/30 hover:bg-white/[0.07]">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#e8a87c]" />
                <div>
                  <div className="font-semibold text-white">
                    Fórmulas proprietárias com lucratividade validada
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">
                    Cada molécula selecionada passa por três filtros: eficácia clínica, viabilidade
                    de margem e aceitação real do seu público de balcão.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all hover:border-[#e8a87c]/30 hover:bg-white/[0.07]">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-[#e8a87c]" />
                <div>
                  <div className="font-semibold text-white">
                    Autoridade que se transfere para a sua marca
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-white/65">
                    Você não compra apenas consultoria — você adquire o endosso científico de quem
                    publica em revista peer-reviewed e palestra nos maiores congressos do setor.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/consultoria"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#e8a87c] to-[#b87333] px-8 py-4 font-bold text-[#0a1628] shadow-[0_8px_30px_rgba(232,168,124,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(232,168,124,0.5)]"
              >
                Quero meu diagnóstico
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/cursos"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10"
              >
                Ver cursos disponíveis
              </Link>
            </div>
          </div>
        </div>

        {/* Big numbers grid */}
        <div className="mt-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[11px] font-bold uppercase tracking-[3px] text-[#e8a87c]">
                Os números falam
              </div>
              <h3 className="mt-2 font-serif text-3xl leading-tight text-white md:text-5xl">
                Uma trajetória que não cabe em um currículo.
              </h3>
            </div>
            <p className="max-w-md text-base leading-relaxed text-white/60">
              24 anos dedicados à ciência farmacêutica, da bancada universitária ao palco dos maiores
              congressos — e ao seu balcão.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {bigNumbers.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-7 transition-all hover:-translate-y-1 hover:border-[#e8a87c]/40 hover:shadow-[0_20px_60px_rgba(232,168,124,0.15)]"
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#e8a87c]/10 blur-2xl transition-all group-hover:bg-[#e8a87c]/20" />
                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-[#e8a87c]/30 bg-[#e8a87c]/10">
                      <Icon className="h-5 w-5 text-[#e8a87c]" />
                    </div>
                    <div className="font-serif text-6xl leading-none text-white md:text-7xl">
                      {item.value}
                    </div>
                    <div className="mt-3 font-semibold text-white">{item.label}</div>
                    <div className="mt-1 text-sm leading-relaxed text-white/55">{item.detail}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Countries band */}
        <div className="mt-20 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="max-w-sm">
              <div className="flex items-center gap-3">
                <Globe2 className="h-6 w-6 text-[#2dd4bf]" />
                <div className="text-[11px] font-bold uppercase tracking-[3px] text-[#2dd4bf]">
                  Missões técnicas
                </div>
              </div>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-white md:text-4xl">
                Ciência sem fronteiras, resultado com endereço.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Cada país visitado vira protocolo aplicado no Brasil. Cada laboratório europeu vira
                uma nova fórmula no seu cardápio.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {countries.map((country) => (
                <span
                  key={country}
                  className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-all hover:border-[#2dd4bf]/40 hover:bg-[#2dd4bf]/10 hover:text-white"
                >
                  <MapPin className="mr-1.5 inline h-3 w-3 text-[#2dd4bf]" />
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Authority seals */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-4 border-t border-white/10 pt-12">
          <span className="text-[11px] font-bold uppercase tracking-[3px] text-white/40">
            Avalizado por
          </span>
          {authoritySeals.map((seal) => (
            <span
              key={seal}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold tracking-wide text-white/70"
            >
              {seal}
            </span>
          ))}
        </div>

        {/* Final sales copy banner */}
        <div className="relative mt-20 overflow-hidden rounded-[32px] border border-[#e8a87c]/30 bg-gradient-to-br from-[#e8a87c]/15 via-[#0a1628] to-[#2dd4bf]/10 p-10 md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#e8a87c]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#2dd4bf]/15 blur-3xl" />
          <div className="relative mx-auto max-w-3xl text-center">
            <Users className="mx-auto h-8 w-8 text-[#e8a87c]" />
            <h3 className="mt-6 font-serif text-3xl leading-[1.1] text-white md:text-5xl lg:text-6xl">
              Seja o farmacêutico que a sua cidade{" "}
              <em className="text-[#e8a87c]">procura primeiro.</em>
            </h3>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-[1.7] text-white/75">
              Entre para o grupo seleto de farmácias que já adotaram o método Samir Tannuri e
              multiplicaram ticket médio, fidelização e reputação técnica na sua região.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/consultoria"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-[#e8a87c] to-[#b87333] px-10 py-4 text-base font-bold text-[#0a1628] shadow-[0_10px_40px_rgba(232,168,124,0.4)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_50px_rgba(232,168,124,0.55)]"
              >
                Agendar reunião estratégica
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/cursos"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/[0.06] px-10 py-4 text-base font-semibold text-white backdrop-blur-xl transition-all hover:border-white/40 hover:bg-white/10"
              >
                Explorar cursos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
