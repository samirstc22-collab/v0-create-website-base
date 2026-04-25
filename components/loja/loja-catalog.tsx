"use client"

import { useState, useMemo } from "react"
import { ArrowUpRight, Filter } from "lucide-react"
import { LOJA_ITEMS, TIER_LABELS, CATEGORY_LABELS } from "@/lib/loja-data"
import type { LojaTier, LojaCategory } from "@/lib/loja-data"

type FilterTier = LojaTier | "ALL"
type FilterCategory = LojaCategory | "ALL"

export function LojaCatalog() {
  const [tier, setTier] = useState<FilterTier>("ALL")
  const [category, setCategory] = useState<FilterCategory>("ALL")
  const [sort, setSort] = useState<"tier" | "price-asc" | "price-desc">("tier")

  const items = useMemo(() => {
    let filtered = [...LOJA_ITEMS]
    if (tier !== "ALL") filtered = filtered.filter((i) => i.tier === tier)
    if (category !== "ALL") filtered = filtered.filter((i) => i.category === category)

    if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price)
    if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price)
    if (sort === "tier") filtered.sort((a, b) => a.tier.localeCompare(b.tier))

    return filtered
  }, [tier, category, sort])

  const tierOptions: FilterTier[] = ["ALL", "T1", "T2", "T3", "T4", "T5", "T6", "T7"]
  const categoryOptions: FilterCategory[] = ["ALL", "formulario", "protocolo", "guia", "lamina", "compendio", "sintese"]

  return (
    <section id="catalog" className="bg-white py-20 lg:py-28">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#B8783D]" />
            <span className="text-[10px] tracking-[3px] uppercase text-[#B8783D] font-bold">
              § Catálogo Completo · Vitrine
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0C2340] tracking-[-0.02em] leading-[1.02] max-w-4xl mb-4">
            60+ artefatos organizados por{" "}
            <em className="italic text-[#B8783D]">complexidade editorial</em>.
          </h2>
          <p className="text-base text-[#475569] leading-relaxed max-w-2xl">
            Filtre por tier, categoria ou ordene por preço. Cada peça foi editorada com a mesma
            disciplina de uma publicação peer-reviewed.
          </p>
        </div>

        {/* Filter bar */}
        <div className="sticky top-20 z-20 bg-white/90 backdrop-blur-md border border-[#0C2340]/10 rounded-2xl p-4 mb-10 flex flex-wrap items-center gap-4">
          <Filter className="w-4 h-4 text-[#64748b] shrink-0" />

          {/* Tier filter */}
          <div className="flex flex-wrap gap-1">
            {tierOptions.map((t) => {
              const isActive = tier === t
              const label = t === "ALL" ? "Todos" : t
              const color = t !== "ALL" ? TIER_LABELS[t].accent : "#0C2340"
              return (
                <button
                  key={t}
                  onClick={() => setTier(t)}
                  className={`px-3 py-2 rounded-lg text-[11px] tracking-[1.5px] uppercase font-bold transition-all ${
                    isActive
                      ? "text-white"
                      : "text-[#475569] bg-[#f1f5f9] hover:bg-[#e2e8f0]"
                  }`}
                  style={
                    isActive
                      ? { backgroundColor: color }
                      : undefined
                  }
                >
                  {label}
                </button>
              )
            })}
          </div>

          <div className="h-6 w-px bg-[#0C2340]/10" />

          {/* Category filter */}
          <div className="flex flex-wrap gap-1">
            {categoryOptions.map((c) => {
              const isActive = category === c
              const label = c === "ALL" ? "Categoria" : CATEGORY_LABELS[c]
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-3 py-2 rounded-lg text-[11px] tracking-wide font-semibold transition-all ${
                    isActive
                      ? "bg-[#0C2340] text-white"
                      : "text-[#475569] bg-[#f8fafc] hover:bg-[#e2e8f0]"
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>

          <div className="ml-auto">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as typeof sort)}
              className="bg-[#f1f5f9] border border-[#0C2340]/10 rounded-lg px-3 py-2 text-xs font-semibold text-[#0C2340] tracking-wide"
            >
              <option value="tier">Ordenar por Tier</option>
              <option value="price-asc">Menor preço</option>
              <option value="price-desc">Maior preço</option>
            </select>
          </div>
        </div>

        {/* Items count */}
        <div className="mb-6 text-sm font-mono tracking-wide text-[#64748b]">
          {String(items.length).padStart(2, "0")} / {String(LOJA_ITEMS.length).padStart(2, "0")} itens exibidos
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item) => {
            const tierInfo = TIER_LABELS[item.tier]
            return (
              <article
                key={item.id}
                className="group relative bg-white border border-[#0C2340]/10 rounded-2xl overflow-hidden hover:border-[#B8783D]/30 hover:shadow-[0_20px_40px_-20px_rgba(12,35,64,0.2)] hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Tier bar */}
                <div
                  className="h-1"
                  style={{ backgroundColor: tierInfo.accent }}
                />

                <div className="p-5">
                  {/* Meta header */}
                  <div className="flex items-center justify-between mb-3 text-[10px] font-mono tracking-[1.5px] uppercase">
                    <span className="font-bold" style={{ color: tierInfo.accent }}>
                      {item.tier} · {CATEGORY_LABELS[item.category]}
                    </span>
                    <span className="text-[#94a3b8]">{item.pages}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold leading-[1.15] text-[#0C2340] tracking-[-0.4px] mb-2">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs text-[#475569] leading-relaxed line-clamp-2 mb-4 font-medium">
                    {item.subtitle}
                  </p>

                  {/* Assets chips */}
                  {item.assets.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.assets.slice(0, 3).map((asset) => (
                        <span
                          key={asset}
                          className="text-[9px] font-mono tracking-wide px-1.5 py-0.5 rounded bg-[#f1f5f9] text-[#475569] border border-[#0C2340]/5"
                        >
                          {asset}
                        </span>
                      ))}
                      {item.assets.length > 3 && (
                        <span className="text-[9px] font-mono text-[#94a3b8] px-1.5 py-0.5">
                          +{item.assets.length - 3}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Formulas count */}
                  {item.formulas && (
                    <div className="flex items-center gap-2 mb-4 text-xs">
                      <span className="font-mono text-[#B8783D] font-bold">
                        {item.formulas}
                      </span>
                      <span className="text-[#64748b]">fórmulas magistrais</span>
                    </div>
                  )}

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#0C2340]/8">
                    <div>
                      {item.priceOriginal && (
                        <div className="text-[10px] text-[#94a3b8] line-through leading-none">
                          R$ {item.priceOriginal}
                        </div>
                      )}
                      <div className="font-serif text-xl text-[#0C2340] tracking-tight leading-none mt-0.5">
                        R$ {item.price}
                      </div>
                    </div>
                    <a
                      href="https://pay.hotmart.com/A105091762I"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 bg-[#0C2340] text-white px-3 py-2 rounded-lg font-bold text-[10px] tracking-[1.5px] uppercase hover:bg-[#B8783D] transition-colors"
                    >
                      Adquirir
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {items.length === 0 && (
          <div className="py-24 text-center text-[#64748b]">
            Nenhum item encontrado com esses filtros.
          </div>
        )}
      </div>
    </section>
  )
}
