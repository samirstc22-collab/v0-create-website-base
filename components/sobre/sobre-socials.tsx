import { Instagram, Linkedin, GraduationCap, ArrowUpRight, Users, BookOpen, Award } from "lucide-react"
import { HexagonPattern } from "@/components/illustrations"

const socials = [
  {
    name: "LinkedIn",
    handle: "/in/samirtannuri",
    url: "https://linkedin.com/in/samirtannuri",
    description:
      "Rede profissional, publicações acadêmicas e atualizações de consultoria industrial. Conexões com cientistas e executivos do setor cosmético.",
    icon: Linkedin,
    metric: "8.500+",
    metricLabel: "Conexões profissionais",
    metricIcon: Users,
    gradient: "from-[#0077b5] via-[#00a0dc] to-[#0077b5]",
    accent: "#0077b5",
  },
  {
    name: "Instagram",
    handle: "@cienciadapele",
    url: "https://instagram.com/cienciadapele",
    description:
      "Comunidade científica gratuita sobre farmacologia da pele. Lives semanais, bastidores de pesquisa e discussão de casos clínicos em tempo real.",
    icon: Instagram,
    metric: "45K+",
    metricLabel: "Seguidores engajados",
    metricIcon: BookOpen,
    gradient: "from-[#feda75] via-[#d62976] to-[#4f5bd5]",
    accent: "#d62976",
  },
  {
    name: "Paper Peer-Reviewed",
    handle: "DOI · 10.24933/rep.v6i2.281",
    url: "https://doi.org/10.24933/rep.v6i2.281",
    description:
      "Paper peer-reviewed sobre fotoproteção em peles negras, publicado em colaboração com pesquisadores vinculados à. Credencial técnica verificável.",
    icon: GraduationCap,
    metric: "DOI",
    metricLabel: "Publicação indexada",
    metricIcon: Award,
    gradient: "from-[#0a1628] via-[#1a3055] to-[#0a1628]",
    accent: "#0a1628",
  },
]

export function SobreSocials() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#faf7f3] to-white py-24 lg:py-28">
      <HexagonPattern className="pointer-events-none absolute -right-20 top-20 h-96 w-96 text-[#b87333] opacity-[0.05]" />
      <HexagonPattern className="pointer-events-none absolute -left-20 bottom-20 h-80 w-80 text-[#2dd4bf] opacity-[0.05]" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        {/* Header */}
        <div className="mx-auto max-w-[820px] text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b87333]/25 bg-[#b87333]/8 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#b87333]" />
            <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#b87333]">
              Conexão · Pesquisa · Comunidade
            </span>
          </div>
          <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-[#0a1628] md:text-6xl">
            Onde encontrar{" "}
            <em className="text-[#b87333]">Samir Tannuri</em>.
          </h2>
          <p className="mx-auto mt-6 max-w-[680px] text-base leading-[1.7] text-[#3b4a5c] md:text-lg">
            Canais oficiais da ST Farma e do Clube de Fórmulas — produção técnica, conexões B2B e
            comunidade educacional. Nada de agregadores, nada de perfis paralelos.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {socials.map((social) => {
            const Icon = social.icon
            const MetricIcon = social.metricIcon
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#0a1628]/8 bg-white shadow-[0_20px_60px_-20px_rgba(10,22,40,0.15)] transition-all hover:-translate-y-1.5 hover:border-[#0a1628]/15 hover:shadow-[0_30px_80px_-20px_rgba(10,22,40,0.25)]"
              >
                {/* Gradient header */}
                <div className={`relative h-32 overflow-hidden bg-gradient-to-br ${social.gradient}`}>
                  <div className="pointer-events-none absolute inset-0 opacity-30">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" />
                    <div className="absolute -left-4 bottom-0 h-24 w-24 rounded-full bg-black/10 blur-2xl" />
                  </div>
                  <div className="relative flex h-full items-center justify-between px-7">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <ArrowUpRight className="h-6 w-6 text-white/70 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#b87333]">
                      {social.name}
                    </div>
                    <h3 className="mt-1.5 font-serif text-2xl text-[#0a1628]">{social.handle}</h3>
                    <p className="mt-4 text-sm leading-[1.65] text-[#3b4a5c]">
                      {social.description}
                    </p>
                  </div>

                  {/* Metric */}
                  <div className="mt-6 flex items-center justify-between border-t border-[#0a1628]/8 pt-5">
                    <div>
                      <div className="font-serif text-3xl leading-none text-[#0a1628]">
                        {social.metric}
                      </div>
                      <div className="mt-1 text-[11px] font-semibold uppercase tracking-[1.5px] text-[#3b4a5c]/70">
                        {social.metricLabel}
                      </div>
                    </div>
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${social.accent}15` }}
                    >
                      <MetricIcon className="h-4 w-4" style={{ color: social.accent }} />
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Bottom note */}
        <div className="mx-auto mt-14 flex max-w-[720px] flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-2xl border border-[#0a1628]/8 bg-white/60 px-6 py-4 text-center text-sm text-[#3b4a5c] backdrop-blur-sm">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#14b8a6]" />
            <strong className="text-[#0a1628]">Canais oficiais verificados</strong>
          </span>
          <span className="hidden text-[#0a1628]/20 md:inline">·</span>
          <span>Responde a mensagens em até 48h úteis</span>
          <span className="hidden text-[#0a1628]/20 md:inline">·</span>
          <span>Zero tolerância a perfis falsos</span>
        </div>
      </div>
    </section>
  )
}
