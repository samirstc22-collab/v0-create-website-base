"use client"

import { FileText, BookOpen, Layers, Award } from "lucide-react"
import { stats } from "@/lib/formularios-data"

export function FormulariosHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0d1d35] to-[#0a1628] pt-28 pb-20">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#B8783D]/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#0096B4]/20 rounded-full blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#B8783D 1px, transparent 1px), linear-gradient(90deg, #B8783D 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full py-2.5 px-5">
            <div className="w-2 h-2 rounded-full bg-[#0096B4] animate-pulse" />
            <span className="text-[#0096B4] text-xs font-bold tracking-[2px] uppercase">
              Catálogo Técnico 2026 · Edição Expandida
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center text-white leading-[1.1] tracking-tight mb-6">
          Formulários & Protocolos
          <br />
          <span className="text-[#B8783D] italic">Dermatologia Magistral</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Materiais técnicos organizados por grau de complexidade. 
          Do protocolo unitário ao compêndio integrado — 
          <strong className="text-white/90"> ciência aplicada ao balcão</strong>.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { icon: FileText, num: stats.totalArtefatos, label: "Artefatos totais" },
            { icon: BookOpen, num: stats.protocolosClinicos, label: "Protocolos clínicos" },
            { icon: Layers, num: stats.laminasTecnicas, label: "Lâminas técnicas" },
            { icon: Award, num: stats.paginasTotais, label: "Páginas de conteúdo" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:border-[#B8783D]/30 transition-colors"
            >
              <stat.icon className="w-6 h-6 text-[#0096B4] mx-auto mb-3" />
              <div className="font-serif text-3xl text-white tracking-tight mb-1">{stat.num}</div>
              <div className="text-[10px] tracking-[1.5px] uppercase text-white/50 font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
