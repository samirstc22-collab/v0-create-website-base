"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { ArrowUpRight, Clock, Filter } from "lucide-react"
import { blogPosts, blogCategories, type BlogCategory } from "@/lib/blog-data"
import { MoleculeIllustration, FlaskIllustration, HexagonPattern } from "@/components/illustrations"

const decorations = [MoleculeIllustration, FlaskIllustration, HexagonPattern]

export function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "Todos">("Todos")

  const filteredPosts = useMemo(() => {
    const list = activeCategory === "Todos"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory)
    return list.filter((p) => !p.featured)
  }, [activeCategory])

  return (
    <section className="relative bg-white py-24 lg:py-32">
      {/* Soft grid pattern */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.025]" aria-hidden="true">
        <defs>
          <pattern id="gridLight" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0a1628" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#gridLight)" />
      </svg>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-navy/[0.03] px-4 py-1.5">
              <Filter className="h-3.5 w-3.5 text-[#b87333]" />
              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-navy">
                Arquivo completo
              </span>
            </div>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-navy md:text-5xl">
              Navegue por{" "}
              <span className="italic text-[#b87333]">área de conhecimento</span>
            </h2>
            <p className="mt-3 max-w-[580px] text-base leading-relaxed text-muted">
              Filtre por categoria e encontre exatamente o conteúdo que sua farmácia, indústria
              ou laboratório precisa hoje.
            </p>
          </div>
        </div>

        {/* Category filters */}
        <div className="mt-10 flex flex-wrap gap-2">
          {(["Todos", ...blogCategories] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as BlogCategory | "Todos")}
              className={`rounded-full border px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === cat
                  ? "border-[#b87333] bg-[#b87333] text-white shadow-[0_8px_24px_rgba(184,115,51,0.3)]"
                  : "border-navy/15 bg-white text-navy/75 hover:border-navy/30 hover:bg-navy/[0.03]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post, idx) => {
            const Deco = decorations[idx % decorations.length]
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_10px_30px_rgba(11,29,53,0.04)] transition hover:-translate-y-1 hover:border-[#b87333]/30 hover:shadow-[0_25px_60px_rgba(11,29,53,0.1)]"
              >
                {/* Cover */}
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${post.coverGradient}`}>
                  <Deco className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 text-white/15" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 backdrop-blur-xl">
                    <span className="text-[9px] font-bold uppercase tracking-[2px] text-white">
                      {post.category}
                    </span>
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-wider text-muted">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-muted" />
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-xl leading-[1.25] tracking-tight text-navy transition group-hover:text-[#b87333]">
                    {post.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-navy/65">
                    {post.excerpt.length > 160 ? `${post.excerpt.slice(0, 160)}…` : post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-5">
                    <div className="text-xs text-muted">
                      Por <span className="font-semibold text-navy">Prof. Samir Tannuri</span>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-[#b87333] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Empty state */}
        {filteredPosts.length === 0 && (
          <div className="mt-14 rounded-2xl border border-dashed border-navy/15 bg-navy/[0.02] py-16 text-center">
            <p className="text-sm text-muted">
              Nenhum artigo nesta categoria ainda. Em breve.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
