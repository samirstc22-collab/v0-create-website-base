"use client"

import Image from "next/image"
import {
  FlaskRound,
  FileText,
  Users,
  Microscope,
  BarChart3,
  BookOpen,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export function LPMagistral() {
  const services = [
    {
      icon: FlaskRound,
      title: "Reformulação de Portfólio",
      desc: "Análise completa e atualização de fórmulas para maior eficácia e margem.",
    },
    {
      icon: FileText,
      title: "Dossiês Farmacotécnicos",
      desc: "Documentação técnica com DOIs e referências peer-reviewed.",
    },
    {
      icon: Microscope,
      title: "Mapeamento pH/pKa",
      desc: "Estudo completo de compatibilidade e estabilidade de ativos.",
    },
    {
      icon: Users,
      title: "Treinamento de Equipes",
      desc: "Capacitação técnica para balcão e laboratório de manipulação.",
    },
    {
      icon: BarChart3,
      title: "Auditoria de Manipulados",
      desc: "Revisão de processos, POPs e adequação à RDC 67.",
    },
    {
      icon: BookOpen,
      title: "Materiais de Apoio",
      desc: "Lâminas técnicas, protocolos e materiais para equipe comercial.",
    },
  ]

  const differentials = [
    "Diagnóstico presencial no chão da farmácia",
    "Análise do mix e margem por categoria",
    "Reformulação com foco em ticket médio",
    "Treinamento hands-on para manipuladores",
  ]

  return (
    <section id="consultoria-magistral" className="relative overflow-hidden bg-[#0c0c10] py-32">
      {/* Accent gradient */}
      <div className="pointer-events-none absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#4a9eff]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Copy */}
          <div className="order-2 lg:order-1">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#4a9eff]/30 bg-[#4a9eff]/10 px-4 py-1.5">
              <FlaskRound className="h-4 w-4 text-[#4a9eff]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#4a9eff]">
                Landing Page 2
              </span>
            </div>

            <h2 className="font-serif text-4xl text-white md:text-5xl">
              Consultoria{" "}
              <span className="bg-gradient-to-r from-[#4a9eff] to-[#7eb8ff] bg-clip-text text-transparent">
                P&D Magistral
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Transformação completa da sua farmácia de manipulação com{" "}
              <span className="text-white">ciência aplicada</span>, foco em lucratividade e
              excelência técnica em cada fórmula.
            </p>

            {/* Services grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-[#4a9eff]/30 hover:bg-[#4a9eff]/5"
                >
                  <service.icon className="mb-3 h-6 w-6 text-[#4a9eff]" />
                  <h4 className="font-semibold text-white">{service.title}</h4>
                  <p className="mt-1 text-sm text-white/50">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contato"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#4a9eff] to-[#3d8be6] px-8 py-4 font-bold text-white shadow-[0_10px_40px_rgba(74,158,255,0.3)] transition-all hover:shadow-[0_15px_50px_rgba(74,158,255,0.4)]"
              >
                Solicitar Diagnóstico Magistral
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Visita presencial incluída</span>
              </div>
            </div>
          </div>

          {/* Right: Image + differentials */}
          <div className="relative order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#4a9eff]/10 to-[#1a1a20]">
                <Image
                  src="/images/samir-portrait-stool.jpg"
                  alt="Prof. Samir Tannuri consultoria magistral"
                  fill
                  className="object-cover object-top opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-[#0c0c10]/40 to-transparent" />
              </div>

              {/* Differentials overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="rounded-2xl border border-white/10 bg-[#08080c]/80 p-6 backdrop-blur-xl">
                  <h4 className="mb-4 font-semibold text-[#4a9eff]">Diferenciais exclusivos</h4>
                  <ul className="space-y-3">
                    {differentials.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#4a9eff]" />
                        <span className="text-sm text-white/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -left-4 top-8 rounded-2xl border border-[#4a9eff]/30 bg-[#08080c]/90 p-4 backdrop-blur-xl lg:-left-12">
              <div className="flex items-center gap-3">
                <FlaskRound className="h-8 w-8 text-[#4a9eff]" />
                <div>
                  <div className="font-bold text-white">RDC 67</div>
                  <div className="text-xs text-white/50">Conformidade</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
