import Link from "next/link"
import { ArrowRight, Award, Clock } from "lucide-react"
import { getFeaturedPost } from "@/lib/blog-data"
import { MoleculeIllustration, FlaskIllustration } from "@/components/illustrations"

export function BlogFeatured() {
  const post = getFeaturedPost()
  if (!post) return null

  return (
    <section className="relative bg-off-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Section label */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0a1628] px-4 py-1.5">
              <Award className="h-3.5 w-3.5 text-[#e8a87c]" />
              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-white">
                Publicação em destaque
              </span>
            </div>
            <h2 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-navy md:text-5xl">
              Artigo científico indexado
            </h2>
            <p className="mt-3 max-w-[560px] text-base leading-relaxed text-muted">
              Nosso conteúdo mais denso do trimestre — leitura longa, referências completas
              e protocolo aplicável já na próxima jornada no balcão.
            </p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[#b87333] transition hover:text-[#a0632c]"
          >
            Ver todos os artigos
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Featured card */}
        <Link
          href={`/blog/${post.slug}`}
          className="group mt-12 block overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_30px_80px_rgba(11,29,53,0.08)] transition hover:shadow-[0_40px_100px_rgba(11,29,53,0.14)]"
        >
          <div className="grid lg:grid-cols-12">
            {/* Visual */}
            <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${post.coverGradient} lg:col-span-6 lg:aspect-auto`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <FlaskIllustration className="h-80 w-80 text-white/15" />
              </div>
              <MoleculeIllustration className="absolute right-8 top-8 h-32 w-32 text-white/20" />

              {/* Category chip */}
              <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 backdrop-blur-xl">
                <span className="text-[10px] font-bold uppercase tracking-[2px] text-white">
                  {post.category}
                </span>
              </div>

              {/* DOI badge */}
              {post.doi && (
                <div className="absolute bottom-6 left-6 rounded-xl border border-white/15 bg-black/50 px-4 py-3 backdrop-blur-xl">
                  <div className="text-[9px] font-bold uppercase tracking-[2.5px] text-[#86efd4]">
                    Indexação internacional
                  </div>
                  <div className="mt-1 font-mono text-sm text-white">DOI: {post.doi}</div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between gap-8 p-8 lg:col-span-6 lg:p-14">
              <div>
                <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-wider text-muted">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-muted" />
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-3xl leading-[1.15] tracking-tight text-navy transition group-hover:text-[#b87333] md:text-4xl">
                  {post.title}
                </h3>

                <p className="mt-4 text-lg italic leading-relaxed text-[#b87333]/90">
                  {post.subtitle}
                </p>

                <p className="mt-5 text-base leading-relaxed text-navy/75">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-navy/10 bg-navy/[0.03] px-3 py-1 text-xs font-medium text-navy/70"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-black/5 pt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-serif text-[#e8a87c]">
                    ST
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-navy">{post.author}</div>
                    <div className="text-xs text-muted">{post.authorRole}</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#b87333]">
                  Ler artigo completo
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}
