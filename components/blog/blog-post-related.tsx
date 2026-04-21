import Link from "next/link"
import { ArrowUpRight, Clock } from "lucide-react"
import { getRecentPosts } from "@/lib/blog-data"
import { MoleculeIllustration, FlaskIllustration, HexagonPattern } from "@/components/illustrations"

const decorations = [MoleculeIllustration, FlaskIllustration, HexagonPattern]

export function BlogPostRelated({ currentSlug }: { currentSlug: string }) {
  const posts = getRecentPosts(currentSlug, 3)

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0a1628] px-4 py-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#e8a87c]">
                Continue lendo
              </span>
            </div>
            <h2 className="mt-5 font-serif text-3xl leading-tight tracking-tight text-navy md:text-4xl">
              Artigos relacionados
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#b87333] hover:text-[#a0632c]"
          >
            Ver todos os artigos
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, idx) => {
            const Deco = decorations[idx % decorations.length]
            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-[0_10px_25px_rgba(11,29,53,0.04)] transition hover:-translate-y-1 hover:border-[#b87333]/30 hover:shadow-[0_25px_60px_rgba(11,29,53,0.1)]"
              >
                <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${post.coverGradient}`}>
                  <Deco className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 text-white/15" />
                  <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1 backdrop-blur-xl">
                    <span className="text-[9px] font-bold uppercase tracking-[2px] text-white">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-wider text-muted">
                    <span>{post.date}</span>
                    <span className="h-1 w-1 rounded-full bg-muted" />
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mt-3 font-serif text-lg leading-[1.3] tracking-tight text-navy transition group-hover:text-[#b87333]">
                    {post.title}
                  </h3>

                  <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-5">
                    <span className="text-xs text-muted">Prof. Samir Tannuri</span>
                    <ArrowUpRight className="h-4 w-4 text-[#b87333] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
