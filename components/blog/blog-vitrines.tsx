"use client"

import Link from "next/link"
import { ArrowRight, Clock, FlaskConical, Microscope, Sparkles, BookOpen, Heart, Droplets } from "lucide-react"
import { blogPosts, blogCategories, type BlogCategory } from "@/lib/blog-data"
import { MoleculeIllustration, FlaskIllustration, HexagonPattern } from "@/components/illustrations"

const categoryMeta: Record<BlogCategory, { icon: typeof FlaskConical; color: string; gradient: string }> = {
  "Cosmetologia Avançada": {
    icon: FlaskConical,
    color: "#B8783D",
    gradient: "from-[#B8783D]/10 to-[#B8783D]/5",
  },
  "Dermocosmética": {
    icon: Heart,
    color: "#e63946",
    gradient: "from-[#e63946]/10 to-[#e63946]/5",
  },
  "Tricologia": {
    icon: Sparkles,
    color: "#8b5cf6",
    gradient: "from-[#8b5cf6]/10 to-[#8b5cf6]/5",
  },
  "Manipulação Magistral": {
    icon: Microscope,
    color: "#0096B4",
    gradient: "from-[#0096B4]/10 to-[#0096B4]/5",
  },
  "Gestão Magistral": {
    icon: BookOpen,
    color: "#059669",
    gradient: "from-[#059669]/10 to-[#059669]/5",
  },
  "Inovação Industrial": {
    icon: Droplets,
    color: "#f59e0b",
    gradient: "from-[#f59e0b]/10 to-[#f59e0b]/5",
  },
}

const decorations = [MoleculeIllustration, FlaskIllustration, HexagonPattern]

export function BlogVitrines() {
  // Group posts by category
  const postsByCategory = blogCategories.reduce((acc, cat) => {
    acc[cat] = blogPosts.filter((p) => p.category === cat).slice(0, 3)
    return acc
  }, {} as Record<BlogCategory, typeof blogPosts>)

  // Only show categories that have posts
  const categoriesWithPosts = blogCategories.filter((cat) => postsByCategory[cat].length > 0)

  return (
    <section className="relative bg-[#f8f9fa] py-24 lg:py-32">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0C2340 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0C2340]/15 bg-white px-4 py-2 mb-5 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#B8783D]" />
            <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#0C2340]">
              Vitrines Tematicas
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[#0C2340] leading-tight mb-4">
            Explore por <em className="text-[#B8783D]">area de conhecimento</em>
          </h2>
          <p className="max-w-2xl mx-auto text-[#64748b] text-lg leading-relaxed">
            Conteudo tecnico-cientifico organizado em vitrines para facilitar
            sua navegacao. Cada area com artigos aprofundados e referencias peer-reviewed.
          </p>
        </div>

        {/* Vitrines */}
        <div className="space-y-16">
          {categoriesWithPosts.map((category, catIdx) => {
            const meta = categoryMeta[category]
            if (!meta) {
              console.warn(`[v0] Missing metadata for category: ${category}`)
              return null
            }
            const posts = postsByCategory[category]
            const Icon = meta.icon

            return (
              <div key={category} className="relative">
                {/* Category header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: meta.color + "15" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: meta.color }} />
                    </div>
                    <div>
                      <h3 className="font-serif text-2xl text-[#0C2340]">{category}</h3>
                      <p className="text-sm text-[#64748b]">
                        {posts.length} artigo{posts.length !== 1 ? "s" : ""} disponivel{posts.length !== 1 ? "eis" : ""}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={`/blog?categoria=${encodeURIComponent(category)}`}
                    className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                    style={{ color: meta.color }}
                  >
                    Ver todos
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Posts row */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {posts.map((post, idx) => {
                    const Deco = decorations[idx % decorations.length]
                    return (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all"
                      >
                        {/* Cover */}
                        <div
                          className={`relative aspect-[16/9] overflow-hidden bg-gradient-to-br ${post.coverGradient}`}
                        >
                          <Deco className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 text-white/15" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </div>

                        {/* Body */}
                        <div className="flex flex-col flex-1 p-5">
                          <div className="flex items-center gap-2 text-[10px] font-medium text-[#94a3b8] uppercase tracking-wider mb-3">
                            <span>{post.date}</span>
                            <span className="h-1 w-1 rounded-full bg-[#94a3b8]" />
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {post.readTime}
                            </span>
                          </div>

                          <h4 className="font-serif text-lg text-[#0C2340] leading-snug mb-2 group-hover:text-[#B8783D] transition-colors line-clamp-2">
                            {post.title}
                          </h4>

                          <p className="text-sm text-[#64748b] leading-relaxed line-clamp-2 flex-1">
                            {post.excerpt}
                          </p>

                          <div className="mt-4 pt-4 border-t border-black/5 flex items-center justify-between">
                            <span className="text-xs text-[#94a3b8]">
                              Por <span className="font-semibold text-[#0C2340]">Samir Tannuri</span>
                            </span>
                            <span
                              className="text-xs font-semibold"
                              style={{ color: meta.color }}
                            >
                              Ler mais
                            </span>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
                </div>

                {/* Mobile "Ver todos" link */}
                <div className="mt-6 sm:hidden">
                  <Link
                    href={`/blog?categoria=${encodeURIComponent(category)}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold"
                    style={{ color: meta.color }}
                  >
                    Ver todos os artigos de {category}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Separator */}
                {catIdx < categoriesWithPosts.length - 1 && (
                  <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#0C2340]/10 to-transparent" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
