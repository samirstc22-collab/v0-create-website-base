import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { PageLayout } from "@/components/page-layout"
import { BlogPostContent } from "@/components/blog/blog-post-content"
import { BlogPostRelated } from "@/components/blog/blog-post-related"
import { getPostBySlug, blogPosts } from "@/lib/blog-data"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return { title: "Artigo não encontrado" }
  return {
    title: `${post.title} — Blog Científico`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  return (
    <PageLayout>
      <BlogPostContent post={post} />
      <BlogPostRelated currentSlug={post.slug} />
    </PageLayout>
  )
}
