"use client"

import { pilares } from "@/lib/atelier-data"

export function AtelierPilares() {
  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow text-[#c9a368] mb-4">05 · Metodologia</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0A1628] leading-[1.05] tracking-tight mb-6 text-balance">
            Pilares
            <br />
            <span className="italic text-[#c9a368]">Técnicos</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Cada fórmula segue um conjunto de princípios farmacotécnicos não-negociáveis — resultado
            da integração entre rigor científico e experiência clínica aplicada.
          </p>
        </div>

        {/* Pilares grid */}
        <div className="grid md:grid-cols-2 gap-px bg-gray-100 rounded-3xl overflow-hidden border border-gray-100">
          {pilares.map((pilar, i) => (
            <div
              key={pilar.numero}
              className="group relative bg-white p-8 md:p-10 hover:bg-[#fbf7ef] transition-colors duration-500"
            >
              {/* Number watermark */}
              <span className="absolute top-6 right-8 font-serif text-7xl md:text-8xl text-[#c9a368]/8 leading-none tracking-tight pointer-events-none select-none">
                {pilar.numero}
              </span>

              {/* Number badge */}
              <div className="relative inline-flex items-center gap-2 mb-5">
                <span className="text-[10px] tracking-[2px] uppercase text-[#c9a368] font-bold">
                  Pilar {pilar.numero}
                </span>
                <span className="w-8 h-px bg-[#c9a368]" />
              </div>

              {/* Title */}
              <h3 className="relative font-serif text-2xl md:text-[26px] text-[#0A1628] leading-[1.2] mb-4 tracking-tight max-w-md">
                {pilar.titulo}
              </h3>

              {/* Description */}
              <p className="relative text-gray-600 leading-relaxed text-sm md:text-base prose-measure">
                {pilar.descricao}
              </p>
            </div>
          ))}

          {/* Cora Coralina Quote — fills 2nd column */}
          <div className="relative bg-[#0A1628] text-white p-10 md:p-12 flex flex-col justify-center min-h-[280px]">
            {/* Glow */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#c9a368]/15 rounded-full blur-[100px]" />
            </div>

            <div className="relative">
              <span className="font-serif text-6xl md:text-7xl text-[#c9a368] leading-none">"</span>
              <p className="font-serif text-xl md:text-2xl italic leading-snug text-white/95 mb-6 -mt-3 tracking-tight text-balance">
                Feliz aquele que transfere o que sabe e aprende o que ensina.
              </p>
              <p className="text-[10px] tracking-[2.5px] uppercase text-[#c9a368] font-bold">
                Cora Coralina
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
