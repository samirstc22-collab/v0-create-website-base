"use client"

import Image from "next/image"
import {
  Factory,
  Beaker,
  FileCheck,
  Package,
  TrendingUp,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

export function LPIndustrial() {
  const services = [
    {
      icon: Beaker,
      title: "Desenvolvimento Grau 1 e 2",
      desc: "Formulações completas para cosméticos de higiene e tratamento com registro ANVISA.",
    },
    {
      icon: Package,
      title: "Private Label",
      desc: "Criação de linhas exclusivas para marcas próprias com identidade formulatória única.",
    },
    {
      icon: TrendingUp,
      title: "Scale-up Industrial",
      desc: "Transferência de bancada para produção em escala sem perda de performance.",
    },
    {
      icon: FileCheck,
      title: "Estudos de Estabilidade",
      desc: "Protocolos completos de estabilidade acelerada e de prateleira.",
    },
    {
      icon: Shield,
      title: "Compatibilidade Embalagem",
      desc: "Testes de compatibilidade formulação-embalagem para garantir integridade.",
    },
    {
      icon: Factory,
      title: "Claims e Documentação",
      desc: "Dossiês técnicos, comprovação de claims e laudos para registro.",
    },
  ]

  const results = [
    { value: "20+", label: "Indústrias atendidas" },
    { value: "500+", label: "SKUs desenvolvidos" },
    { value: "98%", label: "Aprovação ANVISA" },
  ]

  return (
    <section id="consultoria-industrial" className="relative overflow-hidden bg-[#08080c] py-32">
      {/* Accent gradient */}
      <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-[#c9a227]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left: Image + stats */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#c9a227]/10 to-[#1a1a20]">
                <Image
                  src="/images/samir-stage-gesture.jpg"
                  alt="Prof. Samir apresentando P&D industrial"
                  fill
                  className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-[#08080c]/50 to-transparent" />
              </div>

              {/* Overlay content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="grid grid-cols-3 gap-4">
                  {results.map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="text-3xl font-bold text-[#c9a227]">{item.value}</div>
                      <div className="mt-1 text-xs text-white/60">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -right-4 top-8 rounded-2xl border border-[#c9a227]/30 bg-[#08080c]/90 p-4 backdrop-blur-xl lg:-right-12">
              <div className="flex items-center gap-3">
                <Factory className="h-8 w-8 text-[#c9a227]" />
                <div>
                  <div className="font-bold text-white">Grau 1 & 2</div>
                  <div className="text-xs text-white/50">ANVISA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Copy */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-4 py-1.5">
              <Factory className="h-4 w-4 text-[#c9a227]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#c9a227]">
                Landing Page 1
              </span>
            </div>

            <h2 className="font-serif text-4xl text-white md:text-5xl">
              Consultoria{" "}
              <span className="bg-gradient-to-r from-[#c9a227] to-[#e8c547] bg-clip-text text-transparent">
                P&D Industrial
              </span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              Desenvolvimento completo de cosméticos para{" "}
              <span className="text-white">indústrias e marcas</span> que querem lançar produtos
              diferenciados, com segurança regulatória e performance comprovada.
            </p>

            {/* Services grid */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-[#c9a227]/30 hover:bg-[#c9a227]/5"
                >
                  <service.icon className="mb-3 h-6 w-6 text-[#c9a227]" />
                  <h4 className="font-semibold text-white">{service.title}</h4>
                  <p className="mt-1 text-sm text-white/50">{service.desc}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#contato"
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#c9a227] to-[#b8941f] px-8 py-4 font-bold text-[#08080c] shadow-[0_10px_40px_rgba(201,162,39,0.3)] transition-all hover:shadow-[0_15px_50px_rgba(201,162,39,0.4)]"
              >
                Solicitar Proposta Industrial
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <div className="flex items-center gap-2 text-sm text-white/50">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Resposta em até 24h</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
