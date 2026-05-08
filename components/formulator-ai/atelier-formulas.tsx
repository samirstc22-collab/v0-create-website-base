"use client"

import { useState } from "react"
import { Beaker, Droplet, Moon, Target } from "lucide-react"
import { formulasAssinatura } from "@/lib/atelier-data"

const colorClasses = {
  copper: {
    bg: "bg-gradient-to-br from-[#c9a368] to-[#8a6d3a]",
    text: "text-[#c9a368]",
    accent: "border-[#c9a368]/30",
    soft: "bg-[#F4EDE0]",
    softBorder: "border-[#c9a368]/20",
  },
  teal: {
    bg: "bg-gradient-to-br from-[#9DBEB1] to-[#5a7a70]",
    text: "text-[#7d9a8f]",
    accent: "border-[#9DBEB1]/40",
    soft: "bg-[#E8F0EC]",
    softBorder: "border-[#9DBEB1]/30",
  },
  navy: {
    bg: "bg-gradient-to-br from-[#1B2A4E] to-[#0A1628]",
    text: "text-[#0A1628]",
    accent: "border-[#0A1628]/20",
    soft: "bg-[#F4F5F8]",
    softBorder: "border-[#1B2A4E]/15",
  },
}

export function AtelierFormulas() {
  const [activeIdx, setActiveIdx] = useState(0)
  const formula = formulasAssinatura[activeIdx]
  const c = colorClasses[formula.cor]

  return (
    <section className="relative bg-[#fbf7ef] py-24 lg:py-32 overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #0A1628 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow text-[#c9a368] mb-4">04 · Fórmulas-Assinatura</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0A1628] leading-[1.05] tracking-tight mb-6 text-balance">
            Composições
            <br />
            <span className="italic text-[#c9a368]">de Referência</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
            Exemplos genéricos de formulações icônicas — apresentadas em formato de referência
            técnica, ilustrando a linguagem farmacotécnica consolidada.
          </p>
        </div>

        {/* Formula selector tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {formulasAssinatura.map((f, i) => {
            const isActive = activeIdx === i
            const fc = colorClasses[f.cor]
            return (
              <button
                key={f.codigo}
                onClick={() => setActiveIdx(i)}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? `${fc.bg} text-white border-transparent shadow-lg`
                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300"
                }`}
              >
                <span className={`font-serif text-lg tracking-tight ${isActive ? "text-white" : fc.text}`}>
                  {f.codigo}
                </span>
                <span className="text-xs font-semibold tracking-wide hidden sm:inline">
                  · {f.subtitulo}
                </span>
              </button>
            )
          })}
        </div>

        {/* Active formula card */}
        <div key={formula.codigo} className="animate-scale-in">
          <div className={`relative bg-white rounded-3xl border ${c.accent} overflow-hidden shadow-[0_8px_40px_rgba(10,22,40,0.06)]`}>
            {/* Top color bar */}
            <div className={`h-1.5 ${c.bg}`} />

            <div className="grid lg:grid-cols-[1fr_1.3fr]">
              {/* Left: formula meta */}
              <div className={`${c.soft} p-8 md:p-12 border-r ${c.softBorder}`}>
                <div className="flex items-baseline gap-3 mb-5">
                  <span className={`font-serif text-6xl md:text-7xl tracking-tight ${c.text}`}>
                    {formula.codigo}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-[#0A1628] leading-tight mb-2 tracking-tight">
                  {formula.titulo}
                </h3>
                <p className="text-gray-600 text-sm italic mb-10">{formula.subtitulo}</p>

                {/* Key info */}
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center shrink-0`}>
                      <Droplet className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[1.8px] uppercase text-gray-400 font-bold mb-0.5">
                        pH
                      </p>
                      <p className="font-serif text-lg text-[#0A1628]">{formula.ph}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center shrink-0`}>
                      <Moon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[1.8px] uppercase text-gray-400 font-bold mb-0.5">
                        Uso
                      </p>
                      <p className="font-serif text-lg text-[#0A1628]">{formula.uso}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className={`w-9 h-9 rounded-lg ${c.bg} flex items-center justify-center shrink-0`}>
                      <Target className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] tracking-[1.8px] uppercase text-gray-400 font-bold mb-0.5">
                        Indicação
                      </p>
                      <p className="font-serif text-lg text-[#0A1628] leading-snug">{formula.indicacao}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: composition table */}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Beaker className={`w-5 h-5 ${c.text}`} />
                  <p className="text-[10px] tracking-[2px] uppercase text-gray-400 font-bold">
                    Composição Farmacotécnica
                  </p>
                </div>

                <div className="space-y-1">
                  {formula.composicao.map((item, i) => (
                    <div
                      key={i}
                      className={`flex items-baseline justify-between py-3.5 border-b border-dashed transition-colors ${
                        item.destaque ? `${c.softBorder}` : "border-gray-100"
                      }`}
                    >
                      <span
                        className={`text-sm md:text-base ${
                          item.destaque
                            ? `${c.text} font-semibold`
                            : "text-gray-700"
                        }`}
                      >
                        {item.nome}
                      </span>
                      <span
                        className={`font-serif text-base md:text-lg tracking-tight tabular-nums ${
                          item.destaque ? "text-[#0A1628] font-bold" : "text-gray-500"
                        }`}
                      >
                        {item.concentracao}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Disclaimer */}
                <p className="mt-8 text-[11px] text-gray-400 italic leading-relaxed">
                  * Fórmula apresentada em formato genérico de referência técnica, sem vínculo a marca
                  ou cliente. Concentrações ilustram linguagem farmacotécnica consolidada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
