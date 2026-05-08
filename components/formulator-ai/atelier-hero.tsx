"use client"

import { Beaker, FlaskConical, Sparkles } from "lucide-react"
import { heroStats } from "@/lib/atelier-data"

export function AtelierHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0A1628] via-[#0F1F38] to-[#0A1628] pt-32 pb-24">
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-32 left-10 w-[500px] h-[500px] bg-[#c9a368]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-[#9DBEB1]/10 rounded-full blur-[160px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(212, 185, 140, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 185, 140, 0.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating molecule decorations */}
      <div className="absolute top-40 right-[15%] hidden lg:block animate-float3d">
        <div className="w-3 h-3 rounded-full bg-[#c9a368]/40 blur-[2px]" />
      </div>
      <div className="absolute top-1/2 left-[12%] hidden lg:block animate-molecule">
        <div className="w-2 h-2 rounded-full bg-[#9DBEB1]/50 blur-[1px]" />
      </div>
      <div className="absolute bottom-40 right-[25%] hidden lg:block animate-float3d" style={{ animationDelay: "1s" }}>
        <div className="w-4 h-4 rounded-full bg-[#c9a368]/30 blur-[3px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Eyebrow */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 bg-white/[0.04] border border-[#c9a368]/20 rounded-full py-2.5 px-5 backdrop-blur-sm">
            <FlaskConical className="w-3.5 h-3.5 text-[#c9a368]" />
            <span className="text-[#c9a368] text-[11px] font-bold tracking-[2.5px] uppercase">
              Portfólio Científico · 2019 — 2025
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-center text-white leading-[1.05] tracking-tight mb-6 text-balance">
          Inovações em
          <br />
          <span className="italic text-gradient-copper">Formulação Cosmetológica</span>
          <br />
          <span className="text-white/85">& Dermatológica</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-white/60 text-lg md:text-xl max-w-3xl mx-auto mb-4 leading-relaxed font-light">
          Seis anos de desenvolvimento de bases galênicas, ativos vetorizados e protocolos magistrais
          para farmácias de manipulação e indústria cosmética.
        </p>

        <p className="text-center text-[#9DBEB1] text-sm tracking-wide uppercase mb-14 font-semibold">
          Prof. Samir Tannuri · Pesquisador · Consultor · Professor
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {heroStats.map((stat, i) => (
            <div
              key={stat.label}
              className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center transition-all duration-500 hover:border-[#c9a368]/40 hover:bg-white/[0.06] hover:-translate-y-1"
              style={{
                animation: `fadeInUp 0.6s ease-out ${i * 0.1}s backwards`,
              }}
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                style={{ background: "linear-gradient(135deg, rgba(201,163,104,0.08), transparent)" }}
              />
              <div className="relative">
                <div className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-2">
                  {stat.num}
                </div>
                <div className="text-[10px] tracking-[1.8px] uppercase text-white/50 font-bold">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <a
            href="#categorias"
            className="group inline-flex items-center gap-2 text-white/40 hover:text-[#c9a368] transition-colors text-xs tracking-[2px] uppercase font-semibold"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Explorar Vitrine Científica</span>
            <Beaker className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
