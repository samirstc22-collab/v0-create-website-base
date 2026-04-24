import Image from "next/image"
import { ArrowUpRight, FlaskRound, FileText, Users, Microscope, BarChart3, BookOpen } from "lucide-react"

export function LPMagistral() {
  const services = [
    {
      icon: FlaskRound,
      id: "01",
      title: "Reformulação técnica",
      desc: "Auditoria e reescrita das fórmulas do manipulado — da base à especialidade — para elevar margem, segurança e eficácia.",
    },
    {
      icon: FileText,
      id: "02",
      title: "Dossiês de qualidade",
      desc: "POPs, fichas de controle em processo, planos de amostragem e rastreabilidade compatíveis com RDC 67.",
    },
    {
      icon: BarChart3,
      id: "03",
      title: "Análise de pH &amp; pKa",
      desc: "Diagnóstico físico-químico formulação por formulação, com ajustes documentados e validados em bancada.",
    },
    {
      icon: Users,
      id: "04",
      title: "Treinamento da equipe",
      desc: "Capacitação técnica e comercial — farmacêutico, manipuladores e atendimento — em linguagem única.",
    },
    {
      icon: Microscope,
      id: "05",
      title: "Auditoria de processos",
      desc: "Avaliação 360° do fluxo: da matéria-prima ao balcão, identificando perdas, desvios e oportunidades.",
    },
    {
      icon: BookOpen,
      id: "06",
      title: "Biblioteca técnica",
      desc: "Protocolos exclusivos, lâminas de atendimento e literatura peer-reviewed para diferenciar seu balcão.",
    },
  ]

  return (
    <section id="magistral" className="relative overflow-hidden bg-[#070A11]">
      <div className="grid min-h-screen lg:grid-cols-[1.15fr_0.85fr]">
        {/* LEFT — Service catalog */}
        <div className="relative border-b border-white/[0.06] py-20 lg:border-b-0 lg:border-r lg:py-28">
          <div className="mx-auto max-w-2xl px-6 lg:px-16">
            <div className="mb-14">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-white/40">
                Catálogo de serviços · 06 entregas
              </div>
              <h3 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-1px] text-white">
                Consultoria magistral{" "}
                <span className="italic text-[#c9a961]">desenhada ao seu balcão.</span>
              </h3>
              <p className="mt-5 text-[16px] leading-[1.7] text-white/55">
                Nenhuma planilha reciclada. Um plano construído linha a linha sobre a geografia, o
                público e o potencial específicos da sua farmácia — com metas mensuráveis de
                lucratividade.
              </p>
            </div>

            <div className="space-y-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <article
                    key={s.id}
                    className="group relative flex items-start gap-5 bg-[#070A11] p-6 transition-colors hover:bg-white/[0.03] md:p-7"
                  >
                    <div className="flex shrink-0 flex-col items-center gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] transition-all group-hover:border-[#c9a961]/40 group-hover:bg-[#c9a961]/[0.06]">
                        <Icon className="h-5 w-5 text-white/60 transition-colors group-hover:text-[#c9a961]" />
                      </div>
                      <span className="font-mono text-[10px] text-white/25">{s.id}</span>
                    </div>

                    <div className="flex-1">
                      <h4
                        className="font-serif text-[22px] leading-tight text-white"
                        dangerouslySetInnerHTML={{ __html: s.title }}
                      />
                      <p
                        className="mt-2 text-[14px] leading-[1.65] text-white/55"
                        dangerouslySetInnerHTML={{ __html: s.desc }}
                      />
                    </div>

                    <ArrowUpRight className="mt-3 h-4 w-4 shrink-0 text-white/25 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#c9a961]" />
                  </article>
                )
              })}
            </div>

            <div className="mt-10 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#4a9eff]/30 text-[10px] text-[#4a9eff]">
                  ◆
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#4a9eff]">
                    Indicadores mensais
                  </div>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-white/60">
                    Cada consultoria magistral acompanha ticket médio, recompra, mix de
                    especialidades e margem bruta — mês a mês, com relatório entregue ao gestor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Portrait panel */}
        <aside className="relative overflow-hidden lg:sticky lg:top-0 lg:h-screen">
          <div className="relative h-[420px] w-full lg:h-full">
            <Image
              src="/images/samir-portrait-stool.jpg"
              alt="Consultoria magistral personalizada — Samir Tannuri"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-bl from-[#070A11]/90 via-[#070A11]/40 to-[#070A11]/80" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-transparent to-transparent" />
          </div>

          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `linear-gradient(rgba(201,169,97,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,97,1) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-12">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[3px] text-[#c9a961]">
                  § 03
                </span>
                <span className="h-px w-12 bg-[#c9a961]/40" />
                <span className="font-mono text-[10px] uppercase tracking-[3px] text-white/40">
                  Consultoria Magistral
                </span>
              </div>
            </div>

            <div>
              <h2 className="font-serif text-[clamp(38px,4.5vw,64px)] leading-[0.98] tracking-[-1.5px] text-white">
                Para quem faz{" "}
                <span className="italic text-[#c9a961]">à mão.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-white/60">
                Farmácia magistral não é igual a nenhuma outra. Sua consultoria também não deveria
                ser. Um plano sob medida, construído no chão do seu balcão.
              </p>

              <a
                href="#contato"
                className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#c9a961] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[2px] text-[#070A11] shadow-[0_10px_30px_rgba(201,169,97,0.25)] transition-all hover:bg-[#d4b673] hover:shadow-[0_14px_40px_rgba(201,169,97,0.4)]"
              >
                Diagnóstico Magistral
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
