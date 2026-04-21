"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, Beaker, Award, Globe, FileText, Mic } from "lucide-react"

export function LPHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const credentials = [
    { icon: Beaker, text: "Pesquisador CNPq/UNICAMP" },
    { icon: Award, text: "6 anos em P&D Magistral" },
    { icon: Globe, text: "Grau 1 e 2 Industrial" },
    { icon: FileText, text: "Publicação Peer-Reviewed (DOI)" },
    { icon: Mic, text: "Palestrante Internacional" },
  ]

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#08080c]">
      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-[#1a3a5c]/20 blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-[#2a1a3c]/20 blur-[100px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-32 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
        {/* Left: Copy */}
        <div
          className={`flex-1 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {/* Kicker */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#c9a227]/30 bg-[#c9a227]/10 px-5 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-[#c9a227]" />
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#c9a227]">
              Prof. Samir Tannuri
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-[clamp(42px,7vw,80px)] font-normal leading-[0.95] tracking-[-2px] text-white">
            Ciência que vira{" "}
            <span className="bg-gradient-to-r from-[#c9a227] to-[#e8c547] bg-clip-text italic text-transparent">
              fórmula.
            </span>
            <br />
            Fórmula que vira{" "}
            <span className="bg-gradient-to-r from-[#4a9eff] to-[#7eb8ff] bg-clip-text italic text-transparent">
              resultado.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/60 lg:text-xl">
            P&D cosmético de alta performance para{" "}
            <span className="text-white">indústrias, marcas e farmácias magistrais</span>.
            Transformo ciência de bancada em produtos que vendem.
          </p>

          {/* Credentials */}
          <div className="mt-10 flex flex-wrap gap-3">
            {credentials.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-[#c9a227]/30 hover:bg-[#c9a227]/5"
              >
                <item.icon className="h-4 w-4 text-[#c9a227]" />
                <span className="text-sm text-white/80">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#consultoria-industrial"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#c9a227] to-[#b8941f] px-8 py-4 font-bold text-[#08080c] shadow-[0_10px_40px_rgba(201,162,39,0.3)] transition-all hover:shadow-[0_15px_50px_rgba(201,162,39,0.4)]"
            >
              Solicitar Proposta
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#formulator-ai"
              className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-sm transition-all hover:border-[#4a9eff]/50 hover:bg-[#4a9eff]/10"
            >
              Conhecer Formulator AI
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div
          className={`mt-16 flex-1 lg:mt-0 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          } transition-all delay-300 duration-1000`}
        >
          <div className="relative">
            {/* Glow behind image */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#c9a227]/20 via-transparent to-[#4a9eff]/20 blur-2xl" />

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-1">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#0f0f14]">
                <Image
                  src="/images/samir-lab-eurotex.png"
                  alt="Prof. Samir Tannuri em laboratório"
                  fill
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080c] via-transparent to-transparent" />

                {/* Badge */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-[#08080c]/80 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#c9a227]/20">
                      <Beaker className="h-6 w-6 text-[#c9a227]" />
                    </div>
                    <div>
                      <div className="font-serif text-lg text-white">Laboratório EUROTEX</div>
                      <div className="text-sm text-white/50">Treinamento Internacional · França</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute -right-4 top-8 rounded-2xl border border-white/10 bg-[#08080c]/90 p-4 backdrop-blur-xl lg:-right-12">
              <div className="text-3xl font-bold text-[#c9a227]">4.000+</div>
              <div className="text-sm text-white/50">Fórmulas validadas</div>
            </div>

            <div className="absolute -left-4 bottom-32 rounded-2xl border border-white/10 bg-[#08080c]/90 p-4 backdrop-blur-xl lg:-left-12">
              <div className="text-3xl font-bold text-[#4a9eff]">17+</div>
              <div className="text-sm text-white/50">Capitais no Brasil</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="h-12 w-px bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
