import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, BookMarked, Clock, Link2, Quote, Share2 } from "lucide-react"
import type { BlogPost } from "@/lib/blog-data"
import { MoleculeIllustration, FlaskIllustration } from "@/components/illustrations"

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <article>
      {/* Hero */}
      <header className={`relative overflow-hidden bg-gradient-to-br ${post.coverGradient} pt-36 pb-20 lg:pt-44 lg:pb-28`}>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-[10%] h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 left-[10%] h-96 w-96 rounded-full bg-black/20 blur-3xl" />
        </div>
        <MoleculeIllustration className="pointer-events-none absolute right-[6%] top-[22%] hidden h-56 w-56 text-white/15 lg:block" />
        <FlaskIllustration className="pointer-events-none absolute left-[4%] bottom-[8%] hidden h-48 w-48 text-white/10 lg:block" />

        <div className="relative mx-auto max-w-[900px] px-6 lg:px-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o blog
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="rounded-full border border-white/20 bg-black/30 px-4 py-1.5 backdrop-blur-xl">
              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-white">
                {post.category}
              </span>
            </div>
            {post.doi && (
              <div className="rounded-full border border-[#86efd4]/30 bg-[#2dd4bf]/10 px-4 py-1.5 backdrop-blur-xl">
                <span className="font-mono text-[11px] font-semibold text-[#86efd4]">
                  DOI: {post.doi}
                </span>
              </div>
            )}
          </div>

          <h1 className="mt-6 font-serif text-[clamp(32px,5vw,60px)] leading-[1.05] tracking-tight text-white">
            {post.title}
          </h1>

          <p className="mt-6 text-xl italic leading-relaxed text-white/80 md:text-2xl">
            {post.subtitle}
          </p>

          {/* Meta */}
          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/15 pt-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 font-serif text-lg text-[#e8a87c]">
                ST
              </div>
              <div>
                <div className="text-sm font-semibold text-white">{post.author}</div>
                <div className="text-xs text-white/60">{post.authorRole}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-wider text-white/60">
              <span>{post.date}</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="bg-off-white py-20 lg:py-28">
        <div className="mx-auto max-w-[820px] px-6 lg:px-10">
          {/* Excerpt highlight */}
          <div className="mb-14 rounded-2xl border-l-4 border-[#b87333] bg-white p-8 shadow-[0_12px_30px_rgba(11,29,53,0.05)]">
            <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-[#b87333]">
              Resumo executivo
            </div>
            <p className="mt-3 text-lg leading-relaxed text-navy">{post.excerpt}</p>
          </div>

          {/* Sections */}
          <div className="space-y-14">
            {post.content.map((section, idx) => (
              <section key={idx}>
                <h2 className="font-serif text-3xl leading-tight tracking-tight text-navy md:text-4xl">
                  {section.heading}
                </h2>

                <div className="mt-6 space-y-5">
                  {section.paragraphs.map((p, i) => (
                    <p
                      key={i}
                      className="text-lg leading-[1.75] text-navy/80"
                    >
                      {p}
                    </p>
                  ))}
                </div>

                {section.list && (
                  <ul className="mt-8 space-y-3 rounded-2xl border border-black/5 bg-white p-7 shadow-[0_10px_25px_rgba(11,29,53,0.04)]">
                    {section.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-base leading-relaxed text-navy/85">
                        <span className="mt-2 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#b87333]/15 font-serif text-sm font-semibold text-[#b87333]">
                          {i + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.highlight && (
                  <div className="mt-8 flex gap-4 rounded-2xl bg-[#0a1628] p-8 text-white md:gap-6 md:p-10">
                    <Quote className="h-8 w-8 shrink-0 text-[#e8a87c]" />
                    <blockquote className="font-serif text-xl leading-[1.5] italic md:text-2xl">
                      {section.highlight}
                    </blockquote>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* References */}
          {post.references && post.references.length > 0 && (
            <div className="mt-16 rounded-2xl border border-black/5 bg-white p-8 shadow-[0_10px_25px_rgba(11,29,53,0.04)]">
              <div className="flex items-center gap-2">
                <BookMarked className="h-5 w-5 text-[#b87333]" />
                <h3 className="font-serif text-xl text-navy">Referências</h3>
              </div>
              <ol className="mt-5 space-y-3 text-sm leading-relaxed text-navy/70">
                {post.references.map((ref, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 font-mono text-xs text-muted">[{i + 1}]</span>
                    {ref.url ? (
                      <a
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-navy/80 underline decoration-[#b87333]/30 underline-offset-4 transition hover:decoration-[#b87333]"
                      >
                        {ref.label}
                        <Link2 className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <span>{ref.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Tags + author card */}
          <div className="mt-14 grid gap-6 md:grid-cols-[2fr,1fr]">
            <div className="rounded-2xl border border-black/5 bg-white p-7 shadow-[0_10px_25px_rgba(11,29,53,0.04)]">
              <div className="text-xs font-bold uppercase tracking-[2px] text-muted">
                Tags do artigo
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-navy/10 bg-navy/[0.03] px-3.5 py-1.5 text-xs font-medium text-navy/70"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-7 shadow-[0_10px_25px_rgba(11,29,53,0.04)]">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-[#b87333]/30">
                <Image
                  src="/images/samir-portrait-smile.jpg"
                  alt="Samir Tannuri"
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[2px] text-[#b87333]">
                  Autor
                </div>
                <div className="mt-1 font-serif text-base text-navy">{post.author}</div>
                <div className="text-xs text-muted">{post.authorRole}</div>
              </div>
            </div>
          </div>

          {/* Share */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white p-6 shadow-[0_10px_25px_rgba(11,29,53,0.04)] sm:flex-row">
            <div className="inline-flex items-center gap-2 text-sm font-semibold text-navy">
              <Share2 className="h-4 w-4 text-[#b87333]" />
              Gostou do artigo? Compartilhe com sua equipe.
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-[#b87333] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#a0632c]"
            >
              Explorar mais artigos
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
