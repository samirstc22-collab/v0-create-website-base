import Link from "next/link"
import { ArrowUpRight, Check, Star } from "lucide-react"
import { LOJA_ITEMS, TIER_LABELS } from "@/lib/loja-data"

export function LojaFeatured() {
  const featured = LOJA_ITEMS.filter((item) => item.featured).slice(0, 3)

  return (
    <section className="bg-[#f5f1e8] py-20 lg:py-28 border-y border-[#0C2340]/10">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-[#B8783D]" />
              <span className="text-[10px] tracking-[3px] uppercase text-[#B8783D] font-bold">
                § Destaques da Vitrine
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#0C2340] tracking-[-0.02em] leading-[1.02]">
              Os três <em className="italic text-[#B8783D]">essenciais</em> do seu balcão.
            </h2>
          </div>
          <div className="text-sm text-[#475569] max-w-md leading-relaxed">
            Obras forjadas em mais de uma década de bancada, pesquisa e consultório.{" "}
            <strong className="text-[#0C2340]">Leitura obrigatória</strong> para quem prescreve,
            manipula ou vende dermatologia magistral.
          </div>
        </div>

        {/* Featured cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((item) => {
            const tier = TIER_LABELS[item.tier]
            return (
              <article
                key={item.id}
                className="group relative bg-white border border-[#0C2340]/8 rounded-2xl overflow-hidden hover:border-[#B8783D]/40 hover:shadow-[0_30px_60px_-20px_rgba(12,35,64,0.25)] transition-all duration-300"
              >
                {/* Top strip */}
                <div
                  className="flex items-center justify-between px-5 py-3 text-[10px] font-bold tracking-[2px] uppercase text-white"
                  style={{ backgroundColor: tier.color }}
                >
                  <span>{item.tier} · {tier.label}</span>
                  {item.badge && (
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {item.badge}
                    </span>
                  )}
                </div>

                <div className="p-6">
                  {/* Pages */}
                  <div className="text-[10px] tracking-[1.5px] uppercase text-[#94a3b8] font-semibold mb-3">
                    {item.pages} {item.size && `· ${item.size}`}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold leading-[1.12] text-[#0C2340] tracking-[-0.5px] mb-3">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-sm text-[#475569] leading-relaxed mb-5 font-medium">{item.subtitle}</p>

                  {/* Assets */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.assets.slice(0, 4).map((asset) => (
                      <span
                        key={asset}
                        className="text-[10px] font-mono tracking-wide px-2 py-1 rounded bg-[#f1f5f9] text-[#0C2340] border border-[#0C2340]/10"
                      >
                        {asset}
                      </span>
                    ))}
                  </div>

                  {/* Audience */}
                  <div className="pt-4 border-t border-[#0C2340]/8">
                    <div className="text-[10px] tracking-[1.5px] uppercase text-[#94a3b8] font-bold mb-2">
                      Para quem
                    </div>
                    <ul className="space-y-1 mb-6">
                      {item.audience.slice(0, 2).map((aud) => (
                        <li key={aud} className="flex items-start gap-2 text-xs text-[#334155]">
                          <Check className="w-3 h-3 mt-0.5 shrink-0 text-[#16a34a]" />
                          {aud}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price + CTA */}
                  <div className="flex items-end justify-between pt-4 border-t border-[#0C2340]/8">
                    <div>
                      {item.priceOriginal && (
                        <div className="text-xs text-[#94a3b8] line-through">
                          R$ {item.priceOriginal}
                        </div>
                      )}
                      <div className="font-serif text-3xl text-[#0C2340] tracking-tight leading-none">
                        R$ {item.price}
                      </div>
                      <div className="text-[10px] tracking-[1px] uppercase text-[#64748b] font-semibold mt-1">
                        ou 12× de R$ {(item.price / 12).toFixed(0)}
                      </div>
                    </div>
                    <a
                      href="https://pay.hotmart.com/A105091762I"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-2 bg-[#0C2340] text-white px-5 py-3 rounded-xl font-bold text-xs tracking-wide hover:bg-[#B8783D] transition-colors"
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

        {/* Bottom ribbon */}
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="#catalog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0C2340] hover:text-[#B8783D] transition-colors group"
          >
            Ver catálogo completo (60+ artefatos)
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}
