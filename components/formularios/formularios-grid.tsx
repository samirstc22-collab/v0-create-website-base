"use client"

import { useState } from "react"
import { ShoppingCart, FileText, BookOpen, Layers, Award, ChevronDown, ExternalLink } from "lucide-react"
import { formularios, tiers, type Formulario } from "@/lib/formularios-data"

const categoryLabels: Record<string, string> = {
  protocolo: "Protocolo",
  formulario: "Formulário",
  guia: "Guia",
  lamina: "Lâmina",
  compendio: "Compêndio",
  apostila: "Apostila",
}

const categoryIcons: Record<string, typeof FileText> = {
  protocolo: FileText,
  formulario: BookOpen,
  guia: Layers,
  lamina: Award,
  compendio: BookOpen,
  apostila: FileText,
}

function FormularioCard({ item }: { item: Formulario }) {
  const Icon = categoryIcons[item.category] || FileText

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1">
      {/* Cover image placeholder */}
      <div
        className="relative h-44 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${item.coverColor}20 0%, ${item.coverColor}40 100%)`,
        }}
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${item.coverColor} 1px, transparent 0)`,
            backgroundSize: "24px 24px",
          }}
        />

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center"
            style={{ backgroundColor: item.coverColor }}
          >
            <Icon className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Featured badge */}
        {item.featured && (
          <div className="absolute top-3 right-3 bg-[#C8102E] text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full">
            Destaque
          </div>
        )}

        {/* Tier badge */}
        <div
          className="absolute top-3 left-3 text-white text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full"
          style={{ backgroundColor: item.coverColor }}
        >
          Tier {item.tier}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category + pages */}
        <div className="flex items-center justify-between mb-2">
          <span
            className="text-[10px] font-bold tracking-[1.5px] uppercase"
            style={{ color: item.coverColor }}
          >
            {categoryLabels[item.category]}
          </span>
          {item.pages && (
            <span className="text-[10px] text-gray-400 font-medium">{item.pages}</span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg text-[#0a1628] leading-tight mb-1 group-hover:text-[#B8783D] transition-colors">
          {item.title}
        </h3>

        {/* Subtitle */}
        {item.subtitle && (
          <p className="text-sm text-gray-500 mb-2">{item.subtitle}</p>
        )}

        {/* Description */}
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Details */}
        {item.details && item.details.length > 0 && (
          <ul className="space-y-1 mb-4">
            {item.details.slice(0, 2).map((detail, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-gray-500">
                <span className="w-1 h-1 rounded-full bg-[#0096B4] mt-1.5 shrink-0" />
                <span className="line-clamp-1">{detail}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Footer: Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          {item.price && (
            <div>
              <span className="text-xs text-gray-400">A partir de</span>
              <div className="font-serif text-xl text-[#0a1628]">
                R$ {item.price}
              </div>
            </div>
          )}

          <a
            href={item.hotmartUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-br from-[#B8783D] to-[#8a5729] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:translate-y-[-2px] transition-transform shadow-[0_4px_15px_rgba(184,120,61,0.3)]"
          >
            <ShoppingCart className="w-4 h-4" />
            Adquirir
          </a>
        </div>
      </div>
    </div>
  )
}

function TierSection({ tier, items }: { tier: typeof tiers[0]; items: Formulario[] }) {
  const [isExpanded, setIsExpanded] = useState(tier.id <= 3)

  return (
    <section className="mb-12">
      {/* Tier header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center gap-4 mb-6 group"
      >
        <div
          className="flex items-center gap-3 px-5 py-3 rounded-xl text-white font-semibold"
          style={{ backgroundColor: tier.color }}
        >
          <span className="text-xl">{tier.icon}</span>
          <span className="text-sm tracking-wide uppercase">Tier {tier.id}</span>
        </div>

        <div className="flex-1 text-left">
          <h2 className="font-serif text-xl md:text-2xl text-[#0a1628] group-hover:text-[#B8783D] transition-colors">
            {tier.name}
          </h2>
          <p className="text-sm text-gray-500">
            {tier.subtitle} · {items.length} {items.length === 1 ? "item" : "itens"}
          </p>
        </div>

        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? "rotate-180" : ""}`}
        />
      </button>

      {/* Description */}
      {isExpanded && (
        <>
          <p className="text-gray-600 mb-6 pl-2 border-l-2 border-gray-200 italic">
            {tier.description}
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <FormularioCard key={item.id} item={item} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <a
              href="https://pay.hotmart.com/A105091762I"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0a1628] text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-[#0d1d35] transition-colors"
            >
              Ver todos os materiais do Tier {tier.id}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </>
      )}
    </section>
  )
}

export function FormulariosGrid() {
  return (
    <section className="bg-gray-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-[#0a1628] mb-4">
            Navegue por <span className="text-[#B8783D] italic">Complexidade</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cada tier representa um nível de profundidade técnica. 
            Escolha o material ideal para sua necessidade.
          </p>
        </div>

        {/* Tiers */}
        {tiers.map((tier) => {
          const tierItems = formularios.filter((f) => f.tier === tier.id)
          if (tierItems.length === 0) return null
          return <TierSection key={tier.id} tier={tier} items={tierItems} />
        })}
      </div>
    </section>
  )
}
