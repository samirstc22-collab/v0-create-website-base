import { MapPin, Plane, GraduationCap, Globe2 } from "lucide-react"

export function LPMissions() {
  const missions = [
    {
      id: "01",
      city: "Paris",
      country: "França",
      institution: "EUROTEX / In-Cosmetics Global",
      focus: "Homogeneização industrial · Ativos de última geração",
      year: "2024",
    },
    {
      id: "02",
      city: "Amsterdam",
      country: "Países Baixos",
      institution: "In-Cosmetics Global",
      focus: "Scale-up & processos industriais",
      year: "2023",
    },
    {
      id: "03",
      city: "Tóquio",
      country: "Japão",
      institution: "Missão Técnica JETRO",
      focus: "J-Beauty · Nanoemulsões avançadas",
      year: "2023",
    },
  ]

  const kpis = [
    { label: "Países", value: "15+", sub: "3 continentes" },
    { label: "Capitais", value: "17+", sub: "Brasil" },
    { label: "Alunos", value: "1.000+", sub: "profissionais formados" },
    { label: "Palestras", value: "800+", sub: "congressos proferidos" },
  ]

  const capitals = [
    "Aracaju", "Belém", "Belo Horizonte", "Brasília", "Campo Grande",
    "Cuiabá", "Curitiba", "Florianópolis", "Fortaleza", "Goiânia",
    "Manaus", "Natal", "Porto Alegre", "Recife", "Rio de Janeiro",
    "Salvador", "São Paulo", "Vitória",
  ]

  return (
    <section id="missoes" className="relative overflow-hidden bg-[#070A11] py-24 lg:py-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(196,210,230,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(196,210,230,0.8) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[3px] text-[#4a9eff]">
                § 01
              </span>
              <span className="h-px w-12 bg-[#4a9eff]/40" />
              <span className="font-mono text-[10px] uppercase tracking-[3px] text-white/40">
                Missões &amp; Formação
              </span>
            </div>
            <h2 className="font-serif text-[clamp(36px,5vw,60px)] leading-[1] tracking-[-1.5px] text-white">
              Ciência que <span className="italic text-[#c9a961]">atravessa fronteiras.</span>
            </h2>
          </div>
          <p className="text-[17px] leading-[1.7] text-white/55 lg:text-[18px]">
            Três continentes, quinze países e mais de quatro dezenas de congressos científicos.
            Cada missão internacional é traduzida em protocolos aplicáveis à realidade brasileira —
            sem filtros, sem atalhos e sem perder o rigor da fonte.
          </p>
        </div>

        {/* KPI row */}
        <div className="mb-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] md:grid-cols-4">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="group relative bg-[#070A11] p-7 transition-colors hover:bg-white/[0.02]"
            >
              <div className="font-mono text-[10px] uppercase tracking-[2.5px] text-white/35">
                {k.label}
              </div>
              <div className="mt-3 font-serif text-[46px] leading-none text-white">
                {k.value}
              </div>
              <div className="mt-2 text-xs text-white/50">{k.sub}</div>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#4a9eff] to-transparent transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>

        {/* Missions — journal entries */}
        <div className="grid gap-6 lg:grid-cols-3">
          {missions.map((m) => (
            <article
              key={m.id}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.03] to-transparent p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#c9a961]/25 hover:bg-white/[0.04]"
            >
              <div className="mb-8 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] font-mono text-[11px] text-white/50">
                    {m.id}
                  </span>
                  <Plane className="h-4 w-4 text-white/30 transition-all group-hover:rotate-[-12deg] group-hover:text-[#c9a961]" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[2px] text-white/35">
                  {m.year}
                </span>
              </div>

              <div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[2px] text-white/40">
                <MapPin className="h-3 w-3" />
                {m.country}
              </div>
              <h3 className="font-serif text-4xl leading-tight text-white">{m.city}</h3>

              <div className="my-6 h-px w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent" />

              <div className="space-y-3">
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-[2.5px] text-[#4a9eff]">
                    Instituição
                  </div>
                  <div className="mt-1 text-sm text-white/85">{m.institution}</div>
                </div>
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-[2.5px] text-[#4a9eff]">
                    Objeto de estudo
                  </div>
                  <div className="mt-1 text-sm text-white/70">{m.focus}</div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 h-24 w-24 rounded-tl-[60px] bg-gradient-to-tl from-[#c9a961]/[0.05] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </article>
          ))}
        </div>

        {/* Capitals strip */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.02] to-transparent">
          <div className="grid gap-0 lg:grid-cols-[auto_1fr]">
            <div className="border-b border-white/10 p-8 lg:border-b-0 lg:border-r lg:p-10">
              <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2.5px] text-[#c9a961]">
                <Globe2 className="h-3.5 w-3.5" />
                Presença Nacional
              </div>
              <div className="font-serif text-5xl leading-none text-white">17</div>
              <div className="mt-2 text-xs text-white/50">capitais brasileiras</div>
              <div className="mt-6 flex items-center gap-2 rounded-lg border border-[#4a9eff]/20 bg-[#4a9eff]/[0.06] px-3 py-2">
                <GraduationCap className="h-4 w-4 text-[#4a9eff]" />
                <span className="text-xs text-white/80">
                  <strong className="text-white">1.000+ profissionais</strong> formados
                </span>
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[2.5px] text-white/35">
                Capitais atendidas · ordem alfabética
              </div>
              <div className="flex flex-wrap gap-2">
                {capitals.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-white/[0.08] bg-white/[0.02] px-2.5 py-1 text-xs text-white/70 transition-colors hover:border-[#c9a961]/30 hover:text-white"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
