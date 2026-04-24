import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, FileText } from "lucide-react"
import { getRecentPosts } from "@/lib/blog-data"
import { MoleculeIllustration, FlaskIllustration, HexagonPattern } from "./illustrations"

const decorations = [MoleculeIllustration, FlaskIllustration, HexagonPattern]

export function HomeBlogPreview() {
  const posts = getRecentPosts(undefined, 3)

  return (
    <section className="relative bg-off-white py-24 lg:py-32 overflow-hidden">
      {/* Subtle decorative pattern */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.02]" aria-hidden="true">
        <defs>
          <pattern id="homeBlogGrid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path d="M 44 0 L 0 0 0 44" fill="none" stroke="#0a1628" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#homeBlogGrid)" />
      </svg>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0a1628] px-4 py-1.5">
              <FileText className="h-3.5 w-3.5 text-[#e8a87c]" />
              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-white">
                Blog científico · Leitura técnica
              </span>
            </div>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight text-navy md:text-[52px]">
              Ciência aplicada, explicada com{" "}
              <span className="italic text-[#b87333]">clareza cirúrgica</span>.
            </h2>
            <p className="mt-5 max-w-[640px] text-base leading-relaxed text-muted md:text-lg">
              Uma biblioteca viva de revisões técnicas, protocolos testados no balcão e
              ensaios sobre o futuro da farmácia magistral e industrial brasileira.
            </p>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-6 py-3.5 text-sm font-semibold text-navy transition hover:border-[#b87333] hover:text-[#b87333]"
            >
              Explorar todos os artigos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Featured + list layout */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12">
          {/* Featured big card */}
          {posts[0] && (
            <Link
              href={`/blog/${posts[0].slug}`}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_20px_50px_rgba(11,29,53,0.06)] transition hover:-translate-y-1 hover:shadow-[0_35px_80px_rgba(11,29,53,0.12)] lg:col-span-7"
            >
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${posts[0].coverGradient}`}>
                <FlaskIllustration className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 text-white/15" />
                <MoleculeIllustration className="absolute right-8 top-8 h-24 w-24 text-white/20" />
                <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 backdrop-blur-xl">
                  <span className="text-[10px] font-bold uppercase tracking-[2px] text-white">
                    {posts[0].category}
                  </span>
                </div>
                {posts[0].doi && (
                  <div className="absolute bottom-6 left-6 rounded-xl border border-[#86efd4]/30 bg-black/50 px-3.5 py-2 backdrop-blur-xl">
                    <span className="font-mono text-[11px] font-semibold text-[#86efd4]">
                      DOI · {posts[0].doi}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-wider text-muted">
                  <span>{posts[0].date}</span>
                  <span className="h-1 w-1 rounded-full bg-muted" />
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {posts[0].readTime}
                  </span>
                </div>

                <h3 className="mt-3 font-serif text-2xl leading-[1.2] tracking-tight text-navy transition group-hover:text-[#b87333] md:text-3xl">
                  {posts[0].title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-navy/70">
                  {posts[0].excerpt.length > 200 ? `${posts[0].excerpt.slice(0, 200)}…` : posts[0].excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-6">
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-8 w-8 overflow-hidden rounded-full ring-1 ring-[#b87333]/20">
                      <Image
                        src="/images/samir-portrait-smile.jpg"
                        alt="Samir Tannuri"
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <span className="text-xs text-muted">Samir Tannuri</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#b87333]">
                    Ler artigo
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* Side list */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            {posts.slice(1).map((post, idx) => {
              const Deco = decorations[idx % decorations.length]
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex gap-5 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_10px_25px_rgba(11,29,53,0.04)] transition hover:-translate-y-0.5 hover:border-[#b87333]/30 hover:shadow-[0_20px_45px_rgba(11,29,53,0.1)]"
                >
                  <div className={`relative flex aspect-square h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${post.coverGradient}`}>
                    <Deco className="h-14 w-14 text-white/25" />
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.5px] text-[#b87333]">
                      <span>{post.category}</span>
                    </div>
                    <h4 className="mt-2 font-serif text-base leading-[1.3] tracking-tight text-navy transition group-hover:text-[#b87333]">
                      {post.title}
                    </h4>
                    <div className="mt-auto flex items-center gap-3 pt-3 text-[11px] font-medium text-muted">
                      <span>{post.date}</span>
                      <span className="h-1 w-1 rounded-full bg-muted" />
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
