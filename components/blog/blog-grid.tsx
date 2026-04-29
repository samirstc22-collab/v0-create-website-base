import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Clock, LayoutGrid } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import {
  MoleculeIllustration,
  FlaskIllustration,
  HexagonPattern,
} from "@/components/illustrations"

const AUTHOR_PHOTO =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_9390%20copiar-EsdoKTWVMwZx90EynnDjPAAJmGFgXd.jpg"

// Rotacao de ilustracoes para variar visualmente as capas
const decorations = [
  { Comp: MoleculeIllustration, accent: "#2dd4bf" },
  { Comp: FlaskIllustration, accent: "#e8a87c" },
  { Comp: HexagonPattern, accent: "#b87333" },
  { Comp: MoleculeIllustration, accent: "#86efd4" },
  { Comp: FlaskIllustration, accent: "#d4b98c" },
  { Comp: HexagonPattern, accent: "#7eb8ff" },
]

export function BlogGrid() {
  // Sem separacao por categoria — todos os artigos no mesmo mural
  const posts = blogPosts.filter((p) => !p.featured)

  return (
    <section className="relative bg-white py-24 lg:py-28">
      {/* Soft grid pattern */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.025]"
        aria-hidden="true"
      >
        <defs>
          <pattern id="muralGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0a1628" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#muralGrid)" />
      </svg>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header do mural */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-navy/[0.03] px-4 py-1.5">
              <LayoutGrid className="h-3.5 w-3.5 text-[#b87333]" />
              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-navy">
                Mural de publicações
              </span>
            </div>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-navy md:text-5xl">
              Todos os artigos em{" "}
              <span className="italic text-[#b87333]">um só lugar</span>
            </h2>
            <p className="mt-3 max-w-[580px] text-base leading-relaxed text-muted">
              Vitrine única, ordenada do mais recente ao mais antigo. Cada peça é assinada,
              datada e construída com referência peer-reviewed.
            </p>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-navy/[0.02] px-4 py-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-[#b87333]/40">
              <Image
                src={AUTHOR_PHOTO}
                alt="Samir Tannuri"
                fill
                className="object-cover object-[center_15%]"
                sizes="40px"
              />
            </div>
            <div className="text-left">
              <div className="text-[10px] font-bold uppercase tracking-[2px] text-muted">
                Curadoria & Autoria
              </div>
              <div className="text-sm font-semibold text-navy">Samir Tannuri</div>
            </div>
          </div>
        </div>

        {/* Mural de cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {posts.map((post, idx) => {
            const { Comp: Deco, accent } = decorations[idx % decorations.length]
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_6px_20px_rgba(11,29,53,0.04)] transition hover:-translate-y-1 hover:border-[#b87333]/30 hover:shadow-[0_18px_40px_rgba(11,29,53,0.1)]"
              >
                {/* Capa menor + ilustrada */}
                <div
                  className={`relative aspect-[5/4] overflow-hidden bg-gradient-to-br ${post.coverGradient}`}
                >
                  {/* Padroes ilustrativos sobrepostos para sensacao de "vitrine" */}
                  <div
                    aria-hidden
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage: `radial-gradient(circle at 20% 30%, ${accent}33 0%, transparent 45%), radial-gradient(circle at 80% 70%, ${accent}22 0%, transparent 50%)`,
                    }}
                  />

                  {/* Linhas decorativas */}
                  <svg
                    aria-hidden
                    className="absolute inset-0 h-full w-full opacity-[0.08]"
                  >
                    <defs>
                      <pattern
                        id={`coverGrid-${idx}`}
                        width="22"
                        height="22"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 22 0 L 0 0 0 22"
                          fill="none"
                          stroke="white"
                          strokeWidth="0.6"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#coverGrid-${idx})`} />
                  </svg>

                  {/* Ilustracao central */}
                  <Deco
                    className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 text-white/30 transition-transform duration-500 group-hover:scale-110"
                    style={{ color: accent }}
                  />

                  {/* Tag de categoria flutuante */}
                  <div className="absolute left-3 top-3 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 backdrop-blur-md">
                    <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-white">
                      {post.category}
                    </span>
                  </div>

                  {/* Selo DOI quando aplicavel */}
                  {post.doi && (
                    <div className="absolute right-3 top-3 rounded-md border border-[#86efd4]/40 bg-black/45 px-2 py-1 backdrop-blur-md">
                      <span className="text-[9px] font-bold uppercase tracking-[1.5px] text-[#86efd4]">
                        DOI
                      </span>
                    </div>
                  )}

                  {/* Vinheta inferior */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Corpo compacto */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-muted">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-muted" />
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-3 font-serif text-base leading-[1.25] tracking-tight text-navy transition group-hover:text-[#b87333] line-clamp-3">
                    {post.title}
                  </h3>

                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-navy/65 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Assinatura do autor — sempre Samir com foto */}
                  <div className="mt-5 flex items-center justify-between border-t border-black/5 pt-4">
                    <div className="flex items-center gap-2.5">
                      <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-[#b87333]/30">
                        <Image
                          src={AUTHOR_PHOTO}
                          alt="Samir Tannuri"
                          fill
                          className="object-cover object-[center_15%]"
                          sizes="32px"
                        />
                      </div>
                      <div className="leading-tight">
                        <div className="text-[11px] font-semibold text-navy">
                          Samir Tannuri
                        </div>
                        <div className="text-[10px] text-muted">Autor</div>
                      </div>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-[#b87333] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Empty state */}
        {posts.length === 0 && (
          <div className="mt-14 rounded-2xl border border-dashed border-navy/15 bg-navy/[0.02] py-16 text-center">
            <p className="text-sm text-muted">Nenhum artigo publicado ainda. Em breve.</p>
          </div>
        )}
      </div>
    </section>
  )
}
