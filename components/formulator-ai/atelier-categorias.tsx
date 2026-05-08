"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { categorias } from "@/lib/atelier-data"

export function AtelierCategorias() {
  const [activeId, setActiveId] = useState<string | null>(categorias[0].id)

  const active = categorias.find((c) => c.id === activeId) ?? categorias[0]

  return (
    <section id="categorias" className="relative bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="eyebrow text-[#c9a368] mb-4">03 · Categorias</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0A1628] leading-[1.05] tracking-tight mb-6 text-balance">
            Portfólio Técnico —
            <br />
            <span className="italic text-[#c9a368]">grandes famílias de formulações</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            Sistematização das categorias desenvolvidas ao longo de seis anos — apresentadas em formato
            genérico, sem vínculo a cliente, para referência técnica.
          </p>
        </div>

        {/* Interactive grid: list (left) + detail (right) */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12">
          {/* Left: numbered list */}
          <div className="space-y-1 lg:border-r lg:border-gray-100 lg:pr-12">
            {categorias.map((cat) => {
              const isActive = activeId === cat.id
              return (
                <button
                  key={cat.id}
                  onMouseEnter={() => setActiveId(cat.id)}
                  onClick={() => setActiveId(cat.id)}
                  className={`group w-full text-left flex items-center gap-5 py-5 px-4 -mx-4 rounded-xl transition-all duration-300 ${
                    isActive ? "bg-[#0A1628]" : "hover:bg-gray-50"
                  }`}
                >
                  <span
                    className={`font-serif text-xl shrink-0 transition-colors ${
                      isActive ? "text-[#c9a368]" : "text-gray-300 group-hover:text-[#c9a368]"
                    }`}
                  >
                    {cat.numero}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div
                      className={`font-serif text-xl md:text-2xl tracking-tight transition-colors ${
                        isActive ? "text-white" : "text-[#0A1628] group-hover:text-[#c9a368]"
                      }`}
                    >
                      {cat.titulo}
                    </div>
                    <div
                      className={`text-xs tracking-wider mt-1 transition-colors ${
                        isActive ? "text-[#9DBEB1]" : "text-gray-400"
                      }`}
                    >
                      {cat.subtitulo}
                    </div>
                  </div>

                  <ArrowUpRight
                    className={`w-5 h-5 shrink-0 transition-all duration-300 ${
                      isActive
                        ? "text-[#c9a368] translate-x-0.5 -translate-y-0.5"
                        : "text-gray-300 group-hover:text-[#c9a368]"
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right: active category detail */}
          <div className="lg:pl-2 lg:sticky lg:top-32 lg:self-start">
            <div
              key={active.id}
              className="animate-fade-in-up"
            >
              {/* Number badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="font-serif text-7xl md:text-8xl text-[#c9a368]/15 leading-none tracking-tight">
                  {active.numero}
                </span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#c9a368]/30 to-transparent" />
              </div>

              {/* Title */}
              <h3 className="font-serif text-3xl md:text-4xl text-[#0A1628] leading-tight mb-2 tracking-tight">
                {active.titulo}
              </h3>
              <p className="text-[#c9a368] text-base font-semibold italic mb-6">{active.subtitulo}</p>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed text-base mb-8 prose-measure">
                {active.descricao}
              </p>

              {/* Highlight */}
              {active.highlight && (
                <div className="border-l-2 border-[#9DBEB1] pl-5 py-2 mb-8">
                  <p className="text-[10px] tracking-[2px] uppercase text-gray-400 font-bold mb-1">
                    Tecnologia-chave
                  </p>
                  <p className="font-serif text-xl text-[#0A1628] italic">{active.highlight}</p>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-semibold tracking-wide uppercase text-[#0A1628] bg-[#F4EDE0] px-3.5 py-1.5 rounded-full border border-[#c9a368]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
