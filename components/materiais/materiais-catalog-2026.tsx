"use client"

import { useState } from "react"
import { ChevronDown, FileText, Sparkles } from "lucide-react"
import { TIERS, PROFILES, CATALOG_STATS } from "@/lib/catalog-2026"

export function MateriaisCatalog2026() {
  const [openTier, setOpenTier] = useState<string | null>("tier-1")

  return (
    <section className="bg-[#f8fafc] py-28 px-6 lg:px-10 relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(12,35,64,1) 1px, transparent 1px), linear-gradient(90deg, rgba(12,35,64,1) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="max-w-[1320px] mx-auto relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0C2340] text-white text-[10px] font-bold tracking-[3px] uppercase mb-6">
            <Sparkles className="w-3 h-3" />
            Catálogo Técnico 2026 · Edição Expandida
          </div>
          <h2 className="font-serif text-[clamp(36px,5vw,60px)] leading-[1.05] tracking-[-0.02em] text-[#0C2340] mb-6">
            Distribuição editorial organizada por{" "}
            <em className="text-[#B8783D]">grau de complexidade</em>.
          </h2>
          <p className="text-lg text-[#475569] leading-[1.7]">
            Sessenta e dois artefatos técnico-científicos distribuídos em sete tiers editoriais.
            Do formulário integrado de peptídeos (150p) às lâminas de consultório — cada peça escrita
            com rigor clínico, referência Vancouver e DOI validado.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {CATALOG_STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-[#e2e8f0] rounded-2xl p-5 text-center hover:border-[#B8783D]/40 transition-colors"
            >
              <div className="font-serif text-3xl text-[#0C2340] mb-1 tracking-tight">{stat.num}</div>
              <div className="text-[11px] tracking-[1.5px] uppercase text-[#64748b] font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Tier Accordion */}
        <div className="space-y-4 mb-24">
          {TIERS.map((tier) => {
            const isOpen = openTier === tier.id
            return (
              <div
                key={tier.id}
                className="bg-white rounded-2xl border overflow-hidden transition-all"
                style={{
                  borderColor: isOpen ? tier.accentBorder : "#e2e8f0",
                  boxShadow: isOpen ? `0 20px 50px -20px ${tier.accent}40` : "none",
                }}
              >
                {/* Tier Header */}
                <button
                  onClick={() => setOpenTier(isOpen ? null : tier.id)}
                  className="w-full flex items-center gap-5 p-5 md:p-7 text-left hover:bg-[#f8fafc] transition-colors"
                  aria-expanded={isOpen}
                >
                  {/* Tier Badge */}
                  <div
                    className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center text-lg md:text-xl font-bold font-serif"
                    style={{
                      backgroundColor: tier.accentBg,
                      color: tier.accent,
                      border: `1px solid ${tier.accentBorder}`,
                    }}
                  >
                    {tier.number}
                  </div>

                  {/* Title Stack */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                      <h3 className="font-serif text-xl md:text-2xl text-[#0C2340] leading-tight">
                        {tier.level}
                      </h3>
                      <span
                        className="text-[11px] tracking-[1.5px] uppercase font-bold"
                        style={{ color: tier.accent }}
                      >
                        {tier.size}
                      </span>
                    </div>
                    <p className="text-sm text-[#64748b] leading-relaxed hidden md:block">
                      {tier.description}
                    </p>
                  </div>

                  {/* Count + Chevron */}
                  <div className="shrink-0 flex items-center gap-4">
                    <div className="hidden sm:block text-right">
                      <div className="font-serif text-2xl text-[#0C2340]">{tier.items.length}</div>
                      <div className="text-[10px] tracking-[1.5px] uppercase text-[#94a3b8] font-bold">
                        obras
                      </div>
                    </div>
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center border transition-transform"
                      style={{
                        borderColor: tier.accentBorder,
                        color: tier.accent,
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
                    </div>
                  </div>
                </button>

                {/* Tier Items */}
                {isOpen && (
                  <div
                    className="border-t px-5 md:px-7 pb-7 pt-6"
                    style={{ borderColor: tier.accentBorder }}
                  >
                    {/* For Tier 1 (rich items) */}
                    {tier.id === "tier-1" && (
                      <div className="space-y-4">
                        {tier.items.map((item) => (
                          <article
                            key={item.num}
                            className="rounded-xl bg-[#f8fafc] border border-[#e2e8f0] p-5 md:p-6 hover:border-[#B8783D]/40 transition-colors"
                          >
                            <div className="flex items-start gap-4 mb-4">
                              <span
                                className="shrink-0 font-serif text-2xl font-semibold"
                                style={{ color: tier.accent }}
                              >
                                {String(item.num).padStart(2, "0")}
                              </span>
                              <div className="flex-1">
                                <h4 className="font-serif text-xl md:text-2xl text-[#0C2340] leading-tight mb-1">
                                  {item.title}
                                  {item.pages && (
                                    <span
                                      className="ml-3 text-xs px-2 py-1 rounded font-sans font-bold align-middle"
                                      style={{
                                        backgroundColor: tier.accentBg,
                                        color: tier.accent,
                                      }}
                                    >
                                      {item.pages}
                                    </span>
                                  )}
                                </h4>
                                {item.file && (
                                  <div className="flex items-center gap-2 text-xs font-mono text-[#94a3b8] mt-2">
                                    <FileText className="w-3 h-3" />
                                    {item.file}
                                    {item.size && <span className="text-[#cbd5e1]">· {item.size}</span>}
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-3 text-sm">
                              {item.activos && (
                                <DetailRow label="Ativos" value={item.activos} />
                              )}
                              {item.formulas && (
                                <DetailRow label="Fórmulas" value={item.formulas} />
                              )}
                              {item.protocolos && (
                                <DetailRow label="Protocolos" value={item.protocolos} />
                              )}
                              {item.indicacoes && (
                                <DetailRow label="Indicações" value={item.indicacoes} />
                              )}
                              {item.publico && (
                                <DetailRow label="Público" value={item.publico} />
                              )}
                            </div>
                          </article>
                        ))}
                      </div>
                    )}

                    {/* For T2/T7 (medium detail) */}
                    {(tier.id === "tier-2" || tier.id === "tier-7") && (
                      <div className="grid md:grid-cols-2 gap-3">
                        {tier.items.map((item) => (
                          <article
                            key={item.num}
                            className="rounded-xl bg-[#f8fafc] border border-[#e2e8f0] p-5 hover:border-[#B8783D]/40 transition-all hover:-translate-y-0.5"
                          >
                            <div className="flex items-baseline gap-3 mb-2">
                              <span
                                className="font-serif text-lg font-semibold"
                                style={{ color: tier.accent }}
                              >
                                {String(item.num).padStart(2, "0")}
                              </span>
                              <h4 className="font-serif text-lg text-[#0C2340] leading-tight flex-1">
                                {item.title}
                                {item.pages && (
                                  <span className="text-xs font-sans text-[#94a3b8] ml-2 font-normal">
                                    · {item.pages}
                                  </span>
                                )}
                              </h4>
                            </div>
                            {item.desc && (
                              <p className="text-sm text-[#475569] leading-relaxed pl-8">
                                {item.desc}
                              </p>
                            )}
                          </article>
                        ))}
                      </div>
                    )}

                    {/* For T3/T4 (compact grid) */}
                    {(tier.id === "tier-3" || tier.id === "tier-4") && (
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {tier.items.map((item) => (
                          <article
                            key={item.num}
                            className="rounded-xl bg-[#f8fafc] border border-[#e2e8f0] p-4 hover:border-[#B8783D]/40 transition-all hover:-translate-y-0.5 group"
                          >
                            <div className="flex items-baseline gap-2 mb-1.5">
                              <span
                                className="font-serif text-sm font-semibold"
                                style={{ color: tier.accent }}
                              >
                                {String(item.num).padStart(2, "0")}
                              </span>
                              <h4 className="font-serif text-base text-[#0C2340] leading-tight">
                                {item.title}
                                {item.pages && (
                                  <span className="text-[11px] font-sans text-[#94a3b8] ml-1.5 font-normal">
                                    · {item.pages}
                                  </span>
                                )}
                              </h4>
                            </div>
                            {item.desc && (
                              <p className="text-xs text-[#64748b] leading-relaxed">{item.desc}</p>
                            )}
                          </article>
                        ))}
                      </div>
                    )}

                    {/* For T5/T6 (badge list) */}
                    {(tier.id === "tier-5" || tier.id === "tier-6") && (
                      <div className="flex flex-wrap gap-2">
                        {tier.items.map((item) => (
                          <div
                            key={item.num}
                            className="px-4 py-2.5 rounded-lg text-sm font-semibold transition-all hover:-translate-y-0.5"
                            style={{
                              backgroundColor: tier.accentBg,
                              color: tier.accent,
                              border: `1px solid ${tier.accentBorder}`,
                            }}
                          >
                            <span className="font-mono text-xs opacity-60 mr-2">
                              {String(item.num).padStart(2, "0")}
                            </span>
                            {item.title}
                          </div>
                        ))}
                        {tier.id === "tier-6" && (
                          <div className="w-full mt-4 pt-4 border-t border-[#e2e8f0] text-xs text-[#64748b] font-mono">
                            Arquivo unificado:{" "}
                            <span className="text-[#0C2340] font-semibold">
                              LAMINAS_PEPTIDEOS_DERMATOLOGIA_A4H.pdf
                            </span>{" "}
                            · 26 páginas
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Distribution Matrix */}
        <div className="rounded-3xl bg-[#0C2340] p-10 md:p-14 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#B8783D]/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#0096B4]/10 blur-[120px]" />

          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] tracking-[3px] uppercase text-[#B8783D] font-bold">
                § MATRIZ DE DISTRIBUIÇÃO
              </span>
            </div>
            <h3 className="font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight mb-4 max-w-3xl">
              Cada perfil recebe o catálogo{" "}
              <em className="text-[#e8a87c]">desenhado para sua prática</em>.
            </h3>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mb-10">
              Dermatologista estético, consultor magistral, clínica laser ou docente — o acervo
              é recortado pelo uso clínico real. Sem excesso, sem lacuna.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PROFILES.map((profile) => (
                <article
                  key={profile.title}
                  className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 hover:bg-white/[0.07] hover:border-white/20 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-11 h-11 rounded-lg flex items-center justify-center font-bold text-sm"
                      style={{
                        backgroundColor: `${profile.accent}25`,
                        color: "#e8a87c",
                        border: `1px solid ${profile.accent}50`,
                      }}
                    >
                      {profile.icon}
                    </div>
                    <div>
                      <h4 className="font-serif text-lg leading-tight">{profile.title}</h4>
                      <p className="text-xs text-white/40 tracking-wide">{profile.subtitle}</p>
                    </div>
                  </div>
                  <dl className="space-y-2.5 text-xs">
                    <MatrixRow label="Tiers" value={profile.tiers} />
                    {profile.laminas && <MatrixRow label="Lâminas" value={profile.laminas} />}
                    {profile.formularios && (
                      <MatrixRow label="Formulários" value={profile.formularios} />
                    )}
                    {profile.pesquisa && <MatrixRow label="Pesquisa" value={profile.pesquisa} />}
                  </dl>
                </article>
              ))}
            </div>

            {/* Quality Checklist */}
            <div className="mt-12 pt-10 border-t border-white/10">
              <div className="text-[10px] tracking-[3px] uppercase text-[#B8783D] font-bold mb-5">
                § Checklist de Qualidade Garantida
              </div>
              <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-2.5 text-sm text-white/75">
                {[
                  "Concentrações exatas (%) e pH validados em toda fórmula",
                  "100% das referências científicas com DOI — zero invenção",
                  "Veículos por nome comercial ou INCI (não genérico)",
                  "Contraindicações e alertas em destaque clínico",
                  "Linguagem clínico-científica, sem adjetivos promocionais",
                  "Estrutura de 6 blocos: Contexto · Racional · Pré · Procedimento · Pós · Segurança",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 shrink-0 h-1.5 w-1.5 rounded-full bg-[#e8a87c]" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-[10px] tracking-[2px] uppercase text-[#94a3b8] font-bold mb-1">
        {label}
      </span>
      <span className="text-[#334155] leading-relaxed">{value}</span>
    </div>
  )
}

function MatrixRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[9px] tracking-[2px] uppercase text-white/40 font-bold mb-0.5">{label}</dt>
      <dd className="text-white/80 leading-relaxed">{value}</dd>
    </div>
  )
}
