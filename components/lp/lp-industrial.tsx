import Image from "next/image"
import { ArrowUpRight, Beaker, FileCheck, Package, TrendingUp, Shield, FlaskConical } from "lucide-react"

export function LPIndustrial() {
  const services = [
    {
      icon: Beaker,
      id: "01",
      title: "Desenvolvimento Grau 1 &amp; 2",
      desc: "Formulações autorais para higiene e tratamento com documentação completa para registro ANVISA.",
    },
    {
      icon: Package,
      id: "02",
      title: "Private Label autoral",
      desc: "Linhas exclusivas para marcas próprias com assinatura formulatória inconfundível.",
    },
    {
      icon: TrendingUp,
      id: "03",
      title: "Scale-up Industrial",
      desc: "Transferência de bancada → piloto → produção, sem perda de performance sensorial ou técnica.",
    },
    {
      icon: FileCheck,
      id: "04",
      title: "Estudos de estabilidade",
      desc: "Protocolos acelerados, climáticos e de prateleira, com leitura crítica de resultados.",
    },
    {
      icon: Shield,
      id: "05",
      title: "Compatibilidade de embalagem",
      desc: "Ensaios formulação–embalagem para garantir integridade sensorial e regulatória.",
    },
    {
      icon: FlaskConical,
      id: "06",
      title: "Claims & Substanciação",
      desc: "Suporte científico para alegações — da literatura peer-reviewed ao dossiê técnico.",
    },
  ]

  return (
    <section id="industrial" className="relative overflow-hidden bg-[#070A11]">
      {/* Split-screen container */}
      <div className="grid min-h-screen lg:grid-cols-[0.85fr_1.15fr]">
        {/* LEFT — Portrait panel (sticky on desktop) */}
        <aside className="relative overflow-hidden border-b border-white/[0.06] lg:sticky lg:top-0 lg:h-screen lg:border-b-0 lg:border-r">
          {/* Image full-bleed */}
          <div className="relative h-[420px] w-full lg:h-full">
            <Image
              src="/images/samir-lab-eurotex.jpg"
              alt="Consultoria industrial — laboratório EUROTEX"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#070A11]/90 via-[#070A11]/40 to-[#070A11]/85" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A11] via-transparent to-transparent" />
          </div>

          {/* Scientific grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `linear-gradient(rgba(74,158,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(74,158,255,1) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-8 lg:p-12">
            {/* Top — section marker */}
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[3px] text-[#4a9eff]">
                  § 02
                </span>
                <span className="h-px w-12 bg-[#4a9eff]/40" />
                <span className="font-mono text-[10px] uppercase tracking-[3px] text-white/40">
                  Consultoria Industrial
                </span>
              </div>
            </div>

            {/* Bottom — headline */}
            <div>
              <h2 className="font-serif text-[clamp(38px,4.5vw,64px)] leading-[0.98] tracking-[-1.5px] text-white">
                Para quem produz{" "}
                <span className="italic text-[#4a9eff]">em escala.</span>
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-white/60">
                P&amp;D industrial construído sobre dois pilares: rigor científico peer-reviewed e
                aplicabilidade regulatória imediata. Da fórmula-âncora ao registro ANVISA — e depois
                dele.
              </p>

              <a
                href="#contato"
                className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#4a9eff] px-6 py-3.5 text-[12px] font-bold uppercase tracking-[2px] text-[#070A11] shadow-[0_10px_30px_rgba(74,158,255,0.25)] transition-all hover:bg-[#60a9ff] hover:shadow-[0_14px_40px_rgba(74,158,255,0.4)]"
              >
                Solicitar Proposta Industrial
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </aside>

        {/* RIGHT — Service catalog */}
        <div className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-2xl px-6 lg:px-16">
            {/* Section lede */}
            <div className="mb-14">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[3px] text-white/40">
                Catálogo de serviços · 06 entregas
              </div>
              <h3 className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-1px] text-white">
                Um P&amp;D industrial tratado como{" "}
                <span className="italic text-[#c9a961]">publicação científica</span>.
              </h3>
              <p className="mt-5 text-[16px] leading-[1.7] text-white/55">
                Cada entrega acompanhada de dossiê técnico rastreável, referências indexadas e
                protocolo reprodutível. Nada de &ldquo;fórmula mágica&rdquo;.
              </p>
            </div>

            {/* Service list */}
            <div className="space-y-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <article
                    key={s.id}
                    className="group relative flex items-start gap-5 bg-[#070A11] p-6 transition-colors hover:bg-white/[0.03] md:p-7"
                  >
                    <div className="flex shrink-0 flex-col items-center gap-2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] transition-all group-hover:border-[#4a9eff]/40 group-hover:bg-[#4a9eff]/[0.06]">
                        <Icon className="h-5 w-5 text-white/60 transition-colors group-hover:text-[#4a9eff]" />
                      </div>
                      <span className="font-mono text-[10px] text-white/25">{s.id}</span>
                    </div>

                    <div className="flex-1">
                      <h4
                        className="font-serif text-[22px] leading-tight text-white"
                        dangerouslySetInnerHTML={{ __html: s.title }}
                      />
                      <p className="mt-2 text-[14px] leading-[1.65] text-white/55">
                        {s.desc}
                      </p>
                    </div>

                    <ArrowUpRight className="mt-3 h-4 w-4 shrink-0 text-white/25 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#4a9eff]" />
                  </article>
                )
              })}
            </div>

            {/* Footnote */}
            <div className="mt-10 rounded-xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="flex items-start gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#c9a961]/30 text-[10px] text-[#c9a961]">
                  ⚡
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[2px] text-[#c9a961]">
                    NDA &amp; Confidencialidade
                  </div>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-white/60">
                    Todo projeto industrial é conduzido sob acordo de sigilo formal. Propriedade
                    intelectual permanece integralmente com o contratante.
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
