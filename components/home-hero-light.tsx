"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight, Play, Check, Sparkles } from "lucide-react"

export function HomeHeroLight() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-[#f0f4f8] pt-28 pb-24 lg:pt-36 lg:pb-32">
      {/* Subtle grid pattern */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.4] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(12,35,64,0.08) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient orbs */}
      <div
        aria-hidden
        className="absolute top-[20%] right-[5%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(184,120,61,0.08), transparent 60%)",
          filter: "blur(60px)",
        }}
      />
      <div
        aria-hidden
        className="absolute bottom-[10%] left-[0%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(12,35,64,0.06), transparent 60%)",
          filter: "blur(50px)",
        }}
      />

      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Authority bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12 text-[11px] tracking-[2px] uppercase font-bold text-[#64748b]">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span>In-Cosmetics Paris 2025</span>
          </div>
          <span className="hidden md:inline text-[#d1d5db]">|</span>
          <span>Missoes Amsterdam · Japao</span>
          <span className="hidden md:inline text-[#d1d5db]">|</span>
          <span>Paper Peer-Reviewed</span>
          <span className="hidden md:inline text-[#d1d5db]">|</span>
          <span>ICosmetologia</span>
        </div>

        {/* Hero content grid */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — Editorial column */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="font-serif font-normal text-[clamp(40px,6vw,72px)] leading-[1.05] tracking-[-1.5px] text-[#0C2340] mb-6">
              Consultoria em tecnologia farmaceutica{" "}
              <span className="relative inline-block">
                <em className="italic text-[#B8783D]">para quem nao pode errar</em>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="8"
                  viewBox="0 0 200 8"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2,5 Q50,2 100,4 T198,3"
                    stroke="#B8783D"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.4"
                  />
                </svg>
              </span>
              .
            </h1>

            {/* Subheadline — clear and commercial */}
            <p className="text-lg md:text-xl text-[#475569] leading-[1.7] max-w-[580px] mx-auto lg:mx-0 mb-8">
              Seis anos coordenando P&D no{" "}
              <strong className="text-[#0C2340] font-semibold">maior grupo magistral do Brasil</strong>,{" "}
              <strong className="text-[#0C2340] font-semibold">500+ farmacias atendidas</strong> tecnicamente e{" "}
              <strong className="text-[#0C2340] font-semibold">1.000+ formuladores treinados</strong>.
              Hoje, essa experiencia vira consultoria sob medida para a sua operacao — industrial ou magistral.
            </p>

            {/* CTA row — dominant primary */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link
                href="/consultoria"
                className="group inline-flex items-center justify-center gap-3 bg-[#0C2340] text-white px-8 py-4 rounded-xl font-bold text-base tracking-wide hover:bg-[#0a1a33] transition-all shadow-[0_8px_30px_rgba(12,35,64,0.25)] hover:shadow-[0_12px_40px_rgba(12,35,64,0.35)] hover:translate-y-[-2px]"
              >
                Agendar diagnostico tecnico
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/formulator-ai"
                className="group inline-flex items-center justify-center gap-2 bg-white border-2 border-[#0C2340]/15 text-[#0C2340] px-6 py-4 rounded-xl font-semibold text-base tracking-wide hover:border-[#B8783D]/40 hover:bg-[#B8783D]/5 transition-all"
              >
                <Sparkles className="w-5 h-5 text-[#4a9eff]" />
                Conhecer os servicos
              </Link>
            </div>

            {/* Trust bullets */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-[#64748b]">
              {[
                "6 anos de P&D no maior grupo magistral",
                "500+ farmacias atendidas",
                "1.000+ formuladores treinados",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#10b981]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Image card with proof */}
          <div className="relative">
            {/* Glow frame */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#B8783D]/15 via-transparent to-[#0C2340]/10 blur-2xl pointer-events-none" />

            {/* Main card */}
            <div
              className={`relative bg-white rounded-3xl overflow-hidden border border-[#0C2340]/10 shadow-[0_30px_80px_-20px_rgba(12,35,64,0.18)] ${
                mounted ? "animate-fade-in-up" : "opacity-0"
              }`}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/samir-lab-eurotex.jpg"
                  alt="Samir Tannuri - Consultor em tecnologia farmaceutica"
                  fill
                  className="object-cover object-[center_30%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C2340]/80 via-transparent to-transparent" />

                {/* Image caption — strategic microcopy */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <Play className="w-4 h-4 text-white fill-white" />
                    </div>
                    <span className="text-[11px] tracking-[2px] uppercase font-bold text-white/80">
                      Consultoria tecnica · Pratica industrial real
                    </span>
                  </div>
                  <p className="text-white font-medium text-lg leading-snug max-w-[320px]">
                    Samir Tannuri — tecnologia farmaceutica aplicada
                  </p>
                </div>
              </div>

              {/* Stats strip */}
              <div className="grid grid-cols-3 divide-x divide-[#e5e7eb] bg-[#f8fafc]">
                {[
                  { num: "6 anos", label: "Coordenando P&D" },
                  { num: "500+", label: "Farmacias atendidas" },
                  { num: "1.000+", label: "Profissionais formados" },
                ].map((stat) => (
                  <div key={stat.label} className="py-5 px-4 text-center">
                    <div className="font-serif text-2xl text-[#0C2340] mb-0.5">{stat.num}</div>
                    <div className="text-[10px] tracking-[1.5px] uppercase text-[#64748b] font-bold">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -top-3 -right-3 bg-[#B8783D] text-white px-4 py-2 rounded-xl font-bold text-xs tracking-wide shadow-[0_8px_24px_rgba(184,120,61,0.4)] animate-glow">
              Boutique B2B
            </div>
          </div>
        </div>
      </div>

      {/* Transition wave */}
      <div aria-hidden className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg
          className="relative block w-full"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ height: "60px" }}
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
