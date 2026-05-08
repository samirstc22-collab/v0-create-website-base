"use client"

import { useState } from "react"
import { linhaTempo } from "@/lib/atelier-data"

export function AtelierTimeline() {
  const [activeFase, setActiveFase] = useState(linhaTempo[0].id)

  const fase = linhaTempo.find((f) => f.id === activeFase) ?? linhaTempo[0]

  return (
    <section className="relative bg-[#0A1628] text-white py-24 lg:py-32 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#c9a368]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#9DBEB1]/8 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow text-[#c9a368] mb-4">02 · Linha do Tempo</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight mb-6 text-balance">
            Cronologia de
            <br />
            <span className="italic text-gradient-copper">Inovações</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Três fases de evolução técnica — da fundação galênica à vanguarda biotecnológica em
            sistemas de entrega inteligente.
          </p>
        </div>

        {/* Phase tabs */}
        <div className="flex flex-wrap gap-3 mb-16 border-b border-white/10 pb-8">
          {linhaTempo.map((f) => {
            const isActive = activeFase === f.id
            return (
              <button
                key={f.id}
                onClick={() => setActiveFase(f.id)}
                className={`group relative flex-1 min-w-[260px] text-left p-6 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "border-[#c9a368]/50 bg-[#c9a368]/5"
                    : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span
                    className={`text-[11px] tracking-[2px] uppercase font-bold ${
                      isActive ? "text-[#c9a368]" : "text-white/40"
                    }`}
                  >
                    {f.periodo}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full transition-colors ${
                      isActive ? "bg-[#c9a368] animate-pulse-dot" : "bg-white/20"
                    }`}
                  />
                </div>

                <div
                  className={`font-serif text-2xl tracking-tight mb-1 transition-colors ${
                    isActive ? "text-white" : "text-white/80"
                  }`}
                >
                  {f.titulo}
                </div>
                <div className="text-xs text-white/50 leading-relaxed">{f.subtitulo}</div>
              </button>
            )
          })}
        </div>

        {/* Active phase content */}
        <div key={fase.id} className="animate-fade-in-up">
          {/* Vertical timeline */}
          <div className="relative pl-10 md:pl-16">
            {/* Line */}
            <div className="absolute left-4 md:left-7 top-2 bottom-2 w-px bg-gradient-to-b from-[#c9a368]/40 via-[#c9a368]/20 to-transparent" />

            <div className="space-y-10">
              {fase.marcos.map((marco, i) => (
                <div key={`${marco.ano}-${i}`} className="relative">
                  {/* Marker dot */}
                  <div className="absolute -left-10 md:-left-16 top-1.5 w-8 md:w-14 flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#c9a368] ring-4 ring-[#c9a368]/20" />
                    <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-[#c9a368]/40 to-transparent ml-2" />
                  </div>

                  {/* Content card */}
                  <div className="group bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#c9a368]/30 hover:bg-white/[0.05] transition-all duration-300">
                    <div className="flex items-baseline gap-4 mb-3 flex-wrap">
                      <span className="font-serif text-3xl text-[#c9a368] tracking-tight">{marco.ano}</span>
                      <h3 className="font-serif text-xl md:text-2xl text-white leading-tight tracking-tight">
                        {marco.titulo}
                      </h3>
                    </div>
                    <p className="text-white/65 leading-relaxed text-sm md:text-base">
                      {marco.descricao}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
