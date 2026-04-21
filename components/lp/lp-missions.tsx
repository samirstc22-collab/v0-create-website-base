"use client"

import { Globe, MapPin, Users, Award, Building2, GraduationCap } from "lucide-react"

export function LPMissions() {
  const internationalMissions = [
    {
      location: "Paris, França",
      event: "In-Cosmetics Global",
      highlight: "Tendências de ativos e veículos inovadores",
      flag: "🇫🇷",
    },
    {
      location: "Amsterdam, Holanda",
      event: "In-Cosmetics Global",
      highlight: "Scale-up e processos industriais",
      flag: "🇳🇱",
    },
    {
      location: "Tóquio, Japão",
      event: "Missão Técnica JETRO",
      highlight: "Tecnologia cosmética asiática",
      flag: "🇯🇵",
    },
  ]

  const brazilianCapitals = [
    "São Paulo",
    "Rio de Janeiro",
    "Belo Horizonte",
    "Curitiba",
    "Porto Alegre",
    "Salvador",
    "Recife",
    "Fortaleza",
    "Brasília",
    "Goiânia",
    "Manaus",
    "Belém",
    "Florianópolis",
    "Vitória",
    "Campo Grande",
    "Cuiabá",
    "Natal",
  ]

  const stats = [
    { icon: MapPin, value: "17+", label: "Capitais Brasileiras" },
    { icon: Users, value: "1.000+", label: "Profissionais Formados" },
    { icon: GraduationCap, value: "800+", label: "Palestras Ministradas" },
    { icon: Building2, value: "3", label: "Continentes" },
  ]

  return (
    <section className="relative overflow-hidden bg-[#0c0c10] py-32">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4a9eff]/30 bg-[#4a9eff]/10 px-4 py-1.5">
            <Globe className="h-4 w-4 text-[#4a9eff]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#4a9eff]">
              Missões e Treinamentos
            </span>
          </div>
          <h2 className="font-serif text-4xl text-white md:text-5xl lg:text-6xl">
            Atuação em{" "}
            <span className="bg-gradient-to-r from-[#c9a227] to-[#e8c547] bg-clip-text text-transparent">
              3 continentes
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/50">
            Conhecimento técnico adquirido nos maiores centros de inovação cosmética do mundo,
            aplicado diretamente na realidade brasileira.
          </p>
        </div>

        {/* Stats row */}
        <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] p-6 text-center transition-all hover:border-[#c9a227]/30 hover:bg-[#c9a227]/5"
            >
              <stat.icon className="mx-auto mb-4 h-8 w-8 text-[#c9a227] transition-transform group-hover:scale-110" />
              <div className="text-4xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Two columns: International + National */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* International Missions */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#4a9eff]/5 to-transparent p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4a9eff]/20">
                <Globe className="h-6 w-6 text-[#4a9eff]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-white">Missões Internacionais</h3>
                <p className="text-sm text-white/50">Treinamentos nos maiores eventos do setor</p>
              </div>
            </div>

            <div className="space-y-4">
              {internationalMissions.map((mission, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-[#4a9eff]/30"
                >
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-2xl">{mission.flag}</span>
                    <div>
                      <div className="font-semibold text-white">{mission.location}</div>
                      <div className="text-sm text-[#4a9eff]">{mission.event}</div>
                    </div>
                  </div>
                  <p className="text-sm text-white/60">{mission.highlight}</p>
                </div>
              ))}
            </div>
          </div>

          {/* National Presence */}
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#c9a227]/5 to-transparent p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c9a227]/20">
                <MapPin className="h-6 w-6 text-[#c9a227]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl text-white">Presença Nacional</h3>
                <p className="text-sm text-white/50">17+ capitais com cursos e palestras</p>
              </div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {brazilianCapitals.map((city, i) => (
                <span
                  key={i}
                  className="rounded-lg border border-[#c9a227]/20 bg-[#c9a227]/10 px-3 py-1.5 text-sm text-[#c9a227]"
                >
                  {city}
                </span>
              ))}
            </div>

            <div className="rounded-xl border border-[#c9a227]/30 bg-[#c9a227]/10 p-5">
              <div className="flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 shrink-0 text-[#c9a227]" />
                <div>
                  <div className="font-semibold text-white">
                    Mais de 1.000 profissionais formados
                  </div>
                  <p className="mt-1 text-sm text-white/60">
                    Cursos, seminários e palestras em congressos por todo o Brasil, levando
                    conhecimento técnico atualizado para farmacêuticos, dermatologistas e equipes de
                    P&D.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
